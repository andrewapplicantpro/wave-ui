(window["webpackJsonpWaveUI"]=window["webpackJsonpWaveUI"]||[]).push([["checkbox-examples-vue"],{"494d":function(e,t,c){"use strict";c.r(t);var l=function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("div",[c("w-card",{attrs:{"bg-color":"blue-light5"}},[c("p",{staticClass:"mb3"},[e._v("What it looks like:")]),c("w-checkboxes",{attrs:{items:e.checkboxes1,inline:""}}),c("div",{staticClass:"title4 mt4"},[e._v("States")]),c("div",{staticClass:"w-flex wrap"},[c("w-checkbox",{staticClass:"mr3 mb1",attrs:{value:!0,label:"Checked"}}),c("w-checkbox",{staticClass:"mr3 mb1",attrs:{value:!1,label:"Unchecked"}}),c("w-checkbox",{staticClass:"mr3 mb1",attrs:{value:!0,indeterminate:"",label:"Indeterminate"}}),c("w-checkbox",{staticClass:"mr3 mb1",attrs:{value:!0,disabled:"",label:"Checked &amp; disabled"}}),c("w-checkbox",{staticClass:"mr3 mb1",attrs:{value:!1,disabled:"",label:"Unchecked &amp; disabled"}}),c("w-checkbox",{staticClass:"mr3 mb1",attrs:{value:!0,disabled:"",indeterminate:"",label:"Indeterminate &amp; disabled"}})],1)],1),e._m(0),e._m(1),c("title-link",{staticClass:"title1 mt12",attrs:{h2:"",slug:"w-checkbox"}},[e._v("<w-checkbox>")]),c("div",{staticClass:"w-divider"}),c("example",{scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<div class="title4 mb2">Basic use</div>\n<w-checkbox>Single option</w-checkbox>\n\n<div class="title4 mt8 mb2">Using v-model on a single checkbox</div>\n<w-flex class="align-center">\n  <w-checkbox v-model="selection1">Single option</w-checkbox>\n\n  <span class="ml6">\n    v-model:\n    <code class="ml1">'+e._s("{{ selection1 }}")+'</code>\n  </span>\n</w-flex>\n\n<div class="title4 mt8 mb2">Using an array of v-model for multiple checkboxes</div>\n<w-flex class="align-center">\n  <w-checkbox class="mr2" v-model="selection2[0]">Option 1</w-checkbox>\n  <w-checkbox class="mr2" v-model="selection2[1]">Option 2</w-checkbox>\n  <w-checkbox v-model="selection2[2]">Option 3</w-checkbox>\n\n  <span class="ml6">\n    v-model:\n    <code class="ml1">'+e._s("{{ selection2 }}")+"</code>\n  </span>\n</w-flex>")]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  selection1: false,\n  selection2: [false, false, false]\n})\n")]},proxy:!0}])},[c("div",{staticClass:"title4 mb2"},[e._v("Basic use")]),c("w-checkbox",[e._v("Single option")]),c("div",{staticClass:"title4 mt8 mb2"},[e._v("Using v-model on a single checkbox")]),c("w-flex",{staticClass:"align-center"},[c("w-checkbox",{model:{value:e.selection1,callback:function(t){e.selection1=t},expression:"selection1"}},[e._v("Single option")]),c("span",{staticClass:"ml6"},[e._v("v-model:"),c("code",{staticClass:"ml1"},[e._v(e._s(e.selection1))])])],1),c("div",{staticClass:"title4 mt8 mb2"},[e._v("Using an array of v-model for multiple checkboxes")]),c("w-flex",{staticClass:"align-center"},[c("w-checkbox",{staticClass:"mr2",model:{value:e.selection2[0],callback:function(t){e.$set(e.selection2,0,t)},expression:"selection2[0]"}},[e._v("Option 1")]),c("w-checkbox",{staticClass:"mr2",model:{value:e.selection2[1],callback:function(t){e.$set(e.selection2,1,t)},expression:"selection2[1]"}},[e._v("Option 2")]),c("w-checkbox",{model:{value:e.selection2[2],callback:function(t){e.$set(e.selection2,2,t)},expression:"selection2[2]"}},[e._v("Option 3")]),c("span",{staticClass:"ml6"},[e._v("v-model:"),c("code",{staticClass:"ml1"},[e._v(e._s(e.selection2))])])],1)],1),c("alert",{attrs:{info:""}},[e._v("Unlike the radio buttons, checkboxes don't need the "),c("code",[e._v("name")]),e._v(" prop in addition to the "),c("code",[e._v("v-model")]),e._v("\nto work together and control with arrow keys since the default HTML behavior does not include control from\nthe keyboard arrows (you can navigate with "),c("kbd",[e._v("tab")]),e._v(" and toggle with "),c("kbd",[e._v("space")]),e._v(" or "),c("kbd",[e._v("enter")]),e._v(")."),c("br"),e._v("\nWhen you use a group of checkboxes via <w-checkboxes>, Wave UI will add the name attributes for you.\n")]),c("alert",{attrs:{tip:""}},[c("strong",{staticClass:"title5"},[e._v("Form validation")]),c("p",[e._v("When a validation is needed on checkboxes, each individual checkbox ("),c("span",{staticClass:"code"},[e._v("w-checkbox")]),e._v(") has a\nseparate validation message."),c("br"),e._v("\nIf you want only one validation for a group of checkboxes you must use the "),c("span",{staticClass:"code"},[e._v("w-checkboxes")]),e._v(" component.\n")])]),c("title-link",{attrs:{h2:""}},[e._v("Custom label in w-checkbox")]),e._m(2),c("example",{attrs:{"content-class":"mt3"},scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-checkbox class="mr5" name="checkbox1">\n  <span class="pr1">Choice 1 has an icon</span>\n  <w-icon md>mdi mdi-star</w-icon>\n</w-checkbox>\n\n<w-checkbox name="checkbox1">\n  <w-tag bg-color="green-light5" color="green-dark2">\n    Choice 2 is a tag\n    <w-icon class="ml1">mdi mdi-heart</w-icon>\n  </w-tag>\n</w-checkbox>\n')]},proxy:!0}])},[c("w-checkbox",{staticClass:"mr5",attrs:{name:"checkbox4"}},[c("span",{staticClass:"pr1"},[e._v("Choice 1 has an icon")]),c("w-icon",{attrs:{md:""}},[e._v("mdi mdi-star")])],1),c("w-checkbox",{attrs:{name:"checkbox4"}},[c("w-tag",{attrs:{"bg-color":"green-light5",color:"green-dark2"}},[e._v("Choice 2 is a tag"),c("w-icon",{staticClass:"ml1"},[e._v("mdi mdi-heart")])],1)],1)],1),c("alert",{staticClass:"mt8",attrs:{tip:""}},[e._v("As seen in this example, the "),c("span",{staticClass:"code"},[e._v("w-checkbox")]),e._v(" component allows you to have complete freedom\nregarding your checkboxes content, style and layout."),c("br"),e._v("\nBut because in most cases you won't need that, the "),c("span",{staticClass:"code"},[e._v("w-checkboxes")]),e._v(" component will make you\ngo much faster.\n")]),c("title-link",{staticClass:"title1 mt12",attrs:{h2:"",slug:"w-checkboxes"}},[e._v("<w-checkboxes>")]),c("div",{staticClass:"w-divider"}),e._m(3),c("title-link",{staticClass:"title2 primary",attrs:{h3:""}},[e._v("V-model")]),c("alert",{attrs:{info:""}},[e._v("If a value is set in the choice's data, it will be returned through the v-model when selected."),c("br"),e._v("\nIf no value is set, the choice's label will be returned instead.")]),c("example",{scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<div class="w-flex align-center">\n  <w-checkboxes v-model="selection" :items="checkboxes"></w-checkboxes>\n  <div class="title3 ml8">v-model: '+e._s("{{ selection || '[]' }}")+"</div>\n</div>")]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  selection: [],\n  checkboxes: [\n    { label: 'Choice 1', value: 1 },\n    { label: 'Choice 2', value: 2 },\n    { label: 'Choice 3', value: 3 }\n  ]\n})\n")]},proxy:!0}])},[c("div",{staticClass:"w-flex align-center"},[c("w-checkboxes",{attrs:{items:e.checkboxes1},model:{value:e.selection1b,callback:function(t){e.selection1b=t},expression:"selection1b"}}),c("div",{staticClass:"title3 ml8"},[e._v("v-model:"),c("code",{staticClass:"ml1"},[e._v(e._s(e.selection1b||"[]"))])])],1)]),c("p",[e._v("The v-model can also be preset, or updated externally.")]),c("example",{scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<div class="w-flex align-center">\n  <div>\n    <w-checkboxes v-model="selection" :items="checkboxes"></w-checkboxes>\n    <w-button class="mt2" @click="selection = selection.length ? [] : [2]">\n      Toggle checkbox 2\n    </w-button>\n  </div>\n\n  <div class="title3 ml8">\n    v-model:\n    <code class="ml1">'+e._s("{{ selection || '[]' }}")+"</code>\n  </div>\n</div>")]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  selection: [],\n  checkboxes: [\n    { label: 'Choice 1', value: 1 },\n    { label: 'Choice 2', value: 2 },\n    { label: 'Choice 3', value: 3 }\n  ]\n})\n")]},proxy:!0}])},[c("div",{staticClass:"w-flex align-center"},[c("div",[c("w-checkboxes",{attrs:{items:e.checkboxes1},model:{value:e.selection3,callback:function(t){e.selection3=t},expression:"selection3"}}),c("w-button",{staticClass:"mt2",on:{click:function(t){e.selection3=e.selection3.length?[]:[2]}}},[e._v("Toggle checkbox 2")])],1),c("div",{staticClass:"title3 ml8"},[e._v("v-model:"),c("code",{staticClass:"ml1"},[e._v(e._s(e.selection3||"[]"))])])])]),c("title-link",{attrs:{h2:""}},[e._v("Layout")]),c("example",{scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<div class="title4 mb2">Default column layout</div>\n<w-checkboxes :items="checkboxes"></w-checkboxes>\n\n<div class="title4 mt6 mb2">Inline layout</div>\n<w-checkboxes :items="checkboxes" inline></w-checkboxes>')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  checkboxes: [\n    { label: 'Choice 1', value: 1 },\n    { label: 'Choice 2', value: 2 },\n    { label: 'Choice 3', value: 3 }\n  ]\n})\n")]},proxy:!0}])},[c("div",{staticClass:"title4 mb2"},[e._v("Default column layout")]),c("w-checkboxes",{attrs:{items:e.checkboxes1}}),c("div",{staticClass:"title4 mt6 mb2"},[e._v("Inline layout")]),c("w-checkboxes",{attrs:{items:e.checkboxes1,inline:""}})],1),c("title-link",{attrs:{h2:""}},[e._v("Custom label content")]),e._m(4),c("example",{scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-checkboxes :items="checkboxes" color="green">\n  <template #item="{ item }">\n    <span class="pr2">'+e._s("{{ item.label }}")+'</span>\n    <w-icon class="deep-purple">'+e._s("{{ item.icon }}")+"</w-icon>\n  </template>\n</w-checkboxes>")]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  checkboxes: [\n    { label: 'Square', icon: 'mdi mdi-square' },\n    { label: 'Circle', icon: 'mdi mdi-circle' },\n    { label: 'Triangle', icon: 'mdi mdi-triangle' }\n  ]\n})\n")]},proxy:!0}])},[c("w-checkboxes",{attrs:{items:e.checkboxes3,color:"green"},scopedSlots:e._u([{key:"item",fn:function(t){var l=t.item;return[c("span",{staticClass:"pr2"},[e._v(e._s(l.label))]),c("w-icon",{staticClass:"deep-purple"},[e._v(e._s(l.icon))])]}}])})],1),c("div",{staticClass:"w-divider grey-light5 my12"}),c("title-link",{attrs:{h2:""}},[e._v("Round checkboxes")]),c("example",{attrs:{"content-class":"mt3"},scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-checkboxes\n  v-model="selection"\n  :items="checkboxes"\n  round\n  inline>\n</w-checkboxes>')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  selection: [1],\n  checkboxes: [\n    { label: 'Choice 1', value: 1 },\n    { label: 'Choice 2', value: 2 },\n    { label: 'Choice 3', value: 3 }\n  ]\n})\n")]},proxy:!0}])},[c("w-checkboxes",{attrs:{items:e.checkboxes1,round:"",inline:""},model:{value:e.selection8,callback:function(t){e.selection8=t},expression:"selection8"}})],1),c("title-link",{attrs:{h2:""}},[e._v("Color")]),e._m(5),c("title-link",{attrs:{h3:"",slug:"w-checkboxes--colors"}},[c("span",{staticClass:"code"},[e._v("w-checkboxes")]),e._v(" colors")]),c("example",{scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-checkboxes\n  v-model="selection1"\n  :items="checkboxes1"\n  color="purple">\n</w-checkboxes>\n\n<div class="title4 mt8 mb2">Different color per item</div>\n<w-checkboxes\n  v-model="selection2"\n  :items="checkboxes2">\n</w-checkboxes>')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  selection1: [1, 2, 3],\n  checkboxes1: [\n    { label: 'Choice 1', value: 1 },\n    { label: 'Choice 2', value: 2 },\n    { label: 'Choice 3', value: 3 }\n  ],\n  selection2: [1, 2, 3],\n  checkboxes2: [\n    { label: 'Choice 1', value: 1, color: 'amber' },\n    { label: 'Choice 2', value: 2, color: 'warning' },\n    { label: 'Choice 3', value: 3, color: 'error' }\n  ]\n})")]},proxy:!0}])},[c("w-checkboxes",{attrs:{items:e.checkboxes1,color:"purple"},model:{value:e.selection4,callback:function(t){e.selection4=t},expression:"selection4"}}),c("div",{staticClass:"title4 mt8 mb2"},[e._v("Different color per item")]),c("w-checkboxes",{attrs:{items:e.checkboxes4},model:{value:e.selection7,callback:function(t){e.selection7=t},expression:"selection7"}})],1),c("title-link",{attrs:{h3:"",slug:"w-checkbox--colors"}},[c("span",{staticClass:"code"},[e._v("w-checkbox")]),e._v(" colors")]),c("example",{scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-checkbox\n  class="mr2"\n  v-model="selection1[0]"\n  color="teal-light1">\n  Option 1\n</w-checkbox>\n<w-checkbox\n  v-model="selection1[1]"\n  color="teal-light1">\n  Option 2\n</w-checkbox>\n\n<div class="title4 mt8 mb2">Different color per item</div>\n<w-checkbox\n  class="mr2"\n  v-model="selection2[0]"\n  color="pink-light3">\n  Option 1\n</w-checkbox>\n<w-checkbox\n  v-model="selection2[1]"\n  color="blue-light1">\n  Option 2\n</w-checkbox>')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  selection1: [true, true],\n  selection2: [true, true],\n  checkboxes: [\n    { label: 'Choice 1' },\n    { label: 'Choice 2' },\n    { label: 'Choice 3' }\n  ]\n})")]},proxy:!0}])},[c("w-checkbox",{staticClass:"mr2",attrs:{color:"teal-light1"},model:{value:e.selection5[0],callback:function(t){e.$set(e.selection5,0,t)},expression:"selection5[0]"}},[e._v("Option 1")]),c("w-checkbox",{attrs:{color:"teal-light1"},model:{value:e.selection5[1],callback:function(t){e.$set(e.selection5,1,t)},expression:"selection5[1]"}},[e._v("Option 2")]),c("div",{staticClass:"title4 mt8 mb2"},[e._v("Different color per item")]),c("w-checkbox",{staticClass:"mr2",attrs:{color:"pink-light3"},model:{value:e.selection6[0],callback:function(t){e.$set(e.selection6,0,t)},expression:"selection6[0]"}},[e._v("Option 1")]),c("w-checkbox",{attrs:{color:"blue-light1"},model:{value:e.selection6[1],callback:function(t){e.$set(e.selection6,1,t)},expression:"selection6[1]"}},[e._v("Option 2")])],1)],1)},s=[function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("p",{staticClass:"mt12"},[e._v("There are 2 components: "),c("span",{staticClass:"code"},[e._v("w-checkbox")]),e._v(" & "),c("span",{staticClass:"code"},[e._v("w-checkboxes")]),e._v(".\nThe later is a group of checkboxes for convenience.\n")])},function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("p",[e._v("In most cases what you need is the "),c("span",{staticClass:"code"},[e._v("w-checkboxes")]),e._v(" component bellow, but let's start with the\nbasic component as it might be useful in single checkboxes and edge cases.\n")])},function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("p",[c("code",[e._v("w-checkbox")]),e._v(" provides a default slot to customize the content.")])},function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("p",{staticClass:"my5"},[e._v("The "),c("span",{staticClass:"code"},[e._v("w-checkboxes")]),e._v(" component allows a fast and easy rendering of\nmultiple checkboxes by passing the items through a prop."),c("br"),e._v("\nIt accepts an inline parameter to display the checkboxes inline,\nand allows you to customize the label of each checkbox through slot.\n")])},function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("p",[c("span",{staticClass:"code"},[e._v("w-checkboxes")]),e._v(" provides a "),c("code",[e._v("label")]),e._v(" slot to customize the label of each checkbox button.")])},function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("p",[e._v("By default the "),c("span",{staticClass:"code"},[e._v("w-checkbox")]),e._v(" & "),c("span",{staticClass:"code"},[e._v("w-checkboxes")]),e._v(" components will use the\nprimary color."),c("br"),e._v("\nYou can provide a different color with the "),c("code",[e._v("color")]),e._v(" option, or you can even set a different\ncolor per item by providing a "),c("code",[e._v("color")]),e._v(" attribute in each of the item objects.\n")])}],o={data:function(){return{selection1:!1,selection1b:[],selection2:[!1,!1,!1],selection3:[2],selection4:[1,2,3],selection5:[!0,!0],selection6:[!0,!0],selection7:[1,2,3],selection8:[1],checkboxes1:[{label:"Choice 1",value:1},{label:"Choice 2",value:2},{label:"Choice 3",value:3}],checkboxes2:[{label:"Choice 1"},{label:"Choice 2"},{label:"Choice 3"},{label:"Choice 4"}],checkboxes3:[{label:"Square",icon:"mdi mdi-square"},{label:"Circle",icon:"mdi mdi-circle"},{label:"Triangle",icon:"mdi mdi-triangle"}],checkboxes4:[{label:"Choice 1",value:1,color:"amber"},{label:"Choice 2",value:2,color:"warning"},{label:"Choice 3",value:3,color:"error"}]}}},n=o,i=c("2877"),a=Object(i["a"])(n,l,s,!1,null,null,null);t["default"]=a.exports}}]);
//# sourceMappingURL=checkbox-examples-vue.28339563.js.map