<template>
  <div>

    <div>
      <a-layout :style="{background:'#fff'}">

        <a-layout-content :style="{  marginTop: '0rem' }">
          <pageheader></pageheader>

          <div class="mainheader">
            <div class="hero">


              <div class="headercontainer">
                <p class="maintitle scale-in-centerheader">Access Top African Freelance Programmers</p>
                <p class="text__paragraph-big scale-in-centersubheader">An innovative platform for managing your
                  project, timelines and freelancer’s tasks</p>

                <span class="scale-in-centersubheader">
                        <a href="https://forms.gle/wDEeGfD4mq7MF2yG8" target="_blank">
                        <a-button type="primary" class="ctabutton" style="margin-right: 1%;"
                                  :size="large">
                          Create a project
                        </a-button>
                      </a>
                      <router-link to="/">
                        <a-button type="primary" disabled class="ctabutton"
                                  style=""
                                  ghost>See available gigs
                        </a-button>
                      </router-link>
                      </span>

              </div>


              <div class="mainpresentation scale-in-centerimages" style="margin-top: 5%">
                <hide-at breakpoint="mediumAndBelow">
                  <div>
                    <img class="dots-4 noselect" src="https://finezjo.pl/src/assets/images/dots-4.svg" alt="">

                    <img class="folder" src="@/assets/images/note.png" style="width: 17%"/>


                    <div class="tablet"
                         style=" ">
                      <a-row gutter="4">
                        <a-col span="2" style="background-color: white;height: 100%">
                          <div style="padding: 1rem">
                            <img src="@/assets/logobg.svg" style="width: 100%"/>
                          </div>
                        </a-col>
                        <a-col span="22">
                          <a-card style="margin-left: 6%;border: none;background-color:#FAFBFF ">
                            <span class="text__paragraph-big">Awesome Project </span>


                          </a-card>
                          <a-row gutter="16"
                                 style="margin-top: 1.5rem;background-color: #F4F7FC;border-radius: 1rem;height: 29rem;padding: 2%;">
                            <a-col span="8">
                              <div>
                                <p style="font-family: sofia_proregular">Todo</p>
                                <div style="height:26rem;overflow: auto;">
                                  <draggable class="list-group" style="height: 25rem" :list="list1" group="tasks"
                                             @change="log">
                                    <div
                                        class="list-group-item"
                                        v-for="(element,index) in list1"
                                        :key="element.name"
                                    >
                                      <a-card hoverable size="small" style="width: 13rem;margin-bottom: 1rem" class="shadowsmall">
                                        <span slot="title" style="font-family: sofia_proextralight;font-size: 9px;">Due: {{ element.deadline }}</span>
                                        <span slot="extra" href="#" @click="remove(1,index)"><a-icon type="delete"
                                                                                                     theme="twoTone"/></span>
                                        <p style="font-family: sofia_prolight">{{ element.name }} </p>
                                        <span style="font-family: sofia_prolight">Assigned to:
                                        <a-tag color="blue">
                                         {{ element.assignedto }}
                                        </a-tag>

                                      </span>

                                      </a-card>


                                    </div>
                                  </draggable>
                                </div>


                              </div>


                            </a-col>
                            <a-col span="8">
                              <div style="">
                                <p style="font-family: sofia_proregular">In progress</p>
                                <div style="height:26rem;overflow: auto;">
                                  <draggable class="list-group" style="height: 25rem" :list="list2" group="tasks"
                                             @change="log">
                                    <div
                                        class="list-group-item"
                                        v-for="(element,index) in list2"
                                        :key="element.name"
                                    >
                                      <a-card hoverable size="small" style="width: 13rem;margin-bottom: 1rem" class="shadowsmall">
                                        <span slot="title" style="font-family: sofia_proextralight;font-size: 9px;">Due: {{ element.deadline }}</span>
                                        <span slot="extra" href="#" @click="remove(2,index)"><a-icon type="delete"
                                                                                                     theme="twoTone"/></span>
                                        <p style="font-family: sofia_prolight">{{ element.name }} </p>
                                        <span style="font-family: sofia_prolight">Assigned to:
                                      <a-tag color="blue">
                                         {{ element.assignedto }}
                                        </a-tag>
                                      </span>

                                      </a-card>


                                    </div>
                                  </draggable>
                                </div>


                              </div>


                            </a-col>
                            <a-col span="8">
                              <div style="">
                                <p style="font-family: sofia_proregular">Done</p>
                                <div style="height:26rem;overflow: auto;">

                                  <draggable class="list-group" style="height: 25rem" :list="list3" group="tasks"
                                             @change="log">
                                    <div
                                        class="list-group-item"
                                        v-for="(element,index) in list3"
                                        :key="element.name"
                                    >
                                      <a-card hoverable size="small" style="width: 13rem;margin-bottom: 1rem" class="shadowsmall">
                                        <span slot="title" style="font-family: sofia_proextralight;font-size: 9px;">Due: {{ element.deadline }}</span>
                                        <span slot="extra" href="#" @click="remove(3,index)"><a-icon type="delete"
                                                                                                     theme="twoTone"/></span>
                                        <p style="font-family: sofia_prolight">{{ element.name }} </p>
                                        <span style="font-family: sofia_prolight">Assigned to:
                                      <a-tag color="blue">
                                         {{ element.assignedto }}
                                        </a-tag>
                                      </span>

                                      </a-card>


                                    </div>
                                  </draggable>
                                </div>


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

                    <div class="newtask slide-right "
                         style="border:1px  ;padding: 1%;border-radius: 1%;background-color: #0086ff; ">

                      <span style="color: white;font-family: sofia_prosemibold;"><a-icon
                          type="plus"/> Add new task</span>

                    </div>

                    <div class="ongoingtaskcard  ">
                      <a-card size="small" style="width: 16rem">
                        <span slot="title" style="font-family: sofia_proregular">Add task(try me out)</span>
                        <a slot="extra" href="#"></a>
                        <template slot="actions" class="ant-card-actions">

                          <a-button type="primary" @click="add">
                            submit
                          </a-button>
                        </template>
                        <a-form :form="form">
                          <a-form-item label="Title">
                            <a-input v-model="newtask"

                            />

                          </a-form-item>
                          <a-form-item label="Deadline">

                            <a-date-picker v-model="deadline" @change="Deadlinepick"/>

                          </a-form-item>
                          <a-form-item label="Assign to">
                            <a-select default-value="lucy" style="width: 120px" v-model="assignedto" @change="Assignedto">
                              <a-select-option value="jack">
                                jack
                              </a-select-option>
                              <a-select-option value="lucy">
                                lucy
                              </a-select-option>
                              <a-select-option value="yiminghe">
                                yiminghe
                              </a-select-option>
                            </a-select>

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
                </hide-at>
                <show-at breakpoint="medium">
                  <img src="@/assets/images/tabletmain.png" style="width: 100%;">
                </show-at>
              </div>
            </div>
          </div>

          <div id="features" style="margin-bottom: 2rem">
            <section class="featuresection">
              <div style="padding: 2% 5%;margin: 0 auto;text-align: center">
                <div>
                  <h5 class="featuresmallheader">Features</h5>
                </div>
                <div>
                  <h2 class="featurebigheader">
                    A unique tool that allows you to efficiently manage product development with your Programmer
                  </h2>
                </div>

              </div>


            </section>

            <div style=" padding-top: 2%;padding-left: 10%;padding-right: 10%">
              <a-row :gutter="16">
                <a-col :xs="{span: 24, offset: 0  }" :sm="{span: 12, offset: 0 }"
                       :md="{span:6, offset: 0 }"
                       :lg="{span: 6, offset: 0 }" :xl="{span: 6,offset: 0 }" style="margin-bottom: 1rem">
                  <a-card class="featurecard">
                    <div style="text-align: center;padding-top: 20%">
                      <img src="@/assets/images/talent.svg" style="width: 40%;">
                    </div>
                    <div style="text-align: center;">
                      <p class="featurecardtext">Verified talent</p>
                      <p style="font-family: sofia_proregular">
                        access an exclusive list of verified talent ready to bring your dream project to reality
                      </p>
                    </div>

                  </a-card>
                </a-col>
                <a-col :xs="{span: 24, offset: 0  }" :sm="{span: 12, offset: 0 }"
                       :md="{span:6, offset: 0 }"
                       :lg="{span: 6, offset: 0 }" :xl="{span: 6,offset: 0 }" style="margin-bottom: 1rem">
                  <a-card class="featurecard">
                    <div style="text-align: center;padding-top: 20%">
                      <img src="@/assets/images/project.svg" style="width: 40%;">
                    </div>
                    <div style="text-align: center;">
                      <p class="featurecardtext">Project tracking</p>
                      <p style="font-family: sofia_proregular">
                        effectively track and manage your product development process from start to finish
                      </p>
                    </div>

                  </a-card>
                </a-col>
                <a-col :xs="{span: 24, offset: 0  }" :sm="{span: 12, offset: 0 }"
                       :md="{span:6, offset: 0 }"
                       :lg="{span: 6, offset: 0 }" :xl="{span: 6,offset: 0 }" style="margin-bottom: 1rem">
                  <a-card class="featurecard">
                    <div style="text-align: center;padding-top: 20%">
                      <img src="@/assets/images/money.svg" style="width: 40%;">
                    </div>

                    <div style="text-align: center;">
                      <p class="featurecardtext">Pay in escrow</p>
                      <p style="font-family: sofia_proregular">
                        seamlessly manage your payment based on your milestones using escrow
                      </p>
                    </div>

                  </a-card>
                </a-col>
                <a-col :xs="{span: 24, offset: 0  }" :sm="{span: 12, offset: 0 }"
                       :md="{span:6, offset: 0 }"
                       :lg="{span: 6, offset: 0 }" :xl="{span: 6,offset: 0 }" style="margin-bottom: 1rem">
                  <a-card class="featurecard">
                    <div style="text-align: center;padding-top: 20%">
                      <img src="@/assets/images/team.svg" style="width: 40%;">
                    </div>
                    <div style="text-align: center;">
                      <p class="featurecardtext">Conflict resolution</p>
                      <p style="font-family: sofia_proregular">
                        experience swift conflict resolution to carter for any eventuality
                      </p>
                    </div>

                  </a-card>
                </a-col>
              </a-row>
            </div>

          </div>


          <hide-at breakpoint="mediumAndBelow">
            <div id="howitworksbig" style="margin-bottom: 5rem">
              <section class="featuresection">
                <div class style="margin: 0 auto;text-align: center">
                  <div>
                    <h5 class="featuresmallheader">How it works</h5>
                  </div>
                  <div>
                    <h2 class="featurebigheader">
                      Intuitive process to ensure a successful project
                    </h2>
                  </div>

                </div>

                <div class="mainpresentation ">
                  <div class="express text__paragraph-big "
                  >

                    <p style="font-family: sofia_proregular;margin-bottom: 1rem">
                      <a-icon type="form"/>
                      1: Express your needs
                    </p>

                    <a-input placeholder="Project title" style="margin-bottom: 1rem"

                    />
                    <a-input placeholder="Description" style="margin-bottom: 1rem"

                    />
                    <a-input placeholder="Budget&time" style="margin-bottom: 1rem"

                    />


                  </div>


                  <div id="mangeats"
                       style="border:5px solid #242a49 ;padding: 1%;border-radius: 2rem;background-color: #FAFBFF;width: 984px;height: 615px ">
                    <a-row gutter="4">
                      <a-col span="2">

                      </a-col>
                      <a-col span="22">
                        <a-card style="margin-left: 6%;border: none;background-color:#FAFBFF ">
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
                                <p style="font-family: sofia_prolight">Database structure</p>

                              </a-card>
                              <a-card size="small" style="width: 13rem;margin-bottom: 1rem" class="shadowsmall">
                                <span slot="title" style="font-family: sofia_proextralight;font-size: 9px;">Due: 12/8/2020</span>
                                <span slot="extra" href="#"><a-icon type="delete" theme="twoTone"/></span>
                                <p style="font-family: sofia_prolight">UX/Ui</p>

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
                  <div class="bids">
                    <div class="shadowsmall bidcard">
                      <span class="text__paragraph-big">2 :Accept Bids</span>
                    </div>
                    <a-row class="shadowsmallbid">
                      <a-col span="18">
                        <p>Name: Jessica Jone</p>
                        <p>Proposal : Am skilled at ...</p>

                        <p>Quote : $2000</p>
                      </a-col>
                      <a-col span="4">
                        <div>
                          <a-tag color="#F0F6FD" style="color: #007BFF">
                            <a-icon type="environment"/>
                            SA
                          </a-tag>
                        </div>
                        <div style="margin-top: 1rem">
                          <a-button type="primary" ghost>View bid</a-button>
                        </div>
                      </a-col>
                    </a-row>
                    <a-row class="shadowsmallbid">
                      <a-col span="18">
                        <p>Name: Jessica Jone</p>
                        <p>Proposal : Here is my port ...</p>

                        <p>Quote : $3000</p>
                      </a-col>
                      <a-col span="4">
                        <div>
                          <a-tag color="#F0F6FD" style="color: #007BFF">
                            <a-icon type="environment"/>
                            NG
                          </a-tag>
                        </div>
                        <div style="margin-top: 1rem">
                          <a-button type="primary" ghost>View bid</a-button>
                        </div>
                      </a-col>
                    </a-row>
                    <a-row class="shadowsmallbid">
                      <a-col span="18">
                        <p>Name: Jessica Jone</p>
                        <p>Proposal : Am available to ...</p>

                        <p>Quote : $2500</p>
                      </a-col>
                      <a-col span="4">
                        <div>
                          <a-tag color="#F0F6FD" style="color: #007BFF">
                            <a-icon type="environment"/>
                            GH
                          </a-tag>
                        </div>
                        <div style="margin-top: 1rem">
                          <a-button type="primary" ghost>View bid</a-button>
                        </div>
                      </a-col>
                    </a-row>
                  </div>


                  <div class="contract "
                  >

                    <span style="color: white;font-family: sofia_prosemibold;"><a-icon
                        type="file-text"/> 3: Contract</span>
                  </div>

                  <div class="escrow "
                  >

                    <span style="color: white;font-family: sofia_prosemibold;"><a-icon
                        type="bank"/> 4: Escrow Payment</span>
                  </div>
                </div>
              </section>
            </div>


          </hide-at>
          <show-at breakpoint="medium">
            <div id="howitworkssmall" style="margin-bottom: 5rem">
              <section class="featuresection">
                <div class style="margin: 0 auto;text-align: center">
                  <div>
                    <h5 class="featuresmallheader">how it works</h5>
                  </div>
                  <div>
                    <h2 class="featurebigheader">
                      Our intuitive process to ensure a successful project
                    </h2>
                  </div>

                </div>
                <img src="@/assets/images/works.png" style="width: 100%;">
              </section>
            </div>
          </show-at>

          <div id="getstarted" style="margin-bottom: 5rem">
            <section style="padding: 2% 5%">
              <a-row gutter="16">
                <a-col :xs="{span: 24, offset: 0  }" :sm="{span: 24, offset: 0 }"
                       :md="{span: 12, offset: 0 }"
                       :lg="{span: 12, offset: 0 }" :xl="{span: 12,offset: 0 }" style="">
                  <img src="@/assets/images/startup.svg" style="width: 100%"/>
                </a-col>
                <a-col :xs="{span: 24, offset: 0  }" :sm="{span: 24, offset: 0 }"
                       :md="{span: 12, offset: 0 }"
                       :lg="{span: 12, offset: 0 }" :xl="{span: 12,offset: 0 }">
                  <div style="width: 100%;padding: 2%">
                    <div>
                      <h5 class="featuresmallheader">Get started</h5>
                    </div>
                    <div>
                      <h2 class="featurebigheader">
                        Ready to turn your idea into a reality?
                      </h2>
                      <div>
                <span class="scale-in-centersubheader">
                 <a href="https://forms.gle/wDEeGfD4mq7MF2yG8" target="_blank">
                        <a-button type="primary" class="ctabutton" style="margin-right: 1%;"
                                  :size="large">
                          Create a project
                        </a-button>
                      </a>
                    <router-link to="/">
                      <a-button type="primary" disabled class="ctabutton"

                                ghost>See available gigs
                      </a-button>
                    </router-link>

                      </span>
                      </div>

                    </div>

                  </div>
                </a-col>
              </a-row>


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
import {hideAt, showAt} from 'vue-breakpoints'
import draggable from 'vuedraggable'
import moment from 'moment';

