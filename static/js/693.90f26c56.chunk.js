"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[693],{242:function(n,t,e){e.d(t,{e:function(){return h}});var r,a,c=e(87),o=e(689),i=e(168),u=e(444),s=u.ZP.ul(r||(r=(0,i.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 25px;\n  align-items: center;\n  justify-content: center;\n"]))),p=u.ZP.li(a||(a=(0,i.Z)(["\n  max-width: 200px;\n  height: 310px;\n  padding: 10px;\n  background-color: #82d1e2;\n  border-radius: 5px;\n  box-shadow: 10px 10px 17px 0px rgba(0, 0, 0, 0.75);\n  overflow-wrap: break-word;\n\n  &:hover {\n    transform: scale(1.2);\n  }\n\n  h3 {\n    margin-top: 10px;\n    margin-bottom: 0;\n    color: black;\n\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n"]))),l=e(358),f=e(184),h=function(n){var t=n.movies,e=n.url,r=(0,o.TH)();return(0,f.jsx)(s,{children:t.map((function(n,t){return(0,f.jsx)(c.rU,{to:"".concat(e).concat(n.id),state:{from:r},children:(0,f.jsx)(p,{children:(0,f.jsxs)("div",{children:[n.poster_path?(0,f.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(n.poster_path),alt:"movie.title",width:180,height:250}):(0,f.jsx)("img",{src:l,alt:n.title,width:180,height:250}),(0,f.jsx)("div",{children:(0,f.jsx)("h3",{children:n.title})})]})})},t)}))})}},693:function(n,t,e){e.r(t),e.d(t,{default:function(){return l}});var r,a=e(439),c=e(791),o=e(66),i=e(242),u=e(168),s=e(444).ZP.div(r||(r=(0,u.Z)(["\n  text-align: center;\n"]))),p=e(184),l=function(){var n=(0,c.useState)(null),t=(0,a.Z)(n,2),e=t[0],r=t[1];return(0,c.useEffect)((function(){document.title="Movie finder",(0,o.Df)().then((function(n){return r(n)}))}),[]),(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)(s,{children:[(0,p.jsx)("h1",{children:"Trending today"}),e&&(0,p.jsx)(i.e,{movies:e,url:"movies/"})]})})}},66:function(n,t,e){e.d(t,{Df:function(){return s},RT:function(){return m},XT:function(){return l},cU:function(){return v},ey:function(){return h}});var r=e(861),a=e(757),c=e.n(a),o=e(243),i="https://api.themoviedb.org/3/",u="7c6a11c2d8e8524ccfd41d8aedf2bd73";function s(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("".concat(i,"/trending/movie/day?api_key=").concat(u));case 3:return t=n.sent,n.abrupt("return",t.data.results);case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function l(n,t){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function n(t,e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("".concat(i,"search/movie"),{params:{api_key:"".concat(u),query:"".concat(t),page:"".concat(e)}});case 3:return r=n.sent,n.abrupt("return",r.data);case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function h(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("".concat(i,"movie/").concat(t,"?api_key=").concat(u,"&language=en-US"));case 3:return e=n.sent,n.abrupt("return",e.data);case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function v(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("".concat(i,"movie/").concat(t,"/credits?api_key=").concat(u,"&language=en-US"));case 3:return e=n.sent,n.abrupt("return",e.data);case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function m(n){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("".concat(i,"movie/").concat(t,"/reviews?api_key=").concat(u,"&language=en-US"));case 3:return e=n.sent,n.abrupt("return",e.data);case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}},358:function(n,t,e){n.exports=e.p+"static/media/no-image.55e4847a78881b7fb299.jpg"}}]);
//# sourceMappingURL=693.90f26c56.chunk.js.map