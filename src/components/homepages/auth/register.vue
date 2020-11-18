<template>
  <a-layout>

    <Pageheader/>
    <a-layout-content :style="{ padding: '0 0px', }">

      <div :style="{ background: '#fff', minHeight: '81vh' }">
        <a-row>
          <a-col span="12">
            <a-row class="actioncards">
              <h2 style="text-align: center">Pick your profile</h2>


              <a-col span="12">
                <div style="text-align: center">
                  <img src="@/assets/images/interview.svg" style="width: 30%"/>
                  <p>Client</p>
                  <p>I want to post a project and get it worked on</p>
                  <a-checkbox v-model="client" @change="Choice(1)">
                    pick
                  </a-checkbox>


                </div>


              </a-col>

              <a-col span="12">
                <div style="text-align: center">
                  <img src="@/assets/images/programmer.svg" style="width: 30%"/>

                  <p>Developer</p>
                  <p>I want to bid and work on projects</p>
                  <a-checkbox v-model="developer" @change="Choice(2)">
                    pick
                  </a-checkbox>

                </div>

              </a-col>
            </a-row>

          </a-col>
          <a-col span="12">
            <div v-if=" Profile !== ''">
              <div v-if="$store.state.usertype === 'recruiter'" style="padding: 3%;margin-top: 4rem">

                <a-card title="Register" :style="{width:'21rem'}">

                  <p class="alert" v-if="error">{{ error }}</p>
                  <a-form
                      id="components-form-demo-normal-login"
                      :form="registerform"
                      class="login-form"

                  >
                    <a-form-item>
                      <a-input v-model="firstname"
                               v-validate="'required'"
                               name="firstname"
                               placeholder="firstname"
                      >

                      </a-input>
                      <div v-if="errors.has('firstname')" style="color: #f5222d;"
                           class="ant-form-explain">{{
                          errors.first('firstname')
                        }}
                      </div>
                    </a-form-item>
                    <a-form-item>
                      <a-input v-model="lastname"
                               v-validate="'required'"
                               name="lastname"

                               placeholder="lastname"
                      >

                      </a-input>
                      <div v-if="errors.has('lastname')" style="color: #f5222d;" class="ant-form-explain">
                        {{
                          errors.first('lastname')
                        }}
                      </div>
                    </a-form-item>
                    <a-form-item>
                      <a-input v-model="email"
                               v-validate="'required|email'"
                               name="email"

                               placeholder="Email"
                      >
                        <a-icon
                            slot="prefix"
                            type="user"
                            style="color: rgba(0,0,0,.25)"
                        />
                      </a-input>

                      <div v-if="errors.has('email')" style="color: #f5222d;" class="ant-form-explain">{{
                          errors.first('email')
                        }}
                      </div>
                    </a-form-item>
                    <a-form-item>


                      <a-input v-validate="'required|verify_password'" name="password"
                               type="password"
                               v-model="password1"
                               :class="{'is-danger': errors.has('password')}" placeholder="Password"
                               ref="password">
                        <a-icon
                            slot="prefix"
                            type="lock"
                            style="color: rgba(0,0,0,.25)"
                        />
                      </a-input>
                      <span style="color: #f5222d;" v-show="errors.has('password')"
                            class="help is-danger">{{ errors.first('password') }}</span>


                    </a-form-item>
                    <a-form-item>


                      <a-input v-model="password2" v-validate="'required|confirmed:password'"
                               name="password_confirmation"
                               type="password" :class="{'is-danger': errors.has('password_confirmation')}"
                               placeholder="Password, Again" data-vv-as="password">
                        <a-icon
                            slot="prefix"
                            type="lock"
                            style="color: rgba(0,0,0,.25)"
                        />
                      </a-input>
                      <span style="color: #f5222d;" v-show="errors.has('password_confirmation')"
                            class="help is-danger">{{ errors.first('password_confirmation') }}</span>
                    </a-form-item>
                    <a-form-item v-if="loading ">
                      <div style="text-align: center;">
                        <a-spin/>
                      </div>


                    </a-form-item>
                    <a-form-item v-else>
                      <a-button @click="register"
                                type="primary"
                                class="login-form-button"
                      >
                        Register
                      </a-button>


                    </a-form-item>
                  </a-form>
                </a-card>
              </div>
              <div v-if="$store.state.usertype === 'developer'" style="padding: 3%;margin-top: 4rem">
                <a-card title="Register on codeln.com " :style="{width:'21rem'}">
                  <a-timeline>
                    <a-timeline-item>Create a profile on Codeln</a-timeline-item>
                    <a-timeline-item>Opt into remote codeln</a-timeline-item>
                    <a-timeline-item>Your profile goes under review</a-timeline-item>
                    <a-timeline-item>Successful profile can now apply for gigs</a-timeline-item>
                  </a-timeline>
                  <a href="https://www.codeln.com/register" target="_blank">
                    <a-button type="primary">Get started</a-button>
                  </a>



                </a-card>

              </div>
            </div>
            <div v-else>
              <img src="@/assets/images/startup.svg" style="width: 100%"/>
            </div>


          </a-col>
        </a-row>


      </div>


    </a-layout-content>

    <Footer/>
  </a-layout>
