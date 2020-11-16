<template>
  <a-layout  style="min-height: 100vh;background-color: #F4F7FC;margin-left: 200px">


    <AdminSider/>

    <a-layout style="background-color: #F4F7FC">

      <a-layout-content
          :style="{  padding: '1% 2%', background: '#FAFBFF', minHeight: '280px', }"

      >
        <a-card class="hellocard">

          <a-row>
            <a-col span="12">
              <a-breadcrumb>
                <a-breadcrumb-item><a @click="$router.push('/Admindashboard')">Home</a></a-breadcrumb-item>
                <a-breadcrumb-item><a @click="$router.push('/AdminProjects')">All projects</a></a-breadcrumb-item>
                <a-breadcrumb-item><a @click="$router.push('/AdminCreateEditProject')" >Admin Create/edit projects</a></a-breadcrumb-item>

              </a-breadcrumb>
              <span style="font-size: 1.7rem;font-family: sofia_prosemibold;margin-bottom: 0;color: black">
                Admin: Create/Edit Project</span>
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
                              <vue-simplemde v-model="project.description" ref="markdownEditor" @change="step1changedescription"/>

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
                                  :default-value="projectype"


                                  style="width: 100%"
                                  placeholder="Please select project type"
                                  @change="selectprojectype"
                              >
                                <a-select-option value="website">
                                  Website
                                </a-select-option>
                                <a-select-option value="android-App">
                                  Android app
                                </a-select-option>
                                <a-select-option value="ios-App">
                                  Ios app
                                </a-select-option>


                                <a-select-option value="desktop-App">
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
                    <div v-if="current===2">
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
                    <div v-if="current===3">
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
                            <a-form-model-item v-if="teamcompostion==='both'"
                                               label="Designer budget(how much of the budget above should be for the designer)">
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
                            <a-form-model-item label="Project timeline in days">
                              <a-input type="Number" v-model="project.time" :min="0" addon-after="days"/>


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

                    <div v-if="current===4">
                      <a-row style="width: 50%;margin: 0 auto">
                        <a-col span="24" class="stepcard">
                          <div style="text-align: center">
                            <img src="@/assets/images/pay.svg" style="width: 30%"/>
                            <p style="font-family: sofia_problack">Escrow Stage 1</p>

                            <p>A 40 % escrow is needed to be deposited .This is to serve more as a commitment fee
                              towards
                              your project.
                              Amount is held in escrow
                            </p>
                            <p>A second escrow on the remaining amount will happen when you contract a developer </p>
                            <p style="font-family: sofia_probold">Amount Payable :$ {{ deposit }}</p>
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
                        <div v-if="loading">
                          <a-spin/>

                        </div>
                        <div v-else>
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

              </div>
            </a-col>
            <a-col span="4">


              <div class="timelinecard" style="margin-bottom: 1rem" v-if="project.budget >0">
                <p style="font-family: sofia_probold;font-size: 1.5rem">Finished editing</p>
                <p>Finished editing and want to exit back to projects</p>
                <a-button type="primary" @click="$router.push({ name: 'AdminProjects' })">Go back</a-button>
              </div>
              <div class="timelinecard" v-if="project.stage ==='bid'">
                <p style="font-family: sofia_probold;font-size: 1.5rem">Verify or unverify project</p>
                <p>Are you satistfied with the current project inputs</p>
                <a-button style="background-color: #52c41a;color: white" @click="verifyproject(project.id)" v-if="!project.verified">Verify</a-button>
                <a-button type="danger" v-else @click="removeverifyproject(project.id)">Remove verification</a-button>
              </div>


            </a-col>
          </a-row>


        </div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import AdminSider from '@/components/admin/layout/Adminsider'
