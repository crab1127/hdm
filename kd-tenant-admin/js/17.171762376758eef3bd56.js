(window.webpackJsonp=window.webpackJsonp||[]).push([[17,138],{142:function(n,t,o){"use strict";o.r(t);var i=o(1),e=o.n(i),a=o(4),r=o(3),c=o(7),l=o(22);o(198);t.default=()=>{const{setLoginInfo:n,tenantList:t}=c.a.useContainer(),{replace:o}=Object(r.useHistory)();return e.a.createElement("div",{id:"login-container"},t.map(t=>e.a.createElement("div",{className:"cp",key:t.id,onClick:()=>(t=>{a.message.info("稍等片刻，切换学校钟"),Object(l.d)(t.id).then(t=>{n(t.data),o("/")})})(t)},t.name)))}},198:function(n,t,o){var i=o(14),e=o(237);"string"==typeof(e=e.__esModule?e.default:e)&&(e=[[n.i,e,""]]);var a={insert:"head",singleton:!1},r=i(e,a);if(!e.locals||n.hot.invalidate){var c=e.locals;n.hot.accept(237,(function(){"string"==typeof(e=(e=o(237)).__esModule?e.default:e)&&(e=[[n.i,e,""]]),function(n,t){if(!n&&t||n&&!t)return!1;var o;for(o in n)if(n[o]!==t[o])return!1;for(o in t)if(!n[o])return!1;return!0}(c,e.locals)?(c=e.locals,r(e)):n.hot.invalidate()}))}n.hot.dispose((function(){r()})),n.exports=e.locals||{}},237:function(n,t,o){(t=o(15)(!1)).push([n.i,"/** @format */\n#login-container {\n  position: fixed;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background: #f4f4f4;\n}\n#login-container .cp {\n  cursor: pointer;\n}\n#login-container .login-form {\n  max-width: 400px;\n  background: #fff;\n  padding: 50px 20px 30px;\n  box-shadow: 0 0 100px rgba(0, 0, 0, 0.2);\n}\n#login-container .login-form-forgot {\n  float: right;\n}\n#login-container .login-form-button {\n  width: 100%;\n}\n",""]),n.exports=t}}]);