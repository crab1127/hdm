(window.webpackJsonp=window.webpackJsonp||[]).push([[138],{213:function(e,t,a){e.exports=a(6)(408)},214:function(e,t,a){e.exports=a(6)(75)},215:function(e,t,a){"use strict";var l=a(1),n=a.n(l),r=a(4),o=a(212),s=a(8);function m(e){const t="image/jpeg"===e.type||"image/png"===e.type;t||r.message.error("You can only upload JPG/PNG file!");const a=e.size/1024/1024<.5;return a||r.message.error("Image must smaller than 500Kb!"),t&&a}t.a=e=>{const[t,a]=Object(l.useState)(!1),[c,i]=Object(l.useState)(""),[u,p]=Object(l.useState)("");Object(l.useEffect)(()=>{Object(s.pb)().then(e=>{p(e.data)})},[]),Object(l.useEffect)(()=>{i(e.value?e.value:"")},[e.value]);const d=n.a.createElement("div",null,t?n.a.createElement(o.LoadingOutlined,null):n.a.createElement(o.PlusOutlined,null),n.a.createElement("div",{className:"ant-upload-text"},"Upload"));return n.a.createElement(r.Upload,{name:"file",data:()=>({token:u}),listType:"picture-card",className:"avatar-uploader",showUploadList:!1,action:"https://up-z2.qiniup.com",beforeUpload:m,onChange:t=>{var l;if("uploading"!==t.file.status){if("done"===t.file.status){console.log(t.fileList[0].response.data);const n="http://static.kuaidaxy.com/"+t.fileList.pop().response.key;null===(l=e.onChange)||void 0===l||l.call(e,n.replace("https://","")),function(e,t){const a=new FileReader;a.addEventListener("load",()=>t(a.result)),a.readAsDataURL(e)}(t.file.originFileObj,e=>{a(!1),i(e)})}}else a(!0)}},c?n.a.createElement("img",{src:c,alt:"avatar",style:{width:"100%"}}):d)}},230:function(e,t,a){"use strict";var l=a(1),n=a.n(l);let r;t.a=e=>(Object(l.useEffect)(()=>{var t;const a=window.AMap;var l=new a.Map("map-location",{zoom:15,center:(null===(t=e.positons)||void 0===t?void 0:t.length)?e.positons:[116.473188,39.993253]});l.on("click",(function(t){var n;r&&l.remove(r),r=new a.Marker({position:new a.LngLat(t.lnglat.lng,t.lnglat.lat),title:"xx"}),l.add(r),null===(n=e.onPick)||void 0===n||n.call(e,{lat:t.lnglat.lat,lng:t.lnglat.lng})})),e.positons&&e.positons.length&&(r=new a.Marker({position:new a.LngLat(e.positons[0],e.positons[1]),title:"xx"}),l.add(r))},[]),n.a.createElement("div",{id:"map-location",style:Object.assign({width:"500px",height:"300px"},e.style)}))},37:function(e,t,a){"use strict";a.r(t);var l=a(1),n=a.n(l),r=a(4),o=a(211),s=a(9),m=a(8),c=a(215),i=a(230);t.default=({id:e})=>{const{data:t,loading:a}=Object(o.b)(()=>Object(m.sb)(e).then(e=>e.data)),[l]=r.Form.useForm();return n.a.createElement(n.a.Fragment,null,a&&"加载种",t&&n.a.createElement(r.Form,Object.assign({},s.c,{form:l,wrapperCol:{span:10},initialValues:t,onFinish:t=>{Object(m.sc)(e,t).then(()=>{r.message.success("更新成功")}).catch(()=>{r.message.error("更新失败")})}}),n.a.createElement(r.Form.Item,{label:"logo",name:"logo",getValueFromEvent:e=>e,rules:[{required:!0}],extra:"建议尺寸200 * 200"},n.a.createElement(c.a,null)),n.a.createElement(r.Form.Item,{label:"名字",name:"name",rules:[{required:!0}]},n.a.createElement(r.Input,null)),n.a.createElement(r.Form.Item,{label:"门店抽成",name:"shop_cut",extra:"例如10元的商品订单，设置为10%，将获取1元的佣金"},n.a.createElement(r.InputNumber,{min:0,max:30,formatter:e=>`${e}%`,parser:e=>e.replace("%","")})),n.a.createElement(r.Form.Item,{label:"详情介绍",name:"intro"},n.a.createElement(r.Input.TextArea,{rows:6})),n.a.createElement(r.Form.Item,{label:"联系人",name:"contacts",rules:[{required:!0}]},n.a.createElement(r.Input,null)),n.a.createElement(r.Form.Item,{label:"联系人微信二维码",name:"contact_qr",getValueFromEvent:e=>e,extra:"建议提供微信的个人二维码，"},n.a.createElement(c.a,null)),n.a.createElement(r.Form.Item,{label:"联系电话",name:"mobile",rules:[{required:!0}]},n.a.createElement(r.Input,null)),n.a.createElement(r.Form.Item,{label:"地址",name:"address",rules:[{required:!0}]},n.a.createElement(r.Input,null)),n.a.createElement(r.Form.Item,{label:"选择坐标",style:{marginBottom:0},rules:[{required:!0}]},n.a.createElement(r.Form.Item,{name:"longitude",rules:[{required:!0}],style:{display:"inline-block",width:"calc(50% - 8px)"}},n.a.createElement(r.Input,{placeholder:"经度",disabled:!0})),n.a.createElement(r.Form.Item,{name:"latitude",rules:[{required:!0}],style:{display:"inline-block",width:"calc(50% - 8px)",margin:"0 8px"}},n.a.createElement(r.Input,{placeholder:"纬度",disabled:!0}))),n.a.createElement(r.Form.Item,{wrapperCol:{offset:4}},n.a.createElement(i.a,{positons:t.longitude&&t.latitude?[t.longitude,t.latitude]:[],onPick:e=>{l.setFieldsValue({longitude:e.lng,latitude:e.lat})}})),n.a.createElement(r.Form.Item,{label:"运费",name:"postage",rules:[{required:!0}]},n.a.createElement(r.InputNumber,{formatter:e=>`￥ ${e}`,parser:e=>e.replace("￥ ","")})),n.a.createElement(r.Form.Item,{label:"营业时间",name:"business_hours"},n.a.createElement(r.Input,null)),n.a.createElement(r.Form.Item,{label:"通知",name:"notice"},n.a.createElement(r.Input.TextArea,{rows:5})),n.a.createElement(r.Form.Item,{wrapperCol:{offset:4,span:16}},n.a.createElement(r.Button,{type:"primary",htmlType:"submit"},"保存"))))}},92:function(e,t,a){"use strict";a.r(t);var l=a(1),n=a.n(l),r=a(3),o=a(37);t.default=()=>{const e=Object(r.useRouteMatch)();return n.a.createElement("div",{className:"p20"},n.a.createElement(o.default,{id:parseInt(e.params.id)}))}}}]);