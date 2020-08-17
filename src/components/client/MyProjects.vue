<template>
  <a-layout style="min-height: 100vh;background-color: #F4F7FC">


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
                  <a-breadcrumb-item><a href="/Dashboard">Home</a></a-breadcrumb-item>
                  <a-breadcrumb-item><a href="/Myprojects">My projects</a></a-breadcrumb-item>

                </a-breadcrumb>
                <span style="font-size: 1.7rem;font-family: sofia_prosemibold;margin-bottom: 0;color: black">
                My Projects</span>
              </a-col>
              <a-col span="6">
                <div style="text-align: center">
                  <img src="@/assets/images/planning.svg" style="width: 35%"/>
                </div>


              </a-col>
            </a-row>


          </a-card>


        </div>

        <div style="min-height: 40vh ;position: relative">
          <div style="padding: 3%" v-if="projects.length=== 0">

            <a-empty  image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original" :image-style="{height: '60px',}">
              <span slot="description"> No projects created </span>
              <a-button type="primary">
                Create a Project
              </a-button>
            </a-empty>
          </div>
          <div style="padding: 1% 3%">

            <a-row gutter="16">
              <a-col span="14">
                <p style="font-size: 1.2rem;font-family: sofia_prosemibold;margin-bottom: 0;color: black">Projects</p>
                <div>
                  <div class="projectcard" style="padding: 2%">
                    <a-row style="height: 5.5rem">
                      <a-col span="20">
                        <p style="font-size: 1.2rem;font-family: sofia_prosemibold;color: black">Cyrus web application</p>
                        <p>due time: 12/8/2020</p>

                      </a-col>
                      <a-col span="4" style="text-align: center">
                         <a-tag color="#87d068">
                        development stage
                      </a-tag>

                      </a-col>
                    </a-row>

                    <a-row style="border-top: 1px solid #e8e8e8;padding: 1%">
                      <a-col span="20">
                        <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />: Jessica freeman
                      </a-col>
                      <a-col span="4" style="text-align: center">
                        <a-button type="primary" @click="$router.push('ProjectBoard')">
                          View project
                        </a-button>

                      </a-col>
                    </a-row>
                  </div>
                  <div class="projectcard" style="padding: 2%">
                    <a-row style="height: 5.5rem">
                      <a-col span="20">
                        <p style="font-size: 1.2rem;font-family: sofia_prosemibold;color: black">Cyrus web application</p>
                        <p>due time: 12/8/2020</p>

                      </a-col>
                      <a-col span="4" style="text-align: center">
                        <a-tag color="#2db7f5">
                          bidding stage
                        </a-tag>

                      </a-col>
                    </a-row>

                    <a-row style="border-top: 1px solid #e8e8e8;padding: 1%">
                      <a-col span="20">

                      </a-col>
                      <a-col span="4" style="text-align: center">
                        <a-button type="primary" @click="$router.push('Bids')">
                          View project
                        </a-button>

                      </a-col>
                    </a-row>
                  </div>
                  <div class="projectcard" style="padding: 2%">
                    <a-row style="height: 5.5rem">
                      <a-col span="20">
                        <p style="font-size: 1.2rem;font-family: sofia_prosemibold;color: black">Cyrus web application</p>
                        <p>due time: 12/8/2020</p>

                      </a-col>
                      <a-col span="4" style="text-align: center">
                        <a-tag color="#108ee9">
                          contract stage
                        </a-tag>

                      </a-col>
                    </a-row>

                    <a-row style="border-top: 1px solid #e8e8e8;padding: 1%">
                      <a-col span="20">

                      </a-col>
                      <a-col span="4" style="text-align: center">
                        <a-button type="primary">
                          View project
                        </a-button>

                      </a-col>
                    </a-row>
                  </div>


                </div>

              </a-col>
              <a-col span="10">
                <p style="font-size: 1.2rem;font-family: sofia_prosemibold;margin-bottom: 0;color: black">Recent activity</p>
                <div class="recentcard">
                  <div style="padding: 3%">
                    <a-timeline>
                      <a-timeline-item>Create a services site 2015-09-01</a-timeline-item>
                      <a-timeline-item>Solve initial network problems 2015-09-01</a-timeline-item>
                      <a-timeline-item>Technical testing 2015-09-01</a-timeline-item>
                      <a-timeline-item>Network problems being solved 2015-09-01</a-timeline-item>
                      <a-timeline-item>Solve initial network problems 2015-09-01</a-timeline-item>
                      <a-timeline-item>Technical testing 2015-09-01</a-timeline-item>
                      <a-timeline-item>Network problems being solved 2015-09-01</a-timeline-item>
                      <a-timeline-item>Solve initial network problems 2015-09-01</a-timeline-item>
                      <a-timeline-item>Technical testing 2015-09-01</a-timeline-item>
                      <a-timeline-item>Network problems being solved 2015-09-01</a-timeline-item>
                    </a-timeline>
                  </div>


                </div>
              </a-col>
            </a-row>
          </div>
        </div>

      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import ClientSider from '@/components/client/layout/ClientSider'
import moment from 'moment';

export default {
  name: "MyProjects",
  data() {
    return {
      projects: [1]
    }
  },
  components: {
    ClientSider


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
    }


  }
}
</script>

<style scoped>
.hellocard {
  height: 10rem;
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