(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[516],{7858:function(e,r,i){Promise.resolve().then(i.bind(i,3841))},3841:function(e,r,i){"use strict";i.r(r),i.d(r,{default:function(){return x}});var t=i(7437),n=i(6691),s=i.n(n),a=i(1396),o=i.n(a),l=i(6128),d=i(4027),c=i(5251);let m=[{id:1,category:"Tech",name:"Mystery Tech Box",image:"/mysteryBox/images/mysterybox-tech.jpg",price:99.99,originalPrice:129.99,offer:"",description:"Entdecke spannende Tech-\xdcberraschungen!",detailDescription:"Ein spannendes Technik-Paket voller \xdcberraschungen! Von Gadgets bis zu Smart-Home-Produkten."},{id:2,category:"Fashion",name:"Mystery Fashion Box",image:"/mysteryBox/images/mysterybox-fashion.jpg",price:79.99,originalPrice:99.99,offer:"",description:"Dein Style-Upgrade wartet!",detailDescription:"Stylische \xdcberraschungen f\xfcr deinen Kleiderschrank! Aktuelle Trends und zeitlose Klassiker."},{id:3,category:"Food",name:"Mystery Food Box",image:"/mysteryBox/images/placeholder-box1.jpg",price:49.99,originalPrice:69.99,offer:"",description:"Kulinarische \xdcberraschungen warten auf dich!",detailDescription:"Eine kulinarische Entdeckungsreise mit ausgew\xe4hlten Spezialit\xe4ten und Geschmackserlebnissen."},{id:4,category:"Deluxe",name:"Mystery Deluxe Box",image:"/mysteryBox/images/mysterybox-deluxe.jpeg",price:149.99,originalPrice:199.99,offer:"",description:"Ein Hauch von Luxus und \xdcberraschung.",detailDescription:"Premium-\xdcberraschungen der Extraklasse! Hochwertige Produkte f\xfcr besondere Anspr\xfcche."},{id:5,category:"Mega",name:"Mystery Mega Box",image:"/mysteryBox/images/mysterybox-mega.jpg",price:199.99,originalPrice:249.99,offer:"",description:"Gro\xdfe \xdcberraschungen f\xfcr gro\xdfe Freude.",detailDescription:"Eine riesige Box voller hochwertiger \xdcberraschungen! Mehr Inhalt, mehr Freude."},{id:6,category:"Ultimate",name:"Mystery Ultimate Box",image:"/mysteryBox/images/mysterybox-ultimate.jpg",price:299.99,originalPrice:399.99,offer:"",description:"Die ultimative \xdcberraschungserfahrung.",detailDescription:"Das Beste vom Besten! Die ultimative Mystery Box mit exklusiven Produkten."},{id:7,category:"XXL",name:"XXL Premium Mystery Box",price:99.99,originalPrice:279.99,offer:"",image:"/mysteryBox/images/mysterybox-premium1.jpg",description:"10 KG pure \xdcberraschung!",detailDescription:"Eine gigantische 10 KG Box voller spannender \xdcberraschungen und Produkte."},{id:8,category:"Starter",name:"Starter Mystery Box",price:39.99,originalPrice:120,offer:"Flexible",image:"/mysteryBox/images/starterbox.jpg",description:"Der perfekte Einstieg in die Welt der Mystery Boxes",detailDescription:"Eine 3 KG Box voller \xdcberraschungen - ideal f\xfcr Mystery Box Einsteiger!"},{id:9,category:"Individuell",name:"Individuelle Mystery Box",price:"",originalPrice:"",offer:"Flexible",image:"/mysteryBox/images/starterbox.jpg",description:"Deine Box, deine Regeln!",detailDescription:"Eine komplett individuell anpassbare Mystery Box nach deinen W\xfcnschen und Vorstellungen."}];function x(e){let{params:r}=e,{addItem:i,setIsCartOpen:n}=(0,d.useCart)(),a=m.find(e=>e.id===parseInt(r.id));if(!a)return(0,t.jsx)(l.default,{children:(0,t.jsx)("div",{className:"min-h-screen flex items-center justify-center",children:(0,t.jsx)("div",{className:"text-2xl text-gray-600",children:"Product not found"})})});let x=9===a.id;return(0,t.jsx)(l.default,{children:(0,t.jsx)("main",{className:"min-h-screen bg-gradient-to-b from-gray-50 to-white py-8 md:py-12 px-4",children:(0,t.jsx)("div",{className:"max-w-6xl mx-auto",children:(0,t.jsx)(c.E.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"bg-white rounded-2xl shadow-xl overflow-hidden backdrop-blur-lg border border-gray-100",children:(0,t.jsxs)("div",{className:"flex flex-col md:flex-row",children:[(0,t.jsxs)("div",{className:"w-full md:w-[500px] h-[300px] md:h-[500px] relative group",children:[(0,t.jsx)(s(),{fill:!0,src:a.image,alt:a.name,sizes:"(max-width: 768px) 100vw, 500px",className:"object-cover transition-transform duration-300 group-hover:scale-105",priority:!0,quality:85,style:{objectFit:"cover"}}),(0,t.jsx)("div",{className:"absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"})]}),(0,t.jsxs)("div",{className:"p-6 md:p-10 flex flex-col flex-grow",children:[(0,t.jsxs)("div",{className:"flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4",children:[(0,t.jsx)("span",{className:"px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-indigo-500 to-purple-500 text-white",children:a.category}),!x&&a.price&&(0,t.jsxs)("span",{className:"text-2xl md:text-3xl font-bold text-indigo-600",children:[a.price," €"]})]}),(0,t.jsx)("h1",{className:"text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6",children:a.name}),(0,t.jsx)("p",{className:"text-base md:text-lg text-gray-600 mb-6 md:mb-8 leading-relaxed",children:a.detailDescription}),(0,t.jsxs)("div",{className:"mt-auto flex flex-col sm:flex-row gap-4",children:[x?(0,t.jsxs)(o(),{href:"/kontakt",className:"flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 md:py-4 px-6 md:px-8 rounded-xl hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2",children:[(0,t.jsx)("svg",{className:"h-5 w-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})}),"Kontaktieren Sie uns"]}):(0,t.jsxs)("button",{onClick:()=>{a&&9!==a.id&&"number"==typeof a.price&&(i({id:a.id,name:a.name,price:a.price,originalPrice:a.originalPrice||"",image:a.image,quantity:1}),n(!0))},className:"flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 md:py-4 px-6 md:px-8 rounded-xl hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2",children:[(0,t.jsx)("svg",{className:"h-5 w-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"})}),"In den Warenkorb"]}),(0,t.jsxs)(o(),{href:"/shop",className:"flex-1 px-6 md:px-8 py-3 md:py-4 border-2 border-indigo-600 text-indigo-600 rounded-xl hover:bg-indigo-50 transition-colors flex items-center justify-center gap-2",children:[(0,t.jsx)("svg",{className:"h-5 w-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 19l-7-7m0 0l7-7m-7 7h18"})}),"Zur\xfcck zum Shop"]})]})]})]})})})})})}}},function(e){e.O(0,[258,128,971,472,744],function(){return e(e.s=7858)}),_N_E=e.O()}]);