export default {
  name: "Home",
  components: {
    Pageheader, Footer,
    hideAt, showAt, draggable

  },
  data() {
    return {
      newtask: '',
      deadline: null,
      assignedto: 'lucy',
      list1: [
        {name: "Login pages", id: 1, 'deadline': '2021-08-11', 'assignedto': 'dennis'},
        {name: "admin dashboard", id: 2, 'deadline': '2021-08-11', 'assignedto': 'dennis'},
        {name: "Profile", id: 3, 'deadline': '2021-08-11', 'assignedto': 'dennis'},

      ],
      list2: [
        {name: "Database structure", id: 4, 'deadline': '2021-08-11', 'assignedto': 'robert'},
        {name: "UI/UX", id: 5, 'deadline': '2021-08-11', 'assignedto': 'robert'},

      ],
      list3: [
        {name: "landing Page", id: 6, 'deadline': '2021-08-11', 'assignedto': 'jessica'},

      ]

    }
  },
  methods: {
    moment,
    add() {
      this.list1.push({name: this.newtask, deadline: this.deadline, assignedto: this.assignedto});
      this.newtask = ''

    },
    remove(listnumber, index) {
      if (listnumber === 1) {
        this.list1.splice(index, 1);

      } else if (listnumber === 2) {
        this.list2.splice(index, 1);

      } else if (listnumber === 3) {
        this.list3.splice(index, 1);

      }

    },


    log: function (evt) {
      window.console.log(evt);
    },
    Deadlinepick(date, dateString) {
      this.deadline = dateString

    },
    Assignedto(value) {
      this.assignedto = value

    },


  }
}
</script>

