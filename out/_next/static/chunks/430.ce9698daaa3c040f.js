"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[430],{6430:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});var a=n(5893),i=n(7294),o=n(2212),s=n(9365),r=n(1217);var c=n(1026);var u=function(){var e=(0,i.useRef)(),t=(0,i.useState)(!0),n=t[0],u=t[1],d=(0,i.useState)(),h=d[0],l=d[1],v=(0,i.useState)(),w=(v[0],v[1]),f=(0,i.useState)(new o.Pa4(-.5,1.2,0))[0],S=(0,i.useState)(new o.Pa4(20*Math.sin(.2*Math.PI),10,20*Math.cos(.2*Math.PI)))[0],p=(0,i.useState)(new o.xsS)[0],M=(0,i.useState)(),m=(M[0],M[1]),E=(0,i.useCallback)((function(){var t=e.current;if(t&&h){var n=t.clientWidth,a=t.clientHeight;h.setSize(n,a)}}),[h]);return(0,i.useEffect)((function(){var t=e.current;if(t&&!h){var n=t.clientWidth,a=t.clientHeight,i=new o.CP7({antialias:!0,alpha:!0});i.setPixelRatio(window.devicePixelRatio),i.setSize(n,a),i.outputEncoding=o.knz,t.appendChild(i.domElement),l(i);var c=.005*a+4.8,d=new o.iKG(-c,c,c,-c,.01,5e4);d.position.copy(S),d.lookAt(f),w(d);var v=new o.Mig(13421772,1);p.add(v);var M=new s.z(d,i.domElement);M.autoRotate=!0,M.target=f,m(M),function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{receiveShadow:!0,castShadow:!0},a=n.receiveShadow,i=n.castShadow;return new Promise((function(n,o){(new r.E).load(t,(function(t){var o=t.scene;o.name="dog",o.position.y=0,o.position.x=0,o.receiveShadow=a,o.castShadow=i,e.add(o),o.traverse((function(e){e.isMesh&&(e.castShadow=i,e.receiveShadow=a)})),n(o)}),void 0,(function(e){o(e)}))}))}(p,"/PC.glb",{receiveShadow:!1,castShadow:!1}).then((function(){g(),u(!1)}));var E=null,P=0,g=function(){if(E=requestAnimationFrame(g),(P=P<=100?P+1:P)<=100){var e=S,t=20*(n=P/120,-Math.sqrt(1-Math.pow(n-1,4))*Math.PI);d.position.y=10,d.position.x=e.x*Math.cos(t)+e.z*Math.sin(t),d.position.z=e.z*Math.cos(t)-e.x*Math.sin(t),d.lookAt(f)}else M.update();var n;i.render(p,d)};return function(){console.log("unmount"),cancelAnimationFrame(E),i.dispose()}}}),[]),(0,i.useEffect)((function(){return window.addEventListener("resize",E,!1),function(){window.removeEventListener("resize",E,!1)}}),[h,E]),(0,a.jsx)(c.Oi,{ref:e,children:n&&(0,a.jsx)(c.j_,{})})}}}]);