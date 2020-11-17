<template>
  <div>
    <div v-if="feature.stage === 'done'">
      <a-row>

        <a-col span="8" style="padding: 1%">
          <div class="taskcolumns">
            <p style="font-family: sofia_prosemibold">Done Tasks</p>
            <div style="height:37rem;overflow: auto;">

              <draggable class="list-group" style="height: 36rem" :list="donelist"
                         group="tasks"
              >
                <div
                    class="list-group-item"
                    v-for="(element) in donelist"
                    :key="element.name"
                >
                  <a-card hoverable size="small" style="width: 80%;margin-bottom: 1rem"
                          class="shadowsmall">
                <span slot="extra">
                  <a-space>
                    <a-icon type="check-circle" theme="twoTone"/>


                  </a-space>

                </span>


                    <p style="font-family: sofia_prolight">{{ element.description }} </p>


                  </a-card>


                </div>
              </draggable>
            </div>
          </div>
        </a-col>
        <a-result title="Great, we have done all the tasks for this feature!"
                  sub-title="For feature improvement or bugs please create an issue on the Feature issues.This will enable you to have a conversation as the changes happen"
        >
          <template #icon>
            <a-icon type="smile" theme="twoTone"/>
          </template>
          <template #extra>

          </template>
        </a-result>

      </a-row>
    </div>


    <a-row v-else>
      <a-col span="8" style="padding: 1%">

        <div class="taskcolumns">
          <p>
            <span style="font-family: sofia_prosemibold">To do</span>
            <a-button style="float: right" v-if="developer" type="primary" icon="plus" size="small" @click="add">new
              task
            </a-button>
          </p>

          <div style="height:37rem;overflow: auto;">
            <draggable class="list-group" style="height: 36rem" :list="todolist"
                       group="tasks"
                       @change="log" v-if="developer">
              <div
                  class="list-group-item"
                  v-for="(element) in todolist"
                  :key="element.name"
              >
                <a-card hoverable size="small" style="width: 80%;margin-bottom: 1rem"
                        class="shadowsmall">
                <span slot="extra">
                  <a-space>
                    <a-icon type="edit" @click="edittask(element)" theme="twoTone"/>
                    <a-popconfirm
                        title="Are you sure delete this task?"
                        ok-text="Yes"
                        cancel-text="No"
                        @confirm="removetask(element)"

                    >
                      <a href="#"><a-icon type="delete" theme="twoTone" two-tone-color="#eb2f96"/></a>
                      </a-popconfirm>

                  </a-space>

                </span>


                  <p style="font-family: sofia_prolight">{{ element.description }} </p>
                  <p v-if="element.assigned_to">assigned to :
                    <a-tag color="blue" >
                      {{ element.assigned_to.user.first_name }}
                    </a-tag>
                  </p>
                  <p v-else>
                    <a-tag color="orange" >
                      not assigned
                    </a-tag>
                  </p>


                </a-card>


              </div>
            </draggable>


            <div v-else
                 class="list-group-item"
                 v-for="(element) in todolist"
                 :key="element.name"
            >
              <a-card hoverable size="small" style="width: 80%;margin-bottom: 1rem"
                      class="shadowsmall">
                <span slot="extra">
                  <a-space>


                  </a-space>

                </span>


                <p style="font-family: sofia_prolight">{{ element.description }} </p>


              </a-card>


            </div>

          </div>

        </div>
      </a-col>
      <a-col span="8" style="padding: 1%">
        <div class="taskcolumns">
          <p style="font-family: sofia_prosemibold">In progress</p>
          <div style="height:37rem;overflow: auto;">
            <draggable class="list-group" style="height: 36rem" :list="inprogress"
                       group="tasks"
                       @change="log" v-if="developer">
              <div
                  class="list-group-item"
                  v-for="(element) in inprogress"
                  :key="element.name"
              >
                <a-card hoverable size="small" style="width: 80%;margin-bottom: 1rem"
                        class="shadowsmall">
                <span slot="extra">
                  <a-space>
                    <a-icon type="edit" @click="edittask(element)" theme="twoTone"/>
                    <a-popconfirm
                        title="Are you sure delete this task?"
                        ok-text="Yes"
                        cancel-text="No"
                        @confirm="removetask(element)"

                    >
                      <a href="#"><a-icon type="delete" theme="twoTone" two-tone-color="#eb2f96"/></a>
                      </a-popconfirm>

                  </a-space>

                </span>


                  <p style="font-family: sofia_prolight">{{ element.description }} </p>
                  <p v-if="element.assigned_to">assigned to :
                  <a-tag color="blue" >
                    {{ element.assigned_to.user.first_name }}
                  </a-tag>
                  </p>
                  <p v-else>
                    <a-tag color="orange" >
                      not assigned
                    </a-tag>
                  </p>



                </a-card>


              </div>
            </draggable>

            <div v-else
                 class="list-group-item"
                 v-for="(element) in inprogress"
                 :key="element.name"
            >
              <a-card hoverable size="small" style="width: 80%;margin-bottom: 1rem"
                      class="shadowsmall">
                <span slot="extra">
                  <a-space>

                  </a-space>

                </span>


                <p style="font-family: sofia_prolight">{{ element.description }} </p>


              </a-card>


            </div>

          </div>

        </div>
      </a-col>
      <a-col span="8" style="padding: 1%">
        <div class="taskcolumns">
          <p style="font-family: sofia_prosemibold">Done</p>
          <div style="height:37rem;overflow: auto;">

            <draggable class="list-group" style="height: 36rem" :list="donelist"
                       group="tasks"
                       @change="log" v-if="developer">
              <div
                  class="list-group-item"
                  v-for="(element) in donelist"
                  :key="element.name"
              >
                <a-card hoverable size="small" style="width: 80%;margin-bottom: 1rem"
                        class="shadowsmall">
                <span slot="extra">
                  <a-space>

                    <a-popconfirm
                        title="Are you sure delete this task?"
                        ok-text="Yes"
                        cancel-text="No"
                        @confirm="removetask(element)"

                    >
                      <a href="#"><a-icon type="delete" theme="twoTone" two-tone-color="#eb2f96"/></a>
                      </a-popconfirm>

                    <a-icon type="check-circle" theme="twoTone"/>
                  </a-space>

                </span>


                  <p style="font-family: sofia_prolight">{{ element.description }} </p>
                  <p v-if="element.assigned_to">assigned to :
                    <a-tag color="blue" >
                      {{ element.assigned_to.user.first_name }}
                    </a-tag>
                  </p>
                  <p v-else>
                    <a-tag color="orange" >
                      not assigned
                    </a-tag>
                  </p>


                </a-card>


              </div>
            </draggable>

            <div v-else
                 class="list-group-item"
                 v-for="(element) in donelist"
                 :key="element.name"
            >
              <a-card hoverable size="small" style="width: 80%;margin-bottom: 1rem"
                      class="shadowsmall">
                <span slot="extra">
                  <a-space>

                    <a-icon type="check-circle" theme="twoTone"/>
                  </a-space>

                </span>


                <p style="font-family: sofia_prolight">{{ element.description }} </p>


              </a-card>


            </div>
          </div>
        </div>
      </a-col>

    </a-row>
    <a-modal v-model="visible">
      <template slot="footer">

        <a-button key="submit" type="primary" :disabled="task_description_validate" :loading="loading"
                  @click="submitTaskEdit">
          Submit
        </a-button>
      </template>
      <a-form layout="vertical">


        <a-form-item
            label="Describe the task"

        >
          <a-textarea
              v-model="task_description"
              :auto-size="{ minRows: 3, maxRows: 5 }"
          />
          <p v-if="task_description_validate" style="color: red">
            please write something
          </p>
        </a-form-item>
        <div v-if="assigned_to">
          <span>Currently assigned to :</span>
          <a-tag color="blue" >
            {{currenttask.assigned_to.user.first_name}}
          </a-tag>
        </div>

        <p>Change to: </p>
        <a-select style="width: 120px" @change="ChooseTeam">
          <a-select-option v-for="member in members" v-bind:key="member" :value="member.id">
            {{ member.user.first_name }}
          </a-select-option>


        </a-select>



      </a-form>

    </a-modal>
    <a-modal v-model="newtask" >
      <template slot="footer">

        <a-button key="submit" type="primary" :disabled="task_description_validate" :loading="loading"
                  @click="submitNewTask">
          Submit
        </a-button>
      </template>
      <a-form layout="vertical">
        {{newtask}}


        <a-form-item
            label="Describe the task"

        >
          <a-textarea
              v-model="task_description"
              :auto-size="{ minRows: 3, maxRows: 5 }"
          />
          <p v-if="task_description_validate" style="color: red">
            please write something
          </p>
        </a-form-item>
        <p>Assign to:</p>
        <a-select style="width: 120px" @change="ChooseTeam">
          <a-select-option v-for="member in members" v-bind:key="member" :value="member.id">
            {{ member.user.first_name }}
          </a-select-option>


        </a-select>


      </a-form>

    </a-modal>


  </div>