<style scoped>
.ctabutton {
  height: 3rem;
  width: 14rem;
}


.maintitle {
  font-family: sofia_probold;
  font-weight: 700;
  font-size: 3rem;
  line-height: 1.36;
  letter-spacing: -1px;
  color: #007bff;

}

.headercontainer {
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
  margin: 0 auto;
  position: relative;
  padding: 2%;

  margin-top: 6rem;

}

.text__paragraph-big {
  font-size: 1.5rem;
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

.tablet {
  border: 5px solid #242a49;
  padding: 1%;
  border-radius: 2rem;
  background-color: #FAFBFF;
  width: 61.5rem;
  height: 38.4375rem

}

.mainpresentation {
  display: flex;
  position: relative;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
  justify-content: center;
}

.dots-4 {
  position: absolute;
  left: 233px;
  top: 292px;
}

.calendar {
  position: absolute;
  left: 190px;
  top: 335px;
}

.tasks {
  position: absolute;
  top: -36px;
  left: 210px;
}

.taskshow {
  position: absolute;
  top: -36px;
  left: -296px;
}

.newtask {
  position: absolute;
  left: 280px;

  top: 75px;
}

.contract {
  position: absolute;
  left: 300px;
  top: 400px;
  border: 1px;
  padding: 1%;
  border-radius: 1%;
  background-color: #0086ff;
}

.express {
  position: absolute;
  left: 238px;
  top: 20px;
  border: 1px;
  padding: 1%;
  border-radius: 1%;
  background-color: #ffffff;
  width: 13rem;
  box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .15) !important;

}

