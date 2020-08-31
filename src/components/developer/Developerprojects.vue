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
                  <a-breadcrumb-item><a href="/Dashboard">Home</a></a-breadcrumb-item>
                  <a-breadcrumb-item><a href="/DeveloperProjects">My projects</a></a-breadcrumb-item>

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

          <div style="padding: 1% 3%">

            <a-tabs default-active-key="1" @change="callback">
              <a-tab-pane key="1" tab="In developement">
                <a-card  style="width: 60%">
                  <span slot="title" style="font-size: 1.2rem;font-family: sofia_prosemibold;color: black">Cyrus web application</span>

                  <p>due time: 12/8/2020</p>

                  <div slot="actions">
                    <a-button type="primary" @click="$router.push('ProjectBoard')">
                      View project
                    </a-button>
                  </div>
                </a-card>

              </a-tab-pane>
              <a-tab-pane key="2" tab="Contract discussions" force-render>
                <a-card  style="width: 60%">
                  <span slot="title" style="font-size: 1.2rem;font-family: sofia_prosemibold;color: black">Cyrus web application</span>

                  <p>due time: 12/8/2020</p>

                  <div slot="actions">
                    <a-button type="primary" @click="$router.push('DevContract')">
                      View project
                    </a-button>
                  </div>
                </a-card>
              </a-tab-pane>
              <a-tab-pane key="3" tab="Bids placed">
                <a-card  style="width: 60%">
                  <span slot="title" style="font-size: 1.2rem;font-family: sofia_prosemibold;color: black">Cyrus web application</span>

                  <p>due time: 12/8/2020</p>

                  <div slot="actions">
                    <a-button type="primary" @click="$router.push('ProjectBoard')">
                      View bid
                    </a-button>
                  </div>
                </a-card>
              </a-tab-pane>
            </a-tabs>


          </div>
        </div>

      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import DevSider from '@/components/developer/layout/DevSider'
import moment from 'moment';

export default {
  name: "Developerprojects",
  data() {
    return {
      projects: [1]
    }
  },
  components: {
    DevSider


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
