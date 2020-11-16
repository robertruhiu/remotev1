<template>
  <a-layout style="min-height: 100vh;background-color: #F4F7FC;">


    <ClientSider/>

    <a-layout style="background-color: #F4F7FC">

      <a-layout-content
          :style="{  padding: '1% 2%', background: '#FAFBFF', minHeight: '280px', }"

      >
        <a-card class="hellocard">

          <a-row>
            <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
                   :md="{span: 12, offset: 0 }"
                   :lg="{span: 12, offset: 0 }" :xl="{span: 12,offset: 0 }">
              <a-breadcrumb>
                <a-breadcrumb-item><a @click="$router.push('/Dashboard')">Home</a></a-breadcrumb-item>
                <a-breadcrumb-item><a @click="$router.push('/Myprojects')">My projects</a></a-breadcrumb-item>
                <a-breadcrumb-item><a @click="$router.push('/Create')">Create/Edit project</a></a-breadcrumb-item>

              </a-breadcrumb>
              <span style="font-size: 1.7rem;font-family: sofia_prosemibold;margin-bottom: 0;color: black">
                Create Project</span>
            </a-col>

            <hide-at breakpoint="mediumAndBelow">
              <a-col :xs="{span: 12, offset: 0 }" :sm="{span: 12, offset: 0 }"
                     :md="{span: 12, offset: 0 }"
                     :lg="{span: 8, offset: 0 }" :xl="{span: 6,offset: 0 }">
                <div style="text-align: center">
                  <img src="@/assets/images/createproject.svg" style="width: 20%"/>
                </div>


              </a-col>
            </hide-at>
          </a-row>


        </a-card>


        <div style="min-height: 40vh ;position: relative">
          <a-row :gutter="gutter">
            <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
                   :md="{span: 24, offset: 0 }"
                   :lg="{span: 24, offset: 0 }" :xl="{span: 24,offset: 0 }">
              <div>
                <div style="width: 90%;margin: 0 auto">
                  <a-steps :current="current" style="">
                    <a-step v-for="item in steps" :key="item.title" :title="item.title"/>
                  </a-steps>
                </div>


                <div style="margin-top: 2rem">
                  <div style="margin: 0 auto">
                    <div v-if="current===0">
                      <a-row style="margin: 0 auto">
                        <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
                               :md="{span: 24, offset: 0 }"
                               :lg="{span: 24, offset: 0 }" :xl="{span: 16,offset: 4 }" class="stepcard">
                          <div style="text-align: center">

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
                      <a-row style="margin: 0 auto">
                        <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
                               :md="{span: 24, offset: 0 }"
                               :lg="{span: 24, offset: 0 }" :xl="{span: 16,offset: 4 }" class="stepcard">
                          <div style="text-align: center">

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
                      <a-row style="margin: 0 auto">
                        <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
                               :md="{span: 24, offset: 0 }"
                               :lg="{span: 24, offset: 0 }" :xl="{span: 16,offset: 4 }" class="stepcard">
                          <div style="text-align: center">

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

                    <div v-if="current===3">
                      <a-row style="margin: 0 auto">
                        <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
                               :md="{span: 24, offset: 0 }"
                               :lg="{span: 24, offset: 0 }" :xl="{span: 16,offset: 4 }" class="stepcard">
                          <div style="text-align: center">

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

          </a-row>

          <a-modal v-model="tips" title="Project development lifecycle" :footer="null">
            <div >

              <a-timeline>
                <a-timeline-item>creation</a-timeline-item>
                <a-timeline-item>Budget allocation</a-timeline-item>
                <a-timeline-item>first escrow</a-timeline-item>
                <a-timeline-item>Accept bids/shortlist and Pick bid</a-timeline-item>
                <a-timeline-item>Contract creation - terms and feature discussions</a-timeline-item>
                <a-timeline-item>Second escrow</a-timeline-item>
                <a-timeline-item>UI/UX stage - wireframes and Ui designs</a-timeline-item>
                <a-timeline-item>Development-software development OF feature based on UI/UX</a-timeline-item>
              </a-timeline>
            </div>
          </a-modal>


        </div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import ClientSider from "@/components/client/layout/ClientSider";
