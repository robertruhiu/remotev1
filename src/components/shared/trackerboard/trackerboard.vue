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
                <div style="background-color:#F7F7F7;height: 45rem;padding: 3% ">
                  <p style="font-family: sofia_prosemibold">Backlog</p>
                  <div style="height:42rem;overflow: auto;">
                    <div
                        class="list-group-item"
                        v-for="(element) in listData"
                        :key="element.name"
                    >
                      <div v-if="element.stage === 'backlog'">

                        <a-card class="milestonecard">

                          <template v-for="{ type, text } in element.actions" slot="actions">
                      <span :key="type">
                        <a-icon :type="type" style="margin-right: 8px"/>
                        {{ text }}
                      </span>

                          </template>


                          <span slot="title">
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
                <div style="background-color:#F7F7F7;height: 45rem;padding: 3% ">
                  <p style="font-family: sofia_prosemibold">In progress</p>
                  <div style="height:42rem;overflow: auto;">
                    <div
                        class="list-group-item"
                        v-for="(element) in listData"
                        :key="element.name"
                    >
                      <div v-if="element.stage === 'inprogress'">
                        <a-card class="milestonecard">

                          <template v-for="{ type, text } in element.actions" slot="actions">
                      <span :key="type">
                        <a-icon :type="type" style="margin-right: 8px"/>
                        {{ text }}
                      </span>

                          </template>


                          <span slot="title">
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
                <div style="background-color:#F7F7F7;height: 45rem;padding: 3% ">
                  <p style="font-family: sofia_prosemibold">Quality check</p>
                  <div style="height:42rem;overflow: auto;">

                    <div
                        class="list-group-item"
                        v-for="(element) in listData"
                        :key="element.name"
                    >
                      <div v-if="element.stage === 'quality'">
                        <a-card class="milestonecard">

                          <template v-for="{ type, text } in element.actions" slot="actions">
                      <span :key="type">
                        <a-icon :type="type" style="margin-right: 8px"/>
                        {{ text }}
                      </span>

                          </template>


                          <span slot="title">
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
                <div style="background-color:#F7F7F7;height: 45rem;padding: 3% ">
                  <p style="font-family: sofia_prosemibold">Done</p>
                  <div style="height:42rem;overflow: auto;">

                    <div
                        class="list-group-item"
                        v-for="(element) in listData"
                        :key="element.name"
                    >
                      <div v-if="element.stage === 'done'">
                        <a-card class="milestonecard">

                          <template v-for="{ type, text } in element.actions" slot="actions">
                      <span :key="type">
                        <a-icon :type="type" style="margin-right: 8px"/>
                        {{ text }}
                      </span>

                          </template>


                          <span slot="title">
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

            </a-row>
            <a-row style="color: black" v-if="viewmode === 'feature'">
              <a-col span="6">
                <div class="casecard">
                  <a-tabs default-active-key="1" @change="trackmode">
                    <a-tab-pane key="1" tab="Milestones">
                      <div style="border-bottom: 1px solid #e8e8e8;">


                        <p style="font-family: sofia_probold">These are the core milestones of what you want the
                          application to
                          do.Each has its own User stories and tasks that have to be
                          achieved to accomplish it</p>


                      </div>
                      <div style="color:black;height: 65vh;overflow-y: scroll;">
                        <a-list item-layout="vertical" size="large" :pagination="pagination" :data-source="listData">

                          <a-list-item slot="renderItem" key="item.title" slot-scope="item">

                            <a-card>

                              <template v-for="{ type, text } in item.actions" slot="actions">
                      <span :key="type">
                        <a-icon :type="type" style="margin-right: 8px"/>
                        {{ text }}
                      </span>

                              </template>


                              <span slot="title">
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


                    </a-tab-pane>
                    <a-tab-pane key="2" tab="Issues/bugs" force-render>

                      <a-result status="500" sub-title="Found a bug or issue">
                        <template #extra>
                          <a-textarea placeholder="Bug or issue" :rows="4" style="margin-bottom: 1rem"/>
                          <a-button type="primary">
                            Submit bug
                          </a-button>
                        </template>
                      </a-result>
                    </a-tab-pane>

                  </a-tabs>


                </div>


              </a-col>
              <a-col span="18">
                <div v-if="taskmode">
                  <div v-if="currentfeature">
                    <div style="padding: 0 1%">
                      <div class="casecard">
                        <p style="font-family: sofia_proregular">
                          <strong>Milestone:</strong> {{ currentfeature.title }}
                        </p>
                      </div>
                    </div>


                    <a-row>
                      <a-col span="8" style="padding: 1%">
                        <div style="background-color:#F7F7F7;height: 40rem;padding: 3% ">
                          <p style="font-family: sofia_prosemibold">To do</p>
                          <div style="height:37rem;overflow: auto;">
                            <draggable class="list-group" style="height: 36rem" :list="currentfeature.todo_task"
                                       group="tasks"
                                       @change="log">
                              <div
                                  class="list-group-item"
                                  v-for="(element) in currentfeature.todo_task"
                                  :key="element.name"
                              >
                                <a-card hoverable size="small" style="width: 80%;margin-bottom: 1rem"
                                        class="shadowsmall">
                            <span slot="title" style="font-family: sofia_proextralight;font-size: 9px;">Due: {{
                                element.deadline
                              }}</span>

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
                      <a-col span="8" style="padding: 1%">
                        <div style="background-color:#F7F7F7;height: 40rem;padding: 3% ">
                          <p style="font-family: sofia_prosemibold">In progress</p>
                          <div style="height:37rem;overflow: auto;">
                            <draggable class="list-group" style="height: 36rem" :list="currentfeature.inprogress"
                                       group="tasks"
                                       @change="log">
                              <div
                                  class="list-group-item"
                                  v-for="(element) in currentfeature.inprogress"
                                  :key="element.name"
                              >
                                <a-card hoverable size="small" style="width: 80%;margin-bottom: 1rem"
                                        class="shadowsmall">
                            <span slot="title" style="font-family: sofia_proextralight;font-size: 9px;">Due: {{
                                element.deadline
                              }}</span>

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
                      <a-col span="8" style="padding: 1%">
                        <div style="background-color:#F7F7F7;height: 40rem;padding: 3% ">
                          <p style="font-family: sofia_prosemibold">Done</p>
                          <div style="height:37rem;overflow: auto;">

                            <draggable class="list-group" style="height: 36rem" :list="currentfeature.done"
                                       group="tasks"
                                       @change="log">
                              <div
                                  class="list-group-item"
                                  v-for="(element) in currentfeature.done"
                                  :key="element.name"
                              >
                                <a-card hoverable size="small" style="width: 80%;margin-bottom: 1rem"
                                        class="shadowsmall">
                            <span slot="title" style="font-family: sofia_proextralight;font-size: 9px;">Due: {{
                                element.deadline
                              }}</span>

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

                  </div>

                </div>

                <div v-if="issuemode">
                  <div style="padding: 0 1%">
                    <div class="casecard">
                      <p style="font-family: sofia_proregular">
                        <strong>Issues/Bugs: </strong>Monitor and report issues you noted on the demos
                      </p>
                    </div>
                  </div>


                  <a-row>
                    <a-col span="8" style="padding: 1%">
                      <div style="background-color:#F7F7F7;height: 40rem;padding: 3% ">
                        <p style="font-family: sofia_prosemibold">Bug list</p>
                        <div style="height:37rem;overflow: auto;">
                          <draggable class="list-group" style="height: 36rem" :list="list1" group="tasks"
                                     @change="log">
                            <div
                                class="list-group-item"
                                v-for="(element) in list1"
                                :key="element.name"
                            >
                              <a-card hoverable size="small" style="width: 80%;margin-bottom: 1rem" class="shadowsmall">


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
                    <a-col span="8" style="padding: 1%">
                      <div style="background-color:#F7F7F7;height: 40rem;padding: 3% ">
                        <p style="font-family: sofia_prosemibold">Fixing</p>
                        <div style="height:37rem;overflow: auto;">
                          <draggable class="list-group" style="height: 36rem" :list="list2" group="tasks"
                                     @change="log">
                            <div
                                class="list-group-item"
                                v-for="(element) in list2"
                                :key="element.name"
                            >
                              <a-card hoverable size="small" style="width: 80%;margin-bottom: 1rem" class="shadowsmall">


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
                    <a-col span="8" style="padding: 1%">
                      <div style="background-color:#F7F7F7;height: 40rem;padding: 3% ">
                        <p style="font-family: sofia_prosemibold">Done</p>
                        <div style="height:37rem;overflow: auto;">

                          <draggable class="list-group" style="height: 36rem" :list="list3" group="tasks"
                                     @change="log">
                            <div
                                class="list-group-item"
                                v-for="(element) in list3"
                                :key="element.name"
                            >
                              <a-card hoverable size="small" style="width: 80%;margin-bottom: 1rem" class="shadowsmall">


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
                </div>

              </a-col>


            </a-row>

          </div>
        </div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>

