(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{15:function(t,n,e){},16:function(t,n,e){},18:function(t,n,e){"use strict";e.r(n);var r=e(6),c=e.n(r),a=e(3),o=e(7),s=e(1),i=e.n(s),u=e(2),d=(e(14),e(15),e(16),e(0)),l=function(t){var n=t.goods;return Object(d.jsx)("ul",{className:"content",children:n.map((function(t){return Object(d.jsx)("li",{"data-cy":"good",style:{color:t.color},children:t.name},t.id)}))})};function f(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.json()}))}var j=e(5),b=e(8),p=["children"],h=function(t){var n=t.children,e=Object(b.a)(t,p);return Object(d.jsx)("button",Object(j.a)(Object(j.a)({type:"button"},e),{},{children:n}))},m=function(){var t=Object(u.useState)([]),n=Object(o.a)(t,2),e=n[0],r=n[1],c=function(){var t=Object(a.a)(i.a.mark((function t(){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f();case 2:n=t.sent,r(n);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=Object(a.a)(i.a.mark((function t(){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f().then((function(t){return t.sort((function(t,n){return t.name.localeCompare(n.name)})).slice(0,5)}));case 2:n=t.sent,r(n);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),j=function(){var t=Object(a.a)(i.a.mark((function t(){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f().then((function(t){return t.filter((function(t){return"red"===t.color}))}));case 2:n=t.sent,r(n);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{className:"title is-1",children:"Dynamic list of Goods"}),Object(d.jsxs)("div",{className:"App__buttons",children:[Object(d.jsx)(h,{className:"button is-primary","data-cy":"all-button",onClick:function(){return c()},children:"Load all goods"}),Object(d.jsx)(h,{className:"button is-primary","data-cy":"first-five-button",onClick:function(){return s()},children:"Load 5 first goods"}),Object(d.jsx)(h,{className:"button is-primary","data-cy":"red-button",onClick:function(){return j()},children:"Load red goods"})]}),Object(d.jsx)(l,{goods:e})]})};c.a.render(Object(d.jsx)(m,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.a66f2a93.chunk.js.map