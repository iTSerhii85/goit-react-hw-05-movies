"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[354],{354:function(n,e,t){t.r(e),t.d(e,{default:function(){return d}});var r,c,a=t(439),u=t(66),o=t(791),s=t(689),i=t(168),p=t(444),f=p.ZP.li(r||(r=(0,i.Z)(["\n  padding: 15px;\n  border-radius: 16px;\n  box-shadow: 10px 10px 17px 0px rgba(0, 0, 0, 0.75);\n  background-color: #82d1e2;\n"]))),l=p.ZP.ul(c||(c=(0,i.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n"]))),h=t(184),d=function(){var n=(0,o.useState)([]),e=(0,a.Z)(n,2),t=e[0],r=e[1],c=(0,s.UO)().movieId;return(0,o.useEffect)((function(){return(0,u.RT)(c).then((function(n){return r(n.results)})),function(){(0,u.RT)(c)}}),[c]),(0,h.jsx)(h.Fragment,{children:0===t.length?(0,h.jsx)("h3",{children:"We don't have any reviews for this movie!"}):(0,h.jsx)(l,{children:t.map((function(n){return(0,h.jsxs)(f,{children:[(0,h.jsxs)("h3",{children:["Author: ",n.author]}),(0,h.jsx)("p",{children:n.content})]},n.id)}))})})}},66:function(n,e,t){t.d(e,{Df:function(){return i},RT:function(){return m},XT:function(){return f},cU:function(){return v},ey:function(){return h}});var r=t(861),c=t(757),a=t.n(c),u=t(243),o="https://api.themoviedb.org/3/",s="7c6a11c2d8e8524ccfd41d8aedf2bd73";function i(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(a().mark((function n(){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("".concat(o,"/trending/movie/day?api_key=").concat(s));case 3:return e=n.sent,n.abrupt("return",e.data.results);case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function f(n,e){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(a().mark((function n(e,t){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("".concat(o,"search/movie"),{params:{api_key:"".concat(s),query:"".concat(e),page:"".concat(t)}});case 3:return r=n.sent,n.abrupt("return",r.data);case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function h(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("".concat(o,"movie/").concat(e,"?api_key=").concat(s,"&language=en-US"));case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function v(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("".concat(o,"movie/").concat(e,"/credits?api_key=").concat(s,"&language=en-US"));case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function m(n){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("".concat(o,"movie/").concat(e,"/reviews?api_key=").concat(s,"&language=en-US"));case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=354.39929053.chunk.js.map