<template>
  <div>

    <div>
      <a-layout :style="{background:'#fff'}">

        <a-layout-content :style="{  marginTop: '0rem' }">
          <pageheader></pageheader>

          <div class="mainheader">
            <div class="hero">


              <div class="headercontainer">
                <p class="maintitle scale-in-centerheader">Access the Best Remote Developers Workforce</p>
                <p class="text__paragraph-big scale-in-centersubheader">An innovative application for managing projects
                  tasks ,timelines and personnel</p>
                <!--                      <p class="text__paragraph-small">Make your Project into Reality & Enjoy an Amazing Project Management Experience</p>-->
                <span class="scale-in-centersubheader">
                        <router-link to="/">
                        <a-button type="primary" style="height: 3rem;width: 14rem;"
                                  :size="large">
                          Create a project
                        </a-button>
                      </router-link>
                      <router-link to="/">
                        <a-button type="primary"
                                  style="margin-left: 1rem;height: 3rem;width: 14rem;"
                                  ghost>Available Gigs
                        </a-button>
                      </router-link>
                      </span>

              </div>
              <div class="mainpresentation scale-in-centerimages" style="margin-top: 5%">
                <div>
                  <img class="dots-4 noselect" src="https://finezjo.pl/src/assets/images/dots-4.svg" alt="">

                    <img class="folder" src="@/assets/images/note.png" style="width: 21%"/>


                  <div
                      style="border:5px solid #242a49  ;padding: 1%;border-radius: 2rem;background-color: #FAFBFF;width: 984px;height: 615px ">
                    <a-row gutter="4">
                      <a-col span="2" style="background-color: white;height: 100%">
                        <div style="padding: 1rem">
                          <img src="@/assets/logobg.svg" style="width: 100%"/>
                        </div>
                      </a-col>
                      <a-col span="22">
                        <a-card style="width: 45rem;margin-left: 6%;border: none;background-color:#FAFBFF ">
                          <span class="text__paragraph-big">Awesome Project</span>

                        </a-card>
                        <a-row
                            style="margin-top: 1.5rem;background-color: #F4F7FC;border-radius: 1rem;height: 29rem;padding: 2%;">
                          <a-col span="8">
                            <div style="">
                              <p style="font-family: sofia_proregular">Todo</p>


                              <a-card size="small" style="width: 13rem;margin-bottom: 1rem" class="shadowsmall">
                                <span slot="title" style="font-family: sofia_proextralight;font-size: 9px;">Due: 12/8/2020</span>
                                <span slot="extra" href="#"><a-icon type="delete" theme="twoTone"/></span>
                                <p style="font-family: sofia_prolight">Login pages</p>

                              </a-card>

                              <a-card size="small" style="width: 13rem;margin-bottom: 1rem" class="shadowsmall">
                                <span slot="title" style="font-family: sofia_proextralight;font-size: 9px;">Due: 12/8/2020</span>
                                <span slot="extra" href="#"><a-icon type="delete" theme="twoTone"/></span>
                                <p style="font-family: sofia_prolight">Admin dashboard</p>

                              </a-card>
                              <a-card size="small" style="width: 13rem;margin-bottom: 1rem" class="shadowsmall">
                                <span slot="title" style="font-family: sofia_proextralight;font-size: 9px;">Due: 12/8/2020</span>
                                <span slot="extra" href="#"><a-icon type="delete" theme="twoTone"/></span>
                                <p style="font-family: sofia_prolight">Profile</p>

                              </a-card>


                            </div>


                          </a-col>
                          <a-col span="8">
                            <div style="">
                              <p style="font-family: sofia_proregular">In progress</p>

                              <a-card size="small" style="width: 13rem;margin-bottom: 1rem" class="shadowsmall">
                                <span slot="title" style="font-family: sofia_proextralight;font-size: 9px;">Due: 12/8/2020</span>
                                <span slot="extra" href="#"><a-icon type="delete" theme="twoTone"/></span>
                                <p style="font-family: sofia_prolight">database structure</p>

                              </a-card>
                              <a-card size="small" style="width: 13rem;margin-bottom: 1rem" class="shadowsmall">
                                <span slot="title" style="font-family: sofia_proextralight;font-size: 9px;">Due: 12/8/2020</span>
                                <span slot="extra" href="#"><a-icon type="delete" theme="twoTone"/></span>
                                <p style="font-family: sofia_prolight">UX Ui design</p>

                              </a-card>


                            </div>


                          </a-col>
                          <a-col span="8">
                            <div style="">
                              <p style="font-family: sofia_proregular">Done</p>

                              <a-card size="small" style="width: 13rem" class="shadowsmall">
                                <span slot="title" style="font-family: sofia_proextralight;font-size: 9px;">Due: 12/8/2020</span>
                                <span slot="extra" href="#"><a-icon type="delete" theme="twoTone"/></span>
                                <p style="font-family: sofia_prolight">Landing page</p>

                              </a-card>

                            </div>


                          </a-col>
                        </a-row>
                      </a-col>


                    </a-row>
                  </div>

                  <div class="tasks">
                    <div
                        style="border:1px  ;padding: 2%;width: 80px;height: 81px;border-radius: 18%;background-color: #c4d7ec; ">
                      <div style="margin: 25%">
                        <svg data-v-34a11419="" viewBox="64 64 896 896" data-icon="calendar" width="1em" height="1em"
                             fill="currentColor" aria-hidden="true" focusable="false"
                             style="width: 36px;height: 42px;color: #6C71FA;">
                          <path data-v-34a11419=""
                                d="M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zM184 392V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136H184z"></path>
                        </svg>
                      </div>

                    </div>
                  </div>
                  <div class="newtask slide-right"
                       style="border:1px  ;padding: 1%;border-radius: 1%;background-color: #0086ff; ">

                    <span style="color: white;font-family: sofia_prosemibold;"><a-icon type="plus"/> Add new task</span>
                  </div>
                  <div class="ongoingtaskcard  slide-top">
                    <a-card size="small" style="width: 16rem">
                      <span slot="title" style="font-family: sofia_proregular">Add task</span>
                      <a slot="extra" href="#"></a>
                      <template slot="actions" class="ant-card-actions">

                        <a-button type="primary">
                          submit
                        </a-button>
                      </template>
                      <a-form :form="form" :label-col="{ span: 5 }" :wrapper-col="{ span: 16 }" @submit="handleSubmit">
                        <a-form-item label="Title">
                          <a-input

                          />
                        </a-form-item>
                      </a-form>

                    </a-card>
                  </div>


                  <div class="calendar">
                    <div
                        :style="{ width: '300px', border: '1px solid #d9d9d9', borderRadius: '14px',backgroundColor: 'white',padding:'3%' }">
                      <a-calendar :fullscreen="false"/>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

          <div id="features" style="">
            <section class="featuresection">
              <div>
                <h5 class="featuresmallheader">features</h5>
              </div>
              <div style="margin-right: 50%">
                <h2 class="featurebigheader">
                  A unique tool that allows you to efficiently manage work with your developer
                </h2>
              </div>


            </section>

            <div style=" padding-top: 2%;padding-left: 10%;padding-right: 10%">
              <a-row :gutter="16">
                <a-col :span="6">
                  <a-card class="featurecard">
                    <div style="text-align: center;padding-top: 20%">
                      <img src="@/assets/images/touch.svg" style="width: 40%;">
                    </div>
                    <div style="text-align: center;">
                    <p class="featurecardtext">intuitive interface</p>
                    <p style="font-family: sofia_proregular">
                      a friendly,modern design,clear information and unprecidented ease of use
                    </p>
                    </div>

                  </a-card>
                </a-col>
                <a-col :span="6">
                  <a-card class="featurecard">
                    <div style="text-align: center;padding-top: 20%">
                      <img src="@/assets/images/money.svg" style="width: 40%;">
                    </div>
                    <div style="text-align: center;">
                      <p class="featurecardtext">escrow management</p>
                      <p style="font-family: sofia_proregular">
                        enables accountabilty through task driven payouts
                      </p>
                    </div>

                  </a-card>
                </a-col>
                <a-col :span="6">
                  <a-card class="featurecard">
                    <div style="text-align: center;padding-top: 20%">
                      <img src="@/assets/images/blackphone.svg" style="width: 40%;">
                    </div>

                    <div style="text-align: center;">
                      <p class="featurecardtext">mobility</p>
                      <p style="font-family: sofia_proregular">
                        available on mobile devices enabling you always keep tabs
                      </p>
                    </div>

                  </a-card>
                </a-col>
                <a-col :span="6">
                  <a-card class="featurecard">
                    <div style="text-align: center;padding-top: 20%">
                      <img src="@/assets/images/team.svg" style="width: 40%;">
                    </div>
                    <div style="text-align: center;">
                      <p class="featurecardtext">conflict resolution</p>
                      <p style="font-family: sofia_proregular">
                        a third party to always help you solve issues
                      </p>
                    </div>

                  </a-card>
                </a-col>
              </a-row>
            </div>

          </div>

          <div id="howitworks" style="margin-bottom: 5rem">
            <section class="featuresection">
              <div style="padding: 100px 30px;margin: 0 auto;text-align: center">
                <div>
                  <h5 class="featuresmallheader">how it works</h5>
                </div>
                <div>
                  <h2 class="featurebigheader">
                    Our intuitive process to ensure a successful project
                  </h2>
                </div>

              </div>
              <div class="mainpresentation ">
                <div class="taskshow">

                    <a-card size="small" class="" style="width: 18rem;box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)!important;padding: 4%;">
                      <span slot="title" style="font-family: sofia_prosemibold;font-size: 18px">1. Express what you want</span>


                      <a-form :form="form" :label-col="{ span: 10 }" :wrapper-col="{ span: 24 }" @submit="handleSubmit">
                        <a-form-item label="Project title">
                          <a-input

                          />
                        </a-form-item>
                        <a-form-item label="Description">
                          <a-input

                          />
                        </a-form-item>
                        <a-form-item label="Budget&time:">
                          <a-input

                          />
                        </a-form-item>
                      </a-form>

                    </a-card>


                </div>
                <div id="mangeats"
                  style="border:5px solid #242a49 ;padding: 1%;border-radius: 2rem;background-color: #FAFBFF;width: 984px;height: 615px ">
                <a-row gutter="4">
                  <a-col span="2" style="background-color: white;height: 100%">
                    <div style="padding: 1rem">
                      <img src="@/assets/logobg.svg" style="width: 100%"/>
                    </div>
                  </a-col>
                  <a-col span="22">
                    <a-card style="width: 45rem;margin-left: 6%;border: none;background-color:#FAFBFF ">
                      <span class="text__paragraph-big">5 : Manage</span>

                    </a-card>
                    <a-row
                        style="margin-top: 1.5rem;background-color: #F4F7FC;border-radius: 1rem;height: 29rem;padding: 2%;">
                      <a-col span="8">
                        <div style="">
                          <p style="font-family: sofia_proregular">Todo</p>


                          <a-card size="small" style="width: 13rem;margin-bottom: 1rem" class="shadowsmall">
                            <span slot="title" style="font-family: sofia_proextralight;font-size: 9px;">Due: 12/8/2020</span>
                            <span slot="extra" href="#"><a-icon type="delete" theme="twoTone"/></span>
                            <p style="font-family: sofia_prolight">Login pages</p>

                          </a-card>

                          <a-card size="small" style="width: 13rem;margin-bottom: 1rem" class="shadowsmall">
                            <span slot="title" style="font-family: sofia_proextralight;font-size: 9px;">Due: 12/8/2020</span>
                            <span slot="extra" href="#"><a-icon type="delete" theme="twoTone"/></span>
                            <p style="font-family: sofia_prolight">Admin dashboard</p>

                          </a-card>
                          <a-card size="small" style="width: 13rem;margin-bottom: 1rem" class="shadowsmall">
                            <span slot="title" style="font-family: sofia_proextralight;font-size: 9px;">Due: 12/8/2020</span>
                            <span slot="extra" href="#"><a-icon type="delete" theme="twoTone"/></span>
                            <p style="font-family: sofia_prolight">Profile</p>

                          </a-card>


                        </div>


                      </a-col>
                      <a-col span="8">
                        <div style="">
                          <p style="font-family: sofia_proregular">In progress</p>

                          <a-card size="small" style="width: 13rem;margin-bottom: 1rem" class="shadowsmall">
                            <span slot="title" style="font-family: sofia_proextralight;font-size: 9px;">Due: 12/8/2020</span>
                            <span slot="extra" href="#"><a-icon type="delete" theme="twoTone"/></span>
                            <p style="font-family: sofia_prolight">database structure</p>

                          </a-card>
                          <a-card size="small" style="width: 13rem;margin-bottom: 1rem" class="shadowsmall">
                            <span slot="title" style="font-family: sofia_proextralight;font-size: 9px;">Due: 12/8/2020</span>
                            <span slot="extra" href="#"><a-icon type="delete" theme="twoTone"/></span>
                            <p style="font-family: sofia_prolight">UX Ui design</p>

                          </a-card>


                        </div>


                      </a-col>
                      <a-col span="8">
                        <div style="">
                          <p style="font-family: sofia_proregular">Done</p>

                          <a-card size="small" style="width: 13rem" class="shadowsmall">
                            <span slot="title" style="font-family: sofia_proextralight;font-size: 9px;">Due: 12/8/2020</span>
                            <span slot="extra" href="#"><a-icon type="delete" theme="twoTone"/></span>
                            <p style="font-family: sofia_prolight">Landing page</p>

                          </a-card>

                        </div>


                      </a-col>
                    </a-row>
                  </a-col>


                </a-row>
              </div>
                <div class="bids ">
                  <a-card size="small" class="shadowsmall" style="width: 28rem;font-size: 18px">
                    <span slot="title" style="font-family: sofia_prosemibold">2 :Accept Bids</span>





                  </a-card>
                  <a-row class="shadowsmallbid" >

                    <a-col span="18" >
                      <p>Name: Jessica Jone</p>
                      <p>Proposal : hello there text ...
                      </p>

                      <p>
                        Quote : $2000

                      </p>


                    </a-col>
                    <a-col span="4">
                      <div>

                        <a-tag color="#F0F6FD"
                               style='color: #007BFF'>
                          <a-icon type="environment"/>
                          KE
                        </a-tag>



                      </div>
                      <div style="margin-top: 1rem">
                        <a-button type="primary" ghost
                                  >
                          View bid
                        </a-button>
                      </div>


                    </a-col>


                  </a-row>
                  <a-row class="shadowsmallbid" >

                    <a-col span="18" >
                      <p>Name: Jessica Jone</p>
                      <p>Proposal : hello there text ...
                      </p>

                      <p>
                        Quote : $2000

                      </p>


                    </a-col>
                    <a-col span="4">
                      <div>

                        <a-tag color="#F0F6FD"
                               style='color: #007BFF'>
                          <a-icon type="environment"/>
                          KE
                        </a-tag>



                      </div>
                      <div style="margin-top: 1rem">
                        <a-button type="primary" ghost
                        >
                          View bid
                        </a-button>
                      </div>


                    </a-col>


                  </a-row>
                  <a-row class="shadowsmallbid" >

                    <a-col span="18" >
                      <p>Name: Jessica Jone</p>
                      <p>Proposal : hello there text ...
                      </p>

                      <p>
                        Quote : $2000

                      </p>


                    </a-col>
                    <a-col span="4">
                      <div>

                        <a-tag color="#F0F6FD"
                               style='color: #007BFF'>
                          <a-icon type="environment"/>
                          KE
                        </a-tag>



                      </div>
                      <div style="margin-top: 1rem">
                        <a-button type="primary" ghost
                        >
                          View bid
                        </a-button>
                      </div>


                    </a-col>


                  </a-row>


                </div>
                <div class="contract "
                     >

                  <span style="color: white;font-family: sofia_prosemibold;"><a-icon type="form"/> 3: Contract</span>
                </div>
                <div class="escrow "
                >

                  <span style="color: white;font-family: sofia_prosemibold;"><a-icon type="bank"/> 4: Escrow</span>
                </div>
              </div>


            </section>


          </div>
          <div id="getstarted" style="margin-bottom: 5rem">
            <section class="featuresection">
              <section class="featuresection">
                <div>
                  <h5 class="featuresmallheader">get started</h5>
                </div>
                <div style="margin-right: 50%">
                  <h2 class="featurebigheader">
                    Ready to express yourself and make your idea into a reality
                  </h2>

                </div>


              </section>
              <div  class="cta ">
                <span class="scale-in-centersubheader">
                        <router-link to="/">
                        <a-button type="primary" style="height: 3rem;width: 14rem;"
                                  :size="large">
                          Create a project
                        </a-button>
                      </router-link>
                      <router-link to="/">
                        <a-button type="primary"
                                  style="margin-left: 1rem;height: 3rem;width: 14rem;"
                                  ghost>Available Gigs
                        </a-button>
                      </router-link>
                      </span>
              </div>
              <div class="mainpresentation ">
               <img src="@/assets/images/smile.png"/>
              </div>


            </section>


          </div>


        </a-layout-content>
        <Footer/>
      </a-layout>
    </div>
  </div>
