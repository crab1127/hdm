(window.webpackJsonp=window.webpackJsonp||[]).push([[37,96],{116:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),s=a(3),i=a(4),c=a(207),r=a(53),o=a(208),d=a(8),u=a(206),m=a.n(u),b=a(211),p=a(16),g=a(239);a(234);t.default=()=>{const[e,t]=Object(n.useState)(0),[a,u]=Object(n.useState)([]),[f,v]=Object(n.useState)(),O=Object(s.useRouteMatch)(),j=Object(b.a)(!1),h=Object(b.a)(!1),[E]=i.Form.useForm(),{data:y}=Object(b.b)(()=>Object(d.P)("classified_category").then(e=>e.data.filter(e=>"6"===e.parent_id))),{tableProps:k,search:F,refresh:I,update:_,add:w}=Object(c.a)((e,t)=>d.D(Object.assign(Object.assign({category_id:6},e),t)).then(e=>({total:e.total,list:e.data})),{defaultPageSize:20,form:E}),{submit:x}=F||{};console.log("onAdd: ",()=>{v(void 0),j.toggle()});const C=(e,t)=>{d.Rb(e,t),_(e,t)},B=[{title:"id",dataIndex:"id",width:60},{title:"分类",key:"type_id",render:(e,t)=>{var a,n;return null!==(n=null===(a=null==y?void 0:y.find(e=>parseInt(e.value)===t.type_id))||void 0===a?void 0:a.label)&&void 0!==n?n:t.type_id},width:100},{title:"内容",key:"content",render:(e,a)=>l.a.createElement("div",null,l.a.createElement("div",null,a.content),a.attach&&a.attach.split(",").map((e,n)=>l.a.createElement("img",{key:e,src:Object(p.b)(e),onClick:()=>((e,a)=>{u(a.split(",").map(e=>({src:Object(p.b)(e),intro:""}))),t(e),h.toggle()})(n,a.attach),width:"50"})))},{title:"状态",key:"status",render:(e,t)=>t.status&&t.online?"显示":"隐藏",width:80},{title:"置顶",key:"has_recommend",render:(e,t)=>t.has_recommend?"置顶":"-",width:80},{title:"浏览数",dataIndex:"pv",width:80},{title:"点赞数",dataIndex:"like",width:80},{title:"创建时间",key:"create_time",width:130,render:e=>m()(e.create_time).format("YYYY-MM-DD HH:mm")},{title:"发布人",dataIndex:"create_by",width:100},{title:"操作",key:"action",width:150,fixed:"right",render:e=>l.a.createElement("div",null,l.a.createElement(i.Button,{size:"small",onClick:()=>C(e.id,{online:e.online?0:1}),type:"link"},e.online?"下架":"上架"),l.a.createElement(i.Button,{size:"small",onClick:()=>C(e.id,{has_recommend:e.has_recommend?0:1}),type:"link"},e.has_recommend?"取消推荐":"推荐"))}];return l.a.createElement("div",null,l.a.createElement(o.a,{visible:!1},l.a.createElement(i.Form,{form:E,layout:"inline"},l.a.createElement(i.Form.Item,{name:"name"},l.a.createElement(i.Input.Search,{placeholder:"名字",onSearch:x})),l.a.createElement(i.Form.Item,{name:"type_id"},l.a.createElement(i.Select,{placeholder:"分类",style:{width:"140px"},allowClear:!0,onChange:x},null==y?void 0:y.map(e=>l.a.createElement(i.Select.Option,{key:e.id,value:e.value},e.label))))),l.a.createElement("div",null,"  ",l.a.createElement(i.Button,{onClick:I},"刷新"))),l.a.createElement(i.Table,Object.assign({columns:B,scroll:{x:1500},rowKey:"id"},k)),l.a.createElement(r.default,{id:parseInt(O.params.id),visible:j.state,data:f,setVisible:j.toggle,onOk:(e,t)=>{console.log(t),"update"===e?_(t.id,t):w(t)}}),l.a.createElement(g.a,{images:a,visible:h.state,index:e,onClose:()=>h.toggle(),onIndexChange:t}))}},205:function(e,t,a){(t=a(15)(!1)).push([e.i,"/** @format */\n.toolsBar {\n  background: #fff;\n  padding-bottom: 15px;\n}\n.toolsBar.toolsBar_space {\n  padding: 12px;\n}\n.toolsBar .toolsBar-content {\n  padding: 10px;\n  background: #f4f4f4;\n  margin-top: 5px;\n}\n",""]),e.exports=t},206:function(e,t,a){e.exports=a(6)(3e3)},207:function(e,t,a){"use strict";var n=a(5),l=a(217),s=a(1);t.a=function(e,t){var a;const{form:i}=t,c=Object(n.b)(t,["form"]),r=Object(l.a)(e,Object.assign(Object.assign({},c),{paginated:!0,manual:!0})),{params:o,run:d,mutate:u}=r,m=o[2]||{},[b,p]=Object(s.useState)(m.type||"simple"),[g,f]=Object(s.useState)(m.allFormData||{}),v=Object(s.useCallback)(()=>{if(i.getFieldInstance){const e=i.getFieldsValue(),t={};return Object.keys(e).forEach(a=>{i.getFieldInstance&&!i.getFieldInstance(a)||(t[a]=e[a])}),t}return i.getFieldsValue(null,()=>!0)},[i]);Object(s.useEffect)(()=>{if(i.getFieldInstance){const e={};Object.keys(g).forEach(t=>{i.getFieldInstance&&!i.getFieldInstance(t)||(e[t]=g[t])}),i.setFieldsValue(e)}else i.setFieldsValue(g)},[b]),Object(s.useEffect)(()=>{o.length>0?d(...o):t.manual||j()},[]);const O=Object(s.useCallback)(()=>{const e=v();f(Object.assign(Object.assign({},g),e)),p("simple"===b?"advance":"simple")},[b,g,v]),j=Object(s.useCallback)(e=>{(null==e?void 0:e.preventDefault)&&e.preventDefault(),setTimeout(()=>{const e=v();console.log(1111,e);const t=Object.assign(Object.assign({},g),e);f(t),d(Object.assign(Object.assign({},o[0]||{}),{current:1}),e,{allFormData:t,type:b})})},[v,d,o,g,b]),h=Object(s.useCallback)(()=>{i.resetFields(),j()},[i,j]);return Object.assign(Object.assign({},r),{search:{submit:j,type:b,changeType:O,reset:h},remove:e=>{u(t=>{const a=t.list.slice();return a.forEach((t,n)=>{t.id===e&&a.splice(n,1)}),Object.assign(Object.assign({},t),{list:a})})},add:e=>{u(t=>{const a=t.list.slice();return a.push(e),Object.assign(Object.assign({},t),{list:a})})},update:(e,t)=>{u(a=>{const n=a.list.slice();return n.forEach((a,l)=>{a.id===e&&(n[l]=Object.assign(Object.assign({},a),t))}),Object.assign(Object.assign({},a),{list:n})})},dataSource:(null===(a=r.data)||void 0===a?void 0:a.list)||[]})}},208:function(e,t,a){"use strict";var n=a(1),l=a.n(n),s=a(21),i=a.n(s);a(209);const c=({visible:e,content:t,space:a,children:n})=>l.a.createElement("div",{className:i()({toolsBar_space:a},"toolsBar")},l.a.createElement("div",{className:"flex flex_between"},n),l.a.createElement("div",{style:{display:e?"block":"none"},className:"toolsBar-content"},t));c.defaultProps={visible:!1,space:!1},t.a=c},209:function(e,t,a){var n=a(14),l=a(205);"string"==typeof(l=l.__esModule?l.default:l)&&(l=[[e.i,l,""]]);var s={insert:"head",singleton:!1},i=n(l,s);if(!l.locals||e.hot.invalidate){var c=l.locals;e.hot.accept(205,(function(){"string"==typeof(l=(l=a(205)).__esModule?l.default:l)&&(l=[[e.i,l,""]]),function(e,t){if(!e&&t||e&&!t)return!1;var a;for(a in e)if(e[a]!==t[a])return!1;for(a in t)if(!e[a])return!1;return!0}(c,l.locals)?(c=l.locals,i(l)):e.hot.invalidate()}))}e.hot.dispose((function(){i()})),e.exports=l.locals||{}},213:function(e,t,a){e.exports=a(6)(408)},214:function(e,t,a){e.exports=a(6)(75)},53:function(e,t,a){"use strict";a.r(t);var n=a(5),l=a(1),s=a.n(l),i=a(4),c=a(8);const r={labelCol:{span:4},wrapperCol:{span:20}};t.default=e=>{var{data:t}=e,a=Object(n.b)(e,["data"]);const[o]=i.Form.useForm();Object(l.useEffect)(()=>{a.visible&&setTimeout(()=>{t?o.setFieldsValue(Object.assign({},t)):(o.resetFields(),o.setFieldsValue({status:1,sort:1}))})},[a.visible]);return s.a.createElement(i.Modal,{title:(null==t?void 0:t.id)?"编辑":"添加",maskClosable:!1,visible:a.visible,onCancel:()=>a.setVisible(),onOk:e=>{e.preventDefault(),o.validateFields().then(e=>Object(n.a)(void 0,void 0,void 0,(function*(){var n;const l=Object.assign(Object.assign({},t),e);if(null==t?void 0:t.id)yield c.rc(t.id,e);else{const t=yield c.t(Object.assign({shop_id:a.id},e));l.id=t.data}a.setVisible(),null===(n=a.onOk)||void 0===n||n.call(a,(null==t?void 0:t.id)?"update":"create",l)})))}},s.a.createElement(i.Form,Object.assign({form:o},r),s.a.createElement(i.Form.Item,{label:"班级名",name:"name",rules:[{required:!0,message:"请填写班级名"}]},s.a.createElement(i.Input,null)),s.a.createElement(i.Form.Item,{label:"班型价格",name:"price",rules:[{required:!0,message:"请填写价格"}]},s.a.createElement(i.InputNumber,null)),s.a.createElement(i.Form.Item,{label:"简介",name:"intro",rules:[{required:!0}]},s.a.createElement(i.Input.TextArea,{rows:3})),s.a.createElement(i.Form.Item,{label:"状态",name:"status"},s.a.createElement(i.Radio.Group,null,s.a.createElement(i.Radio,{value:1},"启用"),s.a.createElement(i.Radio,{value:0},"禁用"))),s.a.createElement(i.Form.Item,{label:"排序",name:"sort"},s.a.createElement(i.InputNumber,null))))}}}]);