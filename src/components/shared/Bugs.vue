<template>
  <a-layout  style="min-height: 100vh;background-color: #F4F7FC;margin-left: 200px">


    <ClientSider/>

    <a-layout style="background-color: #F4F7FC">

      <a-layout-content
          :style="{  padding: '1% 2%', background: '#FAFBFF', minHeight: '280px', }"

      >
        <a-card class="hellocard">

          <a-row>
            <a-col span="12">
              <a-breadcrumb>
                <a-breadcrumb-item><a @click="$router.push('Dashboard')">Home</a></a-breadcrumb-item>
                <a-breadcrumb-item><a @click="$router.push('Bugs')">Bugs &Issues</a></a-breadcrumb-item>

              </a-breadcrumb>
              <span style="font-size: 1.7rem;font-family: sofia_prosemibold;margin-bottom: 0;color: black">
                Bugs &Issues</span>
            </a-col>
            <a-col span="6">
              <div style="text-align: center">
                <img src="@/assets/images/alert.svg" style="width: 20%"/>
              </div>


            </a-col>
          </a-row>


        </a-card>
        <div style="min-height: 40vh ;position: relative">
          <a-row  gutter="16">
            <a-col span="16">
              <div style="padding: 3%;">

              <a-collapse expandIconPosition="right" v-for="project in Projects" v-bind:key="project"
                          style="border-radius: 0;background-color: white">
                <a-collapse-panel style="margin-bottom: 1rem;border-radius: 0;background-color: white">
                  <div slot="header">
                    <a-row>
                      <a-col span="12">
                        <p style="font-family: sofia_probold;font-size: 1rem">Project Name: {{ project.title }}</p>
                      </a-col>

                    </a-row>
                    <a-row style="font-family: sofia_prolight">
                      <p style="font-family: sofia_proregular">Issues overview</p>
                      <a-tag color="#2db7f5">
                        4 open issues
                      </a-tag>



                    </a-row>

                  </div>
                  <p style="font-family: sofia_probold;font-size: 1rem">Project features</p>

                  <a-collapse expandIconPosition="right" v-for="feature in project.features" v-bind:key="feature"
                              style="border-radius: 0;background-color: white">

                    <a-collapse-panel style="margin-bottom: 1rem;border-radius: 0;background-color: white">
                      <div slot="header">
                        <a-space>

                          <a-icon type="info-circle" theme="twoTone" two-tone-color="#52c41a" :rotate="180"/>
                          <span style="font-family: sofia_probold;font-size: 1rem">{{ feature.name }}</span>

                          <a-tag color="#f50">
                            <a-icon type="bug"/>
                            {{ feature.issues.length }}
                          </a-tag>


                        </a-space>


                      </div>

                      <div v-for="issue in feature.issues" v-bind:key="issue">
                        <a-card style="width: 100%">
                          <a-space>

                            <a-icon type="info-circle" theme="twoTone" two-tone-color="#52c41a" :rotate="180"/>
                            <span style="font-family: sofia_probold;font-size: 1rem">{{ issue.title }}</span>

                            <a-tag color="#f50" v-if="issue.tag === 'bug'">
                              {{ issue.tag }}
                            </a-tag>
                            <a-tag color="#cc317c" v-if="issue.tag === 'question'">
                              {{ issue.tag }}
                            </a-tag>
                            <a-tag color="#e5ca85" v-if="issue.tag === 'incomplete'">
                              {{ issue.tag }}
                            </a-tag>
                            <a-tag color="#0366d6" v-if="issue.abitrator">
                              abitration
                            </a-tag>
                            <span><a-icon type="message" theme="twoTone" two-tone-color="#2db7f5"/> 3</span>
                            <a-button size="small" @click="openIssue(project,feature,issue)">view issue</a-button>

                          </a-space>
                        </a-card>

                        <div>

                        </div>
                      </div>
                    </a-collapse-panel>
                  </a-collapse>


                </a-collapse-panel>
              </a-collapse>
              </div>



            </a-col>
            <a-col span="8" v-if="issueopen">
              <div  style="padding: 2%">
                <a-card style="width: 100%">
                  <p>{{currentissue.title}}</p>

                  <div
                      style="background-color: white;border: 1px solid #e8e8e8;padding: 2%;margin-bottom: 1rem">

                    <p style="font-family: sofia_proregular">{{ currentissue.description }}</p>

                  </div>
                  <a-space>

                    <a-button type="primary">Mark as done</a-button>
                    <a-upload>
                      <a-button> <a-icon type="usergroup-add" /> Request abitration </a-button>
                    </a-upload>

                  </a-space>
                  <div>
                    <a-list
                        v-if="comments.length"
                        :data-source="comments"
                        :header="`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`"
                        item-layout="horizontal"
                    >
                      <a-list-item slot="renderItem" slot-scope="item">
                        <a-comment
                            :author="item.author"

                            :content="item.content"
                            :datetime="item.datetime"
                        />
                      </a-list-item>
                    </a-list>
                    <a-comment>

                      <div slot="content">
                        <a-form-item>
                          <a-textarea :rows="4" :value="value" @change="handleChange" />
                        </a-form-item>
                        <a-form-item>
                          <a-button html-type="submit" :loading="submitting" type="primary" @click="handleSubmit">
                            Add Comment
                          </a-button>
                        </a-form-item>
                      </div>
                    </a-comment>
                  </div>


                </a-card>


              </div>






            </a-col>
            <a-col span="4" v-else>
              <div style="padding: 2%">
                <p>Overview</p>
                <a-card>
                  <a-statistic
                      title="Bugs"
                      :value=Bugcount


                      class="demo-class"
                      :value-style="{ color: '#cf1322' }"
                  >

                  </a-statistic>
                </a-card>
                <a-card>
                  <a-statistic
                      title="Issue in Abitration"
                      :value=Abitrationcount


                      :value-style="{ color: '#3f8600' }"
                      style="margin-right: 50px"
                  >

                  </a-statistic>
                </a-card>
                <a-card>
                  <a-statistic
                      title="Incomplete tasks"
                      :value=Incompletecount


                      class="demo-class"

                  >

                  </a-statistic>
                </a-card>
              </div>
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
const Projects = [
  {
    title: `Lishe app`,


    features: [{
      name: "Login pages",
      id: 1,
      'deadline': '2021-08-11',
      'assignedto': 'dennis',
      issues: [{
        title: `Login feature`,
        description: 'tried logging in ',
        comments: [],
        tag: 'question',
        status: 'solved',
        assigned_to: '',
        abitrator: false

      }, {
        title: `404 error`,
        description: 'when i load page on phone i get a 404 ',
        comments: [],
        tag: 'bug',
        status: 'solved',
        assigned_to: '',
        abitrator: false

      },]
    },
      {
        name: "admin dashboard",
        id: 2,
        'deadline': '2021-08-11',
        'assignedto': 'dennis',
        issues: [{
          title: `The website is squeezed on my laptop`,
          description: 'When i open the site there seems to be weird look',
          comments: [],
          tag: 'bug',
          status: 'solved',
          assigned_to: '',
          abitrator: false

        },]
      },
      {
        name: "Test no issue",
        id: 2,
        'deadline': '2021-08-11',
        'assignedto': 'dennis',
        issues: []
      },
    ],



  },
  {
    title: `React am`,
    features: [
      {
        name: "Database structure",
        id: 4,
        'deadline': '2021-08-11',
        'assignedto': 'robert',
        issues: [{
          title: `The website is squeezed on my laptop`,
          description: 'When i open the site there seems to be weird look',
          comments: [],
          tag: 'incomplete',
          status: 'solved',
          assigned_to: '',
          abitrator: true

        },]
      },
      {
        name: "UI/UX",
        id: 5,
        'deadline': '2021-08-11',
        'assignedto': 'robert',
        issues: [{
          title: `Login feature`,
          description: 'tried logging in ',
          comments: [],
          tag: 'question',
          status: 'solved',
          assigned_to: '',
          abitrator: false

        },]
      }
    ],



  },


]
export default {
  name: "Bugs",
  data() {
    return {
      Projects,
      issueopen: false,
      currentissue: {},
      comments: [],
      submitting: false,
      value: '',
      moment,


    };
  },
  components: {
    ClientSider


  },
  computed: {
    Bugcount() {
      let bugs = 0
      this.Projects.forEach(function (project) {
        project.features.forEach(function (feature){
          feature.issues.forEach(function (issue){
            if(issue.tag === 'bug'){
              bugs += 1

            }
          })
        })

      });
      return bugs


    },
    Abitrationcount() {
      let abitration = 0
      this.Projects.forEach(function (project) {
        project.features.forEach(function (feature){
          feature.issues.forEach(function (issue){
            if(issue.abitrator){
              abitration += 1
            }
          })
        })

      });
      return abitration



    },
    Incompletecount() {
      let incomplete = 0
      this.Projects.forEach(function (project) {
        project.features.forEach(function (feature){
          feature.issues.forEach(function (issue){
            if(issue.tag==='incomplete'){
              incomplete += 1
            }
          })
        })

      });
      return incomplete



    }

  },
  mounted() {

    this.Projects.forEach(function (project) {
      project.features.forEach(function (feature){
        feature.issues.forEach(function (issue){
          if(issue.tag === 'bug'){

            project.bugs +=1
          }
          else if(issue.abitrator){
            project.abitration +=1
          }
          else if(issue.tag==='incomplete'){
            project.incomplete+=1
          }
        })
      })

    });







  },
  methods: {
    openIssue(project, feature,issue) {
      let currentissuepick ={}
      this.Projects.forEach(function (project1) {
        if (project1 === project) {
          project1.features.forEach(function (feature1) {
            if(feature1 === feature){
              feature1.issues.forEach(function (issue1){
                if(issue1 === issue){
                  currentissuepick = issue1
                }

              })
            }
          })

        }

      })
      this.currentissue = currentissuepick
      this.issueopen = true


    },
    handleSubmit() {
      if (!this.value) {
        return;
      }

      this.submitting = true;

      setTimeout(() => {
        this.submitting = false;
        this.comments = [
          {
            author: 'Han Solo',
            content: this.value,
            datetime: moment().fromNow(),
          },
          ...this.comments,
        ];
        this.value = '';
      }, 1000);
    },
    handleChange(e) {
      this.value = e.target.value;
    },
  }
}
</script>

<style scoped>
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
</style>
