import type { ExampleDef } from "../types";

/**
 * A process whose only way in is a published message, plus a reader-fired
 * boundary event that interrupts it.
 *
 * Both constructs exist in the framework for Camunda's event-driven agent
 * (`camunda-8-tutorials/examples/event-driven-agent`), which isn't ported yet
 * — so without this they'd have no runtime coverage at all, and the seams
 * between `parseModel`, the runner's publish-on-start path and the drive
 * loop's refusal to auto-fire boundaries would only be tested a layer at a
 * time. Deliberately tiny: it's a fixture for those seams, not a demo.
 */
const BPMN = `<?xml version="1.0" encoding="UTF-8"?>
<bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" xmlns:zeebe="http://camunda.org/schema/zeebe/1.0" id="Definitions_MessageStart" targetNamespace="http://bpmn.io/schema/bpmn">
  <bpmn:message id="Message_Alert" name="alert-raised">
    <bpmn:extensionElements>
      <zeebe:subscription correlationKey="=caseId" />
    </bpmn:extensionElements>
  </bpmn:message>
  <bpmn:message id="Message_Cancel" name="alert-withdrawn">
    <bpmn:extensionElements>
      <zeebe:subscription correlationKey="=caseId" />
    </bpmn:extensionElements>
  </bpmn:message>
  <bpmn:message id="Message_Escalate" name="alert-escalated">
    <bpmn:extensionElements>
      <zeebe:subscription correlationKey="=caseId" />
    </bpmn:extensionElements>
  </bpmn:message>
  <bpmn:process id="message-start-fixture" name="Message Start Fixture" isExecutable="true">
    <bpmn:startEvent id="StartEvent_Alert" name="Alert raised">
      <bpmn:messageEventDefinition id="MED_Alert" messageRef="Message_Alert" />
      <bpmn:outgoing>Flow_ToTriage</bpmn:outgoing>
    </bpmn:startEvent>
    <bpmn:sequenceFlow id="Flow_ToTriage" sourceRef="StartEvent_Alert" targetRef="Triage" />
    <bpmn:userTask id="Triage" name="Triage the alert">
      <bpmn:extensionElements>
        <zeebe:userTask />
      </bpmn:extensionElements>
      <bpmn:incoming>Flow_ToTriage</bpmn:incoming>
      <bpmn:outgoing>Flow_ToResolved</bpmn:outgoing>
    </bpmn:userTask>
    <bpmn:boundaryEvent id="Boundary_Withdrawn" name="Withdrawn" attachedToRef="Triage">
      <bpmn:messageEventDefinition id="MED_Cancel" messageRef="Message_Cancel" />
      <bpmn:outgoing>Flow_ToWithdrawn</bpmn:outgoing>
    </bpmn:boundaryEvent>
    <bpmn:boundaryEvent id="Boundary_Escalated" name="Escalated" attachedToRef="Triage">
      <bpmn:messageEventDefinition id="MED_Escalate" messageRef="Message_Escalate" />
      <bpmn:outgoing>Flow_ToEscalated</bpmn:outgoing>
    </bpmn:boundaryEvent>
    <bpmn:sequenceFlow id="Flow_ToEscalated" sourceRef="Boundary_Escalated" targetRef="RecordEscalation" />
    <bpmn:serviceTask id="RecordEscalation" name="Record the escalation">
      <bpmn:extensionElements>
        <zeebe:taskDefinition type="fixture.record-escalation" />
      </bpmn:extensionElements>
      <bpmn:incoming>Flow_ToEscalated</bpmn:incoming>
      <bpmn:outgoing>Flow_EscalationToEnd</bpmn:outgoing>
    </bpmn:serviceTask>
    <bpmn:sequenceFlow id="Flow_EscalationToEnd" sourceRef="RecordEscalation" targetRef="EndEvent_Escalated" />
    <bpmn:endEvent id="EndEvent_Escalated" name="Escalated">
      <bpmn:incoming>Flow_EscalationToEnd</bpmn:incoming>
    </bpmn:endEvent>
    <bpmn:sequenceFlow id="Flow_ToResolved" sourceRef="Triage" targetRef="EndEvent_Resolved" />
    <bpmn:sequenceFlow id="Flow_ToWithdrawn" sourceRef="Boundary_Withdrawn" targetRef="RecordWithdrawal" />
    <bpmn:serviceTask id="RecordWithdrawal" name="Record the withdrawal">
      <bpmn:extensionElements>
        <zeebe:taskDefinition type="fixture.record-withdrawal" />
      </bpmn:extensionElements>
      <bpmn:incoming>Flow_ToWithdrawn</bpmn:incoming>
      <bpmn:outgoing>Flow_RecordToEnd</bpmn:outgoing>
    </bpmn:serviceTask>
    <bpmn:sequenceFlow id="Flow_RecordToEnd" sourceRef="RecordWithdrawal" targetRef="EndEvent_Withdrawn" />
    <bpmn:endEvent id="EndEvent_Resolved" name="Resolved">
      <bpmn:incoming>Flow_ToResolved</bpmn:incoming>
    </bpmn:endEvent>
    <bpmn:endEvent id="EndEvent_Withdrawn" name="Withdrawn">
      <bpmn:incoming>Flow_RecordToEnd</bpmn:incoming>
    </bpmn:endEvent>
  </bpmn:process>
  <bpmndi:BPMNDiagram id="BPMNDiagram_1">
    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="message-start-fixture">
      <bpmndi:BPMNShape id="StartEvent_Alert_di" bpmnElement="StartEvent_Alert">
        <dc:Bounds x="160" y="100" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Triage_di" bpmnElement="Triage">
        <dc:Bounds x="250" y="78" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Boundary_Withdrawn_di" bpmnElement="Boundary_Withdrawn">
        <dc:Bounds x="332" y="140" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="EndEvent_Resolved_di" bpmnElement="EndEvent_Resolved">
        <dc:Bounds x="420" y="100" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="EndEvent_Withdrawn_di" bpmnElement="EndEvent_Withdrawn">
        <dc:Bounds x="560" y="220" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="RecordWithdrawal_di" bpmnElement="RecordWithdrawal">
        <dc:Bounds x="410" y="198" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Boundary_Escalated_di" bpmnElement="Boundary_Escalated">
        <dc:Bounds x="262" y="140" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="RecordEscalation_di" bpmnElement="RecordEscalation">
        <dc:Bounds x="410" y="318" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="EndEvent_Escalated_di" bpmnElement="EndEvent_Escalated">
        <dc:Bounds x="560" y="340" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="Flow_ToEscalated_di" bpmnElement="Flow_ToEscalated">
        <di:waypoint x="280" y="176" />
        <di:waypoint x="280" y="358" />
        <di:waypoint x="410" y="358" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_EscalationToEnd_di" bpmnElement="Flow_EscalationToEnd">
        <di:waypoint x="510" y="358" />
        <di:waypoint x="560" y="358" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_ToTriage_di" bpmnElement="Flow_ToTriage">
        <di:waypoint x="196" y="118" />
        <di:waypoint x="250" y="118" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_ToResolved_di" bpmnElement="Flow_ToResolved">
        <di:waypoint x="350" y="118" />
        <di:waypoint x="420" y="118" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_ToWithdrawn_di" bpmnElement="Flow_ToWithdrawn">
        <di:waypoint x="350" y="176" />
        <di:waypoint x="350" y="238" />
        <di:waypoint x="410" y="238" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_RecordToEnd_di" bpmnElement="Flow_RecordToEnd">
        <di:waypoint x="510" y="238" />
        <di:waypoint x="560" y="238" />
      </bpmndi:BPMNEdge>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</bpmn:definitions>`;

