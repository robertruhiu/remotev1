(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-48e38084"],{"1dde":function(t,e,r){var a=r("d039"),i=r("b622"),o=r("2d00"),n=i("species");t.exports=function(t){return o>=51||!a((function(){var e=[],r=e.constructor={};return r[n]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},2532:function(t,e,r){"use strict";var a=r("23e7"),i=r("5a34"),o=r("1d80"),n=r("ab13");a({target:"String",proto:!0,forced:!n("includes")},{includes:function(t){return!!~String(o(this)).indexOf(i(t),arguments.length>1?arguments[1]:void 0)}})},"25f0":function(t,e,r){"use strict";var a=r("6eeb"),i=r("825a"),o=r("d039"),n=r("ad6d"),s="toString",c=RegExp.prototype,l=c[s],u=o((function(){return"/a/b"!=l.call({source:"a",flags:"b"})})),d=l.name!=s;(u||d)&&a(RegExp.prototype,s,(function(){var t=i(this),e=String(t.source),r=t.flags,a=String(void 0===r&&t instanceof RegExp&&!("flags"in c)?n.call(t):r);return"/"+e+"/"+a}),{unsafe:!0})},2642:function(t,e,r){"use strict";var a=r("dbc8"),i=r.n(a);i.a},2909:function(t,e,r){"use strict";function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,a=new Array(e);r<e;r++)a[r]=t[r];return a}function i(t){if(Array.isArray(t))return a(t)}r.d(e,"a",(function(){return c}));r("a4d3"),r("e01a"),r("d28b"),r("a630e"),r("d3b7"),r("3ca3"),r("ddb0");function o(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}r("fb6a"),r("b0c0"),r("25f0");function n(t,e){if(t){if("string"===typeof t)return a(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(t,e):void 0}}function s(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t){return i(t)||o(t)||n(t)||s()}},2997:function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-layout-footer",{staticStyle:{"min-height":"16rem","background-color":"#1875d2"}},[a("footer",{style:{padding:"3%"},attrs:{id:"footer"}},[a("div",{staticClass:"footer-wrap"},[a("div",{staticClass:"ant-row gutter"},[a("hide-at",{attrs:{breakpoint:"mediumAndBelow"}},[a("div",{staticClass:"ant-col-xs-12 ant-col-sm-12 ant-col-md-6 "},[a("img",{staticClass:"imagecenter",staticStyle:{width:"50%"},attrs:{src:r("9b19")}})])]),a("div",{staticClass:"ant-col-xs-12 ant-col-sm-12 ant-col-md-6"},[a("div",{staticClass:"footer-center"},[a("div",{staticClass:"icons-list"},[a("a",{attrs:{href:"mailto:info@codeln.com",target:"_top"}},[a("a-icon",{attrs:{type:"mail"}})],1),a("a",{staticClass:"text-muted",attrs:{href:"https://www.facebook.com/CodelnSpaces/",target:"_blank"}},[a("a-icon",{attrs:{type:"facebook"}})],1),a("a",{staticClass:"text-muted",attrs:{href:"https://www.linkedin.com/company/codeln/",target:"_blank"}},[a("a-icon",{attrs:{type:"linkedin"}})],1),a("a",{staticClass:"text-muted",attrs:{href:"https://twitter.com/Codeln_spaces",target:"_blank"}},[a("a-icon",{attrs:{type:"twitter"}})],1),a("a",{staticClass:"text-muted",attrs:{href:"https://instagram.com/codeln_spaces?igshid=wfibiwjbqe9e",target:"_blank"}},[a("a-icon",{attrs:{type:"instagram"}})],1),a("a",{staticClass:"text-muted",attrs:{href:"https://www.youtube.com/channel/UCJc8rd10wkhX2c1Htg4aF0Q",target:"_blank"}},[a("a-icon",{attrs:{type:"youtube"}})],1),a("a",{staticClass:"text-muted",attrs:{href:"https://medium.com/codeln",target:"_blank"}},[a("a-icon",{attrs:{type:"medium"}})],1)])])])],1)])])])},i=[],o=r("8808"),n={name:"Footer",components:{hideAt:o["hideAt"]},data:function(){return{top:10,bottom:10}}},s=n,c=(r("2642"),r("2877")),l=Object(c["a"])(s,a,i,!1,null,"2e02b915",null);e["a"]=l.exports},"3ca3":function(t,e,r){"use strict";var a=r("6547").charAt,i=r("69f3"),o=r("7dd0"),n="String Iterator",s=i.set,c=i.getterFor(n);o(String,"String",(function(t){s(this,{type:n,string:String(t),index:0})}),(function(){var t,e=c(this),r=e.string,i=e.index;return i>=r.length?{value:void 0,done:!0}:(t=a(r,i),e.index+=t.length,{value:t,done:!1})}))},"4b94":function(t,e,r){},"4de4":function(t,e,r){"use strict";var a=r("23e7"),i=r("b727").filter,o=r("1dde"),n=r("ae40"),s=o("filter"),c=n("filter");a({target:"Array",proto:!0,forced:!s||!c},{filter:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},"4df4":function(t,e,r){"use strict";var a=r("0366"),i=r("7b0b"),o=r("9bdd"),n=r("e95a"),s=r("50c4"),c=r("8418"),l=r("35a1");t.exports=function(t){var e,r,u,d,p,f,h=i(t),g="function"==typeof this?this:Array,m=arguments.length,b=m>1?arguments[1]:void 0,v=void 0!==b,y=l(h),_=0;if(v&&(b=a(b,m>2?arguments[2]:void 0,2)),void 0==y||g==Array&&n(y))for(e=s(h.length),r=new g(e);e>_;_++)f=v?b(h[_],_):h[_],c(r,_,f);else for(d=y.call(h),p=d.next,r=new g;!(u=p.call(d)).done;_++)f=v?o(d,b,[u.value,_],!0):u.value,c(r,_,f);return r.length=_,r}},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,r){var a=r("1d80"),i=r("5899"),o="["+i+"]",n=RegExp("^"+o+o+"*"),s=RegExp(o+o+"*$"),c=function(t){return function(e){var r=String(a(e));return 1&t&&(r=r.replace(n,"")),2&t&&(r=r.replace(s,"")),r}};t.exports={start:c(1),end:c(2),trim:c(3)}},"5a34":function(t,e,r){var a=r("44e7");t.exports=function(t){if(a(t))throw TypeError("The method doesn't accept regular expressions");return t}},"6ff9":function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-layout-header",{style:{position:"fixed",zIndex:20,width:"100%",backgroundColor:"#ffffff",borderBottom:"1px solid #e8e8e8"},attrs:{id:"components-layout-demo-fixed"}},[a("div",{staticClass:"logo"},[a("router-link",{attrs:{to:"/"}},[a("img",{staticStyle:{width:"100%","margin-left":"1.5rem"},attrs:{src:r("b8fb")}})])],1),a("hide-at",{attrs:{breakpoint:"mediumAndBelow"}},[a("div",{staticClass:"ant-menu-horizontal ",style:{lineHeight:"64px",float:"right",borderBottom:0}},[a("a",{staticClass:"ant-menu-item",staticStyle:{"margin-bottom":"0"},attrs:{href:"https://www.codeln.com/",target:"_blank"}},[t._v(" Go to Codeln ")]),a("router-link",{staticClass:"ant-menu-item",staticStyle:{"margin-bottom":"0"},attrs:{to:"/Jobs"}},[t._v("Gigs board")]),t.$store.state.isUserLoggedIn&&"recruiter"===t.$store.state.user_object.user_type&&"complete"===t.$store.state.user_object.stage?a("router-link",{staticClass:"ant-menu-item",staticStyle:{"margin-bottom":"0"},attrs:{to:"/Dashboard"}},[t._v(" My account ")]):t._e(),t.$store.state.isUserLoggedIn&&"recruiter"===t.$store.state.user_object.user_type&&"complete"!==t.$store.state.user_object.stage?a("router-link",{staticClass:"ant-menu-item",staticStyle:{"margin-bottom":"0"},attrs:{to:"/Register"}},[t._v(" My account ")]):t._e(),t.$store.state.isUserLoggedIn&&"developer"===t.$store.state.user_object.user_type&&"complete"!==t.$store.state.user_object.stage?a("router-link",{staticClass:"ant-menu-item",staticStyle:{"margin-bottom":"0"},attrs:{to:"/Register"}},[t._v(" My account ")]):t._e(),t.$store.state.isUserLoggedIn&&"developer"===t.$store.state.user_object.user_type&&"complete"===t.$store.state.user_object.stage?a("router-link",{staticClass:"ant-menu-item",staticStyle:{"margin-bottom":"0"},attrs:{to:"/Developer"}},[t._v(" My account ")]):t._e(),t.$store.state.isUserLoggedIn?t._e():a("router-link",{staticClass:"ant-menu-item",staticStyle:{"margin-bottom":"0"},attrs:{to:"/Login"}},[t._v(" Login ")]),a("a",[t.$store.state.isUserLoggedIn?a("a-button",{staticStyle:{"margin-bottom":"0",border:"0","-webkit-box-shadow":"0 0 0 rgba(255,255,255,0.01)",color:"#1890ff"},on:{click:t.logout}},[t._v("Logout ")]):t._e()],1)],1)]),a("show-at",{attrs:{breakpoint:"mediumAndBelow"}},[a("div",{staticStyle:{float:"right"}},[a("Menusider")],1)])],1)},i=[],o=(r("96cf"),r("1da1")),n=r("8808"),s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a-dropdown",{attrs:{trigger:["click"],placement:"bottomCenter"}},[r("a",{staticClass:"ant-dropdown-link",attrs:{href:"#"}},[r("a-icon",{attrs:{type:"menu-fold"}})],1),r("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[r("a-menu-item",{key:"8"},[r("router-link",{attrs:{to:"/jobs"}},[r("span",[t._v("Job board ")])])],1),r("a-menu-item",{key:"9"},[r("a",{staticClass:"ant-menu-item",staticStyle:{"margin-bottom":"0"},attrs:{href:"https://www.codeln.com/",target:"_blank"}},[t._v(" Go to Codeln ")])]),t.$store.state.isUserLoggedIn&&"recruiter"===t.$store.state.user_object.user_type?r("a-menu-item",{key:"1"},[r("router-link",{attrs:{to:"/Dashboard"}},[r("span",[t._v("My account")])])],1):t._e(),t.$store.state.isUserLoggedIn&&"developer"===t.$store.state.user_object.user_type?r("a-menu-item",{key:"2"},[r("router-link",{attrs:{to:"/Developer"}},[r("span",[t._v("My account")])])],1):t._e(),t.$store.state.isUserLoggedIn?t._e():r("a-menu-item",{key:"3"},[r("router-link",{attrs:{to:"/login"}},[r("span",[t._v("Login")])])],1),t.$store.state.isUserLoggedIn?t._e():r("a-menu-item",{key:"4"},[r("router-link",{attrs:{to:"/register"}},[r("span",[t._v("Register")])])],1),t.$store.state.isUserLoggedIn?r("a-menu-item",{key:"5"},[r("a",{on:{click:t.logout}},[t._v("Logout")])]):t._e()],1)],1)},c=[],l={name:"Menusider",data:function(){return{currentUserProfile:null}},mounted:function(){return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},methods:{logout:function(){this.$store.dispatch("setToken",null),this.$store.dispatch("setUser",null),this.$store.dispatch("setisLoggedIn",!1),this.$store.dispatch("setUsertype",null),this.$store.dispatch("setUser_id",null),this.$store.dispatch("setNext",null),this.$router.push({name:"home"})}}},u=l,d=r("2877"),p=Object(d["a"])(u,s,c,!1,null,"52e38e49",null),f=p.exports,h={name:"Header",components:{hideAt:n["hideAt"],showAt:n["showAt"],Menusider:f},data:function(){return{}},mounted:function(){return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},methods:{logout:function(){this.$store.dispatch("setToken",null),this.$store.dispatch("setUser",null),this.$store.dispatch("setisLoggedIn",!1),this.$store.dispatch("setUser_object",null),this.$store.dispatch("setProjectedit",null),this.$router.push({name:"home"})}}},g=h,m=(r("ede6"),Object(d["a"])(g,a,i,!1,null,"5ce4eb64",null));e["a"]=m.exports},7156:function(t,e,r){var a=r("861d"),i=r("d2bb");t.exports=function(t,e,r){var o,n;return i&&"function"==typeof(o=e.constructor)&&o!==r&&a(n=o.prototype)&&n!==r.prototype&&i(t,n),t}},8418:function(t,e,r){"use strict";var a=r("c04e"),i=r("9bf2"),o=r("5c6c");t.exports=function(t,e,r){var n=a(e);n in t?i.f(t,n,o(0,r)):t[n]=r}},"99af":function(t,e,r){"use strict";var a=r("23e7"),i=r("d039"),o=r("e8b5"),n=r("861d"),s=r("7b0b"),c=r("50c4"),l=r("8418"),u=r("65f0"),d=r("1dde"),p=r("b622"),f=r("2d00"),h=p("isConcatSpreadable"),g=9007199254740991,m="Maximum allowed index exceeded",b=f>=51||!i((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),v=d("concat"),y=function(t){if(!n(t))return!1;var e=t[h];return void 0!==e?!!e:o(t)},_=!b||!v;a({target:"Array",proto:!0,forced:_},{concat:function(t){var e,r,a,i,o,n=s(this),d=u(n,0),p=0;for(e=-1,a=arguments.length;e<a;e++)if(o=-1===e?n:arguments[e],y(o)){if(i=c(o.length),p+i>g)throw TypeError(m);for(r=0;r<i;r++,p++)r in o&&l(d,p,o[r])}else{if(p>=g)throw TypeError(m);l(d,p++,o)}return d.length=p,d}})},"9b19":function(t,e,r){t.exports=r.p+"img/logo.b596d5fb.svg"},a15b:function(t,e,r){"use strict";var a=r("23e7"),i=r("44ad"),o=r("fc6a"),n=r("a640"),s=[].join,c=i!=Object,l=n("join",",");a({target:"Array",proto:!0,forced:c||!l},{join:function(t){return s.call(o(this),void 0===t?",":t)}})},a434:function(t,e,r){"use strict";var a=r("23e7"),i=r("23cb"),o=r("a691"),n=r("50c4"),s=r("7b0b"),c=r("65f0"),l=r("8418"),u=r("1dde"),d=r("ae40"),p=u("splice"),f=d("splice",{ACCESSORS:!0,0:0,1:2}),h=Math.max,g=Math.min,m=9007199254740991,b="Maximum allowed length exceeded";a({target:"Array",proto:!0,forced:!p||!f},{splice:function(t,e){var r,a,u,d,p,f,v=s(this),y=n(v.length),_=i(t,y),k=arguments.length;if(0===k?r=a=0:1===k?(r=0,a=y-_):(r=k-2,a=g(h(o(e),0),y-_)),y+r-a>m)throw TypeError(b);for(u=c(v,a),d=0;d<a;d++)p=_+d,p in v&&l(u,d,v[p]);if(u.length=a,r<a){for(d=_;d<y-a;d++)p=d+a,f=d+r,p in v?v[f]=v[p]:delete v[f];for(d=y;d>y-a+r;d--)delete v[d-1]}else if(r>a)for(d=y-a;d>_;d--)p=d+a-1,f=d+r-1,p in v?v[f]=v[p]:delete v[f];for(d=0;d<r;d++)v[d+_]=arguments[d+2];return v.length=y-a+r,u}})},a630e:function(t,e,r){var a=r("23e7"),i=r("4df4"),o=r("1c7e"),n=!o((function(t){Array.from(t)}));a({target:"Array",stat:!0,forced:n},{from:i})},a9e3:function(t,e,r){"use strict";var a=r("83ab"),i=r("da84"),o=r("94ca"),n=r("6eeb"),s=r("5135"),c=r("c6b6"),l=r("7156"),u=r("c04e"),d=r("d039"),p=r("7c73"),f=r("241c").f,h=r("06cf").f,g=r("9bf2").f,m=r("58a8").trim,b="Number",v=i[b],y=v.prototype,_=c(p(y))==b,k=function(t){var e,r,a,i,o,n,s,c,l=u(t,!1);if("string"==typeof l&&l.length>2)if(l=m(l),e=l.charCodeAt(0),43===e||45===e){if(r=l.charCodeAt(2),88===r||120===r)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:a=2,i=49;break;case 79:case 111:a=8,i=55;break;default:return+l}for(o=l.slice(2),n=o.length,s=0;s<n;s++)if(c=o.charCodeAt(s),c<48||c>i)return NaN;return parseInt(o,a)}return+l};if(o(b,!v(" 0o1")||!v("0b1")||v("+0x1"))){for(var w,x=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof x&&(_?d((function(){y.valueOf.call(r)})):c(r)!=b)?l(new v(k(e)),r,x):k(e)},S=a?f(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),j=0;S.length>j;j++)s(v,w=S[j])&&!s(x,w)&&g(x,w,h(v,w));x.prototype=y,y.constructor=x,n(i,b,x)}},ab13:function(t,e,r){var a=r("b622"),i=a("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(r){try{return e[i]=!1,"/./"[t](e)}catch(a){}}return!1}},ae3d:function(t,e,r){},b0c0:function(t,e,r){var a=r("83ab"),i=r("9bf2").f,o=Function.prototype,n=o.toString,s=/^\s*function ([^ (]*)/,c="name";a&&!(c in o)&&i(o,c,{configurable:!0,get:function(){try{return n.call(this).match(s)[1]}catch(t){return""}}})},c975:function(t,e,r){"use strict";var a=r("23e7"),i=r("4d64").indexOf,o=r("a640"),n=r("ae40"),s=[].indexOf,c=!!s&&1/[1].indexOf(1,-0)<0,l=o("indexOf"),u=n("indexOf",{ACCESSORS:!0,1:0});a({target:"Array",proto:!0,forced:c||!l||!u},{indexOf:function(t){return c?s.apply(this,arguments)||0:i(this,t,arguments.length>1?arguments[1]:void 0)}})},caad:function(t,e,r){"use strict";var a=r("23e7"),i=r("4d64").includes,o=r("44d2"),n=r("ae40"),s=n("indexOf",{ACCESSORS:!0,1:0});a({target:"Array",proto:!0,forced:!s},{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),o("includes")},d28b:function(t,e,r){var a=r("746f");a("iterator")},d4ec:function(t,e,r){"use strict";function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}r.d(e,"a",(function(){return a}))},d5bf:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a-layout",{style:{background:"#fff"}},[r("pageheader"),r("a-layout-content",{style:{marginTop:"6rem",minHeight:"100vh"}},[r("div",{},[r("div",{},[t.fetchjobs?r("div",[r("a-row",{staticStyle:{color:"black"}},[r("a-col",{attrs:{xs:{span:24,offset:0},sm:{span:24,offset:0},md:{span:20,offset:2},lg:{span:18,offset:4},xl:{span:18,offset:4}}},[r("a-skeleton",{attrs:{active:""}})],1)],1)],1):r("div",[t.bidstageprojects.length>0?r("div",{staticStyle:{padding:"2% 5%"}},[r("a-row",{staticStyle:{color:"black"}},[r("a-col",{attrs:{xs:{span:24,offset:0},sm:{span:24,offset:0},md:{span:20,offset:2},lg:{span:18,offset:4},xl:{span:18,offset:4}}},[r("div",{staticStyle:{}},[r("a-list",{attrs:{"item-layout":"vertical",size:"large",pagination:t.pagination,"data-source":t.Projects},scopedSlots:t._u([{key:"renderItem",fn:function(e){return r("a-list-item",{key:"item.title",staticClass:"shadowsmall",staticStyle:{"background-color":"#F1F3F9"}},[r("template",{slot:"actions"},[r("span",[r("a-icon",{staticStyle:{"margin-right":"8px"},attrs:{type:"calendar"}}),t._v(" "+t._s(e.time)+" days ")],1),r("span",[r("a-icon",{staticStyle:{"margin-right":"8px"},attrs:{type:"banks"}}),t._v(" "+t._s(e.budget)+"$ budget ")],1),r("span",[r("a-icon",{staticStyle:{"margin-right":"8px"},attrs:{type:"banks"}}),t._l(e.tools,(function(e){return r("a-tag",{key:e,attrs:{color:"blue"}},[t._v(" "+t._s(e)+" ")])}))],2),r("a-space",[t.$store.state.user_object?r("span",[e.bid?r("span",[r("a-tag",{attrs:{color:"green"}},[r("a-icon",{attrs:{type:"file-done"}}),t._v(" bid placed ")],1)],1):r("span",["developer"===t.$store.state.user_object.user_type?r("a-button",{attrs:{type:"primary",size:"small"},on:{click:function(r){return t.Apply(e)}}},[t._v(" Apply ")]):t._e()],1)]):r("span",[r("a-button",{on:{click:function(e){return t.$router.push("/Login")}}},[t._v(" login to apply ")])],1)])],1),r("p",{staticStyle:{"font-family":"sofia_probold"}},[t._v(" "+t._s(e.title))]),r("a-collapse",[r("a-collapse-panel",{key:"1",attrs:{header:"Project description."}},[r("markdown",[t._v(t._s(e.description))])],1)],1)],2)}}],null,!1,3501160388)})],1)])],1)],1):r("a-result",{attrs:{status:"404",title:"","sub-title":"Sorry, no new gigs available at the moment."}})],1)]),r("a-modal",{staticStyle:{top:"20px"},attrs:{title:"Apply for project"},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[r("template",{slot:"footer"},[t.loading?r("a-spin"):r("a-button",{key:"submit",attrs:{type:"primary"},on:{click:t.SubmitApplication}},[t._v(" Submit ")])],1),r("div",[r("div",{staticStyle:{"margin-bottom":"1rem"}},[r("p",[t._v("Project Proposal(why i should get project)1200 character limit")]),r("a-textarea",{attrs:{maxlength:"1200","auto-size":{minRows:5}},on:{change:t.Proposalchanges},model:{value:t.proposal,callback:function(e){t.proposal=e},expression:"proposal"}})],1),r("div",{staticStyle:{"margin-bottom":"1rem"}},[r("p",[t._v("Tools i will use ")]),t._l(t.tags,(function(e,a){return[e.length>20?r("a-tooltip",{key:e,attrs:{title:e}},[r("a-tag",{key:e,attrs:{closable:0!==a},on:{close:function(){return t.handleClose(e)}}},[t._v(" "+t._s(e.slice(0,20)+"...")+" ")])],1):r("a-tag",{key:e,attrs:{closable:0!==a},on:{close:function(){return t.handleClose(e)}}},[t._v(" "+t._s(e)+" ")])]})),t.inputVisible?r("a-input",{ref:"input",style:{width:"78px"},attrs:{type:"text",size:"small",value:t.inputValue},on:{change:t.handleInputChange,blur:t.handleInputConfirm,keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleInputConfirm(e)}}}):r("a-tag",{staticStyle:{background:"#fff",borderStyle:"dashed"},on:{click:t.showInput}},[r("a-icon",{attrs:{type:"plus"}}),t._v(" New Tag ")],1)],2),r("p",[t._v("Time i will take in days("+t._s(t.project.time)+" days)")]),r("div",{staticStyle:{"margin-bottom":"1rem"}},[r("a-input",{attrs:{type:"Number",min:0,"addon-after":"days"},on:{change:t.Timechanges},model:{value:t.time,callback:function(e){t.time=e},expression:"time"}})],1),r("p",[t._v("Budget:$"+t._s(t.project.budget)+" "),t.bidflag?r("span",{staticStyle:{color:"red"}},[t._v("(bids are capped you can only go 10% lower than quoted by client )")]):r("span",[t._v("(you can only go 10% lower than quoted by client )")])]),r("a-input",{attrs:{type:"number"},on:{change:t.budgetflag},model:{value:t.budget,callback:function(e){t.budget=e},expression:"budget"}})],1)],2)],1)]),r("Footer")],1)},i=[],o=(r("a4d3"),r("e01a"),r("99af"),r("4de4"),r("4160"),r("caad"),r("c975"),r("a15b"),r("a434"),r("a9e3"),r("ac1f"),r("2532"),r("1276"),r("159b"),r("2909")),n=(r("96cf"),r("1da1")),s=r("d4ec"),c=r("6ff9"),l=r("2997"),u=r("1226"),d=r("9ce6"),p=r.n(d),f=function t(e,r,a,i,o,n,c){Object(s["a"])(this,t),this.id=e,this.title=r,this.description=a,this.budget=i,this.time=o,this.tools=n,this.bid=c},h={name:"Jobboard",data:function(){return{pagination:{pageSize:4},visible:!1,project:{},budget:0,time:0,proposal:"",tags:[],inputVisible:!1,inputValue:"",bidflag:!1,bidstageprojects:[],datetype:"days",applicationerrors:[],loading:!1,bids:[],fetchjobs:!1}},components:{Pageheader:c["a"],Footer:l["a"],markdown:p.a},mounted:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.FetchProjects();case 1:case"end":return e.stop()}}),e)})))()},computed:{Projects:function(){var t=this,e=[];return this.bidstageprojects.forEach((function(r){var a=!1;t.bids.forEach((function(t){r.id===t.project.id&&(a=!0)}));var i=r.timeline.split(" "),o=r.id,n=r.title,s=r.description,c=r.budget,l=Number(i[0]),u=r.tools.split(","),d=new f(o,n,s,c,l,u,a);e.push(d)})),e}},methods:{FetchProjects:function(){var t=this;this.bidstageprojects=[],this.fetchjobs=!0,u["a"].bidstageprojects().then((function(e){e.data.forEach((function(e){e.verified&&"bid"===e.stage&&t.bidstageprojects.push(e)})),t.$store.state.user&&"developer"===t.$store.state.user_object.user_type?t.DeveloperBids():t.fetchjobs=!1}))},DeveloperBids:function(){var t=this,e={headers:{Authorization:"JWT "+this.$store.state.token}};u["a"].fetchadeveloperbids(this.$store.state.user.pk,e).then((function(e){t.bids=e.data,t.fetchjobs=!1}))},Apply:function(t){t!==this.project&&(this.budget="",this.time="",this.proposal="",this.tags=[],this.project=t),this.visible=!0},budgetflag:function(){var t=this.project.budget,e=.9*t;this.bidflag=this.budget<e},showInput:function(){this.inputVisible=!0,this.$nextTick((function(){this.$refs.input.focus()}))},handleClose:function(t){var e=this.tags.filter((function(e){return e!==t}));this.tags=e},handleInputChange:function(t){this.inputValue=t.target.value},handleInputConfirm:function(){var t=this.inputValue,e=this.tags;if(t&&-1===e.indexOf(t)&&(e=[].concat(Object(o["a"])(e),[t])),Object.assign(this,{tags:e,inputVisible:!1,inputValue:""}),this.applicationerrors.includes("tags")){if(this.tags.length>0){var r=this.applicationerrors.indexOf("tags");r>-1&&this.applicationerrors.splice(r,1)}}else this.tags===[]&&this.applicationerrors.push("tags")},SubmitApplication:function(){var t=this,e={proposal:this.proposal,tools:this.tags.join(),timeline:86400*this.time,budget:this.budget,project:this.project.id,developer:this.$store.state.user.pk};""!==this.proposal&&null!==this.proposal||this.applicationerrors.push("proposal"),0===this.tags.length&&this.applicationerrors.push("tags"),""!==this.time&&null!==this.time||this.applicationerrors.push("time"),0===this.budget&&(this.bidflag=!0);var r={headers:{Authorization:"JWT "+this.$store.state.token}};0===this.applicationerrors.length&&!1===this.bidflag&&(this.loading=!0,u["a"].createbid(e,r).then((function(e){t.FetchProjects(),t.project.bid=!0,t.loading=!1,t.visible=!1,u["a"].newbidemail(e.data.id,r)})))},Proposalchanges:function(){if(this.applicationerrors.includes("proposal")){if(""!==this.proposal||null!=this.proposal){var t=this.applicationerrors.indexOf("proposal");t>-1&&this.applicationerrors.splice(t,1)}}else""!==this.proposal&&null!==this.proposal||this.applicationerrors.push("proposal")},Timechanges:function(){if(this.applicationerrors.includes("time")){if(""!==this.time||null!=this.time){var t=this.applicationerrors.indexOf("time");t>-1&&this.applicationerrors.splice(t,1)}}else""!==this.time&&null!==this.time||this.applicationerrors.push("time")}}},g=h,m=(r("f797"),r("2877")),b=Object(m["a"])(g,a,i,!1,null,"e3d5971c",null);e["default"]=b.exports},dbc8:function(t,e,r){},ddb0:function(t,e,r){var a=r("da84"),i=r("fdbc"),o=r("e260"),n=r("9112"),s=r("b622"),c=s("iterator"),l=s("toStringTag"),u=o.values;for(var d in i){var p=a[d],f=p&&p.prototype;if(f){if(f[c]!==u)try{n(f,c,u)}catch(g){f[c]=u}if(f[l]||n(f,l,d),i[d])for(var h in o)if(f[h]!==o[h])try{n(f,h,o[h])}catch(g){f[h]=o[h]}}}},ede6:function(t,e,r){"use strict";var a=r("ae3d"),i=r.n(a);i.a},f797:function(t,e,r){"use strict";var a=r("4b94"),i=r.n(a);i.a},fb6a:function(t,e,r){"use strict";var a=r("23e7"),i=r("861d"),o=r("e8b5"),n=r("23cb"),s=r("50c4"),c=r("fc6a"),l=r("8418"),u=r("b622"),d=r("1dde"),p=r("ae40"),f=d("slice"),h=p("slice",{ACCESSORS:!0,0:0,1:2}),g=u("species"),m=[].slice,b=Math.max;a({target:"Array",proto:!0,forced:!f||!h},{slice:function(t,e){var r,a,u,d=c(this),p=s(d.length),f=n(t,p),h=n(void 0===e?p:e,p);if(o(d)&&(r=d.constructor,"function"!=typeof r||r!==Array&&!o(r.prototype)?i(r)&&(r=r[g],null===r&&(r=void 0)):r=void 0,r===Array||void 0===r))return m.call(d,f,h);for(a=new(void 0===r?Array:r)(b(h-f,0)),u=0;f<h;f++,u++)f in d&&l(a,u,d[f]);return a.length=u,a}})}}]);
//# sourceMappingURL=chunk-48e38084.cffcf982.js.map