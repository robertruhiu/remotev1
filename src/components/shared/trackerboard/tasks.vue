<template>
<div>


  <a-row>
    <a-col span="8" style="padding: 1%">
      <div style="background-color:#F7F7F7;height: 40rem;padding: 3% ">
        <p>
          <span style="font-family: sofia_prosemibold">To do</span>
          <a-button style="float: right" type="primary" icon="plus" size="small" @click="add">new task</a-button>
        </p>

        <div style="height:37rem;overflow: auto;">
          <draggable class="list-group" style="height: 36rem" :list="todolist"
                     group="tasks"
                     @change="log">
            <div
                class="list-group-item"
                v-for="(element) in todolist"
                :key="element.name"
            >
              <a-card hoverable size="small" style="width: 80%;margin-bottom: 1rem"
                      class="shadowsmall">
                <span slot="extra"  >
                  <a-space>
                    <a-icon type="edit" @click="edittask(element)" theme="twoTone"/>
                    <a-icon type="delete" @click="removetask(element)" theme="twoTone"  two-tone-color="#eb2f96"/>
                  </a-space>

                </span>


                <p style="font-family: sofia_prolight">{{ element.name }} </p>


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
          <draggable class="list-group" style="height: 36rem" :list="inprogress"
                     group="tasks"
                     @change="log">
            <div
                class="list-group-item"
                v-for="(element) in inprogress"
                :key="element.name"
            >
              <a-card hoverable size="small" style="width: 80%;margin-bottom: 1rem"
                      class="shadowsmall">
                <span slot="extra" >
                  <a-space>
                    <a-icon type="edit" @click="edittask(element)" theme="twoTone"/>
                    <a-icon type="delete" @click="removetask(element)" theme="twoTone"  two-tone-color="#eb2f96"/>
                  </a-space>

                </span>


                <p style="font-family: sofia_prolight">{{ element.name }} </p>


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

          <draggable class="list-group" style="height: 36rem" :list="donelist"
                     group="tasks"
                     @change="log">
            <div
                class="list-group-item"
                v-for="(element) in donelist"
                :key="element.name"
            >
              <a-card hoverable size="small" style="width: 80%;margin-bottom: 1rem"
                      class="shadowsmall">
                <span slot="extra" >
                  <a-space>
                    <a-icon type="edit" @click="edittask(element)" theme="twoTone"/>
                    <a-icon type="delete" @click="removetask(element)" theme="twoTone"  two-tone-color="#eb2f96"/>
                  </a-space>

                </span>


                <p style="font-family: sofia_prolight">{{ element.name }} </p>


              </a-card>


            </div>
          </draggable>
        </div>
      </div>
    </a-col>

  </a-row>
  <a-modal v-model="visible" :title="currenttask.name" on-ok="handleOk">
    <template slot="footer">

      <a-button key="submit" type="primary" :loading="loading" @click="submitTaskEdit">
        Submit
      </a-button>
    </template>
    <a-form layout="vertical">


      <a-form-item
          label="Describe the task"

      >
        <a-textarea
            v-model="currenttask.name"
            :auto-size="{ minRows: 3, maxRows: 5 }"
        />
      </a-form-item>



    </a-form>

  </a-modal>

</div>
</template>

<script>



import draggable from "vuedraggable";
// import Project from '@/services/Projects'
const taskslist = [
  {name: "Login pages", id: 1, 'deadline': '2021-08-11', 'assignedto': 'dennis',feature_id:1,'stage':'todo'},
  {name: "admin dashboard", id: 2, 'deadline': '2021-08-11', 'assignedto': 'dennis',feature_id:1,'stage':'done'},
  {name: "mlima pages", id: 3, 'deadline': '2021-08-11', 'assignedto': 'dennis',feature_id:2,'stage':'todo'},
  {name: "admin dashboard", id: 4, 'deadline': '2021-08-11', 'assignedto': 'dennis',feature_id:2,'stage':'inprogress'},
  {name: "Profile", id: 5, 'deadline': '2021-08-11', 'assignedto': 'dennis',feature_id:3,'stage':'todo'},
  {name: "Database structure", id: 5, 'deadline': '2021-08-11', 'assignedto': 'robert',feature_id:3,'stage':'done'},
  {name: "UI/UX", id: 6, 'deadline': '2021-08-11', 'assignedto': 'robert',feature_id:4,'stage':'inprogress'},
  {name: "landing Page", id: 7, 'deadline': '2021-08-11', 'assignedto': 'jessica',feature_id:4,'stage':'todo'}


]
export default {
name: "tasks",
  data() {
    return {
      taskslist,
      feature_id:null,
      todolist:[],
      inprogress:[],
      donelist:[],
      currenttask:{},
      visible:false,
      loading:false







    };
  },
  components: {
    draggable



  },
  async mounted() {
    // Project.fetchfeaturetask(this.$store.state.feature_id)
    //     .then(resp=>{
    //       this.taskslist = resp.data
    //     })
    this.taskslist.forEach(task=>{

      if(task.feature_id === this.$store.state.feature_id && task.stage === 'todo'){
        this.todolist.push(task)

      }else if(task.feature_id === this.$store.state.feature_id && task.stage === 'inprogress'){
        this.inprogress.push(task)

      }else if(task.feature_id === this.$store.state.feature_id && task.stage === 'done'){
        this.donelist.push(task)

      }
    })



  },
  computed: {
  FeatureId(){
    return this.$store.state.feature_id
  }
  },
  watch:{
    FeatureId:function (){
      this.taskmanager()

    },
    todolist:function (){
      this.todolist.forEach(task=>{
        task.stage = 'todo'

      })
    },
    inprogress:function (){
      this.inprogress.forEach(task=>{
        task.stage = 'inprogress'
      })
    },
    donelist:function (){
      this.donelist.forEach(task=>{
        task.stage = 'done'
      })
    }


  },
  methods:{
    log: function(evt) {
      console.log(evt)



      if(evt.removed){

        if(this.todolist.includes(evt.removed.element)){
          console.log('am in todo now')
        }else if (this.inprogress.includes(evt.removed.element)){
          console.log('am in inprogress now')

        }else if (this.donelist.includes(evt.removed.element)){
          console.log('am in done now')

        }
      }

    },
    add: function() {
      this.todolist.push({ name: "Juan" });
    },
    removetask:function (element){
      if(element.stage === 'todo'){

        this.removeElement(this.todolist,element)

      }else if (element.stage === 'inprogress'){
        let self = this
        self.removeElement(this.inprogress,element)

      }else if(element.stage === 'done'){
        let self = this
        self.removeElement(this.donelist,element)

      }


    },
    removeElement(list,element){
      const index = list.indexOf(element);
      if (index > -1) {
        list.splice(index, 1);
      }

    },
    edittask(element){
      this.visible = true
      this.currenttask = element
    },
    submitTaskEdit(){
      this.loading = true;
      this.loading = false
      this.visible = false
      // Project.featuretaskpatch(task.id).then()

    },

    taskmanager(){
      this.donelist=[]
      this.inprogress=[]
      this.todolist=[]
      this.taskslist.forEach(task=>{

        if(task.feature_id === this.$store.state.feature_id && task.stage === 'todo'){
          this.todolist.push(task)
          // Project.featuretaskpatch(task.id).then()

        }else if(task.feature_id === this.$store.state.feature_id && task.stage === 'inprogress'){
          this.inprogress.push(task)
          // Project.featuretaskpatch(task.id).then()

        }else if(task.feature_id === this.$store.state.feature_id && task.stage === 'done'){
          this.donelist.push(task)
          // Project.featuretaskpatch(task.id).then()

        }
      })
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
</style>
