<template>
  <a-layout style="min-height: 100vh;background-color: #F4F7FC;">


    <AdminSider/>
  <a-layout style="background-color: #F4F7FC">

    <a-layout-content
        :style="{  padding: '1% 2%', background: '#FAFBFF', minHeight: '280px', }"

    >
      <div>
        <a-card class="hellocard">

          <a-row>
            <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
                   :md="{span: 14, offset: 0 }"
                   :lg="{span: 12, offset: 0 }" :xl="{span: 12,offset: 0 }">
              <a-breadcrumb>
                <a-breadcrumb-item><a @click="$router.push('/Admindashboard')">Home</a></a-breadcrumb-item>
                <a-breadcrumb-item><a @click="$router.push('/AdminProjects')">All projects</a></a-breadcrumb-item>
                <a-breadcrumb-item><a>{{project.title}}</a></a-breadcrumb-item>

              </a-breadcrumb>
              <span style="font-size: 1.7rem;font-family: sofia_prosemibold;color: black">
                  {{project.title}}</span>

            </a-col>
            <hide-at breakpoint="mediumAndBelow">
              <a-col :xs="{span: 12, offset: 0 }" :sm="{span: 12, offset: 0 }"
                     :md="{span: 10, offset: 0 }"
                     :lg="{span: 8, offset: 0 }" :xl="{span: 6,offset: 0 }">
                <div style="text-align: center">
                  <img src="@/assets/images/planning.svg" style="width: 20%"/>
                </div>


              </a-col>
            </hide-at>
          </a-row>


        </a-card>


      </div>
      <div style="min-height: 40vh ;position: relative;">
        <div style="">
          <div v-if="BidsinReview.length>0 || ShortlistedBids.length>0">
            <a-row style="color: black">
              <div v-if="bid && DeveloperProfile !==null ">
                <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
                       :md="{span: 12, offset: 0 }"
                       :lg="{span: 12, offset: 0 }" :xl="{span: 12,offset: 0 }" >

                  <a-tabs>

                    <a-tab-pane key="1" tab="Pending bids" v-if="BidsinReview.length>0">
                      <div style=";height: 40rem;padding: 3% ">


                        <a-list item-layout="vertical" size="large" :pagination="pagination"
                                :data-source="BidsinReview">

                          <a-list-item slot="renderItem" key="item.title" slot-scope="item" class="shadowsmall">
                            <h4>Proposal</h4>
                            <p>{{ item.proposal }}</p>


                            <p>Proposed tools:
                              <a-tag v-for="tag in item.tools" color="blue"
                                     :key="tag">
                                {{ tag }}
                              </a-tag>
                            </p>

                            <a-row>


                              <a-col span="8">
                                Time:{{ item.time }} days

                              </a-col>
                              <a-col span="8">
                                Budget:{{ item.budget }}$

                              </a-col>
                              <a-col span="8">
                                <a-button type="primary" size="small" @click="openbid(item)">view bid</a-button>

                              </a-col>

                            </a-row>

                          </a-list-item>
                        </a-list>


                      </div>

                    </a-tab-pane>
                    <a-tab-pane key="2" tab="Shortlisted" v-if="ShortlistedBids.length>0">
                      <div style="height: 40rem;padding: 3% ">

                        <a-list item-layout="vertical" size="large" :pagination="pagination"
                                :data-source="ShortlistedBids">

                          <a-list-item slot="renderItem" key="item.title" slot-scope="item" class="shadowsmall">
                            <h4>Proposal</h4>
                            <p>{{ item.proposal | truncate(100,'....')}}</p>


                            <p>Proposed tools:

                            </p>
                            <a-tag v-for="tag in item.tools" color="blue"
                                   :key="tag">
                              {{ tag }}
                            </a-tag>

                            <a-row>


                              <a-col :xs="{span: 12, offset: 0 }" :sm="{span: 12, offset: 0 }"
                                     :md="{span: 12, offset: 0 }"
                                     :lg="{span: 8, offset: 0 }" :xl="{span: 8,offset: 0 }">
                                Time:{{ item.time }} days

                              </a-col>
                              <a-col  :xs="{span: 12, offset: 0 }" :sm="{span: 12, offset: 0 }"
                                      :md="{span: 12, offset: 0 }"
                                      :lg="{span: 8, offset: 0 }" :xl="{span: 8,offset: 0 }">
                                Budget:{{ item.budget }}$

                              </a-col>
                              <a-col :xs="{span: 12, offset: 0 }" :sm="{span: 12, offset: 0 }"
                                     :md="{span: 12, offset: 0 }"
                                     :lg="{span: 8, offset: 0 }" :xl="{span: 8,offset: 0 }">
                                <a-button type="primary" size="small" @click="openbid(item)">view bid</a-button>

                              </a-col>

                            </a-row>

                          </a-list-item>
                        </a-list>


                      </div>
                    </a-tab-pane>

                  </a-tabs>


                </a-col>
              </div>
              <div v-else>
                <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
                       :md="{span: 16, offset: 0 }"
                       :lg="{span: 16, offset: 0 }" :xl="{span: 12,offset: 0 }" >

                  <a-tabs>

                    <a-tab-pane key="1" tab="Pending bids" v-if="BidsinReview.length>0">
                      <div style=";height: 40rem;padding: 3% ">


                        <a-list item-layout="vertical" size="large" :pagination="pagination"
                                :data-source="BidsinReview">

                          <a-list-item slot="renderItem" key="item.title" slot-scope="item" class="shadowsmall">
                            <h4>Proposal</h4>
                            <p>{{ item.proposal }}</p>


                            <p>Proposed tools

                            </p>
                            <a-tag v-for="tag in item.tools" color="blue"
                                   :key="tag">
                              {{ tag }}
                            </a-tag>

                            <a-row>


                              <a-col :xs="{span: 12, offset: 0 }" :sm="{span: 12, offset: 0 }"
                                     :md="{span: 12, offset: 0 }"
                                     :lg="{span: 8, offset: 0 }" :xl="{span: 8,offset: 0 }">
                                Time:{{ item.time }} days

                              </a-col>
                              <a-col :xs="{span: 12, offset: 0 }" :sm="{span: 12, offset: 0 }"
                                     :md="{span: 12, offset: 0 }"
                                     :lg="{span: 8, offset: 0 }" :xl="{span: 8,offset: 0 }">
                                Budget:{{ item.budget }}$

                              </a-col>
                              <a-col :xs="{span: 12, offset: 0 }" :sm="{span: 12, offset: 0 }"
                                     :md="{span: 12, offset: 0 }"
                                     :lg="{span: 8, offset: 0 }" :xl="{span: 8,offset: 0 }">
                                <a-button type="primary" size="small" @click="openbid(item)">view bid</a-button>

                              </a-col>

                            </a-row>

                          </a-list-item>
                        </a-list>


                      </div>

                    </a-tab-pane>
                    <a-tab-pane key="2" tab="Shortlisted" v-if="ShortlistedBids.length>0">
                      <div style="height: 40rem;padding: 3% ">

                        <a-list item-layout="vertical" size="large" :pagination="pagination"
                                :data-source="ShortlistedBids">

                          <a-list-item slot="renderItem" key="item.title" slot-scope="item" class="shadowsmall">
                            <h4>Proposal</h4>
                            <p>{{ item.proposal | truncate(100,'....')}}</p>


                            <p>Proposed tools

                            </p>
                            <a-tag v-for="tag in item.tools" color="blue"
                                   :key="tag">
                              {{ tag }}
                            </a-tag>

                            <a-row>


                              <a-col :xs="{span: 12, offset: 0 }" :sm="{span: 12, offset: 0 }"
                                     :md="{span: 12, offset: 0 }"
                                     :lg="{span: 8, offset: 0 }" :xl="{span: 8,offset: 0 }">
                                Time:{{ item.time }} days

                              </a-col>
                              <a-col  :xs="{span: 12, offset: 0 }" :sm="{span: 12, offset: 0 }"
                                      :md="{span: 12, offset: 0 }"
                                      :lg="{span: 8, offset: 0 }" :xl="{span: 8,offset: 0 }">
                                Budget:{{ item.budget }}$

                              </a-col>
                              <a-col :xs="{span: 12, offset: 0 }" :sm="{span: 12, offset: 0 }"
                                     :md="{span: 12, offset: 0 }"
                                     :lg="{span: 8, offset: 0 }" :xl="{span: 8,offset: 0 }">
                                <a-button type="primary" size="small" @click="openbid(item)">view bid</a-button>

                              </a-col>

                            </a-row>

                          </a-list-item>
                        </a-list>


                      </div>
                    </a-tab-pane>

                  </a-tabs>


                </a-col>
              </div>

              <hide-at breakpoint="mediumAndBelow">
                <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
                       :md="{span: 12, offset: 0 }"
                       :lg="{span: 12, offset: 0 }" :xl="{span: 12,offset: 0 }">
                  <div style="padding: 0 1%" v-if="bid && DeveloperProfile !==null ">

                    <div class="casecard">
                      <div style="padding: 2%">

                        <p><strong>Name:</strong> {{ DeveloperProfile.user.first_name }} {{ DeveloperProfile.user.last_name }}</p>
                        <p><strong>Email:</strong>{{ DeveloperProfile.user.email }} </p>
                        <p><strong>Country:</strong> {{ DeveloperProfile.country }} </p>
                        <p><strong>Skills: </strong>
                          <a-tag v-for="tag in DeveleperSkills" color="blue"
                                 :key="tag">
                            {{ tag }}
                          </a-tag>
                        </p>


                      </div>


                      <div id="main content">
                        <a-space>
                          <a-popconfirm v-if="bid.shortlisted"
                                        title="Are you sure you want to proceed with this developer?"
                                        ok-text="Yes"
                                        cancel-text="No"
                                        @confirm="acceptbid"

                          >
                            <a >
                              <a-button type="primary" size="small"  >
                                Accept bid
                              </a-button>
                            </a>
                          </a-popconfirm>

                          <a-button type="primary" size="small" v-if="bid.shortlisted === false" @click="shortlistbid"
                          >
                            Shortlist
                          </a-button>
                          <a-button type="danger" size="small" v-if="bid.shortlisted" @click="removebid">
                            Remove from shortlist
                          </a-button>
                          <a-button type="danger" size="small" @click="rejectbid">
                            Reject bid
                          </a-button>

                        </a-space>
                        <a-tabs default-active-key="1">
                          <a-tab-pane key="1" tab="Proposal">
                            <p>Proposal</p>
                            <p>
                              {{ bid.proposal }}
                            </p>
                            <p>Tools am going to use</p>
                            <p>
                              <a-tag v-for="tag in bid.tools" color="blue"
                                     :key="tag">
                                {{ tag }}
                              </a-tag>
                            </p>
                            <p>Project budget : {{ bid.budget }}$</p>
                            <p>Time to finish project : {{ bid.time }} days</p>

                          </a-tab-pane>
                          <a-tab-pane key="2" tab="Project potfolio" force-render>
                            <div v-if="Portfoliolist">

                              <div style="border-bottom: 1px solid #e8e8e8;padding-bottom: 2%;padding-top: 2%"
                                   v-for="item in Portfoliolist" v-bind:key="item.id">
                                <p style="font-weight: 700">
                                  {{ item.title }}


                                </p>
                                <p>
                                  Tools used:
                                  <a-tag v-for="tag in item.tags" color="blue"
                                         :key="tag">
                                    {{ tag }}
                                  </a-tag>

                                </p>
                                <p>{{ item.description }}
                                </p>
                                <a :href=" item.demo" target="_blank">view project</a>

                              </div>
                            </div>
                          </a-tab-pane>
                          <a-tab-pane key="3" tab="Work experience">
                            <div v-if="Experiencelist">
                              <a-timeline>
                                <a-timeline-item v-for="item in Experiencelist"
                                                 v-bind:key="item.id">

                                  <p style="font-weight: 700">
                                    {{ item.title }}


                                  </p>
                                  <p><span><a-icon type="bank"/>  {{ item.company }} <a-icon
                                      type="environment"/>  {{ item.location }} <a-icon
                                      type="hourglass"/>  {{ item.duration }}months</span>
                                  </p>
                                  <p>
                                    Technologies used:
                                    <a-tag v-for="tag in item.tags" color="blue"
                                           :key="tag">
                                      {{ tag }}
                                    </a-tag>

                                  </p>


                                  <p>{{ item.description }}</p>

                                </a-timeline-item>

                              </a-timeline>
                            </div>
                          </a-tab-pane>
                        </a-tabs>

                      </div>


                    </div>
                  </div>



                </a-col>
              </hide-at>


            </a-row>
          </div>
          <div v-else>
            <a-result status="404" title="No bids"
                      sub-title="Sorry, no active bids at the moment.please await new bids.">
            </a-result>

          </div>
          <show-at breakpoint="mediumAndBelow">
            <a-modal v-model="visible" :footer="null" >
              <div  v-if="bid && DeveloperProfile !==null ">
                <div >
                  <div style="padding: 2%">

                    <p><strong>Name:</strong> {{ DeveloperProfile.user.first_name }} {{ DeveloperProfile.user.last_name }}</p>
                    <p><strong>Email:</strong>{{ DeveloperProfile.user.email }} </p>
                    <p><strong>Country:</strong> {{ DeveloperProfile.country }} </p>
                    <p><strong>Skills: </strong>
                      <a-tag v-for="tag in DeveleperSkills" color="blue"
                             :key="tag">
                        {{ tag }}
                      </a-tag>
                    </p>


                  </div>


                  <div >
                    <a-space>
                      <a-popconfirm v-if="bid.shortlisted"
                                    title="Are you sure you want to proceed with this developer?"
                                    ok-text="Yes"
                                    cancel-text="No"
                                    @confirm="acceptbid"

                      >
                        <a >
                          <a-button type="primary" size="small"  >
                            Accept bid
                          </a-button>
                        </a>
                      </a-popconfirm>

                      <a-button type="primary" size="small" v-if="bid.shortlisted === false" @click="shortlistbid"
                      >
                        Shortlist
                      </a-button>
                      <a-button type="danger" size="small" v-if="bid.shortlisted" @click="removebid">
                        Remove from shortlist
                      </a-button>
                      <a-button type="danger" size="small" @click="rejectbid">
                        Reject bid
                      </a-button>

                    </a-space>
                    <a-tabs default-active-key="1">
                      <a-tab-pane key="1" tab="Proposal">
                        <p>Proposal</p>
                        <p>
                          {{ bid.proposal }}
                        </p>
                        <p>Tools am going to use</p>
                        <p>
                          <a-tag v-for="tag in bid.tools" color="blue"
                                 :key="tag">
                            {{ tag }}
                          </a-tag>
                        </p>
                        <p>Project budget : {{ bid.budget }}$</p>
                        <p>Time to finish project : {{ bid.time }} days</p>

                      </a-tab-pane>
                      <a-tab-pane key="2" tab="Project potfolio" force-render>
                        <div v-if="Portfoliolist">

                          <div style="border-bottom: 1px solid #e8e8e8;padding-bottom: 2%;padding-top: 2%"
                               v-for="item in Portfoliolist" v-bind:key="item.id">
                            <p style="font-weight: 700">
                              {{ item.title }}


                            </p>
                            <p>
                              Tools used:
                              <a-tag v-for="tag in item.tags" color="blue"
                                     :key="tag">
                                {{ tag }}
                              </a-tag>

                            </p>
                            <p>{{ item.description }}
                            </p>
                            <a :href=" item.demo" target="_blank">view project</a>

                          </div>
                        </div>
                      </a-tab-pane>
                      <a-tab-pane key="3" tab="Work experience">
                        <div v-if="Experiencelist">
                          <a-timeline>
                            <a-timeline-item v-for="item in Experiencelist"
                                             v-bind:key="item.id">

                              <p style="font-weight: 700">
                                {{ item.title }}


                              </p>
                              <p><span><a-icon type="bank"/>  {{ item.company }} <a-icon
                                  type="environment"/>  {{ item.location }} <a-icon
                                  type="hourglass"/>  {{ item.duration }}months</span>
                              </p>
                              <p>
                                Technologies used:
                                <a-tag v-for="tag in item.tags" color="blue"
                                       :key="tag">
                                  {{ tag }}
                                </a-tag>

                              </p>


                              <p>{{ item.description }}</p>

                            </a-timeline-item>

                          </a-timeline>
                        </div>
                      </a-tab-pane>
                    </a-tabs>

                  </div>


                </div>
              </div>
            </a-modal>
          </show-at>


        </div>
      </div>
    </a-layout-content>
  </a-layout>
  </a-layout>
