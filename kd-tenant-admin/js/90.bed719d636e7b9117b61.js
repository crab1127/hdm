(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{213:function(e,a,t){e.exports=t(6)(408)},75:function(e,a,t){"use strict";t.r(a);var l=t(5),n=t(1),r=t.n(n),i=t(4),o=t(8),s=t(217);const m={labelCol:{span:4},wrapperCol:{span:20}};a.default=e=>{var{data:a}=e,t=Object(l.b)(e,["data"]);const[c]=i.Form.useForm(),{data:d}=Object(s.a)(()=>o.yb().then(e=>e.data));Object(n.useEffect)(()=>{t.visible&&setTimeout(()=>{a?c.setFieldsValue(Object.assign({},a)):(c.resetFields(),c.setFieldsValue({status:1,sort:1}))})},[t.visible]);return r.a.createElement(i.Modal,{title:"设置",maskClosable:!1,visible:t.visible,onCancel:()=>t.setVisible(),onOk:e=>{e.preventDefault(),c.validateFields().then(e=>Object(l.a)(void 0,void 0,void 0,(function*(){var l;const n=Object.assign(Object.assign({},a),e);(null==a?void 0:a.id)&&(yield o.dc(a.id,Object.assign(Object.assign({},e),{postage:100*e.postage}))),t.setVisible(),null===(l=t.onOk)||void 0===l||l.call(t,(null==a?void 0:a.id)?"update":"create",n)})))}},r.a.createElement(i.Form,Object.assign({form:c},m),r.a.createElement(i.Form.Item,{label:"门店名字",name:"status"},null==a?void 0:a.name),r.a.createElement(i.Form.Item,{label:"排序",name:"sort"},r.a.createElement(i.InputNumber,{min:0,max:1e4})),r.a.createElement(i.Form.Item,{label:"佣金比率",name:"shop_cut",extra:"例如：设置佣金比率为；100元商品价格，设置比率10%：商家得90元， 你得10元"},r.a.createElement(i.InputNumber,{min:0,max:20,formatter:e=>`${e}%`,parser:e=>e.replace("%","")})),[5,6].includes(null==a?void 0:a.kd_one_category_id)&&r.a.createElement(i.Form.Item,{label:"跑腿费",name:"postage"},r.a.createElement(i.InputNumber,{min:0,max:100,formatter:e=>`￥${e}`,parser:e=>e.replace("￥","")})),5===(null==a?void 0:a.kd_one_category_id)&&r.a.createElement(i.Form.Item,{label:"食堂门店分类",name:"kd_two_category_id"},r.a.createElement(i.Select,null,null==d?void 0:d.map(e=>r.a.createElement(i.Select.Option,{value:e.id,key:e.id},e.name)))),r.a.createElement(i.Form.Item,{label:"门店状态",name:"status",extra:"下架后，如果要再次启用，在学校站点管理-》店家网商户申请-》状态（审核不同过）启用"},r.a.createElement(i.Radio.Group,null,r.a.createElement(i.Radio,{value:1},"正常营业"),r.a.createElement(i.Radio,{value:2},"下架")))))}}}]);