</template>

<script>
import Pageheader from '@/components/homepages/layout/Header.vue'
import Footer from '@/components/homepages/layout/Footer'

export default {
  name: "Home",
  components: {
    Pageheader,Footer

  },
}
</script>

<style scoped>


.maintitle {
  font-family: sofia_probold;
  font-weight: 700;
  font-size: 44px;
  line-height: 1.36;
  letter-spacing: -1px;
  color: #007bff;

}

.headercontainer {
  display: flex;
  flex-direction: column;
  text-align: center;
  max-width: 1246px;
  margin: 0 auto;
  position: relative;
  margin-left: 22%;
  margin-right: 22%;
  margin-top: 8rem;

}

.text__paragraph-big {
  font-size: 22px;
  text-align: center;
  color: #272848;


  letter-spacing: 0 !important;
  font-family: sofia_proregular !important;
}

.text__paragraph-small {
  font-size: 22px;
  text-align: center;
  color: #272848;


  letter-spacing: 0 !important;
  font-family: sofia_prolight !important;
}

.mainheader {
  background: #fff;
  overflow: hidden;
  height: 1180px;
  position: relative;
  z-index: 0;
}

.hero {
  display: block;
  height: 883px;
  width: 100%;
  background: #ffffff;
  position: absolute;
}

