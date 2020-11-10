<template>
  <a-layout style="min-height: 100vh;background-color: #F4F7FC;margin-left: 200px">


    <AdminSider/>

    <a-layout style="background-color: #F4F7FC">

      <a-layout-content
          :style="{  padding: '1% 2%', background: '#FAFBFF', minHeight: '280px', }"

      >
        <div>
          <a-card class="hellocard">

            <a-row>
              <a-col span="12">
                <a-breadcrumb>
                  <a-breadcrumb-item><a @click="$router.push('/Admindashboard')">Home</a></a-breadcrumb-item>
                  <a-breadcrumb-item><a @click="$router.push('/AdminProjects')">All projects</a></a-breadcrumb-item>

                </a-breadcrumb>
                <span style="font-size: 1.7rem;font-family: sofia_prosemibold;margin-bottom: 0;color: black">
                Admin :All Projects</span>
              </a-col>
              <a-col span="6">
                <div style="text-align: center">
                  <img src="@/assets/images/planning.svg" style="width: 25%"/>
                </div>


              </a-col>
            </a-row>


          </a-card>


        </div>

        <div style="min-height: 40vh ;position: relative">

          <div style="padding: 3%" v-if="myprojects.length=== 0">

            <a-empty
                image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"
                :image-style="{height: '60px',}">
              <span slot="description"> No projects created </span>
              <a-button type="primary">
                Create a Project
              </a-button>
            </a-empty>
          </div>
          <div style="padding: 0 3%">
            <a-tabs default-active-key="1" @change="callback">
              <a-tab-pane key="1" tab="In developement" v-if="Inprogress.length>0">
                <a-list item-layout="vertical" size="large" :pagination="pagination" :data-source="Inprogress" style="width: 60%">

                  <a-list-item slot="renderItem" key="item.title" slot-scope="item" class="shadowsmall">
                    <a-card style="width: 100%">
                      <span slot="title" style="font-size: 1rem;font-family: sofia_prosemibold;color: black">{{item.title}}</span>
                      <a slot="extra" @click="editproject(item.id)">edit project</a>

                      <a-collapse v-model="activeKey" >
                        <a-collapse-panel key="1" header="Project description.">
                          <markdown>{{ item.description }}</markdown>
                        </a-collapse-panel>
                      </a-collapse>

                      <div slot="actions">
                        <a-row style="padding: 1%">
                          <a-col span="4">
                            <a-button type="primary" @click="$router.push({ name: 'AdminTracker', params: { projectSlug: item.slug } })">
                              View project
                            </a-button>

                          </a-col>


                        </a-row>
                      </div>
                    </a-card>

                  </a-list-item>
                </a-list>


              </a-tab-pane>
              <a-tab-pane key="2" tab="Contract discussions" force-render v-if="Incontract.length>0">
                <a-list item-layout="vertical" size="large" :pagination="pagination" :data-source="Incontract" style="width: 60%">

                  <a-list-item slot="renderItem" key="item.title" slot-scope="item" class="shadowsmall">
                    <a-card style="width: 100%">
                      <span slot="title" style="font-size: 1rem;font-family: sofia_prosemibold;color: black">{{item.title}}</span>
                      <a slot="extra"  @click="editproject(item.id)">edit project</a>

                      <a-collapse v-model="activeKey" >
                        <a-collapse-panel key="1" header="Project description.">
                          <markdown>{{ item.description }}</markdown>
                        </a-collapse-panel>
                      </a-collapse>

                      <div slot="actions">
                        <a-row style="padding: 1%">
                          <a-col span="4">
                            <a-button type="primary" @click="$router.push({ name: 'Contract', params: { projectSlug: item.slug } })" >
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

              </a-tab-pane>
              <a-tab-pane key="3" tab="Bids " v-if="Inbidding.length>0">
                <a-list item-layout="vertical" size="large" :pagination="pagination" :data-source="Inbidding" style="width: 60%">

                  <a-list-item slot="renderItem" key="item.title" slot-scope="item" class="shadowsmall">
                    <a-card style="width: 100%">
                      <span slot="title" style="font-size: 1rem;font-family: sofia_prosemibold;color: black">{{item.title}}</span>
                      <a slot="extra"  @click="editproject(item.id)">edit project</a>

                      <a-collapse v-model="activeKey" >
                        <a-collapse-panel key="1" header="Project description.">
                          <markdown>{{ item.description }}</markdown>
                        </a-collapse-panel>
                      </a-collapse>

                      <div slot="actions">
                        <a-row style="padding: 1%">
                          <a-col span="4">
                            <a-button type="primary" @click="$router.push({ name: 'AdminBids', params: { projectSlug: item.slug } })">
                              View bids
                            </a-button>

                          </a-col>
                          <a-col span="4">
                            <a-button type="danger" @click="removeverifyproject(item.id)">
                              Unverify Project
                            </a-button>


                          </a-col>

                        </a-row>
                      </div>
                    </a-card>

                  </a-list-item>
                </a-list>

              </a-tab-pane>
              <a-tab-pane key="4" tab="Awaiting verification " v-if="AwaitingVerification.length>0">
                <a-list item-layout="vertical" size="large" :pagination="pagination" :data-source="AwaitingVerification" style="width: 60%">

                  <a-list-item slot="renderItem" key="item.title" slot-scope="item" class="shadowsmall">
                    <a-card style="width: 100%">
                      <span slot="title" style="font-size: 1rem;font-family: sofia_prosemibold;color: black">{{item.title}}</span>


                      <a-collapse v-model="activeKey" >
                        <a-collapse-panel key="1" header="Project description.">
                          <markdown>{{ item.description }}</markdown>
                        </a-collapse-panel>
                      </a-collapse>

                      <div slot="actions">

                        <a-row style="padding: 1%">
                          <a-col span="4">
                            <a-button type="primary" @click="editproject(item.id)">
                              Edit Project
                            </a-button>

                          </a-col>
                          <a-col span="4">
                            <a-button style="background-color: #52c41a;color: white" @click="verifyproject(item.id)">
                              Verify Project
                            </a-button>


                          </a-col>

                        </a-row>
                      </div>
                    </a-card>

                  </a-list-item>
                </a-list>

              </a-tab-pane>
              <a-tab-pane key="5" tab="In Creation stage " v-if="InCreation.length>0">
                <a-list item-layout="vertical" size="large" :pagination="pagination" :data-source="InCreation" style="width: 60%">

                  <a-list-item slot="renderItem" key="item.title" slot-scope="item" class="shadowsmall">
                    <a-card style="width: 100%">
                      <span slot="title" style="font-size: 1rem;font-family: sofia_prosemibold;color: black">{{item.title}}</span>


                      <a-collapse v-model="activeKey" >
                        <a-collapse-panel key="1" header="Project description.">
                          <markdown>{{ item.description }}</markdown>
                        </a-collapse-panel>
                      </a-collapse>

                      <div slot="actions">
                        <a-row style="padding: 1%">
                          <a-col span="4">
                            <a-button type="primary" @click="editproject(item.id)">
                              Edit Project
                            </a-button>

                          </a-col>
                          <a-col span="20">


                          </a-col>

                        </a-row>
                      </div>
                    </a-card>

                  </a-list-item>
                </a-list>

              </a-tab-pane>
            </a-tabs>


          </div>
        </div>

      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import AdminSider from '@/components/admin/layout/Adminsider'
