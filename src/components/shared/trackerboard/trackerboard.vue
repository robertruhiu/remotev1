<template>
  <a-layout style="min-height: 100vh;background-color: #F4F7FC">
    <SmallSider v-if="$store.state.user_object.user_type ==='recruiter'"/>
    <DeveloperSmall v-else-if="$store.state.user_object.user_type ==='developer'"/>


    <a-layout style="background-color: #F4F7FC">

      <a-layout-content
          :style="{  padding: '1rem 2%', background: '#FAFBFF', minHeight: '280px', }"

      >
        <div>
          <a-card class="hellocard">


            <a-breadcrumb v-if="developer">
              <a-breadcrumb-item><a @click="$router.push('/Developer')">Home</a></a-breadcrumb-item>
              <a-breadcrumb-item><a @click="$router.push('/DeveloperProjects')">My projects</a></a-breadcrumb-item>
              <a-breadcrumb-item><a>{{ project.title }}</a></a-breadcrumb-item>

            </a-breadcrumb>
            <a-breadcrumb v-else>
              <a-breadcrumb-item><a @click="$router.push('/Dashboard')">Home</a></a-breadcrumb-item>
              <a-breadcrumb-item><a @click="$router.push('/Myprojects')">My projects</a></a-breadcrumb-item>
              <a-breadcrumb-item><a>{{ project.title }}</a></a-breadcrumb-item>

            </a-breadcrumb>
            <p style="font-size: 1.7rem;font-family: sofia_prosemibold;color: black;margin-bottom: 0">
              {{ project.title }}</p>
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
              <a-tabs default-active-key="1" @change="callback">
                <a-tab-pane key="1"
                >
                  <span slot="tab">
                    <a-icon type="profile"/>

                    Features
                  </span>
                  <a-col span="6" style="padding: 1%">
                    <div class="taskcolumns">
                      <p class="rowtitle">Backlog</p>
                      <a-progress :percent="100" strokeColor="#64C8FB" :showInfo="false"/>
                      <div style="height:42rem;overflow: auto;">
                        <a-card class="milestonecard">




                          <span slot="title" class="featuretitle">
                                UI/UX files
                              </span>

                          <template>
                            <p v-if="developer">Mandatory step.Please upload all wireframes
                              that relate to the project ie page layout and user process diagrams.Also any other
                              relevant data</p>
                            <p v-else>Please insist the developer to create wireframes of the project in relation to the
                              features.
                              He/she should provide page layouts and user process flow diagrams.
                              This will help give a proper image of whats to be created

                            </p>

                            <a-tag color="#64C8FB">
                              <a-icon type="hourglass" spin/>
                              continued review
                            </a-tag>


                          </template>

                        </a-card>
                        <div
                            class="list-group-item"
                            v-for="(element) in features"
                            :key="element.name"
                        >
                          <div v-if="element.stage === 'backlog'">

                            <a-card class="milestonecard">




                          <span slot="title" class="featuretitle">
                                {{ element.title }}
                              </span>
                              <a slot="extra" @click="openFeature(element)">view milestone</a>
                              <template>
                                <p>User stories</p>
                                <ul v-for="story in element.userstories" v-bind:key="story">
                                  <li>{{ story.user_story }}</li>
                                </ul>


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
                            v-for="(element) in features"
                            :key="element.name"
                        >
                          <div v-if="element.stage === 'inprogress'">
                            <a-card class="milestonecard">




                          <span slot="title" class="featuretitle">
                                {{ element.title }}
                              </span>
                              <a slot="extra" @click="openFeature(element)">view milestone </a>
                              <template>
                                <p>User stories</p>
                                <ul v-for="story in element.userstories" v-bind:key="story">
                                  <li>{{ story.user_story }}</li>
                                </ul>

                              </template>

                            </a-card>
                          </div>


                        </div>
                      </div>

                    </div>
                  </a-col>
                  <a-col span="6" style="padding: 1%">
                    <div class="taskcolumns">
                      <p class="rowtitle">Quality check</p>
                      <a-progress :percent="100" strokeColor="#0682D1" :showInfo="false"/>
                      <div style="height:42rem;overflow: auto;">

                        <div
                            class="list-group-item"
                            v-for="(element) in features"
                            :key="element.name"
                        >
                          <div v-if="element.stage === 'quality'">
                            <a-card class="milestonecard">




                          <span slot="title" class="featuretitle">
                                {{ element.title }}
                              </span>
                              <a slot="extra" @click="openFeature(element)">view milestone</a>
                              <template>
                                <div
                                    style=" border: 1px dashed #e9e9e9; border-radius: 6px;background-color: #fafafa;padding: 2%;margin-bottom: 1rem">
                                  <p>Note to test feature:</p>
                                  <p>{{ element.developer_note }}</p>
                                </div>
                                <a-button @click="Done(element)" v-if="!developer" size="small">
                                  <a-icon type="check-circle" theme="twoTone"/>
                                  Mark as done
                                </a-button>
                                <a-tag v-else color="#64C8FB">
                                  <a-icon type="hourglass" spin/>
                                  QA ongoing
                                </a-tag>

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
                            v-for="(element) in features"
                            :key="element.name"
                        >
                          <div v-if="element.stage === 'done'">
                            <a-card class="milestonecard">




                          <span slot="title" class="featuretitle">
                                {{ element.title }}
                              </span>
                              <a slot="extra" @click="openFeature(element)">view milestone</a>

                              <a-tag color="#87d068" v-if="element.escrow">
                                disbursed
                              </a-tag>
                              <a-tag v-else color="#64C8FB">
                                <a-icon type="dollar" spin/>
                                pending disbusrment
                              </a-tag>


                            </a-card>
                          </div>


                        </div>
                      </div>
                    </div>
                  </a-col>
                </a-tab-pane>
                <a-tab-pane key="2" force-render>
                  <span slot="tab">
                    <a-icon type="file-sync"/>
                    Project Documents/UI/UX files
                  </span>
                  <Fileshare/>

                </a-tab-pane>
                <a-tab-pane key="3" force-render>
                  <span slot="tab">
                    <a-icon type="file-sync"/>
                    Project description
                  </span>
                  <a-row>
                    <a-col span="12">
                      <a-card style="">
                        <a-collapse   style=" margin-bottom: 1rem">
                          <a-collapse-panel key="1" header="Project description.">
                            <markdown style=" border: 1px dashed #e9e9e9; border-radius: 6px;background-color: #fafafa;padding: 2%;">{{ project.description }}</markdown>
                          </a-collapse-panel>
                        </a-collapse>
                        <p>Tools</p>
                        <a-tag v-for="tag in tools " color="blue"
                               :key="tag">
                          {{ tag }}
                        </a-tag>
                        <p>Budget: $ {{ project.budget }}</p>




                      </a-card>
                    </a-col>
                  </a-row>


                </a-tab-pane>

              </a-tabs>


            </a-row>
            <a-row style="color: black" v-if="viewmode === 'feature'">
              <a-col span="6">
                <div class="casecard">

                  <div style="border-bottom: 1px solid #e8e8e8;">
                    <h3 style="font-family: sofia_problack;">Milestones</h3>


                    <p style="font-family: sofia_probold">These are the core milestones of what you want the
                      application to
                      do.Each has its own User stories and tasks that have to be
                      achieved to accomplish it</p>


                  </div>
                  <div style="color:black;height: 65vh;overflow-y: scroll;">
                    <a-list item-layout="vertical" size="large" :pagination="pagination" :data-source="features">

                      <a-list-item slot="renderItem" key="item.title" slot-scope="item">

                        <a-card>




                              <span slot="title" class="featuretitle">
                                {{ item.title }}
                              </span>
                          <a slot="extra" @click="openFeature(item)">view tasks</a>
                          <template>
                            <ul v-for="story in item.userstories" v-bind:key="story">
                              <li>{{ story.user_story }}</li>
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
                        <div>
                          <a-steps style="width: 80%" :current="FeatureStep">

                            <a-step title="In progress"/>
                            <a-step title="Tasks done"/>
                            <a-step title="Quality check"/>
                            <a-step title="Done"/>
                            <a-step title="Escrow paid"/>
                          </a-steps>
                        </div>

                        <div>

                        </div>


                        <div v-if="FeatureStep=== 2">
                          <a-collapse v-model="activeKey" v-if="developer">
                            <a-collapse-panel key="1"
                                              header="Client is using your developer note to test feature completion.">

                              <div
                                  style="border: 1px dashed #e9e9e9; border-radius: 6px;background-color: #fafafa;padding: 2%;margin-bottom: 1rem">

                                <p>{{ currentfeature.developer_note }}</p>
                                <a-button v-if="developer" @click="developernotemodal" size="small" type="primary">edit
                                  note
                                </a-button>
                              </div>
                            </a-collapse-panel>
                          </a-collapse>
                          <a-collapse v-model="activeKey" v-else>
                            <a-collapse-panel key="1" header="Please use this note to test the feature">

                              <div
                                  style="border: 1px dashed #e9e9e9; border-radius: 6px;background-color: #fafafa;padding: 2%;margin-bottom: 1rem">

                                <p>{{ currentfeature.developer_note }}</p>

                              </div>
                            </a-collapse-panel>
                          </a-collapse>


                        </div>
                        <div v-if="FeatureStep === 1">
                          <p>Well done :Tasks complete for this feature are complete
                          </p>
                          <a-button v-if="developer" type="primary" icon="check" @click="developernotemodal">mark as
                            complete
                          </a-button>


                        </div>
                      </div>
                    </div>
                    <div class="tasktabs">


                      <a-tabs default-active-key="1" @change="callback">
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
          <a-modal v-model="visible" on-ok="handleOk">
            <template slot="footer">

              <a-button key="submit" type="primary" :disabled="note_validate" @click="submitDeveloperNote">
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

