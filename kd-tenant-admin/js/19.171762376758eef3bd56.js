(window.webpackJsonp=window.webpackJsonp||[]).push([[19,63,97],{122:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),s=a(4),i=a(205),o=a(58),c=a(206),r=a(8),u=a(203),d=a.n(u),m=a(208),b=a(233),p=a(40),f=(a(228),a(16));const{confirm:g}=s.Modal;t.default=()=>{const[e,t]=Object(n.useState)(0),a=Object(m.a)(!1),u=Object(m.a)(!1),[v,O]=Object(n.useState)(),[E]=s.Form.useForm(),{tableProps:j,search:h,refresh:y,update:F,add:k,remove:x}=Object(i.a)((e,t)=>r.H(Object.assign(Object.assign({},e),t)).then(e=>({total:e.total,list:e.data})),{defaultPageSize:20,form:E}),{submit:I}=h||{},C=[{title:"id",dataIndex:"id"},{title:"名称",dataIndex:"title"},{title:"显示位置",key:"position",render:(e,t)=>{var a;return null===(a=p.showPositionList.find(e=>e.value===t.position))||void 0===a?void 0:a.label}},{title:"地址",key:"url",render:(e,a,n)=>l.a.createElement("img",{onClick:()=>{t(n),u.toggle()},src:Object(f.b)(e.url),height:"80"})},{title:"创建时间",key:"create_time",render:e=>d()(e.create_time).format("YYYY-MM-DD HH:mm")},{title:"跟新人",dataIndex:"create_by"},{title:"跟新时间",key:"update_time",render:e=>d()(e.update_time).format("YYYY-MM-DD HH:mm")},{title:"跟新人",dataIndex:"update_by"},{title:"操作",key:"action",render:e=>l.a.createElement("div",null,l.a.createElement(s.Button,{onClick:()=>(O(e),void a.toggle()),type:"link"},"修改"),l.a.createElement(s.Button,{onClick:()=>{return t=e,void g({title:"提示",content:"真的真的确认删除该班型？此操作不可恢复哦？",onOk(){r.Bb(t.id),x(t.id)},onCancel(){}});var t},type:"link"},"删除"))}];return l.a.createElement("div",null,l.a.createElement(c.a,{visible:!1},l.a.createElement(s.Form,{form:E,layout:"inline"},l.a.createElement(s.Form.Item,{name:"name"},l.a.createElement(s.Input.Search,{placeholder:"名字",onSearch:I})),l.a.createElement(s.Form.Item,{name:"position"},l.a.createElement(s.Select,{placeholder:"显示位置",style:{width:"140px"},allowClear:!0,onChange:I},l.a.createElement(s.Select.Option,{value:"1"},"小程序显示"),l.a.createElement(s.Select.Option,{value:"2"},"外卖显示"))),l.a.createElement(s.Form.Item,{name:"status"},l.a.createElement(s.Select,{placeholder:"状态",style:{width:"140px"},allowClear:!0,onChange:I},l.a.createElement(s.Select.Option,{value:"0"},"暂停"),l.a.createElement(s.Select.Option,{value:"1"},"启用")))),l.a.createElement("div",null,l.a.createElement(s.Button,{type:"primary",onClick:()=>{O(void 0),a.toggle()}},"新增"),"  ",l.a.createElement(s.Button,{onClick:y},"刷新"))),l.a.createElement(s.Table,Object.assign({columns:C,rowKey:"id"},j)),l.a.createElement(o.default,{visible:a.state,data:v,setVisible:a.toggle,onOk:(e,t)=>{console.log(t),"update"===e?F(t.id,t):k(t)}}),l.a.createElement(b.a,{images:j.dataSource.map(e=>({src:Object(f.b)(e.url),intro:e.title})),visible:u.state,index:e,onClose:()=>u.toggle(),onIndexChange:t}))}},202:function(e,t,a){(t=a(15)(!1)).push([e.i,"/** @format */\n.toolsBar {\n  background: #fff;\n  padding-bottom: 15px;\n}\n.toolsBar.toolsBar_space {\n  padding: 12px;\n}\n.toolsBar .toolsBar-content {\n  padding: 10px;\n  background: #f4f4f4;\n  margin-top: 5px;\n}\n",""]),e.exports=t},203:function(e,t,a){e.exports=a(6)(3e3)},205:function(e,t,a){"use strict";var n=a(5),l=a(214),s=a(1);t.a=function(e,t){var a;const{form:i}=t,o=Object(n.b)(t,["form"]),c=Object(l.a)(e,Object.assign(Object.assign({},o),{paginated:!0,manual:!0})),{params:r,run:u,mutate:d}=c,m=r[2]||{},[b,p]=Object(s.useState)(m.type||"simple"),[f,g]=Object(s.useState)(m.allFormData||{}),v=Object(s.useCallback)(()=>{if(i.getFieldInstance){const e=i.getFieldsValue(),t={};return Object.keys(e).forEach(a=>{i.getFieldInstance&&!i.getFieldInstance(a)||(t[a]=e[a])}),t}return i.getFieldsValue(null,()=>!0)},[i]);Object(s.useEffect)(()=>{if(i.getFieldInstance){const e={};Object.keys(f).forEach(t=>{i.getFieldInstance&&!i.getFieldInstance(t)||(e[t]=f[t])}),i.setFieldsValue(e)}else i.setFieldsValue(f)},[b]),Object(s.useEffect)(()=>{r.length>0?u(...r):t.manual||E()},[]);const O=Object(s.useCallback)(()=>{const e=v();g(Object.assign(Object.assign({},f),e)),p("simple"===b?"advance":"simple")},[b,f,v]),E=Object(s.useCallback)(e=>{(null==e?void 0:e.preventDefault)&&e.preventDefault(),setTimeout(()=>{const e=v();console.log(1111,e);const t=Object.assign(Object.assign({},f),e);g(t),u(Object.assign(Object.assign({},r[0]||{}),{current:1}),e,{allFormData:t,type:b})})},[v,u,r,f,b]),j=Object(s.useCallback)(()=>{i.resetFields(),E()},[i,E]);return Object.assign(Object.assign({},c),{search:{submit:E,type:b,changeType:O,reset:j},remove:e=>{d(t=>{const a=t.list.slice();return a.forEach((t,n)=>{t.id===e&&a.splice(n,1)}),Object.assign(Object.assign({},t),{list:a})})},add:e=>{d(t=>{const a=t.list.slice();return a.push(e),Object.assign(Object.assign({},t),{list:a})})},update:(e,t)=>{d(a=>{const n=a.list.slice();return n.forEach((a,l)=>{a.id===e&&(n[l]=Object.assign(Object.assign({},a),t))}),Object.assign(Object.assign({},a),{list:n})})},dataSource:(null===(a=c.data)||void 0===a?void 0:a.list)||[]})}},206:function(e,t,a){"use strict";var n=a(1),l=a.n(n),s=a(21),i=a.n(s);a(207);const o=({visible:e,content:t,space:a,children:n})=>l.a.createElement("div",{className:i()({toolsBar_space:a},"toolsBar")},l.a.createElement("div",{className:"flex flex_between"},n),l.a.createElement("div",{style:{display:e?"block":"none"},className:"toolsBar-content"},t));o.defaultProps={visible:!1,space:!1},t.a=o},207:function(e,t,a){var n=a(14),l=a(202);"string"==typeof(l=l.__esModule?l.default:l)&&(l=[[e.i,l,""]]);var s={insert:"head",singleton:!1},i=n(l,s);if(!l.locals||e.hot.invalidate){var o=l.locals;e.hot.accept(202,(function(){"string"==typeof(l=(l=a(202)).__esModule?l.default:l)&&(l=[[e.i,l,""]]),function(e,t){if(!e&&t||e&&!t)return!1;var a;for(a in e)if(e[a]!==t[a])return!1;for(a in t)if(!e[a])return!1;return!0}(o,l.locals)?(o=l.locals,i(l)):e.hot.invalidate()}))}e.hot.dispose((function(){i()})),e.exports=l.locals||{}},209:function(e,t,a){e.exports=a(6)(408)},210:function(e,t,a){e.exports=a(6)(2717)},211:function(e,t,a){e.exports=a(6)(75)},213:function(e,t,a){"use strict";var n=a(1),l=a.n(n),s=a(4),i=a(210),o=a(8);function c(e){const t="image/jpeg"===e.type||"image/png"===e.type;t||s.message.error("You can only upload JPG/PNG file!");const a=e.size/1024/1024<.5;return a||s.message.error("Image must smaller than 500Kb!"),t&&a}t.a=e=>{const[t,a]=Object(n.useState)(!1),[r,u]=Object(n.useState)(""),[d,m]=Object(n.useState)("");Object(n.useEffect)(()=>{Object(o.nb)().then(e=>{m(e.data)})},[]),Object(n.useEffect)(()=>{u(e.value?e.value:"")},[e.value]);const b=l.a.createElement("div",null,t?l.a.createElement(i.LoadingOutlined,null):l.a.createElement(i.PlusOutlined,null),l.a.createElement("div",{className:"ant-upload-text"},"Upload"));return l.a.createElement(s.Upload,{name:"file",data:()=>({token:d}),listType:"picture-card",className:"avatar-uploader",showUploadList:!1,action:"https://up-z2.qiniup.com",beforeUpload:c,onChange:t=>{var n;if("uploading"!==t.file.status){if("done"===t.file.status){console.log(t.fileList[0].response.data);const l="http://static.kuaidaxy.com/"+t.fileList.pop().response.key;null===(n=e.onChange)||void 0===n||n.call(e,l.replace("https://","")),function(e,t){const a=new FileReader;a.addEventListener("load",()=>t(a.result)),a.readAsDataURL(e)}(t.file.originFileObj,e=>{a(!1),u(e)})}}else a(!0)}},r?l.a.createElement("img",{src:r,alt:"avatar",style:{width:"100%"}}):b)}},40:function(e,t,a){"use strict";a.r(t),a.d(t,"showPositionList",(function(){return n}));const n=[{value:1,label:"小程序显示"},{value:2,label:"外卖显示"}]},58:function(e,t,a){"use strict";a.r(t);var n=a(5),l=a(1),s=a.n(l),i=a(4),o=a(8),c=a(213),r=a(40);const u={labelCol:{span:4},wrapperCol:{span:20}};t.default=e=>{var{data:t}=e,a=Object(n.b)(e,["data"]);const[d]=i.Form.useForm();Object(l.useEffect)(()=>{a.visible&&setTimeout(()=>{t?d.setFieldsValue(Object.assign({},t)):(d.resetFields(),d.setFieldsValue({status:1,sort:1}))})},[a.visible]);return s.a.createElement(i.Modal,{title:(null==t?void 0:t.id)?"编辑":"添加",maskClosable:!1,visible:a.visible,onCancel:()=>a.setVisible(),onOk:e=>{e.preventDefault(),d.validateFields().then(e=>Object(n.a)(void 0,void 0,void 0,(function*(){var n;const l=Object.assign(Object.assign({},t),e);if(null==t?void 0:t.id)yield o.Tb(t.id,e);else{const t=yield o.f(Object.assign({},e));l.id=t.data}a.setVisible(),null===(n=a.onOk)||void 0===n||n.call(a,(null==t?void 0:t.id)?"update":"create",l)})))}},s.a.createElement(i.Form,Object.assign({form:d},u),s.a.createElement(i.Form.Item,{label:"图片名称",name:"title",rules:[{required:!0}]},s.a.createElement(i.Input,null)),s.a.createElement(i.Form.Item,{label:"现在位置",name:"position",rules:[{required:!0}]},s.a.createElement(i.Select,null,r.showPositionList.map(e=>s.a.createElement(i.Select.Option,{key:e.value,value:e.value},e.label)))),s.a.createElement(i.Form.Item,{label:"图片地址",name:"url",getValueFromEvent:e=>e,rules:[{required:!0}],extra:"建议尺寸750 * 400"},s.a.createElement(c.a,null)),s.a.createElement(i.Form.Item,{label:"状态",name:"status"},s.a.createElement(i.Radio.Group,null,s.a.createElement(i.Radio,{value:1},"启用"),s.a.createElement(i.Radio,{value:0},"禁用"))),s.a.createElement(i.Form.Item,{label:"排序",name:"sort"},s.a.createElement(i.InputNumber,null))))}}}]);