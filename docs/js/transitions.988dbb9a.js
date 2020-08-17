(window["webpackJsonpWaveUI"]=window["webpackJsonpWaveUI"]||[]).push([["transitions"],{"2c89":function(n,t,i){"use strict";var a=i("df11"),e=i.n(a);e.a},df11:function(n,t,i){},e66a:function(n,t,i){"use strict";i.r(t);var a=function(){var n=this,t=n.$createElement,i=n._self._c||t;return i("div",{staticClass:"ovh"},[i("title-link",{staticClass:"mt4",attrs:{h1:""}},[n._v("Transitions")]),i("p",[n._v("Here is a list of all the available transition components.")]),n._m(0),i("title-link",{attrs:{h2:""}},[n._v("Testing transition")]),i("example",{scopedSlots:n._u([{key:"html",fn:function(){return[n._v('<w-flex align-center>\n  <w-button\n    class="transition-toggle"\n    @click="toggleFade = !toggleFade"\n    color="primary"\n    outline>\n    Fade '+n._s(n.toggleFade?"out":"in")+'\n  </w-button>\n  <w-transition-fade>\n    <div class="transition-box" v-if="toggleFade">Fading transition</div>\n  </w-transition-fade>\n</w-flex>\n\n<w-flex align-center>\n  <w-button\n    class="transition-toggle"\n    @click="toggleScale = !toggleScale"\n    color="primary"\n    outline>\n    Scale '+n._s(n.toggleScale?"out":"in")+'\n  </w-button>\n  <w-transition-scale>\n    <div class="transition-box" v-if="toggleScale">Scaling transition</div>\n  </w-transition-scale>\n</w-flex>\n\n<w-flex align-center>\n  <w-button\n    class="transition-toggle"\n    @click="toggleScaleFade = !toggleScaleFade"\n    color="primary"\n    outline>\n    Scale fade '+n._s(n.toggleScaleFade?"out":"in")+'\n  </w-button>\n  <w-transition-scale-fade>\n    <div class="transition-box" v-if="toggleScaleFade">Scaling & fading transition</div>\n  </w-transition-scale-fade>\n</w-flex>\n\n<w-flex align-center>\n  <w-button\n    class="transition-toggle"\n    @click="toggleBounce = !toggleBounce"\n    color="primary"\n    outline>\n    Bounce '+n._s(n.toggleBounce?"out":"in")+'\n  </w-button>\n  <w-transition-bounce>\n    <div class="transition-box" v-if="toggleBounce">Bouncing transition</div>\n  </w-transition-bounce>\n</w-flex>\n\n<w-flex align-center>\n  <w-button\n    class="transition-toggle"\n    @click="toggleTwist = !toggleTwist"\n    color="primary"\n    outline>\n    Twist '+n._s(n.toggleTwist?"out":"in")+'\n  </w-button>\n  <w-transition-twist>\n    <div class="transition-box" v-if="toggleTwist">Twisting transition</div>\n  </w-transition-twist>\n</w-flex>\n\n<w-flex align-center>\n  <w-button\n    class="transition-toggle"\n    @click="toggleExpandX = !toggleExpandX"\n    color="primary"\n    outline>\n    '+n._s(n.toggleExpandX?"Collapse":"Expand")+' X\n  </w-button>\n  <w-transition-expand x>\n    <div class="transition-box text-nowrap" v-if="toggleExpandX">X-expanding transition</div>\n  </w-transition-expand>\n</w-flex>\n\n<w-flex align-center>\n  <w-button\n    class="transition-toggle"\n    @click="toggleExpandY = !toggleExpandY"\n    color="primary"\n    outline>\n    '+n._s(n.toggleExpandY?"Collapse":"Expand")+' Y\n  </w-button>\n  <w-transition-expand y>\n    <div class="transition-box" v-if="toggleExpandY">Y-expanding transition</div>\n  </w-transition-expand>\n</w-flex>\n\n<w-flex align-center>\n  <w-button\n    class="transition-toggle"\n    @click="toggleExpandXY = !toggleExpandXY"\n    color="primary"\n    outline>\n    '+n._s(n.toggleExpandXY?"Collapse":"Expand")+' X & Y\n  </w-button>\n  <w-transition-expand>\n    <div class="transition-box text-nowrap" v-if="toggleExpandXY">X & Y expanding transition</div>\n  </w-transition-expand>\n</w-flex>\n')]},proxy:!0},{key:"js",fn:function(){return[n._v("data: () => ({\n  toggleFade: false,\n  toggleScale: false,\n  toggleScaleFade: false,\n  toggleBounce: false,\n  toggleTwist: false,\n  toggleExpandX: false,\n  toggleExpandY: false,\n  toggleExpandXY: false\n})\n")]},proxy:!0},{key:"css",fn:function(){return[n._v(".transition-toggle {\n  margin: 12px 24px 12px 0;\n  width: 7.3em;\n}\n\n.transition-box {\n  background-color: #eee;\n  border: 1px solid #ddd;\n  border-radius: 3px;\n  padding: 1em;\n  width: 14em;\n  text-align: center;\n}\n")]},proxy:!0}])},[i("w-flex",{attrs:{"align-center":""}},[i("w-button",{staticClass:"transition-toggle",attrs:{color:"primary",outline:""},on:{click:function(t){n.toggleFade=!n.toggleFade}}},[n._v("Fade "+n._s(n.toggleFade?"out":"in"))]),i("w-transition-fade",[n.toggleFade?i("div",{staticClass:"transition-box"},[n._v("Fading transition")]):n._e()])],1),i("w-flex",{attrs:{"align-center":""}},[i("w-button",{staticClass:"transition-toggle",attrs:{color:"primary",outline:""},on:{click:function(t){n.toggleScale=!n.toggleScale}}},[n._v("Scale "+n._s(n.toggleScale?"out":"in"))]),i("w-transition-scale",[n.toggleScale?i("div",{staticClass:"transition-box"},[n._v("Scaling transition")]):n._e()])],1),i("w-flex",{attrs:{"align-center":""}},[i("w-button",{staticClass:"transition-toggle",attrs:{color:"primary",outline:""},on:{click:function(t){n.toggleScaleFade=!n.toggleScaleFade}}},[n._v("Scale fade "+n._s(n.toggleScaleFade?"out":"in"))]),i("w-transition-scale-fade",[n.toggleScaleFade?i("div",{staticClass:"transition-box"},[n._v("Scaling & fading transition")]):n._e()])],1),i("w-flex",{attrs:{"align-center":""}},[i("w-button",{staticClass:"transition-toggle",attrs:{color:"primary",outline:""},on:{click:function(t){n.toggleBounce=!n.toggleBounce}}},[n._v("Bounce "+n._s(n.toggleBounce?"out":"in"))]),i("w-transition-bounce",[n.toggleBounce?i("div",{staticClass:"transition-box"},[n._v("Bouncing transition")]):n._e()])],1),i("w-flex",{attrs:{"align-center":""}},[i("w-button",{staticClass:"transition-toggle",attrs:{color:"primary",outline:""},on:{click:function(t){n.toggleTwist=!n.toggleTwist}}},[n._v("Twist "+n._s(n.toggleTwist?"out":"in"))]),i("w-transition-twist",[n.toggleTwist?i("div",{staticClass:"transition-box"},[n._v("Twisting transition")]):n._e()])],1),i("w-flex",{attrs:{"align-center":""}},[i("w-button",{staticClass:"transition-toggle",attrs:{color:"primary",outline:""},on:{click:function(t){n.toggleExpandX=!n.toggleExpandX}}},[n._v(n._s(n.toggleExpandX?"Collapse":"Expand")+" X")]),i("w-transition-expand",{attrs:{x:""}},[n.toggleExpandX?i("div",{staticClass:"transition-box text-nowrap"},[n._v("X-expanding transition")]):n._e()])],1),i("w-flex",{attrs:{"align-center":""}},[i("w-button",{staticClass:"transition-toggle",attrs:{color:"primary",outline:""},on:{click:function(t){n.toggleExpandY=!n.toggleExpandY}}},[n._v(n._s(n.toggleExpandY?"Collapse":"Expand")+" Y")]),i("w-transition-expand",{attrs:{y:""}},[n.toggleExpandY?i("div",{staticClass:"transition-box"},[n._v("Y-expanding transition")]):n._e()])],1),i("w-flex",{attrs:{"align-center":""}},[i("w-button",{staticClass:"transition-toggle",attrs:{color:"primary",outline:""},on:{click:function(t){n.toggleExpandXY=!n.toggleExpandXY}}},[n._v(n._s(n.toggleExpandXY?"Collapse":"Expand")+" X & Y")]),i("w-transition-expand",[n.toggleExpandXY?i("div",{staticClass:"transition-box text-nowrap"},[n._v("X & Y expanding transition")]):n._e()])],1)],1),i("w-alert",{staticClass:"alert--tip",attrs:{"icon-outside":"",icon:"mdi mdi-lightbulb"}},[n._v("When using the x or xy transitions, you may want to prevent the content to wrap to a new line while\nthe animation, like in the above example.\nTo do so, you can add the "),i("span",{staticClass:"code"},[n._v("text-nowrap")]),n._v(" class on the element being transitioned.\n")]),i("h3",[n._v("Zoom on the expand transition")]),i("p",[n._v("The great thing with Wave UI is that it also animates any margin or padding on the transitionning\nelement! Look at this one:")]),i("example",{scopedSlots:n._u([{key:"html",fn:function(){return[n._v('<w-flex align-center>\n  <w-button\n    class="transition-toggle"\n    @click="toggleExpandXY = !toggleExpandXY"\n    color="primary"\n    outline\n    width="7.3em">\n    '+n._s(n.toggleExpandXY?"Collapse":"Expand")+' X & Y\n  </w-button>\n  <w-transition-expand :duration="2000">\n    <div\n      v-if="toggleExpandXY"\n      class="transition-box pa6 ma10 yellow-light5--bg"\n      style="width: auto">\n      <div class="amber-light4--bg pa2">\n        X & Y expanding transition\n      </div>\n    </div>\n  </w-transition-expand>\n</w-flex>')]},proxy:!0},{key:"js",fn:function(){return[n._v("data: () => ({\n  toggleExpandXY: false\n})")]},proxy:!0},{key:"css",fn:function(){return[n._v(".transition-toggle {margin: 12px 24px 12px 0;}\n\n.transition-box {\n  background-color: #eee;\n  border: 1px solid #ddd;\n  border-radius: 3px;\n  padding: 1em;\n  width: 14em;\n  text-align: center;\n}\n\n.transition-box div {\n  overflow: hidden;\n  white-space: nowrap;\n  width: 200px;\n}\n")]},proxy:!0}])},[i("w-flex",{attrs:{"align-center":""}},[i("w-button",{staticClass:"transition-toggle",attrs:{color:"primary",outline:"",width:"7.3em"},on:{click:function(t){n.toggleExpandXY2=!n.toggleExpandXY2}}},[n._v(n._s(n.toggleExpandXY2?"Collapse":"Expand")+" X & Y")]),i("w-transition-expand",{attrs:{duration:2e3}},[n.toggleExpandXY2?i("div",{staticClass:"transition-box pa6 ma10 yellow-light5--bg",staticStyle:{width:"auto"}},[i("div",{staticClass:"amber-light4--bg pa2",staticStyle:{overflow:"hidden","white-space":"nowrap",width:"200px"}},[n._v("X & Y expanding transition")])]):n._e()])],1)],1),i("title-link",{attrs:{h2:""}},[n._v("Transition duration")]),n._m(1),i("p",[n._v("The expand transition being fully Javascript driven, it accepts a duration parameter in milliseconds.\nSo you don't need to override the duration from a CSS rule.")])],1)},e=[function(){var n=this,t=n.$createElement,i=n._self._c||t;return i("ul",[i("li",[i("code",[n._v("w-transition-fade")])]),i("li",{staticClass:"mt1"},[i("code",[n._v("w-transition-scale")])]),i("li",{staticClass:"mt1"},[i("code",[n._v("w-transition-scale-fade")])]),i("li",{staticClass:"mt1"},[i("code",[n._v("w-transition-bounce")])]),i("li",{staticClass:"mt1"},[i("code",[n._v("w-transition-twist")])]),i("li",{staticClass:"mt1"},[i("code",[n._v("w-transition-expand")])])])},function(){var n=this,t=n.$createElement,i=n._self._c||t;return i("p",[n._v("You can easily override the default transition/animation duration by setting an explicit\nCSS transition/animation duration on the element being transitioned:\n"),i("span",{staticClass:"code"},[n._v('style="animation-duration: 3s"')]),n._v(".")])}],o={data:function(){return{toggleFade:!1,toggleScale:!1,toggleScaleFade:!1,toggleBounce:!1,toggleTwist:!1,toggleExpandX:!1,toggleExpandY:!1,toggleExpandXY:!1,toggleExpandXY2:!1}}},l=o,s=(i("2c89"),i("2877")),r=Object(s["a"])(l,a,e,!1,null,null,null);t["default"]=r.exports}}]);
//# sourceMappingURL=transitions.988dbb9a.js.map