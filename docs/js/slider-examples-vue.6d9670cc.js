(window["webpackJsonpWaveUI"]=window["webpackJsonpWaveUI"]||[]).push([["slider-examples-vue"],{"063c":function(e,l,t){"use strict";t.r(l);var s=function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("div",[t("title-link",{attrs:{h2:""}},[e._v("Default")]),e._m(0),t("example",{attrs:{"content-class":"mt5 px6"},scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-slider :value="50"></w-slider>\n')]},proxy:!0}])},[t("w-slider",{attrs:{value:50}})],1),t("title-link",{attrs:{h2:""}},[e._v("V-model & external controls")]),t("example",{attrs:{"content-class":"px6"},scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-flex align-center>\n  <w-button\n    @click="sliderValue -= 5"\n    icon="wi-minus"\n    bg-color="success"\n    sm>\n  </w-button>\n\n  <w-slider\n    class="mx3 grow"\n    v-model="sliderValue"\n    color="green">\n  </w-slider>\n\n  <w-button\n    @click="sliderValue += 5"\n    icon="wi-plus"\n    bg-color="success"\n    sm>\n  </w-button>\n</w-flex>\n\n<div class="mt4">\n  v-model:\n  <code class="ml1">'+e._s("{{ sliderValue }}")+"</code>\n</div>")]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  sliderValue: 50\n})\n")]},proxy:!0}])},[t("w-flex",{attrs:{"align-center":""}},[t("w-button",{attrs:{icon:"wi-minus","bg-color":"success",sm:""},on:{click:function(l){e.sliderValue-=5}}}),t("w-slider",{staticClass:"mx3 grow",attrs:{color:"green"},model:{value:e.sliderValue,callback:function(l){e.sliderValue=l},expression:"sliderValue"}}),t("w-button",{attrs:{icon:"wi-plus","bg-color":"success",sm:""},on:{click:function(l){e.sliderValue+=5}}})],1),t("div",{staticClass:"mt4"},[e._v("v-model:"),t("code",{staticClass:"ml1"},[e._v(e._s(e.sliderValue))])])],1),t("title-link",{attrs:{h2:""}},[e._v("Min & max")]),t("example",{attrs:{"content-class":"px6"},scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<div class="title4 mb4">From 4 to 5</div>\n<w-slider\n  v-model="sliderValue"\n  :min="4"\n  :max="5">\n</w-slider>\n\n<div class="mt4">\n  v-model:\n  <code class="ml1">'+e._s("{{ sliderValue }}")+'</code>\n</div>\n\n<div class="title4 mt8 mb4">From -10 to 10</div>\n<w-slider\n  v-model="slider2Value"\n  :min="-10"\n  :max="10">\n</w-slider>\n\n<div class="mt4">\n  v-model:\n  <code class="ml1">'+e._s("{{ slider2Value }}")+"</code>\n</div>")]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  sliderValue: 4.5,\n  slider2Value: 0\n})\n")]},proxy:!0}])},[t("div",{staticClass:"title4 mb4"},[e._v("From 4 to 5")]),t("w-slider",{attrs:{min:4,max:5},model:{value:e.minMaxValue,callback:function(l){e.minMaxValue=l},expression:"minMaxValue"}}),t("div",{staticClass:"mt4"},[e._v("v-model:"),t("code",{staticClass:"ml1"},[e._v(e._s(e.minMaxValue))])]),t("div",{staticClass:"title4 mt8 mb4"},[e._v("From -10 to 10")]),t("w-slider",{attrs:{min:-10,max:10},model:{value:e.minMaxValue2,callback:function(l){e.minMaxValue2=l},expression:"minMaxValue2"}}),t("div",{staticClass:"mt4"},[e._v("v-model:"),t("code",{staticClass:"ml1"},[e._v(e._s(e.minMaxValue2))])])],1),t("title-link",{attrs:{h2:""}},[e._v("Disabled & readonly")]),t("example",{attrs:{"content-class":"px6"},scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-slider class="mt2" :value="50" disabled></w-slider>\n<w-slider class="mt8" :value="50" readonly></w-slider>\n')]},proxy:!0}])},[t("w-slider",{staticClass:"mt2",attrs:{value:50,disabled:""}}),t("w-slider",{staticClass:"mt8",attrs:{value:50,readonly:""}})],1),t("title-link",{attrs:{h2:""}},[e._v("Labels on the left & right")]),t("example",{attrs:{"content-class":"px6"},scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-slider\n  class="mt2"\n  :value="50"\n  label-left="0"\n  label-right="100">\n</w-slider>\n\n<w-slider\n  class="mt6"\n  :value="50"\n  label-left="Left">\n</w-slider>\n\n<w-slider\n  class="mt6"\n  :value="50"\n  label-right="Right">\n</w-slider>\n\n<w-slider\n  class="mt12"\n  :value="50">\n  <template #label-left>\n    <span>Weight</span>\n    <w-icon class="ml2 green">mdi mdi-feather</w-icon>\n  </template>\n  <template #label-right>\n    <w-icon class="red">mdi mdi-weight</w-icon>\n    <w-icon class="red">mdi mdi-weight</w-icon>\n  </template>\n</w-slider>\n')]},proxy:!0}])},[t("w-slider",{staticClass:"mt2",attrs:{value:50,"label-left":"0","label-right":"100"}}),t("w-slider",{staticClass:"mt6",attrs:{value:50,"label-left":"Left"}}),t("w-slider",{staticClass:"mt6",attrs:{value:50,"label-right":"Right"}}),t("w-slider",{staticClass:"mt12",attrs:{value:50},scopedSlots:e._u([{key:"label-left",fn:function(){return[t("span",[e._v("Weight")]),t("w-icon",{staticClass:"ml2 green"},[e._v("mdi mdi-feather")])]},proxy:!0},{key:"label-right",fn:function(){return[t("w-icon",{staticClass:"red"},[e._v("mdi mdi-weight")]),t("w-icon",{staticClass:"red"},[e._v("mdi mdi-weight")])]},proxy:!0}])})],1),t("title-link",{attrs:{h2:""}},[e._v("Thumb label")]),t("example",{attrs:{"content-class":"pt12 px8"},scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-slider\n  class="mt12"\n  :value="24"\n  thumb-label\n  color="primary-light3">\n</w-slider>\n')]},proxy:!0}])},[t("w-slider",{staticClass:"mb4",attrs:{value:24,"thumb-label":"",color:"primary-light3"}})],1),t("title-link",{attrs:{h3:"",slug:"custom-label-with-label-slot"}},[e._v("Customize the label with the "),t("span",{staticClass:"code"},[e._v("label")]),e._v(" slot")]),t("example",{attrs:{"content-class":"pt12 pb8 px8"},scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-slider\n  class="ma12"\n  :value="46.3"\n  thumb-label\n  color="primary-light3">\n  <template #label="{ value }">\n    '+e._s("{{ parseInt(value * 10) / 10 }}")+"%\n  </template>\n</w-slider>\n")]},proxy:!0}])},[t("w-slider",{attrs:{value:46.3,"thumb-label":"",color:"primary-light3"},scopedSlots:e._u([{key:"label",fn:function(l){var t=l.value;return[e._v(e._s(~~(10*t)/10)+"%")]}}])})],1),t("title-link",{attrs:{h3:""}},[e._v("Droplet style label")]),t("p",[e._v("With this option you can have a more modern look, but the drawback is that it can't contain long texts.")]),e._m(1),e._m(2),e._m(3),t("example",{attrs:{"content-class":"pt12 pl10 pr12"},scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-slider\n  class="ma12"\n  :value="30"\n  thumb-label="droplet">\n</w-slider>\n\n<w-slider\n  class="big-label.ma12"\n  :value="60"\n  thumb-label="droplet"\n  thumb-label-class="info--bg">\n</w-slider>')]},proxy:!0},{key:"css",fn:function(){return[e._v(".big-label {font-size: 1.4em;}\n")]},proxy:!0}])},[t("w-slider",{staticClass:"mt2 mb12",attrs:{value:30,"thumb-label":"droplet"}}),t("w-slider",{staticClass:"big-label mt12 mb4",attrs:{value:60,"thumb-label":"droplet","thumb-label-class":"info--bg"}})],1),t("title-link",{attrs:{h2:""}},[e._v("Steps")]),e._m(4),t("example",{attrs:{"content-class":"px6"},scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<div class="title4 mb4">Step = 1</div>\n<w-slider v-model="sliderValue" :step="1"></w-slider>\n<div class="mt4">\n  v-model:\n  <code class="ml1">'+e._s("{{ sliderValue }}")+'</code>\n</div>\n\n<div class="title4 mt8 mb4">Step = 10</div>\n<w-slider v-model="slider2Value" :step="10"></w-slider>\n<div class="mt4">\n  v-model:\n  <code class="ml1">'+e._s("{{ slider2Value }}")+"</code>\n</div>")]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  sliderValue: 50,\n  slider2Value: 50\n})\n")]},proxy:!0}])},[t("div",{staticClass:"title4 mb4"},[e._v("Step = 1")]),t("w-slider",{attrs:{step:1},model:{value:e.sliderStepsValue1,callback:function(l){e.sliderStepsValue1=l},expression:"sliderStepsValue1"}}),t("div",{staticClass:"mt4"},[e._v("v-model:"),t("code",{staticClass:"ml1"},[e._v(e._s(e.sliderStepsValue1))])]),t("div",{staticClass:"title4 mt8 mb4"},[e._v("Step = 10")]),t("w-slider",{attrs:{step:10},model:{value:e.sliderStepsValue2,callback:function(l){e.sliderStepsValue2=l},expression:"sliderStepsValue2"}}),t("div",{staticClass:"mt4"},[e._v("v-model:"),t("code",{staticClass:"ml1"},[e._v(e._s(e.sliderStepsValue2))])])],1),t("title-link",{attrs:{h2:""}},[e._v("Step labels")]),t("example",{attrs:{"content-class":"px6"},scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<div class="title4 mb4">Default step labels</div>\n<w-slider\n  v-model="sliderValue"\n  color="primary-light2"\n  :step="20"\n  step-labels>\n</w-slider>')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  sliderValue: 40\n})")]},proxy:!0}])},[t("div",{staticClass:"title4 mb4"},[e._v("Default step labels")]),t("w-slider",{attrs:{color:"primary-light2",step:20,"step-labels":""},model:{value:e.sliderStepsValue3,callback:function(l){e.sliderStepsValue3=l},expression:"sliderStepsValue3"}})],1)],1)},a=[function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("p",[e._v("By default the range will have the "),t("code",[e._v("primary")]),e._v(" color.")])},function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("p",[e._v("It is a breeze to override the droplet label size via CSS, this will suffice:"),t("code",[e._v(".w-slider {font-size: 1.4em}")])])},function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("p",[e._v("If you need you can also adjust the content font-size with:"),t("code",[e._v(".w-slider__thumb-label div {font-size: 2em;}")])])},function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("p",[e._v("It is also possible to add classes to the thumb label through the "),t("code",[e._v("thumb-label-class")]),e._v(" option\nto add a color for instance.")])},function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("p",[e._v("There is no step by default to ensure a very smooth movement while dragging. This also means that\nthe v-model will contain decimals."),t("br"),e._v("\nIf you don't want to deal with decimals you can use the "),t("code",[e._v("step")]),e._v(" option to make the slider only\nstop on integer values.")])}],n={data:function(){return{sliderValue:50,minMaxValue:4.5,minMaxValue2:0,sliderStepsValue1:50,sliderStepsValue2:50,sliderStepsValue3:40,sliderStepsValue4:40,sliderStepsValue5:40}}},i=n,r=(t("9d40"),t("2877")),o=Object(r["a"])(i,s,a,!1,null,null,null);l["default"]=o.exports},"1cd1":function(e,l,t){},"9d40":function(e,l,t){"use strict";t("1cd1")}}]);
//# sourceMappingURL=slider-examples-vue.6d9670cc.js.map