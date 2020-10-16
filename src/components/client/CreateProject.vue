<template>
  <a-layout  style="min-height: 100vh;background-color: #F4F7FC;margin-left: 200px">


    <ClientSider/>

    <a-layout style="background-color: #F4F7FC">

      <a-layout-content
          :style="{  padding: '1% 2%', background: '#FAFBFF', minHeight: '280px', }"

      >
        <a-card class="hellocard">

          <a-row>
            <a-col span="12">
              <a-breadcrumb>
                <a-breadcrumb-item><a @click="$router.push('Dashboard')">Home</a></a-breadcrumb-item>
                <a-breadcrumb-item><a @click="$router.push('Create')" >Create projects</a></a-breadcrumb-item>

              </a-breadcrumb>
              <span style="font-size: 1.7rem;font-family: sofia_prosemibold;margin-bottom: 0;color: black">
                Create Project</span>
            </a-col>
            <a-col span="6">
              <div style="text-align: center">
                <img src="@/assets/images/createproject.svg" style="width: 20%"/>
              </div>


            </a-col>
          </a-row>


        </a-card>


        <div style="min-height: 40vh ;position: relative">
          <a-row gutter="16">
            <a-col span="20">
              <div>
                <div style="width: 90%;margin: 0 auto">
                  <a-steps :current="current" style="">
                    <a-step v-for="item in steps" :key="item.title" :title="item.title"/>
                  </a-steps>
                </div>


                <div style="margin-top: 2rem">
                  <div style="margin: 0 auto">
                    <div v-if="current===0">
                      <a-row style="width: 60%;margin: 0 auto">
                        <a-col span="24" class="stepcard">
                          <div style="text-align: center">
                            <img src="@/assets/images/new.svg" style="width: 10%"/>
                            <p style="font-family: sofia_problack">Express what you want</p>
                            <p>Start a new project and write up the project features and the story under each.</p>
                          </div>

                          <a-form-model :label-col="labelCol" :wrapper-col="wrapperCol">
                            <a-form-model-item label="Project title">
                              <a-input v-model="project.title" @change="step1changetitle"/>
                              <div v-for="error in step1errors" v-bind:key="error">
                                <div v-if="error === 'title'" style="color: red">
                                  required
                                </div>
                              </div>
                            </a-form-model-item>
                            <a-form-model-item label="Project description">
                              <a-textarea v-model="project.description" @change="step1changedescription"


                                          :auto-size="{ minRows: 3, maxRows: 5 }"
                              />
                              <div v-for="error in step1errors" v-bind:key="error">
                                <div v-if="error === 'description'" style="color: red">
                                  required
                                </div>
                              </div>

                            </a-form-model-item>


                          </a-form-model>

                        </a-col>

                      </a-row>

                    </div>

                    <div v-if="current===1">
                      <a-row style="width: 90%;margin: 0 auto">
                        <a-col span="24" class="stepcard">
                          <div style="text-align: center">
                            <img src="@/assets/images/feature.svg" style="width: 10%"/>
                            <p style="font-family: sofia_problack">Breakdown your project</p>
                            <p>Express project features with a user story on interaction.You can have multiple Features just
                              add and submit to continue adding more.These will serve as your milestones</p>
                          </div>
                          <a-row gutter="16">

                            <a-col span="12">
                              <p style="font-family: sofia_problack">Feature list</p>

                                <div v-if="featureserror" style="color: red">
                                  required
                                </div>


                              <div v-if="features.length===0">
                                <p>Add feature<span style="float: right"><a-icon type="arrow-right"/></span></p>
                              </div>
                              <div v-else style="overflow-y: scroll;height: 40vh">

                                <div v-for="feature in features" v-bind:key="feature">

                                  <a-card size="small" :title="feature.title" style="width: 80%;margin-bottom: 1rem">
                                    <a slot="extra" @click="editfeature(feature)">edit feature</a>
                                    <p style="font-family: sofia_proregular" v-for="story in feature.storylist"
                                       v-bind:key="story">
                                      {{ story.story }}
                                    </p>
                                  </a-card>

                                </div>
                              </div>


                            </a-col>
                            <a-col span="12" class="addfeature">
                              <a-form :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" @submit="handleSubmit">
                                <a-form-item label="Feature name">
                                  <a-input v-model="featuretitle" placeholder="Registration" @change="featuretitlechange"

                                  />
                                  <div v-if="featuretitleerror" style="color: red">
                                    title required
                                  </div>
                                </a-form-item>
                                <p style="font-family: sofia_proregular">Feature user stories
                                  <a-button @click="addstory" :size="small" style="margin-right: 1%">
                                    Add story
                                  </a-button>
                                </p>
                                <p style="font-family: sofia_proregular"><strong>These provide context on what the feature
                                  is supposed to do.</strong>Example:As a developer I want to be able to sign up and create
                                  a profile


                                <div
                                    v-for="(story, counter) in stories"
                                    v-bind:key="counter">


                                  <a-form-item>
                                    <label slot="label">Story{{ counter + 1 }} <span style="float: right"
                                                                                     @click="deleteStory(counter)"><a-icon
                                        type="close"/></span></label>

                                    <a-textarea v-model="story.story"
                                                placeholder="As a developer I want to be able to create a public profile on remote.codeln.com so that i can be attractive to project owners"
                                                :auto-size="{ minRows: 2, maxRows: 5 }"


                                    />

                                  </a-form-item>


                                </div>
                                <a-button v-if="featureedit" type="primary" @click="editfeaturesubmit" :size="small">
                                  Submit changes
                                </a-button>

                                <a-button v-else type="primary" @click="addFeature" :size="small">
                                  Submit Feature
                                </a-button>


                              </a-form>
                            </a-col>
                          </a-row>


                        </a-col>

                      </a-row>
                    </div>

                    <div v-if="current===2">
                      <a-row style="width: 70%;margin: 0 auto">
                        <a-col span="24" class="stepcard">
                          <div style="text-align: center">
                            <img src="@/assets/images/coding.svg" style="width: 10%"/>
                            <p style="font-family: sofia_problack">Which tools to be used</p>

                          </div>

                          <a-form-model :label-col="labelCol" :wrapper-col="wrapperCol">
                            <a-form-model-item label="Project type(you can pick than one type)">
                              <div v-if="notoolserror" style="color: red">
                                required
                              </div>


                              <a-select
                                  mode="multiple"

                                  style="width: 100%"
                                  placeholder="Please select project type"
                                  @change="selectprojectype"
                              >
                                <a-select-option value="website">
                                  Website
                                </a-select-option>
                                <a-select-option value="android">
                                  Android app
                                </a-select-option>
                                <a-select-option value="ios">
                                  Ios app
                                </a-select-option>


                                <a-select-option value="desktop">
                                  Desktop application
                                </a-select-option>
                              </a-select>

                            </a-form-model-item>


                          </a-form-model>
                          <div v-if="projectype">
                            <div>
                              <p>Development tools types</p>
                              <template v-for="tag in projecttypetags">
                                <a-checkable-tag
                                    :key="tag"
                                    :checked="selectedTags.indexOf(tag) > -1"
                                    @change="checked => handleChange(tag, checked)"
                                >
                                  {{ tag }}
                                </a-checkable-tag>
                              </template>

                            </div>

                            <div style="margin-top: 1rem">
                              <p>Add a custom framework or language</p>
                              <template v-for="(tag, index) in tags">
                                <a-tooltip v-if="tag.length > 20" :key="tag" :title="tag">
                                  <a-tag :key="tag" :closable="index !== 0" @close="() => handleClose(tag)">
                                    {{ `${tag.slice(0, 20)}...` }}
                                  </a-tag>
                                </a-tooltip>
                                <a-tag v-else :key="tag" :closable="index !== 0" @close="() => handleClose(tag)">
                                  {{ tag }}
                                </a-tag>
                              </template>
                              <a-input
                                  v-if="inputVisible"
                                  ref="input"
                                  type="text"
                                  size="small"
                                  :style="{ width: '78px' }"
                                  :value="inputValue"
                                  @change="handleInputChange"
                                  @blur="handleInputConfirm"
                                  @keyup.enter="handleInputConfirm"
                              />
                              <a-tag v-else style="background: #fff; borderStyle: dashed;" @click="showInput">
                                <a-icon type="plus"/>
                                New Tag
                              </a-tag>

                            </div>
                          </div>


                        </a-col>

                      </a-row>
                    </div>
                    <div v-if="current===3">
                      <a-row style="width: 70%;margin: 0 auto">
                        <a-col span="24" class="stepcard">
                          <div style="text-align: center">

                            <p style="font-family: sofia_problack;font-size: 1rem">Team composition</p>
                            <div v-if="compositionerror" style="color: red">
                              please pick one that suites you
                            </div>

                          </div>

                          <a-row>
                            <a-col span="10">
                              <div style="text-align: center">
                                <img src="@/assets/images/worker.svg" style="width: 30%"/>
                                <p>Single developer to handle both the design and development</p>
                                <a-checkbox v-model="one" @change="teampick(1)">
                                  pick
                                </a-checkbox>
                              </div>


                            </a-col>
                            <a-col span="2">
                              <p style="text-align: center">or</p>
                            </a-col>
                            <a-col span="10">
                              <div style="text-align: center">
                              <img src="@/assets/images/worker.svg" style="width: 30%"/>
                                <span style="font-family: sofia_probold">&</span>
                              <img src="@/assets/images/graphic.svg" style="width: 30%"/>
                                <p>I want a designer for the UI/UX stage and a developer to implement</p>
                                <a-checkbox v-model="both" @change="teampick(2)">
                                  pick
                                </a-checkbox>
                              </div>

                            </a-col>
                          </a-row>



                        </a-col>

                      </a-row>
                    </div>
                    <div v-if="current===4">
                      <a-row style="width: 70%;margin: 0 auto">
                        <a-col span="24" class="stepcard">
                          <div style="text-align: center">
                            <img src="@/assets/images/budget.svg" style="width: 10%"/>
                            <p style="font-family: sofia_problack"> Time and budget fot the project</p>


                          </div>
                          <a-form-model :label-col="labelCol" :wrapper-col="wrapperCol">
                            <a-form-model-item label="Project budget">
                              <a-input-number style="width: 100%"
                                              @change="Budgetchanges"
                                              v-model="project.budget"
                                              :default-value="1000"
                                              :formatter="value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
                                              :parser="value => value.replace(/\$\s?|(,*)/g, '')"

                              />
                              <div v-for="error in step4errors" v-bind:key="error">
                                <div v-if="error === 'budget'">
                                  <div style="color: red">required</div>
                                </div>
                              </div>

                            </a-form-model-item>
                            <a-form-model-item v-if="teamcompostion==='both'" label="Designer budget(how much of the budget above should be for the designer)">
                              <a-input-number style="width: 100%"
                                              v-model="project.designbudget"
                                              :default-value="500"
                                              @change="Designbudgetchanges"
                                              :formatter="value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
                                              :parser="value => value.replace(/\$\s?|(,*)/g, '')"

                              />
                              <div v-for="error in step4errors" v-bind:key="error">
                                <div v-if="error === 'designbudget'">
                                  <div style="color: red">required</div>
                                </div>
                              </div>

                            </a-form-model-item>
                            <a-form-model-item label="Project timeline(weeks,months,days)">
                              <a-input type="number" v-model="project.time" @change="Timechanges">

                                <a-select slot="addonAfter"  style="width: 80px" default-value="weeks" v-model="project.datetype">
                                  <a-select-option value="days">
                                    days
                                  </a-select-option>
                                  <a-select-option value="weeks">
                                    weeks
                                  </a-select-option>
                                  <a-select-option value="months">
                                    months
                                  </a-select-option>

                                </a-select>
                              </a-input>
                              <div v-for="error in step4errors" v-bind:key="error">
                                <div v-if="error === 'time'">
                                  <div style="color: red">required</div>
                                </div>
                              </div>

                            </a-form-model-item>


                          </a-form-model>


                        </a-col>

                      </a-row>
                    </div>

                    <div v-if="current===5">
                      <a-row style="width: 50%;margin: 0 auto">
                        <a-col span="24" class="stepcard">
                          <div style="text-align: center">
                            <img src="@/assets/images/pay.svg" style="width: 30%"/>
                            <p style="font-family: sofia_problack">Escrow Stage 1</p>

                            <p>A 40 % escrow is needed to be deposited .This is to serve more as a commitment fee towards
                              your project.
                              Amount is held in escrow
                            </p>
                            <p>A second  escrow on the remaining amount will happen when you contract a developer </p>
                            <p style="font-family: sofia_probold">Amount Payable :$ {{deposit}}</p>
                            <paystack
                                :amount="deposit*100"
                                :email="email"
                                :paystackkey="paystackkey"
                                :currency="currency"
                                :reference="reference"
                                :callback="callback"
                                :close="close"
                                :embed="false"
                            >
                              <i class="fas fa-money-bill-alt"></i>
                              Make Payment
                            </paystack>


                          </div>


                        </a-col>

                      </a-row>
                    </div>

                    <div style="text-align: center">
                      <div class="steps-action" style="margin: 2% auto">
                        <a-button v-if="current < steps.length - 1" type="primary" @click="next">
                          Next
                        </a-button>
                        <a-button
                            v-if="current == steps.length - 1"
                            type="primary"
                            @click="Done"
                        >
                          Done
                        </a-button>
                        <a-button v-if="current > 0" style="margin-left: 8px" @click="prev">
                          Previous
                        </a-button>
                      </div>
                    </div>


                  </div>

                </div>

              </div>
            </a-col>
            <a-col span="4">
              <div class="timelinecard">
                <p style="font-family: sofia_probold;font-size: 1.5rem">Project development timeline</p>
                <a-timeline>
                  <a-timeline-item>creation</a-timeline-item>
                  <a-timeline-item>Team selection</a-timeline-item>
                  <a-timeline-item>Budget allocation</a-timeline-item>
                  <a-timeline-item>first escrow</a-timeline-item>
                  <a-timeline-item>Accept bids/shortlist and Pick bid</a-timeline-item>
                  <a-timeline-item>Contract creation - terms and feature discussions</a-timeline-item>
                  <a-timeline-item>Second escrow</a-timeline-item>
                  <a-timeline-item>UI/UX stage - wireframes and Ui designs </a-timeline-item>
                  <a-timeline-item>Development-software development OF feature based on UI/UX</a-timeline-item>
                </a-timeline>
              </div>


            </a-col>
          </a-row>


        </div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import ClientSider from "@/components/client/layout/ClientSider";
