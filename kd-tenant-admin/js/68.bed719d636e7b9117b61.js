(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{206:function(e,t,a){e.exports=a(6)(3e3)},213:function(e,t,a){e.exports=a(6)(408)},214:function(e,t,a){e.exports=a(6)(75)},71:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),i=a(311),s=a.n(i),r=a(8),m=a(211),l=a(206);t.default=Object(n.memo)(e=>{const t=Object(n.useRef)(null),{data:a,run:i}=Object(m.b)(()=>Object(r.kb)(e.timeRange).then(e=>e.data),{manual:!0});return Object(n.useEffect)(()=>{i()},[e.timeRange]),Object(n.useEffect)(()=>{const e=s.a.init(t.current);if(e&&t.current&&a){const t=a.map(e=>e.count),n=a.map(e=>e.price),o=a.map(e=>e.reward),i=["订单数量","订单金额","订单跑腿费"],s={color:["#999","#FDA695","#3DC8BD"],tooltip:{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"#999"}}},toolbox:{feature:{dataView:{show:!0,readOnly:!1},magicType:{show:!0,type:["line"]},restore:{show:!0},saveAsImage:{show:!0}}},legend:{data:i},xAxis:[{type:"category",data:a.map(e=>l(e.time).format("MM-DD")),axisPointer:{type:"shadow"}}],yAxis:[{type:"value",name:"价格",axisLabel:{formatter:"{value} 元"}},{type:"value",name:"订单",axisLabel:{formatter:"{value} 个"}}],series:[{name:i[0],yAxisIndex:1,type:"line",smooth:!0,data:t},{name:i[1],type:"line",smooth:!0,data:n},{name:i[2],type:"line",smooth:!0,data:o}]};e.setOption(s)}},[t,a]),o.a.createElement("div",{ref:t,style:{width:"100%",height:"400px",background:"#fff",padding:"10px"},className:""})},(e,t)=>{var a,n,o,i;return(null===(a=e.timeRange)||void 0===a?void 0:a.endTime)===(null===(n=t.timeRange)||void 0===n?void 0:n.endTime)&&(null===(o=e.timeRange)||void 0===o?void 0:o.startTime)===(null===(i=t.timeRange)||void 0===i?void 0:i.startTime)})}}]);