(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{212:function(e,t,a){e.exports=a(6)(2717)},86:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),l=a(3),u=a(4),r=a(212);t.default=Object(n.memo)(()=>{const e=Object(l.useRouteMatch)(),t=Object(l.useHistory)(),a=Object(l.useLocation)();return c.a.createElement("div",null,c.a.createElement("div",{className:"back-btn",onClick:()=>t.goBack()},c.a.createElement(r.LeftOutlined,null)," 返回"),c.a.createElement(u.Menu,{onClick:e=>t.replace(e.key),defaultSelectedKeys:[a.pathname],style:{border:0}},c.a.createElement(u.Menu.Item,{key:`${e.url}`},"基本信息"),c.a.createElement(u.Menu.Item,{key:`${e.url}/class`},"教育分类"),c.a.createElement(u.Menu.Item,{key:`${e.url}/photo`},"图片展示"),c.a.createElement(u.Menu.Item,{key:`${e.url}/apply`},"申请列表")))})}}]);