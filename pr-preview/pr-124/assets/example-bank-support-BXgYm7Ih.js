import{m as n}from"./index-BpVW0uxr.js";import"./vendor-react-9Ma26nY1.js";import"./vendor-design-system-CVQVAuC4.js";const t=`<?xml version="1.0" encoding="UTF-8"?>
<!--
  Ported from camunda/camunda-8-tutorials/examples/orchestrator-agent, where it
  is four separate .bpmn files deployed together. They are one definitions file
  here because this framework deploys a single BPMN string; the four processes
  are otherwise unchanged, and the orchestrator is first so it is the one the
  runner starts.

  See index.ts for the divergences from upstream and why each one exists.
-->
<bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" xmlns:zeebe="http://camunda.org/schema/zeebe/1.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:modeler="http://camunda.org/schema/modeler/1.0" id="Definitions_BankSupport" targetNamespace="http://bpmn.io/schema/bpmn" exporter="Camunda Modeler" exporterVersion="5.46.1" modeler:executionPlatform="Camunda Cloud" modeler:executionPlatformVersion="8.10.0">
  <bpmn:process id="bank-support-orchestrator" name="Bank Support Orchestrator" isExecutable="true">
    <bpmn:startEvent id="StartEvent_CustomerRequest" name="Customer support request received">
      <bpmn:extensionElements>
        <zeebe:formDefinition formId="bank-support-request" />
      </bpmn:extensionElements>
      <bpmn:outgoing>Flow_ToAgent</bpmn:outgoing>
    </bpmn:startEvent>
    <bpmn:sequenceFlow id="Flow_ToAgent" sourceRef="StartEvent_CustomerRequest" targetRef="CustomerSupportOrchestrator" />
    <bpmn:adHocSubProcess id="CustomerSupportOrchestrator" name="Customer Support Orchestrator" zeebe:modelerTemplate="io.camunda.connectors.agenticai.aiagent.jobworker.v1" zeebe:modelerTemplateVersion="10">
      <bpmn:documentation>Decides which specialist agent or agents a customer request needs, and delegates to them. It resolves nothing itself: every answer in the final summary came from a specialist that ran as its own process instance.</bpmn:documentation>
      <bpmn:extensionElements>
        <zeebe:adHoc outputCollection="toolCallResults" outputElement="={&#10;  id: toolCall._meta.id,&#10;  name: toolCall._meta.name,&#10;  content: toolCallResult&#10;}" />
        <zeebe:taskDefinition type="io.camunda.agenticai:aiagent-job-worker:1" retries="3" />
        <zeebe:ioMapping>
          <zeebe:input source="openaiCompatible" target="provider.type" />
          <zeebe:input source="=&#34;You are the routing agent for Camunda Bank's customer support desk. You do not resolve requests yourself - you delegate to specialist agents and combine their answers.&#10;&#10;Three specialists are available as tools:&#10;- CallActivity_LoanAgent: mortgages, personal loans, interest rates, terms, monthly payment estimates.&#10;- CallActivity_AccountAgent: IBAN and account number validation and details.&#10;- CallActivity_CardAgent: identifying which bank or network issued a card, unrecognized charges.&#10;&#10;1. Read the customer's message and decide which specialist or specialists are relevant. A single message can need more than one specialist - call every relevant one.&#10;2. For each specialist you call, extract only the portion of the message relevant to that specialist, in the customer's own original wording. Never invent information the customer did not provide.&#10;3. Call each relevant specialist exactly once. Do not call a specialist that is not relevant, and do not call the same specialist twice for the same request.&#10;4. Once every relevant specialist has responded, you are done - what happens next is handled automatically. Do not attempt to summarize the outcome yourself.&#34;" target="data.systemPrompt.prompt" />
          <zeebe:input source="=&#34;Customer message: &#34; + customerRequest + &#34; Please resolve this by delegating to the relevant specialist agent or agents.&#34;" target="data.userPrompt.prompt" />
          <zeebe:input target="agentContext" />
          <zeebe:input source="in-process" target="data.memory.storage.type" />
          <zeebe:input source="=20" target="data.memory.contextWindowSize" />
          <zeebe:input source="=10" target="data.limits.maxModelCalls" />
          <zeebe:input source="WAIT_FOR_TOOL_CALL_RESULTS" target="data.events.behavior" />
          <zeebe:input source="text" target="data.response.format.type" />
          <zeebe:input target="agent" />
          <zeebe:output source="=agent" target="agent" />
        </zeebe:ioMapping>
      </bpmn:extensionElements>
      <bpmn:incoming>Flow_ToAgent</bpmn:incoming>
      <bpmn:outgoing>Flow_ToSummary</bpmn:outgoing>
      <bpmn:subProcess id="CallActivity_LoanAgent" name="Loan Support Agent">
        <bpmn:documentation>Delegate to the specialist loan agent for questions about mortgages, loans, interest rates, terms, or monthly payments. Runs as its own process instance and returns a structured resolution.</bpmn:documentation>
        <bpmn:extensionElements>
          <zeebe:ioMapping>
            <zeebe:input source="=fromAi(toolCall.loanRequest, &#34;The loan-related portion of the customer's message, in their own original wording&#34;, &#34;string&#34;)" target="loanRequest" />
          </zeebe:ioMapping>
        </bpmn:extensionElements>
        <bpmn:startEvent id="Loan_Start">
          <bpmn:outgoing>Loan_ToCall</bpmn:outgoing>
        </bpmn:startEvent>
        <bpmn:sequenceFlow id="Loan_ToCall" sourceRef="Loan_Start" targetRef="DelegateToLoanAgent" />
        <bpmn:callActivity id="DelegateToLoanAgent" name="Loan Support Agent">
          <bpmn:extensionElements>
            <zeebe:calledElement processId="bank-support-loan-agent" propagateAllChildVariables="false" propagateAllParentVariables="false" />
            <zeebe:ioMapping>
              <zeebe:input source="=loanRequest" target="customerRequest" />
              <zeebe:output source="={status: status, summary: summary}" target="loanResolution" />
            </zeebe:ioMapping>
          </bpmn:extensionElements>
          <bpmn:incoming>Loan_ToCall</bpmn:incoming>
          <bpmn:outgoing>Loan_ToEnd</bpmn:outgoing>
        </bpmn:callActivity>
        <bpmn:sequenceFlow id="Loan_ToEnd" sourceRef="DelegateToLoanAgent" targetRef="Loan_End" />
        <bpmn:endEvent id="Loan_End">
          <bpmn:incoming>Loan_ToEnd</bpmn:incoming>
        </bpmn:endEvent>
      </bpmn:subProcess>
      <bpmn:subProcess id="CallActivity_AccountAgent" name="Account Support Agent">
        <bpmn:documentation>Delegate to the specialist account agent for IBAN or account number validation and details. Runs as its own process instance and returns a structured resolution.</bpmn:documentation>
        <bpmn:extensionElements>
          <zeebe:ioMapping>
            <zeebe:input source="=fromAi(toolCall.accountRequest, &#34;The account or IBAN-related portion of the customer's message, in their own original wording&#34;, &#34;string&#34;)" target="accountRequest" />
          </zeebe:ioMapping>
        </bpmn:extensionElements>
        <bpmn:startEvent id="Account_Start">
          <bpmn:outgoing>Account_ToCall</bpmn:outgoing>
        </bpmn:startEvent>
        <bpmn:sequenceFlow id="Account_ToCall" sourceRef="Account_Start" targetRef="DelegateToAccountAgent" />
        <bpmn:callActivity id="DelegateToAccountAgent" name="Account Support Agent">
          <bpmn:extensionElements>
            <zeebe:calledElement processId="bank-support-account-agent" propagateAllChildVariables="false" propagateAllParentVariables="false" />
            <zeebe:ioMapping>
              <zeebe:input source="=accountRequest" target="customerRequest" />
              <zeebe:output source="={status: status, summary: summary}" target="accountResolution" />
            </zeebe:ioMapping>
          </bpmn:extensionElements>
          <bpmn:incoming>Account_ToCall</bpmn:incoming>
          <bpmn:outgoing>Account_ToEnd</bpmn:outgoing>
        </bpmn:callActivity>
        <bpmn:sequenceFlow id="Account_ToEnd" sourceRef="DelegateToAccountAgent" targetRef="Account_End" />
        <bpmn:endEvent id="Account_End">
          <bpmn:incoming>Account_ToEnd</bpmn:incoming>
        </bpmn:endEvent>
      </bpmn:subProcess>
      <bpmn:subProcess id="CallActivity_CardAgent" name="Card Support Agent">
        <bpmn:documentation>Delegate to the specialist card agent to identify which bank or network issued a card, or to check an unrecognized charge. Runs as its own process instance and returns a structured resolution.</bpmn:documentation>
        <bpmn:extensionElements>
          <zeebe:ioMapping>
            <zeebe:input source="=fromAi(toolCall.cardRequest, &#34;The card-related portion of the customer's message, in their own original wording&#34;, &#34;string&#34;)" target="cardRequest" />
          </zeebe:ioMapping>
        </bpmn:extensionElements>
        <bpmn:startEvent id="Card_Start">
          <bpmn:outgoing>Card_ToCall</bpmn:outgoing>
        </bpmn:startEvent>
        <bpmn:sequenceFlow id="Card_ToCall" sourceRef="Card_Start" targetRef="DelegateToCardAgent" />
        <bpmn:callActivity id="DelegateToCardAgent" name="Card Support Agent">
          <bpmn:extensionElements>
            <zeebe:calledElement processId="bank-support-card-agent" propagateAllChildVariables="false" propagateAllParentVariables="false" />
            <zeebe:ioMapping>
              <zeebe:input source="=cardRequest" target="customerRequest" />
              <zeebe:output source="={status: status, summary: summary}" target="cardResolution" />
            </zeebe:ioMapping>
          </bpmn:extensionElements>
          <bpmn:incoming>Card_ToCall</bpmn:incoming>
          <bpmn:outgoing>Card_ToEnd</bpmn:outgoing>
        </bpmn:callActivity>
        <bpmn:sequenceFlow id="Card_ToEnd" sourceRef="DelegateToCardAgent" targetRef="Card_End" />
        <bpmn:endEvent id="Card_End">
          <bpmn:incoming>Card_ToEnd</bpmn:incoming>
        </bpmn:endEvent>
      </bpmn:subProcess>
    </bpmn:adHocSubProcess>
    <bpmn:sequenceFlow id="Flow_ToSummary" sourceRef="CustomerSupportOrchestrator" targetRef="PrepareCaseSummary" />
    <bpmn:scriptTask id="PrepareCaseSummary" name="Prepare case summary">
      <bpmn:documentation>Combines every specialist's resolution into one human-readable summary, and decides whether the case can close automatically. Deterministic: it reads what the specialists actually returned, not anything the orchestrator said about them.</bpmn:documentation>
      <bpmn:incoming>Flow_ToSummary</bpmn:incoming>
      <bpmn:outgoing>Flow_ToGateway</bpmn:outgoing>
    </bpmn:scriptTask>
    <bpmn:sequenceFlow id="Flow_ToGateway" sourceRef="PrepareCaseSummary" targetRef="Gateway_AllResolved" />
    <bpmn:exclusiveGateway id="Gateway_AllResolved" name="All resolved?" default="Flow_Escalate">
      <bpmn:incoming>Flow_ToGateway</bpmn:incoming>
      <bpmn:outgoing>Flow_Yes</bpmn:outgoing>
      <bpmn:outgoing>Flow_Escalate</bpmn:outgoing>
    </bpmn:exclusiveGateway>
    <bpmn:sequenceFlow id="Flow_Yes" name="yes" sourceRef="Gateway_AllResolved" targetRef="NotifyCustomer">
      <bpmn:conditionExpression xsi:type="bpmn:tFormalExpression">=allResolved = true</bpmn:conditionExpression>
    </bpmn:sequenceFlow>
    <bpmn:sequenceFlow id="Flow_Escalate" name="no" sourceRef="Gateway_AllResolved" targetRef="ReviewEscalatedCase" />
    <bpmn:serviceTask id="NotifyCustomer" name="Notify customer">
      <bpmn:documentation>Sends the combined resolution back to the customer.</bpmn:documentation>
      <bpmn:extensionElements>
        <zeebe:taskDefinition type="notify-customer" retries="2" />
      </bpmn:extensionElements>
      <bpmn:incoming>Flow_Yes</bpmn:incoming>
      <bpmn:outgoing>Flow_ToEndAuto</bpmn:outgoing>
    </bpmn:serviceTask>
    <bpmn:sequenceFlow id="Flow_ToEndAuto" sourceRef="NotifyCustomer" targetRef="EndEvent_ResolvedAutomatically" />
    <bpmn:endEvent id="EndEvent_ResolvedAutomatically" name="Case resolved automatically">
      <bpmn:incoming>Flow_ToEndAuto</bpmn:incoming>
    </bpmn:endEvent>
    <bpmn:userTask id="ReviewEscalatedCase" name="Review escalated case">
      <bpmn:documentation>Everything a specialist could not settle ends up here. The reviewer sees the combined summary and each specialist's own status - not the orchestrator's reasoning.</bpmn:documentation>
      <bpmn:extensionElements>
        <zeebe:userTask />
        <zeebe:formDefinition formId="bank-support-review" />
      </bpmn:extensionElements>
      <bpmn:incoming>Flow_Escalate</bpmn:incoming>
      <bpmn:outgoing>Flow_ToEndManual</bpmn:outgoing>
    </bpmn:userTask>
    <bpmn:sequenceFlow id="Flow_ToEndManual" sourceRef="ReviewEscalatedCase" targetRef="EndEvent_ResolvedManually" />
    <bpmn:endEvent id="EndEvent_ResolvedManually" name="Case resolved manually">
      <bpmn:incoming>Flow_ToEndManual</bpmn:incoming>
    </bpmn:endEvent>
    <bpmn:textAnnotation id="TextAnnotation_MoreSpecialists">
      <bpmn:text>Each specialist is a separate process, so adding one is a deploy — not a change to this model.</bpmn:text>
    </bpmn:textAnnotation>
    <bpmn:association id="Association_MoreSpecialists" sourceRef="CustomerSupportOrchestrator" targetRef="TextAnnotation_MoreSpecialists" />
  </bpmn:process>
  <bpmn:process id="bank-support-loan-agent" name="Bank Support Loan Agent" isExecutable="true">
    <bpmn:startEvent id="Loan_StartEvent" name="Loan support requested">
      <bpmn:outgoing>Loan_FlowToAgent</bpmn:outgoing>
    </bpmn:startEvent>
    <bpmn:sequenceFlow id="Loan_FlowToAgent" sourceRef="Loan_StartEvent" targetRef="LoanSupportAgent" />
    <bpmn:adHocSubProcess id="LoanSupportAgent" name="Loan Support Agent" zeebe:modelerTemplate="io.camunda.connectors.agenticai.aiagent.jobworker.v1" zeebe:modelerTemplateVersion="10">
      <bpmn:extensionElements>
        <zeebe:adHoc outputCollection="toolCallResults" outputElement="={&#10;  id: toolCall._meta.id,&#10;  name: toolCall._meta.name,&#10;  content: toolCallResult&#10;}" />
        <zeebe:taskDefinition type="io.camunda.agenticai:aiagent-job-worker:1" retries="3" />
        <zeebe:ioMapping>
          <zeebe:input source="openaiCompatible" target="provider.type" />
          <zeebe:input source="=&#34;You are the Loan Support Agent for Camunda Bank. You only handle loan-related requests: mortgages, personal loans, interest rates, terms, and monthly payment estimates.&#10;&#10;Always invoke tools through the actual tool-calling mechanism - never describe or simulate a tool call in plain text, and never invent numbers the customer did not provide.&#10;&#10;1. Extract the loan amount, the annual interest rate, and the term in years from the customer's message.&#10;2. If the amount, rate, or term is missing, or the term is longer than 40 years, or the amount is above 2000000, skip straight to step 4 with status 'needs-human'.&#10;3. Otherwise, call CalculateLoanPayment with the extracted amount, rate, and the term converted to months (years times 12).&#10;4. Once you've reached a conclusion, stop calling tools and give your final answer: 'status' must be 'resolved' if you were able to fully answer the loan question yourself, or 'needs-human' if the case needs a loan specialist (for example because information was missing, the term exceeds 40 years, or the amount exceeds 2000000). Always fill in 'summary' with a short explanation, including the calculated monthly payment if you computed one. What happens next is handled automatically.&#34;" target="data.systemPrompt.prompt" />
          <zeebe:input source="=&#34;Customer request: &#34; + customerRequest" target="data.userPrompt.prompt" />
          <zeebe:input target="agentContext" />
          <zeebe:input source="json" target="data.response.format.type" />
          <zeebe:input source="LoanResolution" target="data.response.format.schemaName" />
          <zeebe:input target="agent" />
          <zeebe:output source="=agent" target="agent" />
        </zeebe:ioMapping>
      </bpmn:extensionElements>
      <bpmn:incoming>Loan_FlowToAgent</bpmn:incoming>
      <bpmn:outgoing>Loan_FlowToEnd</bpmn:outgoing>
      <bpmn:serviceTask id="CalculateLoanPayment" name="Calculate loan payment">
        <bpmn:documentation>Computes the fixed monthly payment for an amortizing loan.</bpmn:documentation>
        <bpmn:extensionElements>
          <zeebe:taskDefinition type="calculate-loan-payment" retries="2" />
          <zeebe:ioMapping>
            <zeebe:input source="=fromAi(toolCall.loanAmount, &#34;The loan principal amount requested by the customer, for example 240000&#34;, &#34;number&#34;)" target="loanAmount" />
            <zeebe:input source="=fromAi(toolCall.annualInterestRatePercent, &#34;The annual interest rate in percent, for example 6.5 for a 6.5 percent rate&#34;, &#34;number&#34;)" target="annualInterestRatePercent" />
            <zeebe:input source="=fromAi(toolCall.termInMonths, &#34;The loan term in months, for example 360 for a 30 year loan&#34;, &#34;number&#34;)" target="termInMonths" />
          </zeebe:ioMapping>
        </bpmn:extensionElements>
      </bpmn:serviceTask>
    </bpmn:adHocSubProcess>
    <bpmn:sequenceFlow id="Loan_FlowToEnd" sourceRef="LoanSupportAgent" targetRef="Loan_EndEvent" />
    <bpmn:endEvent id="Loan_EndEvent" name="Loan case handled">
      <bpmn:incoming>Loan_FlowToEnd</bpmn:incoming>
    </bpmn:endEvent>
  </bpmn:process>
  <bpmn:process id="bank-support-account-agent" name="Bank Support Account Agent" isExecutable="true">
    <bpmn:startEvent id="Account_StartEvent" name="Account support requested">
      <bpmn:outgoing>Account_FlowToAgent</bpmn:outgoing>
    </bpmn:startEvent>
    <bpmn:sequenceFlow id="Account_FlowToAgent" sourceRef="Account_StartEvent" targetRef="AccountSupportAgent" />
    <bpmn:adHocSubProcess id="AccountSupportAgent" name="Account Support Agent" zeebe:modelerTemplate="io.camunda.connectors.agenticai.aiagent.jobworker.v1" zeebe:modelerTemplateVersion="10">
      <bpmn:extensionElements>
        <zeebe:adHoc outputCollection="toolCallResults" outputElement="={&#10;  id: toolCall._meta.id,&#10;  name: toolCall._meta.name,&#10;  content: toolCallResult&#10;}" />
        <zeebe:taskDefinition type="io.camunda.agenticai:aiagent-job-worker:1" retries="3" />
        <zeebe:ioMapping>
          <zeebe:input source="openaiCompatible" target="provider.type" />
          <zeebe:input source="=&#34;You are the Account Support Agent for Camunda Bank. You only handle account and IBAN related requests: validating account numbers, checking IBAN details, and confirming bank identifiers.&#10;&#10;Always invoke tools through the actual tool-calling mechanism - never describe or simulate a tool call in plain text, and never invent account data the customer did not provide.&#10;&#10;1. Extract the IBAN or account identifier from the customer's message.&#10;2. If no identifier was provided at all, skip straight to step 4 with status 'needs-human'.&#10;3. Otherwise, call ValidateIban with the identifier to check whether it is valid.&#10;4. Once you've reached a conclusion, stop calling tools and give your final answer: 'status' must be 'resolved' if the identifier was checked and confirmed valid, or 'needs-human' if it failed validation or none was provided. Always fill in 'summary' with a short explanation. What happens next is handled automatically.&#34;" target="data.systemPrompt.prompt" />
          <zeebe:input source="=&#34;Customer request: &#34; + customerRequest" target="data.userPrompt.prompt" />
          <zeebe:input target="agentContext" />
          <zeebe:input source="json" target="data.response.format.type" />
          <zeebe:input source="AccountResolution" target="data.response.format.schemaName" />
          <zeebe:input target="agent" />
          <zeebe:output source="=agent" target="agent" />
        </zeebe:ioMapping>
      </bpmn:extensionElements>
      <bpmn:incoming>Account_FlowToAgent</bpmn:incoming>
      <bpmn:outgoing>Account_FlowToEnd</bpmn:outgoing>
      <bpmn:serviceTask id="ValidateIban" name="Validate IBAN">
        <bpmn:documentation>Checks an IBAN's structure and check digits.</bpmn:documentation>
        <bpmn:extensionElements>
          <zeebe:taskDefinition type="validate-iban" retries="2" />
          <zeebe:ioMapping>
            <zeebe:input source="=fromAi(toolCall.iban, &#34;The IBAN or account identifier to validate, exactly as the customer wrote it&#34;, &#34;string&#34;)" target="iban" />
          </zeebe:ioMapping>
        </bpmn:extensionElements>
      </bpmn:serviceTask>
    </bpmn:adHocSubProcess>
    <bpmn:sequenceFlow id="Account_FlowToEnd" sourceRef="AccountSupportAgent" targetRef="Account_EndEvent" />
    <bpmn:endEvent id="Account_EndEvent" name="Account case handled">
      <bpmn:incoming>Account_FlowToEnd</bpmn:incoming>
    </bpmn:endEvent>
  </bpmn:process>
  <bpmn:process id="bank-support-card-agent" name="Bank Support Card Agent" isExecutable="true">
    <bpmn:startEvent id="Card_StartEvent" name="Card support requested">
      <bpmn:outgoing>Card_FlowToAgent</bpmn:outgoing>
    </bpmn:startEvent>
    <bpmn:sequenceFlow id="Card_FlowToAgent" sourceRef="Card_StartEvent" targetRef="CardSupportAgent" />
    <bpmn:adHocSubProcess id="CardSupportAgent" name="Card Support Agent" zeebe:modelerTemplate="io.camunda.connectors.agenticai.aiagent.jobworker.v1" zeebe:modelerTemplateVersion="10">
      <bpmn:extensionElements>
        <zeebe:adHoc outputCollection="toolCallResults" outputElement="={&#10;  id: toolCall._meta.id,&#10;  name: toolCall._meta.name,&#10;  content: toolCallResult&#10;}" />
        <zeebe:taskDefinition type="io.camunda.agenticai:aiagent-job-worker:1" retries="3" />
        <zeebe:ioMapping>
          <zeebe:input source="openaiCompatible" target="provider.type" />
          <zeebe:input source="=&#34;You are the Card Support Agent for Camunda Bank. You only handle card related requests: identifying which bank or network issued a card from its number, and flagging unrecognized charges.&#10;&#10;Always invoke tools through the actual tool-calling mechanism - never describe or simulate a tool call in plain text, and never invent card data the customer did not provide.&#10;&#10;1. Extract the first 6 to 8 digits of the card number mentioned by the customer (the bank identification number).&#10;2. If the customer did not provide any digits of a card number, skip straight to step 4 with status 'needs-human'.&#10;3. Otherwise, call LookupCardBin with those digits. The lookup succeeding counts as resolved even if no specific issuing bank is found - just say so in your summary.&#10;4. Once you've reached a conclusion, stop calling tools and give your final answer: 'status' must be 'resolved' if you attempted the lookup, or 'needs-human' if no card number digits were provided at all. Always fill in 'summary' with a short explanation of what the lookup found. What happens next is handled automatically.&#34;" target="data.systemPrompt.prompt" />
          <zeebe:input source="=&#34;Customer request: &#34; + customerRequest" target="data.userPrompt.prompt" />
          <zeebe:input target="agentContext" />
          <zeebe:input source="json" target="data.response.format.type" />
          <zeebe:input source="CardResolution" target="data.response.format.schemaName" />
          <zeebe:input target="agent" />
          <zeebe:output source="=agent" target="agent" />
        </zeebe:ioMapping>
      </bpmn:extensionElements>
      <bpmn:incoming>Card_FlowToAgent</bpmn:incoming>
      <bpmn:outgoing>Card_FlowToEnd</bpmn:outgoing>
      <bpmn:serviceTask id="LookupCardBin" name="Look up card BIN">
        <bpmn:documentation>Looks up which bank and network issued a card from its bank identification number.</bpmn:documentation>
        <bpmn:extensionElements>
          <zeebe:taskDefinition type="lookup-card-bin" retries="2" />
          <zeebe:ioMapping>
            <zeebe:input source="=fromAi(toolCall.bin, &#34;The first 6 to 8 digits of the card number&#34;, &#34;string&#34;)" target="bin" />
          </zeebe:ioMapping>
        </bpmn:extensionElements>
      </bpmn:serviceTask>
    </bpmn:adHocSubProcess>
    <bpmn:sequenceFlow id="Card_FlowToEnd" sourceRef="CardSupportAgent" targetRef="Card_EndEvent" />
    <bpmn:endEvent id="Card_EndEvent" name="Card case handled">
      <bpmn:incoming>Card_FlowToEnd</bpmn:incoming>
    </bpmn:endEvent>
  </bpmn:process>
  <bpmndi:BPMNDiagram id="BPMNDiagram_Orchestrator">
    <bpmndi:BPMNPlane id="BPMNPlane_Orchestrator" bpmnElement="bank-support-orchestrator">
      <bpmndi:BPMNShape id="StartEvent_CustomerRequest_di" bpmnElement="StartEvent_CustomerRequest">
        <dc:Bounds x="162" y="142" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="130" y="185" width="100" height="40" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="CustomerSupportOrchestrator_di" bpmnElement="CustomerSupportOrchestrator" isExpanded="true">
        <dc:Bounds x="280" y="60" width="400" height="200" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="CallActivity_LoanAgent_di" bpmnElement="CallActivity_LoanAgent" isExpanded="false">
        <dc:Bounds x="310" y="110" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="CallActivity_AccountAgent_di" bpmnElement="CallActivity_AccountAgent" isExpanded="false">
        <dc:Bounds x="430" y="110" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="CallActivity_CardAgent_di" bpmnElement="CallActivity_CardAgent" isExpanded="false">
        <dc:Bounds x="550" y="110" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="PrepareCaseSummary_di" bpmnElement="PrepareCaseSummary">
        <dc:Bounds x="740" y="120" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Gateway_AllResolved_di" bpmnElement="Gateway_AllResolved" isMarkerVisible="true">
        <dc:Bounds x="890" y="135" width="50" height="50" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="877" y="113" width="76" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="NotifyCustomer_di" bpmnElement="NotifyCustomer">
        <dc:Bounds x="1010" y="120" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="EndEvent_ResolvedAutomatically_di" bpmnElement="EndEvent_ResolvedAutomatically">
        <dc:Bounds x="1172" y="142" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="1150" y="185" width="82" height="40" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="ReviewEscalatedCase_di" bpmnElement="ReviewEscalatedCase">
        <dc:Bounds x="1010" y="240" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="EndEvent_ResolvedManually_di" bpmnElement="EndEvent_ResolvedManually">
        <dc:Bounds x="1172" y="262" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="1150" y="305" width="82" height="40" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="TextAnnotation_MoreSpecialists_di" bpmnElement="TextAnnotation_MoreSpecialists">
        <dc:Bounds x="370" y="340" width="260" height="70" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="Flow_ToAgent_di" bpmnElement="Flow_ToAgent">
        <di:waypoint x="198" y="160" />
        <di:waypoint x="280" y="160" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_ToSummary_di" bpmnElement="Flow_ToSummary">
        <di:waypoint x="680" y="160" />
        <di:waypoint x="740" y="160" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_ToGateway_di" bpmnElement="Flow_ToGateway">
        <di:waypoint x="840" y="160" />
        <di:waypoint x="890" y="160" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_Yes_di" bpmnElement="Flow_Yes">
        <di:waypoint x="940" y="160" />
        <di:waypoint x="1010" y="160" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="965" y="142" width="18" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_Escalate_di" bpmnElement="Flow_Escalate">
        <di:waypoint x="915" y="185" />
        <di:waypoint x="915" y="280" />
        <di:waypoint x="1010" y="280" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="924" y="219" width="13" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_ToEndAuto_di" bpmnElement="Flow_ToEndAuto">
        <di:waypoint x="1110" y="160" />
        <di:waypoint x="1172" y="160" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_ToEndManual_di" bpmnElement="Flow_ToEndManual">
        <di:waypoint x="1110" y="280" />
        <di:waypoint x="1172" y="280" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Association_MoreSpecialists_di" bpmnElement="Association_MoreSpecialists">
        <di:waypoint x="490" y="260" />
        <di:waypoint x="495" y="340" />
      </bpmndi:BPMNEdge>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
  <bpmndi:BPMNDiagram id="BPMNDiagram_Loan">
    <bpmndi:BPMNPlane id="BPMNPlane_Loan" bpmnElement="bank-support-loan-agent">
      <bpmndi:BPMNShape id="Loan_StartEvent_di" bpmnElement="Loan_StartEvent">
        <dc:Bounds x="162" y="122" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="LoanSupportAgent_di" bpmnElement="LoanSupportAgent" isExpanded="true">
        <dc:Bounds x="260" y="60" width="290" height="160" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="CalculateLoanPayment_di" bpmnElement="CalculateLoanPayment">
        <dc:Bounds x="330" y="100" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Loan_EndEvent_di" bpmnElement="Loan_EndEvent">
        <dc:Bounds x="612" y="122" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="Loan_FlowToAgent_di" bpmnElement="Loan_FlowToAgent">
        <di:waypoint x="198" y="140" />
        <di:waypoint x="260" y="140" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Loan_FlowToEnd_di" bpmnElement="Loan_FlowToEnd">
        <di:waypoint x="550" y="140" />
        <di:waypoint x="612" y="140" />
      </bpmndi:BPMNEdge>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
  <bpmndi:BPMNDiagram id="BPMNDiagram_Account">
    <bpmndi:BPMNPlane id="BPMNPlane_Account" bpmnElement="bank-support-account-agent">
      <bpmndi:BPMNShape id="Account_StartEvent_di" bpmnElement="Account_StartEvent">
        <dc:Bounds x="162" y="122" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="AccountSupportAgent_di" bpmnElement="AccountSupportAgent" isExpanded="true">
        <dc:Bounds x="260" y="60" width="290" height="160" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="ValidateIban_di" bpmnElement="ValidateIban">
        <dc:Bounds x="330" y="100" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Account_EndEvent_di" bpmnElement="Account_EndEvent">
        <dc:Bounds x="612" y="122" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="Account_FlowToAgent_di" bpmnElement="Account_FlowToAgent">
        <di:waypoint x="198" y="140" />
        <di:waypoint x="260" y="140" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Account_FlowToEnd_di" bpmnElement="Account_FlowToEnd">
        <di:waypoint x="550" y="140" />
        <di:waypoint x="612" y="140" />
      </bpmndi:BPMNEdge>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
  <bpmndi:BPMNDiagram id="BPMNDiagram_Card">
    <bpmndi:BPMNPlane id="BPMNPlane_Card" bpmnElement="bank-support-card-agent">
      <bpmndi:BPMNShape id="Card_StartEvent_di" bpmnElement="Card_StartEvent">
        <dc:Bounds x="162" y="122" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="CardSupportAgent_di" bpmnElement="CardSupportAgent" isExpanded="true">
        <dc:Bounds x="260" y="60" width="290" height="160" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="LookupCardBin_di" bpmnElement="LookupCardBin">
        <dc:Bounds x="330" y="100" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Card_EndEvent_di" bpmnElement="Card_EndEvent">
        <dc:Bounds x="612" y="122" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="Card_FlowToAgent_di" bpmnElement="Card_FlowToAgent">
        <di:waypoint x="198" y="140" />
        <di:waypoint x="260" y="140" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Card_FlowToEnd_di" bpmnElement="Card_FlowToEnd">
        <di:waypoint x="550" y="140" />
        <di:waypoint x="612" y="140" />
      </bpmndi:BPMNEdge>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</bpmn:definitions>
`,o=[{text:"# Customer support request",type:"text",layout:{row:"Row_heading",columns:null},id:"Field_Heading"},{label:"Customer request",description:"What the customer wrote in. The orchestrator reads this to decide which specialist agent(s) to call.",type:"textarea",layout:{row:"Row_customer_request",columns:null},id:"Field_CustomerRequest",key:"customerRequest",validate:{required:!0}}],a="default",i="bank-support-request",s="Camunda Cloud",r="8.10.0",l=19,d={components:o,type:a,id:i,executionPlatform:s,executionPlatformVersion:r,schemaVersion:l},m=[{text:`# Support case needs review

One or more specialist agents couldn't fully resolve this case on their own. Check the details below, then record your decision.`,type:"text",layout:{row:"Row_heading",columns:null},id:"Field_Heading"},{text:`**Customer message:** {{customerRequest}}

**Specialist findings:**

{{combinedSummary}}`,type:"text",layout:{row:"Row_findings",columns:null},id:"Field_Findings"},{label:"Reviewer decision",type:"radio",layout:{row:"Row_decision",columns:null},id:"Field_ReviewDecision",key:"reviewDecision",validate:{required:!0},values:[{label:"Resolved by human",value:"resolved"},{label:"Escalate further",value:"escalated"}]},{label:"Reviewer comments",type:"textarea",layout:{row:"Row_comments",columns:null},id:"Field_ReviewComments",key:"reviewComments"}],u="default",p="bank-support-review",c="Camunda Cloud",b="8.10.0",g=19,h={components:m,type:u,id:p,executionPlatform:c,executionPlatformVersion:b,schemaVersion:g},e="I'm refinancing my $240,000 mortgage at 6.5% interest over 30 years - what would my new monthly payment be?",y="Please check whether DE89370400440532013000 is a valid IBAN for my transfer, and also tell me what my monthly payment would look like on a $200,000 loan at 6% over 30 years.",w="Can you confirm whether DE89370400440532013001 is a valid account number before I set up a transfer?",v="I don't recognize a small charge on my card - the first six digits are 453201, can you tell me which bank issued it?",f=`async (job) => {
  const v = job.variables;
  const host = job.elementId;
  const request = String(v.customerRequest || "");
  const text = request.toLowerCase();

  if (host === "CustomerSupportOrchestrator") {
    // Turn 2+: every specialist it called has come back.
    if (v.loanResolution || v.accountResolution || v.cardResolution) {
      return { completionConditionFulfilled: true };
    }

    // Steps 1 and 2 of the prompt are one decision, not two: split the message
    // into clauses, and a specialist is called *because* a clause is for it —
    // receiving exactly those clauses and nothing else. Deciding "who" and
    // "what to send them" separately is what lets a whole message reach a
    // specialist that only needed one line of it.
    //
    // Clauses, not sentences: a customer writing in about two things usually
    // writes one sentence joined by "and also", which is exactly what the
    // two-specialist case below looks like.
    const clauses = request
      .split(/(?<=[.?!;])\\s+|,\\s*(?=and\\b|also\\b|plus\\b)/i)
      .map((c) => c.trim())
      .filter(Boolean);

    const portionFor = (re) => clauses.filter((c) => re.test(c.toLowerCase())).join(" ");

    const loanRequest = portionFor(/loan|mortgage|refinanc|interest rate|monthly payment|repayment/);
    const accountRequest = portionFor(/iban|account number|sort code|routing number|bank details/);
    const cardRequest = portionFor(/\\bcard\\b|charge|\\bbin\\b|first six digits|issuer|issued it/);

    const tools = [];
    if (loanRequest) tools.push({ elementId: "CallActivity_LoanAgent" });
    if (accountRequest) tools.push({ elementId: "CallActivity_AccountAgent" });
    if (cardRequest) tools.push({ elementId: "CallActivity_CardAgent" });

    // Nothing matched. Delegating at random would be worse than delegating
    // nothing: PrepareCaseSummary escalates a case no specialist resolved, so
    // a human sees it either way — but only this way is the summary honest
    // about why.
    if (tools.length === 0) return { completionConditionFulfilled: true };

    return {
      variables: {
        loanRequest: loanRequest || undefined,
        accountRequest: accountRequest || undefined,
        cardRequest: cardRequest || undefined,
      },
      activateElements: tools,
    };
  }

  if (host === "LoanSupportAgent") {
    if (v.monthlyPayment !== undefined) {
      return {
        completionConditionFulfilled: true,
        variables: {
          status: "resolved",
          summary:
            "Monthly payment on a " + v.loanAmount + " loan at " + v.annualInterestRatePercent +
            "% over " + (v.termInMonths / 12) + " years is " + v.monthlyPayment + ".",
        },
      };
    }

    // The prompt's step 1: pull the three numbers out of the customer's own
    // words. Nothing is inferred — a missing figure is a reason to ask a
    // human, not to pick a plausible default.
    //
    // The amount must be marked as money. An unmarked run of digits in a
    // banking message is at least as likely to be an account number as an
    // amount, and reading one as the other quotes a loan nobody asked for.
    const amount = (request.match(/(?:\\$|USD\\s?|EUR\\s?|£)\\s?([\\d,]+(?:\\.\\d+)?)/i) || [])[1];
    const rate = (request.match(/([\\d.]+)\\s?%/) || [])[1];
    const years = (request.match(/(\\d+)[\\s-]*year/) || [])[1];
    const loanAmount = amount ? Number(amount.replace(/,/g, "")) : undefined;

    // Step 2's guard rails, stated as thresholds rather than judgement so the
    // same case always lands the same way.
    if (loanAmount === undefined || rate === undefined || years === undefined) {
      return {
        completionConditionFulfilled: true,
        variables: {
          status: "needs-human",
          summary: "Couldn't read the amount, rate and term from the request, so a loan specialist should take this.",
        },
      };
    }
    if (Number(years) > 40 || loanAmount > 2000000) {
      return {
        completionConditionFulfilled: true,
        variables: {
          status: "needs-human",
          summary:
            "A " + loanAmount + " loan over " + years +
            " years is outside what I can quote (limits: 2,000,000 and 40 years), so a loan specialist should take this.",
        },
      };
    }

    return {
      variables: {
        loanAmount: loanAmount,
        annualInterestRatePercent: Number(rate),
        termInMonths: Number(years) * 12,
      },
      activateElements: [{ elementId: "CalculateLoanPayment" }],
    };
  }

  if (host === "AccountSupportAgent") {
    if (v.ibanValid !== undefined) {
      return {
        completionConditionFulfilled: true,
        variables: {
          // The tool's verdict, not a re-reading of the IBAN. Deciding this
          // here would put the checksum in the agent's hands.
          status: v.ibanValid ? "resolved" : "needs-human",
          summary: String(v.toolCallResult || ""),
        },
      };
    }

    // Case-insensitive, and tolerant of the four-character grouping IBANs are
    // conventionally printed in ("DE89 3704 0044 …"). Requiring the canonical
    // contiguous uppercase form would report "no identifier given" for one
    // that is plainly there, and the customer would be told it wasn't checked.
    // The grouped pattern is deliberately strict about group sizes so it stops
    // at the end of the number instead of swallowing the words after it.
    const compact = request.match(/\\b([A-Za-z]{2}[0-9A-Za-z]{13,32})\\b/);
    const grouped = request.match(
      /\\b([A-Za-z]{2}[0-9]{2}(?:[ -][0-9A-Za-z]{4})+(?:[ -][0-9A-Za-z]{1,3})?)\\b/,
    );
    const found = (compact || grouped || [])[1];
    const iban = found ? found.replace(/[ -]/g, "") : undefined;
    if (!iban) {
      return {
        completionConditionFulfilled: true,
        variables: {
          status: "needs-human",
          summary: "No account identifier was given, so there is nothing to validate.",
        },
      };
    }
    return { variables: { iban: iban }, activateElements: [{ elementId: "ValidateIban" }] };
  }

  if (host === "CardSupportAgent") {
    if (v.cardInfo !== undefined) {
      // The prompt is explicit that a lookup which finds no issuer still
      // counts as resolved — the customer asked what the charge was, and
      // "we looked and this BIN isn't on file" is an answer.
      return {
        completionConditionFulfilled: true,
        variables: { status: "resolved", summary: String(v.toolCallResult || "") },
      };
    }

    const bin = (request.match(/\\b(\\d{6,8})\\b/) || [])[1];
    if (!bin) {
      return {
        completionConditionFulfilled: true,
        variables: {
          status: "needs-human",
          summary: "No card number digits were given, so there is nothing to look up.",
        },
      };
    }
    return { variables: { bin: bin }, activateElements: [{ elementId: "LookupCardBin" }] };
  }

  return { completionConditionFulfilled: true };
}`,E=`async (job, { num, sleep, trace }) => {
  // Stands in for the HTTP connector evaluating the amortization formula on
  // api.mathjs.org. The formula is the standard one, computed here rather than
  // round-tripped over the network.
  const principal = num("loanAmount");
  const annualRatePercent = num("annualInterestRatePercent");
  const months = num("termInMonths");

  if (!(principal > 0) || !(months > 0)) {
    throw new Error(
      "Cannot quote a payment for principal " + JSON.stringify(principal) +
      " over " + JSON.stringify(months) + " months."
    );
  }

  await sleep(300);

  const monthlyRate = annualRatePercent / 1200;
  // A 0% loan is just the principal spread evenly; the amortization formula
  // divides by zero for it.
  const payment =
    monthlyRate === 0
      ? principal / months
      : (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months));
  const monthlyPayment = Math.round(payment * 100) / 100;

  trace(principal + " at " + annualRatePercent + "% over " + months + " months → " + monthlyPayment + "/mo");

  return {
    monthlyPayment: monthlyPayment,
    toolCallResult: "Calculated monthly payment: " + monthlyPayment,
  };
}`,A=`async (job, { text, sleep, trace }) => {
  // Stands in for the HTTP connector calling openiban.com. The ISO 7064 mod-97
  // check is done for real: the two account scenarios differ by one digit, and
  // this is what makes them behave differently.
  const raw = text("iban", "").replace(/\\s+/g, "").toUpperCase();

  await sleep(300);

  if (!/^[A-Z]{2}[0-9A-Z]{13,32}$/.test(raw)) {
    return {
      ibanValid: false,
      toolCallResult: "That does not look like an IBAN, so it could not be checked.",
    };
  }

  // Move the country code and check digits to the end, letters become numbers
  // (A=10 … Z=35), and the whole thing mod 97 must be 1.
  const rearranged = raw.slice(4) + raw.slice(0, 4);
  const digits = rearranged.replace(/[A-Z]/g, (c) => String(c.charCodeAt(0) - 55));
  let remainder = 0;
  for (const d of digits) remainder = (remainder * 10 + Number(d)) % 97;
  const valid = remainder === 1;

  // A stand-in directory: enough to show the shape of a real answer without
  // pretending to know every bank in the world.
  const banks = { "37040044": "Commerzbank" };
  const bank = banks[raw.slice(4, 12)];

  trace(raw + " → " + (valid ? "valid" : "checksum failed"));

  return {
    ibanValid: valid,
    ibanInfo: valid && bank ? { name: bank } : null,
    toolCallResult: valid
      ? "IBAN is valid" + (bank ? " (bank: " + bank + ")" : "") + "."
      : "IBAN failed validation - the check digits do not match.",
  };
}`,_=`async (job, { text, sleep, trace }) => {
  // Stands in for the HTTP connector calling lookup.binlist.net.
  const bin = text("bin", "").replace(/\\D/g, "").slice(0, 8);

  await sleep(300);

  const directory = {
    "453201": { bank: "Barclays", scheme: "visa", country: "United Kingdom" },
    "545454": { bank: "Mastercard Test Bank", scheme: "mastercard", country: "United States" },
  };
  const hit = directory[bin.slice(0, 6)];

  trace(bin + " → " + (hit ? hit.bank : "no issuer record"));

  return {
    // Set either way: it is what tells the agent the lookup happened at all,
    // which the prompt treats as resolving the case even when no issuer is
    // found.
    cardInfo: hit ?? { bank: null },
    toolCallResult: hit
      ? "Card BIN resolves to " + hit.bank + " (" + hit.scheme + ", " + hit.country + ")."
      : "Lookup completed but no specific issuer record was found for this BIN.",
  };
}`,C=`async (job) => {
  // Deterministic aggregation, deliberately downstream of the agent: it reads
  // what each specialist returned through its own call activity, not the
  // orchestrator's account of what they said.
  const v = job.variables;
  const ran = [
    ["Loan Support Agent", v.loanResolution],
    ["Account Support Agent", v.accountResolution],
    ["Card Support Agent", v.cardResolution],
  ].filter(([, r]) => r && typeof r === "object");

  if (ran.length === 0) {
    return {
      combinedSummary: "No specialist agent was called for this request.",
      // Nothing ran, so nothing was resolved. Treating "no failures" as
      // success here would close a case nobody looked at.
      allResolved: false,
    };
  }

  return {
    combinedSummary: ran.map(([name, r]) => name + ": " + r.summary).join("\\n\\n"),
    allResolved: ran.every(([, r]) => r.status === "resolved"),
  };
}`,P=`async (job, { text, sleep }) => {
  // Stands in for the HTTP connector posting to the customer-notification
  // service. Only reachable from the resolved branch of Gateway_AllResolved.
  await sleep(300);

  return {
    notificationReceipt: {
      sentAt: "2026-01-01T00:00:00Z",
      body: text("combinedSummary", ""),
    },
    caseOutcome: "resolved-automatically",
  };
}`,M={...n,bpmn:t,forms:{"bank-support-request":d,"bank-support-review":h},seed:{customerRequest:e},scenariosLabel:"Customer request",scenarios:[{label:"Loan question — one specialist",variables:{customerRequest:e}},{label:"Loan + account — two specialists at once",variables:{customerRequest:y}},{label:"Account question — fails validation, needs review",variables:{customerRequest:w}},{label:"Card question — one specialist",variables:{customerRequest:v}}],scriptedAgent:f,handlers:[{elementId:"CalculateLoanPayment",standsInFor:"HTTP connector — api.mathjs.org expression evaluator",source:E},{elementId:"ValidateIban",standsInFor:"HTTP connector — openiban.com IBAN validation",source:A},{elementId:"LookupCardBin",standsInFor:"HTTP connector — lookup.binlist.net BIN lookup",source:_},{elementId:"PrepareCaseSummary",standsInFor:"script task — combine every specialist's resolution",source:C},{elementId:"NotifyCustomer",standsInFor:"HTTP connector — customer notification",source:P}]};export{M as bankSupport};
