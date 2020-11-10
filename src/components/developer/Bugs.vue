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
                <a-breadcrumb-item><a @click="$router.push('/Developer')">Home</a></a-breadcrumb-item>
                <a-breadcrumb-item><a @click="$router.push('/DevBugs')">Bugs &Issues</a></a-breadcrumb-item>

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
          <a-row gutter="16">
            <a-col span="16">
              <div style="padding: 3%;">
                <a-tabs default-active-key="1" @change="callback">
                  <a-tab-pane key="1">
                    <span slot="tab">
                      Bugs
                      <a-tag color="#f50">
                        {{Bugs.length}}
                      </a-tag>
                    </span>
                    <a-list item-layout="vertical" size="large" :pagination="pagination" :data-source="Bugs">

                      <a-list-item slot="renderItem" key="issue" slot-scope="issue"
                      >
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
                            <a-tag color="#0366d6" v-if="issue.arbitration_required">
                              abitration
                            </a-tag>
                            <a-tag color="#41B883" v-if="issue.closed">
                              Closed
                            </a-tag>

                            <a-button size="small" @click="openIssue(issue)">view issue</a-button>

                          </a-space>
                        </a-card>


                      </a-list-item>
                    </a-list>
                  </a-tab-pane>
                  <a-tab-pane key="2"  force-render>
                    <span slot="tab">
                      Questions
                      <a-tag color="blue">
                        {{Questions.length}}
                      </a-tag>
                    </span>
                    <a-list item-layout="vertical" size="large" :pagination="pagination" :data-source="Questions">

                      <a-list-item slot="renderItem" key="issue" slot-scope="issue"
                      >
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
                            <a-tag color="#0366d6" v-if="issue.arbitration_required">
                              abitration
                            </a-tag>
                            <a-tag color="#41B883" v-if="issue.closed">
                              Closed
                            </a-tag>

                            <a-button size="small" @click="openIssue(issue)">view issue</a-button>

                          </a-space>
                        </a-card>


                      </a-list-item>
                    </a-list>
                  </a-tab-pane>
                  <a-tab-pane key="3"  force-render>
                    <span slot="tab">
                      Incomplete
                      <a-tag color="purple">
                        {{Incomplete.length}}
                      </a-tag>
                    </span>
                    <a-list item-layout="vertical" size="large" :pagination="pagination" :data-source="Incomplete">

                      <a-list-item slot="renderItem" key="issue" slot-scope="issue"
                      >
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
                            <a-tag color="#0366d6" v-if="issue.arbitration_required">
                              abitration
                            </a-tag>
                            <a-tag color="#41B883" v-if="issue.closed">
                              Closed
                            </a-tag>

                            <a-button size="small" @click="openIssue(issue)">view issue</a-button>

                          </a-space>
                        </a-card>


                      </a-list-item>
                    </a-list>
                  </a-tab-pane>
                  <a-tab-pane key="4"  force-render>
                    <span slot="tab">
                      Closed
                      <a-tag color="orange">
                        {{Closed.length}}
                      </a-tag>
                    </span>
                    <a-list item-layout="vertical" size="large" :pagination="pagination" :data-source="Closed">

                      <a-list-item slot="renderItem" key="issue" slot-scope="issue"
                      >
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
                            <a-tag color="#0366d6" v-if="issue.arbitration_required">
                              abitration
                            </a-tag>
                            <a-tag color="#41B883" v-if="issue.closed">
                              Closed
                            </a-tag>

                            <a-button size="small" @click="openIssue(issue)">view issue</a-button>

                          </a-space>
                        </a-card>


                      </a-list-item>
                    </a-list>
                  </a-tab-pane>
                  <a-tab-pane key="5"  force-render>
                    <span slot="tab">
                      In Abitration
                      <a-tag color="#108ee9">
                        {{InAbitration.length}}
                      </a-tag>
                    </span>
                    <a-list item-layout="vertical" size="large" :pagination="pagination" :data-source="InAbitration">

                      <a-list-item slot="renderItem" key="issue" slot-scope="issue"
                      >
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
                            <a-tag color="#0366d6" v-if="issue.arbitration_required">
                              abitration
                            </a-tag>
                            <a-tag color="#41B883" v-if="issue.closed">
                              Closed
                            </a-tag>

                            <a-button size="small" @click="openIssue(issue)">view issue</a-button>

                          </a-space>
                        </a-card>


                      </a-list-item>
                    </a-list>
                  </a-tab-pane>

                </a-tabs>


              </div>


            </a-col>
            <a-col span="8" v-if="issueopen">
              <div style="padding: 2%">
                <a-card style="width: 100%">
                  <a-icon type="close" style="float: right" @click="Close"/>
                  <p>Project name : {{ currentissue.feature.project.title }} </p>

                  <p style="font-weight: bold">Issue title:{{ currentissue.title }} </p>


                  <div
                      style="background-color: white;border: 1px solid #e8e8e8;padding: 2%;margin-bottom: 1rem">
                    <p>Issue description:</p>

                    <p style="font-family: sofia_proregular">{{ currentissue.description }}</p>

                  </div>
                  <a-space>
                    <a-button type="primary" v-if="currentissue.closed" @click="CloseOpen" size="small">Re open issue
                    </a-button>

                    <a-button type="primary" v-else @click="CloseOpen" size="small"> Mark as done</a-button>


                    <div v-if="!currentissue.closed">
                      <a-button v-if="!currentissue.arbitration_required" @click="Abitration" size="small">
                        <a-icon type="usergroup-add"/>
                        Request abitration
                      </a-button>
                      <a-button v-if="currentissue.arbitration_required" @click="Abitration" size="small">
                        <a-icon type="usergroup-add"/>
                        Close abitration
                      </a-button>
                    </div>


                  </a-space>
                  <div>
                    <a-list style="height: 30vh;overflow-y: scroll"
                            v-if="currentcomments.length"
                            :data-source="currentcomments"
                            :header="`${currentcomments.length} ${currentcomments.length > 1 ? 'replies' : 'reply'}`"
                            item-layout="horizontal"
                    >
                      <a-list-item slot="renderItem" slot-scope="item">
                        <a-comment
                            :author="item.author.user.first_name"

                            :content="item.text"
                            :datetime="item.created"
                        />
                      </a-list-item>
                    </a-list>
                    <a-comment v-if="!currentissue.closed">

                      <div slot="content">
                        <a-form-item>
                          <a-textarea :rows="4" :value="value" @change="handleChange"/>
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
              <div style="padding: 2%">
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
                    <a-radio-group button-style="solid" style="margin-bottom: 1rem" default-value="bug"
                                   v-model="issuetag">
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
                        <a-button @click="Close">
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
import DevSider from '@/components/developer/layout/DevSider'
import moment from 'moment';
import Project from '@/services/Projects'



