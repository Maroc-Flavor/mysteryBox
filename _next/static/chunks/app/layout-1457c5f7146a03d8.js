(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{5517:function(e,t,n){Promise.resolve().then(n.bind(n,9167)),Promise.resolve().then(n.t.bind(n,2489,23)),Promise.resolve().then(n.t.bind(n,7774,23)),Promise.resolve().then(n.t.bind(n,9079,23)),Promise.resolve().then(n.bind(n,2943)),Promise.resolve().then(n.bind(n,4027)),Promise.resolve().then(n.bind(n,5434))},9167:function(e,t,n){"use strict";function a(e){let{children:t}=e;return t}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"NoSSR",{enumerable:!0,get:function(){return a}}),n(1283)},2943:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var a=n(7437),s=n(1396),i=n.n(s),r=n(2265);let o={path:"/",secure:!0,sameSite:"Lax"},c={setCookie(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a={...o,...n},s="".concat(encodeURIComponent(e),"=").concat(encodeURIComponent(t));a.path&&(s+="; path=".concat(a.path)),a.expires&&(s+="; expires=".concat(a.expires.toUTCString())),a.maxAge&&(s+="; max-age=".concat(a.maxAge)),a.domain&&(s+="; domain=".concat(a.domain)),a.secure&&(s+="; secure"),a.sameSite&&(s+="; samesite=".concat(a.sameSite)),document.cookie=s},getCookie(e){let t=document.cookie.split(";");for(let n of t){let[t,a]=n.split("=").map(e=>e.trim());if(t===encodeURIComponent(e))return decodeURIComponent(a)}return null},deleteCookie(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n={...o,...t};this.setCookie(e,"",{...n,expires:new Date(0)})},setAnalyticsCookies(e){e?this.setCookie("analytics_enabled","true",{maxAge:31536e3,sameSite:"Lax"}):this.deleteCookie("analytics_enabled")},setMarketingCookies(e){e?this.setCookie("marketing_enabled","true",{maxAge:31536e3,sameSite:"Lax"}):this.deleteCookie("marketing_enabled")},setNecessaryCookies(){this.setCookie("necessary_cookies","true",{maxAge:31536e3,sameSite:"Lax"})}},l={necessary:!0,analytics:!1,marketing:!1};function u(){let[e,t]=(0,r.useState)(!1),[n,s]=(0,r.useState)(l);(0,r.useEffect)(()=>{let e=c.getCookie("necessary_cookies"),n=c.getCookie("analytics_enabled"),a=c.getCookie("marketing_enabled");e?s({necessary:!0,analytics:"true"===n,marketing:"true"===a}):(t(!0),c.setNecessaryCookies())},[]);let o=e=>{u(e)},u=e=>{c.setNecessaryCookies(),c.setAnalyticsCookies(e.analytics),c.setMarketingCookies(e.marketing),s(e),t(!1)};return e?(0,a.jsx)("div",{className:"fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50 p-6",children:(0,a.jsxs)("div",{className:"max-w-6xl mx-auto",children:[(0,a.jsx)("h3",{className:"text-xl text-gray-800 font-bold mb-4",children:"Cookie-Einstellungen"}),(0,a.jsxs)("p",{className:"mb-4 text-gray-700",children:["Wir verwenden Cookies, um Ihnen die bestm\xf6gliche Erfahrung auf unserer Website zu bieten. Weitere Informationen finden Sie in unserer ",(0,a.jsx)(i(),{href:"/datenschutz",className:"text-blue-600 hover:underline",children:"Datenschutzerkl\xe4rung"}),"."]}),(0,a.jsxs)("div",{className:"space-y-4 text-gray-600 mb-6",children:[(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)("input",{type:"checkbox",checked:n.necessary,disabled:!0,className:"mr-2"}),(0,a.jsx)("label",{children:"Notwendige Cookies (erforderlich)"})]}),(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)("input",{type:"checkbox",checked:n.analytics,onChange:e=>s({...n,analytics:e.target.checked}),className:"mr-2"}),(0,a.jsx)("label",{children:"Analyse-Cookies"})]}),(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)("input",{type:"checkbox",checked:n.marketing,onChange:e=>s({...n,marketing:e.target.checked}),className:"mr-2"}),(0,a.jsx)("label",{children:"Marketing-Cookies"})]})]}),(0,a.jsxs)("div",{className:"flex gap-4",children:[(0,a.jsx)("button",{onClick:()=>{u({necessary:!0,analytics:!0,marketing:!0})},className:"bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700",children:"Alle akzeptieren"}),(0,a.jsx)("button",{onClick:()=>o(n),className:"bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700",children:"Auswahl speichern"}),(0,a.jsx)("button",{onClick:()=>{u(l)},className:"bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700",children:"Nur notwendige akzeptieren"})]})]})}):null}},4027:function(e,t,n){"use strict";n.r(t),n.d(t,{CartProvider:function(){return r},useCart:function(){return o}});var a=n(7437),s=n(2265);let i=(0,s.createContext)(void 0);function r(e){let{children:t}=e,[n,r]=(0,s.useState)(()=>{{let e=localStorage.getItem("cart");return e?JSON.parse(e):[]}}),[o,c]=(0,s.useState)(0),[l,u]=(0,s.useState)(0),[d,m]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{let e=n.reduce((e,t)=>e+t.quantity,0),t=n.reduce((e,t)=>e+t.price*t.quantity,0);c(e),u(t),localStorage.setItem("cart",JSON.stringify(n))},[n]),(0,a.jsx)(i.Provider,{value:{items:n,addItem:e=>{r(t=>{let n=t.find(t=>t.id===e.id);return n?t.map(t=>t.id===e.id?{...t,quantity:t.quantity+1}:t):[...t,{...e,quantity:1}]})},removeItem:e=>{r(t=>t.filter(t=>t.id!==e))},updateQuantity:(e,t)=>{t<1||r(n=>n.map(n=>n.id===e?{...n,quantity:t}:n))},clearCart:()=>{r([])},totalItems:o,totalPrice:l,isCartOpen:d,setIsCartOpen:m},children:t})}function o(){let e=(0,s.useContext)(i);if(void 0===e)throw Error("useCart must be used within a CartProvider");return e}},5434:function(e,t,n){"use strict";n.r(t),n.d(t,{PayPalProvider:function(){return r}});var a=n(7437),s=n(2860);let i={clientId:"AT-sESrHwmv3BKCDYUUxmPdxA8JnKt-xNh-3kNsPiBgcRJr44IYEfnJQUJ1TwvV4m-H3GQUhceW4SXeS",currency:"EUR",intent:"capture",enableFunding:["paypal"],disableFunding:["card","sofort","sepa","venmo","paylater"],dataNamespace:"paypal_sdk",components:"buttons"};function r(e){let{children:t}=e;return(0,a.jsx)(s.Vv,{options:i,children:t})}},2489:function(){},7774:function(e){e.exports={style:{fontFamily:"'__Inter_84a673', '__Inter_Fallback_84a673'",fontStyle:"normal"},className:"__className_84a673",variable:"__variable_84a673"}},9079:function(e){e.exports={style:{fontFamily:"'__Roboto_Mono_8e5f6e', '__Roboto_Mono_Fallback_8e5f6e'",fontStyle:"normal"},className:"__className_8e5f6e",variable:"__variable_8e5f6e"}}},function(e){e.O(0,[176,860,971,472,744],function(){return e(e.s=5517)}),_N_E=e.O()}]);