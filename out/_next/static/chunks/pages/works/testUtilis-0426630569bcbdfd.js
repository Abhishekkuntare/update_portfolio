(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[76],{4651:function(n,e,t){"use strict";t.d(e,{Ee:function(){return f},d9:function(){return o}});var r=t(6052),i=t(5031),s=t(7294),c=t(7375);function l(){return(l=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}function a(n,e){if(null==n)return{};var t,r,i={},s=Object.keys(n);for(r=0;r<s.length;r++)t=s[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}function o(n){var e=n.loading,t=n.src,r=n.srcSet,i=n.onLoad,l=n.onError,a=n.crossOrigin,o=n.sizes,u=n.ignoreFallback,d=(0,s.useState)("pending"),h=d[0],f=d[1];(0,s.useEffect)((function(){f(t?"loading":"pending")}),[t]);var x=(0,s.useRef)(),g=(0,s.useCallback)((function(){if(t){j();var n=new Image;n.src=t,a&&(n.crossOrigin=a),r&&(n.srcset=r),o&&(n.sizes=o),e&&(n.loading=e),n.onload=function(n){j(),f("loaded"),null==i||i(n)},n.onerror=function(n){j(),f("failed"),null==l||l(n)},x.current=n}}),[t,a,r,o,i,l,e]),j=function(){x.current&&(x.current.onload=null,x.current.onerror=null,x.current=null)};return(0,c.Gw)((function(){if(!u)return"loading"===h&&g(),function(){j()}}),[h,g,u]),u?"loaded":h}var u=["htmlWidth","htmlHeight","alt"],d=["fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin"],h=s.forwardRef((function(n,e){var t=n.htmlWidth,r=n.htmlHeight,i=n.alt,c=a(n,u);return s.createElement("img",l({width:t,height:r,ref:e,alt:i},c))})),f=(0,r.Gp)((function(n,e){var t=n.fallbackSrc,c=n.fallback,u=n.src,f=n.srcSet,x=n.align,g=n.fit,j=n.loading,m=n.ignoreFallback,p=n.crossOrigin,b=a(n,d),v=null!=j||m||void 0===t&&void 0===c,k=o(l({},n,{ignoreFallback:v})),w=l({ref:e,objectFit:g,objectPosition:x},v?b:(0,i.CE)(b,["onError","onLoad"]));return"loaded"!==k?c||s.createElement(r.m$.img,l({as:h,className:"chakra-image__placeholder",src:t},w)):s.createElement(r.m$.img,l({as:h,src:u,srcSet:f,crossOrigin:p,loading:j,className:"chakra-image"},w))}));i.Ts&&(f.displayName="Image")},4387:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/works/testUtilis",function(){return t(833)}])},603:function(n,e,t){"use strict";t.d(e,{Et:function(){return a},Pg:function(){return o}});var r=t(5893),i=t(1664),s=t(5675),c=t(8527),l=t(917),a=function(n){var e=n.children,t=n.id,l=n.title,a=n.thumbnail;return(0,r.jsx)(c.xu,{w:"100%",textAlign:"center",children:(0,r.jsx)(i.default,{href:"/works/".concat(t),children:(0,r.jsxs)(c.fG,{cursor:"pointer",children:[(0,r.jsx)(s.default,{src:a,alt:l,className:"grid-item-thumbnail",placeholder:"blur"}),(0,r.jsx)(c.AB,{href:"/works/".concat(t),children:(0,r.jsx)(c.xv,{mt:2,fontSize:20,children:l})}),(0,r.jsx)(c.xv,{fontSize:14,children:e})]})})})},o=function(){return(0,r.jsx)(l.xB,{styles:"\n      .grid-item-thumbnail {\n        border-radius: 12px;\n      }\n    "})}},2857:function(n,e,t){"use strict";var r=t(5893),i=t(9235),s=t(9008),c=t(603),l={hidden:{opacity:0,x:0,y:20},enter:{opacity:1,x:0,y:0},exit:{opacity:0,x:-0,y:20}};e.Z=function(n){var e=n.children,t=n.title;return(0,r.jsx)(i.E.article,{initial:"hidden",animate:"enter",exit:"exit",variants:l,transition:{duration:.4,type:"easeInOut"},style:{position:"relative"},children:(0,r.jsxs)(r.Fragment,{children:[t&&(0,r.jsxs)(s.default,{children:[(0,r.jsxs)("title",{children:[t," - Abhishek Kuntare "]}),(0,r.jsx)("meta",{name:"twitter:title",content:t}),(0,r.jsx)("meta",{property:"og:title",content:t})]}),e,(0,r.jsx)(c.Pg,{})]})})}},3562:function(n,e,t){"use strict";function r(){var n,e,t=(n=["\n  text-align: justify;\n  text-indent: 1em;\n"],e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}})));return r=function(){return t},t}var i=t(5934).Z.p(r());e.Z=i},3922:function(n,e,t){"use strict";t.d(e,{Dx:function(){return a},WZ:function(){return o},h_:function(){return u}});var r=t(5893),i=t(1664),s=t(8527),c=t(4651),l=t(9876),a=function(n){var e=n.children;return(0,r.jsxs)(s.xu,{children:[(0,r.jsx)(i.default,{href:"/works",children:(0,r.jsx)(s.rU,{children:"Works"})}),(0,r.jsxs)("span",{children:[" ",(0,r.jsx)(l.XC,{})," "]}),(0,r.jsx)(s.X6,{display:"inline-block",as:"h3",fontSize:20,mb:4,children:e})]})},o=function(n){var e=n.src,t=n.alt;return(0,r.jsx)(c.Ee,{borderRadius:"lg",w:"full",src:e,alt:t,mb:4})},u=function(n){var e=n.children;return(0,r.jsx)(s.Ct,{colorScheme:"green",mr:2,children:e})}},833:function(n,e,t){"use strict";t.r(e);var r=t(5893),i=t(8527),s=t(2857),c=t(3922),l=t(3562);e.default=function(){return(0,r.jsx)(s.Z,{title:"TextUtilis",children:(0,r.jsxs)(i.W2,{children:[(0,r.jsxs)(c.Dx,{children:["TextUtilis ",(0,r.jsx)(i.Ct,{children:"2021"})]}),(0,r.jsxs)(l.Z,{children:[" ","TextUtils can help you generate text or numbers. \xb7 Number Formatting ,uppercase lowecase extra space del and copy to clipboard."]}),(0,r.jsxs)(i.aV,{ml:4,my:4,children:[(0,r.jsxs)(i.HC,{children:[(0,r.jsxs)(i.HC,{children:[(0,r.jsx)(c.h_,{children:"WEBSITE"}),(0,r.jsx)(i.rU,{href:"https://abhishekkuntare.github.io/text-utilis/#",children:"https://abhishekkuntare.github.io/text-utilis/#"})]}),(0,r.jsx)(c.h_,{children:"Platform"}),(0,r.jsx)("span",{children:"Windows"})]}),(0,r.jsxs)(i.HC,{children:[(0,r.jsx)(c.h_,{children:"Stack"}),(0,r.jsx)("span",{children:"HTML,CSS,JS"})]})]}),(0,r.jsx)(c.WZ,{src:"/images/works/textutilis.png",alt:"textutilis"})]})})}}},function(n){n.O(0,[675,774,888,179],(function(){return e=4387,n(n.s=e);var e}));var e=n.O();_N_E=e}]);