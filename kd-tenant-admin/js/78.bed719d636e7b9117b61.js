(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{213:function(e,t,n){e.exports=n(6)(408)},214:function(e,t,n){e.exports=n(6)(75)},62:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),l=n(211),o=n(8),i=n(4);t.default=()=>{const{data:e}=Object(l.b)(()=>Object(o.hb)()),t=Object(a.useCallback)(()=>{let t=document.createElement("a"),n=function(e){let t=e.split(";base64,"),n=t[0].split(":")[1],a=window.atob(t[1]),c=a.length,l=new Uint8Array(c);for(let e=0;e<c;++e)l[e]=a.charCodeAt(e);return new Blob([l],{type:n})}(null==e?void 0:e.data);document.createEvent("HTMLEvents").initEvent("click",!0,!0),t.download="二维码",t.href=URL.createObjectURL(n),t.click()},[e]);return c.a.createElement("div",null,c.a.createElement("img",{src:null==e?void 0:e.data,style:{width:"300px",height:"300px"}}),c.a.createElement(i.Button,{type:"primary",onClick:t},"下载"))}}}]);