</template>

<script>
import Pageheader from '@/components/homepages/layout/Header'
import Footer from '@/components/homepages/layout/Footer'

import AuthService from '@/services/AuthService'

import VeeValidate from 'vee-validate';

import Vue from 'vue'
import User from "@/services/UsersService";


Vue.use(VeeValidate);

VeeValidate.Validator.extend('verify_password', {
  getMessage: `The password must contain at least: 1 uppercase, 1 lowercase, 1 number,8 characters min`,
  validate: value => {
    var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");
    return strongRegex.test(value);
  }
});
export default {
  name: "register",
  components: {


    Pageheader,
    Footer,


  },
  data() {
    return {
      loading: false,
      usertype: null,
      firstname: '',
      lastname: '',
      email: '',
      password1: '',
      password2: '',
      error: null,
      developer: false,
      client: false,
      currentUserProfile: {}

    }
  },
  computed: {
    Profile() {
      let profile = ''
      if (this.client === false && this.developer === false) {
        profile = ''
      } else {
        if (this.$store.state.usertype) {
          profile = this.$store.state.usertype
        }

      }

      return profile
    }
  },

  methods: {
    register() {
      this.$validator.validateAll().then((values) => {
        if (values) {
          this.loading = true


          AuthService.register({
            first_name: this.firstname,
            last_name: this.lastname,
            email: this.email,
            password1: this.password1,
            password2: this.password2
          })
              .then(resp => {
                this.$store.dispatch('setToken', resp.data.token)
                this.$store.dispatch('setUser', resp.data.user)
                const auth = {
                  headers: {Authorization: 'JWT ' + this.$store.state.token}

                }
                User.currentuser(this.$store.state.user.pk, auth)
                    .then(resp => {
                          this.currentUserProfile = resp.data
                          this.currentUserProfile.stage = 'complete'
                          this.currentUserProfile.user_type = 'recruiter'
                          User.update(this.$store.state.user.pk, this.currentUserProfile, auth)
                              .then(() => {
                                this.$router.push({
                                  name: 'Dashboard'
                                })
                              })
                        }
                    )


                this.loading = false


              })
              .catch(error => {
                console.log(error)
                this.loading = false

                this.error = 'user already exists'

              });


        }
      })
    },
    Choice(value) {
      this.$store.dispatch('setUsertype',)
      if (value === 1) {
        this.client = true
        this.$store.dispatch('setUsertype', 'recruiter')
        this.developer = false


      } else {
        this.client = false
        this.$store.dispatch('setUsertype', 'developer')
        this.developer = true


      }

    }


  }
}
</script>
<style scoped>

#components-form-demo-normal-login .login-form {
  max-width: 300px;
}

#components-form-demo-normal-login .login-form-button {
  width: 100%;
}

.radiochoice {
  height: 10rem;
  width: 15rem;
  margin: 4px;

}

ul {
  list-style-type: none;
}

.alert {
  padding: 8px;
  background-color: #fff1f0;
  border: 1px solid #ffa39e;
}


.actioncards {

  border-radius: 0;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-top: 6rem;
  padding: 3%;
  margin-left: 4%;

}


</style>
