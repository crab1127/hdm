(self.webpackChunkxiaoniao=self.webpackChunkxiaoniao||[]).push([[1735,6933],{70113:(e,t,n)=>{"use strict";n.d(t,{Z:()=>y});var a=n(24595),i=n(80346),s=n(15851),r=n(92238),l=n(34846),c=n(16255),o=n.n(c),u=n(81420),d=n(44842),f=s.forwardRef((function(e,t){var n,a=e.prefixCls,c=void 0===a?"rc-switch":a,f=e.className,h=e.checked,m=e.defaultChecked,v=e.disabled,g=e.loadingIcon,p=e.checkedChildren,b=e.unCheckedChildren,$=e.onClick,y=e.onChange,O=e.onKeyDown,E=(0,l.Z)(e,["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"]),Z=(0,u.Z)(!1,{value:h,defaultValue:m}),S=(0,r.Z)(Z,2),C=S[0],k=S[1];function D(e,t){var n=C;return v||(k(n=e),null==y||y(n,t)),n}var M=o()(c,f,(n={},(0,i.Z)(n,"".concat(c,"-checked"),C),(0,i.Z)(n,"".concat(c,"-disabled"),v),n));return s.createElement("button",Object.assign({},E,{type:"button",role:"switch","aria-checked":C,disabled:v,className:M,ref:t,onKeyDown:function(e){e.which===d.Z.LEFT?D(!1,e):e.which===d.Z.RIGHT&&D(!0,e),null==O||O(e)},onClick:function(e){var t=D(!C,e);null==$||$(t,e)}}),g,s.createElement("span",{className:"".concat(c,"-inner")},C?p:b))}));f.displayName="Switch";const h=f;var m=n(89738),v=n(26420),g=n(42795),p=n(17979),b=n(83493),$=s.forwardRef((function(e,t){var n,r=e.prefixCls,l=e.size,c=e.loading,u=e.className,d=void 0===u?"":u,f=e.disabled,$=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(n[a[i]]=e[a[i]])}return n}(e,["prefixCls","size","loading","className","disabled"]);(0,b.Z)("checked"in $||!("value"in $),"Switch","`value` is not a valid prop, do you mean `checked`?");var y=s.useContext(g.E_),O=y.getPrefixCls,E=y.direction,Z=s.useContext(p.Z),S=O("switch",r),C=s.createElement("div",{className:"".concat(S,"-handle")},c&&s.createElement(m.Z,{className:"".concat(S,"-loading-icon")})),k=o()((n={},(0,i.Z)(n,"".concat(S,"-small"),"small"===(l||Z)),(0,i.Z)(n,"".concat(S,"-loading"),c),(0,i.Z)(n,"".concat(S,"-rtl"),"rtl"===E),n),d);return s.createElement(v.Z,{insertExtraNode:!0},s.createElement(h,(0,a.Z)({},$,{prefixCls:S,className:k,disabled:f||c,ref:t,loadingIcon:C})))}));$.__ANT_SWITCH=!0,$.displayName="Switch";const y=$},22854:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>s});var a=n(45154),i=n.n(a)()((function(e){return e[1]}));i.push([e.id,"/** @format */\n.toolsBar {\n  background: #fff;\n  padding: 10px;\n}\n.toolsBar .toolsBar-content {\n  padding: 10px;\n  background: #f4f4f4;\n  margin-top: 5px;\n}\n",""]);const s=i},80900:function(e){e.exports=function(){"use strict";var e="millisecond",t="second",n="minute",a="hour",i="day",s="week",r="month",l="quarter",c="year",o="date",u=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,d=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},h=function(e,t,n){var a=String(e);return!a||a.length>=t?e:""+Array(t+1-a.length).join(n)+e},m={s:h,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),a=Math.floor(n/60),i=n%60;return(t<=0?"+":"-")+h(a,2,"0")+":"+h(i,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var a=12*(n.year()-t.year())+(n.month()-t.month()),i=t.clone().add(a,r),s=n-i<0,l=t.clone().add(a+(s?-1:1),r);return+(-(a+(n-i)/(s?i-l:l-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(u){return{M:r,y:c,w:s,d:i,D:o,h:a,m:n,s:t,ms:e,Q:l}[u]||String(u||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",g={};g[v]=f;var p=function(e){return e instanceof O},b=function(e,t,n){var a;if(!e)return v;if("string"==typeof e)g[e]&&(a=e),t&&(g[e]=t,a=e);else{var i=e.name;g[i]=e,a=i}return!n&&a&&(v=a),a||!n&&v},$=function(e,t){if(p(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new O(n)},y=m;y.l=b,y.i=p,y.w=function(e,t){return $(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var O=function(){function f(e){this.$L=b(e.locale,null,!0),this.parse(e)}var h=f.prototype;return h.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(y.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var a=t.match(u);if(a){var i=a[2]-1||0,s=(a[7]||"0").substring(0,3);return n?new Date(Date.UTC(a[1],i,a[3]||1,a[4]||0,a[5]||0,a[6]||0,s)):new Date(a[1],i,a[3]||1,a[4]||0,a[5]||0,a[6]||0,s)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},h.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},h.$utils=function(){return y},h.isValid=function(){return!("Invalid Date"===this.$d.toString())},h.isSame=function(e,t){var n=$(e);return this.startOf(t)<=n&&n<=this.endOf(t)},h.isAfter=function(e,t){return $(e)<this.startOf(t)},h.isBefore=function(e,t){return this.endOf(t)<$(e)},h.$g=function(e,t,n){return y.u(e)?this[t]:this.set(n,e)},h.unix=function(){return Math.floor(this.valueOf()/1e3)},h.valueOf=function(){return this.$d.getTime()},h.startOf=function(e,l){var u=this,d=!!y.u(l)||l,f=y.p(e),h=function(e,t){var n=y.w(u.$u?Date.UTC(u.$y,t,e):new Date(u.$y,t,e),u);return d?n:n.endOf(i)},m=function(e,t){return y.w(u.toDate()[e].apply(u.toDate("s"),(d?[0,0,0,0]:[23,59,59,999]).slice(t)),u)},v=this.$W,g=this.$M,p=this.$D,b="set"+(this.$u?"UTC":"");switch(f){case c:return d?h(1,0):h(31,11);case r:return d?h(1,g):h(0,g+1);case s:var $=this.$locale().weekStart||0,O=(v<$?v+7:v)-$;return h(d?p-O:p+(6-O),g);case i:case o:return m(b+"Hours",0);case a:return m(b+"Minutes",1);case n:return m(b+"Seconds",2);case t:return m(b+"Milliseconds",3);default:return this.clone()}},h.endOf=function(e){return this.startOf(e,!1)},h.$set=function(s,l){var u,d=y.p(s),f="set"+(this.$u?"UTC":""),h=(u={},u[i]=f+"Date",u[o]=f+"Date",u[r]=f+"Month",u[c]=f+"FullYear",u[a]=f+"Hours",u[n]=f+"Minutes",u[t]=f+"Seconds",u[e]=f+"Milliseconds",u)[d],m=d===i?this.$D+(l-this.$W):l;if(d===r||d===c){var v=this.clone().set(o,1);v.$d[h](m),v.init(),this.$d=v.set(o,Math.min(this.$D,v.daysInMonth())).$d}else h&&this.$d[h](m);return this.init(),this},h.set=function(e,t){return this.clone().$set(e,t)},h.get=function(e){return this[y.p(e)]()},h.add=function(e,l){var o,u=this;e=Number(e);var d=y.p(l),f=function(t){var n=$(u);return y.w(n.date(n.date()+Math.round(t*e)),u)};if(d===r)return this.set(r,this.$M+e);if(d===c)return this.set(c,this.$y+e);if(d===i)return f(1);if(d===s)return f(7);var h=(o={},o[n]=6e4,o[a]=36e5,o[t]=1e3,o)[d]||1,m=this.$d.getTime()+e*h;return y.w(m,this)},h.subtract=function(e,t){return this.add(-1*e,t)},h.format=function(e){var t=this;if(!this.isValid())return"Invalid Date";var n=e||"YYYY-MM-DDTHH:mm:ssZ",a=y.z(this),i=this.$locale(),s=this.$H,r=this.$m,l=this.$M,c=i.weekdays,o=i.months,u=function(e,a,i,s){return e&&(e[a]||e(t,n))||i[a].substr(0,s)},f=function(e){return y.s(s%12||12,e,"0")},h=i.meridiem||function(e,t,n){var a=e<12?"AM":"PM";return n?a.toLowerCase():a},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:l+1,MM:y.s(l+1,2,"0"),MMM:u(i.monthsShort,l,o,3),MMMM:u(o,l),D:this.$D,DD:y.s(this.$D,2,"0"),d:String(this.$W),dd:u(i.weekdaysMin,this.$W,c,2),ddd:u(i.weekdaysShort,this.$W,c,3),dddd:c[this.$W],H:String(s),HH:y.s(s,2,"0"),h:f(1),hh:f(2),a:h(s,r,!0),A:h(s,r,!1),m:String(r),mm:y.s(r,2,"0"),s:String(this.$s),ss:y.s(this.$s,2,"0"),SSS:y.s(this.$ms,3,"0"),Z:a};return n.replace(d,(function(e,t){return t||m[e]||a.replace(":","")}))},h.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},h.diff=function(e,o,u){var d,f=y.p(o),h=$(e),m=6e4*(h.utcOffset()-this.utcOffset()),v=this-h,g=y.m(this,h);return g=(d={},d[c]=g/12,d[r]=g,d[l]=g/3,d[s]=(v-m)/6048e5,d[i]=(v-m)/864e5,d[a]=v/36e5,d[n]=v/6e4,d[t]=v/1e3,d)[f]||v,u?g:y.a(g)},h.daysInMonth=function(){return this.endOf(r).$D},h.$locale=function(){return g[this.$L]},h.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),a=b(e,t,!0);return a&&(n.$L=a),n},h.clone=function(){return y.w(this.$d,this)},h.toDate=function(){return new Date(this.valueOf())},h.toJSON=function(){return this.isValid()?this.toISOString():null},h.toISOString=function(){return this.$d.toISOString()},h.toString=function(){return this.$d.toUTCString()},f}(),E=O.prototype;return $.prototype=E,[["$ms",e],["$s",t],["$m",n],["$H",a],["$W",i],["$M",r],["$y",c],["$D",o]].forEach((function(e){E[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),$.extend=function(e,t){return e.$i||(e(t,O,$),e.$i=!0),$},$.locale=b,$.isDayjs=p,$.unix=function(e){return $(1e3*e)},$.en=g[v],$.Ls=g,$.p={},$}()},4892:(e,t,n)=>{"use strict";var a=n(57574),i=n.n(a),s=n(22854),r=i()(s.default,{insert:"head",singleton:!1});if(!s.default.locals||e.hot.invalidate){var l=s.default.locals;e.hot.accept(22854,(t=>{s=n(22854),function(e,t,n){if(!e&&t||e&&!t)return!1;var a;for(a in e)if(e[a]!==t[a])return!1;for(a in t)if(!e[a])return!1;return!0}(l,s.default.locals)?(l=s.default.locals,r(s.default)):e.hot.invalidate()}))}e.hot.dispose((function(){r()})),s.default.locals},21685:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var a=n(15851),i=n(53922);const s=e=>{const{permsList:t}=i.Z.useContainer();return t.includes(e.name)?a.createElement(a.Fragment,null," ",e.children," "):a.createElement(a.Fragment,null)}},381:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var a=n(15851);n(4892);const i=({visible:e,content:t,children:n})=>a.createElement("div",{className:"toolsBar"},a.createElement("div",{className:"flex flex_between"},n),a.createElement("div",{style:{display:e?"block":"none"},className:"toolsBar-content"},t));i.defaultProps={visible:!1};const s=i},25715:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});var a=n(43865),i=n(58233),s=n(15851);const r=function(e,t){var n;const{form:r}=t,l=(0,a._T)(t,["form"]),c=(0,i.ZP)(e,Object.assign(Object.assign({},l),{paginated:!0,manual:!0})),{params:o,run:u,mutate:d}=c,f=o[2]||{},[h,m]=(0,s.useState)(f.type||"simple"),[v,g]=(0,s.useState)(f.allFormData||{}),p=(0,s.useCallback)((()=>{if(r.getFieldInstance){const e=r.getFieldsValue(),t={};return Object.keys(e).forEach((n=>{r.getFieldInstance&&!r.getFieldInstance(n)||(t[n]=e[n])})),t}return r.getFieldsValue(null,(()=>!0))}),[r]);(0,s.useEffect)((()=>{if(r.getFieldInstance){const e={};Object.keys(v).forEach((t=>{r.getFieldInstance&&!r.getFieldInstance(t)||(e[t]=v[t])})),r.setFieldsValue(e)}else r.setFieldsValue(v)}),[h]),(0,s.useEffect)((()=>{o.length>0?u(...o):t.manual||$()}),[]);const b=(0,s.useCallback)((()=>{const e=p();g(Object.assign(Object.assign({},v),e)),m("simple"===h?"advance":"simple")}),[h,v,p]),$=(0,s.useCallback)((e=>{(null==e?void 0:e.preventDefault)&&e.preventDefault(),setTimeout((()=>{const e=p();console.log(1111,e);const n=Object.assign(Object.assign({},v),e);g(n),u(Object.assign(Object.assign({},o[0]||{}),{pageSize:t.defaultPageSize||10,current:1}),e,{allFormData:n,type:h})}))}),[p,u,o,v,h]),y=(0,s.useCallback)((()=>{r.resetFields(),$()}),[r,$]);return Object.assign(Object.assign({},c),{search:{submit:$,type:h,changeType:b,reset:y},remove:e=>{d((t=>{const n=t.list.slice();return n.forEach(((t,a)=>{t.id===e&&n.splice(a,1)})),Object.assign(Object.assign({},t),{list:n})}))},add:e=>{d((t=>{const n=t.list.slice();return n.push(e),Object.assign(Object.assign({},t),{list:n})}))},update:(e,t)=>{d((n=>{const a=n.list.slice();return a.forEach(((n,i)=>{n.id===e&&(a[i]=Object.assign(Object.assign({},n),t))})),Object.assign(Object.assign({},n),{list:a})}))},dataSource:(null===(n=c.data)||void 0===n?void 0:n.list)||[]})}},36933:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>h});var a=n(43865),i=n(15851),s=n(36949),r=n(53985),l=n(72390),c=n(83e3),o=n(88984),u=n(41915);const d={labelCol:{span:4},wrapperCol:{span:20}},f=e=>{var{data:t}=e,n=(0,a._T)(e,["data"]);const[f]=s.Z.useForm();return(0,i.useEffect)((()=>{n.visible&&setTimeout((()=>{t?f.setFieldsValue(Object.assign({},t)):(f.resetFields(),f.setFieldsValue({status:1,sort:1}))}))}),[n.visible]),i.createElement(r.Z,{title:(null==t?void 0:t.id)?"编辑":"添加",maskClosable:!1,visible:n.visible,onCancel:()=>n.onClose(),onOk:e=>{e.preventDefault(),f.validateFields().then((e=>(0,a.mG)(void 0,void 0,void 0,(function*(){var a;const i=Object.assign(Object.assign({},t),e);(null==t?void 0:t.id)?yield(0,u.Xx)(t.id,e):yield(0,u.iI)(e),n.onClose(),null===(a=n.onOk)||void 0===a||a.call(n,(null==t?void 0:t.id)?"update":"create",i)}))))}},i.createElement(s.Z,Object.assign({form:f},d),i.createElement(s.Z.Item,{label:"名称",name:"title"},i.createElement(l.Z,null)),i.createElement(s.Z.Item,{label:"内容",name:"content"},i.createElement(l.Z.TextArea,null)),i.createElement(s.Z.Item,{label:"状态",name:"status"},i.createElement(c.ZP.Group,null,i.createElement(c.ZP,{value:1},"启用"),i.createElement(c.ZP,{value:0},"禁用"))),i.createElement(s.Z.Item,{label:"排序",name:"sort"},i.createElement(o.Z,null))))};f.defaultProps={disabled:[]};const h=f},81735:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>O});var a=n(15851),i=n(73630),s=n(36949),r=n(53985),l=n(70113),c=n(72145),o=n(72390),u=n(21921),d=n(80471),f=n(25715),h=n(36933),m=n(381),v=n(41915),g=n(80900),p=n.n(g),b=n(57100),$=n(21685),y=n(74848);const O=()=>{const e=(0,i.$B)(),t=(0,b.kt)(!1),[n,g]=(0,a.useState)(),[O]=s.Z.useForm(),{tableProps:E,search:Z,refresh:S,update:C,add:k,remove:D}=(0,f.Z)(((e,t)=>(0,v.vo)(Object.assign(Object.assign({},e),t)).then((e=>({total:e.total,list:e.data})))),{defaultPageSize:20,form:O}),{submit:M}=Z||{},w=[{title:"id",dataIndex:"id"},{title:"公告名称",dataIndex:"title"},{title:"公告名称",dataIndex:"content"},{title:"状态",key:"status",render:(e,t)=>a.createElement(l.Z,{checked:!!t.status,onChange:e=>{(0,v.Xx)(t.id,{status:e?1:0}),C(t.id,{status:e?1:0})}})},{title:"跟新时间",key:"update_time",render:e=>p()(e.update_time).format("YYYY-MM-DD hh:mm")},{title:"跟新人",dataIndex:"update_by"},{title:"操作",key:"action",render:e=>a.createElement("div",null,a.createElement($.Z,{name:y.g3.SYSTEM_NOTICE_EDIT},a.createElement(c.Z,{onClick:()=>(g(e),void t.toggle()),type:"link"},"修改")),a.createElement($.Z,{name:y.g3.SYSTEM_NOTICE_REMOVE},a.createElement(c.Z,{onClick:()=>{return t=e,void r.Z.confirm({title:"提示",content:"是否真的要删除？",onOk:()=>{(0,v.qq)(t.id),D(t.id)}});var t},type:"link"},"删除")))}];return a.createElement("div",null,a.createElement(m.Z,{visible:!1},a.createElement(s.Z,{form:O,layout:"inline"},a.createElement(s.Z.Item,{name:"name"},a.createElement(o.Z.Search,{placeholder:"名字",onSearch:M})),a.createElement(s.Z.Item,{name:"status"},a.createElement(u.Z,{placeholder:"用户状态",style:{width:"140px"},allowClear:!0,onChange:M},a.createElement(u.Z.Option,{value:"0"},"暂停"),a.createElement(u.Z.Option,{value:"1"},"启用")))),a.createElement("div",null,a.createElement($.Z,{name:y.g3.SYSTEM_NOTICE_ADD},a.createElement(c.Z,{type:"primary",onClick:()=>{g(void 0),t.toggle()}},"新增")),"  ",a.createElement(c.Z,{onClick:S},"刷新"))),a.createElement(d.Z,Object.assign({columns:w,rowKey:"id"},E)),a.createElement(h.default,{id:parseInt(e.params.id),visible:t.state,data:n,onClose:t.setFalse,onOk:(e,t)=>{console.log(t),"update"===e?C(t.id,t):k(t)}}))}}}]);