.mainpresentation {
  display: flex;
  position: relative;
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 20px;
}

.dots-4 {
  position: absolute;
  left: -160px;
  top: 292px;
}

.calendar {
  position: absolute;
  left: -190px;
  top: 335px;
}

.tasks {
  position: absolute;
  top: -36px;
  left: -200px;
}
.taskshow {
  position: absolute;
  top: -36px;
  left: -296px;
}

.newtask {
  position: absolute;
  left: -60px;
  top: 75px;
}
.contract{
  position: absolute;
  left: -60px;
  top: 400px;
  border:1px  ;padding: 1%;border-radius: 1%;background-color: #0086ff;
}
.escrow{
  position: absolute;
  left: -50px;
  top: 480px;
  border:1px  ;padding: 1%;border-radius: 1%;background-color: #0086ff;
}

.ongoingtaskcard {
  position: absolute;
  right: -154px;
  top: 260px;
}
.folder{
  position: absolute;
  right: -210px;
  top: 413px;
}

.bids{
  position: absolute;
  right: -332px;
  top: 60px;

}

.shadowsmall {
  box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075) !important;
  border: none;
  background: white;
  border-radius: 3%;
}
.shadowsmallbid{
  box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075) !important;
  border: none;
  background: white;
  border-radius: 1%;
  font-family:sofia_prolight;height: 7rem;margin-top: 1rem;padding: 3%

}