import paystack from 'vue-paystack';
import Project from '@/services/Projects'
import VueSimplemde from 'vue-simplemde'
import 'simplemde/dist/simplemde.min.css';
import { hideAt} from 'vue-breakpoints'
export default {
  name: "CreateProject",
  data() {
    return {
      gutter:16,
      current: 0,
      steps: [
        {
          title: 'Project details',

        },

        {
          title: 'Tech',

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
      show: false,
      projecttypetags: [],
      selectedTags: [],
      tags: [],
      inputVisible: false,
      inputValue: '',
      projectype: null,
      time: '',
      budget: 0,

      paystackkey: "", //paystack public key
      email: "",
      amount: 100,
      paystack_amount: 0,
      currency: "USD",
      step1errors: [],
      notoolserror: false,
      step4errors: [],
      loading: false,
      tips:true


    };
  },
  components: {
    ClientSider, paystack,VueSimplemde,hideAt


  },
  async mounted() {
    this.currentProject()
    this.email = this.$store.state.user.email
    this.paystackkey = process.env.VUE_APP_PAYSTACK


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
      if (this.$store.state.projectedit_id) {
        this.features = []
        Project.getproject(this.$store.state.projectedit_id, auth)
            .then(
                resp => {
                  this.project = resp.data
                  this.selectedTags = []
                  let time = this.project.timeline.split(" ")
                  this.project.time = Number(time[0])

                  this.tags = []

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


                }
            )


      }


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

      let android = process.env.VUE_APP_ANDROID

      let ios = process.env.VUE_APP_IOS
      let website = process.env.VUE_APP_WEBSITE
      let desktop = process.env.VUE_APP_DESKTOP


      if (value === 'ios-App') {
        this.projecttypetags = ios.split(',')

      } else if (value === 'website') {
        this.projecttypetags = website.split(',')

      } else if (value === 'desktop-App') {
        this.projecttypetags = desktop.split(',')

      } else if (value === 'android-App') {
        this.projecttypetags = android.split(',')
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
        if (this.project.tools) {
          self.stepsaves()
        } else {
          if (this.tags.length === 0 && this.selectedTags.length === 0) {
            this.notoolserror = true
          } else {

            self.stepsaves()

          }
        }


      }  else if (this.current === 2) {


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
      Project.updateproject(this.$store.state.projectedit_id, this.project, auth)
          .then(() => {
                this.$router.push('Myprojects')
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
        if (this.$store.state.projectedit_id === null) {
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
                    this.$store.dispatch('setProjectedit', resp.data.id)
                    this.project = resp.data
                    this.current++
                    this.loading = false
                  }
              )

        } else {
          this.project.slug = this.slugifytitle(this.project.title)



          Project.updateproject(this.$store.state.projectedit_id, this.project, auth)
              .then(resp => {
                    this.project = resp.data
                    this.current++
                    let self = this
                    self.currentProject()
                    this.loading = false
                  }
              )

        }

      } else if (this.current === 1) {
        this.project.tools = this.Toolscombine
        this.project.project_type = this.projectype

        Project.updateproject(this.$store.state.projectedit_id, this.project, auth)
            .then(resp => {
                  this.project = resp.data
                  this.current++
                  let self = this
                  self.currentProject()
                  this.loading = false

                }
            )

      }  else if (this.current === 2) {


        Project.updateproject(this.$store.state.projectedit_id, this.project, auth)
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
      Project.updateproject(this.$store.state.projectedit_id, this.project, auth)
          .then(() => {
                this.$router.push('Myprojects')
                this.$store.dispatch('setProjectedit', null)

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
