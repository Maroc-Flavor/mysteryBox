(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{9099:function(e,t,r){Promise.resolve().then(r.t.bind(r,3994,23)),Promise.resolve().then(r.bind(r,9167)),Promise.resolve().then(r.t.bind(r,2489,23)),Promise.resolve().then(r.t.bind(r,833,23)),Promise.resolve().then(r.bind(r,2943)),Promise.resolve().then(r.bind(r,2075)),Promise.resolve().then(r.bind(r,688)),Promise.resolve().then(r.bind(r,4027)),Promise.resolve().then(r.bind(r,5434))},2943:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return u}});var n=r(7437),o=r(1396),s=r.n(o),a=r(2265);let i={path:"/",secure:!0,sameSite:"Lax"},l={setCookie(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n={...i,...r},o="".concat(encodeURIComponent(e),"=").concat(encodeURIComponent(t));n.path&&(o+="; path=".concat(n.path)),n.expires&&(o+="; expires=".concat(n.expires.toUTCString())),n.maxAge&&(o+="; max-age=".concat(n.maxAge)),n.domain&&(o+="; domain=".concat(n.domain)),n.secure&&(o+="; secure"),n.sameSite&&(o+="; samesite=".concat(n.sameSite)),document.cookie=o},getCookie(e){let t=document.cookie.split(";");for(let r of t){let[t,n]=r.split("=").map(e=>e.trim());if(t===encodeURIComponent(e))return decodeURIComponent(n)}return null},deleteCookie(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r={...i,...t};this.setCookie(e,"",{...r,expires:new Date(0)})},setAnalyticsCookies(e){e?this.setCookie("analytics_enabled","true",{maxAge:31536e3,sameSite:"Lax"}):this.deleteCookie("analytics_enabled")},setMarketingCookies(e){e?this.setCookie("marketing_enabled","true",{maxAge:31536e3,sameSite:"Lax"}):this.deleteCookie("marketing_enabled")},setNecessaryCookies(){this.setCookie("necessary_cookies","true",{maxAge:31536e3,sameSite:"Lax"})}};var c=r(345);let d={necessary:!0,analytics:!1,marketing:!1};function u(){let[e,t]=(0,a.useState)(!1),[r,o]=(0,a.useState)(d);(0,a.useEffect)(()=>{let e=l.getCookie("necessary_cookies"),r=l.getCookie("analytics_enabled"),n=l.getCookie("marketing_enabled");e?o({necessary:!0,analytics:"true"===r,marketing:"true"===n}):(t(!0),l.setNecessaryCookies())},[]);let i=e=>{u(e)},u=e=>{l.setNecessaryCookies(),l.setAnalyticsCookies(e.analytics),l.setMarketingCookies(e.marketing),o(e),t(!1)};return e?(0,n.jsx)("div",{className:"fixed bottom-0 left-0 right-0 bg-background border-t border-border shadow-lg z-50 p-6",children:(0,n.jsxs)("div",{className:"max-w-6xl mx-auto",children:[(0,n.jsx)("h3",{className:"text-xl text-foreground font-bold mb-4",children:"Cookie-Einstellungen"}),(0,n.jsxs)("p",{className:"mb-4 text-muted-foreground",children:["Wir verwenden Cookies, um Ihnen die bestm\xf6gliche Erfahrung auf unserer Website zu bieten. Weitere Informationen finden Sie in unserer"," ",(0,n.jsx)(s(),{href:"/datenschutz",className:"text-primary hover:underline",children:"Datenschutzerkl\xe4rung"}),"."]}),(0,n.jsx)("div",{className:"space-y-4 text-foreground mb-6",children:[{id:"necessary",label:"Notwendige Cookies (erforderlich)",disabled:!0},{id:"analytics",label:"Analyse-Cookies"},{id:"marketing",label:"Marketing-Cookies"}].map(e=>{let{id:t,label:s,disabled:a}=e;return(0,n.jsxs)("div",{className:"flex items-center",children:[(0,n.jsx)("input",{type:"checkbox",checked:r[t],disabled:a,onChange:e=>o({...r,[t]:e.target.checked}),className:(0,c.cn)("mr-2 h-4 w-4 rounded border-border text-primary","focus:ring-primary disabled:opacity-50")}),(0,n.jsx)("label",{className:"text-sm",children:s})]},t)})}),(0,n.jsxs)("div",{className:"flex gap-4",children:[(0,n.jsx)("button",{onClick:()=>{u({necessary:!0,analytics:!0,marketing:!0})},className:"bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors",children:"Alle akzeptieren"}),(0,n.jsx)("button",{onClick:()=>i(r),className:"bg-secondary text-secondary-foreground px-4 py-2 rounded-md hover:bg-secondary/90 transition-colors",children:"Auswahl speichern"}),(0,n.jsx)("button",{onClick:()=>{u(d)},className:"bg-muted text-muted-foreground px-4 py-2 rounded-md hover:bg-muted/90 transition-colors",children:"Nur notwendige akzeptieren"})]})]})}):null}},2075:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return p}});var n=r(7437),o=r(1396),s=r.n(o),a=r(6691),i=r.n(a),l=r(2265),c=r(4027),d=r(345);function u(){let{totalItems:e,setIsCartOpen:t}=(0,c.useCart)();return(0,n.jsx)("button",{onClick:()=>t(!0),className:"relative p-2 rounded-full hover:bg-accent transition-all duration-300 group","aria-label":"Warenkorb \xf6ffnen",children:(0,n.jsxs)("div",{className:"relative",children:[(0,n.jsx)("svg",{className:"w-5 h-5 text-foreground transition-colors group-hover:text-primary",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"})}),e>0&&(0,n.jsx)("span",{className:(0,d.cn)("absolute -top-2 -right-2 bg-primary text-primary-foreground","text-xs w-4 h-4 rounded-full flex items-center justify-center","shadow-md transform transition-transform group-hover:scale-110"),children:e})]})})}var m=r(4135),h=r(3088),x=r(1350);function g(){let{theme:e,setTheme:t}=(0,x.F)();return(0,n.jsxs)("button",{onClick:()=>t("dark"===e?"light":"dark"),className:"inline-flex items-center justify-center rounded-md p-2.5 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",children:[(0,n.jsx)(m.Z,{className:"h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"}),(0,n.jsx)(h.Z,{className:"absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"}),(0,n.jsx)("span",{className:"sr-only",children:"Toggle theme"})]})}function p(){let[e,t]=(0,l.useState)(!1),[r,o]=(0,l.useState)(!1);return(0,l.useEffect)(()=>{let e=()=>{o(window.scrollY>10)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),(0,n.jsxs)("nav",{className:(0,d.cn)("fixed w-full top-0 z-50 transition-all duration-500",r?"bg-background/90 backdrop-blur-lg shadow-lg":"bg-transparent"),children:[(0,n.jsx)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:(0,n.jsxs)("div",{className:"flex items-center justify-between h-16",children:[(0,n.jsx)("div",{className:"flex-shrink-0",children:(0,n.jsx)(s(),{href:"/",className:"relative flex items-center",children:(0,n.jsx)("div",{className:"relative w-[60px] h-[24px] md:w-[100px] md:h-[40px] bg-background/80 rounded-full p-1",children:(0,n.jsx)(i(),{src:"/mysteryBox/images/logo.webp",alt:"Wundert\xfcten.de",fill:!0,className:"object-contain rounded-full transition-all duration-300 hover:opacity-90",priority:!0,sizes:"(max-width: 768px) 60px, 100px",quality:85,style:{objectFit:"contain"}})})})}),(0,n.jsxs)("div",{className:"hidden lg:flex lg:items-center lg:space-x-8",children:[(0,n.jsx)(s(),{href:"/",className:"text-foreground hover:text-primary font-medium transition-colors px-3 py-2 rounded-lg hover:bg-accent",children:"Home"}),(0,n.jsx)(s(),{href:"/uber-uns",className:"text-gray-800 hover:text-indigo-600 font-medium transition-colors px-3 py-2 rounded-lg hover:bg-gray-100/50",children:"\xdcber uns"}),(0,n.jsx)(s(),{href:"/shop",className:"text-gray-800 hover:text-indigo-600 font-medium transition-colors px-3 py-2 rounded-lg hover:bg-gray-100/50",children:"Shop"}),(0,n.jsx)(s(),{href:"/kontakt",className:"text-gray-800 hover:text-indigo-600 font-medium transition-colors px-3 py-2 rounded-lg hover:bg-gray-100/50",children:"Kontakt"})]}),(0,n.jsxs)("div",{className:"flex items-center gap-4",children:[(0,n.jsx)(g,{}),(0,n.jsx)("button",{className:"lg:hidden p-1.5 rounded-lg hover:bg-accent transition-colors",onClick:()=>t(!e),"aria-label":e?"Close menu":"Open menu",children:(0,n.jsx)("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:e?"M6 18L18 6M6 6l12 12":"M4 6h16M4 12h16M4 18h16"})})}),(0,n.jsx)(s(),{href:"/shop",className:"hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium rounded-full text-primary-foreground bg-primary hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg",children:"Jetzt entdecken"}),(0,n.jsx)(u,{})]})]})}),(0,n.jsx)("div",{className:(0,d.cn)("lg:hidden absolute w-full transition-all duration-300",e?"opacity-100 translate-y-0":"opacity-0 -translate-y-2 pointer-events-none"),children:(0,n.jsxs)("div",{className:"px-2 pt-2 pb-3 space-y-1 bg-background/90 backdrop-blur-lg border-t border-border",children:[(0,n.jsx)(s(),{href:"/",className:"block px-3 py-2 rounded-lg text-gray-800 hover:text-indigo-600 hover:bg-gray-100/50 font-medium transition-colors",onClick:()=>t(!1),children:"Home"}),(0,n.jsx)(s(),{href:"/uber-uns",className:"block px-3 py-2 rounded-lg text-gray-800 hover:text-indigo-600 hover:bg-gray-100/50 font-medium transition-colors",onClick:()=>t(!1),children:"\xdcber uns"}),(0,n.jsx)(s(),{href:"/shop",className:"block px-3 py-2 rounded-lg text-gray-800 hover:text-indigo-600 hover:bg-gray-100/50 font-medium transition-colors",onClick:()=>t(!1),children:"Shop"}),(0,n.jsx)(s(),{href:"/kontakt",className:"block px-3 py-2 rounded-lg text-gray-800 hover:text-indigo-600 hover:bg-gray-100/50 font-medium transition-colors",onClick:()=>t(!1),children:"Kontakt"})]})})]})}},688:function(e,t,r){"use strict";r.r(t),r.d(t,{ThemeProvider:function(){return s}});var n=r(7437);r(2265);var o=r(1350);function s(e){let{children:t,...r}=e;return(0,n.jsx)(o.f,{...r,children:t})}},4027:function(e,t,r){"use strict";r.r(t),r.d(t,{CartProvider:function(){return a},useCart:function(){return i}});var n=r(7437),o=r(2265);let s=(0,o.createContext)(void 0);function a(e){let{children:t}=e,[r,a]=(0,o.useState)(()=>{{let e=localStorage.getItem("cart");return e?JSON.parse(e):[]}}),[i,l]=(0,o.useState)(0),[c,d]=(0,o.useState)(0),[u,m]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{let e=r.reduce((e,t)=>e+t.quantity,0),t=r.reduce((e,t)=>e+t.price*t.quantity,0);l(e),d(t),localStorage.setItem("cart",JSON.stringify(r))},[r]),(0,n.jsx)(s.Provider,{value:{items:r,addItem:e=>{a(t=>{let r=t.find(t=>t.id===e.id);return r?t.map(t=>t.id===e.id?{...t,quantity:t.quantity+1}:t):[...t,{...e,quantity:1}]})},removeItem:e=>{a(t=>t.filter(t=>t.id!==e))},updateQuantity:(e,t)=>{t<1||a(r=>r.map(r=>r.id===e?{...r,quantity:t}:r))},clearCart:()=>{a([])},totalItems:i,totalPrice:c,isCartOpen:u,setIsCartOpen:m},children:t})}function i(){let e=(0,o.useContext)(s);if(void 0===e)throw Error("useCart must be used within a CartProvider");return e}},345:function(e,t,r){"use strict";r.d(t,{cn:function(){return s}});var n=r(7042),o=r(4769);function s(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,o.m6)((0,n.W)(t))}},5434:function(e,t,r){"use strict";r.r(t),r.d(t,{PayPalProvider:function(){return a}});var n=r(7437),o=r(2860);let s={clientId:"AT-sESrHwmv3BKCDYUUxmPdxA8JnKt-xNh-3kNsPiBgcRJr44IYEfnJQUJ1TwvV4m-H3GQUhceW4SXeS",currency:"EUR",intent:"capture",enableFunding:["paypal"],disableFunding:["card","sofort","sepa","venmo","paylater"],dataNamespace:"paypal_sdk",components:"buttons"};function a(e){let{children:t}=e;return(0,n.jsx)(o.Vv,{options:s,children:t})}},2489:function(){}},function(e){e.O(0,[551,860,858,971,472,744],function(){return e(e.s=9099)}),_N_E=e.O()}]);