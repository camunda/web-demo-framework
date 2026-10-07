import{d as n}from"./index-DxOIRNbF.js";import"./vendor-react-9Ma26nY1.js";import"./vendor-design-system-CvQWH-OK.js";const t=`<?xml version="1.0" encoding="UTF-8"?>
<!--
  Ported from camunda/camunda-8-tutorials/examples/event-driven-agent
  (models/fraud-alert-triage-agent.bpmn). Upstream element ids and names are
  kept wherever the engine allowed them.

  See index.ts for the divergences from upstream and why each one exists.
-->
<bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" xmlns:zeebe="http://camunda.org/schema/zeebe/1.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bioc="http://bpmn.io/schema/bpmn/biocolor/1.0" xmlns:color="http://www.omg.org/spec/BPMN/non-normative/color/1.0" xmlns:modeler="http://camunda.org/schema/modeler/1.0" id="Definitions_FraudAlertTriageAgent" targetNamespace="http://bpmn.io/schema/bpmn" exporter="Camunda Modeler" exporterVersion="5.49.0" modeler:executionPlatform="Camunda Cloud" modeler:executionPlatformVersion="8.10.0">
  <bpmn:message id="Message_FraudAlert" name="fraud-alert">
    <bpmn:extensionElements>
      <zeebe:subscription correlationKey="=customerId" />
    </bpmn:extensionElements>
  </bpmn:message>
  <bpmn:process id="fraud-alert-triage-agent" name="Fraud Alert Triage Agent (Event-Driven Agent)" isExecutable="true">
    <bpmn:startEvent id="StartEvent_FraudAlertWebhook" name="Fraud alert received">
      <bpmn:documentation>The only way into this process - there is no start form. Fires whenever the (fictional) real-time transaction-monitoring system posts a fraud alert. The same endpoint is reused for every alert on the same customer: a message start event with a required correlation key (customerId) means the very first alert for a customer starts a new instance, while any later alert for that same customer, while the case is still open, correlates straight into the running instance instead - this is native Zeebe message correlation, not custom "if already running" logic. No polling, no scheduled job.</bpmn:documentation>
      <bpmn:outgoing>Flow_ToSnapshot</bpmn:outgoing>
      <bpmn:messageEventDefinition id="MsgDef_FraudAlertStart" messageRef="Message_FraudAlert" />
    </bpmn:startEvent>
    <bpmn:sequenceFlow id="Flow_ToSnapshot" sourceRef="StartEvent_FraudAlertWebhook" targetRef="SnapshotOriginalAlert" />
    <bpmn:scriptTask id="SnapshotOriginalAlert" name="Snapshot original alert">
      <bpmn:documentation>Freezes a copy of the alert that actually started this instance, under separate "original*" variable names. If a second alert later correlates into the interrupting boundary event below, it overwrites the plain alertId/merchantName/etc. variables with its own data - this snapshot is what lets the handoff form still show what was originally under investigation.</bpmn:documentation>
      <bpmn:incoming>Flow_ToSnapshot</bpmn:incoming>
      <bpmn:outgoing>Flow_ToAgent</bpmn:outgoing>
    </bpmn:scriptTask>
    <bpmn:sequenceFlow id="Flow_ToAgent" sourceRef="SnapshotOriginalAlert" targetRef="FraudInvestigationAgent" />
    <bpmn:adHocSubProcess id="FraudInvestigationAgent" name="Fraud Investigation Agent" zeebe:modelerTemplate="io.camunda.connectors.agenticai.aiagent.jobworker.v1" zeebe:modelerTemplateVersion="10">
      <bpmn:documentation>Investigates the alert (transaction cross-reference, currency conversion, optionally a human analyst's opinion) and decides whether it can be cleared automatically or should be escalated. It can be interrupted at any moment - whether it is mid tool-call or waiting on the analyst - by a second real-time alert for the same customer; when that happens, everything the agent was doing (including a pending human task) is abandoned and the case goes straight to card-freeze and human handoff.</bpmn:documentation>
      <bpmn:extensionElements>
        <zeebe:adHoc outputCollection="toolCallResults" outputElement="={&#10;  id: toolCall._meta.id,&#10;  name: toolCall._meta.name,&#10;  content: toolCallResult&#10;}" />
        <zeebe:taskDefinition type="io.camunda.agenticai:aiagent-job-worker:1" retries="3" />
        <zeebe:ioMapping>
          <zeebe:input source="openaiCompatible" target="provider.type" />
          <zeebe:input source="{{secrets.CAMUNDA_PROVIDED_LLM_API_ENDPOINT}}" target="provider.openaiCompatible.endpoint" />
          <zeebe:input source="{{secrets.CAMUNDA_PROVIDED_LLM_API_KEY}}" target="provider.openaiCompatible.authentication.apiKey" />
          <zeebe:input source="{{secrets.CAMUNDA_PROVIDED_LLM_DEFAULT_MODEL}}" target="provider.openaiCompatible.model.model" />
          <zeebe:input source="=&#34;You are a demo fraud-investigation assistant. A real-time transaction-monitoring system has already scored this alert and handed it to you to investigate before it either closes automatically or gets escalated to card-freeze and the fraud team.&#10;&#10;You must invoke tools using the actual tool-calling mechanism available to you - never describe or simulate a tool call in your plain-text response, and never invent, guess, or fabricate what a tool would return.&#10;&#10;Investigation steps:&#10;1. Always call CrossReferenceTransactionHistory first, with the customer identifier and the card&#39;s last four digits, copied exactly as the alert states them. This is the same full-account, all-linked-cards history lookup the real fraud platform runs on every alert - it is deliberately slow, and that is expected, not an error.&#10;2. If the transaction currency is not already USD, call ConvertToBaseCurrency to get the USD-equivalent amount before you reason about the amount. Never estimate a conversion yourself.&#10;3. Weigh the case using relatedAlerts90d, the riskScore, and the USD amount:&#10;   - Clearly low risk (relatedAlerts90d is 0, riskScore is under 40, and the USD amount is under 1000): your outcome is &#39;clear&#39;.&#10;   - Clearly high risk (relatedAlerts90d is 2 or more, or riskScore is 70 or above, or the USD amount is 5000 or above): your outcome is &#39;escalate&#39;.&#10;   - Anything in between is genuinely ambiguous. You may call AskFraudAnalyst to get a second opinion from a human before deciding - this is entirely your own judgment call, not a requirement, and you keep the final decision either way. If you ask and get no response in time, you will be told so; use your own judgment instead.&#10;4. Once you&#39;ve reached a conclusion, call RecordInvestigationOutcome as your last tool call - that is the only way your decision is recorded: &#39;investigationOutcome&#39; must be &#39;clear&#39; or &#39;escalate&#39;, and &#39;investigationSummary&#39; should be a short explanation mentioning the riskScore, relatedAlerts90d, the USD amount you used, and whether you consulted the analyst.&#10;&#10;A second real-time alert for this same customer can arrive at any moment and cancel this investigation outright, including while you are waiting on the analyst. The process handles that itself - there is nothing special for you to do about it.&#34;" target="data.systemPrompt.prompt" />
          <zeebe:input source="=&#34;Fraud alert under investigation:&#10;Alert: &#34; + originalAlertId + &#34;&#10;Customer: &#34; + originalCustomerId + &#34;&#10;Card ending: &#34; + originalCardLast4 + &#34;&#10;Transaction amount: &#34; + string(originalTransactionAmount) + &#34; &#34; + originalTransactionCurrency + &#34;&#10;Merchant: &#34; + originalMerchantName + &#34; (&#34; + originalMerchantCountry + &#34;)&#10;Monitoring system risk score: &#34; + string(originalRiskScore) + &#34;&#10;Alert reason: &#34; + originalAlertReason + &#34;&#10;&#10;Investigate this alert and give your final decision.&#34;" target="data.userPrompt.prompt" />
          <zeebe:input target="agentContext" />
          <zeebe:input source="in-process" target="data.memory.storage.type" />
          <zeebe:input source="=20" target="data.memory.contextWindowSize" />
          <zeebe:input source="=10" target="data.limits.maxModelCalls" />
          <zeebe:input source="WAIT_FOR_TOOL_CALL_RESULTS" target="data.events.behavior" />
          <zeebe:input source="json" target="data.response.format.type" />
          <zeebe:input source="FraudInvestigationOutcome" target="data.response.format.schemaName" />
          <zeebe:input source="=false" target="data.response.includeAssistantMessage" />
          <zeebe:input source="=false" target="data.response.includeAgentContext" />
          <zeebe:input target="agent" />
          <zeebe:output source="=agent" target="agent" />
        </zeebe:ioMapping>
        <zeebe:taskHeaders>
          <zeebe:header key="elementTemplateVersion" value="10" />
          <zeebe:header key="elementTemplateId" value="io.camunda.connectors.agenticai.aiagent.jobworker.v1" />
          <zeebe:header key="retryBackoff" value="PT30S" />
        </zeebe:taskHeaders>
      </bpmn:extensionElements>
      <bpmn:incoming>Flow_ToAgent</bpmn:incoming>
      <bpmn:outgoing>Flow_ToOutcomeGateway</bpmn:outgoing>
      <bpmn:serviceTask id="CrossReferenceTransactionHistory" name="Cross-reference transaction history" zeebe:modelerTemplate="io.camunda.connectors.HttpJson.v2" zeebe:modelerTemplateVersion="13">
        <bpmn:documentation>Simulates the fraud platform's full-history cross-reference: the enterprise lookup across every account and card linked to the customer. It is deliberately slow - that is the window in which a second real-time alert for the same customer can arrive and interrupt the agent mid-investigation. The related-alert count itself is computed deterministically from the customer identifier so the demo is reproducible.</bpmn:documentation>
        <bpmn:extensionElements>
          <zeebe:taskDefinition type="io.camunda:http-json:1" retries="2" />
          <zeebe:ioMapping>
            <zeebe:input source="=false" target="ignoreNullValues" />
            <zeebe:input source="noAuth" target="authentication.type" />
            <zeebe:input source="GET" target="method" />
            <zeebe:input source="https://httpbin.io/delay/8" target="url" />
            <zeebe:input source="={&#10;  customerId: fromAi(toolCall.alertCustomerId, &#34;The customer identifier the alert names, copied exactly as written.&#34;, &#34;string&#34;),&#10;  cardLast4: fromAi(toolCall.alertCardLast4, &#34;The last four digits of the card in the alerted transaction, copied exactly as written.&#34;, &#34;string&#34;)&#10;}" target="queryParameters" />
            <zeebe:input source="=false" target="storeResponse" />
            <zeebe:input source="=15" target="connectionTimeoutInSeconds" />
            <zeebe:input source="=15" target="readTimeoutInSeconds" />
          </zeebe:ioMapping>
          <zeebe:taskHeaders>
            <zeebe:header key="elementTemplateVersion" value="13" />
            <zeebe:header key="elementTemplateId" value="io.camunda.connectors.HttpJson.v2" />
            <zeebe:header key="retryBackoff" value="PT5S" />
          </zeebe:taskHeaders>
        </bpmn:extensionElements>
      </bpmn:serviceTask>
      <bpmn:serviceTask id="ConvertToBaseCurrency" name="Convert to base currency" zeebe:modelerTemplate="io.camunda.connectors.HttpJson.v2" zeebe:modelerTemplateVersion="13">
        <bpmn:documentation>Converts a non-USD transaction amount to USD via the free, public frankfurter.app exchange-rate API (European Central Bank reference rates, no key required), so the agent's USD-amount thresholds are comparing like with like.</bpmn:documentation>
        <bpmn:extensionElements>
          <zeebe:taskDefinition type="io.camunda:http-json:1" retries="2" />
          <zeebe:ioMapping>
            <zeebe:input source="=false" target="ignoreNullValues" />
            <zeebe:input source="noAuth" target="authentication.type" />
            <zeebe:input source="GET" target="method" />
            <zeebe:input source="https://api.frankfurter.app/latest" target="url" />
            <zeebe:input source="={&#10;  amount: fromAi(toolCall.amount, &#34;The transaction amount in its original currency, as a plain number with no currency symbol and no thousands separators.&#34;, &#34;number&#34;),&#10;  from: fromAi(toolCall.fromCurrency, &#34;The transaction&#39;s original currency as a three-letter ISO-4217 code, taken from the alert.&#34;, &#34;string&#34;),&#10;  to: &#34;USD&#34;&#10;}" target="queryParameters" />
            <zeebe:input source="=false" target="storeResponse" />
            <zeebe:input source="=20" target="connectionTimeoutInSeconds" />
            <zeebe:input source="=20" target="readTimeoutInSeconds" />
          </zeebe:ioMapping>
          <zeebe:taskHeaders>
            <zeebe:header key="elementTemplateVersion" value="13" />
            <zeebe:header key="elementTemplateId" value="io.camunda.connectors.HttpJson.v2" />
            <zeebe:header key="retryBackoff" value="PT5S" />
          </zeebe:taskHeaders>
        </bpmn:extensionElements>
      </bpmn:serviceTask>
      <bpmn:subProcess id="AskFraudAnalyst" name="Ask fraud analyst">
        <bpmn:documentation>Call this only when the case is genuinely ambiguous and you want a second opinion before deciding - it is entirely your own judgment call, not a requirement, and you keep the final decision either way. This pauses for a human response, but only for a limited time: see the attached timer. If nobody answers in time, you will be told so and should proceed on your own judgment instead of waiting further.</bpmn:documentation>
        <bpmn:extensionElements>
          <zeebe:ioMapping>
            <zeebe:input source="=fromAi(toolCall.question, &#34;What you want the analyst to weigh in on.&#34;, &#34;string&#34;)" target="analystQuestion" />
            <zeebe:input source="=fromAi(toolCall.context, &#34;A short summary of what you&#39;ve found so far and why the case is ambiguous.&#34;, &#34;string&#34;)" target="analystConsultContext" />
          </zeebe:ioMapping>
        </bpmn:extensionElements>
        <bpmn:startEvent id="AskFraudAnalyst_Start">
          <bpmn:outgoing>Flow_ToConsult</bpmn:outgoing>
        </bpmn:startEvent>
        <bpmn:sequenceFlow id="Flow_ToConsult" sourceRef="AskFraudAnalyst_Start" targetRef="ConsultFraudAnalyst" />
        <bpmn:userTask id="ConsultFraudAnalyst" name="Consult fraud analyst">
          <bpmn:documentation>The human step the agent chose to take. It sees the agent's own question and its summary so far, answers, and the answer goes back to the agent as this tool's result - advisory only: the agent still makes the final call.</bpmn:documentation>
          <bpmn:extensionElements>
            <zeebe:userTask />
            <zeebe:formDefinition formId="fraud-analyst-consult" />
            <zeebe:ioMapping>
              <zeebe:output source="=&#34;Analyst assessment: &#34; + analystAssessment + &#34;. Notes: &#34; + (if analystNotes != null then analystNotes else &#34;(none)&#34;)" target="toolCallResult" />
            </zeebe:ioMapping>
          </bpmn:extensionElements>
          <bpmn:incoming>Flow_ToConsult</bpmn:incoming>
          <bpmn:outgoing>Flow_ConsultToEnd</bpmn:outgoing>
        </bpmn:userTask>
        <bpmn:boundaryEvent id="Boundary_AnalystTimeout" name="No response in time" attachedToRef="ConsultFraudAnalyst">
          <bpmn:documentation>Demo timer: 2 minutes, standing in for a real SLA (e.g. 4 hours) on how long the agent will wait for a human opinion before moving on with its own judgment. A timer event, just like the message events elsewhere in this process, is a first-class BPMN construct here - not a poll loop the agent has to run itself.</bpmn:documentation>
          <bpmn:outgoing>Flow_ToAnalystTimeout</bpmn:outgoing>
          <bpmn:timerEventDefinition id="TimerDef_AnalystTimeout">
            <bpmn:timeDuration xsi:type="bpmn:tFormalExpression">PT2M</bpmn:timeDuration>
          </bpmn:timerEventDefinition>
        </bpmn:boundaryEvent>
        <bpmn:sequenceFlow id="Flow_ConsultToEnd" sourceRef="ConsultFraudAnalyst" targetRef="AskFraudAnalyst_End" />
        <bpmn:endEvent id="AskFraudAnalyst_End" name="Analyst answered">
          <bpmn:incoming>Flow_ConsultToEnd</bpmn:incoming>
        </bpmn:endEvent>
        <bpmn:sequenceFlow id="Flow_ToAnalystTimeout" sourceRef="Boundary_AnalystTimeout" targetRef="RecordAnalystTimeout" />
        <bpmn:scriptTask id="RecordAnalystTimeout" name="Record analyst timeout">
          <bpmn:documentation>Reported back to the agent as the result of AskFraudAnalyst when the timer wins the race - the agent is expected to proceed on its own judgment from here.</bpmn:documentation>
          <bpmn:incoming>Flow_ToAnalystTimeout</bpmn:incoming>
          <bpmn:outgoing>Flow_TimeoutToEnd</bpmn:outgoing>
        </bpmn:scriptTask>
        <bpmn:sequenceFlow id="Flow_TimeoutToEnd" sourceRef="RecordAnalystTimeout" targetRef="AskFraudAnalyst_TimedOut" />
        <bpmn:endEvent id="AskFraudAnalyst_TimedOut" name="No answer in time">
          <bpmn:incoming>Flow_TimeoutToEnd</bpmn:incoming>
        </bpmn:endEvent>
      </bpmn:subProcess>
      <bpmn:scriptTask id="RecordInvestigationOutcome" name="Record investigation outcome">
        <bpmn:documentation>Call this once you have reached your conclusion, as your last tool call. It records your decision and a short summary of why; the process routes the case on what this records.</bpmn:documentation>
        <bpmn:extensionElements>
          <zeebe:script expression="=if lower case(trim(proposedOutcome)) = &#34;clear&#34; then &#34;clear&#34; else &#34;escalate&#34;" resultVariable="recordedOutcome" />
          <zeebe:ioMapping>
            <zeebe:input source="=fromAi(toolCall.investigationOutcome, &#34;Your decision: &#39;clear&#39; or &#39;escalate&#39;.&#34;, &#34;string&#34;)" target="proposedOutcome" />
            <zeebe:input source="=fromAi(toolCall.investigationSummary, &#34;A short explanation mentioning the risk score, the related alerts in the last 90 days, the dollar amount you used, and whether you consulted the analyst.&#34;, &#34;string&#34;)" target="proposedSummary" />
            <zeebe:output source="=recordedOutcome" target="investigationOutcome" />
            <zeebe:output source="=proposedSummary" target="investigationSummary" />
            <zeebe:output source="=&#34;Recorded outcome: &#34; + recordedOutcome" target="toolCallResult" />
          </zeebe:ioMapping>
        </bpmn:extensionElements>
      </bpmn:scriptTask>
    </bpmn:adHocSubProcess>
    <bpmn:boundaryEvent id="Boundary_SecondAlert" name="Second real-time alert (same customer)" attachedToRef="FraudInvestigationAgent">
      <bpmn:documentation>No connector, no separate webhook, no separate URL - this is a bare BPMN interrupting message boundary event, subscribed to the same "fraud-alert" message and the same customerId correlation key as the start event. As long as this agent instance is running (whether it is mid tool-call, or its own analyst consultation is open), a matching subscription is open here. When a second alert for this customerId is published while this instance is active, Zeebe's message correlation prefers this already-open subscription over starting a new instance, so the same "fraud alert received" endpoint that started the case can also interrupt it - the external system never needs to know or care which one to call for a follow-up. Structurally, no path exists from the agent to anywhere except through this event once it fires: whatever the agent was doing, including a pending human task, is cancelled unconditionally.</bpmn:documentation>
      <bpmn:outgoing>Flow_InterruptToMerge</bpmn:outgoing>
      <bpmn:messageEventDefinition id="MsgDef_SecondAlert" messageRef="Message_FraudAlert" />
    </bpmn:boundaryEvent>
    <bpmn:sequenceFlow id="Flow_ToOutcomeGateway" sourceRef="FraudInvestigationAgent" targetRef="Gateway_InvestigationOutcome" />
    <bpmn:exclusiveGateway id="Gateway_InvestigationOutcome" name="Investigation outcome?" default="Flow_Escalate">
      <bpmn:incoming>Flow_ToOutcomeGateway</bpmn:incoming>
      <bpmn:outgoing>Flow_Clear</bpmn:outgoing>
      <bpmn:outgoing>Flow_Escalate</bpmn:outgoing>
    </bpmn:exclusiveGateway>
    <bpmn:sequenceFlow id="Flow_Clear" name="clear" sourceRef="Gateway_InvestigationOutcome" targetRef="CloseAlertNotification">
      <bpmn:conditionExpression xsi:type="bpmn:tFormalExpression">=investigationOutcome = "clear"</bpmn:conditionExpression>
    </bpmn:sequenceFlow>
    <bpmn:serviceTask id="CloseAlertNotification" name="Close alert notification" zeebe:modelerTemplate="io.camunda.connectors.HttpJson.v2" zeebe:modelerTemplateVersion="13">
      <bpmn:documentation>Posts the automatic clearance to the (fictional) customer-notification and case-management system. Reachable only when the agent itself concluded the alert could be cleared.</bpmn:documentation>
      <bpmn:extensionElements>
        <zeebe:taskDefinition type="io.camunda:http-json:1" retries="2" />
        <zeebe:ioMapping>
          <zeebe:input source="noAuth" target="authentication.type" />
          <zeebe:input source="POST" target="method" />
          <zeebe:input source="https://httpbin.io/post" target="url" />
          <zeebe:input source="=false" target="storeResponse" />
          <zeebe:input source="=false" target="followRedirects" />
          <zeebe:input source="=20" target="connectionTimeoutInSeconds" />
          <zeebe:input source="=20" target="readTimeoutInSeconds" />
          <zeebe:input source="=false" target="ignoreNullValues" />
        </zeebe:ioMapping>
        <zeebe:taskHeaders>
          <zeebe:header key="elementTemplateVersion" value="13" />
          <zeebe:header key="elementTemplateId" value="io.camunda.connectors.HttpJson.v2" />
          <zeebe:header key="retryBackoff" value="PT5S" />
        </zeebe:taskHeaders>
      </bpmn:extensionElements>
      <bpmn:incoming>Flow_Clear</bpmn:incoming>
      <bpmn:outgoing>Flow_ToAlertClearedEnd</bpmn:outgoing>
    </bpmn:serviceTask>
    <bpmn:sequenceFlow id="Flow_ToAlertClearedEnd" sourceRef="CloseAlertNotification" targetRef="EndEvent_AlertCleared" />
    <bpmn:endEvent id="EndEvent_AlertCleared" name="Alert cleared automatically">
      <bpmn:incoming>Flow_ToAlertClearedEnd</bpmn:incoming>
    </bpmn:endEvent>
    <bpmn:sequenceFlow id="Flow_Escalate" name="escalate" sourceRef="Gateway_InvestigationOutcome" targetRef="Gateway_HandoffMerge" />
    <bpmn:sequenceFlow id="Flow_InterruptToMerge" sourceRef="Boundary_SecondAlert" targetRef="Gateway_HandoffMerge" />
    <bpmn:exclusiveGateway id="Gateway_HandoffMerge" name="Escalated (either path)">
      <bpmn:documentation>Plain merge, no condition: joins the two ways a case can reach the fraud team - the agent escalating on its own (possibly after consulting the analyst), or the interrupt event firing because a second real-time alert arrived for the same customer.</bpmn:documentation>
      <bpmn:incoming>Flow_Escalate</bpmn:incoming>
      <bpmn:incoming>Flow_InterruptToMerge</bpmn:incoming>
      <bpmn:outgoing>Flow_ToFreezeCard</bpmn:outgoing>
    </bpmn:exclusiveGateway>
    <bpmn:sequenceFlow id="Flow_ToFreezeCard" sourceRef="Gateway_HandoffMerge" targetRef="FreezeCard" />
    <bpmn:serviceTask id="FreezeCard" name="Freeze card" zeebe:modelerTemplate="io.camunda.connectors.HttpJson.v2" zeebe:modelerTemplateVersion="13">
      <bpmn:documentation>Posts the card-freeze instruction to the (fictional) card-management system. Reachable only via an escalated path - either the agent's own decision or the interrupt event - never automatically for a case the agent cleared. Also computes handoffTrigger/handoffReason itself (no separate "prepare summary" step needed): if investigationOutcome is set, the agent reached its final answer normally, so this is the agent's own escalation; if it is still unset, the ad-hoc sub-process was cancelled before it got there, so this is the interrupt.</bpmn:documentation>
      <bpmn:extensionElements>
        <zeebe:taskDefinition type="io.camunda:http-json:1" retries="2" />
        <zeebe:ioMapping>
          <zeebe:input source="noAuth" target="authentication.type" />
          <zeebe:input source="POST" target="method" />
          <zeebe:input source="https://httpbin.io/post" target="url" />
          <zeebe:input source="=false" target="storeResponse" />
          <zeebe:input source="=false" target="followRedirects" />
          <zeebe:input source="=20" target="connectionTimeoutInSeconds" />
          <zeebe:input source="=20" target="readTimeoutInSeconds" />
          <zeebe:input source="=false" target="ignoreNullValues" />
        </zeebe:ioMapping>
        <zeebe:taskHeaders>
          <zeebe:header key="elementTemplateVersion" value="13" />
          <zeebe:header key="elementTemplateId" value="io.camunda.connectors.HttpJson.v2" />
          <zeebe:header key="retryBackoff" value="PT5S" />
        </zeebe:taskHeaders>
      </bpmn:extensionElements>
      <bpmn:incoming>Flow_ToFreezeCard</bpmn:incoming>
      <bpmn:outgoing>Flow_ToHandoffTask</bpmn:outgoing>
    </bpmn:serviceTask>
    <bpmn:sequenceFlow id="Flow_ToHandoffTask" sourceRef="FreezeCard" targetRef="FraudTeamHandoff" />
    <bpmn:userTask id="FraudTeamHandoff" name="Fraud team case handoff">
      <bpmn:documentation>Where every escalated case lands. The card is already frozen; this is the fraud team closing the case out, with the original alert, the reason it is here, and - when a second alert interrupted the investigation - the alert that triggered the escalation.</bpmn:documentation>
      <bpmn:extensionElements>
        <zeebe:userTask />
        <zeebe:formDefinition formId="fraud-team-handoff" />
      </bpmn:extensionElements>
      <bpmn:incoming>Flow_ToHandoffTask</bpmn:incoming>
      <bpmn:outgoing>Flow_HandoffToEnd</bpmn:outgoing>
    </bpmn:userTask>
    <bpmn:sequenceFlow id="Flow_HandoffToEnd" sourceRef="FraudTeamHandoff" targetRef="EndEvent_Escalated" />
    <bpmn:endEvent id="EndEvent_Escalated" name="Escalated - card frozen">
      <bpmn:incoming>Flow_HandoffToEnd</bpmn:incoming>
    </bpmn:endEvent>
  </bpmn:process>
  <bpmndi:BPMNDiagram id="BPMNDiagram_1">
    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="fraud-alert-triage-agent">
      <bpmndi:BPMNShape id="StartEvent_FraudAlertWebhook_di" bpmnElement="StartEvent_FraudAlertWebhook" bioc:stroke="#0d4372" bioc:fill="#bbdefb" color:background-color="#bbdefb" color:border-color="#0d4372">
        <dc:Bounds x="152" y="222" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="143" y="265" width="54" height="27" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="SnapshotOriginalAlert_di" bpmnElement="SnapshotOriginalAlert">
        <dc:Bounds x="240" y="200" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="FraudInvestigationAgent_di" bpmnElement="FraudInvestigationAgent" isExpanded="true">
        <dc:Bounds x="400" y="80" width="760" height="420" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="CrossReferenceTransactionHistory_di" bpmnElement="CrossReferenceTransactionHistory">
        <dc:Bounds x="440" y="120" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="ConvertToBaseCurrency_di" bpmnElement="ConvertToBaseCurrency">
        <dc:Bounds x="440" y="250" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="AskFraudAnalyst_di" bpmnElement="AskFraudAnalyst" isExpanded="true">
        <dc:Bounds x="600" y="110" width="520" height="240" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="AskFraudAnalyst_Start_di" bpmnElement="AskFraudAnalyst_Start">
        <dc:Bounds x="632" y="152" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="ConsultFraudAnalyst_di" bpmnElement="ConsultFraudAnalyst" bioc:stroke="#0d4372" bioc:fill="#bbdefb" color:background-color="#bbdefb" color:border-color="#0d4372">
        <dc:Bounds x="720" y="130" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Boundary_AnalystTimeout_di" bpmnElement="Boundary_AnalystTimeout" bioc:stroke="#0d4372" bioc:fill="#bbdefb" color:background-color="#bbdefb" color:border-color="#0d4372">
        <dc:Bounds x="752" y="192" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="672" y="199" width="74" height="27" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="AskFraudAnalyst_End_di" bpmnElement="AskFraudAnalyst_End">
        <dc:Bounds x="882" y="152" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="864" y="195" width="73" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="RecordAnalystTimeout_di" bpmnElement="RecordAnalystTimeout">
        <dc:Bounds x="860" y="250" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="AskFraudAnalyst_TimedOut_di" bpmnElement="AskFraudAnalyst_TimedOut">
        <dc:Bounds x="1022" y="272" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="1003" y="315" width="76" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="RecordInvestigationOutcome_di" bpmnElement="RecordInvestigationOutcome">
        <dc:Bounds x="860" y="380" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="Flow_ToConsult_di" bpmnElement="Flow_ToConsult">
        <di:waypoint x="668" y="170" />
        <di:waypoint x="720" y="170" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_ConsultToEnd_di" bpmnElement="Flow_ConsultToEnd">
        <di:waypoint x="820" y="170" />
        <di:waypoint x="882" y="170" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_ToAnalystTimeout_di" bpmnElement="Flow_ToAnalystTimeout">
        <di:waypoint x="770" y="228" />
        <di:waypoint x="770" y="290" />
        <di:waypoint x="860" y="290" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_TimeoutToEnd_di" bpmnElement="Flow_TimeoutToEnd">
        <di:waypoint x="960" y="290" />
        <di:waypoint x="1022" y="290" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="Boundary_SecondAlert_di" bpmnElement="Boundary_SecondAlert" bioc:stroke="#831311" bioc:fill="#ffcdd2" color:background-color="#ffcdd2" color:border-color="#831311">
        <dc:Bounds x="682" y="482" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="656" y="525" width="89" height="40" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Gateway_InvestigationOutcome_di" bpmnElement="Gateway_InvestigationOutcome" isMarkerVisible="true">
        <dc:Bounds x="1220" y="215" width="50" height="50" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="1205" y="177" width="81" height="27" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="CloseAlertNotification_di" bpmnElement="CloseAlertNotification">
        <dc:Bounds x="1330" y="130" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="EndEvent_AlertCleared_di" bpmnElement="EndEvent_AlertCleared">
        <dc:Bounds x="1482" y="152" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="1466" y="195" width="69" height="27" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Gateway_HandoffMerge_di" bpmnElement="Gateway_HandoffMerge" isMarkerVisible="true">
        <dc:Bounds x="1220" y="595" width="50" height="50" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="1208" y="652" width="75" height="27" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="FreezeCard_di" bpmnElement="FreezeCard">
        <dc:Bounds x="1330" y="580" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="FraudTeamHandoff_di" bpmnElement="FraudTeamHandoff" bioc:stroke="#0d4372" bioc:fill="#bbdefb" color:background-color="#bbdefb" color:border-color="#0d4372">
        <dc:Bounds x="1490" y="580" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="EndEvent_Escalated_di" bpmnElement="EndEvent_Escalated">
        <dc:Bounds x="1652" y="602" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="1640" y="645" width="62" height="27" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="Flow_ToSnapshot_di" bpmnElement="Flow_ToSnapshot">
        <di:waypoint x="188" y="240" />
        <di:waypoint x="240" y="240" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_ToAgent_di" bpmnElement="Flow_ToAgent">
        <di:waypoint x="340" y="240" />
        <di:waypoint x="400" y="240" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_ToOutcomeGateway_di" bpmnElement="Flow_ToOutcomeGateway">
        <di:waypoint x="1160" y="240" />
        <di:waypoint x="1220" y="240" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_Clear_di" bpmnElement="Flow_Clear">
        <di:waypoint x="1245" y="215" />
        <di:waypoint x="1245" y="170" />
        <di:waypoint x="1330" y="170" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="1253" y="148" width="26" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_ToAlertClearedEnd_di" bpmnElement="Flow_ToAlertClearedEnd">
        <di:waypoint x="1430" y="170" />
        <di:waypoint x="1482" y="170" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_Escalate_di" bpmnElement="Flow_Escalate">
        <di:waypoint x="1245" y="265" />
        <di:waypoint x="1245" y="595" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="1253" y="421" width="41" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_InterruptToMerge_di" bpmnElement="Flow_InterruptToMerge">
        <di:waypoint x="700" y="518" />
        <di:waypoint x="700" y="620" />
        <di:waypoint x="1220" y="620" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_ToFreezeCard_di" bpmnElement="Flow_ToFreezeCard">
        <di:waypoint x="1270" y="620" />
        <di:waypoint x="1330" y="620" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_ToHandoffTask_di" bpmnElement="Flow_ToHandoffTask">
        <di:waypoint x="1430" y="620" />
        <di:waypoint x="1490" y="620" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_HandoffToEnd_di" bpmnElement="Flow_HandoffToEnd">
        <di:waypoint x="1590" y="620" />
        <di:waypoint x="1652" y="620" />
      </bpmndi:BPMNEdge>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</bpmn:definitions>
`,a=[{text:`# The agent wants a second opinion

The agent decided this case was ambiguous enough to ask a human before deciding. This is its own judgment call, not a mandatory checkpoint - it still makes the final decision. You have a limited time to respond (see the process for the exact SLA); if you don't answer in time, the agent proceeds on its own.`,type:"text",layout:{row:"Row_heading",columns:null},id:"Field_ConsultHeading"},{text:`**Alert:** {{originalAlertId}} - {{originalMerchantName}} ({{originalMerchantCountry}})

**Customer:** {{customerId}} (card ending {{originalCardLast4}})

**Amount:** {{originalTransactionAmount}} {{originalTransactionCurrency}}

**Monitoring system risk score:** {{originalRiskScore}}

**Alert reason:** {{originalAlertReason}}`,type:"text",layout:{row:"Row_alertFacts",columns:null},id:"Field_AlertFacts"},{text:`**Agent's question:** {{analystQuestion}}

**Agent's own summary so far:** {{analystConsultContext}}`,type:"text",layout:{row:"Row_context",columns:null},id:"Field_ConsultContext"},{label:"Your assessment",values:[{label:"Looks legitimate",value:"looks-legitimate"},{label:"Looks suspicious",value:"looks-suspicious"},{label:"Not enough information to tell",value:"insufficient-info"}],type:"radio",layout:{row:"Row_assessment",columns:null},id:"Field_AnalystAssessment",key:"analystAssessment",validate:{required:!0}},{label:"Notes for the agent",description:"Optional - anything you want the agent to factor into its decision.",type:"textarea",layout:{row:"Row_notes",columns:null},id:"Field_AnalystNotes",key:"analystNotes"}],o="default",r="fraud-analyst-consult",i="Camunda Cloud",s="8.10.0",d={name:"Camunda Modeler",version:"5.46.1"},l=19,c={components:a,type:o,id:r,executionPlatform:i,executionPlatformVersion:s,exporter:d,schemaVersion:l},m=[{text:`# Fraud team case handoff

The card has already been frozen. This case reached the fraud team via **{{handoffTrigger}}** - close it out below.`,type:"text",layout:{row:"Row_heading",columns:null},id:"Field_HandoffHeading"},{text:`**Original alert under investigation:** {{originalAlertId}} - {{originalMerchantName}} ({{originalMerchantCountry}}), {{originalTransactionAmount}} {{originalTransactionCurrency}}

**Customer:** {{customerId}} (card ending {{originalCardLast4}})

**Why this case is here:** {{handoffReason}}`,type:"text",layout:{row:"Row_findings",columns:null},id:"Field_HandoffFindings"},{text:`**If a second alert interrupted the investigation, this is the one that triggered it:**

**Current alert:** {{currentAlertId}} - {{merchantName}} ({{merchantCountry}}), {{transactionAmount}} {{transactionCurrency}}, card ending {{currentCardLast4}}`,type:"text",layout:{row:"Row_current_alert",columns:null},id:"Field_CurrentAlert"},{label:"Case closing notes",description:"How the fraud team resolved this case (e.g. new card issued, dispute filed, customer contacted).",type:"textarea",layout:{row:"Row_case_notes",columns:null},id:"Field_CaseClosedNotes",key:"caseClosedNotes",validate:{required:!0}}],u="default",p="fraud-team-handoff",h="Camunda Cloud",b="8.10.0",g={name:"Camunda Modeler",version:"5.46.1"},y=19,f={components:m,type:u,id:p,executionPlatform:h,executionPlatformVersion:b,exporter:g,schemaVersion:y},e={alertId:"ALERT-6602",customerId:"CUST-40101",cardLast4:"7788",transactionAmount:2200,transactionCurrency:"USD",merchantName:"Sunset Auto Parts",merchantCountry:"United States",riskScore:52,alertReason:"Slightly elevated amount for a returning merchant category; one related alert in the past quarter that was previously dismissed as a false positive."},w=`async (job) => {
  const v = job.variables;

  // Step 4 has run: the decision is recorded, so there is nothing left to do.
  if (v.investigationOutcome !== undefined && v.investigationOutcome !== null) {
    return { completionConditionFulfilled: true };
  }

  // Step 1 — always cross-reference first. Every threshold below reads
  // relatedAlerts90d, so there is nothing to weigh until this has run.
  if (v.relatedAlerts90d === undefined) {
    return {
      variables: {
        alertCustomerId: String(v.originalCustomerId || ""),
        alertCardLast4: String(v.originalCardLast4 || ""),
      },
      activateElements: [{ elementId: "CrossReferenceTransactionHistory" }],
    };
  }

  const currency = String(v.originalTransactionCurrency || "USD");

  // Step 2 — the thresholds are in USD, so a foreign-currency amount has to be
  // converted before it can be compared. The prompt forbids estimating it.
  if (currency !== "USD" && v.convertedAmountUSD === undefined) {
    return {
      variables: {
        amount: Number(v.originalTransactionAmount),
        fromCurrency: currency,
      },
      activateElements: [{ elementId: "ConvertToBaseCurrency" }],
    };
  }

  const usd =
    currency === "USD"
      ? Number(v.originalTransactionAmount)
      : Number(v.convertedAmountUSD);
  const related = Number(v.relatedAlerts90d);
  const risk = Number(v.originalRiskScore);
  const facts =
    "risk score " + risk + ", " + related + " related alert(s) in 90 days, " +
    usd + " USD";

  // Recorded through the same tool a live brain has to call — there is no
  // other way for its decision to reach the gateway.
  const decide = (outcome, why) => ({
    variables: { investigationOutcome: outcome, investigationSummary: why },
    activateElements: [{ elementId: "RecordInvestigationOutcome" }],
  });

  // Step 3 — the two hard thresholds, exactly as the prompt states them.
  if (related === 0 && risk < 40 && usd < 1000) {
    return decide(
      "clear",
      "Cleared automatically (" + facts + "): every low-risk threshold met, analyst not consulted."
    );
  }
  if (related >= 2 || risk >= 70 || usd >= 5000) {
    return decide(
      "escalate",
      "Escalated automatically (" + facts + "): at least one high-risk threshold breached, analyst not consulted."
    );
  }

  // Neither bucket. This is the case the prompt calls genuinely ambiguous, and
  // asking a human is the agent's own call — the diagram would let it decide
  // here and stop.
  if (v.analystAssessment === undefined && v.analystTimedOut === undefined) {
    return {
      variables: {
        question:
          "This alert sits between our automatic thresholds - does it look like fraud to you?",
        context:
          "So far: " + facts + ". Merchant " + String(v.originalMerchantName) +
          " in " + String(v.originalMerchantCountry) +
          ". The monitoring system said: " + String(v.originalAlertReason),
      },
      activateElements: [{ elementId: "AskFraudAnalyst" }],
    };
  }

  // The timer won the race. The prompt's instruction for this is to proceed on
  // its own judgment, so it does — leaning on the score it already has rather
  // than waiting longer or defaulting to one answer regardless of the case.
  if (v.analystTimedOut) {
    return risk >= 50
      ? decide(
          "escalate",
          "Escalated (" + facts + "): no analyst response within the SLA window, and the score is high enough not to close this unseen."
        )
      : decide(
          "clear",
          "Cleared (" + facts + "): no analyst response within the SLA window, and nothing in the case warrants holding it open."
        );
  }

  // The analyst answered. Advisory, not binding — but a human who looked at
  // this and was unsure is a reason to escalate, not a reason to close.
  const assessment = String(v.analystAssessment);
  if (assessment === "looks-legitimate") {
    return decide(
      "clear",
      "Cleared (" + facts + "): analyst consulted and assessed the transaction as legitimate."
    );
  }
  return decide(
    "escalate",
    "Escalated (" + facts + "): analyst consulted and returned '" + assessment + "'."
  );
}`,v=`async (job, { trace }) => {
  // Upstream's zeebe:script plus nine output mappings. Freezes the alert that
  // actually started this instance: a second alert correlating into
  // Boundary_SecondAlert overwrites the plain alertId/merchantName/… variables
  // with its own, and the handoff form still has to show what was originally
  // under investigation.
  const v = job.variables;
  trace("snapshotting " + String(v.alertId) + " for " + String(v.customerId));

  return {
    originalAlertId: v.alertId,
    originalCustomerId: v.customerId,
    originalCardLast4: v.cardLast4,
    originalTransactionAmount: v.transactionAmount,
    originalTransactionCurrency: v.transactionCurrency,
    originalMerchantName: v.merchantName,
    originalMerchantCountry: v.merchantCountry,
    originalRiskScore: v.riskScore,
    originalAlertReason: v.alertReason,
  };
}`,T=`async (job, { text, sleep, trace }) => {
  // Stands in for the HTTP connector's deliberately slow httpbin.io /delay/8
  // call — the fraud platform's lookup across every account and card linked to
  // the customer. Shorter here: the interrupt in this demo is a button, not a
  // race against an eight-second request.
  const customerId = text("alertCustomerId", "");
  const cardLast4 = text("alertCardLast4", "");

  await sleep(1200);

  // Upstream's modulo(number(substring(customerId, 6)), 4), kept exactly so a
  // given customer behaves the same way on a real cluster and here.
  const digits = Number(customerId.replace(/\\D/g, ""));
  const relatedAlerts90d = Number.isFinite(digits) ? digits % 4 : 0;
  trace(customerId + " → " + relatedAlerts90d + " related alert(s) in 90 days");

  return {
    relatedAlerts90d: relatedAlerts90d,
    toolCallResult:
      "Cross-referenced " + customerId + " (card ending " + cardLast4 +
      ") across all linked accounts and cards: " + relatedAlerts90d +
      " related fraud alert(s) in the last 90 days.",
  };
}`,A=`async (job, { num, text, sleep, trace }) => {
  // Stands in for the HTTP connector calling api.frankfurter.app (ECB
  // reference rates). No network in a sandboxed browser demo, so use a small
  // fixed rate table — the shape of the answer is what matters here.
  const amount = num("amount");
  const from = text("fromCurrency", "USD");
  const rates = { USD: 1, EUR: 1.09, GBP: 1.27, NOK: 0.103, JPY: 0.0067 };
  const rate = rates[from];

  await sleep(300);

  if (!rate) {
    trace("no reference rate for " + JSON.stringify(from));
    return { toolCallResult: "No ECB reference rate available for " + from + "." };
  }

  const usd = Math.round(amount * rate * 100) / 100;
  trace(amount + " " + from + " → " + usd + " USD");

  return {
    convertedAmountUSD: usd,
    toolCallResult:
      "Converted " + amount + " " + from + " to " + usd + " USD (ECB reference rate).",
  };
}`,E=`async (job, { text, trace }) => {
  // The agent's last tool call, and the only way its decision reaches
  // Gateway_InvestigationOutcome. Mirrors the element's zeebe:script: anything
  // that isn't exactly 'clear' escalates ("clearly fraudulent" included), since
  // a fraud case closed by mistake costs more than one a human looks at twice.
  const proposed = text("proposedOutcome", "").trim().toLowerCase();
  const recordedOutcome = proposed === "clear" ? "clear" : "escalate";
  if (proposed !== recordedOutcome) {
    trace("model said " + JSON.stringify(proposed) + " — recorded '" + recordedOutcome + "'");
  }
  return { recordedOutcome: recordedOutcome };
}`,_=`async (job, { trace }) => {
  // Reached only from the timer boundary event on the analyst consultation.
  // Its whole job is to hand the timeout back to the agent as the result of
  // its own AskFraudAnalyst call, so "nobody answered" arrives as information
  // the agent can act on rather than as a failure.
  trace("no analyst response within the SLA window");

  return {
    analystTimedOut: true,
    toolCallResult:
      "No analyst response within the SLA window; proceed with your own judgment.",
  };
}`,C=`async (job, { text, sleep, trace }) => {
  // Stands in for the HTTP connector posting to the customer-notification and
  // case-management system. Reachable only from the "clear" branch of
  // Gateway_InvestigationOutcome — a case the agent decided to close.
  const alertId = text("originalAlertId", "");
  await sleep(300);
  trace("closed " + alertId + " with no human involvement");

  return {
    closureNotice: {
      alertId: alertId,
      customerId: text("customerId", ""),
      investigationOutcome: text("investigationOutcome", ""),
      investigationSummary: text("investigationSummary", ""),
      closedAt: "2026-01-01T00:00:00Z",
    },
  };
}`,S=`async (job, { text, sleep, trace }) => {
  // Stands in for the HTTP connector posting to the card processor, and
  // computes the handoff explanation on the way past (upstream does both on
  // this one task too). Reachable only via an escalated path — the agent's own
  // decision, or the interrupt — never for a case the agent cleared.
  const v = job.variables;

  // Which of the two paths got here, read off the diagram's own state rather
  // than from a flag something had to remember to set: a second alert
  // correlating into Boundary_SecondAlert overwrites alertId, while the
  // snapshot taken at the start keeps the original.
  const interrupted = v.alertId !== v.originalAlertId;

  await sleep(300);
  trace(interrupted ? "frozen after a second alert interrupted the agent" : "frozen on the agent's own escalation");

  return {
    cardFrozen: true,
    handoffTrigger: interrupted ? "second-alert-interrupt" : "agent-escalation",
    handoffReason: interrupted
      ? "A second real-time alert for the same customer arrived while the first was still under investigation (possible card-testing / impossible-travel pattern) - the investigation was abandoned and the case escalated immediately, regardless of what the agent had concluded so far."
      : "Agent escalated after investigation: " + text("investigationSummary", ""),
    // What the handoff form shows as "the alert that triggered this", which is
    // the second one when there was one and the original otherwise.
    currentAlertId: text("alertId", ""),
    currentCardLast4: text("cardLast4", ""),
  };
}`,N={...n,bpmn:t,forms:{"fraud-analyst-consult":c,"fraud-team-handoff":f},seed:e,autostart:!1,scenariosLabel:"Fraud alert",scenarios:[{label:"Ambiguous — between both thresholds",variables:e},{label:"Clearly cleared — low score, no history",variables:{alertId:"ALERT-6601",customerId:"CUST-40100",cardLast4:"2210",transactionAmount:145.5,transactionCurrency:"USD",merchantName:"Riverside Coffee Roasters",merchantCountry:"United States",riskScore:38,alertReason:"New merchant category for this customer, amount is modest relative to typical spend."}},{label:"Clearly escalated — three related alerts",variables:{alertId:"ALERT-6603",customerId:"CUST-40103",cardLast4:"7788",transactionAmount:2450,transactionCurrency:"USD",merchantName:"Nordic Electronics Oslo",merchantCountry:"Norway",riskScore:62,alertReason:"First-time merchant category and country for this customer, amount well above their typical transaction size."}},{label:"Mundane — then press the second-alert button",variables:{alertId:"ALERT-6604",customerId:"CUST-40112",cardLast4:"3315",transactionAmount:4800,transactionCurrency:"NOK",merchantName:"Alpine Ski Rentals Oslo",merchantCountry:"Norway",riskScore:45,alertReason:"Slightly above average ski-season purchase; first time renting from this merchant."}}],messageEvents:[{elementId:"Boundary_SecondAlert",label:"🚨 A second alert arrives for this customer",variables:{alertId:"ALERT-6605",cardLast4:"3315",transactionAmount:1,transactionCurrency:"USD",merchantName:"QuickMart Convenience #4471",merchantCountry:"Philippines",riskScore:81,alertReason:"Second authorization attempt on this card within seconds - different country and merchant category from the first alert. Classic card-testing / impossible-travel pattern."}}],scriptedAgent:w,requiredTools:["CrossReferenceTransactionHistory"],handlers:[{elementId:"SnapshotOriginalAlert",standsInFor:"script task — freeze the alert that started this case",source:v},{elementId:"CrossReferenceTransactionHistory",standsInFor:"HTTP connector — linked-account transaction history",source:T},{elementId:"ConvertToBaseCurrency",standsInFor:"HTTP connector — api.frankfurter.app exchange rates",source:A},{elementId:"RecordAnalystTimeout",standsInFor:"script task — hand the SLA timeout back to the agent",source:_},{elementId:"RecordInvestigationOutcome",standsInFor:"script task — record the agent's decision",source:E},{elementId:"CloseAlertNotification",standsInFor:"HTTP connector — customer notification / case management",source:C},{elementId:"FreezeCard",standsInFor:"HTTP connector — card processor freeze instruction",source:S}]};export{N as fraudAlertTriage};
