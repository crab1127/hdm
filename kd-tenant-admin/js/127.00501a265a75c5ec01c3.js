(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{202:function(e,t,n){(t=n(15)(!1)).push([e.i,"/** @format */\n.toolsBar {\n  background: #fff;\n  padding-bottom: 15px;\n}\n.toolsBar.toolsBar_space {\n  padding: 12px;\n}\n.toolsBar .toolsBar-content {\n  padding: 10px;\n  background: #f4f4f4;\n  margin-top: 5px;\n}\n",""]),e.exports=t},203:function(e,t,n){e.exports=n(6)(3e3)},205:function(e,t,n){"use strict";var a=n(5),o=n(214),i=n(1);t.a=function(e,t){var n;const{form:l}=t,r=Object(a.b)(t,["form"]),s=Object(o.a)(e,Object.assign(Object.assign({},r),{paginated:!0,manual:!0})),{params:c,run:d,mutate:u}=s,h=c[2]||{},[m,p]=Object(i.useState)(h.type||"simple"),[b,f]=Object(i.useState)(h.allFormData||{}),g=Object(i.useCallback)(()=>{if(l.getFieldInstance){const e=l.getFieldsValue(),t={};return Object.keys(e).forEach(n=>{l.getFieldInstance&&!l.getFieldInstance(n)||(t[n]=e[n])}),t}return l.getFieldsValue(null,()=>!0)},[l]);Object(i.useEffect)(()=>{if(l.getFieldInstance){const e={};Object.keys(b).forEach(t=>{l.getFieldInstance&&!l.getFieldInstance(t)||(e[t]=b[t])}),l.setFieldsValue(e)}else l.setFieldsValue(b)},[m]),Object(i.useEffect)(()=>{c.length>0?d(...c):t.manual||w()},[]);const _=Object(i.useCallback)(()=>{const e=g();f(Object.assign(Object.assign({},b),e)),p("simple"===m?"advance":"simple")},[m,b,g]),w=Object(i.useCallback)(e=>{(null==e?void 0:e.preventDefault)&&e.preventDefault(),setTimeout(()=>{const e=g();console.log(1111,e);const t=Object.assign(Object.assign({},b),e);f(t),d(Object.assign(Object.assign({},c[0]||{}),{current:1}),e,{allFormData:t,type:m})})},[g,d,c,b,m]),P=Object(i.useCallback)(()=>{l.resetFields(),w()},[l,w]);return Object.assign(Object.assign({},s),{search:{submit:w,type:m,changeType:_,reset:P},remove:e=>{u(t=>{const n=t.list.slice();return n.forEach((t,a)=>{t.id===e&&n.splice(a,1)}),Object.assign(Object.assign({},t),{list:n})})},add:e=>{u(t=>{const n=t.list.slice();return n.push(e),Object.assign(Object.assign({},t),{list:n})})},update:(e,t)=>{u(n=>{const a=n.list.slice();return a.forEach((n,o)=>{n.id===e&&(a[o]=Object.assign(Object.assign({},n),t))}),Object.assign(Object.assign({},n),{list:a})})},dataSource:(null===(n=s.data)||void 0===n?void 0:n.list)||[]})}},206:function(e,t,n){"use strict";var a=n(1),o=n.n(a),i=n(21),l=n.n(i);n(207);const r=({visible:e,content:t,space:n,children:a})=>o.a.createElement("div",{className:l()({toolsBar_space:n},"toolsBar")},o.a.createElement("div",{className:"flex flex_between"},a),o.a.createElement("div",{style:{display:e?"block":"none"},className:"toolsBar-content"},t));r.defaultProps={visible:!1,space:!1},t.a=r},207:function(e,t,n){var a=n(14),o=n(202);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1},l=a(o,i);if(!o.locals||e.hot.invalidate){var r=o.locals;e.hot.accept(202,(function(){"string"==typeof(o=(o=n(202)).__esModule?o.default:o)&&(o=[[e.i,o,""]]),function(e,t){if(!e&&t||e&&!t)return!1;var n;for(n in e)if(e[n]!==t[n])return!1;for(n in t)if(!e[n])return!1;return!0}(r,o.locals)?(r=o.locals,l(o)):e.hot.invalidate()}))}e.hot.dispose((function(){l()})),e.exports=o.locals||{}},209:function(e,t,n){e.exports=n(6)(408)},211:function(e,t,n){e.exports=n(6)(75)},213:function(e,t,n){"use strict";var a=n(1),o=n.n(a),i=n(4),l=n(210),r=n(8);function s(e){const t="image/jpeg"===e.type||"image/png"===e.type;t||i.message.error("You can only upload JPG/PNG file!");const n=e.size/1024/1024<.5;return n||i.message.error("Image must smaller than 500Kb!"),t&&n}t.a=e=>{const[t,n]=Object(a.useState)(!1),[c,d]=Object(a.useState)(""),[u,h]=Object(a.useState)("");Object(a.useEffect)(()=>{Object(r.nb)().then(e=>{h(e.data)})},[]),Object(a.useEffect)(()=>{d(e.value?e.value:"")},[e.value]);const m=o.a.createElement("div",null,t?o.a.createElement(l.LoadingOutlined,null):o.a.createElement(l.PlusOutlined,null),o.a.createElement("div",{className:"ant-upload-text"},"Upload"));return o.a.createElement(i.Upload,{name:"file",data:()=>({token:u}),listType:"picture-card",className:"avatar-uploader",showUploadList:!1,action:"https://up-z2.qiniup.com",beforeUpload:s,onChange:t=>{var a;if("uploading"!==t.file.status){if("done"===t.file.status){console.log(t.fileList[0].response.data);const o="http://static.kuaidaxy.com/"+t.fileList.pop().response.key;null===(a=e.onChange)||void 0===a||a.call(e,o.replace("https://","")),function(e,t){const n=new FileReader;n.addEventListener("load",()=>t(n.result)),n.readAsDataURL(e)}(t.file.originFileObj,e=>{n(!1),d(e)})}}else n(!0)}},c?o.a.createElement("img",{src:c,alt:"avatar",style:{width:"100%"}}):m)}},228:function(e,t,n){var a=n(14),o=n(234);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1},l=a(o,i);if(!o.locals||e.hot.invalidate){var r=o.locals;e.hot.accept(234,(function(){"string"==typeof(o=(o=n(234)).__esModule?o.default:o)&&(o=[[e.i,o,""]]),function(e,t){if(!e&&t||e&&!t)return!1;var n;for(n in e)if(e[n]!==t[n])return!1;for(n in t)if(!e[n])return!1;return!0}(r,o.locals)?(r=o.locals,l(o)):e.hot.invalidate()}))}e.hot.dispose((function(){l()})),e.exports=o.locals||{}},234:function(e,t,n){(t=n(15)(!1)).push([e.i,"@keyframes PhotoView__rotate {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes PhotoView__delayShow {\n  0%,\n  50% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n.PhotoView__Spinner {\n  animation: PhotoView__delayShow 0.4s linear both;\n}\n.PhotoView__Spinner svg {\n  animation: PhotoView__rotate 0.6s linear infinite;\n}\n\n.PhotoView__Photo {\n  will-change: transform;\n  cursor: grab;\n}\n.PhotoView__Photo:active {\n  cursor: grabbing;\n}\n\n@keyframes PhotoView__animateIn {\n  from {\n    opacity: 0.4;\n    transform: scale(0.2);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n@keyframes PhotoView__animateOut {\n  from {\n    opacity: 1;\n    transform: scale(1);\n  }\n  to {\n    opacity: 0;\n    transform: scale(0.2);\n  }\n}\n.PhotoView__animateIn {\n  opacity: 0.4;\n  animation: PhotoView__animateIn 0.4s cubic-bezier(0.25, 0.8, 0.25, 1) both;\n}\n.PhotoView__animateOut {\n  opacity: 1;\n  animation: PhotoView__animateOut 0.4s cubic-bezier(0.25, 0.8, 0.25, 1) both;\n}\n.PhotoView__PhotoWrap {\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  z-index: 10;\n  overflow: hidden;\n}\n.PhotoView__PhotoBox {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 0;\n  height: 0;\n}\n.PhotoView__PhotoMask {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: -1;\n}\n\n.PhotoView-SlideWrap {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 2000;\n  overflow: hidden;\n}\n\n@keyframes PhotoView__fade {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.PhotoView-PhotoSlider__clean .PhotoView-PhotoSlider__BannerWrap,\n.PhotoView-PhotoSlider__clean .PhotoView-PhotoSlider__ArrowLeft,\n.PhotoView-PhotoSlider__clean .PhotoView-PhotoSlider__ArrowRight,\n.PhotoView-PhotoSlider__clean .PhotoView-PhotoSlider__FooterWrap {\n  opacity: 0;\n}\n.PhotoView-PhotoSlider__willClose .PhotoView-PhotoSlider__BannerWrap:hover {\n  opacity: 0;\n}\n.PhotoView-PhotoSlider__Backdrop {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.6);\n  z-index: -1;\n}\n.PhotoView-PhotoSlider__fadeIn {\n  opacity: 0;\n  animation: PhotoView__fade 0.4s linear both;\n}\n.PhotoView-PhotoSlider__fadeOut {\n  opacity: 0;\n  animation: PhotoView__fade 0.4s linear both reverse;\n}\n.PhotoView-PhotoSlider__BannerWrap {\n  position: absolute;\n  left: 0;\n  top: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  height: 44px;\n  color: white;\n  background-color: rgba(0, 0, 0, 0.5);\n  transition: opacity 0.2s ease-out;\n  z-index: 20;\n}\n.PhotoView-PhotoSlider__BannerWrap:hover {\n  opacity: 1;\n}\n.PhotoView-PhotoSlider__Counter {\n  padding: 0 10px;\n  font-size: 14px;\n  opacity: 0.75;\n}\n.PhotoView-PhotoSlider__BannerRight {\n  display: flex;\n  align-items: center;\n  height: 100%;\n}\n.PhotoView-PhotoSlider__toolbarIcon {\n  box-sizing: border-box;\n  padding: 10px;\n  opacity: 0.75;\n  cursor: pointer;\n  transition: opacity 0.2s linear;\n}\n.PhotoView-PhotoSlider__toolbarIcon:hover {\n  opacity: 1;\n}\n.PhotoView-PhotoSlider__ArrowLeft,\n.PhotoView-PhotoSlider__ArrowRight {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 70px;\n  height: 100px;\n  margin: auto;\n  opacity: 0.75;\n  z-index: 20;\n  cursor: pointer;\n  user-select: none;\n  transition: opacity 0.2s linear;\n}\n.PhotoView-PhotoSlider__ArrowLeft:hover,\n.PhotoView-PhotoSlider__ArrowRight:hover {\n  opacity: 1;\n}\n.PhotoView-PhotoSlider__ArrowLeft svg,\n.PhotoView-PhotoSlider__ArrowRight svg {\n  box-sizing: content-box;\n  padding: 10px;\n  width: 24px;\n  height: 24px;\n  fill: white;\n  background: rgba(0, 0, 0, 0.3);\n}\n.PhotoView-PhotoSlider__ArrowLeft {\n  left: 0;\n}\n.PhotoView-PhotoSlider__ArrowRight {\n  right: 0;\n}\n.PhotoView-PhotoSlider__FooterWrap {\n  box-sizing: border-box;\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  padding: 10px;\n  width: 100%;\n  min-height: 44px;\n  line-height: 1.5;\n  font-size: 14px;\n  color: #ccc;\n  background-color: rgba(0, 0, 0, 0.5);\n  text-align: justify;\n  transition: opacity 0.2s ease-out;\n  z-index: 20;\n}\n",""]),e.exports=t},47:function(e,t,n){"use strict";n.r(t);var a=n(5),o=n(1),i=n.n(o),l=n(4),r=n(8),s=n(208),c=n(213);const d={labelCol:{span:4},wrapperCol:{span:20}};t.default=e=>{var{data:t}=e,n=Object(a.b)(e,["data"]);const[u]=l.Form.useForm(),{data:h}=Object(s.b)(()=>r.xb({shop_id:n.id,cache:1}));Object(o.useEffect)(()=>{n.visible&&setTimeout(()=>{t?u.setFieldsValue(Object.assign({},t)):(u.resetFields(),u.setFieldsValue({status:1,sort:1}))},100)},[n.visible]);return i.a.createElement(l.Modal,{title:(null==t?void 0:t.id)?"编辑":"添加",maskClosable:!1,visible:n.visible,onCancel:()=>n.setVisible(),onOk:e=>{e.preventDefault(),u.validateFields().then(e=>Object(a.a)(void 0,void 0,void 0,(function*(){var a;const o=Object.assign(Object.assign({},t),e);if(null==t?void 0:t.id)yield r.tc(t.id,e);else{const t=yield r.w(Object.assign(Object.assign({},e),{shop_id:n.id}));o.id=t.data}n.setVisible(),null===(a=n.onOk)||void 0===a||a.call(n,(null==t?void 0:t.id)?"update":"create",o)})))}},i.a.createElement(l.Form,Object.assign({form:u},d),i.a.createElement(l.Form.Item,{label:"分类",name:"category_id",rules:[{required:!0}]},i.a.createElement(l.Select,null,null==h?void 0:h.data.map(e=>i.a.createElement(l.Select.Option,{key:e.id,value:e.id},e.name)))),i.a.createElement(l.Form.Item,{label:"商品名称",name:"name",rules:[{required:!0}]},i.a.createElement(l.Input,null)),i.a.createElement(l.Form.Item,{getValueFromEvent:e=>e,extra:"建议尺寸200 * 200",label:"logo",name:"logo",rules:[{required:!0}]},i.a.createElement(c.a,null)),i.a.createElement(l.Form.Item,{label:"商品价格",name:"price",rules:[{required:!0}]},i.a.createElement(l.InputNumber,null)),i.a.createElement(l.Form.Item,{label:"商品原价格",name:"original_price",rules:[{required:!0}]},i.a.createElement(l.InputNumber,null)),i.a.createElement(l.Form.Item,{label:"库存",name:"stock",rules:[{required:!0}]},i.a.createElement(l.InputNumber,null)),i.a.createElement(l.Form.Item,{label:"描述",name:"intro",rules:[{required:!0}]},i.a.createElement(l.Input.TextArea,null)),i.a.createElement(l.Form.Item,{label:"状态",name:"status"},i.a.createElement(l.Radio.Group,null,i.a.createElement(l.Radio,{value:1},"启用"),i.a.createElement(l.Radio,{value:0},"禁用"))),i.a.createElement(l.Form.Item,{label:"排序",name:"sort"},i.a.createElement(l.InputNumber,null))))}},97:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),i=n(3),l=n(4),r=n(205),s=n(47),c=n(206),d=n(8),u=n(203),h=n.n(u),m=n(208),p=(n(228),n(16));const{confirm:b}=l.Modal;t.default=()=>{const e=Object(i.useRouteMatch)(),t=Object(m.a)(!1),[n,u]=Object(a.useState)(),[f]=l.Form.useForm(),{data:g}=Object(m.b)(()=>d.xb({shop_id:e.params.id,cache:1})),{tableProps:_,search:w,refresh:P,update:v,add:y,remove:O}=Object(r.a)((t,n)=>d.yb(Object.assign(Object.assign({shop_id:e.params.id},t),n)).then(e=>({total:e.total,list:e.data})),{defaultPageSize:20,form:f}),{submit:x}=w||{},E=[{title:"id",dataIndex:"id",width:50},{title:"logo",key:"logo",width:80,render:(e,t,n)=>o.a.createElement("img",{src:Object(p.b)(t.logo),height:"60"})},{title:"名称",dataIndex:"name"},{title:"价格",dataIndex:"price",width:80},{title:"原价",dataIndex:"original_price",width:80},{title:"描述",dataIndex:"intro"},{title:"库存",dataIndex:"sale_count",width:80},{title:"销量",dataIndex:"stock",width:80},{title:"创建时间",key:"create_time",render:e=>h()(e.create_time).format("YYYY-MM-DD HH:mm"),width:130},{title:"跟新人",dataIndex:"create_by",width:90},{title:"跟新时间",key:"update_time",render:e=>h()(e.update_time).format("YYYY-MM-DD HH:mm"),width:130},{title:"跟新人",dataIndex:"update_by",width:90},{title:"操作",key:"action",fixed:"right",width:160,render:e=>o.a.createElement("div",null,o.a.createElement(l.Button,{onClick:()=>(u(e),void t.toggle()),type:"link"},"修改"),o.a.createElement(l.Button,{onClick:()=>{return t=e,void b({title:"提示",content:"真的真的确认删除该班型？此操作不可恢复哦？",onOk:()=>(O(t.id),d.Lb(t.id)),onCancel(){}});var t},type:"link"},"删除"))}];return o.a.createElement("div",null,o.a.createElement(c.a,{space:!0,visible:!1},o.a.createElement(l.Form,{form:f,layout:"inline"},o.a.createElement(l.Form.Item,{name:"name"},o.a.createElement(l.Input.Search,{placeholder:"名字",onSearch:x})),o.a.createElement(l.Form.Item,{name:"category_id"},o.a.createElement(l.Select,{placeholder:"分类",style:{width:"140px"},allowClear:!0,onChange:x},null==g?void 0:g.data.map(e=>o.a.createElement(l.Select.Option,{key:e.id,value:e.id},e.name)))),o.a.createElement(l.Form.Item,{name:"status"},o.a.createElement(l.Select,{placeholder:"状态",style:{width:"140px"},allowClear:!0,onChange:x},o.a.createElement(l.Select.Option,{value:"0"},"暂停"),o.a.createElement(l.Select.Option,{value:"1"},"启用")))),o.a.createElement("div",null,o.a.createElement(l.Button,{type:"primary",onClick:()=>{u(void 0),t.toggle()}},"新增"),"  ",o.a.createElement(l.Button,{onClick:P},"刷新"))),o.a.createElement(l.Table,Object.assign({columns:E,size:"small",scroll:{x:1400},rowKey:"id"},_)),o.a.createElement(s.default,{id:parseInt(e.params.id),visible:t.state,data:n,setVisible:t.toggle,onOk:(e,t)=>{console.log(t),"update"===e?v(t.id,t):y(t)}}))}}}]);