<template>
  <a-layout  style="min-height: 100vh;background-color: #F4F7FC">


    <DevSider/>

    <a-layout style="background-color: #F4F7FC">

      <a-layout-content
          :style="{  padding: '1% 2%', background: '#FAFBFF', minHeight: '280px', }"

      >
        <a-card class="hellocard">

          <a-row>
            <a-col span="12">
              <a-breadcrumb>
                <a-breadcrumb-item><a @click="$router.push('/Developer')" >Home</a></a-breadcrumb-item>
                <a-breadcrumb-item><a @click="$router.push('/DeveloperProjects')" >My Projects</a></a-breadcrumb-item>
                <a-breadcrumb-item><a >Contract stage</a></a-breadcrumb-item>
                <a-breadcrumb-item><a >{{ $route.params.projectSlug }}</a></a-breadcrumb-item>

              </a-breadcrumb>
              <span style="font-size: 1.7rem;font-family: sofia_prosemibold;margin-bottom: 0;color: black">
                Contract Negotiations</span>
            </a-col>
            <a-col span="6">
              <div style="text-align: center">
                <img src="@/assets/images/contract.svg" style="width: 20%"/>
              </div>


            </a-col>
          </a-row>


        </a-card>
        <div>
          <a-row>

            <a-col span="16">

              <div class="timelinecard">
                <p style="font-family: sofia_probold;font-size: 1.2rem">Here are the elements that you will discuss via the Video call meeting </p>
                <a-timeline>
                  <a-timeline-item>Project details and Parties involved</a-timeline-item>
                  <a-timeline-item>Features</a-timeline-item>
                  <a-timeline-item>Time allocation of features</a-timeline-item>
                  <a-timeline-item>Budget and Escrow disbursment</a-timeline-item>
                  <a-timeline-item>Technologies to be used</a-timeline-item>
                  <a-timeline-item>Codeln Role</a-timeline-item>

                </a-timeline>
                <div>
                  <p style="font-family: sofia_proregular;font-weight: bold">Helper features that we provide to ensure a success meeting discussions</p>
                  <a-row>
                    <a-col span="12">
                      <a-card  style="width: 90%">
                        <span slot="title" style="font-family: sofia_prosemibold;color: black">Contract form</span>

                        <p>Click on the icon shown when meeting starts to open the contract form this will have a guided steps
                          to enable a succesful filling on the elements stated above</p>


                      </a-card>
                    </a-col>
                    <a-col span="12">
                      <a-card  style="width: 90%">
                        <span slot="title" style=";font-family: sofia_prosemibold;color: black">Sketch pad</span>
                        <p>Enables both parties to sketch thus bringing out more understanding of features.We highly recommend using this during the feature discussion</p>




                      </a-card>
                    </a-col>
                  </a-row>


                </div>
              </div>



            </a-col>
            <a-col span="6">
              <a-empty
                  image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"
                  :image-style="{
      height: '60px',
    }"
              >
                <span slot="description"> Contract Meeting  </span>
                <p>Awaiting meeting invitation</p>
                <a-button type="primary" @click="$router.push('/Meeting')">
                  Create meeting
                </a-button>
              </a-empty>
            </a-col>
          </a-row>
        </div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import DevSider from '@/components/developer/layout/DevSider'


export default {
  name: "DevContract",
  data() {
    return {


    };
  },
  components: {
    DevSider


  },
  computed:{




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

.timelinecard {
  padding: 3%;
  box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075) !important;
  background: white;
  border-radius: 0;

}

</style>
