(window.webpackJsonp=window.webpackJsonp||[]).push([[33,82],{131:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),i=a(4),s=a(207),c=a(208),r=a(8),o=a(206),d=a.n(o),u=a(68),m=a(211),b=a(212),p=a(16);t.default=()=>{const[e,t]=Object(n.useState)(),[a,o]=Object(n.useState)("horseman"),[v,f]=Object(n.useState)(""),E=Object(m.a)(!1),[h]=i.Form.useForm(),{data:g=[]}=Object(m.b)(()=>r.P("company_user_role",{cache:1}).then(e=>e.data)),{data:O=[]}=Object(m.b)(()=>r.tb({cache:1}).then(e=>e.data)),{tableProps:j,search:y,run:k,refresh:_,update:F,remove:x}=Object(s.a)((e,t)=>r.N(Object.assign(Object.assign({type:"horseman"},e),t)).then(e=>({total:e.total,list:e.data})),{defaultPageSize:20,form:h}),I=Object(n.useCallback)(e=>{e.amount?i.message.info("只有余额为0的成员才能删除。"):i.Modal.confirm({content:`确定删除${e.name||e.nickName}骑手吗？`,onOk(){r.z(e.id),x(e.id),r.Ub()}})},[x]),{submit:w}=y||{},C=[{title:"用户id",dataIndex:"userid"},{title:"团队名称",dataIndex:"name"},{title:"微信名称",dataIndex:"nickName"},{title:"手机号码",dataIndex:"mobile",width:120},{title:"消息推送id",key:"openid_gzh",width:160,render:(e,t)=>t.openid_gzh?t.openid_gzh:l.a.createElement("div",null,"暂无  ",l.a.createElement(i.Popover,{content:l.a.createElement("div",null,l.a.createElement("ol",null,l.a.createElement("li",null,"关注微信快达校内公众号，获取用户的openid")),l.a.createElement("p",{className:"c-999"},"没有该id，将无法推送消息给骑手")),title:"获取推送id流程"},l.a.createElement(b.ExclamationCircleOutlined,null)))},{title:"角色",key:"role",render:(e,t)=>l.a.createElement("div",null,"horseman"===a?"骑手":l.a.createElement(i.Select,{value:t.role+"",bordered:!1,style:{width:"100px"},onChange:e=>{r.bc(t.userid,{role:parseInt(e)}),F(t.id,{role:parseInt(e)})}},null==g?void 0:g.map(e=>l.a.createElement(i.Select.Option,{key:e.id,value:e.value},e.label))))},{title:"门店",key:"shop_id",render:e=>{var t;return e.shop_id?null===(t=O.find(t=>t.id===e.shop_id))||void 0===t?void 0:t.name:""}},{title:"余额",key:"amount",render:e=>e.amount?Object(p.a)(e.amount):0},{title:"身份认证状态",key:"identity_status",width:160,render:(e,a)=>l.a.createElement("div",{onClick:()=>{f(""),t(a),E.setTrue()}},0===a.identity_status&&"未提交身份信息",1===a.identity_status&&"等学校审核",2===a.identity_status&&"等快达校园审核",3===a.identity_status&&"审核通过",-1===a.identity_status&&"审核不通过")},{title:"最后登陆时间",width:150,key:"create_time",render:(e,t)=>d()(t.last_visit_time).format("YYYY-MM-DD HH:mm")},{title:"启用/禁用",key:"status",render:(e,t)=>l.a.createElement(i.Switch,{checked:!!t.status,onChange:e=>{r.bc(t.userid,{status:e?1:0}),F(t.id,{status:e?1:0})}})},{title:"操作",key:"action",fixed:"right",width:200,render:(e,n)=>l.a.createElement("div",null,"horseman"===a&&l.a.createElement(i.Button,{size:"small",color:"tomato",onClick:()=>I(n)},"删除"),1===n.identity_status&&l.a.createElement(i.Button,{size:"small",type:"primary",onClick:()=>{t(n),f("audit"),E.setTrue()}},"审核身份认证"))}];return l.a.createElement("div",null,l.a.createElement(i.Tabs,{activeKey:a,onChange:e=>{o(e),k({current:1,pageSize:20},{type:e})}},l.a.createElement(i.Tabs.TabPane,{tab:"骑手",key:"horseman"}),l.a.createElement(i.Tabs.TabPane,{tab:"商家",key:"shop"})),l.a.createElement(c.a,{visible:!1},l.a.createElement(i.Form,{form:h,layout:"inline"},l.a.createElement(i.Form.Item,{name:"name"},l.a.createElement(i.Input.Search,{placeholder:"名字",onSearch:w})),l.a.createElement(i.Form.Item,{name:"status"},l.a.createElement(i.Select,{placeholder:"状态",style:{width:"140px"},allowClear:!0,onChange:w},l.a.createElement(i.Select.Option,{value:"0"},"暂停"),l.a.createElement(i.Select.Option,{value:"1"},"启用")))),l.a.createElement("div",null,"  ",l.a.createElement(i.Button,{onClick:_},"刷新"))),l.a.createElement(i.Table,Object.assign({columns:C,rowKey:"id"},j,{scroll:{x:1500}})),l.a.createElement(u.default,{id:(null==e?void 0:e.userid)||0,visible:E.state,type:v,setVisible:E.toggle,onOk:e=>{F(j.dataSource.find(t=>t.userid===e.userid).id,e)}}))}},205:function(e,t,a){(t=a(15)(!1)).push([e.i,"/** @format */\n.toolsBar {\n  background: #fff;\n  padding-bottom: 15px;\n}\n.toolsBar.toolsBar_space {\n  padding: 12px;\n}\n.toolsBar .toolsBar-content {\n  padding: 10px;\n  background: #f4f4f4;\n  margin-top: 5px;\n}\n",""]),e.exports=t},206:function(e,t,a){e.exports=a(6)(3e3)},207:function(e,t,a){"use strict";var n=a(5),l=a(217),i=a(1);t.a=function(e,t){var a;const{form:s}=t,c=Object(n.b)(t,["form"]),r=Object(l.a)(e,Object.assign(Object.assign({},c),{paginated:!0,manual:!0})),{params:o,run:d,mutate:u}=r,m=o[2]||{},[b,p]=Object(i.useState)(m.type||"simple"),[v,f]=Object(i.useState)(m.allFormData||{}),E=Object(i.useCallback)(()=>{if(s.getFieldInstance){const e=s.getFieldsValue(),t={};return Object.keys(e).forEach(a=>{s.getFieldInstance&&!s.getFieldInstance(a)||(t[a]=e[a])}),t}return s.getFieldsValue(null,()=>!0)},[s]);Object(i.useEffect)(()=>{if(s.getFieldInstance){const e={};Object.keys(v).forEach(t=>{s.getFieldInstance&&!s.getFieldInstance(t)||(e[t]=v[t])}),s.setFieldsValue(e)}else s.setFieldsValue(v)},[b]),Object(i.useEffect)(()=>{o.length>0?d(...o):t.manual||g()},[]);const h=Object(i.useCallback)(()=>{const e=E();f(Object.assign(Object.assign({},v),e)),p("simple"===b?"advance":"simple")},[b,v,E]),g=Object(i.useCallback)(e=>{(null==e?void 0:e.preventDefault)&&e.preventDefault(),setTimeout(()=>{const e=E();console.log(1111,e);const t=Object.assign(Object.assign({},v),e);f(t),d(Object.assign(Object.assign({},o[0]||{}),{current:1}),e,{allFormData:t,type:b})})},[E,d,o,v,b]),O=Object(i.useCallback)(()=>{s.resetFields(),g()},[s,g]);return Object.assign(Object.assign({},r),{search:{submit:g,type:b,changeType:h,reset:O},remove:e=>{u(t=>{const a=t.list.slice();return a.forEach((t,n)=>{t.id===e&&a.splice(n,1)}),Object.assign(Object.assign({},t),{list:a})})},add:e=>{u(t=>{const a=t.list.slice();return a.push(e),Object.assign(Object.assign({},t),{list:a})})},update:(e,t)=>{u(a=>{const n=a.list.slice();return n.forEach((a,l)=>{a.id===e&&(n[l]=Object.assign(Object.assign({},a),t))}),Object.assign(Object.assign({},a),{list:n})})},dataSource:(null===(a=r.data)||void 0===a?void 0:a.list)||[]})}},208:function(e,t,a){"use strict";var n=a(1),l=a.n(n),i=a(21),s=a.n(i);a(209);const c=({visible:e,content:t,space:a,children:n})=>l.a.createElement("div",{className:s()({toolsBar_space:a},"toolsBar")},l.a.createElement("div",{className:"flex flex_between"},n),l.a.createElement("div",{style:{display:e?"block":"none"},className:"toolsBar-content"},t));c.defaultProps={visible:!1,space:!1},t.a=c},209:function(e,t,a){var n=a(14),l=a(205);"string"==typeof(l=l.__esModule?l.default:l)&&(l=[[e.i,l,""]]);var i={insert:"head",singleton:!1},s=n(l,i);if(!l.locals||e.hot.invalidate){var c=l.locals;e.hot.accept(205,(function(){"string"==typeof(l=(l=a(205)).__esModule?l.default:l)&&(l=[[e.i,l,""]]),function(e,t){if(!e&&t||e&&!t)return!1;var a;for(a in e)if(e[a]!==t[a])return!1;for(a in t)if(!e[a])return!1;return!0}(c,l.locals)?(c=l.locals,s(l)):e.hot.invalidate()}))}e.hot.dispose((function(){s()})),e.exports=l.locals||{}},212:function(e,t,a){e.exports=a(6)(2717)},213:function(e,t,a){e.exports=a(6)(408)},214:function(e,t,a){e.exports=a(6)(75)},68:function(e,t,a){"use strict";a.r(t);var n=a(5),l=a(1),i=a.n(l),s=a(4),c=a(8),r=a(211),o=a(16);t.default=e=>{var{id:t,type:a}=e,d=Object(n.b)(e,["id","type"]);const[u]=s.Form.useForm(),{data:m,run:b}=Object(r.b)(()=>Object(c.xb)({userid:t}),{manual:!0});Object(l.useEffect)(()=>{d.visible&&t&&b()},[d.visible,t]);return i.a.createElement(s.Modal,{title:"身份审核",maskClosable:!1,visible:d.visible,width:600,onCancel:()=>d.setVisible(),onOk:e=>{"audit"===a?(e.preventDefault(),u.validateFields().then(e=>Object(n.a)(void 0,void 0,void 0,(function*(){var a;yield Object(c.b)(t,e),null===(a=d.onOk)||void 0===a||a.call(d,{userid:t,identity_status:e.status?2:-1}),d.setVisible()})))):d.setVisible()}},i.a.createElement(s.Form,{form:u},i.a.createElement(s.Form.Item,{label:"身份证号码"},i.a.createElement("div",null,null==m?void 0:m.data.identity_id)),i.a.createElement(s.Form.Item,{label:"身份证名字"},i.a.createElement("div",null,null==m?void 0:m.data.identity_name)),i.a.createElement(s.Form.Item,{label:"身份证照片"},i.a.createElement("div",null,i.a.createElement("img",{src:Object(o.b)(null==m?void 0:m.data.identity_photo1),width:"250"}),i.a.createElement("img",{src:Object(o.b)(null==m?void 0:m.data.identity_photo2),width:"250"}))),i.a.createElement(s.Form.Item,{label:"学校"},i.a.createElement("div",null,null==m?void 0:m.data.college_name)),i.a.createElement(s.Form.Item,{label:"学号"},i.a.createElement("div",null,null==m?void 0:m.data.student_number)),i.a.createElement(s.Form.Item,{label:"专业"},i.a.createElement("div",null,null==m?void 0:m.data.major)),"audit"===a&&i.a.createElement(s.Form.Item,{label:"审核",name:"status"},i.a.createElement(s.Radio.Group,null,i.a.createElement(s.Radio,{value:1},"通过"),i.a.createElement(s.Radio,{value:0},"不通过")))))}}}]);