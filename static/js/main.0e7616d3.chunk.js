(this.webpackJsonpleger=this.webpackJsonpleger||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var o=n(1),i=n.n(o),c=n(4),r=n.n(c),a=(n(9),n(2)),l=(n(10),function(){try{var e=localStorage.getItem("items");return e?JSON.parse(e):[]}catch(t){return[]}}),s=n(0),d=[{borderColor:"#CDE9FF",backgroundColor:"#E1F1FF",name:"AQUA"},{borderColor:"#AFEDA4",backgroundColor:"#E5F9E0",name:"GREEN"},{borderColor:"#FEF2AD",backgroundColor:"#FFF7E2",name:"YELLOW"},{borderColor:"#FECCE5",backgroundColor:"#FFE5F2",name:"PINK"},{borderColor:"#E0B4FF",backgroundColor:"#F2E6FE",name:"LAVENDER"},{borderColor:"#CCCCCC",backgroundColor:"#F9F9F9",name:"GRAY"}],u=function(){var e=Object(o.useState)("n"),t=Object(a.a)(e,2),n=t[0],i=t[1],c=Object(o.useState)("new"),r=Object(a.a)(c,2),u=r[0],j=r[1],b=Object(o.useState)(function(){try{var e=localStorage.getItem("initialMoney");return e?Number.parseFloat(e):null}catch(t){return console.log(t),null}}()),h=Object(a.a)(b,2),f=h[0],g=h[1],v=Object(o.useState)("n"),m=Object(a.a)(v,2),O=m[0],p=m[1],x=Object(o.useState)(),C=Object(a.a)(x,2),S=C[0],F=C[1],w=Object(o.useState)(l()),E=Object(a.a)(w,2),k=E[0],y=E[1],N=Object(o.useState)(null),A=Object(a.a)(N,2),I=A[0],B=A[1],D=function(){y(l())};Object(o.useEffect)((function(){f&&function(e){try{localStorage.setItem("initialMoney",e.toString())}catch(t){console.log(t)}}(f);var e=0;k.forEach((function(t){e+=t.cost})),f&&B(f-e)}),[f,k]);var W=Object(o.useState)(""),L=Object(a.a)(W,2),J=L[0],P=L[1],M=Object(o.useState)(""),R=Object(a.a)(M,2),T=R[0],U=R[1];return Object(s.jsxs)("div",{className:"App",children:["y"===n&&Object(s.jsxs)("div",{className:"valueInput",children:[Object(s.jsxs)("div",{className:"itemInfo",children:[Object(s.jsx)("input",{type:"text",id:"itemName",onChange:function(e){P(e.target.value)},placeholder:"item",value:J,autoComplete:"off"}),Object(s.jsxs)("div",{className:"itemCostDiv",children:[Object(s.jsx)("div",{id:"currency",children:"\u20b9"}),Object(s.jsx)("input",{type:"number",id:"itemCost",onChange:function(e){U(e.target.value)},value:T,placeholder:"cost",autoComplete:"off"})]})]}),Object(s.jsxs)("div",{className:"valueInputButtons",children:[Object(s.jsx)("div",{id:"saveButton",onClick:function(){var e={name:J,cost:Number.parseFloat(T),date:new Date,color:Math.floor(7*Math.random())};J&&T&&function(e){try{var t,n=localStorage.getItem("items");if(n){var o=(t=JSON.parse(n)).length;e.id=o,t[o]=e,localStorage.setItem("items",JSON.stringify(t))}else e.id=0,localStorage.setItem("items",JSON.stringify([e]))}catch(i){console.log(i)}}(e),i("n"),D()},children:"Save"}),"edit"===u&&Object(s.jsx)("div",{id:"deleteButton",onClick:function(){i("n")},children:"Delete"})]})]}),Object(s.jsxs)("main",{children:[Object(s.jsx)("header",{id:"header",children:Object(s.jsx)("p",{children:"LEGER"})}),Object(s.jsxs)("div",{id:"holder",children:[!f&&"n"===O&&Object(s.jsx)("div",{id:"initialAmount",children:Object(s.jsx)("p",{id:"opener",onClick:function(){return p("n"===O?"y":"n")},children:"press to enter initial balance"})}),"y"===O&&Object(s.jsxs)("div",{id:"initialAmount",children:[Object(s.jsxs)("div",{className:"initialAmountBox",children:[Object(s.jsx)("p",{children:"\u20b9"}),Object(s.jsx)("input",{type:"number",id:"amountElement",placeholder:"Initial amount",defaultValue:null===f||void 0===f?void 0:f.toString(),value:S,onChange:function(e){return F(Number.parseFloat(e.target.value.toString()))},autoFocus:!0,autoComplete:"off"})]}),Object(s.jsx)("div",{id:"saveButton1",onClick:function(){S&&g(S),p("n"),D()},children:"Save"})]}),f&&"n"===O&&Object(s.jsx)("div",{id:"initialAmount",children:Object(s.jsxs)("div",{id:"opener",onClick:function(){return p("n"===O?"y":"n")},children:[Object(s.jsx)("p",{children:"Initial Amount"}),Object(s.jsxs)("p",{style:{margin:"0%",fontSize:"27px"},children:["\xa0\u20b9",f]})]})}),k.map((function(e){return Object(s.jsxs)("div",{className:"thing",style:d[e.color],children:[Object(s.jsxs)("p",{className:"nameAndPrice",children:[e.name," ",Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),"\u20b9",e.cost]}),Object(s.jsx)("p",{className:"date",style:{fontSize:"10px"},children:new Date(e.date).toDateString()})]},e.id)}))]}),Object(s.jsx)("div",{className:"addButton",id:"addButton",onClick:function(){i("n"===n?"y":"n"),j("new")},children:"+"}),Object(s.jsxs)("footer",{id:"footer",children:["remaining balance \xa0",Object(s.jsxs)("p",{id:"currentBalance",children:["\u20b9",I]})]})]})]})},j=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function b(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,o=t.getFID,i=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),o(e),i(e),c(e),r(e)}))};r.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(u,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/leger",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/leger","/service-worker.js");j?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):b(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):b(t,e)}))}}(),h()},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.0e7616d3.chunk.js.map