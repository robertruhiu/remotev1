<template>
  <div>
    <div id="howitworks" style="margin-bottom: 5rem">
      <section class="featuresection">
        <div style="padding: 100px 30px;margin: 0 auto;text-align: center">
          <div>
            <h5 class="featuresmallheader">how it works</h5>
          </div>
          <div>
            <h2 class="featurebigheader">Our intuitive process to ensure a successful project</h2>
          </div>
        </div>
        <div class="mainpresentation">
          <div class="taskshow">
            <a-card
                size="small"
                class
                style="width: 18rem;box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)!important;padding: 4%;"
            >
                    <span
                        slot="title"
                        style="font-family: sofia_prosemibold;font-size: 18px"
                    >1. Express what you want</span>

              <a-form
                  :form="form"
                  :label-col="{ span: 10 }"
                  :wrapper-col="{ span: 24 }"
                  @submit="handleSubmit"
              >
                <a-form-item label="Project title">
                  <a-input />
                </a-form-item>
                <a-form-item label="Description">
                  <a-input />
                </a-form-item>
                <a-form-item label="Budget&time:">
                  <a-input />
                </a-form-item>
              </a-form>
            </a-card>
          </div>
          <div id="mangeats"
               style="border:5px solid #242a49  ;padding: 1%;border-radius: 2rem;background-color: #FAFBFF;width: 61.5rem;height: 38.4375rem "
          >
            <a-row gutter="4">
              <a-col span="2" style="background-color: white;height: 100%">
                <div style="padding: 1rem">
                  <img src="@/assets/logobg.svg" style="width: 100%" />
                </div>
              </a-col>
              <a-col span="22">
                <a-card
                    style="width: 45rem;margin-left: 6%;border: none;background-color:#FAFBFF "
                >
                  <span class="text__paragraph-big">5 : Manage</span>
                </a-card>
                <a-row
                    style="margin-top: 1.5rem;background-color: #F4F7FC;border-radius: 1rem;height: 29rem;padding: 2%;"
                >
                  <a-col span="8">
                    <div style>
                      <p style="font-family: sofia_proregular">Todo</p>

                      <a-card
                          size="small"
                          style="width: 13rem;margin-bottom: 1rem"
                          class="shadowsmall"
                      >
                              <span
                                  slot="title"
                                  style="font-family: sofia_proextralight;font-size: 9px;"
                              >Due: 12/8/2020</span>
                        <span slot="extra" href="#">
                                <a-icon type="delete" theme="twoTone" />
                              </span>
                        <p style="font-family: sofia_prolight">Login pages</p>
                      </a-card>

                      <a-card
                          size="small"
                          style="width: 13rem;margin-bottom: 1rem"
                          class="shadowsmall"
                      >
                              <span
                                  slot="title"
                                  style="font-family: sofia_proextralight;font-size: 9px;"
                              >Due: 12/8/2020</span>
                        <span slot="extra" href="#">
                                <a-icon type="delete" theme="twoTone" />
                              </span>
                        <p style="font-family: sofia_prolight">Admin dashboard</p>
                      </a-card>
                      <a-card
                          size="small"
                          style="width: 13rem;margin-bottom: 1rem"
                          class="shadowsmall"
                      >
                              <span
                                  slot="title"
                                  style="font-family: sofia_proextralight;font-size: 9px;"
                              >Due: 12/8/2020</span>
                        <span slot="extra" href="#">
                                <a-icon type="delete" theme="twoTone" />
                              </span>
                        <p style="font-family: sofia_prolight">Profile</p>
                      </a-card>
                    </div>
                  </a-col>
                  <a-col span="8">
                    <div style>
                      <p style="font-family: sofia_proregular">In progress</p>

                      <a-card
                          size="small"
                          style="width: 13rem;margin-bottom: 1rem"
                          class="shadowsmall"
                      >
                              <span
                                  slot="title"
                                  style="font-family: sofia_proextralight;font-size: 9px;"
                              >Due: 12/8/2020</span>
                        <span slot="extra" href="#">
                                <a-icon type="delete" theme="twoTone" />
                              </span>
                        <p style="font-family: sofia_prolight">database structure</p>
                      </a-card>
                      <a-card
                          size="small"
                          style="width: 13rem;margin-bottom: 1rem"
                          class="shadowsmall"
                      >
                              <span
                                  slot="title"
                                  style="font-family: sofia_proextralight;font-size: 9px;"
                              >Due: 12/8/2020</span>
                        <span slot="extra" href="#">
                                <a-icon type="delete" theme="twoTone" />
                              </span>
                        <p style="font-family: sofia_prolight">UX Ui design</p>
                      </a-card>
                    </div>
                  </a-col>
                  <a-col span="8">
                    <div style>
                      <p style="font-family: sofia_proregular">Done</p>

                      <a-card size="small" style="width: 13rem" class="shadowsmall">
                              <span
                                  slot="title"
                                  style="font-family: sofia_proextralight;font-size: 9px;"
                              >Due: 12/8/2020</span>
                        <span slot="extra" href="#">
                                <a-icon type="delete" theme="twoTone" />
                              </span>
                        <p style="font-family: sofia_prolight">Landing page</p>
                      </a-card>
                    </div>
                  </a-col>
                </a-row>
              </a-col>
            </a-row>
          </div>

          <div class="bids">
            <a-card size="small" class="shadowsmall" style="width: 28rem;font-size: 18px">
              <span slot="title" style="font-family: sofia_prosemibold">2 :Accept Bids</span>
            </a-card>
            <a-row class="shadowsmallbid">
              <a-col span="18">
                <p>Name: Jessica Jone</p>
                <p>Proposal : hello there text ...</p>

                <p>Quote : $2000</p>
              </a-col>
              <a-col span="4">
                <div>
                  <a-tag color="#F0F6FD" style="color: #007BFF">
                    <a-icon type="environment" />KE
                  </a-tag>
                </div>
                <div style="margin-top: 1rem">
                  <a-button type="primary" ghost>View bid</a-button>
                </div>
              </a-col>
            </a-row>
            <a-row class="shadowsmallbid">
              <a-col span="18">
                <p>Name: Jessica Jone</p>
                <p>Proposal : hello there text ...</p>

                <p>Quote : $2000</p>
              </a-col>
              <a-col span="4">
                <div>
                  <a-tag color="#F0F6FD" style="color: #007BFF">
                    <a-icon type="environment" />KE
                  </a-tag>
                </div>
                <div style="margin-top: 1rem">
                  <a-button type="primary" ghost>View bid</a-button>
                </div>
              </a-col>
            </a-row>
            <a-row class="shadowsmallbid">
              <a-col span="18">
                <p>Name: Jessica Jone</p>
                <p>Proposal : hello there text ...</p>

                <p>Quote : $2000</p>
              </a-col>
              <a-col span="4">
                <div>
                  <a-tag color="#F0F6FD" style="color: #007BFF">
                    <a-icon type="environment" />KE
                  </a-tag>
                </div>
                <div style="margin-top: 1rem">
                  <a-button type="primary" ghost>View bid</a-button>
                </div>
              </a-col>
            </a-row>
          </div>

          <div class="contract">
                  <span style="color: white;font-family: sofia_prosemibold;">
                    <a-icon type="form" />3: Contract
                  </span>
          </div>

          <div class="escrow">
                  <span style="color: white;font-family: sofia_prosemibold;">
                    <a-icon type="bank" />4: Escrow
                  </span>
          </div>
        </div>
      </section>
    </div>
    <div class="taskshow">
      <a-card
          size="small"
          class
          style="width: 18rem;box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)!important;padding: 4%;"
      >
                    <span
                        slot="title"
                        style="font-family: sofia_prosemibold;font-size: 18px"
                    >1. Express what you want</span>

        <a-form
            :form="form"
            :label-col="{ span: 10 }"
            :wrapper-col="{ span: 24 }"
            @submit="handleSubmit"
        >
          <a-form-item label="Project title">
            <a-input />
          </a-form-item>
          <a-form-item label="Description">
            <a-input />
          </a-form-item>
          <a-form-item label="Budget&time:">
            <a-input />
          </a-form-item>
        </a-form>
      </a-card>
    </div>
    <div id="mangeats"
         style="border:5px solid #242a49  ;padding: 1%;border-radius: 2rem;background-color: #FAFBFF;width: 61.5rem;height: 38.4375rem "
    >
      <a-row gutter="4">
        <a-col span="2" style="background-color: white;height: 100%">
          <div style="padding: 1rem">
            <img src="@/assets/logobg.svg" style="width: 100%" />
          </div>
        </a-col>
        <a-col span="22">
          <a-card
              style="width: 45rem;margin-left: 6%;border: none;background-color:#FAFBFF "
          >
            <span class="text__paragraph-big">5 : Manage</span>
          </a-card>
          <a-row
              style="margin-top: 1.5rem;background-color: #F4F7FC;border-radius: 1rem;height: 29rem;padding: 2%;"
          >
            <a-col span="8">
              <div style>
                <p style="font-family: sofia_proregular">Todo</p>

                <a-card
                    size="small"
                    style="width: 13rem;margin-bottom: 1rem"
                    class="shadowsmall"
                >
                              <span
                                  slot="title"
                                  style="font-family: sofia_proextralight;font-size: 9px;"
                              >Due: 12/8/2020</span>
                  <span slot="extra" href="#">
                                <a-icon type="delete" theme="twoTone" />
                              </span>
                  <p style="font-family: sofia_prolight">Login pages</p>
                </a-card>

                <a-card
                    size="small"
                    style="width: 13rem;margin-bottom: 1rem"
                    class="shadowsmall"
                >
                              <span
                                  slot="title"
                                  style="font-family: sofia_proextralight;font-size: 9px;"
                              >Due: 12/8/2020</span>
                  <span slot="extra" href="#">
                                <a-icon type="delete" theme="twoTone" />
                              </span>
                  <p style="font-family: sofia_prolight">Admin dashboard</p>
                </a-card>
                <a-card
                    size="small"
                    style="width: 13rem;margin-bottom: 1rem"
                    class="shadowsmall"
                >
                              <span
                                  slot="title"
                                  style="font-family: sofia_proextralight;font-size: 9px;"
                              >Due: 12/8/2020</span>
                  <span slot="extra" href="#">
                                <a-icon type="delete" theme="twoTone" />
                              </span>
                  <p style="font-family: sofia_prolight">Profile</p>
                </a-card>
              </div>
            </a-col>
            <a-col span="8">
              <div style>
                <p style="font-family: sofia_proregular">In progress</p>

                <a-card
                    size="small"
                    style="width: 13rem;margin-bottom: 1rem"
                    class="shadowsmall"
                >
                              <span
                                  slot="title"
                                  style="font-family: sofia_proextralight;font-size: 9px;"
                              >Due: 12/8/2020</span>
                  <span slot="extra" href="#">
                                <a-icon type="delete" theme="twoTone" />
                              </span>
                  <p style="font-family: sofia_prolight">database structure</p>
                </a-card>
                <a-card
                    size="small"
                    style="width: 13rem;margin-bottom: 1rem"
                    class="shadowsmall"
                >
                              <span
                                  slot="title"
                                  style="font-family: sofia_proextralight;font-size: 9px;"
                              >Due: 12/8/2020</span>
                  <span slot="extra" href="#">
                                <a-icon type="delete" theme="twoTone" />
                              </span>
                  <p style="font-family: sofia_prolight">UX Ui design</p>
                </a-card>
              </div>
            </a-col>
            <a-col span="8">
              <div style>
                <p style="font-family: sofia_proregular">Done</p>

                <a-card size="small" style="width: 13rem" class="shadowsmall">
                              <span
                                  slot="title"
                                  style="font-family: sofia_proextralight;font-size: 9px;"
                              >Due: 12/8/2020</span>
                  <span slot="extra" href="#">
                                <a-icon type="delete" theme="twoTone" />
                              </span>
                  <p style="font-family: sofia_prolight">Landing page</p>
                </a-card>
              </div>
            </a-col>
          </a-row>
        </a-col>
      </a-row>
    </div>

    <div class="bids">
      <a-card size="small" class="shadowsmall" style="width: 28rem;font-size: 18px">
        <span slot="title" style="font-family: sofia_prosemibold">2 :Accept Bids</span>
      </a-card>
      <a-row class="shadowsmallbid">
        <a-col span="18">
          <p>Name: Jessica Jone</p>
          <p>Proposal : hello there text ...</p>

          <p>Quote : $2000</p>
        </a-col>
        <a-col span="4">
          <div>
            <a-tag color="#F0F6FD" style="color: #007BFF">
              <a-icon type="environment" />SA
            </a-tag>
          </div>
          <div style="margin-top: 1rem">
            <a-button type="primary" ghost>View bid</a-button>
          </div>
        </a-col>
      </a-row>
      <a-row class="shadowsmallbid">
        <a-col span="18">
          <p>Name: Jessica Jone</p>
          <p>Proposal : hello there text ...</p>

          <p>Quote : $3000</p>
        </a-col>
        <a-col span="4">
          <div>
            <a-tag color="#F0F6FD" style="color: #007BFF">
              <a-icon type="environment" />NG
            </a-tag>
          </div>
          <div style="margin-top: 1rem">
            <a-button type="primary" ghost>View bid</a-button>
          </div>
        </a-col>
      </a-row>
      <a-row class="shadowsmallbid">
        <a-col span="18">
          <p>Name: Jessica Jone</p>
          <p>Proposal : hello there text ...</p>

          <p>Quote : $2500</p>
        </a-col>
        <a-col span="4">
          <div>
            <a-tag color="#F0F6FD" style="color: #007BFF">
              <a-icon type="environment" />GH
            </a-tag>
          </div>
          <div style="margin-top: 1rem">
            <a-button type="primary" ghost>View bid</a-button>
          </div>
        </a-col>
      </a-row>
    </div>

    <div class="contract">
                  <span style="color: white;font-family: sofia_prosemibold;">
                    <a-icon type="form" />3: Contract
                  </span>
    </div>

    <div class="escrow">
                  <span style="color: white;font-family: sofia_prosemibold;">
                    <a-icon type="bank" />4: Escrow
                  </span>
    </div>
    <div class="taskshow">

      <a-card size="small" class="" style="width: 18rem;box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)!important;padding: 4%;">
        <span slot="title" style="font-family: sofia_prosemibold;font-size: 18px">1. Express what you want</span>


        <a-form :form="form" :label-col="{ span: 10 }" :wrapper-col="{ span: 24 }" @submit="handleSubmit">
          <a-form-item label="Project title">
            <a-input

            />
          </a-form-item>
          <a-form-item label="Description">
            <a-input

            />
          </a-form-item>
          <a-form-item label="Budget&time:">
            <a-input

            />
          </a-form-item>
        </a-form>

      </a-card>


    </div>
    <a-card size="small" style="width: 13rem;margin-bottom: 1rem" class="shadowsmall">
      <span slot="title" style="font-family: sofia_proextralight;font-size: 9px;">Due: 12/8/2020</span>
      <span slot="extra" href="#"><a-icon type="delete" theme="twoTone"/></span>
      <p style="font-family: sofia_prolight">{{ element.name }}</p>

    </a-card>
  </div>
    
</template>

<script>
    export default {
        name: "DeveloperDashboard"
    }
</script>

<style scoped>

</style>