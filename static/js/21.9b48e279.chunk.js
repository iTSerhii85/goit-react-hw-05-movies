"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[21],{346:function(e,n,t){t.d(n,{Df:function(){return o},XT:function(){return l},ey:function(){return d}});var r=t(861),c=t(757),a=t.n(c),s=t(243),u="https://api.themoviedb.org/3/",i="7c6a11c2d8e8524ccfd41d8aedf2bd73";function o(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(a().mark((function e(){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("".concat(u,"/trending/movie/day?api_key=").concat(i));case 3:return n=e.sent,e.abrupt("return",n.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function l(e){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(a().mark((function e(n){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("".concat(u,"search/movie?api_key=").concat(i,"&language=en-US&query=").concat(n,"&page=1&include_adult=false"));case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function d(e){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(a().mark((function e(n){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("".concat(u,"movie/").concat(n,"?api_key=").concat(i,"&language=en-US"));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}},21:function(e,n,t){t.r(n),t.d(n,{default:function(){return d}});var r,c=t(439),a=t(168),s=t(444).ZP.div(r||(r=(0,a.Z)(["\n  display: flex;\n  gap: 30px;\n  padding: 15px;\n"]))),u=t(184),i=function(e){var n=e.movie;return(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)(s,{children:[(0,u.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(n.poster_path),alt:n.title,width:300,height:350}),(0,u.jsxs)("div",{children:[(0,u.jsxs)("h1",{children:[n.title," ",(0,u.jsxs)("span",{children:["(",n.release_date,")"]})," "]}),(0,u.jsxs)("p",{children:["User Score: ",Math.round(10*n.vote_average),"%"]}),(0,u.jsx)("h2",{children:"Overview"}),(0,u.jsx)("p",{children:n.overview}),(0,u.jsx)("h3",{children:"Genres"}),(0,u.jsx)("p",{children:n.genres.map((function(e){return e.name})).join(" ")})]})]})})},o=t(346),p=t(791),l=t(87),h=t(689),d=function(){var e=(0,p.useState)(null),n=(0,c.Z)(e,2),t=n[0],r=n[1],a=(0,h.UO)().movieId;return(0,p.useEffect)((function(){return(0,o.ey)(a).then((function(e){return r(e)})),function(){(0,o.ey)(a)}}),[a]),(0,u.jsxs)(u.Fragment,{children:[t&&(0,u.jsx)(i,{movie:t}),(0,u.jsx)(l.rU,{to:"cast",children:"Cast"}),(0,u.jsx)("br",{}),(0,u.jsx)(l.rU,{to:"reviews",children:"Reviews"}),(0,u.jsx)(p.Suspense,{children:(0,u.jsx)(h.j3,{})})]})}}}]);
//# sourceMappingURL=21.9b48e279.chunk.js.map