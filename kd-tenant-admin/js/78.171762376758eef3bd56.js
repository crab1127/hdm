(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{209:function(e,t,a){e.exports=a(6)(408)},211:function(e,t,a){e.exports=a(6)(75)},42:function(e,t,a){"use strict";a.r(t);var l=a(5),s=a(1),n=a.n(s),i=a(4),r=a(8),o=a(208);const c={labelCol:{span:4},wrapperCol:{span:20}},u=e=>{var{data:t}=e,a=Object(l.b)(e,["data"]);const[u]=i.Form.useForm(),m=Object(o.b)(()=>r.N("express",{cache:1}));console.log("express: ",m),Object(s.useEffect)(()=>{a.visible&&setTimeout(()=>{t?u.setFieldsValue(Object.assign({},t)):(u.resetFields(),u.setFieldsValue({status:1,sort:1}))})},[a.visible]);return n.a.createElement(i.Modal,{title:(null==t?void 0:t.id)?"编辑":"添加",maskClosable:!1,visible:a.visible,onCancel:()=>a.setVisible(),onOk:e=>{e.preventDefault(),u.validateFields().then(e=>Object(l.a)(void 0,void 0,void 0,(function*(){var l;const s=Object.assign(Object.assign({},t),e);(null==t?void 0:t.id)?yield r.Xb(t.id,e):yield r.i(e),a.setVisible(),null===(l=a.onOk)||void 0===l||l.call(a,(null==t?void 0:t.id)?"update":"create",s)})))}},n.a.createElement(i.Form,Object.assign({form:u},c),n.a.createElement(i.Form.Item,{label:"包类型",name:"name",rules:[{required:!0,message:"请填写包类型"}]},n.a.createElement(i.Input,null)),n.a.createElement(i.Form.Item,{label:"价格",name:"price",rules:[{required:!0,message:"请填写包类型"}]},n.a.createElement(i.InputNumber,null)),n.a.createElement(i.Form.Item,{label:"状态",name:"status"},n.a.createElement(i.Radio.Group,null,n.a.createElement(i.Radio,{value:1},"启用"),n.a.createElement(i.Radio,{value:0},"禁用"))),n.a.createElement(i.Form.Item,{label:"排序",name:"sort"},n.a.createElement(i.InputNumber,null))))};u.defaultProps={disabled:[]},t.default=u}}]);