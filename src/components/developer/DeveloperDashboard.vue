<template>
  <a-layout  style="min-height: 100vh;background-color: #F4F7FC">


    <DevSider/>

    <a-layout style="background-color: #F4F7FC">

      <a-layout-content
          :style="{  padding: '1% 2%', background: '#FAFBFF', minHeight: '280px', }"

      >
        <div class="hellocard">
          <a-card>
            <span style="font-size: 1.7rem;font-family: sofia_prosemibold;margin-bottom: 0;color: black">{{Greeting}}
                {{$store.state.user_object.user.first_name | capitalize}}</span>
            <p style="font-family: sofia_proregular;font-size: 1.2rem;line-height: 1rem;color: black">What would you like to do today?</p>
          </a-card>


        </div>


        <div style="min-height: 40vh ;position: relative">
          <a-row :gutter="gutter">
            <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 12, offset: 0 }"
                   :md="{span: 12, offset: 0 }"
                   :lg="{span: 10, offset: 1 }" :xl="{span: 6,offset: 0 }">
              <a-card hoverable class="cardshadow" style="width: 100%;margin-bottom: 1rem">
                <router-link to="/DeveloperProjects">
                  <div>

                    <p style="font-family: sofia_proregular;font-size: 1.5rem;color: black;margin-bottom: 0">Manage Projects</p>
                    <div >
                      <img src="@/assets/images/planning.svg" style="width: 30%"/>

                    </div>

                  </div>
                </router-link>


              </a-card>

            </a-col>
            <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 12, offset: 0 }"
                   :md="{span: 12, offset: 0 }"
                   :lg="{span: 10, offset: 1 }" :xl="{span: 6,offset: 0 }">
              <a-card class="cardshadow" hoverable style="width: 100%;margin-bottom: 1rem;">
                <router-link to="/Jobs">
                <div>
                  <p style="font-family: sofia_proregular;font-size: 1.5rem;color: black;margin-bottom: 0">Available jobs </p>
                  <div >
                    <img src="@/assets/images/board.svg" style="width: 30%"/>


                  </div>




                </div>
                </router-link>
              </a-card>


            </a-col>
            <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 12, offset: 0 }"
                   :md="{span: 12, offset: 0 }"
                   :lg="{span: 10, offset: 1 }" :xl="{span: 6,offset: 0 }">
              <a-tooltip>
                <template slot="title">
                  Invite developers(friends) to help out in projects
                </template>
                <a-card class="cardshadow" hoverable style="width: 100%;margin-bottom: 1rem;">
                  <router-link to="/Teams">
                  <div>
                    <p style="font-family: sofia_proregular;font-size: 1.5rem;color: black;margin-bottom: 0">Create/Manage Teams</p>
                    <div >
                      <img src="@/assets/images/calendar.svg" style="width: 30%"/>

                    </div>



                  </div>
                  </router-link>


                </a-card>
              </a-tooltip>



            </a-col>

            <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 12, offset: 0 }"
                   :md="{span: 12, offset: 0 }"
                   :lg="{span: 10, offset: 1 }" :xl="{span: 6,offset: 0 }">
              <a-card class="cardshadow" hoverable style="width: 100%;margin-bottom: 1rem;">
                <router-link to="/DeveloperEscrow">
                <div>
                  <p style="font-family: sofia_proregular;font-size: 1.5rem;color: black;margin-bottom: 0">Manage Escrow </p>
                  <div >
                    <img src="@/assets/images/esc.svg" style="width: 30%"/>


                  </div>





                </div>
                </router-link>
              </a-card>


            </a-col>

            <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 12, offset: 0 }"
                   :md="{span: 12, offset: 0 }"
                   :lg="{span: 10, offset: 1 }" :xl="{span: 6,offset: 0 }">
              <a-card class="cardshadow" hoverable style="width: 100%;margin-bottom: 1rem;%;">
                <router-link to="/DevBugs">
                <div>
                  <p style="font-family: sofia_proregular;font-size: 1.5rem;color: black;margin-bottom: 0">Bugs & issues </p>
                  <div >
                    <img src="@/assets/images/alert.svg" style="width: 30%"/>

                  </div>



                </div>
                </router-link>


              </a-card>


            </a-col>
            <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 12, offset: 0 }"
                   :md="{span: 12, offset: 0 }"
                   :lg="{span: 10, offset: 1 }" :xl="{span: 6,offset: 0 }">
              <a-card class="cardshadow" hoverable style="width: 100%;margin-bottom: 1rem;%;">
                <router-link to="/Chat">
                  <div>
                    <p style="font-family: sofia_proregular;font-size: 1.5rem;color: black;margin-bottom: 0">Chat</p>
                    <div >
                      <img src="@/assets/images/chat2.svg" style="width: 30%"/>

                    </div>



                  </div>
                </router-link>


              </a-card>


            </a-col>

          </a-row>
        </div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import DevSider from '@/components/developer/layout/DevSider'
import moment from 'moment';
import io from "socket.io-client";
var socket = io.connect(process.env.VUE_APP_SOCKET);
export default {
  name: "ClientDashboard",
  data() {
    return {
      gutter:16


    };
  },
  components: {
    DevSider


  },
  computed:{
    Greeting(){
      moment
      let today = new Date()
      let curHr = today.getHours()
      let greeting=''

      if (curHr < 12) {
        greeting = 'Good Morning'

      } else if (curHr < 18) {
        greeting = 'Good Afternoon'

      } else {
        greeting = 'Good Evening'

      }
      return greeting
    }



  },
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  },
  created() {
    window.onbeforeunload = () => {
      // this triggers the socket server if users are to go to meeting.thus spin up server
      socket.emit('leave', this.username);
    }


  },
}
</script>

<style scoped>
.hellocard {



  box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075) !important;

  background: white;
  border-radius: 0;
  margin-bottom: 1rem;





}

.cardshadow {

  box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075) !important;

  background: white;
  border-radius: 0;
  height: 13rem;
}


</style>
