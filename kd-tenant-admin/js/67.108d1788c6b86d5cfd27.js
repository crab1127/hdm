(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{139:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),r=a(3),m=a(208),l=a(8),s=a(4),i=a(203),d=a.n(i),o=a(16);const p=[{id:1,titel:"下单",description:""},{id:2,titel:"支付",description:""},{id:3,titel:"派送",description:""},{id:4,titel:"已送达",description:""},{id:5,titel:"确认",description:""}];function E({data:e}){const[t,a]=Object(c.useState)(p),[r,m]=Object(c.useState)(0);return Object(c.useEffect)(()=>{a(t=>(t[0].description=d()(e.create_time).format("YYYY-MM-DD HH:mm"),t[1].description=d()(e.pay_time).format("YYYY-MM-DD HH:mm"),t[2].description=d()(e.accept_time).format("YYYY-MM-DD HH:mm"),t[3].description=d()(e.finish_time).format("YYYY-MM-DD HH:mm"),t[4].description=d()(e.sure_time).format("YYYY-MM-DD HH:mm"),t)),m(e.status)},[e]),n.a.createElement("div",{style:{background:"#fff",padding:"20px",marginBottom:"20px"}},n.a.createElement(s.Steps,{progressDot:!0,current:r},t.map(e=>n.a.createElement(s.Steps.Step,{key:e.id,title:e.titel,description:e.description}))))}function u({goods:e}={goods:[]}){return n.a.createElement(s.Table,{columns:[{title:"订单号",dataIndex:"id"}],rowKey:"id",dataSource:e})}t.default=()=>{const e=Object(r.useRouteMatch)(),{data:t,loading:a,run:i}=Object(m.b)(()=>Object(l.kb)(e.params.id).then(e=>e.data),{manual:!0}),{data:p}=Object(m.b)(()=>Object(l.D)({order_id:e.params.id}).then(e=>e.data));return Object(c.useEffect)(()=>{i()},[e.params.id]),n.a.createElement("div",null,a&&n.a.createElement("div",null,"加载钟"),!!t&&n.a.createElement("div",null,n.a.createElement(E,{data:t}),n.a.createElement(s.Row,{gutter:20},n.a.createElement(s.Col,{span:5},n.a.createElement(s.Card,{title:"客户",bordered:!1},n.a.createElement("p",null,n.a.createElement("img",{src:Object(o.b)(t.user_avatar)})," ",t.create_by),n.a.createElement("p",null,"姓名： ",t.create_by),n.a.createElement("p",null,"收货地址"),n.a.createElement("p",null,t.address_name,"，",t.address_mobile),n.a.createElement("p",null,t.address_detail)),n.a.createElement(s.Card,{title:"骑手",bordered:!1},n.a.createElement("p",null,n.a.createElement("img",{src:Object(o.b)(t.horseman_avatar),width:"22"})),n.a.createElement("p",null,t.horseman_name))),n.a.createElement(s.Col,{span:19},n.a.createElement(s.Card,{title:"订单详情",bordered:!1,extra:n.a.createElement(n.a.Fragment,null,n.a.createElement(s.Button,null,"指派骑手"),n.a.createElement(s.Button,null,"重新指定骑手"))},n.a.createElement("div",{className:"chat-content"},t.take_message||t.name),n.a.createElement("div",{className:"chat-item"},n.a.createElement("span",{className:"chat-item-t"},"跑腿费："),"￥",t.reward?t.reward/100:0),t.reward_extra&&n.a.createElement("div",{className:"chat-item"},n.a.createElement("span",{className:"chat-item-t"},"调度费："),"￥",t.reward_extra/100),n.a.createElement("div",{className:"chat-item"},n.a.createElement("span",{className:"chat-item-t"},"服务时间："),t.dispatch_time),!!t.buy_address&&n.a.createElement("div",{className:"chat-item"},n.a.createElement("span",{className:"chat-item-t"},"购买地址："),n.a.createElement("div",{className:"chat-item-b"},t.buy_address)),!!t.express_company&&n.a.createElement("div",{className:"chat-item"},n.a.createElement("span",{className:"chat-item-t"},"快递："),n.a.createElement("div",{className:"chat-item-b"},t.express_company,", ",t.express_company_address)),n.a.createElement("div",{className:"chat-item"},n.a.createElement("span",{className:"chat-item-t"},"目的地："),n.a.createElement("div",{className:"chat-item-b"},t.address_name,", ",t.address_mobile,", ",t.address_detail)),n.a.createElement("div",{className:"chat-item"},n.a.createElement("span",{className:"chat-item-t"},"有效期："),n.a.createElement("span",null,t.expiration_time)),n.a.createElement("div",{className:"chat-item"},n.a.createElement("span",{className:"chat-item-t"},"物品重量："),n.a.createElement("span",null,t.weight)),n.a.createElement("div",{className:"chat-item"},n.a.createElement("span",{className:"chat-item-t"},"接单限制："),n.a.createElement("span",null,t.sex_astrict))),n.a.createElement(u,null),n.a.createElement("div",null,n.a.createElement("h3",null,"评论"),null==p?void 0:p.map(e=>n.a.createElement(s.Comment,{key:e.id,author:e.create_by,avatar:n.a.createElement(s.Avatar,{src:Object(o.b)(e.user_avatar),alt:e.create_by}),content:n.a.createElement("div",null,n.a.createElement("p",null,e.comment),e.answer&&n.a.createElement("div",null,"回评: ",e.answer)),datetime:d()(e.create_time).format("YYYY-MM-DD HH:mm:ss")})))))))}},203:function(e,t,a){e.exports=a(6)(3e3)},209:function(e,t,a){e.exports=a(6)(408)},211:function(e,t,a){e.exports=a(6)(75)}}]);