(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-58223b10"],{"0152":function(t,e,a){"use strict";var r=a("bbe3"),n=a.n(r);n.a},"1c82":function(t,e,a){!function(e,a){t.exports=a()}(window,(function(){return function(t){function e(r){if(a[r])return a[r].exports;var n=a[r]={i:r,l:!1,exports:{}};return t[r].call(n.exports,n,n.exports,e),n.l=!0,n.exports}var a={};return e.m=t,e.c=a,e.d=function(t,a,r){e.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,a){if(1&a&&(t=e(t)),8&a)return t;if(4&a&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var n in t)e.d(r,n,function(e){return t[e]}.bind(null,n));return r},e.n=function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(a,"a",a),a},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=0)}([function(t,e,a){"use strict";a.r(e);var r=function(t,e,a,r,n,i,o,s){var c,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=a,l._compiled=!0),r&&(l.functional=!0),i&&(l._scopeId="data-v-"+i),o?l._ssrRegister=c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)}:n&&(c=s?function(){n.call(this,this.$root.$options.shadowRoot)}:n),c)if(l.functional){l._injectStyles=c;var u=l.render;l.render=function(t,e){return c.call(e),u(t,e)}}else{var d=l.beforeCreate;l.beforeCreate=d?[].concat(d,c):[c]}return{exports:t,options:l}}({props:{embed:{type:Boolean,default:!1},paystackkey:{type:String,required:!0},email:{type:String,required:!0},firstname:{type:String,default:""},lastname:{type:String,default:""},amount:{type:Number,required:!0},reference:{type:String,required:!0},channels:{type:Array,default:function(){return["card","bank"]}},accessCode:{type:String,default:""},callback:{type:Function,required:!0,default:function(){}},close:{type:Function,required:!0,default:function(){}},metadata:{type:Object,default:function(){return{}}},currency:{type:String,default:"NGN"},plan:{type:String,default:""},quantity:{type:String,default:""},subaccount:{type:String,default:""},splitCode:{type:String,default:""},transactionCharge:{type:Number,default:0},bearer:{type:String,default:""}},data:function(){return{scriptLoaded:null}},created:function(){var t=this;this.scriptLoaded=new Promise((function(e){t.loadScript((function(){e()}))}))},mounted:function(){this.embed&&this.payWithPaystack()},methods:{loadScript:function(t){var e=document.createElement("script");e.src="https://js.paystack.co/v1/inline.js",document.getElementsByTagName("head")[0].appendChild(e),e.readyState?e.onreadystatechange=function(){"loaded"!==e.readyState&&"complete"!==e.readyState||(e.onreadystatechange=null,t())}:e.onload=function(){t()}},payWithPaystack:function(){var t=this;this.scriptLoaded&&this.scriptLoaded.then((function(){var e={key:t.paystackkey,email:t.email,firstname:t.firstname,lastname:t.lastname,channels:t.channels,amount:t.amount,access_code:t.accessCode,ref:t.reference,callback:function(e){t.callback(e)},onClose:function(){t.close()},metadata:t.metadata,currency:t.currency,plan:t.plan,quantity:t.quantity,subaccount:t.subaccount,split_code:t.split_code,transaction_charge:t.transaction_charge,bearer:t.bearer};t.embed&&(e.container="paystackEmbedContainer");var a=window.PaystackPop.setup(e);t.embed||a.openIframe()}))}}},(function(){var t=this,e=t._self._c||t.$createElement;return t.embed?e("div",{attrs:{id:"paystackEmbedContainer"}}):e("button",{staticClass:"payButton",on:{click:t.payWithPaystack}},[t._t("default",[t._v("Make Payment")])],2)}),[],!1,null,null,null);e.default=r.exports}])}))},2532:function(t,e,a){"use strict";var r=a("23e7"),n=a("5a34"),i=a("1d80"),o=a("ab13");r({target:"String",proto:!0,forced:!o("includes")},{includes:function(t){return!!~String(i(this)).indexOf(n(t),arguments.length>1?arguments[1]:void 0)}})},"2ada":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-layout-sider",{staticStyle:{"box-shadow":"2px 0 6px rgba(0,21,41,.35)","background-color":"#F4F7FC",height:"available"},style:{overflow:"auto",height:"100vh",position:"fixed",left:0},attrs:{breakpoint:"lg","collapsed-width":"0"},on:{collapse:t.onCollapse,breakpoint:t.onBreakpoint}},[a("hide-at",{attrs:{breakpoints:{small:425,medium:768},breakpoint:"mediumAndBelow"}},[a("router-link",{attrs:{to:"/"}},[a("img",{staticStyle:{width:"9rem",height:"2rem","margin-top":"1rem","margin-bottom":"1rem","margin-left":"1rem"},style:t.logo,attrs:{src:t.defaultlogo}})])],1),a("a-menu",{staticStyle:{"font-family":"sofia_proregular","background-color":"#F4F7FC"},attrs:{mode:"inline","default-selected-keys":t.key}},[a("a-menu-item",{key:"9",on:{click:function(e){return t.$router.push("Dashboard")}}},[a("a-icon",{attrs:{type:"dashboard"}}),a("span",[t._v("Home")])],1),a("a-menu-item",{key:"1",on:{click:function(e){return t.$router.push("Myprojects")}}},[a("a-icon",{attrs:{type:"appstore"}}),a("span",[t._v("Manage my Projects")])],1),a("a-menu-item",{key:"2",on:{click:function(e){return t.$router.push("Create")}}},[a("a-icon",{attrs:{type:"plus"}}),a("span",[t._v("Create a Project")])],1),a("a-menu-item",{key:"3",on:{click:function(e){return t.$router.push("Escrow")}}},[a("a-icon",{attrs:{type:"bank"}}),a("span",[t._v("Escrow Management")])],1),a("a-menu-item",{key:"4"},[a("a-icon",{attrs:{type:"calendar"}}),a("span",[t._v("My Meetings")])],1),a("a-menu-item",{key:"5",on:{click:function(e){return t.$router.push("Bugs")}}},[a("a-icon",{attrs:{type:"exclamation"}}),a("span",[t._v("Bugs & issues")])],1),a("a-menu-item",{key:"6"},[a("a-icon",{attrs:{type:"message"}}),a("span",[t._v("Chat")])],1),a("a-menu-item",{key:"7"},[a("a-icon",{attrs:{type:"solution"}}),a("span",[t._v("Edit Profile")])],1),a("a-menu-item",{key:"8"},[a("a-icon",{attrs:{type:"logout"}}),a("span",[t._v("logout")])],1)],1)],1)},n=[],i=a("8808"),o=a("b8fb"),s=a.n(o),c={name:"CLientSider",data:function(){return{collapsed:!1,defaultlogo:s.a,key:["9"],top:0}},components:{hideAt:i["hideAt"]},computed:{getRoute:function(){var t=this.$route;return console.log(t),t}},methods:{onCollapse:function(t,e){return e},onBreakpoint:function(t){return t}}},l=c,u=(a("7a06"),a("2877")),d=Object(u["a"])(l,r,n,!1,null,"2dbfeeef",null);e["a"]=d.exports},"44e7":function(t,e,a){var r=a("861d"),n=a("c6b6"),i=a("b622"),o=i("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[o])?!!e:"RegExp"==n(t))}},"46d6":function(t,e,a){t.exports=a.p+"img/pay.b08bf04d.svg"},"4de4":function(t,e,a){"use strict";var r=a("23e7"),n=a("b727").filter,i=a("1dde"),o=a("ae40"),s=i("filter"),c=o("filter");r({target:"Array",proto:!0,forced:!s||!c},{filter:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},"5a34":function(t,e,a){var r=a("44e7");t.exports=function(t){if(r(t))throw TypeError("The method doesn't accept regular expressions");return t}},"5cb9":function(t,e,a){t.exports=a.p+"img/coding.be420fb6.svg"},7923:function(t,e,a){t.exports=a.p+"img/feature.28a3e194.svg"},"7a06":function(t,e,a){"use strict";var r=a("e672"),n=a.n(r);n.a},"9c9b":function(t,e,a){t.exports=a.p+"img/budget.ffa74e50.svg"},a434:function(t,e,a){"use strict";var r=a("23e7"),n=a("23cb"),i=a("a691"),o=a("50c4"),s=a("7b0b"),c=a("65f0"),l=a("8418"),u=a("1dde"),d=a("ae40"),p=u("splice"),f=d("splice",{ACCESSORS:!0,0:0,1:2}),m=Math.max,y=Math.min,h=9007199254740991,g="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!p||!f},{splice:function(t,e){var a,r,u,d,p,f,b=s(this),v=o(b.length),_=n(t,v),k=arguments.length;if(0===k?a=r=0:1===k?(a=0,r=v-_):(a=k-2,r=y(m(i(e),0),v-_)),v+a-r>h)throw TypeError(g);for(u=c(b,r),d=0;d<r;d++)p=_+d,p in b&&l(u,d,b[p]);if(u.length=r,a<r){for(d=_;d<v-r;d++)p=d+r,f=d+a,p in b?b[f]=b[p]:delete b[f];for(d=v;d>v-r+a;d--)delete b[d-1]}else if(a>r)for(d=v-r;d>_;d--)p=d+r-1,f=d+a-1,p in b?b[f]=b[p]:delete b[f];for(d=0;d<a;d++)b[d+_]=arguments[d+2];return b.length=v-r+a,u}})},ab13:function(t,e,a){var r=a("b622"),n=r("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(a){try{return e[n]=!1,"/./"[t](e)}catch(r){}}return!1}},aedf:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a-layout",{staticStyle:{"min-height":"100vh","background-color":"#F4F7FC","margin-left":"200px"}},[r("ClientSider"),r("a-layout",{staticStyle:{"background-color":"#F4F7FC"}},[r("a-layout-content",{style:{padding:"1% 2%",background:"#FAFBFF",minHeight:"280px"}},[r("a-card",{staticClass:"hellocard"},[r("a-row",[r("a-col",{attrs:{span:"12"}},[r("a-breadcrumb",[r("a-breadcrumb-item",[r("a",{on:{click:function(e){return t.$router.push("Dashboard")}}},[t._v("Home")])]),r("a-breadcrumb-item",[r("a",{on:{click:function(e){return t.$router.push("Create")}}},[t._v("Create projects")])])],1),r("span",{staticStyle:{"font-size":"1.7rem","font-family":"sofia_prosemibold","margin-bottom":"0",color:"black"}},[t._v(" Create Project")])],1),r("a-col",{attrs:{span:"6"}},[r("div",{staticStyle:{"text-align":"center"}},[r("img",{staticStyle:{width:"20%"},attrs:{src:a("e3ea")}})])])],1)],1),r("div",{staticStyle:{"min-height":"40vh",position:"relative"}},[r("a-row",{attrs:{gutter:"16"}},[r("a-col",{attrs:{span:"20"}},[r("div",[r("div",{staticStyle:{width:"90%",margin:"0 auto"}},[r("a-steps",{attrs:{current:t.current}},t._l(t.steps,(function(t){return r("a-step",{key:t.title,attrs:{title:t.title}})})),1)],1),r("div",{staticStyle:{"margin-top":"2rem"}},[r("div",{staticStyle:{margin:"0 auto"}},[0===t.current?r("div",[r("a-row",{staticStyle:{width:"60%",margin:"0 auto"}},[r("a-col",{staticClass:"stepcard",attrs:{span:"24"}},[r("div",{staticStyle:{"text-align":"center"}},[r("img",{staticStyle:{width:"10%"},attrs:{src:a("fff3")}}),r("p",{staticStyle:{"font-family":"sofia_problack"}},[t._v("Express what you want")]),r("p",[t._v("Start a new project and write up the project features and the story under each.")])]),r("a-form-model",{attrs:{"label-col":t.labelCol,"wrapper-col":t.wrapperCol}},[r("a-form-model-item",{attrs:{label:"Project title"}},[r("a-input",{model:{value:t.projecttitle,callback:function(e){t.projecttitle=e},expression:"projecttitle"}})],1),r("a-form-model-item",{attrs:{label:"Project description"}},[r("a-textarea",{attrs:{"auto-size":{minRows:3,maxRows:5}},model:{value:t.projectdescription,callback:function(e){t.projectdescription=e},expression:"projectdescription"}})],1)],1)],1)],1)],1):t._e(),1===t.current?r("div",[r("a-row",{staticStyle:{width:"90%",margin:"0 auto"}},[r("a-col",{staticClass:"stepcard",attrs:{span:"24"}},[r("div",{staticStyle:{"text-align":"center"}},[r("img",{staticStyle:{width:"10%"},attrs:{src:a("7923")}}),r("p",{staticStyle:{"font-family":"sofia_problack"}},[t._v("Breakdown your project")]),r("p",[t._v("Express project features with a user story on interaction.You can have multiple Features just add and submit to continue adding more.These will serve as your milestones")])]),r("a-row",{attrs:{gutter:"16"}},[r("a-col",{attrs:{span:"12"}},[r("p",{staticStyle:{"font-family":"sofia_problack"}},[t._v("Feature list")]),0===t.features.length?r("div",[r("p",[t._v("Add feature"),r("span",{staticStyle:{float:"right"}},[r("a-icon",{attrs:{type:"arrow-right"}})],1)])]):r("div",{staticStyle:{"overflow-y":"scroll",height:"40vh"}},t._l(t.features,(function(e){return r("div",{key:e},[r("a-card",{staticStyle:{width:"80%","margin-bottom":"1rem"},attrs:{size:"small",title:e.title}},[r("a",{attrs:{slot:"extra"},on:{click:function(a){return t.editfeature(e)}},slot:"extra"},[t._v("edit feature")]),t._l(e.storylist,(function(e){return r("p",{key:e,staticStyle:{"font-family":"sofia_proregular"}},[t._v(" "+t._s(e.story)+" ")])}))],2)],1)})),0)]),r("a-col",{staticClass:"addfeature",attrs:{span:"12"}},[r("a-form",{attrs:{"label-col":{span:24},"wrapper-col":{span:24}},on:{submit:t.handleSubmit}},[r("a-form-item",{attrs:{label:"Feature name"}},[r("a-input",{attrs:{placeholder:"Registration"},model:{value:t.featuretitle,callback:function(e){t.featuretitle=e},expression:"featuretitle"}})],1),r("p",{staticStyle:{"font-family":"sofia_proregular"}},[t._v("Feature user stories "),r("a-button",{staticStyle:{"margin-right":"1%"},attrs:{size:t.small},on:{click:t.addstory}},[t._v(" Add story ")])],1),r("p",{staticStyle:{"font-family":"sofia_proregular"}},[r("strong",[t._v("These provide context on what the feature is supposed to do.")]),t._v("Example:As a developer I want to be able to sign up and create a profile ")]),t._l(t.stories,(function(e,a){return r("div",{key:a},[r("a-form-item",[r("label",{attrs:{slot:"label"},slot:"label"},[t._v("Story"+t._s(a+1)+" "),r("span",{staticStyle:{float:"right"},on:{click:function(e){return t.deleteStory(a)}}},[r("a-icon",{attrs:{type:"close"}})],1)]),r("a-textarea",{attrs:{placeholder:"As a developer I want to be able to create a public profile on remote.codeln.com so that i can be attractive to project owners","auto-size":{minRows:2,maxRows:5}},model:{value:e.story,callback:function(a){t.$set(e,"story",a)},expression:"story.story"}})],1)],1)})),t.featureedit?r("a-button",{attrs:{type:"primary",size:t.small},on:{click:t.editfeaturesubmit}},[t._v(" Submit changes ")]):r("a-button",{attrs:{type:"primary",size:t.small},on:{click:t.addFeature}},[t._v(" Submit Feature ")])],2)],1)],1)],1)],1)],1):t._e(),2===t.current?r("div",[r("a-row",{staticStyle:{width:"70%",margin:"0 auto"}},[r("a-col",{staticClass:"stepcard",attrs:{span:"24"}},[r("div",{staticStyle:{"text-align":"center"}},[r("img",{staticStyle:{width:"10%"},attrs:{src:a("5cb9")}}),r("p",{staticStyle:{"font-family":"sofia_problack"}},[t._v("Which tools to be used")])]),r("a-form-model",{attrs:{"label-col":t.labelCol,"wrapper-col":t.wrapperCol}},[r("a-form-model-item",{attrs:{label:"Project type(you can pick than one type)"}},[r("a-select",{staticStyle:{width:"100%"},attrs:{mode:"multiple",placeholder:"Please select project type"},on:{change:t.selectprojectype}},[r("a-select-option",{attrs:{value:"website"}},[t._v(" Website ")]),r("a-select-option",{attrs:{value:"android"}},[t._v(" Android app ")]),r("a-select-option",{attrs:{value:"ios"}},[t._v(" Ios app ")]),r("a-select-option",{attrs:{value:"desktop"}},[t._v(" Desktop application ")])],1)],1)],1),t.projectype?r("div",[r("div",[r("p",[t._v("Development tools types")]),t._l(t.projecttypetags,(function(e){return[r("a-checkable-tag",{key:e,attrs:{checked:t.selectedTags.indexOf(e)>-1},on:{change:function(a){return t.handleChange(e,a)}}},[t._v(" "+t._s(e)+" ")])]}))],2),r("div",{staticStyle:{"margin-top":"1rem"}},[r("p",[t._v("Add a custom framework or language")]),t._l(t.tags,(function(e,a){return[e.length>20?r("a-tooltip",{key:e,attrs:{title:e}},[r("a-tag",{key:e,attrs:{closable:0!==a},on:{close:function(){return t.handleClose(e)}}},[t._v(" "+t._s(e.slice(0,20)+"...")+" ")])],1):r("a-tag",{key:e,attrs:{closable:0!==a},on:{close:function(){return t.handleClose(e)}}},[t._v(" "+t._s(e)+" ")])]})),t.inputVisible?r("a-input",{ref:"input",style:{width:"78px"},attrs:{type:"text",size:"small",value:t.inputValue},on:{change:t.handleInputChange,blur:t.handleInputConfirm,keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleInputConfirm(e)}}}):r("a-tag",{staticStyle:{background:"#fff",borderStyle:"dashed"},on:{click:t.showInput}},[r("a-icon",{attrs:{type:"plus"}}),t._v(" New Tag ")],1)],2)]):t._e()],1)],1)],1):t._e(),3===t.current?r("div",[r("a-row",{staticStyle:{width:"70%",margin:"0 auto"}},[r("a-col",{staticClass:"stepcard",attrs:{span:"24"}},[r("div",{staticStyle:{"text-align":"center"}},[r("p",{staticStyle:{"font-family":"sofia_problack","font-size":"1rem"}},[t._v("Team composition")])]),r("a-row",[r("a-col",{attrs:{span:"10"}},[r("div",{staticStyle:{"text-align":"center"}},[r("img",{staticStyle:{width:"30%"},attrs:{src:a("d0c0")}}),r("p",[t._v("Single developer to handle both the design and development")]),r("a-checkbox",{on:{change:function(e){return t.teampick(1)}},model:{value:t.one,callback:function(e){t.one=e},expression:"one"}},[t._v(" pick ")])],1)]),r("a-col",{attrs:{span:"2"}},[r("p",{staticStyle:{"text-align":"center"}},[t._v("or")])]),r("a-col",{attrs:{span:"10"}},[r("div",{staticStyle:{"text-align":"center"}},[r("img",{staticStyle:{width:"30%"},attrs:{src:a("d0c0")}}),r("span",{staticStyle:{"font-family":"sofia_probold"}},[t._v("&")]),r("img",{staticStyle:{width:"30%"},attrs:{src:a("df12")}}),r("p",[t._v("I want a designer for the UI/UX stage and a developer to implement")]),r("a-checkbox",{on:{change:function(e){return t.teampick(2)}},model:{value:t.both,callback:function(e){t.both=e},expression:"both"}},[t._v(" pick ")])],1)])],1)],1)],1)],1):t._e(),4===t.current?r("div",[r("a-row",{staticStyle:{width:"70%",margin:"0 auto"}},[r("a-col",{staticClass:"stepcard",attrs:{span:"24"}},[r("div",{staticStyle:{"text-align":"center"}},[r("img",{staticStyle:{width:"10%"},attrs:{src:a("9c9b")}}),r("p",{staticStyle:{"font-family":"sofia_problack"}},[t._v(" Time and budget fot the project")])]),r("a-form-model",{attrs:{"label-col":t.labelCol,"wrapper-col":t.wrapperCol}},[r("a-form-model-item",{attrs:{label:"Project budget"}},[r("a-input-number",{staticStyle:{width:"100%"},attrs:{"default-value":1e3,formatter:function(t){return("$ "+t).replace(/\B(?=(\d{3})+(?!\d))/g,",")},parser:function(t){return t.replace(/\$\s?|(,*)/g,"")}},model:{value:t.budget,callback:function(e){t.budget=e},expression:"budget"}})],1),"both"===t.teamcompostion?r("a-form-model-item",{attrs:{label:"Designer budget(how much of the budget above should be for the designer)"}},[r("a-input-number",{staticStyle:{width:"100%"},attrs:{"default-value":500,formatter:function(t){return("$ "+t).replace(/\B(?=(\d{3})+(?!\d))/g,",")},parser:function(t){return t.replace(/\$\s?|(,*)/g,"")}},model:{value:t.designbudget,callback:function(e){t.designbudget=e},expression:"designbudget"}})],1):t._e(),r("a-form-model-item",{attrs:{label:"Project timeline(weeks,months,days)"}},[r("a-input",{model:{value:t.time,callback:function(e){t.time=e},expression:"time"}})],1)],1)],1)],1)],1):t._e(),5===t.current?r("div",[r("a-row",{staticStyle:{width:"50%",margin:"0 auto"}},[r("a-col",{staticClass:"stepcard",attrs:{span:"24"}},[r("div",{staticStyle:{"text-align":"center"}},[r("img",{staticStyle:{width:"30%"},attrs:{src:a("46d6")}}),r("p",{staticStyle:{"font-family":"sofia_problack"}},[t._v("Escrow Stage 1")]),r("p",[t._v("A 40 % escrow is needed to be deposited .This is to serve more as a commitment fee towards your project. Amount is held in escrow ")]),r("p",[t._v("A second escrow on the remaining amount will happen when you contract a developer ")]),r("p",{staticStyle:{"font-family":"sofia_probold"}},[t._v("Amount Payable :$ "+t._s(t.deposit))]),r("paystack",{attrs:{amount:100*t.deposit,email:t.email,paystackkey:t.paystackkey,currency:t.currency,reference:t.reference,callback:t.callback,close:t.close,embed:!1}},[r("i",{staticClass:"fas fa-money-bill-alt"}),t._v(" Make Payment ")])],1)])],1)],1):t._e(),r("div",{staticStyle:{"text-align":"center"}},[r("div",{staticClass:"steps-action",staticStyle:{margin:"2% auto"}},[t.current<t.steps.length-1?r("a-button",{attrs:{type:"primary"},on:{click:t.next}},[t._v(" Next ")]):t._e(),t.current==t.steps.length-1?r("a-button",{attrs:{type:"primary"},on:{click:t.Done}},[t._v(" Done ")]):t._e(),t.current>0?r("a-button",{staticStyle:{"margin-left":"8px"},on:{click:t.prev}},[t._v(" Previous ")]):t._e()],1)])])])])]),r("a-col",{attrs:{span:"4"}},[r("div",{staticClass:"timelinecard"},[r("p",{staticStyle:{"font-family":"sofia_probold","font-size":"1.5rem"}},[t._v("Project development timeline")]),r("a-timeline",[r("a-timeline-item",[t._v("creation")]),r("a-timeline-item",[t._v("Team selection")]),r("a-timeline-item",[t._v("Budget allocation")]),r("a-timeline-item",[t._v("first escrow")]),r("a-timeline-item",[t._v("Accept bids/shortlist and Pick bid")]),r("a-timeline-item",[t._v("Contract creation - terms and feature discussions")]),r("a-timeline-item",[t._v("Second escrow")]),r("a-timeline-item",[t._v("UI/UX stage - wireframes and Ui designs ")]),r("a-timeline-item",[t._v("Development-software development OF feature based on UI/UX")])],1)],1)])],1)],1)],1)],1)],1)},n=[],i=(a("99af"),a("4de4"),a("caad"),a("c975"),a("a434"),a("2532"),a("2909")),o=a("2ada"),s=a("1c82"),c=a.n(s),l={name:"CreateProject",data:function(){return{current:0,steps:[{title:"Project details"},{title:"Features"},{title:"Tech"},{title:"Team"},{title:"Budget and Time"},{title:"First Escrow"}],labelCol:{span:24},wrapperCol:{span:24},projecttitle:"",projectdescription:"",stories:[],features:[],show:!1,featuretitle:"",featureedit:!1,featureindex:"",projecttypetags:[],selectedTags:[],tags:[],inputVisible:!1,inputValue:"",projectype:null,time:"",budget:0,designbudget:0,paystackkey:"pk_live_33025d4840017202a65e05c8ba2d2e907aae7cf9",email:"robertruhiu@gmail.com",amount:100,paystack_amount:0,currency:"USD",teamcompostion:"",one:!1,both:!1}},components:{ClientSider:o["a"],paystack:c.a},computed:{deposit:function(){return.4*this.budget}},methods:{next:function(){this.current++},prev:function(){this.current--},addstory:function(){this.stories.push({story:""})},deleteStory:function(t){this.stories.splice(t,1)},addFeature:function(){this.features.push({title:this.featuretitle,storylist:this.stories}),this.featuretitle="",this.stories=[]},editfeature:function(t){this.featureedit=!0,this.featureindex=this.features.indexOf(t),this.featuretitle=this.features[this.featureindex].title,this.stories=this.features[this.featureindex].storylist},editfeaturesubmit:function(){this.features[this.featureindex]={title:this.featuretitle,storylist:this.stories},this.featureedit=!1,this.featuretitle="",this.stories=[]},handleChange:function(t,e){var a=this.selectedTags,r=e?[].concat(Object(i["a"])(a),[t]):a.filter((function(e){return e!==t}));this.selectedTags=r},handleClose:function(t){var e=this.tags.filter((function(e){return e!==t}));this.tags=e},showInput:function(){this.inputVisible=!0,this.$nextTick((function(){this.$refs.input.focus()}))},handleInputChange:function(t){this.inputValue=t.target.value},handleInputConfirm:function(){var t=this.inputValue,e=this.tags;t&&-1===e.indexOf(t)&&(e=[].concat(Object(i["a"])(e),[t])),Object.assign(this,{tags:e,inputVisible:!1,inputValue:""})},selectprojectype:function(t){this.projectype=t;var e=["kotlin","java"],a=["go","java"],r=["react","laravel"],n=["electron","c#"],i=["kotlin","java","go","java","react","laravel","electron","c#"];t.length>1?this.projecttypetags=i:t.includes("ios")?this.projecttypetags=a:t.includes("website")?this.projecttypetags=r:t.includes("desktop")?this.projecttypetags=n:t.includes("android")&&(this.projecttypetags=e)},teampick:function(t){1===t?(this.one=!0,this.both=!1,this.teamcompostion="one"):(this.one=!1,this.both=!0,this.teamcompostion="both")},Done:function(){this.$router.push("Myprojects")}}},u=l,d=(a("0152"),a("2877")),p=Object(d["a"])(u,r,n,!1,null,"5bc4345a",null);e["default"]=p.exports},bbe3:function(t,e,a){},c975:function(t,e,a){"use strict";var r=a("23e7"),n=a("4d64").indexOf,i=a("a640"),o=a("ae40"),s=[].indexOf,c=!!s&&1/[1].indexOf(1,-0)<0,l=i("indexOf"),u=o("indexOf",{ACCESSORS:!0,1:0});r({target:"Array",proto:!0,forced:c||!l||!u},{indexOf:function(t){return c?s.apply(this,arguments)||0:n(this,t,arguments.length>1?arguments[1]:void 0)}})},caad:function(t,e,a){"use strict";var r=a("23e7"),n=a("4d64").includes,i=a("44d2"),o=a("ae40"),s=o("indexOf",{ACCESSORS:!0,1:0});r({target:"Array",proto:!0,forced:!s},{includes:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),i("includes")},d0c0:function(t,e,a){t.exports=a.p+"img/worker.709e2eec.svg"},df12:function(t,e,a){t.exports=a.p+"img/graphic.2ef5cc13.svg"},e3ea:function(t,e,a){t.exports=a.p+"img/createproject.d1e6a2de.svg"},e672:function(t,e,a){},fff3:function(t,e,a){t.exports=a.p+"img/new.b8dea47a.svg"}}]);
//# sourceMappingURL=chunk-58223b10.75601e54.js.map