</template>

<script>
import AdminSider from '@/components/admin/layout/Adminsider'
import Project from "@/services/Projects";
import User from "@/services/UsersService";
import { hideAt,showAt} from 'vue-breakpoints'
class Bid {
  constructor(id, proposal, budget, time, tools, project, shortlisted, developer, withdraw) {
    this.id = id;
    this.proposal = proposal;
    this.budget = budget;
    this.time = time;
    this.tools = tools;
    this.project = project;
    this.shortlisted = shortlisted
    this.developer = developer
    this.withdraw = withdraw


  }
}
class Experience {
  constructor(id, title, description, company, location, duration, tech_used) {
    this.key = id;
    this.title = title;
    this.description = description;
    this.company = company;
    this.duration = duration;
    this.tags = tech_used;
    this.location = location;

  }
}

class Portfolio {
  constructor(id, title, description, demo, tech_used, repo) {
    this.key = id;
    this.title = title;
    this.description = description;
    this.demo = demo;
    this.tags = tech_used;
    this.repo = repo


  }
}
export default {
name: "AdminBids",
  data() {
    return {


      pagination: {
        pageSize: 3,
      },
      bid: {},
      allbids: [],
      bidlistobjects: [],
      DeveloperProfile: null,
      DeveleperSkills: [],
      myprojects: [],
      experienceslist: [],
      project: {},
      visible:false


    };
  },
  components: {
    AdminSider,hideAt,showAt


  },
  async mounted() {
    this.FetchBids()
    this.fetchProject()


  },
  filters: {
    truncate: function (text, length, suffix) {
      if (text.length > length) {
        return text.substring(0, length) + suffix;
      } else {
        return text;
      }
    },
  },
  computed: {
    ShortlistedBids() {
      let bids = []
      this.BidList.forEach(bid => {
        if (bid.shortlisted && bid.withdraw === false) {
          bids.push(bid)
        }
      })
      return bids
    },
    BidsinReview() {
      let bids = []
      this.BidList.forEach(bid => {
        if (bid.shortlisted === false && bid.withdraw === false) {
          bids.push(bid)
        }
      })
      return bids
    },
    BidList() {
      let bidlist = []

      this.bidlistobjects.forEach(bid => {
        let timestring = bid.timeline.split(" ")
        let id = bid.id
        let project = bid.project
        let proposal = bid.proposal
        let budget = bid.budget
        let time = Number(timestring[0])
        let tools = bid.tools.split(',')
        let shortlisted = bid.shortlisted
        let developer = bid.developer
        let withdraw = bid.withdraw


        let onebid = new Bid(id, proposal, budget, time, tools, project, shortlisted, developer, withdraw)


        bidlist.push(onebid)


      })


      return bidlist

    },
    Portfoliolist() {
      let list = []
      this.myprojects.forEach(item => {
        let id = item.id
        let title = item.title
        let description = item.description
        let demo = item.demo_link
        let tech_used = []
        if (item.tech_tags) {
          tech_used = item.tech_tags.split(',');
        }

        let repo = item.repository_link

        let one_portfolio = new Portfolio(
            id, title, description, demo, tech_used, repo
        );
        list.push(one_portfolio)
      })

      return list
    },
    Experiencelist() {
      let list = []
      this.experienceslist.forEach(item => {
        let id = item.id
        let title = item.title
        let description = item.description
        let company = item.company
        let location = item.location
        let duration = item.duration
        let tech_used = []
        if (item.tech_tags) {
          tech_used = item.tech_tags.split(',');
        }

        let one_experience = new Experience(
            id, title, description, company, location, duration, tech_used
        );
        list.push(one_experience)
      })

      return list
    }
  },

  methods: {
    fetchProject() {
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }
      Project.getprojectslug(this.$route.params.projectSlug, auth)
          .then(resp => {
            this.project = resp.data
          })
    },

    FetchBids() {
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }
      Project.fetchprojectbids(this.$route.params.projectSlug, auth)
          .then(resp => {
            this.bidlistobjects = resp.data



          })
    },
    openbid(bid) {
      this.bid = bid
      this.visible = true
      this.fetchUserprofile()
    },
    shortlistbid() {
      this.bid.shortlisted = true

      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }


      Project.updatebid(this.bid.id, {'shortlisted': true}, auth)
          .then(() => {
                this.FetchBids()
              }
          )


    },
    removebid() {
      this.bid.shortlisted = false

      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }


      Project.updatebid(this.bid.id, {'shortlisted': false}, auth)
          .then(() => {
                this.FetchBids()
              }
          )


    },
    rejectbid() {
      this.bid.shortlisted = false

      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }


      Project.updatebid(this.bid.id, {'withdraw': true}, auth)
          .then(() => {
                this.FetchBids()
              }
          )


    },

    acceptbid() {
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }


      Project.updatebid(this.bid.id, {'accepted': true}, auth)
          .then(() => {

                Project.updateproject(this.bid.project, {stage: 'developement', assigned_to: this.bid.developer}, auth)
                    .then(() => {
                      Project.acceptbidemail(this.bid.id, auth)
                      let accepted_bid = {
                        'project': this.bid.project,
                        'developer': this.bid.developer
                      }
                      Project.acceptbid(accepted_bid, auth).then(

                          this.$router.push({
                            name: 'Myprojects',

                          })


                      )


                    })

              }
          )


    },
    fetchUserprofile() {
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }
      User.currentuser(this.bid.developer, auth).then(
          resp => {
            this.DeveloperProfile = resp.data
            this.DeveleperSkills = resp.data.skills.split(',')
            this.FetchPortfolio()
          }
      )
    },
    FetchPortfolio() {

      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }
      User.portfolio(this.bid.developer, auth)
          .then(
              resp => {
                this.myprojects = resp.data

                this.FetchExperience()
              }
          )

    },
    FetchExperience() {
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }

      User.experience(this.bid.developer, auth).then(
          resp => {
            this.experienceslist = resp.data

          }
      )


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

.bidcard {

  box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075) !important;
  background: white;
  border-radius: 0;
  padding: 2%;

}

.casecard {


  box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075) !important;

  background: white;
  border-radius: 0;
  padding: 2%;

}

.shadowsmall {
  box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075) !important;

  background: white;
  border-radius: 0;
  padding: 2%;
  margin-bottom: 1rem;
}
</style>
