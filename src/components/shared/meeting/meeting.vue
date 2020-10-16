<template>
  <a-layout style="min-height: 100vh;background-color: #F4F7FC">
    <SmallSider/>


    <a-layout style="background-color: #F4F7FC">

      <a-layout-content
          :style="{   background: '#FAFBFF', minHeight: '280px', }"

      >
        <div>


          <div class="mainpresentation" style="height:100vh">

            <vue-jitsi-meet
                ref="jitsiRef"
                domain="meet.jit.si"
                :options="jitsiOptions"
            ></vue-jitsi-meet>


          </div>

        </div>
        <a-affix :offset-bottom="bottom">
          <div style="margin-left: 1rem">
            <a-space>
              <a-button type="primary" shape="circle" icon="form" @click="showContract" size="large"/>
              <a-button type="primary" shape="circle" icon="sketch" @click="showSketch" size="large"/>

              <a-switch default-checked @change="type"/>

            </a-space>
          </div>

        </a-affix>
        <a-row class="contract slide-top" :hidden="contract" style="width: 95%;padding-left: 1%" gutter="16">
          <a-col span="16">
            <a-card title="Contract">
              <div>
                <a-steps :current="current">
                  <a-step v-for="item in steps" :key="item.title" :title="item.title"/>
                </a-steps>
                <div class="steps-content">
                  <div v-if="current === 0">
                    <h3 style="font-weight: bold;font-family: sofia_probold;text-align: center">Welcome to the Contract negotiations of Project: {{CurrentProject.title}} </h3>
                    <a-form-model >
                      <a-form-model-item label="Project title">
                        <a-input v-model="CurrentProject.title" @change="sendProjectdata"/>
                      </a-form-model-item>
                      <a-form-model-item label="Project description">
                        <a-textarea v-model="CurrentProject.description" @change="sendProjectdata"


                                    :auto-size="{ minRows: 3, maxRows: 5 }"
                        />

                      </a-form-model-item>
                      <h3 style="font-weight: bold">Parties involved</h3>
                      <a-row gutter="16">
                        <a-col span="12">
                          <p>Client name
                            <a-input v-model="CurrentProject.client" @change="sendProjectdata"/>
                          </p>
                        </a-col>
                        <a-col span="12">
                          <p>Developer name
                            <a-input v-model="CurrentProject.developer" @change="sendProjectdata"/>
                          </p>

                        </a-col>
                      </a-row>





                    </a-form-model>

                  </div>

                  <div v-if="current === 1">
                    <h3 style="font-weight: bold;font-family: sofia_probold;text-align: center">Lets breakdown or revise on previus features  </h3>
                    <a-row gutter="16">

                      <a-col span="12">
                        <p style="font-family: sofia_problack">Feature list</p>
                        <div v-if="CurrentProject.features.length===0">
                          <p>Add feature<span style="float: right"><a-icon type="arrow-right"/></span></p>
                        </div>
                        <div v-else style="overflow-y: scroll;height: 40vh">

                          <div v-for="feature in CurrentProject.features" v-bind:key="feature">

                            <a-card size="small" :title="feature.title" style="width: 80%;margin-bottom: 1rem">
                              <a slot="extra" @click="editfeature(feature)">edit feature</a>
                              <p style="font-family: sofia_proregular" v-for="story in feature.storylist"
                                 v-bind:key="story">
                                {{ story.story }}
                              </p>
                            </a-card>

                          </div>
                        </div>


                      </a-col>
                      <a-col span="12" class="addfeature">
                        <a-form :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" @submit="handleSubmit">
                          <a-form-item label="Feature name">
                            <a-input v-model="featuretitle" placeholder="Registration"

                            />
                          </a-form-item>
                          <p style="font-family: sofia_proregular">Feature user stories
                            <a-button @click="addstory" :size="small" style="margin-right: 1%">
                              Add story
                            </a-button>
                          </p>
                          <p style="font-family: sofia_proregular"><strong>These provide context on what the feature
                            is supposed to do.</strong>Example:As a developer I want to be able to sign up and create
                            a profile


                          <div
                              v-for="(story, counter) in stories"
                              v-bind:key="counter">


                            <a-form-item>
                              <label slot="label">Story{{ counter + 1 }} <span style="float: right"
                                                                               @click="deleteStory(counter)"><a-icon
                                  type="close"/></span></label>

                              <a-textarea v-model="story.story"
                                          placeholder="As a developer I want to be able to create a public profile on remote.codeln.com so that i can be attractive to project owners"
                                          :auto-size="{ minRows: 2, maxRows: 5 }"


                              />

                            </a-form-item>


                          </div>
                          <a-button v-if="featureedit" type="primary" @click="editfeaturesubmit" :size="small">
                            Submit changes
                          </a-button>

                          <a-button v-else type="primary" @click="addFeature" :size="small">
                            Submit Feature
                          </a-button>


                        </a-form>
                      </a-col>
                    </a-row>
                  </div>
                  <div v-if="current === 2">
                    <h3 style="font-weight: bold;font-family: sofia_probold;text-align: center">Lets allot time for each feature stated previously </h3>
                    <a-row>
                      <a-col span="12"><p>Previous quoted time by client : 3 months ie {{CurrentProject.time}} days</p></a-col>
                      <a-col span="6">New Duration {{Duration}} days</a-col>
                      <a-col span="6">Remaining days {{CurrentProject.time - Duration}} days</a-col>
                    </a-row>


                    <a-row>
                      <a-col span="12">
                        <p style="font-weight: bold">Features</p>
                      </a-col>
                      <a-col span="12">
                        <p  style="font-weight: bold">Days alloted</p>

                      </a-col>
                    </a-row>

                    <div v-for="feature in CurrentProject.features" v-bind:key="feature">
                      <a-row style="border-bottom: 1px solid rgb(232, 232, 232);margin-bottom: 1%">
                        <a-col span="12">
                          <p style="font-family: sofia_probold">{{feature.title}}</p>


                          <p style="font-family: sofia_prolight" v-for="story in feature.storylist" v-bind:key="story">
                            {{story.story}}
                          </p>
                        </a-col>
                        <a-col span="12">
                          <a-input-number  v-model="feature.days" :min="1"  @change="sendProjectdata"  /> days
                        </a-col>
                      </a-row>

                    </div>


                  </div>
                  <div v-if="current === 3">


                    <h3 style="font-weight: bold;font-family: sofia_probold;text-align: center">Breakdown your budget to enable escrow </h3>
                    <a-row>
                      <a-col span="12"><p>Quoted budget by client : {{CurrentProject.budget}}$</p></a-col>
                      <a-col span="6">New Budget {{NewBudget}} $</a-col>
                      <a-col span="6">Remaining amount {{CurrentProject.budget - NewBudget}} $</a-col>
                    </a-row>


                    <a-row>
                      <a-col span="12">
                        <p style="font-weight: bold">Features</p>
                      </a-col>
                      <a-col span="12">
                        <p  style="font-weight: bold">Budget alloted</p>

                      </a-col>
                    </a-row>

                    <div v-for="feature in CurrentProject.features" v-bind:key="feature">
                      <a-row style="border-bottom: 1px solid rgb(232, 232, 232);margin-bottom: 1%">
                        <a-col span="12">
                          <p style="font-family: sofia_probold">{{feature.title}}</p>


                          <p style="font-family: sofia_prolight" v-for="story in feature.storylist" v-bind:key="story">
                            {{story.story}}
                          </p>
                        </a-col>
                        <a-col span="12">
                          <a-input-number
                              :default-value="1000"
                              :formatter="value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
                              :parser="value => value.replace(/\$\s?|(,*)/g, '')"

                              v-model="feature.budget" :min="1"  @change="sendProjectdata"
                          />

                        </a-col>
                      </a-row>

                    </div>

                  </div>
                  <div v-if="current === 4">
                    <h3 style="font-weight: bold;font-family: sofia_probold;">Which tools to build project on </h3>
                    <div>
                      <template v-for="(tag) in CurrentProject.tags">

                        <a-tag  :key="tag" closable @close="() => handleClose(tag)" color="#108ee9">
                          {{ tag }}
                        </a-tag>
                      </template>
                      <a-input
                          v-if="inputVisible"
                          ref="input"
                          type="text"
                          size="small"
                          :style="{ width: '78px' }"
                          :value="inputValue"
                          @change="handleInputChange"
                          @blur="handleInputConfirm"
                          @keyup.enter="handleInputConfirm"
                      />
                      <a-tag v-else style="background: #fff; borderStyle: dashed;" @click="showInput">
                        <a-icon type="plus" /> New Tag
                      </a-tag>
                    </div>
                  </div>
                  <div v-if="current === 5">
                    <h3 style="font-weight: bold;font-family: sofia_probold;text-align: center">Codeln's role </h3>
                    <p style="font-weight: bold">Escrow Management</p>
                    <p>Codeln will hereby be the recipient of the client budget as the escrow holder.</p>
                    <p>Disemination</p>
                    Escrow will only be sent to developer upon completion of a feature.where all issues have been resolved and client is satisfied
                    <p style="font-weight: bold">Conflict resolution</p>
                    Codeln will act as an abitrator of issues that prove difficult to solve between the client and developer.Ie issues raised and escrow dissemination
                    <p>I agree to the Codeln role as a conflict resoultion and a escrow manager of the project</p>

                    <div v-if="usertype==='client'">
                      <a-checkbox @change="sendProjectdata" v-model="CurrentProject.client_agree">
                        I Agree (client)
                      </a-checkbox>
                      <a-checkbox  disabled v-model="CurrentProject.developer_agree">
                        I Agree (developer)
                      </a-checkbox>

                    </div>
                    <div v-else>
                      <a-checkbox  disabled v-model="CurrentProject.client_agree">
                        I Agree (client)
                      </a-checkbox>
                      <a-checkbox @change="sendProjectdata" v-model="CurrentProject.developer_agree">
                        I Agree (developer)
                      </a-checkbox>

                    </div>


                  </div>


                </div>

                <div class="steps-action">
                  <a-button v-if="current < steps.length - 1" type="primary" @click="next">
                    Next
                  </a-button>
                  <a-button
                      v-if="current == steps.length - 1"
                      type="primary"
                      @click="$message.success('Processing complete!')"
                  >
                    Done
                  </a-button>
                  <a-button v-if="current > 0" style="margin-left: 8px" @click="prev">
                    Previous
                  </a-button>
                </div>
              </div>

            </a-card>
          </a-col>
          <a-col span="6" :hidden="sketch">
            <div v-if="usertype === 'client'">
              <a-card title="Client notes">
                <vue-simplemde v-model="CurrentProject.client_notes" @input="senddata" ref="markdownEditor"/>
              </a-card>
              <a-card title="Developer notes">
                <markdown>{{ CurrentProject.developer_notes }}</markdown>


              </a-card>
            </div>
            <div v-else>
              <a-card title="Developer notes">
                <vue-simplemde v-model="CurrentProject.developer_notes" @input="senddata" ref="markdownEditor"/>
              </a-card>
              <a-card title="Client notes">
                <markdown>{{ CurrentProject.client_notes }}</markdown>


              </a-card>

            </div>


          </a-col>
        </a-row>



      </a-layout-content>
    </a-layout>
  </a-layout>