</template>

<script>


import draggable from "vuedraggable";
import Project from "@/services/Projects";
import Projects from "@/services/Projects";
import User from "@/services/UsersService";


export default {
  name: "tasks",
  data() {
    return {
      taskslist: [],
      feature_id: null,
      todolist: [],
      inprogress: [],
      donelist: [],
      currenttask: {},
      visible: false,
      loading: false,
      newtask: false,
      task_description: '',
      task_description_validate: false,
      feature: null,
      developer: false,
      team: null,
      members: [],
      assigned_to: ''


    };
  },
  components: {
    draggable


  },
  async mounted() {

    this.fetchtasks()
    this.task_description =''

    this.$store.dispatch('setFeaturestatus', false)
    if (this.$store.state.user_object.user_type === 'developer') {
      this.developer = true
    }
    this.fetchmyteams()


  },
  computed: {
    FeatureId() {
      return this.$store.state.feature_id
    }
  },
  watch: {
    FeatureId: function () {
      this.$store.dispatch('setFeaturestatus', false)
      this.donelist = []
      this.inprogress = []
      this.todolist = []
      this.fetchtasks()


    },
    todolist: function () {
      this.$store.dispatch('setFeaturestatus', false)
      this.todolist.forEach(task => {
        task.stage = 'todo'

      })
      let self = this
      self.Checkcomplete()


    },
    inprogress: function () {
      this.$store.dispatch('setFeaturestatus', false)
      this.inprogress.forEach(task => {
        task.stage = 'inprogress'
      })
      let self = this
      self.Checkcomplete()


    },
    donelist: function () {
      this.$store.dispatch('setFeaturestatus', false)
      this.donelist.forEach(task => {
        task.stage = 'done'
      })
      let self = this
      self.Checkcomplete()


    },
    task_description: function () {
      if (this.task_description !== '') {
        this.task_description_validate = false
      } else {
        this.task_description_validate = true
      }
    },
    currenttask: function () {
      if (this.currenttask.description === '') {
        this.task_description_validate = true
      } else {
        this.task_description_validate = false
      }
    }


  },
  methods: {
    fetchtasks() {
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }
      this.newtask = false
      this.todolist =[]
      this.inprogress =[]
      this.donelist =[]
      Project.fetchfeaturetask(this.$store.state.feature_id, auth)
          .then(
              resp => {
                this.taskslist = resp.data
                this.taskslist.forEach(task => {

                  if (task.stage === 'todo') {
                    this.todolist.push(task)

                  } else if (task.stage === 'inprogress') {
                    this.inprogress.push(task)

                  } else if (task.stage === 'done') {
                    this.donelist.push(task)

                  }
                })
                let self = this
                self.Checkcomplete()
                this.getFeature()

              }
          )

    },
    getFeature() {
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }
      Project.getfeature(this.$store.state.feature_id, auth)
          .then(
              resp => {
                this.feature = resp.data
              }
          )

    },
    log: function (evt) {
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }


      if (evt.removed) {

        if (this.todolist.includes(evt.removed.element)) {

          Project.featuretaskpatch(evt.removed.element.id, {stage: evt.removed.element.stage}, auth).then(
              this.FeatureStageMove()
          )


        } else if (this.inprogress.includes(evt.removed.element)) {
          Project.featuretaskpatch(evt.removed.element.id, {stage: evt.removed.element.stage}, auth).then(
              this.FeatureStageMove()
          )


        } else if (this.donelist.includes(evt.removed.element)) {
          Project.featuretaskpatch(evt.removed.element.id, {stage: evt.removed.element.stage}, auth).then(
              this.FeatureStageMove()
          )


          let self = this
          self.Checkcomplete()


        }
      }

    },
    add: function () {
      this.newtask = true;
    },
    removetask: function (element) {
      if (element.stage === 'todo') {

        this.removeElement(this.todolist, element)

      } else if (element.stage === 'inprogress') {
        let self = this
        self.removeElement(this.inprogress, element)

      } else if (element.stage === 'done') {
        let self = this
        self.removeElement(this.donelist, element)

      }


    },
    removeElement(list, element) {
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }
      Project.deletetask(element.id, auth).then(
      )

      const index = list.indexOf(element);
      if (index > -1) {
        list.splice(index, 1);
      }


    },
    edittask(element) {
      this.visible = true
      this.currenttask = element
      this.task_description = this.currenttask.description
      this.assigned_to = this.currenttask.assigned_to.id
    },
    ChooseTeam(value) {
      this.assigned_to = value


    },
    submitTaskEdit() {
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }
      if (this.currenttask.description) {
        this.currenttask.description = this.task_description
        this.loading = true;
        this.loading = false

        Project.featuretaskpatch(this.currenttask.id, {
          description: this.task_description,
          assigned_to: this.assigned_to
        }, auth).then(
            () => {
              this.$message.info('edits saved');
              this.visible = false
              this.fetchtasks()
            }
        )
        this.task_description = ''
        this.task_description_validate = false
      } else {
        this.task_description_validate = true
      }


    },
    submitNewTask() {
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }
      this.newtask = false
      if (this.task_description !== '') {


        let task = {
          'stage': 'todo',
          'feature': this.$store.state.feature_id,
          'description': this.task_description,
          'assigned_to': this.assigned_to
        }

        Project.newfeaturetask(task, auth).then(
            () => {

              this.task_description = ''
              this.$message.info('task added');
              this.fetchtasks()




            }


        )
        this.task_description = ''
        this.task_description_validate = false





      } else {
        this.task_description_validate = true
      }
      this.newtask = false



    },


    Checkcomplete() {
      if (this.donelist.length > 0) {
        if (this.todolist.length === 0 && this.inprogress.length === 0) {
          this.$store.dispatch('setFeaturestatus', true)
        } else {
          this.$store.dispatch('setFeaturestatus', false)
        }
      }
    },
    fetchmyteams() {
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }
      this.team = []

      Projects.fetchteams(this.$store.state.user.pk, auth)
          .then(resp => {
            this.team = resp.data[0]
            this.fetchmembers()

          })


    },
    fetchmembers() {
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }

      let members = []
      members = this.team.members.split(',')
      if (this.team.members.length > 0) {
        members = this.team.members.split(',')
        members.forEach(onemember => {
          User.currentuser(onemember, auth)
              .then(resp => {
                this.members.push(resp.data)


              })
        })
      }
    },
    FeatureStageMove(){
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }
      if(this.taskslist.length>0){
        if(this.todolist.length === 0 && this.inprogress.length === 0  && this.donelist.length>0){

          Project.updatefeature(this.feature.id, { stage: 'quality'}, auth)
              .then(() => {
                this.fetchtasks()


              })

        }else if( this.inprogress.length>0){
          Project.updatefeature(this.feature.id, { stage: 'inprogress'}, auth)
              .then(() => {
                this.fetchtasks()

              })


        }
      }


    }


  }
}
</script>

<style scoped>

.shadowsmall {
  box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075) !important;
  border: 1px solid #e8e8e8;
  color: black;
  background: white;
  border-radius: 3%;
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
  height: 40rem;
  padding: 3%
}
</style>