.escrow {
  position: absolute;
  left: 300px;
  top: 480px;
  border: 1px;
  padding: 1%;
  border-radius: 1%;
  background-color: #0086ff;
}

.ongoingtaskcard {
  position: absolute;
  right: 268px;
  top: 126px;
}

.folder {
  position: absolute;
  right: 82px;
  top: 413px;
}

.bids {
  position: absolute;
  right: 40px;
  top: 60px;

}

.bidcard {
  width: 28rem;
  font-size: 18px;
  padding: 2%
}


.shadowsmall {
  box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075) !important;
  border: none;
  background: white;
  border-radius: 3%;
}

.shadowsmallbid {
  box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075) !important;
  border: none;
  background: white;
  border-radius: 1%;
  font-family: sofia_prolight;
  height: 7rem;
  margin-top: 1rem;
  padding: 3%

}

.featuresection {
  width: 100%;
  padding: 0 30px;
  margin: 0 auto;
  position: relative;

}

.cta {
  display: flex;
  width: 100%;
  flex: 1 1 calc(100% - 797px);
  justify-content: flex-end;
  align-items: flex-end;
}

.featuresmallheader {
  font-size: 1rem;
  font-weight: 600;
  color: #0086ff;
  font-family: sofia_prosemibold;
  letter-spacing: 0 !important;
}

