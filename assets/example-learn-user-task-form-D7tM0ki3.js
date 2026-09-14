import{j as e}from"./index-DmJq4jue.js";import"./vendor-react-9Ma26nY1.js";import"./vendor-design-system-B2HQUYYn.js";const n=`<?xml version="1.0" encoding="UTF-8"?>
<bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:zeebe="http://camunda.org/schema/zeebe/1.0" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" xmlns:modeler="http://camunda.org/schema/modeler/1.0" id="Definitions_learn_user_task_form" targetNamespace="http://bpmn.io/schema/bpmn" exporter="Camunda Modeler" exporterVersion="5.36.1" modeler:executionPlatform="Camunda Cloud" modeler:executionPlatformVersion="8.8.0">
  <bpmn:process id="learn_user_task_form" name="User task + form" isExecutable="true">
    <bpmn:startEvent id="StartEvent_1" name="Request submitted">
      <bpmn:outgoing>Flow_to_review</bpmn:outgoing>
    </bpmn:startEvent>
    <bpmn:userTask id="Activity_review" name="Review request">
      <bpmn:extensionElements>
        <zeebe:userTask />
        <zeebe:formDefinition formId="learn-user-task-form-review" />
      </bpmn:extensionElements>
      <bpmn:incoming>Flow_to_review</bpmn:incoming>
      <bpmn:outgoing>Flow_to_end</bpmn:outgoing>
    </bpmn:userTask>
    <bpmn:endEvent id="Event_done" name="Request reviewed">
      <bpmn:incoming>Flow_to_end</bpmn:incoming>
    </bpmn:endEvent>
    <bpmn:sequenceFlow id="Flow_to_review" sourceRef="StartEvent_1" targetRef="Activity_review" />
    <bpmn:sequenceFlow id="Flow_to_end" sourceRef="Activity_review" targetRef="Event_done" />
  </bpmn:process>
  <bpmndi:BPMNDiagram id="BPMNDiagram_1">
    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="learn_user_task_form">
      <bpmndi:BPMNShape id="StartEvent_1_di" bpmnElement="StartEvent_1">
        <dc:Bounds x="182" y="212" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="160" y="255" width="80" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_review_di" bpmnElement="Activity_review">
        <dc:Bounds x="270" y="190" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Event_done_di" bpmnElement="Event_done">
        <dc:Bounds x="432" y="212" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="410" y="255" width="80" height="27" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="Flow_to_review_di" bpmnElement="Flow_to_review">
        <di:waypoint x="218" y="230" />
        <di:waypoint x="270" y="230" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_to_end_di" bpmnElement="Flow_to_end">
        <di:waypoint x="370" y="230" />
        <di:waypoint x="432" y="230" />
      </bpmndi:BPMNEdge>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</bpmn:definitions>
`,t="Camunda Cloud",i="8.10.0",o={name:"Camunda Web Modeler",version:"9b5d5ef"},m=19,r="learn-user-task-form-review",d=[{text:`# Review request

A request is waiting for you. Decide whether to approve or reject it, then submit.`,type:"text",layout:{row:"Row_heading",columns:null},id:"Field_ReviewHeading"},{text:`**Requester:** {{requester}}

**Details:** {{details}}`,type:"text",layout:{row:"Row_details",columns:null},id:"Field_ReviewDetails"},{label:"Decision",values:[{label:"Approve",value:"approved"},{label:"Reject",value:"rejected"}],type:"radio",layout:{row:"Row_decision",columns:null},id:"Field_ReviewDecision",key:"decision",validate:{required:!0}},{label:"Comments",description:"Optional note recorded alongside your decision.",type:"textarea",layout:{row:"Row_comments",columns:null},id:"Field_ReviewComments",key:"comments"}],s="default",a={executionPlatform:t,executionPlatformVersion:i,exporter:o,schemaVersion:m,id:r,components:d,type:s},c={...e,bpmn:n,forms:{"learn-user-task-form-review":a},seed:{requester:"Priya Shah",details:"Approve access to the shared design-review workspace."},handlers:[]};export{c as default};