import SmallSider from "@/components/client/layout/SmallSider";
import DeveloperSmall from "@/components/developer/layout/DeveloperSmall";
import Tasks from "@/components/shared/trackerboard/tasks"
import Issues from "@/components/shared/trackerboard/issues"
import Project from "@/services/Projects";
import Fileshare from "@/components/shared/trackerboard/fileshare"
import markdown from 'vue-markdown'

class Feature {
  constructor(id, title, stage, userstories, developer_note, escrow) {
    this.id = id;
    this.title = title;
    this.stage = stage;
    this.userstories = userstories;
    this.developer_note = developer_note;
    this.escrow = escrow;


  }
}

export default {
  name: "trackerboard",
  data() {
    return {


      Feature,
      pagination: {
        onChange: page => {
          console.log(page);
        },
        pageSize: 4,
      },


      currentfeature: {},
      viewmode: 'milestone',
      visible: false,
      developer_note: '',
      note_validate: false,
      project: {},
      features: [],
      developer: false,
      tools: []


    };
  },
  components: {
    SmallSider, Tasks, Issues, DeveloperSmall, Fileshare, markdown


  },
  mounted() {

    this.$store.dispatch('setFeature', this.currentfeature.id)
    this.fetchProject()
    if (this.$store.state.user_object.user_type === 'developer') {
      this.developer = true
    }


  },
  computed: {
    FeatureStep() {
      let current = 0
      if (this.currentfeature.stage === 'quality') {
        current = 2
      } else if (this.currentfeature.escrow) {
        current = 4
      } else if (this.currentfeature.stage === 'done') {
        current = 3
      } else if (this.$store.state.feature_complete) {
        current = 1
      } else {
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
  watch: {

    developer_note: function () {
      if (this.developer_note !== '') {
        this.note_validate = false
      } else {
        this.note_validate = true
      }
    }


  },

  methods: {
    fetchProject() {
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }
      Project.getprojectslug(this.$route.params.projectSlug, auth)
          .then(resp => {
                this.project = resp.data
                this.tools = this.project.tools.split(',')
                this.fetchFeatures()

              }
          )
    },
    fetchFeatures() {
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }
      Project.getfeatures(this.project.id, auth)
          .then(resp => {
            let features = resp.data
            features.forEach(feature => {
              this.fetchStories(feature)

            })
          })
    },
    fetchStories(feature) {
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }
      Project.getstories(feature.id, auth)
          .then(
              resp => {

                let id = feature.id;
                let title = feature.name;
                let stage = feature.stage;
                let userstories = resp.data;
                let developer_note = feature.developer_note;
                let escrow = feature.escrow_disbursed;

                let onefeature = new Feature(id, title, stage, userstories, developer_note, escrow)
                this.features.push(onefeature)


              }
          )
    },
    log: function (evt) {
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
    developernotemodal() {
      this.visible = true
      this.developer_note = this.currentfeature.developer_note
    },
    submitDeveloperNote() {
      if (this.developer_note !== '') {
        this.currentfeature.developer_note = this.developer_note
        this.currentfeature.stage = 'quality'
        const auth = {
          headers: {Authorization: 'JWT ' + this.$store.state.token}

        }
        Project.updatefeature(this.currentfeature.id, {developer_note: this.developer_note, stage: 'quality'}, auth)
            .then(() => {
              Project.finishedmilestone(this.currentfeature.id, auth)
            })
        this.visible = false;
        this.note_validate = false
        this.developer_note = ''

      } else {
        this.note_validate = true
      }
    },
    Done(feature) {
      this.currentfeature = feature
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }
      this.currentfeature.stage = 'done'
      Project.updatefeature(this.currentfeature.id, {stage: 'done'}, auth)
          .then()
    }
  }
}
</script>

<style scoped>
.hellocard {

  box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075) !important;

  background: #F1F3F9;
  border-radius: 0;


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

.milestonecard {
  margin-bottom: 1rem;

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

.taskcolumns {
  background-color: #F1F3F9;
  height: 45rem;
  padding: 3%
}

.rowtitle {
  color: #1990FF;
  font-family: sofia_probold
}

.featuretitle {
  font-family: sofia_probold
}
</style>
