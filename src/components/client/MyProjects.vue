<template>
  <a-layout style="min-height: 100vh;background-color: #F4F7FC;margin-left: 200px">


    <ClientSider/>

    <a-layout style="background-color: #F4F7FC">

      <a-layout-content
          :style="{  padding: '1% 2%', background: '#FAFBFF', minHeight: '280px', }"

      >
        <div>
          <a-card class="hellocard">

            <a-row>
              <a-col span="12">
                <a-breadcrumb>
                  <a-breadcrumb-item><a @click="$router.push('Dashboard')">Home</a></a-breadcrumb-item>
                  <a-breadcrumb-item><a @click="$router.push('Myprojects')">My projects</a></a-breadcrumb-item>

                </a-breadcrumb>
                <span style="font-size: 1.7rem;font-family: sofia_prosemibold;margin-bottom: 0;color: black">
                My Projects</span>
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
              <a-tab-pane key="1" tab="In developement">
                <a-list item-layout="vertical" size="large" :pagination="pagination" :data-source="Inprogress" style="width: 60%">

                  <a-list-item slot="renderItem" key="item.title" slot-scope="item" class="shadowsmall">
                    <a-card style="width: 100%">
                    <span slot="title" style="font-size: 1rem;font-family: sofia_prosemibold;color: black">{{item.title}}</span>

                    <p>{{item.description}}</p>

                    <div slot="actions">
                      <a-row style="padding: 1%">
                        <a-col span="4">
                          <a-button type="primary" @click="$router.push('ProjectBoard')">
                            View project
                          </a-button>

                        </a-col>
                        <a-col span="20">
                        <span style="float: right"><a-avatar
                            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>: {{item.developer}}</span>

                        </a-col>

                      </a-row>
                    </div>
                  </a-card>

                  </a-list-item>
                </a-list>


              </a-tab-pane>
              <a-tab-pane key="2" tab="Contract discussions" force-render>
                <a-list item-layout="vertical" size="large" :pagination="pagination" :data-source="Incontract" style="width: 60%">

                  <a-list-item slot="renderItem" key="item.title" slot-scope="item" class="shadowsmall">
                    <a-card style="width: 100%">
                      <span slot="title" style="font-size: 1rem;font-family: sofia_prosemibold;color: black">{{item.title}}</span>

                      <p>{{item.description}}</p>

                      <div slot="actions">
                        <a-row style="padding: 1%">
                          <a-col span="4">
                            <a-button type="primary" @click="$router.push('Contract')">
                              Start negotiations
                            </a-button>

                          </a-col>
                          <a-col span="20">
                        <span style="float: right"><a-avatar
                            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>: {{item.developer}}</span>

                          </a-col>

                        </a-row>
                      </div>
                    </a-card>

                  </a-list-item>
                </a-list>

              </a-tab-pane>
              <a-tab-pane key="3" tab="Bids stage">
                <a-list item-layout="vertical" size="large" :pagination="pagination" :data-source="Inbidding" style="width: 60%">

                  <a-list-item slot="renderItem" key="item.title" slot-scope="item" class="shadowsmall">
                    <a-card style="width: 100%">
                      <span slot="title" style="font-size: 1rem;font-family: sofia_prosemibold;color: black">{{item.title}}</span>

                      <p>{{item.description}}</p>

                      <div slot="actions">
                        <a-row style="padding: 1%">
                          <a-col span="4">
                            <a-button type="primary" @click="$router.push('Bids')">
                              View bids
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
import ClientSider from '@/components/client/layout/ClientSider'
import moment from 'moment';
// import Projects from '@/services/Projects'

export default {
  name: "MyProjects",
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
    ClientSider


  },
  async mounted() {
    // Projects.myprojects()
    //     .then(resp=>{
    //       this.myprojects = resp.data
    //     })
    this.myprojects =
        [
          {
            'title': 'project1',
            'description': 'this is a project in developement',
            'stage':'developement',
            'developer':'dennis'
          },
          {
            'title': 'project2',
            'description': 'hi hi there',
            'stage':'contract',
            'developer':'dennis'
          },
          {
            'title': 'project3',
            'description': 'am in bidding stage',
            'stage':'bid',
            'developer':'dennis'
          },
          {
            'title': 'project4',
            'description': 'am in bidding stage',
            'stage':'bid',
            'developer':'dennis'
          },
          {
            'title': 'project5',
            'description': 'am in bidding stage',
            'stage':'bid',
            'developer':'dennis'
          },
          {
            'title': 'project6',
            'description': 'am in bidding stage',
            'stage':'bid',
            'developer':'dennis'
          }

        ]

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
        if (project.stage === 'bid') {
          projects.push(project)
        }
      })
      return projects
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
