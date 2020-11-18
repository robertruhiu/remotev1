<template>
  <a-layout  style="min-height: 100vh;background-color: #F4F7FC;">


    <ClientSider/>

    <a-layout style="background-color: #F4F7FC">

      <a-layout-content
          :style="{  padding: '1% 2%', background: '#FAFBFF', minHeight: '280px', }"

      >
        <a-card class="hellocard">

          <a-row>
            <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
                   :md="{span: 12, offset: 0 }"
                   :lg="{span: 12, offset: 0 }" :xl="{span: 12,offset: 0 }">
              <a-breadcrumb>
                <a-breadcrumb-item><a @click="$router.push('/Dashboard')" >Home</a></a-breadcrumb-item>
                <a-breadcrumb-item><a @click="$router.push('/Myprojects')" >My Projects</a></a-breadcrumb-item>
                <a-breadcrumb-item><a >Contract stage</a></a-breadcrumb-item>
                <a-breadcrumb-item><a >{{ $route.params.projectSlug }}</a></a-breadcrumb-item>

              </a-breadcrumb>
              <span style="font-size: 1.7rem;font-family: sofia_prosemibold;margin-bottom: 0;color: black">
                Contract Negotiations</span>
            </a-col>

            <hide-at breakpoint="mediumAndBelow">
              <a-col :xs="{span: 12, offset: 0 }" :sm="{span: 12, offset: 0 }"
                     :md="{span: 12, offset: 0 }"
                     :lg="{span: 8, offset: 0 }" :xl="{span: 6,offset: 0 }">
                <div style="text-align: center">
                  <img src="@/assets/images/contract.svg" style="width: 20%"/>
                </div>


              </a-col>
            </hide-at>
          </a-row>


        </a-card>
        <div>
          <a-row>

            <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
                   :md="{span: 16, offset: 0 }"
                   :lg="{span: 16, offset: 0 }" :xl="{span: 16,offset: 0 }">

              <div class="timelinecard">
                <p style="font-family: sofia_probold;font-size: 1.2rem">Here are the elements that you will discuss at the negotiations </p>
                <a-timeline>
                  <a-timeline-item>Project details </a-timeline-item>
                  <a-timeline-item>Project breakdown into features</a-timeline-item>
                  <a-timeline-item>Time allocation of features</a-timeline-item>
                  <a-timeline-item>Budget and Escrow disbursment</a-timeline-item>
                  <a-timeline-item>Technologies to be used</a-timeline-item>
                  <a-timeline-item>Codeln Role</a-timeline-item>

                </a-timeline>

              </div>



            </a-col>
            <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
                   :md="{span: 6, offset: 0 }"
                   :lg="{span: 6, offset: 0 }" :xl="{span: 6,offset: 0 }">
              <a-empty
                  image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"
                  :image-style="{
      height: '60px',
    }"
              >
                <span slot="description"> Contract Meeting  </span>
                <a-button type="primary" @click="$router.push({ name: 'Meeting', params: { projectSlug: $route.params.projectSlug} })" >
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
import ClientSider from "@/components/client/layout/ClientSider";

import { hideAt} from 'vue-breakpoints'



export default {
name: "Contract",
  data() {
    return {




    }

  },
  components: {
    ClientSider,hideAt




  },

  mounted() {

  },
  methods: {


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
.stepcard {
  padding: 2%;
  box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075) !important;
  background: white;
  border-radius: 0;

}
.timelinecard {
  padding: 3%;
  box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075) !important;
  background: white;
  border-radius: 0;

}
</style>
