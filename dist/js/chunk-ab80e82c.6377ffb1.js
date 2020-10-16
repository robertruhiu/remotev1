(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ab80e82c"],{2944:function(t,e,r){},"44cd":function(t,e,r){"use strict";r.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a-layout",{staticStyle:{"min-height":"100vh","background-color":"#F4F7FC","margin-left":"200px"}},[i("AdminSider"),i("a-layout",{staticStyle:{"background-color":"#F4F7FC"}},[i("a-layout-content",{style:{padding:"1% 2%",background:"#FAFBFF",minHeight:"280px"}},[i("a-card",{staticClass:"hellocard"},[i("a-row",[i("a-col",{attrs:{span:"12"}},[i("a-breadcrumb",[i("a-breadcrumb-item",[i("a",{on:{click:function(e){return t.$router.push("Admindashboard")}}},[t._v("Home")])]),i("a-breadcrumb-item",[i("a",{on:{click:function(e){return t.$router.push("AdminCreateEditProject")}}},[t._v("Admin Create/edit projects")])])],1),i("span",{staticStyle:{"font-size":"1.7rem","font-family":"sofia_prosemibold","margin-bottom":"0",color:"black"}},[t._v(" Admin: Create/Edit Project")])],1),i("a-col",{attrs:{span:"6"}},[i("div",{staticStyle:{"text-align":"center"}},[i("img",{staticStyle:{width:"20%"},attrs:{src:r("e3ea")}})])])],1)],1),i("div",{staticStyle:{"min-height":"40vh",position:"relative"}},[i("a-row",{attrs:{gutter:"16"}},[i("a-col",{attrs:{span:"20"}},[i("div",[i("div",{staticStyle:{width:"90%",margin:"0 auto"}},[i("a-steps",{attrs:{current:t.current}},t._l(t.steps,(function(t){return i("a-step",{key:t.title,attrs:{title:t.title}})})),1)],1),i("div",{staticStyle:{"margin-top":"2rem"}},[i("div",{staticStyle:{margin:"0 auto"}},[0===t.current?i("div",[i("a-row",{staticStyle:{width:"60%",margin:"0 auto"}},[i("a-col",{staticClass:"stepcard",attrs:{span:"24"}},[i("div",{staticStyle:{"text-align":"center"}},[i("img",{staticStyle:{width:"10%"},attrs:{src:r("fff3")}}),i("p",{staticStyle:{"font-family":"sofia_problack"}},[t._v("Express what you want")]),i("p",[t._v("Start a new project and write up the project features and the story under each.")])]),i("a-form-model",{attrs:{"label-col":t.labelCol,"wrapper-col":t.wrapperCol}},[i("a-form-model-item",{attrs:{label:"Project title"}},[i("a-input",{on:{change:t.step1changetitle},model:{value:t.project.title,callback:function(e){t.$set(t.project,"title",e)},expression:"project.title"}}),t._l(t.step1errors,(function(e){return i("div",{key:e},["title"===e?i("div",{staticStyle:{color:"red"}},[t._v(" required ")]):t._e()])}))],2),i("a-form-model-item",{attrs:{label:"Project description"}},[i("a-textarea",{attrs:{"auto-size":{minRows:3,maxRows:5}},on:{change:t.step1changedescription},model:{value:t.project.description,callback:function(e){t.$set(t.project,"description",e)},expression:"project.description"}}),t._l(t.step1errors,(function(e){return i("div",{key:e},["description"===e?i("div",{staticStyle:{color:"red"}},[t._v(" required ")]):t._e()])}))],2)],1)],1)],1)],1):t._e(),1===t.current?i("div",[i("a-row",{staticStyle:{width:"90%",margin:"0 auto"}},[i("a-col",{staticClass:"stepcard",attrs:{span:"24"}},[i("div",{staticStyle:{"text-align":"center"}},[i("img",{staticStyle:{width:"10%"},attrs:{src:r("7923")}}),i("p",{staticStyle:{"font-family":"sofia_problack"}},[t._v("Breakdown your project")]),i("p",[t._v("Express project features with a user story on interaction.You can have multiple Features just add and submit to continue adding more.These will serve as your milestones")])]),i("a-row",{attrs:{gutter:"16"}},[i("a-col",{attrs:{span:"12"}},[i("p",{staticStyle:{"font-family":"sofia_problack"}},[t._v("Feature list")]),t.featureserror?i("div",{staticStyle:{color:"red"}},[t._v(" required ")]):t._e(),0===t.features.length?i("div",[i("p",[t._v("Add feature"),i("span",{staticStyle:{float:"right"}},[i("a-icon",{attrs:{type:"arrow-right"}})],1)])]):i("div",{staticStyle:{"overflow-y":"scroll",height:"40vh"}},t._l(t.features,(function(e){return i("div",{key:e},[i("a-card",{staticStyle:{width:"80%","margin-bottom":"1rem"},attrs:{size:"small",title:e.title}},[i("a",{attrs:{slot:"extra"},on:{click:function(r){return t.editfeature(e)}},slot:"extra"},[t._v("edit feature")]),t._l(e.storylist,(function(e){return i("p",{key:e,staticStyle:{"font-family":"sofia_proregular"}},[t._v(" "+t._s(e.story)+" ")])}))],2)],1)})),0)]),i("a-col",{staticClass:"addfeature",attrs:{span:"12"}},[i("a-form",{attrs:{"label-col":{span:24},"wrapper-col":{span:24}},on:{submit:t.handleSubmit}},[i("a-form-item",{attrs:{label:"Feature name"}},[i("a-input",{attrs:{placeholder:"Registration"},on:{change:t.featuretitlechange},model:{value:t.featuretitle,callback:function(e){t.featuretitle=e},expression:"featuretitle"}}),t.featuretitleerror?i("div",{staticStyle:{color:"red"}},[t._v(" title required ")]):t._e()],1),i("p",{staticStyle:{"font-family":"sofia_proregular"}},[t._v("Feature user stories "),i("a-button",{staticStyle:{"margin-right":"1%"},attrs:{size:t.small},on:{click:t.addstory}},[t._v(" Add story ")])],1),i("p",{staticStyle:{"font-family":"sofia_proregular"}},[i("strong",[t._v("These provide context on what the feature is supposed to do.")]),t._v("Example:As a developer I want to be able to sign up and create a profile ")]),t._l(t.stories,(function(e,r){return i("div",{key:r},[i("a-form-item",[i("label",{attrs:{slot:"label"},slot:"label"},[t._v("Story"+t._s(r+1)+" "),i("span",{staticStyle:{float:"right"},on:{click:function(e){return t.deleteStory(r)}}},[i("a-icon",{attrs:{type:"close"}})],1)]),i("a-textarea",{attrs:{placeholder:"As a developer I want to be able to create a public profile on remote.codeln.com so that i can be attractive to project owners","auto-size":{minRows:2,maxRows:5}},model:{value:e.story,callback:function(r){t.$set(e,"story",r)},expression:"story.story"}})],1)],1)})),t.featureedit?i("a-button",{attrs:{type:"primary",size:t.small},on:{click:t.editfeaturesubmit}},[t._v(" Submit changes ")]):i("a-button",{attrs:{type:"primary",size:t.small},on:{click:t.addFeature}},[t._v(" Submit Feature ")])],2)],1)],1)],1)],1)],1):t._e(),2===t.current?i("div",[i("a-row",{staticStyle:{width:"70%",margin:"0 auto"}},[i("a-col",{staticClass:"stepcard",attrs:{span:"24"}},[i("div",{staticStyle:{"text-align":"center"}},[i("img",{staticStyle:{width:"10%"},attrs:{src:r("5cb9")}}),i("p",{staticStyle:{"font-family":"sofia_problack"}},[t._v("Which tools to be used")])]),i("a-form-model",{attrs:{"label-col":t.labelCol,"wrapper-col":t.wrapperCol}},[i("a-form-model-item",{attrs:{label:"Project type(you can pick than one type)"}},[t.notoolserror?i("div",{staticStyle:{color:"red"}},[t._v(" required ")]):t._e(),i("a-select",{staticStyle:{width:"100%"},attrs:{mode:"multiple",placeholder:"Please select project type"},on:{change:t.selectprojectype}},[i("a-select-option",{attrs:{value:"website"}},[t._v(" Website ")]),i("a-select-option",{attrs:{value:"android"}},[t._v(" Android app ")]),i("a-select-option",{attrs:{value:"ios"}},[t._v(" Ios app ")]),i("a-select-option",{attrs:{value:"desktop"}},[t._v(" Desktop application ")])],1)],1)],1),t.projectype?i("div",[i("div",[i("p",[t._v("Development tools types")]),t._l(t.projecttypetags,(function(e){return[i("a-checkable-tag",{key:e,attrs:{checked:t.selectedTags.indexOf(e)>-1},on:{change:function(r){return t.handleChange(e,r)}}},[t._v(" "+t._s(e)+" ")])]}))],2),i("div",{staticStyle:{"margin-top":"1rem"}},[i("p",[t._v("Add a custom framework or language")]),t._l(t.tags,(function(e,r){return[e.length>20?i("a-tooltip",{key:e,attrs:{title:e}},[i("a-tag",{key:e,attrs:{closable:0!==r},on:{close:function(){return t.handleClose(e)}}},[t._v(" "+t._s(e.slice(0,20)+"...")+" ")])],1):i("a-tag",{key:e,attrs:{closable:0!==r},on:{close:function(){return t.handleClose(e)}}},[t._v(" "+t._s(e)+" ")])]})),t.inputVisible?i("a-input",{ref:"input",style:{width:"78px"},attrs:{type:"text",size:"small",value:t.inputValue},on:{change:t.handleInputChange,blur:t.handleInputConfirm,keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleInputConfirm(e)}}}):i("a-tag",{staticStyle:{background:"#fff",borderStyle:"dashed"},on:{click:t.showInput}},[i("a-icon",{attrs:{type:"plus"}}),t._v(" New Tag ")],1)],2)]):t._e()],1)],1)],1):t._e(),3===t.current?i("div",[i("a-row",{staticStyle:{width:"70%",margin:"0 auto"}},[i("a-col",{staticClass:"stepcard",attrs:{span:"24"}},[i("div",{staticStyle:{"text-align":"center"}},[i("p",{staticStyle:{"font-family":"sofia_problack","font-size":"1rem"}},[t._v("Team composition")]),t.compositionerror?i("div",{staticStyle:{color:"red"}},[t._v(" please pick one that suites you ")]):t._e()]),i("a-row",[i("a-col",{attrs:{span:"10"}},[i("div",{staticStyle:{"text-align":"center"}},[i("img",{staticStyle:{width:"30%"},attrs:{src:r("d0c0")}}),i("p",[t._v("Single developer to handle both the design and development")]),i("a-checkbox",{on:{change:function(e){return t.teampick(1)}},model:{value:t.one,callback:function(e){t.one=e},expression:"one"}},[t._v(" pick ")])],1)]),i("a-col",{attrs:{span:"2"}},[i("p",{staticStyle:{"text-align":"center"}},[t._v("or")])]),i("a-col",{attrs:{span:"10"}},[i("div",{staticStyle:{"text-align":"center"}},[i("img",{staticStyle:{width:"30%"},attrs:{src:r("d0c0")}}),i("span",{staticStyle:{"font-family":"sofia_probold"}},[t._v("&")]),i("img",{staticStyle:{width:"30%"},attrs:{src:r("df12")}}),i("p",[t._v("I want a designer for the UI/UX stage and a developer to implement")]),i("a-checkbox",{on:{change:function(e){return t.teampick(2)}},model:{value:t.both,callback:function(e){t.both=e},expression:"both"}},[t._v(" pick ")])],1)])],1)],1)],1)],1):t._e(),4===t.current?i("div",[i("a-row",{staticStyle:{width:"70%",margin:"0 auto"}},[i("a-col",{staticClass:"stepcard",attrs:{span:"24"}},[i("div",{staticStyle:{"text-align":"center"}},[i("img",{staticStyle:{width:"10%"},attrs:{src:r("9c9b")}}),i("p",{staticStyle:{"font-family":"sofia_problack"}},[t._v(" Time and budget fot the project")])]),i("a-form-model",{attrs:{"label-col":t.labelCol,"wrapper-col":t.wrapperCol}},[i("a-form-model-item",{attrs:{label:"Project budget"}},[i("a-input-number",{staticStyle:{width:"100%"},attrs:{"default-value":1e3,formatter:function(t){return("$ "+t).replace(/\B(?=(\d{3})+(?!\d))/g,",")},parser:function(t){return t.replace(/\$\s?|(,*)/g,"")}},on:{change:t.Budgetchanges},model:{value:t.project.budget,callback:function(e){t.$set(t.project,"budget",e)},expression:"project.budget"}}),t._l(t.step4errors,(function(e){return i("div",{key:e},["budget"===e?i("div",[i("div",{staticStyle:{color:"red"}},[t._v("required")])]):t._e()])}))],2),"both"===t.teamcompostion?i("a-form-model-item",{attrs:{label:"Designer budget(how much of the budget above should be for the designer)"}},[i("a-input-number",{staticStyle:{width:"100%"},attrs:{"default-value":500,formatter:function(t){return("$ "+t).replace(/\B(?=(\d{3})+(?!\d))/g,",")},parser:function(t){return t.replace(/\$\s?|(,*)/g,"")}},on:{change:t.Designbudgetchanges},model:{value:t.project.designbudget,callback:function(e){t.$set(t.project,"designbudget",e)},expression:"project.designbudget"}}),t._l(t.step4errors,(function(e){return i("div",{key:e},["designbudget"===e?i("div",[i("div",{staticStyle:{color:"red"}},[t._v("required")])]):t._e()])}))],2):t._e(),i("a-form-model-item",{attrs:{label:"Project timeline(weeks,months,days)"}},[i("a-input",{attrs:{type:"number"},on:{change:t.Timechanges},model:{value:t.project.time,callback:function(e){t.$set(t.project,"time",e)},expression:"project.time"}},[i("a-select",{staticStyle:{width:"80px"},attrs:{slot:"addonAfter","default-value":"weeks"},slot:"addonAfter",model:{value:t.project.datetype,callback:function(e){t.$set(t.project,"datetype",e)},expression:"project.datetype"}},[i("a-select-option",{attrs:{value:"days"}},[t._v(" days ")]),i("a-select-option",{attrs:{value:"weeks"}},[t._v(" weeks ")]),i("a-select-option",{attrs:{value:"months"}},[t._v(" months ")])],1)],1),t._l(t.step4errors,(function(e){return i("div",{key:e},["time"===e?i("div",[i("div",{staticStyle:{color:"red"}},[t._v("required")])]):t._e()])}))],2)],1)],1)],1)],1):t._e(),i("div",{staticStyle:{"text-align":"center"}},[i("div",{staticClass:"steps-action",staticStyle:{margin:"2% auto"}},[t.current<t.steps.length-1?i("a-button",{attrs:{type:"primary"},on:{click:t.next}},[t._v(" Next ")]):t._e(),t.current==t.steps.length-1?i("a-button",{attrs:{type:"primary"},on:{click:t.Done}},[t._v(" Done ")]):t._e(),t.current>0?i("a-button",{staticStyle:{"margin-left":"8px"},on:{click:t.prev}},[t._v(" Previous ")]):t._e()],1)])])])])]),i("a-col",{attrs:{span:"4"}},[i("div",{staticClass:"timelinecard"},[i("p",{staticStyle:{"font-family":"sofia_probold","font-size":"1.5rem"}},[t._v("Project development timeline")]),i("a-timeline",[i("a-timeline-item",[t._v("creation")]),i("a-timeline-item",[t._v("Team selection")]),i("a-timeline-item",[t._v("Budget allocation")]),i("a-timeline-item",[t._v("first escrow")]),i("a-timeline-item",[t._v("Accept bids/shortlist and Pick bid")]),i("a-timeline-item",[t._v("Contract creation - terms and feature discussions")]),i("a-timeline-item",[t._v("Second escrow")]),i("a-timeline-item",[t._v("UI/UX stage - wireframes and Ui designs ")]),i("a-timeline-item",[t._v("Development-software development OF feature based on UI/UX")])],1)],1)])],1)],1)],1)],1)],1)},s=[],a=(r("a4d3"),r("e01a"),r("99af"),r("4de4"),r("caad"),r("c975"),r("a434"),r("a9e3"),r("2532"),r("2909")),o=(r("96cf"),r("1da1")),n=r("a319"),c={name:"AdminCreateProject",data:function(){return{current:0,steps:[{title:"Project details"},{title:"Features"},{title:"Tech"},{title:"Team"},{title:"Budget and Time"}],labelCol:{span:24},wrapperCol:{span:24},project:{title:"h",description:"i",features:"",tools:"",custom_tools:"",team:"",budget:0,time:0,datetype:"weeks",designbudget:"",stage:""},projecttitle:"",projectdescription:"",stories:[],features:[],show:!1,featuretitle:"",featureedit:!1,featureindex:"",projecttypetags:[],selectedTags:[],tags:[],inputVisible:!1,inputValue:"",projectype:null,time:"",budget:0,designbudget:0,paystackkey:"pk_live_33025d4840017202a65e05c8ba2d2e907aae7cf9",email:"robertruhiu@gmail.com",amount:100,paystack_amount:0,currency:"USD",teamcompostion:"",one:!1,both:!1,step1errors:[],featureserror:!1,compositionerror:!1,notoolserror:!1,featuretitleerror:!1,step4errors:[]}},components:{AdminSider:n["a"]},mounted:function(){return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},computed:{deposit:function(){return.4*this.budget}},methods:{addstory:function(){this.stories.push({story:""})},deleteStory:function(t){this.stories.splice(t,1)},addFeature:function(){""===this.featuretitle&&(this.featuretitleerror=!0),!1===this.featuretitleerror&&(this.features.push({title:this.featuretitle,storylist:this.stories}),this.featuretitle="",this.stories=[],this.featureserror=!1)},editfeature:function(t){this.featureedit=!0,this.featureindex=this.features.indexOf(t),this.featuretitle=this.features[this.featureindex].title,this.stories=this.features[this.featureindex].storylist},editfeaturesubmit:function(){""===this.featuretitle&&(this.featuretitleerror=!0),!1===this.featuretitleerror&&(this.features[this.featureindex]={title:this.featuretitle,storylist:this.stories},this.featureedit=!1,this.featuretitle="",this.stories=[])},handleChange:function(t,e){var r=this.selectedTags,i=e?[].concat(Object(a["a"])(r),[t]):r.filter((function(e){return e!==t}));this.selectedTags=i,this.notoolserror=!1},handleClose:function(t){var e=this.tags.filter((function(e){return e!==t}));this.tags=e},showInput:function(){this.inputVisible=!0,this.$nextTick((function(){this.$refs.input.focus()}))},handleInputChange:function(t){this.inputValue=t.target.value},handleInputConfirm:function(){var t=this.inputValue,e=this.tags;t&&-1===e.indexOf(t)&&(e=[].concat(Object(a["a"])(e),[t])),Object.assign(this,{tags:e,inputVisible:!1,inputValue:""}),this.notoolserror=!1},selectprojectype:function(t){this.projectype=t;var e=["kotlin","java"],r=["go","java"],i=["react","laravel"],s=["electron","c#"],a=["kotlin","java","go","java","react","laravel","electron","c#"];t.length>1?this.projecttypetags=a:t.includes("ios")?this.projecttypetags=r:t.includes("website")?this.projecttypetags=i:t.includes("desktop")?this.projecttypetags=s:t.includes("android")&&(this.projecttypetags=e)},teampick:function(t){1===t?(this.one=!0,this.both=!1,this.teamcompostion="one"):(this.one=!1,this.both=!0,this.teamcompostion="both"),""!==this.teamcompostion&&(this.compositionerror=!1)},Done:function(){this.$router.push("Myprojects")},step1changetitle:function(){if(this.step1errors.includes("title")){if(""!==this.project.title){var t=this.step1errors.indexOf("title");t>-1&&this.step1errors.splice(t,1)}}else""===this.project.title&&this.step1errors.push("title")},step1changedescription:function(){if(this.step1errors.includes("description")){if(""!==this.project.description){var t=this.step1errors.indexOf("description");t>-1&&this.step1errors.splice(t,1)}}else""===this.project.description&&this.step1errors.push("description")},featuretitlechange:function(){""!==this.featuretitle&&(this.featuretitleerror=!1)},Timechanges:function(){if(this.step4errors.includes("time")){if(""!==this.project.time||null!=this.project.time){var t=this.step4errors.indexOf("time");t>-1&&this.step4errors.splice(t,1)}}else""!==this.project.time&&null!==this.project.time||this.step4errors.push("time")},Budgetchanges:function(){if(this.step4errors.includes("budget")){if(""!==this.project.budget||null!=this.project.budget){var t=this.step4errors.indexOf("budget");t>-1&&this.step4errors.splice(t,1)}}else""!==this.project.budget&&null!==this.project.budget||this.step4errors.push("budget")},Designbudgetchanges:function(){if(this.step4errors.includes("designbudget")){if(""!==this.project.designbudget||null!=this.project.designbudget){var t=this.step4errors.indexOf("designbudget");t>-1&&this.step4errors.splice(t,1)}}else""!==this.project.designbudget&&null!==this.project.designbudget||this.step4errors.push("designbudget")},next:function(){0===this.current?(this.step1errors=[],""===this.project.title&&this.step1errors.push("title"),""===this.project.description&&this.step1errors.push("description"),0===this.step1errors.length&&this.current++):1===this.current?(0===this.features.length&&(this.featureserror=!0),!1===this.featureserror&&(this.project.features=this.features,this.current++)):2===this.current?0===this.tags.length&&0===this.selectedTags.length?this.notoolserror=!0:(this.tags.length>0&&(this.project.custom_tools=this.tags),this.selectedTags.length>0&&(this.project.tools=this.selectedTags),this.current++):3===this.current?(""===this.teamcompostion&&(this.compositionerror=!0),!1===this.compositionerror&&(this.project.team=this.teamcompostion,this.current++)):4===this.current&&(0===Number(this.project.time)&&this.step4errors.push("time"),0===Number(this.project.budget)&&this.step4errors.push("budget"),"both"===this.teamcompostion&&0===Number(this.project.designbudget)&&this.step4errors.push("designbudget"),0===this.step4errors.length&&(this.project.stage="escrow1",this.current++))},prev:function(){this.current--}}},l=c,u=(r("5ea2"),r("2877")),p=Object(u["a"])(l,i,s,!1,null,"ee6a2826",null);e["default"]=p.exports},"4de4":function(t,e,r){"use strict";var i=r("23e7"),s=r("b727").filter,a=r("1dde"),o=r("ae40"),n=a("filter"),c=o("filter");i({target:"Array",proto:!0,forced:!n||!c},{filter:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}})},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,r){var i=r("1d80"),s=r("5899"),a="["+s+"]",o=RegExp("^"+a+a+"*"),n=RegExp(a+a+"*$"),c=function(t){return function(e){var r=String(i(e));return 1&t&&(r=r.replace(o,"")),2&t&&(r=r.replace(n,"")),r}};t.exports={start:c(1),end:c(2),trim:c(3)}},"5cb9":function(t,e,r){t.exports=r.p+"img/coding.be420fb6.svg"},"5ea2":function(t,e,r){"use strict";var i=r("2944"),s=r.n(i);s.a},7156:function(t,e,r){var i=r("861d"),s=r("d2bb");t.exports=function(t,e,r){var a,o;return s&&"function"==typeof(a=e.constructor)&&a!==r&&i(o=a.prototype)&&o!==r.prototype&&s(t,o),t}},7923:function(t,e,r){t.exports=r.p+"img/feature.28a3e194.svg"},"9c9b":function(t,e,r){t.exports=r.p+"img/budget.ffa74e50.svg"},a319:function(t,e,r){"use strict";var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a-layout-sider",{staticStyle:{"box-shadow":"2px 0 6px rgba(0,21,41,.35)","background-color":"#F4F7FC",height:"available"},style:{overflow:"auto",height:"100vh",position:"fixed",left:0},attrs:{breakpoint:"lg","collapsed-width":"0"},on:{collapse:t.onCollapse,breakpoint:t.onBreakpoint}},[r("hide-at",{attrs:{breakpoints:{small:425,medium:768},breakpoint:"mediumAndBelow"}},[r("router-link",{attrs:{to:"/"}},[r("img",{staticStyle:{width:"9rem",height:"2rem","margin-top":"1rem","margin-bottom":"1rem","margin-left":"1rem"},style:t.logo,attrs:{src:t.defaultlogo}})])],1),r("a-menu",{staticStyle:{"font-family":"sofia_proregular","background-color":"#F4F7FC"},attrs:{mode:"inline","default-selected-keys":t.key}},[r("a-menu-item",{key:"9",on:{click:function(e){return t.$router.push("Admindashboard")}}},[r("a-icon",{attrs:{type:"dashboard"}}),r("span",[t._v("Home")])],1),r("a-menu-item",{key:"1",on:{click:function(e){return t.$router.push("AdminProjects")}}},[r("a-icon",{attrs:{type:"appstore"}}),r("span",[t._v("Manage Projects")])],1),r("a-menu-item",{key:"2",on:{click:t.newproject}},[r("a-icon",{attrs:{type:"plus"}}),r("span",[t._v("Create a Project")])],1),r("a-menu-item",{key:"3",on:{click:function(e){return t.$router.push("AdminEscrow")}}},[r("a-icon",{attrs:{type:"bank"}}),r("span",[t._v("Escrow Management")])],1),r("a-menu-item",{key:"4"},[r("a-icon",{attrs:{type:"calendar"}}),r("span",[t._v("My Meetings")])],1),r("a-menu-item",{key:"5",on:{click:function(e){return t.$router.push("AdminIssues")}}},[r("a-icon",{attrs:{type:"exclamation"}}),r("span",[t._v("Bugs & issues")])],1),r("a-menu-item",{key:"6"},[r("a-icon",{attrs:{type:"message"}}),r("span",[t._v("Chat")])],1),r("a-menu-item",{key:"7"},[r("a-icon",{attrs:{type:"solution"}}),r("span",[t._v("Edit Profile")])],1),r("a-menu-item",{key:"8"},[r("a-icon",{attrs:{type:"logout"}}),r("span",[t._v("logout")])],1)],1)],1)},s=[],a=r("8808"),o=r("b8fb"),n=r.n(o),c={name:"Adminsider",data:function(){return{collapsed:!1,defaultlogo:n.a,key:["9"],top:0}},components:{hideAt:a["hideAt"]},methods:{onCollapse:function(t,e){return e},onBreakpoint:function(t){return t},newproject:function(){this.$store.dispatch("setProject",null),this.$router.push({name:"AdminCreateEditProject"})}}},l=c,u=r("2877"),p=Object(u["a"])(l,i,s,!1,null,"772aba25",null);e["a"]=p.exports},a9e3:function(t,e,r){"use strict";var i=r("83ab"),s=r("da84"),a=r("94ca"),o=r("6eeb"),n=r("5135"),c=r("c6b6"),l=r("7156"),u=r("c04e"),p=r("d039"),d=r("7c73"),h=r("241c").f,f=r("06cf").f,m=r("9bf2").f,g=r("58a8").trim,v="Number",y=s[v],b=y.prototype,_=c(d(b))==v,k=function(t){var e,r,i,s,a,o,n,c,l=u(t,!1);if("string"==typeof l&&l.length>2)if(l=g(l),e=l.charCodeAt(0),43===e||45===e){if(r=l.charCodeAt(2),88===r||120===r)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:i=2,s=49;break;case 79:case 111:i=8,s=55;break;default:return+l}for(a=l.slice(2),o=a.length,n=0;n<o;n++)if(c=a.charCodeAt(n),c<48||c>s)return NaN;return parseInt(a,i)}return+l};if(a(v,!y(" 0o1")||!y("0b1")||y("+0x1"))){for(var j,w=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof w&&(_?p((function(){b.valueOf.call(r)})):c(r)!=v)?l(new y(k(e)),r,w):k(e)},S=i?h(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),x=0;S.length>x;x++)n(y,j=S[x])&&!n(w,j)&&m(w,j,f(y,j));w.prototype=b,b.constructor=w,o(s,v,w)}},d0c0:function(t,e,r){t.exports=r.p+"img/worker.709e2eec.svg"},df12:function(t,e,r){t.exports=r.p+"img/graphic.2ef5cc13.svg"},e3ea:function(t,e,r){t.exports=r.p+"img/createproject.d1e6a2de.svg"},fff3:function(t,e,r){t.exports=r.p+"img/new.b8dea47a.svg"}}]);
//# sourceMappingURL=chunk-ab80e82c.6377ffb1.js.map