</template>

<script>
import {JitsiMeet} from '@mycure/vue-jitsi-meet';
import SmallSider from "@/components/shared/layout/MeetingSider";


var showdown = require('showdown')

function makeid(length) {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

import io from "socket.io-client";
import VueSimplemde from "vue-simplemde";
import markdown from "vue-markdown";

import 'simplemde/dist/simplemde.min.css';

var socket = io.connect(process.env.VUE_APP_SOCKET);

class Project {
  constructor(meeting_id, features, title,description, budget, client_notes, developer_notes,time,tags,client_agree,developer_agree,client,developer) {
    this.meeting_id = meeting_id;
    this.features = features
    this.title = title
    this.description =description
    this.budget = budget
    this.client_notes = client_notes
    this.developer_notes = developer_notes
    this.tags = tags
    this.time = time
    this.client_agree =client_agree
    this.developer_agree =developer_agree
    this.client=client
    this.developer=developer



  }
}


export default {
  name: "meeting",
  components: {
    VueJitsiMeet: JitsiMeet,
    SmallSider, VueSimplemde, markdown
  },
  data() {
    return {

      bottom: 60,
      sketch: false,
      contract: true,
      newMessage: null,
      messages: [],
      typing: false,
      username: null,
      ready: false,
      info: [],
      connections: 0,
      meeting_id: '',
      meeting_data: [],
      current: 0,
      steps: [
        {
          title: 'Project details ',
          content: 'First-content',
        },
        {
          title: 'Features',
          content: 'Second-content',
        },
        {
          title: 'Time',
          content: 'Last-content',
        },
        {
          title: 'Budget',
          content: 'Last-content',
        },

        {
          title: 'Techonologies ',
          content: 'Last-content',
        },
        {
          title: 'Codeln role',
          content: 'Last-content',
        },
      ],
      usertype: 'client',
      stories: [],
      new_time:0,
      inputVisible: false,
      inputValue: '',
      project:{
        title:'lishe',
        client:'dennis',
        developer:'ruhiu',
        description:'lorem ipsum',
        budget:'5000',
        time:'90',
        tags: [ 'Tag 2', 'Tag 3'],
        client_agree:false,
        developer_agree:false,
        features: [ { "title": "hhj", "storylist": [ { "story": "ghggh" } ],"days":'8',"budget":'' }, { "title": "registration", "storylist": [ { "story": "xcx" } ],"days":'15',"budget":''  } ],
      }


    };
  },

  computed: {
    jitsiOptions() {
      return {
        roomName: makeid(8),
        noSSL: false,
        userInfo: {
          email: 'user@email.com',
          displayName: '',
        },
        configOverwrite: {
          enableNoisyMicDetection: false
        },
        interfaceConfigOverwrite: {
          SHOW_JITSI_WATERMARK: false,
          SHOW_WATERMARK_FOR_GUESTS: false,
          SHOW_CHROME_EXTENSION_BANNER: false
        },
        width: '100%',
        height: '100%',
        onload: this.onIFrameLoad,
        videoConferenceJoined: this.onIFrameLoad(),
        collapsed: true,
        sketch: false,
        contract: false,
        newMessage: null,
        messages: [],
        typing: false,
        username: null,
        ready: false,
        info: [],
        connections: 0,
        meeting_id: '',
        meeting_data: [],
      };
    },
    CurrentProject() {


      let currentmeeting = {}
      this.meeting_data.forEach(meeting => {
        if (meeting.meeting_id === this.meeting_id) {
          currentmeeting = meeting
        }
      })
      return currentmeeting
    },
    Down() {
      let convertedmarkdown =''
      let converter = new showdown.Converter()
      if(this.usertype === 'client'){
        let text = this.CurrentProject.developer_notes
        convertedmarkdown = converter.makeHtml(text);

      }else {
        let text = this.CurrentProject.client_notes
        convertedmarkdown = converter.makeHtml(text);

      }
      return convertedmarkdown
    },
    Duration(){
      let total_time=0
      this.CurrentProject.features.forEach((feature)=>{
        total_time += Number(feature.days)
      })
      return total_time
    },
    NewBudget(){
      let total_budget=0
      this.CurrentProject.features.forEach((feature)=>{
        total_budget += Number(feature.budget)
      })
      return total_budget
    }

  },


  async mounted() {
    this.meeting_id = 'codelnmeet'
    console.log(this.meeting_id)
    this.ready = true;

    let meeting_id = this.meeting_id

    let features = this.project.features
    let title = this.project.title
    let description =this.project.description
    let budget = this.project.budget
    let client_notes = 'hi'
    let developer_notes = ''
    let time =this.project.time
    let tags =this.project.tags
    let client_agree = false
    let developer_agree =false
    let client =this.project.client
    let developer =this.project.developer


    let projectmeeting = new Project(
        meeting_id, features, title,description, budget, client_notes, developer_notes,time,tags,client_agree,developer_agree,client,developer
    );
    this.meeting_data.push(projectmeeting)
    socket.emit('joined_meeting', this.meeting_data)



  },
  created() {
    window.onbeforeunload = () => {
      socket.emit('leave', this.username);
    }


    socket.on('project-data', (data) => {

      this.meeting_data = data


    });

    socket.on('joined_meeting', (data) => {


      this.meeting_data = data


    });

    socket.on('leave', (data) => {
      this.info.push({
        username: data,
        type: 'left'
      });

      setTimeout(() => {
        this.info = [];
      }, 5000);
    });

    socket.on('connections', (data) => {
      this.connections = data;
    });
  },



  methods: {
    onIFrameLoad() {
      ///
    },
    afterVisibleChange(val) {
      console.log('visible', val);
    },
    showContract() {
      this.contract = !this.contract;


      let ids = []
      this.meeting_data.forEach(room => {
        ids.push(room.meeting_id)
      })
      if (ids.includes(this.meeting_id) === false) {
        let self = this;
        self.enterMeeting()
      }

    },
    showSketch() {
      this.sketch = !this.sketch;

    },
    type(checked) {
      if (checked) {
        this.usertype = 'client'
      } else {
        this.usertype = 'developer'
      }

    },
    onClose() {
      this.contract = false;
      this.sketch = false;
    },

    sendProjectdata() {

      socket.emit('project-data', this.meeting_data);

    },
    enterMeeting() {



    },


    addUser() {
      this.ready = true;
      socket.emit('joined', this.username)
    },

    next() {
      this.current++;
    },
    prev() {
      this.current--;
    },
    addstory() {
      this.stories.push({
        story: '',

      })
      let self = this
      self.sendProjectdata()
    },
    deleteStory(counter) {

      this.stories.splice(counter, 1);
      let self = this
      self.sendProjectdata()
    },
    addFeature() {

      this.CurrentProject.features.push({'title': this.featuretitle, 'storylist': this.stories})
      let self = this
      self.sendProjectdata()
      this.featuretitle = ''
      this.stories = []


    },
    editfeature(feature) {
      this.featureedit = true
      this.featureindex = this.CurrentProject.features.indexOf(feature)
      this.featuretitle = this.CurrentProject.features[this.featureindex].title
      this.stories = this.CurrentProject.features[this.featureindex].storylist
      let self = this
      self.sendProjectdata()


    },
    editfeaturesubmit() {
      this.CurrentProject.features[this.featureindex] = {'title': this.featuretitle, 'storylist': this.stories}

      this.featureedit = false
      let self = this
      self.sendProjectdata()
      this.featuretitle = ''
      this.stories = []

    },
    handleClose(removedTag) {
      const tags = this.CurrentProject.tags.filter(tag => tag !== removedTag);
      console.log(tags);
      this.CurrentProject.tags = tags;
    },

    showInput() {
      this.inputVisible = true;
      this.$nextTick(function() {
        this.$refs.input.focus();
      });
    },

    handleInputChange(e) {
      this.inputValue = e.target.value;
    },

    handleInputConfirm() {
      const inputValue = this.inputValue;
      let tags = this.CurrentProject.tags;
      if (inputValue && tags.indexOf(inputValue) === -1) {
        tags = [...tags, inputValue];
      }
      console.log(tags);
      Object.assign(this, {
        tags,
        inputVisible: false,
        inputValue: '',
      });

      this.CurrentProject.tags = tags
      let self = this
      self.sendProjectdata()
    },



  }


}
</script>

<style scoped>
.mainpresentation {
  display: flex;
  position: relative;
  width: 100%;
  margin: 0 auto;


  justify-content: center;
}

.steps-content {
  margin-top: 16px;

  border-radius: 6px;

  min-height: 200px;
  padding: 2%;
}

.steps-action {
  margin-top: 24px;
}

.contract {
  position: absolute;
  top: 150px;

}

.notepad {
  position: absolute;
  top: 150px;
  left: 500px

}

.slide-top {
  -webkit-animation: slide-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  animation: slide-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

/* ----------------------------------------------
 * Generated by Animista on 2020-9-29 13:13:48
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info.
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation slide-top
 * ----------------------------------------
 */
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


</style>