.featurebigheader {
  font-size: 2rem;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.26;
  letter-spacing: -1px;
  color: #07092f;
  font-family: sofia_prosemibold;

}

.featurecard {
  height: 23rem;
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


/* media query */
/*large laptops */
@media (max-width: 2560px) and (min-width: 1440px) {
  .ctabutton {
    height: 3rem;
    width: 14rem;
  }


  .maintitle {
    font-family: sofia_probold;
    font-weight: 700;
    font-size: 3rem;
    line-height: 1.36;
    letter-spacing: -1px;
    color: #007bff;

  }

  .headercontainer {
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 100%;
    margin: 0 auto;
    position: relative;
    padding: 2%;

    margin-top: 6rem;

  }

  .text__paragraph-big {
    font-size: 1.5rem;
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

  .tablet {
    border: 5px solid #242a49;
    padding: 1%;
    border-radius: 2rem;
    background-color: #FAFBFF;
    width: 61.5rem;
    height: 38.4375rem

  }

  .mainpresentation {
    display: flex;
    position: relative;
    width: 100%;
    margin: 0 auto;
    padding: 0 20px;
    justify-content: center;
  }

  .dots-4 {
    position: absolute;
    left: 233px;
    top: 292px;
  }

  .calendar {
    position: absolute;
    left: 190px;
    top: 335px;
  }

  .tasks {
    position: absolute;
    top: -36px;
    left: 210px;
  }

  .taskshow {
    position: absolute;
    top: -36px;
    left: -296px;
  }

  .newtask {
    position: absolute;
    left: 280px;

    top: 75px;
  }

  .contract {
    position: absolute;
    left: 300px;
    top: 400px;
    border: 1px;
    padding: 1%;
    border-radius: 1%;
    background-color: #0086ff;
  }

  .express {
    position: absolute;
    left: 238px;
    top: 20px;
    border: 1px;
    padding: 1%;
    border-radius: 1%;
    background-color: #ffffff;
    width: 13rem;
    box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .15) !important;

  }

  .escrow {
    position: absolute;
    left: 300px;
    top: 480px;
    border: 1px;
    padding: 1%;
    border-radius: 1%;
    background-color: #0086ff;
  }

  .ongoingtaskcard {
    position: absolute;
    right: 268px;
    top: 126px;
  }

  .folder {
    position: absolute;
    right: 82px;
    top: 413px;
  }

  .bids {
    position: absolute;
    right: 40px;
    top: 60px;

  }

  .bidcard {
    width: 28rem;
    font-size: 18px;
    padding: 2%
  }


  .shadowsmall {
    box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075) !important;
    border: none;
    background: white;
    border-radius: 3%;
  }

  .shadowsmallbid {
    box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075) !important;
    border: none;
    background: white;
    border-radius: 1%;
    font-family: sofia_prolight;
    height: 7rem;
    margin-top: 1rem;
    padding: 3%

  }

  .featuresection {
    width: 100%;
    padding: 0 30px;
    margin: 0 auto;
    position: relative;

  }

  .cta {
    display: flex;
    width: 100%;
    flex: 1 1 calc(100% - 797px);
    justify-content: flex-end;
    align-items: flex-end;
  }

  .featuresmallheader {
    font-size: 1rem;
    font-weight: 600;
    color: #0086ff;
    font-family: sofia_prosemibold;
    letter-spacing: 0 !important;
  }

  .featurebigheader {
    font-size: 2rem;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.26;
    letter-spacing: -1px;
    color: #07092f;
    font-family: sofia_prosemibold;

  }

  .featurecard {
    height: 23rem;
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


}