import moment from "moment";
import draggable from 'vuedraggable'
import SmallSider from "@/components/client/layout/SmallSider";


const listData = [
  {
    title: `I am backlog task `,
    stage:'backlog',

    userstories: [
      'As a developer I want to be able to create a public profile on remote.codeln.com so that i can be attractive to project owners',
      'vlesss'
    ],
    todo_task: [{name: "Login pages", id: 1, 'deadline': '2021-08-11', 'assignedto': 'dennis'},
      {name: "admin dashboard", id: 2, 'deadline': '2021-08-11', 'assignedto': 'dennis'},
      ],
    inprogress: [{name: "Database structure", id: 4, 'deadline': '2021-08-11', 'assignedto': 'robert'},
      {name: "UI/UX", id: 5, 'deadline': '2021-08-11', 'assignedto': 'robert'}],
    done: [{name: "landing Page", id: 6, 'deadline': '2021-08-11', 'assignedto': 'jessica'}],
    actions: [

      {type: 'profile', text: '6 tasks'},
      {type: 'message', text: '2 messages'},
    ],
  },
  {
    title: `I am backlog task 2 `,
    stage:'backlog',

    userstories: [
      'As a developer I want to be able to create a public profile on remote.codeln.com so that i can be attractive to project owners',
      'vlesss'
    ],
    todo_task: [{name: "Login pages", id: 1, 'deadline': '2021-08-11', 'assignedto': 'dennis'},
      {name: "admin dashboard", id: 2, 'deadline': '2021-08-11', 'assignedto': 'dennis'},
      {name: "Profile", id: 3, 'deadline': '2021-08-11', 'assignedto': 'dennis'}],
    inprogress: [{name: "Database structure", id: 4, 'deadline': '2021-08-11', 'assignedto': 'robert'},
      {name: "UI/UX", id: 5, 'deadline': '2021-08-11', 'assignedto': 'robert'}],
    done: [{name: "landing Page", id: 6, 'deadline': '2021-08-11', 'assignedto': 'jessica'}],
    actions: [

      {type: 'profile', text: '6 tasks'},
      {type: 'message', text: '2 messages'},
    ],
  },

  {
    title: `I am a task in progress  `,
    stage:'inprogress',

    userstories: [
      'As a developer I want to be able to create a public profile on remote.codeln.com so that i can be attractive to project owners',
      'vlesss'
    ],
    todo_task: [{name: "Login pages", id: 1, 'deadline': '2021-08-11', 'assignedto': 'dennis'},
      {name: "admin dashboard", id: 2, 'deadline': '2021-08-11', 'assignedto': 'dennis'},
      {name: "Profile", id: 3, 'deadline': '2021-08-11', 'assignedto': 'dennis'}],
    inprogress: [{name: "Database structure", id: 4, 'deadline': '2021-08-11', 'assignedto': 'robert'},
      {name: "UI/UX", id: 5, 'deadline': '2021-08-11', 'assignedto': 'robert'}],
    done: [{name: "landing Page", id: 6, 'deadline': '2021-08-11', 'assignedto': 'jessica'}],
    actions: [

      {type: 'profile', text: '6 tasks'},
      {type: 'message', text: '2 messages'},
    ],
  },
  {
    title: `I am  task in quality check `,
    stage:'quality',
    userstories: [
      'As a developer I want to be able to create a public profile on remote.codeln.com so that i can be attractive to project owners',
      'vlesss'
    ],
    todo_task: [{name: "Login pages", id: 1, 'deadline': '2021-08-11', 'assignedto': 'dennis'},
      {name: "admin dashboard", id: 2, 'deadline': '2021-08-11', 'assignedto': 'dennis'},
      {name: "Profile", id: 3, 'deadline': '2021-08-11', 'assignedto': 'dennis'}],
    inprogress: [{name: "Database structure", id: 4, 'deadline': '2021-08-11', 'assignedto': 'robert'},
      {name: "UI/UX", id: 5, 'deadline': '2021-08-11', 'assignedto': 'robert'}],
    done: [{name: "landing Page", id: 6, 'deadline': '2021-08-11', 'assignedto': 'jessica'}],
    actions: [

      {type: 'profile', text: '6 tasks'},
      {type: 'message', text: '2 messages'},
    ],
  },
  {
    title: `I am done task `,
    stage:'done',
    userstories: [
      'As a developer I want to be able to create a public profile on remote.codeln.com so that i can be attractive to project owners',
      'vlesss'
    ],
    todo_task: [{name: "Login pages", id: 1, 'deadline': '2021-08-11', 'assignedto': 'dennis'},
      {name: "admin dashboard", id: 2, 'deadline': '2021-08-11', 'assignedto': 'dennis'},
      {name: "Profile", id: 3, 'deadline': '2021-08-11', 'assignedto': 'dennis'}],
    inprogress: [{name: "Database structure", id: 4, 'deadline': '2021-08-11', 'assignedto': 'robert'},
      {name: "UI/UX", id: 5, 'deadline': '2021-08-11', 'assignedto': 'robert'}],
    done: [{name: "landing Page", id: 6, 'deadline': '2021-08-11', 'assignedto': 'jessica'}],
    actions: [

      {type: 'profile', text: '6 tasks'},
      {type: 'message', text: '2 messages'},
    ],
  }

]

export default {
  name: "trackerboard",
  data() {
    return {

      listData,
      pagination: {
        onChange: page => {
          console.log(page);
        },
        pageSize: 4,
      },

      taskmode: true,
      issuemode: false,
      currentfeature: {},
      viewmode: 'milestone'


    };
  },
  components: {
    draggable, SmallSider


  },
  mounted() {
    this.currentfeature = this.listData[0]

  },
  computed: {
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
  methods: {
    log: function(evt) {
      window.console.log(evt);
    },
    trackmode(id) {
      if (id === '1') {
        this.taskmode = true
        this.issuemode = false
      } else if (id === '2') {
        this.taskmode = false
        this.issuemode = true

      }

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
      this.viewmode = 'feature'

    }
  }
}
</script>

<style scoped>
.hellocard {

  box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075) !important;

  background: white;
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
.milestonecard{
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
</style>
