(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[285],{968:function(e,s,r){Promise.resolve().then(r.bind(r,3768))},3768:function(e,s,r){"use strict";r.r(s),r.d(s,{default:function(){return b}});var a=r(7437),t=r(9738),n=r.n(t),i=r(4027),l=r(1181),o=r(2265),c=r(345),d=r(6691),m=r.n(d),u=r(4033),f=r(2860);function x(e){let{amount:s,orderData:r,onSuccess:t}=e,[n,i]=(0,o.useState)(null),[l,c]=(0,o.useState)(!1);return(0,a.jsxs)("div",{className:"space-y-4",children:[n&&(0,a.jsx)("div",{className:"p-4 bg-destructive/10 border border-destructive/20 rounded-lg text-destructive",children:n}),(0,a.jsx)(f.ch,{style:{layout:"vertical"},disabled:l,createOrder:(e,a)=>(i(null),c(!0),a.order.create({intent:"CAPTURE",purchase_units:[{amount:{value:s.toFixed(2),currency_code:"EUR"},shipping:{name:{full_name:"".concat(r.customerInfo.firstName," ").concat(r.customerInfo.lastName)},address:{address_line_1:r.customerInfo.address,admin_area_2:r.customerInfo.city,postal_code:r.customerInfo.postalCode,country_code:"Deutschland"===r.customerInfo.country?"DE":"\xd6sterreich"===r.customerInfo.country?"AT":"CH"}}}]})),onApprove:async(e,s)=>{try{if(s.order){let e=await s.order.capture();console.log("PayPal Transaktion erfolgreich",e),t()}}catch(e){i("Fehler bei der Zahlungsverarbeitung. Bitte versuchen Sie es erneut."),console.error("PayPal Fehler:",e)}finally{c(!1)}},onError:e=>{i("Ein Fehler ist aufgetreten. Bitte versuchen Sie es sp\xe4ter erneut."),console.error("PayPal Fehler:",e),c(!1)},onCancel:()=>{i("Zahlung wurde abgebrochen. Bitte versuchen Sie es erneut."),c(!1)}}),l&&(0,a.jsx)("div",{className:"text-center text-muted-foreground",children:"Bitte warten, Ihre Zahlung wird verarbeitet..."})]})}let h=[{id:"de",name:"Deutschland",code:"DE",basePrice:5.99,options:[{id:"dhl-standard",name:"DHL Standard",carrier:"DHL",description:"Standard Versand",estimatedDays:"2-3 Werktage",price:5.99},{id:"dhl-express",name:"DHL Express",carrier:"DHL",description:"Express Versand",estimatedDays:"1-2 Werktage",price:9.99},{id:"hermes",name:"Hermes",carrier:"Hermes",description:"Standard Versand",estimatedDays:"2-4 Werktage",price:4.99}]},{id:"at",name:"\xd6sterreich",code:"AT",basePrice:9.99,options:[{id:"dhl-at",name:"DHL Standard",carrier:"DHL",description:"Standard Versand",estimatedDays:"3-5 Werktage",price:9.99},{id:"dhl-at-express",name:"DHL Express",carrier:"DHL",description:"Express Versand",estimatedDays:"2-3 Werktage",price:14.99}]},{id:"ch",name:"Schweiz",code:"CH",basePrice:14.99,options:[{id:"dhl-ch",name:"DHL Standard",carrier:"DHL",description:"Standard Versand",estimatedDays:"4-6 Werktage",price:14.99},{id:"dhl-ch-express",name:"DHL Express",carrier:"DHL",description:"Express Versand",estimatedDays:"2-4 Werktage",price:19.99}]}],p=e=>{let{countryCode:s}=e,[r,t]=(0,o.useState)(!1);return r?(0,a.jsx)("span",{className:"inline-block w-6 h-4 bg-gray-200 rounded mr-2"}):(0,a.jsx)(m(),{src:"https://flagcdn.com/".concat(s.toLowerCase(),".svg"),alt:"".concat(s," flag"),width:24,height:16,className:"inline-block align-middle mr-2",style:{verticalAlign:"-2px"},loading:"lazy",onError:()=>t(!0)})},g=[{id:1,name:"Lieferadresse",icon:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"},{id:2,name:"Versand",icon:"M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"},{id:3,name:"Best\xe4tigung",icon:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"}];function b(){let e=(0,u.useRouter)(),{items:s,totalPrice:r,clearCart:t}=(0,i.useCart)(),[d,f]=(0,o.useState)(1),[b,j]=(0,o.useState)(()=>h[0]),[y,v]=(0,o.useState)(()=>h[0].options[0]),[N,k]=(0,o.useState)({email:"",firstName:"",lastName:"",address:"",city:"",postalCode:"",country:b.name}),[w,C]=(0,o.useState)(r);(0,o.useEffect)(()=>{y&&C(r+y.price)},[r,y]);let[L,S]=(0,o.useState)({}),D=(0,o.useCallback)((e,s)=>{if(!s.trim())return"Pflichtfeld";switch(e){case"email":return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s)?"":"Bitte geben Sie eine g\xfcltige E-Mail-Adresse ein";case"postalCode":return/^\d{5}$/.test(s)?"":"Die PLZ muss aus 5 Ziffern bestehen";case"firstName":case"lastName":return s.length<2?"Muss mindestens 2 Zeichen lang sein":"";case"address":return s.length<5?"Bitte geben Sie eine vollst\xe4ndige Adresse ein":"";case"city":return s.length<2?"Bitte geben Sie einen g\xfcltigen Ort ein":"";default:return""}},[]),E=(0,o.useCallback)(e=>{let{name:s,value:r}=e.target;k(e=>({...e,[s]:r}));let a=D(s,r);S(e=>({...e,[s]:a}))},[D]),z=(0,o.useCallback)(e=>{try{if(!h||0===h.length)throw Error("Keine Versanddaten verf\xfcgbar");let s=h.find(s=>s.id===e);if(!s)throw Error("Ung\xfcltige L\xe4nderauswahl");if(!s.options||0===s.options.length)throw Error("Keine Versandoptionen f\xfcr dieses Land verf\xfcgbar");j(s);let r=s.options[0];v(r),k(e=>({...e,country:s.name})),S(e=>({...e,country:""}))}catch(s){let e=s instanceof Error?s.message:"Ein Fehler ist aufgetreten";S(s=>({...s,country:e}))}},[]),H=(0,o.useCallback)(e=>{v(e),S(e=>({...e,shipping:""}))},[]);(0,o.useEffect)(()=>{y||S(e=>({...e,shipping:"Bitte w\xe4hlen Sie eine Versandoption"}))},[y]);let V=(0,o.useCallback)(()=>{let e={},s=!0;return["email","firstName","lastName","address","city","postalCode"].forEach(r=>{let a=D(r,N[r]);a&&(e[r]=a,s=!1)}),S(e),s},[N,D]),B=(0,o.useCallback)(e=>{e.preventDefault(),V()&&f(2)},[V]),M=(0,o.useCallback)(()=>{sessionStorage.setItem("orderComplete","true"),t(),e.push("/checkout/success")},[t,e]);return(0,a.jsx)(l.default,{children:(0,a.jsxs)("main",{className:"min-h-screen bg-background py-12",children:[(0,a.jsxs)("div",{className:"jsx-9a625525c4eb44f3 max-w-4xl mx-auto px-4 mb-12",children:[(0,a.jsxs)("div",{className:"jsx-9a625525c4eb44f3 relative",children:[(0,a.jsx)("div",{className:"jsx-9a625525c4eb44f3 absolute top-1/2 left-0 w-full h-1 bg-muted transform -translate-y-1/2 rounded-full overflow-hidden",children:(0,a.jsx)("div",{style:{width:"".concat((d-1)/(g.length-1)*100,"%"),filter:"blur(0.5px)"},className:"jsx-9a625525c4eb44f3 h-full bg-primary transition-all duration-700 ease-out"})}),(0,a.jsx)("div",{className:"jsx-9a625525c4eb44f3 relative flex justify-between",children:g.map((e,s)=>(0,a.jsxs)("div",{className:"jsx-9a625525c4eb44f3 flex items-center",children:[(0,a.jsxs)("div",{className:"jsx-9a625525c4eb44f3 flex flex-col items-center",children:[(0,a.jsxs)("div",{className:"jsx-9a625525c4eb44f3 "+((0,c.cn)("relative z-10 flex items-center justify-center w-16 h-16 rounded-full","transition-all duration-700 ease-out transform",d>=e.id?"bg-primary text-primary-foreground scale-110 shadow-lg ring-4 ring-primary/20":"bg-background border-2 border-muted hover:border-primary/50 hover:shadow-md",d===e.id?"animate-pulse-subtle":"","group")||""),children:[(0,a.jsx)("svg",{fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",className:"jsx-9a625525c4eb44f3 "+((0,c.cn)("w-7 h-7 transition-all duration-700 transform group-hover:scale-110",d>=e.id?"text-primary-foreground filter drop-shadow-md":"text-muted-foreground")||""),children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:e.icon,className:"jsx-9a625525c4eb44f3"})}),d>e.id&&(0,a.jsx)("div",{className:"jsx-9a625525c4eb44f3 absolute inset-0 flex items-center justify-center animate-checkmark",children:(0,a.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"jsx-9a625525c4eb44f3 w-8 h-8 text-white filter drop-shadow-lg",children:(0,a.jsx)("polyline",{points:"20 6 9 17 4 12",className:"jsx-9a625525c4eb44f3"})})})]}),(0,a.jsx)("div",{className:"jsx-9a625525c4eb44f3 "+"\n							  mt-4 text-sm font-medium transition-all duration-500\n							  ".concat(d>=e.id?"text-primary scale-110":"text-muted-foreground","\n							"),children:e.name})]}),s<g.length-1&&(0,a.jsx)("div",{className:"jsx-9a625525c4eb44f3 w-full mx-6",children:(0,a.jsx)("div",{className:"jsx-9a625525c4eb44f3 h-1.5 bg-gray-200 rounded-full overflow-hidden",children:(0,a.jsx)("div",{className:"jsx-9a625525c4eb44f3 "+"h-full bg-gradient-to-r from-indigo-600 to-purple-600 transition-all duration-700 ease-in-out transform\n									".concat(d>e.id?"w-full scale-100":"w-0 scale-95")})})})]},e.id))})]}),(0,a.jsx)(n(),{id:"9a625525c4eb44f3",children:"@-webkit-keyframes pulse-subtle{0%,100%{-webkit-transform:scale(1.1);transform:scale(1.1)}50%{-webkit-transform:scale(1.15);transform:scale(1.15)}}@-moz-keyframes pulse-subtle{0%,100%{-moz-transform:scale(1.1);transform:scale(1.1)}50%{-moz-transform:scale(1.15);transform:scale(1.15)}}@-o-keyframes pulse-subtle{0%,100%{-o-transform:scale(1.1);transform:scale(1.1)}50%{-o-transform:scale(1.15);transform:scale(1.15)}}@keyframes pulse-subtle{0%,100%{-webkit-transform:scale(1.1);-moz-transform:scale(1.1);-o-transform:scale(1.1);transform:scale(1.1)}50%{-webkit-transform:scale(1.15);-moz-transform:scale(1.15);-o-transform:scale(1.15);transform:scale(1.15)}}@-webkit-keyframes checkmark{0%{-webkit-transform:scale(0);transform:scale(0);opacity:0}50%{-webkit-transform:scale(1.2);transform:scale(1.2)}100%{-webkit-transform:scale(1);transform:scale(1);opacity:1}}@-moz-keyframes checkmark{0%{-moz-transform:scale(0);transform:scale(0);opacity:0}50%{-moz-transform:scale(1.2);transform:scale(1.2)}100%{-moz-transform:scale(1);transform:scale(1);opacity:1}}@-o-keyframes checkmark{0%{-o-transform:scale(0);transform:scale(0);opacity:0}50%{-o-transform:scale(1.2);transform:scale(1.2)}100%{-o-transform:scale(1);transform:scale(1);opacity:1}}@keyframes checkmark{0%{-webkit-transform:scale(0);-moz-transform:scale(0);-o-transform:scale(0);transform:scale(0);opacity:0}50%{-webkit-transform:scale(1.2);-moz-transform:scale(1.2);-o-transform:scale(1.2);transform:scale(1.2)}100%{-webkit-transform:scale(1);-moz-transform:scale(1);-o-transform:scale(1);transform:scale(1);opacity:1}}.animate-pulse-subtle{-webkit-animation:pulse-subtle 2s infinite;-moz-animation:pulse-subtle 2s infinite;-o-animation:pulse-subtle 2s infinite;animation:pulse-subtle 2s infinite}.animate-checkmark{-webkit-animation:checkmark.5s ease-out forwards;-moz-animation:checkmark.5s ease-out forwards;-o-animation:checkmark.5s ease-out forwards;animation:checkmark.5s ease-out forwards}"})]}),(0,a.jsx)("div",{className:"max-w-7xl mx-auto px-4",children:(0,a.jsxs)("div",{className:"grid md:grid-cols-3 gap-8",children:[(0,a.jsx)("div",{className:"md:col-span-2",children:(0,a.jsxs)("div",{className:"bg-white p-6 rounded-xl shadow-lg",children:[1===d&&(0,a.jsxs)("form",{onSubmit:B,className:"space-y-4",children:[(0,a.jsxs)("div",{className:"grid md:grid-cols-2 gap-4",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"block text-sm font-medium text-foreground mb-1",children:"Vorname"}),(0,a.jsx)("input",{type:"text",name:"firstName",required:!0,value:N.firstName,onChange:E,className:(0,c.cn)("w-full px-4 py-2 rounded-lg","bg-background border border-input","text-foreground placeholder:text-muted-foreground","focus:outline-none focus:ring-2 focus:ring-primary",L.firstName?"border-destructive":"")})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"block text-sm font-medium text-foreground mb-1",children:"Nachname"}),(0,a.jsx)("input",{type:"text",name:"lastName",required:!0,value:N.lastName,onChange:E,className:(0,c.cn)("w-full px-4 py-2 rounded-lg","bg-background border border-input","text-foreground placeholder:text-muted-foreground","focus:outline-none focus:ring-2 focus:ring-primary",L.lastName?"border-destructive":"")})]})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"E-Mail"}),(0,a.jsxs)("div",{className:"space-y-1",children:[(0,a.jsx)("input",{type:"email",name:"email",required:!0,value:N.email,onChange:E,className:"w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-2 focus:ring-indigo-500 ".concat(L.email?"border-red-500":"")}),L.email&&(0,a.jsx)("p",{className:"text-destructive text-sm",children:L.email})]})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Adresse"}),(0,a.jsx)("input",{type:"text",name:"address",required:!0,value:N.address,onChange:E,className:(0,c.cn)("w-full px-4 py-2 rounded-lg","bg-background border border-input","text-foreground placeholder:text-muted-foreground","focus:outline-none focus:ring-2 focus:ring-primary",L.address?"border-destructive":"")})]}),(0,a.jsxs)("div",{className:"grid md:grid-cols-2 gap-4",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Stadt"}),(0,a.jsx)("input",{type:"text",name:"city",required:!0,value:N.city,onChange:E,className:(0,c.cn)("w-full px-4 py-2 rounded-lg","bg-background border border-input","text-foreground placeholder:text-muted-foreground","focus:outline-none focus:ring-2 focus:ring-primary",L.city?"border-destructive":"")})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"PLZ"}),(0,a.jsx)("input",{type:"text",name:"postalCode",required:!0,value:N.postalCode,onChange:E,className:(0,c.cn)("w-full px-4 py-2 rounded-lg","bg-background border border-input","text-foreground placeholder:text-muted-foreground","focus:outline-none focus:ring-2 focus:ring-primary",L.postalCode?"border-destructive":"")})]})]}),(0,a.jsx)("button",{type:"submit",className:(0,c.cn)("w-full bg-primary text-primary-foreground","py-3 rounded-lg hover:bg-primary/90 transition-colors"),children:"Weiter zur Best\xe4tigung"})]}),2===d&&(0,a.jsxs)("form",{onSubmit:e=>{e.preventDefault(),f(3)},className:"space-y-6",children:[(0,a.jsx)("h2",{className:"text-2xl font-bold text-card-foreground mb-6",children:"Versandoptionen"}),(0,a.jsxs)("div",{className:"space-y-4",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"block text-sm font-medium text-foreground mb-2",children:"Land"}),(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsx)("select",{className:(0,c.cn)("w-full px-10 py-2 rounded-lg","bg-background border border-input","text-foreground focus:ring-2 focus:ring-primary","appearance-none"),value:b.id,onChange:e=>z(e.target.value),children:h.map(e=>(0,a.jsx)("option",{value:e.id,children:e.name},e.id))}),(0,a.jsx)("div",{className:"absolute left-3 top-1/2 transform -translate-y-1/2",children:(0,a.jsx)(p,{countryCode:b.id.toLowerCase()})}),(0,a.jsx)("div",{className:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700",children:(0,a.jsx)("svg",{className:"fill-current h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:(0,a.jsx)("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"})})})]})]}),(0,a.jsx)("div",{className:"space-y-4 mt-6",children:b.options.map(e=>(0,a.jsx)("div",{className:(0,c.cn)("border rounded-lg p-4 cursor-pointer transition-all transform hover:scale-[1.01]","bg-card text-card-foreground",y.id===e.id?"border-primary bg-accent shadow-md":"border-border hover:border-border/60 hover:shadow-sm"),onClick:()=>H(e),children:(0,a.jsxs)("div",{className:"flex justify-between items-center",children:[(0,a.jsxs)("div",{className:"flex-grow",children:[(0,a.jsx)("h3",{className:"font-medium text-card-foreground",children:e.name}),(0,a.jsx)("p",{className:"text-sm text-muted-foreground",children:e.description}),(0,a.jsx)("p",{className:"text-sm mt-1",children:(0,a.jsx)("span",{className:"inline-block bg-accent text-accent-foreground px-2 py-0.5 rounded-full text-xs",children:e.estimatedDays})})]}),(0,a.jsxs)("div",{className:"flex items-center ml-4",children:[(0,a.jsxs)("span",{className:"font-bold text-lg text-indigo-600",children:[e.price.toFixed(2)," €"]}),y.id===e.id&&(0,a.jsx)("div",{className:"ml-4 h-5 w-5 text-indigo-600 animate-checkmark",children:(0,a.jsx)("svg",{fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})})})]})]})},e.id))}),(0,a.jsx)("div",{className:"mt-6 p-4 bg-accent rounded-lg",children:(0,a.jsxs)("div",{className:"flex justify-between items-center",children:[(0,a.jsx)("span",{className:"text-muted-foreground",children:"Aktueller Versandpreis:"}),(0,a.jsxs)("span",{className:"font-bold text-primary",children:[y.price.toFixed(2)," €"]})]})})]}),(0,a.jsx)("button",{type:"submit",className:"w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors",children:"Weiter zur Best\xe4tigung"})]}),3===d&&(0,a.jsxs)("div",{className:"space-y-6",children:[(0,a.jsx)("h2",{className:"text-2xl font-bold mb-6 text-gray-900",children:"Bestell\xfcbersicht"}),(0,a.jsxs)("div",{className:"bg-card p-6 rounded-xl mb-6",children:[(0,a.jsxs)("p",{className:"text-muted-foreground mb-4",children:["Gesamtbetrag: ",(0,a.jsxs)("span",{className:"font-bold text-xl text-primary",children:[w.toFixed(2)," €"]})]}),(0,a.jsx)("p",{className:"text-muted-foreground mb-4",children:"Ihre Bestellung wird an folgende Adresse geliefert:"}),(0,a.jsxs)("div",{className:"text-foreground",children:[(0,a.jsxs)("p",{children:[N.firstName," ",N.lastName]}),(0,a.jsx)("p",{children:N.address}),(0,a.jsxs)("p",{children:[N.postalCode," ",N.city]}),(0,a.jsx)("p",{children:N.country})]})]}),(0,a.jsx)("div",{className:"space-y-4",children:(0,a.jsx)(x,{amount:w,orderData:{items:s,customerInfo:N,shippingMethod:y},onSuccess:M})})]})]})}),(0,a.jsxs)("div",{className:"bg-card p-6 rounded-xl shadow-lg h-fit",children:[(0,a.jsx)("h2",{className:"text-2xl font-bold mb-6 text-card-foreground",children:"Zusammenfassung"}),(0,a.jsxs)("div",{className:"space-y-4",children:[s.map(e=>(0,a.jsxs)("div",{className:"flex gap-4",children:[(0,a.jsx)("div",{className:"relative w-20 h-20",children:(0,a.jsx)(m(),{src:e.image,alt:e.name,fill:!0,className:"rounded-lg object-cover"})}),(0,a.jsxs)("div",{className:"flex-grow",children:[(0,a.jsx)("h3",{className:"font-medium text-card-foreground",children:e.name}),(0,a.jsxs)("p",{className:"text-muted-foreground",children:["Anzahl: ",e.quantity]}),(0,a.jsxs)("p",{className:"text-primary font-bold",children:[e.price," €"]})]})]},e.id)),(0,a.jsxs)("div",{className:"border-t border-border pt-4 mt-4",children:[(0,a.jsxs)("div",{className:"flex justify-between items-center mb-2 text-muted-foreground",children:[(0,a.jsx)("span",{children:"Zwischensumme"}),(0,a.jsxs)("span",{children:[r.toFixed(2)," €"]})]}),(0,a.jsxs)("div",{className:"flex justify-between items-center mb-2",children:[(0,a.jsx)("span",{className:"text-muted-foreground",children:"Versand"}),(0,a.jsxs)("span",{className:"text-foreground",children:[y.price.toFixed(2)," €"]})]}),(0,a.jsxs)("div",{className:"flex justify-between items-center text-lg font-bold",children:[(0,a.jsx)("span",{className:"text-foreground",children:"Gesamt"}),(0,a.jsxs)("span",{className:"text-primary",children:[w.toFixed(2)," €"]})]})]})]})]})]})})]})})}}},function(e){e.O(0,[551,817,860,666,181,971,472,744],function(){return e(e.s=968)}),_N_E=e.O()}]);