(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{75:function(e,a,t){"use strict";t.r(a);var l=t(5),n=t(1),r=t.n(n),s=t(4),m=t(8);const u={labelCol:{span:4},wrapperCol:{span:20}};a.default=e=>{var{data:a}=e,t=Object(l.b)(e,["data"]);const[i]=s.Form.useForm();Object(n.useEffect)(()=>{t.visible&&setTimeout(()=>{a?i.setFieldsValue(Object.assign({},a)):(i.resetFields(),i.setFieldsValue({status:1,sort:1}))})},[t.visible]);return r.a.createElement(s.Modal,{title:(null==a?void 0:a.id)?"编辑":"添加",maskClosable:!1,visible:t.visible,onCancel:()=>t.setVisible(),onOk:e=>{e.preventDefault(),i.validateFields().then(e=>Object(l.a)(void 0,void 0,void 0,(function*(){var l;const n=Object.assign(Object.assign({},a),e);(null==a?void 0:a.id)&&(yield m.bc(a.id,e)),t.setVisible(),null===(l=t.onOk)||void 0===l||l.call(t,(null==a?void 0:a.id)?"update":"create",n)})))}},r.a.createElement(s.Form,Object.assign({form:i},u),r.a.createElement(s.Form.Item,{label:"班级名",name:"name",rules:[{required:!0,message:"请填写班级名"}]},r.a.createElement(s.Input,null)),r.a.createElement(s.Form.Item,{label:"班型价格",name:"price",rules:[{required:!0,message:"请填写价格"}]},r.a.createElement(s.InputNumber,null)),r.a.createElement(s.Form.Item,{label:"接车人数",name:"jcrs",rules:[{required:!0}]},r.a.createElement(s.Input,null)),r.a.createElement(s.Form.Item,{label:"接送方式",name:"jsfs",rules:[{required:!0}]},r.a.createElement(s.Input,null)),r.a.createElement(s.Form.Item,{label:"拿本时间",name:"nbsj",rules:[{required:!0}]},r.a.createElement(s.Input,null)),r.a.createElement(s.Form.Item,{label:"练车时间",name:"lcsj",rules:[{required:!0}]},r.a.createElement(s.Input,null)),r.a.createElement(s.Form.Item,{label:"简介",name:"intro",rules:[{required:!0}]},r.a.createElement(s.Input.TextArea,{rows:3})),r.a.createElement(s.Form.Item,{label:"状态",name:"status"},r.a.createElement(s.Radio.Group,null,r.a.createElement(s.Radio,{value:1},"启用"),r.a.createElement(s.Radio,{value:0},"禁用"))),r.a.createElement(s.Form.Item,{label:"排序",name:"sort"},r.a.createElement(s.InputNumber,null))))}}}]);