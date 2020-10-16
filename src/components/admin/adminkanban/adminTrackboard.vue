<template>
  <a-layout style="min-height: 100vh;background-color: #F4F7FC">
    <SmallSider/>


    <a-layout style="background-color: #F4F7FC">

      <a-layout-content
          :style="{  padding: '1rem 2%', background: '#FAFBFF', minHeight: '280px', }"

      >
        <div>
          <a-card class="hellocard">


            <a-breadcrumb>
              <a-breadcrumb-item><a @click="$router.push('Dashboard')" >Home</a></a-breadcrumb-item>
              <a-breadcrumb-item><a @click="$router.push('Myprojects')" >My projects</a></a-breadcrumb-item>
              <a-breadcrumb-item><a>Cyrus web application</a></a-breadcrumb-item>

            </a-breadcrumb>
            <p style="font-size: 1.7rem;font-family: sofia_prosemibold;color: black;margin-bottom: 0">
              Cyrus web application</p>
            <span style="margin-bottom: 0">You can switch between milestone overview kanban to in depth view kanban
                  <a-button-group style="margin-left: 1%">
                    <a-button type="primary" @click="viewMode(1)"> <a-icon type="appstore"/>Milestone view </a-button>
                    <a-button type="primary" @click="viewMode(2)"> In depth view<a-icon type="profile"/> </a-button>
                  </a-button-group>
                </span>


          </a-card>


        </div>

        <div style="min-height: 40vh ;position: relative;">
          <div style="">

            <a-row v-if="viewmode === 'milestone'">
              <a-col span="6" style="padding: 1%">
                <div class="taskcolumns">
                  <p class="rowtitle">Backlog</p>
                  <a-progress :percent="100" strokeColor="#64C8FB" :showInfo="false"/>
                  <div style="height:42rem;overflow: auto;">
                    <div
                        class="list-group-item"
                        v-for="(element) in listData"
                        :key="element.name"
                    >
                      <div v-if="element.stage === 'backlog'">

                        <a-card class="milestonecard">




                          <span slot="title" class="featuretitle">
                                {{ element.title }}
                              </span>
                          <a slot="extra" @click="openFeature(element)">view milestone</a>
                          <template>
                            <p>{{element.userstories[0]}}</p>


                          </template>

                        </a-card>
                      </div>



                    </div>
                  </div>

                </div>
              </a-col>
              <a-col span="6" style="padding: 1%">
                <div class="taskcolumns">
                  <p class="rowtitle">In progress</p>

                  <a-progress :percent="100" strokeColor="#31A6EA" :showInfo="false"/>


                  <div style="height:42rem;overflow: auto;">
                    <div
                        class="list-group-item"
                        v-for="(element) in listData"
                        :key="element.name"
                    >
                      <div v-if="element.stage === 'inprogress'">
                        <a-card class="milestonecard">




                          <span slot="title" class="featuretitle">
                                {{ element.title }}
                              </span>
                          <a slot="extra" @click="openFeature(element)">view milestone </a>
                          <template>
                            <p>{{element.userstories[0]}}</p>

                          </template>

                        </a-card>
                      </div>



                    </div>
                  </div>

                </div>
              </a-col>
              <a-col span="6" style="padding: 1%">
                <div class="taskcolumns" >
                  <p class="rowtitle">Quality check</p>
                  <a-progress :percent="100" strokeColor="#0682D1" :showInfo="false"/>
                  <div style="height:42rem;overflow: auto;">

                    <div
                        class="list-group-item"
                        v-for="(element) in listData"
                        :key="element.name"
                    >
                      <div v-if="element.stage === 'quality'">
                        <a-card class="milestonecard">




                          <span slot="title" class="featuretitle">
                                {{ element.title }}
                              </span>
                          <a slot="extra" @click="openFeature(element)">view milestone</a>
                          <template>
                            <div style=" border: 1px dashed #e9e9e9; border-radius: 6px;background-color: #fafafa;padding: 2%;margin-bottom: 1rem">
                              <p>Note to test feature</p>
                              <p>{{element.developer_note}}</p>
                            </div>

                          </template>

                        </a-card>
                      </div>



                    </div>
                  </div>
                </div>
              </a-col>
              <a-col span="6" style="padding: 1%">
                <div class="taskcolumns">
                  <p class="rowtitle">Done</p>
                  <a-progress :percent="100" strokeColor="#056BB4" :showInfo="false"/>
                  <div style="height:42rem;overflow: auto;">

                    <div
                        class="list-group-item"
                        v-for="(element) in listData"
                        :key="element.name"
                    >
                      <div v-if="element.stage === 'done'">
                        <a-card class="milestonecard">




                          <span slot="title" class="featuretitle">
                                {{ element.title }}
                              </span>
                          <a slot="extra" @click="openFeature(element)">view milestone</a>
                          <template>
                            <p>{{element.userstories[0]}}</p>

                          </template>
                          <a-tag color="#2db7f5" v-if="element.escrow">
                            disbursed
                          </a-tag>


                        </a-card>
                      </div>



                    </div>
                  </div>
                </div>
              </a-col>

            </a-row>
            <a-row style="color: black" v-if="viewmode === 'feature'">
              <a-col span="6">
                <div class="casecard">

                  <div style="border-bottom: 1px solid #e8e8e8;">
                    <h3 style="font-family: sofia_problack;">Milestones</h3>


                    <p style="font-family: sofia_probold" >These are the core milestones of what you want the
                      application to
                      do.Each has its own User stories and tasks that have to be
                      achieved to accomplish it</p>


                  </div>
                  <div style="color:black;height: 65vh;overflow-y: scroll;">
                    <a-list item-layout="vertical" size="large" :pagination="pagination" :data-source="listData">

                      <a-list-item slot="renderItem" key="item.title" slot-scope="item">

                        <a-card>




                              <span slot="title" class="featuretitle">
                                {{ item.title }}
                              </span>
                          <a slot="extra" @click="openFeature(item)">view tasks</a>
                          <template>
                            <ul v-for="story in item.userstories" v-bind:key="story">
                              <li>{{ story }}</li>
                            </ul>

                          </template>

                        </a-card>


                      </a-list-item>
                    </a-list>
                  </div>





                </div>


              </a-col>
              <a-col span="18">
                <div>
                  <div v-if="currentfeature">
                    <div style="padding: 0 1%">
                      <div class="casecard">
                        <p style="font-family: sofia_proregular">
                          <strong>Milestone:</strong> {{ currentfeature.title }}
                        </p>
                        <div >
                          <a-steps style="width: 80%" :current="FeatureStep">

                            <a-step title="In progress" />
                            <a-step title="Tasks done"  />
                            <a-step title="Quality check"  />
                            <a-step title="Done"  />
                            <a-step title="Escrow paid"  />
                          </a-steps>
                        </div>

                        <div>

                        </div>


                        <div v-if="FeatureStep=== 2">
                          <p>Client is using your developer note to test feature completion.</p>
                          <div style="margin-top: 16px; border: 1px dashed #e9e9e9; border-radius: 6px;background-color: #fafafa;padding: 2%;margin-bottom: 1rem">
                            <p>Developer Note</p>
                            <p>{{currentfeature.developer_note}}</p>
                          </div>

                          <a-button @click="developernotemodal" size="small" type="primary">edit note</a-button>

                        </div>
                        <div v-if="FeatureStep === 1">
                          <p >Well done :Tasks complete for this feature
                          </p>
                          <a-button type="primary" icon="check" @click="developernotemodal" >mark as complete</a-button>


                        </div>
                      </div>
                    </div>
                    <div class="tasktabs">


                      <a-tabs default-active-key="1" @change="callback" >
                        <a-tab-pane key="1" tab="Tasks">
                          <Tasks/>
                        </a-tab-pane>
                        <a-tab-pane key="2" tab="Feature issues" force-render>
                          <Issues/>
                        </a-tab-pane>

                      </a-tabs>
                    </div>





                  </div>

                </div>



              </a-col>


            </a-row>

          </div>
          <a-modal v-model="visible"  on-ok="handleOk">
            <template slot="footer">

              <a-button key="submit" type="primary" :disabled="note_validate"  @click="submitDeveloperNote">
                Submit
              </a-button>
            </template>
            <a-form layout="vertical">



              <a-form-item
                  label="Give directions of how client is to test said feature you marked as complete "

              >
                <a-textarea
                    v-model="developer_note"
                    :auto-size="{ minRows: 4, maxRows: 5 }"
                />
                <p v-if="note_validate" style="color: red">
                  please write something
                </p>
              </a-form-item>



            </a-form>

          </a-modal>
        </div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import moment from "moment";

