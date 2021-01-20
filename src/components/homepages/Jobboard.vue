<template>
  <a-layout :style="{background:'#fff'}">
    <pageheader></pageheader>

    <a-layout-content :style="{  marginTop: '6rem',minHeight:'100vh' }">

      <div style="">


        <div style="">
          <div v-if="fetchjobs">
            <a-row style="color: black">
              <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }" :md="{span: 20, offset: 2 }"
                     :lg="{span: 18, offset: 4 }" :xl="{span: 18, offset: 4 }">

            <a-skeleton active />

              </a-col>
            </a-row>
          </div>
          <div v-else>
          <div style="padding: 2% 5%" v-if="bidstageprojects.length>0">
            <a-row style="color: black">
              <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }" :md="{span: 20, offset: 2 }"
                     :lg="{span: 18, offset: 4 }" :xl="{span: 18, offset: 4 }">

                <div style=" ">

                  <a-list item-layout="vertical" size="large" :pagination="pagination" :data-source="Projects">

                    <a-list-item slot="renderItem" key="item.title" slot-scope="item" class="shadowsmall" style="background-color: #F1F3F9">

                      <template slot="actions">
                        <span>
                                <a-icon type="calendar" style="margin-right: 8px"/>
                                {{ item.time }} days
                              </span>
                        <span>
                                <a-icon type="banks" style="margin-right: 8px"/>
                                {{ item.budget }}$ budget
                              </span>
                        <span>
                                <a-icon type="banks" style="margin-right: 8px"/>
                          <a-tag v-for="tag in item.tools" color="blue"
                                 :key="tag">
                            {{ tag }}
                          </a-tag>

                              </span>
                        <a-space>

                          <span v-if="$store.state.user_object">
                          <span v-if="item.bid">
                            <a-tag color="green"><a-icon type="file-done"/>
                              bid placed
                            </a-tag>
                          </span>
                          <span v-else>
                                  <a-button type="primary" size="small"
                                            v-if="$store.state.user_object.user_type==='developer'"
                                            @click="Apply(item)">
                              Apply
                            </a-button>

                                </span>

                        </span>
                          <span v-else>
                          <a-button @click="$router.push('/Login')">
                              login to apply
                            </a-button>
                        </span>
                        </a-space>



                      </template>
                      <p style="font-family: sofia_probold"> {{ item.title }}</p>
                      <a-collapse >
                        <a-collapse-panel key="1" header="Project description.">
                          <markdown>{{ item.description }}</markdown>
                        </a-collapse-panel>
                      </a-collapse>


                    </a-list-item>
                  </a-list>


                </div>


              </a-col>



            </a-row>

          </div>
          <a-result status="404" title="" sub-title="Sorry, no new gigs available at the moment." v-else>

          </a-result>
          </div>
        </div>
        <!--        place bid modal -->
        <a-modal
            title="Apply for project"
            v-model="visible"
            style="top: 20px;"

        >
          <template slot="footer">
            <a-spin v-if="loading"/>

            <a-button v-else key="submit" type="primary" @click="SubmitApplication">
              Submit
            </a-button>
          </template>
          <div>
            <div style="margin-bottom: 1rem">
              <p>Project Proposal(why i should get project)1200 character limit</p>
              <a-textarea v-model="proposal" maxlength="1200" @change="Proposalchanges"


                          :auto-size="{ minRows: 5 }"
              />

            </div>


            <div style="margin-bottom: 1rem">
              <p>Tools i will use </p>
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

            <p>Time i will take in days({{ project.time }} days)</p>

            <div style="margin-bottom: 1rem">
              <a-input type="Number" @change="Timechanges" v-model="time" :min="0" addon-after="days"/>

            </div>
            <p>Budget:${{project.budget}}
              <span v-if="bidflag"
                    style="color: red">(bids are capped you can only go 10% lower than quoted by client )</span>
              <span v-else>(you can only go 10% lower than quoted by client  )</span>
            </p>
            <a-input type="number" @change="budgetflag" v-model="budget"/>


          </div>


        </a-modal>


      </div>
    </a-layout-content>
    <Footer/>
  </a-layout>

</template>

<script>
import Pageheader from '@/components/homepages/layout/Header.vue'
import Footer from '@/components/homepages/layout/Footer'
import Project from "@/services/Projects";
import markdown from 'vue-markdown'

class BidProjects {
  constructor(id, title, description, budget, time, tools, bid) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.budget = budget;
    this.time = time;
    this.tools = tools;
    this.bid = bid


  }
}