.featuresection {
  max-width: 1316px;
  padding: 0 30px;
  margin: 0 auto;
  position: relative;

}
.cta{
  display: flex;
  width: 100%;
  flex: 1 1 calc(100% - 797px);
  justify-content: flex-end;
  align-items: flex-end;
}

.featuresmallheader {
  font-size: 18px;
  font-weight: 600;
  color: #0086ff;
  font-family: sofia_prosemibold;
  letter-spacing: 0 !important;
}

.featurebigheader {
  font-size: 42px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.26;
  letter-spacing: -1px;
  color: #07092f;
  font-family: sofia_prosemibold;

}

.featurecard {
  height: 376px;
  border-radius: 14px;

  border: 1px solid #d4d4ee;

}

.featurecardtext {
  font-size: 18px;
  font-weight: 600;
  color: #272848;
  font-family: sofia_prosemibold;
}
.poolavatar {
  width: 80px;
  height: 80px;
  line-height: 80px;
  font-size: 30px;
  background-color: #0679FB;
  margin: 29% 14%;
}


.slide-right {
  -webkit-animation: slide-right 10s cubic-bezier(0.250, 0.460, 0.450, 0.940) 1s infinite alternate both;
  animation: slide-right 10s cubic-bezier(0.250, 0.460, 0.450, 0.940) 1s infinite alternate both;
}

