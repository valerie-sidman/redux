(this["webpackJsonpstore-func"]=this["webpackJsonpstore-func"]||[]).push([[0],{18:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);n(0);var a=n(6),i=n.n(a),c=(n(18),n(2)),r="ADD_ITEM",s="DELETE_ITEM",l="CHANGE_ITEM_FIELD",u="SEARCH_ITEM",o="CLEAR_FIELDS";function d(e,t){return{type:l,payload:{name:e,value:t}}}function m(){return{type:o,payload:{}}}var b=n(1);function j(){var e=Object(c.c)((function(e){return e.serviceField})),t=Object(c.b)(),n=function(e){var n=e.target,a=n.name,i=n.value;t(d(a,i))};return Object(b.jsxs)("form",{className:"filling-form",onSubmit:function(n){var a,i,c;n.preventDefault(),t((a=e.name,i=e.quantity,c=e.id,{type:r,payload:{name:a,quantity:i,id:c}})),t(m())},children:[Object(b.jsxs)("div",{className:"fields-group",children:[Object(b.jsxs)("div",{className:"mb-3 item-form",children:[Object(b.jsx)("label",{htmlFor:"item-field",className:"form-label",children:"Item"}),Object(b.jsx)("input",{type:"text",className:"form-control",id:"item-field",name:"name",onChange:n,value:e.name})]}),Object(b.jsxs)("div",{className:"mb-3 quantity-form",children:[Object(b.jsx)("label",{htmlFor:"quantity-field",className:"form-label",children:"Quantity"}),Object(b.jsx)("input",{type:"text",className:"form-control",id:"quantity-field",name:"quantity",onChange:n,value:e.quantity})]})]}),Object(b.jsx)("button",{type:"submit",className:"btn btn-success",children:"Apply"}),Object(b.jsx)("button",{type:"button",className:"btn btn-secondary",onClick:function(){t(m())},children:"Cancel"})]})}function f(){var e=Object(c.c)((function(e){return e.serviceField})),t=Object(c.b)();return Object(b.jsxs)("div",{className:"row g-3 align-items-center filter-container",children:[Object(b.jsx)("div",{className:"col-auto",children:Object(b.jsx)("label",{htmlFor:"filter-block",className:"col-form-label",children:"Let's filter!"})}),Object(b.jsx)("div",{className:"col-auto",children:Object(b.jsx)("input",{type:"text",id:"filter-block",className:"form-control",name:"filter",onChange:function(e){var n=e.target,a=n.name,i=n.value;t(d(a,i)),t(function(e){return{type:u,payload:{value:e}}}(i))},value:e.filter})})]})}function v(){var e=Object(c.c)((function(e){return e.serviceList})).filteredItems,t=Object(c.b)(),n=function(e){t({type:s,payload:{delId:e}})};return Object(b.jsx)("ul",{children:e.map((function(a){return Object(b.jsxs)("li",{className:"card",children:[Object(b.jsxs)("div",{className:"card-header",children:["Quantity: ",a.quantity]}),Object(b.jsxs)("div",{className:"card-body",children:[Object(b.jsxs)("p",{className:"card-text",children:["Item: ",a.name]}),Object(b.jsx)("button",{type:"button",className:"btn btn-warning",onClick:function(){return function(n){var a=e.find((function(e){return e.id===n}));t(d("name",a.name)),t(d("quantity",a.quantity)),t(d("id",a.id))}(a.id)},children:"Edit"}),Object(b.jsx)("button",{type:"button",className:"btn btn-danger",onClick:function(){return n(a.id)},children:"Delete"})]})]},a.id)}))})}function O(){return Object(b.jsxs)("div",{className:"main-container",children:[Object(b.jsx)("h1",{className:"main-title",children:"Shopping list:"}),Object(b.jsx)(f,{}),Object(b.jsx)(j,{}),Object(b.jsx)(v,{})]})}var h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,27)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),i(e),c(e),r(e)}))},y=n(5),p=n(3),x=n(12),N=n(13),g={items:[],filteredItems:[]};var E=n(4),I={filter:"",name:"",quantity:"",id:""};var _={filter:""};var C=Object(y.b)({serviceList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r:var n=t.payload,a=n.name,i=n.quantity,c=n.id;if(c){var l=e.items.findIndex((function(e){return e.id===c}));return e.items[l]={id:c,name:a,quantity:i},{items:e.items,filteredItems:e.items}}var o=[].concat(Object(x.a)(e.items),[{id:Object(N.a)(),name:a,quantity:i}]);return{filteredItems:o,items:o};case s:var d=t.payload.delId,m=e.items.filter((function(e){return e.id!==d}));return{filteredItems:m,items:m};case u:var b=t.payload.value;return Object(p.a)(Object(p.a)({},e),{},{filteredItems:e.items.filter((function(e){return e.name.toLowerCase().includes(b.toLowerCase())}))});default:return e}},serviceField:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:var n=t.payload,a=n.name,i=n.value;return Object(p.a)(Object(p.a)({},e),{},Object(E.a)({},a,i));case o:return I;default:return e}},serviceSearch:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:var n=t.payload,a=n.name,i=n.val;return Object(p.a)(Object(p.a)({},e),{},Object(E.a)({},a,i));default:return e}}}),q=Object(y.c)(C,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());i.a.render(Object(b.jsx)(c.a,{store:q,children:Object(b.jsx)(O,{})}),document.getElementById("root")),h()}},[[26,1,2]]]);
//# sourceMappingURL=main.4cb700a5.chunk.js.map