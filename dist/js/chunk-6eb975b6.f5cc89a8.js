(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6eb975b6"],{"1da1":function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r("d3b7");function n(t,e,r,n,o,a,i){try{var s=t[a](i),c=s.value}catch(u){return void r(u)}s.done?e(c):Promise.resolve(c).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,a){var i=t.apply(e,r);function s(t){n(i,o,a,s,c,"next",t)}function c(t){n(i,o,a,s,c,"throw",t)}s(void 0)}))}}},2642:function(t,e,r){"use strict";var n=r("dbc8"),o=r.n(n);o.a},2997:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a-layout-footer",{staticStyle:{"min-height":"16rem","background-color":"#1875d2"}},[n("footer",{style:{padding:"3%"},attrs:{id:"footer"}},[n("div",{staticClass:"footer-wrap"},[n("div",{staticClass:"ant-row gutter"},[n("hide-at",{attrs:{breakpoint:"mediumAndBelow"}},[n("div",{staticClass:"ant-col-xs-12 ant-col-sm-12 ant-col-md-6 "},[n("img",{staticClass:"imagecenter",staticStyle:{width:"50%"},attrs:{src:r("9b19")}})])]),n("div",{staticClass:"ant-col-xs-12 ant-col-sm-12 ant-col-md-6"},[n("div",{staticClass:"footer-center"},[n("div",{staticClass:"icons-list"},[n("a",{attrs:{href:"mailto:info@codeln.com",target:"_top"}},[n("a-icon",{attrs:{type:"mail"}})],1),n("a",{staticClass:"text-muted",attrs:{href:"https://www.facebook.com/CodelnSpaces/",target:"_blank"}},[n("a-icon",{attrs:{type:"facebook"}})],1),n("a",{staticClass:"text-muted",attrs:{href:"https://www.linkedin.com/company/codeln/",target:"_blank"}},[n("a-icon",{attrs:{type:"linkedin"}})],1),n("a",{staticClass:"text-muted",attrs:{href:"https://twitter.com/Codeln_spaces",target:"_blank"}},[n("a-icon",{attrs:{type:"twitter"}})],1),n("a",{staticClass:"text-muted",attrs:{href:"https://instagram.com/codeln_spaces?igshid=wfibiwjbqe9e",target:"_blank"}},[n("a-icon",{attrs:{type:"instagram"}})],1),n("a",{staticClass:"text-muted",attrs:{href:"https://www.youtube.com/channel/UCJc8rd10wkhX2c1Htg4aF0Q",target:"_blank"}},[n("a-icon",{attrs:{type:"youtube"}})],1),n("a",{staticClass:"text-muted",attrs:{href:"https://medium.com/codeln",target:"_blank"}},[n("a-icon",{attrs:{type:"medium"}})],1)])])])],1)])])])},o=[],a=r("8808"),i={name:"Footer",components:{hideAt:a["hideAt"]},data:function(){return{top:10,bottom:10}}},s=i,c=(r("2642"),r("2877")),u=Object(c["a"])(s,n,o,!1,null,"2e02b915",null);e["a"]=u.exports},"6ff9":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a-layout-header",{style:{position:"fixed",zIndex:20,width:"100%",backgroundColor:"#ffffff",borderBottom:"1px solid #e8e8e8"},attrs:{id:"components-layout-demo-fixed"}},[n("div",{staticClass:"logo"},[n("router-link",{attrs:{to:"/"}},[n("img",{staticStyle:{width:"100%","margin-left":"1.5rem"},attrs:{src:r("b8fb")}})])],1),n("hide-at",{attrs:{breakpoint:"mediumAndBelow"}},[n("div",{staticClass:"ant-menu-horizontal ",style:{lineHeight:"64px",float:"right",borderBottom:0}},[n("a",{staticClass:"ant-menu-item",staticStyle:{"margin-bottom":"0"},attrs:{href:"https://www.codeln.com/",target:"_blank"}},[t._v(" Go to Codeln ")]),n("router-link",{staticClass:"ant-menu-item",staticStyle:{"margin-bottom":"0"},attrs:{to:"/Jobs"}},[t._v("Gigs board")]),t.$store.state.isUserLoggedIn&&"recruiter"===t.$store.state.user_object.user_type&&"complete"===t.$store.state.user_object.stage?n("router-link",{staticClass:"ant-menu-item",staticStyle:{"margin-bottom":"0"},attrs:{to:"/Dashboard"}},[t._v(" My account ")]):t._e(),t.$store.state.isUserLoggedIn&&"recruiter"===t.$store.state.user_object.user_type&&"complete"!==t.$store.state.user_object.stage?n("router-link",{staticClass:"ant-menu-item",staticStyle:{"margin-bottom":"0"},attrs:{to:"/Register"}},[t._v(" My account ")]):t._e(),t.$store.state.isUserLoggedIn&&"developer"===t.$store.state.user_object.user_type&&"complete"!==t.$store.state.user_object.stage?n("router-link",{staticClass:"ant-menu-item",staticStyle:{"margin-bottom":"0"},attrs:{to:"/Register"}},[t._v(" My account ")]):t._e(),t.$store.state.isUserLoggedIn&&"developer"===t.$store.state.user_object.user_type&&"complete"===t.$store.state.user_object.stage?n("router-link",{staticClass:"ant-menu-item",staticStyle:{"margin-bottom":"0"},attrs:{to:"/Developer"}},[t._v(" My account ")]):t._e(),t.$store.state.isUserLoggedIn?t._e():n("router-link",{staticClass:"ant-menu-item",staticStyle:{"margin-bottom":"0"},attrs:{to:"/Login"}},[t._v(" Login ")]),n("a",[t.$store.state.isUserLoggedIn?n("a-button",{staticStyle:{"margin-bottom":"0",border:"0","-webkit-box-shadow":"0 0 0 rgba(255,255,255,0.01)",color:"#1890ff"},on:{click:t.logout}},[t._v("Logout ")]):t._e()],1)],1)]),n("show-at",{attrs:{breakpoint:"mediumAndBelow"}},[n("div",{staticStyle:{float:"right"}},[n("Menusider")],1)])],1)},o=[],a=(r("96cf"),r("1da1")),i=r("8808"),s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a-dropdown",{attrs:{trigger:["click"],placement:"bottomCenter"}},[r("a",{staticClass:"ant-dropdown-link",attrs:{href:"#"}},[r("a-icon",{attrs:{type:"menu-fold"}})],1),r("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[r("a-menu-item",{key:"8"},[r("router-link",{attrs:{to:"/jobs"}},[r("span",[t._v("Job board ")])])],1),r("a-menu-item",{key:"9"},[r("a",{staticClass:"ant-menu-item",staticStyle:{"margin-bottom":"0"},attrs:{href:"https://www.codeln.com/",target:"_blank"}},[t._v(" Go to Codeln ")])]),t.$store.state.isUserLoggedIn&&"recruiter"===t.$store.state.user_object.user_type?r("a-menu-item",{key:"1"},[r("router-link",{attrs:{to:"/Dashboard"}},[r("span",[t._v("My account")])])],1):t._e(),t.$store.state.isUserLoggedIn&&"developer"===t.$store.state.user_object.user_type?r("a-menu-item",{key:"2"},[r("router-link",{attrs:{to:"/Developer"}},[r("span",[t._v("My account")])])],1):t._e(),t.$store.state.isUserLoggedIn?t._e():r("a-menu-item",{key:"3"},[r("router-link",{attrs:{to:"/login"}},[r("span",[t._v("Login")])])],1),t.$store.state.isUserLoggedIn?t._e():r("a-menu-item",{key:"4"},[r("router-link",{attrs:{to:"/register"}},[r("span",[t._v("Register")])])],1),t.$store.state.isUserLoggedIn?r("a-menu-item",{key:"5"},[r("a",{on:{click:t.logout}},[t._v("Logout")])]):t._e()],1)],1)},c=[],u={name:"Menusider",data:function(){return{currentUserProfile:null}},mounted:function(){return Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},methods:{logout:function(){this.$store.dispatch("setToken",null),this.$store.dispatch("setUser",null),this.$store.dispatch("setisLoggedIn",!1),this.$store.dispatch("setUsertype",null),this.$store.dispatch("setUser_id",null),this.$store.dispatch("setNext",null),this.$router.push({name:"home"})}}},l=u,h=r("2877"),f=Object(h["a"])(l,s,c,!1,null,"52e38e49",null),d=f.exports,m={name:"Header",components:{hideAt:i["hideAt"],showAt:i["showAt"],Menusider:d},data:function(){return{}},mounted:function(){return Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},methods:{logout:function(){this.$store.dispatch("setToken",null),this.$store.dispatch("setUser",null),this.$store.dispatch("setisLoggedIn",!1),this.$store.dispatch("setUser_object",null),this.$store.dispatch("setProjectedit",null),this.$router.push({name:"home"})}}},p=m,g=(r("ede6"),Object(h["a"])(p,n,o,!1,null,"5ce4eb64",null));e["a"]=g.exports},"96cf":function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(O){c=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof g?e:g,a=Object.create(o.prototype),i=new S(n||[]);return a._invoke=$(t,r,i),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(O){return{type:"throw",arg:O}}}t.wrap=u;var h="suspendedStart",f="suspendedYield",d="executing",m="completed",p={};function g(){}function y(){}function v(){}var b={};b[a]=function(){return this};var w=Object.getPrototypeOf,_=w&&w(w(U([])));_&&_!==r&&n.call(_,a)&&(b=_);var k=v.prototype=g.prototype=Object.create(b);function x(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function r(o,a,i,s){var c=l(t[o],t,a);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"===typeof h&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,i,s)}),(function(t){r("throw",t,i,s)})):e.resolve(h).then((function(t){u.value=t,i(u)}),(function(t){return r("throw",t,i,s)}))}s(c.arg)}var o;function a(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}this._invoke=a}function $(t,e,r){var n=h;return function(o,a){if(n===d)throw new Error("Generator is already running");if(n===m){if("throw"===o)throw a;return I()}r.method=o,r.arg=a;while(1){var i=r.delegate;if(i){var s=C(i,r);if(s){if(s===p)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===h)throw n=m,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var c=l(t,e,r);if("normal"===c.type){if(n=r.done?m:f,c.arg===p)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=m,r.method="throw",r.arg=c.arg)}}}function C(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,C(t,r),"throw"===r.method))return p;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,p;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,p):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,p)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function U(t){if(t){var r=t[a];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){while(++o<t.length)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:I}}function I(){return{value:e,done:!0}}return y.prototype=k.constructor=v,v.constructor=y,y.displayName=c(v,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,c(t,s,"GeneratorFunction")),t.prototype=Object.create(k),t},t.awrap=function(t){return{__await:t}},x(L.prototype),L.prototype[i]=function(){return this},t.AsyncIterator=L,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new L(u(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},x(k),c(k,s,"Generator"),k[a]=function(){return this},k.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=U,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(E),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return s.type="throw",s.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],s=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,p):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:U(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),p}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},"9b19":function(t,e,r){t.exports=r.p+"img/logo.b596d5fb.svg"},ae3d:function(t,e,r){},dbc8:function(t,e,r){},ede6:function(t,e,r){"use strict";var n=r("ae3d"),o=r.n(n);o.a}}]);
//# sourceMappingURL=chunk-6eb975b6.f5cc89a8.js.map