import paystack from 'vue-paystack';


export default {
  name: "CreateProject",
  data() {
    return {
      current: 0,
      steps: [
        {
          title: 'Project details',

        },
        {
          title: 'Features',

        },
        {
          title: 'Tech',

        },
        {
          title: 'Team',

        },
        {
          title: 'Budget and Time',

        },
        {
          title: 'First Escrow',

        },
      ],
      labelCol: {span: 24},
      wrapperCol: {span: 24},
      project:{
        'title':'h',
        'description':'i',
        'features':'',
        'tools':'',
        'custom_tools':'',
        'team':'',
        'budget':0,
        'time':0,
        'datetype':'weeks',
        'designbudget':'',
        'stage':''
      },
      projecttitle: '',
      projectdescription: '',
      stories: [],
      features: [],
      show: false,
      featuretitle: '',
      featureedit: false,
      featureindex: '',
      projecttypetags: [],
      selectedTags: [],
      tags: [],
      inputVisible: false,
      inputValue: '',
      projectype: null,
      time: '',
      budget: 0,
      designbudget:0,
      paystackkey: "pk_live_33025d4840017202a65e05c8ba2d2e907aae7cf9", //paystack public key
      email: "robertruhiu@gmail.com",
      amount: 100,
      paystack_amount: 0,
      currency: "USD",
      teamcompostion:'',
      one:false,
      both:false,
      step1errors:[],
      featureserror:false,
      compositionerror:false,
      notoolserror:false,
      featuretitleerror:false,
      step4errors:[]


    };
  },
  components: {
    ClientSider,paystack


  },
  async mounted(){

  },
  computed:{
    deposit(){
      return 0.4*this.budget
    },
  },
  methods: {

    addstory() {
      this.stories.push({
        story: '',

      })

    },
    deleteStory(counter) {
      this.stories.splice(counter, 1);
    },
    addFeature() {

      if(this.featuretitle === ''){
        this.featuretitleerror = true
      }

      if(this.featuretitleerror === false){
        this.features.push({'title': this.featuretitle, 'storylist': this.stories})
        this.featuretitle = ''
        this.stories = []
        this.featureserror = false
      }



    },
    editfeature(feature) {
      this.featureedit = true
      this.featureindex = this.features.indexOf(feature)
      this.featuretitle = this.features[this.featureindex].title
      this.stories = this.features[this.featureindex].storylist


    },
    editfeaturesubmit() {
      if(this.featuretitle === ''){
        this.featuretitleerror = true
      }
      if(this.featuretitleerror === false){
        this.features[this.featureindex] = {'title': this.featuretitle, 'storylist': this.stories}
        this.featureedit = false
        this.featuretitle = ''
        this.stories = []
      }


    },
    handleChange(tag, checked) {
      const {selectedTags} = this;
      const nextSelectedTags = checked
          ? [...selectedTags, tag]
          : selectedTags.filter(t => t !== tag);

      this.selectedTags = nextSelectedTags;
      this.notoolserror = false
    },
    handleClose(removedTag) {
      const tags = this.tags.filter(tag => tag !== removedTag);

      this.tags = tags;
    },

    showInput() {
      this.inputVisible = true;
      this.$nextTick(function () {
        this.$refs.input.focus();
      });
    },

    handleInputChange(e) {
      this.inputValue = e.target.value;
    },

    handleInputConfirm() {
      const inputValue = this.inputValue;
      let tags = this.tags;
      if (inputValue && tags.indexOf(inputValue) === -1) {
        tags = [...tags, inputValue];
      }

      Object.assign(this, {
        tags,
        inputVisible: false,
        inputValue: '',
      });
      this.notoolserror = false
    },
    selectprojectype(value) {
      this.projectype = value
      let android = ['kotlin', 'java']
      let ios = ['go', 'java']
      let website = ['react', 'laravel']
      let desktop = ['electron', 'c#']
      let all = ['kotlin', 'java', 'go', 'java', 'react', 'laravel', 'electron', 'c#']

      if (value.length > 1) {
        this.projecttypetags = all

      } else if (value.includes('ios')) {
        this.projecttypetags = ios

      } else if (value.includes('website')) {
        this.projecttypetags = website

      } else if (value.includes('desktop')) {
        this.projecttypetags = desktop

      } else if (value.includes('android')) {
        this.projecttypetags = android
      }

    },
    teampick(value){
      if(value===1){
        this.one = true
        this.both = false
        this.teamcompostion='one'

      }else {
        this.one = false
        this.both = true
        this.teamcompostion = 'both'
      }
      if(this.teamcompostion !== ''){
        this.compositionerror = false
      }

    },
    Done(){
      this.$router.push('Myprojects')
    },
    step1changetitle(){
      if(this.step1errors.includes('title')){
        if(this.project.title !== ''){
          let index = this.step1errors.indexOf('title')
          if (index > -1) {
            this.step1errors.splice(index, 1);
          }
        }
      }else {
        if(this.project.title === ''){
          this.step1errors.push('title')
        }

      }
    },
    step1changedescription(){
      if(this.step1errors.includes('description')){
        if(this.project.description !== ''){
          let index = this.step1errors.indexOf('description')
          if (index > -1) {
            this.step1errors.splice(index, 1);
          }
        }
      }else {
        if(this.project.description === ''){
          this.step1errors.push('description')
        }

      }
    },
    featuretitlechange(){
      if(this.featuretitle !== ''){
        this.featuretitleerror = false

      }

    },
    Timechanges(){

      if(this.step4errors.includes('time')){
        if(this.project.time !== '' || this.project.time != null){
          let index = this.step4errors.indexOf('time')
          if (index > -1) {
            this.step4errors.splice(index, 1);
          }
        }
      }else {
        if(this.project.time === '' || this.project.time === null){
          this.step4errors.push('time')
        }

      }




    },
    Budgetchanges(){

      if(this.step4errors.includes('budget')){
        if(this.project.budget !== '' || this.project.budget != null){
          let index = this.step4errors.indexOf('budget')
          if (index > -1) {
            this.step4errors.splice(index, 1);
          }
        }
      }else {
        if(this.project.budget === '' || this.project.budget === null){
          this.step4errors.push('budget')
        }

      }




    },
    Designbudgetchanges(){

      if(this.step4errors.includes('designbudget')){
        if(this.project.designbudget !== '' || this.project.designbudget != null){
          let index = this.step4errors.indexOf('designbudget')
          if (index > -1) {
            this.step4errors.splice(index, 1);
          }
        }
      }else {
        if(this.project.designbudget === '' || this.project.designbudget === null){
          this.step4errors.push('designbudget')
        }

      }




    },
    next() {
      if (this.current === 0) {
        this.step1errors = []
        if (this.project.title  === '') {
          this.step1errors.push('title')

        }
        if (this.project.description === '') {
          this.step1errors.push('description')

        }


        if (this.step1errors.length === 0) {
          this.current++;


        }


      }else if (this.current === 1) {

        if (this.features.length === 0) {
          this.featureserror = true
        }
        if (this.featureserror === false) {

          this.project.features = this.features
          this.current++;
        }
      }
      else if (this.current === 2) {

        if (this.tags.length ===0 && this.selectedTags.length===0) {
          this.notoolserror = true
        }
        else{
          if(this.tags.length>0){
            this.project.custom_tools = this.tags
          }
          if(this.selectedTags.length>0){
            this.project.tools = this.selectedTags
          }
          this.current++;

        }
      }
      else if (this.current === 3) {

        if (this.teamcompostion === '') {
          this.compositionerror = true
        }
        if (this.compositionerror === false) {
          this.project.team = this.teamcompostion
          this.current++;
        }
      }
      else if (this.current === 4) {


        if (Number(this.project.time) === 0) {
          this.step4errors.push('time')
        }
        if (Number(this.project.budget) === 0) {
          this.step4errors.push('budget')
        }
        if(this.teamcompostion === 'both'){
          if (Number(this.project.designbudget) === 0) {
            this.step4errors.push('designbudget')
          }
        }
        if (this.step4errors.length === 0) {
          this.project.stage = 'escrow1'

          this.current++;
        }
      }

    },
    prev() {
      this.current--;
    },

  }

}
</script>

<style scoped>
.hellocard {

  box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075) !important;
  background: white;
  border-radius: 0;
  margin-bottom: 1rem;


}

.stepcard {
  padding: 2%;
  box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075) !important;
  background: white;
  border-radius: 0;

}
.timelinecard {
  padding: 3%;
  box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075) !important;
  background: white;
  border-radius: 0;

}

.addfeature {
  padding: 2%;
  box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075) !important;
  background: white;
  border-radius: 0;

}

.featurelist {
  padding: 2%;
  box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075) !important;
  background: white;
  border-radius: 0;

}


.steps-action {
  margin-top: 24px;
}
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #1890ff;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #91d5ff;
}
</style>