/* medium laptops*/
@media (max-width: 1440px) and (min-width: 1025px) {
  .tasks {
    position: absolute;
    top: -36px;
    left: 40px;
  }

  .mainheader {
    background: #fff;
    overflow: hidden;
    height: 1180px;
    position: relative;
    z-index: 0;
  }

  .newtask {
    position: absolute;
    left: 100px;

    top: 75px;
  }

  .ongoingtaskcard {
    position: absolute;
    right: 40px;
    top: 126px;
  }

  .contract {
    position: absolute;
    left: 115px;
    top: 400px;
    border: 1px;
    padding: 1%;
    border-radius: 1%;
    background-color: #0086ff;
  }

  .express {
    position: absolute;
    left: 40px;
    top: 20px;
    border: 1px;
    padding: 1%;
    border-radius: 1%;
    background-color: #ffffff;
    width: 13rem;
    box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .15) !important;
    z-index: 1;

  }

  .escrow {
    position: absolute;
    left: 115px;
    top: 480px;
    border: 1px;
    padding: 1%;
    border-radius: 1%;
    background-color: #0086ff;
  }

  .calendar {
    position: absolute;
    left: 14px;
    top: 335px;
  }

  .folder {
    position: absolute;
    right: 10px;
    top: 413px;
  }

  .taskshow {
    position: absolute;
    top: -36px;
    left: -183px;
  }

  .bids {
    position: absolute;
    right: 0px;
    top: 105px;

  }

  .bidcard {
    width: 18rem;
    font-size: 18px
  }

  .dots-4 {
    position: absolute;
    left: 40px;
    top: 292px;
  }


}

/* small laptops*/
@media (max-width: 1024px) and (min-width: 769px) {
  .ctabutton {
    height: 3rem;
    width: 9rem;
    margin-bottom: 1rem
  }

  .mainheader {
    background: #fff;
    overflow: hidden;
    height: 910px;
    position: relative;
    z-index: 0;
  }

  .maintitle {
    font-family: sofia_probold;
    font-weight: 700;
    font-size: 2.5rem;
    line-height: 1.36;
    letter-spacing: -1px;
    color: #007bff;

  }

  .text__paragraph-big {
    font-size: 1.5rem;
    text-align: center;
    color: #272848;


    letter-spacing: 0 !important;
    font-family: sofia_proregular !important;
  }

  .featuresmallheader {
    font-size: 1rem;
    font-weight: 600;
    color: #0086ff;
    font-family: sofia_prosemibold;
    letter-spacing: 0 !important;
  }

  .featurebigheader {
    font-size: 2rem;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.26;
    letter-spacing: -1px;
    color: #07092f;
    font-family: sofia_prosemibold;

  }

  .calendar {
    position: absolute;
    left: -168px;
    top: 335px;
  }

  .tasks {
    position: absolute;
    top: -67px;
    left: 4px;
  }

  .newtask {
    position: absolute;
    left: -20px;
    top: 75px;
  }

  .folder {
    position: absolute;
    right: -179px;
    top: 413px;
  }

  .taskshow {
    position: absolute;
    top: -36px;
    left: -183px;
  }

  .bids {
    position: absolute;
    right: -9px;
    top: 280px;

  }

  .dots-4 {
    position: absolute;
    left: 238px;
    top: 292px;
  }

  .bidcard {
    width: 21rem;
    font-size: 18px
  }

  .folder {
    position: absolute;
    right: 82px;
    top: 413px;
  }

  .tablet {
    border: 5px solid #242a49;
    padding: 1%;
    border-radius: 2rem;
    background-color: #FAFBFF;
    width: 54.5rem;
    height: 38.4375rem

  }

  .ongoingtaskcard {
    position: absolute;
    right: 2px;
    top: 126px;
  }

  .express {
    position: absolute;
    left: -43px;
    top: 20px;
    border: 1px;
    padding: 2%;
    border-radius: 1%;
    background-color: #ffffff;
    width: 13rem;
    box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .15) !important;
    z-index: 1;

  }

  .contract {
    position: absolute;
    left: -26px;
    top: 400px;
    border: 1px;
    padding: 1%;
    border-radius: 1%;
    background-color: #0086ff;
  }

  .escrow {
    position: absolute;
    left: -26px;
    top: 480px;
    border: 1px;
    padding: 1%;
    border-radius: 1%;
    background-color: #0086ff;
  }


}

