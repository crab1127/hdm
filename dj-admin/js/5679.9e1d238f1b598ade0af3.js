(self.webpackChunkxiaoniao=self.webpackChunkxiaoniao||[]).push([[5679],{97482:(e,t,l)=>{"use strict";l.d(t,{Z:()=>u});var a=l(15851),n=l(27736),r=l(80337),o=l(89738),i=l(62342),c=l(79096);function m(e){const t="image/jpeg"===e.type||"image/png"===e.type;t||n.ZP.error("You can only upload JPG/PNG file!");const l=e.size/1024/1024<2;return l||n.ZP.error("Image must smaller than 2MB!"),t&&l}const u=e=>{const[t,l]=(0,a.useState)(!1),[n,u]=(0,a.useState)("");(0,a.useEffect)((()=>{u(e.value?(0,c.Pk)(e.value):"")}),[e.value]);const s=a.createElement("div",null,t?a.createElement(o.Z,null):a.createElement(i.Z,null),a.createElement("div",{className:"ant-upload-text"},"Upload"));return a.createElement(r.Z,{name:"file",listType:"picture-card",className:"avatar-uploader",showUploadList:!1,action:"https://api.harsonserver.com/clerk/common/qnUploadFile.json?platform=36",beforeUpload:m,onChange:t=>{var a;"uploading"!==t.file.status?"done"===t.file.status&&(null===(a=e.onChange)||void 0===a||a.call(e,t.fileList[0].response.data.replace("https://","")),function(e,t){const a=new FileReader;a.addEventListener("load",(()=>(e=>{l(!1),u(e)})(a.result))),a.readAsDataURL(e)}(t.file.originFileObj)):l(!0)}},n?a.createElement("img",{src:n,alt:"avatar",style:{width:"100%"}}):s)}},7920:(e,t,l)=>{"use strict";l.d(t,{Z:()=>c});var a=l(15851),n=l(87332),r=l.n(n),o=l(53922);let i=null;const c=function({value:e,onChange:t}){const[l,n]=(0,a.useState)(""),{qiniuToken:c}=o.Z.useContainer();return(0,a.useEffect)((()=>{i&&l!==e&&i.txt.html(e)}),[e,i]),(0,a.useEffect)((()=>(i=new(r())("#div1"),i.config.onchange=e=>{n(e),console.log("newHtml: ",e),null==t||t(e)},i.config.menus=["head","bold","fontSize","fontName","italic","underline","strikeThrough","indent","lineHeight","foreColor","backColor","list","justify","image","undo","redo"],i.config.uploadFileName="file",i.config.uploadImgServer="https://up-z2.qiniup.com",i.config.uploadImgParams={token:c},i.config.uploadImgHooks={customInsert:function(e,t){console.log("result: ",t),e("https://static.kuaida.com/"+t.data[0])}},i.create(),()=>{null==i||i.destroy()})),[]),a.createElement("div",{id:"div1"})}},65679:(e,t,l)=>{"use strict";l.r(t),l.d(t,{default:()=>f});var a=l(43865),n=l(15851),r=l(36949),o=l(53985),i=l(49222),c=l(72390),m=l(83e3),u=l(88984),s=l(41915),d=l(97482),p=l(7920),v=l(57100),E=l(79096);const Z={labelCol:{span:4},wrapperCol:{span:20}},f=e=>{var{data:t}=e,l=(0,a._T)(e,["data"]);const[f,g]=(0,n.useState)(0),[b]=r.Z.useForm(),{data:h}=(0,v.QT)((()=>(0,s.p8)({cache:1}).then((e=>(0,E.a2)(e.data.map((e=>({pid:e.pid,title:e.title,value:e.id}))),0,{id:"value",pid:"pid",children:"children"}))))),{data:I}=(0,v.QT)((()=>(0,s.zP)("article_recommend").then((e=>e.data))));return(0,n.useEffect)((()=>{l.visible&&setTimeout((()=>{t?(g(t.mode),b.setFieldsValue(Object.assign({},t))):b.resetFields()}))}),[l.visible]),n.createElement(o.Z,{title:(null==t?void 0:t.id)?"编辑":"添加",maskClosable:!1,width:900,visible:l.visible,onCancel:()=>{var e;null===(e=l.onClose)||void 0===e||e.call(l)},onOk:e=>{e.preventDefault(),b.validateFields().then((e=>(0,a.mG)(void 0,void 0,void 0,(function*(){var a,n;const r=Object.assign(Object.assign({},t),e);(null==t?void 0:t.id)?yield(0,s.O6)(t.id,e):yield(0,s.bp)(e),null===(a=l.onClose)||void 0===a||a.call(l),null===(n=l.onOk)||void 0===n||n.call(l,(null==t?void 0:t.id)?"update":"create",r)}))))}},n.createElement(r.Z,Object.assign({form:b},Z),n.createElement(r.Z.Item,{label:"分类",name:"category_id"},n.createElement(i.Z,{style:{width:"100%"},allowClear:!0,dropdownStyle:{maxHeight:400,overflow:"auto"},treeData:h,placeholder:"请选择父级,不选默认最顶层"})),n.createElement(r.Z.Item,{label:"标题",name:"title",rules:[{required:!0}]},n.createElement(c.Z,null)),n.createElement(r.Z.Item,{label:"封面",name:"cover"},n.createElement(d.Z,null)),n.createElement(r.Z.Item,{label:"简介",name:"intro",rules:[{required:!0}]},n.createElement(c.Z.TextArea,null)),n.createElement(r.Z.Item,{label:"类型",name:"mode",rules:[{required:!0}]},n.createElement(m.ZP.Group,{onChange:e=>g(e.target.value)},n.createElement(m.ZP,{value:0}," 文章 "),n.createElement(m.ZP,{value:1}," 二维码 "),n.createElement(m.ZP,{value:2}," 小程序链接 "),n.createElement(m.ZP,{value:3}," 外链 "))),n.createElement(r.Z.Item,{label:"推荐",name:"recommend"},n.createElement(m.ZP.Group,null,n.createElement(m.ZP,{value:""},"不推荐 "),null==I?void 0:I.map((e=>n.createElement(m.ZP,{key:e.id,value:e.value},e.label))))),1===f&&n.createElement(r.Z.Item,{label:"封面",name:"mode_qr"},n.createElement(d.Z,null)),2===f&&n.createElement(n.Fragment,null,n.createElement(r.Z.Item,{label:"小程序id",name:"mode_appid"},n.createElement(c.Z,null)),n.createElement(r.Z.Item,{label:"小程序路劲",name:"mode_url"},n.createElement(c.Z,null))),3===f&&n.createElement(r.Z.Item,{label:"链接",name:"mode_url"},n.createElement(c.Z,null)),n.createElement(r.Z.Item,{label:"内容",name:"content",rules:[{required:!0}]},n.createElement(p.Z,null)),n.createElement(r.Z.Item,{label:"状态",name:"status"},n.createElement(m.ZP.Group,null,n.createElement(m.ZP,{value:1},"启用"),n.createElement(m.ZP,{value:0},"禁用"))),n.createElement(r.Z.Item,{label:"排序",name:"sort"},n.createElement(u.Z,{max:1e4}))))}}}]);