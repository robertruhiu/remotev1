(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7681a120"],{"1f5e":function(e,t,r){},"25f0":function(e,t,r){"use strict";var a=r("6eeb"),n=r("825a"),s=r("d039"),o=r("ad6d"),i="toString",c=RegExp.prototype,l=c[i],u=s((function(){return"/a/b"!=l.call({source:"a",flags:"b"})})),p=l.name!=i;(u||p)&&a(RegExp.prototype,i,(function(){var e=n(this),t=String(e.source),r=e.flags,a=String(void 0===r&&e instanceof RegExp&&!("flags"in c)?o.call(e):r);return"/"+t+"/"+a}),{unsafe:!0})},"44e7":function(e,t,r){var a=r("861d"),n=r("c6b6"),s=r("b622"),o=s("match");e.exports=function(e){var t;return a(e)&&(void 0!==(t=e[o])?!!t:"RegExp"==n(e))}},"4d63":function(e,t,r){var a=r("83ab"),n=r("da84"),s=r("94ca"),o=r("7156"),i=r("9bf2").f,c=r("241c").f,l=r("44e7"),u=r("ad6d"),p=r("9f7f"),d=r("6eeb"),f=r("d039"),m=r("69f3").set,v=r("2626"),g=r("b622"),h=g("match"),b=n.RegExp,w=b.prototype,x=/a/g,y=/a/g,_=new b(x)!==x,O=p.UNSUPPORTED_Y,k=a&&s("RegExp",!_||O||f((function(){return y[h]=!1,b(x)!=x||b(y)==y||"/a/i"!=b(x,"i")})));if(k){var j=function(e,t){var r,a=this instanceof j,n=l(e),s=void 0===t;if(!a&&n&&e.constructor===j&&s)return e;_?n&&!s&&(e=e.source):e instanceof j&&(s&&(t=u.call(e)),e=e.source),O&&(r=!!t&&t.indexOf("y")>-1,r&&(t=t.replace(/y/g,"")));var i=o(_?new b(e,t):b(e,t),a?this:w,j);return O&&r&&m(i,{sticky:r}),i},S=function(e){e in j||i(j,e,{configurable:!0,get:function(){return b[e]},set:function(t){b[e]=t}})},R=c(b),E=0;while(R.length>E)S(R[E++]);w.constructor=j,j.prototype=w,d(n,"RegExp",j)}v("RegExp")},"6c7b":function(e,t,r){e.exports=r.p+"img/interview.b1bbfe5d.svg"},7156:function(e,t,r){var a=r("861d"),n=r("d2bb");e.exports=function(e,t,r){var s,o;return n&&"function"==typeof(s=t.constructor)&&s!==r&&a(o=s.prototype)&&o!==r.prototype&&n(e,o),e}},9263:function(e,t,r){"use strict";var a=r("ad6d"),n=r("9f7f"),s=RegExp.prototype.exec,o=String.prototype.replace,i=s,c=function(){var e=/a/,t=/b*/g;return s.call(e,"a"),s.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),l=n.UNSUPPORTED_Y||n.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],p=c||u||l;p&&(i=function(e){var t,r,n,i,p=this,d=l&&p.sticky,f=a.call(p),m=p.source,v=0,g=e;return d&&(f=f.replace("y",""),-1===f.indexOf("g")&&(f+="g"),g=String(e).slice(p.lastIndex),p.lastIndex>0&&(!p.multiline||p.multiline&&"\n"!==e[p.lastIndex-1])&&(m="(?: "+m+")",g=" "+g,v++),r=new RegExp("^(?:"+m+")",f)),u&&(r=new RegExp("^"+m+"$(?!\\s)",f)),c&&(t=p.lastIndex),n=s.call(d?r:p,g),d?n?(n.input=n.input.slice(v),n[0]=n[0].slice(v),n.index=p.lastIndex,p.lastIndex+=n[0].length):p.lastIndex=0:c&&n&&(p.lastIndex=p.global?n.index+n[0].length:t),u&&n&&n.length>1&&o.call(n[0],r,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(n[i]=void 0)})),n}),e.exports=i},"9f7f":function(e,t,r){"use strict";var a=r("d039");function n(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=a((function(){var e=n("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=a((function(){var e=n("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},ac1f:function(e,t,r){"use strict";var a=r("23e7"),n=r("9263");a({target:"RegExp",proto:!0,forced:/./.exec!==n},{exec:n})},ad6d:function(e,t,r){"use strict";var a=r("825a");e.exports=function(){var e=a(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},b012:function(e,t,r){"use strict";var a=r("3f4a");t["a"]={register:function(e){return Object(a["a"])().post("rest-auth/registration/",e)},login:function(e){return Object(a["a"])().post("rest-auth/login/",e)},forgot:function(e){return Object(a["a"])().post("rest-auth/password/reset/",e)},reset:function(e){return Object(a["a"])().post("rest-auth/password/reset/confirm/",e)}}},bf80:function(e,t,r){"use strict";var a=r("3f4a");t["a"]={authenticated:function(e,t){return Object(a["a"])().get("getprofile/".concat(e," "),t)},devs:function(e){return Object(a["a"])().get("qualified",e)},sliceddevs:function(){return Object(a["a"])().get("userssliced")},allusers:function(){return Object(a["a"])().get("allusers")},currentuser:function(e,t){return Object(a["a"])().get("getprofile/".concat(e," "),t)},retrieveuser:function(e,t){return Object(a["a"])().get("getuser/".concat(e," "),t)},experience:function(e,t){return Object(a["a"])().get("getexperience/".concat(e," "),t)},newexperience:function(e,t){return Object(a["a"])().post("newexperience ",e,t)},updateexperience:function(e,t,r){return Object(a["a"])().patch("updateexperience/".concat(e," "),t,r)},deleteexperience:function(e,t){return Object(a["a"])().delete("updateexperience/".concat(e," "),t)},portfolio:function(e,t){return Object(a["a"])().get("getportofolio/".concat(e," "),t)},newuser:function(e,t){return Object(a["a"])().post("newuser/".concat(e," "),t)},newportfolio:function(e,t){return Object(a["a"])().post("newportfolio ",e,t)},newresource:function(e,t){return Object(a["a"])().post("newresource ",e,t)},subjectresources:function(e,t){return Object(a["a"])().get("subjectresources/".concat(e," "),t)},resourceslikeupdate:function(e,t,r){return Object(a["a"])().patch("resourceslikeupdate/".concat(e," "),t,r)},updateportfolio:function(e,t,r){return Object(a["a"])().patch("updateportfolio/".concat(e," "),t,r)},deleteportfolio:function(e,t){return Object(a["a"])().delete("updateportfolio/".concat(e," "),t)},update:function(e,t,r){return Object(a["a"])().put("updater/".concat(e," "),t,r)},updatepatch:function(e,t,r){return Object(a["a"])().patch("updater/".concat(e," "),t,r)},talentorder:function(){return Object(a["a"])().get("talentorder")},unsubscribe:function(e){return Object(a["a"])().get("unsubscribe/".concat(e," "))},portfoliolikeupdate:function(e,t,r){return Object(a["a"])().patch("portfoliolikeupdate/".concat(e," "),t,r)},remoteappliedusers:function(e){return Object(a["a"])().get("remotedevs",e)}}},dc14:function(e,t,r){e.exports=r.p+"img/startup.0d1927a5.svg"},ec21:function(e,t,r){"use strict";var a=r("1f5e"),n=r.n(a);n.a},ef76:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-layout",[a("Pageheader"),a("a-layout-content",{style:{padding:"0 0px"}},[a("div",{style:{background:"#fff",minHeight:"81vh"}},[a("a-row",[a("a-col",{attrs:{span:"12"}},[a("a-row",{staticClass:"actioncards"},[a("h2",{staticStyle:{"text-align":"center"}},[e._v("Pick your profile")]),a("a-col",{attrs:{span:"12"}},[a("div",{staticStyle:{"text-align":"center"}},[a("img",{staticStyle:{width:"30%"},attrs:{src:r("6c7b")}}),a("p",[e._v("Client")]),a("p",[e._v("I want to post a project and get it worked on")]),a("a-checkbox",{on:{change:function(t){return e.Choice(1)}},model:{value:e.client,callback:function(t){e.client=t},expression:"client"}},[e._v(" pick ")])],1)]),a("a-col",{attrs:{span:"12"}},[a("div",{staticStyle:{"text-align":"center"}},[a("img",{staticStyle:{width:"30%"},attrs:{src:r("f09e")}}),a("p",[e._v("Developer")]),a("p",[e._v("I want to bid and work on projects")]),a("a-checkbox",{on:{change:function(t){return e.Choice(2)}},model:{value:e.developer,callback:function(t){e.developer=t},expression:"developer"}},[e._v(" pick ")])],1)])],1)],1),a("a-col",{attrs:{span:"12"}},[""!==e.Profile?a("div",["recruiter"===e.$store.state.usertype?a("div",{staticStyle:{padding:"3%","margin-top":"4rem"}},[a("a-card",{style:{width:"21rem"},attrs:{title:"Register"}},[e.error?a("p",{staticClass:"alert"},[e._v(e._s(e.error))]):e._e(),a("a-form",{staticClass:"login-form",attrs:{id:"components-form-demo-normal-login",form:e.registerform}},[a("a-form-item",[a("a-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{name:"firstname",placeholder:"firstname"},model:{value:e.firstname,callback:function(t){e.firstname=t},expression:"firstname"}}),e.errors.has("firstname")?a("div",{staticClass:"ant-form-explain",staticStyle:{color:"#f5222d"}},[e._v(e._s(e.errors.first("firstname"))+" ")]):e._e()],1),a("a-form-item",[a("a-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{name:"lastname",placeholder:"lastname"},model:{value:e.lastname,callback:function(t){e.lastname=t},expression:"lastname"}}),e.errors.has("lastname")?a("div",{staticClass:"ant-form-explain",staticStyle:{color:"#f5222d"}},[e._v(" "+e._s(e.errors.first("lastname"))+" ")]):e._e()],1),a("a-form-item",[a("a-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],attrs:{name:"email",placeholder:"Email"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}},[a("a-icon",{staticStyle:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"user"},slot:"prefix"})],1),e.errors.has("email")?a("div",{staticClass:"ant-form-explain",staticStyle:{color:"#f5222d"}},[e._v(e._s(e.errors.first("email"))+" ")]):e._e()],1),a("a-form-item",[a("a-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|verify_password",expression:"'required|verify_password'"}],ref:"password",class:{"is-danger":e.errors.has("password")},attrs:{name:"password",type:"password",placeholder:"Password"},model:{value:e.password1,callback:function(t){e.password1=t},expression:"password1"}},[a("a-icon",{staticStyle:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"lock"},slot:"prefix"})],1),a("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("password"),expression:"errors.has('password')"}],staticClass:"help is-danger",staticStyle:{color:"#f5222d"}},[e._v(e._s(e.errors.first("password")))])],1),a("a-form-item",[a("a-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|confirmed:password",expression:"'required|confirmed:password'"}],class:{"is-danger":e.errors.has("password_confirmation")},attrs:{name:"password_confirmation",type:"password",placeholder:"Password, Again","data-vv-as":"password"},model:{value:e.password2,callback:function(t){e.password2=t},expression:"password2"}},[a("a-icon",{staticStyle:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"lock"},slot:"prefix"})],1),a("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("password_confirmation"),expression:"errors.has('password_confirmation')"}],staticClass:"help is-danger",staticStyle:{color:"#f5222d"}},[e._v(e._s(e.errors.first("password_confirmation")))])],1),e.loading?a("a-form-item",[a("div",{staticStyle:{"text-align":"center"}},[a("a-spin")],1)]):a("a-form-item",[a("a-button",{staticClass:"login-form-button",attrs:{type:"primary"},on:{click:e.register}},[e._v(" Register ")])],1)],1)],1)],1):e._e(),"developer"===e.$store.state.usertype?a("div",{staticStyle:{padding:"3%","margin-top":"4rem"}},[a("a-card",{style:{width:"21rem"},attrs:{title:"Register on codeln.com "}},[a("a-timeline",[a("a-timeline-item",[e._v("Create a profile on Codeln")]),a("a-timeline-item",[e._v("Opt into remote codeln")]),a("a-timeline-item",[e._v("Your profile goes under review")]),a("a-timeline-item",[e._v("Successful profile can now apply for gigs")])],1),a("a",{attrs:{href:"https://www.codeln.com/register",target:"_blank"}},[a("a-button",{attrs:{type:"primary"}},[e._v("Get started")])],1)],1)],1):e._e()]):a("div",[a("img",{staticStyle:{width:"100%"},attrs:{src:r("dc14")}})])])],1)],1)]),a("Footer")],1)},n=[],s=(r("4d63"),r("ac1f"),r("25f0"),r("6ff9")),o=r("2997"),i=r("b012"),c=r("7bb1"),l=r("2b0e"),u=r("bf80");l["a"].use(c["a"]),c["a"].Validator.extend("verify_password",{getMessage:"The password must contain at least: 1 uppercase, 1 lowercase, 1 number,8 characters min",validate:function(e){var t=new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");return t.test(e)}});var p={name:"register",components:{Pageheader:s["a"],Footer:o["a"]},data:function(){return{loading:!1,usertype:null,firstname:"",lastname:"",email:"",password1:"",password2:"",error:null,developer:!1,client:!1,currentUserProfile:{}}},computed:{Profile:function(){var e="";return!1===this.client&&!1===this.developer?e="":this.$store.state.usertype&&(e=this.$store.state.usertype),e}},methods:{register:function(){var e=this;this.$validator.validateAll().then((function(t){t&&(e.loading=!0,i["a"].register({first_name:e.firstname,last_name:e.lastname,email:e.email,password1:e.password1,password2:e.password2}).then((function(t){e.$store.dispatch("setToken",t.data.token),e.$store.dispatch("setUser",t.data.user);var r={headers:{Authorization:"JWT "+e.$store.state.token}};u["a"].currentuser(e.$store.state.user.pk,r).then((function(t){e.currentUserProfile=t.data,e.currentUserProfile.stage="complete",e.currentUserProfile.user_type="recruiter",u["a"].update(e.$store.state.user.pk,e.currentUserProfile,r).then((function(){e.$router.push(e.$route.query.redirect||"Dashboard")}))})),e.loading=!1})).catch((function(t){console.log(t),e.loading=!1,e.error="user already exists"})))}))},Choice:function(e){this.$store.dispatch("setUsertype"),1===e?(this.client=!0,this.$store.dispatch("setUsertype","recruiter"),this.developer=!1):(this.client=!1,this.$store.dispatch("setUsertype","developer"),this.developer=!0)}}},d=p,f=(r("ec21"),r("2877")),m=Object(f["a"])(d,a,n,!1,null,"9a1413aa",null);t["default"]=m.exports},f09e:function(e,t,r){e.exports=r.p+"img/programmer.709e2eec.svg"}}]);
//# sourceMappingURL=chunk-7681a120.e601b867.js.map