"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[446],{4242:function(t,n,e){e.d(n,{e:function(){return p}});var r,o,a=e(1087),i=e(7689),s=e(168),c=e(6444),u=c.ZP.ul(r||(r=(0,s.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 25px;\n  align-items: center;\n  justify-content: center;\n"]))),l=c.ZP.li(o||(o=(0,s.Z)(["\n  max-width: 200px;\n  height: 310px;\n  padding: 10px;\n  background-color: #82d1e2;\n  border-radius: 5px;\n  box-shadow: 10px 10px 17px 0px rgba(0, 0, 0, 0.75);\n  overflow-wrap: break-word;\n\n  &:hover {\n    transform: scale(1.2);\n  }\n\n  h3 {\n    margin-top: 10px;\n    margin-bottom: 0;\n    color: black;\n\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n"]))),d=e(8358),f=e(184),p=function(t){var n=t.movies,e=t.url,r=(0,i.TH)();return(0,f.jsx)(u,{children:n.map((function(t,n){return(0,f.jsx)(a.rU,{to:"".concat(e).concat(t.id),state:{from:r},children:(0,f.jsx)(l,{children:(0,f.jsxs)("div",{children:[t.poster_path?(0,f.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(t.poster_path),alt:"movie.title",width:180,height:250}):(0,f.jsx)("img",{src:d,alt:t.title,width:180,height:250}),(0,f.jsx)("div",{children:(0,f.jsx)("h3",{children:t.title})})]})})},n)}))})}},4446:function(t,n,e){e.r(n),e.d(n,{default:function(){return It}});var r,o,a,i=e(3433),s=e(9439),c=e(4242),u=e(2791),l=e(168),d=e(6444),f=d.ZP.form(r||(r=(0,l.Z)(["\n  /* position: relative; */\n  margin-left: 30px;\n\n  @media screen and (min-width: 768px) {\n    position: fixed;\n    top: 10px;\n    left: 50%;\n    transform: translateX(-30%);\n    z-index: 1000;\n  }\n\n  @media screen and (min-width: 1280px) {\n    transform: translateX(-30%);\n  }\n"]))),p=d.ZP.button(o||(o=(0,l.Z)(["\n  background-color: blue;\n  padding: 7px 20px;\n  color: #ffffff;\n  font-size: medium;\n  font-weight: bolder;\n  color: #ffffff;\n  border-bottom-right-radius: 4px;\n  border-top-right-radius: 4px;\n  border: none;\n"]))),h=d.ZP.input(a||(a=(0,l.Z)(["\n  width: 50%;\n  font-size: 18px;\n  font-weight: normal;\n  padding: 4px 10px;\n  border: 0;\n  border-bottom: 3px solid gray;\n  outline: 0;\n\n  &:focus {\n    border-bottom: 3px solid blue;\n  }\n\n  @media screen and (min-width: 768px) {\n    width: 50%;\n  }\n  @media screen and (min-width: 1280px) {\n    width: fit-content;\n  }\n"])));function m(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function v(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function g(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?v(Object(e),!0).forEach((function(n){m(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):v(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function y(t,n){if(null==t)return{};var e,r,o=function(t,n){if(null==t)return{};var e,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)e=a[r],n.indexOf(e)>=0||(o[e]=t[e]);return o}(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)e=a[r],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(o[e]=t[e])}return o}function b(t){var n,e,r="";if("string"==typeof t||"number"==typeof t)r+=t;else if("object"==typeof t)if(Array.isArray(t))for(n=0;n<t.length;n++)t[n]&&(e=b(t[n]))&&(r&&(r+=" "),r+=e);else for(n in t)t[n]&&(r&&(r+=" "),r+=n);return r}var x=function(){for(var t,n,e=0,r="";e<arguments.length;)(t=arguments[e++])&&(n=b(t))&&(r&&(r+=" "),r+=n);return r},E=["theme","type"],T=["delay","staleId"],k=function(t){return"number"==typeof t&&!isNaN(t)},w=function(t){return"string"==typeof t},O=function(t){return"function"==typeof t},C=function(t){return w(t)||O(t)?t:null},_=function(t){return(0,u.isValidElement)(t)||w(t)||O(t)||k(t)};function I(t){var n=t.enter,e=t.exit,r=t.appendPosition,o=void 0!==r&&r,a=t.collapse,s=void 0===a||a,c=t.collapseDuration,l=void 0===c?300:c;return function(t){var r=t.children,a=t.position,c=t.preventExitTransition,d=t.done,f=t.nodeRef,p=t.isIn,h=o?"".concat(n,"--").concat(a):n,m=o?"".concat(e,"--").concat(a):e,v=(0,u.useRef)(0);return(0,u.useLayoutEffect)((function(){var t,n=f.current,e=h.split(" "),r=function t(r){var o;r.target===f.current&&(n.dispatchEvent(new Event("d")),n.removeEventListener("animationend",t),n.removeEventListener("animationcancel",t),0===v.current&&"animationcancel"!==r.type&&(o=n.classList).remove.apply(o,(0,i.Z)(e)))};(t=n.classList).add.apply(t,(0,i.Z)(e)),n.addEventListener("animationend",r),n.addEventListener("animationcancel",r)}),[]),(0,u.useEffect)((function(){var t=f.current,n=function n(){t.removeEventListener("animationend",n),s?function(t,n,e){void 0===e&&(e=300);var r=t.scrollHeight,o=t.style;requestAnimationFrame((function(){o.minHeight="initial",o.height=r+"px",o.transition="all ".concat(e,"ms"),requestAnimationFrame((function(){o.height="0",o.padding="0",o.margin="0",setTimeout(n,e)}))}))}(t,d,l):d()};p||(c?n():(v.current=1,t.className+=" ".concat(m),t.addEventListener("animationend",n)))}),[p]),u.createElement(u.Fragment,null,r)}}function P(t,n){return{content:t.content,containerId:t.props.containerId,id:t.props.toastId,theme:t.props.theme,type:t.props.type,data:t.props.data||{},isLoading:t.props.isLoading,icon:t.props.icon,status:n}}var L={list:new Map,emitQueue:new Map,on:function(t,n){return this.list.has(t)||this.list.set(t,[]),this.list.get(t).push(n),this},off:function(t,n){if(n){var e=this.list.get(t).filter((function(t){return t!==n}));return this.list.set(t,e),this}return this.list.delete(t),this},cancelEmit:function(t){var n=this.emitQueue.get(t);return n&&(n.forEach(clearTimeout),this.emitQueue.delete(t)),this},emit:function(t){var n=arguments,e=this;this.list.has(t)&&this.list.get(t).forEach((function(r){var o=setTimeout((function(){r.apply(void 0,(0,i.Z)([].slice.call(n,1)))}),0);e.emitQueue.has(t)||e.emitQueue.set(t,[]),e.emitQueue.get(t).push(o)}))}},j=function(t){var n=t.theme,e=t.type,r=y(t,E);return u.createElement("svg",g({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===n?"currentColor":"var(--toastify-icon-color-".concat(e,")")},r))},Z={info:function(t){return u.createElement(j,g({},t),u.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(t){return u.createElement(j,g({},t),u.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(t){return u.createElement(j,g({},t),u.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(t){return u.createElement(j,g({},t),u.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return u.createElement("div",{className:"Toastify__spinner"})}};function N(t){var n=(0,u.useReducer)((function(t){return t+1}),0),e=(0,s.Z)(n,2)[1],r=(0,u.useState)([]),o=(0,s.Z)(r,2),a=o[0],c=o[1],l=(0,u.useRef)(null),d=(0,u.useRef)(new Map).current,f=function(t){return-1!==a.indexOf(t)},p=(0,u.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:t,containerId:null,isToastActive:f,getToast:function(t){return d.get(t)}}).current;function h(t){var n=t.containerId;!p.props.limit||n&&p.containerId!==n||(p.count-=p.queue.length,p.queue=[])}function m(t){c((function(n){return null==t?[]:n.filter((function(n){return n!==t}))}))}function v(){var t=p.queue.shift();x(t.toastContent,t.toastProps,t.staleId)}function b(t,n){var r=n.delay,o=n.staleId,a=y(n,T);if(_(t)&&!function(t){return!l.current||p.props.enableMultiContainer&&t.containerId!==p.props.containerId||d.has(t.toastId)&&null==t.updateId}(a)){var i=a.toastId,s=a.updateId,c=a.data,f=p.props,h=function(){return m(i)},b=null==s;b&&p.count++;var E,I,j=g(g(g({},f),{},{style:f.toastStyle,key:p.toastKey++},a),{},{toastId:i,updateId:s,data:c,closeToast:h,isIn:!1,className:C(a.className||f.toastClassName),bodyClassName:C(a.bodyClassName||f.bodyClassName),progressClassName:C(a.progressClassName||f.progressClassName),autoClose:!a.isLoading&&(E=a.autoClose,I=f.autoClose,!1===E||k(E)&&E>0?E:I),deleteToast:function(){var t=P(d.get(i),"removed");d.delete(i),L.emit(4,t);var n=p.queue.length;if(p.count=null==i?p.count-p.displayedToast:p.count-1,p.count<0&&(p.count=0),n>0){var r=null==i?p.props.limit:1;if(1===n||1===r)p.displayedToast++,v();else{var o=r>n?n:r;p.displayedToast=o;for(var a=0;a<o;a++)v()}}else e()}});j.iconOut=function(t){var n=t.theme,e=t.type,r=t.isLoading,o=t.icon,a=null,i={theme:n,type:e};return!1===o||(O(o)?a=o(i):(0,u.isValidElement)(o)?a=(0,u.cloneElement)(o,i):w(o)||k(o)?a=o:r?a=Z.spinner():function(t){return t in Z}(e)&&(a=Z[e](i))),a}(j),O(a.onOpen)&&(j.onOpen=a.onOpen),O(a.onClose)&&(j.onClose=a.onClose),j.closeButton=f.closeButton,!1===a.closeButton||_(a.closeButton)?j.closeButton=a.closeButton:!0===a.closeButton&&(j.closeButton=!_(f.closeButton)||f.closeButton);var N=t;(0,u.isValidElement)(t)&&!w(t.type)?N=(0,u.cloneElement)(t,{closeToast:h,toastProps:j,data:c}):O(t)&&(N=t({closeToast:h,toastProps:j,data:c})),f.limit&&f.limit>0&&p.count>f.limit&&b?p.queue.push({toastContent:N,toastProps:j,staleId:o}):k(r)?setTimeout((function(){x(N,j,o)}),r):x(N,j,o)}}function x(t,n,e){var r=n.toastId;e&&d.delete(e);var o={content:t,props:n};d.set(r,o),c((function(t){return[].concat((0,i.Z)(t),[r]).filter((function(t){return t!==e}))})),L.emit(4,P(o,null==o.props.updateId?"added":"updated"))}return(0,u.useEffect)((function(){return p.containerId=t.containerId,L.cancelEmit(3).on(0,b).on(1,(function(t){return l.current&&m(t)})).on(5,h).emit(2,p),function(){d.clear(),L.emit(3,p)}}),[]),(0,u.useEffect)((function(){p.props=t,p.isToastActive=f,p.displayedToast=a.length})),{getToastToRender:function(n){var e=new Map,r=Array.from(d.values());return t.newestOnTop&&r.reverse(),r.forEach((function(t){var n=t.props.position;e.has(n)||e.set(n,[]),e.get(n).push(t)})),Array.from(e,(function(t){return n(t[0],t[1])}))},containerRef:l,isToastActive:f}}function R(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientX:t.clientX}function D(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientY:t.clientY}function S(t){var n=(0,u.useState)(!1),e=(0,s.Z)(n,2),r=e[0],o=e[1],a=(0,u.useState)(!1),i=(0,s.Z)(a,2),c=i[0],l=i[1],d=(0,u.useRef)(null),f=(0,u.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,p=(0,u.useRef)(t),h=t.autoClose,m=t.pauseOnHover,v=t.closeToast,g=t.onClick,y=t.closeOnClick;function b(n){if(t.draggable){"touchstart"===n.nativeEvent.type&&n.nativeEvent.preventDefault(),f.didMove=!1,document.addEventListener("mousemove",k),document.addEventListener("mouseup",w),document.addEventListener("touchmove",k),document.addEventListener("touchend",w);var e=d.current;f.canCloseOnClick=!0,f.canDrag=!0,f.boundingRect=e.getBoundingClientRect(),e.style.transition="",f.x=R(n.nativeEvent),f.y=D(n.nativeEvent),"x"===t.draggableDirection?(f.start=f.x,f.removalDistance=e.offsetWidth*(t.draggablePercent/100)):(f.start=f.y,f.removalDistance=e.offsetHeight*(80===t.draggablePercent?1.5*t.draggablePercent:t.draggablePercent/100))}}function x(n){if(f.boundingRect){var e=f.boundingRect,r=e.top,o=e.bottom,a=e.left,i=e.right;"touchend"!==n.nativeEvent.type&&t.pauseOnHover&&f.x>=a&&f.x<=i&&f.y>=r&&f.y<=o?T():E()}}function E(){o(!0)}function T(){o(!1)}function k(n){var e=d.current;f.canDrag&&e&&(f.didMove=!0,r&&T(),f.x=R(n),f.y=D(n),f.delta="x"===t.draggableDirection?f.x-f.start:f.y-f.start,f.start!==f.x&&(f.canCloseOnClick=!1),e.style.transform="translate".concat(t.draggableDirection,"(").concat(f.delta,"px)"),e.style.opacity=""+(1-Math.abs(f.delta/f.removalDistance)))}function w(){document.removeEventListener("mousemove",k),document.removeEventListener("mouseup",w),document.removeEventListener("touchmove",k),document.removeEventListener("touchend",w);var n=d.current;if(f.canDrag&&f.didMove&&n){if(f.canDrag=!1,Math.abs(f.delta)>f.removalDistance)return l(!0),void t.closeToast();n.style.transition="transform 0.2s, opacity 0.2s",n.style.transform="translate".concat(t.draggableDirection,"(0)"),n.style.opacity="1"}}(0,u.useEffect)((function(){p.current=t})),(0,u.useEffect)((function(){return d.current&&d.current.addEventListener("d",E,{once:!0}),O(t.onOpen)&&t.onOpen((0,u.isValidElement)(t.children)&&t.children.props),function(){var t=p.current;O(t.onClose)&&t.onClose((0,u.isValidElement)(t.children)&&t.children.props)}}),[]),(0,u.useEffect)((function(){return t.pauseOnFocusLoss&&(document.hasFocus()||T(),window.addEventListener("focus",E),window.addEventListener("blur",T)),function(){t.pauseOnFocusLoss&&(window.removeEventListener("focus",E),window.removeEventListener("blur",T))}}),[t.pauseOnFocusLoss]);var C={onMouseDown:b,onTouchStart:b,onMouseUp:x,onTouchEnd:x};return h&&m&&(C.onMouseEnter=T,C.onMouseLeave=E),y&&(C.onClick=function(t){g&&g(t),f.canCloseOnClick&&v()}),{playToast:E,pauseToast:T,isRunning:r,preventExitTransition:c,toastRef:d,eventHandlers:C}}function M(t){var n=t.closeToast,e=t.theme,r=t.ariaLabel,o=void 0===r?"close":r;return u.createElement("button",{className:"Toastify__close-button Toastify__close-button--".concat(e),type:"button",onClick:function(t){t.stopPropagation(),n(t)},"aria-label":o},u.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},u.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function B(t){var n=t.delay,e=t.isRunning,r=t.closeToast,o=t.type,a=void 0===o?"default":o,i=t.hide,s=t.className,c=t.style,l=t.controlledProgress,d=t.progress,f=t.rtl,p=t.isIn,h=t.theme,v=i||l&&0===d,y=g(g({},c),{},{animationDuration:"".concat(n,"ms"),animationPlayState:e?"running":"paused",opacity:v?0:1});l&&(y.transform="scaleX(".concat(d,")"));var b=x("Toastify__progress-bar",l?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--".concat(h),"Toastify__progress-bar--".concat(a),{"Toastify__progress-bar--rtl":f}),E=O(s)?s({rtl:f,type:a,defaultClassName:b}):x(b,s);return u.createElement("div",m({role:"progressbar","aria-hidden":v?"true":"false","aria-label":"notification timer",className:E,style:y},l&&d>=1?"onTransitionEnd":"onAnimationEnd",l&&d<1?null:function(){p&&r()}))}var z=function(t){var n=S(t),e=n.isRunning,r=n.preventExitTransition,o=n.toastRef,a=n.eventHandlers,i=t.closeButton,s=t.children,c=t.autoClose,l=t.onClick,d=t.type,f=t.hideProgressBar,p=t.closeToast,h=t.transition,m=t.position,v=t.className,y=t.style,b=t.bodyClassName,E=t.bodyStyle,T=t.progressClassName,k=t.progressStyle,w=t.updateId,C=t.role,_=t.progress,I=t.rtl,P=t.toastId,L=t.deleteToast,j=t.isIn,Z=t.isLoading,N=t.iconOut,R=t.closeOnClick,D=t.theme,z=x("Toastify__toast","Toastify__toast-theme--".concat(D),"Toastify__toast--".concat(d),{"Toastify__toast--rtl":I},{"Toastify__toast--close-on-click":R}),A=O(v)?v({rtl:I,position:m,type:d,defaultClassName:z}):x(z,v),F=!!_||!c,H={closeToast:p,type:d,theme:D},q=null;return!1===i||(q=O(i)?i(H):(0,u.isValidElement)(i)?(0,u.cloneElement)(i,H):M(H)),u.createElement(h,{isIn:j,done:L,position:m,preventExitTransition:r,nodeRef:o},u.createElement("div",g(g({id:P,onClick:l,className:A},a),{},{style:y,ref:o}),u.createElement("div",g(g({},j&&{role:C}),{},{className:O(b)?b({type:d}):x("Toastify__toast-body",b),style:E}),null!=N&&u.createElement("div",{className:x("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!Z})},N),u.createElement("div",null,s)),q,u.createElement(B,g(g({},w&&!F?{key:"pb-".concat(w)}:{}),{},{rtl:I,theme:D,delay:c,isRunning:e,isIn:j,closeToast:p,hide:f,type:d,style:k,className:T,controlledProgress:F,progress:_||0}))))},A=function(t,n){return void 0===n&&(n=!1),{enter:"Toastify--animate Toastify__".concat(t,"-enter"),exit:"Toastify--animate Toastify__".concat(t,"-exit"),appendPosition:n}},F=I(A("bounce",!0)),H=(I(A("slide",!0)),I(A("zoom")),I(A("flip")),(0,u.forwardRef)((function(t,n){var e=N(t),r=e.getToastToRender,o=e.containerRef,a=e.isToastActive,i=t.className,s=t.style,c=t.rtl,l=t.containerId;function d(t){var n=x("Toastify__toast-container","Toastify__toast-container--".concat(t),{"Toastify__toast-container--rtl":c});return O(i)?i({position:t,rtl:c,defaultClassName:n}):x(n,C(i))}return(0,u.useEffect)((function(){n&&(n.current=o.current)}),[]),u.createElement("div",{ref:o,className:"Toastify",id:l},r((function(t,n){var e=n.length?g({},s):g(g({},s),{},{pointerEvents:"none"});return u.createElement("div",{className:d(t),style:e,key:"container-".concat(t)},n.map((function(t,e){var r=t.content,o=t.props;return u.createElement(z,g(g({},o),{},{isIn:a(o.toastId),style:g(g({},o.style),{},{"--nth":e+1,"--len":n.length}),key:"toast-".concat(o.key)}),r)})))})))})));H.displayName="ToastContainer",H.defaultProps={position:"top-right",transition:F,autoClose:5e3,closeButton:M,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var q,U=new Map,X=[],Q=1;function V(){return""+Q++}function W(t){return t&&(w(t.toastId)||k(t.toastId))?t.toastId:V()}function G(t,n){return U.size>0?L.emit(0,t,n):X.push({content:t,options:n}),n.toastId}function Y(t,n){return g(g({},n),{},{type:n&&n.type||t,toastId:W(n)})}function K(t){return function(n,e){return G(n,Y(t,e))}}function J(t,n){return G(t,Y("default",n))}J.loading=function(t,n){return G(t,Y("default",g({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},n)))},J.promise=function(t,n,e){var r,o=n.pending,a=n.error,i=n.success;o&&(r=w(o)?J.loading(o,e):J.loading(o.render,g(g({},e),o)));var s={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null,delay:100},c=function(t,n,o){if(null!=n){var a=g(g(g({type:t},s),e),{},{data:o}),i=w(n)?{render:n}:n;return r?J.update(r,g(g({},a),i)):J(i.render,g(g({},a),i)),o}J.dismiss(r)},u=O(t)?t():t;return u.then((function(t){return c("success",i,t)})).catch((function(t){return c("error",a,t)})),u},J.success=K("success"),J.info=K("info"),J.error=K("error"),J.warning=K("warning"),J.warn=J.warning,J.dark=function(t,n){return G(t,Y("default",g({theme:"dark"},n)))},J.dismiss=function(t){U.size>0?L.emit(1,t):X=X.filter((function(n){return null!=t&&n.options.toastId!==t}))},J.clearWaitingQueue=function(t){return void 0===t&&(t={}),L.emit(5,t)},J.isActive=function(t){var n=!1;return U.forEach((function(e){e.isToastActive&&e.isToastActive(t)&&(n=!0)})),n},J.update=function(t,n){void 0===n&&(n={}),setTimeout((function(){var e=function(t,n){var e=n.containerId,r=U.get(e||q);return r&&r.getToast(t)}(t,n);if(e){var r=e.props,o=e.content,a=g(g(g({},r),n),{},{toastId:n.toastId||t,updateId:V()});a.toastId!==t&&(a.staleId=t);var i=a.render||o;delete a.render,G(i,a)}}),0)},J.done=function(t){J.update(t,{progress:1})},J.onChange=function(t){return L.on(4,t),function(){L.off(4,t)}},J.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},J.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},L.on(2,(function(t){q=t.containerId||t,U.set(q,t),X.forEach((function(t){L.emit(0,t.content,t.options)})),X=[]})).on(3,(function(t){U.delete(t.containerId||t),0===U.size&&L.off(0).off(1).off(5)}));var $,tt,nt=e(184),et=function(t){var n=t.onSubmit,e=t.placeholder,r=(0,u.useState)(""),o=(0,s.Z)(r,2),a=o[0],i=o[1];return(0,nt.jsxs)(nt.Fragment,{children:[(0,nt.jsxs)(f,{onSubmit:function(t){t.preventDefault(),""===a&&J.warn("Enter movie name!",{position:"top-center",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"}),n(a.toLowerCase()),i("")},children:[(0,nt.jsx)(h,{type:"text",autoComplete:"off",autoFocus:!0,placeholder:""===e?"Enter movie name":e,value:a,onChange:function(t){return i(t.target.value)}}),(0,nt.jsx)(p,{type:"submit",children:"Search"})]}),(0,nt.jsx)(H,{position:"top-center",autoClose:3e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"dark"})]})},rt=e(1066),ot=e(1087),at={"aria-busy":!0,role:"status"},it=function(t,n){return Object.defineProperty?Object.defineProperty(t,"raw",{value:n}):t.raw=n,t},st=242.776657104492,ct=(0,d.F4)($||($=it(["\n  12.5% {\n    stroke-dasharray: ","px, ","px;\n    stroke-dashoffset: -","px;\n  }\n  43.75% {\n    stroke-dasharray: ","px, ","px;\n    stroke-dashoffset: -","px;\n  }\n  100% {\n    stroke-dasharray: ","px, ","px;\n    stroke-dashoffset: -","px;\n  }\n"],["\n  12.5% {\n    stroke-dasharray: ","px, ","px;\n    stroke-dashoffset: -","px;\n  }\n  43.75% {\n    stroke-dasharray: ","px, ","px;\n    stroke-dashoffset: -","px;\n  }\n  100% {\n    stroke-dasharray: ","px, ","px;\n    stroke-dashoffset: -","px;\n  }\n"])),.14*st,st,.11*st,.35*st,st,.35*st,.01*st,st,.99*st),ut=(d.ZP.path(tt||(tt=it(["\n  stroke-dasharray: ","px, ",";\n  stroke-dashoffset: 0;\n  animation: "," ","s linear infinite;\n"],["\n  stroke-dasharray: ","px, ",";\n  stroke-dashoffset: 0;\n  animation: "," ","s linear infinite;\n"])),.01*st,st,ct,1.6),function(t,n){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if("undefined"!==typeof e[t])return e[t];if(t&&t.indexOf(".")>0){for(var r=t.split("."),o=r.length,a=e[r[0]],i=1;null!=a&&i<o;)a=a[r[i]],i+=1;if("undefined"!==typeof a)return a}return n}});var lt,dt,ft,pt=function(t,n){return Object.defineProperty?Object.defineProperty(t,"raw",{value:n}):t.raw=n,t},ht=function(){return ht=Object.assign||function(t){for(var n,e=1,r=arguments.length;e<r;e++)for(var o in n=arguments[e])Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},ht.apply(this,arguments)},mt=(0,d.F4)(lt||(lt=pt(["\n to {\n    transform: rotate(360deg);\n  }\n"],["\n to {\n    transform: rotate(360deg);\n  }\n"]))),vt=[0,30,60,90,120,150,180,210,240,270,300,330],gt=d.ZP.svg(dt||(dt=pt(["\n  animation: "," 0.75s steps(12, end) infinite;\n  animation-duration: ","s;\n"],["\n  animation: "," 0.75s steps(12, end) infinite;\n  animation-duration: ","s;\n"])),mt,ut("speed","0.75")),yt=d.ZP.polyline(ft||(ft=pt(["\n  stroke-width: ","px;\n  stroke-linecap: round;\n\n  &:nth-child(12n + 0) {\n    stroke-opacity: 0.08;\n  }\n\n  &:nth-child(12n + 1) {\n    stroke-opacity: 0.17;\n  }\n\n  &:nth-child(12n + 2) {\n    stroke-opacity: 0.25;\n  }\n\n  &:nth-child(12n + 3) {\n    stroke-opacity: 0.33;\n  }\n\n  &:nth-child(12n + 4) {\n    stroke-opacity: 0.42;\n  }\n\n  &:nth-child(12n + 5) {\n    stroke-opacity: 0.5;\n  }\n\n  &:nth-child(12n + 6) {\n    stroke-opacity: 0.58;\n  }\n\n  &:nth-child(12n + 7) {\n    stroke-opacity: 0.66;\n  }\n\n  &:nth-child(12n + 8) {\n    stroke-opacity: 0.75;\n  }\n\n  &:nth-child(12n + 9) {\n    stroke-opacity: 0.83;\n  }\n\n  &:nth-child(12n + 11) {\n    stroke-opacity: 0.92;\n  }\n"],["\n  stroke-width: ","px;\n  stroke-linecap: round;\n\n  &:nth-child(12n + 0) {\n    stroke-opacity: 0.08;\n  }\n\n  &:nth-child(12n + 1) {\n    stroke-opacity: 0.17;\n  }\n\n  &:nth-child(12n + 2) {\n    stroke-opacity: 0.25;\n  }\n\n  &:nth-child(12n + 3) {\n    stroke-opacity: 0.33;\n  }\n\n  &:nth-child(12n + 4) {\n    stroke-opacity: 0.42;\n  }\n\n  &:nth-child(12n + 5) {\n    stroke-opacity: 0.5;\n  }\n\n  &:nth-child(12n + 6) {\n    stroke-opacity: 0.58;\n  }\n\n  &:nth-child(12n + 7) {\n    stroke-opacity: 0.66;\n  }\n\n  &:nth-child(12n + 8) {\n    stroke-opacity: 0.75;\n  }\n\n  &:nth-child(12n + 9) {\n    stroke-opacity: 0.83;\n  }\n\n  &:nth-child(12n + 11) {\n    stroke-opacity: 0.92;\n  }\n"])),(function(t){return t.width}));function bt(t){var n=t.strokeColor,e=void 0===n?"#4fa94d":n,r=t.strokeWidth,o=void 0===r?"5":r,a=t.animationDuration,i=void 0===a?"0.75":a,s=t.width,c=void 0===s?"96":s,l=t.visible,d=void 0===l||l,f=t.ariaLabel,p=void 0===f?"rotating-lines-loading":f,h=(0,u.useCallback)((function(){return vt.map((function(t){return u.createElement(yt,{key:t,points:"24,12 24,4",width:o,transform:"rotate(".concat(t,", 24, 24)")})}))}),[o]);return d?u.createElement(gt,ht({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",width:c,stroke:e,speed:i,"data-testid":"rotating-lines-svg","aria-label":p},at),h()):null}var xt,Et,Tt,kt=function(t,n){return Object.defineProperty?Object.defineProperty(t,"raw",{value:n}):t.raw=n,t},wt=(0,d.F4)(xt||(xt=kt(["\n to {\n    stroke-dashoffset: 136;\n  }\n"],["\n to {\n    stroke-dashoffset: 136;\n  }\n"])));d.ZP.polygon(Et||(Et=kt(["\n  stroke-dasharray: 17;\n  animation: "," 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;\n"],["\n  stroke-dasharray: 17;\n  animation: "," 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;\n"])),wt),d.ZP.svg(Tt||(Tt=kt(["\n  transform-origin: 50% 65%;\n"],["\n  transform-origin: 50% 65%;\n"])));var Ot;var Ct=d.ZP.div(Ot||(Ot=(0,l.Z)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n"]))),_t=function(){return(0,nt.jsx)(Ct,{children:(0,nt.jsx)(bt,{strokeColor:"blue",strokeWidth:"5",animationDuration:"2",width:"150",visible:!0})})},It=function(){var t,n=(0,ot.lr)(""),e=(0,s.Z)(n,2),r=e[0],o=e[1],a=null!==(t=r.get("query"))&&void 0!==t?t:"",l=(0,u.useState)(""),d=(0,s.Z)(l,2),f=d[0],p=d[1],h=(0,u.useState)(1),m=(0,s.Z)(h,2),v=m[0],g=m[1],y=(0,u.useState)(1),b=(0,s.Z)(y,2),x=b[0],E=b[1],T=(0,u.useState)(!1),k=(0,s.Z)(T,2),w=k[0],O=k[1];(0,u.useEffect)((function(){""!==a&&(1===v&&(window.scrollTo(0,0),O(!0),(0,rt.XT)(a.trim(),v).then((function(t){p(t.results),E(t.total_pages)})).then(O(!1))),x>=v&&(O(!0),(0,rt.XT)(a.trim(),v).then((function(t){p((function(n){return[].concat((0,i.Z)(n),(0,i.Z)(t.results))}))})),O(!1)))}),[v,a,x]),(0,u.useEffect)((function(){return document.addEventListener("scroll",C),function(){document.removeEventListener("scroll",C)}}),[]);var C=function(t){t.target.documentElement.scrollHeight-(t.target.documentElement.scrollTop+window.innerHeight)<50&&g((function(t){return t+1}))};return(0,nt.jsxs)("main",{children:[(0,nt.jsx)(et,{onSubmit:function(t){o(""!==t?{query:t}:{}),g(1)},placeholder:a}),w&&(0,nt.jsx)(_t,{}),""!==f&&(0,nt.jsx)(c.e,{movies:f,url:""})]})}},1066:function(t,n,e){e.d(n,{Df:function(){return u},RT:function(){return g},XT:function(){return d},cU:function(){return m},ey:function(){return p}});var r=e(5861),o=e(7757),a=e.n(o),i=e(1243),s="https://api.themoviedb.org/3/",c="7c6a11c2d8e8524ccfd41d8aedf2bd73";function u(){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(a().mark((function t(){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.Z.get("".concat(s,"/trending/movie/day?api_key=").concat(c));case 3:return n=t.sent,t.abrupt("return",n.data.results);case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function d(t,n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(a().mark((function t(n,e){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.Z.get("".concat(s,"search/movie"),{params:{api_key:"".concat(c),query:"".concat(n),page:"".concat(e)}});case 3:return r=t.sent,t.abrupt("return",r.data);case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function p(t){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(a().mark((function t(n){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.Z.get("".concat(s,"movie/").concat(n,"?api_key=").concat(c,"&language=en-US"));case 3:return e=t.sent,t.abrupt("return",e.data);case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function m(t){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(a().mark((function t(n){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.Z.get("".concat(s,"movie/").concat(n,"/credits?api_key=").concat(c,"&language=en-US"));case 3:return e=t.sent,t.abrupt("return",e.data);case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function g(t){return y.apply(this,arguments)}function y(){return(y=(0,r.Z)(a().mark((function t(n){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.Z.get("".concat(s,"movie/").concat(n,"/reviews?api_key=").concat(c,"&language=en-US"));case 3:return e=t.sent,t.abrupt("return",e.data);case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}},8358:function(t,n,e){t.exports=e.p+"static/media/no-image.55e4847a78881b7fb299.jpg"}}]);
//# sourceMappingURL=446.8f349021.chunk.js.map