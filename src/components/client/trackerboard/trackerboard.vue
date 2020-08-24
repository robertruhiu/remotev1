<template>
  <a-layout style="min-height: 100vh;background-color: #F4F7FC">
    <SmallSider/>


    <a-layout style="background-color: #F4F7FC">

      <a-layout-content
          :style="{  padding: '1rem 2%', background: '#FAFBFF', minHeight: '280px', }"

      >
        <div>
          <a-card class="hellocard">

            <a-row>
              <a-col span="12">
                <a-breadcrumb>
                  <a-breadcrumb-item><a href="/Dashboard">Home</a></a-breadcrumb-item>
                  <a-breadcrumb-item><a href="/Myprojects">My projects</a></a-breadcrumb-item>
                  <a-breadcrumb-item><a>Cyrus web application</a></a-breadcrumb-item>

                </a-breadcrumb>
                <span style="font-size: 1.7rem;font-family: sofia_prosemibold;color: black">
                  Cyrus web application</span>

              </a-col>
              <a-col span="6">
                <div style="text-align: center">

                </div>


              </a-col>
            </a-row>


          </a-card>


        </div>

        <div style="min-height: 40vh ;position: relative;">
          <div style="">
            <a-row style="color: black">
              <a-col span="6">
                <div class="casecard">
                  <a-tabs default-active-key="1" @change="trackmode">
                    <a-tab-pane key="1" tab="Features">
                      <div style="border-bottom: 1px solid #e8e8e8;">


                        <p style="font-family: sofia_probold">These are the core features of what you want the
                          application to
                          do.Each has its own User stories and tasks that have to be
                          achieved to accomplish it</p>


                      </div>
                      <div style="color:black;height: 65vh;overflow-y: scroll;" >
                        <a-list item-layout="vertical" size="large" :pagination="pagination" :data-source="listData">

                          <a-list-item slot="renderItem" key="item.title" slot-scope="item" >

                            <a-card >
                              <template v-for="{ type, text } in actions" slot="actions">
                      <span :key="type">
                        <a-icon :type="type" style="margin-right: 8px"/>
                        {{ text }}
                      </span>
                              </template>


                              <span slot="title" >
                                Europe Street beat
                              </span>
                                <template >
                                  <ul v-for="story in item.userstories" v-bind:key="story">
                                    <li>{{story}}</li>
                                  </ul>

                                </template>

                            </a-card>


                          </a-list-item>
                        </a-list>
                      </div>


                    </a-tab-pane>
                    <a-tab-pane key="2" tab="Issues/bugs" force-render>

                      <a-result status="500"  sub-title="Found a bug or issue">
                        <template #extra>
                          <a-textarea placeholder="Bug or issue" :rows="4" style="margin-bottom: 1rem" />
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
                  <div style="padding: 0 1%">
                    <div class="casecard">
                      <p style="font-family: sofia_proregular">
                        <strong>Feature:</strong> Europe Street beat
                      </p>
                    </div>
                  </div>


                  <a-row>
                    <a-col span="8" style="padding: 1%">
                      <div style="background-color:#F7F7F7;height: 40rem;padding: 3% ">
                        <p style="font-family: sofia_prosemibold">To do</p>
                        <div style="height:37rem;overflow: auto;">
                          <draggable class="list-group" style="height: 36rem" :list="list1" group="tasks"
                                     @change="log">
                            <div
                                class="list-group-item"
                                v-for="(element) in list1"
                                :key="element.name"
                            >
                              <a-card hoverable size="small" style="width: 80%;margin-bottom: 1rem" class="shadowsmall">
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
                          <draggable class="list-group" style="height: 36rem" :list="list2" group="tasks"
                                     @change="log">
                            <div
                                class="list-group-item"
                                v-for="(element) in list2"
                                :key="element.name"
                            >
                              <a-card hoverable size="small" style="width: 80%;margin-bottom: 1rem" class="shadowsmall">
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

                          <draggable class="list-group" style="height: 36rem" :list="list3" group="tasks"
                                     @change="log">
                            <div
                                class="list-group-item"
                                v-for="(element) in list3"
                                :key="element.name"
                            >
                              <a-card hoverable size="small" style="width: 80%;margin-bottom: 1rem" class="shadowsmall">
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

const listData = [];
for (let i = 0; i < 5; i++) {
  listData.push({

    title: `ant design vue part ${i}`,


    userstories:[
        'As a developer I want to be able to create a public profile on remote.codeln.com so that i can be attractive to project owners',
      'vlesss'
    ]
  });
}

export default {
  name: "trackerboard",
  data() {
    return {
      list1: [
        {name: "Login pages", id: 1, 'deadline': '2021-08-11', 'assignedto': 'dennis'},
        {name: "Admin dashboard", id: 2, 'deadline': '2021-08-11', 'assignedto': 'dennis'},
        {name: "Profile", id: 3, 'deadline': '2021-08-11', 'assignedto': 'dennis'},

      ],
      list2: [
        {name: "Database structure", id: 4, 'deadline': '2021-08-11', 'assignedto': 'robert'},
        {name: "UI/UX", id: 5, 'deadline': '2021-08-11', 'assignedto': 'robert'},

      ],
      list3: [
        {name: "landing Page", id: 6, 'deadline': '2021-08-11', 'assignedto': 'jessica'},

      ],
      listData,
      pagination: {
        onChange: page => {
          console.log(page);
        },
        pageSize: 4,
      },
      actions: [

        {type: 'profile', text: '6 tasks'},
        {type: 'message', text: '2 messages'},
      ],
      taskmode: true,
      issuemode: false


    };
  },
  components: {
    draggable, SmallSider


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
    }


  },
  methods: {
    trackmode(id) {
      if (id === '1') {
        this.taskmode = true
        this.issuemode = false
      } else if (id === '2') {
        this.taskmode = false
        this.issuemode = true

      }

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