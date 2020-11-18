<template>
  <div>


    <div>
      <div >

        <a-button type="danger" @click="newIssue" size="small">
          <a-icon type="plus"/>
          new issue
        </a-button>
      </div>

      <a-row :gutter="gutter">

        <a-col span="16">
          <a-list item-layout="vertical" size="large" :pagination="pagination" :data-source="issuelist">

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

                  <a-button size="small" @click="openIssue(issue)">view issue</a-button>

                </a-space>
              </a-card>


            </a-list-item>
          </a-list>
        </a-col>
        <a-col span="8" v-if="issueopen" class="floatcard" >
          <div style="padding: 2%">
            <a-card style="width: 100%">

              <a-icon type="close" style="float: right" @click="Close"/>

              <p>{{ currentissue.title }}</p>

              <div
                  style="background-color: white;border: 1px solid #e8e8e8;padding: 2%;margin-bottom: 1rem">

                <p style="font-family: sofia_proregular">{{ currentissue.description }}</p>

              </div>
              <a-space>
                <a-button type="primary" v-if="currentissue.closed" @click="CloseOpen" size="small">Re open issue</a-button>

                <a-button type="primary" v-else @click="CloseOpen" size="small">Mark as done</a-button>


                <div v-if="!currentissue.closed">
                  <a-button v-if="!currentissue.arbitration_required" @click="Abitration" size="small">
                    <a-icon type="usergroup-add" />
                    Request abitration
                  </a-button>
                  <a-button v-if="currentissue.arbitration_required" @click="Abitration" size="small">
                    <a-icon type="usergroup-add" />
                    Close abitration
                  </a-button>
                </div>


              </a-space>
              <div>

                <a-list style="height: 20vh;overflow-y: scroll"
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
                <a-radio-group button-style="solid" style="margin-bottom: 1rem" default-value="bug" v-model="issuetag">
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
      </a-row>
    </div>


  </div>
</template>

<script>


import Project from "@/services/Projects";

export default {
  name: "issues",
  data() {
    return {
      gutter:16,
      issuelist:[],
      feature_id: null,
      visible: false,
      loading: false,
      pagination: {

        pageSize: 3,
      },
      issueopen: false,
      currentissue: {},
      comments: [],
      submitting: false,
      value: '',
      newissue: false,
      issuetitle: '',
      issuetag: '',
      issuedescription: '',
      currentcomments:[]

    };
  },
  computed: {
    FeatureId() {
      return this.$store.state.feature_id
    }
  },
  watch: {
    FeatureId: function () {

      this.fetchIssues()


    },



  },
  mounted() {
    this.fetchIssues()
  },
  methods: {
    fetchIssues() {
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }
      Project.fetchfeatureissues(this.$store.state.feature_id, auth)
          .then(resp=>{
            this.issuelist = resp.data
          })
    },
    openIssue(issue) {
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }

      this.currentissue = issue
      this.newissue = false
      this.issueopen = true
      Project.fetchissuecomments(this.currentissue.id, auth).then(
          resp=>{
            this.currentcomments = resp.data
          }
      )


    },
    newIssue() {
      this.issueopen = false

      this.newissue = true
    },
    SubmitIssue() {
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }
      let newissueobj = {
        'feature': this.$store.state.feature_id,
        'title': this.issuetitle,
        'description': this.issuedescription,
        'tag': this.issuetag,
      }


      this.newissue = false
      Project.newfeatureissue(newissueobj, auth)
          .then(
              ()=>{
                this.fetchIssues()
              }
          )
      this.issuetitle = ''
      this.issuedescription = ''
      this.issuetag = ''


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
.floatcard{
  top: -86px;
}
</style>
