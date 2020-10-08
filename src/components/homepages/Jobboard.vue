<template>
  <a-layout :style="{background:'#fff'}">
    <pageheader></pageheader>

    <a-layout-content :style="{  marginTop: '6rem' }">

      <div style="">

        <div style="">
          <div style="padding: 2% 5%">
            <a-row style="color: black">
              <a-col span="12" class="">

                <div style=" ">

                  <a-list item-layout="vertical" size="large" :pagination="pagination" :data-source="Projects">

                    <a-list-item slot="renderItem" key="item.title" slot-scope="item" class="shadowsmall">
                      <template  slot="actions">
                              <span >
                                <a-icon type="calendar" style="margin-right: 8px" />
                                {{ item.time }}
                              </span>
                        <span >
                                <a-icon type="banks" style="margin-right: 8px" />
                                {{ item.budget }}$ budget
                              </span>
                        <span >
                                <a-button type="primary" @click="viewproject(item)" >View Project</a-button>
                              </span>
                      </template>


                      <a-list-item-meta :description="item.description">
                        <a slot="title" :href="item.href">{{ item.title }}</a>


                      </a-list-item-meta>

                    </a-list-item>
                  </a-list>


                </div>


              </a-col>
              <a-col span="12">
                <div style="padding: 0 1%">
                  <div class="casecard">


                    <div id="main content" style="padding: 1%">
                      <div v-if="project">

                        <div>
                            <span><p><strong>Project title:</strong>{{ project.title }}</p>
                              <a-button type="primary"  style="float: right" @click="Apply(project)">
                              Apply
                            </a-button>

                            </span>


                        </div>


                        <p>Description</p>
                        <p>
                          {{project.description}}

                        </p>
                        <div>
                          <p style="font-family: sofia_probold">Features</p>
                          <div v-for="feature in project.features" v-bind:key="feature">

                            <p style="">{{feature.title}}</p>
                            <div v-for="story in feature.storylist" v-bind:key="story">
                              <li>{{story}}</li>
                            </div>
                          </div>
                        </div>
                        <p style="font-family: sofia_probold">Tools than can be used to impliment</p>
                        <p>
                          <a-tag v-for="tag in project.tools" color="blue"
                                 :key="tag">
                            {{tag}}
                          </a-tag>

                        </p>
                        <p style="font-family: sofia_probold">Time to finish project : {{ project.time }}</p>
                        <p style="font-family: sofia_probold">Budget : {{ project.budget }}$</p>
                      </div>



                    </div>


                  </div>
                </div>


              </a-col>


            </a-row>

          </div>
        </div>
<!--        place bid modal -->
        <a-modal
            title="Apply for project"
            v-model="visible"
            style="top: 20px;"

        >
          <template slot="footer">

            <a-button key="submit" type="primary" @click="SubmitApplication">
              Submit
            </a-button>
          </template>
          <div>


            <p>Project Proposal(why i should get project)1200 character limit</p>
            <a-textarea v-model="proposal" maxlength="1200" @change="Proposalchanges"


                        :auto-size="{ minRows: 5 }"
            />
            <p>Tools i will use</p>
            <template v-for="(tag, index) in tags">
              <a-tooltip v-if="tag.length > 20" :key="tag" :title="tag">
                <a-tag :key="tag" :closable="index !== 0" @close="() => handleClose(tag)">
                  {{ `${tag.slice(0, 20)}...` }}
                </a-tag>
              </a-tooltip>
              <a-tag v-else :key="tag" :closable="index !== 0" @close="() => handleClose(tag)">
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
              <a-icon type="plus"/>
              New Tag
            </a-tag>
            <p>Time i will take(weeks,months,days)</p>

            <div style="margin-bottom: 16px">
              <a-input type="number" v-model="time" @change="Timechanges">

                <a-select slot="addonAfter"  style="width: 80px" v-model="datetype">
                  <a-select-option value="days">
                    days
                  </a-select-option>
                  <a-select-option value="weeks">
                    weeks
                  </a-select-option>
                  <a-select-option value="months">
                    months
                  </a-select-option>

                </a-select>
              </a-input>
            </div>
            <p>Budget
              <span v-if="bidflag" style="color: red">(bids are capped you can only go 10% lower than quoted by client )</span >
              <span v-else>(bids are capped you can only go 10% lower than quoted by client )</span>
            </p>
            <a-input type="number"  @change="budgetflag" v-model="budget" />





          </div>


        </a-modal>


      </div>
    </a-layout-content>
    <Footer/>
  </a-layout>

</template>

