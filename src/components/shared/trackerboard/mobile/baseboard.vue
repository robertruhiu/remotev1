<template>
  <div>
    <div id="featureoverview" v-if="viewmode === 'milestone'">
      <a-row >
        <a-tabs default-active-key="1" >
          <a-tab-pane key="1"
          >
                  <span slot="tab">
                    <a-icon type="profile"/>

                    Features
                  </span>
            <a-alert message="swipe left or right for more stages" type="info" close-text="Close Now" />
            <a-carousel dot-position="top">
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
                            <ul v-for="story in element.userstories" v-bind:key="story.id">
                              <li>{{ story.user_story }}</li>
                            </ul>
                            <a-tag color="orange">
                              <a-icon type="clock-circle" />
                              due date: {{element.due_date | momentformat}}
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
                            <ul v-for="story in element.userstories" v-bind:key="story.id">
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
            </a-carousel>






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
                    <a-icon type="file-done" />
                    Project contract
                  </span>
            <contract/>


          </a-tab-pane>

        </a-tabs>


      </a-row>
    </div>
    <div v-if="viewmode === 'feature'">
      <Tasks/>
    </div>
  </div>

</template>

<script>
import moment from "moment";



import Project from "@/services/Projects";
import Fileshare from "@/components/shared/trackerboard/fileshare"
import contract from "@/components/shared/trackerboard/contract"
import Tasks from "@/components/shared/trackerboard/mobile/mobiletasks"

class Feature {
  constructor(id, title, stage, userstories, developer_note, escrow,due_date) {
    this.id = id;
    this.title = title;
    this.stage = stage;
    this.userstories = userstories;
    this.developer_note = developer_note;
    this.escrow = escrow;
    this.due_date =due_date


  }
}

export default {
name: "baseboard",
  data() {
    return {


      Feature,
      pagination: {
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
      tools: [],
      yoh:''


    };
  },
  components: {
      Fileshare,contract,Tasks

  },
  filters: {
    momentformat: function (date) {
      return moment(date).format('MMMM Do YYYY');
    },

  },
  mounted() {

    this.$store.dispatch('setFeature', this.currentfeature.id)
    this.fetchProject()
    if(this.$store.state.isUserLoggedIn){
      if (this.$store.state.user_object.user_type === 'developer') {
        this.developer = true
      }
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
    MobileMode() {
      return this.$store.state.mobiletaskmode
    }


  },
  watch: {
    MobileMode: function () {
      if(this.$store.state.mobiletaskmode === false){
        this.viewmode = 'milestone'

      }
    },

    developer_note: function () {
      this.note_validate = this.developer_note === '';
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
                let due_date =feature.due_date

                let onefeature = new Feature(id, title, stage, userstories, developer_note, escrow,due_date)
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
      this.$store.dispatch('setmobiletaskmode', true)
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






.milestonecard {
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
  font-family: sofia_probold,serif
}

.featuretitle {
  font-family: sofia_probold,serif
}
</style>