import SmallSider from "@/components/admin/adminkanban/layout/kanbanside";
import Tasks from "@/components/shared/trackerboard/tasks"
import Issues from "@/components/shared/trackerboard/issues"


const listData = [
  {
    id:1,
    title: `I am backlog task `,
    stage:'quality',

    userstories: [
      'As a developer I want to be able to create a public profile on remote.codeln.com so that i can be attractive to project owners',
      'vlesss'
    ],
    developer_note:'go to top',
    escrow:false


  },


  {
    id:2,
    title: `I am a task in progress  `,
    stage:'inprogress',

    userstories: [
      'As a developer I want to be able to create a public profile on remote.codeln.com so that i can be attractive to project owners',
      'vlesss'
    ],
    developer_note:'',
    escrow:false

  },
  {
    id:3,
    title: `I am  task in quality check `,
    stage:'quality',
    userstories: [
      'As a developer I want to be able to create a public profile on remote.codeln.com so that i can be attractive to project owners',
      'vlesss'
    ],
    developer_note:'to test this feature use this',
    escrow:false

  },
  {
    id:4,
    title: `I am done task `,
    stage:'done',
    userstories: [
      'As a developer I want to be able to create a public profile on remote.codeln.com so that i can be attractive to project owners',
      'vlesss'
    ],
    developer_note:'',
    escrow:true
  }

]

