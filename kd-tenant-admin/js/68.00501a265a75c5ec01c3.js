(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{209:function(e,t,a){e.exports=a(6)(408)},211:function(e,t,a){e.exports=a(6)(75)},287:function(e,t,a){e.exports=a(6)(4)},94:function(e,t,a){"use strict";a.r(t);var l=a(5),n=a(1),i=a.n(n),s=a(4),m=a(8),r=a(287),c=a.n(r),d=a(208);const{RangePicker:o}=s.DatePicker,u={labelCol:{flex:"140px"}};t.default=e=>{var{data:t}=e,a=Object(l.b)(e,["data"]);const[r,b]=Object(n.useState)(!1),[v,p]=Object(n.useState)(1),[E]=s.Form.useForm(),{data:F,run:O}=Object(d.b)(()=>Object(m.yb)({shop_id:a.id,limit:300}).then(e=>e.data),{manual:!0});Object(n.useEffect)(()=>{2!==v||F||O()},[v,F]),Object(n.useEffect)(()=>{a.visible&&setTimeout(()=>{t?(E.setFieldsValue(Object.assign(Object.assign({},t),{valid_time:[c()(t.valid_start_time,"YYYY-MM-DD"),c()(t.valid_end_time,"YYYY-MM-DD")]})),b(!0)):(b(!1),E.resetFields(),E.setFieldsValue({status:0,sort:1,type:1,name:"满XX减XX"}))})},[a.visible]);const Y=Object(n.useCallback)(()=>{const e=E.getFieldValue("amount"),t=E.getFieldValue("discounts_amount");E.setFieldsValue({name:`满${e||"XX"}减${t||"XX"}`})},[E]),g=Object(n.useCallback)(()=>{const e=E.getFieldValue("discounts");E.setFieldsValue({name:`${e||"XX"}折折扣券`})},[E]);return i.a.createElement(s.Modal,{title:(null==t?void 0:t.id)?"编辑":"添加",maskClosable:!1,visible:a.visible,onCancel:()=>a.setVisible(),onOk:e=>{e.preventDefault(),E.validateFields().then(e=>Object(l.a)(void 0,void 0,void 0,(function*(){var l;e.valid_start_time=e.valid_time[0].format("YYYY-MM-DD"),e.valid_end_time=e.valid_time[1].format("YYYY-MM-DD");const n=Object.assign(Object.assign({},t),e);if(null==t?void 0:t.id)yield m.qc(t.id,e);else{const t=yield m.u(Object.assign(Object.assign({},e),{shop_id:a.id}));n.id=t.data}a.setVisible(),null===(l=a.onOk)||void 0===l||l.call(a,(null==t?void 0:t.id)?"update":"create",n)})))}},i.a.createElement(s.Form,Object.assign({form:E},u),i.a.createElement(s.Form.Item,{label:"券类型",name:"type",rules:[{required:!0}]},i.a.createElement(s.Select,{disabled:r,onChange:e=>{p(e),1===e?Y():g()}},i.a.createElement(s.Select.Option,{value:1},"满减券"),i.a.createElement(s.Select.Option,{value:2},"折扣券"))),i.a.createElement(s.Form.Item,{label:"标题",name:"name",rules:[{required:!0}]},i.a.createElement(s.Input,{disabled:!0})),1===v&&i.a.createElement(i.a.Fragment,null,i.a.createElement(s.Form.Item,{label:"最小交易金额",name:"amount",rules:[{required:!0}]},i.a.createElement(s.InputNumber,{max:1e3,onChange:Y,disabled:r})),i.a.createElement(s.Form.Item,{label:"优惠金额",name:"discounts_amount",rules:[{required:!0}]},i.a.createElement(s.InputNumber,{max:1e3,onChange:Y,disabled:r}))),2===v&&i.a.createElement(i.a.Fragment,null,i.a.createElement(s.Form.Item,{label:"折扣",name:"discounts",rules:[{required:!0}]},i.a.createElement(s.InputNumber,{max:9.9,onChange:g,disabled:r})),i.a.createElement(s.Form.Item,{label:"商品",name:"discounts_goods",rules:[{required:!0}]},i.a.createElement(s.Select,{mode:"multiple",style:{width:"100%"},placeholder:"Please select"},null==F?void 0:F.map(e=>i.a.createElement(s.Select.Option,{key:e.id,value:e.id},e.name))))),i.a.createElement(s.Form.Item,{label:"有效期",name:"valid_time",rules:[{required:!0}]},i.a.createElement(o,{format:"YYYY-MM-DD"})),i.a.createElement(s.Form.Item,{label:"排序",name:"sort"},i.a.createElement(s.InputNumber,{max:1e4}))))}}}]);