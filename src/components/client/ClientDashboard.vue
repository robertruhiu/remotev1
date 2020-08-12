<template>
  <a-layout id="components-layout-demo-custom-trigger" style="min-height: 100vh;background-color: #F4F7FC">
    <a-layout-sider v-model="collapsed" :trigger="null" collapsible theme="light"
                    style="box-shadow: 2px 0 6px rgba(0,21,41,.35);background-color: #F4F7FC">
      <router-link to="/">
        <div style="height: 4rem">
          <img v-if="!collapsed" src="@/assets/logobg.svg"
               style="width: 9rem;height: 2rem;margin-top: 1rem;margin-bottom: 1rem;margin-left: 1rem">
          <img v-if="collapsed" src="@/assets/cropped.png"
               style="height: 2rem;margin-top: 1rem;margin-bottom: 1rem;margin-left: 1rem">
        </div>

      </router-link>
      <ClientSider/>
    </a-layout-sider>
    <a-layout style="background-color: #F4F7FC">
      <a-layout-header class="hellocard" :style="{width: '100%',backgroundColor:'#FAFBFF',padding: '0 0 0',borderBottom: '1px solid #e8e8e8'
            }">
        <a-row>
          <a-col span="2">
            <a-icon
                class="trigger"
                :type="collapsed ? 'menu-unfold' : 'menu-fold'"
                @click="() => (collapsed = !collapsed)"
            />
          </a-col>
          <a-col span="22">
            <div style="color: black">
              <p style="font-size: 1.7rem;font-family: sofia_prosemibold;margin-bottom: 0">{{Greeting}}
                Dennis</p>
              <p style="font-family: sofia_proregular;font-size: 1.2rem">What would you like to do today?</p>
            </div>

          </a-col>
        </a-row>

      </a-layout-header>
      <a-layout-content
          :style="{  padding: '2% 2%', background: '#FAFBFF', minHeight: '280px', }"
      >


        <div style="min-height: 40vh ;position: relative">
          <a-row gutter="16">
            <a-col span="6">
              <a-card hoverable class="cardshadow" style="width: 100%;margin-bottom: 1rem">
                <div>

                  <p style="font-family: sofia_proregular;font-size: 1.5rem;color: black">Manage my Projects</p>
                  <div>
                    <img src="@/assets/images/manage.svg" style="width: 60%"/>
                    <span style="position: absolute;top:13rem">
                       <div >


                          <a-icon type="project"/> :
                        <a-badge count="3" :number-style="{ backgroundColor: '#008fff' }" /> ongoing
                       </div>
                    </span>
                  </div>
                </div>

              </a-card>

            </a-col>
            <a-col span="6">
              <a-card hoverable class="cardshadow" style="width: 100%;margin-bottom: 1rem">
                <div>

                  <p style="font-family: sofia_proregular;font-size: 1.5rem;color: black">Create a Project</p>
                  <div>
                    <img src="@/assets/images/create.svg" style="width: 60%"/>
                  </div>
                </div>

              </a-card>

            </a-col>
            <a-col span="6">
              <a-card class="cardshadow" hoverable style="width: 100%;margin-bottom: 1rem;">
                <div>
                  <p style="font-family: sofia_proregular;font-size: 1.5rem;color: black">Escrow Management </p>
                  <div>
                    <img src="@/assets/images/escrow.svg" style="width: 60%"/>
                    <span style="position: absolute;top:13rem">
                       <div >


                          <a-icon type="bank"/> :
                        <a-badge count="2" :number-style="{ backgroundColor: '#008fff' }" /> pending
                       </div>
                    </span>

                  </div>


                </div>
              </a-card>


            </a-col>
            <a-col span="6">
              <a-card class="cardshadow" hoverable style="width: 100%;margin-bottom: 1rem;">
                <div>
                  <p style="font-family: sofia_proregular;font-size: 1.5rem;color: black">My Meetings</p>
                  <div>
                    <img src="@/assets/images/calendar.svg" style="width: 60%"/>
                    <span style="position: absolute;top:13rem">
                       <div >


                          <a-icon type="calendar"/> :
                        <a-badge count="4" :number-style="{ backgroundColor: '#008fff' }" /> events
                       </div>
                    </span>
                  </div>


                </div>


              </a-card>


            </a-col>
            <a-col span="6">
              <a-card class="cardshadow" hoverable style="width: 100%;margin-bottom: 1rem;%;">
                <div>
                  <p style="font-family: sofia_proregular;font-size: 1.5rem;color: black">Conflict Resolution </p>
                  <div>
                    <img src="@/assets/images/conf.svg" style="width: 60%"/>
                    <span style="position: absolute;top:13rem">
                       <div >


                          <a-icon type="flag"/> :
                        <a-badge count="1" :number-style="{ backgroundColor: '#008fff' }" /> issues
                       </div>
                    </span>
                  </div>


                </div>


              </a-card>


            </a-col>
            <a-col span="6">
              <a-card class="cardshadow" hoverable style="width: 100%;margin-bottom: 1rem;">

                <div>
                  <p style="font-family: sofia_proregular;font-size: 1.5rem;color: black">Chat</p>
                  <div>
                    <img src="@/assets/images/chat.svg" style="width: 60%"/>
                    <span style="position: absolute;top:13rem">
                       <div >


                          <a-icon type="message"/> :
                        <a-badge count="6" :number-style="{ backgroundColor: '#008fff' }" /> unread
                       </div>
                    </span>
                  </div>



                </div>

              </a-card>


            </a-col>
          </a-row>
        </div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import ClientSider from '@/components/client/layout/ClientSider'
import moment from 'moment';

export default {
  name: "ClientDashboard",
  data() {
    return {
      collapsed: false,

    };
  },
  components: {
    ClientSider


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



}
}
</script>

<style scoped>
.hellocard {


  height: 8rem;


  background: #f4f7fc;

}

.cardshadow {

  box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075) !important;

  background: white;
  border-radius: 0;
  height: 16rem;
}

#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}

</style>
