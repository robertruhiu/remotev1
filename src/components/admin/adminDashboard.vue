<template>
  <a-layout  style="min-height: 100vh;background-color: #F4F7FC;margin-left: 200px">


    <AdminSider/>

    <a-layout style="background-color: #F4F7FC">

      <a-layout-content
          :style="{  padding: '1% 2%', background: '#FAFBFF', minHeight: '280px', }"

      >

        <a-card class="hellocard">
            <span style="font-size: 1.7rem;font-family: sofia_prosemibold;margin-bottom: 0;color: black">
                Welcome to the Admin view </span>

        </a-card>





        <div style="min-height: 40vh ;position: relative">
          <a-row gutter="16">
            <a-col span="6">
              <a-card hoverable class="cardshadow" style="width: 100%;margin-bottom: 1rem">
                <router-link to="/AdminProjects">
                  <div>

                    <p style="font-family: sofia_proregular;font-size: 1.5rem;color: black;margin-bottom: 0">Manage Projects</p>
                    <div >
                      <img src="@/assets/images/planning.svg" style="width: 30%"/>

                    </div>

                  </div>
                </router-link>


              </a-card>

            </a-col>
            <a-col span="6">
              <a-card hoverable class="cardshadow" style="width: 100%;margin-bottom: 1rem" @click="newproject">

                  <div>

                    <p style="font-family: sofia_proregular;font-size: 1.5rem;color: black;margin-bottom: 0">Create a Project</p>
                    <div>
                      <img src="@/assets/images/createproject.svg" style="width: 30%"/>
                    </div>
                  </div>



              </a-card>

            </a-col>
            <a-col span="6">
              <a-card class="cardshadow" hoverable style="width: 100%;margin-bottom: 1rem;">
                <router-link to="/AdminEscrow">
                  <div>
                    <p style="font-family: sofia_proregular;font-size: 1.5rem;color: black;margin-bottom: 0">Manage Escrow </p>
                    <div >
                      <img src="@/assets/images/esc.svg" style="width: 30%"/>


                    </div>





                  </div>
                </router-link>
              </a-card>


            </a-col>
            <a-col span="6">
              <a-card class="cardshadow" hoverable style="width: 100%;margin-bottom: 1rem;">
                <router-link to="/ManageDevs">
                <div>
                  <p style="font-family: sofia_proregular;font-size: 1.5rem;color: black;margin-bottom: 0">Manage Developers</p>
                  <div >
                    <img src="@/assets/images/developer.svg" style="width: 30%"/>

                  </div>



                </div>
                </router-link>


              </a-card>


            </a-col>
            <a-col span="6">
              <a-card class="cardshadow" hoverable style="width: 100%;margin-bottom: 1rem;%;">
                <router-link to="/AdminIssues">
                  <div>
                    <p style="font-family: sofia_proregular;font-size: 1.5rem;color: black;margin-bottom: 0">Bugs & issues </p>
                    <div >
                      <img src="@/assets/images/alert.svg" style="width: 30%"/>

                    </div>








                  </div>
                </router-link>


              </a-card>


            </a-col>
            <a-col span="6">
              <a-card class="cardshadow" hoverable style="width: 100%;margin-bottom: 1rem;">

                <div>
                  <p style="font-family: sofia_proregular;font-size: 1.5rem;color: black;margin-bottom: 0">Chat</p>
                  <div >
                    <img src="@/assets/images/chat1.svg" style="width: 30%"/>

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
import AdminSider from '@/components/admin/layout/Adminsider'
export default {
name: "adminDashboard",
  components: {
    AdminSider


  },
  methods:{
    newproject(){
      this.$store.dispatch('setProject', null)
      this.$router.push({
        name: 'AdminCreateEditProject'
      })
    }
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

.cardshadow {

  box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075) !important;

  background: white;
  border-radius: 0;
  height: 13rem;
}

</style>
