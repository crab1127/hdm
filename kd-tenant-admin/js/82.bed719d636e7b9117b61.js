(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{213:function(e,t,a){e.exports=a(6)(408)},214:function(e,t,a){e.exports=a(6)(75)},68:function(e,t,a){"use strict";a.r(t);var l=a(5),n=a(1),i=a.n(n),d=a(4),r=a(8),o=a(211),m=a(16);t.default=e=>{var{id:t,type:a}=e,c=Object(l.b)(e,["id","type"]);const[u]=d.Form.useForm(),{data:s,run:b}=Object(o.b)(()=>Object(r.xb)({userid:t}),{manual:!0});Object(n.useEffect)(()=>{c.visible&&t&&b()},[c.visible,t]);return i.a.createElement(d.Modal,{title:"身份审核",maskClosable:!1,visible:c.visible,width:600,onCancel:()=>c.setVisible(),onOk:e=>{"audit"===a?(e.preventDefault(),u.validateFields().then(e=>Object(l.a)(void 0,void 0,void 0,(function*(){var a;yield Object(r.b)(t,e),null===(a=c.onOk)||void 0===a||a.call(c,{userid:t,identity_status:e.status?2:-1}),c.setVisible()})))):c.setVisible()}},i.a.createElement(d.Form,{form:u},i.a.createElement(d.Form.Item,{label:"身份证号码"},i.a.createElement("div",null,null==s?void 0:s.data.identity_id)),i.a.createElement(d.Form.Item,{label:"身份证名字"},i.a.createElement("div",null,null==s?void 0:s.data.identity_name)),i.a.createElement(d.Form.Item,{label:"身份证照片"},i.a.createElement("div",null,i.a.createElement("img",{src:Object(m.b)(null==s?void 0:s.data.identity_photo1),width:"250"}),i.a.createElement("img",{src:Object(m.b)(null==s?void 0:s.data.identity_photo2),width:"250"}))),i.a.createElement(d.Form.Item,{label:"学校"},i.a.createElement("div",null,null==s?void 0:s.data.college_name)),i.a.createElement(d.Form.Item,{label:"学号"},i.a.createElement("div",null,null==s?void 0:s.data.student_number)),i.a.createElement(d.Form.Item,{label:"专业"},i.a.createElement("div",null,null==s?void 0:s.data.major)),"audit"===a&&i.a.createElement(d.Form.Item,{label:"审核",name:"status"},i.a.createElement(d.Radio.Group,null,i.a.createElement(d.Radio,{value:1},"通过"),i.a.createElement(d.Radio,{value:0},"不通过")))))}}}]);