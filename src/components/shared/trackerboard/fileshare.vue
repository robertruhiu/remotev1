<template>
<div>
  <a-row>
    <a-col span="16">
      <div style="padding: 0 2%">

        <div v-if="allfiles.length>0">



          <a-list item-layout="vertical" size="large" :pagination="pagination" :data-source="allfiles">

            <a-list-item slot="renderItem" key="issue" slot-scope="file">
              <a-card style="width: 100%;margin-bottom: 1rem" >
                <p class="describe">{{file.description}}
                </p>
                <p style="font-family: sofia_probold">Files</p>
                <div v-for="url in file.files" v-bind:key="url" >
                <a :href="url" target="_blank">
                  {{url}}
                </a>

                </div>
                <div >
                  <a-button type="primary" @click="fileopen(file)">edit file</a-button>
                </div>



              </a-card>

            </a-list-item>
          </a-list>

        </div>
        <div v-else>
          <a-result status="404"  sub-title="No documents shared at the moment">

          </a-result>

        </div>
      </div>


    </a-col>
    <a-col span="8">


      <a-card style="width: 100%" v-if="create">


        <a-form layout="vertical">


          <a-form-item
              label="Describe purpose of the files below .eg(user flow diagrams)"

          >
            <a-textarea
                v-model="description"
                :auto-size="{ minRows: 3, maxRows: 5 }"
            />
            <p v-if="task_description_validate" style="color: red">
              please write something
            </p>

          </a-form-item>
          <a-form-item
              label="Upload files(you can upload multiple) "

          >
            <div v-if="uploading">
              <span>Uploading file <a-spin/></span>

            </div>
          <input style="margin-top: 1rem" v-else
                 @change="handleUpload" type="file">

          </a-form-item>
          <a-form-item>
            <p>Current uploads</p>
            <div v-for="url in filelist" v-bind:key="url" >
              <a target="_blank" :href="url">{{ url }}</a>
              <a-popconfirm
                  title="Are you sure delete this file?"
                  ok-text="Yes"
                  cancel-text="No"
                  @confirm="removefile(url)"
                  @cancel="cancel"
              >
                <a href="#"><a-icon type="delete" theme="twoTone" two-tone-color="#eb2f96"/></a>

              </a-popconfirm>


            </div>
          </a-form-item>




          <a-form-item>
            <a-space>
              <a-button type="primary" v-if="currentfile" @click="updateFile" :disabled="task_description_validate">
                Submit changes
              </a-button>
              <a-button type="primary" v-else @click="createFile" :disabled="task_description_validate">
                Submit
              </a-button>
              <a-button  @click="CreateOpen" >
                Cancel
              </a-button>

            </a-space>
          </a-form-item>
        </a-form>


      </a-card>

      <a-card style="width: 100%" v-else>
        <p style="font-family: sofia_proregular">Upload files or images you want to share</p>

        <a-button type="primary" @click="CreateOpen" >
          Get started
        </a-button>
      </a-card>


    </a-col>
  </a-row>

</div>
</template>

<script>
class File {
  constructor(id, description,files) {
    this.id = id;
    this.description = description;
    this.files = files;



  }
}
import axios from 'axios'
import Project from "@/services/Projects";
export default {
name: "fileshare",
  data() {
    return {
      file: '',
      filelist:[],
      pagination: {
        onChange: page => {
          console.log(page);
        },
        pageSize: 3,
      },
      description:'',
      uploading:false,
      project:null,
      task_description_validate:false,
      create:false,
      allfiles:[],
      currentfile:null



    };
  },
  mounted() {
  this.fetchProject()

  },
  watch:{
    description: function () {
      this.task_description_validate = this.description === '';
    },
  },
  methods:{
    fetchProject() {
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }
      Project.getprojectslug(this.$route.params.projectSlug, auth)
          .then(resp => {
                this.project = resp.data
                this.fetchFiles()

              }
          )
    },
    fetchFiles(){
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }
      this.allfiles =[]




      Project.fetchfiles(this.project.id, auth)
          .then(resp=>{
            if(resp.data.length>0){
              resp.data.forEach(fileEntry=>{
                let id = fileEntry.id
                let files = fileEntry.files.split(',')
                let description = fileEntry.description

                let onefile = new File(id,description,files)
                this.allfiles.push(onefile)
              })


            }


          })

    },
    createFile(){
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }
      if (this.description !== '') {
        let file ={
          'description':this.description,
          'files':this.filelist.join(),
          'project':this.project.id

        }
        Project.createfile(file, auth)
            .then(()=>{
              this.$message.info('files have been saved');
              this.filelist=[]
              this.description=''
              this.file =''
              this.create = false
              this.fetchFiles()
            })
      }else {
        this.task_description_validate = true
      }

    },
    fileopen(file){
      this.currentfile = file
      this.create = true
      this.description = this.currentfile.description
      this.filelist = this.currentfile.files

    },
    updateFile(){
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }
      if (this.description !== '') {
        let file ={
          'description':this.description,
          'files':this.filelist.join(),


        }
        Project.updatefile(this.currentfile.id,file, auth)
            .then(()=>{
              this.$message.info('changes successful');
              this.filelist=[]
              this.description=''
              this.file =''
              this.create = false
              this.currentfile = null
              this.fetchFiles()
            })
      }else {
        this.task_description_validate = true
      }
      this.currentfile =null
    },
    removefile(url){
      const index = this.filelist.indexOf(url);
      if (index > -1) {
        this.filelist.splice(index, 1);
      }
    },
    CreateOpen(){
      if(this.create === true){
        this.create = false
      }else if(this.create === false){
        this.create = true
      }
      this.description = ''
      this.filelist = []
      this.currentfile = null

    },
    handleChange(info) {
      const status = info.file.status;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        this.$message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        this.$message.error(`${info.file.name} file upload failed.`);
      }
    },
    async handleUpload(e) {
      this.uploading = true
      const cloudName = 'dwtvwjhn3';
      const unsignedUploadPreset = 'ml_default';



      const file = e.target.files[0];
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', unsignedUploadPreset);
      let CLOUDINARY_URL = `https://api.cloudinary.com/v1_1/${cloudName}/raw/upload`

      // Send to cloudianry
      const res = await axios.post(
          CLOUDINARY_URL,
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data'
            },

          }
      );
      this.$message.success('file uploaded you can upload more');
      this.uploading = false



      this.filelist.push(res.data.secure_url)






    },

  }
}
</script>

<style scoped>
.describe{

  border: 1px dashed #e9e9e9;
  border-radius: 6px;
  background-color: #fafafa;
  min-height: 60px;
  padding: 1%;

}
</style>
