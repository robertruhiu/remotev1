<template>
<div>
  <a-row style="width: 100%;margin: 0 auto">
    <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
           :md="{span: 24, offset: 0 }"
           :lg="{span: 18, offset: 2 }" :xl="{span: 18,offset: 2 }" class="stepcard">


      <div style="padding: 2%" id="contract">
        <div style="margin-bottom: 2rem">
          <h2 style="font-weight: bold;font-family: sofia_probold;text-align: center">SOFTWARE
            DEVELOPMENT CONTRACT</h2>
        </div>


        <div style="margin-bottom: 2rem">
          <h3 style="font-family: sofia_probold">Parties involved</h3>
          <p>This Agreement is entered into as of <strong>{{ project.sign_date  }}</strong> by and between
            <strong>{{ client.user.first_name |capitalize }} {{
                client.user.last_name |capitalize
              }}(client)</strong> and <strong>
              {{ developer.user.first_name |capitalize }} {{
                developer.user.last_name |capitalize
              }}(developer)
            </strong>
            both of whom agree to be bound by this Agreement.</p>
        </div>


        <div style="margin-bottom: 1rem">
          <h3 style="font-family: sofia_probold">1 Project details</h3>
          <p style="font-family: sofia_probold">1.1 Title: {{ project.title | capitalize }}</p>
          <p style="font-family: sofia_probold">1.2 Description</p>
          <div style="font-family: sofia_proregular">
            <markdown>{{ project.description }}</markdown>

          </div>
          <p style="font-family: sofia_probold">1.3 Budget</p>
          <p>An amount of has been alotted for this project <strong>$ {{ project.budget }}</strong></p>
          <p style="font-family: sofia_probold">1.4 Technologies to build project</p>
          <a-tag v-for="tag in Projecttools"
                 :key="tag">
            {{ tag }}
          </a-tag>
        </div>
        <div style="margin-bottom: 1rem">
          <h3 style="font-family: sofia_probold">2 Features</h3>
          <p>The features below have been vetted at this date to fulfil the needs of what the client
            wants.
            Each has its own due date and escrow amount to be disbussed upon completion</p>
          <a-row>
            <a-col span="12">
              <p style="font-weight: bold">Features</p>
            </a-col>
            <a-col span="6">
              <p style="font-weight: bold">Escrow alloted</p>

            </a-col>
            <a-col span="6">
              <p style="font-weight: bold">Due date</p>

            </a-col>
          </a-row>
          <div v-for="feature in features" v-bind:key="feature.id">
            <a-row style="border-bottom: 1px solid rgb(232, 232, 232);margin-bottom: 1%">
              <a-col span="12">
                <p style="font-family: sofia_probold">{{ feature.title }}</p>


              </a-col>
              <a-col span="6">
                                <span v-if="feature.amount">
                                  $ {{ feature.amount }}
                                </span>

              </a-col>

              <a-col span="6">
                            <span v-if="feature.due_date">
                              {{ feature.due_date | momentformat }}
                            </span>
                <span v-else style="color: red">
                                  not assigned
                                </span>

              </a-col>
            </a-row>

          </div>
        </div>

        <div style="margin-bottom: 1rem">
          <h3 style="font-family: sofia_probold">3 Modification of features</h3>
          <p style="font-family: sofia_probold">3.1 Feature/Milestone editing</p>
          <p>Both parties upon agreement can edit on the project management kanban add new features
            ie its title,story,due date and amount</p>
          <p style="font-family: sofia_probold">3.2 Escrow amounts disparity</p>
          <p>If the client escrow amount is not within the new feature added ie amount greater than
            the amount deposited.Codeln will prompt the client to deposit the
            overhead amount
          </p>
        </div>

        <div style="margin-bottom: 1rem">
          <h3 style="font-family: sofia_probold">4 Codeln role</h3>
          <p style="font-family: sofia_probold">4.1 Escrow Management</p>
          <p>Codeln will hereby be the recipient of the client budget as the escrow holder.</p>
          <p style="font-family: sofia_promedium">4.1.1 Disemination of funds</p>
          <p>Escrow will only be sent to developer upon completion of a feature.where all issues
            have been resolved and client is satisfied</p>
          <p style="font-family: sofia_promedium">4.1.2 Method of Payment.</p>
          <p>
            The amount of money equal to the Deficiency as stated on the Employee’s Job
            Offer Letter shall be paid to the Payee on or before the date stated as a
            resumption date on the Employee’s Job Offer Letter.
          </p>
          <p style="font-family: sofia_probold">4.2 Conflict resolution</p>
          Codeln will act as an abitrator of issues that prove difficult to solve between the client
          and developer.Ie issues raised and escrow dissemination
          <p>I agree to the Codeln role as a conflict resoultion and a escrow manager of the
            project</p>
        </div>

        <div style="margin-bottom: 1rem">
          <h3 style="font-family: sofia_probold">5 Contract agreement </h3>
          <p>We both have read and agree with the contract above.Thus its legally binding</p>


          <a-row style="padding: 3%">
            <a-col span="12">
              <p>
                <strong>{{ client.user.first_name |capitalize }} {{
                    client.user.last_name |capitalize
                  }}(client)</strong>
              </p>

              <img :src="clientsign.signature" v-if="clientsign" style="width: 30%"/>
              <p v-else>.........................</p>

            </a-col>
            <a-col span="12">
              <p>
                <strong>
                  {{ developer.user.first_name |capitalize }} {{
                    developer.user.last_name |capitalize
                  }}(developer)
                </strong>
              </p>

              <img :src="devsign.signature" v-if="devsign" style="width: 30%"/>
              <p v-else>.........................</p>

            </a-col>
          </a-row>
          <a-row style="padding: 3%">
            <a-col span="12">
              <p>Date:{{ project.sign_date }} </p>

            </a-col>
            <a-col span="12">
              <p>Date:{{ project.sign_date }} </p>

            </a-col>
          </a-row>


        </div>
      </div>


    </a-col>

  </a-row>
