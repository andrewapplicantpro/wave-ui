import{n as e,x as s}from"./index.2523cd5c.js";import"./vendor.f7aaafb3.js";const r={};var o=e({data:()=>({progress1:37.86,progress:0,linearOrCircular:[{label:"Linear",value:!1},{label:"Circular",value:!0}],circular:!0,intervalId:null}),mounted(){this.intervalId=setInterval((()=>{this.progress+=10,100===this.progress&&(this.progress=0)}),700)},beforeDestroy(){clearInterval(this.intervalId)}},(function(){var e=this,s=e.$createElement,r=e._self._c||s;return r("div",[r("title-link",{staticClass:"title1",attrs:{h2:""}},[e._v("Circular progress & linear progress")]),r("p",{staticClass:"my4"},[e._v("First choose your progress style:")]),r("w-tabs",{attrs:{items:[{title:"Circular"},{title:"Linear"}],card:"","content-class":"pl6"},scopedSlots:e._u([{key:"item-content.1",fn:function(){return[r("title-link",{attrs:{h2:""}},[e._v("Default indeterminate progress & colors")]),r("p",[e._v("Like in most components, you can set a "),r("code",[e._v("color")]),e._v(" for the text and a "),r("code",[e._v("bg-color")]),e._v(" for the\nbackground."),r("br"),e._v("\nBy default, the progress foreground color is "),r("code",[e._v("primary")]),e._v(".")]),r("example",{attrs:{reactive:""},scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-progress class="ma1" circle></w-progress>\n<w-progress class="ma1" circle color="blue"></w-progress>\n<w-progress class="ma1" circle color="green"></w-progress>\n\n<div class="title3 my6">Mixing colors</div>\n<w-progress\n  class="ma1"\n  circle\n  color="yellow"\n  bg-color="cyan">\n</w-progress>\n')]},proxy:!0}])},[r("w-progress",{staticClass:"ma1",attrs:{circle:""}}),r("w-progress",{staticClass:"ma1",attrs:{circle:"",color:"blue"}}),r("w-progress",{staticClass:"ma1",attrs:{circle:"",color:"green"}}),r("h3",[e._v("Mixing colors")]),r("w-progress",{staticClass:"ma1",attrs:{circle:"",color:"yellow","bg-color":"cyan"}})],1),r("title-link",{attrs:{h2:""}},[e._v("Progress value")]),r("p",[e._v("The value can be given as a number or a string.")]),r("p",[e._v("When the value is "),r("code",[e._v("undefined")]),e._v(", "),r("code",[e._v("-1")]),e._v(" or not provided at all, it will be assumed\nindeterminate.")]),r("example",{attrs:{reactive:""},scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-progress class="ma1" circle :value="undefined"></w-progress>\n<w-progress class="ma1 mr8" circle :value="-1"></w-progress>\n\n<w-progress class="ma1" circle value="0"></w-progress>\n<w-progress class="ma1" circle value="12.5"></w-progress>\n<w-progress class="ma1" circle value="25"></w-progress>\n<w-progress class="ma1" circle value="50"></w-progress>\n<w-progress class="ma1" circle value="75"></w-progress>\n<w-progress class="ma1" circle value="100"></w-progress>\n')]},proxy:!0}])},[r("w-progress",{staticClass:"ma1",attrs:{circle:"",value:void 0}}),r("w-progress",{staticClass:"ma1 mr8",attrs:{circle:"",value:-1}}),r("w-progress",{staticClass:"ma1",attrs:{circle:"",value:"0"}}),r("w-progress",{staticClass:"ma1",attrs:{circle:"",value:"12.5"}}),r("w-progress",{staticClass:"ma1",attrs:{circle:"",value:"25"}}),r("w-progress",{staticClass:"ma1",attrs:{circle:"",value:"50"}}),r("w-progress",{staticClass:"ma1",attrs:{circle:"",value:"75"}}),r("w-progress",{staticClass:"ma1",attrs:{circle:"",value:"100"}})],1),r("h3",[e._v("Updated value example")]),r("example",{attrs:{reactive:""},scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-progress circle :value="progress"></w-progress>')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  progress: 0\n}),\n\nmounted () {\n  // Emulating progress.\n  setInterval(() => {\n    this.progress += 10\n    if (this.progress === 100) this.progress = 0\n  }, 700)\n}\n")]},proxy:!0}])},[r("w-progress",{attrs:{circle:"",value:e.progress}})],1),r("title-link",{attrs:{h2:""}},[e._v("Size & stroke thickness")]),r("example",{attrs:{reactive:""},scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-progress\n  class="ma1"\n  circle\n  value="38"\n  color="blue">\n</w-progress>\n\n<w-progress\n  class="ma1"\n  circle\n  value="38"\n  size="4em"\n  color="blue">\n</w-progress>\n\n<w-progress\n  class="ma1 mr8"\n  circle\n  value="38"\n  size="5em"\n  color="blue">\n</w-progress>\n\n<w-progress\n  class="ma1"\n  circle\n  value="38"\n  size="6em"\n  :stroke="2"\n  color="blue">\n</w-progress>\n\n<w-progress\n  class="ma1"\n  circle\n  value="38"\n  size="6em"\n  :stroke="15"\n  color="blue">\n</w-progress>\n\n<w-progress\n  class="ma1"\n  circle\n  value="38"\n  size="6em"\n  :stroke="40"\n  color="blue">\n</w-progress>\n')]},proxy:!0}])},[r("w-progress",{staticClass:"ma1",attrs:{circle:"",value:"38",color:"blue"}}),r("w-progress",{staticClass:"ma1",attrs:{circle:"",value:"38",size:"4em",color:"blue"}}),r("w-progress",{staticClass:"ma1 mr8",attrs:{circle:"",value:"38",size:"5em",color:"blue"}}),r("w-progress",{staticClass:"ma1",attrs:{circle:"",value:"38",size:"6em",stroke:2,color:"blue"}}),r("w-progress",{staticClass:"ma1",attrs:{circle:"",value:"38",size:"6em",stroke:15,color:"blue"}}),r("w-progress",{staticClass:"ma1",attrs:{circle:"",value:"38",size:"6em",stroke:40,color:"blue"}})],1),r("title-link",{attrs:{h2:""}},[e._v("Progress value with label")]),r("p",[e._v("The default label displays the rounded value without the "),r("code",[e._v("%")]),e._v(" sign, so it fits in smaller circles.")]),r("p",[e._v("You can customize the label to display the value as you wish.")]),r("example",{attrs:{reactive:""},scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<p>Default label - Custom label</p>\n\n<w-progress\n  class="ma1 mr8"\n  circle\n  v-model="progress"\n  size="5em"\n  label>\n</w-progress>\n\n<w-progress\n  class="ma1"\n  circle\n  v-model="progress"\n  size="5em">\n  <strong>'+e._s("{{ progress }}")+"%</strong>\n</w-progress>")]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  progress: 37.86\n})\n")]},proxy:!0}])},[r("p",[e._v("Default label   -   Custom label")]),r("w-progress",{staticClass:"ma1 mr8",attrs:{circle:"",size:"5em",label:""},model:{value:e.progress1,callback:function(s){e.progress1=s},expression:"progress1"}}),r("w-progress",{staticClass:"ma1",attrs:{circle:"",size:"5em"},model:{value:e.progress1,callback:function(s){e.progress1=s},expression:"progress1"}},[r("strong",[e._v(e._s(e.progress1)+"%")])])],1),r("h3",[e._v("Providing a color for the custom label")]),r("example",{attrs:{reactive:""},scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-progress\n  class="ma1"\n  circle\n  value="38"\n  size="3em"\n  label\n  label-color="indigo-light4">\n</w-progress>\n')]},proxy:!0}])},[r("w-progress",{staticClass:"ma1",attrs:{circle:"",value:"38",size:"3em",label:"","label-color":"indigo-light4"}})],1),r("title-link",{attrs:{h2:""}},[e._v("Round linecap & default flat line cap")]),r("example",{attrs:{reactive:""},scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-progress\n  class="ma1"\n  circle\n  value="38"\n  size="6em"\n  round-cap>\n</w-progress>\n\n<w-progress\n  class="ma1"\n  circle\n  value="38"\n  size="6em">\n</w-progress>\n')]},proxy:!0}])},[r("w-progress",{staticClass:"ma1",attrs:{circle:"",value:"38",size:"6em","round-cap":""}}),r("w-progress",{staticClass:"ma1",attrs:{circle:"",value:"38",size:"6em"}})],1)]},proxy:!0},{key:"item-content.2",fn:function(){return[r("title-link",{attrs:{h2:""}},[e._v("Default indeterminate progress & colors")]),r("p",[e._v("Like in most components, you can set a "),r("code",[e._v("color")]),e._v(" for the text and a "),r("code",[e._v("bg-color")]),e._v(" for the\nbackground.")]),r("example",{attrs:{reactive:""},scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-progress></w-progress>\n<w-progress class="mt4" color="blue"></w-progress>\n<w-progress class="mt4" color="green"></w-progress>\n<div class="title3 my6">Mixing colors</div>\n<w-progress class="mt4" color="yellow" bg-color="cyan"></w-progress>\n')]},proxy:!0}])},[r("w-progress"),r("w-progress",{staticClass:"mt4",attrs:{color:"blue"}}),r("w-progress",{staticClass:"mt4",attrs:{color:"green"}}),r("h3",[e._v("Mixing colors")]),r("w-progress",{staticClass:"mt4",attrs:{color:"yellow","bg-color":"cyan"}})],1),r("title-link",{attrs:{h2:""}},[e._v("Size")]),r("example",{attrs:{reactive:""},scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-progress value="38" size="1em" color="blue"></w-progress>\n<w-progress class="mt4" value="38" size="2.5em" color="blue"></w-progress>\n')]},proxy:!0}])},[r("w-progress",{attrs:{value:"38",size:"1em",color:"blue"}}),r("w-progress",{staticClass:"mt4",attrs:{value:"38",size:"2.5em",color:"blue"}})],1),r("title-link",{attrs:{h2:""}},[e._v("Tile & round")]),r("example",{attrs:{reactive:""},scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-progress\n  value="38"\n  size="1.4em"\n  tile\n  color="light-blue">\n</w-progress>\n\n<w-progress\n  class="mt4"\n  value="38"\n  size="1.4em"\n  round\n  color="light-blue">\n</w-progress>\n')]},proxy:!0}])},[r("w-progress",{attrs:{value:"38",size:"1.4em",tile:"",color:"light-blue"}}),r("w-progress",{staticClass:"mt4",attrs:{value:"38",size:"1.4em",round:"",color:"light-blue"}})],1),r("title-link",{attrs:{h2:""}},[e._v("Outline & shadow")]),r("example",{attrs:{reactive:""},scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-progress\n  value="38"\n  size="1em"\n  outline\n  round\n  color="light-blue">\n</w-progress>\n\n<w-progress\n  class="mt4"\n  value="38"\n  size="1em"\n  shadow\n  color="light-blue">\n</w-progress>\n')]},proxy:!0}])},[r("w-progress",{attrs:{value:"38",size:"1em",outline:"",round:"",color:"light-blue"}}),r("w-progress",{staticClass:"mt4",attrs:{value:"38",size:"1em",shadow:"",color:"light-blue"}})],1),r("title-link",{attrs:{h2:""}},[e._v("Stripes (only if determinate)")]),r("example",{attrs:{reactive:""},scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-progress\n  value="38"\n  size="1em"\n  outline\n  round\n  color="light-blue"\n  stripes>\n</w-progress>\n\n<w-progress\n  class="mt4"\n  value="38"\n  size="1.4em"\n  outline\n  round\n  color="primary"\n  stripes>\n</w-progress>\n')]},proxy:!0}])},[r("w-progress",{attrs:{value:"38",size:"1em",outline:"",round:"",color:"light-blue",stripes:""}}),r("w-progress",{staticClass:"mt4",attrs:{value:"38",size:"1.4em",outline:"",round:"",color:"primary",stripes:""}})],1),r("title-link",{attrs:{h2:""}},[e._v("Progress value with label")]),r("h3",[e._v("Default label")]),r("example",{attrs:{reactive:""},scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-progress\n  v-model="progress"\n  size="1.3em"\n  round\n  color="primary"\n  label>\n</w-progress>\n\n<w-progress\n  class="mt4"\n  v-model="progress"\n  size="1.3em"\n  outline\n  round\n  label>\n</w-progress>')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  progress: 37.86\n})\n")]},proxy:!0}])},[r("w-progress",{attrs:{size:"1.3em",round:"",color:"primary",label:""},model:{value:e.progress1,callback:function(s){e.progress1=s},expression:"progress1"}}),r("w-progress",{staticClass:"mt4",attrs:{size:"1.3em",outline:"",round:"",label:""},model:{value:e.progress1,callback:function(s){e.progress1=s},expression:"progress1"}})],1),r("h3",[e._v("Custom label")]),r("example",{attrs:{reactive:""},scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-progress v-model="progress" size="1.5em" outline round>\n  <strong>'+e._s("{{ progress }}")+"%</strong>\n</w-progress>")]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  progress: 37.86\n})\n")]},proxy:!0}])},[r("w-progress",{staticClass:"mt3",attrs:{size:"1.5em",outline:"",round:""},model:{value:e.progress1,callback:function(s){e.progress1=s},expression:"progress1"}},[r("strong",[e._v(e._s(e.progress1)+"%")])])],1),r("h3",[e._v("Providing a color for the custom label")]),r("p",[e._v("The color of the label should be readable on both the progress and the background."),r("br"),e._v("\nSo you are free to decide what is the best color.")]),r("example",{attrs:{reactive:""},scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-progress\n  value="50.3"\n  size="2em"\n  outline\n  round\n  label\n  label-color="indigo-light4">\n</w-progress>\n')]},proxy:!0}])},[r("w-progress",{staticClass:"mt2",attrs:{value:"50.3",size:"2em",outline:"",round:"",label:"","label-color":"indigo-light4"}})],1),r("title-link",{attrs:{h2:""}},[e._v("Round linecap & default flat line cap")]),r("example",{attrs:{reactive:""},scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-progress value="38" size="2em" round round-cap></w-progress>\n<w-progress class="mt4" value="38" size="2em" round></w-progress>')]},proxy:!0}])},[r("w-progress",{attrs:{value:"38",size:"2em",round:"","round-cap":""}}),r("w-progress",{staticClass:"mt4",attrs:{value:"38",size:"2em",round:""}})],1)]},proxy:!0}])})],1)}),[],!1,(function(e){for(let s in r)this[s]=r[s]}),"7bbb3155",null,null);o.options.__file="src/documentation/views/ui-components/progress/examples.vue";var t=o.exports;const l={value:'<strong class="error"><code>model-value</code> in Vue 3.</strong><br>Accepts a percentage value (ranging from 0 to 100) as a number or a string.<br>If the value is <code>undefined</code>, <code>-1</code> or not provided at all, it will be assumed indeterminate.',label:"Shows or hides the label of the progress containing the current progress value.",roundCap:"Applies a round line-cap to the progress.",color:'Applies a foreground color to the progress. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',bgColor:'Applies a color to the progress\' background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',labelColor:'Applies a color to the progress label\'s text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',size:"Sets the size of the progress element: the width if circular, or the height if linear.<br>Accepts a string made of a value and a unit (e.g. <code>2.5em</code>) or a number (e.g. <code>45</code>) that will be a pixel value.",circle:"Sets the progress style to circle.",stroke:"Only applies to a circular progress.<br>Sets the thickness of the circular progress.",shadow:"Only applies to a linear progress.<br>Applies a drop shadow to the progress bar.",tile:"Only applies to a linear progress.<br>Removes the default border-radius and sets sharp edges on the progress bar.",round:"Only applies to a linear progress.<br>Sets a maximum border-radius on the corners of the progress, giving it a round look.",outline:"Only applies to a linear progress.<br>When using the linear progress, the outline style applies the provided <code>color</code> (by default the <code>primary</code> color is used) to the progress, border and label and no background color is set.",stripes:"Only applies to a linear progress.<br>Applies an animated stripes background on the progress bar.",absolute:"Sets the CSS position of the progress element to <code>absolute</code>.",fixed:"Sets the CSS position of the progress element to <code>fixed</code>.",top:"Places the progress element at the top of the screen when the <code>fixed</code> prop is set to true or at the top of its container when the <code>absolute</code> prop is set to true.",bottom:"Places the progress element at the bottom of the screen when the <code>fixed</code> prop is set to true or at the bottom of its container when the <code>absolute</code> prop is set to true.",zIndex:"Applies a z-index (positive or negative integer) to the progress element."},a={default:{description:"Provide a custom progress label."}},n={},i={};var c=e({data:()=>({propsDescs:l,slots:a}),computed:{props:()=>s.props,events:()=>s.emits.reduce(((e,s)=>(e[s]={description:n[s]||""})&&e),{})}},(function(){var e=this,s=e.$createElement,r=e._self._c||s;return r("div",[r("div",{staticClass:"w-divider my12"}),r("title-link",{staticClass:"title1",attrs:{h2:""}},[e._v("API")]),r("component-api",{staticClass:"mt0",attrs:{items:e.props,descriptions:e.propsDescs,title:"Props"}}),r("component-api",{attrs:{items:e.slots,title:"Slots"}}),r("component-api",{attrs:{items:e.events,title:"Events"}})],1)}),[],!1,(function(e){for(let s in i)this[s]=i[s]}),null,null,null);c.options.__file="src/documentation/views/ui-components/progress/api.vue";var p=c.exports;const u={};var g=e({components:{Examples:t,Api:p}},(function(){var e=this,s=e.$createElement,r=e._self._c||s;return r("main",[r("ui-component-title",[e._v("w-progress")]),r("examples"),r("api")],1)}),[],!1,(function(e){for(let s in u)this[s]=u[s]}),null,null,null);g.options.__file="src/documentation/views/ui-components/progress/index.vue";var m=g.exports;export default m;