export default {
  name: "Bugs",
  data() {
    return {


      Issueslist:[],
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
      issuedescription:'',
      currentcomments: [],
      pagination: {
        onChange: page => {
          console.log(page);
        },
        pageSize: 5,
      },



    };
  },
  components: {
    DevSider


  },
  computed: {
    Bugcount() {
      let bugs = 0
      this.Issueslist.forEach(function (issue) {

        if (issue.tag === 'bug' && !issue.closed && !issue.arbitration_required) {
          bugs += 1

        }
      });
      return bugs


    },
    Abitrationcount() {
      let abitration = 0
      this.Issueslist.forEach(function (issue) {

        if (issue.arbitration_required) {
          abitration += 1
        }


      });
      return abitration


    },
    Incompletecount() {
      let incomplete = 0
      this.Issueslist.forEach(function (issue) {

        if (issue.tag === 'incomplete' && !issue.closed && !issue.arbitration_required) {
          incomplete += 1
        }


      });
      return incomplete


    },
    Bugs(){
      let bug =[]
      this.Issueslist.forEach(function (issue) {

        if (issue.tag === 'bug' && !issue.closed && !issue.arbitration_required) {
          bug.push(issue)

        }
      });
      return bug
    },
    Closed(){
      let bug =[]
      this.Issueslist.forEach(function (issue) {

        if (issue.closed) {
          bug.push(issue)

        }
      });
      return bug
    },
    InAbitration(){
      let bug =[]
      this.Issueslist.forEach(function (issue) {

        if (issue.arbitration_required && !issue.closed) {
          bug.push(issue)

        }
      });
      return bug

    },
    Questions(){
      let bug =[]
      this.Issueslist.forEach(function (issue) {

        if (issue.tag === 'question' && !issue.closed && !issue.arbitration_required) {
          bug.push(issue)

        }
      });
      return bug

    },
    Incomplete(){
      let bug =[]
      this.Issueslist.forEach(function (issue) {

        if (issue.tag === 'incomplete' && !issue.closed && !issue.arbitration_required) {
          bug.push(issue)

        }
      });
      return bug
    }





  },
  async mounted() {



    this.fetchIssues()



  },
  methods: {
    fetchIssues() {
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }


      Project.developerallissues(this.$store.state.user.pk, auth)
          .then(resp => {
            resp.data.forEach(issue => {

              this.Issueslist.push(issue)


            })


          })


    },
    openIssue(issue) {
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }

      this.currentissue = issue
      this.issueopen = true
      Project.fetchissuecomments(issue.id, auth).then(
          resp => {
            this.currentcomments = resp.data
          }
      )


    },
    newIssue(feature) {
      this.currentfeature = feature
      this.newissue = true
    },
    SubmitIssue() {
      let issueobj = {
        feature_id: this.currentfeature.id,
        title: this.issuetitle,
        description: this.issuedescription,
        comments: [],
        tag: this.issuetag,
        status: 'solved',
        assigned_to: '',
        abitrator: false,
      }
      this.currentfeature.issues.push(issueobj)
      this.newissue = false

    },
    Close() {
      this.issueopen = false
      this.newissue = false

    },
    CloseOpen() {
      this.currentissue.closed = this.currentissue.closed !== true;
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }
      Project.featureissuepatch(this.currentissue.id,{closed:this.currentissue.closed}, auth)
          .then(

          )
    },
    Abitration() {
      this.currentissue.arbitration_required = this.currentissue.arbitration_required !== true;
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }
      Project.featureissuepatch(this.currentissue.id,{arbitration_required:this.currentissue.arbitration_required}, auth)
          .then(

          )

    },
    handleSubmit() {
      if (!this.value) {
        return;
      }

      this.submitting = true;

      this.submitting = false;
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }
      let comment ={
        'issue':this.currentissue.id,
        'text':this.value,
        'author':this.$store.state.user.pk,

      }
      Project.newissuecomment(comment, auth)
          .then(()=>{
            Project.fetchissuecomments(this.currentissue.id, auth).then(
                resp=>{
                  this.currentcomments = resp.data
                }
            )
            this.value = '';
          })
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
