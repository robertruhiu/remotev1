(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-26361d3c"],{"0f8c":function(t,e,a){"use strict";var o=a("4b02"),r=a.n(o);r.a},"1dde":function(t,e,a){var o=a("d039"),r=a("b622"),s=a("2d00"),n=r("species");t.exports=function(t){return s>=51||!o((function(){var e=[],a=e.constructor={};return a[n]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"25f0":function(t,e,a){"use strict";var o=a("6eeb"),r=a("825a"),s=a("d039"),n=a("ad6d"),i="toString",c=RegExp.prototype,l=c[i],u=s((function(){return"/a/b"!=l.call({source:"a",flags:"b"})})),f=l.name!=i;(u||f)&&o(RegExp.prototype,i,(function(){var t=r(this),e=String(t.source),a=t.flags,o=String(void 0===a&&t instanceof RegExp&&!("flags"in c)?n.call(t):a);return"/"+e+"/"+o}),{unsafe:!0})},"2ada":function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-layout-sider",{staticStyle:{"box-shadow":"2px 0 6px rgba(0,21,41,.35)","background-color":"#F4F7FC"},attrs:{breakpoint:"lg","collapsed-width":"0"},on:{collapse:t.onCollapse,breakpoint:t.onBreakpoint}},[a("hide-at",{attrs:{breakpoints:{small:425,medium:768},breakpoint:"mediumAndBelow"}},[a("router-link",{attrs:{to:"/"}},[a("img",{staticStyle:{width:"9rem",height:"2rem","margin-top":"1rem","margin-bottom":"1rem","margin-left":"1rem"},attrs:{src:t.defaultlogo}})])],1),a("show-at",{attrs:{breakpoint:"mediumAndBelow"}},[a("router-link",{attrs:{to:"/"}},[a("img",{staticStyle:{width:"9rem",height:"2rem","margin-top":"1rem","margin-bottom":"1rem","margin-left":"1rem"},attrs:{src:t.defaultlogo}})])],1),a("a-menu",{staticStyle:{"font-family":"sofia_proregular","background-color":"#F4F7FC"},attrs:{mode:"inline","default-selected-keys":t.key}},[a("a-menu-item",{key:"9",on:{click:function(e){return t.$router.push("/Dashboard")}}},[a("a-icon",{attrs:{type:"dashboard"}}),a("span",[t._v("Dashboard")])],1),a("a-menu-item",{key:"1",on:{click:function(e){return t.$router.push("/Myprojects")}}},[a("a-icon",{attrs:{type:"appstore"}}),a("span",[t._v("Manage my Projects")])],1),a("a-menu-item",{key:"2",on:{click:function(e){return t.$router.push("/Create")}}},[a("a-icon",{attrs:{type:"plus"}}),a("span",[t._v("Create a Project")])],1),a("a-menu-item",{key:"3",on:{click:function(e){return t.$router.push("/Escrow")}}},[a("a-icon",{attrs:{type:"bank"}}),a("span",[t._v("Escrow Management")])],1),a("a-menu-item",{key:"5",on:{click:function(e){return t.$router.push("ClientBugs")}}},[a("a-icon",{attrs:{type:"exclamation"}}),a("span",[t._v("Bugs & issues")])],1),a("a-menu-item",{key:"8",on:{click:t.logout}},[a("a-icon",{attrs:{type:"logout"}}),a("span",[t._v("logout")])],1)],1)],1)},r=[],s=a("8808"),n=a("b8fb"),i=a.n(n),c={name:"CLientSider",data:function(){return{collapsed:!1,defaultlogo:i.a,key:["9"],top:0}},components:{hideAt:s["hideAt"],showAt:s["showAt"]},computed:{getRoute:function(){var t=this.$route;return t}},methods:{onCollapse:function(t,e){return e},onBreakpoint:function(t){return t},logout:function(){this.$store.dispatch("setToken",null),this.$store.dispatch("setUser",null),this.$store.dispatch("setisLoggedIn",!1),this.$store.dispatch("setUser_object",null),this.$store.dispatch("setProjectedit",null),this.$router.push({name:"home"})}}},l=c,u=(a("0f8c"),a("2877")),f=Object(u["a"])(l,o,r,!1,null,"13cdc866",null);e["a"]=f.exports},3479:function(t,e,a){t.exports=a.p+"img/admin.632bbfbc.svg"},"3dbc":function(t,e,a){},"49bb":function(t,e,a){t.exports=a.p+"img/alert.6782e38e.svg"},"4b02":function(t,e,a){},5648:function(t,e,a){"use strict";var o=a("3dbc"),r=a.n(o);r.a},8418:function(t,e,a){"use strict";var o=a("c04e"),r=a("9bf2"),s=a("5c6c");t.exports=function(t,e,a){var n=o(e);n in t?r.f(t,n,s(0,a)):t[n]=a}},"8f17":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("a-layout",{staticStyle:{"min-height":"100vh","background-color":"#F4F7FC"}},[o("ClientSider"),o("a-layout",{staticStyle:{"background-color":"#F4F7FC"}},[o("a-layout-content",{style:{padding:"1% 2%",background:"#FAFBFF",minHeight:"280px"}},[o("a-card",{staticClass:"hellocard"},[o("span",{staticStyle:{"font-size":"1.7rem","font-family":"sofia_prosemibold","margin-bottom":"0",color:"black"}},[t._v(t._s(t.Greeting)+" "+t._s(t._f("capitalize")(t.$store.state.user_object.user.first_name)))]),o("p",{staticStyle:{"font-family":"sofia_proregular","font-size":"1.2rem","line-height":"1rem",color:"black"}},[t._v("What would you like to do today?")])]),o("div",{staticStyle:{"min-height":"40vh",position:"relative"}},[o("a-row",{attrs:{gutter:t.gutter}},[o("a-col",{attrs:{xs:{span:24,offset:0},sm:{span:12,offset:0},md:{span:12,offset:0},lg:{span:10,offset:1},xl:{span:6,offset:0}}},[o("a-card",{staticClass:"cardshadow",staticStyle:{width:"100%","margin-bottom":"1rem"},attrs:{hoverable:""}},[o("router-link",{attrs:{to:"/Myprojects"}},[o("div",[o("p",{staticStyle:{"font-family":"sofia_proregular","font-size":"1.5rem",color:"black","margin-bottom":"0"}},[t._v("Manage Projects")]),o("div",[o("img",{staticStyle:{width:"30%"},attrs:{src:a("fe40")}})])])])],1)],1),o("a-col",{attrs:{xs:{span:24,offset:0},sm:{span:12,offset:0},md:{span:12,offset:0},lg:{span:10,offset:1},xl:{span:6,offset:0}}},[o("a-card",{staticClass:"cardshadow",staticStyle:{width:"100%","margin-bottom":"1rem"},attrs:{hoverable:""}},[o("router-link",{attrs:{to:"/Create"}},[o("div",[o("p",{staticStyle:{"font-family":"sofia_proregular","font-size":"1.5rem",color:"black","margin-bottom":"0"}},[t._v("Create a Project")]),o("div",[o("img",{staticStyle:{width:"30%"},attrs:{src:a("e3ea")}})])])])],1)],1),o("a-col",{attrs:{xs:{span:24,offset:0},sm:{span:12,offset:0},md:{span:12,offset:0},lg:{span:10,offset:1},xl:{span:6,offset:0}}},[o("a-card",{staticClass:"cardshadow",staticStyle:{width:"100%","margin-bottom":"1rem"},attrs:{hoverable:""}},[o("router-link",{attrs:{to:"/Escrow"}},[o("div",[o("p",{staticStyle:{"font-family":"sofia_proregular","font-size":"1.5rem",color:"black","margin-bottom":"0"}},[t._v("Manage Escrow ")]),o("div",[o("img",{staticStyle:{width:"30%"},attrs:{src:a("fb97")}})])])])],1)],1),o("a-col",{attrs:{xs:{span:24,offset:0},sm:{span:12,offset:0},md:{span:12,offset:0},lg:{span:10,offset:1},xl:{span:6,offset:0}}},[o("a-card",{staticClass:"cardshadow",staticStyle:{width:"100%","margin-bottom":"1rem"},attrs:{hoverable:""}},[o("router-link",{attrs:{to:"/ClientBugs"}},[o("div",[o("p",{staticStyle:{"font-family":"sofia_proregular","font-size":"1.5rem",color:"black","margin-bottom":"0"}},[t._v("Bugs & issues ")]),o("div",[o("img",{staticStyle:{width:"30%"},attrs:{src:a("49bb")}})])])])],1)],1),t.$store.state.user_object.user.is_staff?o("a-col",{attrs:{xs:{span:24,offset:0},sm:{span:12,offset:0},md:{span:12,offset:0},lg:{span:10,offset:1},xl:{span:6,offset:0}}},[o("a-card",{staticClass:"cardshadow",staticStyle:{width:"100%","margin-bottom":"1rem"},attrs:{hoverable:""}},[o("router-link",{attrs:{to:"/Admindashboard"}},[o("div",[o("p",{staticStyle:{"font-family":"sofia_proregular","font-size":"1.5rem",color:"black","margin-bottom":"0"}},[t._v("Admin ")]),o("div",[o("img",{staticStyle:{width:"30%"},attrs:{src:a("3479")}})])])])],1)],1):t._e()],1)],1)],1)],1)],1)},r=[],s=(a("fb6a"),a("d3b7"),a("25f0"),a("2ada")),n=a("c1df"),i=a.n(n),c=a("8055"),l=a.n(c),u=l.a.connect("https://glacial-refuge-86036.herokuapp.com/"),f={name:"ClientDashboard",data:function(){return{gutter:16}},components:{ClientSider:s["a"]},filters:{capitalize:function(t){return t?(t=t.toString(),t.charAt(0).toUpperCase()+t.slice(1)):""}},computed:{Greeting:function(){i.a;var t=new Date,e=t.getHours(),a="";return a=e<12?"Good Morning":e<18?"Good Afternoon":"Good Evening",a}},created:function(){var t=this;window.onbeforeunload=function(){u.emit("leave",t.username)}}},d=f,p=(a("5648"),a("2877")),m=Object(p["a"])(d,o,r,!1,null,"7e2f44b4",null);e["default"]=m.exports},ad6d:function(t,e,a){"use strict";var o=a("825a");t.exports=function(){var t=o(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},ae40:function(t,e,a){var o=a("83ab"),r=a("d039"),s=a("5135"),n=Object.defineProperty,i={},c=function(t){throw t};t.exports=function(t,e){if(s(i,t))return i[t];e||(e={});var a=[][t],l=!!s(e,"ACCESSORS")&&e.ACCESSORS,u=s(e,0)?e[0]:c,f=s(e,1)?e[1]:void 0;return i[t]=!!a&&!r((function(){if(l&&!o)return!0;var t={length:-1};l?n(t,1,{enumerable:!0,get:c}):t[1]=1,a.call(t,u,f)}))}},e3ea:function(t,e,a){t.exports=a.p+"img/createproject.d1e6a2de.svg"},e8b5:function(t,e,a){var o=a("c6b6");t.exports=Array.isArray||function(t){return"Array"==o(t)}},fb6a:function(t,e,a){"use strict";var o=a("23e7"),r=a("861d"),s=a("e8b5"),n=a("23cb"),i=a("50c4"),c=a("fc6a"),l=a("8418"),u=a("b622"),f=a("1dde"),d=a("ae40"),p=f("slice"),m=d("slice",{ACCESSORS:!0,0:0,1:2}),g=u("species"),b=[].slice,h=Math.max;o({target:"Array",proto:!0,forced:!p||!m},{slice:function(t,e){var a,o,u,f=c(this),d=i(f.length),p=n(t,d),m=n(void 0===e?d:e,d);if(s(f)&&(a=f.constructor,"function"!=typeof a||a!==Array&&!s(a.prototype)?r(a)&&(a=a[g],null===a&&(a=void 0)):a=void 0,a===Array||void 0===a))return b.call(f,p,m);for(o=new(void 0===a?Array:a)(h(m-p,0)),u=0;p<m;p++,u++)p in f&&l(o,u,f[p]);return o.length=u,o}})},fb97:function(t,e,a){t.exports=a.p+"img/esc.323da268.svg"},fe40:function(t,e,a){t.exports=a.p+"img/planning.fba66189.svg"}}]);
//# sourceMappingURL=chunk-26361d3c.b3c5a368.js.map