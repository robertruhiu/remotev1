<template>
  <a-layout style="min-height: 100vh;background-color: #F4F7FC">


    <DevSider/>

    <a-layout style="background-color: #F4F7FC">

      <a-layout-content
          :style="{  padding: '1% 2%', background: '#FAFBFF', minHeight: '280px', }"

      >
        <div>
          <a-card class="hellocard">

            <a-row>
              <a-col span="12">
                <a-breadcrumb>
                  <a-breadcrumb-item><a @click="$router.push('/Developer')" >Home</a></a-breadcrumb-item>
                  <a-breadcrumb-item><a @click="$router.push('/DeveloperProjects')" >My projects</a></a-breadcrumb-item>

                </a-breadcrumb>
                <span style="font-size: 1.7rem;font-family: sofia_prosemibold;margin-bottom: 0;color: black">
                My Projects</span>
              </a-col>

              <hide-at breakpoint="mediumAndBelow">
                <a-col :xs="{span: 12, offset: 0 }" :sm="{span: 12, offset: 0 }"
                       :md="{span: 12, offset: 0 }"
                       :lg="{span: 8, offset: 0 }" :xl="{span: 6,offset: 0 }">
                  <div style="text-align: center">
                    <img src="@/assets/images/planning.svg" style="width: 20%"/>
                  </div>


                </a-col>
              </hide-at>
            </a-row>


          </a-card>


        </div>

        <div style="min-height: 40vh ;position: relative">
          <div v-if="loading">

            <a-skeleton active />
          </div>
          <div v-else>
          <div style="padding: 3%" v-if="myprojects.length=== 0 && bids.length === 0">

            <a-empty
                image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"
                :image-style="{height: '60px',}">
              <span slot="description"> No jobs applied for </span>
              <a-button type="primary"  @click="$router.push({ name: 'Jobs' })">
                View available jobs
              </a-button>
            </a-empty>
          </div>

          <div style="padding: 0 3%">

            <a-tabs :default-active-key="Defaulttab">
              <a-tab-pane key="1" tab="In developement" v-if="Inprogress.length>0">
                <a-row>
                  <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
                         :md="{span: 18, offset: 0 }"
                         :lg="{span: 18, offset: 0 }" :xl="{span: 14,offset: 0 }">
                <a-list item-layout="vertical" size="large" :pagination="pagination" :data-source="Inprogress" >

                  <a-list-item slot="renderItem" key="item.title" slot-scope="item" class="shadowsmall">
                    <a-card >
                      <span slot="title" style="font-size: 1rem;font-family: sofia_prosemibold;color: black">{{item.title}}</span>
                      <a-collapse >
                        <a-collapse-panel key="1" header="Project description.">
                          <markdown>{{ item.description }}</markdown>
                        </a-collapse-panel>
                      </a-collapse>



                      <div slot="actions">
                        <a-row style="padding: 1%">
                          <a-col span="4">
                            <a-button type="primary" @click="$router.push({ name: 'ProjectBoard', params: { projectSlug: item.slug } })">
                              View project
                            </a-button>

                          </a-col>


                        </a-row>
                      </div>
                    </a-card>

                  </a-list-item>
                </a-list>
                  </a-col>
                </a-row>

              </a-tab-pane>
              <a-tab-pane key="2" tab="Contract discussions"  v-if="Incontract.length>0">

                <a-row>
                  <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
                         :md="{span: 18, offset: 0 }"
                         :lg="{span: 18, offset: 0 }" :xl="{span: 14,offset: 0 }">
                <a-list item-layout="vertical" size="large" :pagination="pagination" :data-source="Incontract" >


                  <a-list-item slot="renderItem" key="item.title" slot-scope="item" class="shadowsmall">
                    <a-card>
                      <span slot="title" style="font-size: 1rem;font-family: sofia_prosemibold;color: black">{{item.title}}</span>
                      <a-collapse  >
                        <a-collapse-panel key="1" header="Project description.">
                          <markdown>{{ item.description }}</markdown>
                        </a-collapse-panel>
                      </a-collapse>



                      <div slot="actions">
                        <a-row style="padding: 1%">
                          <a-col span="4">
                            <a-button type="primary" @click="$router.push({ name: 'DevContract', params: { projectSlug: item.slug } })" >
                              Start negotiations
                            </a-button>

                          </a-col>
                          <a-col span="20">


                          </a-col>

                        </a-row>
                      </div>
                    </a-card>

                  </a-list-item>

                </a-list>
                  </a-col>
                </a-row>
              </a-tab-pane>
              <a-tab-pane key="3" tab="Bids placed" v-if="BidProjects.length>0">
                <a-row>
                  <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
                         :md="{span: 12, offset: 0 }"
                         :lg="{span: 12, offset: 0 }" :xl="{span: 12,offset: 0 }">


                    <a-list item-layout="vertical" size="middle" :pagination="pagination" :data-source="BidProjects">

                      <a-list-item slot="renderItem" key="item.title" slot-scope="item" v-if="!item.accepted">
                        <a-card>

                          <span slot="title"
                                style="font-size: 1.2rem;font-family: sofia_prosemibold;color: black">{{ item.project.title }}

                            <a-tag color="blue" v-if="item.shortlisted" style="float: right">       shortlisted      </a-tag>

                          </span>
                          <a-collapse style="margin-bottom: 1rem" >
                            <a-collapse-panel key="1" header="Project description.">
                              <markdown>{{ item.project.description }}</markdown>
                            </a-collapse-panel>
                          </a-collapse>

                          <a-tag v-for="tag in item.tools" color="blue"
                                 :key="tag">
                            {{ tag }}
                          </a-tag>

                          <div slot="actions">
                            <a-row style="padding: 1%">
                              <a-col span="4">
                                <a-button type="primary" @click="viewbid(item)">
                                View bid
                              </a-button>

                              </a-col>


                            </a-row>
                          </div>


                        </a-card>

                      </a-list-item>
                    </a-list>
                  </a-col>
                  <hide-at breakpoint="mediumAndBelow">
                  <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
                         :md="{span: 12, offset: 0 }"
                         :lg="{span: 12, offset: 0 }" :xl="{span: 12,offset: 0 }" v-if="bid">
                    <div style="padding: 0 1%">
                      <div class="casecard">


                        <div id="main content" style="padding: 1%">
                          <div >

                            <div>

                            <span><p><strong>Project title:</strong>{{ bid.project.title }}</p>


                            </span>


                            </div>


                            <p>Project Proposal(why i should get project)1200 character limit</p>
                            <a-textarea v-model="bid.proposal" maxlength="1200"


                                        :auto-size="{ minRows: 5 }"
                            />
                            <p>Tools i will use</p>
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


                            <p>Time i will take in days</p>
                            <a-input type="Number"  v-model="bid.time" :min="0" addon-after="days"/>

                            <p>Budget
                              <span v-if="bidflag" style="color: red">(bids are capped you can only go 10% lower than quoted by client )</span>
                              <span v-else>(bids are capped you can only go 10% lower than quoted by client )</span>
                            </p>
                            <a-input type="number" @change="budgetflag" v-model="bid.budget" addon-after="$"/>

                            <div style="margin-top: 1rem">
                              <span v-if="editload">
                                <a-spin/>
                              </span>
                              <a-space v-else>
                                <a-button key="submit" type="primary" @click="editbid()" v-if="!bid.shortlisted">
                                  Submit edit
                                </a-button>
                                <a-button type="danger" @click="withdrawbid()">
                                  Withdraw bid
                                </a-button>
                              </a-space>


                            </div>

                          </div>


                        </div>


                      </div>
                    </div>


                  </a-col>
                  </hide-at>
                </a-row>


              </a-tab-pane>
            </a-tabs>

            <show-at breakpoint="mediumAndBelow">
              <a-modal v-model="bid" :footer="null" >
                <div  v-if="bid">

                  <div>

                            <span><p><strong>Project title:</strong>{{ bid.project.title }}</p>


                            </span>


                  </div>


                  <p>Project Proposal(why i should get project)1200 character limit</p>
                  <a-textarea v-model="bid.proposal" maxlength="1200"


                              :auto-size="{ minRows: 5 }"
                  />
                  <p>Tools i will use</p>
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


                  <p>Time i will take in days</p>
                  <a-input type="Number"  v-model="bid.time" :min="0" addon-after="days"/>

                  <p>Budget
                    <span v-if="bidflag" style="color: red">(bids are capped you can only go 10% lower than quoted by client )</span>
                    <span v-else>(bids are capped you can only go 10% lower than quoted by client )</span>
                  </p>
                  <a-input type="number" @change="budgetflag" v-model="bid.budget" addon-after="$"/>

                  <div style="margin-top: 1rem">
                              <span v-if="editload">
                                <a-spin/>
                              </span>
                    <a-space v-else>
                      <a-button key="submit" type="primary" @click="editbid()" v-if="!bid.shortlisted">
                        Submit edit
                      </a-button>
                      <a-button type="danger" @click="withdrawbid()">
                        Withdraw bid
                      </a-button>
                    </a-space>


                  </div>

                </div>
              </a-modal>
            </show-at>


          </div>
          </div>
        </div>

      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import DevSider from '@/components/developer/layout/DevSider'
