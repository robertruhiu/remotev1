<template>
  <a-layout  style="min-height: 100vh;background-color: #F4F7FC;margin-left: 200px">


    <ClientSider/>

    <a-layout style="background-color: #F4F7FC">

      <a-layout-content
          :style="{  padding: '1% 2%', background: '#FAFBFF', minHeight: '280px', }"

      >
        <div>
          <a-card class="hellocard">

            <a-row>
              <a-col span="12">
                <a-breadcrumb>
                  <a-breadcrumb-item><a @click="$router.push('Dashboard')" >Home</a></a-breadcrumb-item>
                  <a-breadcrumb-item><a @click="$router.push('Myprojects')">My projects</a></a-breadcrumb-item>
                  <a-breadcrumb-item><a>Cyrus web application</a></a-breadcrumb-item>

                </a-breadcrumb>
                <span style="font-size: 1.7rem;font-family: sofia_prosemibold;color: black">
                  Cyrus web application</span>

              </a-col>
              <a-col span="6">
                <div style="text-align: center">
                  <img src="@/assets/images/planning.svg" style="width: 20%"/>
                </div>


              </a-col>
            </a-row>


          </a-card>


        </div>
        <div style="min-height: 40vh ;position: relative;">
          <div style="">
            <a-row style="color: black">
              <a-col span="8" class="">
                <a-tabs :default-active-key="1">
                  <a-tab-pane key="1" tab="All bids">
                    <div style=";height: 40rem;padding: 3% ">

                      <a-list item-layout="vertical" size="large" :pagination="pagination" :data-source="listData">

                        <a-list-item slot="renderItem" key="item.title" slot-scope="item" class="shadowsmall">


                          <a-list-item-meta :description="item.description">
                            <a slot="title" :href="item.href">{{ item.title }}</a>
                            <a-avatar slot="avatar" :src="item.avatar"/>

                          </a-list-item-meta>
                          <a-row>


                            <a-col span="8">
                              time:{{ item.time }}

                            </a-col>
                            <a-col span="8">
                              budget:{{ item.budget }}

                            </a-col>
                            <a-col span="8">
                              <a-button type="primary" size="small" @click="openbid(item)">view bid</a-button>

                            </a-col>

                          </a-row>

                        </a-list-item>
                      </a-list>


                    </div>

                  </a-tab-pane>
                  <a-tab-pane key="2" tab="Shortlisted" force-render>
                    <div style="height: 40rem;padding: 3% ">

                      <a-list item-layout="vertical" size="large" :pagination="pagination" :data-source="Shortlisted">

                        <a-list-item slot="renderItem" key="item.title" slot-scope="item" class="shadowsmall">


                          <a-list-item-meta :description="item.description">
                            <a slot="title" :href="item.href">{{ item.title }}</a>
                            <a-avatar slot="avatar" :src="item.avatar"/>
                          </a-list-item-meta>
                          <a-row>


                            <a-col span="8">
                              time:{{ item.time }}

                            </a-col>
                            <a-col span="8">
                              budget:{{ item.budget }}

                            </a-col>
                            <a-col span="8">
                              <a-button type="primary" size="small" @click="openbid(item)">view bid</a-button>

                            </a-col>

                          </a-row>

                        </a-list-item>
                      </a-list>


                    </div>
                  </a-tab-pane>

                </a-tabs>


              </a-col>
              <a-col span="16">
                <div style="padding: 0 1%" v-if="bid">

                  <div class="casecard">
                    <a-row>
                      <a-col span="4">
                        <img src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                             style="width: 100%"/>
                      </a-col>
                      <a-col span="20">
                        <a-descriptions title="Developer bid">

                          <a-descriptions-item label="Name">
                            Dennis Ruhiu {{bid.title}}
                          </a-descriptions-item>
                          <a-descriptions-item label="email">
                            test@codeln.com
                          </a-descriptions-item>
                          <a-descriptions-item label="Location">
                            Nairofi
                          </a-descriptions-item>
                          <a-descriptions-item label="My skills">
                            <a-tag color="blue">
                              reactjs
                            </a-tag>
                            <a-tag color="blue">
                              django
                            </a-tag>

                          </a-descriptions-item>


                        </a-descriptions>
                      </a-col>
                    </a-row>
                    <div id="main content" style="padding: 3%">
                      <a-tabs default-active-key="1">
                        <a-tab-pane key="1" tab="Proposal">
                          <p>Proposal</p>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute
                            irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                            anim id est laborum.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute
                            irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                            anim id est laborum.
                          </p>
                          <p>Tools am going to use</p>
                          <p>
                            <a-tag v-for="tag in bid.tools" color="blue"
                                   :key="tag">
                              {{tag}}
                            </a-tag>
                          </p>
                          <p>Project budget : {{bid.budget}}</p>
                          <p>Time to finish project : {{bid.time}}</p>

                        </a-tab-pane>
                        <a-tab-pane key="2" tab="Project potfolio" force-render>
                          Content of Tab Pane 2
                        </a-tab-pane>
                        <a-tab-pane key="3" tab="Work experience">
                          Content of Tab Pane 3
                        </a-tab-pane>
                      </a-tabs>
                      <div>
                        <a-button type="primary" v-if="bid.shortlisted" style="margin-right: 1%">
                          Accept bid
                        </a-button>
                        <a-button type="primary" v-if="bid.shortlisted === false" @click="shortlist" style="margin-right: 1%">
                          Shortlist
                        </a-button>
                        <a-button type="danger" v-if="bid.shortlisted" @click="removebid">
                          Remove from shortlist
                        </a-button>

                      </div>
                    </div>


                  </div>
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
const listData = [];
const Shortlisted =[];
for (let i = 0; i < 2; i++) {
  listData.push({

    title: `Name ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
        'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    time: '2 months',
    budget: '$4000',
    tools:['react','django'],
    shortlisted:false



  });
}
for (let i = 0; i < 3; i++) {
  Shortlisted.push({

    title: `Name ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
        'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    time: '2 months',
    budget: '$4000',
    tools:['react','django'],
    shortlisted:true


  });
}
import ClientSider from "@/components/client/layout/ClientSider";

export default {
  name: "Bids",
  data() {
    return {
      listData,
      Shortlisted,
      pagination: {
        onChange: page => {
          console.log(page);
        },
        pageSize: 3,
      },
      bid:{},



    };
  },
  components: {
    ClientSider


  },
  mounted() {
    this.bid = this.listData[0]


  },
  methods: {
    openbid(bid) {
      this.bid = bid
    },
    shortlist(){
      this.bid.shortlisted = true


      this.Shortlisted.push(this.bid)
      let index = this.listData.indexOf(this.bid)
      if (index > -1) {
        this.listData.splice(index, 1);
      }



    },
    removebid(){
      this.bid.shortlisted = false
      this.listData.push(this.bid)
      let index = this.Shortlisted.indexOf(this.bid)
      if (index > -1) {
        this.Shortlisted.splice(index, 1);
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

}

.shadowsmall {
  box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075) !important;

  background: white;
  border-radius: 0;
  padding: 2%;
  margin-bottom: 1rem;
}
</style>
