<template>
  <a-layout id="components-layout-demo-custom-trigger" style="min-height: 100vh;background-color: white">
    <a-layout-sider v-model="collapsed" :trigger="null" collapsible theme="light"
                    style="box-shadow: 2px 0 6px rgba(0,21,41,.35);background-color: white">
      <router-link to="/">
        <div style="height: 4rem">
          <img v-if="!collapsed" src="@/assets/logobg.svg" style="width: 9rem;height: 2rem;margin-top: 1rem;margin-bottom: 1rem;margin-left: 1rem">
          <img v-if="collapsed" src="@/assets/cropped.png" style="height: 2rem;margin-top: 1rem;margin-bottom: 1rem;margin-left: 1rem">
        </div>

      </router-link>
      <ClientSider/>
    </a-layout-sider>
    <a-layout style="background-color: white">
      <a-layout-header :style="{width: '100%',backgroundColor:'#ffffff',height:'8rem',padding: '0 0 0',
            borderBottom: '1px solid #e8e8e8',overflow:'hidden'}">

        <a-row>
          <a-col span="2">
            <a-icon
                class="trigger"
                :type="collapsed ? 'menu-unfold' : 'menu-fold'"
                @click="() => (collapsed = !collapsed)"
            />
          </a-col>
          <a-col span="10">
            <div style="padding: 1%">
              <p style="font-size: 2rem;font-family: sofia_proregular;margin-bottom: 0">Goodmorning
                Dennis</p>
              <p style="font-family: sofia_prosemibold;font-size: 1.2rem">What would you like to do today?</p>
            </div>

          </a-col>
          <a-col span="10">
            <div >
            <img  src="@/assets/images/hi.svg" style="width: 80%;position: absolute;top: -35px"/>
            </div>
          </a-col>
        </a-row>

      </a-layout-header>
      <a-layout-content
          :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
      >

        <div style="min-height: 40vh ">
          <a-row gutter="16" >
            <a-col span="8">
              <a-card hoverable  class="cardshadow" style="width: 100%;height: 23rem;">
                <div style="padding: 12%">

                  <p style="font-family: sofia_proregular;font-size: 2rem;padding-top: 1rem;">My projects</p>
                  <div >
                    <img  src="@/assets/images/manage.svg" style="width: 100%"/>
                  </div>
                </div>

              </a-card>

            </a-col>
            <a-col span="8">
              <a-card hoverable class="cardshadow" style="width: 100%;height: 23rem;">
                <div style="padding: 12%">

                  <p style="font-family: sofia_proregular;font-size: 2rem;padding-top: 1rem">Create a Project</p>
                  <div >
                    <img  src="@/assets/images/create.svg" style="width: 100%"/>
                  </div>
                </div>

              </a-card>

            </a-col>
            <a-col span="8">
              <a-row gutter="16">
                <a-col span="12">
                  <a-card class="cardshadow" hoverable style="width: 100%;height: 11rem;margin-bottom: 1rem;">
                    <div style="padding: 12%">
                      <p style="font-family: sofia_proregular;font-size: 1.2rem;position: absolute">Escrow </p>
                      <div style="margin-top: 1rem">
                        <img  src="@/assets/images/escrow.svg" style="width: 100%"/>
                      </div>



                    </div>
                  </a-card>

                </a-col>
                <a-col span="12">
                  <a-card class="cardshadow" hoverable style="width: 100%;height: 11rem;margin-bottom: 1rem;">
                    <div style="padding: 12%">
                      <p style="font-family: sofia_proregular;font-size: 1.2rem;position: absolute">Meetings</p>
                      <div style="margin-top: 1rem">
                        <img  src="@/assets/images/calendar.svg" style="width: 100%"/>
                      </div>



                    </div>



                  </a-card>
                </a-col>
                <a-col span="12">
                  <a-card class="cardshadow" hoverable style="width: 100%;height: 11rem;margin-bottom: 1rem;padding: 3%;">
                    <div style="padding: 12%">
                      <p style="font-family: sofia_proregular;font-size: 1.2rem;position: absolute">Issues</p>
                      <div style="margin-top: 1rem">
                        <img  src="@/assets/images/conf.svg" style="width: 100%"/>
                      </div>



                    </div>




                  </a-card>
                </a-col>
                <a-col span="12">

                  <a-card class="cardshadow" hoverable style="width: 100%;height: 11rem;margin-bottom: 1rem;">
                    <div style="padding: 12%">
                      <p style="font-family: sofia_proregular;font-size: 1.2rem;position: absolute">Chat</p>
                      <div style="margin-top: 1rem">
                        <img  src="@/assets/images/chat.svg" style="width: 100%"/>
                      </div>



                    </div>

                  </a-card>
                </a-col>
              </a-row>


            </a-col>
          </a-row>
        </div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import ClientSider from '@/components/client/layout/ClientSider'

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
}
</script>

<style scoped>
.cardshadow {
  box-shadow: 0 1rem 3rem rgba(0,0,0,.175)!important;

  background: white;
  border-radius: 2%;
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
