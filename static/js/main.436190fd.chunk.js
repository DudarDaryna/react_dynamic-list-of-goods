(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{16:function(t,n,e){},18:function(t,n,e){"use strict";e.r(n);var r=e(5),a=e.n(r),o=e(3),s=e(6),c=e(7),i=e(10),u=e(9),d=e(1),l=e.n(d),p=e(2),f=e.n(p),b=(e(16),e(0)),j=function(t){var n=t.goods;return Object(b.jsx)("ul",{className:"goods__list",children:n.map((function(t){var n=t.id,e=t.color,r=t.name;return Object(b.jsx)("li",{className:"goods__item",style:{color:e},children:r},n)}))})};function h(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.json()}))}var m=function(){var t=Object(o.a)(l.a.mark((function t(){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h();case 2:return n=t.sent,t.abrupt("return",n.sort((function(t,n){return t.name.localeCompare(n.name)})).slice(0,5));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),v=function(){var t=Object(o.a)(l.a.mark((function t(){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h();case 2:return n=t.sent,t.abrupt("return",n.filter((function(t){return"red"===t.color})));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),g=function(t){Object(i.a)(e,t);var n=Object(u.a)(e);function e(){var t;Object(s.a)(this,e);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(t=n.call.apply(n,[this].concat(a))).state={goods:[],isLoading:!1},t.loadData=function(){var n=Object(o.a)(l.a.mark((function n(e){var r;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.setState({isLoading:!0}),n.prev=1,n.next=4,e();case 4:r=n.sent,t.setState({goods:r,isLoading:!1}),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),t.setState({isLoading:!1});case 11:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(t){return n.apply(this,arguments)}}(),t}return Object(c.a)(e,[{key:"render",value:function(){var t=this,n=this.state,e=n.goods,r=n.isLoading;return Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)("div",{className:"App__content",children:[Object(b.jsx)("h1",{className:"title",children:"Dynamic list of Goods"}),Object(b.jsxs)("div",{className:"App__buttons",children:[Object(b.jsx)("button",{type:"button",className:"button",onClick:function(){return t.loadData(h)},children:"Load All goods"}),Object(b.jsx)("button",{type:"button",className:"button",onClick:function(){return t.loadData(m)},children:"Load 5 first goods"}),Object(b.jsx)("button",{type:"button",className:"button",onClick:function(){return t.loadData(v)},children:"Load red goods"})]}),Object(b.jsx)("div",{className:"App__goodsList",children:!r&&Object(b.jsx)(j,{goods:e})})]})})}}]),e}(f.a.Component),x=g;a.a.render(Object(b.jsx)(x,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.436190fd.chunk.js.map