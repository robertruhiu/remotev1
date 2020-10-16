<template>
<div>


  <div>
    <div style="margin-bottom: 1rem">

      <a-button   type="danger" @click="newIssue" size="small"><a-icon type="plus" />new issue</a-button>
    </div>

    <a-row gutter="16" >
      <a-col span="16">
        <a-list item-layout="vertical" size="large" :pagination="pagination" :data-source="Issues">

          <a-list-item slot="renderItem" key="issue" slot-scope="issue" v-if="issue.feature_id === $store.state.feature_id">
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




          </a-list-item>
        </a-list>
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
    </a-row>
  </div>


</div>
</template>

<script>

import moment from "moment";

const issuelist = [
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
name: "issues",
  data() {
    return {
      issuelist,
      feature_id:null,
      visible:false,
      loading:false,
      pagination: {
        onChange: page => {
          console.log(page);
        },
        pageSize: 3,
      },
      issueopen: false,
      currentissue: {},
      comments: [],
      submitting: false,
      value: '',
      newissue:false,
      issuetitle:'',
      issuetag:'',
      issuedescription:''

    };
  },
  computed:{
  Issues(){
    let issues = []
    this.issuelist.forEach(issue=>{
      if(issue.feature_id === this.$store.state.feature_id){
        issues.push(issue)
      }
    })
    return issues
  }
  },
  methods: {
    openIssue(issue) {

      this.currentissue = issue
      this.newissue = false
      this.issueopen = true


    },
    newIssue(){
      this.issueopen = false


      this.newissue = true
    },
    SubmitIssue(){
      let issueobj ={
        feature_id: this.$store.state.feature_id,
        title: this.issuetitle,
        description: this.issuedescription,
        comments: [],
        tag: this.issuetag,
        status: 'solved',
        assigned_to: '',
        abitrator: false,}
      this.issuelist.push(issueobj)
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

</style>
