<template>
  <a-layout style="min-height: 100vh;background-color: #F4F7FC">


    <DevSider/>

    <a-layout style="background-color: #F4F7FC">

      <a-layout-content
          :style="{  padding: '1% 2%', background: '#FAFBFF', minHeight: '280px', }"

      >
        <a-card class="hellocard">

          <a-row>
            <a-col span="12">
              <a-breadcrumb>
                <a-breadcrumb-item><a @click="$router.push('/Developer')">Home</a></a-breadcrumb-item>
                <a-breadcrumb-item><a >Manage and Create Teams</a></a-breadcrumb-item>


              </a-breadcrumb>
              <span style="font-size: 1.7rem;font-family: sofia_prosemibold;margin-bottom: 0;color: black">
                Manage and Create Teams</span>
            </a-col>
            <a-col span="6">
              <div style="text-align: center">
                <img src="@/assets/images/planning.svg" style="width: 20%"/>
              </div>


            </a-col>
          </a-row>


        </a-card>
        <div style="min-height: 40vh ;position: relative">

          <div style="padding: 0 3%">

            <div v-if="myteams.length>0">
              <a-row>
                <a-col span="12">

                  <div v-for="team in myteams" v-bind:key="team" style="margin-bottom: 1rem">
                    <a-card :title="team.name" style="width: 30rem">
                      <a slot="extra" @click="openteam(team)">view team</a>
                      <div v-if="team.project">
                        <div v-for="project in Inprogress" v-bind:key="project">
                          <p v-if="team.project === project.id">
                            Project working on : {{ project.title }}

                          </p>


                        </div>

                      </div>

                      <a-space>
                        <span> <a-tag color="#2db7f5">
                        {{ team.members }}
                      </a-tag>: Members</span>
                        <span> <a-tag color="cyan">
                        {{ team.pending }}
                      </a-tag>: Pending Members</span>
                      </a-space>




                    </a-card>

                  </div>


                </a-col>
                <a-col span="6">
                  <div v-if="currentteam">
                    <a-card style="width:40rem">

                      <a-form layout="vertical">

                        <a-form-item
                            label="Team name"

                        >
                          <a-input v-model="currentteam.name"/>
                        </a-form-item>
                        <a-form-item v-if="currentteam.project">
                          <p>Do you want to change attached project</p>
                          <a-select @change="handleChange" :default-value="currentteam.project">
                            <a-select-option v-for="project in Inprogress" v-bind:key="project" :value="project.id">
                              {{ project.title }}
                            </a-select-option>


                          </a-select>
                        </a-form-item>
                        <a-form-item v-else>
                          <p>Do you want to attach team to one of your projects</p>
                          <a-select style="width: 120px" @change="handleChange">
                            <a-select-option v-for="project in Inprogress" v-bind:key="project" :value="project.id">
                              {{ project.title }}
                            </a-select-option>


                          </a-select>
                        </a-form-item>
                        <div style="margin-bottom: 1rem">
                          <p>Team members</p>
                          <template v-for="(tag, index) in members">

                            <a-tag color="blue" :key="tag" :closable="index === 0" @close="() => handleClose(tag)">
                              {{ tag.user.first_name }}
                            </a-tag>
                          </template>
                          <div>
                            <p>Invite someone to join</p>


                            <a-input-search placeholder="input user email you want to invite" v-model="email"
                                            @search="lookUpuser"/>
                            <a-spin v-if="loading"/>
                            <p style="color: red" v-if="error"> no user found</p>
                            <p v-if="pendingmembers.length>0">Pending invites</p>
                            <template v-for="(tag, index) in pendingmembers">

                              <a-tag color="blue" :key="tag" :closable="index === 0" @close="() => handleClose1(tag)">
                                {{ tag.first_name }}
                              </a-tag>
                            </template>
                          </div>
                        </div>


                        <a-form-item>
                          <a-space>
                            <a-button type="primary" @click="Submit">
                              Submit
                            </a-button>
                            <a-button @click="Close">
                              Cancel
                            </a-button>
                          </a-space>
                        </a-form-item>
                      </a-form>
                    </a-card>

                  </div>
                  <div v-else>
                    <a-result title="Create a new team" v-if="!create">
                      <template #icon>
                        <a-icon type="rocket" theme="twoTone"/>
                      </template>
                      <template #extra>
                        <a-button type="primary" @click="NewTeam">
                          create
                        </a-button>
                      </template>
                    </a-result>

                    <div v-if="create">
                      <a-card title="New team" style="width:20rem">

                        <a-form layout="vertical">

                          <a-form-item
                              label="Team name"

                          >
                            <a-input v-model="teamname"/>
                          </a-form-item>
                          <a-form-item>
                            <p>Do you want to attach team to one of your projects</p>
                            <a-select style="width: 120px" @change="handleChange">
                              <a-select-option v-for="project in Inprogress" v-bind:key="project" :value="project.id">
                                {{ project.title }}
                              </a-select-option>


                            </a-select>
                          </a-form-item>


                          <a-form-item>
                            <a-space>
                              <a-button type="primary" @click="CreateTeam">
                                Submit
                              </a-button>
                              <a-button @click="Close">
                                Cancel
                              </a-button>
                            </a-space>
                          </a-form-item>
                        </a-form>
                      </a-card>

                    </div>
                  </div>


                </a-col>
              </a-row>


            </div>
            <div v-else>
              <a-result status="404" title="" v-if="!create"
                        sub-title="Sorry, you dont have any teams a the moment.You can then assign a team to a project">
                <template #extra>
                  <a-button type="primary" @click="NewTeam">
                    Create team
                  </a-button>
                </template>
              </a-result>
              <div v-if="create">
                <a-card title="New team" style="width:40rem">

                  <a-form layout="vertical">

                    <a-form-item
                        label="Team name"

                    >
                      <a-input v-model="teamname"/>
                    </a-form-item>
                    <a-form-item>
                      <p>Do you want to attach team to one of your projects</p>
                      <a-select style="width: 120px" @change="handleChange">
                        <a-select-option v-for="project in Inprogress" v-bind:key="project" :value="project.id">
                          {{ project.title }}
                        </a-select-option>


                      </a-select>
                    </a-form-item>


                    <a-form-item>
                      <a-space>
                        <a-button type="primary" @click="CreateTeam">
                          Submit
                        </a-button>
                        <a-button @click="Close">
                          Cancel
                        </a-button>
                      </a-space>
                    </a-form-item>
                  </a-form>
                </a-card>

              </div>


            </div>



          </div>
        </div>


      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import DevSider from '@/components/developer/layout/DevSider'
