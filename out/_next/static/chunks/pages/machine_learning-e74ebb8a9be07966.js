(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[807],{4651:function(n,e,r){"use strict";r.d(e,{Ee:function(){return f},d9:function(){return l}});var t=r(6052),i=r(5031),s=r(7294),c=r(7375);function a(){return(a=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}return n}).apply(this,arguments)}function o(n,e){if(null==n)return{};var r,t,i={},s=Object.keys(n);for(t=0;t<s.length;t++)r=s[t],e.indexOf(r)>=0||(i[r]=n[r]);return i}function l(n){var e=n.loading,r=n.src,t=n.srcSet,i=n.onLoad,a=n.onError,o=n.crossOrigin,l=n.sizes,u=n.ignoreFallback,d=(0,s.useState)("pending"),h=d[0],f=d[1];(0,s.useEffect)((function(){f(r?"loading":"pending")}),[r]);var x=(0,s.useRef)(),m=(0,s.useCallback)((function(){if(r){j();var n=new Image;n.src=r,o&&(n.crossOrigin=o),t&&(n.srcset=t),l&&(n.sizes=l),e&&(n.loading=e),n.onload=function(n){j(),f("loaded"),null==i||i(n)},n.onerror=function(n){j(),f("failed"),null==a||a(n)},x.current=n}}),[r,o,t,l,i,a,e]),j=function(){x.current&&(x.current.onload=null,x.current.onerror=null,x.current=null)};return(0,c.Gw)((function(){if(!u)return"loading"===h&&m(),function(){j()}}),[h,m,u]),u?"loaded":h}var u=["htmlWidth","htmlHeight","alt"],d=["fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin"],h=s.forwardRef((function(n,e){var r=n.htmlWidth,t=n.htmlHeight,i=n.alt,c=o(n,u);return s.createElement("img",a({width:r,height:t,ref:e,alt:i},c))})),f=(0,t.Gp)((function(n,e){var r=n.fallbackSrc,c=n.fallback,u=n.src,f=n.srcSet,x=n.align,m=n.fit,j=n.loading,g=n.ignoreFallback,p=n.crossOrigin,b=o(n,d),k=null!=j||g||void 0===r&&void 0===c,v=l(a({},n,{ignoreFallback:k})),w=a({ref:e,objectFit:m,objectPosition:x},k?b:(0,i.CE)(b,["onError","onLoad"]));return"loaded"!==v?c||s.createElement(t.m$.img,a({as:h,className:"chakra-image__placeholder",src:r},w)):s.createElement(t.m$.img,a({as:h,src:u,srcSet:f,crossOrigin:p,loading:j,className:"chakra-image"},w))}));i.Ts&&(f.displayName="Image")},4085:function(n,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/machine_learning",function(){return r(301)}])},603:function(n,e,r){"use strict";r.d(e,{Et:function(){return o},Pg:function(){return l}});var t=r(5893),i=r(1664),s=r(5675),c=r(8527),a=r(917),o=function(n){var e=n.children,r=n.id,a=n.title,o=n.thumbnail;return(0,t.jsx)(c.xu,{w:"100%",textAlign:"center",children:(0,t.jsx)(i.default,{href:"/works/".concat(r),children:(0,t.jsxs)(c.fG,{cursor:"pointer",children:[(0,t.jsx)(s.default,{src:o,alt:a,className:"grid-item-thumbnail",placeholder:"blur"}),(0,t.jsx)(c.AB,{href:"/works/".concat(r),children:(0,t.jsx)(c.xv,{mt:2,fontSize:20,children:a})}),(0,t.jsx)(c.xv,{fontSize:14,children:e})]})})})},l=function(){return(0,t.jsx)(a.xB,{styles:"\n      .grid-item-thumbnail {\n        border-radius: 12px;\n      }\n    "})}},2857:function(n,e,r){"use strict";var t=r(5893),i=r(9235),s=r(9008),c=r(603),a={hidden:{opacity:0,x:0,y:20},enter:{opacity:1,x:0,y:0},exit:{opacity:0,x:-0,y:20}};e.Z=function(n){var e=n.children,r=n.title;return(0,t.jsx)(i.E.article,{initial:"hidden",animate:"enter",exit:"exit",variants:a,transition:{duration:.4,type:"easeInOut"},style:{position:"relative"},children:(0,t.jsxs)(t.Fragment,{children:[r&&(0,t.jsxs)(s.default,{children:[(0,t.jsxs)("title",{children:[r," - Abhishek Kuntare "]}),(0,t.jsx)("meta",{name:"twitter:title",content:r}),(0,t.jsx)("meta",{property:"og:title",content:r})]}),e,(0,t.jsx)(c.Pg,{})]})})}},3562:function(n,e,r){"use strict";function t(){var n,e,r=(n=["\n  text-align: justify;\n  text-indent: 1em;\n"],e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}})));return t=function(){return r},r}var i=r(5934).Z.p(t());e.Z=i},3922:function(n,e,r){"use strict";r.d(e,{Dx:function(){return o},WZ:function(){return l},h_:function(){return u}});var t=r(5893),i=r(1664),s=r(8527),c=r(4651),a=r(9876),o=function(n){var e=n.children;return(0,t.jsxs)(s.xu,{children:[(0,t.jsx)(i.default,{href:"/works",children:(0,t.jsx)(s.rU,{children:"Works"})}),(0,t.jsxs)("span",{children:[" ",(0,t.jsx)(a.XC,{})," "]}),(0,t.jsx)(s.X6,{display:"inline-block",as:"h3",fontSize:20,mb:4,children:e})]})},l=function(n){var e=n.src,r=n.alt;return(0,t.jsx)(c.Ee,{borderRadius:"lg",w:"full",src:e,alt:r,mb:4})},u=function(n){var e=n.children;return(0,t.jsx)(s.Ct,{colorScheme:"green",mr:2,children:e})}},301:function(n,e,r){"use strict";r.r(e),r.d(e,{default:function(){return u}});var t=r(5893),i=(r(7294),r(8527)),s=r(9876),c=r(3922),a=r(3562),o=r(2857),l=JSON.parse('[{"id":1,"name":"The Last Book","desc":"The last book is a book recommendation web app. if you confused about what i read? so this system is recommended you for reading books .","img":"/images/machine/img1.png","web_link":"https://books-earth.herokuapp.com/","stack":"Flask, Numpy,Pandas,DataSet,Anaconda,Jupyter Notebook, basic html ,css,bootstrap,","host":"Heroku"}]'),u=function(){return(0,t.jsx)("div",{children:l.map((function(n){return(0,t.jsx)("div",{children:(0,t.jsx)(o.Z,{title:"lastBook",children:(0,t.jsxs)(i.W2,{children:[(0,t.jsxs)(c.Dx,{children:[n.name,(0,t.jsx)(i.Ct,{children:"-2022-"})]}),(0,t.jsx)(a.Z,{children:n.desc}),(0,t.jsxs)(i.aV,{ml:4,my:4,children:[(0,t.jsxs)(i.HC,{children:[(0,t.jsx)(c.h_,{children:"Website"}),(0,t.jsxs)(i.rU,{href:n.web_link,children:[n.web_link,(0,t.jsx)(s.h0,{mx:"2px"})]})]}),(0,t.jsxs)(i.HC,{children:[(0,t.jsx)(c.h_,{children:"Platform"}),(0,t.jsx)("span",{children:"Windows/macOS/Linux/iOS/Android"})]}),(0,t.jsxs)(i.HC,{children:[(0,t.jsx)(c.h_,{children:"Stack"}),(0,t.jsx)("span",{children:n.stack})]}),(0,t.jsxs)(i.HC,{children:[(0,t.jsx)(c.h_,{children:"HOST"}),n.host]})]}),(0,t.jsx)(c.WZ,{src:n.img,alt:"Inkdrop"})]})})},n.id)}))})}}},function(n){n.O(0,[675,774,888,179],(function(){return e=4085,n(n.s=e);var e}));var e=n.O();_N_E=e}]);