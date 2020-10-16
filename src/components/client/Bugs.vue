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
                <a-breadcrumb-item><a @click="$router.push('ClientBugs')">Bugs &Issues</a></a-breadcrumb-item>

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

                <a-collapse expandIconPosition="right" v-for="project in Projectslists" v-bind:key="project"
                            style="border-radius: 0;background-color: white">
                  <a-collapse-panel style="margin-bottom: 1rem;border-radius: 0;background-color: white">
                    <div slot="header">
                      <a-row>
                        <a-col span="12">
                          <p style="font-family: sofia_probold;font-size: 1rem">Project Name: {{ project.title }}</p>
                        </a-col>

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
                          <a-button  style="float: right" type="danger" @click="newIssue(feature)" size="small"><a-icon type="plus" />new issue</a-button>


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
                              <span><a-icon type="message" theme="twoTone" two-tone-color="#2db7f5"/> {{issue.comments.length}}</span>
                              <a-button size="small" @click="openIssue(issue)">view issue</a-button>

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
                  <a-icon type="close" style="float: right" @click="Close"/>

                  <p>{{currentissue.title}}</p>

                  <div
                      style="background-color: white;border: 1px solid #e8e8e8;padding: 2%;margin-bottom: 1rem">

                    <p style="font-family: sofia_proregular">{{ currentissue.description }}</p>

                  </div>
                  <a-space>
                    <a-button type="primary" v-if="currentissue.status" @click="CloseOpen">Re open issue</a-button>

                    <a-button type="primary" v-else @click="CloseOpen">Mark as done</a-button>




                    <div v-if="!currentissue.status">
                      <a-button v-if="!currentissue.abitrator" @click="Abitration"> <a-icon type="usergroup-add" /> Request abitration </a-button>
                      <a-button v-if="currentissue.abitrator" @click="Abitration"> <a-icon type="usergroup-add" /> Close abitration </a-button>
                    </div>


                  </a-space>
                  <div>
                    <a-list
                        v-if="currentissue.comments.length"
                        :data-source="currentissue.comments"
                        :header="`${currentissue.comments.length} ${currentissue.comments.length > 1 ? 'replies' : 'reply'}`"
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
                    <a-comment v-if="!currentissue.status">

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
            <a-col span="8" v-else-if="newissue">
              <div  style="padding: 2%">
                <a-card style="width: 100%">


                  <a-form layout="vertical">

                    <a-form-item
                        label="Title"

                    >
                      <a-input v-model="issuetitle"/>
                    </a-form-item>
                    <a-form-item
                        label="Describe the issue"

                    >
                      <a-textarea
                          v-model="issuedescription"
                          :auto-size="{ minRows: 3, maxRows: 5 }"
                      />
                    </a-form-item>
                    <p>Which of the below does the issue fall under?</p>
                    <a-radio-group  button-style="solid" style="margin-bottom: 1rem" default-value="bug" v-model="issuetag">
                      <a-radio-button value="bug">
                        bug
                      </a-radio-button>
                      <a-radio-button value="question">
                        question
                      </a-radio-button>
                      <a-radio-button value="incomplete">
                        incomplete
                      </a-radio-button>

                    </a-radio-group>
                    <a-form-item>
                      <a-space>
                        <a-button type="primary" @click="SubmitIssue">
                          Submit
                        </a-button>
                        <a-button  @click="Close">
                          Cancel
                        </a-button>
                      </a-space>
                    </a-form-item>
                  </a-form>



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
// import Project from '@/services/Projects'
// import Issues from '@/services/Issues'
const Projectlist = [
  {
    id:1,
    title: `Lishe apll`,

  },
  {
    id:2,
    title: `React am`,

  },


]
const Feautures = [
  {

    id: 1,
    project_id: 1,
    name: "Login pages",
    deadline: '2021-08-11',
    assignedto: 'dennis',
  }, {

    name: "admin dashboard",
    project_id: 1,
    id: 2,
    'deadline': '2021-08-11',
    'assignedto': 'dennis',
  }, {

    name: "Test no issue",
    project_id: 1,
    id: 3,
    'deadline': '2021-08-11',
    'assignedto': 'dennis',
  }, {

    name: "Database structure",
    project_id: 2,
    id: 4,
    'deadline': '2021-08-11',
    'assignedto': 'robert',
  }, {

    name: "UI/UX",
    project_id: 2,
    id: 5,
    'deadline': '2021-08-11',
    'assignedto': 'robert',
  }







]
const Issueslist = [
  {

    feature_id: 1,
    title: `The website is squeezed on my laptop`,
    description: 'When i open the site there seems to be weird look',
    comments: [],
    tag: 'bug',
    status: false,
    assigned_to: '',
    abitrator: true,
  },{

    feature_id: 2,
    title: `Login feature`,
    description: 'tried logging in ',
    comments: [],
    tag: 'question',
    status: false,
    assigned_to: '',
    abitrator: false
  },
  {

    feature_id: 1,
    title: `404 error`,
    description: 'when i load page on phone i get a 404 ',
    comments: [],
    tag: 'bug',
    status: false,
    assigned_to: '',
    abitrator: false
  },
  {

    feature_id: 4,
    title: `404 error`,
    description: 'when i load page on phone i get a 404 ',
    comments: [],
    tag: 'bug',
    status: true,
    assigned_to: '',
    abitrator: false
  },
  {

    feature_id: 5,
    title: `404 error`,
    description: 'when i load page on phone i get a 404 ',
    comments: [],
    tag: 'bug',
    status: true,
    assigned_to: '',
    abitrator: false
  }
]


