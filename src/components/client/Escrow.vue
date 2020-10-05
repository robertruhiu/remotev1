<template>
  <a-layout  style="min-height: 100vh;background-color: #F4F7FC;margin-left: 200px">


    <ClientSider/>

    <a-layout style="background-color: #F4F7FC">

      <a-layout-content
          :style="{  padding: '1% 2%', background: '#FAFBFF', minHeight: '280px', }"

      >
        <a-card class="hellocard" >

          <a-row>
            <a-col span="12">
              <a-breadcrumb>
                <a-breadcrumb-item><a @click="$router.push('Dashboard')">Home</a></a-breadcrumb-item>
                <a-breadcrumb-item><a @click="$router.push('Escrow')">Escrow Management</a></a-breadcrumb-item>

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
                <a-collapse expandIconPosition="right" v-for="project in Projects" v-bind:key="project"
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
                      <a-tab-pane key="1" >
                        <span slot="tab">
                          <a-icon type="download"/>
                          Pending approval
                        </span>


                        <a-card style="width: 100%;margin-bottom: 1rem" v-for="task in project.pending"
                                v-bind:key="task">
                          <p slot="title">{{ task.name }}</p>
                          <a-button type="primary" slot="extra">
                            Approve
                          </a-button>
                          <div
                              style="background-color: white;border: 1px solid #e8e8e8;padding: 2%;margin-bottom: 1rem">
                            <p style="font-family: sofia_probold">Developer note for testing</p>
                            <p style="font-family: sofia_proregular">{{ task.note }}</p>
                          </div>


                          <a-space>
                            <span style="font-family: sofia_prolight">Raise an issue(this can be a comment/complaint or a bug found)</span>

                            <a-button type="danger" size="small" icon="bug" @click="$router.push('Bugs')">New issue</a-button>

                          </a-space>
                          <div>
                            <p style="font-family: sofia_proregular"><a-icon type="bug" theme="twoTone" two-tone-color="#eb2f96" /> 3 issues open </p>
                            <a-button type="primary" size="small" @click="$router.push('Bugs')">View issues</a-button>
                          </div>


                        </a-card>

                      </a-tab-pane>
                      <a-tab-pane key="2" tab="All milestones" force-render>
                        <a-table :columns="milestonecolumns" :data-source="project.milestones">
                          <span slot="deadline" slot-scope=" record">
                            <a-tag color="cyan">{{ record }}</a-tag>
                          </span>
                          <span slot="assignedto" slot-scope=" record">
                            <a-tag color="#108ee9">{{ record }}</a-tag>
                          </span>


                        </a-table>
                      </a-tab-pane>
                      <a-tab-pane key="3" >
                        <span slot="tab">
                          <a-icon type="bank"/>
                          Disbursed
                        </span>
                        <a-table :columns="disbursedcolumns" :data-source="project.disbursed">
                          <span slot="amount" slot-scope=" record">
                            <a-tag color="#2db7f5">{{ record }}</a-tag>
                          </span>
                          <span slot="status" slot-scope=" record">
                            <a-tag color="blue"> {{ record }}</a-tag>
                          </span>
                          <span slot="paid_to" slot-scope=" record">
                            <a-tag color="#108ee9">{{ record }}</a-tag>
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
const milestonecolumns = [

  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Deadline',
    dataIndex: 'deadline',
    key: 'deadline',
    scopedSlots: {customRender: 'deadline'},
  },
  {
    title: 'Assigned to',
    dataIndex: 'assignedto',
    key: 'assignedto',
    scopedSlots: {customRender: 'assignedto'},
  },


];
const disbursedcolumns = [

  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    scopedSlots: {customRender: 'status'},
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
    scopedSlots: {customRender: 'amount'},
  },
  {
    title: 'Paid to',
    dataIndex: 'paid_to',
    key: 'paid_to',
    scopedSlots: {customRender: 'paid_to'},
  },


];

const Projects = [
  {
    title: `Lishe app`,


    pending: [{
      name: "Login pages",
      id: 1,
      'deadline': '2021-08-11',
      'assignedto': 'dennis',
      'note': 'go to the login page and login using this details'
    },
      {
        name: "admin dashboard",
        id: 2,
        'deadline': '2021-08-11',
        'assignedto': 'dennis',
        'note': 'go to the link admin and the ui and actions for the admin are there'
      },
    ],
    milestones: [{name: "Database structure", id: 4, 'deadline': '2021-08-11', 'assignedto': 'robert',},
      {name: "UI/UX", id: 5, 'deadline': '2021-08-11', 'assignedto': 'robert'}],
    disbursed: [{
      name: "landing Page",
      id: 6,
      'deadline': '2021-08-11',
      'paid_to': 'jessica',
      'status': 'complete',
      'amount': '$500'
    }],
    balance: 4000,
    disbursed_amount: 500

  },
  {
    title: `React am`,


    pending: [{
      name: "Login pages",
      id: 1,
      'deadline': '2021-08-11',
      'assignedto': 'dennis',
      'note': 'go to the login page and login using this details'
    },
      {
        name: "admin dashboard",
        id: 2,
        'deadline': '2021-08-11',
        'assignedto': 'dennis',
        'note': 'go to the link admin and the ui and actions for the admin are there'
      },
    ],
    milestones: [{name: "Database structure", id: 4, 'deadline': '2021-08-11', 'assignedto': 'robert'},
      {name: "UI/UX", id: 5, 'deadline': '2021-08-11', 'assignedto': 'robert'}],
    disbursed: [{name: "landing Page", id: 6, 'deadline': '2021-08-11', 'paid_to': 'jessica', 'amount': '$500'}],
    balance: 6000,
    disbursed_amount: 2500

  },


]
const Issues = [
  {
    title: `Login feature`,
    description:'tried logging in ',
    comments:[],
    tag:'question',
    status:'solved',
    assigned_to:'',
    abitrator:false

  },
  {
    title: `The website is squeezed on my laptop`,
    description:'When i open the site there seems to be weird look',
    comments:[],
    tag:'bug',
    status:'solved',
    assigned_to:'',
    abitrator:false

  },


]
export default {
  name: "Escrow",
  data() {
    return {
      Projects,
      milestonecolumns,
      disbursedcolumns,
      activeKey: '1',
      Issues,
      submitting: false,
      value: '',
      moment,
      client:'dennis'


    };
  },
  components: {
    ClientSider


  },
  computed: {
    Allbalance() {
      let balance = 0
      Projects.forEach(function (project) {
        balance = project.balance + balance
      });
      return balance


    },
    Disbursed() {
      let balance = 0
      Projects.forEach(function (project) {
        balance = project.disbursed_amount + balance
      });
      return balance


    },
    Pending() {
      let pending = 0
      Projects.forEach(function (project) {
        pending = project.pending.length + pending
      });
      return pending


    }

  },
  methods:{


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