export default {
name: "adminTrackboard",
  data() {
    return {

      listData,
      pagination: {
        onChange: page => {
          console.log(page);
        },
        pageSize: 4,
      },



      currentfeature: {},
      viewmode: 'milestone',
      visible:false,
      developer_note:'',
      note_validate:false


    };
  },
  components: {
    SmallSider,Tasks,Issues


  },
  mounted() {
    this.currentfeature = this.listData[0]
    this.$store.dispatch('setFeature', this.currentfeature.id)

  },
  computed: {
    FeatureStep(){
      let current =0
      if(this.currentfeature.stage === 'quality'){
        current = 2
      }else if(this.currentfeature.stage === 'done') {
        current = 3
      }
      else if(this.$store.state.feature_complete ) {
        current = 1
      }
      else {
        current = 0
      }

      return current
    },
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
    },


  },
  watch:{

    developer_note:function (){
      if(this.developer_note!==''){
        this.note_validate = false
      }else {
        this.note_validate = true
      }
    }


  },
  methods: {
    log: function(evt) {
      window.console.log(evt);
    },

    viewMode(id) {
      if (id === 1) {
        this.viewmode = 'milestone'
      } else {
        this.viewmode = 'feature'
      }

    },
    openFeature(feature) {
      this.currentfeature = feature
      this.$store.dispatch('setFeature', this.currentfeature.id)
      this.viewmode = 'feature'
      this.FeatureStep()

    },
    developernotemodal(){
      this.visible = true
      this.developer_note = this.currentfeature.developer_note
    },
    submitDeveloperNote(){
      if(this.developer_note !==''){
        this.currentfeature.developer_note = this.developer_note
        this.currentfeature.stage ='quality'
        this.visible = false;
        this.note_validate = false
        this.developer_note =''

      }else {
        this.note_validate = true
      }
    }
  }
}
</script>

<style scoped>
.hellocard {

  box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075) !important;

  background: #F1F3F9;
  border-radius: 0;
  margin-bottom: 1rem;

}

.usercasecard {


  box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075) !important;

  background: white;
  border-radius: 0;
  padding: 2%;
  margin-bottom: 1rem;

}

.casecard {


  box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075) !important;

  background: white;
  border-radius: 0;
  padding: 2%;

}
.tasktabs {



  padding: 1%;

}
.milestonecard{
  margin-bottom: 1rem;
  border-radius: 3%;
}

.shadowsmall {
  box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075) !important;
  border: 1px solid #e8e8e8;
  color: black;
  background: white;
  border-radius: 3%;
}

.trackertasks {
  box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075) !important;
  color: black;
  background: white;
  border-radius: 0;
  border: 1px solid #e8e8e8;
  padding: 2%;
  margin-bottom: 1rem;
}

/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #1890ff;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #91d5ff;
}
.taskcolumns{
  background-color: #F1F3F9;
  height: 45rem;padding: 3%
}
.rowtitle{
  color: #1990FF;
  font-family: sofia_probold
}
.featuretitle{
  font-family: sofia_probold
}
</style>
