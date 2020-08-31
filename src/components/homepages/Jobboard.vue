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

                  <a-list item-layout="vertical" size="large" :pagination="pagination" :data-source="listData">

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

        <a-modal
            title="Apply for project"
            v-model="visible"
            style="top: 20px;"

        >
          <template slot="footer">

            <a-button key="submit" type="primary">
              Submit
            </a-button>
          </template>
          <div>

            <p>Project Proposal(why i should get project)1200 character limit</p>
            <a-textarea v-model="proposal" maxlength="1200"


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
            <a-input v-model="time"/>
            <p>Budget
              <span v-if="bidflag" style="color: red">(bids are capped you can only go 10% lower than quoted by client )</span >
              <span v-else>(bids are capped you can only go 10% lower than quoted by client )</span>
            </p>
            <a-input-number style="width: 100%"
                            @change="budgetflag"
                            :default-value=project.budget
                            :formatter="value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
                            :parser="value => value.replace(/\$\s?|(,*)/g, '')"

            />



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

const listData = [];
for (let i = 0; i < 15; i++) {
  listData.push({

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
      budget:'',
      time:'',
      proposal:'',
      tags: [],
      inputVisible: false,
      inputValue: '',
      bidflag:false

    }
  },
  components: {
    Pageheader, Footer,


  },

  mounted() {
    this.project = this.listData[0]

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
    budgetflag(value){
      let bidbase = this.project.budget
      let lowest = (90/100)*bidbase
      if(value < lowest){
        this.bidflag=true


      }else {
        this.bidflag=false
      }



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
    },

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
