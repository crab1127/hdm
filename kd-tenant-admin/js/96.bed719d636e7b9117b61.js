(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{53:function(e,a,t){"use strict";t.r(a);var l=t(5),n=t(1),s=t.n(n),i=t(4),r=t(8);const o={labelCol:{span:4},wrapperCol:{span:20}};a.default=e=>{var{data:a}=e,t=Object(l.b)(e,["data"]);const[m]=i.Form.useForm();Object(n.useEffect)(()=>{t.visible&&setTimeout(()=>{a?m.setFieldsValue(Object.assign({},a)):(m.resetFields(),m.setFieldsValue({status:1,sort:1}))})},[t.visible]);return s.a.createElement(i.Modal,{title:(null==a?void 0:a.id)?"编辑":"添加",maskClosable:!1,visible:t.visible,onCancel:()=>t.setVisible(),onOk:e=>{e.preventDefault(),m.validateFields().then(e=>Object(l.a)(void 0,void 0,void 0,(function*(){var l;const n=Object.assign(Object.assign({},a),e);if(null==a?void 0:a.id)yield r.rc(a.id,e);else{const a=yield r.t(Object.assign({shop_id:t.id},e));n.id=a.data}t.setVisible(),null===(l=t.onOk)||void 0===l||l.call(t,(null==a?void 0:a.id)?"update":"create",n)})))}},s.a.createElement(i.Form,Object.assign({form:m},o),s.a.createElement(i.Form.Item,{label:"班级名",name:"name",rules:[{required:!0,message:"请填写班级名"}]},s.a.createElement(i.Input,null)),s.a.createElement(i.Form.Item,{label:"班型价格",name:"price",rules:[{required:!0,message:"请填写价格"}]},s.a.createElement(i.InputNumber,null)),s.a.createElement(i.Form.Item,{label:"简介",name:"intro",rules:[{required:!0}]},s.a.createElement(i.Input.TextArea,{rows:3})),s.a.createElement(i.Form.Item,{label:"状态",name:"status"},s.a.createElement(i.Radio.Group,null,s.a.createElement(i.Radio,{value:1},"启用"),s.a.createElement(i.Radio,{value:0},"禁用"))),s.a.createElement(i.Form.Item,{label:"排序",name:"sort"},s.a.createElement(i.InputNumber,null))))}}}]);