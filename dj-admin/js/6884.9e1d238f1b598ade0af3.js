(self.webpackChunkxiaoniao=self.webpackChunkxiaoniao||[]).push([[6884],{83e3:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>P});var a=n(80346),o=n(24595),r=n(15851),l=n(93861),c=n(16255),s=n.n(c),i=n(32871),u=n(42795),d=r.createContext(null),p=d.Provider;const f=d;var v=n(83493),m=function(e,t){var n,c=r.useContext(f),d=r.useContext(u.E_),p=d.getPrefixCls,m=d.direction,y=r.useRef(),b=(0,i.sQ)(t,y);r.useEffect((function(){(0,v.Z)(!("optionType"in e),"Radio","`optionType` is only support in Radio.Group.")}),[]);var h=e.prefixCls,k=e.className,C=e.children,Z=e.style,E=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(n[a[o]]=e[a[o]])}return n}(e,["prefixCls","className","children","style"]),g=p("radio",h),x=(0,o.Z)({},E);c&&(x.name=c.name,x.onChange=function(t){e.onChange&&e.onChange(t),(null==c?void 0:c.onChange)&&c.onChange(t)},x.checked=e.value===c.value,x.disabled=e.disabled||c.disabled);var O=s()("".concat(g,"-wrapper"),(n={},(0,a.Z)(n,"".concat(g,"-wrapper-checked"),x.checked),(0,a.Z)(n,"".concat(g,"-wrapper-disabled"),x.disabled),(0,a.Z)(n,"".concat(g,"-wrapper-rtl"),"rtl"===m),n),k);return r.createElement("label",{className:O,style:Z,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave},r.createElement(l.Z,(0,o.Z)({},x,{prefixCls:g,ref:b})),void 0!==C?r.createElement("span",null,C):null)},y=r.forwardRef(m);y.displayName="Radio",y.defaultProps={type:"radio"};const b=y;var h=n(92238),k=n(81420),C=n(17979),Z=r.forwardRef((function(e,t){var n=r.useContext(u.E_),o=n.getPrefixCls,l=n.direction,c=r.useContext(C.Z),i=(0,k.Z)(e.defaultValue,{value:e.value}),d=(0,h.Z)(i,2),f=d[0],v=d[1];return r.createElement(p,{value:{onChange:function(t){var n=f,a=t.target.value;"value"in e||v(a);var o=e.onChange;o&&a!==n&&o(t)},value:f,disabled:e.disabled,name:e.name}},function(){var n,i=e.prefixCls,u=e.className,d=void 0===u?"":u,p=e.options,v=e.optionType,m=e.buttonStyle,y=void 0===m?"outline":m,h=e.disabled,k=e.children,C=e.size,Z=e.style,E=e.id,g=e.onMouseEnter,x=e.onMouseLeave,O=o("radio",i),P="".concat(O,"-group"),w=k;if(p&&p.length>0){var K="button"===v?"".concat(O,"-button"):O;w=p.map((function(e){return"string"==typeof e?r.createElement(b,{key:e,prefixCls:K,disabled:h,value:e,checked:f===e},e):r.createElement(b,{key:"radio-group-value-options-".concat(e.value),prefixCls:K,disabled:e.disabled||h,value:e.value,checked:f===e.value,style:e.style},e.label)}))}var N=C||c,j=s()(P,"".concat(P,"-").concat(y),(n={},(0,a.Z)(n,"".concat(P,"-").concat(N),N),(0,a.Z)(n,"".concat(P,"-rtl"),"rtl"===l),n),d);return r.createElement("div",{className:j,style:Z,onMouseEnter:g,onMouseLeave:x,id:E,ref:t},w)}())}));const E=r.memo(Z);var g=function(e,t){var n=r.useContext(f),a=r.useContext(u.E_).getPrefixCls,l=e.prefixCls,c=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(n[a[o]]=e[a[o]])}return n}(e,["prefixCls"]),s=a("radio-button",l);return n&&(c.checked=e.value===n.value,c.disabled=e.disabled||n.disabled),r.createElement(b,(0,o.Z)({prefixCls:s},c,{type:"radio",ref:t}))};const x=r.forwardRef(g);var O=b;O.Button=x,O.Group=E;const P=O},93861:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var a=n(24595),o=n(80346),r=n(34846),l=n(18764),c=n(42774),s=n(26022),i=n(33939),u=n(42205),d=n(15851),p=n(16255),f=n.n(p),v=function(e){(0,i.Z)(n,e);var t=(0,u.Z)(n);function n(e){var a;(0,c.Z)(this,n),(a=t.call(this,e)).handleChange=function(e){var t=a.props,n=t.disabled,o=t.onChange;n||("checked"in a.props||a.setState({checked:e.target.checked}),o&&o({target:(0,l.Z)((0,l.Z)({},a.props),{},{checked:e.target.checked}),stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},nativeEvent:e.nativeEvent}))},a.saveInput=function(e){a.input=e};var o="checked"in e?e.checked:e.defaultChecked;return a.state={checked:o},a}return(0,s.Z)(n,[{key:"focus",value:function(){this.input.focus()}},{key:"blur",value:function(){this.input.blur()}},{key:"render",value:function(){var e,t=this.props,n=t.prefixCls,l=t.className,c=t.style,s=t.name,i=t.id,u=t.type,p=t.disabled,v=t.readOnly,m=t.tabIndex,y=t.onClick,b=t.onFocus,h=t.onBlur,k=t.onKeyDown,C=t.onKeyPress,Z=t.onKeyUp,E=t.autoFocus,g=t.value,x=t.required,O=(0,r.Z)(t,["prefixCls","className","style","name","id","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur","onKeyDown","onKeyPress","onKeyUp","autoFocus","value","required"]),P=Object.keys(O).reduce((function(e,t){return"aria-"!==t.substr(0,5)&&"data-"!==t.substr(0,5)&&"role"!==t||(e[t]=O[t]),e}),{}),w=this.state.checked,K=f()(n,l,(e={},(0,o.Z)(e,"".concat(n,"-checked"),w),(0,o.Z)(e,"".concat(n,"-disabled"),p),e));return d.createElement("span",{className:K,style:c},d.createElement("input",(0,a.Z)({name:s,id:i,type:u,required:x,readOnly:v,disabled:p,tabIndex:m,className:"".concat(n,"-input"),checked:!!w,onClick:y,onFocus:b,onBlur:h,onKeyUp:Z,onKeyDown:k,onKeyPress:C,onChange:this.handleChange,autoFocus:E,ref:this.saveInput,value:g},P)),d.createElement("span",{className:"".concat(n,"-inner")}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return"checked"in e?(0,l.Z)((0,l.Z)({},t),{},{checked:e.checked}):null}}]),n}(d.Component);v.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){},onKeyDown:function(){},onKeyPress:function(){},onKeyUp:function(){}};const m=v},26884:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>p});var a=n(43865),o=n(15851),r=n(36949),l=n(53985),c=n(72390),s=n(83e3),i=n(41915);const u={labelCol:{span:4},wrapperCol:{span:20}},d=e=>{var{data:t}=e,n=(0,a._T)(e,["data"]);const[d]=r.Z.useForm();return(0,o.useEffect)((()=>{n.visible&&d.setFieldsValue(t)}),[n.visible]),o.createElement(l.Z,{title:(null==t?void 0:t.id)?"编辑角色":"添加角色",maskClosable:!1,visible:n.visible,onCancel:()=>{n.setVisible(!1)},onOk:e=>{e.preventDefault(),d.validateFields().then((e=>(0,a.mG)(void 0,void 0,void 0,(function*(){const a=Object.assign({},e);if(null==t?void 0:t.id)yield(0,i.ul)(t.id,e),a.id=t.id,n.onUpdate&&n.onUpdate(a.id,a);else{const t=yield(0,i.fA)(e);a.id=t.data,a.create_time=new Date,n.onAdd&&n.onAdd(a)}n.setVisible(!1),n.onOk&&n.onOk(a)}))))}},n.visible&&o.createElement(r.Z,Object.assign({form:d},u),o.createElement(r.Z.Item,{label:"名称",name:"name",required:!0},o.createElement(c.Z,null)),o.createElement(r.Z.Item,{label:"标识",name:"key",required:!0},o.createElement(c.Z,null)),o.createElement(r.Z.Item,{label:"状态",name:"status"},o.createElement(s.ZP.Group,null,o.createElement(s.ZP,{value:1},"启用"),o.createElement(s.ZP,{value:0},"禁用"))),o.createElement(r.Z.Item,{label:"备注",name:"remark"},o.createElement(c.Z.TextArea,{rows:3}))))};d.defaultProps={data:{name:"",remark:"",key:"",status:1,menu_ids:[]}};const p=d}}]);