(window["webpackJsonpWaveUI"]=window["webpackJsonpWaveUI"]||[]).push([["backers"],{"0255":function(t,e,r){"use strict";r("699a")},"0a06":function(t,e,r){"use strict";var n=r("c532"),o=r("30b5"),s=r("f6b4"),i=r("5270"),a=r("4a7b");function c(t){this.defaults=t,this.interceptors={request:new s,response:new s}}c.prototype.request=function(t){"string"===typeof t?(t=arguments[1]||{},t.url=arguments[0]):t=t||{},t=a(this.defaults,t),t.method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var e=[i,void 0],r=Promise.resolve(t);this.interceptors.request.forEach((function(t){e.unshift(t.fulfilled,t.rejected)})),this.interceptors.response.forEach((function(t){e.push(t.fulfilled,t.rejected)}));while(e.length)r=r.then(e.shift(),e.shift());return r},c.prototype.getUri=function(t){return t=a(this.defaults,t),o(t.url,t.params,t.paramsSerializer).replace(/^\?/,"")},n.forEach(["delete","get","head","options"],(function(t){c.prototype[t]=function(e,r){return this.request(a(r||{},{method:t,url:e,data:(r||{}).data}))}})),n.forEach(["post","put","patch"],(function(t){c.prototype[t]=function(e,r,n){return this.request(a(n||{},{method:t,url:e,data:r}))}})),t.exports=c},"0adc":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",[r("title-link",{staticClass:"mt4",attrs:{h1:""}},[t._v("Backers")]),r("div",{staticClass:"text-center"},[t._m(0),r("w-flex",{staticClass:"align-center wrap justify-center backers"},[t._l(t.backers,(function(e){return r("div",{key:e.username,staticClass:"backer ma1"},[r("w-tooltip",{scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on;return[r("a",t._g({attrs:{href:e.url,target:"_blank"}},o),[r("img",{staticClass:"avatar",attrs:{src:e.avatar,alt:""}})])]}}],null,!0)},[t._v(t._s(e.username))])],1)})),r("w-tooltip",{scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("div",{staticClass:"backer plus ma1"},[r("a",t._g({staticClass:"mx1",attrs:{href:"https://github.com/sponsors/antoniandre",target:"_blank"}},n),[r("w-icon",{staticClass:"white",attrs:{xl:""}},[t._v("wi-plus")])],1)])]}}])},[t._v("Add yourself!")])],2),t._m(1),r("h2",{staticClass:"gold"},[t._v("Gold Sponsors")]),t._m(2)],1)],1)},o=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mb12"},[r("h2",[t._v("A big THANK YOU to all the backers!")]),r("p",[t._v("Thank you to all of you, you make this happen, you are part of this library!")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",{staticClass:"mt10"},[t._v("If you would like to support Wave UI, you can"),r("a",{staticClass:"mx1",attrs:{href:"https://github.com/sponsors/antoniandre",target:"_blank"}},[t._v("become a sponsor")]),t._v("or"),r("a",{staticClass:"ml1",attrs:{href:"https://www.paypal.me/antoniandre1",target:"_blank"}},[t._v("make a donation")]),t._v(". Thank you! 🙏🙏")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"gold-sponsors"},[r("a",{attrs:{href:"https://divriots.com/",target:"_blank"}},[r("strong",[t._v("<div>riots")])])])}],s=(r("4160"),r("bc3a")),i=r.n(s),a=["divriots","crbast","consuman","helenetran","antoniandre"],c={data:function(){return{backers:[]}},created:function(){var t=this;a.forEach((function(e,r){t.$set(t.backers,r,{username:e,avatar:"",url:"https://github.com/".concat(e)}),i.a.get("https://api.github.com/users/".concat(e)).then((function(e){t.backers[r].avatar=e.data.avatar_url}))}))}},u=c,f=(r("0255"),r("2877")),l=Object(f["a"])(u,n,o,!1,null,null,null);e["default"]=l.exports},"0df6":function(t,e,r){"use strict";t.exports=function(t){return function(e){return t.apply(null,e)}}},"1d2b":function(t,e,r){"use strict";t.exports=function(t,e){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return t.apply(e,r)}}},2444:function(t,e,r){"use strict";(function(e){var n=r("c532"),o=r("c8af"),s={"Content-Type":"application/x-www-form-urlencoded"};function i(t,e){!n.isUndefined(t)&&n.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}function a(){var t;return("undefined"!==typeof XMLHttpRequest||"undefined"!==typeof e&&"[object process]"===Object.prototype.toString.call(e))&&(t=r("b50d")),t}var c={adapter:a(),transformRequest:[function(t,e){return o(e,"Accept"),o(e,"Content-Type"),n.isFormData(t)||n.isArrayBuffer(t)||n.isBuffer(t)||n.isStream(t)||n.isFile(t)||n.isBlob(t)?t:n.isArrayBufferView(t)?t.buffer:n.isURLSearchParams(t)?(i(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString()):n.isObject(t)?(i(e,"application/json;charset=utf-8"),JSON.stringify(t)):t}],transformResponse:[function(t){if("string"===typeof t)try{t=JSON.parse(t)}catch(e){}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};n.forEach(["delete","get","head"],(function(t){c.headers[t]={}})),n.forEach(["post","put","patch"],(function(t){c.headers[t]=n.merge(s)})),t.exports=c}).call(this,r("4362"))},"2d83":function(t,e,r){"use strict";var n=r("387f");t.exports=function(t,e,r,o,s){var i=new Error(t);return n(i,e,r,o,s)}},"2e67":function(t,e,r){"use strict";t.exports=function(t){return!(!t||!t.__CANCEL__)}},"30b5":function(t,e,r){"use strict";var n=r("c532");function o(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}t.exports=function(t,e,r){if(!e)return t;var s;if(r)s=r(e);else if(n.isURLSearchParams(e))s=e.toString();else{var i=[];n.forEach(e,(function(t,e){null!==t&&"undefined"!==typeof t&&(n.isArray(t)?e+="[]":t=[t],n.forEach(t,(function(t){n.isDate(t)?t=t.toISOString():n.isObject(t)&&(t=JSON.stringify(t)),i.push(o(e)+"="+o(t))})))})),s=i.join("&")}if(s){var a=t.indexOf("#");-1!==a&&(t=t.slice(0,a)),t+=(-1===t.indexOf("?")?"?":"&")+s}return t}},"387f":function(t,e,r){"use strict";t.exports=function(t,e,r,n,o){return t.config=e,r&&(t.code=r),t.request=n,t.response=o,t.isAxiosError=!0,t.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},t}},3934:function(t,e,r){"use strict";var n=r("c532");t.exports=n.isStandardBrowserEnv()?function(){var t,e=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function o(t){var n=t;return e&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return t=o(window.location.href),function(e){var r=n.isString(e)?o(e):e;return r.protocol===t.protocol&&r.host===t.host}}():function(){return function(){return!0}}()},4362:function(t,e,r){e.nextTick=function(t){var e=Array.prototype.slice.call(arguments);e.shift(),setTimeout((function(){t.apply(null,e)}),0)},e.platform=e.arch=e.execPath=e.title="browser",e.pid=1,e.browser=!0,e.env={},e.argv=[],e.binding=function(t){throw new Error("No such module. (Possibly not yet loaded)")},function(){var t,n="/";e.cwd=function(){return n},e.chdir=function(e){t||(t=r("df7c")),n=t.resolve(e,n)}}(),e.exit=e.kill=e.umask=e.dlopen=e.uptime=e.memoryUsage=e.uvCounters=function(){},e.features={}},"467f":function(t,e,r){"use strict";var n=r("2d83");t.exports=function(t,e,r){var o=r.config.validateStatus;r.status&&o&&!o(r.status)?e(n("Request failed with status code "+r.status,r.config,null,r.request,r)):t(r)}},"4a7b":function(t,e,r){"use strict";var n=r("c532");t.exports=function(t,e){e=e||{};var r={},o=["url","method","data"],s=["headers","auth","proxy","params"],i=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],a=["validateStatus"];function c(t,e){return n.isPlainObject(t)&&n.isPlainObject(e)?n.merge(t,e):n.isPlainObject(e)?n.merge({},e):n.isArray(e)?e.slice():e}function u(o){n.isUndefined(e[o])?n.isUndefined(t[o])||(r[o]=c(void 0,t[o])):r[o]=c(t[o],e[o])}n.forEach(o,(function(t){n.isUndefined(e[t])||(r[t]=c(void 0,e[t]))})),n.forEach(s,u),n.forEach(i,(function(o){n.isUndefined(e[o])?n.isUndefined(t[o])||(r[o]=c(void 0,t[o])):r[o]=c(void 0,e[o])})),n.forEach(a,(function(n){n in e?r[n]=c(t[n],e[n]):n in t&&(r[n]=c(void 0,t[n]))}));var f=o.concat(s).concat(i).concat(a),l=Object.keys(t).concat(Object.keys(e)).filter((function(t){return-1===f.indexOf(t)}));return n.forEach(l,u),r}},5270:function(t,e,r){"use strict";var n=r("c532"),o=r("c401"),s=r("2e67"),i=r("2444");function a(t){t.cancelToken&&t.cancelToken.throwIfRequested()}t.exports=function(t){a(t),t.headers=t.headers||{},t.data=o(t.data,t.headers,t.transformRequest),t.headers=n.merge(t.headers.common||{},t.headers[t.method]||{},t.headers),n.forEach(["delete","get","head","post","put","patch","common"],(function(e){delete t.headers[e]}));var e=t.adapter||i.adapter;return e(t).then((function(e){return a(t),e.data=o(e.data,e.headers,t.transformResponse),e}),(function(e){return s(e)||(a(t),e&&e.response&&(e.response.data=o(e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)}))}},"5f02":function(t,e,r){"use strict";t.exports=function(t){return"object"===typeof t&&!0===t.isAxiosError}},"699a":function(t,e,r){},"7a77":function(t,e,r){"use strict";function n(t){this.message=t}n.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},n.prototype.__CANCEL__=!0,t.exports=n},"7aac":function(t,e,r){"use strict";var n=r("c532");t.exports=n.isStandardBrowserEnv()?function(){return{write:function(t,e,r,o,s,i){var a=[];a.push(t+"="+encodeURIComponent(e)),n.isNumber(r)&&a.push("expires="+new Date(r).toGMTString()),n.isString(o)&&a.push("path="+o),n.isString(s)&&a.push("domain="+s),!0===i&&a.push("secure"),document.cookie=a.join("; ")},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},"83b9":function(t,e,r){"use strict";var n=r("d925"),o=r("e683");t.exports=function(t,e){return t&&!n(e)?o(t,e):e}},"8df4":function(t,e,r){"use strict";var n=r("7a77");function o(t){if("function"!==typeof t)throw new TypeError("executor must be a function.");var e;this.promise=new Promise((function(t){e=t}));var r=this;t((function(t){r.reason||(r.reason=new n(t),e(r.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var t,e=new o((function(e){t=e}));return{token:e,cancel:t}},t.exports=o},b50d:function(t,e,r){"use strict";var n=r("c532"),o=r("467f"),s=r("7aac"),i=r("30b5"),a=r("83b9"),c=r("c345"),u=r("3934"),f=r("2d83");t.exports=function(t){return new Promise((function(e,r){var l=t.data,p=t.headers;n.isFormData(l)&&delete p["Content-Type"];var d=new XMLHttpRequest;if(t.auth){var h=t.auth.username||"",m=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";p.Authorization="Basic "+btoa(h+":"+m)}var v=a(t.baseURL,t.url);if(d.open(t.method.toUpperCase(),i(v,t.params,t.paramsSerializer),!0),d.timeout=t.timeout,d.onreadystatechange=function(){if(d&&4===d.readyState&&(0!==d.status||d.responseURL&&0===d.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in d?c(d.getAllResponseHeaders()):null,s=t.responseType&&"text"!==t.responseType?d.response:d.responseText,i={data:s,status:d.status,statusText:d.statusText,headers:n,config:t,request:d};o(e,r,i),d=null}},d.onabort=function(){d&&(r(f("Request aborted",t,"ECONNABORTED",d)),d=null)},d.onerror=function(){r(f("Network Error",t,null,d)),d=null},d.ontimeout=function(){var e="timeout of "+t.timeout+"ms exceeded";t.timeoutErrorMessage&&(e=t.timeoutErrorMessage),r(f(e,t,"ECONNABORTED",d)),d=null},n.isStandardBrowserEnv()){var g=(t.withCredentials||u(v))&&t.xsrfCookieName?s.read(t.xsrfCookieName):void 0;g&&(p[t.xsrfHeaderName]=g)}if("setRequestHeader"in d&&n.forEach(p,(function(t,e){"undefined"===typeof l&&"content-type"===e.toLowerCase()?delete p[e]:d.setRequestHeader(e,t)})),n.isUndefined(t.withCredentials)||(d.withCredentials=!!t.withCredentials),t.responseType)try{d.responseType=t.responseType}catch(b){if("json"!==t.responseType)throw b}"function"===typeof t.onDownloadProgress&&d.addEventListener("progress",t.onDownloadProgress),"function"===typeof t.onUploadProgress&&d.upload&&d.upload.addEventListener("progress",t.onUploadProgress),t.cancelToken&&t.cancelToken.promise.then((function(t){d&&(d.abort(),r(t),d=null)})),l||(l=null),d.send(l)}))}},bc3a:function(t,e,r){t.exports=r("cee4")},c345:function(t,e,r){"use strict";var n=r("c532"),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];t.exports=function(t){var e,r,s,i={};return t?(n.forEach(t.split("\n"),(function(t){if(s=t.indexOf(":"),e=n.trim(t.substr(0,s)).toLowerCase(),r=n.trim(t.substr(s+1)),e){if(i[e]&&o.indexOf(e)>=0)return;i[e]="set-cookie"===e?(i[e]?i[e]:[]).concat([r]):i[e]?i[e]+", "+r:r}})),i):i}},c401:function(t,e,r){"use strict";var n=r("c532");t.exports=function(t,e,r){return n.forEach(r,(function(r){t=r(t,e)})),t}},c532:function(t,e,r){"use strict";var n=r("1d2b"),o=Object.prototype.toString;function s(t){return"[object Array]"===o.call(t)}function i(t){return"undefined"===typeof t}function a(t){return null!==t&&!i(t)&&null!==t.constructor&&!i(t.constructor)&&"function"===typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}function c(t){return"[object ArrayBuffer]"===o.call(t)}function u(t){return"undefined"!==typeof FormData&&t instanceof FormData}function f(t){var e;return e="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&t.buffer instanceof ArrayBuffer,e}function l(t){return"string"===typeof t}function p(t){return"number"===typeof t}function d(t){return null!==t&&"object"===typeof t}function h(t){if("[object Object]"!==o.call(t))return!1;var e=Object.getPrototypeOf(t);return null===e||e===Object.prototype}function m(t){return"[object Date]"===o.call(t)}function v(t){return"[object File]"===o.call(t)}function g(t){return"[object Blob]"===o.call(t)}function b(t){return"[object Function]"===o.call(t)}function y(t){return d(t)&&b(t.pipe)}function w(t){return"undefined"!==typeof URLSearchParams&&t instanceof URLSearchParams}function x(t){return t.replace(/^\s*/,"").replace(/\s*$/,"")}function C(){return("undefined"===typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!==typeof window&&"undefined"!==typeof document)}function k(t,e){if(null!==t&&"undefined"!==typeof t)if("object"!==typeof t&&(t=[t]),s(t))for(var r=0,n=t.length;r<n;r++)e.call(null,t[r],r,t);else for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.call(null,t[o],o,t)}function E(){var t={};function e(e,r){h(t[r])&&h(e)?t[r]=E(t[r],e):h(e)?t[r]=E({},e):s(e)?t[r]=e.slice():t[r]=e}for(var r=0,n=arguments.length;r<n;r++)k(arguments[r],e);return t}function A(t,e,r){return k(e,(function(e,o){t[o]=r&&"function"===typeof e?n(e,r):e})),t}function j(t){return 65279===t.charCodeAt(0)&&(t=t.slice(1)),t}t.exports={isArray:s,isArrayBuffer:c,isBuffer:a,isFormData:u,isArrayBufferView:f,isString:l,isNumber:p,isObject:d,isPlainObject:h,isUndefined:i,isDate:m,isFile:v,isBlob:g,isFunction:b,isStream:y,isURLSearchParams:w,isStandardBrowserEnv:C,forEach:k,merge:E,extend:A,trim:x,stripBOM:j}},c8af:function(t,e,r){"use strict";var n=r("c532");t.exports=function(t,e){n.forEach(t,(function(r,n){n!==e&&n.toUpperCase()===e.toUpperCase()&&(t[e]=r,delete t[n])}))}},cee4:function(t,e,r){"use strict";var n=r("c532"),o=r("1d2b"),s=r("0a06"),i=r("4a7b"),a=r("2444");function c(t){var e=new s(t),r=o(s.prototype.request,e);return n.extend(r,s.prototype,e),n.extend(r,e),r}var u=c(a);u.Axios=s,u.create=function(t){return c(i(u.defaults,t))},u.Cancel=r("7a77"),u.CancelToken=r("8df4"),u.isCancel=r("2e67"),u.all=function(t){return Promise.all(t)},u.spread=r("0df6"),u.isAxiosError=r("5f02"),t.exports=u,t.exports.default=u},d925:function(t,e,r){"use strict";t.exports=function(t){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)}},df7c:function(t,e,r){(function(t){function r(t,e){for(var r=0,n=t.length-1;n>=0;n--){var o=t[n];"."===o?t.splice(n,1):".."===o?(t.splice(n,1),r++):r&&(t.splice(n,1),r--)}if(e)for(;r--;r)t.unshift("..");return t}function n(t){"string"!==typeof t&&(t+="");var e,r=0,n=-1,o=!0;for(e=t.length-1;e>=0;--e)if(47===t.charCodeAt(e)){if(!o){r=e+1;break}}else-1===n&&(o=!1,n=e+1);return-1===n?"":t.slice(r,n)}function o(t,e){if(t.filter)return t.filter(e);for(var r=[],n=0;n<t.length;n++)e(t[n],n,t)&&r.push(t[n]);return r}e.resolve=function(){for(var e="",n=!1,s=arguments.length-1;s>=-1&&!n;s--){var i=s>=0?arguments[s]:t.cwd();if("string"!==typeof i)throw new TypeError("Arguments to path.resolve must be strings");i&&(e=i+"/"+e,n="/"===i.charAt(0))}return e=r(o(e.split("/"),(function(t){return!!t})),!n).join("/"),(n?"/":"")+e||"."},e.normalize=function(t){var n=e.isAbsolute(t),i="/"===s(t,-1);return t=r(o(t.split("/"),(function(t){return!!t})),!n).join("/"),t||n||(t="."),t&&i&&(t+="/"),(n?"/":"")+t},e.isAbsolute=function(t){return"/"===t.charAt(0)},e.join=function(){var t=Array.prototype.slice.call(arguments,0);return e.normalize(o(t,(function(t,e){if("string"!==typeof t)throw new TypeError("Arguments to path.join must be strings");return t})).join("/"))},e.relative=function(t,r){function n(t){for(var e=0;e<t.length;e++)if(""!==t[e])break;for(var r=t.length-1;r>=0;r--)if(""!==t[r])break;return e>r?[]:t.slice(e,r-e+1)}t=e.resolve(t).substr(1),r=e.resolve(r).substr(1);for(var o=n(t.split("/")),s=n(r.split("/")),i=Math.min(o.length,s.length),a=i,c=0;c<i;c++)if(o[c]!==s[c]){a=c;break}var u=[];for(c=a;c<o.length;c++)u.push("..");return u=u.concat(s.slice(a)),u.join("/")},e.sep="/",e.delimiter=":",e.dirname=function(t){if("string"!==typeof t&&(t+=""),0===t.length)return".";for(var e=t.charCodeAt(0),r=47===e,n=-1,o=!0,s=t.length-1;s>=1;--s)if(e=t.charCodeAt(s),47===e){if(!o){n=s;break}}else o=!1;return-1===n?r?"/":".":r&&1===n?"/":t.slice(0,n)},e.basename=function(t,e){var r=n(t);return e&&r.substr(-1*e.length)===e&&(r=r.substr(0,r.length-e.length)),r},e.extname=function(t){"string"!==typeof t&&(t+="");for(var e=-1,r=0,n=-1,o=!0,s=0,i=t.length-1;i>=0;--i){var a=t.charCodeAt(i);if(47!==a)-1===n&&(o=!1,n=i+1),46===a?-1===e?e=i:1!==s&&(s=1):-1!==e&&(s=-1);else if(!o){r=i+1;break}}return-1===e||-1===n||0===s||1===s&&e===n-1&&e===r+1?"":t.slice(e,n)};var s="b"==="ab".substr(-1)?function(t,e,r){return t.substr(e,r)}:function(t,e,r){return e<0&&(e=t.length+e),t.substr(e,r)}}).call(this,r("4362"))},e683:function(t,e,r){"use strict";t.exports=function(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}},f6b4:function(t,e,r){"use strict";var n=r("c532");function o(){this.handlers=[]}o.prototype.use=function(t,e){return this.handlers.push({fulfilled:t,rejected:e}),this.handlers.length-1},o.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},o.prototype.forEach=function(t){n.forEach(this.handlers,(function(e){null!==e&&t(e)}))},t.exports=o}}]);
//# sourceMappingURL=backers.520505af.js.map