import Projects from "@/services/Projects";
import User from '@/services/UsersService'
import VeeValidate from 'vee-validate';

import Vue from 'vue'


Vue.use(VeeValidate);

class TeamObj {
  constructor(id, name, members, project, pending) {
    this.id = id;
    this.name = name;
    this.members = members;
    this.project = project;
    this.pending = pending;


  }
}

export default {
  name: "Teams",

  data() {
    return {

      teams: [],
      myprojects: [],
      create: false,
      teamproject: null,
      teamname: '',
      myteams: [],
      currentteam: null,
      members: [],
      email: '',
      error: false,
      loading: false,
      pendingmembers: [],
      member_ids: [],
      pending_ids: []


    }
  },
  components: {
    DevSider


  },
  computed: {
    Inprogress() {
      let projects = []
      this.myprojects.forEach(project => {
        if (project.stage === 'developement') {
          projects.push(project)
        }
      })
      return projects
    },
  },
  mounted() {
    this.fetchmyteams()
    this.FetchProject()
  },
  methods: {
    fetchmyteams() {
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }
      this.teams =[]
      this.currentteam =null
      this.myteams =[]
      Projects.fetchteams(this.$store.state.user.pk, auth)
          .then(resp => {

            this.teams = resp.data
            this.teams.forEach(team => {
              let id = team.id
              let name = team.name
              let members = 0
              let project = team.project
              if (team.members.length > 0) {
                let teamaaray = team.members.split(',')
                members = teamaaray.length
              }
              let pending = 0
              if (team.pending.length > 0) {
                let teamaaray = team.pending.split(',')
                pending = teamaaray.length
              }
              let oneteam = new TeamObj(id, name, members, project, pending )
              this.myteams.push(oneteam)
            })
          })

    },
    FetchProject() {
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }
      Projects.developerprojects(this.$store.state.user.pk, auth)
          .then(resp => {
            this.myprojects = resp.data
          })

    },
    NewTeam() {
      this.create = true
    },
    CreateTeam() {
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }
      if (this.teamproject) {
        let team = {
          'lead': this.$store.state.user.pk,
          'project': this.teamproject,
          'name': this.teamname
        }
        Projects.createteam(team, auth)
            .then(() => {
              this.$message.success(this.teamname + ' created');
              this.create = false
              this.fetchmyteams()
            })
      } else {
        let team = {
          'lead': this.$store.state.user.pk,
          'name': this.teamname
        }
        Projects.createteam(team, auth)
            .then(() => {
              this.$message.success(this.teamname + ' created');
              this.create = false
              this.fetchmyteams()
            })
      }


    },
    Close() {
      this.create = false
      this.currentteam = null
    },
    handleChange(value) {
      this.teamproject = value


    },
    handleClose(removedTag) {
      this.members = this.members.filter(tag => tag !== removedTag);
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }
      this.members.forEach(member => {
        this.member_ids.push(member.id)
      })
      Projects.updateteam(this.currentteam.id, {members: this.member_ids.join()}, auth)
          .then(() => {
            this.$message.success(' changes submitted');
            this.fetchmyteams()

          })
    },
    handleClose1(removedTag) {
      this.pendingmembers = this.pendingmembers.filter(tag => tag !== removedTag);
      this.pendingmembers.forEach(member => {
        this.pending_ids.push(member.pk)
      })
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }
      Projects.updateteam(this.currentteam.id, {pending: this.pending_ids.join()}, auth)
          .then(() => {
            this.$message.success(' changes submitted');
            this.fetchmyteams()

          })
    },
    Submit() {
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }
      Projects.updateteam(this.currentteam.id, {name: this.currentteam.name, project: this.currentteam.project}, auth)
          .then(() => {
            this.$message.success(' changes submitted');
            this.fetchmyteams()

          })
    },
    openteam(item) {

      this.members = []
      this.pendingmembers = []
      this.teams.forEach(team => {
        if (team.id === item.id) {
          this.currentteam = team

        }
      })
      this.fetchmembers()
      this.fetchpending()





    },
    fetchmembers(){
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }
      let members = []
      members = this.currentteam.members.split(',')
      if (this.currentteam.members.length > 0) {
        members = this.currentteam.members.split(',')
        members.forEach(onemember => {
          User.currentuser(onemember, auth)
              .then(resp => {
                this.members.push(resp.data)



              })
        })
      }
    },
    fetchpending(){
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }
      let pendingmembers =[]
      pendingmembers = this.currentteam.pending.split(',')
      pendingmembers.forEach(onemember => {
        User.retrieveuser(onemember, auth)
            .then(resp => {
              this.pendingmembers.push(resp.data)

            })
      })

    },
    lookUpuser() {
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }
      this.loading = true
      let emails = []
      this.pendingmembers.forEach(member => {
        emails.push(member.email)
      })
      if (emails.includes(this.email)) {
        this.$message.info(' already invited');
        this.loading = false
      } else {
        Projects.retrieveuser(this.email, auth)
            .then(resp => {


              this.pendingmembers.push(resp.data)
              this.pendingmembers.forEach(member => {
                this.pending_ids.push(member.id)
              })
              const auth = {
                headers: {Authorization: 'JWT ' + this.$store.state.token}

              }
              Projects.updateteam(this.currentteam.id, {pending: this.pending_ids.join()}, auth)
                  .then(() => {
                    this.$message.success(' changes submitted');
                    this.fetchmyteams()

                  })

              this.loading = false
              this.email = ''

            })
            .catch(() => {
              this.loading = false
              this.error = true
              this.email = ''
            })
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
