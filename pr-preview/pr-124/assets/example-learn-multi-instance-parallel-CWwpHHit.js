import{f as e}from"./index-iFTHRpeq.js";import"./vendor-react-9Ma26nY1.js";import"./vendor-design-system-CVQVAuC4.js";const n=`<?xml version="1.0" encoding="UTF-8"?>\r
<bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:zeebe="http://camunda.org/schema/zeebe/1.0" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" xmlns:modeler="http://camunda.org/schema/modeler/1.0" id="Definitions_learn_multi_instance_parallel" targetNamespace="http://bpmn.io/schema/bpmn" exporter="Camunda Modeler" exporterVersion="5.36.1" modeler:executionPlatform="Camunda Cloud" modeler:executionPlatformVersion="8.8.0">\r
  <bpmn:process id="learn_multi_instance_parallel" name="Parallel multi-instance" isExecutable="true">\r
    <bpmn:startEvent id="StartEvent_1" name="Items received">\r
      <bpmn:outgoing>Flow_to_process</bpmn:outgoing>\r
    </bpmn:startEvent>\r
    <bpmn:serviceTask id="Activity_process" name="Process item">\r
      <bpmn:extensionElements>\r
        <zeebe:taskDefinition type="process-item" />\r
      </bpmn:extensionElements>\r
      <bpmn:multiInstanceLoopCharacteristics>\r
        <bpmn:extensionElements>\r
          <zeebe:loopCharacteristics inputCollection="=items" inputElement="item" outputCollection="results" outputElement="=result" />\r
        </bpmn:extensionElements>\r
      </bpmn:multiInstanceLoopCharacteristics>\r
      <bpmn:incoming>Flow_to_process</bpmn:incoming>\r
      <bpmn:outgoing>Flow_to_end</bpmn:outgoing>\r
    </bpmn:serviceTask>\r
    <bpmn:endEvent id="Event_done" name="All items processed">\r
      <bpmn:incoming>Flow_to_end</bpmn:incoming>\r
    </bpmn:endEvent>\r
    <bpmn:sequenceFlow id="Flow_to_process" sourceRef="StartEvent_1" targetRef="Activity_process" />\r
    <bpmn:sequenceFlow id="Flow_to_end" sourceRef="Activity_process" targetRef="Event_done" />\r
  </bpmn:process>\r
  <bpmndi:BPMNDiagram id="BPMNDiagram_1">\r
    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="learn_multi_instance_parallel">\r
      <bpmndi:BPMNShape id="StartEvent_1_di" bpmnElement="StartEvent_1">\r
        <dc:Bounds x="182" y="212" width="36" height="36" />\r
        <bpmndi:BPMNLabel>\r
          <dc:Bounds x="160" y="255" width="80" height="14" />\r
        </bpmndi:BPMNLabel>\r
      </bpmndi:BPMNShape>\r
      <bpmndi:BPMNShape id="Activity_process_di" bpmnElement="Activity_process">\r
        <dc:Bounds x="270" y="190" width="100" height="80" />\r
        <bpmndi:BPMNLabel />\r
      </bpmndi:BPMNShape>\r
      <bpmndi:BPMNShape id="Event_done_di" bpmnElement="Event_done">\r
        <dc:Bounds x="432" y="212" width="36" height="36" />\r
        <bpmndi:BPMNLabel>\r
          <dc:Bounds x="410" y="255" width="80" height="27" />\r
        </bpmndi:BPMNLabel>\r
      </bpmndi:BPMNShape>\r
      <bpmndi:BPMNEdge id="Flow_to_process_di" bpmnElement="Flow_to_process">\r
        <di:waypoint x="218" y="230" />\r
        <di:waypoint x="270" y="230" />\r
      </bpmndi:BPMNEdge>\r
      <bpmndi:BPMNEdge id="Flow_to_end_di" bpmnElement="Flow_to_end">\r
        <di:waypoint x="370" y="230" />\r
        <di:waypoint x="432" y="230" />\r
      </bpmndi:BPMNEdge>\r
    </bpmndi:BPMNPlane>\r
  </bpmndi:BPMNDiagram>\r
</bpmn:definitions>\r
`,t=`async (job, { text, sleep, trace }) => {
  // Each parallel instance gets its own 'item' from the input collection.
  const item = text("item", "widget");

  trace("processing " + item);
  await sleep(400);

  // Whatever you return is merged onto this instance's scope, then collected
  // into the process-level 'results' array via outputElement/outputCollection.
  return { result: item.toUpperCase() + "-DONE" };
}`,s={...e,bpmn:n,seed:{items:["apple","banana","cherry"]},scenarios:[{label:"One item — a single instance",variables:{items:["apple"]}},{label:"Three items — fans out to three",variables:{items:["apple","banana","cherry"]}},{label:"Six items — fans out to six",variables:{items:["apple","banana","cherry","damson","elderberry","fig"]}}],handlers:[{elementId:"Activity_process",standsInFor:"job worker — process-item",source:t}]};export{s as default};
