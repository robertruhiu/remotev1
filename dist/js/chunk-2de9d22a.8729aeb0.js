(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2de9d22a"],{"1c82":function(t,e,r){!function(e,r){t.exports=r()}(window,(function(){return function(t){function e(a){if(r[a])return r[a].exports;var i=r[a]={i:a,l:!1,exports:{}};return t[a].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var r={};return e.m=t,e.c=r,e.d=function(t,r,a){e.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:a})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,r){if(1&r&&(t=e(t)),8&r)return t;if(4&r&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(e.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var i in t)e.d(a,i,function(e){return t[e]}.bind(null,i));return a},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=0)}([function(t,e,r){"use strict";r.r(e);var a=function(t,e,r,a,i,s,o,n){var c,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=r,l._compiled=!0),a&&(l.functional=!0),s&&(l._scopeId="data-v-"+s),o?l._ssrRegister=c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)}:i&&(c=n?function(){i.call(this,this.$root.$options.shadowRoot)}:i),c)if(l.functional){l._injectStyles=c;var u=l.render;l.render=function(t,e){return c.call(e),u(t,e)}}else{var p=l.beforeCreate;l.beforeCreate=p?[].concat(p,c):[c]}return{exports:t,options:l}}({props:{embed:{type:Boolean,default:!1},paystackkey:{type:String,required:!0},email:{type:String,required:!0},firstname:{type:String,default:""},lastname:{type:String,default:""},amount:{type:Number,required:!0},reference:{type:String,required:!0},channels:{type:Array,default:function(){return["card","bank"]}},accessCode:{type:String,default:""},callback:{type:Function,required:!0,default:function(){}},close:{type:Function,required:!0,default:function(){}},metadata:{type:Object,default:function(){return{}}},currency:{type:String,default:"NGN"},plan:{type:String,default:""},quantity:{type:String,default:""},subaccount:{type:String,default:""},splitCode:{type:String,default:""},transactionCharge:{type:Number,default:0},bearer:{type:String,default:""}},data:function(){return{scriptLoaded:null}},created:function(){var t=this;this.scriptLoaded=new Promise((function(e){t.loadScript((function(){e()}))}))},mounted:function(){this.embed&&this.payWithPaystack()},methods:{loadScript:function(t){var e=document.createElement("script");e.src="https://js.paystack.co/v1/inline.js",document.getElementsByTagName("head")[0].appendChild(e),e.readyState?e.onreadystatechange=function(){"loaded"!==e.readyState&&"complete"!==e.readyState||(e.onreadystatechange=null,t())}:e.onload=function(){t()}},payWithPaystack:function(){var t=this;this.scriptLoaded&&this.scriptLoaded.then((function(){var e={key:t.paystackkey,email:t.email,firstname:t.firstname,lastname:t.lastname,channels:t.channels,amount:t.amount,access_code:t.accessCode,ref:t.reference,callback:function(e){t.callback(e)},onClose:function(){t.close()},metadata:t.metadata,currency:t.currency,plan:t.plan,quantity:t.quantity,subaccount:t.subaccount,split_code:t.split_code,transaction_charge:t.transaction_charge,bearer:t.bearer};t.embed&&(e.container="paystackEmbedContainer");var r=window.PaystackPop.setup(e);t.embed||r.openIframe()}))}}},(function(){var t=this,e=t._self._c||t.$createElement;return t.embed?e("div",{attrs:{id:"paystackEmbedContainer"}}):e("button",{staticClass:"payButton",on:{click:t.payWithPaystack}},[t._t("default",[t._v("Make Payment")])],2)}),[],!1,null,null,null);e.default=a.exports}])}))},"2ada":function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a-layout-sider",{staticStyle:{"box-shadow":"2px 0 6px rgba(0,21,41,.35)","background-color":"#F4F7FC",height:"available"},style:{overflow:"auto",height:"100vh",position:"fixed",left:0},attrs:{breakpoint:"lg","collapsed-width":"0"},on:{collapse:t.onCollapse,breakpoint:t.onBreakpoint}},[r("hide-at",{attrs:{breakpoints:{small:425,medium:768},breakpoint:"mediumAndBelow"}},[r("router-link",{attrs:{to:"/"}},[r("img",{staticStyle:{width:"9rem",height:"2rem","margin-top":"1rem","margin-bottom":"1rem","margin-left":"1rem"},style:t.logo,attrs:{src:t.defaultlogo}})])],1),r("a-menu",{staticStyle:{"font-family":"sofia_proregular","background-color":"#F4F7FC"},attrs:{mode:"inline","default-selected-keys":t.key}},[r("a-menu-item",{key:"9",on:{click:function(e){return t.$router.push("Dashboard")}}},[r("a-icon",{attrs:{type:"dashboard"}}),r("span",[t._v("Home")])],1),r("a-menu-item",{key:"1",on:{click:function(e){return t.$router.push("Myprojects")}}},[r("a-icon",{attrs:{type:"appstore"}}),r("span",[t._v("Manage my Projects")])],1),r("a-menu-item",{key:"2",on:{click:function(e){return t.$router.push("Create")}}},[r("a-icon",{attrs:{type:"plus"}}),r("span",[t._v("Create a Project")])],1),r("a-menu-item",{key:"3",on:{click:function(e){return t.$router.push("Escrow")}}},[r("a-icon",{attrs:{type:"bank"}}),r("span",[t._v("Escrow Management")])],1),r("a-menu-item",{key:"4"},[r("a-icon",{attrs:{type:"calendar"}}),r("span",[t._v("My Meetings")])],1),r("a-menu-item",{key:"5",on:{click:function(e){return t.$router.push("Bugs")}}},[r("a-icon",{attrs:{type:"exclamation"}}),r("span",[t._v("Bugs & issues")])],1),r("a-menu-item",{key:"6"},[r("a-icon",{attrs:{type:"message"}}),r("span",[t._v("Chat")])],1),r("a-menu-item",{key:"7"},[r("a-icon",{attrs:{type:"solution"}}),r("span",[t._v("Edit Profile")])],1),r("a-menu-item",{key:"8"},[r("a-icon",{attrs:{type:"logout"}}),r("span",[t._v("logout")])],1)],1)],1)},i=[],s=r("8808"),o=r("b8fb"),n=r.n(o),c={name:"CLientSider",data:function(){return{collapsed:!1,defaultlogo:n.a,key:["9"],top:0}},components:{hideAt:s["hideAt"]},computed:{getRoute:function(){var t=this.$route;return console.log(t),t}},methods:{onCollapse:function(t,e){return e},onBreakpoint:function(t){return t}}},l=c,u=(r("7a06"),r("2877")),p=Object(u["a"])(l,a,i,!1,null,"2dbfeeef",null);e["a"]=p.exports},"46d6":function(t,e,r){t.exports=r.p+"img/pay.b08bf04d.svg"},"4de4":function(t,e,r){"use strict";var a=r("23e7"),i=r("b727").filter,s=r("1dde"),o=r("ae40"),n=s("filter"),c=o("filter");a({target:"Array",proto:!0,forced:!n||!c},{filter:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,r){var a=r("1d80"),i=r("5899"),s="["+i+"]",o=RegExp("^"+s+s+"*"),n=RegExp(s+s+"*$"),c=function(t){return function(e){var r=String(a(e));return 1&t&&(r=r.replace(o,"")),2&t&&(r=r.replace(n,"")),r}};t.exports={start:c(1),end:c(2),trim:c(3)}},"5cb9":function(t,e,r){t.exports=r.p+"img/coding.be420fb6.svg"},7156:function(t,e,r){var a=r("861d"),i=r("d2bb");t.exports=function(t,e,r){var s,o;return i&&"function"==typeof(s=e.constructor)&&s!==r&&a(o=s.prototype)&&o!==r.prototype&&i(t,o),t}},7923:function(t,e,r){t.exports=r.p+"img/feature.28a3e194.svg"},"7a06":function(t,e,r){"use strict";var a=r("e672"),i=r.n(a);i.a},"9c9b":function(t,e,r){t.exports=r.p+"img/budget.ffa74e50.svg"},a9e3:function(t,e,r){"use strict";var a=r("83ab"),i=r("da84"),s=r("94ca"),o=r("6eeb"),n=r("5135"),c=r("c6b6"),l=r("7156"),u=r("c04e"),p=r("d039"),d=r("7c73"),f=r("241c").f,h=r("06cf").f,m=r("9bf2").f,g=r("58a8").trim,y="Number",v=i[y],b=v.prototype,_=c(d(b))==y,k=function(t){var e,r,a,i,s,o,n,c,l=u(t,!1);if("string"==typeof l&&l.length>2)if(l=g(l),e=l.charCodeAt(0),43===e||45===e){if(r=l.charCodeAt(2),88===r||120===r)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:a=2,i=49;break;case 79:case 111:a=8,i=55;break;default:return+l}for(s=l.slice(2),o=s.length,n=0;n<o;n++)if(c=s.charCodeAt(n),c<48||c>i)return NaN;return parseInt(s,a)}return+l};if(s(y,!v(" 0o1")||!v("0b1")||v("+0x1"))){for(var S,w=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof w&&(_?p((function(){b.valueOf.call(r)})):c(r)!=y)?l(new v(k(e)),r,w):k(e)},j=a?f(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),x=0;j.length>x;x++)n(v,S=j[x])&&!n(w,S)&&m(w,S,h(v,S));w.prototype=b,b.constructor=w,o(i,y,w)}},ae9b:function(t,e,r){},aedf:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-layout",{staticStyle:{"min-height":"100vh","background-color":"#F4F7FC","margin-left":"200px"}},[a("ClientSider"),a("a-layout",{staticStyle:{"background-color":"#F4F7FC"}},[a("a-layout-content",{style:{padding:"1% 2%",background:"#FAFBFF",minHeight:"280px"}},[a("a-card",{staticClass:"hellocard"},[a("a-row",[a("a-col",{attrs:{span:"12"}},[a("a-breadcrumb",[a("a-breadcrumb-item",[a("a",{on:{click:function(e){return t.$router.push("Dashboard")}}},[t._v("Home")])]),a("a-breadcrumb-item",[a("a",{on:{click:function(e){return t.$router.push("Create")}}},[t._v("Create projects")])])],1),a("span",{staticStyle:{"font-size":"1.7rem","font-family":"sofia_prosemibold","margin-bottom":"0",color:"black"}},[t._v(" Create Project")])],1),a("a-col",{attrs:{span:"6"}},[a("div",{staticStyle:{"text-align":"center"}},[a("img",{staticStyle:{width:"20%"},attrs:{src:r("e3ea")}})])])],1)],1),a("div",{staticStyle:{"min-height":"40vh",position:"relative"}},[a("a-row",{attrs:{gutter:"16"}},[a("a-col",{attrs:{span:"20"}},[a("div",[a("div",{staticStyle:{width:"90%",margin:"0 auto"}},[a("a-steps",{attrs:{current:t.current}},t._l(t.steps,(function(t){return a("a-step",{key:t.title,attrs:{title:t.title}})})),1)],1),a("div",{staticStyle:{"margin-top":"2rem"}},[a("div",{staticStyle:{margin:"0 auto"}},[0===t.current?a("div",[a("a-row",{staticStyle:{width:"60%",margin:"0 auto"}},[a("a-col",{staticClass:"stepcard",attrs:{span:"24"}},[a("div",{staticStyle:{"text-align":"center"}},[a("img",{staticStyle:{width:"10%"},attrs:{src:r("fff3")}}),a("p",{staticStyle:{"font-family":"sofia_problack"}},[t._v("Express what you want")]),a("p",[t._v("Start a new project and write up the project features and the story under each.")])]),a("a-form-model",{attrs:{"label-col":t.labelCol,"wrapper-col":t.wrapperCol}},[a("a-form-model-item",{attrs:{label:"Project title"}},[a("a-input",{on:{change:t.step1changetitle},model:{value:t.project.title,callback:function(e){t.$set(t.project,"title",e)},expression:"project.title"}}),t._l(t.step1errors,(function(e){return a("div",{key:e},["title"===e?a("div",{staticStyle:{color:"red"}},[t._v(" required ")]):t._e()])}))],2),a("a-form-model-item",{attrs:{label:"Project description"}},[a("a-textarea",{attrs:{"auto-size":{minRows:3,maxRows:5}},on:{change:t.step1changedescription},model:{value:t.project.description,callback:function(e){t.$set(t.project,"description",e)},expression:"project.description"}}),t._l(t.step1errors,(function(e){return a("div",{key:e},["description"===e?a("div",{staticStyle:{color:"red"}},[t._v(" required ")]):t._e()])}))],2)],1)],1)],1)],1):t._e(),1===t.current?a("div",[a("a-row",{staticStyle:{width:"90%",margin:"0 auto"}},[a("a-col",{staticClass:"stepcard",attrs:{span:"24"}},[a("div",{staticStyle:{"text-align":"center"}},[a("img",{staticStyle:{width:"10%"},attrs:{src:r("7923")}}),a("p",{staticStyle:{"font-family":"sofia_problack"}},[t._v("Breakdown your project")]),a("p",[t._v("Express project features with a user story on interaction.You can have multiple Features just add and submit to continue adding more.These will serve as your milestones")])]),a("a-row",{attrs:{gutter:"16"}},[a("a-col",{attrs:{span:"12"}},[a("p",{staticStyle:{"font-family":"sofia_problack"}},[t._v("Feature list")]),t.featureserror?a("div",{staticStyle:{color:"red"}},[t._v(" required ")]):t._e(),0===t.features.length?a("div",[a("p",[t._v("Add feature"),a("span",{staticStyle:{float:"right"}},[a("a-icon",{attrs:{type:"arrow-right"}})],1)])]):a("div",{staticStyle:{"overflow-y":"scroll",height:"40vh"}},t._l(t.features,(function(e){return a("div",{key:e},[a("a-card",{staticStyle:{width:"80%","margin-bottom":"1rem"},attrs:{size:"small",title:e.title}},[a("a",{attrs:{slot:"extra"},on:{click:function(r){return t.editfeature(e)}},slot:"extra"},[t._v("edit feature")]),t._l(e.storylist,(function(e){return a("p",{key:e,staticStyle:{"font-family":"sofia_proregular"}},[t._v(" "+t._s(e.story)+" ")])}))],2)],1)})),0)]),a("a-col",{staticClass:"addfeature",attrs:{span:"12"}},[a("a-form",{attrs:{"label-col":{span:24},"wrapper-col":{span:24}},on:{submit:t.handleSubmit}},[a("a-form-item",{attrs:{label:"Feature name"}},[a("a-input",{attrs:{placeholder:"Registration"},on:{change:t.featuretitlechange},model:{value:t.featuretitle,callback:function(e){t.featuretitle=e},expression:"featuretitle"}}),t.featuretitleerror?a("div",{staticStyle:{color:"red"}},[t._v(" title required ")]):t._e()],1),a("p",{staticStyle:{"font-family":"sofia_proregular"}},[t._v("Feature user stories "),a("a-button",{staticStyle:{"margin-right":"1%"},attrs:{size:t.small},on:{click:t.addstory}},[t._v(" Add story ")])],1),a("p",{staticStyle:{"font-family":"sofia_proregular"}},[a("strong",[t._v("These provide context on what the feature is supposed to do.")]),t._v("Example:As a developer I want to be able to sign up and create a profile ")]),t._l(t.stories,(function(e,r){return a("div",{key:r},[a("a-form-item",[a("label",{attrs:{slot:"label"},slot:"label"},[t._v("Story"+t._s(r+1)+" "),a("span",{staticStyle:{float:"right"},on:{click:function(e){return t.deleteStory(r)}}},[a("a-icon",{attrs:{type:"close"}})],1)]),a("a-textarea",{attrs:{placeholder:"As a developer I want to be able to create a public profile on remote.codeln.com so that i can be attractive to project owners","auto-size":{minRows:2,maxRows:5}},model:{value:e.story,callback:function(r){t.$set(e,"story",r)},expression:"story.story"}})],1)],1)})),t.featureedit?a("a-button",{attrs:{type:"primary",size:t.small},on:{click:t.editfeaturesubmit}},[t._v(" Submit changes ")]):a("a-button",{attrs:{type:"primary",size:t.small},on:{click:t.addFeature}},[t._v(" Submit Feature ")])],2)],1)],1)],1)],1)],1):t._e(),2===t.current?a("div",[a("a-row",{staticStyle:{width:"70%",margin:"0 auto"}},[a("a-col",{staticClass:"stepcard",attrs:{span:"24"}},[a("div",{staticStyle:{"text-align":"center"}},[a("img",{staticStyle:{width:"10%"},attrs:{src:r("5cb9")}}),a("p",{staticStyle:{"font-family":"sofia_problack"}},[t._v("Which tools to be used")])]),a("a-form-model",{attrs:{"label-col":t.labelCol,"wrapper-col":t.wrapperCol}},[a("a-form-model-item",{attrs:{label:"Project type(you can pick than one type)"}},[t.notoolserror?a("div",{staticStyle:{color:"red"}},[t._v(" required ")]):t._e(),a("a-select",{staticStyle:{width:"100%"},attrs:{mode:"multiple",placeholder:"Please select project type"},on:{change:t.selectprojectype}},[a("a-select-option",{attrs:{value:"website"}},[t._v(" Website ")]),a("a-select-option",{attrs:{value:"android"}},[t._v(" Android app ")]),a("a-select-option",{attrs:{value:"ios"}},[t._v(" Ios app ")]),a("a-select-option",{attrs:{value:"desktop"}},[t._v(" Desktop application ")])],1)],1)],1),t.projectype?a("div",[a("div",[a("p",[t._v("Development tools types")]),t._l(t.projecttypetags,(function(e){return[a("a-checkable-tag",{key:e,attrs:{checked:t.selectedTags.indexOf(e)>-1},on:{change:function(r){return t.handleChange(e,r)}}},[t._v(" "+t._s(e)+" ")])]}))],2),a("div",{staticStyle:{"margin-top":"1rem"}},[a("p",[t._v("Add a custom framework or language")]),t._l(t.tags,(function(e,r){return[e.length>20?a("a-tooltip",{key:e,attrs:{title:e}},[a("a-tag",{key:e,attrs:{closable:0!==r},on:{close:function(){return t.handleClose(e)}}},[t._v(" "+t._s(e.slice(0,20)+"...")+" ")])],1):a("a-tag",{key:e,attrs:{closable:0!==r},on:{close:function(){return t.handleClose(e)}}},[t._v(" "+t._s(e)+" ")])]})),t.inputVisible?a("a-input",{ref:"input",style:{width:"78px"},attrs:{type:"text",size:"small",value:t.inputValue},on:{change:t.handleInputChange,blur:t.handleInputConfirm,keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleInputConfirm(e)}}}):a("a-tag",{staticStyle:{background:"#fff",borderStyle:"dashed"},on:{click:t.showInput}},[a("a-icon",{attrs:{type:"plus"}}),t._v(" New Tag ")],1)],2)]):t._e()],1)],1)],1):t._e(),3===t.current?a("div",[a("a-row",{staticStyle:{width:"70%",margin:"0 auto"}},[a("a-col",{staticClass:"stepcard",attrs:{span:"24"}},[a("div",{staticStyle:{"text-align":"center"}},[a("p",{staticStyle:{"font-family":"sofia_problack","font-size":"1rem"}},[t._v("Team composition")]),t.compositionerror?a("div",{staticStyle:{color:"red"}},[t._v(" please pick one that suites you ")]):t._e()]),a("a-row",[a("a-col",{attrs:{span:"10"}},[a("div",{staticStyle:{"text-align":"center"}},[a("img",{staticStyle:{width:"30%"},attrs:{src:r("d0c0")}}),a("p",[t._v("Single developer to handle both the design and development")]),a("a-checkbox",{on:{change:function(e){return t.teampick(1)}},model:{value:t.one,callback:function(e){t.one=e},expression:"one"}},[t._v(" pick ")])],1)]),a("a-col",{attrs:{span:"2"}},[a("p",{staticStyle:{"text-align":"center"}},[t._v("or")])]),a("a-col",{attrs:{span:"10"}},[a("div",{staticStyle:{"text-align":"center"}},[a("img",{staticStyle:{width:"30%"},attrs:{src:r("d0c0")}}),a("span",{staticStyle:{"font-family":"sofia_probold"}},[t._v("&")]),a("img",{staticStyle:{width:"30%"},attrs:{src:r("df12")}}),a("p",[t._v("I want a designer for the UI/UX stage and a developer to implement")]),a("a-checkbox",{on:{change:function(e){return t.teampick(2)}},model:{value:t.both,callback:function(e){t.both=e},expression:"both"}},[t._v(" pick ")])],1)])],1)],1)],1)],1):t._e(),4===t.current?a("div",[a("a-row",{staticStyle:{width:"70%",margin:"0 auto"}},[a("a-col",{staticClass:"stepcard",attrs:{span:"24"}},[a("div",{staticStyle:{"text-align":"center"}},[a("img",{staticStyle:{width:"10%"},attrs:{src:r("9c9b")}}),a("p",{staticStyle:{"font-family":"sofia_problack"}},[t._v(" Time and budget fot the project")])]),a("a-form-model",{attrs:{"label-col":t.labelCol,"wrapper-col":t.wrapperCol}},[a("a-form-model-item",{attrs:{label:"Project budget"}},[a("a-input-number",{staticStyle:{width:"100%"},attrs:{"default-value":1e3,formatter:function(t){return("$ "+t).replace(/\B(?=(\d{3})+(?!\d))/g,",")},parser:function(t){return t.replace(/\$\s?|(,*)/g,"")}},on:{change:t.Budgetchanges},model:{value:t.project.budget,callback:function(e){t.$set(t.project,"budget",e)},expression:"project.budget"}}),t._l(t.step4errors,(function(e){return a("div",{key:e},["budget"===e?a("div",[a("div",{staticStyle:{color:"red"}},[t._v("required")])]):t._e()])}))],2),"both"===t.teamcompostion?a("a-form-model-item",{attrs:{label:"Designer budget(how much of the budget above should be for the designer)"}},[a("a-input-number",{staticStyle:{width:"100%"},attrs:{"default-value":500,formatter:function(t){return("$ "+t).replace(/\B(?=(\d{3})+(?!\d))/g,",")},parser:function(t){return t.replace(/\$\s?|(,*)/g,"")}},on:{change:t.Designbudgetchanges},model:{value:t.project.designbudget,callback:function(e){t.$set(t.project,"designbudget",e)},expression:"project.designbudget"}}),t._l(t.step4errors,(function(e){return a("div",{key:e},["designbudget"===e?a("div",[a("div",{staticStyle:{color:"red"}},[t._v("required")])]):t._e()])}))],2):t._e(),a("a-form-model-item",{attrs:{label:"Project timeline(weeks,months,days)"}},[a("a-input",{attrs:{type:"number"},on:{change:t.Timechanges},model:{value:t.project.time,callback:function(e){t.$set(t.project,"time",e)},expression:"project.time"}},[a("a-select",{staticStyle:{width:"80px"},attrs:{slot:"addonAfter","default-value":"weeks"},slot:"addonAfter",model:{value:t.project.datetype,callback:function(e){t.$set(t.project,"datetype",e)},expression:"project.datetype"}},[a("a-select-option",{attrs:{value:"days"}},[t._v(" days ")]),a("a-select-option",{attrs:{value:"weeks"}},[t._v(" weeks ")]),a("a-select-option",{attrs:{value:"months"}},[t._v(" months ")])],1)],1),t._l(t.step4errors,(function(e){return a("div",{key:e},["time"===e?a("div",[a("div",{staticStyle:{color:"red"}},[t._v("required")])]):t._e()])}))],2)],1)],1)],1)],1):t._e(),5===t.current?a("div",[a("a-row",{staticStyle:{width:"50%",margin:"0 auto"}},[a("a-col",{staticClass:"stepcard",attrs:{span:"24"}},[a("div",{staticStyle:{"text-align":"center"}},[a("img",{staticStyle:{width:"30%"},attrs:{src:r("46d6")}}),a("p",{staticStyle:{"font-family":"sofia_problack"}},[t._v("Escrow Stage 1")]),a("p",[t._v("A 40 % escrow is needed to be deposited .This is to serve more as a commitment fee towards your project. Amount is held in escrow ")]),a("p",[t._v("A second escrow on the remaining amount will happen when you contract a developer ")]),a("p",{staticStyle:{"font-family":"sofia_probold"}},[t._v("Amount Payable :$ "+t._s(t.deposit))]),a("paystack",{attrs:{amount:100*t.deposit,email:t.email,paystackkey:t.paystackkey,currency:t.currency,reference:t.reference,callback:t.callback,close:t.close,embed:!1}},[a("i",{staticClass:"fas fa-money-bill-alt"}),t._v(" Make Payment ")])],1)])],1)],1):t._e(),a("div",{staticStyle:{"text-align":"center"}},[a("div",{staticClass:"steps-action",staticStyle:{margin:"2% auto"}},[t.current<t.steps.length-1?a("a-button",{attrs:{type:"primary"},on:{click:t.next}},[t._v(" Next ")]):t._e(),t.current==t.steps.length-1?a("a-button",{attrs:{type:"primary"},on:{click:t.Done}},[t._v(" Done ")]):t._e(),t.current>0?a("a-button",{staticStyle:{"margin-left":"8px"},on:{click:t.prev}},[t._v(" Previous ")]):t._e()],1)])])])])]),a("a-col",{attrs:{span:"4"}},[a("div",{staticClass:"timelinecard"},[a("p",{staticStyle:{"font-family":"sofia_probold","font-size":"1.5rem"}},[t._v("Project development timeline")]),a("a-timeline",[a("a-timeline-item",[t._v("creation")]),a("a-timeline-item",[t._v("Team selection")]),a("a-timeline-item",[t._v("Budget allocation")]),a("a-timeline-item",[t._v("first escrow")]),a("a-timeline-item",[t._v("Accept bids/shortlist and Pick bid")]),a("a-timeline-item",[t._v("Contract creation - terms and feature discussions")]),a("a-timeline-item",[t._v("Second escrow")]),a("a-timeline-item",[t._v("UI/UX stage - wireframes and Ui designs ")]),a("a-timeline-item",[t._v("Development-software development OF feature based on UI/UX")])],1)],1)])],1)],1)],1)],1)],1)},i=[],s=(r("a4d3"),r("e01a"),r("99af"),r("4de4"),r("caad"),r("c975"),r("a434"),r("a9e3"),r("2532"),r("2909")),o=(r("96cf"),r("1da1")),n=r("2ada"),c=r("1c82"),l=r.n(c),u={name:"CreateProject",data:function(){return{current:0,steps:[{title:"Project details"},{title:"Features"},{title:"Tech"},{title:"Team"},{title:"Budget and Time"},{title:"First Escrow"}],labelCol:{span:24},wrapperCol:{span:24},project:{title:"h",description:"i",features:"",tools:"",custom_tools:"",team:"",budget:0,time:0,datetype:"weeks",designbudget:"",stage:""},projecttitle:"",projectdescription:"",stories:[],features:[],show:!1,featuretitle:"",featureedit:!1,featureindex:"",projecttypetags:[],selectedTags:[],tags:[],inputVisible:!1,inputValue:"",projectype:null,time:"",budget:0,designbudget:0,paystackkey:"pk_live_33025d4840017202a65e05c8ba2d2e907aae7cf9",email:"robertruhiu@gmail.com",amount:100,paystack_amount:0,currency:"USD",teamcompostion:"",one:!1,both:!1,step1errors:[],featureserror:!1,compositionerror:!1,notoolserror:!1,featuretitleerror:!1,step4errors:[]}},components:{ClientSider:n["a"],paystack:l.a},mounted:function(){return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},computed:{deposit:function(){return.4*this.budget}},methods:{addstory:function(){this.stories.push({story:""})},deleteStory:function(t){this.stories.splice(t,1)},addFeature:function(){""===this.featuretitle&&(this.featuretitleerror=!0),!1===this.featuretitleerror&&(this.features.push({title:this.featuretitle,storylist:this.stories}),this.featuretitle="",this.stories=[],this.featureserror=!1)},editfeature:function(t){this.featureedit=!0,this.featureindex=this.features.indexOf(t),this.featuretitle=this.features[this.featureindex].title,this.stories=this.features[this.featureindex].storylist},editfeaturesubmit:function(){""===this.featuretitle&&(this.featuretitleerror=!0),!1===this.featuretitleerror&&(this.features[this.featureindex]={title:this.featuretitle,storylist:this.stories},this.featureedit=!1,this.featuretitle="",this.stories=[])},handleChange:function(t,e){var r=this.selectedTags,a=e?[].concat(Object(s["a"])(r),[t]):r.filter((function(e){return e!==t}));this.selectedTags=a,this.notoolserror=!1},handleClose:function(t){var e=this.tags.filter((function(e){return e!==t}));this.tags=e},showInput:function(){this.inputVisible=!0,this.$nextTick((function(){this.$refs.input.focus()}))},handleInputChange:function(t){this.inputValue=t.target.value},handleInputConfirm:function(){var t=this.inputValue,e=this.tags;t&&-1===e.indexOf(t)&&(e=[].concat(Object(s["a"])(e),[t])),Object.assign(this,{tags:e,inputVisible:!1,inputValue:""}),this.notoolserror=!1},selectprojectype:function(t){this.projectype=t;var e=["kotlin","java"],r=["go","java"],a=["react","laravel"],i=["electron","c#"],s=["kotlin","java","go","java","react","laravel","electron","c#"];t.length>1?this.projecttypetags=s:t.includes("ios")?this.projecttypetags=r:t.includes("website")?this.projecttypetags=a:t.includes("desktop")?this.projecttypetags=i:t.includes("android")&&(this.projecttypetags=e)},teampick:function(t){1===t?(this.one=!0,this.both=!1,this.teamcompostion="one"):(this.one=!1,this.both=!0,this.teamcompostion="both"),""!==this.teamcompostion&&(this.compositionerror=!1)},Done:function(){this.$router.push("Myprojects")},step1changetitle:function(){if(this.step1errors.includes("title")){if(""!==this.project.title){var t=this.step1errors.indexOf("title");t>-1&&this.step1errors.splice(t,1)}}else""===this.project.title&&this.step1errors.push("title")},step1changedescription:function(){if(this.step1errors.includes("description")){if(""!==this.project.description){var t=this.step1errors.indexOf("description");t>-1&&this.step1errors.splice(t,1)}}else""===this.project.description&&this.step1errors.push("description")},featuretitlechange:function(){""!==this.featuretitle&&(this.featuretitleerror=!1)},Timechanges:function(){if(this.step4errors.includes("time")){if(""!==this.project.time||null!=this.project.time){var t=this.step4errors.indexOf("time");t>-1&&this.step4errors.splice(t,1)}}else""!==this.project.time&&null!==this.project.time||this.step4errors.push("time")},Budgetchanges:function(){if(this.step4errors.includes("budget")){if(""!==this.project.budget||null!=this.project.budget){var t=this.step4errors.indexOf("budget");t>-1&&this.step4errors.splice(t,1)}}else""!==this.project.budget&&null!==this.project.budget||this.step4errors.push("budget")},Designbudgetchanges:function(){if(this.step4errors.includes("designbudget")){if(""!==this.project.designbudget||null!=this.project.designbudget){var t=this.step4errors.indexOf("designbudget");t>-1&&this.step4errors.splice(t,1)}}else""!==this.project.designbudget&&null!==this.project.designbudget||this.step4errors.push("designbudget")},next:function(){0===this.current?(this.step1errors=[],""===this.project.title&&this.step1errors.push("title"),""===this.project.description&&this.step1errors.push("description"),0===this.step1errors.length&&this.current++):1===this.current?(0===this.features.length&&(this.featureserror=!0),!1===this.featureserror&&(this.project.features=this.features,this.current++)):2===this.current?0===this.tags.length&&0===this.selectedTags.length?this.notoolserror=!0:(this.tags.length>0&&(this.project.custom_tools=this.tags),this.selectedTags.length>0&&(this.project.tools=this.selectedTags),this.current++):3===this.current?(""===this.teamcompostion&&(this.compositionerror=!0),!1===this.compositionerror&&(this.project.team=this.teamcompostion,this.current++)):4===this.current&&(0===Number(this.project.time)&&this.step4errors.push("time"),0===Number(this.project.budget)&&this.step4errors.push("budget"),"both"===this.teamcompostion&&0===Number(this.project.designbudget)&&this.step4errors.push("designbudget"),0===this.step4errors.length&&(this.project.stage="escrow1",this.current++))},prev:function(){this.current--}}},p=u,d=(r("ef35"),r("2877")),f=Object(d["a"])(p,a,i,!1,null,"04d07671",null);e["default"]=f.exports},d0c0:function(t,e,r){t.exports=r.p+"img/worker.709e2eec.svg"},df12:function(t,e,r){t.exports=r.p+"img/graphic.2ef5cc13.svg"},e3ea:function(t,e,r){t.exports=r.p+"img/createproject.d1e6a2de.svg"},e672:function(t,e,r){},ef35:function(t,e,r){"use strict";var a=r("ae9b"),i=r.n(a);i.a},fff3:function(t,e,r){t.exports=r.p+"img/new.b8dea47a.svg"}}]);
//# sourceMappingURL=chunk-2de9d22a.8729aeb0.js.map