/** Reads the published payload back, so a test can see it actually arrived. */
const RECORD_WITHDRAWAL = `async (job, { text, trace }) => {
  const by = text("withdrawnBy", "(nobody)");
  trace("withdrawn by " + by);
  return { withdrawnBy: by };
}`;

const RECORD_ESCALATION = `async (job, { text, trace }) => {
  const to = text("escalatedTo", "(nobody)");
  trace("escalated to " + to);
  return { escalatedTo: to };
}`;

export const messageStartFixture: ExampleDef = {
  id: "message-start-fixture",
  title: "Message start fixture",
  blurb:
    "A test fixture: a process started only by a published message, parked on a human task, with a reader-fired boundary event that interrupts it.",
  bpmn: BPMN,
  seed: { caseId: "CASE-1" },
  handlers: [
    {
      elementId: "RecordWithdrawal",
      standsInFor: "job worker — record the withdrawal",
      source: RECORD_WITHDRAWAL,
    },
    {
      elementId: "RecordEscalation",
      standsInFor: "job worker — record the escalation",
      source: RECORD_ESCALATION,
    },
  ],
  // Two message boundaries on the *same* activity: the engine reports both
  // subscriptions against `Triage`, so resolving by host alone would bind
  // both buttons to whichever came first.
  messageEvents: [
    {
      elementId: "Boundary_Withdrawn",
      label: "\u{1F6AB} The alert is withdrawn",
      variables: { withdrawnBy: "monitoring" },
    },
    {
      elementId: "Boundary_Escalated",
      label: "\u{1F53A} The alert is escalated",
      variables: { escalatedTo: "tier-2" },
    },
  ],
};
