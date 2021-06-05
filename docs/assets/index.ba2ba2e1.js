import{n as e,d as t}from"./index.2523cd5c.js";import"./vendor.f7aaafb3.js";const r={};var s=e({data:()=>({items:[{label:"Sitemap",route:"/sitemap"},{label:"Home",route:"/"},{label:"Current page",route:"/w-breadcrumbs"}]})},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("title-link",{attrs:{h2:""}},[e._v("Default")]),e._m(0),e._m(1),r("example",{scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-breadcrumbs :items="items" />')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  items: [\n    { label: 'Sitemap', route: '/sitemap' },\n    { label: 'Home', route: '/' },\n    { label: 'Current page', route: '/w-breadcrumbs' }\n  ]\n})\n")]},proxy:!0}])},[r("w-breadcrumbs",{attrs:{items:e.items}})],1),r("title-link",{attrs:{h2:""}},[e._v("Colors")]),e._m(2),r("example",{scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-breadcrumbs :items="items" color="orange" />')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  items: [\n    { label: 'Sitemap', route: '/sitemap' },\n    { label: 'Home', route: '/' },\n    { label: 'Current page', route: '/w-breadcrumbs' }\n  ]\n})\n")]},proxy:!0}])},[r("w-breadcrumbs",{attrs:{items:e.items,color:"orange"}})],1),r("title-link",{attrs:{h3:""}},[e._v("Separator color")]),r("example",{scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-breadcrumbs :items="items" separator-color="orange" />')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  items: [\n    { label: 'Sitemap', route: '/sitemap' },\n    { label: 'Home', route: '/' },\n    { label: 'Current page', route: '/w-breadcrumbs' }\n  ]\n})\n")]},proxy:!0}])},[r("w-breadcrumbs",{attrs:{items:e.items,"separator-color":"orange"}})],1),r("title-link",{attrs:{h2:""}},[e._v("Custom separator")]),e._m(3),r("title-link",{attrs:{h3:""}},[e._v("Icon")]),r("example",{scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-breadcrumbs :items="items" icon="mdi mdi-arrow-right" />')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  items: [\n    { label: 'Sitemap', route: '/sitemap' },\n    { label: 'Home', route: '/' },\n    { label: 'Current page', route: '/w-breadcrumbs' }\n  ]\n})\n")]},proxy:!0}])},[r("w-breadcrumbs",{attrs:{items:e.items,icon:"mdi mdi-arrow-right"}})],1),r("title-link",{attrs:{h3:""}},[e._v("Slot")]),r("example",{scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-breadcrumbs :items="items">\n  <template #separator>//</template>\n</w-breadcrumbs>')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  items: [\n    { label: 'Sitemap', route: '/sitemap' },\n    { label: 'Home', route: '/' },\n    { label: 'Current page', route: '/w-breadcrumbs' }\n  ]\n})\n")]},proxy:!0}])},[r("w-breadcrumbs",{attrs:{items:e.items},scopedSlots:e._u([{key:"separator",fn:function(){return[e._v("//")]},proxy:!0}])})],1),r("title-link",{attrs:{h2:""}},[e._v("Custom item template")]),e._m(4),r("example",{scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-breadcrumbs :items="items">\n  <template #item="{ item, isLast }">\n    <w-tag\n      :color="isLast ? \'grey\' : \'green\'"\n      round\n      outline\n      v-html="item.label">\n    </w-tag>\n  </template>\n</w-breadcrumbs>')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  items: [\n    { label: 'Sitemap', route: '/sitemap' },\n    { label: 'Home', route: '/' },\n    { label: 'Current page', route: '/w-breadcrumbs' }\n  ]\n})\n")]},proxy:!0}])},[r("w-breadcrumbs",{attrs:{items:e.items},scopedSlots:e._u([{key:"item",fn:function(t){var s=t.item,a=t.isLast;return[r("w-tag",{attrs:{color:a?"grey":"green",round:"",outline:""},domProps:{innerHTML:e._s(s.label)}})]}}])})],1),r("title-link",{attrs:{h2:""}},[e._v("Link on the last item")]),e._m(5),r("example",{scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-breadcrumbs :items="items" link-last-item />')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  items: [\n    { label: 'Sitemap', route: '/sitemap' },\n    { label: 'Home', route: '/' },\n    { label: 'Current page', route: '/w-breadcrumbs' }\n  ]\n})\n")]},proxy:!0}])},[r("w-breadcrumbs",{attrs:{items:e.items,"link-last-item":""}})],1),r("title-link",{attrs:{h2:""}},[e._v("Sizes")]),e._m(6),r("example",{scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-breadcrumbs class="my4" :items="items" xs></w-breadcrumbs>\n<w-breadcrumbs class="my4" :items="items" sm></w-breadcrumbs>\n<w-breadcrumbs class="my4" :items="items" md></w-breadcrumbs>\n<w-breadcrumbs class="my4" :items="items" lg></w-breadcrumbs>\n<w-breadcrumbs class="my4" :items="items" xl></w-breadcrumbs>')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  items: [\n    { label: 'Sitemap', route: '/sitemap' },\n    { label: 'Home', route: '/' },\n    { label: 'Current page', route: '/w-breadcrumbs' }\n  ]\n})")]},proxy:!0}])},[r("w-breadcrumbs",{staticClass:"my4",attrs:{items:e.items,xs:""}}),r("w-breadcrumbs",{staticClass:"my4",attrs:{items:e.items,sm:""}}),r("w-breadcrumbs",{staticClass:"my4",attrs:{items:e.items,md:""}}),r("w-breadcrumbs",{staticClass:"my4",attrs:{items:e.items,lg:""}}),r("w-breadcrumbs",{staticClass:"my4",attrs:{items:e.items,xl:""}})],1)],1)}),[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("By default, each item except the last one will be a link providing that a route attribute is found\nin the item (you can use the "),r("code",[e._v("item-route-key")]),e._v(" prop to name another attribute)."),r("br"),e._v("\nIf you are using Vue Router, all the links will automatically be "),r("strong",{staticClass:"code"},[e._v("router-link")]),e._v("s.")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("The items should have a "),r("code",[e._v("label")]),e._v(" attribute or otherwise nominated attribute via the\n"),r("code",[e._v("item-label-key")]),e._v(" prop.\n")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("Like in most components, you can set a "),r("code",[e._v("color")]),e._v(" for the component texts.\nThis applies to all the links only."),r("br"),e._v("\nYou can use the "),r("code",[e._v("separator-color")]),e._v(" prop to specifically change the color of the separators.\n")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("You can customize the separator simply by providing a different icon, or using the "),r("code",[e._v("separator")]),e._v("\nslot.")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("You can provide a custom template for the items via the "),r("code",[e._v("item")]),e._v(" slot.")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("The last item is usually the current page, therefore it's not useful to have a link on it."),r("br"),e._v("\nIf it makes sense in your application, you can use the "),r("code",[e._v("link-last-item")]),e._v(" prop.")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("The breadcrumbs size can be controlled via the preset sizes "),r("code",[e._v("xs")]),e._v(", "),r("code",[e._v("sm")]),e._v(", "),r("code",[e._v("md")]),e._v(",\n"),r("code",[e._v("lg")]),e._v(", "),r("code",[e._v("xl")]),e._v(" or via CSS override.")])}],!1,(function(e){for(let t in r)this[t]=r[t]}),null,null,null);s.options.__file="src/documentation/views/ui-components/breadcrumbs/examples.vue";var a=s.exports;const o={color:'Applies a text color to the breadcrumb\'s links.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',separatorColor:'Applies a text color (also applies to icons) to the breadcrumb\'s separators.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',icon:"Provide a custom icon for the separators.",items:"An array of items to display in the breadcrumbs. Each item must be an object containing a <code>label</code> and a <code>route</code>.<br>If no route is found the item will be wrapped in a span instead of a link.",linkLastItem:"When set to true, and if the last item has a provided route, the last item will be a link.",itemLabelKey:"The property name (aka key) in each item object where to find the label of the item.",itemRouteKey:"The property name (aka key) in each item object where to find the link of the item.",xs:"Sets the font size of the items.",sm:"Sets the font size of the items.",md:"Sets the font size of the items.",lg:"Sets the font size of the items.",xl:"Sets the font size of the items."},n={separator:{description:"Provide a custom template for the breadcrumbs' separator.",params:{index:"The separator index in the array of items. Starts at 1."}},item:{description:"Provide a custom template for the breadcrumbs' item.",params:{item:"The current item object.",index:"The item index in the array of items. Starts at 1.",isLast:"A boolean indicating if the current item is the last one. May be useful if you want a particular template for the current page."}}},i={},l={};var m=e({data:()=>({propsDescs:o,slots:n}),computed:{props:()=>t.props,events:()=>t.emits.reduce(((e,t)=>(e[t]={description:i[t]||""})&&e),{})}},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"w-divider my12"}),r("title-link",{staticClass:"title1",attrs:{h2:""}},[e._v("API")]),r("component-api",{staticClass:"mt0",attrs:{items:e.props,descriptions:e.propsDescs,title:"Props"}}),r("component-api",{attrs:{items:e.slots,title:"Slots"}}),r("component-api",{attrs:{items:e.events,title:"Events"}})],1)}),[],!1,(function(e){for(let t in l)this[t]=l[t]}),null,null,null);m.options.__file="src/documentation/views/ui-components/breadcrumbs/api.vue";var c=m.exports;const u={};var p=e({components:{Examples:a,Api:c}},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("main",[r("ui-component-title",{attrs:{slug:"w-breadcrumbs"}},[e._v("w-breadcrumbs")]),r("examples"),r("api")],1)}),[],!1,(function(e){for(let t in u)this[t]=u[t]}),null,null,null);p.options.__file="src/documentation/views/ui-components/breadcrumbs/index.vue";var b=p.exports;export default b;
