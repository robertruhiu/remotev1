<template>
  <a-layout style="min-height: 100vh;background-color: #F4F7FC;">


    <ClientSider/>

    <a-layout style="background-color: #F4F7FC">

      <a-layout-content
          :style="{  padding: '1% 2%', background: '#FAFBFF', minHeight: '280px', }"

      >
        <a-card class="hellocard">

          <a-row>
            <a-col span="12">
              <a-breadcrumb>
                <a-breadcrumb-item><a @click="$router.push('/Dashboard')">Home</a></a-breadcrumb-item>
                <a-breadcrumb-item><a @click="$router.push('/Escrow')">Escrow Management</a></a-breadcrumb-item>

              </a-breadcrumb>
              <span style="font-size: 1.7rem;font-family: sofia_prosemibold;margin-bottom: 0;color: black">
                Escrow management</span>
            </a-col>
            <a-col span="6">
              <div style="text-align: center">
                <img src="@/assets/images/esc.svg" style="width: 20%"/>
              </div>


            </a-col>
          </a-row>


        </a-card>


        <div style="min-height: 40vh ;position: relative">
          <a-row gutter="16">
            <a-col span="16">


              <div style="padding: 3%">
                <a-collapse expandIconPosition="right" v-for="project in AllProjects" v-bind:key="project"
                            style="border-radius: 0;background-color: white">
                  <a-collapse-panel style="margin-bottom: 1rem;border-radius: 0;background-color: white">
                    <div slot="header">
                      <a-row>
                        <a-col span="12">
                          <p style="font-family: sofia_probold;font-size: 1rem">{{ project.title }}</p>
                        </a-col>
                        <a-col span="12">
                          <a-space>
                            <a-tag color="cyan">
                              ${{ project.balance }} balance
                            </a-tag>
                            <a-tag color="blue">
                              ${{ project.disbursed_amount }} disbursed_amount
                            </a-tag>


                          </a-space>
                          <span>

                          </span>


                        </a-col>
                      </a-row>
                      <a-row style="font-family: sofia_prolight">
                        <p style="font-family: sofia_proregular">Milestones overview</p>
                        <a-tag color="#2db7f5">
                          {{ project.pending.length }} pending
                        </a-tag>
                        <a-tag color="#108ee9">
                          {{ project.milestones.length }} all milestones
                        </a-tag>
                        <a-tag color="#87d068">
                          {{ project.disbursed.length }} disbursed
                        </a-tag>

                      </a-row>
                    </div>
                    <a-tabs v-model="activeKey" @change="callback">
                      <a-tab-pane key="1">
                        <span slot="tab">
                          <a-icon type="hourglass" spin/>
                          Pending approval
                        </span>


                        <a-card style="width: 100%;margin-bottom: 1rem" v-for="task in project.pending"
                                v-bind:key="task">
                          <p slot="title">{{ task.name }}</p>
                          <a-button type="primary" slot="extra" @click="Approve(project,task)">
                            Approve
                          </a-button>
                          <div
                              style="background-color: white;border: 1px solid #e8e8e8;padding: 2%;margin-bottom: 1rem">
                            <p style="font-family: sofia_probold">Developer note for testing</p>
                            <p style="font-family: sofia_proregular">{{ task.developer_note }}</p>
                          </div>
                          <p>Amount to be disbursed:
                            <a-tag color="#2db7f5">
                              $ {{ task.amount }}
                            </a-tag>
                          </p>


                        </a-card>

                      </a-tab-pane>
                      <a-tab-pane key="2" tab="All milestones" force-render>
                        <a-table :columns="milestonecolumns" :data-source="project.milestones">
                          <span slot="stage" slot-scope=" record">
                            <a-tag color="#108ee9">{{ record }}</a-tag>
                          </span>
                          <span slot="deadline" slot-scope=" record">
                            <a-tag color="cyan">{{ record }}</a-tag>
                          </span>
                          <span slot="assignedto" slot-scope=" record">
                            <a-tag color="#108ee9">{{ record }}</a-tag>
                          </span>
                          <span slot="amount" slot-scope=" record">
                            <a-tag color="blue"> {{ record }} $</a-tag>
                          </span>


                        </a-table>
                      </a-tab-pane>
                      <a-tab-pane key="3">
                        <span slot="tab">
                          <a-icon type="bank"/>
                          Disbursed
                        </span>
                        <a-table :columns="disbursedcolumns" :data-source="project.disbursed">
                          <span slot="status" slot-scope=" record">
                            <a-tag color="#2db7f5" v-if="record === true">disbursed</a-tag>
                            <a-tag color="#2db7f5" v-else>pending</a-tag>
                          </span>
                          <span slot="amount" slot-scope=" record">
                            <a-tag color="blue"> {{ record }} $</a-tag>
                          </span>



                        </a-table>

                      </a-tab-pane>

                    </a-tabs>
                  </a-collapse-panel>

                </a-collapse>
              </div>
            </a-col>

            <a-col span="4">
              <p>Overview</p>
              <a-card>
                <a-statistic
                    title="Pending approval"
                    :value=Pending


                    class="demo-class"
                    :value-style="{ color: '#cf1322' }"
                >

                </a-statistic>
              </a-card>
              <a-card>
                <a-statistic
                    title="Disburssed amount"
                    :value=Disbursed

                    suffix="$"
                    :value-style="{ color: '#3f8600' }"
                    style="margin-right: 50px"
                >

                </a-statistic>
              </a-card>
              <a-card>
                <a-statistic
                    title="Remaining Balance"
                    :value=Allbalance

                    suffix="$"
                    class="demo-class"

                >

                </a-statistic>
              </a-card>

            </a-col>
          </a-row>


        </div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import ClientSider from '@/components/client/layout/ClientSider'
