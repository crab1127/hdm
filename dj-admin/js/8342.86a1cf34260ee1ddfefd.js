(self.webpackChunkxiaoniao=self.webpackChunkxiaoniao||[]).push([[8342],{88984:(e,t,n)=>{"use strict";n.d(t,{Z:()=>M});var o=n(24595),a=n(80346),r=n(15851),s=n(16255),i=n.n(s),u=n(34846),l=n(18764),c=n(42774),p=n(26022),d=n(33939),h=n(42205),f=n(44842);function v(){}function m(e){e.preventDefault()}var y=Number.MAX_SAFE_INTEGER||Math.pow(2,53)-1,b=function(e){return null!=e},g=function(e,t){return t===e||"number"==typeof t&&"number"==typeof e&&isNaN(t)&&isNaN(e)},C=function(e){(0,d.Z)(n,e);var t=(0,h.Z)(n);function n(e){var o;(0,c.Z)(this,n),(o=t.call(this,e)).onKeyDown=function(e){var t=o.props,n=t.onKeyDown,a=t.onPressEnter,r=t.keyboard,s=[f.Z.UP,f.Z.DOWN];if(!1!==r&&s.includes(e.keyCode))switch(e.keyCode){case f.Z.UP:var i=o.getRatio(e);o.up(e,i,null),o.stop();break;case f.Z.DOWN:var u=o.getRatio(e);o.down(e,u,null),o.stop()}e.keyCode===f.Z.ENTER&&(null==a||a(e)),o.recordCursorPosition(),o.lastKeyCode=e.keyCode,null==n||n(e)},o.onKeyUp=function(e){var t=o.props.onKeyUp;if(o.stop(),o.recordCursorPosition(),t){for(var n=arguments.length,a=new Array(n>1?n-1:0),r=1;r<n;r++)a[r-1]=arguments[r];t.apply(void 0,[e].concat(a))}},o.onChange=function(e){var t=o.props.onChange;o.state.focused&&(o.inputting=!0),o.rawInput=o.props.parser(o.getValueFromEvent(e)),o.setState({inputValue:o.rawInput}),t(o.toNumber(o.rawInput))},o.onMouseUp=function(){var e=o.props.onMouseUp;o.recordCursorPosition(),e&&e.apply(void 0,arguments)},o.onFocus=function(){var e;o.setState({focused:!0}),(e=o.props).onFocus.apply(e,arguments)},o.onBlur=function(){var e=o.props.onBlur;o.inputting=!1,o.setState({focused:!1});var t=o.getCurrentValidValue(o.state.inputValue),n=o.setValue(t,v);if(e){var a=o.input.value,r=o.getInputDisplayValue({focus:!1,value:n});o.input.value=r,e.apply(void 0,arguments),o.input.value=a}},o.getRatio=function(e){var t=1;return e.metaKey||e.ctrlKey?t=.1:e.shiftKey&&(t=10),t},o.getFullNum=function(e){return isNaN(e)?e:/e/i.test(String(e))?Number(e).toFixed(18).replace(/\.?0+$/,""):e},o.getPrecision=function(e){if(b(o.props.precision))return o.props.precision;var t=String(e);if(t.indexOf("e-")>=0)return parseInt(t.slice(t.indexOf("e-")+2),10);var n=0;return t.indexOf(".")>=0&&(n=t.length-t.indexOf(".")-1),n},o.getInputDisplayValue=function(e){var t,n=e||o.state,a=n.focused,r=n.inputValue,s=n.value;null==(t=a?r:o.toPrecisionAsStep(s))&&(t="");var i=o.formatWrapper(t);return b(o.props.decimalSeparator)&&(i=i.toString().replace(".",o.props.decimalSeparator)),i},o.recordCursorPosition=function(){try{o.cursorStart=o.input.selectionStart,o.cursorEnd=o.input.selectionEnd,o.currentValue=o.input.value,o.cursorBefore=o.input.value.substring(0,o.cursorStart),o.cursorAfter=o.input.value.substring(o.cursorEnd)}catch(e){}},o.restoreByAfter=function(e){if(void 0===e)return!1;var t=o.input.value,n=t.lastIndexOf(e);if(-1===n)return!1;var a=o.cursorBefore.length;return o.lastKeyCode===f.Z.DELETE&&o.cursorBefore.charAt(a-1)===e[0]?(o.fixCaret(a,a),!0):n+e.length===t.length&&(o.fixCaret(n,n),!0)},o.partRestoreByAfter=function(e){return void 0!==e&&Array.prototype.some.call(e,(function(t,n){var a=e.substring(n);return o.restoreByAfter(a)}))},o.isNotCompleteNumber=function(e){return isNaN(e)||""===e||null===e||e&&e.toString().indexOf(".")===e.toString().length-1},o.stop=function(){o.autoStepTimer&&clearTimeout(o.autoStepTimer)},o.down=function(e,t,n){o.pressingUpOrDown=!0,o.step("down",e,t,n)},o.up=function(e,t,n){o.pressingUpOrDown=!0,o.step("up",e,t,n)},o.saveInput=function(e){o.input=e};var a=e.value;void 0===a&&(a=e.defaultValue),o.state={focused:e.autoFocus};var r=o.getValidValue(o.toNumber(a));return o.state=(0,l.Z)((0,l.Z)({},o.state),{},{inputValue:o.toPrecisionAsStep(r),value:r}),o}return(0,p.Z)(n,[{key:"componentDidMount",value:function(){this.componentDidUpdate(null)}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.value,o=t.onChange,a=t.max,r=t.min,s=this.state.focused;if(e){if(!g(e.value,n)||!g(e.max,a)||!g(e.min,r)){var i,u=s?n:this.getValidValue(n);i=this.pressingUpOrDown?u:this.inputting?this.rawInput:this.toPrecisionAsStep(u),this.setState({value:u,inputValue:i})}var l="value"in this.props?n:this.state.value;"max"in this.props&&e.max!==a&&"number"==typeof l&&l>a&&o&&o(a),"min"in this.props&&e.min!==r&&"number"==typeof l&&l<r&&o&&o(r)}try{if(void 0!==this.cursorStart&&this.state.focused)if(this.partRestoreByAfter(this.cursorAfter)||this.state.value===this.props.value){if(this.currentValue===this.input.value)switch(this.lastKeyCode){case f.Z.BACKSPACE:this.fixCaret(this.cursorStart-1,this.cursorStart-1);break;case f.Z.DELETE:this.fixCaret(this.cursorStart+1,this.cursorStart+1)}}else{var c=this.getInputDisplayValue(this.state).length;this.cursorAfter?this.lastKeyCode===f.Z.BACKSPACE?c=this.cursorStart-1:this.lastKeyCode===f.Z.DELETE&&(c=this.cursorStart):c=this.input.value.length,this.fixCaret(c,c)}}catch(e){}this.lastKeyCode=null,this.pressingUpOrDown&&this.props.focusOnUpDown&&this.state.focused&&document.activeElement!==this.input&&this.focus()}},{key:"componentWillUnmount",value:function(){this.stop()}},{key:"getCurrentValidValue",value:function(e){var t=e;return t=""===t?"":this.isNotCompleteNumber(parseFloat(t))?this.state.value:this.getValidValue(t),this.toNumber(t)}},{key:"getValueFromEvent",value:function(e){var t=e.target.value.trim().replace(/。/g,".");return b(this.props.decimalSeparator)&&(t=t.replace(this.props.decimalSeparator,".")),t}},{key:"getValidValue",value:function(e){var t=this.props,n=t.min,o=t.max,a=parseFloat(e);return isNaN(a)?e:(a<n&&(a=n),a>o&&(a=o),a)}},{key:"setValue",value:function(e,t){var n=this.props.precision,o=this.isNotCompleteNumber(parseFloat(e))?null:parseFloat(e),a=this.state.value,r=void 0===a?null:a,s=this.state.inputValue,i=void 0===s?null:s,u="number"==typeof o?o.toFixed(n):"".concat(o),l=o!==r||u!=="".concat(i);return"value"in this.props?(i=this.toPrecisionAsStep(this.state.value),this.setState({inputValue:i},t)):this.setState({value:o,inputValue:this.toPrecisionAsStep(e)},t),l&&this.props.onChange(o),o}},{key:"getMaxPrecision",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=this.props,o=n.precision,a=n.step;if(b(o))return o;var r=this.getPrecision(t),s=this.getPrecision(a),i=this.getPrecision(e);return e?Math.max(i,r+s):r+s}},{key:"getPrecisionFactor",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=this.getMaxPrecision(e,t);return Math.pow(10,n)}},{key:"focus",value:function(){this.input.focus(),this.recordCursorPosition()}},{key:"blur",value:function(){this.input.blur()}},{key:"select",value:function(){this.input.select()}},{key:"formatWrapper",value:function(e){return this.props.formatter?this.props.formatter(e):e}},{key:"toPrecisionAsStep",value:function(e){if(this.isNotCompleteNumber(e)||""===e)return e;var t=Math.abs(this.getMaxPrecision(e));return isNaN(t)?e.toString():Number(e).toFixed(t)}},{key:"toNumber",value:function(e){var t=this.props.precision,n=this.state.focused,o=e&&e.length>16&&n;return this.isNotCompleteNumber(e)||o?e:b(t)?Math.round(e*Math.pow(10,t))/Math.pow(10,t):Number(e)}},{key:"upStep",value:function(e,t){var n=this.props.step,o=this.getPrecisionFactor(e,t),a=Math.abs(this.getMaxPrecision(e,t)),r=((o*e+o*Number(n)*t)/o).toFixed(a);return this.toNumber(r)}},{key:"downStep",value:function(e,t){var n=this.props.step,o=this.getPrecisionFactor(e,t),a=Math.abs(this.getMaxPrecision(e,t)),r=((o*e-o*Number(n)*t)/o).toFixed(a);return this.toNumber(r)}},{key:"step",value:function(e,t){var n=this,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,a=arguments.length>3?arguments[3]:void 0;this.stop(),this.recordCursorPosition(),t&&(t.persist(),t.preventDefault());var r=this.props;if(!r.disabled){var s=this.getCurrentValidValue(this.state.inputValue)||0;if(!this.isNotCompleteNumber(s)){var i=this["".concat(e,"Step")](s,o),u=i>r.max||i<r.min;i>r.max?i=r.max:i<r.min&&(i=r.min),this.setValue(i,null),r.onStep&&r.onStep(i,{offset:o,type:e}),this.setState({focused:!0},(function(){n.pressingUpOrDown=!1})),u||(this.autoStepTimer=setTimeout((function(){n[e](t,o,!0)}),a?200:600))}}}},{key:"fixCaret",value:function(e,t){if(void 0!==e&&void 0!==t&&this.input&&this.input.value)try{var n=this.input.selectionStart,o=this.input.selectionEnd;e===n&&t===o||this.input.setSelectionRange(e,t)}catch(e){}}},{key:"render",value:function(){var e,t=this.props,n=t.prefixCls,s=t.disabled,l=t.readOnly,c=t.useTouch,p=t.autoComplete,d=t.upHandler,h=t.downHandler,f=t.className,y=t.max,b=t.min,g=t.style,C=t.title,x=t.onMouseEnter,N=t.onMouseLeave,k=t.onMouseOver,E=t.onMouseOut,w=t.required,Z=t.onClick,O=t.tabIndex,P=t.type,S=t.placeholder,M=t.id,V=t.inputMode,D=t.pattern,F=t.step,K=t.maxLength,I=t.autoFocus,U=t.name,A=t.onPaste,B=t.onInput,T=(0,u.Z)(t,["prefixCls","disabled","readOnly","useTouch","autoComplete","upHandler","downHandler","className","max","min","style","title","onMouseEnter","onMouseLeave","onMouseOver","onMouseOut","required","onClick","tabIndex","type","placeholder","id","inputMode","pattern","step","maxLength","autoFocus","name","onPaste","onInput"]),L=this.state,R=L.value,j=L.focused,q=i()(n,(e={},(0,a.Z)(e,f,!!f),(0,a.Z)(e,"".concat(n,"-disabled"),s),(0,a.Z)(e,"".concat(n,"-focused"),j),e)),H={};Object.keys(T).forEach((function(e){"data-"!==e.substr(0,5)&&"aria-"!==e.substr(0,5)&&"role"!==e||(H[e]=T[e])}));var _=!l&&!s,W=this.getInputDisplayValue(null),z=(R||0===R)&&(isNaN(R)||Number(R)>=y)||s||l,G=(R||0===R)&&(isNaN(R)||Number(R)<=b)||s||l,Q=i()("".concat(n,"-handler"),"".concat(n,"-handler-up"),(0,a.Z)({},"".concat(n,"-handler-up-disabled"),z)),X=i()("".concat(n,"-handler"),"".concat(n,"-handler-down"),(0,a.Z)({},"".concat(n,"-handler-down-disabled"),G)),$=c?{onTouchStart:z?v:this.up,onTouchEnd:this.stop}:{onMouseDown:z?v:this.up,onMouseUp:this.stop,onMouseLeave:this.stop},J=c?{onTouchStart:G?v:this.down,onTouchEnd:this.stop}:{onMouseDown:G?v:this.down,onMouseUp:this.stop,onMouseLeave:this.stop};return r.createElement("div",{className:q,style:g,title:C,onMouseEnter:x,onMouseLeave:N,onMouseOver:k,onMouseOut:E,onFocus:function(){return null},onBlur:function(){return null}},r.createElement("div",{className:"".concat(n,"-handler-wrap")},r.createElement("span",(0,o.Z)({unselectable:"on"},$,{role:"button","aria-label":"Increase Value","aria-disabled":z,className:Q}),d||r.createElement("span",{unselectable:"on",className:"".concat(n,"-handler-up-inner"),onClick:m})),r.createElement("span",(0,o.Z)({unselectable:"on"},J,{role:"button","aria-label":"Decrease Value","aria-disabled":G,className:X}),h||r.createElement("span",{unselectable:"on",className:"".concat(n,"-handler-down-inner"),onClick:m}))),r.createElement("div",{className:"".concat(n,"-input-wrap")},r.createElement("input",(0,o.Z)({role:"spinbutton","aria-valuemin":b,"aria-valuemax":y,"aria-valuenow":R,required:w,type:P,placeholder:S,onPaste:A,onClick:Z,onMouseUp:this.onMouseUp,className:"".concat(n,"-input"),tabIndex:O,autoComplete:p,onFocus:this.onFocus,onBlur:this.onBlur,onKeyDown:_?this.onKeyDown:v,onKeyUp:_?this.onKeyUp:v,autoFocus:I,maxLength:K,readOnly:l,disabled:s,max:y,min:b,step:F,name:U,title:C,id:M,onChange:this.onChange,ref:this.saveInput,value:this.getFullNum(W),pattern:D,inputMode:V,onInput:B},H))))}}]),n}(r.Component);C.defaultProps={focusOnUpDown:!0,useTouch:!1,prefixCls:"rc-input-number",max:y,min:-y,step:1,style:{},onChange:v,onKeyDown:v,onPressEnter:v,onFocus:v,onBlur:v,parser:function(e){return e.replace(/[^\w.-]+/g,"")},required:!1,autoComplete:"off"};const x=C,N={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z"}}]},name:"up",theme:"outlined"};var k=n(83661),E=function(e,t){return r.createElement(k.Z,Object.assign({},e,{ref:t,icon:N}))};E.displayName="UpOutlined";const w=r.forwardRef(E);var Z=n(63510),O=n(42795),P=n(17979),S=r.forwardRef((function(e,t){var n,s=r.useContext(O.E_),u=s.getPrefixCls,l=s.direction,c=r.useContext(P.Z),p=e.className,d=e.size,h=e.prefixCls,f=e.bordered,v=void 0===f||f,m=e.readOnly,y=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(n[o[a]]=e[o[a]])}return n}(e,["className","size","prefixCls","bordered","readOnly"]),b=u("input-number",h),g=r.createElement(w,{className:"".concat(b,"-handler-up-inner")}),C=r.createElement(Z.Z,{className:"".concat(b,"-handler-down-inner")}),N=d||c,k=i()((n={},(0,a.Z)(n,"".concat(b,"-lg"),"large"===N),(0,a.Z)(n,"".concat(b,"-sm"),"small"===N),(0,a.Z)(n,"".concat(b,"-rtl"),"rtl"===l),(0,a.Z)(n,"".concat(b,"-readonly"),m),(0,a.Z)(n,"".concat(b,"-borderless"),!v),n),p);return r.createElement(x,(0,o.Z)({ref:t,className:k,upHandler:g,downHandler:C,prefixCls:b,readOnly:m},y))}));S.defaultProps={step:1};const M=S},83e3:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>Z});var o=n(80346),a=n(24595),r=n(15851),s=n(93861),i=n(16255),u=n.n(i),l=n(32871),c=n(42795),p=r.createContext(null),d=p.Provider;const h=p;var f=n(83493),v=function(e,t){var n,i=r.useContext(h),p=r.useContext(c.E_),d=p.getPrefixCls,v=p.direction,m=r.useRef(),y=(0,l.sQ)(t,m);r.useEffect((function(){(0,f.Z)(!("optionType"in e),"Radio","`optionType` is only support in Radio.Group.")}),[]);var b=e.prefixCls,g=e.className,C=e.children,x=e.style,N=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(n[o[a]]=e[o[a]])}return n}(e,["prefixCls","className","children","style"]),k=d("radio",b),E=(0,a.Z)({},N);i&&(E.name=i.name,E.onChange=function(t){e.onChange&&e.onChange(t),(null==i?void 0:i.onChange)&&i.onChange(t)},E.checked=e.value===i.value,E.disabled=e.disabled||i.disabled);var w=u()("".concat(k,"-wrapper"),(n={},(0,o.Z)(n,"".concat(k,"-wrapper-checked"),E.checked),(0,o.Z)(n,"".concat(k,"-wrapper-disabled"),E.disabled),(0,o.Z)(n,"".concat(k,"-wrapper-rtl"),"rtl"===v),n),g);return r.createElement("label",{className:w,style:x,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave},r.createElement(s.Z,(0,a.Z)({},E,{prefixCls:k,ref:y})),void 0!==C?r.createElement("span",null,C):null)},m=r.forwardRef(v);m.displayName="Radio",m.defaultProps={type:"radio"};const y=m;var b=n(92238),g=n(81420),C=n(17979),x=r.forwardRef((function(e,t){var n=r.useContext(c.E_),a=n.getPrefixCls,s=n.direction,i=r.useContext(C.Z),l=(0,g.Z)(e.defaultValue,{value:e.value}),p=(0,b.Z)(l,2),h=p[0],f=p[1];return r.createElement(d,{value:{onChange:function(t){var n=h,o=t.target.value;"value"in e||f(o);var a=e.onChange;a&&o!==n&&a(t)},value:h,disabled:e.disabled,name:e.name}},function(){var n,l=e.prefixCls,c=e.className,p=void 0===c?"":c,d=e.options,f=e.optionType,v=e.buttonStyle,m=void 0===v?"outline":v,b=e.disabled,g=e.children,C=e.size,x=e.style,N=e.id,k=e.onMouseEnter,E=e.onMouseLeave,w=a("radio",l),Z="".concat(w,"-group"),O=g;if(d&&d.length>0){var P="button"===f?"".concat(w,"-button"):w;O=d.map((function(e){return"string"==typeof e?r.createElement(y,{key:e,prefixCls:P,disabled:b,value:e,checked:h===e},e):r.createElement(y,{key:"radio-group-value-options-".concat(e.value),prefixCls:P,disabled:e.disabled||b,value:e.value,checked:h===e.value,style:e.style},e.label)}))}var S=C||i,M=u()(Z,"".concat(Z,"-").concat(m),(n={},(0,o.Z)(n,"".concat(Z,"-").concat(S),S),(0,o.Z)(n,"".concat(Z,"-rtl"),"rtl"===s),n),p);return r.createElement("div",{className:M,style:x,onMouseEnter:k,onMouseLeave:E,id:N,ref:t},O)}())}));const N=r.memo(x);var k=function(e,t){var n=r.useContext(h),o=r.useContext(c.E_).getPrefixCls,s=e.prefixCls,i=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(n[o[a]]=e[o[a]])}return n}(e,["prefixCls"]),u=o("radio-button",s);return n&&(i.checked=e.value===n.value,i.disabled=e.disabled||n.disabled),r.createElement(y,(0,a.Z)({prefixCls:u},i,{type:"radio",ref:t}))};const E=r.forwardRef(k);var w=y;w.Button=E,w.Group=N;const Z=w},93861:(e,t,n)=>{"use strict";n.d(t,{Z:()=>v});var o=n(24595),a=n(80346),r=n(34846),s=n(18764),i=n(42774),u=n(26022),l=n(33939),c=n(42205),p=n(15851),d=n(16255),h=n.n(d),f=function(e){(0,l.Z)(n,e);var t=(0,c.Z)(n);function n(e){var o;(0,i.Z)(this,n),(o=t.call(this,e)).handleChange=function(e){var t=o.props,n=t.disabled,a=t.onChange;n||("checked"in o.props||o.setState({checked:e.target.checked}),a&&a({target:(0,s.Z)((0,s.Z)({},o.props),{},{checked:e.target.checked}),stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},nativeEvent:e.nativeEvent}))},o.saveInput=function(e){o.input=e};var a="checked"in e?e.checked:e.defaultChecked;return o.state={checked:a},o}return(0,u.Z)(n,[{key:"focus",value:function(){this.input.focus()}},{key:"blur",value:function(){this.input.blur()}},{key:"render",value:function(){var e,t=this.props,n=t.prefixCls,s=t.className,i=t.style,u=t.name,l=t.id,c=t.type,d=t.disabled,f=t.readOnly,v=t.tabIndex,m=t.onClick,y=t.onFocus,b=t.onBlur,g=t.onKeyDown,C=t.onKeyPress,x=t.onKeyUp,N=t.autoFocus,k=t.value,E=t.required,w=(0,r.Z)(t,["prefixCls","className","style","name","id","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur","onKeyDown","onKeyPress","onKeyUp","autoFocus","value","required"]),Z=Object.keys(w).reduce((function(e,t){return"aria-"!==t.substr(0,5)&&"data-"!==t.substr(0,5)&&"role"!==t||(e[t]=w[t]),e}),{}),O=this.state.checked,P=h()(n,s,(e={},(0,a.Z)(e,"".concat(n,"-checked"),O),(0,a.Z)(e,"".concat(n,"-disabled"),d),e));return p.createElement("span",{className:P,style:i},p.createElement("input",(0,o.Z)({name:u,id:l,type:c,required:E,readOnly:f,disabled:d,tabIndex:v,className:"".concat(n,"-input"),checked:!!O,onClick:m,onFocus:y,onBlur:b,onKeyUp:x,onKeyDown:g,onKeyPress:C,onChange:this.handleChange,autoFocus:N,ref:this.saveInput,value:k},Z)),p.createElement("span",{className:"".concat(n,"-inner")}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return"checked"in e?(0,s.Z)((0,s.Z)({},t),{},{checked:e.checked}):null}}]),n}(p.Component);f.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){},onKeyDown:function(){},onKeyPress:function(){},onKeyUp:function(){}};const v=f}}]);