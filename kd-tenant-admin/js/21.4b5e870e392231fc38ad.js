(window.webpackJsonp=window.webpackJsonp||[]).push([[21,59],{120:function(e,t,a){"use strict";a.r(t);var l=a(1),n=a.n(l),s=a(3),i=a(4),o=a(205),c=a(57),r=a(206),u=a(8),d=a(203),m=a.n(d),b=a(208),p=a(16);t.default=()=>{const e=Object(s.useRouteMatch)(),t=Object(b.a)(!1),[a,d]=Object(l.useState)(),[f]=i.Form.useForm(),{tableProps:g,search:v,refresh:O,update:E,add:j,remove:h}=Object(o.a)((e,t)=>u.E(Object.assign(Object.assign({},e),t)).then(e=>({total:e.total,list:e.data})),{defaultPageSize:20,form:f}),{submit:F}=v||{},y=[{title:"业务名称",dataIndex:"name"},{title:"logo",key:"logo",render:(e,t)=>n.a.createElement("img",{src:Object(p.b)(t.logo),style:{width:"100px"}})},{title:"状态",key:"status",render:(e,t)=>n.a.createElement(i.Switch,{checked:!!t.status,onChange:e=>{u.Qb(t.id,{status:e?1:0}),E(t.id,{status:e?1:0})}})},{title:"跟新时间",key:"update_time",render:e=>m()(e.update_time).format("YYYY-MM-DD HH:mm")},{title:"跟新人",dataIndex:"update_by"},{title:"操作",key:"action",render:e=>n.a.createElement("div",null,n.a.createElement(i.Button,{onClick:()=>(d(e),void t.toggle()),type:"link"},"修改"),n.a.createElement(i.Button,{onClick:()=>{return t=e,u.zb(t.id),void h(t.id);var t},type:"link"},"删除"))}];return n.a.createElement("div",null,n.a.createElement(r.a,{visible:!1},n.a.createElement(i.Form,{form:f,layout:"inline"},n.a.createElement(i.Form.Item,{name:"name"},n.a.createElement(i.Input.Search,{placeholder:"名字",onSearch:F})),n.a.createElement(i.Form.Item,{name:"status"},n.a.createElement(i.Select,{placeholder:"状态",style:{width:"140px"},allowClear:!0,onChange:F},n.a.createElement(i.Select.Option,{value:"0"},"暂停"),n.a.createElement(i.Select.Option,{value:"1"},"启用")))),n.a.createElement("div",null,n.a.createElement(i.Button,{type:"primary",onClick:()=>{d(void 0),t.toggle()}},"新增"),"  ",n.a.createElement(i.Button,{onClick:O},"刷新"))),n.a.createElement(i.Table,Object.assign({columns:y,rowKey:"id"},g)),n.a.createElement(c.default,{id:parseInt(e.params.id),visible:t.state,disabled:g.dataSource.map(e=>e.code),data:a,setVisible:t.toggle,onOk:(e,t)=>{console.log(t),"update"===e?E(t.id,t):j(t)}}))}},202:function(e,t,a){(t=a(15)(!1)).push([e.i,"/** @format */\n.toolsBar {\n  background: #fff;\n  padding-bottom: 15px;\n}\n.toolsBar.toolsBar_space {\n  padding: 12px;\n}\n.toolsBar .toolsBar-content {\n  padding: 10px;\n  background: #f4f4f4;\n  margin-top: 5px;\n}\n",""]),e.exports=t},203:function(e,t,a){e.exports=a(6)(3e3)},205:function(e,t,a){"use strict";var l=a(5),n=a(214),s=a(1);t.a=function(e,t){var a;const{form:i}=t,o=Object(l.b)(t,["form"]),c=Object(n.a)(e,Object.assign(Object.assign({},o),{paginated:!0,manual:!0})),{params:r,run:u,mutate:d}=c,m=r[2]||{},[b,p]=Object(s.useState)(m.type||"simple"),[f,g]=Object(s.useState)(m.allFormData||{}),v=Object(s.useCallback)(()=>{if(i.getFieldInstance){const e=i.getFieldsValue(),t={};return Object.keys(e).forEach(a=>{i.getFieldInstance&&!i.getFieldInstance(a)||(t[a]=e[a])}),t}return i.getFieldsValue(null,()=>!0)},[i]);Object(s.useEffect)(()=>{if(i.getFieldInstance){const e={};Object.keys(f).forEach(t=>{i.getFieldInstance&&!i.getFieldInstance(t)||(e[t]=f[t])}),i.setFieldsValue(e)}else i.setFieldsValue(f)},[b]),Object(s.useEffect)(()=>{r.length>0?u(...r):t.manual||E()},[]);const O=Object(s.useCallback)(()=>{const e=v();g(Object.assign(Object.assign({},f),e)),p("simple"===b?"advance":"simple")},[b,f,v]),E=Object(s.useCallback)(e=>{(null==e?void 0:e.preventDefault)&&e.preventDefault(),setTimeout(()=>{const e=v();console.log(1111,e);const t=Object.assign(Object.assign({},f),e);g(t),u(Object.assign(Object.assign({},r[0]||{}),{current:1}),e,{allFormData:t,type:b})})},[v,u,r,f,b]),j=Object(s.useCallback)(()=>{i.resetFields(),E()},[i,E]);return Object.assign(Object.assign({},c),{search:{submit:E,type:b,changeType:O,reset:j},remove:e=>{d(t=>{const a=t.list.slice();return a.forEach((t,l)=>{t.id===e&&a.splice(l,1)}),Object.assign(Object.assign({},t),{list:a})})},add:e=>{d(t=>{const a=t.list.slice();return a.push(e),Object.assign(Object.assign({},t),{list:a})})},update:(e,t)=>{d(a=>{const l=a.list.slice();return l.forEach((a,n)=>{a.id===e&&(l[n]=Object.assign(Object.assign({},a),t))}),Object.assign(Object.assign({},a),{list:l})})},dataSource:(null===(a=c.data)||void 0===a?void 0:a.list)||[]})}},206:function(e,t,a){"use strict";var l=a(1),n=a.n(l),s=a(21),i=a.n(s);a(207);const o=({visible:e,content:t,space:a,children:l})=>n.a.createElement("div",{className:i()({toolsBar_space:a},"toolsBar")},n.a.createElement("div",{className:"flex flex_between"},l),n.a.createElement("div",{style:{display:e?"block":"none"},className:"toolsBar-content"},t));o.defaultProps={visible:!1,space:!1},t.a=o},207:function(e,t,a){var l=a(14),n=a(202);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[e.i,n,""]]);var s={insert:"head",singleton:!1},i=l(n,s);if(!n.locals||e.hot.invalidate){var o=n.locals;e.hot.accept(202,(function(){"string"==typeof(n=(n=a(202)).__esModule?n.default:n)&&(n=[[e.i,n,""]]),function(e,t){if(!e&&t||e&&!t)return!1;var a;for(a in e)if(e[a]!==t[a])return!1;for(a in t)if(!e[a])return!1;return!0}(o,n.locals)?(o=n.locals,i(n)):e.hot.invalidate()}))}e.hot.dispose((function(){i()})),e.exports=n.locals||{}},209:function(e,t,a){e.exports=a(6)(408)},210:function(e,t,a){e.exports=a(6)(2717)},211:function(e,t,a){e.exports=a(6)(75)},213:function(e,t,a){"use strict";var l=a(1),n=a.n(l),s=a(4),i=a(210),o=a(8);function c(e){const t="image/jpeg"===e.type||"image/png"===e.type;t||s.message.error("You can only upload JPG/PNG file!");const a=e.size/1024/1024<.5;return a||s.message.error("Image must smaller than 500Kb!"),t&&a}t.a=e=>{const[t,a]=Object(l.useState)(!1),[r,u]=Object(l.useState)(""),[d,m]=Object(l.useState)("");Object(l.useEffect)(()=>{Object(o.nb)().then(e=>{m(e.data)})},[]),Object(l.useEffect)(()=>{u(e.value?e.value:"")},[e.value]);const b=n.a.createElement("div",null,t?n.a.createElement(i.LoadingOutlined,null):n.a.createElement(i.PlusOutlined,null),n.a.createElement("div",{className:"ant-upload-text"},"Upload"));return n.a.createElement(s.Upload,{name:"file",data:()=>({token:d}),listType:"picture-card",className:"avatar-uploader",showUploadList:!1,action:"https://up-z2.qiniup.com",beforeUpload:c,onChange:t=>{var l;if("uploading"!==t.file.status){if("done"===t.file.status){console.log(t.fileList[0].response.data);const n="http://static.kuaidaxy.com/"+t.fileList.pop().response.key;null===(l=e.onChange)||void 0===l||l.call(e,n.replace("https://","")),function(e,t){const a=new FileReader;a.addEventListener("load",()=>t(a.result)),a.readAsDataURL(e)}(t.file.originFileObj,e=>{a(!1),u(e)})}}else a(!0)}},r?n.a.createElement("img",{src:r,alt:"avatar",style:{width:"100%"}}):b)}},57:function(e,t,a){"use strict";a.r(t);var l=a(5),n=a(1),s=a.n(n),i=a(4),o=a(8),c=a(208),r=a(213);const u={labelCol:{span:4},wrapperCol:{span:20}},d=e=>{var t,{data:a}=e,d=Object(l.b)(e,["data"]);const[m]=i.Form.useForm(),b=Object(c.b)(()=>o.N("business",{cache:1}));Object(n.useEffect)(()=>{d.visible&&setTimeout(()=>{a?m.setFieldsValue(Object.assign({},a)):(m.resetFields(),m.setFieldsValue({status:1,sort:1}))})},[d.visible]);const p=Object(n.useCallback)(e=>{var t;const a=null===(t=b.data)||void 0===t?void 0:t.data.find(t=>t.label===e);a&&m.setFieldsValue({logo:a.logo,code:a.value,name:a.label})},[b]);return s.a.createElement(i.Modal,{title:(null==a?void 0:a.id)?"编辑":"添加",maskClosable:!1,visible:d.visible,onCancel:()=>d.setVisible(),onOk:e=>{e.preventDefault(),m.validateFields().then(e=>Object(l.a)(void 0,void 0,void 0,(function*(){var t;const l=Object.assign(Object.assign({},a),e);(null==a?void 0:a.id)?yield o.Qb(a.id,e):yield o.d(e),d.setVisible(),null===(t=d.onOk)||void 0===t||t.call(d,(null==a?void 0:a.id)?"update":"create",l)})))}},s.a.createElement(i.Form,Object.assign({form:m},u),s.a.createElement(i.Form.Item,{label:"服务",name:"code",rules:[{required:!0}]},s.a.createElement(i.Select,{onChange:p},null===(t=b.data)||void 0===t?void 0:t.data.map(e=>{var t;return s.a.createElement(i.Select.Option,{key:e.value,value:e.value,disabled:null===(t=d.disabled)||void 0===t?void 0:t.includes(e.value)},e.label)}))),s.a.createElement(i.Form.Item,{label:"服务名称",name:"name",rules:[{required:!0,message:"请填写服务名称"}]},s.a.createElement(i.Input,null)),s.a.createElement(i.Form.Item,{label:"服务名",name:"code"},s.a.createElement(i.Input,{disabled:!0})),s.a.createElement(i.Form.Item,{label:"图片地址",name:"logo",getValueFromEvent:e=>e,rules:[{required:!0}],extra:"建议尺寸100 * 100"},s.a.createElement(r.a,null)),s.a.createElement(i.Form.Item,{label:"状态",name:"status"},s.a.createElement(i.Radio.Group,null,s.a.createElement(i.Radio,{value:1},"启用"),s.a.createElement(i.Radio,{value:0},"禁用"))),s.a.createElement(i.Form.Item,{label:"排序",name:"sort"},s.a.createElement(i.InputNumber,null))))};d.defaultProps={disabled:[]},t.default=d}}]);