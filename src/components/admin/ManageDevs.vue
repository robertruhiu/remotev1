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
                     :md="{span: 12, offset: 0 }"
                     :lg="{span: 12, offset: 0 }" :xl="{span: 12,offset: 0 }">
                <a-breadcrumb>
                  <a-breadcrumb-item><a @click="$router.push('/Admindashboard')">Home</a></a-breadcrumb-item>
                  <a-breadcrumb-item>Manage devs</a-breadcrumb-item>

                </a-breadcrumb>
                <span style="font-size: 1.7rem;font-family: sofia_prosemibold;margin-bottom: 0;color: black">
                Admin :Manage Remote Codeln developers</span>
              </a-col>

            </a-row>


          </a-card>


        </div>

        <div id="developertabs">
          <div v-if="fetchdevsstate">

            <a-skeleton active />
          </div>
          <div v-else>
          <a-row :gutter="gutter">
            <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
                   :md="{span: 12, offset: 0 }"
                   :lg="{span: 12, offset: 0 }" :xl="{span: 12,offset: 0 }">
              <a-tabs default-active-key="1">
                <a-tab-pane key="1" tab="Verified" v-if="verified.length>0">

                  <a-table :columns="columns" :data-source="verified">

                    <span slot="cv" slot-scope="cv">
                      <a :href="cv" target="_blank">cv</a>

                    </span>
                    <span slot="tags" slot-scope="tags">
                      <a-tag
                          v-for="tag in tags"
                          :key="tag"
                          :color="tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'">
                        {{ tag.toUpperCase() }}
                      </a-tag>
                    </span>
                    <span slot="action" slot-scope=" record">
                      <a-button size="small" type="primary" @click="openprofile(record)">view profile</a-button>

                    </span>
                  </a-table>
                </a-tab-pane>
                <a-tab-pane key="2" tab="Applied" v-if="appliedusers.length>0">


                  <a-table :columns="columns" :data-source="appliedusers">

                    <span slot="cv" slot-scope="cv">
                      <a :href="cv" target="_blank">cv</a>

                    </span>
                    <span slot="tags" slot-scope="tags">
                      <a-tag
                          v-for="tag in tags"
                          :key="tag"
                          :color="tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'">
                        {{ tag.toUpperCase() }}
                      </a-tag>
                    </span>
                    <span slot="action" slot-scope=" record">
                      <a-button size="small" type="primary" @click="openprofile(record)">view profile</a-button>

                    </span>
                  </a-table>
                </a-tab-pane>

              </a-tabs>
            </a-col>
            <hide-at breakpoint="mediumAndBelow">
              <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
                     :md="{span: 12, offset: 0 }"
                     :lg="{span: 12, offset: 0 }" :xl="{span: 12,offset: 0 }">
                <div style="padding: 0 1%" v-if="profile !== null  ">

                  <div class="casecard">
                    <div style="padding: 2%">

                      <p><strong>Name:</strong> {{ profile.name }} </p>
                      <p><strong>Email: {{ profile.profile.user.email }}</strong></p>
                      <p><strong>Country: {{ profile.profile.country }}</strong></p>
                      <p><strong>Skills: </strong>
                        <a-tag v-for="tag in profile.tags" color="blue"
                               :key="tag">
                          {{ tag }}
                        </a-tag>
                      </p>


                    </div>


                    <div id="main content">
                      <a-space>
                        <a-popconfirm v-if="!profile.profile.remote_verified && profile.profile.remote_entry"
                                      title="Are you sure you want to verify with this developer?"
                                      ok-text="Yes"
                                      cancel-text="No"
                                      @confirm="VerifyDev"

                        >
                          <a>
                            <a-button type="primary" size="small">
                              Verify developer
                            </a-button>
                          </a>
                        </a-popconfirm>


                        <a-button type="danger" size="small" v-if="profile.profile.remote_verified"
                                  @click="removeVerification">
                          Remove verification
                        </a-button>


                      </a-space>

                      <a-tabs default-active-key="2">

                        <a-tab-pane key="2" tab="Project portfolio" force-render>
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

        </div>
        <showAt breakpoint="mediumAndBelow">
        <a-modal v-model="visible"  :footer="null">
          <div style="padding: 0 1%" v-if="profile !== null  ">

            <div >
              <div style="padding: 2%">

                <p><strong>Name:</strong> {{ profile.name }} </p>
                <p><strong>Email: {{ profile.profile.user.email }}</strong></p>
                <p><strong>Country: {{ profile.profile.country }}</strong></p>
                <p><strong>Skills: </strong>
                  <a-tag v-for="tag in profile.tags" color="blue"
                         :key="tag">
                    {{ tag }}
                  </a-tag>
                </p>


              </div>


              <div >
                <a-space>
                  <a-popconfirm v-if="!profile.profile.remote_verified && profile.profile.remote_entry"
                                title="Are you sure you want to verify with this developer?"
                                ok-text="Yes"
                                cancel-text="No"
                                @confirm="VerifyDev"

                  >
                    <a>
                      <a-button type="primary" size="small">
                        Verify developer
                      </a-button>
                    </a>
                  </a-popconfirm>


                  <a-button type="danger" size="small" v-if="profile.profile.remote_verified"
                            @click="removeVerification">
                    Remove verification
                  </a-button>


                </a-space>

                <a-tabs default-active-key="2">

                  <a-tab-pane key="2" tab="Project portfolio" force-render>
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
        </showAt>


      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import AdminSider from '@/components/admin/layout/Adminsider'
