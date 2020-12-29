(window["webpackJsonpWaveUI"]=window["webpackJsonpWaveUI"]||[]).push([["radio-api-vue"],{5075:function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",{staticClass:"w-divider my12"}),o("title-link",{staticClass:"title1",attrs:{h2:"",slug:"w-radios-api"}},[e._v("<w-radios> API")]),o("component-api",{staticClass:"mt0",attrs:{items:e.radiosProps,descriptions:e.radios.propsDescs,title:"Props"}}),o("component-api",{attrs:{items:e.radios.slots,title:"Slots"}}),o("component-api",{attrs:{items:e.radiosEvents,title:"Events"}}),o("div",{staticClass:"w-divider my12"}),o("title-link",{staticClass:"title1",attrs:{h2:"",slug:"w-radio-api"}},[e._v("<w-radio> API")]),o("component-api",{staticClass:"mt0",attrs:{items:e.radioProps,descriptions:e.radio.propsDescs,title:"Props"}}),o("component-api",{attrs:{items:e.radio.slots,title:"Slots"}}),o("component-api",{attrs:{items:e.radioEvents,title:"Events"}})],1)},i=[],r=(o("13d5"),o("5530")),n=o("c0bc"),s=o("e101"),l=o("13aa"),d={propsDescs:{items:"An array of radio button items to display. Each item object should contain at least a <code>label</code> or a <code>value</code> attribute.",value:'<strong class="error"><code>model-value</code> in Vue 3.</strong><br>Provide a value (of one of the <code>items</code> objects) to dictate the selected choice.<br>This value gets updated when using a v-model.',labelOnLeft:"Moves the label to the left of each radio button. By default the label is displayed on the right.",itemLabelKey:"The property name (aka key) in each item object where to find the label of the item (if any).",itemValueKey:"The property name (aka key) in each item object where to find the value of the item (if any).",itemColorKey:"The property name (aka key) in each item object where to find the color of the item (if any).",inline:"Displays all the radio buttons inline instead of in column.",color:'Applies a color to the active radio buttons. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',name:"Provide a native HTML <code>name</code> attribute to each radio button. If not provided, a unique common name will be computed and applied to all the radio buttons.",disabled:"Disables all the radio buttons making them unreactive to user interactions.",readonly:"The radio button will still look like an interactive radio button except that it is read-only: its current value cannot be changed by user interaction.",required:"Applies the native HTML <code>required</code> attribute to each radio button.",validators:'<span class="deep-orange">Only for validation, when the <strong class="code">w-radios</strong> component is wrapped into a <strong class="code">w-form</strong></span>.<br>An array of functions determining the validity of the radio button. Each function will be executed on radio button validation and should return true when valid, or a string containing an error message when invalid. When one of the validators fails, the returned error message will appear underneath the radio button.'},slots:{item:{description:"Provide a custom content for each radio button label."}},events:{input:{description:"Emitted each time any of the radio buttons is toggled.<br>Updates the v-model value in Vue 2.x only.",params:{"[String, Number, Boolean]":"The <code>return-value</code> of the selected radio button.<br>The <code>return-value</code> will be one of the following attributes, if they exist, in this order: the item value, the item label, the item index."}},"update:modelValue":{description:"Emitted each time any of the radio buttons is toggled.<br>Updates the v-model value in Vue 3 only.",params:{"[String, Number, Boolean]":"The <code>return-value</code> of the selected radio button.<br>The <code>return-value</code> will be one of the following attributes, if they exist, in this order: the item value, the item label, the item index."}},focus:{description:"Emitted on each radio button focus.",params:{"[DOM event object]":"The associated focus DOM event."}}}},c={propsDescs:{value:'<strong class="error"><code>model-value</code> in Vue 3.</strong><br>Provide a boolean to dictate the selected state of the radio button.<br>This value gets updated when using a v-model.',returnValue:"Since the native HTML radio uses the <code>value</code> attribute to define the selected state, the <code>return-value</code> prop let you specify a value to return to the <code>v-model</code> when the radio is selected (instead of returning <code>true</code>).",label:"Sets a visible label for the radio button.",labelOnLeft:"Moves the label to the left of the radio button. By default the label is displayed on the right.",color:'Applies a color to the radio button when active. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',noRipple:"Removes the ripple animation on select.",name:"Provide a native HTML <code>name</code> attribute to the radio button. If not provided, a unique name will be computed.",disabled:"Disables the radio button making it unreactive to user interactions.",readonly:"The radio button will still look like an interactive radio button except that it is read-only: its current value cannot be changed by user interaction.",required:"Applies the native HTML <code>required</code> attribute to the radio button.",validators:'<span class="deep-orange">Only for validation, when this radio button is wrapped into a <strong class="code">w-form</strong></span>.<br>An array of functions determining the validity of the radio button. Each function will be executed on radio button validation and should return true when valid, or a string containing an error message when invalid. When one of the validators fails, the returned error message will appear underneath the radio button.'},slots:{default:{description:"The radio button label content."}},events:{input:{description:"Emitted each time the state of the radio button changes.<br>Updates the v-model value in Vue 2.x only.",params:{"[Boolean]":"The current state of the radio button."}},"update:modelValue":{description:"Emitted each time the state of the radio button changes.<br>Updates the v-model value in Vue 3 only.",params:{"[Boolean]":"The current state of the radio button."}},focus:{description:"Emitted on each radio button focus.",params:{"[DOM event object]":"The associated focus DOM event."}}}},u={data:function(){return{radios:d,radio:c}},computed:{radiosProps:function(){return Object(r["a"])(Object(r["a"])({},s["a"].props),n["a"].props)},radioProps:function(){return Object(r["a"])(Object(r["a"])({},l["a"].props),n["a"].props)},radiosEvents:function(){return s["a"].emits.reduce((function(e,t){return(e[t]=d.events[t]||{})&&e}),{})},radioEvents:function(){return l["a"].emits.reduce((function(e,t){return(e[t]=c.events[t]||{})&&e}),{})}}},h=u,p=o("2877"),b=Object(p["a"])(h,a,i,!1,null,null,null);t["default"]=b.exports}}]);
//# sourceMappingURL=radio-api-vue.64bf7430.js.map