export default {
  name: "Bugs",
  data() {
    return {

      Projectlist,
      Feautures,
      Issueslist,
      issueopen: false,
      currentissue: {},
      comments: [],
      submitting: false,
      value: '',
      moment,
      currentfeature:{},
      newissue:false,
      issuetitle:'',
      issuetag:'',
      issuedescription:''



    };
  },
  components: {
    ClientSider


  },
  computed: {
    Bugcount() {
      let bugs = 0
      this.Projectslists.forEach(function (project) {
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
      this.Projectslists.forEach(function (project) {
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
      this.Projectslists.forEach(function (project) {
        project.features.forEach(function (feature){
          feature.issues.forEach(function (issue){
            if(issue.tag==='incomplete'){
              incomplete += 1
            }
          })
        })

      });
      return incomplete



    },
    Projectslists(){
      let projects =[]

      this.Projectlist.forEach(project=>{
        let projectobj ={'id':'','title':'','features':[]}

        let featurelist =[]
        this.Feautures.forEach(feature=>{
          let featureobj = {'id':'','project_id':'','name':'','deadline':'','assignedto':'','issues':[]}
          if(feature.project_id === project.id){
            let featureissues=[]

            this.Issueslist.forEach(issue =>{

              if(issue.feature_id === feature.id){
                featureissues.push(issue)



              }
            })
            featureobj.id = feature.id
            featureobj.project_id = feature.project_id
            featureobj.deadline = feature.deadline
            featureobj.assignedto = feature.assigned_to
            featureobj.name = feature.name
            featureobj.issues = featureissues
            featurelist.push(featureobj)

          }

        })
        projectobj.id =project.id
        projectobj.title = project.title
        projectobj.features = featurelist
        projects.push(projectobj)
      })
      return projects

    }



  },
  async mounted() {



    // this.projectlist = (await Project.fetchallprojects()).data
    // this.featurelist = (await Project.fetchallfeatures()).data
    // this.issuelist = (await Issues.fetchallissues()).data



  },
  methods: {
    openIssue(issue) {

      this.currentissue = issue
      this.issueopen = true


    },
    newIssue(feature){
      this.currentfeature = feature
      this.newissue = true
    },
    SubmitIssue(){
      let issueobj ={
        feature_id: this.currentfeature.id,
        title: this.issuetitle,
        description: this.issuedescription,
        comments: [],
        tag: this.issuetag,
        status: 'solved',
        assigned_to: '',
        abitrator: false,}
      this.currentfeature.issues.push(issueobj)
      this.newissue = false

    },
    Close(){
      this.issueopen = false
      this.newissue = false

    },
    CloseOpen(){
      this.currentissue.status = this.currentissue.status !== true;
    },
    Abitration(){
      this.currentissue.abitrator = this.currentissue.abitrator !== true;

    },
    handleSubmit() {
      if (!this.value) {
        return;
      }

      this.submitting = true;

      setTimeout(() => {
        this.submitting = false;
        this.currentissue.comments = [
          {
            author: 'Han Solo',
            content: this.value,
            datetime: moment().fromNow(),
          },
          ...this.currentissue.comments,
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