<script>
import Pageheader from '@/components/homepages/layout/Header.vue'
import Footer from '@/components/homepages/layout/Footer'
import Projects from '@/services/Projects'
import Bids from '@/services/Bids'
const listData = [];
for (let i = 0; i < 15; i++) {
  listData.push({
    id:i,
    title: `Cyprus online ${i}`,
    description:
        'Ant Design, a design language for background applications, is refined by Ant UED Team.',

    features:[{'title': 'Registration', 'storylist':[
        'As a developer I want to be able to create a public profile on remote.codeln.com so that i can be attractive to project owners',
        'vlesss'
      ] },{'title': 'Applicant tracking', 'storylist':[
        'As a developer I want to be able to create a public profile on remote.codeln.com so that i can be attractive to project owners',
        'vlesss'
      ] }],
    budget:2000,
    time:'2 months',
    tools:['react','django']
  });
}
class BidProjects {
  constructor(id, title,description, features, budget, time, tools) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.features = features;
    this.budget = budget;
    this.time = time;
    this.tools = tools;


  }
}
export default {
  name: "Jobboard",
  data() {
    return {
      listData,
      pagination: {
        onChange: page => {
          console.log(page);
        },
        pageSize: 4,
      },
      visible:false,

      project:{},
      budget:0,
      time:'',
      proposal:'',
      tags: [],
      inputVisible: false,
      inputValue: '',
      bidflag:false,
      bidstageprojects:[],
      datetype:'days',
      applicationerrors:[]

    }
  },
  components: {
    Pageheader, Footer,


  },

  async mounted() {
    this.project = this.listData[0]



    this.bidstageprojects = (await Projects.bidstageprojects()).data

  },
  computed: {
    Projects() {
      let projects=[]
      //replace this.listdata to this.bidstageprojects
      this.listData.forEach(project=>{
        let id = project.id
        let title = project.title
        let description = project.description
        let features = project.features
        let budget = project.budget
        let time = project.time
        let tools = project.tools


        let oneproject = new BidProjects(id, title,description, features, budget, time, tools)


        projects.push(oneproject)

      })


      return projects

    },

  },


  methods:{
    viewproject(item){
      if(item !== this.project){
        this.budget=''
        this.time=''
        this.proposal=''
        this.tags= []
        this.project=item


      }



    },
    Apply(){
      this.visible = true
    },
    budgetflag(){


      let bidbase = this.project.budget
      let lowest = (90/100)*bidbase
      this.bidflag = this.budget < lowest;







    },
    showInput() {
      this.inputVisible = true;
      this.$nextTick(function () {
        this.$refs.input.focus();
      });
    },
    handleClose(removedTag) {
      const tags = this.tags.filter(tag => tag !== removedTag);

      this.tags = tags;
    },

    handleInputChange(e) {
      this.inputValue = e.target.value;
    },

    handleInputConfirm() {
      const inputValue = this.inputValue;
      let tags = this.tags;
      if (inputValue && tags.indexOf(inputValue) === -1) {
        tags = [...tags, inputValue];
      }

      Object.assign(this, {
        tags,
        inputVisible: false,
        inputValue: '',
      });
      if(this.applicationerrors.includes('tags')){
        if(this.tags.length>0){
          let index = this.applicationerrors.indexOf('tags')
          if (index > -1) {
            this.applicationerrors.splice(index, 1);
          }
        }
      }else {
        if(this.tags === []){
          this.applicationerrors.push('tags')
        }

      }

    },
    SubmitApplication(){
      let bid ={'proposal':this.proposal,'tools':this.tags,'time':this.time,'datetype':this.datetype,'budget':this.budget}

      if(this.proposal === '' || this.proposal === null){
        this.applicationerrors.push('proposal')

      }
      if(this.tags.length===0){
        this.applicationerrors.push('tags')


      }
      if(this.time === '' || this.time === null){
        this.applicationerrors.push('time')


      }
      if(this.budget === 0){
        this.bidflag=true


      }


      if(this.applicationerrors.length===0 && this.bidflag === false){
        Bids.submitapplication(bid).then()
        this.visible = true
      }





    },
    Proposalchanges(){
      if(this.applicationerrors.includes('proposal')){
        if(this.proposal !== '' || this.proposal != null){
          let index = this.applicationerrors.indexOf('proposal')
          if (index > -1) {
            this.applicationerrors.splice(index, 1);
          }
        }
      }else {
        if(this.proposal === '' || this.proposal === null){
          this.applicationerrors.push('proposal')
        }

      }





    },
    Timechanges(){

      if(this.applicationerrors.includes('time')){
        if(this.time !== '' || this.time != null){
          let index = this.applicationerrors.indexOf('time')
          if (index > -1) {
            this.applicationerrors.splice(index, 1);
          }
        }
      }else {
        if(this.time === '' || this.time === null){
          this.applicationerrors.push('time')
        }

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

.bidcard {

  box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075) !important;
  background: white;
  border-radius: 0;
  padding: 2%;

}

.casecard {


  box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075) !important;

  background: white;
  border-radius: 0;
  padding: 2%;
  border: 1px solid #e8e8e8;

}

.shadowsmall {

  box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075) !important;
  background: white;
  border-radius: 0;
  border: 1px solid #e8e8e8;


  padding: 2%;
  margin-bottom: 1rem;
}
</style>
