(window.webpackJsonp=window.webpackJsonp||[]).push([[42,103],{125:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),s=a(3),i=a(4),c=a(207),o=a(63),r=a(208),u=a(8),d=a(206),m=a.n(d),b=a(211);t.default=()=>{const e=Object(s.useRouteMatch)(),t=Object(b.a)(!1),[a,d]=Object(n.useState)(),[p]=i.Form.useForm(),{tableProps:f,search:g,refresh:v,update:O,add:j,remove:E}=Object(c.a)((e,t)=>u.K(Object.assign(Object.assign({},e),t)).then(e=>({total:e.total,list:e.data})),{defaultPageSize:20,form:p}),{submit:h}=g||{},F=[{title:"id",dataIndex:"id"},{title:"公告名称",dataIndex:"title"},{title:"公告名称",dataIndex:"content"},{title:"状态",key:"status",render:(e,t)=>l.a.createElement(i.Switch,{checked:!!t.status,onChange:e=>{u.Yb(t.id,{status:e?1:0}),O(t.id,{status:e?1:0})}})},{title:"跟新时间",key:"update_time",render:e=>m()(e.update_time).format("YYYY-MM-DD HH:mm")},{title:"跟新人",dataIndex:"update_by"},{title:"操作",key:"action",render:e=>l.a.createElement("div",null,l.a.createElement(i.Button,{onClick:()=>(d(e),void t.toggle()),type:"link"},"修改"),l.a.createElement(i.Button,{onClick:()=>{return t=e,u.Fb(t.id),void E(t.id);var t},type:"link"},"删除"))}];return l.a.createElement("div",null,l.a.createElement(r.a,{visible:!1},l.a.createElement(i.Form,{form:p,layout:"inline"},l.a.createElement(i.Form.Item,{name:"name"},l.a.createElement(i.Input.Search,{placeholder:"名字",onSearch:h})),l.a.createElement(i.Form.Item,{name:"status"},l.a.createElement(i.Select,{placeholder:"状态",style:{width:"140px"},allowClear:!0,onChange:h},l.a.createElement(i.Select.Option,{value:"0"},"暂停"),l.a.createElement(i.Select.Option,{value:"1"},"启用")))),l.a.createElement("div",null,l.a.createElement(i.Button,{type:"primary",onClick:()=>{d(void 0),t.toggle()}},"新增"),"  ",l.a.createElement(i.Button,{onClick:v},"刷新"))),l.a.createElement(i.Table,Object.assign({columns:F,rowKey:"id"},f)),l.a.createElement(o.default,{id:parseInt(e.params.id),visible:t.state,data:a,setVisible:t.toggle,onOk:(e,t)=>{console.log(t),"update"===e?O(t.id,t):j(t)}}))}},205:function(e,t,a){(t=a(15)(!1)).push([e.i,"/** @format */\n.toolsBar {\n  background: #fff;\n  padding-bottom: 15px;\n}\n.toolsBar.toolsBar_space {\n  padding: 12px;\n}\n.toolsBar .toolsBar-content {\n  padding: 10px;\n  background: #f4f4f4;\n  margin-top: 5px;\n}\n",""]),e.exports=t},206:function(e,t,a){e.exports=a(6)(3e3)},207:function(e,t,a){"use strict";var n=a(5),l=a(217),s=a(1);t.a=function(e,t){var a;const{form:i}=t,c=Object(n.b)(t,["form"]),o=Object(l.a)(e,Object.assign(Object.assign({},c),{paginated:!0,manual:!0})),{params:r,run:u,mutate:d}=o,m=r[2]||{},[b,p]=Object(s.useState)(m.type||"simple"),[f,g]=Object(s.useState)(m.allFormData||{}),v=Object(s.useCallback)(()=>{if(i.getFieldInstance){const e=i.getFieldsValue(),t={};return Object.keys(e).forEach(a=>{i.getFieldInstance&&!i.getFieldInstance(a)||(t[a]=e[a])}),t}return i.getFieldsValue(null,()=>!0)},[i]);Object(s.useEffect)(()=>{if(i.getFieldInstance){const e={};Object.keys(f).forEach(t=>{i.getFieldInstance&&!i.getFieldInstance(t)||(e[t]=f[t])}),i.setFieldsValue(e)}else i.setFieldsValue(f)},[b]),Object(s.useEffect)(()=>{r.length>0?u(...r):t.manual||j()},[]);const O=Object(s.useCallback)(()=>{const e=v();g(Object.assign(Object.assign({},f),e)),p("simple"===b?"advance":"simple")},[b,f,v]),j=Object(s.useCallback)(e=>{(null==e?void 0:e.preventDefault)&&e.preventDefault(),setTimeout(()=>{const e=v();console.log(1111,e);const t=Object.assign(Object.assign({},f),e);g(t),u(Object.assign(Object.assign({},r[0]||{}),{current:1}),e,{allFormData:t,type:b})})},[v,u,r,f,b]),E=Object(s.useCallback)(()=>{i.resetFields(),j()},[i,j]);return Object.assign(Object.assign({},o),{search:{submit:j,type:b,changeType:O,reset:E},remove:e=>{d(t=>{const a=t.list.slice();return a.forEach((t,n)=>{t.id===e&&a.splice(n,1)}),Object.assign(Object.assign({},t),{list:a})})},add:e=>{d(t=>{const a=t.list.slice();return a.push(e),Object.assign(Object.assign({},t),{list:a})})},update:(e,t)=>{d(a=>{const n=a.list.slice();return n.forEach((a,l)=>{a.id===e&&(n[l]=Object.assign(Object.assign({},a),t))}),Object.assign(Object.assign({},a),{list:n})})},dataSource:(null===(a=o.data)||void 0===a?void 0:a.list)||[]})}},208:function(e,t,a){"use strict";var n=a(1),l=a.n(n),s=a(21),i=a.n(s);a(209);const c=({visible:e,content:t,space:a,children:n})=>l.a.createElement("div",{className:i()({toolsBar_space:a},"toolsBar")},l.a.createElement("div",{className:"flex flex_between"},n),l.a.createElement("div",{style:{display:e?"block":"none"},className:"toolsBar-content"},t));c.defaultProps={visible:!1,space:!1},t.a=c},209:function(e,t,a){var n=a(14),l=a(205);"string"==typeof(l=l.__esModule?l.default:l)&&(l=[[e.i,l,""]]);var s={insert:"head",singleton:!1},i=n(l,s);if(!l.locals||e.hot.invalidate){var c=l.locals;e.hot.accept(205,(function(){"string"==typeof(l=(l=a(205)).__esModule?l.default:l)&&(l=[[e.i,l,""]]),function(e,t){if(!e&&t||e&&!t)return!1;var a;for(a in e)if(e[a]!==t[a])return!1;for(a in t)if(!e[a])return!1;return!0}(c,l.locals)?(c=l.locals,i(l)):e.hot.invalidate()}))}e.hot.dispose((function(){i()})),e.exports=l.locals||{}},213:function(e,t,a){e.exports=a(6)(408)},214:function(e,t,a){e.exports=a(6)(75)},63:function(e,t,a){"use strict";a.r(t);var n=a(5),l=a(1),s=a.n(l),i=a(4),c=a(8);const o={labelCol:{span:4},wrapperCol:{span:20}},r=e=>{var{data:t}=e,a=Object(n.b)(e,["data"]);const[r]=i.Form.useForm();Object(l.useEffect)(()=>{a.visible&&setTimeout(()=>{t?r.setFieldsValue(Object.assign({},t)):(r.resetFields(),r.setFieldsValue({status:1,sort:1}))})},[a.visible]);return s.a.createElement(i.Modal,{title:(null==t?void 0:t.id)?"编辑":"添加",maskClosable:!1,visible:a.visible,onCancel:()=>a.setVisible(),onOk:e=>{e.preventDefault(),r.validateFields().then(e=>Object(n.a)(void 0,void 0,void 0,(function*(){var n;const l=Object.assign(Object.assign({},t),e);(null==t?void 0:t.id)?yield c.Yb(t.id,e):yield c.g(e),a.setVisible(),null===(n=a.onOk)||void 0===n||n.call(a,(null==t?void 0:t.id)?"update":"create",l)})))}},s.a.createElement(i.Form,Object.assign({form:r},o),s.a.createElement(i.Form.Item,{label:"名称",name:"title"},s.a.createElement(i.Input,null)),s.a.createElement(i.Form.Item,{label:"内容",name:"content"},s.a.createElement(i.Input.TextArea,null)),s.a.createElement(i.Form.Item,{label:"状态",name:"status"},s.a.createElement(i.Radio.Group,null,s.a.createElement(i.Radio,{value:1},"启用"),s.a.createElement(i.Radio,{value:0},"禁用"))),s.a.createElement(i.Form.Item,{label:"排序",name:"sort"},s.a.createElement(i.InputNumber,null))))};r.defaultProps={disabled:[]},t.default=r}}]);