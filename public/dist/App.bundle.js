<<<<<<< HEAD
!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=9)}([function(e,t,n){"use strict";function r(e){return"[object Array]"===A.call(e)}function o(e){return"[object ArrayBuffer]"===A.call(e)}function i(e){return"undefined"!=typeof FormData&&e instanceof FormData}function u(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer}function s(e){return"string"==typeof e}function a(e){return"number"==typeof e}function c(e){return void 0===e}function f(e){return null!==e&&"object"===(void 0===e?"undefined":E(e))}function l(e){return"[object Date]"===A.call(e)}function p(e){return"[object File]"===A.call(e)}function d(e){return"[object Blob]"===A.call(e)}function h(e){return"[object Function]"===A.call(e)}function m(e){return f(e)&&h(e.pipe)}function y(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams}function v(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}function g(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)}function w(e,t){if(null!==e&&void 0!==e)if("object"===(void 0===e?"undefined":E(e))||r(e)||(e=[e]),r(e))for(var n=0,o=e.length;n<o;n++)t.call(null,e[n],n,e);else for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.call(null,e[i],i,e)}function b(){function e(e,n){"object"===E(t[n])&&"object"===(void 0===e?"undefined":E(e))?t[n]=b(t[n],e):t[n]=e}for(var t={},n=0,r=arguments.length;n<r;n++)w(arguments[n],e);return t}function x(e,t,n){return w(t,function(t,r){e[r]=n&&"function"==typeof t?T(t,n):t}),e}var E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},T=n(3),S=n(14),A=Object.prototype.toString;e.exports={isArray:r,isArrayBuffer:o,isBuffer:S,isFormData:i,isArrayBufferView:u,isString:s,isNumber:a,isObject:f,isUndefined:c,isDate:l,isFile:p,isBlob:d,isFunction:h,isStream:m,isURLSearchParams:y,isStandardBrowserEnv:g,forEach:w,merge:b,extend:x,trim:v}},function(e,t,n){"use strict";(function(t){function r(e,t){!o.isUndefined(e)&&o.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var o=n(0),i=n(16),u={"Content-Type":"application/x-www-form-urlencoded"},s={adapter:function(){var e;return"undefined"!=typeof XMLHttpRequest?e=n(5):void 0!==t&&(e=n(5)),e}(),transformRequest:[function(e,t){return i(t,"Content-Type"),o.isFormData(e)||o.isArrayBuffer(e)||o.isBuffer(e)||o.isStream(e)||o.isFile(e)||o.isBlob(e)?e:o.isArrayBufferView(e)?e.buffer:o.isURLSearchParams(e)?(r(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):o.isObject(e)?(r(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};s.headers={common:{Accept:"application/json, text/plain, */*"}},o.forEach(["delete","get","head"],function(e){s.headers[e]={}}),o.forEach(["post","put","patch"],function(e){s.headers[e]=o.merge(u)}),e.exports=s}).call(t,n(4))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=document.querySelector.bind(document),o=document.querySelectorAll.bind(document);Node.prototype.on=window.on=function(e,t){this.addEventListener(e,t)},NodeList.prototype.__proto__=Array.prototype,NodeList.prototype.on=NodeList.prototype.addEventListener=function(e,t){this.forEach(function(n){n.on(e,t)})},t.$=r,t.$$=o},function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},function(e,t,n){"use strict";function r(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function i(e){if(l===setTimeout)return setTimeout(e,0);if((l===r||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(t){try{return l.call(null,e,0)}catch(t){return l.call(this,e,0)}}}function u(e){if(p===clearTimeout)return clearTimeout(e);if((p===o||!p)&&clearTimeout)return p=clearTimeout,clearTimeout(e);try{return p(e)}catch(t){try{return p.call(null,e)}catch(t){return p.call(this,e)}}}function s(){y&&h&&(y=!1,h.length?m=h.concat(m):v=-1,m.length&&a())}function a(){if(!y){var e=i(s);y=!0;for(var t=m.length;t;){for(h=m,m=[];++v<t;)h&&h[v].run();v=-1,t=m.length}h=null,y=!1,u(e)}}function c(e,t){this.fun=e,this.array=t}function f(){}var l,p,d=e.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:r}catch(e){l=r}try{p="function"==typeof clearTimeout?clearTimeout:o}catch(e){p=o}}();var h,m=[],y=!1,v=-1;d.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];m.push(new c(e,t)),1!==m.length||y||i(a)},c.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=f,d.addListener=f,d.once=f,d.off=f,d.removeListener=f,d.removeAllListeners=f,d.emit=f,d.prependListener=f,d.prependOnceListener=f,d.listeners=function(e){return[]},d.binding=function(e){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(e){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},function(e,t,n){"use strict";(function(t){var r=n(0),o=n(17),i=n(19),u=n(20),s=n(21),a=n(6),c="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||n(22);e.exports=function(e){return new Promise(function(f,l){var p=e.data,d=e.headers;r.isFormData(p)&&delete d["Content-Type"];var h=new XMLHttpRequest,m="onreadystatechange",y=!1;if("test"===t.env.NODE_ENV||"undefined"==typeof window||!window.XDomainRequest||"withCredentials"in h||s(e.url)||(h=new window.XDomainRequest,m="onload",y=!0,h.onprogress=function(){},h.ontimeout=function(){}),e.auth){var v=e.auth.username||"",g=e.auth.password||"";d.Authorization="Basic "+c(v+":"+g)}if(h.open(e.method.toUpperCase(),i(e.url,e.params,e.paramsSerializer),!0),h.timeout=e.timeout,h[m]=function(){if(h&&(4===h.readyState||y)&&(0!==h.status||h.responseURL&&0===h.responseURL.indexOf("file:"))){var t="getAllResponseHeaders"in h?u(h.getAllResponseHeaders()):null,n=e.responseType&&"text"!==e.responseType?h.response:h.responseText,r={data:n,status:1223===h.status?204:h.status,statusText:1223===h.status?"No Content":h.statusText,headers:t,config:e,request:h};o(f,l,r),h=null}},h.onerror=function(){l(a("Network Error",e,null,h)),h=null},h.ontimeout=function(){l(a("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",h)),h=null},r.isStandardBrowserEnv()){var w=n(23),b=(e.withCredentials||s(e.url))&&e.xsrfCookieName?w.read(e.xsrfCookieName):void 0;b&&(d[e.xsrfHeaderName]=b)}if("setRequestHeader"in h&&r.forEach(d,function(e,t){void 0===p&&"content-type"===t.toLowerCase()?delete d[t]:h.setRequestHeader(t,e)}),e.withCredentials&&(h.withCredentials=!0),e.responseType)try{h.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&h.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&h.upload&&h.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){h&&(h.abort(),l(e),h=null)}),void 0===p&&(p=null),h.send(p)})}}).call(t,n(4))},function(e,t,n){"use strict";var r=n(18);e.exports=function(e,t,n,o,i){var u=new Error(e);return r(u,t,n,o,i)}},function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},function(e,t,n){"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},function(e,t,n){"use strict";n(10);var r=n(2),o=n(11);(0,function(e){return e&&e.__esModule?e:{default:e}}(o).default)((0,r.$)(".search-place"))},function(e,t){},function(e,t,n){"use strict";function r(){(0,c.$)("#chillOut").style.display="block"}function o(){(0,c.$)("#chillOut").style.display="none"}function i(e,t){console.log(e,t),(0,c.$)("#data").innerHTML="",r();var n="https://maps.googleapis.com/maps/api/place/nearbysearch/json?location="+e+","+t+"&radius=10000&type=night_club&key=AIzaSyDPxdi1VQQ3vF8voAvgQ93jugBmHEAc5fY";a.default.get("https://ajibs-cors-anywhere.herokuapp.com/"+n).then(function(e){e.data.results.forEach(function(e){console.log(e.name),(0,c.$)("#data").innerHTML+=e.name+"<br><br>"}),o()}).catch(function(e){console.error(e),o(),alert("Error! Unable to Retrieve Night clubs at the moment")})}function u(e){if(e){var t=new google.maps.places.Autocomplete(e);t.addListener("place_changed",function(){var e=t.getPlace();i(e.geometry.location.lat(),e.geometry.location.lng())}),e.on("keydown",function(e){13===e.keyCode&&e.preventDefault()})}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(12),a=function(e){return e&&e.__esModule?e:{default:e}}(s),c=n(2);t.default=u},function(e,t,n){"use strict";e.exports=n(13)},function(e,t,n){"use strict";function r(e){var t=new u(e),n=i(u.prototype.request,t);return o.extend(n,u.prototype,t),o.extend(n,t),n}var o=n(0),i=n(3),u=n(15),s=n(1),a=r(s);a.Axios=u,a.create=function(e){return r(o.merge(s,e))},a.Cancel=n(8),a.CancelToken=n(29),a.isCancel=n(7),a.all=function(e){return Promise.all(e)},a.spread=n(30),e.exports=a,e.exports.default=a},function(e,t,n){"use strict";function r(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function o(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&r(e.slice(0,0))}/*!
=======
!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=10)}([function(e,t,n){"use strict";function r(e){return"[object Array]"===_.call(e)}function o(e){return"[object ArrayBuffer]"===_.call(e)}function i(e){return"undefined"!=typeof FormData&&e instanceof FormData}function u(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer}function s(e){return"string"==typeof e}function a(e){return"number"==typeof e}function c(e){return void 0===e}function f(e){return null!==e&&"object"===(void 0===e?"undefined":E(e))}function l(e){return"[object Date]"===_.call(e)}function p(e){return"[object File]"===_.call(e)}function d(e){return"[object Blob]"===_.call(e)}function h(e){return"[object Function]"===_.call(e)}function m(e){return f(e)&&h(e.pipe)}function y(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams}function g(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}function v(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)}function w(e,t){if(null!==e&&void 0!==e)if("object"===(void 0===e?"undefined":E(e))||r(e)||(e=[e]),r(e))for(var n=0,o=e.length;n<o;n++)t.call(null,e[n],n,e);else for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.call(null,e[i],i,e)}function b(){function e(e,n){"object"===E(t[n])&&"object"===(void 0===e?"undefined":E(e))?t[n]=b(t[n],e):t[n]=e}for(var t={},n=0,r=arguments.length;n<r;n++)w(arguments[n],e);return t}function x(e,t,n){return w(t,function(t,r){e[r]=n&&"function"==typeof t?T(t,n):t}),e}var E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},T=n(4),S=n(14),_=Object.prototype.toString;e.exports={isArray:r,isArrayBuffer:o,isBuffer:S,isFormData:i,isArrayBufferView:u,isString:s,isNumber:a,isObject:f,isUndefined:c,isDate:l,isFile:p,isBlob:d,isFunction:h,isStream:m,isURLSearchParams:y,isStandardBrowserEnv:v,forEach:w,merge:b,extend:x,trim:g}},function(e,t,n){"use strict";(function(t){function r(e,t){!o.isUndefined(e)&&o.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var o=n(0),i=n(16),u={"Content-Type":"application/x-www-form-urlencoded"},s={adapter:function(){var e;return"undefined"!=typeof XMLHttpRequest?e=n(6):void 0!==t&&(e=n(6)),e}(),transformRequest:[function(e,t){return i(t,"Content-Type"),o.isFormData(e)||o.isArrayBuffer(e)||o.isBuffer(e)||o.isStream(e)||o.isFile(e)||o.isBlob(e)?e:o.isArrayBufferView(e)?e.buffer:o.isURLSearchParams(e)?(r(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):o.isObject(e)?(r(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};s.headers={common:{Accept:"application/json, text/plain, */*"}},o.forEach(["delete","get","head"],function(e){s.headers[e]={}}),o.forEach(["post","put","patch"],function(e){s.headers[e]=o.merge(u)}),e.exports=s}).call(t,n(5))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=document.querySelector.bind(document),o=document.querySelectorAll.bind(document);Node.prototype.on=window.on=function(e,t){this.addEventListener(e,t)},NodeList.prototype.__proto__=Array.prototype,NodeList.prototype.on=NodeList.prototype.addEventListener=function(e,t){this.forEach(function(n){n.on(e,t)})},t.$=r,t.$$=o},function(e,t,n){"use strict";e.exports=n(13)},function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},function(e,t,n){"use strict";function r(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function i(e){if(l===setTimeout)return setTimeout(e,0);if((l===r||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(t){try{return l.call(null,e,0)}catch(t){return l.call(this,e,0)}}}function u(e){if(p===clearTimeout)return clearTimeout(e);if((p===o||!p)&&clearTimeout)return p=clearTimeout,clearTimeout(e);try{return p(e)}catch(t){try{return p.call(null,e)}catch(t){return p.call(this,e)}}}function s(){y&&h&&(y=!1,h.length?m=h.concat(m):g=-1,m.length&&a())}function a(){if(!y){var e=i(s);y=!0;for(var t=m.length;t;){for(h=m,m=[];++g<t;)h&&h[g].run();g=-1,t=m.length}h=null,y=!1,u(e)}}function c(e,t){this.fun=e,this.array=t}function f(){}var l,p,d=e.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:r}catch(e){l=r}try{p="function"==typeof clearTimeout?clearTimeout:o}catch(e){p=o}}();var h,m=[],y=!1,g=-1;d.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];m.push(new c(e,t)),1!==m.length||y||i(a)},c.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=f,d.addListener=f,d.once=f,d.off=f,d.removeListener=f,d.removeAllListeners=f,d.emit=f,d.prependListener=f,d.prependOnceListener=f,d.listeners=function(e){return[]},d.binding=function(e){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(e){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},function(e,t,n){"use strict";(function(t){var r=n(0),o=n(17),i=n(19),u=n(20),s=n(21),a=n(7),c="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||n(22);e.exports=function(e){return new Promise(function(f,l){var p=e.data,d=e.headers;r.isFormData(p)&&delete d["Content-Type"];var h=new XMLHttpRequest,m="onreadystatechange",y=!1;if("test"===t.env.NODE_ENV||"undefined"==typeof window||!window.XDomainRequest||"withCredentials"in h||s(e.url)||(h=new window.XDomainRequest,m="onload",y=!0,h.onprogress=function(){},h.ontimeout=function(){}),e.auth){var g=e.auth.username||"",v=e.auth.password||"";d.Authorization="Basic "+c(g+":"+v)}if(h.open(e.method.toUpperCase(),i(e.url,e.params,e.paramsSerializer),!0),h.timeout=e.timeout,h[m]=function(){if(h&&(4===h.readyState||y)&&(0!==h.status||h.responseURL&&0===h.responseURL.indexOf("file:"))){var t="getAllResponseHeaders"in h?u(h.getAllResponseHeaders()):null,n=e.responseType&&"text"!==e.responseType?h.response:h.responseText,r={data:n,status:1223===h.status?204:h.status,statusText:1223===h.status?"No Content":h.statusText,headers:t,config:e,request:h};o(f,l,r),h=null}},h.onerror=function(){l(a("Network Error",e,null,h)),h=null},h.ontimeout=function(){l(a("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",h)),h=null},r.isStandardBrowserEnv()){var w=n(23),b=(e.withCredentials||s(e.url))&&e.xsrfCookieName?w.read(e.xsrfCookieName):void 0;b&&(d[e.xsrfHeaderName]=b)}if("setRequestHeader"in h&&r.forEach(d,function(e,t){void 0===p&&"content-type"===t.toLowerCase()?delete d[t]:h.setRequestHeader(t,e)}),e.withCredentials&&(h.withCredentials=!0),e.responseType)try{h.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&h.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&h.upload&&h.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){h&&(h.abort(),l(e),h=null)}),void 0===p&&(p=null),h.send(p)})}}).call(t,n(5))},function(e,t,n){"use strict";var r=n(18);e.exports=function(e,t,n,o,i){var u=new Error(e);return r(u,t,n,o,i)}},function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},function(e,t,n){"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}n(11);var o=n(2),i=n(12),u=r(i),s=n(33),a=r(s);(0,u.default)((0,o.$)("#search-place")),(0,a.default)((0,o.$)("#geolocation"))},function(e,t){},function(e,t,n){"use strict";function r(e){if(e){var t=new google.maps.places.Autocomplete(e);t.addListener("place_changed",function(){var e=t.getPlace(),n=e.geometry.location.lat(),r=e.geometry.location.lng();(0,i.default)(n,r)}),e.on("keydown",function(e){13===e.keyCode&&e.preventDefault()})}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(34),i=function(e){return e&&e.__esModule?e:{default:e}}(o);t.default=r},function(e,t,n){"use strict";function r(e){var t=new u(e),n=i(u.prototype.request,t);return o.extend(n,u.prototype,t),o.extend(n,t),n}var o=n(0),i=n(4),u=n(15),s=n(1),a=r(s);a.Axios=u,a.create=function(e){return r(o.merge(s,e))},a.Cancel=n(9),a.CancelToken=n(29),a.isCancel=n(8),a.all=function(e){return Promise.all(e)},a.spread=n(30),e.exports=a,e.exports.default=a},function(e,t,n){"use strict";function r(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function o(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&r(e.slice(0,0))}/*!
>>>>>>> development
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
e.exports=function(e){return null!=e&&(r(e)||o(e)||!!e._isBuffer)}},function(e,t,n){"use strict";function r(e){this.defaults=e,this.interceptors={request:new u,response:new u}}var o=n(1),i=n(0),u=n(24),s=n(25),a=n(27),c=n(28);r.prototype.request=function(e){"string"==typeof e&&(e=i.merge({url:arguments[0]},arguments[1])),e=i.merge(o,this.defaults,{method:"get"},e),e.method=e.method.toLowerCase(),e.baseURL&&!a(e.url)&&(e.url=c(e.baseURL,e.url));var t=[s,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)n=n.then(t.shift(),t.shift());return n},i.forEach(["delete","get","head","options"],function(e){r.prototype[e]=function(t,n){return this.request(i.merge(n||{},{method:e,url:t}))}}),i.forEach(["post","put","patch"],function(e){r.prototype[e]=function(t,n,r){return this.request(i.merge(r||{},{method:e,url:t,data:n}))}}),e.exports=r},function(e,t,n){"use strict";var r=n(0);e.exports=function(e,t){r.forEach(e,function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])})}},function(e,t,n){"use strict";var r=n(7);e.exports=function(e,t,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},function(e,t,n){"use strict";e.exports=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e}},function(e,t,n){"use strict";function r(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var o=n(0);e.exports=function(e,t,n){if(!t)return e;var i;if(n)i=n(t);else if(o.isURLSearchParams(t))i=t.toString();else{var u=[];o.forEach(t,function(e,t){null!==e&&void 0!==e&&(o.isArray(e)&&(t+="[]"),o.isArray(e)||(e=[e]),o.forEach(e,function(e){o.isDate(e)?e=e.toISOString():o.isObject(e)&&(e=JSON.stringify(e)),u.push(r(t)+"="+r(e))}))}),i=u.join("&")}return i&&(e+=(-1===e.indexOf("?")?"?":"&")+i),e}},function(e,t,n){"use strict";var r=n(0);e.exports=function(e){var t,n,o,i={};return e?(r.forEach(e.split("\n"),function(e){o=e.indexOf(":"),t=r.trim(e.substr(0,o)).toLowerCase(),n=r.trim(e.substr(o+1)),t&&(i[t]=i[t]?i[t]+", "+n:n)}),i):i}},function(e,t,n){"use strict";var r=n(0);e.exports=r.isStandardBrowserEnv()?function(){function e(e){var t=e;return n&&(o.setAttribute("href",t),t=o.href),o.setAttribute("href",t),{href:o.href,protocol:o.protocol?o.protocol.replace(/:$/,""):"",host:o.host,search:o.search?o.search.replace(/^\?/,""):"",hash:o.hash?o.hash.replace(/^#/,""):"",hostname:o.hostname,port:o.port,pathname:"/"===o.pathname.charAt(0)?o.pathname:"/"+o.pathname}}var t,n=/(msie|trident)/i.test(navigator.userAgent),o=document.createElement("a");return t=e(window.location.href),function(n){var o=r.isString(n)?e(n):n;return o.protocol===t.protocol&&o.host===t.host}}():function(){return function(){return!0}}()},function(e,t,n){"use strict";function r(){this.message="String contains an invalid character"}function o(e){for(var t,n,o=String(e),u="",s=0,a=i;o.charAt(0|s)||(a="=",s%1);u+=a.charAt(63&t>>8-s%1*8)){if((n=o.charCodeAt(s+=.75))>255)throw new r;t=t<<8|n}return u}var i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";r.prototype=new Error,r.prototype.code=5,r.prototype.name="InvalidCharacterError",e.exports=o},function(e,t,n){"use strict";var r=n(0);e.exports=r.isStandardBrowserEnv()?function(){return{write:function(e,t,n,o,i,u){var s=[];s.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),r.isString(o)&&s.push("path="+o),r.isString(i)&&s.push("domain="+i),!0===u&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},function(e,t,n){"use strict";function r(){this.handlers=[]}var o=n(0);r.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},r.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},r.prototype.forEach=function(e){o.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=r},function(e,t,n){"use strict";function r(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var o=n(0),i=n(26),u=n(8),s=n(1);e.exports=function(e){return r(e),e.headers=e.headers||{},e.data=i(e.data,e.headers,e.transformRequest),e.headers=o.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),o.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]}),(e.adapter||s.adapter)(e).then(function(t){return r(e),t.data=i(t.data,t.headers,e.transformResponse),t},function(t){return u(t)||(r(e),t&&t.response&&(t.response.data=i(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})}},function(e,t,n){"use strict";var r=n(0);e.exports=function(e,t,n){return r.forEach(n,function(n){e=n(e,t)}),e}},function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},function(e,t,n){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},function(e,t,n){"use strict";function r(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var n=this;e(function(e){n.reason||(n.reason=new o(e),t(n.reason))})}var o=n(9);r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.source=function(){var e;return{token:new r(function(t){e=t}),cancel:e}},e.exports=r},function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},function(e,t,n){"use strict";function r(e,t,n){e.preventDefault(),i.default.post(t.action,{_csrf:n}).then(function(e){e.data.message||(alert("You must be logged in"),window.location.href=self.location+"login");var n=e.data;console.log(n);var r=n.updated?n.updated.numberTonight:n.newSpot.numberTonight;t.goingButton.innerHTML=r+" Going"}).catch(function(e){return console.error(e)})}Object.defineProperty(t,"__esModule",{value:!0});var o=n(3),i=function(e){return e&&e.__esModule?e:{default:e}}(o);t.default=r},,function(e,t,n){"use strict";function r(e){e.on("click",function(){if(navigator.geolocation){var e=function(e){var t=e.coords.latitude,n=e.coords.longitude;(0,i.default)(t,n)},t=function(e){console.log("Error occured. Error code: "+e.code)},n={maximumAge:3e5,timeout:1e4};navigator.geolocation.getCurrentPosition(e,t,n)}else console.log("Error! Your browser does not support geolocation")})}Object.defineProperty(t,"__esModule",{value:!0});var o=n(34),i=function(e){return e&&e.__esModule?e:{default:e}}(o);t.default=r},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){console.log(e,t),(0,s.$)("#data").innerHTML="";var n="https://maps.googleapis.com/maps/api/place/nearbysearch/json?location="+e+","+t+"&radius=10000&type=night_club&key=AIzaSyDPxdi1VQQ3vF8voAvgQ93jugBmHEAc5fY";u.default.get("https://ajibs-cors-anywhere.herokuapp.com/"+n).then(function(e){var t=e.data,n=(0,s.$)("#csrfGeneralToken").value;t.results.forEach(function(e){(0,s.$)("#data").innerHTML+='<form action="/places/'+e.place_id+'" class="going">\n            <input type="hidden" name="_csrf" value='+n+">\n            "+e.name+'\n            <button type="submit" name="goingButton">0 Going</button>\n          </form><br><br>\n          '}),(0,s.$$)("form.going").on("submit",function(e){(0,c.default)(e,this,n)})}).catch(function(e){return console.error(e)})}Object.defineProperty(t,"__esModule",{value:!0});var i=n(3),u=r(i),s=n(2),a=n(31),c=r(a);t.default=o}]);
//# sourceMappingURL=App.bundle.js.map