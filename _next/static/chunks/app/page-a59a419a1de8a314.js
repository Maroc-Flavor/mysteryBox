(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{4021:function(e,r,t){Promise.resolve().then(t.bind(t,1712))},1712:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return u}});var s=t(7437),i=t(6691),a=t.n(i),n=t(1396),l=t.n(n),o=t(8614),d=t(2265);let c={isLive:!1,roomId:"7474578148055714583"},m=[{day:"Montag",time:"20:00",platform:"TikTok"},{day:"Mittwoch",time:"19:30",platform:"TikTok"},{day:"Freitag",time:"21:00",platform:"TikTok"},{day:"Sonntag",time:"18:00",platform:"TikTok"}],x=e=>{let r=new Date,t=r.getDay(),s=60*r.getHours()+r.getMinutes(),i={Montag:1,Mittwoch:3,Freitag:5,Sonntag:0};return e.find(e=>{let r=i[e.day],[a,n]=e.time.split(":").map(Number);return t<r||t===r&&s<60*a+n})||e[0]},g=e=>{let r=new Date,t={Montag:1,Mittwoch:3,Freitag:5,Sonntag:0}[e.day],[s,i]=e.time.split(":").map(Number),a=new Date;a.setDate(a.getDate()+(t+7-a.getDay())%7),a.setHours(s,i,0,0);let n=a.getTime()-r.getTime();return{days:Math.floor(n/864e5),hours:Math.floor(n%864e5/36e5),minutes:Math.floor(n%36e5/6e4)}};function u(){let{addItem:e,setIsCartOpen:r}=(0,o.useCart)(),[t,i]=(0,d.useState)(!1),[n,u]=(0,d.useState)(!1),[h,p]=(0,d.useState)(c.isLive),[v,f]=(0,d.useState)(c.roomId),[b,j]=(0,d.useState)(x(m)),[N,y]=(0,d.useState)(g(b));(0,d.useEffect)(()=>{u(!0);let e=()=>{i(window.scrollY>400)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),(0,d.useEffect)(()=>{let e=()=>{p(c.isLive),f(c.roomId)};e();let r=setInterval(e,3e4);return()=>clearInterval(r)},[]),(0,d.useEffect)(()=>{let e=setInterval(()=>{y(g(b))},6e4);return()=>clearInterval(e)},[b]);let w=t=>{t&&"number"==typeof t.price&&(e({id:t.id,name:t.name,price:t.price,originalPrice:t.originalPrice||"",image:t.image,quantity:1}),r(!0))};return(0,s.jsxs)("main",{className:"flex-grow bg-gradient-to-b from-gray-50 via-white to-gray-50",children:[(0,s.jsxs)("section",{className:"relative min-h-[80vh] flex items-center",children:[(0,s.jsx)("div",{className:"absolute inset-0 bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900",children:(0,s.jsx)("div",{className:"absolute inset-0 opacity-5 bg-[url('/mysteryBox/images/pattern-grid.svg')]"})}),(0,s.jsx)("div",{className:"container mx-auto px-4 relative z-10",children:(0,s.jsxs)("div",{className:"grid md:grid-cols-2 gap-8 md:gap-12 items-center",children:[(0,s.jsxs)("div",{className:"text-white space-y-6 md:space-y-8 transform transition-all duration-1000 ".concat(n?"translate-x-0 opacity-100":"-translate-x-20 opacity-0"),children:[(0,s.jsxs)("h1",{className:"text-4xl sm:text-5xl md:text-7xl font-bold leading-tight",children:["Entdecke das",(0,s.jsx)("br",{}),(0,s.jsx)("span",{className:"bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text",children:"Unerwartete"})]}),(0,s.jsxs)("div",{className:"mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-6",children:[(0,s.jsxs)("div",{className:"flex items-center justify-between mb-4",children:[(0,s.jsx)("h3",{className:"text-xl font-semibold",children:"Wann sind wir online?"}),(0,s.jsxs)("div",{className:"flex items-center gap-2 px-3 py-1.5 rounded-full ".concat(c.isLive?"bg-red-500/20 text-red-400":"bg-gray-500/20 text-gray-400"),children:[(0,s.jsx)("span",{className:"w-2 h-2 rounded-full ".concat(c.isLive?"bg-red-500 animate-pulse":"bg-gray-500")}),c.isLive?"LIVE":"OFFLINE"]})]}),(0,s.jsx)("div",{className:"grid grid-cols-2 gap-4",children:m.map((e,r)=>(0,s.jsxs)("div",{className:"bg-white/5 rounded-lg p-3 flex items-center justify-between group hover:bg-white/10 transition-all duration-300",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:"font-medium",children:e.day}),(0,s.jsx)("div",{className:"text-sm text-gray-300",children:e.time})]}),(0,s.jsxs)("a",{href:"https://www.tiktok.com/@simo4287",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500/20 to-purple-500/20 hover:from-pink-500/30 hover:to-purple-500/30 rounded-lg text-sm font-medium transition-all duration-300 group-hover:scale-105",children:[(0,s.jsx)("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400",children:"Folgen"}),(0,s.jsx)("span",{className:"text-pink-400",children:"♥"})]})]},r))}),(0,s.jsx)("div",{className:"mt-6 pt-4 border-t border-white/10",children:(0,s.jsxs)("div",{className:"flex items-center justify-center gap-4 text-gray-300 text-sm",children:[(0,s.jsx)("span",{children:"Demn\xe4chst auch auf:"}),(0,s.jsxs)("div",{className:"flex items-center gap-3",children:[(0,s.jsx)("svg",{className:"w-5 h-5 text-pink-400",fill:"currentColor",viewBox:"0 0 24 24",children:(0,s.jsx)("path",{d:"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"})}),(0,s.jsx)("svg",{className:"w-5 h-5 text-blue-400",fill:"currentColor",viewBox:"0 0 24 24",children:(0,s.jsx)("path",{d:"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"})})]})]})})]})]}),(0,s.jsx)("div",{className:"relative mt-8 md:mt-0 transform transition-all duration-1000 ".concat(n?"translate-x-0 opacity-100":"translate-x-20 opacity-0"),children:(0,s.jsx)("div",{className:"relative h-[300px] sm:h-[400px] md:h-[600px] rounded-2xl overflow-hidden",children:c.isLive&&c.roomId?(0,s.jsxs)("div",{className:"live-container w-full h-full",children:[(0,s.jsx)("iframe",{src:"https://www.tiktok.com/embed/live/".concat(c.roomId),className:"w-full h-full",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,style:{border:"none",width:"100%",height:"100%",minHeight:"600px"}}),(0,s.jsx)("div",{className:"absolute top-4 right-4 z-30",children:(0,s.jsx)("div",{className:"px-4 py-2 bg-red-500 text-white rounded-lg animate-pulse",children:"LIVE"})})]}):(0,s.jsxs)("div",{className:"relative w-full h-full",children:[(0,s.jsx)(a(),{src:"/mysteryBox/images/products/Box-Hero.webp",alt:"Mystery Box Showcase",fill:!0,className:"object-cover rounded-2xl",priority:!0}),(0,s.jsx)("div",{className:"absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl",children:(0,s.jsx)("div",{className:"absolute inset-0 flex items-center justify-center",children:(0,s.jsxs)("div",{className:"text-center text-white p-8 bg-black/40 rounded-xl backdrop-blur-sm",children:[(0,s.jsx)("h3",{className:"text-2xl font-bold mb-4",children:"N\xe4chster Live-Stream"}),(0,s.jsxs)("div",{className:"flex gap-4 justify-center mb-6",children:[(0,s.jsxs)("div",{className:"bg-white/10 rounded-lg p-4",children:[(0,s.jsx)("span",{className:"text-3xl font-bold",children:N.days}),(0,s.jsx)("p",{className:"text-sm",children:"Tage"})]}),(0,s.jsxs)("div",{className:"bg-white/10 rounded-lg p-4",children:[(0,s.jsx)("span",{className:"text-3xl font-bold",children:N.hours}),(0,s.jsx)("p",{className:"text-sm",children:"Stunden"})]}),(0,s.jsxs)("div",{className:"bg-white/10 rounded-lg p-4",children:[(0,s.jsx)("span",{className:"text-3xl font-bold",children:N.minutes}),(0,s.jsx)("p",{className:"text-sm",children:"Minuten"})]})]})]})})})]})})})]})})]}),(0,s.jsx)("button",{onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),className:"fixed left-6 bottom-24 z-40 items-center justify-center w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full shadow-lg hover:opacity-90 transition-all duration-500 transform ".concat(t?"opacity-100 translate-y-0 flex":"opacity-0 translate-y-12 hidden"),"aria-label":"Nach oben scrollen",children:(0,s.jsx)("svg",{className:"w-4 h-4 text-white transform group-hover:-translate-y-1 transition-transform duration-300",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 10l7-7m0 0l7 7m-7-7v18"})})}),(0,s.jsxs)("section",{className:"py-24 px-4 relative overflow-hidden",children:[(0,s.jsx)("div",{className:"absolute inset-0 bg-gradient-to-b from-gray-900/5 to-indigo-900/5"}),(0,s.jsx)("div",{className:"max-w-7xl mx-auto relative z-10",children:(0,s.jsxs)("div",{className:"grid md:grid-cols-2 gap-16 items-center",children:[(0,s.jsxs)("div",{className:"relative h-[500px] rounded-2xl overflow-hidden group",children:[(0,s.jsx)("div",{className:"absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 backdrop-blur-sm z-10 rounded-2xl  group-hover:from-indigo-600/30 group-hover:to-purple-600/30 transition-all duration-500"}),(0,s.jsx)(a(),{src:"/mysteryBox/images/products/Box-Hero.webp",alt:"Mystery Box Showcase",fill:!0,style:{objectFit:"cover"},className:"group-hover:scale-105 transition-transform duration-500",priority:!0,quality:90}),(0,s.jsx)("div",{className:"absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent"})]}),(0,s.jsxs)("div",{className:"space-y-8",children:[(0,s.jsxs)("h2",{className:"text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent",children:["Die Revolution des",(0,s.jsx)("br",{}),"Retourenhandels"]}),(0,s.jsx)("p",{className:"text-xl text-gray-600 leading-relaxed",children:"Wir transformieren zur\xfcckgesendete Waren in spannende \xdcberraschungspakete. Durch Live-Auktionen und direkten Verkauf bieten wir ein transparentes und aufregendes Shopping-Erlebnis."}),(0,s.jsxs)("div",{className:"grid grid-cols-2 gap-6",children:[(0,s.jsxs)("div",{className:"bg-white p-6 rounded-xl shadow-lg border border-indigo-50",children:[(0,s.jsx)("h3",{className:"text-2xl font-bold text-indigo-600 mb-2",children:"1000+"}),(0,s.jsx)("p",{className:"text-gray-600",children:"Erfolgreiche Auktionen"})]}),(0,s.jsxs)("div",{className:"bg-white p-6 rounded-xl shadow-lg border border-purple-50",children:[(0,s.jsx)("h3",{className:"text-2xl font-bold text-purple-600 mb-2",children:"5000+"}),(0,s.jsx)("p",{className:"text-gray-600",children:"Gl\xfcckliche K\xe4ufer"})]})]}),(0,s.jsx)("div",{className:"absolute bottom-6 left-6 right-6 text-white",children:(0,s.jsx)("div",{className:"flex items-center gap-4 mb-4"})}),(0,s.jsxs)("div",{className:"flex items-center gap-8",children:[(0,s.jsxs)("div",{className:"flex items-center gap-2 text-gray-600",children:[(0,s.jsx)("div",{className:"px-4 py-2 bg-indigo-500/20 backdrop-blur-sm rounded-lg",children:(0,s.jsx)("span",{className:"text-sm font-medium",children:"Live Auktionen"})}),(0,s.jsx)("svg",{className:"w-6 h-6 text-indigo-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})}),(0,s.jsx)("span",{children:"100% Authentisch"})]}),(0,s.jsx)("div",{className:"px-4 py-2 bg-purple-500/20 backdrop-blur-sm rounded-lg",children:(0,s.jsx)("span",{className:"text-sm font-medium",children:"Unge\xf6ffnete Boxen"})}),(0,s.jsxs)("div",{className:"flex items-center gap-2 text-gray-600",children:[(0,s.jsx)("svg",{className:"w-6 h-6 text-purple-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"})}),(0,s.jsx)("span",{children:"Live Unboxing"})]})]})]})]})})]}),(0,s.jsxs)("section",{className:"py-24 px-4 relative",id:"live-auctions",children:[(0,s.jsx)("div",{className:"absolute inset-0 bg-gradient-to-b from-gray-900/5 via-indigo-900/5 to-purple-900/5"}),(0,s.jsxs)("div",{className:"max-w-7xl mx-auto relative z-10",children:[(0,s.jsxs)("div",{className:"text-center mb-16 space-y-4",children:[(0,s.jsx)("h2",{className:"text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent",children:"Aktuelle Mystery Boxes"}),(0,s.jsx)("p",{className:"text-xl text-gray-600 max-w-3xl mx-auto",children:"Unge\xf6ffnete Retouren-Pakete mit garantiertem Warenwert. Jede Box ist ein spannendes Abenteuer."})]}),(0,s.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:[{id:7,category:"XXL",name:"XXL Premium Mystery Box",price:99.99,originalPrice:279.99,offer:"",image:"/mysteryBox/images/products/mysterybox-xxl.webp",description:"10 KG \xdcberraschungsbox",detailDescription:"10 KG \xdcberraschungsbox"},{id:8,category:"Starter",name:"Starter Mystery Box",price:39.99,originalPrice:120,offer:"",image:"/mysteryBox/images/products/starterBox2.webp",description:"3 KG \xdcberraschungskarton",detailDescription:"3 KG \xdcberraschungsbox"},{id:9,category:"Individuell",name:"Individuelle Mystery Box",price:"",originalPrice:"",offer:"Flexible",image:"/mysteryBox/images/products/individuellBoxFrontPage.webp",description:"individuell anpassbar. Sprich mit uns.",detailDescription:"individuell anpassbar. Sprich mit uns."}].map(e=>(0,s.jsxs)("div",{className:"group bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl hover:border-indigo-100 transition-all duration-300 transform hover:-translate-y-1",children:[(0,s.jsxs)("div",{className:"relative h-72 overflow-hidden",children:[(0,s.jsx)("div",{className:"absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 group-hover:from-indigo-600/30 group-hover:to-purple-600/30 transition-all duration-500 z-10"}),(0,s.jsx)(a(),{src:e.image,alt:e.description,fill:!0,style:{objectFit:"cover"},className:"transform transition-transform duration-500 group-hover:scale-110",priority:!0}),(0,s.jsx)("div",{className:"absolute top-4 left-4 z-20",children:(0,s.jsx)("span",{className:"px-4 py-2 rounded-lg text-sm font-medium bg-white/90 backdrop-blur-sm text-indigo-600 shadow-lg",children:e.category})}),e.originalPrice&&(0,s.jsx)("div",{className:"absolute top-4 right-4 z-20",children:(0,s.jsxs)("span",{className:"px-4 py-2 rounded-lg text-sm font-medium bg-red-500/90 backdrop-blur-sm text-white shadow-lg",children:["Spare ",((Number(e.originalPrice)-Number(e.price))/Number(e.originalPrice)*100).toFixed(0),"%"]})})]}),(0,s.jsxs)("div",{className:"p-6 space-y-4",children:[(0,s.jsx)("h3",{className:"text-2xl font-bold text-gray-800",children:e.name}),(0,s.jsx)("p",{className:"text-gray-600",children:e.description}),(0,s.jsxs)("div",{className:"flex items-center justify-between",children:[(0,s.jsx)("div",{className:"space-y-1",children:""!==e.price?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("p",{className:"text-2xl font-bold text-indigo-600",children:[e.price," €"]}),e.originalPrice&&(0,s.jsxs)("p",{className:"text-sm text-gray-400 line-through",children:["UVP: ",e.originalPrice," €"]})]}):(0,s.jsx)("p",{className:"text-xl text-indigo-600 font-medium",children:"Individuell"})}),(0,s.jsx)("div",{className:"flex gap-3",children:9===e.id?(0,s.jsx)(l(),{href:"/kontakt",className:"px-6 py-3 bg-white border-2 border-indigo-600 text-indigo-600 rounded-xl hover:bg-indigo-50 transition-all duration-300 font-medium",children:"Anfragen"}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l(),{href:"/shop/".concat(e.id),className:"px-6 py-3 bg-white border-2 border-indigo-600 text-indigo-600 rounded-xl hover:bg-indigo-50 transition-all duration-300 font-medium",children:"Details"}),(0,s.jsxs)("button",{onClick:()=>w(e),className:"px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:opacity-90 transition-all duration-300 font-medium flex items-center gap-2",disabled:""===e.price,children:[(0,s.jsx)("span",{children:"Kaufen"}),(0,s.jsx)("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 4v16m8-8H4"})})]})]})})]})]})]},e.id))})]})]}),(0,s.jsx)("div",{className:"relative py-24",children:(0,s.jsx)("div",{className:"absolute inset-0 flex items-center justify-center",children:(0,s.jsx)("div",{className:"w-full max-w-7xl mx-auto px-4",children:(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsx)("div",{className:"absolute inset-0 bg-gradient-to-r from-transparent via-gray-100 to-transparent"}),(0,s.jsxs)("div",{className:"relative flex items-center justify-center",children:[(0,s.jsx)("div",{className:"flex-1 h-px bg-gradient-to-r from-transparent to-indigo-600/30"}),(0,s.jsxs)("div",{className:"relative mx-4 flex items-center gap-3",children:[(0,s.jsx)("div",{className:"w-2 h-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg transform hover:scale-150 transition-transform duration-300"}),(0,s.jsx)("div",{className:"w-12 h-12 rounded-xl bg-white shadow-2xl border border-gray-100/50 flex items-center justify-center transform rotate-45 hover:rotate-[225deg] transition-all duration-700 group",children:(0,s.jsx)("div",{className:"w-6 h-6 rounded bg-gradient-to-br from-indigo-600 to-purple-600 group-hover:scale-90 transition-transform duration-500"})}),(0,s.jsx)("div",{className:"w-2 h-2 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 shadow-lg transform hover:scale-150 transition-transform duration-300"})]}),(0,s.jsx)("div",{className:"flex-1 h-px bg-gradient-to-l from-transparent to-purple-600/30"})]})]})})})}),(0,s.jsxs)("section",{className:"py-24 px-4 relative",children:[(0,s.jsx)("div",{className:"absolute inset-0 bg-gradient-to-b from-indigo-900/5 to-purple-900/5"}),(0,s.jsx)("div",{className:"max-w-7xl mx-auto relative z-10",children:(0,s.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-12",children:[(0,s.jsxs)("div",{className:"bg-white p-8 rounded-2xl shadow-xl border border-indigo-50 overflow-hidden relative group",children:[(0,s.jsx)("div",{className:"absolute inset-0 bg-gradient-to-br from-indigo-600/5 to-purple-600/5 group-hover:from-indigo-600/10 group-hover:to-purple-600/10 transition-all duration-500"}),(0,s.jsxs)("div",{className:"relative z-10",children:[(0,s.jsxs)("div",{className:"flex items-center gap-3 mb-8",children:[(0,s.jsxs)("span",{className:"flex items-center gap-2 px-4 py-2 bg-red-500/10 text-red-600 rounded-lg text-sm font-medium",children:[(0,s.jsx)("span",{className:"animate-pulse",children:"●"})," LIVE"]}),(0,s.jsx)("span",{className:"px-4 py-2 bg-indigo-500/10 text-indigo-600 rounded-lg text-sm font-medium",children:"Jetzt mitbieten"})]}),(0,s.jsx)("h2",{className:"text-3xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent",children:"Live Auktionen"}),(0,s.jsx)("p",{className:"text-xl text-gray-600 mb-8",children:"Sei live dabei wenn spannende Mystery Boxes versteigert werden. Mitbieten, gewinnen und live beim Unboxing dabei sein!"}),(0,s.jsxs)("div",{className:"grid grid-cols-3 gap-4 mb-8",children:[(0,s.jsxs)("a",{href:"#",target:"_blank",rel:"noopener noreferrer",className:"flex flex-col items-center gap-2 p-4 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 hover:from-purple-500/20 hover:to-pink-500/20 transition-all duration-300",children:[(0,s.jsx)("svg",{className:"w-8 h-8 text-pink-600",fill:"currentColor",viewBox:"0 0 24 24",children:(0,s.jsx)("path",{d:"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"})}),(0,s.jsx)("span",{className:"text-sm font-medium text-gray-800",children:"Instagram"})]}),(0,s.jsxs)("a",{href:"https://www.tiktok.com/@simo4287/live",target:"_blank",rel:"noopener noreferrer",className:"flex flex-col items-center gap-2 p-4 rounded-xl bg-gradient-to-br from-gray-900/10 to-gray-800/10 hover:from-gray-900/20 hover:to-gray-800/20 transition-all duration-300",children:[(0,s.jsx)("svg",{className:"w-8 h-8 text-gray-900",viewBox:"0 0 24 24",fill:"currentColor",children:(0,s.jsx)("path",{d:"M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 015.2-1.74V11a8.55 8.55 0 006.33 2.62V10.2a4.83 4.83 0 01-3.77-4.25V5.5a4.83 4.83 0 003.77 4.25v3.38z"})}),(0,s.jsx)("span",{className:"text-sm font-medium text-gray-800",children:"TikTok"})]}),(0,s.jsxs)("a",{href:"#",target:"_blank",rel:"noopener noreferrer",className:"flex flex-col items-center gap-2 p-4 rounded-xl bg-gradient-to-br from-blue-500/10 to-blue-600/10 hover:from-blue-500/20 hover:to-blue-600/20 transition-all duration-300",children:[(0,s.jsx)("svg",{className:"w-8 h-8 text-blue-600",fill:"currentColor",viewBox:"0 0 24 24",children:(0,s.jsx)("path",{d:"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"})}),(0,s.jsx)("span",{className:"text-sm font-medium text-gray-800",children:"Facebook"})]})]}),(0,s.jsx)("p",{className:"text-gray-500 text-center",children:"Folge uns auf deiner bevorzugten Plattform und verpasse keine Auktion!"})]})]}),(0,s.jsxs)("div",{className:"bg-white p-8 rounded-2xl shadow-xl border border-emerald-50 overflow-hidden relative group",children:[(0,s.jsx)("div",{className:"absolute inset-0 bg-gradient-to-br from-emerald-600/5 to-teal-600/5 group-hover:from-emerald-600/10 group-hover:to-teal-600/10 transition-all duration-500"}),(0,s.jsxs)("div",{className:"relative z-10",children:[(0,s.jsx)("span",{className:"inline-block px-4 py-2 bg-emerald-500/10 text-emerald-600 rounded-lg text-sm font-medium mb-8",children:"GEWINNSPIEL"}),(0,s.jsx)("h2",{className:"text-3xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent",children:"Gl\xfcckwunsch!"}),(0,s.jsx)("p",{className:"text-xl text-gray-600 mb-8",children:"Du hast eine Mystery Box gewonnen! Bezahle nur den Versand und erhalte eine exklusive Box mit garantiertem Warenwert."}),(0,s.jsxs)("button",{className:"w-full py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl hover:opacity-90 transition-all duration-300 font-medium flex items-center justify-center gap-2 group",children:[(0,s.jsx)("span",{children:"Versand bezahlen"}),(0,s.jsx)("svg",{className:"w-5 h-5 transform group-hover:translate-x-1 transition-transform",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17 8l4 4m0 0l-4 4m4-4H3"})})]})]})]})]})})]}),(0,s.jsx)("div",{className:"relative py-24",children:(0,s.jsx)("div",{className:"absolute inset-0 flex items-center justify-center",children:(0,s.jsx)("div",{className:"w-full max-w-7xl mx-auto px-4",children:(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsx)("div",{className:"absolute inset-0 bg-gradient-to-r from-transparent via-gray-100 to-transparent"}),(0,s.jsxs)("div",{className:"relative flex items-center justify-center",children:[(0,s.jsx)("div",{className:"flex-1 h-px bg-gradient-to-r from-transparent to-indigo-600/30"}),(0,s.jsxs)("div",{className:"relative mx-4 flex items-center gap-3",children:[(0,s.jsx)("div",{className:"w-2 h-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg transform hover:scale-150 transition-transform duration-300"}),(0,s.jsx)("div",{className:"w-12 h-12 rounded-xl bg-white shadow-2xl border border-gray-100/50 flex items-center justify-center transform rotate-45 hover:rotate-[225deg] transition-all duration-700 group",children:(0,s.jsx)("div",{className:"w-6 h-6 rounded bg-gradient-to-br from-indigo-600 to-purple-600 group-hover:scale-90 transition-transform duration-500"})}),(0,s.jsx)("div",{className:"w-2 h-2 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 shadow-lg transform hover:scale-150 transition-transform duration-300"})]}),(0,s.jsx)("div",{className:"flex-1 h-px bg-gradient-to-l from-transparent to-purple-600/30"})]})]})})})}),(0,s.jsxs)("section",{className:"py-24 px-4 relative overflow-hidden",children:[(0,s.jsx)("div",{className:"absolute inset-0 bg-gradient-to-b from-gray-50 to-white"}),(0,s.jsxs)("div",{className:"max-w-7xl mx-auto relative z-10",children:[(0,s.jsxs)("div",{className:"text-center mb-16 space-y-4",children:[(0,s.jsx)("h2",{className:"text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent",children:"Premium Versand"}),(0,s.jsx)("p",{className:"text-xl text-gray-600 max-w-3xl mx-auto",children:"Schnelle und sichere Lieferung deiner Mystery Box direkt zu dir nach Hause."})]}),(0,s.jsx)("div",{className:"grid md:grid-cols-3 gap-8",children:[{country:"Deutschland",code:"de",price:5.99},{country:"\xd6sterreich",code:"at",price:9.99},{country:"Schweiz",code:"ch",price:14.99}].map(e=>(0,s.jsxs)("div",{className:"bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1",children:[(0,s.jsxs)("div",{className:"flex items-start gap-4",children:[(0,s.jsx)("div",{className:"w-12 h-8 relative rounded overflow-hidden shadow-sm",children:(0,s.jsx)(a(),{src:"https://flagcdn.com/".concat(e.code,".svg"),alt:"".concat(e.country," Flagge"),fill:!0,className:"object-cover"})}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{className:"text-xl font-bold text-gray-900",children:e.country}),(0,s.jsxs)("div",{className:"flex items-baseline gap-2 mt-1",children:[(0,s.jsxs)("span",{className:"text-2xl font-bold text-indigo-600",children:[e.price," €"]}),(0,s.jsx)("span",{className:"text-sm text-gray-500",children:"inkl. MwSt."})]})]})]}),(0,s.jsxs)("div",{className:"mt-6 pt-6 border-t border-gray-100",children:[(0,s.jsxs)("div",{className:"flex items-center gap-2 text-gray-600",children:[(0,s.jsx)("svg",{className:"w-5 h-5 text-indigo-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M5 13l4 4L19 7"})}),(0,s.jsx)("span",{children:"Express Versand"})]}),(0,s.jsxs)("div",{className:"flex items-center gap-2 text-gray-600 mt-2",children:[(0,s.jsx)("svg",{className:"w-5 h-5 text-indigo-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M5 13l4 4L19 7"})}),(0,s.jsx)("span",{children:"Tracking inklusive"})]})]})]},e.code))}),(0,s.jsx)("div",{className:"mt-12 text-center",children:(0,s.jsxs)("div",{className:"inline-flex items-center gap-2 px-6 py-3 bg-indigo-50 rounded-full text-indigo-600",children:[(0,s.jsx)("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),(0,s.jsx)("span",{children:"Versand via DHL, Hermes oder DPD"})]})})]})]}),(0,s.jsxs)("div",{className:"relative h-24 my-8",children:[(0,s.jsx)("div",{className:"absolute inset-0 flex items-center",children:(0,s.jsx)("div",{className:"w-full border-t border-gray-200"})}),(0,s.jsx)("div",{className:"absolute inset-0 flex items-center justify-center",children:(0,s.jsx)("div",{className:"bg-white px-4",children:(0,s.jsx)("div",{className:"w-8 h-8 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full transform rotate-45"})})})]}),(0,s.jsxs)("section",{className:"py-24 px-4 relative overflow-hidden",children:[(0,s.jsx)("div",{className:"absolute inset-0 bg-gradient-to-b from-gray-50 to-white"}),(0,s.jsxs)("div",{className:"max-w-7xl mx-auto relative z-10",children:[(0,s.jsxs)("div",{className:"text-center mb-16 space-y-4",children:[(0,s.jsx)("span",{className:"inline-block px-4 py-2 bg-indigo-50 rounded-full text-indigo-600 text-sm font-medium",children:"Wichtige Informationen"}),(0,s.jsx)("h2",{className:"text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent",children:"So funktioniert's"}),(0,s.jsx)("p",{className:"text-xl text-gray-600 max-w-3xl mx-auto",children:"Transparente Regeln f\xfcr ein spannendes Auktionserlebnis"})]}),(0,s.jsx)("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-8",children:[{title:"Live Auktionen",description:"Biete in Echtzeit w\xe4hrend unserer Live-Streams auf spannende Mystery Boxes. Jede Box ist eine neue Chance auf tolle Produkte.",icon:"M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"},{title:"Retouren & R\xfccksendungen",description:"Unsere Boxen enthalten ausschlie\xdflich Retouren und R\xfccksendungen von Top-Marken. Jede Box ist ein \xdcberraschungspaket.",icon:"M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3"},{title:"Keine Retouren",description:"Aufgrund der Natur unserer Produkte sind R\xfcckgaben ausgeschlossen. Jedes Gebot ist verbindlich.",icon:"M6 18L18 6M6 6l12 12"},{title:"Live Unboxing",description:"Erlebe das Auspacken deiner Box live in unseren Streams. Teile die Spannung mit der Community.",icon:"M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"},{title:"Transparente Preise",description:"Alle Auktionen starten bei 1€. Der Endpreis wird von der Community bestimmt.",icon:"M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},{title:"Garantierte Echtheit",description:"Alle Produkte stammen aus autorisierten Quellen. Wir garantieren f\xfcr die Authentizit\xe4t.",icon:"M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"}].map((e,r)=>(0,s.jsxs)("div",{className:"group bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1",children:[(0,s.jsx)("div",{className:"w-12 h-12 mb-6 rounded-xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 flex items-center justify-center group-hover:from-indigo-500/20 group-hover:to-purple-500/20 transition-all duration-300",children:(0,s.jsx)("svg",{className:"w-6 h-6 text-indigo-600",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:e.icon})})}),(0,s.jsx)("h3",{className:"text-xl font-bold text-gray-900 mb-3",children:e.title}),(0,s.jsx)("p",{className:"text-gray-600 leading-relaxed",children:e.description})]},r))})]})]}),(0,s.jsx)("div",{className:"relative py-24",children:(0,s.jsx)("div",{className:"absolute inset-0 flex items-center justify-center",children:(0,s.jsx)("div",{className:"w-full max-w-7xl mx-auto px-4",children:(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsx)("div",{className:"absolute inset-0 bg-gradient-to-r from-transparent via-gray-100 to-transparent"}),(0,s.jsxs)("div",{className:"relative flex items-center justify-center",children:[(0,s.jsx)("div",{className:"flex-1 h-px bg-gradient-to-r from-transparent to-indigo-600/30"}),(0,s.jsxs)("div",{className:"relative mx-4 flex items-center gap-3",children:[(0,s.jsx)("div",{className:"w-2 h-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg transform hover:scale-150 transition-transform duration-300"}),(0,s.jsx)("div",{className:"w-12 h-12 rounded-xl bg-white shadow-2xl border border-gray-100/50 flex items-center justify-center transform rotate-45 hover:rotate-[225deg] transition-all duration-700 group",children:(0,s.jsx)("div",{className:"w-6 h-6 rounded bg-gradient-to-br from-indigo-600 to-purple-600 group-hover:scale-90 transition-transform duration-500"})}),(0,s.jsx)("div",{className:"w-2 h-2 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 shadow-lg transform hover:scale-150 transition-transform duration-300"})]}),(0,s.jsx)("div",{className:"flex-1 h-px bg-gradient-to-l from-transparent to-purple-600/30"})]})]})})})})]})}},8614:function(e,r,t){"use strict";t.r(r),t.d(r,{CartProvider:function(){return n},useCart:function(){return l}});var s=t(7437),i=t(2265);let a=(0,i.createContext)(void 0);function n(e){let{children:r}=e,[t,n]=(0,i.useState)(()=>(()=>{let e=localStorage.getItem("cart");return e?JSON.parse(e):[]})()),[l,o]=(0,i.useState)(0),[d,c]=(0,i.useState)(0),[m,x]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{let e=t.reduce((e,r)=>e+r.quantity,0),r=t.reduce((e,r)=>e+r.price*r.quantity,0);o(e),c(r),localStorage.setItem("cart",JSON.stringify(t))},[t]),(0,s.jsx)(a.Provider,{value:{items:t,addItem:e=>{n(r=>{let t=r.find(r=>r.id===e.id);return t?r.map(r=>r.id===e.id?{...r,quantity:r.quantity+1}:r):[...r,{...e,quantity:1}]})},removeItem:e=>{n(r=>r.filter(r=>r.id!==e))},updateQuantity:(e,r)=>{r<1||n(t=>t.map(t=>t.id===e?{...t,quantity:r}:t))},clearCart:()=>{n([]),localStorage.removeItem("cart")},totalItems:l,totalPrice:d,isCartOpen:m,setIsCartOpen:x},children:r})}function l(){let e=(0,i.useContext)(a);if(void 0===e)throw Error("useCart must be used within a CartProvider");return e}}},function(e){e.O(0,[986,396,971,472,744],function(){return e(e.s=4021)}),_N_E=e.O()}]);