import moment from 'moment';
import User from "@/services/UsersService";
import {hideAt,showAt} from 'vue-breakpoints'

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

class Dev {
  constructor(id, name, cv, tags, profile) {
    this.id = id;
    this.name = name;
    this.cv = cv;
    this.tags = tags;
    this.profile = profile


  }
}

const columns = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
  },

  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Cv',
    dataIndex: 'cv',
    key: 'cv',
    scopedSlots: {customRender: 'cv'},
  },

  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    scopedSlots: {customRender: 'tags'},
  },
  {
    title: 'Action',
    key: 'action',
    scopedSlots: {customRender: 'action'},
  },
];
export default {
  name: "ManageDevs",
  data() {
    return {
      loading: false,
      gutter: 16,
      pagination: {
        pageSize: 4,
      },
      penndingusers: [],
      appliedusers: [],
      verified: [],
      profile: null,
      myprojects: [],
      experienceslist: [],
      columns,
      fetchdevsstate:false,
      visible:false

    }
  },
  components: {
    AdminSider, hideAt,showAt


  },
  async mounted() {
    this.fetchUserApplied()


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

    fetchUserApplied() {
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }
      this.fetchdevsstate = true
      User.remoteappliedusers(auth).then(
          resp => {
            this.penndingusers = resp.data
            this.ClasifyUsers()


          }
      )
    },
    ClasifyUsers() {
      this.penndingusers.forEach(user => {
        if (user.remote_verified) {
          let id = user.id
          let name = user.user.first_name + ' ' + user.user.last_name

          let cv = ''
          let tags = user.skills.split(',')
          if (user.file) {
            if (user.file.includes("http")) {
              cv = user.file
            } else {
              cv = `https://res.cloudinary.com/dwtvwjhn3/${user.file} `

            }
          }
          let profile = user
          let one_dev = new Dev(
              id, name, cv, tags, profile
          );
          this.verified.push(one_dev)
        }
        else if (!user.remote_verified && user.remote_entry) {
          let id = user.id
          let name = user.user.first_name + ' ' + user.user.last_name

          let cv = ''
          let tags = user.skills.split(',')
          if (user.file) {
            if (user.file.includes("http")) {
              cv = user.file
            } else {
              cv = `https://res.cloudinary.com/dwtvwjhn3/${user.file} `

            }
          }
          let profile = user
          let one_dev = new Dev(
              id, name, cv, tags, profile
          );
          this.appliedusers.push(one_dev)

        }
        this.fetchdevsstate = false
      })

    },
    openprofile(profile) {
      this.profile = profile
      this.visible = true
      this.FetchPortfolio()
    },
    FetchPortfolio() {

      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }
      User.portfolio(this.profile.id, auth)
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

      User.experience(this.profile.id, auth).then(
          resp => {
            this.experienceslist = resp.data

          }
      )


    },
    VerifyDev() {


      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }



      User.updatepatch(this.profile.id, {remote_verified: true}, auth).then(
          ()=>{
            this.profile.profile.remote_verified = true
            this.verified.push(this.profile)
            const index = this.appliedusers.indexOf(this.profile);
            if (index > -1) {
              this.appliedusers.splice(index, 1);
            }
          }
      )


    },
    removeVerification() {


      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }


      User.updatepatch(this.profile.id, {remote_verified: false}, auth)
      .then(
          ()=>{
            this.profile.profile.remote_verified = false
            this.appliedusers.push(this.profile)
            const index = this.verified.indexOf(this.profile);
            if (index > -1) {
              this.verified.splice(index, 1);
            }

          }
      )


    },


  }
}
</script>

<style scoped>
.hellocard {
  height: 8rem;
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

}

.shadowsmall {
  box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075) !important;

  background: white;
  border-radius: 0;
  padding: 2%;
  margin-bottom: 1rem;
}
</style>
