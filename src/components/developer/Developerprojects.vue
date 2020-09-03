<template>
  <a-layout style="min-height: 100vh;background-color: #F4F7FC">


    <DevSider/>

    <a-layout style="background-color: #F4F7FC">

      <a-layout-content
          :style="{  padding: '1% 2%', background: '#FAFBFF', minHeight: '280px', }"

      >
        <div>
          <a-card class="hellocard">

            <a-row>
              <a-col span="12">
                <a-breadcrumb>
                  <a-breadcrumb-item><a @click="$router.push('Developer')" >Home</a></a-breadcrumb-item>
                  <a-breadcrumb-item><a @click="$router.push('DeveloperProjects')" >My projects</a></a-breadcrumb-item>

                </a-breadcrumb>
                <span style="font-size: 1.7rem;font-family: sofia_prosemibold;margin-bottom: 0;color: black">
                My Projects</span>
              </a-col>
              <a-col span="6">
                <div style="text-align: center">
                  <img src="@/assets/images/planning.svg" style="width: 20%"/>
                </div>


              </a-col>
            </a-row>


          </a-card>


        </div>

        <div style="min-height: 40vh ;position: relative">

          <div style="padding: 0 3%">

            <a-tabs default-active-key="1" @change="callback">
              <a-tab-pane key="1" tab="In developement">
                <a-card style="width: 60%">
                  <span slot="title" style="font-size: 1.2rem;font-family: sofia_prosemibold;color: black">Cyrus web application</span>

                  <p>due time: 12/8/2020</p>

                  <div slot="actions">
                    <a-button type="primary" @click="$router.push('ProjectBoard')">
                      View project
                    </a-button>
                  </div>
                </a-card>

              </a-tab-pane>
              <a-tab-pane key="2" tab="Contract discussions" force-render>
                <a-card style="width: 60%">
                  <span slot="title" style="font-size: 1.2rem;font-family: sofia_prosemibold;color: black">Cyrus web application</span>

                  <p>due time: 12/8/2020</p>

                  <div slot="actions">
                    <a-button type="primary" @click="$router.push('DevContract')">
                      View project
                    </a-button>
                  </div>
                </a-card>
              </a-tab-pane>
              <a-tab-pane key="3" tab="Bids placed">
                <a-row>
                  <a-col span="12">


                    <a-list item-layout="vertical" size="middle" :pagination="pagination" :data-source="listData">

                      <a-list-item slot="renderItem" key="item.title" slot-scope="item">
                        <a-card>
                          <span slot="title"
                                style="font-size: 1.2rem;font-family: sofia_prosemibold;color: black">{{ item.title }}</span>
                          <p>{{ item.proposal }}</p>
                          {{item.tools}}


                          <div slot="actions">
                            <a-button type="primary" @click="viewbid(item)">
                              View bid
                            </a-button>

                          </div>
                        </a-card>

                      </a-list-item>
                    </a-list>
                  </a-col>
                  <a-col span="12">
                    <div style="padding: 0 1%">
                      <div class="casecard">


                        <div id="main content" style="padding: 1%">
                          <div v-if="bid">

                            <div>
                            <span><p><strong>Project title:</strong>{{ bid.title }}</p>


                            </span>


                            </div>


                            <p>Project Proposal(why i should get project)1200 character limit</p>
                            <a-textarea v-model="bid.proposal" maxlength="1200"


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
                            <a-input v-model="bid.time"/>
                            <p>Budget
                              <span v-if="bidflag" style="color: red">(bids are capped you can only go 10% lower than quoted by client )</span>
                              <span v-else>(bids are capped you can only go 10% lower than quoted by client )</span>
                            </p>
                            <a-input-number style="width: 100%"
                                            @change="budgetflag"
                                            :default-value=bid.budget
                                            :formatter="value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
                                            :parser="value => value.replace(/\$\s?|(,*)/g, '')"

                            />
                            <div style="margin-top: 1rem">
                              <a-space>
                                <a-button key="submit" type="primary" @click="editbid(bid)">
                                  Submit edit
                                </a-button>
                                <a-button type="danger" @click="withdrawbid(bid)">
                                  Withdraw bid
                                </a-button>
                              </a-space>


                            </div>

                          </div>


                        </div>


                      </div>
                    </div>


                  </a-col>
                </a-row>


              </a-tab-pane>
            </a-tabs>


          </div>
        </div>

      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import DevSider from '@/components/developer/layout/DevSider'
import moment from 'moment';

const listData = [];
for (let i = 0; i < 15; i++) {
  listData.push({

    title: `Project ${i}`,
    proposal:
        'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    budget: 2000,
    time: '2 months',
    tools: ['react', 'django']
  });
}

export default {
  name: "Developerprojects",
  data() {
    return {
      listData,
      projects: [1],
      bid: {},
      tags: [],
      inputVisible: false,
      inputValue: '',
      pagination: {
        onChange: page => {
          console.log(page);
        },
        pageSize: 3,
      },
      bidflag: false
    }
  },
  components: {
    DevSider


  },
  mounted() {
    this.bid = this.listData[0]
    this.tags = this.bid.tools

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
    viewbid(item) {
      if (item !== this.bid) {
        this.bid = item
        this.tags = this.bid.tools


      }


    },
    editbid(bid) {

      let index = this.listData.indexOf(bid)
      this.bid.tools = this.tags
      this.listData[index] = this.bid

    },
    withdrawbid(bid) {
      let index = this.listData.indexOf(bid)
      if (index > -1) {
        this.listData.splice(index, 1);
      }
      this.bid=this.listData[0]
      this.tags = this.bid.tools



    },
    budgetflag(value) {
      let bidbase = this.bid.budget
      let lowest = (90 / 100) * bidbase
      if (value < lowest) {
        this.bidflag = true


      } else {
        this.bidflag = false
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

.projectcard {

  box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075) !important;

  background: white;
  border-radius: 0;
  margin-bottom: 1rem;

}

.recentcard {
  height: 30rem;
  box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075) !important;
  background: white;
  border-radius: 0;
  margin-bottom: 1rem;

}

.casecard {


  box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075) !important;

  background: white;
  border-radius: 0;
  padding: 2%;
  border: 1px solid #e8e8e8;

}
</style>