import moment from 'moment';
import Projects from '@/services/Projects'
import Project from "@/services/Projects";
import markdown from 'vue-markdown'
export default {
name: "adminprojects",
  data() {
    return {

      myprojects: [],
      pagination: {
        onChange: page => {
          console.log(page);
        },
        pageSize: 3,
      },

    }
  },
  components: {
    AdminSider,markdown


  },
  async mounted() {
    this.FetchProject()


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
    Inprogress() {
      let projects = []
      this.myprojects.forEach(project => {
        if (project.stage === 'developement') {
          projects.push(project)
        }
      })
      return projects
    },
    Incontract() {
      let projects = []
      this.myprojects.forEach(project => {
        if (project.stage === 'contract') {
          projects.push(project)
        }
      })
      return projects
    },
    Inbidding() {
      let projects = []
      this.myprojects.forEach(project => {
        if (project.stage === 'bid'&& project.verified  ) {
          projects.push(project)
        }
      })
      return projects
    },
    InCreation() {
      let projects = []
      this.myprojects.forEach(project => {
        if (project.stage === 'creation' || project.stage === 'escrow1') {
          projects.push(project)
        }
      })
      return projects
    },
    AwaitingVerification() {
      let projects = []
      this.myprojects.forEach(project => {
        if (project.stage === 'bid' && project.verified === false) {
          projects.push(project)
        }
      })
      return projects
    }


  },
  methods:{
    FetchProject(){
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }
      Projects.myprojects(this.$store.state.user.pk,auth)
          .then(resp=>{
            this.myprojects = resp.data
          })

    },
    editproject(id) {
      this.$store.dispatch('setProject', id)
      this.$router.push({
        name: 'AdminCreateEditProject'
      })
    },
    verifyproject(id) {
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }
      Project.updateproject(id, {verified:true}, auth)
          .then(
              ()=>{
                this.$message.success('Project has been verified');
                this.FetchProject()
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
                this.FetchProject()
              }
          )

    }
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

.projectcard {
  height: 10rem;
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
</style>
