(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{212:function(e,t,a){e.exports=a(6)(2717)},215:function(e,t,a){"use strict";var l=a(1),n=a.n(l),s=a(4),o=a(212),r=a(8);function i(e){const t="image/jpeg"===e.type||"image/png"===e.type;t||s.message.error("You can only upload JPG/PNG file!");const a=e.size/1024/1024<.5;return a||s.message.error("Image must smaller than 500Kb!"),t&&a}t.a=e=>{const[t,a]=Object(l.useState)(!1),[c,u]=Object(l.useState)(""),[m,d]=Object(l.useState)("");Object(l.useEffect)(()=>{Object(r.pb)().then(e=>{d(e.data)})},[]),Object(l.useEffect)(()=>{u(e.value?e.value:"")},[e.value]);const p=n.a.createElement("div",null,t?n.a.createElement(o.LoadingOutlined,null):n.a.createElement(o.PlusOutlined,null),n.a.createElement("div",{className:"ant-upload-text"},"Upload"));return n.a.createElement(s.Upload,{name:"file",data:()=>({token:m}),listType:"picture-card",className:"avatar-uploader",showUploadList:!1,action:"https://up-z2.qiniup.com",beforeUpload:i,onChange:t=>{var l;if("uploading"!==t.file.status){if("done"===t.file.status){console.log(t.fileList[0].response.data);const n="http://static.kuaidaxy.com/"+t.fileList.pop().response.key;null===(l=e.onChange)||void 0===l||l.call(e,n.replace("https://","")),function(e,t){const a=new FileReader;a.addEventListener("load",()=>t(a.result)),a.readAsDataURL(e)}(t.file.originFileObj,e=>{a(!1),u(e)})}}else a(!0)}},c?n.a.createElement("img",{src:c,alt:"avatar",style:{width:"100%"}}):p)}},69:function(e,t,a){"use strict";a.r(t);var l=a(5),n=a(1),s=a.n(n),o=a(4),r=a(8),i=a(215),c=a(499);const u={labelCol:{span:6},wrapperCol:{span:18}};t.default=e=>{var{data:t}=e,a=Object(l.b)(e,["data"]);const[c,d]=Object(n.useState)(1),[p]=o.Form.useForm();Object(n.useEffect)(()=>{a.visible&&setTimeout(()=>{t?(d(t.type),p.setFieldsValue(Object.assign({},t))):(p.resetFields(),p.setFieldsValue({status:1,sort:1,type:1}))})},[a.visible]);return s.a.createElement(o.Modal,{title:(null==t?void 0:t.id)?"编辑":"添加",maskClosable:!1,visible:a.visible,onCancel:()=>a.setVisible(),onOk:e=>{e.preventDefault(),p.validateFields().then(e=>Object(l.a)(void 0,void 0,void 0,(function*(){var l;const n=Object.assign(Object.assign({},t),e);if(null==t?void 0:t.id)yield r.cc(t.id,e);else{const t=yield r.j(Object.assign({},e));n.id=t.data}a.setVisible(),null===(l=a.onOk)||void 0===l||l.call(a,(null==t?void 0:t.id)?"update":"create",n)})))}},s.a.createElement(o.Form,Object.assign({form:p},u),s.a.createElement(o.Form.Item,{label:"会员等级名称",name:"name",rules:[{required:!0}]},s.a.createElement(o.Input,null)),s.a.createElement(o.Form.Item,{label:"所需订单数量",name:"order_count",rules:[{required:!0}]},s.a.createElement(o.InputNumber,null)),s.a.createElement(o.Form.Item,{label:"边框颜色",name:"type"},s.a.createElement(o.Radio.Group,{onChange:e=>d(e.target.value)},s.a.createElement(o.Radio,{value:1},"边框颜色"),s.a.createElement(o.Radio,{value:2},"边框图片"))),1==c&&s.a.createElement(o.Form.Item,{label:"边框颜色",name:"color"},s.a.createElement(m,null)),2==c&&s.a.createElement(o.Form.Item,{label:"边框图片",name:"img",getValueFromEvent:e=>e,rules:[{required:!0}],extra:"建议尺寸400 * 400"},s.a.createElement(i.a,null)),s.a.createElement(o.Form.Item,{label:"状态",name:"status"},s.a.createElement(o.Radio.Group,null,s.a.createElement(o.Radio,{value:1},"启用"),s.a.createElement(o.Radio,{value:0},"禁用")))))};const m=({value:e,onChange:t})=>s.a.createElement(c.a,{color:e,onChangeComplete:e=>null==t?void 0:t(e.hex)})}}]);