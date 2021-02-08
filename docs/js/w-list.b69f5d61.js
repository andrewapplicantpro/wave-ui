(window["webpackJsonpWaveUI"]=window["webpackJsonpWaveUI"]||[]).push([["w-list","list-api-vue","list-examples-vue"],{4676:function(e,t,i){"use strict";i.r(t);var l=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("main",[i("ui-component-title",[e._v("w-list")]),i("examples"),i("api")],1)},s=[],n=i("fd2e"),o=i("9dc0"),a={components:{Examples:n["default"],Api:o["default"]}},c=a,r=i("2877"),m=Object(r["a"])(c,l,s,!1,null,null,null);t["default"]=m.exports},"9dc0":function(e,t,i){"use strict";i.r(t);var l=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"w-divider my12"}),i("title-link",{staticClass:"title1",attrs:{h2:""}},[e._v("API")]),i("component-api",{staticClass:"mt0",attrs:{items:e.props,descriptions:e.propsDescs,title:"Props"}}),i("component-api",{attrs:{items:e.slots,title:"Slots"}}),i("component-api",{attrs:{items:e.events,title:"Events"}})],1)},s=[],n=(i("13d5"),i("a45c")),o={items:'Expecting an array of objects. Each object being a list item, it should include at least a <code>label</code> attribute.<br>Alternatively, you can provide an integer number (call it <em class="code">x</em>), to loop through and create <em class="code">x</em> items in the list. You can then use the individual slots <code>item-title.x</code> &amp; <code>item-content.x</code> to define each item.',value:'<strong class="error"><code>model-value</code> in Vue 3.</strong><br>Provide an array of values if <code>multiple</code> is set to true, or a single value otherwise, to dictate the selected state of the list items.<br>Also accepts full objects when <code>return-object</code> is set to true.<br>This value gets updated when using a v-model.',checklist:"Sets the type of list to checklist: each item has a checkbox.",roundCheckboxes:"When <code>checklist</code> is true, displays round checkboxes instead of square ones.",multiple:"When selectable, allows multiple selections. A checklist always has multiple selections.",addIds:"When set to true, will add an id on the list and all the list items.<br>Useful for accessibility aria fields for instance.",hover:"On mouseover, highlights the list items with the given <code>color</code>. Also adds a small vertical padding on the list items to space them.",color:'Applies a color to the list items\'s text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',bgColor:'Applies a color to the list items\'s background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',selectionColor:'Applies a color to the selected list items\'s background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',nav:"Set the list as a navigation menu. All the items having a `route` attribute will be converted to link or router-link if vue-router is present.",icon:"A global icon string to apply to all the list items. E.g. <code>mdi mdi-home</code>.",itemLabelKey:"The property name (aka key) in each item object where to find the label of the item.",itemValueKey:"The property name (aka key) in each item object where to find the value of the item.",itemColorKey:"The property name (aka key) in each item object where to find the color of the item.",itemClass:"Applies a custom CSS class to every list item.",depth:!1,returnObject:"The current list selection is returned via the <code>value</code> prop or <code>v-model</code> as an array of full objects or a single full object (returning the original as given) when <code>multiple</code> is set to false.",arrowsNavigation:'Allows the navigation through the list items with the keyboard arrows up and down, when set to true and when the items are selectable (the <strong class="code">w-list</strong> has a <code>value</code> or <code>v-model</code>, or is a <code>nav</code> or <code>checklist</code>).',noUnselect:"Once at least one item is selected, prevents the list to have no selection. Clicking an item when only this one is selected will not unselect it."},a={item:{description:"Provide a custom content for every item. Applies to all the items, but can be overridden by the <code>item.x</code> slot.",params:{item:"The current item object.",index:"The item index in the list. Starts at 1 to be consistent with the <code>item.x</code> slot.",selected:"A boolean representing the selected state of the current item."}},"item.x":{description:'<em class="code">x</em> is an integer starting at <span class="code">1</span>.<br>Provide a custom content for a single item: the item at the index <em class="code">x</em>.',params:{item:"The current item object.",index:"The item index in the list. Starts at 1 to be consistent with the <code>item.x</code> slot.",selected:"A boolean representing the selected state of the current item."}}},c={input:{description:"Emitted each time the state of the list changes.<br>Updates the <code>v-model</code> value in Vue 2.x only.",params:{"[Array]":"An array of values of all the selected list items."}},"update:modelValue":{description:"Emitted each time the state of the list changes (when an item is selected or unselected).<br>Updates the v-model value in Vue 3 only.",params:{"[Array]":"An array of values of all the selected list items."}},"item-click":{description:"Emitted on each list item click.",params:{"[Object]":"The clicked list item's object."}},"item-select":{description:"Emitted on each list item selection or unselection (via click or keyboard <kbd>enter</kbd> key when focused).",params:{"[Object]":"The selected list item's object."}},"keydown:enter":{description:"Emitted on <kbd>enter</kbd> key down, when the focus is on any of the list items."},"keydown:escape":{description:"Emitted on <kbd>escape</kbd> key down, when the focus is on any of the list items."}},r={data:function(){return{propsDescs:o,slots:a}},computed:{props:function(){return n["a"].props},events:function(){return n["a"].emits.reduce((function(e,t){return(e[t]=c[t]||{})&&e}),{})}}},m=r,d=i("2877"),u=Object(d["a"])(m,l,s,!1,null,null,null);t["default"]=u.exports},a61e:function(e,t,i){"use strict";i("b0ad")},b0ad:function(e,t,i){},fd2e:function(e,t,i){"use strict";i.r(t);var l=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"lists-demo"},[e._m(0),i("w-list",{attrs:{items:4,icon:"wi-check"},scopedSlots:e._u([{key:"item.1",fn:function(){return[e._v("Simple list with or without icons")]},proxy:!0},{key:"item.2",fn:function(){return[e._v("Checklists")]},proxy:!0},{key:"item.3",fn:function(){return[e._v("Navigation menus")]},proxy:!0},{key:"item.4",fn:function(){return[e._v("List of selectable items")]},proxy:!0}])}),i("title-link",{attrs:{h2:""}},[e._v("Basic lists")]),i("example",{scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-flex wrap>\n  <div class="grow">\n    <div class="title3 mb6">Most basic</div>\n    <w-list :items="items"></w-list>\n  </div>\n\n  <div class="grow">\n    <div class="title3 mb6">With icons</div>\n    <w-list :items="items" icon="wi-check"></w-list>\n  </div>\n</w-flex>')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  items: [\n    { label: 'Item 1' },\n    { label: 'Item 2' },\n    { label: 'Item 3' },\n    { label: 'Item 4' },\n    { label: 'Item 5', disabled: true }\n  ]\n})\n")]},proxy:!0}])},[i("div",{staticClass:"w-flex wrap"},[i("div",{staticClass:"grow"},[i("div",{staticClass:"title3"},[e._v("Most basic")]),i("w-list",{attrs:{items:e.listItems1}})],1),i("div",{staticClass:"grow"},[i("div",{staticClass:"title3"},[e._v("With icons")]),i("w-list",{attrs:{items:e.listItems1,icon:"wi-check"}})],1)])]),i("title-link",{attrs:{h2:""}},[e._v("Color & hoverable")]),e._m(1),i("example",{scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-list :items="items1" color="pink" hover></w-list>\n<br />\n<w-list :items="items1" bg-color="blue-light5" color="primary" hover></w-list>')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  items1: [\n    { label: 'Item 1' },\n    { label: 'Item 2' },\n    { label: 'Item 3' },\n    { label: 'Item 4' }\n  ]\n})\n")]},proxy:!0}])},[i("w-list",{attrs:{items:e.listItems4,color:"pink",hover:""}}),i("br"),i("w-list",{attrs:{items:e.listItems4,"bg-color":"blue-light5",color:"primary",hover:""}})],1),i("title-link",{attrs:{h3:""}},[e._v("Different color per item")]),i("example",{scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-list :items="items" hover></w-list>')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  items: [\n    { label: 'Item 1', color: 'amber' },\n    { label: 'Item 2', color: 'warning' },\n    { label: 'Item 3', color: 'error' },\n    { label: 'Item 4', color: 'pink' }\n  ]\n})\n")]},proxy:!0}])},[i("w-list",{attrs:{items:e.listItems5,hover:""}})],1),i("title-link",{attrs:{h3:""}},[e._v("Selection-only color")]),e._m(2),e._m(3),e._m(4),i("example",{scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-list :value="[]" :items="listItems4" selection-color="pink" multiple></w-list>')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  items1: [\n    { label: 'Item 1' },\n    { label: 'Item 2' },\n    { label: 'Item 3' },\n    { label: 'Item 4' }\n  ]\n})\n")]},proxy:!0}])},[i("w-list",{attrs:{value:[],items:e.listItems4,"selection-color":"pink",multiple:""}})],1),i("title-link",{attrs:{h2:""}},[e._v("Custom rendering")]),e._m(5),i("example",{scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-list :items="5" hover>\n  <template #item="{ index }">'+e._s("{{ index }}")+"</template>\n  <template #item.3>\n    <strong>This is the great item #3</strong>\n  </template>\n</w-list>\n")]},proxy:!0}])},[i("w-list",{attrs:{items:5,hover:""},scopedSlots:e._u([{key:"item",fn:function(t){var i=t.index;return[e._v("Item "+e._s(i))]}},{key:"item.3",fn:function(){return[i("strong",[e._v("This is the great item #3")])]},proxy:!0}])})],1),e._m(6),i("example",{scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-list :items="items" hover>\n  <template #item="{ item }">\n    <w-flex align-center justify-space-between>\n      '+e._s("{{ item.label }}")+"\n      <w-icon md>"+e._s("{{ item.icon }}")+"</w-icon>\n    </w-flex>\n  </template>\n</w-list>")]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  items: [\n    { label: 'Star', icon: 'mdi mdi-star' },\n    { label: 'Check', icon: 'mdi mdi-check' },\n    { label: 'Cross', icon: 'mdi mdi-close' },\n    { label: 'Info', icon: 'mdi mdi-information' },\n    { label: 'Warning', icon: 'mdi mdi-alert' },\n    { label: 'Disabled', icon: 'mdi mdi-minus-circle' }\n  ]\n})\n")]},proxy:!0}])},[i("w-list",{attrs:{items:e.listItems2,hover:""},scopedSlots:e._u([{key:"item",fn:function(t){var l=t.item;return[i("div",{staticClass:"w-flex align-center justify-space-between"},[e._v(e._s(l.label)),i("w-icon",{attrs:{md:""}},[e._v(e._s(l.icon))])],1)]}}])})],1),i("title-link",{attrs:{h2:""}},[e._v("Selectable list items")]),e._m(7),i("example",{scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-radios v-model="multiple" :items="radios" inline></w-radios>\n\n<w-flex wrap align-center>\n  <w-list\n    v-model="selection"\n    :items="items"\n    color="deep-purple"\n    :multiple="multiple"\n    @item-click="itemClicked = $event"\n    class="mt6 mr4 grow">\n  </w-list>\n  <div v-if="itemClicked">\n    <div class="title3">Clicked item:</div>\n    <span>'+e._s("{{ itemClicked }}")+'</span>\n  </div>\n</w-flex>\n<div class="title3 mt2">\n  Selected item:\n  <code v-if="!multiple || Array.isArray(selection)" class="ml2">\n    '+e._s("{{ selection || 'null' }}")+'\n  </code>\n  <code v-else-if="multiple" class="ml2">\n    '+e._s("{{ selection ? [selection] : '[]' }}")+"\n  </code>\n</div>")]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  radios: [\n    { label: 'Single selection', value: false },\n    { label: 'Multiple selections', value: true }\n  ],\n  multiple: false,\n  items: [\n    { label: 'Item 1', value: 1 },\n    { label: 'Item 2', value: 2 },\n    { label: 'Item 3', value: 3 },\n    { label: 'Item 4', value: 4 },\n    { label: 'Item 5', value: 5, disabled: true }\n  ],\n  selection: 2,\n  itemClicked: null\n})")]},proxy:!0}])},[i("w-radios",{staticClass:"mb6",attrs:{items:e.radios,inline:""},model:{value:e.multiple,callback:function(t){e.multiple=t},expression:"multiple"}}),i("w-flex",{attrs:{wrap:"","align-center":""}},[i("w-list",{staticClass:"grow mr4",attrs:{items:e.listItems1,color:"deep-purple",multiple:e.multiple},on:{"item-click":function(t){e.itemClicked=t}},model:{value:e.selection1,callback:function(t){e.selection1=t},expression:"selection1"}}),e.itemClicked?i("div",[i("div",{staticClass:"title3"},[e._v("clicked item ("),i("span",{staticClass:"code"},[e._v("item-click")]),e._v(" event):")]),i("br"),i("span",{staticClass:"code"},[e._v(e._s(e.itemClicked))])]):e._e()],1),i("div",{staticClass:"title3 mt2"},[e._v("Selected item:"),!e.multiple||Array.isArray(e.selection1)?i("code",{staticClass:"ml2"},[e._v(e._s(e.selection1||"null"))]):e.multiple?i("code",{staticClass:"ml2"},[e._v(e._s(e.selection1?[e.selection1]:"[]"))]):e._e()])],1),e._m(8),i("title-link",{attrs:{h2:""}},[e._v("Checklists")]),i("example",{scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-flex wrap basis-zero :gap="3">\n  <div class="grow">\n    <p class="title3 mb4">Default</p>\n    <w-list\n      v-model="selection1"\n      :items="listItems1"\n      checklist\n      color="green">\n    </w-list>\n  </div>\n  <div class="grow">\n    <p class="title3 mb4">Round checkboxes</p>\n    <w-list\n      v-model="selection2"\n      :items="listItems1"\n      checklist\n      round-checkboxes\n      color="green">\n    </w-list>\n  </div>\n</w-flex>\n\n<w-flex wrap basis-zero :gap="3" class="mt4">\n  <div class="grow">\n    <p class="title3 mb4">Custom rendering, default styles</p>\n    <w-list\n      :items="listItems2"\n      item-value-key="id"\n      checklist\n      color="primary">\n      <template #item="{ item }">\n        <span>'+e._s("{{ item.label }}")+'</span>\n        <div class="spacer"></div>\n        <w-icon md>'+e._s("{{ item.icon }}")+'</w-icon>\n      </template>\n    </w-list>\n  </div>\n  <div class="grow">\n    <p class="title3 mb4">Custom rendering & styles</p>\n    <w-list\n      :items="listItems2"\n      item-value-key="id"\n      checklist\n      color="primary"\n      class="custom">\n      <template #item="{ item }">\n        <span>'+e._s("{{ item.label }}")+'</span>\n        <div class="spacer"></div>\n        <w-icon md>'+e._s("{{ item.icon }}")+"</w-icon>\n      </template>\n    </w-list>\n  </div>\n</w-flex>")]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  listItems1: [\n    { label: 'Item 1', value: 1 },\n    { label: 'Item 2', value: 2 },\n    { label: 'Item 3', value: 3 },\n    { label: 'Item 4', value: 4 },\n    { label: 'Item 5', value: 5, disabled: true }\n  ],\n  listItems2: [\n    { label: 'Star', id: 'star', icon: 'mdi mdi-star' },\n    { label: 'Check', id: 'check', icon: 'mdi mdi-check' },\n    { label: 'Cross', id: 'cross', icon: 'mdi mdi-close' },\n    { label: 'Info', id: 'info', icon: 'mdi mdi-information' },\n    { label: 'Warning', id: 'warning', icon: 'mdi mdi-alert' },\n    { label: 'Disabled', id: 'disabled', icon: 'mdi mdi-minus-circle', disabled: true }\n  ],\n  selection1: [1, 3],\n  selection2: 1\n})")]},proxy:!0},{key:"css",fn:function(){return[e._v(".w-list.custom .w-list__item-label:before {display: none;}\n.w-list.custom .w-list__item-label label {\n  position: relative;\n  transition: 0.3s ease-in-out;\n}\n.w-list.custom .w-list__item-label--active label {\n  opacity: 0.6;\n  color: #999;\n}\n.w-list.custom .w-list__item-label label:before {\n  content: '';\n  position: absolute;\n  top: 50%;\n  left: 0;\n  width: 0;\n  border-top: 1px solid #999;\n  pointer-events: none;\n  transition: 0.3s ease-in-out;\n}\n.w-list.custom .w-list__item-label--active label:before {\n  width: 100%;\n}\n")]},proxy:!0}])},[i("w-flex",{attrs:{wrap:"","basis-zero":"",gap:3}},[i("div",{staticClass:"grow"},[i("div",{staticClass:"title3 mb4"},[e._v("Default")]),i("w-list",{attrs:{items:e.listItems1,checklist:"",color:"green"},model:{value:e.selection3,callback:function(t){e.selection3=t},expression:"selection3"}})],1),i("div",{staticClass:"grow"},[i("div",{staticClass:"title3 mb4"},[e._v("Round checkboxes")]),i("w-list",{attrs:{items:e.listItems1,checklist:"","round-checkboxes":"",color:"green"},model:{value:e.selection4,callback:function(t){e.selection4=t},expression:"selection4"}})],1)]),i("w-flex",{staticClass:"mt4",attrs:{wrap:"","basis-zero":"",gap:3}},[i("div",{staticClass:"grow"},[i("div",{staticClass:"title3 mb4"},[e._v("Custom rendering, default styles")]),i("w-list",{attrs:{items:e.listItems2,"item-value-key":"id",checklist:"",color:"primary"},scopedSlots:e._u([{key:"item",fn:function(t){var l=t.item;return[i("span",[e._v(e._s(l.label))]),i("div",{staticClass:"spacer"}),i("w-icon",{attrs:{md:""}},[e._v(e._s(l.icon))])]}}])})],1),i("div",{staticClass:"grow"},[i("div",{staticClass:"title3 mb4"},[e._v("Custom rendering & styles")]),i("w-list",{staticClass:"custom",attrs:{items:e.listItems2,"item-value-key":"id",checklist:"",color:"primary"},scopedSlots:e._u([{key:"item",fn:function(t){var l=t.item;return[i("span",[e._v(e._s(l.label))]),i("div",{staticClass:"spacer"}),i("w-icon",{attrs:{md:""}},[e._v(e._s(l.icon))])]}}])})],1)])],1),i("title-link",{attrs:{h3:""}},[e._v("Checklist colors")]),i("p",[e._v("A checklist can have all the color options that the normal list can have, even a different color per item.")]),i("example",{scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-list v-model="selection" :items="items" checklist></w-list>')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  items: [\n    { label: 'Item 1', value: 1, color: 'amber' },\n    { label: 'Item 2', value: 2, color: 'warning' },\n    { label: 'Item 3', value: 3, color: 'error' },\n    { label: 'Item 4', value: 4, color: 'pink' }\n  ],\n  selection: [1, 2, 3, 4]\n})\n")]},proxy:!0}])},[i("w-list",{attrs:{items:e.listItems5,checklist:""},model:{value:e.selection5,callback:function(t){e.selection5=t},expression:"selection5"}})],1),i("title-link",{attrs:{h2:""}},[e._v("Navigation lists")]),e._m(9),e._m(10),i("example",{scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-list :items="items" nav color="primary">\n  <template #item="{ item }">\n    <span>'+e._s("{{ item.label }}")+'</span>\n    <div class="spacer"></div>\n    <w-icon md>'+e._s("{{ item.icon }}")+"</w-icon>\n  </template>\n</w-list>")]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  items: [\n    { label: 'Star', id: 'star', icon: 'mdi mdi-star', route: '/w-list/star' },\n    { label: 'Check', id: 'check', icon: 'mdi mdi-check', route: '/w-list/check' },\n    { label: 'Cross', id: 'cross', icon: 'mdi mdi-close', route: '/w-list/cross' },\n    { label: 'Info', id: 'info', icon: 'mdi mdi-information', route: '/w-list/info' },\n    { label: 'Warning', id: 'warning', icon: 'mdi mdi-alert', route: '/w-list/warning' },\n    { label: 'Disabled', id: 'disabled', icon: 'mdi mdi-minus-circle', route: '/w-list/disabled', disabled: true }\n  ]\n})")]},proxy:!0}])},[i("w-list",{attrs:{items:e.listItems2,nav:"",color:"primary"},scopedSlots:e._u([{key:"item",fn:function(t){var l=t.item;return[i("span",[e._v(e._s(l.label))]),i("div",{staticClass:"spacer"}),i("w-icon",{attrs:{md:""}},[e._v(e._s(l.icon))])]}}])})],1),i("router-view")],1)},s=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("p",[e._v("The "),i("span",{staticClass:"code"},[e._v("w-list")]),e._v(" component has multiple uses:")])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("p",[e._v("Like in most components, you can set a "),i("code",[e._v("color")]),e._v(" for the text and a "),i("code",[e._v("bg-color")]),e._v(" for the\nbackground.")])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("p",{staticClass:"grey-light1"},[e._v("In addition to the hover effect, the items may also be selectable (as per the\n"),i("a",{attrs:{href:"#selectable-list-items"}},[e._v("Selectable list items example")]),e._v("),\nbut in this example we are only demonstrating the selection color.")])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("p",[e._v("You may want a default color for all the items, but a different color for the selection only."),i("br"),e._v("\nYou can use the "),i("code",[e._v("selection-color")]),e._v(" option for this purpose.")])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("p",[e._v("If no "),i("code",[e._v("color")]),e._v(" and no "),i("code",[e._v("selection-color")]),e._v(" are set, the "),i("code",[e._v("selection-color")]),e._v(" will be set\nto primary by default."),i("br"),e._v("\nIn that case, if you don't want to default to the primary color, you can explicitly set\n"),i("code",[e._v("selection-color")]),e._v(" to a falsy value (false, null, or empty string), or another color.")])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("p",[e._v("In this example, we don't use the component's data at all."),i("br"),e._v("\nYou can easily define items directly in the template and have a different custom layout for every\nlist item just like in this example.")])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("p",[e._v("It's up to you to define your your list contents in the component's data or directly in the template."),i("br"),e._v("\nIn this example each item has a different icon stored in the data object.")])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("p",[e._v("If you provide a "),i("code",[e._v("v-model")]),e._v(" or "),i("code",[e._v("value")]),e._v(", the list items become selectable.")])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("p",[e._v("Note: you can get the list selection from the v-model, or by listening to the "),i("span",{staticClass:"code"},[e._v("input")]),e._v(" event.")])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("p",[e._v("The navigation list expects a "),i("code",[e._v("route")]),e._v(" attribute in the items that are links."),i("br"),e._v("\nIf you are using Vue Router, all the links will automatically be "),i("strong",{staticClass:"code"},[e._v("router-link")]),e._v("s."),i("br")])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("p",[e._v("It is possible to disable a link with a "),i("code",[e._v("disabled: true")]),e._v(" attribute in the item.")])}],n={data:function(){return{radios:[{label:"Single selection",value:!1},{label:"Multiple selections",value:!0}],multiple:!1,listItems1:[{label:"Item 1",value:1},{label:"Item 2",value:2},{label:"Item 3",value:3},{label:"Item 4",value:4},{label:"Item 5",value:5,disabled:!0}],listItems2:[{label:"Star",id:"star",icon:"mdi mdi-star",route:"/w-list/star"},{label:"Check",id:"check",icon:"mdi mdi-check",route:"/w-list/check"},{label:"Cross",id:"cross",icon:"mdi mdi-close",route:"/w-list/cross"},{label:"Info",id:"info",icon:"mdi mdi-information",route:"/w-list/info"},{label:"Warning",id:"warning",icon:"mdi mdi-alert",route:"/w-list/warning"},{label:"Disabled",id:"disabled",icon:"mdi mdi-minus-circle",route:"/w-list/disabled",disabled:!0}],listItems3:[{label:"Item 1"},{label:"Item 2"},{label:"Item 3"},{label:"Item 4"},{label:"Item 5",disabled:!0}],listItems4:[{label:"Item 1"},{label:"Item 2"},{label:"Item 3"},{label:"Item 4"}],listItems5:[{label:"Item 1",value:1,color:"amber"},{label:"Item 2",value:2,color:"warning"},{label:"Item 3",value:3,color:"error"},{label:"Item 4",value:4,color:"pink"}],selection1:2,selection2:"check",selection3:[1,3],selection4:1,selection5:[1,2,3,4],itemClicked:null}}},o=n,a=(i("a61e"),i("2877")),c=Object(a["a"])(o,l,s,!1,null,null,null);t["default"]=c.exports}}]);
//# sourceMappingURL=w-list.b69f5d61.js.map