import paystack from 'vue-paystack';
import Project from '@/services/Projects'
import VueSimplemde from 'vue-simplemde'
import 'simplemde/dist/simplemde.min.css';
export default {
name: "AdminCreateProject",
  data() {
    return {
      current: 0,
      steps: [
        {
          title: 'Project details',

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
      project: {'tools': []},
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
      designbudget: 0,
      paystackkey: "pk_live_33025d4840017202a65e05c8ba2d2e907aae7cf9", //paystack public key
      email: "robertruhiu@gmail.com",
      amount: 100,
      paystack_amount: 0,
      currency: "USD",
      teamcompostion: '',
      one: false,
      both: false,
      step1errors: [],
      featureserror: false,
      notoolserror: false,
      featuretitleerror: false,
      step4errors: [],
      loading: false,
      featureslist: [],
      storylist: [],
      feature_id: null,
      story_id: null,
      currentfeature: null


    };
  },
  components: {
    AdminSider,paystack,VueSimplemde


  },
  async mounted(){
    this.currentProject()

  },
  computed: {
    deposit() {
      return 0.4 * this.project.budget
    },



    Time() {
      return this.project.timeline.split(" ")
    },

    Toolscombine() {
      let tools = []
      tools = this.tags.concat(this.selectedTags).join()

      return tools
    }
  },
  methods: {
    slugifytitle(value) {
      return value
          .toString()
          .trim()
          .toLowerCase()
          .replace(/\s+/g, "-")
          .replace(/[^\w-]+/g, "")
          .replace(/--+/g, "-")
          .replace(/^-+/, "")
          .replace(/-+$/, "");


    },

    currentProject() {
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }
      this.features = []
      Project.getproject(this.$store.state.project_id, auth)
          .then(
              resp => {
                this.project = resp.data
                this.selectedTags = []
                let time = this.project.timeline.split(" ")
                this.project.time = Number(time[0])

                this.tags = []
                if (this.project.stage === 'escrow1') {
                  this.current = 5
                }
                if (this.project.tools) {
                  this.projectype = this.project.project_type
                  this.selectprojectype(this.projectype)
                  let tools = this.project.tools.split(',')
                  this.projecttypetags.forEach(tag => {
                    if (tools.includes(tag)) {

                      this.selectedTags.push(tag)
                      const index = tools.indexOf(tag);
                      if (index > -1) {
                        tools.splice(index, 1);
                      }
                      this.tags = tools

                    }
                  })
                }
                if (this.project.team_size === 'single_dev') {
                  this.teampick(1)

                } else if (this.project.team_size === 'team') {
                  this.teampick(2)

                }


                Project.getfeatures(this.project.id, auth)
                    .then(resp => {

                          // eslint-disable-next-line no-unused-vars


                          this.featureslist = resp.data
                          this.featureslist.forEach(feature => {

                            Project.getstories(feature.id, auth).then(
                                resp => {
                                  this.storylist = resp.data


                                  this.features.push({'id': feature.id, 'title': feature.name, 'storylist': this.storylist})
                                }
                            )
                          })


                        }
                    )

              }
          )

    },

    addstory() {
      this.stories.push({
        story: '',

      })

    },

    deleteStory(counter) {
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }


      if (this.stories[counter].id) {
        Project.deletestories(this.stories[counter].id, auth)
            .then(() => {

                }
            )
        this.stories.splice(counter, 1);

      } else {
        this.stories.splice(counter, 1);
      }
      let self = this
      self.currentProject()


    },

    addFeature() {

      if (this.featuretitle === '') {
        this.featuretitleerror = true
      }

      if (this.featuretitleerror === false) {
        const auth = {
          headers: {Authorization: 'JWT ' + this.$store.state.token}

        }
        let feature = {
          name: this.featuretitle,
          project: this.project.id,
          slug: this.slugifytitle(this.featuretitle)
        }

        Project.createfeature(feature, auth)
            .then(
                resp => {
                  if (this.stories.length > 0) {
                    this.stories.forEach(story => {

                      Project.createstories({feature: resp.data.id, user_story: story.user_story}, auth)
                      this.featuretitle = ''
                      this.stories = []
                      this.featureserror = false
                      let self = this
                      self.currentProject()


                    })
                  } else {
                    this.featuretitle = ''
                    this.stories = []
                    this.featureserror = false
                    self.currentProject()

                  }


                }
            )


      }


    },

    editfeature(feature) {
      this.currentfeature = feature
      this.featureedit = true
      this.featureindex = this.features.indexOf(feature)
      this.featuretitle = this.features[this.featureindex].title
      this.stories = this.features[this.featureindex].storylist
      this.feature_id = this.features[this.featureindex].id


    },

    editfeaturesubmit() {
      if (this.featuretitle === '') {
        this.featuretitleerror = true
      }
      if (this.featuretitleerror === false) {
        const auth = {
          headers: {Authorization: 'JWT ' + this.$store.state.token}

        }
        this.features[this.featureindex] = {'title': this.featuretitle, 'storylist': this.stories}
        Project.updatefeature(this.feature_id, {
          name: this.featuretitle,
          slug: this.slugifytitle(this.featuretitle)
        }, auth)
            .then(() => {
                  if (this.stories.length > 0) {
                    console.log(this.stories)
                    this.stories.forEach(story => {
                      if (story.id) {
                        Project.updatestories(story.id, {user_story: story.user_story}, auth)
                            .then(

                            )

                      } else {
                        Project.createstories({feature: this.feature_id, user_story: story.user_story}, auth)
                            .then()

                      }

                    })

                  }
                  this.featureedit = false
                  this.featuretitle = ''
                  this.stories = []
                  let self = this
                  self.currentProject()


                }
            )

      }


    },

    featuredelete() {

      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }

      let current = this.features[this.featureindex]
      if (current.storylist.length > 0) {
        current.storylist.forEach(story => {
          if (story.id) {
            Project.deletestories(story.id, auth)
                .then(() => {

                    }
                )

          }


        })

      }
      Project.deletefeature(current.id, auth)
          .then(() => {


              }
          )
      this.featureedit = false
      this.currentfeature = null


      this.featuretitle = ''
      this.stories = []
      this.feature_id = null
      let self = this
      self.currentProject()


    },

    // for tags provided by codeln

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

    // for tags inputed by client

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


      if (value === 'ios-App') {
        this.projecttypetags = ios

      } else if (value === 'website') {
        this.projecttypetags = website

      } else if (value === 'desktop-App') {
        this.projecttypetags = desktop

      } else if (value === 'android-App') {
        this.projecttypetags = android
      }

    },

    teampick(value) {
      if (value === 1) {
        this.one = true
        this.both = false
        this.teamcompostion = 'one'

      } else {
        this.one = false
        this.both = true
        this.teamcompostion = 'both'
      }
      if (this.teamcompostion !== '') {
        this.compositionerror = false
      }

    },

    step1changetitle() {
      if (this.step1errors.includes('title')) {
        if (this.project.title !== '') {
          let index = this.step1errors.indexOf('title')
          if (index > -1) {
            this.step1errors.splice(index, 1);
          }
        }
      } else {
        if (this.project.title === '') {
          this.step1errors.push('title')
        }

      }
    },

    step1changedescription() {
      if (this.step1errors.includes('description')) {
        if (this.project.description !== '') {
          let index = this.step1errors.indexOf('description')
          if (index > -1) {
            this.step1errors.splice(index, 1);
          }
        }
      } else {
        if (this.project.description === '') {
          this.step1errors.push('description')
        }

      }
    },

    featuretitlechange() {
      if (this.featuretitle !== '') {
        this.featuretitleerror = false

      }

    },

    Budgetchanges() {

      if (this.step4errors.includes('budget')) {
        if (this.project.budget !== '' || this.project.budget != null) {
          let index = this.step4errors.indexOf('budget')
          if (index > -1) {
            this.step4errors.splice(index, 1);
          }
        }
      } else {
        if (this.project.budget === '' || this.project.budget === null) {
          this.step4errors.push('budget')
        }

      }


    },

    Designbudgetchanges() {

      if (this.step4errors.includes('designbudget')) {
        if (this.project.designbudget !== '' || this.project.designbudget != null) {
          let index = this.step4errors.indexOf('designbudget')
          if (index > -1) {
            this.step4errors.splice(index, 1);
          }
        }
      } else {
        if (this.project.designbudget === '' || this.project.designbudget === null) {
          this.step4errors.push('designbudget')
        }

      }


    },

    next() {
      let self = this
      if (this.current === 0) {
        this.step1errors = []
        if (this.project.title === '') {
          this.step1errors.push('title')

        }
        if (this.project.description === '') {
          this.step1errors.push('description')

        }


        if (this.step1errors.length === 0) {
          self.stepsaves()


        }


      } else if (this.current === 1) {

        if (this.features.length === 0) {
          this.featureserror = true
        }
        if (this.featureserror === false) {

          this.project.features = this.features
          this.current++;
        }
      } else if (this.current === 2) {
        if (this.project.tools) {
          self.stepsaves()
        } else {
          if (this.tags.length === 0 && this.selectedTags.length === 0) {
            this.notoolserror = true
          } else {

            self.stepsaves()

          }
        }


      }  else if (this.current === 3) {


        if (Number(this.project.time) === 0) {
          this.step4errors.push('time')
        }
        if (Number(this.project.budget) === 0) {
          this.step4errors.push('budget')
        }

        if (this.step4errors.length === 0) {
          this.project.stage = 'escrow1'

          this.project.timeline = this.project.time * 86400

          self.stepsaves()
        }
      }

    },

    prev() {
      this.current--;
    },

    Done() {
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }
      this.project.stage = 'bid'
      Project.updateproject(this.$store.state.project_id, this.project, auth)
          .then(() => {
                this.$router.push('AdminProjects')
                this.$store.dispatch('setProjectedit', null)

              }
          )

    },

    stepsaves() {
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }
      this.loading = true
      if (this.current === 0) {
        if (this.$store.state.project_id === null) {
          let step1 = {
            title: this.project.title,
            description: this.project.description,
            slug: this.slugifytitle(this.project.title),
            client: this.$store.state.user.pk,
            posted_by: this.$store.state.user.pk,
            stage: 'creation'


          }
          Project.createproject(step1, auth)
              .then(resp => {
                    this.$store.dispatch('setProject', resp.data.id)
                    this.project = resp.data
                    this.current++
                    this.loading = false
                  }
              )

        } else {
          this.project.slug = this.slugifytitle(this.project.title)



          Project.updateproject(this.$store.state.project_id, this.project, auth)
              .then(resp => {
                    this.project = resp.data
                    this.current++
                    let self = this
                    self.currentProject()
                    this.loading = false
                  }
              )

        }

      } else if (this.current === 2) {
        this.project.tools = this.Toolscombine
        this.project.project_type = this.projectype

        Project.updateproject(this.$store.state.project_id, this.project, auth)
            .then(resp => {
                  this.project = resp.data
                  this.current++
                  let self = this
                  self.currentProject()
                  this.loading = false

                }
            )

      } else if (this.current === 3) {


        Project.updateproject(this.$store.state.project_id, this.project, auth)
            .then(resp => {
                  this.project = resp.data
                  this.current++
                  let self = this
                  self.currentProject()
                  this.loading = false

                }
            )

      }


    },

    callback() {
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }
      Project.updateproject(this.$store.state.project_id, this.project, auth)
          .then(() => {
                this.$router.push('AdminProjects')
                this.$store.dispatch('setProject', null)

              }
          )

    },
    verifyproject(id) {
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }
      Project.updateproject(id, {verified:true}, auth)
          .then(
              ()=>{
                this.$message.success('Project has been verified');
                this.project.verified = true
              }
          )

    },
    removeverifyproject(id){
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }
      Project.updateproject(id, {verified:false}, auth)
          .then(
              ()=>{
                this.$message.info('Project verified status removed');
                this.project.verified = false
              }
          )

    }

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
