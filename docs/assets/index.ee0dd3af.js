import{r as s,o as d,c as m,w as e,a as n,b as r,m as w,t as v,d as I,e as i,f as h,_ as x,g as O,U,h as N,T as M,n as $,i as R,F as V}from"./index.18006717.js";const P=i("span",{class:"grey-dark1"},"Wave UI",-1),D=i("div",{class:"spacer"},null,-1),L=["innerHTML"],H=i("div",{class:"text-center"},[r("View the project"),i("br"),r("on Github")],-1);function G(o,t,b,C,S,a){const p=s("w-icon"),u=s("router-link"),_=s("w-tooltip"),y=s("w-switch"),k=s("w-button"),f=s("w-toolbar");return d(),m(f,{class:"main-toolbar",fixed:""},{default:e(()=>[n(u,{class:"w-flex no-grow fill-height align-center home-link",to:"/",onClick:t[0]||(t[0]=c=>a.scrollTop(!1))},{default:e(()=>[n(p,{class:"wave-logo mr3",size:"3em"},{default:e(()=>[r("wi-wave")]),_:1}),P]),_:1}),D,n(_,{"z-index":"20","append-to":".main-toolbar"},{activator:e(({on:c})=>[n(u,w({class:"v3-is-out w-tag w-tag--round mr4 xs-hide"},v(c),{to:"/release-notes",onClick:t[1]||(t[1]=E=>a.scrollTop(!0))}),{default:e(()=>[r("WAVE UI 3.0 IS OUT!")]),_:2},1040)]),default:e(()=>[r("Go to the release notes!")]),_:1}),n(y,{class:"mr2","model-value":o.$store.state.darkMode,"onUpdate:modelValue":t[2]||(t[2]=c=>(o.$store.commit("setDarkMode",c),o.$waveui.switchTheme(c?"dark":"light"))),"bg-color":"blue-dark5"},{thumb:e(()=>[n(p,null,{default:e(()=>[r("mdi "+I(o.$store.state.darkMode?"mdi-weather-night":"mdi-white-balance-sunny"),1)]),_:1})]),_:1},8,["model-value"]),i("strong",{class:"version size--xs",innerHTML:`v<code>${a.version}</code>`},null,8,L),n(_,{"z-index":"20","append-to":".main-toolbar"},{activator:e(({on:c})=>[i("div",w({class:"ml1"},v(c,!0)),[n(u,{to:"/release-notes",onClick:t[3]||(t[3]=E=>a.scrollTop(!0))},{default:e(()=>[n(p,{lg:""},{default:e(()=>[r("mdi mdi-update")]),_:1})]),_:1})],16)]),default:e(()=>[r("Release notes")]),_:1}),n(_,{"z-index":"20","append-to":".main-toolbar"},{activator:e(({on:c})=>[i("a",w({class:"grey-dark3 ml2"},v(c,!0),{href:"https://github.com/antoniandre/wave-ui",target:"_blank"}),[n(p,{lg:""},{default:e(()=>[r("mdi mdi-github")]),_:1})],16)]),default:e(()=>[H]),_:1}),n(_,{"z-index":"20","align-right":"","append-to":".main-toolbar"},{activator:e(({on:c})=>[i("div",w({class:"ml2 mr1"},v(c,!0)),[n(u,{class:"pink-light1",to:"/backers",onClick:t[4]||(t[4]=E=>a.scrollTop(!0))},{default:e(()=>[n(p,{lg:""},{default:e(()=>[r("mdi mdi-heart-multiple-outline")]),_:1})]),_:1})],16)]),default:e(()=>[r("Backers")]),_:1}),o.$waveui.breakpoint.xs?(d(),m(k,{key:0,class:"mr-1 hamburger-menu",onClick:t[5]||(t[5]=c=>o.$emit("update:drawerOpen",!b.drawerOpen)),lg:"",text:"",round:"",icon:b.drawerOpen?"wi-cross":"mdi mdi-menu"},null,8,["icon"])):h("",!0)]),_:1})}const z={props:{drawerOpen:{type:Boolean,default:!1}},emits:["update:drawerOpen"],computed:{version(){return"3.1.0".replace(/-(\w)(\w+)\.(\d+)/,(o,t,b,C)=>` <strong>${t.toUpperCase()}${b} ${C}</strong>`)}},methods:{async scrollTop(o=!1){await this.$nextTick(),document.documentElement.scrollTop=o?document.querySelector(".content-wrap").offsetTop-42:0}}},F=x(z,[["render",G]]),B={class:"nav-menu-wrap"},W={class:"nav-menu"},j=i("div",{class:"title2 mt0"},"Knowledge base",-1),X=i("div",{class:"title2 mt6"},"UI components",-1),K=["innerHTML"],q=i("div",{class:"title3 mt4"},"External UI components",-1),Y=i("p",null,"By the same author",-1);function J(o,t,b,C,S,a){const p=s("w-button"),u=s("w-tree"),_=s("w-tag"),y=s("w-icon"),k=s("router-link");return d(),O("div",B,[i("div",W,[o.$waveui.breakpoint.xs?(d(),m(p,{key:0,class:"close",onClick:t[0]||(t[0]=f=>o.$emit("update:drawerOpen",!1)),sm:"",outline:"",round:"",color:"primary",icon:"wi-cross"})):h("",!0),j,n(u,{class:"mt3",data:o.sections,selectable:"",onClick:a.onItemClick,"branch-icon":"wi-check","leaf-icon":"wi-check"},null,8,["data","onClick"]),X,n(u,{data:o.components,selectable:"",onClick:a.onItemClick},{item:e(({item:f})=>[i("span",{innerHTML:f.label},null,8,K),f.disabled?(d(),m(_,{key:0,class:"ml2 text-upper",round:"",xs:"",color:"red",outline:""},{default:e(()=>[r("Coming soon")]),_:1})):h("",!0),f.inProgress?(d(),m(_,{key:1,class:"ml2 text-upper",round:"",xs:"",color:"orange",outline:""},{default:e(()=>[r("In progress")]),_:1})):h("",!0)]),_:1},8,["data","onClick"]),q,Y,n(u,{data:o.externalComponents,selectable:"",onClick:a.onItemClick},null,8,["data","onClick"]),o.$waveui.breakpoint.xs?(d(),m(k,{key:1,class:"mt3 d-iblock",to:"/release-notes",onClick:a.onItemClick},{default:e(()=>[n(y,{class:"mr2"},{default:e(()=>[r("mdi mdi-update")]),_:1}),r("Release notes")]),_:1},8,["onClick"])):h("",!0)])])}const Z={props:{drawerOpen:{type:Boolean,default:!1}},emits:["update:drawerOpen"],data:()=>({sections:[{label:"Why Wave UI?",route:"/why-wave-ui",icon:"mdi mdi-help-circle-outline"},{label:"Getting started",route:"/getting-started",icon:"mdi mdi-play-circle-outline"},{label:"Browser support",route:"/browser-support",icon:"mdi mdi-check-circle-outline"},{label:"Options, presets &amp; <code>$waveui</code>",route:"/options-presets-and-waveui",icon:"mdi mdi-auto-fix"},{label:"Customization",route:"/customization",icon:"mdi mdi-tune"},{label:"Breakpoints",route:"/breakpoints",icon:"mdi mdi-format-horizontal-align-center"},{label:"Layout",route:"/layout",icon:"mdi mdi-format-list-text",open:!0,children:[{label:"Spaces",route:"/layout--spaces",icon:"mdi mdi-keyboard-space"},{label:"Grid system (flexbox)",route:"/layout--grid-system",icon:"mdi mdi-view-grid-outline"},{label:"Grid system (grid)",route:"/layout--simplified-grid-system",icon:"mdi mdi-view-grid-outline"},{label:"Flex",route:"/layout--flex",icon:"mdi mdi-star"},{label:"Other CSS classes",route:"layout--other-css-classes",icon:"mdi mdi-toolbox-outline"}]},{label:"Typography",route:"/typography",icon:"mdi mdi-format-font"},{label:"Colors",route:"/colors",icon:"mdi mdi-palette"},{label:"Themes",route:"/themes",icon:"mdi mdi-weather-night"},{label:"Shadows, borders & radii",route:"/shadows-borders-radii",icon:"mdi mdi-tools"},{label:"Transitions",route:"/transitions",icon:"mdi mdi-star-shooting-outline"}],components:[...U.filter(o=>!o.formElement).map(o=>({...o,route:`/w-${o.id}`})),{label:"Form elements",route:"/form",open:!0,children:[...U.filter(o=>o.formElement).map(o=>({...o,route:`/w-${o.id}`}))]}],externalComponents:[{label:"Calendar",route:"/calendar"},{label:"Slideshow",route:"/slideshow"},{label:"Splitter",route:"/splitter"}]}),methods:{onItemClick(){this.$emit("update:drawerOpen",!1),setTimeout(()=>{document.documentElement.scrollTop=document.querySelector(".content-wrap").offsetTop-42},200)}}},Q=x(Z,[["render",J]]),ee={xmlns:"http://www.w3.org/2000/svg",fill:"rgb(var(--w-base-bg-color-rgb))",stroke:"var(--header-waves-pattern)"},oe=N('<defs><pattern id="a" width="300" height="150" stroke-width="5" patternTransform="scale(.2)" patternUnits="userSpaceOnUse"><circle cx="150" r="147.5"></circle><circle cx="150" r="127.5"></circle><circle cx="150" r="107.5"></circle><circle cx="150" r="87.5"></circle><circle cx="150" r="67.5"></circle><circle cx="150" r="47.5"></circle><circle cx="150" r="27.5"></circle><circle cy="75" r="147.5"></circle><circle cy="75" r="127.5"></circle><circle cy="75" r="107.5"></circle><circle cy="75" r="87.5"></circle><circle cy="75" r="67.5"></circle><circle cy="75" r="47.5"></circle><circle cy="75" r="27.5"></circle><circle cx="300" cy="75" r="147.5"></circle><circle cx="300" cy="75" r="127.5"></circle><circle cx="300" cy="75" r="107.5"></circle><circle cx="300" cy="75" r="87.5"></circle><circle cx="300" cy="75" r="67.5"></circle><circle cx="300" cy="75" r="47.5"></circle><circle cx="300" cy="75" r="27.5"></circle><circle cx="150" cy="150" r="147.5"></circle><circle cx="150" cy="150" r="127.5"></circle><circle cx="150" cy="150" r="107.5"></circle><circle cx="150" cy="150" r="87.5"></circle><circle cx="150" cy="150" r="67.5"></circle><circle cx="150" cy="150" r="47.5"></circle><circle cx="150" cy="150" r="27.5"></circle><circle cy="225" r="147.5"></circle><circle cy="225" r="127.5"></circle><circle cy="225" r="107.5"></circle><circle cy="225" r="87.5"></circle><circle cy="225" r="67.5"></circle><circle cy="225" r="47.5"></circle><circle cy="225" r="27.5"></circle><circle cx="300" cy="225" r="147.5"></circle><circle cx="300" cy="225" r="127.5"></circle><circle cx="300" cy="225" r="107.5"></circle><circle cx="300" cy="225" r="87.5"></circle><circle cx="300" cy="225" r="67.5"></circle><circle cx="300" cy="225" r="47.5"></circle><circle cx="300" cy="225" r="27.5"></circle></pattern></defs><rect width="100%" height="100%" fill="url(#a)" stroke="none"></rect>',2),ne=[oe];function te(o,t){return d(),O("svg",ee,ne)}const re={render:te},se={class:"no-shrink"},ie={class:"content-wrap w-flex no-shrink"},le={class:"w-flex justify-end align-center no-grow wrap"},ae={class:"grey-light3 text-upper"},ce=i("div",{class:"spacer"},null,-1),de={class:"caption"},me=i("span",{class:"text-nowrap"},"Html 5 & Pug",-1);function pe(o,t,b,C,S,a){const p=s("nav-menu"),u=s("w-drawer"),_=s("wave-pattern"),y=s("toolbar"),k=s("w-progress"),f=s("router-view"),c=s("w-button"),E=s("w-transition-bounce"),g=s("w-icon"),A=s("router-link"),T=s("w-tooltip");return d(),O(V,null,[a.isMobile?(d(),m(u,{key:0,class:"nav-drawer",modelValue:o.drawerOpen,"onUpdate:modelValue":t[1]||(t[1]=l=>o.drawerOpen=l),right:"",width:330},{default:e(()=>[n(p,{"drawer-open":o.drawerOpen,"onUpdate:drawerOpen":t[0]||(t[0]=l=>o.drawerOpen=l)},null,8,["drawer-open"])]),_:1},8,["modelValue"])):h("",!0),i("header",se,[n(_,{class:"fill-width fill-height"}),n(y,{"drawer-open":o.drawerOpen,"onUpdate:drawerOpen":t[2]||(t[2]=l=>o.drawerOpen=l)},null,8,["drawer-open"])]),i("div",ie,[n(M,{name:"fade"},{default:e(()=>[a.loading?(d(),m(k,{key:0,color:"primary",tile:"",absolute:""})):h("",!0)]),_:1}),a.isMobile?h("",!0):(d(),m(p,{key:0,class:"navigation no-shrink","drawer-open":o.drawerOpen,"onUpdate:drawerOpen":t[3]||(t[3]=l=>o.drawerOpen=l)},null,8,["drawer-open"])),i("div",{class:$(["main-content w-flex column grow",`main-content--${o.$route.name}`])},[n(f,{class:$(["grow",`main--${o.$route.name}`])},{default:e(({Component:l})=>[n(M,{name:"fade-page",mode:"out-in"},{default:e(()=>[(d(),m(R(l)))]),_:2},1024)]),_:1},8,["class"]),o.goToTop?(d(),m(E,{key:0,appear:""},{default:e(()=>[n(c,{class:"go-top mb8 mr2",icon:"wi-chevron-up",fixed:"",bottom:"",right:"",xl:"","bg-color":o.$store.state.darkMode?"grey-dark4":"grey-light5",color:"base-color",onClick:a.scrollTop},null,8,["bg-color","onClick"])]),_:1})):h("",!0),i("footer",le,[i("small",ae,"Copyright \xA9 "+I(new Date().getFullYear())+" Antoni Andre, all rights reserved.",1),ce,n(A,{class:"pink-light1 mr4",to:"/backers",onClick:a.scrollTop},{default:e(()=>[n(g,{class:"mr1"},{default:e(()=>[r("mdi mdi-heart-multiple-outline")]),_:1}),r("Backers")]),_:1},8,["onClick"]),i("div",de,[r("Made with"),n(T,{top:""},{activator:e(({on:l})=>[n(g,w({class:"ml1"},v(l),{sm:""}),{default:e(()=>[r("mdi mdi-vuejs")]),_:2},1040)]),default:e(()=>[r("Vue.js")]),_:1}),n(T,{top:""},{activator:e(({on:l})=>[n(g,w({class:"ml1"},v(l),{sm:""}),{default:e(()=>[r("mdi mdi-language-css3")]),_:2},1040)]),default:e(()=>[r("CSS 3")]),_:1}),n(T,{top:""},{activator:e(({on:l})=>[n(g,w({class:"ml1"},v(l),{sm:""}),{default:e(()=>[r("mdi mdi-language-html5")]),_:2},1040)]),default:e(()=>[me]),_:1}),n(T,{top:""},{activator:e(({on:l})=>[n(g,w({class:"ml1"},v(l),{sm:""}),{default:e(()=>[r("mdi mdi-sass")]),_:2},1040)]),default:e(()=>[r("SASS")]),_:1}),n(T,{top:"","align-right":""},{activator:e(({on:l})=>[n(g,w({class:"ml1 heart"},v(l),{sm:""}),{default:e(()=>[r("mdi mdi-heart")]),_:2},1040)]),default:e(()=>[r("Love")]),_:1})])])],2)])],64)}const ue={components:{Toolbar:F,NavMenu:Q,WavePattern:re},data:()=>({drawerOpen:!1,fixNavMenu:!1,navMenuTop:0,scrollingEl:null,contentWrapEl:null,goToTop:!1}),computed:{loading(){return this.$router.status.loading},isMobile(){return this.$waveui.breakpoint.xs}},methods:{onScroll(){this.fixNavMenu=this.scrollingEl.scrollTop>=this.navMenuTop,this.goToTop=this.scrollingEl.scrollTop>=this.contentWrapEl.offsetTop},onResize(){this.navMenuTop=this.contentWrapEl.offsetTop-12},async scrollTop(){await this.$nextTick(),document.documentElement.scrollTo({top:0,behavior:"smooth"})}},watch:{"$waveui.preferredTheme"(o){this.$store.commit("setDarkMode",o==="dark")}},mounted(){this.$store.commit("setDarkMode",this.$waveui.preferredTheme==="dark"),this.contentWrapEl=document.querySelector(".content-wrap"),this.navMenuTop=this.contentWrapEl.offsetTop-12,this.scrollingEl=document.documentElement;const o=window.location.hash.replace("#","");o&&setTimeout(()=>{document.getElementById(o).scrollIntoView({behavior:"smooth"})},200),window.addEventListener("scroll",this.onScroll),window.addEventListener("resize",this.onResize)},beforeUnmount(){window.removeEventListener("scroll",this.onScroll),window.removeEventListener("resize",this.onResize)}},we=x(ue,[["render",pe]]);export{we as default};
