(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{229:function(e,a,t){"use strict";t.r(a);var l=t(44),n=t(0),c=t.n(n),s=t(920),i=t(919),o=t(445),r=t(439),u=t(76);const d={labelCol:{span:4},wrapperCol:{span:20}};a.default=e=>{var{data:a}=e,t=Object(l.b)(e,["data"]);const[b,m]=Object(n.useState)([]),[v]=s.a.useForm();Object(n.useEffect)(()=>{Object(u.E)({cache:1}).then(e=>{m(e.data)})},[]),Object(n.useEffect)(()=>{a&&v.setFieldsValue(a)},[a]);return c.a.createElement(i.a,{title:"修改成员",maskClosable:!1,visible:t.visible,onCancel:()=>{var e;return null===(e=t.onClose)||void 0===e?void 0:e.call(t)},onOk:e=>{e.preventDefault(),v.validateFields().then(e=>Object(l.a)(void 0,void 0,void 0,(function*(){var l,n;const c=Object.assign({},e);yield Object(u.eb)(null==a?void 0:a.id,e),null===(l=t.onClose)||void 0===l||l.call(t),null===(n=t.onOk)||void 0===n||n.call(t,Object.assign(Object.assign({},a),c))})))}},c.a.createElement(s.a,Object.assign({},d,{form:v}),c.a.createElement(s.a.Item,{label:"角色",name:"role_ids",required:!0},c.a.createElement(o.a,{mode:"multiple"},b.map(e=>c.a.createElement(o.a.Option,{key:e.id,value:e.id},e.name)))),c.a.createElement(s.a.Item,{label:"状态",name:"status"},c.a.createElement(r.default.Group,null,c.a.createElement(r.default,{value:1},"启用"),c.a.createElement(r.default,{value:0},"禁用")))))}}}]);