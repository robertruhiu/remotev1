(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-65c71b7c"],{"1da1":function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));r("d3b7");function n(t,e,r,n,i,a,o){try{var s=t[a](o),c=s.value}catch(u){return void r(u)}s.done?e(c):Promise.resolve(c).then(n,i)}function i(t){return function(){var e=this,r=arguments;return new Promise((function(i,a){var o=t.apply(e,r);function s(t){n(o,i,a,s,c,"next",t)}function c(t){n(o,i,a,s,c,"throw",t)}s(void 0)}))}}},"1dde":function(t,e,r){var n=r("d039"),i=r("b622"),a=r("2d00"),o=i("species");t.exports=function(t){return a>=51||!n((function(){var e=[],r=e.constructor={};return r[o]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"2ada":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a-layout-sider",{staticStyle:{"box-shadow":"2px 0 6px rgba(0,21,41,.35)","background-color":"#F4F7FC",height:"available"},style:{overflow:"auto",height:"100vh",position:"fixed",left:0},attrs:{breakpoint:"lg","collapsed-width":"0"},on:{collapse:t.onCollapse,breakpoint:t.onBreakpoint}},[r("hide-at",{attrs:{breakpoints:{small:425,medium:768},breakpoint:"mediumAndBelow"}},[r("router-link",{attrs:{to:"/"}},[r("img",{staticStyle:{width:"9rem",height:"2rem","margin-top":"1rem","margin-bottom":"1rem","margin-left":"1rem"},style:t.logo,attrs:{src:t.defaultlogo}})])],1),r("a-menu",{staticStyle:{"font-family":"sofia_proregular","background-color":"#F4F7FC"},attrs:{mode:"inline","default-selected-keys":t.key}},[r("a-menu-item",{key:"9",on:{click:function(e){return t.$router.push("Dashboard")}}},[r("a-icon",{attrs:{type:"dashboard"}}),r("span",[t._v("Home")])],1),r("a-menu-item",{key:"1",on:{click:function(e){return t.$router.push("Myprojects")}}},[r("a-icon",{attrs:{type:"appstore"}}),r("span",[t._v("Manage my Projects")])],1),r("a-menu-item",{key:"2",on:{click:function(e){return t.$router.push("Create")}}},[r("a-icon",{attrs:{type:"plus"}}),r("span",[t._v("Create a Project")])],1),r("a-menu-item",{key:"3",on:{click:function(e){return t.$router.push("Escrow")}}},[r("a-icon",{attrs:{type:"bank"}}),r("span",[t._v("Escrow Management")])],1),r("a-menu-item",{key:"4"},[r("a-icon",{attrs:{type:"calendar"}}),r("span",[t._v("My Meetings")])],1),r("a-menu-item",{key:"5",on:{click:function(e){return t.$router.push("ClientBugs")}}},[r("a-icon",{attrs:{type:"exclamation"}}),r("span",[t._v("Bugs & issues")])],1),r("a-menu-item",{key:"6"},[r("a-icon",{attrs:{type:"message"}}),r("span",[t._v("Chat")])],1),r("a-menu-item",{key:"7"},[r("a-icon",{attrs:{type:"solution"}}),r("span",[t._v("Edit Profile")])],1),r("a-menu-item",{key:"8"},[r("a-icon",{attrs:{type:"logout"}}),r("span",[t._v("logout")])],1)],1)],1)},i=[],a=r("8808"),o=r("b8fb"),s=r.n(o),c={name:"CLientSider",data:function(){return{collapsed:!1,defaultlogo:s.a,key:["9"],top:0}},components:{hideAt:a["hideAt"]},computed:{getRoute:function(){var t=this.$route;return console.log(t),t}},methods:{onCollapse:function(t,e){return e},onBreakpoint:function(t){return t}}},u=c,l=(r("7a56"),r("2877")),d=Object(l["a"])(u,n,i,!1,null,"3f6109cc",null);e["a"]=d.exports},"5a6a":function(t,e,r){},"65f0":function(t,e,r){var n=r("861d"),i=r("e8b5"),a=r("b622"),o=a("species");t.exports=function(t,e){var r;return i(t)&&(r=t.constructor,"function"!=typeof r||r!==Array&&!i(r.prototype)?n(r)&&(r=r[o],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===e?0:e)}},"7a56":function(t,e,r){"use strict";var n=r("5a6a"),i=r.n(n);i.a},8418:function(t,e,r){"use strict";var n=r("c04e"),i=r("9bf2"),a=r("5c6c");t.exports=function(t,e,r){var o=n(e);o in t?i.f(t,o,a(0,r)):t[o]=r}},"96cf":function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",o=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(D){c=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var i=e&&e.prototype instanceof v?e:v,a=Object.create(i.prototype),o=new O(n||[]);return a._invoke=L(t,r,o),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(D){return{type:"throw",arg:D}}}t.wrap=u;var d="suspendedStart",f="suspendedYield",p="executing",h="completed",m={};function v(){}function y(){}function g(){}var b={};b[a]=function(){return this};var w=Object.getPrototypeOf,x=w&&w(w(A([])));x&&x!==r&&n.call(x,a)&&(b=x);var _=g.prototype=v.prototype=Object.create(b);function S(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function r(i,a,o,s){var c=l(t[i],t,a);if("throw"!==c.type){var u=c.arg,d=u.value;return d&&"object"===typeof d&&n.call(d,"__await")?e.resolve(d.__await).then((function(t){r("next",t,o,s)}),(function(t){r("throw",t,o,s)})):e.resolve(d).then((function(t){u.value=t,o(u)}),(function(t){return r("throw",t,o,s)}))}s(c.arg)}var i;function a(t,n){function a(){return new e((function(e,i){r(t,n,e,i)}))}return i=i?i.then(a,a):a()}this._invoke=a}function L(t,e,r){var n=d;return function(i,a){if(n===p)throw new Error("Generator is already running");if(n===h){if("throw"===i)throw a;return T()}r.method=i,r.arg=a;while(1){var o=r.delegate;if(o){var s=E(o,r);if(s){if(s===m)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===d)throw n=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var c=l(t,e,r);if("normal"===c.type){if(n=r.done?h:f,c.arg===m)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=h,r.method="throw",r.arg=c.arg)}}}function E(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,E(t,r),"throw"===r.method))return m;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var i=l(n,t.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,m;var a=i.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,m):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function A(t){if(t){var r=t[a];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var i=-1,o=function r(){while(++i<t.length)if(n.call(t,i))return r.value=t[i],r.done=!1,r;return r.value=e,r.done=!0,r};return o.next=o}}return{next:T}}function T(){return{value:e,done:!0}}return y.prototype=_.constructor=g,g.constructor=y,y.displayName=c(g,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,c(t,s,"GeneratorFunction")),t.prototype=Object.create(_),t},t.awrap=function(t){return{__await:t}},S(k.prototype),k.prototype[o]=function(){return this},t.AsyncIterator=k,t.async=function(e,r,n,i,a){void 0===a&&(a=Promise);var o=new k(u(e,r,n,i),a);return t.isGeneratorFunction(r)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},S(_),c(_,s,"Generator"),_[a]=function(){return this},_.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=A,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(j),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function i(n,i){return s.type="throw",s.arg=t,r.next=n,i&&(r.method="next",r.arg=e),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],s=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),u=n.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return i(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=t,o.arg=e,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;j(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:A(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),m}},t}(t.exports);try{regeneratorRuntime=n}catch(i){Function("r","regeneratorRuntime = r")(n)}},"99af":function(t,e,r){"use strict";var n=r("23e7"),i=r("d039"),a=r("e8b5"),o=r("861d"),s=r("7b0b"),c=r("50c4"),u=r("8418"),l=r("65f0"),d=r("1dde"),f=r("b622"),p=r("2d00"),h=f("isConcatSpreadable"),m=9007199254740991,v="Maximum allowed index exceeded",y=p>=51||!i((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),g=d("concat"),b=function(t){if(!o(t))return!1;var e=t[h];return void 0!==e?!!e:a(t)},w=!y||!g;n({target:"Array",proto:!0,forced:w},{concat:function(t){var e,r,n,i,a,o=s(this),d=l(o,0),f=0;for(e=-1,n=arguments.length;e<n;e++)if(a=-1===e?o:arguments[e],b(a)){if(i=c(a.length),f+i>m)throw TypeError(v);for(r=0;r<i;r++,f++)r in a&&u(d,f,a[r])}else{if(f>=m)throw TypeError(v);u(d,f++,a)}return d.length=f,d}})},a434:function(t,e,r){"use strict";var n=r("23e7"),i=r("23cb"),a=r("a691"),o=r("50c4"),s=r("7b0b"),c=r("65f0"),u=r("8418"),l=r("1dde"),d=r("ae40"),f=l("splice"),p=d("splice",{ACCESSORS:!0,0:0,1:2}),h=Math.max,m=Math.min,v=9007199254740991,y="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!f||!p},{splice:function(t,e){var r,n,l,d,f,p,g=s(this),b=o(g.length),w=i(t,b),x=arguments.length;if(0===x?r=n=0:1===x?(r=0,n=b-w):(r=x-2,n=m(h(a(e),0),b-w)),b+r-n>v)throw TypeError(y);for(l=c(g,n),d=0;d<n;d++)f=w+d,f in g&&u(l,d,g[f]);if(l.length=n,r<n){for(d=w;d<b-n;d++)f=d+n,p=d+r,f in g?g[p]=g[f]:delete g[p];for(d=b;d>b-n+r;d--)delete g[d-1]}else if(r>n)for(d=b-n;d>w;d--)f=d+n-1,p=d+r-1,f in g?g[p]=g[f]:delete g[p];for(d=0;d<r;d++)g[d+w]=arguments[d+2];return g.length=b-n+r,l}})},a640:function(t,e,r){"use strict";var n=r("d039");t.exports=function(t,e){var r=[][t];return!!r&&n((function(){r.call(null,e||function(){throw 1},1)}))}},acc2:function(t,e,r){},ad14:function(t,e,r){"use strict";var n=r("acc2"),i=r.n(n);i.a},ae40:function(t,e,r){var n=r("83ab"),i=r("d039"),a=r("5135"),o=Object.defineProperty,s={},c=function(t){throw t};t.exports=function(t,e){if(a(s,t))return s[t];e||(e={});var r=[][t],u=!!a(e,"ACCESSORS")&&e.ACCESSORS,l=a(e,0)?e[0]:c,d=a(e,1)?e[1]:void 0;return s[t]=!!r&&!i((function(){if(u&&!n)return!0;var t={length:-1};u?o(t,1,{enumerable:!0,get:c}):t[1]=1,r.call(t,l,d)}))}},b727:function(t,e,r){var n=r("0366"),i=r("44ad"),a=r("7b0b"),o=r("50c4"),s=r("65f0"),c=[].push,u=function(t){var e=1==t,r=2==t,u=3==t,l=4==t,d=6==t,f=5==t||d;return function(p,h,m,v){for(var y,g,b=a(p),w=i(b),x=n(h,m,3),_=o(w.length),S=0,k=v||s,L=e?k(p,_):r?k(p,0):void 0;_>S;S++)if((f||S in w)&&(y=w[S],g=x(y,S,b),t))if(e)L[S]=g;else if(g)switch(t){case 3:return!0;case 5:return y;case 6:return S;case 2:c.call(L,y)}else if(l)return!1;return d?-1:u||l?l:L}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6)}},c975:function(t,e,r){"use strict";var n=r("23e7"),i=r("4d64").indexOf,a=r("a640"),o=r("ae40"),s=[].indexOf,c=!!s&&1/[1].indexOf(1,-0)<0,u=a("indexOf"),l=o("indexOf",{ACCESSORS:!0,1:0});n({target:"Array",proto:!0,forced:c||!u||!l},{indexOf:function(t){return c?s.apply(this,arguments)||0:i(this,t,arguments.length>1?arguments[1]:void 0)}})},e8b5:function(t,e,r){var n=r("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}},fda2:function(t,e,r){"use strict";r.r(e);for(var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a-layout",{staticStyle:{"min-height":"100vh","background-color":"#F4F7FC","margin-left":"200px"}},[n("ClientSider"),n("a-layout",{staticStyle:{"background-color":"#F4F7FC"}},[n("a-layout-content",{style:{padding:"1% 2%",background:"#FAFBFF",minHeight:"280px"}},[n("div",[n("a-card",{staticClass:"hellocard"},[n("a-row",[n("a-col",{attrs:{span:"12"}},[n("a-breadcrumb",[n("a-breadcrumb-item",[n("a",{on:{click:function(e){return t.$router.push("Dashboard")}}},[t._v("Home")])]),n("a-breadcrumb-item",[n("a",{on:{click:function(e){return t.$router.push("Myprojects")}}},[t._v("My projects")])]),n("a-breadcrumb-item",[n("a",[t._v("Cyrus web application")])])],1),n("span",{staticStyle:{"font-size":"1.7rem","font-family":"sofia_prosemibold",color:"black"}},[t._v(" Cyrus web application")])],1),n("a-col",{attrs:{span:"6"}},[n("div",{staticStyle:{"text-align":"center"}},[n("img",{staticStyle:{width:"20%"},attrs:{src:r("fe40")}})])])],1)],1)],1),n("div",{staticStyle:{"min-height":"40vh",position:"relative"}},[n("div",{},[n("a-row",{staticStyle:{color:"black"}},[n("a-col",{attrs:{span:"8"}},[n("a-tabs",{attrs:{"default-active-key":1}},[n("a-tab-pane",{key:"1",attrs:{tab:"All bids"}},[n("div",{staticStyle:{height:"40rem",padding:"3%"}},[n("a-list",{attrs:{"item-layout":"vertical",size:"large",pagination:t.pagination,"data-source":t.Bids},scopedSlots:t._u([{key:"renderItem",fn:function(e){return n("a-list-item",{key:"item.title",staticClass:"shadowsmall"},[n("a-list-item-meta",{attrs:{description:e.description}},[n("a",{attrs:{slot:"title",href:e.href},slot:"title"},[t._v(t._s(e.title))]),n("a-avatar",{attrs:{slot:"avatar",src:e.avatar},slot:"avatar"})],1),n("a-row",[n("a-col",{attrs:{span:"8"}},[t._v(" time:"+t._s(e.time)+" ")]),n("a-col",{attrs:{span:"8"}},[t._v(" budget:"+t._s(e.budget)+" ")]),n("a-col",{attrs:{span:"8"}},[n("a-button",{attrs:{type:"primary",size:"small"},on:{click:function(r){return t.openbid(e)}}},[t._v("view bid")])],1)],1)],1)}}])})],1)]),n("a-tab-pane",{key:"2",attrs:{tab:"Shortlisted","force-render":""}},[n("div",{staticStyle:{height:"40rem",padding:"3%"}},[n("a-list",{attrs:{"item-layout":"vertical",size:"large",pagination:t.pagination,"data-source":t.Shortlist},scopedSlots:t._u([{key:"renderItem",fn:function(e){return n("a-list-item",{key:"item.title",staticClass:"shadowsmall"},[n("a-list-item-meta",{attrs:{description:e.description}},[n("a",{attrs:{slot:"title",href:e.href},slot:"title"},[t._v(t._s(e.title))]),n("a-avatar",{attrs:{slot:"avatar",src:e.avatar},slot:"avatar"})],1),n("a-row",[n("a-col",{attrs:{span:"8"}},[t._v(" time:"+t._s(e.time)+" ")]),n("a-col",{attrs:{span:"8"}},[t._v(" budget:"+t._s(e.budget)+" ")]),n("a-col",{attrs:{span:"8"}},[n("a-button",{attrs:{type:"primary",size:"small"},on:{click:function(r){return t.openbid(e)}}},[t._v("view bid")])],1)],1)],1)}}])})],1)])],1)],1),n("a-col",{attrs:{span:"16"}},[t.bid?n("div",{staticStyle:{padding:"0 1%"}},[n("div",{staticClass:"casecard"},[n("a-row",[n("a-col",{attrs:{span:"4"}},[n("img",{staticStyle:{width:"100%"},attrs:{src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"}})]),n("a-col",{attrs:{span:"20"}},[n("a-descriptions",{attrs:{title:"Developer bid"}},[n("a-descriptions-item",{attrs:{label:"Name"}},[t._v(" Dennis Ruhiu "+t._s(t.bid.title)+" ")]),n("a-descriptions-item",{attrs:{label:"email"}},[t._v(" test@codeln.com ")]),n("a-descriptions-item",{attrs:{label:"Location"}},[t._v(" Nairofi ")]),n("a-descriptions-item",{attrs:{label:"My skills"}},[n("a-tag",{attrs:{color:"blue"}},[t._v(" reactjs ")]),n("a-tag",{attrs:{color:"blue"}},[t._v(" django ")])],1)],1)],1)],1),n("div",{staticStyle:{padding:"3%"},attrs:{id:"main content"}},[n("a-tabs",{attrs:{"default-active-key":"1"}},[n("a-tab-pane",{key:"1",attrs:{tab:"Proposal"}},[n("p",[t._v("Proposal")]),n("p",[t._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ")]),n("p",[t._v("Tools am going to use")]),n("p",t._l(t.bid.tools,(function(e){return n("a-tag",{key:e,attrs:{color:"blue"}},[t._v(" "+t._s(e)+" ")])})),1),n("p",[t._v("Project budget : "+t._s(t.bid.budget))]),n("p",[t._v("Time to finish project : "+t._s(t.bid.time))])]),n("a-tab-pane",{key:"2",attrs:{tab:"Project potfolio","force-render":""}},[t._v(" Content of Tab Pane 2 ")]),n("a-tab-pane",{key:"3",attrs:{tab:"Work experience"}},[t._v(" Content of Tab Pane 3 ")])],1),n("div",[t.bid.shortlisted?n("a-button",{staticStyle:{"margin-right":"1%"},attrs:{type:"primary"},on:{click:t.acceptbid}},[t._v(" Accept bid ")]):t._e(),!1===t.bid.shortlisted?n("a-button",{staticStyle:{"margin-right":"1%"},attrs:{type:"primary"},on:{click:t.shortlist}},[t._v(" Shortlist ")]):t._e(),t.bid.shortlisted?n("a-button",{attrs:{type:"danger"},on:{click:t.removebid}},[t._v(" Remove from shortlist ")]):t._e()],1)],1)],1)]):t._e()])],1)],1)])])],1)],1)},i=[],a=(r("99af"),r("4160"),r("c975"),r("a434"),r("159b"),r("96cf"),r("1da1")),o=r("2ada"),s=r("b1ca"),c=[],u=[],l=0;l<2;l++)c.push({title:"Name ".concat(l),avatar:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",description:"Ant Design, a design language for background applications, is refined by Ant UED Team.",time:"2 months",budget:"$4000",tools:["react","django"],shortlisted:!1});for(var d=0;d<3;d++)u.push({title:"Name ".concat(d),avatar:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",description:"Ant Design, a design language for background applications, is refined by Ant UED Team.",time:"2 months",budget:"$4000",tools:["react","django"],shortlisted:!0});var f={name:"Bids",data:function(){return{listData:c,Shortlisted:u,pagination:{onChange:function(t){console.log(t)},pageSize:3},bid:{},allbids:[]}},components:{ClientSider:o["a"]},mounted:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:s["a"].currentprojectbids().then((function(e){t.allbids=e.data})),t.allbids=t.listData.concat(t.Shortlisted),t.bid=t.listData[0];case 3:case"end":return e.stop()}}),e)})))()},computed:{Shortlist:function(){var t=[];return this.allbids.forEach((function(e){e.shortlisted&&t.push(e)})),t},Bids:function(){var t=[];return this.allbids.forEach((function(e){!1===e.shortlisted&&t.push(e)})),t}},methods:{openbid:function(t){this.bid=t},shortlist:function(){this.bid.shortlisted=!0,this.Shortlisted.push(this.bid);var t=this.listData.indexOf(this.bid);t>-1&&this.listData.splice(t,1)},removebid:function(){this.bid.shortlisted=!1,this.listData.push(this.bid);var t=this.Shortlisted.indexOf(this.bid);t>-1&&this.Shortlisted.splice(t,1)},acceptbid:function(){this.$router.push({name:"Myprojects"})}}},p=f,h=(r("ad14"),r("2877")),m=Object(h["a"])(p,n,i,!1,null,"b44bd126",null);e["default"]=m.exports},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},fe40:function(t,e,r){t.exports=r.p+"img/planning.fba66189.svg"}}]);
//# sourceMappingURL=chunk-65c71b7c.871a0d45.js.map