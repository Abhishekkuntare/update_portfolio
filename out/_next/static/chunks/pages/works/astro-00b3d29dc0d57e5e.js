(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[519],{4651:function(r,n,e){"use strict";e.d(n,{Ee:function(){return f},d9:function(){return l}});var t=e(6052),i=e(5031),s=e(7294),c=e(7375);function a(){return a=Object.assign||function(r){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t])}return r},a.apply(this,arguments)}function o(r,n){if(null==r)return{};var e,t,i={},s=Object.keys(r);for(t=0;t<s.length;t++)e=s[t],n.indexOf(e)>=0||(i[e]=r[e]);return i}function l(r){var n=r.loading,e=r.src,t=r.srcSet,i=r.onLoad,a=r.onError,o=r.crossOrigin,l=r.sizes,u=r.ignoreFallback,d=(0,s.useState)("pending"),h=d[0],f=d[1];(0,s.useEffect)((function(){f(e?"loading":"pending")}),[e]);var x=(0,s.useRef)(),m=(0,s.useCallback)((function(){if(e){j();var r=new Image;r.src=e,o&&(r.crossOrigin=o),t&&(r.srcset=t),l&&(r.sizes=l),n&&(r.loading=n),r.onload=function(r){j(),f("loaded"),null==i||i(r)},r.onerror=function(r){j(),f("failed"),null==a||a(r)},x.current=r}}),[e,o,t,l,i,a,n]),j=function(){x.current&&(x.current.onload=null,x.current.onerror=null,x.current=null)};return(0,c.Gw)((function(){if(!u)return"loading"===h&&m(),function(){j()}}),[h,m,u]),u?"loaded":h}var u=["htmlWidth","htmlHeight","alt"],d=["fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin"],h=s.forwardRef((function(r,n){var e=r.htmlWidth,t=r.htmlHeight,i=r.alt,c=o(r,u);return s.createElement("img",a({width:e,height:t,ref:n,alt:i},c))})),f=(0,t.Gp)((function(r,n){var e=r.fallbackSrc,c=r.fallback,u=r.src,f=r.srcSet,x=r.align,m=r.fit,j=r.loading,g=r.ignoreFallback,p=r.crossOrigin,v=o(r,d),b=null!=j||g||void 0===e&&void 0===c,k=l(a({},r,{ignoreFallback:b})),w=a({ref:n,objectFit:m,objectPosition:x},b?v:(0,i.CE)(v,["onError","onLoad"]));return"loaded"!==k?c||s.createElement(t.m$.img,a({as:h,className:"chakra-image__placeholder",src:e},w)):s.createElement(t.m$.img,a({as:h,src:u,srcSet:f,crossOrigin:p,loading:j,className:"chakra-image"},w))}));i.Ts&&(f.displayName="Image")},1532:function(r,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/works/astro",function(){return e(7836)}])},603:function(r,n,e){"use strict";e.d(n,{Et:function(){return u},Pg:function(){return d}});var t=e(5893),i=e(1664),s=e.n(i),c=e(5675),a=e.n(c),o=e(8527),l=e(917),u=function(r){var n=r.children,e=r.id,i=r.title,c=r.thumbnail;return(0,t.jsx)(o.xu,{w:"100%",textAlign:"center",children:(0,t.jsx)(s(),{href:"/works/".concat(e),children:(0,t.jsxs)(o.fG,{cursor:"pointer",children:[(0,t.jsx)(a(),{src:c,alt:i,className:"grid-item-thumbnail",placeholder:"blur"}),(0,t.jsx)(o.AB,{href:"/works/".concat(e),children:(0,t.jsx)(o.xv,{mt:2,fontSize:20,children:i})}),(0,t.jsx)(o.xv,{fontSize:14,children:n})]})})})},d=function(){return(0,t.jsx)(l.xB,{styles:"\n      .grid-item-thumbnail {\n        border-radius: 12px;\n      }\n    "})}},2857:function(r,n,e){"use strict";var t=e(5893),i=e(9235),s=e(9008),c=e.n(s),a=e(603),o={hidden:{opacity:0,x:0,y:20},enter:{opacity:1,x:0,y:0},exit:{opacity:0,x:-0,y:20}};n.Z=function(r){var n=r.children,e=r.title;return(0,t.jsx)(i.E.article,{initial:"hidden",animate:"enter",exit:"exit",variants:o,transition:{duration:.4,type:"easeInOut"},style:{position:"relative"},children:(0,t.jsxs)(t.Fragment,{children:[e&&(0,t.jsxs)(c(),{children:[(0,t.jsxs)("title",{children:[e," - Abhishek Kuntare "]}),(0,t.jsx)("meta",{name:"twitter:title",content:e}),(0,t.jsx)("meta",{property:"og:title",content:e})]}),n,(0,t.jsx)(a.Pg,{})]})})}},3562:function(r,n,e){"use strict";var t=e(7297);function i(){var r=(0,t.Z)(["\n  text-align: justify;\n  text-indent: 1em;\n"]);return i=function(){return r},r}var s=e(5934).Z.p(i());n.Z=s},3922:function(r,n,e){"use strict";e.d(n,{Dx:function(){return l},WZ:function(){return u},h_:function(){return d}});var t=e(5893),i=e(1664),s=e.n(i),c=e(8527),a=e(4651),o=e(9876),l=function(r){var n=r.children;return(0,t.jsxs)(c.xu,{children:[(0,t.jsx)(s(),{href:"/works",children:(0,t.jsx)(c.rU,{children:"Works"})}),(0,t.jsxs)("span",{children:[" ",(0,t.jsx)(o.XC,{})," "]}),(0,t.jsx)(c.X6,{display:"inline-block",as:"h3",fontSize:20,mb:4,children:n})]})},u=function(r){var n=r.src,e=r.alt;return(0,t.jsx)(a.Ee,{borderRadius:"lg",w:"full",src:n,alt:e,mb:4})},d=function(r){var n=r.children;return(0,t.jsx)(c.Ct,{colorScheme:"green",mr:2,children:n})}},7836:function(r,n,e){"use strict";e.r(n);var t=e(5893),i=(e(7294),e(8527)),s=e(9876),c=e(3922),a=e(3562),o=e(2857);n.default=function(){return(0,t.jsx)(o.Z,{title:"Astro",children:(0,t.jsxs)(i.W2,{children:[(0,t.jsxs)(c.Dx,{children:["Astro ",(0,t.jsx)(i.Ct,{children:"2021-"})]}),(0,t.jsx)(a.Z,{children:"Astro is a E-Commerce website, We strive to deliver the best quality products and services and are always there to help both before and after you have made your purchase!"}),(0,t.jsxs)(i.aV,{ml:4,my:4,children:[(0,t.jsxs)(i.HC,{children:[(0,t.jsx)(c.h_,{children:"Website"}),(0,t.jsxs)(i.rU,{href:"https://astro-ecommerce.herokuapp.com/",children:["https://astro-ecommerce.herokuapp.com/ ",(0,t.jsx)(s.h0,{mx:"2px"})]})]}),(0,t.jsxs)(i.HC,{children:[(0,t.jsx)(c.h_,{children:"Platform"}),(0,t.jsx)("span",{children:"Windows/macOS/Linux/iOS/Android"})]}),(0,t.jsxs)(i.HC,{children:[(0,t.jsx)(c.h_,{children:"Stack"}),(0,t.jsx)("span",{children:"NodeJS, ReactJS, ExpressJS, Mongodb"})]}),(0,t.jsxs)(i.HC,{children:[(0,t.jsx)(c.h_,{children:"HOST"}),"Heroku"]})]}),(0,t.jsx)(c.WZ,{src:"/images/works/Astro01.png",alt:"Inkdrop"}),(0,t.jsx)(c.WZ,{src:"/images/works/Astro02.png",alt:"Inkdrop"})]})})}}},function(r){r.O(0,[675,774,888,179],(function(){return n=1532,r(r.s=n);var n}));var n=r.O();_N_E=n}]);