import moment from 'moment';
import Project from "@/services/Projects";
import Projects from "@/services/Projects";
import markdown from 'vue-markdown'
import { hideAt,showAt} from 'vue-breakpoints'
class BidProjects {
  constructor(id, proposal, budget, time, tools, project,shortlisted,accepted) {
    this.id = id;
    this.proposal = proposal;
    this.budget = budget;
    this.time = time;
    this.tools = tools;
    this.project = project;
    this.shortlisted = shortlisted
    this.accepted = accepted


  }
}

export default {
  name: "Developerprojects",
  data() {
    return {

      bid: null,
      tags: [],
      inputVisible: false,
      inputValue: '',
      pagination: {

        pageSize: 3,
      },
      bidflag: false,
      bids:[],
      time:0,
      editload:false,
      myprojects: [],
      Inprogress:[],
      Incontract:[],
      loading:false

    }
  },
  components: {
    DevSider,markdown,hideAt,showAt


  },
  mounted() {

    this.DeveloperBids()
    this.FetchProject()

  },
  filters: {
    split_tools: function (tools) {
      return tools.split(',')
    },

  },
  computed: {
    Greeting() {
      moment
      let today = new Date()
      let curHr = today.getHours()
      let greeting = ''

      if (curHr < 12) {
        greeting = 'Good Morning'

      } else if (curHr < 18) {
        greeting = 'Good Afternoon'

      } else {
        greeting = 'Good Evening'

      }
      return greeting
    },
    BidProjects() {
      let bidlist = []

      this.bids.forEach(bid => {
        let timestring = bid.timeline.split(" ")
        let id = bid.id
        let project = bid.project
        let proposal = bid.proposal
        let budget = bid.budget
        let time = Number(timestring[0])
        let tools = bid.tools.split(',')
        let shortlisted = bid.shortlisted
        let accepted = bid.accepted


        let onebid = new BidProjects(id, proposal, budget, time, tools, project,shortlisted,accepted)


        bidlist.push(onebid)

      })


      return bidlist

    },
    Defaulttab(){
      let tab = '1'
      if(this.Inprogress.length>0){
        tab = '1'
      }else if(this.Incontract.length>0){
        tab  = '2'
      }
      else if(this.BidProjects.length>0){

        tab  = '3'

      }
      return tab
    }



  },
  methods: {
    FetchProject(){
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }
      this.loading = true
      Projects.developerprojects(this.$store.state.user.pk,auth)
          .then(resp=>{
            this.myprojects = resp.data
            this.ClassifyProjects()
            this.loading = false
          })


    },
    ClassifyProjects(){
      this.myprojects.forEach(project => {
        if (project.stage === 'developement') {
          this.Inprogress.push(project)
        }else if(project.stage === 'contract'){
          this.Incontract.push(project)

        }

      })
    },
    DeveloperBids() {
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }
      this.loading = true
      Project.activedeveloperbids(this.$store.state.user.pk, auth).then(
          resp => {
            this.bids = resp.data
            this.loading = false



          }
      )


    },

    viewbid(item) {
      if (item !== this.bid) {
        this.bid = item
        this.tags = this.bid.tools



      }


    },
    editbid() {
      this.editload = true

      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}


      }


      Project.updatebid(this.bid.id,{timeline:this.bid.time * 86400,tools:this.tags.join(),budget:this.bid.budget,proposal:this.bid.proposal} ,auth)
          .then(()=>{
            this.editload = false
            this.DeveloperBids()

          })




    },
    withdrawbid() {
      this.editload = true

      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }

      Project.updatebid(this.bid.id,{withdraw:true} ,auth)
          .then(()=>{
            this.editload = false
            this.DeveloperBids()

          })



    },
    budgetflag(value) {
      let bidbase = this.bid.budget
      let lowest = (90 / 100) * bidbase
      if (value < lowest) {
        this.bidflag = true


      } else {
        this.bidflag = false
      }


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

.projectcard {

  box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075) !important;

  background: white;
  border-radius: 0;
  margin-bottom: 1rem;

}

.recentcard {
  height: 30rem;
  box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075) !important;
  background: white;
  border-radius: 0;
  margin-bottom: 1rem;

}

.casecard {


  box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075) !important;

  background: white;
  border-radius: 0;
  padding: 2%;
  border: 1px solid #e8e8e8;

}
</style>