/* tabs*/
@media (max-width: 768px) and (min-width: 426px) {
  .ctabutton {
    height: 3rem;
    width: 9rem;
    margin-bottom: 1rem
  }

  .mainheader {
    background: #fff;
    overflow: hidden;
    height: 910px;
    position: relative;
    z-index: 0;
  }

  .maintitle {
    font-family: sofia_probold;
    font-weight: 700;
    font-size: 2.5rem;
    line-height: 1.36;
    letter-spacing: -1px;
    color: #007bff;

  }

  .text__paragraph-big {
    font-size: 1.5rem;
    text-align: center;
    color: #272848;


    letter-spacing: 0 !important;
    font-family: sofia_proregular !important;
  }

  .featuresmallheader {
    font-size: 1rem;
    font-weight: 600;
    color: #0086ff;
    font-family: sofia_prosemibold;
    letter-spacing: 0 !important;
  }

  .featurebigheader {
    font-size: 2rem;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.26;
    letter-spacing: -1px;
    color: #07092f;
    font-family: sofia_prosemibold;

  }

}

/* big phone*/
@media (max-width: 425px) and (min-width: 376px) {

  .ctabutton {
    height: 3rem;
    width: 9rem;
    margin-bottom: 1rem
  }

  .ctabutton {
    height: 3rem;
    width: 9rem;
    margin-bottom: 1rem
  }

  .maintitle {
    font-family: sofia_probold;
    font-weight: 700;
    font-size: 2rem;
    line-height: 1.36;
    letter-spacing: -1px;
    color: #007bff;

  }

  .headercontainer {
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 100%;
    margin: 0 auto;
    position: relative;
    padding: 2%;

    margin-top: 6rem;

  }

  .text__paragraph-big {
    font-size: 1rem;
    text-align: center;
    color: #272848;


    letter-spacing: 0 !important;
    font-family: sofia_proregular !important;
  }

  .text__paragraph-small {
    font-size: 1rem;
    text-align: center;
    color: #272848;


    letter-spacing: 0 !important;
    font-family: sofia_prolight !important;
  }

  .mainheader {
    background: #fff;
    overflow: hidden;
    height: 340px;
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

  .tablet {
    border: 5px solid #242a49;
    padding: 1%;
    border-radius: 2rem;
    background-color: #FAFBFF;
    width: 61.5rem;
    height: 38.4375rem

  }

  .mainpresentation {
    display: flex;
    position: relative;
    width: 100%;
    margin: 0 auto;
    padding: 0 20px;
    justify-content: center;
  }

  .dots-4 {
    position: absolute;
    left: 233px;
    top: 292px;
  }

  .calendar {
    position: absolute;
    left: 190px;
    top: 335px;
  }

  .tasks {
    position: absolute;
    top: -36px;
    left: 210px;
  }

  .taskshow {
    position: absolute;
    top: -36px;
    left: -296px;
  }

  .newtask {
    position: absolute;
    left: 280px;

    top: 75px;
  }

  .contract {
    position: absolute;
    left: 300px;
    top: 400px;
    border: 1px;
    padding: 1%;
    border-radius: 1%;
    background-color: #0086ff;
  }

  .express {
    position: absolute;
    left: 238px;
    top: 20px;
    border: 1px;
    padding: 1%;
    border-radius: 1%;
    background-color: #ffffff;
    width: 13rem;
    box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .15) !important;

  }

  .escrow {
    position: absolute;
    left: 300px;
    top: 480px;
    border: 1px;
    padding: 1%;
    border-radius: 1%;
    background-color: #0086ff;
  }

  .ongoingtaskcard {
    position: absolute;
    right: 268px;
    top: 126px;
  }

  .folder {
    position: absolute;
    right: 82px;
    top: 413px;
  }

  .bids {
    position: absolute;
    right: 40px;
    top: 60px;

  }

  .bidcard {
    width: 28rem;
    font-size: 18px;
    padding: 2%
  }


  .shadowsmall {
    box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075) !important;
    border: none;
    background: white;
    border-radius: 3%;
  }

  .shadowsmallbid {
    box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075) !important;
    border: none;
    background: white;
    border-radius: 1%;
    font-family: sofia_prolight;
    height: 7rem;
    margin-top: 1rem;
    padding: 3%

  }

  .featuresection {
    width: 100%;
    padding: 5% 30px;
    margin: 0 auto;
    position: relative;

  }

  .cta {
    display: flex;
    width: 100%;
    flex: 1 1 calc(100% - 797px);
    justify-content: flex-end;
    align-items: flex-end;
  }

  .featuresmallheader {
    font-size: 1rem;
    font-weight: 600;
    color: #0086ff;
    font-family: sofia_prosemibold;
    letter-spacing: 0 !important;
  }

  .featurebigheader {
    font-size: 2rem;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.26;
    letter-spacing: -1px;
    color: #07092f;
    font-family: sofia_prosemibold;

  }

  .featurecard {
    height: 23rem;
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

}

