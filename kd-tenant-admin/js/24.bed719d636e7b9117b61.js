(window.webpackJsonp=window.webpackJsonp||[]).push([[24,72],{152:function(e,t,a){"use strict";a.r(t);var n=a(5),l=a(1),s=a.n(l),i=a(4),c=a(3),r=a(207),o=a(208),u=a(8),m=a(206),d=a.n(m),p=a(39),b=a(211),g=a(16);const f=(e,t)=>u.S(Object.assign(Object.assign({},e),t)).then(e=>({total:e.total,list:e.data}));t.default=()=>{const[e]=i.Form.useForm(),t=Object(c.useHistory)(),a=Object(b.a)(!1),{tableProps:l,search:m,refresh:v,add:O,update:E}=Object(r.a)(f,{defaultPageSize:20,form:e}),{type:j,changeType:h,submit:y,reset:F}=m||{},k=[{title:"id",dataIndex:"id"},{title:"logo",key:"logo",render:(e,t)=>s.a.createElement("img",{src:Object(g.b)(t.logo),width:"30"})},{title:"名称",dataIndex:"name"},{title:"店长",dataIndex:"user_id"},{title:"电话",dataIndex:"mobile"},{title:"营业时间",dataIndex:"business_hours"},{title:"备注",dataIndex:"remark"},{title:"状态",key:"status",render:(e,t)=>s.a.createElement(i.Switch,{checked:!!t.status,onChange:e=>((e,t)=>{E(t.id,Object.assign(Object.assign({},t),{status:e?1:0})),u.ec(t.id,{status:e?1:0})})(e,t)})},{title:"创建时间",key:"create_time",render:e=>s.a.createElement("span",null," ",d()(e.create_time).format("YYYY-MM-DD"))},{title:"操作",key:"action",render:e=>s.a.createElement("div",null,s.a.createElement(i.Button,{onClick:()=>(e=>Object(n.a)(void 0,void 0,void 0,(function*(){t.push({pathname:`/shop/driving/${e.id}`})})))(e),type:"link"},"详情"))}],I=s.a.createElement(i.Form,{form:e,layout:"inline"},s.a.createElement(i.Form.Item,{name:"name",label:"名字"},s.a.createElement(i.Input,{placeholder:"名字",style:{width:140,marginRight:16}})),s.a.createElement(i.Form.Item,{name:"mobile",label:"电话"},s.a.createElement(i.Input,{placeholder:"电话",style:{width:140,marginRight:16}})),s.a.createElement(i.Form.Item,{name:"status",label:"状态"},s.a.createElement(i.Select,{placeholder:"状态",style:{width:140,marginRight:16},allowClear:!0},s.a.createElement(i.Select.Option,{value:"0"},"暂停"),s.a.createElement(i.Select.Option,{value:"1"},"启用"))),s.a.createElement(i.Button,{type:"primary",onClick:y},"搜索"),"  ",s.a.createElement(i.Button,{onClick:F},"重置"));return s.a.createElement("div",null,s.a.createElement(o.a,{visible:"simple"!==j,content:I},s.a.createElement("div",{className:"flex"},s.a.createElement(i.Form,{form:e,layout:"inline"},s.a.createElement(i.Form.Item,{name:"name"},s.a.createElement(i.Input.Search,{placeholder:"名字",onSearch:y})),s.a.createElement(i.Form.Item,{name:"status"},s.a.createElement(i.Select,{placeholder:"状态",style:{width:"140px"},allowClear:!0,onChange:y},s.a.createElement(i.Select.Option,{value:"0"},"暂停"),s.a.createElement(i.Select.Option,{value:"1"},"启用")))),s.a.createElement(i.Button,{type:"link",onClick:h},"高级搜索")),s.a.createElement("div",null,s.a.createElement(i.Button,{type:"primary",onClick:()=>Object(n.a)(void 0,void 0,void 0,(function*(){a.setTrue()}))},"新增"),"  ",s.a.createElement(i.Button,{onClick:v},"刷新"))),s.a.createElement("div",{style:{background:"#fff"}},s.a.createElement(i.Table,Object.assign({},l,{columns:k,rowKey:"id"}))),s.a.createElement(p.default,{categoryId:2,visible:a.state,setVisible:a.toggle,onOk:e=>{O(e)}}))}},205:function(e,t,a){(t=a(15)(!1)).push([e.i,"/** @format */\n.toolsBar {\n  background: #fff;\n  padding-bottom: 15px;\n}\n.toolsBar.toolsBar_space {\n  padding: 12px;\n}\n.toolsBar .toolsBar-content {\n  padding: 10px;\n  background: #f4f4f4;\n  margin-top: 5px;\n}\n",""]),e.exports=t},206:function(e,t,a){e.exports=a(6)(3e3)},207:function(e,t,a){"use strict";var n=a(5),l=a(217),s=a(1);t.a=function(e,t){var a;const{form:i}=t,c=Object(n.b)(t,["form"]),r=Object(l.a)(e,Object.assign(Object.assign({},c),{paginated:!0,manual:!0})),{params:o,run:u,mutate:m}=r,d=o[2]||{},[p,b]=Object(s.useState)(d.type||"simple"),[g,f]=Object(s.useState)(d.allFormData||{}),v=Object(s.useCallback)(()=>{if(i.getFieldInstance){const e=i.getFieldsValue(),t={};return Object.keys(e).forEach(a=>{i.getFieldInstance&&!i.getFieldInstance(a)||(t[a]=e[a])}),t}return i.getFieldsValue(null,()=>!0)},[i]);Object(s.useEffect)(()=>{if(i.getFieldInstance){const e={};Object.keys(g).forEach(t=>{i.getFieldInstance&&!i.getFieldInstance(t)||(e[t]=g[t])}),i.setFieldsValue(e)}else i.setFieldsValue(g)},[p]),Object(s.useEffect)(()=>{o.length>0?u(...o):t.manual||E()},[]);const O=Object(s.useCallback)(()=>{const e=v();f(Object.assign(Object.assign({},g),e)),b("simple"===p?"advance":"simple")},[p,g,v]),E=Object(s.useCallback)(e=>{(null==e?void 0:e.preventDefault)&&e.preventDefault(),setTimeout(()=>{const e=v();console.log(1111,e);const t=Object.assign(Object.assign({},g),e);f(t),u(Object.assign(Object.assign({},o[0]||{}),{current:1}),e,{allFormData:t,type:p})})},[v,u,o,g,p]),j=Object(s.useCallback)(()=>{i.resetFields(),E()},[i,E]);return Object.assign(Object.assign({},r),{search:{submit:E,type:p,changeType:O,reset:j},remove:e=>{m(t=>{const a=t.list.slice();return a.forEach((t,n)=>{t.id===e&&a.splice(n,1)}),Object.assign(Object.assign({},t),{list:a})})},add:e=>{m(t=>{const a=t.list.slice();return a.push(e),Object.assign(Object.assign({},t),{list:a})})},update:(e,t)=>{m(a=>{const n=a.list.slice();return n.forEach((a,l)=>{a.id===e&&(n[l]=Object.assign(Object.assign({},a),t))}),Object.assign(Object.assign({},a),{list:n})})},dataSource:(null===(a=r.data)||void 0===a?void 0:a.list)||[]})}},208:function(e,t,a){"use strict";var n=a(1),l=a.n(n),s=a(21),i=a.n(s);a(209);const c=({visible:e,content:t,space:a,children:n})=>l.a.createElement("div",{className:i()({toolsBar_space:a},"toolsBar")},l.a.createElement("div",{className:"flex flex_between"},n),l.a.createElement("div",{style:{display:e?"block":"none"},className:"toolsBar-content"},t));c.defaultProps={visible:!1,space:!1},t.a=c},209:function(e,t,a){var n=a(14),l=a(205);"string"==typeof(l=l.__esModule?l.default:l)&&(l=[[e.i,l,""]]);var s={insert:"head",singleton:!1},i=n(l,s);if(!l.locals||e.hot.invalidate){var c=l.locals;e.hot.accept(205,(function(){"string"==typeof(l=(l=a(205)).__esModule?l.default:l)&&(l=[[e.i,l,""]]),function(e,t){if(!e&&t||e&&!t)return!1;var a;for(a in e)if(e[a]!==t[a])return!1;for(a in t)if(!e[a])return!1;return!0}(c,l.locals)?(c=l.locals,i(l)):e.hot.invalidate()}))}e.hot.dispose((function(){i()})),e.exports=l.locals||{}},212:function(e,t,a){e.exports=a(6)(2717)},213:function(e,t,a){e.exports=a(6)(408)},214:function(e,t,a){e.exports=a(6)(75)},215:function(e,t,a){"use strict";var n=a(1),l=a.n(n),s=a(4),i=a(212),c=a(8);function r(e){const t="image/jpeg"===e.type||"image/png"===e.type;t||s.message.error("You can only upload JPG/PNG file!");const a=e.size/1024/1024<.5;return a||s.message.error("Image must smaller than 500Kb!"),t&&a}t.a=e=>{const[t,a]=Object(n.useState)(!1),[o,u]=Object(n.useState)(""),[m,d]=Object(n.useState)("");Object(n.useEffect)(()=>{Object(c.pb)().then(e=>{d(e.data)})},[]),Object(n.useEffect)(()=>{u(e.value?e.value:"")},[e.value]);const p=l.a.createElement("div",null,t?l.a.createElement(i.LoadingOutlined,null):l.a.createElement(i.PlusOutlined,null),l.a.createElement("div",{className:"ant-upload-text"},"Upload"));return l.a.createElement(s.Upload,{name:"file",data:()=>({token:m}),listType:"picture-card",className:"avatar-uploader",showUploadList:!1,action:"https://up-z2.qiniup.com",beforeUpload:r,onChange:t=>{var n;if("uploading"!==t.file.status){if("done"===t.file.status){console.log(t.fileList[0].response.data);const l="http://static.kuaidaxy.com/"+t.fileList.pop().response.key;null===(n=e.onChange)||void 0===n||n.call(e,l.replace("https://","")),function(e,t){const a=new FileReader;a.addEventListener("load",()=>t(a.result)),a.readAsDataURL(e)}(t.file.originFileObj,e=>{a(!1),u(e)})}}else a(!0)}},o?l.a.createElement("img",{src:o,alt:"avatar",style:{width:"100%"}}):p)}},39:function(e,t,a){"use strict";a.r(t);var n=a(5),l=a(1),s=a.n(l),i=a(4),c=a(8),r=a(215);const o={labelCol:{span:4},wrapperCol:{span:20}};t.default=e=>{var t=Object(n.b)(e,[]);const[a]=i.Form.useForm();Object(l.useEffect)(()=>{t.visible&&setTimeout(()=>{a.setFieldsValue({status:1,sort:1})},100)},[t.visible]);return s.a.createElement(i.Modal,{title:"添加",maskClosable:!1,visible:t.visible,onCancel:()=>t.setVisible(),onOk:e=>{e.preventDefault(),a.validateFields().then(e=>Object(n.a)(void 0,void 0,void 0,(function*(){var a;const n=yield c.u(Object.assign(Object.assign({},e),{category_id:t.categoryId}));t.setVisible(),null===(a=t.onOk)||void 0===a||a.call(t,Object.assign({id:n.data},e))})))}},s.a.createElement(i.Form,Object.assign({form:a},o),s.a.createElement(i.Form.Item,{label:"商店名字",name:"name",rules:[{required:!0}]},s.a.createElement(i.Input,null)),s.a.createElement(i.Form.Item,{label:"联系人",name:"contacts",rules:[{required:!0}]},s.a.createElement(i.Input,null)),s.a.createElement(i.Form.Item,{label:"联系电话",name:"mobile",rules:[{required:!0}]},s.a.createElement(i.Input,null)),s.a.createElement(i.Form.Item,{getValueFromEvent:e=>e,extra:"建议尺寸200 * 200",label:"logo",name:"logo",rules:[{required:!0}]},s.a.createElement(r.a,null))))}}}]);