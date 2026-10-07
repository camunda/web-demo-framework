import{a as t}from"./index-BZXXAQgx.js";import"./vendor-react-9Ma26nY1.js";import"./vendor-design-system-CvQWH-OK.js";const n=`<?xml version="1.0" encoding="UTF-8"?>
<!--
  Ported from camunda/camunda-8-tutorials/examples/long-running-agent
  (models/credit-line-increase-agent.bpmn). Upstream element ids and names are
  kept wherever the engine allowed them.

  See index.ts for the divergences from upstream and why each one exists.
-->
<bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" xmlns:zeebe="http://camunda.org/schema/zeebe/1.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bioc="http://bpmn.io/schema/bpmn/biocolor/1.0" xmlns:color="http://www.omg.org/spec/BPMN/non-normative/color/1.0" xmlns:modeler="http://camunda.org/schema/modeler/1.0" id="Definitions_CreditLineIncreaseAgent" targetNamespace="http://bpmn.io/schema/bpmn" exporter="Camunda Modeler" exporterVersion="5.49.0" modeler:executionPlatform="Camunda Cloud" modeler:executionPlatformVersion="8.10.0">
  <bpmn:message id="Message_BureauReport" name="bureau-report">
    <bpmn:extensionElements>
      <zeebe:subscription correlationKey="=customerId" />
    </bpmn:extensionElements>
  </bpmn:message>
  <bpmn:process id="credit-line-increase-agent" name="Credit Line Increase Agent (Long-Running Agent)" isExecutable="true">
    <bpmn:documentation>A concrete runnable Long-Running Agent example, based on the pattern at camunda.com/orchestrate/agents.

Started by a form. The agent's first tool submits a no-op request to a credit bureau and then, as a direct continuation of that same tool call, genuinely waits - potentially hours or days in reality - for the bureau's asynchronous reply, correlated on customerId. The engine holds that wait with no resources consumed: no worker thread, no polling job. If the bureau blows through its SLA, an engine-native timer fires and tells the agent so; the agent itself then decides whether to hand the case to a different team (underwriting ops) - its own judgment, informed by a native timeout signal, not the engine unilaterally overriding it.</bpmn:documentation>
    <bpmn:startEvent id="StartEvent_CreditLineRequest" name="Credit line increase requested">
      <bpmn:documentation>Start form. It carries the application the agent reasons about; the bureau's reply is not something this form submits, and arrives later on its own.</bpmn:documentation>
      <bpmn:extensionElements>
        <zeebe:formDefinition formId="credit-line-request" />
      </bpmn:extensionElements>
      <bpmn:outgoing>Flow_ToAgent</bpmn:outgoing>
    </bpmn:startEvent>
    <bpmn:sequenceFlow id="Flow_ToAgent" sourceRef="StartEvent_CreditLineRequest" targetRef="CreditReviewAgent" />
    <bpmn:adHocSubProcess id="CreditReviewAgent" name="Credit Review Agent" zeebe:modelerTemplate="io.camunda.connectors.agenticai.aiagent.jobworker.v1" zeebe:modelerTemplateVersion="10">
      <bpmn:documentation>Reviews the credit-line-increase request. Its first tool submits a no-op request to the credit bureau and then genuinely waits - potentially hours or days in reality - for the bureau's asynchronous reply, with no engine resources consumed while it waits. If the bureau's SLA elapses first, the agent is told so and may, entirely its own judgment call, ask underwriting ops (a different team) for a manual decision instead. Either way it finishes with one structured decision.</bpmn:documentation>
      <bpmn:extensionElements>
        <zeebe:adHoc outputCollection="toolCallResults" outputElement="={&#10;  id: toolCall._meta.id,&#10;  name: toolCall._meta.name,&#10;  content: toolCallResult&#10;}" />
        <zeebe:taskDefinition type="io.camunda.agenticai:aiagent-job-worker:1" retries="3" />
        <zeebe:ioMapping>
          <zeebe:input source="openaiCompatible" target="provider.type" />
          <zeebe:input source="{{secrets.CAMUNDA_PROVIDED_LLM_API_ENDPOINT}}" target="provider.openaiCompatible.endpoint" />
          <zeebe:input source="{{secrets.CAMUNDA_PROVIDED_LLM_API_KEY}}" target="provider.openaiCompatible.authentication.apiKey" />
          <zeebe:input source="{{secrets.CAMUNDA_PROVIDED_LLM_DEFAULT_MODEL}}" target="provider.openaiCompatible.model.model" />
          <zeebe:input source="=&#34;You are a demo credit-line-increase assistant for a bank. A customer has asked to raise their credit limit; your job is to investigate and decide.&#10;&#10;You must invoke tools using the actual tool-calling mechanism available to you - never describe or simulate a tool call in your plain-text response, and never invent, guess, or fabricate what a tool would return.&#10;&#10;Steps:&#10;1. Always call RequestCreditBureauReport first, with the customer&#39;s details. This tool submits the request and then genuinely waits for the bureau&#39;s reply - it may take a long time to return (in a real system, hours or days), and that is expected, not an error. When it returns, you will either have the bureau&#39;s report (credit score, existing debt, flags on file) or a note that the bureau did not answer within the SLA window.&#10;2. If you have the bureau&#39;s report, decide using these thresholds:&#10;   - Approve as requested (decisionOutcome &#39;approved&#39;) if the bureau&#39;s credit score is 700 or above, existing debt is under 3 times the requested limit, and there are no late payments in the last 90 days.&#10;   - Approve a reduced limit (decisionOutcome &#39;reduced&#39;) if the credit score is between 620 and 699, or there is exactly one late payment in the last 90 days, or the bureau&#39;s flags mention a minor issue. Propose an approvedLimitUSD roughly halfway between the current and requested limit.&#10;   - Deny (decisionOutcome &#39;denied&#39;) if the credit score is under 620, or there are 2 or more late payments in the last 90 days, or the bureau&#39;s flags mention something serious (for example delinquency or a fraud flag).&#10;3. If the bureau did not answer in time, you may call EscalateToUnderwritingOps to get a human underwriter&#39;s decision instead of waiting any longer - this is entirely your own judgment call, not a requirement, and you keep the final say. If you do, base your final answer on their decision.&#10;4. Once you&#39;ve reached a conclusion, stop calling tools and give your final answer: &#39;decisionOutcome&#39; must be &#39;approved&#39;, &#39;reduced&#39;, or &#39;denied&#39;; &#39;approvedLimitUSD&#39; is the limit you are granting (the requested limit if approved, a lower number if reduced, or the customer&#39;s current limit if denied); &#39;decisionSummary&#39; should briefly explain your reasoning, mentioning whichever of the bureau&#39;s report or underwriting ops&#39; decision you relied on. What happens next is handled automatically.&#34;" target="data.systemPrompt.prompt" />
          <zeebe:input source="=&#34;Credit line increase request:&#10;Customer ID: &#34; + customerId + &#34;&#10;Current limit: $&#34; + string(currentLimitUSD) + &#34;&#10;Requested limit: $&#34; + string(requestedLimitUSD) + &#34;&#10;Customer tenure: &#34; + string(customerTenureYears) + &#34; years&#10;Late payments in the last 90 days (per our own records): &#34; + string(recentLatePayments90d) + &#34;&#10;Reason given: &#34; + requestReason + &#34;&#10;&#10;Investigate this request and give your final decision.&#34;" target="data.userPrompt.prompt" />
          <zeebe:input target="agentContext" />
          <zeebe:input source="in-process" target="data.memory.storage.type" />
          <zeebe:input source="=20" target="data.memory.contextWindowSize" />
          <zeebe:input source="=10" target="data.limits.maxModelCalls" />
          <zeebe:input source="WAIT_FOR_TOOL_CALL_RESULTS" target="data.events.behavior" />
          <zeebe:input source="json" target="data.response.format.type" />
          <zeebe:input source="CreditLineDecision" target="data.response.format.schemaName" />
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
      <bpmn:outgoing>Flow_ToNotify</bpmn:outgoing>
      <bpmn:serviceTask id="RequestCreditBureauReport" name="Request credit bureau report" zeebe:modelerTemplate="io.camunda.connectors.HttpJson.v2" zeebe:modelerTemplateVersion="13">
        <bpmn:documentation>Tool (root - the agent calls this one). A plain no-op REST call standing in for "submitted the request to the bureau" - a fire, not a wait. Its only job is to kick the request off; the actual waiting happens in the next step of this same tool call, Wait for bureau report, which the agent never selects on its own.</bpmn:documentation>
        <bpmn:extensionElements>
          <zeebe:taskDefinition type="io.camunda:http-json:1" retries="2" />
          <zeebe:ioMapping>
            <zeebe:input source="=false" target="ignoreNullValues" />
            <zeebe:input source="noAuth" target="authentication.type" />
            <zeebe:input source="POST" target="method" />
            <zeebe:input source="https://httpbin.io/post" target="url" />
            <zeebe:input source="={&#10;  customerId: fromAi(toolCall.applicantId, &#34;The customer identifier from the request, copied exactly as written.&#34;, &#34;string&#34;),&#10;  currentLimitUSD: fromAi(toolCall.applicantCurrentLimitUSD, &#34;The limit the customer holds today, as a plain number with no currency symbol and no thousands separators.&#34;, &#34;number&#34;),&#10;  requestedLimitUSD: fromAi(toolCall.applicantRequestedLimitUSD, &#34;The limit the customer is asking for, as a plain number with no currency symbol and no thousands separators.&#34;, &#34;number&#34;),&#10;  customerTenureYears: fromAi(toolCall.applicantTenureYears, &#34;How many years the customer has held the account, as a plain number.&#34;, &#34;number&#34;),&#10;  recentLatePayments90d: fromAi(toolCall.applicantLatePayments90d, &#34;How many late payments our own records show in the last 90 days, as a plain number.&#34;, &#34;number&#34;)&#10;}" target="body" />
            <zeebe:input source="=false" target="storeResponse" />
            <zeebe:input source="=false" target="followRedirects" />
            <zeebe:input source="=15" target="connectionTimeoutInSeconds" />
            <zeebe:input source="=15" target="readTimeoutInSeconds" />
          </zeebe:ioMapping>
          <zeebe:taskHeaders>
            <zeebe:header key="elementTemplateVersion" value="13" />
            <zeebe:header key="elementTemplateId" value="io.camunda.connectors.HttpJson.v2" />
            <zeebe:header key="retryBackoff" value="PT5S" />
          </zeebe:taskHeaders>
        </bpmn:extensionElements>
        <bpmn:outgoing>Flow_RequestToWait</bpmn:outgoing>
      </bpmn:serviceTask>
      <bpmn:sequenceFlow id="Flow_RequestToWait" sourceRef="RequestCreditBureauReport" targetRef="WaitForBureauReport" />
      <bpmn:subProcess id="WaitForBureauReport" name="Wait for bureau report">
        <bpmn:documentation>The star of this example, and not a tool the agent picks: it has an incoming sequence flow, so it is the continuation of the RequestCreditBureauReport call rather than a root node of its own. From the agent's point of view that one tool call simply takes a long time to return - realistically hours to days - during which the engine consumes no resources at all. When the reply lands the agent resumes with full context, as if no time had passed.</bpmn:documentation>
        <bpmn:incoming>Flow_RequestToWait</bpmn:incoming>
        <bpmn:startEvent id="WaitForBureauReport_Start">
          <bpmn:outgoing>Flow_ToBureauWindow</bpmn:outgoing>
        </bpmn:startEvent>
        <bpmn:sequenceFlow id="Flow_ToBureauWindow" sourceRef="WaitForBureauReport_Start" targetRef="BureauReplyWindow" />
        <bpmn:subProcess id="BureauReplyWindow" name="Bureau reply window">
          <bpmn:documentation>The SLA window itself: everything inside is what the timer boundary below is scoped to. Nothing else in this process is at risk from that timer - not the agent, not the other tool, not the steps after the agent.</bpmn:documentation>
          <bpmn:incoming>Flow_ToBureauWindow</bpmn:incoming>
          <bpmn:outgoing>Flow_WindowToRecord</bpmn:outgoing>
          <bpmn:startEvent id="BureauReplyWindow_Start">
            <bpmn:outgoing>Flow_ToBureauReport</bpmn:outgoing>
          </bpmn:startEvent>
          <bpmn:sequenceFlow id="Flow_ToBureauReport" sourceRef="BureauReplyWindow_Start" targetRef="BureauReportArrived" />
          <bpmn:intermediateCatchEvent id="BureauReportArrived" name="Bureau report received">
            <bpmn:documentation>The genuine asynchronous wait: a message catch correlated on customerId. On a real cluster the HTTP Webhook connector would sit here and the bureau would POST its report to a public endpoint; in the browser the same correlateMessage call arrives from the runner instead.</bpmn:documentation>
            <bpmn:incoming>Flow_ToBureauReport</bpmn:incoming>
            <bpmn:outgoing>Flow_ReportToWindowEnd</bpmn:outgoing>
            <bpmn:messageEventDefinition id="MsgDef_BureauReport" messageRef="Message_BureauReport" />
          </bpmn:intermediateCatchEvent>
          <bpmn:sequenceFlow id="Flow_ReportToWindowEnd" sourceRef="BureauReportArrived" targetRef="BureauReplyWindow_End" />
          <bpmn:endEvent id="BureauReplyWindow_End" name="Within SLA">
            <bpmn:incoming>Flow_ReportToWindowEnd</bpmn:incoming>
          </bpmn:endEvent>
        </bpmn:subProcess>
        <bpmn:boundaryEvent id="Boundary_BureauSLA" name="Bureau SLA exceeded&#10;(3 minutes)" attachedToRef="BureauReplyWindow">
          <bpmn:documentation>Interrupting timer boundary scoped to exactly this one wait (demo-scaled to PT3M, standing in for a real multi-day SLA) - engine-native, not a poll loop. Its outgoing flow stays inside the agent's own scope, so firing it cannot eject the agent; it can only report the timeout back into the tool-call loop and leave the next move to the agent.</bpmn:documentation>
          <bpmn:outgoing>Flow_ToBureauTimeoutRecord</bpmn:outgoing>
          <bpmn:timerEventDefinition id="TimerDef_BureauSLA">
            <bpmn:timeDuration xsi:type="bpmn:tFormalExpression">PT3M</bpmn:timeDuration>
          </bpmn:timerEventDefinition>
        </bpmn:boundaryEvent>
        <bpmn:sequenceFlow id="Flow_WindowToRecord" sourceRef="BureauReplyWindow" targetRef="RecordBureauReport" />
        <bpmn:scriptTask id="RecordBureauReport" name="Record bureau report">
          <bpmn:documentation>Turns the bureau's reply into the return value of the agent's RequestCreditBureauReport call. Upstream the webhook connector's resultExpression did this; there is no connector runtime here, so it is a step of its own that a reader can open and edit.</bpmn:documentation>
          <bpmn:incoming>Flow_WindowToRecord</bpmn:incoming>
          <bpmn:outgoing>Flow_ReportRecorded</bpmn:outgoing>
        </bpmn:scriptTask>
        <bpmn:sequenceFlow id="Flow_ReportRecorded" sourceRef="RecordBureauReport" targetRef="WaitForBureauReport_Received" />
        <bpmn:endEvent id="WaitForBureauReport_Received" name="Report received">
          <bpmn:incoming>Flow_ReportRecorded</bpmn:incoming>
        </bpmn:endEvent>
        <bpmn:sequenceFlow id="Flow_ToBureauTimeoutRecord" sourceRef="Boundary_BureauSLA" targetRef="RecordBureauTimeout" />
        <bpmn:scriptTask id="RecordBureauTimeout" name="Record bureau timeout">
          <bpmn:documentation>Reported back to the agent as the result of the RequestCreditBureauReport call when the timer wins the race. It tells the agent no reply arrived in time and that a human escalation is available if it judges the case cannot wait any longer; the agent keeps the call.</bpmn:documentation>
          <bpmn:incoming>Flow_ToBureauTimeoutRecord</bpmn:incoming>
          <bpmn:outgoing>Flow_TimeoutRecorded</bpmn:outgoing>
        </bpmn:scriptTask>
        <bpmn:sequenceFlow id="Flow_TimeoutRecorded" sourceRef="RecordBureauTimeout" targetRef="WaitForBureauReport_TimedOut" />
        <bpmn:endEvent id="WaitForBureauReport_TimedOut" name="No reply in time">
          <bpmn:incoming>Flow_TimeoutRecorded</bpmn:incoming>
        </bpmn:endEvent>
      </bpmn:subProcess>
      <bpmn:subProcess id="EscalateToUnderwritingOps" name="Escalate to underwriting ops">
        <bpmn:documentation>Tool (root - a second, independent thing the agent can call). Ask underwriting ops, a different team, for a manual decision. Entirely your own judgment call, typically made after the bureau failed to answer in time, but nothing in the model forces or forbids it. Their answer comes back as this tool's result and you still give the final decision.</bpmn:documentation>
        <bpmn:extensionElements>
          <zeebe:ioMapping>
            <zeebe:input source="=fromAi(toolCall.question, &#34;What you want underwriting ops to decide.&#34;, &#34;string&#34;)" target="opsEscalationQuestion" />
            <zeebe:input source="=fromAi(toolCall.context, &#34;A short summary of the application and why you are escalating.&#34;, &#34;string&#34;)" target="opsEscalationContext" />
          </zeebe:ioMapping>
        </bpmn:extensionElements>
        <bpmn:startEvent id="EscalateToUnderwritingOps_Start">
          <bpmn:outgoing>Flow_ToOpsDecision</bpmn:outgoing>
        </bpmn:startEvent>
        <bpmn:sequenceFlow id="Flow_ToOpsDecision" sourceRef="EscalateToUnderwritingOps_Start" targetRef="UnderwritingOpsDecision" />
        <bpmn:userTask id="UnderwritingOpsDecision" name="Underwriting ops decision">
          <bpmn:documentation>Plain Camunda user task, in a different team's queue. The form is prefilled with the application facts plus the agent's own question and summary; the human's answer goes back to the agent as this tool's plain-text result.</bpmn:documentation>
          <bpmn:extensionElements>
            <zeebe:userTask />
            <zeebe:formDefinition formId="underwriting-ops-escalation" />
            <zeebe:ioMapping>
              <zeebe:output source="=&#34;Underwriting ops decided: &#34; + opsDecisionOutcome + (if opsApprovedLimitUSD != null then &#34; at $&#34; + string(opsApprovedLimitUSD) else &#34;&#34;) + &#34;. Notes: &#34; + opsDecisionNotes" target="toolCallResult" />
            </zeebe:ioMapping>
          </bpmn:extensionElements>
          <bpmn:incoming>Flow_ToOpsDecision</bpmn:incoming>
          <bpmn:outgoing>Flow_OpsDecided</bpmn:outgoing>
        </bpmn:userTask>
        <bpmn:sequenceFlow id="Flow_OpsDecided" sourceRef="UnderwritingOpsDecision" targetRef="EscalateToUnderwritingOps_End" />
        <bpmn:endEvent id="EscalateToUnderwritingOps_End" name="Ops answered">
          <bpmn:incoming>Flow_OpsDecided</bpmn:incoming>
        </bpmn:endEvent>
      </bpmn:subProcess>
    </bpmn:adHocSubProcess>
    <bpmn:sequenceFlow id="Flow_ToNotify" sourceRef="CreditReviewAgent" targetRef="NotifyCustomerDecision" />
    <bpmn:serviceTask id="NotifyCustomerDecision" name="Notify customer of decision" zeebe:modelerTemplate="io.camunda.connectors.HttpJson.v2" zeebe:modelerTemplateVersion="13">
      <bpmn:documentation>Plain no-op REST call standing in for a real customer-notification system. Reached the same way whether the agent decided on the bureau's report or relayed underwriting ops' manual decision - one structured decision either way, so no merge gateway is needed here.</bpmn:documentation>
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
          <zeebe:input source="={&#10;  customerId: customerId,&#10;  decisionOutcome: decisionOutcome,&#10;  approvedLimitUSD: approvedLimitUSD,&#10;  decisionSummary: decisionSummary&#10;}" target="body" />
          <zeebe:input source="=false" target="ignoreNullValues" />
        </zeebe:ioMapping>
        <zeebe:taskHeaders>
          <zeebe:header key="elementTemplateVersion" value="13" />
          <zeebe:header key="elementTemplateId" value="io.camunda.connectors.HttpJson.v2" />
          <zeebe:header key="retryBackoff" value="PT5S" />
        </zeebe:taskHeaders>
      </bpmn:extensionElements>
      <bpmn:incoming>Flow_ToNotify</bpmn:incoming>
      <bpmn:outgoing>Flow_ToEnd</bpmn:outgoing>
    </bpmn:serviceTask>
    <bpmn:sequenceFlow id="Flow_ToEnd" sourceRef="NotifyCustomerDecision" targetRef="EndEvent_Done" />
    <bpmn:endEvent id="EndEvent_Done" name="Done">
      <bpmn:incoming>Flow_ToEnd</bpmn:incoming>
    </bpmn:endEvent>
  </bpmn:process>
  <bpmndi:BPMNDiagram id="BPMNDiagram_1">
    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="credit-line-increase-agent">
      <bpmndi:BPMNShape id="StartEvent_CreditLineRequest_di" bpmnElement="StartEvent_CreditLineRequest">
        <dc:Bounds x="152" y="302" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="132" y="345" width="77" height="40" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="CreditReviewAgent_di" bpmnElement="CreditReviewAgent" isExpanded="true">
        <dc:Bounds x="240" y="80" width="900" height="480" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="RequestCreditBureauReport_di" bpmnElement="RequestCreditBureauReport">
        <dc:Bounds x="280" y="160" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="WaitForBureauReport_di" bpmnElement="WaitForBureauReport" isExpanded="true" bioc:stroke="#0d4372" bioc:fill="#bbdefb" color:background-color="#bbdefb" color:border-color="#0d4372">
        <dc:Bounds x="440" y="120" width="660" height="260" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="WaitForBureauReport_Start_di" bpmnElement="WaitForBureauReport_Start">
        <dc:Bounds x="472" y="182" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BureauReplyWindow_di" bpmnElement="BureauReplyWindow" isExpanded="true">
        <dc:Bounds x="540" y="140" width="300" height="140" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BureauReplyWindow_Start_di" bpmnElement="BureauReplyWindow_Start">
        <dc:Bounds x="570" y="182" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BureauReportArrived_di" bpmnElement="BureauReportArrived" bioc:stroke="#0d4372" bioc:fill="#bbdefb" color:background-color="#bbdefb" color:border-color="#0d4372">
        <dc:Bounds x="656" y="182" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="633" y="225" width="83" height="27" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BureauReplyWindow_End_di" bpmnElement="BureauReplyWindow_End">
        <dc:Bounds x="762" y="182" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="753" y="225" width="56" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Boundary_BureauSLA_di" bpmnElement="Boundary_BureauSLA" bioc:stroke="#831311" bioc:fill="#ffcdd2" color:background-color="#ffcdd2" color:border-color="#831311">
        <dc:Bounds x="672" y="262" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="712" y="266" width="76" height="27" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="RecordBureauReport_di" bpmnElement="RecordBureauReport">
        <dc:Bounds x="890" y="160" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="WaitForBureauReport_Received_di" bpmnElement="WaitForBureauReport_Received">
        <dc:Bounds x="1042" y="182" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="1026" y="225" width="70" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="RecordBureauTimeout_di" bpmnElement="RecordBureauTimeout">
        <dc:Bounds x="890" y="280" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="WaitForBureauReport_TimedOut_di" bpmnElement="WaitForBureauReport_TimedOut">
        <dc:Bounds x="1042" y="302" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="1024" y="345" width="73" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="EscalateToUnderwritingOps_di" bpmnElement="EscalateToUnderwritingOps" isExpanded="true" bioc:stroke="#0d4372" bioc:fill="#bbdefb" color:background-color="#bbdefb" color:border-color="#0d4372">
        <dc:Bounds x="280" y="410" width="460" height="140" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="EscalateToUnderwritingOps_Start_di" bpmnElement="EscalateToUnderwritingOps_Start">
        <dc:Bounds x="312" y="452" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="UnderwritingOpsDecision_di" bpmnElement="UnderwritingOpsDecision" bioc:stroke="#0d4372" bioc:fill="#bbdefb" color:background-color="#bbdefb" color:border-color="#0d4372">
        <dc:Bounds x="400" y="430" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="EscalateToUnderwritingOps_End_di" bpmnElement="EscalateToUnderwritingOps_End">
        <dc:Bounds x="552" y="452" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="538" y="495" width="65" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="NotifyCustomerDecision_di" bpmnElement="NotifyCustomerDecision">
        <dc:Bounds x="1200" y="280" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="EndEvent_Done_di" bpmnElement="EndEvent_Done">
        <dc:Bounds x="1352" y="302" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="1357" y="345" width="27" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="Flow_ToAgent_di" bpmnElement="Flow_ToAgent">
        <di:waypoint x="188" y="320" />
        <di:waypoint x="240" y="320" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_RequestToWait_di" bpmnElement="Flow_RequestToWait">
        <di:waypoint x="380" y="200" />
        <di:waypoint x="440" y="200" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_ToBureauWindow_di" bpmnElement="Flow_ToBureauWindow">
        <di:waypoint x="508" y="200" />
        <di:waypoint x="540" y="200" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_ToBureauReport_di" bpmnElement="Flow_ToBureauReport">
        <di:waypoint x="606" y="200" />
        <di:waypoint x="656" y="200" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_ReportToWindowEnd_di" bpmnElement="Flow_ReportToWindowEnd">
        <di:waypoint x="692" y="200" />
        <di:waypoint x="762" y="200" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_WindowToRecord_di" bpmnElement="Flow_WindowToRecord">
        <di:waypoint x="840" y="200" />
        <di:waypoint x="890" y="200" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_ReportRecorded_di" bpmnElement="Flow_ReportRecorded">
        <di:waypoint x="990" y="200" />
        <di:waypoint x="1042" y="200" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_ToBureauTimeoutRecord_di" bpmnElement="Flow_ToBureauTimeoutRecord">
        <di:waypoint x="690" y="298" />
        <di:waypoint x="690" y="320" />
        <di:waypoint x="890" y="320" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_TimeoutRecorded_di" bpmnElement="Flow_TimeoutRecorded">
        <di:waypoint x="990" y="320" />
        <di:waypoint x="1042" y="320" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_ToOpsDecision_di" bpmnElement="Flow_ToOpsDecision">
        <di:waypoint x="348" y="470" />
        <di:waypoint x="400" y="470" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_OpsDecided_di" bpmnElement="Flow_OpsDecided">
        <di:waypoint x="500" y="470" />
        <di:waypoint x="552" y="470" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_ToNotify_di" bpmnElement="Flow_ToNotify">
        <di:waypoint x="1140" y="320" />
        <di:waypoint x="1200" y="320" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_ToEnd_di" bpmnElement="Flow_ToEnd">
        <di:waypoint x="1300" y="320" />
        <di:waypoint x="1352" y="320" />
      </bpmndi:BPMNEdge>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</bpmn:definitions>
`,o=[{text:"# Request a credit line increase",type:"text",layout:{row:"Row_heading",columns:null},id:"Field_Heading"},{text:`**This form only starts the case.** Once submitted, the agent fires a no-op request at the credit bureau and then genuinely waits - the bureau's reply does **not** come back through a form. On a real cluster it arrives later as a webhook call, correlated on the customer ID below, and the agent resumes with full context whenever that is.

There is no webhook in a browser, so here the wait ends one of two ways: the bureau's reply is correlated as a message, or the demo SLA window elapses and the agent is told the bureau missed it. Either way the agent decides what happens next - including whether to ask underwriting ops for a manual decision instead of waiting any longer.`,type:"text",layout:{row:"Row_waitNote",columns:null},id:"Field_WaitNote"},{label:"Customer ID",description:"Also the correlation key the bureau's later reply is matched on.",type:"textfield",layout:{row:"Row_customerId",columns:null},id:"Field_CustomerId",key:"customerId",defaultValue:"CUST-70210",validate:{required:!0}},{label:"Current credit limit (USD)",type:"number",layout:{row:"Row_currentLimit",columns:null},id:"Field_CurrentLimit",key:"currentLimitUSD",defaultValue:5e3,validate:{required:!0}},{label:"Requested credit limit (USD)",type:"number",layout:{row:"Row_requestedLimit",columns:null},id:"Field_RequestedLimit",key:"requestedLimitUSD",defaultValue:8e3,validate:{required:!0}},{label:"Customer tenure (years)",type:"number",layout:{row:"Row_tenure",columns:null},id:"Field_Tenure",key:"customerTenureYears",defaultValue:3,validate:{required:!0}},{label:"Late payments in the last 90 days",type:"number",layout:{row:"Row_latePayments",columns:null},id:"Field_LatePayments",key:"recentLatePayments90d",defaultValue:0,validate:{required:!0}},{label:"Reason for the request",type:"textarea",layout:{row:"Row_reason",columns:null},id:"Field_Reason",key:"requestReason",defaultValue:"Wants headroom for an upcoming home renovation purchase.",validate:{required:!0}}],i="default",r="credit-line-request",a="Camunda Cloud",s="8.10.0",d={name:"Camunda Modeler",version:"5.49.0"},u=19,l={components:o,type:i,id:r,executionPlatform:a,executionPlatformVersion:s,exporter:d,schemaVersion:u},m=[{text:"# The agent wants a human decision",type:"text",layout:{row:"Row_heading",columns:null},id:"Field_Heading"},{text:"The credit bureau did not reply within the SLA window, so the agent - entirely its own judgment call - is asking underwriting ops to decide instead of waiting any longer.",type:"text",layout:{row:"Row_note",columns:null},id:"Field_Note"},{text:`**Customer:** {{customerId}}

**Current limit:** \${{currentLimitUSD}} -> **Requested limit:** \${{requestedLimitUSD}}

**Tenure:** {{customerTenureYears}} years - **Late payments (90d):** {{recentLatePayments90d}}

**Reason given:** {{requestReason}}`,type:"text",layout:{row:"Row_applicationFacts",columns:null},id:"Field_ApplicationFacts"},{text:`**Agent's question:** {{opsEscalationQuestion}}

**Agent's own summary:** {{opsEscalationContext}}`,type:"text",layout:{row:"Row_context",columns:null},id:"Field_Context"},{label:"Decision",values:[{label:"Approve as requested",value:"approved"},{label:"Approve a reduced limit",value:"reduced"},{label:"Deny",value:"denied"}],type:"radio",layout:{row:"Row_decision",columns:null},id:"Field_Decision",key:"opsDecisionOutcome",validate:{required:!0}},{label:"Approved limit (USD, if approving)",type:"number",layout:{row:"Row_approvedLimit",columns:null},id:"Field_ApprovedLimit",key:"opsApprovedLimitUSD"},{label:"Notes for the agent",type:"textarea",layout:{row:"Row_notes",columns:null},id:"Field_Notes",key:"opsDecisionNotes",validate:{required:!0}}],p="default",c="underwriting-ops-escalation",b="Camunda Cloud",h="8.10.0",g={name:"Camunda Modeler",version:"5.49.0"},w=19,y={components:m,type:p,id:c,executionPlatform:b,executionPlatformVersion:h,exporter:g,schemaVersion:w},e={customerId:"CUST-70210",currentLimitUSD:5e3,requestedLimitUSD:8e3,customerTenureYears:3,recentLatePayments90d:0,requestReason:"Wants headroom for an upcoming home renovation purchase."},f=`async (job) => {
  const v = job.variables;

  // Step 1 — the bureau request, always first. It is also the wait: this
  // activation does not come back until the report lands or the SLA elapses.
  if (v.bureauReplied === undefined && v.bureauTimedOut === undefined) {
    return {
      variables: {
        applicantId: String(v.customerId || ""),
        applicantCurrentLimitUSD: Number(v.currentLimitUSD),
        applicantRequestedLimitUSD: Number(v.requestedLimitUSD),
        applicantTenureYears: Number(v.customerTenureYears),
        applicantLatePayments90d: Number(v.recentLatePayments90d),
      },
      activateElements: [{ elementId: "RequestCreditBureauReport" }],
    };
  }

  const current = Number(v.currentLimitUSD);
  const requested = Number(v.requestedLimitUSD);
  const late = Number(v.recentLatePayments90d);
  // The prompt's "roughly halfway between the current and requested limit".
  const halfway = Math.round((current + requested) / 2);

  // The connector's JSON response format upstream; set here, because this
  // engine does not apply the agent's agent.responseJson.* output mapping.
  const decide = (outcome, limit, why) => ({
    completionConditionFulfilled: true,
    variables: {
      decisionOutcome: outcome,
      approvedLimitUSD: limit,
      decisionSummary: why,
    },
  });

  // Step 2 — the bureau answered. The three thresholds, as the prompt states
  // them, worst case first so one serious flag can't be outvoted by a good score.
  if (v.bureauReplied) {
    const score = Number(v.creditScoreExternal);
    const debt = Number(v.existingDebtUSD);
    const flags = String(v.bureauFlags || "none");
    const facts =
      "credit score " + score + ", existing debt $" + debt + ", flags: " + flags;
    const serious = /delinquen|fraud|default|charge-off|judgment/i.test(flags);
    const minor = !serious && flags !== "none" && flags.length > 0;

    if (score < 620 || late >= 2 || serious) {
      return decide(
        "denied",
        current,
        "Denied on the bureau's report (" + facts + "). Limit stays where it is."
      );
    }
    if (score < 700 || late === 1 || minor) {
      return decide(
        "reduced",
        halfway,
        "Approved at a reduced limit on the bureau's report (" + facts +
          "): enough to raise, not enough for the full request."
      );
    }
    if (debt >= 3 * requested) {
      return decide(
        "reduced",
        halfway,
        "Approved at a reduced limit (" + facts +
          "): the score clears, but existing debt is high against the limit requested."
      );
    }
    return decide(
      "approved",
      requested,
      "Approved as requested on the bureau's report (" + facts + ")."
    );
  }

  // Step 3 — the bureau missed its SLA. Asking underwriting ops is the agent's
  // own call: nothing in the diagram routes the timeout here, and nothing
  // stops it deciding on the application alone instead. It escalates because
  // the application on its own says nothing about the customer's other debt.
  if (v.opsDecisionOutcome === undefined) {
    return {
      variables: {
        question:
          "The credit bureau missed its window - can you decide this one by hand?",
        context:
          "Customer " + String(v.customerId) + " is asking to go from $" + current +
          " to $" + requested + ". " + String(v.customerTenureYears) +
          " year(s) on the account, " + late +
          " late payment(s) in the last 90 days per our own records. Reason given: " +
          String(v.requestReason) + " No bureau report, so no view of debt held elsewhere.",
      },
      activateElements: [{ elementId: "EscalateToUnderwritingOps" }],
    };
  }

  // Step 4 — underwriting ops answered. Their decision is what the agent bases
  // its own final answer on; the limit is theirs when they named one.
  const ops = String(v.opsDecisionOutcome);
  const named = v.opsApprovedLimitUSD === undefined || v.opsApprovedLimitUSD === null
    ? null
    : Number(v.opsApprovedLimitUSD);
  const limit =
    named !== null ? named : ops === "approved" ? requested : ops === "reduced" ? halfway : current;

  return decide(
    ops,
    limit,
    "No bureau reply within the SLA window, so underwriting ops decided by hand: " +
      ops + " at $" + limit + ". " + String(v.opsDecisionNotes || "")
  );
}`,R=`async (job, { text, sleep, trace }) => {
  // Stands in for the HTTP connector posting the application to the bureau's
  // intake API. A fire, not a wait: the waiting is the next step of this same
  // tool call, and nothing here knows or cares how long that takes.
  //
  // It deliberately sets no toolCallResult. The result of this tool call is
  // whatever the wait produces - RecordBureauReport or RecordBureauTimeout -
  // which is what makes the two of them one tool from the agent's side.
  const applicantId = text("applicantId", "");

  await sleep(400);
  trace("bureau request submitted for " + applicantId + " - now waiting for the reply");

  return {
    bureauRequestRef: "BRQ-" + applicantId,
  };
}`,v=`async (job, { text, trace }) => {
  // Upstream this is the webhook connector's resultExpression, run on the body
  // the bureau POSTed. There is no webhook here, so the report comes from two
  // places: whatever a correlated message carried, falling back to the bureau's
  // file on this customer. Correlating with a real payload therefore wins,
  // field by field, over the stand-in below.
  const v = job.variables;
  const customerId = text("customerId", "");

  // The three reports upstream's README publishes, one per demo customer.
  const onFile = {
    "CUST-70210": { creditScoreExternal: 745, existingDebtUSD: 4000, bureauFlags: "none" },
    "CUST-70211": {
      creditScoreExternal: 655,
      existingDebtUSD: 9000,
      bureauFlags: "minor - one missed utility payment",
    },
    "CUST-70212": {
      creditScoreExternal: 560,
      existingDebtUSD: 15000,
      bureauFlags: "delinquent account on file",
    },
  };

  // Any other customer still gets a stable file, derived from their own id, so
  // a reader who edits the start form doesn't fall off the end of the table.
  const digits = Number(customerId.replace(/\\D/g, "")) || 0;
  const derived = {
    creditScoreExternal: 600 + (digits % 180),
    existingDebtUSD: 2000 + (digits % 9) * 1500,
    bureauFlags: "none",
  };
  const file = onFile[customerId] || derived;

  const creditScoreExternal =
    v.creditScoreExternal === undefined || v.creditScoreExternal === null
      ? file.creditScoreExternal
      : Number(v.creditScoreExternal);
  const existingDebtUSD =
    v.existingDebtUSD === undefined || v.existingDebtUSD === null
      ? file.existingDebtUSD
      : Number(v.existingDebtUSD);
  const bureauFlags =
    v.bureauFlags === undefined || v.bureauFlags === null
      ? file.bureauFlags
      : String(v.bureauFlags);

  trace("bureau replied for " + customerId + " - score " + creditScoreExternal);

  return {
    bureauReplied: true,
    creditScoreExternal: creditScoreExternal,
    existingDebtUSD: existingDebtUSD,
    bureauFlags: bureauFlags,
    toolCallResult:
      "Bureau report received for " + customerId + ": credit score " +
      creditScoreExternal + ", existing debt $" + existingDebtUSD +
      ", flags: " + bureauFlags + ".",
  };
}`,B=`async (job, { trace }) => {
  // Reached only from the interrupting timer boundary on the wait. Its whole
  // job is to hand the timeout back to the agent as the result of its own
  // RequestCreditBureauReport call, so "nobody answered" arrives as something
  // the agent can act on rather than as a failure - and so that the agent,
  // not the diagram, decides what happens next.
  trace("no credit bureau reply within the SLA window");

  return {
    bureauTimedOut: true,
    toolCallResult:
      "No credit bureau reply within the SLA window. EscalateToUnderwritingOps is " +
      "available if you judge the case can't wait any longer - that is your own " +
      "judgment call.",
  };
}`,E=`async (job, { num, text, sleep, trace }) => {
  // Stands in for the HTTP connector posting to the customer-notification
  // system. One step, reached identically whether the agent decided on the
  // bureau's report or relayed underwriting ops' - there is no merge gateway
  // above it because there is nothing to merge.
  const decisionOutcome = text("decisionOutcome", "");

  await sleep(300);
  trace("customer notified: " + decisionOutcome);

  return {
    customerNotice: {
      customerId: text("customerId", ""),
      decisionOutcome: decisionOutcome,
      approvedLimitUSD: num("approvedLimitUSD"),
      decisionSummary: text("decisionSummary", ""),
      sentAt: "2026-01-01T00:00:00Z",
    },
  };
}`,x={...t,bpmn:n,forms:{"credit-line-request":l,"underwriting-ops-escalation":y},seed:e,scenariosLabel:"Credit line request",scenarios:[{label:"Strong file — approved as requested",variables:e},{label:"Middling score, one late payment — reduced limit",variables:{customerId:"CUST-70211",currentLimitUSD:6e3,requestedLimitUSD:12e3,customerTenureYears:2,recentLatePayments90d:1,requestReason:"Consolidating two store cards onto one account."}},{label:"Delinquency on file — denied",variables:{customerId:"CUST-70212",currentLimitUSD:4e3,requestedLimitUSD:9e3,customerTenureYears:1,recentLatePayments90d:2,requestReason:"Planning a large veterinary bill over the next quarter."}},{label:"Bureau never answers — underwriting ops decide",variables:{customerId:"CUST-70219",currentLimitUSD:7e3,requestedLimitUSD:11e3,customerTenureYears:5,recentLatePayments90d:0,requestReason:"Frequent business travel puts pressure on the monthly limit."}}],scriptedAgent:f,messageEvents:[{elementId:"BureauReportArrived",label:"📨 The credit bureau replies"}],requiredTools:["RequestCreditBureauReport"],handlers:[{elementId:"RequestCreditBureauReport",standsInFor:"HTTP connector — the credit bureau's intake API",source:R},{elementId:"RecordBureauReport",standsInFor:"webhook resultExpression — turn the reply into the tool's result",source:v},{elementId:"RecordBureauTimeout",standsInFor:"script task — hand the SLA timeout back to the agent",source:B},{elementId:"NotifyCustomerDecision",standsInFor:"HTTP connector — customer notification system",source:E}]};export{x as creditLineIncrease};
