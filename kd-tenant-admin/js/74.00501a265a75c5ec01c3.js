(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{209:function(e,t,a){e.exports=a(6)(408)},211:function(e,t,a){e.exports=a(6)(75)},59:function(e,t,a){"use strict";a.r(t);var n=a(5),l=a(1),o=a.n(l),c=a(4),r=a(8),m=a(9),i=a(208);t.default=()=>{const{data:e,loading:t}=Object(i.b)(r.K);console.log("setting",null==e?void 0:e.data);return o.a.createElement("div",{className:"content"},!t&&o.a.createElement(c.Form,Object.assign({},m.c,{initialValues:(null==e?void 0:e.data)||{is_open_contact:0},onFinish:t=>Object(n.a)(void 0,void 0,void 0,(function*(){try{(null==e?void 0:e.data)?yield r.Xb(t):yield r.h(t),c.message.info("更新成功")}catch(e){c.message.error("更新失败")}}))}),o.a.createElement(c.Form.Item,{label:"是否显示",extra:"在首页显示联系我们浮窗入口",name:"is_open_contact"},o.a.createElement(c.Radio.Group,null,o.a.createElement(c.Radio,{value:1},"显示"),o.a.createElement(c.Radio,{value:0},"隐藏"))),o.a.createElement(c.Form.Item,{label:"wx",name:"wx"},o.a.createElement(c.Input,{maxLength:50})),o.a.createElement(c.Form.Item,{label:"手机号",name:"mobile"},o.a.createElement(c.Input,{maxLength:20})),o.a.createElement(c.Form.Item,{label:"."},o.a.createElement(c.Space,null,o.a.createElement(c.Button,{type:"primary",htmlType:"submit"},"保存"),o.a.createElement(c.Button,{type:"primary",onClick:()=>{r.Sb().then(()=>{c.message.info("更新成功")}).catch(()=>{c.message.error("更新失败")})}},"更新学校缓存")))))}}}]);