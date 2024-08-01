import{r as a,o as l,c as d,w as n,a as o,b as t,t as A,d as r,m as g,e as w,f as u,_ as D,g as S,U as E,h as I,T as O,n as M,i as N,F as L}from"./index-BpkIiUVk.js";const P=r("span",{class:"grey-dark1"},"Wave UI",-1),R=r("div",{class:"spacer"},null,-1),V=["innerHTML"],j=r("div",{class:"text-center"},[t("View the project"),r("br"),t("on Github")],-1);function G(e,s,h,C,U,c){const _=a("w-icon"),m=a("router-link"),b=a("w-switch"),k=a("w-tooltip"),y=a("w-button"),v=a("w-toolbar");return l(),d(v,{class:"main-toolbar",fixed:""},{default:n(()=>[o(m,{class:"w-flex no-grow fill-height align-center home-link",to:"/",onClick:s[0]||(s[0]=p=>c.scrollTop(!1))},{default:n(()=>[o(_,{class:"wave-logo mr3",size:"3em"},{default:n(()=>[t("wi-wave")]),_:1}),P]),_:1}),R,o(b,{class:"mr2","model-value":e.$store.state.darkMode,"onUpdate:modelValue":s[1]||(s[1]=p=>(e.$store.commit("setDarkMode",p),e.$waveui.switchTheme(p?"dark":"light"))),"bg-color":"blue-dark5"},{thumb:n(()=>[o(_,null,{default:n(()=>[t("mdi "+A(e.$store.state.darkMode?"mdi-weather-night":"mdi-white-balance-sunny"),1)]),_:1})]),_:1},8,["model-value"]),r("strong",{class:"version size--xs",innerHTML:`v<code>${c.version}</code>`},null,8,V),o(k,{"z-index":"20","append-to":".main-toolbar"},{activator:n(({on:p})=>[r("div",g({class:"ml1"},w(p,!0)),[o(m,{to:"/release-notes",onClick:s[2]||(s[2]=T=>c.scrollTop(!0))},{default:n(()=>[o(_,{lg:""},{default:n(()=>[t("mdi mdi-update")]),_:1})]),_:1})],16)]),default:n(()=>[t("Release notes")]),_:1}),o(k,{"z-index":"20","append-to":".main-toolbar"},{activator:n(({on:p})=>[r("a",g({class:"grey-dark3 ml2"},w(p,!0),{href:"https://github.com/antoniandre/wave-ui",target:"_blank"}),[o(_,{lg:""},{default:n(()=>[t("mdi mdi-github")]),_:1})],16)]),default:n(()=>[j]),_:1}),o(k,{"z-index":"20","align-right":"","append-to":".main-toolbar"},{activator:n(({on:p})=>[r("div",g({class:"ml2 mr1"},w(p,!0)),[o(m,{class:"pink-light1",to:"/backers",onClick:s[3]||(s[3]=T=>c.scrollTop(!0))},{default:n(()=>[o(_,{lg:""},{default:n(()=>[t("mdi mdi-heart-multiple-outline")]),_:1})]),_:1})],16)]),default:n(()=>[t("Backers")]),_:1}),e.$waveui.breakpoint.xs?(l(),d(y,{key:0,class:"mr-1 hamburger-menu",onClick:s[4]||(s[4]=p=>e.$emit("update:drawerOpen",!h.drawerOpen)),lg:"",text:"",round:"",icon:h.drawerOpen?"wi-cross":"mdi mdi-menu"},null,8,["icon"])):u("",!0)]),_:1})}var H={npm_package_funding:"https://github.com/sponsors/antoniandre",NVM_INC:"/Users/anto/.nvm/versions/node/v22.1.0/include/node",npm_package_repository:"https://github.com/antoniandre/wave-ui",MANPATH:"/Users/anto/.nvm/versions/node/v22.1.0/share/man:/Library/Developer/CommandLineTools/SDKs/MacOSX.sdk/usr/share/man:/Applications/Xcode.app/Contents/Developer/Platforms/MacOSX.platform/usr/share/man:/Applications/Xcode.app/Contents/Developer/usr/share/man:/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/share/man:/usr/share/man:/usr/local/share/man:/Users/anto/.nvm/versions/node/v22.1.0/share/man:/Library/Developer/CommandLineTools/SDKs/MacOSX.sdk/usr/share/man:/Applications/Xcode.app/Contents/Developer/Platforms/MacOSX.platform/usr/share/man:/Applications/Xcode.app/Contents/Developer/usr/share/man:/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/share/man:",npm_package_devDependencies_typescript_eslint:"^8.0.0",npm_package_devDependencies_font_awesome:"^4.7.0",TERM_PROGRAM:"vscode",NODE:"/Users/anto/.nvm/versions/node/v22.1.0/bin/node",npm_package_devDependencies_ionicons:"^4.6.3",npm_package_exports___src_wave_ui__:"./src/wave-ui/*",INIT_CWD:"/Users/anto/localhost/wave-ui",npm_package_devDependencies_typescript:"^5.5.2",npm_package_scripts_build_bundle:"BUNDLE=true vite build && npm run build-types && mv ./dist/style.css ./dist/wave-ui.css",npm_package_exports___src_wave_ui_components:"./src/wave-ui/components/index.js",npm_package_homepage:"https://antoniandre.github.io/wave-ui",NVM_CD_FLAGS:"",npm_package_devDependencies_vite:"^5.3.1",npm_package_unpkg:"dist/wave-ui.umd.js",SHELL:"/usr/local/bin/fish",TERM:"xterm-256color",OMF_CONFIG:"/Users/anto/.config/omf",npm_package_devDependencies_eslint_config_standard:"^17.1.0",TMPDIR:"/var/folders/r7/_rv6vdmj54v1_lr7bzk7f3wr0000gn/T/",npm_package_devDependencies_splitpanes:"^3.1.5",npm_package_scripts_lint:"vite lint",npm_config_global_prefix:"/Users/anto/.nvm/versions/node/v22.1.0",TERM_PROGRAM_VERSION:"1.91.1",npm_package_devDependencies__vitejs_plugin_vue:"^5.0.5",npm_package_scripts_dev:"vite",npm_package_scripts_publish_doc:"npm run build && npm run build-bundle && git add . && git commit -m 'Publish documentation on Github.' && git push && git push --tag",ORIGINAL_XDG_CURRENT_DESKTOP:"undefined",MallocNanoZone:"0",npm_package_devDependencies_vite_svg_loader:"^5.1.0",COLOR:"1",npm_config_registry:"https://registry.npmjs.org/",npm_config_noproxy:"",PNPM_HOME:"/Users/anto/Library/pnpm",npm_config_local_prefix:"/Users/anto/localhost/wave-ui",npm_package_devDependencies_globals:"^15.9.0",npm_package_jsdelivr:"dist/wave-ui.umd.js",npm_package_description:"A UI framework for Vue.js 3 (and 2) with only the bright side. :sunny:",NVM_DIR:"/Users/anto/.nvm",USER:"anto",npm_package_devDependencies_rollup_plugin_delete:"^2.0.0",npm_package_devDependencies__eslint_js:"^9.8.0",npm_package_exports___package_json:"./package.json",npm_package_license:"MIT",COMMAND_MODE:"unix2003",PNPM_SCRIPT_SRC_DIR:"/Users/anto/localhost/wave-ui",npm_package_devDependencies_vuex:"^4.1.0",npm_package_devDependencies_pug:"^3.0.3",npm_package_exports___import:"./dist/wave-ui.es.js",npm_config_globalconfig:"/Users/anto/.nvm/versions/node/v22.1.0/etc/npmrc",npm_config_strict_peer_dependencies:"",npm_package_devDependencies_gsap:"^3.12.5",SSH_AUTH_SOCK:"/private/tmp/com.apple.launchd.97Ub5IeaqL/Listeners",npm_package_devDependencies_postcss:"^8.4.38",npm_package_devDependencies_eslint:"^9.8.0",__CF_USER_TEXT_ENCODING:"0x1F5:0x0:0x0",npm_execpath:"/Users/anto/.nvm/versions/node/v22.1.0/lib/node_modules/npm/bin/npm-cli.js",npm_package_devDependencies__typescript_eslint_eslint_plugin:"^6.21.0",npm_package_module:"./dist/wave-ui.es.js",npm_config_frozen_lockfile:"",npm_package_devDependencies__typescript_eslint_parser:"^6.21.0",npm_package_scripts_build_types:"tsc -p ./tsconfig.json",PATH:"/Users/anto/localhost/wave-ui/node_modules/.bin:/Users/anto/localhost/node_modules/.bin:/Users/anto/node_modules/.bin:/Users/node_modules/.bin:/node_modules/.bin:/Users/anto/.nvm/versions/node/v22.1.0/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/Users/anto/localhost/wave-ui/node_modules/.bin:/Users/anto/Library/pnpm/global/5/.pnpm/pnpm@9.5.0/node_modules/pnpm/dist/node-gyp-bin:/Users/anto/Library/pnpm:/Users/anto/.nvm/versions/node/v22.1.0/bin:/Applications/MAMP/bin/php/php8.2.0/bin:/opt/homebrew/bin:/Applications/MAMP/bin/php/php8.0.8/bin:/Users/antoniandre/.yarn/bin:/usr/local/bin:/System/Cryptexes/App/usr/bin:/usr/bin:/bin:/usr/sbin:/sbin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/local/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/appleinternal/bin:/Library/Apple/usr/bin:/Users/anto/Library/pnpm:/Users/anto/.nvm/versions/node/v22.1.0/bin",npm_package_devDependencies__tsconfig_recommended:"^1.0.6",npm_package_peerDependencies_vue:"^3.2.0",npm_package_json:"/Users/anto/localhost/wave-ui/package.json",npm_package_keywords_4:"vue3",npm_package_author:"Antoni Andre <antoniandre.web@gmail.com>",__CFBundleIdentifier:"com.microsoft.VSCode",npm_config_init_module:"/Users/anto/.npm-init.js",npm_config_userconfig:"/Users/anto/.npmrc",npm_command:"run-script",npm_package_keywords_5:"vue framework",PWD:"/Users/anto/localhost/wave-ui",npm_package_keywords_6:"ui",npm_package_exports___src_wave_ui:"./src/wave-ui/index.js",npm_lifecycle_event:"build",EDITOR:"vi",npm_package_devDependencies_vue:"^3.4.30",npm_package_devDependencies_simple_syntax_highlighter:"^3.0.3",npm_package_keywords_0:"wave ui",npm_package_types:"./dist/types/index.d.ts",npm_package_name:"wave-ui",LANG:"en_US.UTF-8",npm_package_devDependencies_eslint_plugin_import:"^2.29.1",npm_package_keywords_1:"ui framework",npm_package_devDependencies_sass:"^1.77.6",npm_package_devDependencies__faker_js_faker:"^8.4.1",npm_package_scripts_build:"vite build --base /wave-ui/",npm_package_keywords_2:"ui library",NODE_PATH:"/Users/anto/localhost/wave-ui/node_modules/.pnpm/vite@5.3.5_@types+node@22.0.2_sass@1.77.8/node_modules/vite/bin/node_modules:/Users/anto/localhost/wave-ui/node_modules/.pnpm/vite@5.3.5_@types+node@22.0.2_sass@1.77.8/node_modules/vite/node_modules:/Users/anto/localhost/wave-ui/node_modules/.pnpm/vite@5.3.5_@types+node@22.0.2_sass@1.77.8/node_modules:/Users/anto/localhost/wave-ui/node_modules/.pnpm/node_modules:/Users/anto/Library/pnpm/global/5/.pnpm/pnpm@9.5.0/node_modules/pnpm/bin/node_modules:/Users/anto/Library/pnpm/global/5/.pnpm/pnpm@9.5.0/node_modules/pnpm/node_modules:/Users/anto/Library/pnpm/global/5/.pnpm/pnpm@9.5.0/node_modules:/Users/anto/Library/pnpm/global/5/.pnpm/node_modules",npm_package_devDependencies_vueperslides:"^3.5.1",npm_package_keywords_3:"vue ui",VSCODE_GIT_ASKPASS_EXTRA_ARGS:"",XPC_FLAGS:"0x0",npm_config_npm_version:"10.7.0",npm_package_devDependencies_vue_router:"^4.4.0",npm_config_node_gyp:"/Users/anto/.nvm/versions/node/v22.1.0/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js",npm_package_main:"./dist/wave-ui.es.js",npm_package_devDependencies_material_design_icons:"^3.0.1",npm_package_version:"3.14.1",XPC_SERVICE_NAME:"0",npm_package_devDependencies_eslint_plugin_n:"^17.10.1",npm_package_devDependencies_autoprefixer:"^10.4.19",VSCODE_INJECTION:"1",npm_package_type:"module",SHLVL:"4",HOME:"/Users/anto",npm_package_devDependencies_eslint_plugin_vue:"^9.27.0",VSCODE_GIT_ASKPASS_MAIN:"/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass-main.js",npm_package_scripts_serve:"vite preview --base /wave-ui/",OMF_PATH:"/Users/anto/.local/share/omf",npm_package_devDependencies_eslint_plugin_promise:"^7.0.0",LOGNAME:"anto",npm_config_cache:"/Users/anto/.npm",npm_lifecycle_script:"vite build --base /wave-ui/",npm_package_exports___require:"./dist/wave-ui.umd.js",npm_package_exports___dist__:"./dist/*",XDG_DATA_DIRS:"/usr/local/share:/usr/share:/Applications/Visual Studio Code.app/Contents/Resources/app/out/vs/workbench/contrib/terminal/browser/media/fish_xdg_data",VSCODE_GIT_IPC_HANDLE:"/var/folders/r7/_rv6vdmj54v1_lr7bzk7f3wr0000gn/T/vscode-git-9bb814a04c.sock",LC_CTYPE:"en_US.UTF-8",NVM_BIN:"/Users/anto/.nvm/versions/node/v22.1.0/bin",npm_config_user_agent:"pnpm/9.5.0 npm/? node/v22.1.0 darwin arm64",npm_package_devDependencies__vue_compiler_sfc:"3.4.26",GIT_ASKPASS:"/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass.sh",VSCODE_GIT_ASKPASS_NODE:"/Applications/Visual Studio Code.app/Contents/Frameworks/Code Helper (Plugin).app/Contents/MacOS/Code Helper (Plugin)",npm_package_devDependencies_axios:"^1.7.2",npm_package_files_1:"src/wave-ui",npm_package_devDependencies__mdi_font:"^6.9.96",npm_package_files_0:"dist",npm_package_sideEffects_2:"*.vue",npm_package_sideEffects_1:"*.scss",npm_node_execpath:"/Users/anto/.nvm/versions/node/v22.1.0/bin/node",npm_package_sideEffects_0:"*.css",COLORTERM:"truecolor",npm_config_prefix:"/Users/anto/.nvm/versions/node/v22.1.0",NODE_ENV:"production",VITE_APP_VERSION:"3.14.1"};const X={props:{drawerOpen:{type:Boolean,default:!1}},emits:["update:drawerOpen"],computed:{version(){return H.VITE_APP_VERSION.replace(/-(\w)(\w+)\.(\d+)/,(e,s,h,C)=>` <strong>${s.toUpperCase()}${h} ${C}</strong>`)}},methods:{async scrollTop(e=!1){await this.$nextTick(),document.documentElement.scrollTop=e?document.querySelector(".content-wrap").offsetTop-42:0}}},z=D(X,[["render",G]]),F={class:"nav-menu-wrap"},B={class:"nav-menu"},W=r("div",{class:"title2 mt0"},"Knowledge base",-1),K=r("div",{class:"title2 mt6"},"UI components",-1),q=["innerHTML"],Y=r("div",{class:"title3 mt4"},"External UI components",-1),J=r("p",null,"By the same author",-1);function Z(e,s,h,C,U,c){const _=a("w-button"),m=a("w-tree"),b=a("w-tag"),k=a("w-icon"),y=a("router-link");return l(),S("div",F,[r("div",B,[e.$waveui.breakpoint.xs?(l(),d(_,{key:0,class:"close",onClick:s[0]||(s[0]=v=>e.$emit("update:drawerOpen",!1)),sm:"",outline:"",round:"",color:"primary",icon:"wi-cross"})):u("",!0),W,o(m,{class:"mt3",data:e.sections,selectable:"",onClick:c.onItemClick,"branch-icon":"wi-check","leaf-icon":"wi-check"},null,8,["data","onClick"]),K,o(m,{data:e.components,selectable:"",onClick:c.onItemClick},{item:n(({item:v})=>[r("span",{innerHTML:v.label},null,8,q),v.disabled?(l(),d(b,{key:0,class:"ml2 text-upper",round:"",xs:"",color:"red",outline:""},{default:n(()=>[t("Coming soon")]),_:1})):u("",!0),v.inProgress?(l(),d(b,{key:1,class:"ml2 text-upper",round:"",xs:"",color:"orange",outline:""},{default:n(()=>[t("In progress")]),_:1})):u("",!0)]),_:1},8,["data","onClick"]),Y,J,o(m,{data:e.externalComponents,selectable:"",onClick:c.onItemClick},null,8,["data","onClick"]),e.$waveui.breakpoint.xs?(l(),d(y,{key:1,class:"mt3 d-iblock",to:"/release-notes",onClick:c.onItemClick},{default:n(()=>[o(k,{class:"mr2"},{default:n(()=>[t("mdi mdi-update")]),_:1}),t("Release notes")]),_:1},8,["onClick"])):u("",!0)])])}const Q={props:{drawerOpen:{type:Boolean,default:!1}},emits:["update:drawerOpen"],data:()=>({sections:[{label:"Why Wave UI?",route:"/why-wave-ui",icon:"mdi mdi-help-circle-outline"},{label:"Getting started",route:"/getting-started",icon:"mdi mdi-play-circle-outline"},{label:"Browser support",route:"/browser-support",icon:"mdi mdi-check-circle-outline"},{label:"Options, presets &amp; <code>$waveui</code>",route:"/options-presets-and-waveui",icon:"mdi mdi-auto-fix"},{label:"Customization",route:"/customization",icon:"mdi mdi-tune"},{label:"Breakpoints",route:"/breakpoints",icon:"mdi mdi-format-horizontal-align-center"},{label:"Layout",route:"/layout",icon:"mdi mdi-format-list-text",open:!0,children:[{label:"Spaces",route:"/layout--spaces",icon:"mdi mdi-keyboard-space"},{label:"Grid system (flexbox)",route:"/layout--grid-system",icon:"mdi mdi-view-grid-outline"},{label:"Grid system (grid)",route:"/layout--simplified-grid-system",icon:"mdi mdi-view-grid-outline"},{label:"Flex",route:"/layout--flex",icon:"mdi mdi-star"},{label:"Other CSS classes",route:"layout--other-css-classes",icon:"mdi mdi-toolbox-outline"}]},{label:"Typography",route:"/typography",icon:"mdi mdi-format-font"},{label:"Colors",route:"/colors",icon:"mdi mdi-palette"},{label:"Themes",route:"/themes",icon:"mdi mdi-weather-night"},{label:"Shadows, borders & radii",route:"/shadows-borders-radii",icon:"mdi mdi-tools"},{label:"Transitions",route:"/transitions",icon:"mdi mdi-star-shooting-outline"}],components:[...E.filter(e=>!e.formElement).map(e=>({...e,route:`/w-${e.id}`})),{label:"Form elements",route:"/form",open:!0,children:[...E.filter(e=>e.formElement).map(e=>({...e,route:`/w-${e.id}`}))]}],externalComponents:[{label:"Calendar",route:"/calendar"},{label:"Slideshow",route:"/slideshow"},{label:"Splitter",route:"/splitter"}]}),methods:{onItemClick(){this.$emit("update:drawerOpen",!1),setTimeout(()=>{document.documentElement.scrollTop=document.querySelector(".content-wrap").offsetTop-42},200)}}},ee=D(Q,[["render",Z]]),ne={xmlns:"http://www.w3.org/2000/svg",fill:"rgb(var(--w-base-bg-color-rgb))",stroke:"var(--header-waves-pattern)"},oe=I('<defs><pattern id="a" width="300" height="150" stroke-width="5" patternTransform="scale(.2)" patternUnits="userSpaceOnUse"><circle cx="150" r="147.5"></circle><circle cx="150" r="127.5"></circle><circle cx="150" r="107.5"></circle><circle cx="150" r="87.5"></circle><circle cx="150" r="67.5"></circle><circle cx="150" r="47.5"></circle><circle cx="150" r="27.5"></circle><circle cy="75" r="147.5"></circle><circle cy="75" r="127.5"></circle><circle cy="75" r="107.5"></circle><circle cy="75" r="87.5"></circle><circle cy="75" r="67.5"></circle><circle cy="75" r="47.5"></circle><circle cy="75" r="27.5"></circle><circle cx="300" cy="75" r="147.5"></circle><circle cx="300" cy="75" r="127.5"></circle><circle cx="300" cy="75" r="107.5"></circle><circle cx="300" cy="75" r="87.5"></circle><circle cx="300" cy="75" r="67.5"></circle><circle cx="300" cy="75" r="47.5"></circle><circle cx="300" cy="75" r="27.5"></circle><circle cx="150" cy="150" r="147.5"></circle><circle cx="150" cy="150" r="127.5"></circle><circle cx="150" cy="150" r="107.5"></circle><circle cx="150" cy="150" r="87.5"></circle><circle cx="150" cy="150" r="67.5"></circle><circle cx="150" cy="150" r="47.5"></circle><circle cx="150" cy="150" r="27.5"></circle><circle cy="225" r="147.5"></circle><circle cy="225" r="127.5"></circle><circle cy="225" r="107.5"></circle><circle cy="225" r="87.5"></circle><circle cy="225" r="67.5"></circle><circle cy="225" r="47.5"></circle><circle cy="225" r="27.5"></circle><circle cx="300" cy="225" r="147.5"></circle><circle cx="300" cy="225" r="127.5"></circle><circle cx="300" cy="225" r="107.5"></circle><circle cx="300" cy="225" r="87.5"></circle><circle cx="300" cy="225" r="67.5"></circle><circle cx="300" cy="225" r="47.5"></circle><circle cx="300" cy="225" r="27.5"></circle></pattern></defs><rect width="100%" height="100%" fill="url(#a)" stroke="none"></rect>',2),se=[oe];function te(e,s){return l(),S("svg",ne,[...se])}const ae={render:te},re={class:"no-shrink"},ie={class:"content-wrap w-flex no-shrink"},ce={class:"w-flex justify-end align-center no-grow wrap"},le={class:"grey-light3 text-upper"},pe=r("div",{class:"spacer"},null,-1),de={class:"caption"},_e=r("span",{class:"text-nowrap"},"Html 5 & Pug",-1);function me(e,s,h,C,U,c){const _=a("nav-menu"),m=a("w-drawer"),b=a("wave-pattern"),k=a("toolbar"),y=a("w-progress"),v=a("router-view"),p=a("w-button"),T=a("w-transition-bounce"),f=a("w-icon"),$=a("router-link"),x=a("w-tooltip");return l(),S(L,null,[c.isMobile?(l(),d(m,{key:0,class:"nav-drawer",modelValue:e.drawerOpen,"onUpdate:modelValue":s[1]||(s[1]=i=>e.drawerOpen=i),right:"",width:330},{default:n(()=>[o(_,{"drawer-open":e.drawerOpen,"onUpdate:drawerOpen":s[0]||(s[0]=i=>e.drawerOpen=i)},null,8,["drawer-open"])]),_:1},8,["modelValue"])):u("",!0),r("header",re,[o(b,{class:"fill-width fill-height"}),o(k,{"drawer-open":e.drawerOpen,"onUpdate:drawerOpen":s[2]||(s[2]=i=>e.drawerOpen=i)},null,8,["drawer-open"])]),r("div",ie,[o(O,{name:"fade"},{default:n(()=>[c.loading?(l(),d(y,{key:0,color:"primary",tile:"",absolute:""})):u("",!0)]),_:1}),c.isMobile?u("",!0):(l(),d(_,{key:0,class:"navigation no-shrink","drawer-open":e.drawerOpen,"onUpdate:drawerOpen":s[3]||(s[3]=i=>e.drawerOpen=i)},null,8,["drawer-open"])),r("div",{class:M(["main-content w-flex column grow",`main-content--${e.$route.name}`])},[o(v,{class:M(["grow",`main--${e.$route.name}`])},{default:n(({Component:i})=>[o(O,{name:"fade-page",mode:"out-in"},{default:n(()=>[(l(),d(N(i)))]),_:2},1024)]),_:1},8,["class"]),e.goToTop?(l(),d(T,{key:0,appear:""},{default:n(()=>[o(p,{class:"go-top mb8 mr2",icon:"wi-chevron-up",fixed:"",bottom:"",right:"",xl:"","bg-color":e.$store.state.darkMode?"grey-dark4":"grey-light5",color:"base-color",onClick:c.scrollTop},null,8,["bg-color","onClick"])]),_:1})):u("",!0),r("footer",ce,[r("small",le,"Copyright © "+A(new Date().getFullYear())+" Antoni Andre, all rights reserved.",1),pe,o($,{class:"pink-light1 mr4",to:"/backers",onClick:c.scrollTop},{default:n(()=>[o(f,{class:"mr1"},{default:n(()=>[t("mdi mdi-heart-multiple-outline")]),_:1}),t("Backers")]),_:1},8,["onClick"]),r("div",de,[t("Made with"),o(x,{top:""},{activator:n(({on:i})=>[o(f,g({class:"ml1"},w(i),{sm:""}),{default:n(()=>[t("mdi mdi-vuejs")]),_:2},1040)]),default:n(()=>[t("Vue.js")]),_:1}),o(x,{top:""},{activator:n(({on:i})=>[o(f,g({class:"ml1"},w(i),{sm:""}),{default:n(()=>[t("mdi mdi-language-css3")]),_:2},1040)]),default:n(()=>[t("CSS 3")]),_:1}),o(x,{top:""},{activator:n(({on:i})=>[o(f,g({class:"ml1"},w(i),{sm:""}),{default:n(()=>[t("mdi mdi-language-html5")]),_:2},1040)]),default:n(()=>[_e]),_:1}),o(x,{top:""},{activator:n(({on:i})=>[o(f,g({class:"ml1"},w(i),{sm:""}),{default:n(()=>[t("mdi mdi-sass")]),_:2},1040)]),default:n(()=>[t("SASS")]),_:1}),o(x,{top:"","align-right":""},{activator:n(({on:i})=>[o(f,g({class:"ml1 heart"},w(i),{sm:""}),{default:n(()=>[t("mdi mdi-heart")]),_:2},1040)]),default:n(()=>[t("Love")]),_:1})])])],2)])],64)}const ue={components:{Toolbar:z,NavMenu:ee,WavePattern:ae},data:()=>({drawerOpen:!1,fixNavMenu:!1,navMenuTop:0,scrollingEl:null,contentWrapEl:null,goToTop:!1}),computed:{loading(){return this.$router.status.loading},isMobile(){return this.$waveui.breakpoint.xs}},methods:{onScroll(){this.fixNavMenu=this.scrollingEl.scrollTop>=this.navMenuTop,this.goToTop=this.scrollingEl.scrollTop>=this.contentWrapEl.offsetTop},onResize(){this.navMenuTop=this.contentWrapEl.offsetTop-12},async scrollTop(){await this.$nextTick(),document.documentElement.scrollTo({top:0,behavior:"smooth"})}},watch:{"$waveui.preferredTheme"(e){this.$store.commit("setDarkMode",e==="dark")}},mounted(){const e=localStorage.darkMode==="true"||localStorage.darkMode===void 0&&this.$waveui.preferredTheme==="dark";this.$store.commit("setDarkMode",e),this.$waveui.switchTheme(e?"dark":"light"),this.contentWrapEl=document.querySelector(".content-wrap"),this.navMenuTop=this.contentWrapEl.offsetTop-12,this.scrollingEl=document.documentElement;const s=window.location.hash.replace("#","");s&&setTimeout(()=>{document.getElementById(s).scrollIntoView({behavior:"smooth"})},200),window.addEventListener("scroll",this.onScroll),window.addEventListener("resize",this.onResize)},beforeUnmount(){window.removeEventListener("scroll",this.onScroll),window.removeEventListener("resize",this.onResize)}},ge=D(ue,[["render",me]]);export{ge as default};
