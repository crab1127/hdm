(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{210:function(e,t,a){e.exports=a(6)(2717)},213:function(e,t,a){"use strict";var l=a(1),n=a.n(l),s=a(4),o=a(210),r=a(8);function i(e){const t="image/jpeg"===e.type||"image/png"===e.type;t||s.message.error("You can only upload JPG/PNG file!");const a=e.size/1024/1024<.5;return a||s.message.error("Image must smaller than 500Kb!"),t&&a}t.a=e=>{const[t,a]=Object(l.useState)(!1),[c,u]=Object(l.useState)(""),[m,d]=Object(l.useState)("");Object(l.useEffect)(()=>{Object(r.nb)().then(e=>{d(e.data)})},[]),Object(l.useEffect)(()=>{u(e.value?e.value:"")},[e.value]);const p=n.a.createElement("div",null,t?n.a.createElement(o.LoadingOutlined,null):n.a.createElement(o.PlusOutlined,null),n.a.createElement("div",{className:"ant-upload-text"},"Upload"));return n.a.createElement(s.Upload,{name:"file",data:()=>({token:m}),listType:"picture-card",className:"avatar-uploader",showUploadList:!1,action:"https://up-z2.qiniup.com",beforeUpload:i,onChange:t=>{var l;if("uploading"!==t.file.status){if("done"===t.file.status){console.log(t.fileList[0].response.data);const n="http://static.kuaidaxy.com/"+t.fileList.pop().response.key;null===(l=e.onChange)||void 0===l||l.call(e,n.replace("https://","")),function(e,t){const a=new FileReader;a.addEventListener("load",()=>t(a.result)),a.readAsDataURL(e)}(t.file.originFileObj,e=>{a(!1),u(e)})}}else a(!0)}},c?n.a.createElement("img",{src:c,alt:"avatar",style:{width:"100%"}}):p)}},39:function(e,t,a){"use strict";a.r(t);var l=a(5),n=a(1),s=a.n(n),o=a(4),r=a(8),i=a(213);const c={labelCol:{span:4},wrapperCol:{span:20}};t.default=e=>{var t=Object(l.b)(e,[]);const[a]=o.Form.useForm();Object(n.useEffect)(()=>{t.visible&&setTimeout(()=>{a.setFieldsValue({status:1,sort:1})},100)},[t.visible]);return s.a.createElement(o.Modal,{title:"添加",maskClosable:!1,visible:t.visible,onCancel:()=>t.setVisible(),onOk:e=>{e.preventDefault(),a.validateFields().then(e=>Object(l.a)(void 0,void 0,void 0,(function*(){var a;const l=yield r.t(Object.assign(Object.assign({},e),{category_id:t.categoryId}));t.setVisible(),null===(a=t.onOk)||void 0===a||a.call(t,Object.assign({id:l.data},e))})))}},s.a.createElement(o.Form,Object.assign({form:a},c),s.a.createElement(o.Form.Item,{label:"商店名字",name:"name",rules:[{required:!0}]},s.a.createElement(o.Input,null)),s.a.createElement(o.Form.Item,{label:"联系人",name:"contacts",rules:[{required:!0}]},s.a.createElement(o.Input,null)),s.a.createElement(o.Form.Item,{label:"联系电话",name:"mobile",rules:[{required:!0}]},s.a.createElement(o.Input,null)),s.a.createElement(o.Form.Item,{getValueFromEvent:e=>e,extra:"建议尺寸200 * 200",label:"logo",name:"logo",rules:[{required:!0}]},s.a.createElement(i.a,null))))}}}]);