@-webkit-keyframes slide-right {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
  100% {
    -webkit-transform: translateX(100px);
    transform: translateX(100px);
  }
}

@keyframes slide-right {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
  100% {
    -webkit-transform: translateX(100px);
    transform: translateX(100px);
  }
}

.slide-top {
  -webkit-animation: slide-top 5s cubic-bezier(0.250, 0.460, 0.450, 0.940) 1s infinite alternate-reverse both;
  animation: slide-top 5s cubic-bezier(0.250, 0.460, 0.450, 0.940) 1s infinite alternate-reverse both;
}

.slide-top:hover {
  cursor: pointer;
  animation-play-state: paused;
}

@-webkit-keyframes slide-top {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  100% {
    -webkit-transform: translateY(-100px);
    transform: translateY(-100px);
  }
}

@keyframes slide-top {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  100% {
    -webkit-transform: translateY(-100px);
    transform: translateY(-100px);
  }
}

/* animations for header

 */

.scale-in-centerheader {
  -webkit-animation: scale-in-center 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  animation: scale-in-center 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

.scale-in-centersubheader {
  -webkit-animation: scale-in-center 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.5s both;
  animation: scale-in-center 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.5s both;
}

.scale-in-centerimages {
  -webkit-animation: scale-in-center 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) 1s both;
  animation: scale-in-center 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) 1s both;
}

@-webkit-keyframes scale-in-center {
  0% {
    -webkit-transform: scale(0);
    transform: scale(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes scale-in-center {
  0% {
    -webkit-transform: scale(0);
    transform: scale(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
}


</style>