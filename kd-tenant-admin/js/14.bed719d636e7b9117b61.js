(window.webpackJsonp=window.webpackJsonp||[]).push([[14,127],{100:function(e,t,a){"use strict";a.r(t);var n=a(5),l=a(1),s=a.n(l),i=a(4),c=a(8);const o={labelCol:{span:4},wrapperCol:{span:20}};t.default=e=>{var{data:t}=e,a=Object(n.b)(e,["data"]);const[r]=i.Form.useForm();Object(l.useEffect)(()=>{a.visible&&setTimeout(()=>{t?r.setFieldsValue(Object.assign({},t)):(r.resetFields(),r.setFieldsValue({status:1,sort:1}))},100)},[a.visible]);return s.a.createElement(i.Modal,{title:(null==t?void 0:t.id)?"编辑":"添加",maskClosable:!1,visible:a.visible,onCancel:()=>a.setVisible(),onOk:e=>{e.preventDefault(),r.validateFields().then(e=>Object(n.a)(void 0,void 0,void 0,(function*(){var n;const l=Object.assign(Object.assign({},t),e);if(null==t?void 0:t.id)yield c.xc(t.id,e);else{const t=yield c.y(Object.assign(Object.assign({},e),{shop_id:a.id}));l.id=t.data}a.setVisible(),null===(n=a.onOk)||void 0===n||n.call(a,(null==t?void 0:t.id)?"update":"create",l)})))}},s.a.createElement(i.Form,Object.assign({form:r},o),s.a.createElement(i.Form.Item,{label:"分类名称",name:"name",rules:[{required:!0,message:"请填写分类名称"}]},s.a.createElement(i.Input,null)),s.a.createElement(i.Form.Item,{label:"状态",name:"status"},s.a.createElement(i.Radio.Group,null,s.a.createElement(i.Radio,{value:1},"启用"),s.a.createElement(i.Radio,{value:0},"禁用"))),s.a.createElement(i.Form.Item,{label:"排序",name:"sort"},s.a.createElement(i.InputNumber,null))))}},112:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),s=a(3),i=a(4),c=a(207),o=a(100),r=a(208),d=a(8),u=a(206),m=a.n(u),b=a(211);const{confirm:p}=i.Modal;t.default=()=>{const e=Object(s.useRouteMatch)(),t=Object(b.a)(!1),[a,u]=Object(n.useState)(),[f]=i.Form.useForm(),{tableProps:g,search:O,refresh:v,update:j,add:E,remove:h}=Object(c.a)((t,a)=>d.zb(Object.assign(Object.assign({shop_id:e.params.id},t),a)).then(e=>({total:e.total,list:e.data})),{defaultPageSize:20,form:f}),{submit:F}=O||{},k=[{title:"id",dataIndex:"id"},{title:"分类名称",dataIndex:"name"},{title:"创建时间",key:"create_time",render:e=>m()(e.create_time).format("YYYY-MM-DD HH:mm")},{title:"跟新人",dataIndex:"create_by"},{title:"跟新时间",key:"update_time",render:e=>m()(e.update_time).format("YYYY-MM-DD HH:mm")},{title:"跟新人",dataIndex:"update_by"},{title:"操作",key:"action",render:e=>l.a.createElement("div",null,l.a.createElement(i.Button,{onClick:()=>(u(e),void t.toggle()),type:"link"},"修改"),l.a.createElement(i.Button,{onClick:()=>{return t=e,void p({title:"提示",content:"真的真的确认删除该班型？此操作不可恢复哦？",onOk:()=>(h(t.id),d.Ob(t.id)),onCancel(){}});var t},type:"link"},"删除"))}];return l.a.createElement("div",null,l.a.createElement(r.a,{space:!0,visible:!1},l.a.createElement(i.Form,{form:f,layout:"inline"},l.a.createElement(i.Form.Item,{name:"name"},l.a.createElement(i.Input.Search,{placeholder:"名字",onSearch:F})),l.a.createElement(i.Form.Item,{name:"status"},l.a.createElement(i.Select,{placeholder:"状态",style:{width:"140px"},allowClear:!0,onChange:F},l.a.createElement(i.Select.Option,{value:"0"},"暂停"),l.a.createElement(i.Select.Option,{value:"1"},"启用")))),l.a.createElement("div",null,l.a.createElement(i.Button,{type:"primary",onClick:()=>{u(void 0),t.toggle()}},"新增"),"  ",l.a.createElement(i.Button,{onClick:v},"刷新"))),l.a.createElement(i.Table,Object.assign({columns:k,rowKey:"id"},g)),l.a.createElement(o.default,{id:parseInt(e.params.id),visible:t.state,data:a,setVisible:t.toggle,onOk:(e,t)=>{console.log(t),"update"===e?j(t.id,t):E(t)}}))}},205:function(e,t,a){(t=a(15)(!1)).push([e.i,"/** @format */\n.toolsBar {\n  background: #fff;\n  padding-bottom: 15px;\n}\n.toolsBar.toolsBar_space {\n  padding: 12px;\n}\n.toolsBar .toolsBar-content {\n  padding: 10px;\n  background: #f4f4f4;\n  margin-top: 5px;\n}\n",""]),e.exports=t},206:function(e,t,a){e.exports=a(6)(3e3)},207:function(e,t,a){"use strict";var n=a(5),l=a(217),s=a(1);t.a=function(e,t){var a;const{form:i}=t,c=Object(n.b)(t,["form"]),o=Object(l.a)(e,Object.assign(Object.assign({},c),{paginated:!0,manual:!0})),{params:r,run:d,mutate:u}=o,m=r[2]||{},[b,p]=Object(s.useState)(m.type||"simple"),[f,g]=Object(s.useState)(m.allFormData||{}),O=Object(s.useCallback)(()=>{if(i.getFieldInstance){const e=i.getFieldsValue(),t={};return Object.keys(e).forEach(a=>{i.getFieldInstance&&!i.getFieldInstance(a)||(t[a]=e[a])}),t}return i.getFieldsValue(null,()=>!0)},[i]);Object(s.useEffect)(()=>{if(i.getFieldInstance){const e={};Object.keys(f).forEach(t=>{i.getFieldInstance&&!i.getFieldInstance(t)||(e[t]=f[t])}),i.setFieldsValue(e)}else i.setFieldsValue(f)},[b]),Object(s.useEffect)(()=>{r.length>0?d(...r):t.manual||j()},[]);const v=Object(s.useCallback)(()=>{const e=O();g(Object.assign(Object.assign({},f),e)),p("simple"===b?"advance":"simple")},[b,f,O]),j=Object(s.useCallback)(e=>{(null==e?void 0:e.preventDefault)&&e.preventDefault(),setTimeout(()=>{const e=O();console.log(1111,e);const t=Object.assign(Object.assign({},f),e);g(t),d(Object.assign(Object.assign({},r[0]||{}),{current:1}),e,{allFormData:t,type:b})})},[O,d,r,f,b]),E=Object(s.useCallback)(()=>{i.resetFields(),j()},[i,j]);return Object.assign(Object.assign({},o),{search:{submit:j,type:b,changeType:v,reset:E},remove:e=>{u(t=>{const a=t.list.slice();return a.forEach((t,n)=>{t.id===e&&a.splice(n,1)}),Object.assign(Object.assign({},t),{list:a})})},add:e=>{u(t=>{const a=t.list.slice();return a.push(e),Object.assign(Object.assign({},t),{list:a})})},update:(e,t)=>{u(a=>{const n=a.list.slice();return n.forEach((a,l)=>{a.id===e&&(n[l]=Object.assign(Object.assign({},a),t))}),Object.assign(Object.assign({},a),{list:n})})},dataSource:(null===(a=o.data)||void 0===a?void 0:a.list)||[]})}},208:function(e,t,a){"use strict";var n=a(1),l=a.n(n),s=a(21),i=a.n(s);a(209);const c=({visible:e,content:t,space:a,children:n})=>l.a.createElement("div",{className:i()({toolsBar_space:a},"toolsBar")},l.a.createElement("div",{className:"flex flex_between"},n),l.a.createElement("div",{style:{display:e?"block":"none"},className:"toolsBar-content"},t));c.defaultProps={visible:!1,space:!1},t.a=c},209:function(e,t,a){var n=a(14),l=a(205);"string"==typeof(l=l.__esModule?l.default:l)&&(l=[[e.i,l,""]]);var s={insert:"head",singleton:!1},i=n(l,s);if(!l.locals||e.hot.invalidate){var c=l.locals;e.hot.accept(205,(function(){"string"==typeof(l=(l=a(205)).__esModule?l.default:l)&&(l=[[e.i,l,""]]),function(e,t){if(!e&&t||e&&!t)return!1;var a;for(a in e)if(e[a]!==t[a])return!1;for(a in t)if(!e[a])return!1;return!0}(c,l.locals)?(c=l.locals,i(l)):e.hot.invalidate()}))}e.hot.dispose((function(){i()})),e.exports=l.locals||{}},213:function(e,t,a){e.exports=a(6)(408)},214:function(e,t,a){e.exports=a(6)(75)}}]);