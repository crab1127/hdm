(window.webpackJsonp=window.webpackJsonp||[]).push([[63,98],{210:function(e,t,a){e.exports=a(6)(2717)},213:function(e,t,a){"use strict";var l=a(1),n=a.n(l),s=a(4),i=a(210),o=a(8);function r(e){const t="image/jpeg"===e.type||"image/png"===e.type;t||s.message.error("You can only upload JPG/PNG file!");const a=e.size/1024/1024<.5;return a||s.message.error("Image must smaller than 500Kb!"),t&&a}t.a=e=>{const[t,a]=Object(l.useState)(!1),[u,c]=Object(l.useState)(""),[d,m]=Object(l.useState)("");Object(l.useEffect)(()=>{Object(o.nb)().then(e=>{m(e.data)})},[]),Object(l.useEffect)(()=>{c(e.value?e.value:"")},[e.value]);const b=n.a.createElement("div",null,t?n.a.createElement(i.LoadingOutlined,null):n.a.createElement(i.PlusOutlined,null),n.a.createElement("div",{className:"ant-upload-text"},"Upload"));return n.a.createElement(s.Upload,{name:"file",data:()=>({token:d}),listType:"picture-card",className:"avatar-uploader",showUploadList:!1,action:"https://up-z2.qiniup.com",beforeUpload:r,onChange:t=>{var l;if("uploading"!==t.file.status){if("done"===t.file.status){console.log(t.fileList[0].response.data);const n="http://static.kuaidaxy.com/"+t.fileList.pop().response.key;null===(l=e.onChange)||void 0===l||l.call(e,n.replace("https://","")),function(e,t){const a=new FileReader;a.addEventListener("load",()=>t(a.result)),a.readAsDataURL(e)}(t.file.originFileObj,e=>{a(!1),c(e)})}}else a(!0)}},u?n.a.createElement("img",{src:u,alt:"avatar",style:{width:"100%"}}):b)}},40:function(e,t,a){"use strict";a.r(t),a.d(t,"showPositionList",(function(){return l}));const l=[{value:1,label:"小程序主页显示"},{value:2,label:"食堂页面显示"},{value:3,label:"超市页面显示"},{value:4,label:"教育升级页面显示"},{value:5,label:"驾校页面显示"}]},58:function(e,t,a){"use strict";a.r(t);var l=a(5),n=a(1),s=a.n(n),i=a(4),o=a(8),r=a(213),u=a(40);const c={labelCol:{span:4},wrapperCol:{span:20}};t.default=e=>{var{data:t}=e,a=Object(l.b)(e,["data"]);const[d]=i.Form.useForm();Object(n.useEffect)(()=>{a.visible&&setTimeout(()=>{t?d.setFieldsValue(Object.assign({},t)):(d.resetFields(),d.setFieldsValue({status:1,sort:1}))})},[a.visible]);return s.a.createElement(i.Modal,{title:(null==t?void 0:t.id)?"编辑":"添加",maskClosable:!1,visible:a.visible,onCancel:()=>a.setVisible(),onOk:e=>{e.preventDefault(),d.validateFields().then(e=>Object(l.a)(void 0,void 0,void 0,(function*(){var l;const n=Object.assign(Object.assign({},t),e);if(null==t?void 0:t.id)yield o.Tb(t.id,e);else{const t=yield o.f(Object.assign({},e));n.id=t.data}a.setVisible(),null===(l=a.onOk)||void 0===l||l.call(a,(null==t?void 0:t.id)?"update":"create",n)})))}},s.a.createElement(i.Form,Object.assign({form:d},c),s.a.createElement(i.Form.Item,{label:"图片名称",name:"title",rules:[{required:!0}]},s.a.createElement(i.Input,null)),s.a.createElement(i.Form.Item,{label:"现在位置",name:"position",rules:[{required:!0}]},s.a.createElement(i.Select,null,u.showPositionList.map(e=>s.a.createElement(i.Select.Option,{key:e.value,value:e.value},e.label)))),s.a.createElement(i.Form.Item,{label:"图片地址",name:"url",getValueFromEvent:e=>e,rules:[{required:!0}],extra:"建议尺寸750 * 400"},s.a.createElement(r.a,null)),s.a.createElement(i.Form.Item,{label:"状态",name:"status"},s.a.createElement(i.Radio.Group,null,s.a.createElement(i.Radio,{value:1},"启用"),s.a.createElement(i.Radio,{value:0},"禁用"))),s.a.createElement(i.Form.Item,{label:"排序",name:"sort"},s.a.createElement(i.InputNumber,null))))}}}]);