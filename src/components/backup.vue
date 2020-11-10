<template>
<div>hi</div>
</template>

<script>
import Projects from "@/services/Projects";
import moment from "moment";

class Project {
  constructor(id, title, features) {
    this.key = id;
    this.title = title;
    this.features = features;



  }
}
class Features {
  constructor(id, name, issues) {
    this.key = id;
    this.title = name;
    this.features = issues;



  }
}

export default {
name: "backup",
  data() {
    return {

      Projectlist: [],
      Feautures: [],
      Issueslist: [],
      issueopen: false,
      currentissue: {},
      comments: [],
      submitting: false,
      value: '',
      moment,
      currentfeature: {},
      newissue: false,
      issuetitle: '',
      issuetag: '',
      issuedescription: '',
      projects: [],
      featurelist :[]


    };
  },
  computed: {
    Projectslists() {
      let projects = []


      this.Projectlist.forEach(project => {
        let features =[]
        this.Feautures.forEach(feature => {
          let issues =[]
          this.Issueslist.forEach(issue=>{
            if(issue.feature === feature.id){
              let id = feature.id
              let name = feature.name
              issues.push(issue)
              let onefeature = new Features(id, name, issues)


              features.push(onefeature)
              this.featurelist.push(issue)

            }
          })

        })
        let id = project.id
        let title = project.title
        let oneproject = new Project(id, title, features)






        projects.push(oneproject)
      })
      return projects


    },
  },
  methods: {
    fetchProjects() {
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }


      Projects.myprojects(this.$store.state.user.pk, auth)
          .then(resp => {
            this.Projectlist = resp.data
            this.fetchfeatures()

          })

    },
    fetchfeatures() {
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }
      this.Projectlist.forEach(project => {
        Projects.getfeatures(project.id, auth)
            .then(resp => {
              resp.data.forEach(feature => {
                this.Feautures.push(feature)

              })
              this.fetchIssues()


            })

      })


    },
    fetchIssues() {
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }

      this.Feautures.forEach(feature => {

        Projects.fetchfeatureissues(feature.id, auth)
            .then(resp => {
              resp.data.forEach(issue => {
                this.Issueslist.push(issue)


              })


            })
      })


    },


    openIssue(issue) {

      this.currentissue = issue
      this.issueopen = true


    },
    newIssue(feature) {
      this.currentfeature = feature
      this.newissue = true
    },
    SubmitIssue() {
      let issueobj = {
        feature_id: this.currentfeature.id,
        title: this.issuetitle,
        description: this.issuedescription,
        comments: [],
        tag: this.issuetag,
        status: 'solved',
        assigned_to: '',
        abitrator: false,
      }
      this.currentfeature.issues.push(issueobj)
      this.newissue = false

    },
    Close() {
      this.issueopen = false
      this.newissue = false

    },
    CloseOpen() {
      this.currentissue.status = this.currentissue.status !== true;
    },
    Abitration() {
      this.currentissue.abitrator = this.currentissue.abitrator !== true;

    },
    handleSubmit() {
      if (!this.value) {
        return;
      }

      this.submitting = true;

      setTimeout(() => {
        this.submitting = false;
        this.currentissue.comments = [
          {
            author: 'Han Solo',
            content: this.value,
            datetime: moment().fromNow(),
          },
          ...this.currentissue.comments,
        ];
        this.value = '';
      }, 1000);
    },
    handleChange(e) {
      this.value = e.target.value;
    },
  }
}
</script>

<style scoped>

</style>