export default {
  name: "Jobboard",
  data() {
    return {

      pagination: {
        pageSize: 4,
      },
      visible: false,

      project: {},
      budget: 0,
      time: 0,
      proposal: '',
      tags: [],
      inputVisible: false,
      inputValue: '',
      bidflag: false,
      bidstageprojects: [],
      datetype: 'days',
      applicationerrors: [],
      loading: false,
      bids: [],
      fetchjobs:false

    }
  },
  components: {
    Pageheader, Footer, markdown


  },

  async mounted() {

    this.FetchProjects()


  },
  computed: {
    Projects() {
      let projects = []
      //replace this.listdata to this.bidstageprojects
      this.bidstageprojects.forEach(project => {
        let bid = false
        this.bids.forEach(bidplaced => {
          if (project.id === bidplaced.project.id) {
            bid = true
          }
        })
        let timestring = project.timeline.split(" ")

        let id = project.id
        let title = project.title
        let description = project.description
        let budget = project.budget
        let time = Number(timestring[0])
        let tools = project.tools.split(',')


        let oneproject = new BidProjects(id, title, description, budget, time, tools, bid)


        projects.push(oneproject)

      })


      return projects

    },

  },


  methods: {

    FetchProjects() {
      this.bidstageprojects = []
      this.fetchjobs = true
      Project.bidstageprojects()
          .then(resp => {

            resp.data.forEach(project => {
              if (project.verified && project.stage === 'bid') {
                this.bidstageprojects.push(project)
              }
            })
            if (this.$store.state.user && this.$store.state.user_object.user_type === 'developer') {
              this.DeveloperBids()

            }else {
              this.fetchjobs = false
            }


          })


    },
    DeveloperBids() {
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }
      Project.fetchadeveloperbids(this.$store.state.user.pk, auth).then(
          resp => {
            this.bids = resp.data
            this.fetchjobs = false



          }
      )

    },


    Apply(item) {

      if (item !== this.project) {
        this.budget = ''
        this.time = ''
        this.proposal = ''
        this.tags = []
        this.project = item


      }
      this.visible = true
    },
    budgetflag() {


      let bidbase = this.project.budget
      let lowest = (90 / 100) * bidbase
      this.bidflag = this.budget < lowest;


    },
    showInput() {
      this.inputVisible = true;
      this.$nextTick(function () {
        this.$refs.input.focus();
      });
    },
    handleClose(removedTag) {
      const tags = this.tags.filter(tag => tag !== removedTag);

      this.tags = tags;
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
      if (this.applicationerrors.includes('tags')) {
        if (this.tags.length > 0) {
          let index = this.applicationerrors.indexOf('tags')
          if (index > -1) {
            this.applicationerrors.splice(index, 1);
          }
        }
      } else {
        if (this.tags === []) {
          this.applicationerrors.push('tags')
        }

      }

    },
    SubmitApplication() {
      let bid = {
        proposal: this.proposal,
        tools: this.tags.join(),
        timeline: this.time * 86400,
        budget: this.budget,
        project: this.project.id,
        developer: this.$store.state.user.pk
      }

      if (this.proposal === '' || this.proposal === null) {
        this.applicationerrors.push('proposal')

      }
      if (this.tags.length === 0) {
        this.applicationerrors.push('tags')


      }
      if (this.time === '' || this.time === null) {
        this.applicationerrors.push('time')


      }
      if (this.budget === 0) {
        this.bidflag = true


      }
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }


      if (this.applicationerrors.length === 0 && this.bidflag === false) {
        this.loading = true
        Project.createbid(bid, auth)
            .then((resp) => {
                  this.FetchProjects()
                  this.project.bid = true
                  this.loading = false
                  this.visible = false
                  Project.newbidemail(resp.data.id, auth)

                }
            )

      }


    },
    Proposalchanges() {
      if (this.applicationerrors.includes('proposal')) {
        if (this.proposal !== '' || this.proposal != null) {
          let index = this.applicationerrors.indexOf('proposal')
          if (index > -1) {
            this.applicationerrors.splice(index, 1);
          }
        }
      } else {
        if (this.proposal === '' || this.proposal === null) {
          this.applicationerrors.push('proposal')
        }

      }


    },
    Timechanges() {

      if (this.applicationerrors.includes('time')) {
        if (this.time !== '' || this.time != null) {
          let index = this.applicationerrors.indexOf('time')
          if (index > -1) {
            this.applicationerrors.splice(index, 1);
          }
        }
      } else {
        if (this.time === '' || this.time === null) {
          this.applicationerrors.push('time')
        }

      }


    }

  }
}
</script>

<style scoped>




.shadowsmall {

  box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075) !important;
  background: white;
  border-radius: 0;
  border: 1px solid #e8e8e8;


  padding: 2%;
  margin-bottom: 1rem;
}
</style>