</div>
</template>

<script>
import Project from "@/services/Projects";
import moment from "moment";
import User from "@/services/UsersService";

export default {
name: "contract",
  data() {
    return {


      inputVisible: false,
      inputValue: '',
      stories: [],
      features: [],
      project: null,
      step4errors: [],
      loading: false,
      featureslist: [],
      storylist: [],
      feature_id: null,
      story_id: null,
      currentfeature: null,
      client: {},
      developer: {},
      date: null,
      devsign: '',
      clientsign: '',
      signaturedata: ''


    };
  },
  mounted() {


    this.currentProject()



  },
  computed: {





    Projecttools() {
      let tools = []
      tools = this.project.tools.split(',')


      return tools
    },


    Date(){
      return new Date()
    }

  },
  filters: {
    momentformat: function (date) {
      return moment(date).format('MMMM Do YYYY');
    },
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  },
  methods: {
    moment,
    disabledDate(current) {
      // Can not select days before today and today
      return current && current < moment().endOf('day');
    },


    slugifytitle(value) {
      return value
          .toString()
          .trim()
          .toLowerCase()
          .replace(/\s+/g, "-")
          .replace(/[^\w-]+/g, "")
          .replace(/--+/g, "-")
          .replace(/^-+/, "")
          .replace(/-+$/, "");


    },

    currentProject() {
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }
      this.features = []
      Project.getprojectslug(this.$route.params.projectSlug, auth)
          .then(
              resp => {
                this.project = resp.data

                if(this.project.sign_date === null){
                  this.project.sign_date = this.Date;

                }

                this.getfeatures()
                this.fetchParties()


              }
          )

    },
    getfeatures() {
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }
      Project.getfeatures(this.project.id, auth)
          .then(resp => {

                // eslint-disable-next-line no-unused-vars


                this.featureslist = resp.data
                this.featureslist.forEach(feature => {
                  this.getStories(feature)


                })


              }
          )

    },
    getStories(feature) {
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }
      Project.getstories(feature.id, auth).then(
          resp => {
            this.storylist = resp.data


            this.features.push({
              'id': feature.id,
              'title': feature.name,
              'storylist': this.storylist,
              'amount': feature.amount,
              'due_date': feature.due_date
            })


          }
      )
    },
    fetchParties() {
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }
      User.currentuser(this.project.client, auth).then(
          resp => {
            this.client = resp.data
            Project.fetchsignature(this.client.id, auth).then(
                resp => {
                  this.clientsign = resp.data


                }
            ).catch(error => {
              if (error) {
                this.clientsign = ''


                console.log(error);
              }
            });
            User.currentuser(this.project.assigned_to, auth).then(
                resp => {
                  this.developer = resp.data
                  Project.fetchsignature(this.developer.id, auth).then(
                      resp => {
                        this.devsign = resp.data


                      }
                  ).catch(() => {
                    this.devsign = ''

                  })

                }
            )

          }
      )
    },


    printDiv(divName) {
      var printContents = document.getElementById(divName).innerHTML;
      var originalContents = document.body.innerHTML;

      document.body.innerHTML = printContents;

      window.print();

      document.body.innerHTML = originalContents;


    },




  }
}
</script>

<style scoped>

</style>
