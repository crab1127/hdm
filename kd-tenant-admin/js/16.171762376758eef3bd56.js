(window.webpackJsonp=window.webpackJsonp||[]).push([[16,103,104,105],{113:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(4),u=a(48),m=a(49),c=a(50);t.default=()=>{const[e,t]=Object(n.useState)("info");return l.a.createElement("div",null,l.a.createElement(r.Layout,null,l.a.createElement(r.Layout.Sider,{width:200,style:{background:"#fff",borderRight:"1px solid #ddd"}},l.a.createElement(r.Menu,{mode:"inline",selectedKeys:[e],style:{borderRight:0},onClick:e=>{t(e.key)}},l.a.createElement(r.Menu.Item,{key:"info"},"基本信息"),l.a.createElement(r.Menu.Item,{key:"address"},"我的地址"),l.a.createElement(r.Menu.Item,{key:"password"},"密码管理"))),l.a.createElement(r.Layout.Content,{style:{background:"#fff",padding:"20px"}},"info"===e&&l.a.createElement(u.default,null),"address"===e&&l.a.createElement(m.default,null),"password"===e&&l.a.createElement(c.default,null))))}},48:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(4),u=a(7),m=a(9);t.default=()=>{const{user:e}=u.a.useContainer();return l.a.createElement("div",null,l.a.createElement(r.Form,Object.assign({},m.c,{initialValues:e}),l.a.createElement(r.Form.Item,{name:"label",label:"姓名",rules:[{required:!0,message:"Please input your E-mail!"}]},l.a.createElement(r.Input,null)),l.a.createElement(r.Form.Item,{label:"性别",name:"value",required:!0},l.a.createElement(r.Input,null)),l.a.createElement(r.Form.Item,{label:"头像",name:"status"},l.a.createElement(r.Radio.Group,null,l.a.createElement(r.Radio,{value:1},"启用"),l.a.createElement(r.Radio,{value:0},"禁用"))),l.a.createElement(r.Form.Item,{label:"备注",name:"remark",required:!0},l.a.createElement(r.Input,null))))}},49:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n);t.default=()=>l.a.createElement("div",null,"地址管理")},50:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n);t.default=()=>l.a.createElement("div",null,"密码管理")}}]);