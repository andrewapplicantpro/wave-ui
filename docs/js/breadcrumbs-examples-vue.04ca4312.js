(window["webpackJsonpWaveUI"]=window["webpackJsonpWaveUI"]||[]).push([["breadcrumbs-examples-vue"],{c857:function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("title-link",{attrs:{h2:""}},[e._v("Default")]),e._m(0),e._m(1),r("example",{scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-breadcrumbs :items="items" />')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  items: [\n    { label: 'Sitemap', route: '/sitemap' },\n    { label: 'Home', route: '/' },\n    { label: 'Current page', route: '/w-breadcrumbs' }\n  ]\n})\n")]},proxy:!0}])},[r("w-breadcrumbs",{attrs:{items:e.items}})],1),r("title-link",{attrs:{h2:""}},[e._v("Colors")]),e._m(2),r("example",{scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-breadcrumbs :items="items" color="orange" />')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  items: [\n    { label: 'Sitemap', route: '/sitemap' },\n    { label: 'Home', route: '/' },\n    { label: 'Current page', route: '/w-breadcrumbs' }\n  ]\n})\n")]},proxy:!0}])},[r("w-breadcrumbs",{attrs:{items:e.items,color:"orange"}})],1),r("title-link",{attrs:{h3:""}},[e._v("Separator color")]),r("example",{scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-breadcrumbs :items="items" separator-color="orange" />')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  items: [\n    { label: 'Sitemap', route: '/sitemap' },\n    { label: 'Home', route: '/' },\n    { label: 'Current page', route: '/w-breadcrumbs' }\n  ]\n})\n")]},proxy:!0}])},[r("w-breadcrumbs",{attrs:{items:e.items,"separator-color":"orange"}})],1),r("title-link",{attrs:{h2:""}},[e._v("Custom separator")]),e._m(3),r("title-link",{attrs:{h3:""}},[e._v("Icon")]),r("example",{scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-breadcrumbs :items="items" icon="mdi mdi-arrow-right" />')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  items: [\n    { label: 'Sitemap', route: '/sitemap' },\n    { label: 'Home', route: '/' },\n    { label: 'Current page', route: '/w-breadcrumbs' }\n  ]\n})\n")]},proxy:!0}])},[r("w-breadcrumbs",{attrs:{items:e.items,icon:"mdi mdi-arrow-right"}})],1),r("title-link",{attrs:{h3:""}},[e._v("Slot")]),r("example",{scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-breadcrumbs :items="items">\n  <template #separator>//</template>\n</w-breadcrumbs>')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  items: [\n    { label: 'Sitemap', route: '/sitemap' },\n    { label: 'Home', route: '/' },\n    { label: 'Current page', route: '/w-breadcrumbs' }\n  ]\n})\n")]},proxy:!0}])},[r("w-breadcrumbs",{attrs:{items:e.items},scopedSlots:e._u([{key:"separator",fn:function(){return[e._v("//")]},proxy:!0}])})],1),r("title-link",{attrs:{h2:""}},[e._v("Custom item template")]),e._m(4),r("example",{scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-breadcrumbs :items="items">\n  <template #item="{ item, isLast }">\n    <w-tag\n      :color="isLast ? \'grey\' : \'green\'"\n      round\n      outline\n      v-html="item.label">\n    </w-tag>\n  </template>\n</w-breadcrumbs>')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  items: [\n    { label: 'Sitemap', route: '/sitemap' },\n    { label: 'Home', route: '/' },\n    { label: 'Current page', route: '/w-breadcrumbs' }\n  ]\n})\n")]},proxy:!0}])},[r("w-breadcrumbs",{attrs:{items:e.items},scopedSlots:e._u([{key:"item",fn:function(t){var s=t.item,a=t.isLast;return[r("w-tag",{attrs:{color:a?"grey":"green",round:"",outline:""},domProps:{innerHTML:e._s(s.label)}})]}}])})],1),r("title-link",{attrs:{h2:""}},[e._v("Link on the last item")]),e._m(5),r("example",{scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-breadcrumbs :items="items" link-last-item />')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  items: [\n    { label: 'Sitemap', route: '/sitemap' },\n    { label: 'Home', route: '/' },\n    { label: 'Current page', route: '/w-breadcrumbs' }\n  ]\n})\n")]},proxy:!0}])},[r("w-breadcrumbs",{attrs:{items:e.items,"link-last-item":""}})],1),r("title-link",{attrs:{h2:""}},[e._v("Sizes")]),e._m(6),r("example",{scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-breadcrumbs class="my4" :items="items" xs></w-breadcrumbs>\n<w-breadcrumbs class="my4" :items="items" sm></w-breadcrumbs>\n<w-breadcrumbs class="my4" :items="items" md></w-breadcrumbs>\n<w-breadcrumbs class="my4" :items="items" lg></w-breadcrumbs>\n<w-breadcrumbs class="my4" :items="items" xl></w-breadcrumbs>')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  items: [\n    { label: 'Sitemap', route: '/sitemap' },\n    { label: 'Home', route: '/' },\n    { label: 'Current page', route: '/w-breadcrumbs' }\n  ]\n})")]},proxy:!0}])},[r("w-breadcrumbs",{staticClass:"my4",attrs:{items:e.items,xs:""}}),r("w-breadcrumbs",{staticClass:"my4",attrs:{items:e.items,sm:""}}),r("w-breadcrumbs",{staticClass:"my4",attrs:{items:e.items,md:""}}),r("w-breadcrumbs",{staticClass:"my4",attrs:{items:e.items,lg:""}}),r("w-breadcrumbs",{staticClass:"my4",attrs:{items:e.items,xl:""}})],1)],1)},a=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("By default, each item except the last one will be a link providing that a route attribute is found\nin the item (you can use the "),r("code",[e._v("item-route-key")]),e._v(" prop to name another attribute)."),r("br"),e._v("\nIf you are using Vue Router, all the links will automatically be "),r("strong",{staticClass:"code"},[e._v("router-link")]),e._v("s.")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("The items should have a "),r("code",[e._v("label")]),e._v(" attribute or otherwise nominated attribute via the\n"),r("code",[e._v("item-label-key")]),e._v(" prop.\n")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("Like in most components, you can set a "),r("code",[e._v("color")]),e._v(" for the component texts.\nThis applies to all the links only."),r("br"),e._v("\nYou can use the "),r("code",[e._v("separator-color")]),e._v(" prop to specifically change the color of the separators.\n")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("You can customize the separator simply by providing a different icon, or using the "),r("code",[e._v("separator")]),e._v("\nslot.")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("You can provide a custom template for the items via the "),r("code",[e._v("item")]),e._v(" slot.")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("The last item is usually the current page, therefore it's not useful to have a link on it."),r("br"),e._v("\nIf it makes sense in your application, you can use the "),r("code",[e._v("link-last-item")]),e._v(" prop.")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("The breadcrumbs size can be controlled via the preset sizes "),r("code",[e._v("xs")]),e._v(", "),r("code",[e._v("sm")]),e._v(", "),r("code",[e._v("md")]),e._v(",\n"),r("code",[e._v("lg")]),e._v(", "),r("code",[e._v("xl")]),e._v(" or via CSS override.")])}],n={data:function(){return{items:[{label:"Sitemap",route:"/sitemap"},{label:"Home",route:"/"},{label:"Current page",route:"/w-breadcrumbs"}]}}},o=n,i=r("2877"),m=Object(i["a"])(o,s,a,!1,null,null,null);t["default"]=m.exports}}]);
//# sourceMappingURL=breadcrumbs-examples-vue.04ca4312.js.map