import moment from 'moment';
import Project from "@/services/Projects";

const milestonecolumns = [

  {
    title: 'Feature name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Stage',
    dataIndex: 'stage',
    key: 'stage',
    scopedSlots: {customRender: 'stage'},
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
    scopedSlots: {customRender: 'amount'},
  },


];
const disbursedcolumns = [

  {
    title: 'Feature name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Status',
    dataIndex: 'escrow_disbursed',
    key: 'escrow_disbursed',
    scopedSlots: {customRender: 'status'},
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
    scopedSlots: {customRender: 'amount'},
  },




];


export default {
  name: "Escrow",
  data() {
    return {

      Projectlist: [],
      Featurelist: [],
      milestonecolumns,
      disbursedcolumns,
      activeKey: '1',
      submitting: false,
      value: '',
      moment,
      client: 'dennis',
      currentfeature: {},
      currentproject: {}


    };
  },
  components: {
    ClientSider


  },
  mounted() {
    this.fetchProjects()
  },
  computed: {
    Allbalance() {
      let balance = 0
      this.AllProjects.forEach(function (project) {
        balance = Number(project.balance) + balance
      });
      return balance


    },
    Disbursed() {
      let balance = 0
      this.AllProjects.forEach(function (project) {
        project.disbursed.forEach(feature => {
          balance = Number(feature.amount) + balance
        })

      });
      return balance


    },
    Pending() {
      let pending = 0
      this.AllProjects.forEach(function (project) {
        pending = project.pending.length + pending
      });
      return pending


    },
    AllProjects() {
      let projects = []


      this.Projectlist.forEach(project => {
        let projectobj = {
          'title': '',
          'pending': [],
          'milestones': [],
          'disbursed': [],
          'balance': project.budget,
          'disbursed_amount': 0
        }
        let milestones = []
        let pending = []
        let disbursed = []
        this.Featurelist.forEach(feature => {

          if (feature.project === project.id) {
            if (feature.stage === 'quality') {
              pending.push(feature)

            } else if (feature.stage === 'done') {
              projectobj.disbursed_amount += Number(feature.amount)


              disbursed.push(feature)

            } else {
              milestones.push(feature)
            }

          }

        })
        projectobj.balance -= Number(projectobj.disbursed_amount)
        projectobj.title = project.title
        projectobj.pending = pending
        projectobj.milestones = milestones
        projectobj.disbursed = disbursed


        projects.push(projectobj)
      })
      return projects
    }

  },
  methods: {
    fetchProjects() {
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }
      Project.myprojects(this.$store.state.user.pk, auth)
          .then(resp => {

                this.Projectlist = resp.data
                this.fetchFeatures()


              }
          )
    },
    fetchFeatures() {
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }
      this.Projectlist.forEach(project => {
        Project.getfeatures(project.id, auth)
            .then(resp => {
              console.log(resp.data)
              resp.data.forEach(feature=>{
                this.Featurelist.push(feature)
              })


            })

      })

    },
    Approve(project, feature) {
      this.currentproject = project
      this.currentfeature = feature
      this.currentfeature.stage = 'done'
      this.currentproject.disbursed.push(this.currentfeature)
      let index = this.currentproject.pending.indexOf(this.currentfeature)
      if (index > -1) {
        this.currentproject.pending.splice(index, 1);
      }
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }
      Project.updatefeature(feature.id,{stage:'done'}, auth)
          .then()


    }
  },

}
</script>

<style scoped>
.hellocard {


  box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075) !important;

  background: white;
  border-radius: 0;
  margin-bottom: 1rem;


}
</style>
