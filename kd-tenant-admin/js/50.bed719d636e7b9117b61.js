(window.webpackJsonp=window.webpackJsonp||[]).push([[50,66,77,78,102],{102:function(e,a,t){"use strict";t.r(a);var n=t(5),l=t(1),r=t.n(l),i=t(4),m=t(8);const c=e=>{var{level:a}=e,t=Object(n.b)(e,["level"]);const[c,o]=Object(l.useState)([]);Object(l.useEffect)(()=>{Object(n.a)(void 0,void 0,void 0,(function*(){var e,n,l,r;const i=yield m.A({pid:1e5}).then(e=>e.data.map(e=>({value:e.id,label:e.name,isLeaf:1===a})));let c=[];if(null===(e=t.defaultValue)||void 0===e?void 0:e[0]){const e=yield m.A({pid:null===(n=t.defaultValue)||void 0===n?void 0:n[0]}).then(e=>e.data.map(e=>({value:e.id,label:e.name,isLeaf:1===a})));i.forEach(a=>{var n;a.value===(null===(n=t.defaultValue)||void 0===n?void 0:n[0])&&(a.children=e,c=a.children)})}if(null===(l=t.defaultValue)||void 0===l?void 0:l[1]){const e=yield m.A({pid:null===(r=t.defaultValue)||void 0===r?void 0:r[1]}).then(e=>e.data.map(e=>({value:e.id,label:e.name,isLeaf:1===a})));c.forEach(a=>{var n;a.value===(null===(n=t.defaultValue)||void 0===n?void 0:n[1])&&(a.children=e)})}o(i)}))},[]);return r.a.createElement(i.Cascader,Object.assign({},t,{options:c,loadData:e=>{const t=e[e.length-1];t.loading=!0,console.log(e,t),m.A({pid:t.value}).then(e=>{t.loading=!1,t.children=e.data.map(e=>({value:e.id,label:e.name,isLeaf:a===e.level})),o(e=>e.slice())})}}))};c.defaultProps={level:3};var o=c,d=t(9),u=t(211),s=t(7),p=t(206),v=t.n(p);a.default=()=>{const[e,a]=Object(l.useState)(),{tenant:t}=s.a.useContainer(),{data:c,loading:p}=Object(u.b)(m.L);console.log("setting",null==c?void 0:c.data);return r.a.createElement("div",{className:"content"},!p&&r.a.createElement(i.Form,Object.assign({},d.c,{initialValues:(null==c?void 0:c.data)||{horseman_cut:0,shop_cut:0},onFinish:a=>Object(n.a)(void 0,void 0,void 0,(function*(){e&&m.Qb({province_id:e[0],city_id:e[1]});try{(null==c?void 0:c.data)?yield m.Zb(a):yield m.h(a),i.message.info("更新成功")}catch(e){i.message.error("更新失败")}}))}),r.a.createElement(i.Form.Item,{label:"学校"},r.a.createElement("div",null,null==t?void 0:t.name)),r.a.createElement(i.Form.Item,{label:"有效期",name:"is_open_recruit"},r.a.createElement("div",null,v()(null==t?void 0:t.start_time).format("YYYY-MM-DD HH:mm"),"~",v()(null==t?void 0:t.end_time).format("YYYY-MM-DD HH:mm"))),r.a.createElement(i.Form.Item,{label:"地址"},r.a.createElement(o,{level:2,defaultValue:[(null==t?void 0:t.province_id)||0,(null==t?void 0:t.city_id)||0],onChange:e=>{a(e)}})),r.a.createElement(i.Form.Item,{label:"是否开启骑手招聘",name:"is_open_recruit"},r.a.createElement(i.Radio.Group,null,r.a.createElement(i.Radio,{value:1},"启用"),r.a.createElement(i.Radio,{value:0},"关闭"))),r.a.createElement(i.Form.Item,{label:"招聘说明",name:"recruit_content"},r.a.createElement(i.Input.TextArea,{rows:4})),r.a.createElement(i.Form.Item,{label:"骑手佣金比率",name:"horseman_cut",extra:"例如：设置佣金比率为；80%就是指100的话：骑手得80，站长得20"},r.a.createElement(i.InputNumber,{min:20,max:100,formatter:e=>`${e}%`,parser:e=>e.replace("%","")})),r.a.createElement(i.Form.Item,{label:"跑腿费",name:"reward"},r.a.createElement(i.InputNumber,{min:0,max:100,formatter:e=>`￥${e}`,parser:e=>e.replace("￥","")})),r.a.createElement(i.Form.Item,{label:"."},r.a.createElement(i.Space,null,r.a.createElement(i.Button,{type:"primary",htmlType:"submit"},"保存"),r.a.createElement(i.Button,{type:"primary",onClick:()=>{m.Ub().then(()=>{i.message.info("更新成功")}).catch(()=>{i.message.error("更新失败")})}},"更新学校缓存")))))}},124:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),r=t(4),i=t(102),m=t(60),c=t(61),o=t(62);a.default=()=>l.a.createElement("div",null,l.a.createElement(r.Tabs,null,l.a.createElement(r.Tabs.TabPane,{tab:"基本信息",key:"1"},l.a.createElement(i.default,null)),l.a.createElement(r.Tabs.TabPane,{tab:"联系我们",key:"4"},l.a.createElement(m.default,null)),l.a.createElement(r.Tabs.TabPane,{tab:"公众号菜单",key:"2"},l.a.createElement(c.default,null)),l.a.createElement(r.Tabs.TabPane,{tab:"小程序二维码",key:"3"},l.a.createElement(o.default,null))))},206:function(e,a,t){e.exports=t(6)(3e3)},213:function(e,a,t){e.exports=t(6)(408)},214:function(e,a,t){e.exports=t(6)(75)},60:function(e,a,t){"use strict";t.r(a);var n=t(5),l=t(1),r=t.n(l),i=t(4),m=t(8),c=t(9),o=t(211);a.default=()=>{const{data:e,loading:a}=Object(o.b)(m.L);console.log("setting",null==e?void 0:e.data);return r.a.createElement("div",{className:"content"},!a&&r.a.createElement(i.Form,Object.assign({},c.c,{initialValues:(null==e?void 0:e.data)||{is_open_contact:0},onFinish:a=>Object(n.a)(void 0,void 0,void 0,(function*(){try{(null==e?void 0:e.data)?yield m.Zb(a):yield m.h(a),i.message.info("更新成功")}catch(e){i.message.error("更新失败")}}))}),r.a.createElement(i.Form.Item,{label:"是否显示",extra:"在首页显示联系我们浮窗入口",name:"is_open_contact"},r.a.createElement(i.Radio.Group,null,r.a.createElement(i.Radio,{value:1},"显示"),r.a.createElement(i.Radio,{value:0},"隐藏"))),r.a.createElement(i.Form.Item,{label:"wx",name:"wx"},r.a.createElement(i.Input,{maxLength:50})),r.a.createElement(i.Form.Item,{label:"手机号",name:"mobile"},r.a.createElement(i.Input,{maxLength:20})),r.a.createElement(i.Form.Item,{label:"."},r.a.createElement(i.Space,null,r.a.createElement(i.Button,{type:"primary",htmlType:"submit"},"保存"),r.a.createElement(i.Button,{type:"primary",onClick:()=>{m.Ub().then(()=>{i.message.info("更新成功")}).catch(()=>{i.message.error("更新失败")})}},"更新学校缓存")))))}},61:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),r=t(7);const i=[{name:"小程序首页链接地址",url:"/pages/index/index"},{name:"代拿快递链接地址",url:"/pages/server/take/index"},{name:"代寄快递链接地址",url:"/pages/server/send/index"},{name:"跑腿链接地址",url:"/pages/server/run/index"},{name:"超市链接地址",url:"/pages/server/chaoshi/index"},{name:"美食链接地址",url:"/pages/server/shop/index"},{name:"驾校链接地址",url:"/pages/server/driving/index"},{name:"学历升级链接地址",url:"/pages/server/education/index"},{name:"二手市场链接地址",url:"/pages/server/flea-market/index"},{name:"失物招领地址",url:"/pages/server/lost-property/index"},{name:"订单中心",url:"/pages/order/index"},{name:"招募骑手",url:"/pages/home/apply-horseman/index"}],m=[{name:"超市链接地址",url:"/pages/kd/chaoshi/index"},{name:"美食链接地址",url:"/pages/kd/shitang/index"},{name:"驾校链接地址",url:"/pages/kd/driving/index"},{name:"学历升级链接地址",url:"/pages/kd/education/index"}];a.default=()=>{const{user:e}=r.a.useContainer(),a=e.tenant;return l.a.createElement("div",null,l.a.createElement("h3",null,"公众号加菜单"),l.a.createElement("p",null,"进入微信公众号后台，点击自定义菜单-设置菜单名称-菜单内容选择：跳转到小程序点击【选择小程序】弹出已关联的小程序(搜索小程序快达校园或店家网)。 选择了小程序后，填写跳转地址。"),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("span",null,"快达校园小程序")),l.a.createElement("ul",{style:{marginBottom:"30px"}},i.map(e=>l.a.createElement("li",{key:e.url,className:"flex"},l.a.createElement("span",{style:{paddingRight:"50px"}},e.name),l.a.createElement("span",{className:"flex-item"},e.url,"?tenantId=",a.id)))),l.a.createElement("div",null,l.a.createElement("span",null,"店家网小程序")),l.a.createElement("ul",null,m.map(e=>l.a.createElement("li",{key:e.url,className:"flex"},l.a.createElement("span",{style:{paddingRight:"50px"}},e.name),l.a.createElement("span",{className:"flex-item"},e.url,"?origin=kd_shop&kdTenantId=",a.id,"&kdHorsemanCut=",a.horseman_cut))))))}},62:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),r=t(211),i=t(8),m=t(4);a.default=()=>{const{data:e}=Object(r.b)(()=>Object(i.hb)()),a=Object(n.useCallback)(()=>{let a=document.createElement("a"),t=function(e){let a=e.split(";base64,"),t=a[0].split(":")[1],n=window.atob(a[1]),l=n.length,r=new Uint8Array(l);for(let e=0;e<l;++e)r[e]=n.charCodeAt(e);return new Blob([r],{type:t})}(null==e?void 0:e.data);document.createEvent("HTMLEvents").initEvent("click",!0,!0),a.download="二维码",a.href=URL.createObjectURL(t),a.click()},[e]);return l.a.createElement("div",null,l.a.createElement("img",{src:null==e?void 0:e.data,style:{width:"300px",height:"300px"}}),l.a.createElement(m.Button,{type:"primary",onClick:a},"下载"))}}}]);