/* small phone*/
@media (max-width: 375px) and (min-width: 320px) {
  .ctabutton {
    height: 3rem;
    width: 9rem;
    margin-bottom: 1rem
  }

  .maintitle {
    font-family: sofia_probold;
    font-weight: 700;
    font-size: 2rem;
    line-height: 1.36;
    letter-spacing: -1px;
    color: #007bff;

  }

  .headercontainer {
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 100%;
    margin: 0 auto;
    position: relative;
    padding: 2%;

    margin-top: 6rem;

  }

  .text__paragraph-big {
    font-size: 1rem;
    text-align: center;
    color: #272848;


    letter-spacing: 0 !important;
    font-family: sofia_proregular !important;
  }

  .text__paragraph-small {
    font-size: 1rem;
    text-align: center;
    color: #272848;


    letter-spacing: 0 !important;
    font-family: sofia_prolight !important;
  }

  .mainheader {
    background: #fff;
    overflow: hidden;
    height: 340px;
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

  .tablet {
    border: 5px solid #242a49;
    padding: 1%;
    border-radius: 2rem;
    background-color: #FAFBFF;
    width: 61.5rem;
    height: 38.4375rem

  }

  .mainpresentation {
    display: flex;
    position: relative;
    width: 100%;
    margin: 0 auto;
    padding: 0 20px;
    justify-content: center;
  }

  .dots-4 {
    position: absolute;
    left: 233px;
    top: 292px;
  }

  .calendar {
    position: absolute;
    left: 190px;
    top: 335px;
  }

  .tasks {
    position: absolute;
    top: -36px;
    left: 210px;
  }

  .taskshow {
    position: absolute;
    top: -36px;
    left: -296px;
  }

  .newtask {
    position: absolute;
    left: 280px;

    top: 75px;
  }

  .contract {
    position: absolute;
    left: 300px;
    top: 400px;
    border: 1px;
    padding: 1%;
    border-radius: 1%;
    background-color: #0086ff;
  }

  .express {
    position: absolute;
    left: 238px;
    top: 20px;
    border: 1px;
    padding: 1%;
    border-radius: 1%;
    background-color: #ffffff;
    width: 13rem;
    box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .15) !important;

  }

  .escrow {
    position: absolute;
    left: 300px;
    top: 480px;
    border: 1px;
    padding: 1%;
    border-radius: 1%;
    background-color: #0086ff;
  }

  .ongoingtaskcard {
    position: absolute;
    right: 268px;
    top: 126px;
  }

  .folder {
    position: absolute;
    right: 82px;
    top: 413px;
  }

  .bids {
    position: absolute;
    right: 40px;
    top: 60px;

  }

  .bidcard {
    width: 28rem;
    font-size: 18px;
    padding: 2%
  }


  .shadowsmall {
    box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075) !important;
    border: none;
    background: white;
    border-radius: 3%;
  }

  .shadowsmallbid {
    box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075) !important;
    border: none;
    background: white;
    border-radius: 1%;
    font-family: sofia_prolight;
    height: 7rem;
    margin-top: 1rem;
    padding: 3%

  }

  .featuresection {
    width: 100%;
    padding: 5% 30px;
    margin: 0 auto;
    position: relative;

  }

  .cta {
    display: flex;
    width: 100%;
    flex: 1 1 calc(100% - 797px);
    justify-content: flex-end;
    align-items: flex-end;
  }

  .featuresmallheader {
    font-size: 1rem;
    font-weight: 600;
    color: #0086ff;
    font-family: sofia_prosemibold;
    letter-spacing: 0 !important;
  }

  .featurebigheader {
    font-size: 2rem;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.26;
    letter-spacing: -1px;
    color: #07092f;
    font-family: sofia_prosemibold;

  }

  .featurecard {
    height: 23rem;
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
