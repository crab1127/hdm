(self.webpackChunkxiaoniao=self.webpackChunkxiaoniao||[]).push([[8091,9249],{83e3:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>x});var a=n(80346),r=n(24595),i=n(15851),s=n(93861),o=n(16255),l=n.n(o),c=n(32871),u=n(42795),d=i.createContext(null),f=d.Provider;const h=d;var p=n(83493),m=function(e,t){var n,o=i.useContext(h),d=i.useContext(u.E_),f=d.getPrefixCls,m=d.direction,v=i.useRef(),y=(0,c.sQ)(t,v);i.useEffect((function(){(0,p.Z)(!("optionType"in e),"Radio","`optionType` is only support in Radio.Group.")}),[]);var g=e.prefixCls,b=e.className,$=e.children,O=e.style,C=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n}(e,["prefixCls","className","children","style"]),E=f("radio",g),Z=(0,r.Z)({},C);o&&(Z.name=o.name,Z.onChange=function(t){e.onChange&&e.onChange(t),(null==o?void 0:o.onChange)&&o.onChange(t)},Z.checked=e.value===o.value,Z.disabled=e.disabled||o.disabled);var k=l()("".concat(E,"-wrapper"),(n={},(0,a.Z)(n,"".concat(E,"-wrapper-checked"),Z.checked),(0,a.Z)(n,"".concat(E,"-wrapper-disabled"),Z.disabled),(0,a.Z)(n,"".concat(E,"-wrapper-rtl"),"rtl"===m),n),b);return i.createElement("label",{className:k,style:O,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave},i.createElement(s.Z,(0,r.Z)({},Z,{prefixCls:E,ref:y})),void 0!==$?i.createElement("span",null,$):null)},v=i.forwardRef(m);v.displayName="Radio",v.defaultProps={type:"radio"};const y=v;var g=n(92238),b=n(81420),$=n(17979),O=i.forwardRef((function(e,t){var n=i.useContext(u.E_),r=n.getPrefixCls,s=n.direction,o=i.useContext($.Z),c=(0,b.Z)(e.defaultValue,{value:e.value}),d=(0,g.Z)(c,2),h=d[0],p=d[1];return i.createElement(f,{value:{onChange:function(t){var n=h,a=t.target.value;"value"in e||p(a);var r=e.onChange;r&&a!==n&&r(t)},value:h,disabled:e.disabled,name:e.name}},function(){var n,c=e.prefixCls,u=e.className,d=void 0===u?"":u,f=e.options,p=e.optionType,m=e.buttonStyle,v=void 0===m?"outline":m,g=e.disabled,b=e.children,$=e.size,O=e.style,C=e.id,E=e.onMouseEnter,Z=e.onMouseLeave,k=r("radio",c),x="".concat(k,"-group"),w=b;if(f&&f.length>0){var S="button"===p?"".concat(k,"-button"):k;w=f.map((function(e){return"string"==typeof e?i.createElement(y,{key:e,prefixCls:S,disabled:g,value:e,checked:h===e},e):i.createElement(y,{key:"radio-group-value-options-".concat(e.value),prefixCls:S,disabled:e.disabled||g,value:e.value,checked:h===e.value,style:e.style},e.label)}))}var D=$||o,M=l()(x,"".concat(x,"-").concat(v),(n={},(0,a.Z)(n,"".concat(x,"-").concat(D),D),(0,a.Z)(n,"".concat(x,"-rtl"),"rtl"===s),n),d);return i.createElement("div",{className:M,style:O,onMouseEnter:E,onMouseLeave:Z,id:C,ref:t},w)}())}));const C=i.memo(O);var E=function(e,t){var n=i.useContext(h),a=i.useContext(u.E_).getPrefixCls,s=e.prefixCls,o=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n}(e,["prefixCls"]),l=a("radio-button",s);return n&&(o.checked=e.value===n.value,o.disabled=e.disabled||n.disabled),i.createElement(y,(0,r.Z)({prefixCls:l},o,{type:"radio",ref:t}))};const Z=i.forwardRef(E);var k=y;k.Button=Z,k.Group=C;const x=k},25192:(e,t,n)=>{"use strict";n.d(t,{u:()=>f,Z:()=>p});var a=n(24595),r=n(80346),i=n(92238),s=n(15851),o=n(16255),l=n.n(o),c=n(39444),u=n(42795);function d(e){var t=e.className,n=e.direction,i=e.index,o=e.marginDirection,l=e.children,c=e.split,u=e.wrap,d=s.useContext(f),h=d.horizontalSize,p=d.verticalSize,m=d.latestIndex,v={};return"vertical"===n?i<m&&(v={marginBottom:h/(c?2:1)}):v=(0,a.Z)((0,a.Z)({},i<m&&(0,r.Z)({},o,h/(c?2:1))),u&&{paddingBottom:p}),null==l?null:s.createElement(s.Fragment,null,s.createElement("div",{className:t,style:v},l),i<m&&c&&s.createElement("span",{className:"".concat(t,"-split"),style:v},c))}var f=s.createContext({latestIndex:0,horizontalSize:0,verticalSize:0}),h={small:8,middle:16,large:24};const p=function(e){var t,n=s.useContext(u.E_),o=n.getPrefixCls,p=n.space,m=n.direction,v=e.size,y=void 0===v?(null==p?void 0:p.size)||"small":v,g=e.align,b=e.className,$=e.children,O=e.direction,C=void 0===O?"horizontal":O,E=e.prefixCls,Z=e.split,k=e.style,x=e.wrap,w=void 0!==x&&x,S=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n}(e,["size","align","className","children","direction","prefixCls","split","style","wrap"]),D=s.useMemo((function(){return(Array.isArray(y)?y:[y,y]).map((function(e){return function(e){return"string"==typeof e?h[e]:e||0}(e)}))}),[y]),M=(0,i.Z)(D,2),j=M[0],_=M[1],I=(0,c.Z)($,{keepEmpty:!0});if(0===I.length)return null;var P=void 0===g&&"horizontal"===C?"center":g,F=o("space",E),N=l()(F,"".concat(F,"-").concat(C),(t={},(0,r.Z)(t,"".concat(F,"-rtl"),"rtl"===m),(0,r.Z)(t,"".concat(F,"-align-").concat(P),P),t),b),T="".concat(F,"-item"),z="rtl"===m?"marginLeft":"marginRight",Y=0,H=I.map((function(e,t){return null!=e&&(Y=t),s.createElement(d,{className:T,key:"".concat(T,"-").concat(t),direction:C,index:t,marginDirection:z,split:Z,wrap:w},e)}));return s.createElement("div",(0,a.Z)({className:N,style:(0,a.Z)((0,a.Z)({},w&&{flexWrap:"wrap",marginBottom:-_}),k)},S),s.createElement(f.Provider,{value:{horizontalSize:j,verticalSize:_,latestIndex:Y}},H))}},22854:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>i});var a=n(45154),r=n.n(a)()((function(e){return e[1]}));r.push([e.id,"/** @format */\n.toolsBar {\n  background: #fff;\n  padding: 10px;\n}\n.toolsBar .toolsBar-content {\n  padding: 10px;\n  background: #f4f4f4;\n  margin-top: 5px;\n}\n",""]);const i=r},80900:function(e){e.exports=function(){"use strict";var e="millisecond",t="second",n="minute",a="hour",r="day",i="week",s="month",o="quarter",l="year",c="date",u=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,d=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},h=function(e,t,n){var a=String(e);return!a||a.length>=t?e:""+Array(t+1-a.length).join(n)+e},p={s:h,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),a=Math.floor(n/60),r=n%60;return(t<=0?"+":"-")+h(a,2,"0")+":"+h(r,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var a=12*(n.year()-t.year())+(n.month()-t.month()),r=t.clone().add(a,s),i=n-r<0,o=t.clone().add(a+(i?-1:1),s);return+(-(a+(n-r)/(i?r-o:o-r))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(u){return{M:s,y:l,w:i,d:r,D:c,h:a,m:n,s:t,ms:e,Q:o}[u]||String(u||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},m="en",v={};v[m]=f;var y=function(e){return e instanceof O},g=function(e,t,n){var a;if(!e)return m;if("string"==typeof e)v[e]&&(a=e),t&&(v[e]=t,a=e);else{var r=e.name;v[r]=e,a=r}return!n&&a&&(m=a),a||!n&&m},b=function(e,t){if(y(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new O(n)},$=p;$.l=g,$.i=y,$.w=function(e,t){return b(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var O=function(){function f(e){this.$L=g(e.locale,null,!0),this.parse(e)}var h=f.prototype;return h.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if($.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var a=t.match(u);if(a){var r=a[2]-1||0,i=(a[7]||"0").substring(0,3);return n?new Date(Date.UTC(a[1],r,a[3]||1,a[4]||0,a[5]||0,a[6]||0,i)):new Date(a[1],r,a[3]||1,a[4]||0,a[5]||0,a[6]||0,i)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},h.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},h.$utils=function(){return $},h.isValid=function(){return!("Invalid Date"===this.$d.toString())},h.isSame=function(e,t){var n=b(e);return this.startOf(t)<=n&&n<=this.endOf(t)},h.isAfter=function(e,t){return b(e)<this.startOf(t)},h.isBefore=function(e,t){return this.endOf(t)<b(e)},h.$g=function(e,t,n){return $.u(e)?this[t]:this.set(n,e)},h.unix=function(){return Math.floor(this.valueOf()/1e3)},h.valueOf=function(){return this.$d.getTime()},h.startOf=function(e,o){var u=this,d=!!$.u(o)||o,f=$.p(e),h=function(e,t){var n=$.w(u.$u?Date.UTC(u.$y,t,e):new Date(u.$y,t,e),u);return d?n:n.endOf(r)},p=function(e,t){return $.w(u.toDate()[e].apply(u.toDate("s"),(d?[0,0,0,0]:[23,59,59,999]).slice(t)),u)},m=this.$W,v=this.$M,y=this.$D,g="set"+(this.$u?"UTC":"");switch(f){case l:return d?h(1,0):h(31,11);case s:return d?h(1,v):h(0,v+1);case i:var b=this.$locale().weekStart||0,O=(m<b?m+7:m)-b;return h(d?y-O:y+(6-O),v);case r:case c:return p(g+"Hours",0);case a:return p(g+"Minutes",1);case n:return p(g+"Seconds",2);case t:return p(g+"Milliseconds",3);default:return this.clone()}},h.endOf=function(e){return this.startOf(e,!1)},h.$set=function(i,o){var u,d=$.p(i),f="set"+(this.$u?"UTC":""),h=(u={},u[r]=f+"Date",u[c]=f+"Date",u[s]=f+"Month",u[l]=f+"FullYear",u[a]=f+"Hours",u[n]=f+"Minutes",u[t]=f+"Seconds",u[e]=f+"Milliseconds",u)[d],p=d===r?this.$D+(o-this.$W):o;if(d===s||d===l){var m=this.clone().set(c,1);m.$d[h](p),m.init(),this.$d=m.set(c,Math.min(this.$D,m.daysInMonth())).$d}else h&&this.$d[h](p);return this.init(),this},h.set=function(e,t){return this.clone().$set(e,t)},h.get=function(e){return this[$.p(e)]()},h.add=function(e,o){var c,u=this;e=Number(e);var d=$.p(o),f=function(t){var n=b(u);return $.w(n.date(n.date()+Math.round(t*e)),u)};if(d===s)return this.set(s,this.$M+e);if(d===l)return this.set(l,this.$y+e);if(d===r)return f(1);if(d===i)return f(7);var h=(c={},c[n]=6e4,c[a]=36e5,c[t]=1e3,c)[d]||1,p=this.$d.getTime()+e*h;return $.w(p,this)},h.subtract=function(e,t){return this.add(-1*e,t)},h.format=function(e){var t=this;if(!this.isValid())return"Invalid Date";var n=e||"YYYY-MM-DDTHH:mm:ssZ",a=$.z(this),r=this.$locale(),i=this.$H,s=this.$m,o=this.$M,l=r.weekdays,c=r.months,u=function(e,a,r,i){return e&&(e[a]||e(t,n))||r[a].substr(0,i)},f=function(e){return $.s(i%12||12,e,"0")},h=r.meridiem||function(e,t,n){var a=e<12?"AM":"PM";return n?a.toLowerCase():a},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:$.s(o+1,2,"0"),MMM:u(r.monthsShort,o,c,3),MMMM:u(c,o),D:this.$D,DD:$.s(this.$D,2,"0"),d:String(this.$W),dd:u(r.weekdaysMin,this.$W,l,2),ddd:u(r.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(i),HH:$.s(i,2,"0"),h:f(1),hh:f(2),a:h(i,s,!0),A:h(i,s,!1),m:String(s),mm:$.s(s,2,"0"),s:String(this.$s),ss:$.s(this.$s,2,"0"),SSS:$.s(this.$ms,3,"0"),Z:a};return n.replace(d,(function(e,t){return t||p[e]||a.replace(":","")}))},h.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},h.diff=function(e,c,u){var d,f=$.p(c),h=b(e),p=6e4*(h.utcOffset()-this.utcOffset()),m=this-h,v=$.m(this,h);return v=(d={},d[l]=v/12,d[s]=v,d[o]=v/3,d[i]=(m-p)/6048e5,d[r]=(m-p)/864e5,d[a]=m/36e5,d[n]=m/6e4,d[t]=m/1e3,d)[f]||m,u?v:$.a(v)},h.daysInMonth=function(){return this.endOf(s).$D},h.$locale=function(){return v[this.$L]},h.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),a=g(e,t,!0);return a&&(n.$L=a),n},h.clone=function(){return $.w(this.$d,this)},h.toDate=function(){return new Date(this.valueOf())},h.toJSON=function(){return this.isValid()?this.toISOString():null},h.toISOString=function(){return this.$d.toISOString()},h.toString=function(){return this.$d.toUTCString()},f}(),C=O.prototype;return b.prototype=C,[["$ms",e],["$s",t],["$m",n],["$H",a],["$W",r],["$M",s],["$y",l],["$D",c]].forEach((function(e){C[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),b.extend=function(e,t){return e.$i||(e(t,O,b),e.$i=!0),b},b.locale=g,b.isDayjs=y,b.unix=function(e){return b(1e3*e)},b.en=v[m],b.Ls=v,b.p={},b}()},93861:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var a=n(24595),r=n(80346),i=n(34846),s=n(18764),o=n(42774),l=n(26022),c=n(33939),u=n(42205),d=n(15851),f=n(16255),h=n.n(f),p=function(e){(0,c.Z)(n,e);var t=(0,u.Z)(n);function n(e){var a;(0,o.Z)(this,n),(a=t.call(this,e)).handleChange=function(e){var t=a.props,n=t.disabled,r=t.onChange;n||("checked"in a.props||a.setState({checked:e.target.checked}),r&&r({target:(0,s.Z)((0,s.Z)({},a.props),{},{checked:e.target.checked}),stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},nativeEvent:e.nativeEvent}))},a.saveInput=function(e){a.input=e};var r="checked"in e?e.checked:e.defaultChecked;return a.state={checked:r},a}return(0,l.Z)(n,[{key:"focus",value:function(){this.input.focus()}},{key:"blur",value:function(){this.input.blur()}},{key:"render",value:function(){var e,t=this.props,n=t.prefixCls,s=t.className,o=t.style,l=t.name,c=t.id,u=t.type,f=t.disabled,p=t.readOnly,m=t.tabIndex,v=t.onClick,y=t.onFocus,g=t.onBlur,b=t.onKeyDown,$=t.onKeyPress,O=t.onKeyUp,C=t.autoFocus,E=t.value,Z=t.required,k=(0,i.Z)(t,["prefixCls","className","style","name","id","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur","onKeyDown","onKeyPress","onKeyUp","autoFocus","value","required"]),x=Object.keys(k).reduce((function(e,t){return"aria-"!==t.substr(0,5)&&"data-"!==t.substr(0,5)&&"role"!==t||(e[t]=k[t]),e}),{}),w=this.state.checked,S=h()(n,s,(e={},(0,r.Z)(e,"".concat(n,"-checked"),w),(0,r.Z)(e,"".concat(n,"-disabled"),f),e));return d.createElement("span",{className:S,style:o},d.createElement("input",(0,a.Z)({name:l,id:c,type:u,required:Z,readOnly:p,disabled:f,tabIndex:m,className:"".concat(n,"-input"),checked:!!w,onClick:v,onFocus:y,onBlur:g,onKeyUp:O,onKeyDown:b,onKeyPress:$,onChange:this.handleChange,autoFocus:C,ref:this.saveInput,value:E},x)),d.createElement("span",{className:"".concat(n,"-inner")}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return"checked"in e?(0,s.Z)((0,s.Z)({},t),{},{checked:e.checked}):null}}]),n}(d.Component);p.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){},onKeyDown:function(){},onKeyPress:function(){},onKeyUp:function(){}};const m=p},4892:(e,t,n)=>{"use strict";var a=n(57574),r=n.n(a),i=n(22854),s=r()(i.default,{insert:"head",singleton:!1});if(!i.default.locals||e.hot.invalidate){var o=i.default.locals;e.hot.accept(22854,(t=>{i=n(22854),function(e,t,n){if(!e&&t||e&&!t)return!1;var a;for(a in e)if(e[a]!==t[a])return!1;for(a in t)if(!e[a])return!1;return!0}(o,i.default.locals)?(o=i.default.locals,s(i.default)):e.hot.invalidate()}))}e.hot.dispose((function(){s()})),i.default.locals},381:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var a=n(15851);n(4892);const r=({visible:e,content:t,children:n})=>a.createElement("div",{className:"toolsBar"},a.createElement("div",{className:"flex flex_between"},n),a.createElement("div",{style:{display:e?"block":"none"},className:"toolsBar-content"},t));r.defaultProps={visible:!1};const i=r},25715:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var a=n(43865),r=n(58233),i=n(15851);const s=function(e,t){var n;const{form:s}=t,o=(0,a._T)(t,["form"]),l=(0,r.ZP)(e,Object.assign(Object.assign({},o),{paginated:!0,manual:!0})),{params:c,run:u,mutate:d}=l,f=c[2]||{},[h,p]=(0,i.useState)(f.type||"simple"),[m,v]=(0,i.useState)(f.allFormData||{}),y=(0,i.useCallback)((()=>{if(s.getFieldInstance){const e=s.getFieldsValue(),t={};return Object.keys(e).forEach((n=>{s.getFieldInstance&&!s.getFieldInstance(n)||(t[n]=e[n])})),t}return s.getFieldsValue(null,(()=>!0))}),[s]);(0,i.useEffect)((()=>{if(s.getFieldInstance){const e={};Object.keys(m).forEach((t=>{s.getFieldInstance&&!s.getFieldInstance(t)||(e[t]=m[t])})),s.setFieldsValue(e)}else s.setFieldsValue(m)}),[h]),(0,i.useEffect)((()=>{c.length>0?u(...c):t.manual||b()}),[]);const g=(0,i.useCallback)((()=>{const e=y();v(Object.assign(Object.assign({},m),e)),p("simple"===h?"advance":"simple")}),[h,m,y]),b=(0,i.useCallback)((e=>{(null==e?void 0:e.preventDefault)&&e.preventDefault(),setTimeout((()=>{const e=y();console.log(1111,e);const n=Object.assign(Object.assign({},m),e);v(n),u(Object.assign(Object.assign({},c[0]||{}),{pageSize:t.defaultPageSize||10,current:1}),e,{allFormData:n,type:h})}))}),[y,u,c,m,h]),$=(0,i.useCallback)((()=>{s.resetFields(),b()}),[s,b]);return Object.assign(Object.assign({},l),{search:{submit:b,type:h,changeType:g,reset:$},remove:e=>{d((t=>{const n=t.list.slice();return n.forEach(((t,a)=>{t.id===e&&n.splice(a,1)})),Object.assign(Object.assign({},t),{list:n})}))},add:e=>{d((t=>{const n=t.list.slice();return n.push(e),Object.assign(Object.assign({},t),{list:n})}))},update:(e,t)=>{d((n=>{const a=n.list.slice();return a.forEach(((n,r)=>{n.id===e&&(a[r]=Object.assign(Object.assign({},n),t))})),Object.assign(Object.assign({},n),{list:a})}))},dataSource:(null===(n=l.data)||void 0===n?void 0:n.list)||[]})}},49249:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>h});var a=n(43865),r=n(15851),i=n(27736),s=n(53985),o=n(36949),l=n(41915),c=n(49222);const u=e=>{const[t,n]=(0,r.useState)();console.log("setSelectedKeys: ",n);const[i,s]=(0,r.useState)([]);(0,r.useEffect)((()=>{o({pid:1e5}).then((e=>{s(e)}))}),[]);const o=e=>(0,a.mG)(void 0,void 0,void 0,(function*(){return console.log("params: ",e),(yield(0,l.RT)(e)).data.map((e=>({id:e.id,pId:e.pid,value:e.id,title:e.name,isLeaf:3===e.level})))}));return r.createElement(c.Z,{treeDataSimpleMode:!0,style:{width:"100%"},value:t,dropdownStyle:{maxHeight:400,overflow:"auto"},placeholder:"请选择区域",onChange:(t,a)=>{var r;console.log("value",t,a),n(t),null===(r=e.onChange)||void 0===r||r.call(e,t,a[0])},loadData:e=>o({pid:e.id}).then((e=>{s((t=>t.slice().concat(e)))})),treeData:i})},d={labelCol:{span:4},wrapperCol:{span:20}},f=e=>/^\d{2}0000$/.test(e)?1:/^\d{4}00$/.test(e)?2:/^\d{6}$/.test(e)?3:0,h=e=>{var{data:t}=e,n=(0,a._T)(e,["data"]);const[c,h]=(0,r.useState)({value:"",label:""});return r.createElement(s.Z,{title:"审核",maskClosable:!1,width:900,visible:n.visible,onCancel:()=>{var e;null===(e=n.onClose)||void 0===e||e.call(n)},onOk:()=>{var e;c.value?1!==f(c.value+"")?((0,l.IP)(null==t?void 0:t.id,{status:2,area_id:c.value+"",area_name:c.label,area_type:f(c.value+"")}),null===(e=n.onClose)||void 0===e||e.call(n)):i.ZP.error("不能选择省份"):i.ZP.error("请选择区域")},okText:"审核通过"},r.createElement(o.Z,Object.assign({},d),r.createElement(o.Z.Item,{label:"申请人",name:"user_name"},null==t?void 0:t.user_name),r.createElement(o.Z.Item,{label:"申请区域",name:"category_id"},r.createElement(u,{onChange:(e,t)=>{h({value:e,label:t})}}))))}},55238:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>b});var a=n(43865),r=n(15851),i=n(36949),s=n(72145),o=n(72390),l=n(21921),c=n(25192),u=n(80471),d=n(25715),f=n(49249),h=n(381),p=n(41915),m=n(80900),v=n.n(m),y=n(57100);const g=(e,t)=>(0,p.cQ)(Object.assign(Object.assign(Object.assign({},e),t),{status:1})).then((e=>({total:e.total,list:e.data}))),b=()=>{const[e,t]=(0,r.useState)(),[n]=i.Z.useForm(),p=(0,y.kt)(!1),{tableProps:m,search:b,refresh:$}=(0,d.Z)(g,{defaultPageSize:20,form:n}),{submit:O}=b||{},C=[{title:"id",dataIndex:"id"},{title:"申请人",dataIndex:"user_name"},{title:"申请时间",key:"create_time",render:e=>r.createElement("span",null," ",v()(e.create_time).format("YYYY-MM-DD HH:mm"))},{title:"操作",key:"action",render:e=>r.createElement("div",null,r.createElement(s.Z,{onClick:()=>{return n=e,(0,a.mG)(void 0,void 0,void 0,(function*(){t(n),p.setTrue()}));var n},type:"link"},"审核"))}];return r.createElement("div",null,r.createElement(h.Z,{visible:!1},r.createElement(i.Z,{form:n,layout:"inline"},r.createElement(i.Z.Item,{name:"singlepage_id"},r.createElement(o.Z,{placeholder:"id"})),r.createElement(i.Z.Item,{name:"title"},r.createElement(o.Z,{placeholder:"标题"})),r.createElement(i.Z.Item,{name:"status"},r.createElement(l.Z,{placeholder:"状态",style:{width:"140px"},allowClear:!0},r.createElement(l.Z.Option,{value:"0"},"暂停"),r.createElement(l.Z.Option,{value:"1"},"启用"))),r.createElement(i.Z.Item,{name:"status"},r.createElement(s.Z,{onClick:O},"搜索"))),r.createElement(c.Z,null,r.createElement(s.Z,{type:"primary",onClick:()=>{t(void 0),p.setTrue()}},"添加"),r.createElement(s.Z,{onClick:$},"刷新"))),r.createElement("div",{style:{background:"#fff"}},r.createElement(u.Z,Object.assign({columns:C,rowKey:"id"},m))),r.createElement(f.default,{visible:p.state,data:e,onClose:p.setFalse,onOk:$}))}}}]);