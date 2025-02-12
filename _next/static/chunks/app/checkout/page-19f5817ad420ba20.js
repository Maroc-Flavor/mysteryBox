(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[285],{968:function(e,s,a){Promise.resolve().then(a.bind(a,4089))},4089:function(e,s,a){"use strict";a.r(s),a.d(s,{default:function(){return h}});var r=a(7437),t=a(9738),i=a.n(t),n=a(4027),l=a(6128),c=a(2265),o=a(6691),d=a.n(o),m=a(4033);let x=[{id:"de",name:"Deutschland",code:"DE",basePrice:5.99,options:[{id:"dhl-standard",name:"DHL Standard",carrier:"DHL",description:"Standard Versand",estimatedDays:"2-3 Werktage",price:5.99},{id:"dhl-express",name:"DHL Express",carrier:"DHL",description:"Express Versand",estimatedDays:"1-2 Werktage",price:9.99},{id:"hermes",name:"Hermes",carrier:"Hermes",description:"Standard Versand",estimatedDays:"2-4 Werktage",price:4.99}]},{id:"at",name:"\xd6sterreich",code:"AT",basePrice:9.99,options:[{id:"dhl-at",name:"DHL Standard",carrier:"DHL",description:"Standard Versand",estimatedDays:"3-5 Werktage",price:9.99},{id:"dhl-at-express",name:"DHL Express",carrier:"DHL",description:"Express Versand",estimatedDays:"2-3 Werktage",price:14.99}]},{id:"ch",name:"Schweiz",code:"CH",basePrice:14.99,options:[{id:"dhl-ch",name:"DHL Standard",carrier:"DHL",description:"Standard Versand",estimatedDays:"4-6 Werktage",price:14.99},{id:"dhl-ch-express",name:"DHL Express",carrier:"DHL",description:"Express Versand",estimatedDays:"2-4 Werktage",price:19.99}]}],u=e=>{let{countryCode:s}=e,[a,t]=(0,c.useState)(!1);return a?(0,r.jsx)("span",{className:"inline-block w-6 h-4 bg-gray-200 rounded mr-2"}):(0,r.jsx)(d(),{src:"https://flagcdn.com/".concat(s.toLowerCase(),".svg"),alt:"".concat(s," flag"),width:24,height:16,className:"inline-block align-middle mr-2",style:{verticalAlign:"-2px"},loading:"lazy",onError:()=>t(!0)})},f=[{id:1,name:"Lieferadresse",icon:"M18.364 17.364A9 9 0 007.636 6.636M18.364 17.364A9 9 0 119 3a9 9 0 019 9 9 9 0 010 .364M15 9l-3-3m0 0l-3 3m3-3v12"},{id:2,name:"Versand",icon:"M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"},{id:3,name:"Best\xe4tigung",icon:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"}];function h(){let e=(0,m.useRouter)(),{items:s,totalPrice:a,clearCart:t}=(0,n.useCart)(),[o,h]=(0,c.useState)(1),[g,p]=(0,c.useState)(()=>x[0]),[b,j]=(0,c.useState)(()=>x[0].options[0]),[y,N]=(0,c.useState)({email:"",firstName:"",lastName:"",address:"",city:"",postalCode:"",country:g.name}),[v,w]=(0,c.useState)(a);(0,c.useEffect)(()=>{b&&w(a+b.price)},[a,b]);let[k,C]=(0,c.useState)({}),L=(0,c.useCallback)((e,s)=>{if(!s.trim())return"Pflichtfeld";switch(e){case"email":return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s)?"":"Bitte geben Sie eine g\xfcltige E-Mail-Adresse ein";case"postalCode":return/^\d{5}$/.test(s)?"":"Die PLZ muss aus 5 Ziffern bestehen";case"firstName":case"lastName":return s.length<2?"Muss mindestens 2 Zeichen lang sein":"";case"address":return s.length<5?"Bitte geben Sie eine vollst\xe4ndige Adresse ein":"";case"city":return s.length<2?"Bitte geben Sie einen g\xfcltigen Ort ein":"";default:return""}},[]),D=(0,c.useCallback)(e=>{let{name:s,value:a}=e.target;N(e=>({...e,[s]:a}));let r=L(s,a);C(e=>({...e,[s]:r}))},[L]),S=(0,c.useCallback)(e=>{try{if(!x||0===x.length)throw Error("Keine Versanddaten verf\xfcgbar");let s=x.find(s=>s.id===e);if(!s)throw Error("Ung\xfcltige L\xe4nderauswahl");if(!s.options||0===s.options.length)throw Error("Keine Versandoptionen f\xfcr dieses Land verf\xfcgbar");p(s);let a=s.options[0];j(a),N(e=>({...e,country:s.name})),C(e=>({...e,country:""}))}catch(s){let e=s instanceof Error?s.message:"Ein Fehler ist aufgetreten";C(s=>({...s,country:e}))}},[]),z=(0,c.useCallback)(e=>{j(e),C(e=>({...e,shipping:""}))},[]);(0,c.useEffect)(()=>{b||C(e=>({...e,shipping:"Bitte w\xe4hlen Sie eine Versandoption"}))},[b]);let E=(0,c.useCallback)(()=>{let e={},s=!0;return["email","firstName","lastName","address","city","postalCode"].forEach(a=>{let r=L(a,y[a]);r&&(e[a]=r,s=!1)}),C(e),s},[y,L]),V=(0,c.useCallback)(e=>{e.preventDefault(),E()&&h(2)},[E]),H=(0,c.useCallback)(()=>{sessionStorage.setItem("orderComplete","true"),t(),e.push("/checkout/success")},[t,e]);return(0,r.jsx)(l.default,{children:(0,r.jsxs)("main",{className:"min-h-screen bg-gray-50 py-12",children:[(0,r.jsxs)("div",{className:"jsx-9a625525c4eb44f3 max-w-4xl mx-auto px-4 mb-12",children:[(0,r.jsxs)("div",{className:"jsx-9a625525c4eb44f3 relative",children:[(0,r.jsx)("div",{className:"jsx-9a625525c4eb44f3 absolute top-1/2 left-0 w-full h-1 bg-gray-200 transform -translate-y-1/2 rounded-full overflow-hidden",children:(0,r.jsx)("div",{style:{width:"".concat((o-1)/(f.length-1)*100,"%"),filter:"blur(0.5px)"},className:"jsx-9a625525c4eb44f3 h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-purple-600 transition-all duration-700 ease-out shadow-[0_0_10px_rgba(99,102,241,0.5)]"})}),(0,r.jsx)("div",{className:"jsx-9a625525c4eb44f3 relative flex justify-between",children:f.map((e,s)=>(0,r.jsxs)("div",{className:"jsx-9a625525c4eb44f3 flex items-center",children:[(0,r.jsxs)("div",{className:"jsx-9a625525c4eb44f3 flex flex-col items-center",children:[(0,r.jsxs)("div",{className:"jsx-9a625525c4eb44f3 "+"\n								relative z-10 flex items-center justify-center w-16 h-16 rounded-full \n								transition-all duration-700 ease-out transform\n								".concat(o>=e.id?"bg-gradient-to-br from-indigo-500 via-purple-500 to-purple-600 scale-110 shadow-[0_0_15px_rgba(99,102,241,0.3)] ring-4 ring-purple-100":"bg-white border-2 border-gray-300 hover:border-indigo-300 hover:shadow-md","\n								").concat(o===e.id?"animate-pulse-subtle":"","\n								group\n							  "),children:[(0,r.jsx)("svg",{fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",className:"jsx-9a625525c4eb44f3 "+"w-7 h-7 transition-all duration-700 transform group-hover:scale-110 ".concat(o>=e.id?"text-white filter drop-shadow-md":"text-gray-400"),children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:e.icon,className:"jsx-9a625525c4eb44f3"})}),o>e.id&&(0,r.jsx)("div",{className:"jsx-9a625525c4eb44f3 absolute inset-0 flex items-center justify-center animate-checkmark",children:(0,r.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"jsx-9a625525c4eb44f3 w-8 h-8 text-white filter drop-shadow-lg",children:(0,r.jsx)("polyline",{points:"20 6 9 17 4 12",className:"jsx-9a625525c4eb44f3"})})})]}),(0,r.jsx)("div",{className:"jsx-9a625525c4eb44f3 "+"\n							  mt-4 text-sm font-medium transition-all duration-500\n							  ".concat(o>=e.id?"text-indigo-600 scale-110":"text-gray-500","\n							"),children:e.name})]}),s<f.length-1&&(0,r.jsx)("div",{className:"jsx-9a625525c4eb44f3 w-full mx-6",children:(0,r.jsx)("div",{className:"jsx-9a625525c4eb44f3 h-1.5 bg-gray-200 rounded-full overflow-hidden",children:(0,r.jsx)("div",{className:"jsx-9a625525c4eb44f3 "+"h-full bg-gradient-to-r from-indigo-600 to-purple-600 transition-all duration-700 ease-in-out transform\n									".concat(o>e.id?"w-full scale-100":"w-0 scale-95")})})})]},e.id))})]}),(0,r.jsx)(i(),{id:"9a625525c4eb44f3",children:"@-webkit-keyframes pulse-subtle{0%,100%{-webkit-transform:scale(1.1);transform:scale(1.1)}50%{-webkit-transform:scale(1.15);transform:scale(1.15)}}@-moz-keyframes pulse-subtle{0%,100%{-moz-transform:scale(1.1);transform:scale(1.1)}50%{-moz-transform:scale(1.15);transform:scale(1.15)}}@-o-keyframes pulse-subtle{0%,100%{-o-transform:scale(1.1);transform:scale(1.1)}50%{-o-transform:scale(1.15);transform:scale(1.15)}}@keyframes pulse-subtle{0%,100%{-webkit-transform:scale(1.1);-moz-transform:scale(1.1);-o-transform:scale(1.1);transform:scale(1.1)}50%{-webkit-transform:scale(1.15);-moz-transform:scale(1.15);-o-transform:scale(1.15);transform:scale(1.15)}}@-webkit-keyframes checkmark{0%{-webkit-transform:scale(0);transform:scale(0);opacity:0}50%{-webkit-transform:scale(1.2);transform:scale(1.2)}100%{-webkit-transform:scale(1);transform:scale(1);opacity:1}}@-moz-keyframes checkmark{0%{-moz-transform:scale(0);transform:scale(0);opacity:0}50%{-moz-transform:scale(1.2);transform:scale(1.2)}100%{-moz-transform:scale(1);transform:scale(1);opacity:1}}@-o-keyframes checkmark{0%{-o-transform:scale(0);transform:scale(0);opacity:0}50%{-o-transform:scale(1.2);transform:scale(1.2)}100%{-o-transform:scale(1);transform:scale(1);opacity:1}}@keyframes checkmark{0%{-webkit-transform:scale(0);-moz-transform:scale(0);-o-transform:scale(0);transform:scale(0);opacity:0}50%{-webkit-transform:scale(1.2);-moz-transform:scale(1.2);-o-transform:scale(1.2);transform:scale(1.2)}100%{-webkit-transform:scale(1);-moz-transform:scale(1);-o-transform:scale(1);transform:scale(1);opacity:1}}.animate-pulse-subtle{-webkit-animation:pulse-subtle 2s infinite;-moz-animation:pulse-subtle 2s infinite;-o-animation:pulse-subtle 2s infinite;animation:pulse-subtle 2s infinite}.animate-checkmark{-webkit-animation:checkmark.5s ease-out forwards;-moz-animation:checkmark.5s ease-out forwards;-o-animation:checkmark.5s ease-out forwards;animation:checkmark.5s ease-out forwards}"})]}),(0,r.jsx)("div",{className:"max-w-7xl mx-auto px-4",children:(0,r.jsxs)("div",{className:"grid md:grid-cols-3 gap-8",children:[(0,r.jsx)("div",{className:"md:col-span-2",children:(0,r.jsxs)("div",{className:"bg-white p-6 rounded-xl shadow-lg",children:[1===o&&(0,r.jsxs)("form",{onSubmit:V,className:"space-y-4",children:[(0,r.jsxs)("div",{className:"grid md:grid-cols-2 gap-4",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Vorname"}),(0,r.jsx)("input",{type:"text",name:"firstName",required:!0,value:y.firstName,onChange:D,className:"w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Nachname"}),(0,r.jsx)("input",{type:"text",name:"lastName",required:!0,value:y.lastName,onChange:D,className:"w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"})]})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"E-Mail"}),(0,r.jsxs)("div",{className:"space-y-1",children:[(0,r.jsx)("input",{type:"email",name:"email",required:!0,value:y.email,onChange:D,className:"w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 ".concat(k.email?"border-red-500":"")}),k.email&&(0,r.jsx)("p",{className:"text-red-500 text-sm",children:k.email})]})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Adresse"}),(0,r.jsx)("input",{type:"text",name:"address",required:!0,value:y.address,onChange:D,className:"w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"})]}),(0,r.jsxs)("div",{className:"grid md:grid-cols-2 gap-4",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Stadt"}),(0,r.jsx)("input",{type:"text",name:"city",required:!0,value:y.city,onChange:D,className:"w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"PLZ"}),(0,r.jsx)("input",{type:"text",name:"postalCode",required:!0,value:y.postalCode,onChange:D,className:"w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"})]})]}),(0,r.jsx)("button",{type:"submit",className:"w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors",children:"Weiter zur Best\xe4tigung"})]}),2===o&&(0,r.jsxs)("form",{onSubmit:e=>{e.preventDefault(),h(3)},className:"space-y-6",children:[(0,r.jsx)("h2",{className:"text-2xl font-bold text-gray-900 mb-6",children:"Versandoptionen"}),(0,r.jsxs)("div",{className:"space-y-4",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{className:"block text-sm font-medium text-gray-900 mb-2",children:"Land"}),(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsx)("select",{className:"w-full px-4 py-2 border rounded-lg focus:ring-2 text-gray-900 focus:ring-indigo-500 appearance-none",value:g.id,onChange:e=>S(e.target.value),children:x.map(e=>(0,r.jsx)("option",{value:e.id,children:e.name},e.id))}),(0,r.jsx)("div",{className:"absolute left-3 top-1/2 transform -translate-y-1/2",children:(0,r.jsx)(u,{countryCode:g.id.toLowerCase()})}),(0,r.jsx)("div",{className:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700",children:(0,r.jsx)("svg",{className:"fill-current h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:(0,r.jsx)("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"})})})]})]}),(0,r.jsx)("div",{className:"space-y-4 mt-6",children:g.options.map(e=>(0,r.jsx)("div",{className:"border rounded-lg p-4 cursor-pointer transition-all transform hover:scale-[1.01] ".concat(b.id===e.id?"border-indigo-600 bg-indigo-50 shadow-md":"hover:border-gray-400 hover:shadow-sm"),onClick:()=>z(e),children:(0,r.jsxs)("div",{className:"flex justify-between items-center",children:[(0,r.jsxs)("div",{className:"flex-grow",children:[(0,r.jsx)("h3",{className:"font-medium text-gray-900",children:e.name}),(0,r.jsx)("p",{className:"text-sm text-gray-600",children:e.description}),(0,r.jsx)("p",{className:"text-sm text-gray-500 mt-1",children:(0,r.jsx)("span",{className:"inline-block bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded-full text-xs",children:e.estimatedDays})})]}),(0,r.jsxs)("div",{className:"flex items-center ml-4",children:[(0,r.jsxs)("span",{className:"font-bold text-lg text-indigo-600",children:[e.price.toFixed(2)," €"]}),b.id===e.id&&(0,r.jsx)("div",{className:"ml-4 h-5 w-5 text-indigo-600 animate-checkmark",children:(0,r.jsx)("svg",{fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})})})]})]})},e.id))}),(0,r.jsx)("div",{className:"mt-6 p-4 bg-indigo-50 rounded-lg",children:(0,r.jsxs)("div",{className:"flex justify-between items-center",children:[(0,r.jsx)("span",{className:"text-gray-700",children:"Aktueller Versandpreis:"}),(0,r.jsxs)("span",{className:"font-bold text-indigo-600",children:[b.price.toFixed(2)," €"]})]})})]}),(0,r.jsx)("button",{type:"submit",className:"w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors",children:"Weiter zur Best\xe4tigung"})]}),3===o&&(0,r.jsxs)("div",{className:"space-y-6",children:[(0,r.jsx)("h2",{className:"text-2xl font-bold mb-6 text-gray-900",children:"Bestell\xfcbersicht"}),(0,r.jsxs)("div",{className:"bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl mb-6",children:[(0,r.jsxs)("p",{className:"text-gray-700 mb-4",children:["Gesamtbetrag: ",(0,r.jsxs)("span",{className:"font-bold text-xl",children:[v.toFixed(2)," €"]})]}),(0,r.jsx)("p",{className:"text-gray-600 mb-4",children:"Ihre Bestellung wird an folgende Adresse geliefert:"}),(0,r.jsxs)("div",{className:"text-gray-700",children:[(0,r.jsxs)("p",{children:[y.firstName," ",y.lastName]}),(0,r.jsx)("p",{children:y.address}),(0,r.jsxs)("p",{children:[y.postalCode," ",y.city]}),(0,r.jsx)("p",{children:y.country})]})]}),(0,r.jsx)("button",{onClick:H,className:"w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors",children:"Bestellung best\xe4tigen"})]})]})}),(0,r.jsxs)("div",{className:"bg-white p-6 rounded-xl shadow-lg h-fit",children:[(0,r.jsx)("h2",{className:"text-2xl font-bold mb-6 text-gray-900",children:"Zusammenfassung"}),(0,r.jsxs)("div",{className:"space-y-4",children:[s.map(e=>(0,r.jsxs)("div",{className:"flex gap-4",children:[(0,r.jsx)("div",{className:"relative w-20 h-20",children:(0,r.jsx)(d(),{src:e.image,alt:e.name,fill:!0,className:"rounded-lg object-cover"})}),(0,r.jsxs)("div",{className:"flex-grow",children:[(0,r.jsx)("h3",{className:"font-medium text-gray-900",children:e.name}),(0,r.jsxs)("p",{className:"text-gray-600",children:["Anzahl: ",e.quantity]}),(0,r.jsxs)("p",{className:"text-indigo-600 font-bold",children:[e.price," €"]})]})]},e.id)),(0,r.jsxs)("div",{className:"border-t pt-4 mt-4",children:[(0,r.jsxs)("div",{className:"flex justify-between items-center mb-2 text-gray-700",children:[(0,r.jsx)("span",{children:"Zwischensumme"}),(0,r.jsxs)("span",{children:[a.toFixed(2)," €"]})]}),(0,r.jsxs)("div",{className:"flex justify-between items-center mb-2 text-gray-700",children:[(0,r.jsx)("span",{children:"Versand"}),(0,r.jsxs)("span",{children:[b.price.toFixed(2)," €"]})]}),(0,r.jsxs)("div",{className:"flex justify-between items-center text-lg font-bold text-gray-900",children:[(0,r.jsx)("span",{children:"Gesamt"}),(0,r.jsxs)("span",{children:[v.toFixed(2)," €"]})]})]})]})]})]})})]})})}}},function(e){e.O(0,[258,666,128,971,472,744],function(){return e(e.s=968)}),_N_E=e.O()}]);