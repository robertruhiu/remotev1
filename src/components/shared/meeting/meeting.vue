<template>
  <a-layout style="min-height: 100vh;background-color: #F4F7FC">
    <SmallSider v-if="$store.state.user_object.user_type ==='recruiter'"/>
    <DeveloperSmall v-else-if="$store.state.user_object.user_type ==='developer'"/>


    <a-layout style="background-color: #F4F7FC">

      <a-layout-content
          :style="{  padding: '1% 2%', background: '#FAFBFF', minHeight: '280px', }"

      >
        <a-card class="hellocard">

          <div style="width: 90%;margin: 0 auto">
            <a-steps :current="CurrentProject.current" style="">
              <a-step v-for="item in steps" :key="item.title" :title="item.title"/>
            </a-steps>
          </div>


        </a-card>



        <div style="min-height: 40vh ;position: relative">
          <a-row :gutter="gutter">
            <a-col span="24">
              <div>


                <div style="">
                  <div style="margin: 0 auto">
                    <div v-if="CurrentProject.current===0">
                      <a-row style="margin: 0 auto">
                        <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
                               :md="{span: 24, offset: 0 }"
                               :lg="{span: 24, offset: 0 }" :xl="{span: 16,offset: 4 }" class="stepcard">
                          <div style="text-align: center">


                          </div>


                          <a-form-model>
                            <a-form-model-item label="Project title">
                              <a-input v-model="CurrentProject.project.title" @change="sendProjectdata"/>
                              <div v-for="error in step1errors" v-bind:key="error">
                                <div v-if="error === 'title'" style="color: red">
                                  required
                                </div>
                              </div>
                            </a-form-model-item>
                            <a-form-model-item label="Project description">
                              <vue-simplemde v-model="CurrentProject.project.description" ref="markdownEditor"
                                             @change="sendProjectdata"/>
                              <div v-for="error in step1errors" v-bind:key="error">
                                <div v-if="error === 'description'" style="color: red">
                                  required
                                </div>
                              </div>

                            </a-form-model-item>


                          </a-form-model>

                        </a-col>

                      </a-row>

                    </div>

                    <div v-if="CurrentProject.current===1">

                      <a-row style="margin: 0 auto">
                        <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
                               :md="{span: 24, offset: 0 }"
                               :lg="{span: 24, offset: 0 }" :xl="{span: 16,offset: 4 }" class="stepcard">
                          <div style="text-align: center">

                            <p style="font-family: sofia_problack">Breakdown your project</p>
                            <p>Express project features with a user story on interaction.You can have multiple Features
                              just
                              add and submit to continue adding more.These will serve as your milestones</p>
                          </div>
                          <a-row :gutter="gutter">

                            <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
                                   :md="{span: 12, offset: 0 }"
                                   :lg="{span: 12, offset: 0 }" :xl="{span: 12,offset: 0 }">
                              <p style="font-family: sofia_problack">Feature list</p>

                              <div v-if="featureserror" style="color: red">
                                required
                              </div>


                              <div v-if="CurrentProject.features.length===0">
                                <p>Add feature<span style="float: right"><a-icon type="arrow-right"/></span></p>
                              </div>
                              <div v-else style="overflow-y: scroll;height: 40vh">

                                <div v-for="feature in CurrentProject.features" v-bind:key="feature.id">

                                  <a-card size="small" :title="feature.title" style="width: 80%;margin-bottom: 1rem">
                                    <a slot="extra" @click="editfeature(feature)">edit </a>

                                    <p style="font-family: sofia_proregular" v-for="story in feature.storylist"
                                       v-bind:key="story.id">
                                      {{ story.user_story }}
                                    </p>
                                  </a-card>

                                </div>
                              </div>


                            </a-col>

                            <hide-at breakpoint="mediumAndBelow">
                              <a-col span="12" class="addfeature">
                                <a-form :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }">
                                  <a-form-item label="Feature name">
                                    <a-input v-model="featuretitle" placeholder="Registration"
                                             @change="featuretitlechange"

                                    />
                                    <div v-if="featuretitleerror" style="color: red">
                                      title required
                                    </div>
                                  </a-form-item>
                                  <p style="font-family: sofia_proregular">Feature user stories
                                    <a-button @click="addstory" size="small" style="margin-right: 1%">
                                      Add story
                                    </a-button>
                                  </p>
                                  <p style="font-family: sofia_proregular"><strong>These provide context on what the
                                    feature
                                    is supposed to do.</strong>Example:As a developer I want to be able to sign up and
                                    create
                                    a profile


                                  <div
                                      v-for="(story, counter) in stories"
                                      v-bind:key="counter">


                                    <a-form-item>
                                      <label slot="label">Story{{ counter + 1 }} <span style="float: right"
                                                                                       @click="deleteStory(counter)"><a-icon
                                          type="close"/></span></label>

                                      <a-textarea v-model="story.user_story"
                                                  placeholder="As a developer I want to be able to create a public profile on remote.codeln.com so that i can be attractive to project owners"
                                                  :auto-size="{ minRows: 2, maxRows: 5 }"


                                      />

                                    </a-form-item>


                                  </div>
                                  <a-space>
                                    <a-button v-if="featureedit" type="primary" @click="editfeaturesubmit" size="small">
                                      Submit changes
                                    </a-button>
                                    <a-button v-if="featureedit" type="danger" @click="featuredelete" size="small">
                                      delete
                                    </a-button>


                                    <a-button v-else type="primary" @click="addFeature" size="small">
                                      Submit Feature
                                    </a-button>
                                  </a-space>


                                </a-form>
                              </a-col>
                            </hide-at>
                            <show-at breakpoint="mediumAndBelow">
                              <a-col span="24" class="addfeature">
                                <a-button type="primary" @click="new_edit_feature">add new feature</a-button>

                                <a-modal v-model="featuremodal" :footer="null">
                                  <div>
                                    <a-form :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }">
                                      <a-form-item label="Feature name">
                                        <a-input v-model="featuretitle" placeholder="Registration"
                                                 @change="featuretitlechange"

                                        />
                                        <div v-if="featuretitleerror" style="color: red">
                                          title required
                                        </div>
                                      </a-form-item>
                                      <p style="font-family: sofia_proregular">Feature user stories
                                        <a-button @click="addstory" size="small" style="margin-right: 1%">
                                          Add story
                                        </a-button>
                                      </p>
                                      <p style="font-family: sofia_proregular"><strong>These provide context on what the
                                        feature
                                        is supposed to do.</strong>Example:As a developer I want to be able to sign up
                                        and
                                        create
                                        a profile


                                      <div
                                          v-for="(story, counter) in stories"
                                          v-bind:key="counter">


                                        <a-form-item>
                                          <label slot="label">Story{{ counter + 1 }} <span style="float: right"
                                                                                           @click="deleteStory(counter)"><a-icon
                                              type="close"/></span></label>

                                          <a-textarea v-model="story.user_story"
                                                      placeholder="As a developer I want to be able to create a public profile on remote.codeln.com so that i can be attractive to project owners"
                                                      :auto-size="{ minRows: 2, maxRows: 5 }"


                                          />

                                        </a-form-item>


                                      </div>
                                      <a-space>
                                        <a-button v-if="featureedit" type="primary" @click="editfeaturesubmit"
                                                  size="small">
                                          Submit changes
                                        </a-button>
                                        <a-button v-if="featureedit" type="danger" @click="featuredelete" size="small">
                                          delete
                                        </a-button>


                                        <a-button v-else type="primary" @click="addFeature" size="small">
                                          Submit Feature
                                        </a-button>
                                      </a-space>


                                    </a-form>
                                  </div>
                                </a-modal>

                              </a-col>
                            </show-at>
                          </a-row>


                        </a-col>

                      </a-row>
                    </div>

                    <div v-if="CurrentProject.current === 2">
                      <a-row style="margin: 0 auto">
                        <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
                               :md="{span: 24, offset: 0 }"
                               :lg="{span: 24, offset: 0 }" :xl="{span: 16,offset: 4 }" class="stepcard">
                          <div style="text-align: center">
                            <p style="font-family: sofia_problack">Lets allot due dates for each feature stated
                              previously </p>
                          </div>
                          <a-row>
                            <a-col span="12"><p>Quoted timeline by client : {{ CurrentProject.project.time }} days</p>
                            </a-col>

                          </a-row>


                          <a-row>
                            <a-col :xs="{span: 8, offset: 0 }" :sm="{span: 8, offset: 0 }"
                                   :md="{span: 8, offset: 0 }"
                                   :lg="{span: 12, offset: 0 }" :xl="{span:12 ,offset: 0 }">
                              <p style="font-weight: bold">Features</p>
                            </a-col>
                            <a-col :xs="{span: 8, offset: 0 }" :sm="{span: 8, offset: 0 }"
                                   :md="{span: 8, offset: 0 }"
                                   :lg="{span: 6, offset: 0 }" :xl="{span:6 ,offset: 0 }">
                              <p style="font-weight: bold">Due date</p>

                            </a-col>
                            <a-col :xs="{span: 8, offset: 0 }" :sm="{span: 8, offset: 0 }"
                                   :md="{span: 8, offset: 0 }"
                                   :lg="{span: 6, offset: 0 }" :xl="{span:6 ,offset: 0 }">
                              <p style="font-weight: bold">Picked date</p>

                            </a-col>
                          </a-row>

                          <div v-for="feature in CurrentProject.features" v-bind:key="feature.id">
                            <a-row style="border-bottom: 1px solid rgb(232, 232, 232);margin-bottom: 1%">
                              <a-col :xs="{span: 8, offset: 0 }" :sm="{span: 8, offset: 0 }"
                                     :md="{span: 8, offset: 0 }"
                                     :lg="{span: 12, offset: 0 }" :xl="{span:12 ,offset: 0 }">
                                <p style="font-family: sofia_probold">{{ feature.title }}</p>


                              </a-col>
                              <a-col :xs="{span: 8, offset: 0 }" :sm="{span: 8, offset: 0 }"
                                     :md="{span: 8, offset: 0 }"
                                     :lg="{span: 6, offset: 0 }" :xl="{span:6 ,offset: 0 }">
                                <a-date-picker
                                    format="YYYY-MM-DD"
                                    :disabled-date="disabledDate"

                                    v-model="feature.due_date" @change="saveTime(feature)"
                                />

                              </a-col>
                              <a-col :xs="{span: 8, offset: 0 }" :sm="{span: 8, offset: 0 }"
                                     :md="{span: 8, offset: 0 }"
                                     :lg="{span: 6, offset: 0 }" :xl="{span:6 ,offset: 0 }">
                            <span v-if="feature.due_date">
                              {{ feature.due_date | momentformat }}
                            </span>

                              </a-col>
                            </a-row>

                          </div>
                        </a-col>
                      </a-row>


                    </div>

                    <div v-if="CurrentProject.current === 3">
                      <a-row style="margin: 0 auto">
                        <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
                               :md="{span: 24, offset: 0 }"
                               :lg="{span: 24, offset: 0 }" :xl="{span: 16,offset: 4 }" class="stepcard">


                          <div style="text-align: center">

                            <p style="font-family: sofia_problack">Breakdown your budget to enable escrow </p>
                          </div>
                          <a-row>
                            <a-col span="12"><p>Quoted budget by client : {{ CurrentProject.project.budget }}$</p>
                            </a-col>
                            <a-col span="6">New Budget {{ NewBudget }} $</a-col>

                          </a-row>


                          <a-row>
                            <a-col span="12">
                              <p style="font-weight: bold">Features</p>
                            </a-col>
                            <a-col span="12">
                              <p style="font-weight: bold">Budget alloted</p>

                            </a-col>
                          </a-row>

                          <div v-for="feature in CurrentProject.features" v-bind:key="feature.id">
                            <a-row style="border-bottom: 1px solid rgb(232, 232, 232);margin-bottom: 1%">
                              <a-col span="12">
                                <p>{{ feature.title }}</p>


                              </a-col>
                              <a-col span="12">
                                <a-input-number
                                    :default-value="1000"
                                    :formatter="value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
                                    :parser="value => value.replace(/\$\s?|(,*)/g, '')"

                                    v-model="feature.amount" :min="1" @change="saveBudget(feature)"
                                />

                              </a-col>
                            </a-row>

                          </div>
                        </a-col>
                      </a-row>

                    </div>

                    <div v-if="CurrentProject.current === 4">
                      <a-row style="margin: 0 auto">
                        <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
                               :md="{span: 24, offset: 0 }"
                               :lg="{span: 24, offset: 0 }" :xl="{span: 16,offset: 4 }" class="stepcard">
                          <div style="text-align: center">

                            <p style="font-family: sofia_problack">Which tools to be used</p>

                          </div>

                          <a-form-model>
                            <a-form-model-item label="Project type(you can pick than one type)">
                              <div v-if="notoolserror" style="color: red">
                                required
                              </div>


                              <a-select
                                  v-model="CurrentProject.projectype"


                                  style="width: 100%"
                                  placeholder="Please select project type"
                                  @change="selectprojectype"
                              >
                                <a-select-option value="website">
                                  Website
                                </a-select-option>
                                <a-select-option value="android-App">
                                  Android app
                                </a-select-option>
                                <a-select-option value="ios-App">
                                  Ios app
                                </a-select-option>


                                <a-select-option value="desktop-App">
                                  Desktop application
                                </a-select-option>
                              </a-select>

                            </a-form-model-item>


                          </a-form-model>

                          <div v-if="CurrentProject.projectype">
                            <div>
                              <p>Development tools types</p>


                              <template v-for="tag in projecttypetags">
                                <a-checkable-tag
                                    :key="tag"
                                    :checked="CurrentProject.selectedTags.indexOf(tag) > -1"
                                    @change="checked => handleChange(tag, checked)"
                                >
                                  {{ tag }}
                                </a-checkable-tag>
                              </template>

                            </div>

                            <div style="margin-top: 1rem">
                              <p>Add a custom framework or language</p>
                              <template v-for="(tag, index) in CurrentProject.tags">
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

                            </div>
                          </div>


                        </a-col>

                      </a-row>
                    </div>

                    <div v-if="CurrentProject.current === 5">
                      <a-row style="margin: 0 auto">
                        <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
                               :md="{span: 24, offset: 0 }"
                               :lg="{span: 24, offset: 0 }" :xl="{span: 16,offset: 4 }" class="stepcard">
                          <h3 style="font-weight: bold;font-family: sofia_probold;text-align: center">Codeln's
                            role </h3>
                          <p style="font-weight: bold">Escrow Management</p>
                          <p>Codeln will hereby be the recipient of the client budget as the escrow holder.</p>
                          <p>Disemination</p>
                          Escrow will only be sent to developer upon completion of a feature.where all issues have been
                          resolved and client is satisfied
                          <p style="font-weight: bold">Conflict resolution</p>
                          Codeln will act as an abitrator of issues that prove difficult to solve between the client and
                          developer.Ie issues raised and escrow dissemination
                          <p>I agree to the Codeln role as a conflict resoultion and a escrow manager of the project</p>
                        </a-col>
                      </a-row>


                    </div>

                    <div v-if="CurrentProject.current === 6">

                      <a-row style="margin: 0 auto">
                        <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
                               :md="{span: 24, offset: 0 }"
                               :lg="{span: 24, offset: 0 }" :xl="{span: 16,offset: 0 }" class="stepcard">


                          <div style="padding: 2%" id="contract">
                            <div style="margin-bottom: 2rem">
                              <h2 style="font-weight: bold;font-family: sofia_probold;text-align: center">SOFTWARE
                                DEVELOPMENT CONTRACT</h2>
                            </div>


                            <div style="margin-bottom: 2rem">
                              <h3 style="font-family: sofia_probold">Parties involved</h3>
                              <p>This Agreement is entered into as of <strong>{{
                                  CurrentProject.project.sign_date
                                }}</strong> by and between
                                <strong>{{ CurrentProject.client.user.first_name |capitalize }} {{
                                    CurrentProject.client.user.last_name |capitalize
                                  }}(client)</strong> and <strong>
                                  {{ CurrentProject.developer.user.first_name |capitalize }} {{
                                    CurrentProject.developer.user.last_name |capitalize
                                  }}(developer)
                                </strong>
                                both of whom agree to be bound by this Agreement.</p>
                            </div>


                            <div style="margin-bottom: 1rem">
                              <h3 style="font-family: sofia_probold">1 Project details</h3>
                              <p style="font-family: sofia_probold">1.1 Title:
                                {{ CurrentProject.project.title | capitalize }}</p>
                              <p style="font-family: sofia_probold">1.2 Description</p>
                              <div style="font-family: sofia_proregular">
                                <markdown>{{ CurrentProject.project.description }}</markdown>

                              </div>
                              <p style="font-family: sofia_probold">1.3 Budget</p>
                              <p>An amount of has been alotted for this project <strong>$ {{ NewBudget }}</strong></p>
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
                              <div v-for="feature in CurrentProject.features" v-bind:key="feature">
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
                                    <strong>{{ CurrentProject.client.user.first_name |capitalize }} {{
                                        CurrentProject.client.user.last_name |capitalize
                                      }}(client)</strong>
                                  </p>

                                  <img :src="CurrentProject.clientsign.signature" v-if="CurrentProject.clientsign"
                                       style="width: 30%"/>
                                  <p v-else>.........................</p>

                                </a-col>
                                <a-col span="12">
                                  <p>
                                    <strong>
                                      {{ CurrentProject.developer.user.first_name |capitalize }} {{
                                        CurrentProject.developer.user.last_name |capitalize
                                      }}(developer)
                                    </strong>
                                  </p>

                                  <img :src="CurrentProject.devsign.signature" v-if="CurrentProject.devsign"
                                       style="width: 30%"/>
                                  <p v-else>.........................</p>

                                </a-col>
                              </a-row>
                              <a-row style="padding: 3%">
                                <a-col span="12">
                                  <p>Date:{{ date }} </p>

                                </a-col>
                                <a-col span="12">
                                  <p>Date:{{ date }} </p>

                                </a-col>
                              </a-row>


                            </div>
                          </div>


                        </a-col>
                        <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
                               :md="{span: 24, offset: 0 }"
                               :lg="{span: 12, offset: 0 }" :xl="{span: 6,offset: 0 }">
                          <div style="padding: 2%">
                            <div style="margin-bottom: 1rem">
                              <div v-if="$store.state.user_object.user_type === 'recruiter'">

                                <div v-if="CurrentProject.clientsign===''">
                                  <div class="signaturecard">
                                    <p>Insert signature here and save when completed</p>
                                    <VueSignaturePad class="sign" v-model="signaturedata" ref="signaturePad"/>
                                  </div>

                                  <div>
                                    <a-space>
                                      <a-button @click="save">Save</a-button>
                                      <a-button @click="undo">Undo</a-button>
                                    </a-space>

                                  </div>
                                </div>
                                <div v-else>
                                  <p>Current signature</p>
                                  <a-card class="hellocard">
                                    <img :src="CurrentProject.clientsign.signature" style="width: 50%"/>
                                  </a-card>

                                </div>
                              </div>
                              <div v-else>
                                <div v-if="CurrentProject.devsign===''">
                                  <div class="signaturecard">
                                    <p>Insert signature here and save when completed</p>
                                    <VueSignaturePad class="sign" v-model="signaturedata" ref="signaturePad"/>
                                  </div>

                                  <div>
                                    <a-space>
                                      <a-button @click="save">Save</a-button>
                                      <a-button @click="undo">Undo</a-button>
                                    </a-space>

                                  </div>
                                </div>
                                <div v-else>
                                  <p>Current signature</p>
                                  <a-card class="hellocard">
                                    <img :src="CurrentProject.devsign.signature" style="width: 50%;"/>
                                  </a-card>

                                </div>

                              </div>
                            </div>


                            <div>
                              <p style="font-family: sofia_probold">If satisfied with the contract please print a copy
                                for yourself and then (Exit Contract Meeting)</p>
                              <p style="font-family: sofia_prolight;color: red" v-if="Signed">Button will activate when
                                both parties have signed</p>
                              <a-space>
                                <a-button type="primary" :disabled="Signed" @click="printDiv('contract')">Print
                                  contract
                                </a-button>

                                <a-button style="background-color: #52c41a;color: white" @click="Done">Exit Contract
                                  meeting
                                </a-button>
                              </a-space>

                            </div>


                          </div>

                        </a-col>
                      </a-row>


                    </div>

                    <div style="text-align: center">
                      <div class="steps-action" style="margin: 2% auto">
                        <div v-if="loading">
                          <a-spin/>

                        </div>
                        <div v-else>
                          <a-button v-if="CurrentProject.current < steps.length - 1" type="primary" @click="next">
                            Next
                          </a-button>
                          <span v-if="CurrentProject.current == steps.length - 1">
                            <a-button type="primary" :disabled="Signed"
                                      @click="printDiv('contract')">Print contract</a-button>


                          </span>

                          <a-button v-if="CurrentProject.current > 0" style="margin-left: 8px" @click="prev">
                            Previous
                          </a-button>
                        </div>

                      </div>
                    </div>


                  </div>

                </div>

              </div>
            </a-col>

          </a-row>


        </div>
      </a-layout-content>
    </a-layout>
  </a-layout>


</template>

<script>


function makeid(length) {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

class Meeting_data {
  constructor(meeting_id, features, project, client, developer, clientsign, devsign, current, projectype, tags, selectedTags) {
    this.meeting_id = meeting_id;
    this.features = features
    this.project = project
    this.clientsign = clientsign
    this.devsign = devsign
    this.client = client
    this.developer = developer
    this.current = current
    this.projectype = projectype
    this.tags = tags
    this.selectedTags = selectedTags


  }
}

import io from "socket.io-client";
import VueSimplemde from "vue-simplemde";
import markdown from "vue-markdown";
import Project from '@/services/Projects'
import 'simplemde/dist/simplemde.min.css';
import moment from 'moment';
import User from "@/services/UsersService";
import SmallSider from "@/components/client/layout/ClientSider";
import DeveloperSmall from "@/components/developer/layout/DevSider";
import {hideAt, showAt} from 'vue-breakpoints'

var socket = io.connect(process.env.VUE_APP_SOCKET);


export default {
  name: "meeting",
  components: {
    // VueJitsiMeet: JitsiMeet,
    SmallSider, VueSimplemde, markdown, DeveloperSmall, hideAt, showAt
  },
  data() {
    return {
      gutter: 16,
      bottom: 60,
      sketch: false,
      contract: false,
      username: null,
      ready: false,
      info: [],
      connections: 0,
      meeting_id: '',
      meeting_data: [],
      current: 0,
      steps: [
        {
          title: 'Project details ',

        },
        {
          title: 'Features',

        },
        {
          title: 'Time',

        },
        {
          title: 'Budget',

        },

        {
          title: 'Techonologies ',

        },
        {
          title: 'Codeln role',

        },
        {
          title: 'Contract overview',

        },
      ],
      usertype: '',
      new_time: 0,
      inputVisible: false,
      inputValue: '',
      stories: [],
      features: [],
      project: null,
      featureserror: false,
      show: false,
      featuretitle: '',
      featureedit: false,
      featureindex: '',
      projecttypetags: [],
      selectedTags: [],
      tags: [],
      projectype: null,
      time: '',
      budget: 0,
      designbudget: 0,

      amount: 100,
      paystack_amount: 0,
      currency: "USD",
      teamcompostion: '',
      one: false,
      both: false,
      step1errors: [],
      compositionerror: false,
      notoolserror: false,
      featuretitleerror: false,
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
      signaturedata: '',
      featuremodal: false


    };
  },

  computed: {
    jitsiOptions() {
      return {
        roomName: makeid(8),
        noSSL: false,


        configOverwrite: {
          enableNoisyMicDetection: false
        },
        interfaceConfigOverwrite: {
          SHOW_JITSI_WATERMARK: false,
          SHOW_WATERMARK_FOR_GUESTS: false,
          SHOW_CHROME_EXTENSION_BANNER: false
        },
        width: '100%',
        height: '100%',
        onload: this.onIFrameLoad,
        videoConferenceJoined: this.onIFrameLoad(),
        collapsed: true,
        sketch: false,
        contract: false,
        newMessage: null,
        messages: [],
        typing: false,
        username: null,
        ready: false,
        info: [],
        connections: 0,
        meeting_id: '',
        meeting_data: [],
      };
    },


    NewBudget() {
      let total_budget = 0
      this.CurrentProject.features.forEach((feature) => {
        total_budget += Number(feature.amount)
      })
      return total_budget
    },
    Toolscombine() {
      let tools = []
      tools = this.CurrentProject.tags.concat(this.CurrentProject.selectedTags).join()


      return tools
    },
    Projecttools() {
      let tools = []
      tools = this.CurrentProject.tags.concat(this.CurrentProject.selectedTags)


      return tools
    },
    Signed() {
      let signed = true
      if (this.CurrentProject.devsign && this.CurrentProject.clientsign) {
        signed = false
      }
      return signed
    },
    CurrentProject() {


      let currentmeeting = {}
      this.meeting_data.forEach(meeting => {
        if (meeting.meeting_id === this.meeting_id) {
          currentmeeting = meeting
        }
      })
      return currentmeeting
    },
    Date() {
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


  async mounted() {
    this.usertype = this.$store.state.user_object.user_type
    this.currentProject()
    this.date = this.Date;


    this.ready = true;


  },
  created() {
    window.onbeforeunload = () => {
      socket.emit('leave', this.username);
    }

    socket.on('project-data', (data) => {

      this.meeting_data = data

    });

    socket.on('joined_meeting', (data) => {

      this.meeting_data = data

    });

    socket.on('leave', (data) => {
      this.info.push({
        username: data,
        type: 'left'
      });

      setTimeout(() => {
        this.info = [];
      }, 5000);
    });

    socket.on('connections', (data) => {
      this.connections = data;
    });
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


                this.selectedTags = []
                let time = this.project.timeline.split(" ")
                this.project.time = Number(time[0])

                this.tags = []
                if (this.project.sign_date === null) {
                  this.project.sign_date = this.Date;

                }


                if (this.project.tools) {
                  this.projectype = this.project.project_type
                  this.selectprojectype(this.projectype)
                  let tools = this.project.tools.split(',')

                  this.projecttypetags.forEach(tag => {
                    if (tools.includes(tag)) {

                      this.selectedTags.push(tag)
                      const index = tools.indexOf(tag);
                      if (index > -1) {
                        tools.splice(index, 1);
                      }
                      this.tags = tools

                    }
                  })
                }
                if (this.project.team_size === 'single_dev') {
                  this.teampick(1)

                } else if (this.project.team_size === 'team') {
                  this.teampick(2)

                }
                this.fetchParties()
                this.getfeatures()


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
                this.featureslist = []


                this.featureslist = resp.data
                if (this.featureslist.length > 0) {
                  this.featureslist.forEach(feature => {
                    this.getStories(feature)


                  })

                }else {
                  this.meetingData()
                }


              }
          )

    },
    getStories(feature) {
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }
      this.storylist = []
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
            this.meetingData()


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
                  this.signaturedata = this.clientsign.signature

                }
            ).catch(error => {
              if (error) {
                this.clientsign = ''
                this.signaturedata = ''

                console.log(error);
              }
            });
            User.currentuser(this.project.assigned_to, auth).then(
                resp => {
                  this.developer = resp.data
                  Project.fetchsignature(this.developer.id, auth).then(
                      resp => {
                        this.devsign = resp.data
                        this.signaturedata = this.devsign.signature

                      }
                  ).catch(() => {
                    this.devsign = ''

                  })
                  this.meetingData()

                }
            )

          }
      )
    },
    meetingData() {
      this.meeting_id = this.$route.params.projectSlug

      this.ready = true;

      let meeting_id = this.meeting_id

      let features = this.features
      let project = this.project

      let client = this.client
      let developer = this.developer
      let clientsign = this.clientsign
      let devsign = this.devsign
      let current = this.current
      let projectype = this.projectype
      let tags = this.tags
      let selectedTags = this.selectedTags
      let projectmeeting = new Meeting_data(meeting_id, features, project, client, developer, clientsign, devsign, current, projectype, tags, selectedTags);
      this.meeting_data.push(projectmeeting)
      socket.emit('joined_meeting', this.meeting_data)


    },

    addstory() {
      this.stories.push({
        story: '',

      })

    },

    deleteStory(counter) {
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }


      if (this.stories[counter].id) {
        Project.deletestories(this.stories[counter].id, auth)
            .then(() => {

                }
            )
        this.stories.splice(counter, 1);

      } else {
        this.stories.splice(counter, 1);
      }
      this.CurrentProject.features = []
      this.features = []
      this.getfeatures()


    },
    new_edit_feature() {
      this.featuremodal = true
    },
    addFeature() {

      if (this.featuretitle === '') {
        this.featuretitleerror = true
      }

      if (this.featuretitleerror === false) {
        const auth = {
          headers: {Authorization: 'JWT ' + this.$store.state.token}

        }
        let feature = {
          name: this.featuretitle,
          project: this.project.id,
          slug: this.slugifytitle(this.featuretitle),
          stage: 'backlog'
        }

        Project.createfeature(feature, auth)
            .then(
                resp => {
                  if (this.stories.length > 0) {
                    let stories = []
                    this.stories.forEach(story => {

                      Project.createstories({feature: resp.data.id, user_story: story.user_story}, auth)
                          .then(
                              resp => {
                                stories.push(resp.data)
                              }
                          )
                      this.featuretitle = ''
                      this.stories = []

                      this.featureserror = false


                    })


                  } else {
                    this.featuretitle = ''
                    this.stories = []
                    this.featureserror = false


                  }
                  this.featuremodal = false
                  this.CurrentProject.features = []
                  this.features = []
                  this.getfeatures()


                }
            )


      }


    },

    editfeature(feature) {
      this.featuremodal = true
      this.currentfeature = feature
      this.featureedit = true
      this.featureindex = this.CurrentProject.features.indexOf(feature)
      this.featuretitle = this.CurrentProject.features[this.featureindex].title
      this.stories = this.CurrentProject.features[this.featureindex].storylist
      this.feature_id = this.CurrentProject.features[this.featureindex].id


    },

    editfeaturesubmit() {
      if (this.featuretitle === '') {
        this.featuretitleerror = true
      }
      if (this.featuretitleerror === false) {
        const auth = {
          headers: {Authorization: 'JWT ' + this.$store.state.token}

        }
        this.features[this.featureindex] = {'title': this.featuretitle, 'storylist': this.stories}
        Project.updatefeature(this.feature_id, {
          name: this.featuretitle,
          slug: this.slugifytitle(this.featuretitle),
          stage: 'backlog'
        }, auth)
            .then(() => {
                  if (this.stories.length > 0) {
                    console.log(this.stories)
                    this.stories.forEach(story => {
                      if (story.id) {
                        Project.updatestories(story.id, {user_story: story.user_story}, auth)
                            .then(

                            )

                      } else {
                        Project.createstories({feature: this.feature_id, user_story: story.user_story}, auth)
                            .then()

                      }

                    })

                  }
                  this.featureedit = false
                  this.featuremodal = false
                  this.featuretitle = ''
                  this.stories = []
                  this.CurrentProject.features = []
                  this.features = []
                  this.getfeatures()


                }
            )

      }


    },

    featuredelete() {

      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }

      let current = this.CurrentProject.features[this.featureindex]
      if (current.storylist.length > 0) {
        current.storylist.forEach(story => {
          if (story.id) {
            Project.deletestories(story.id, auth)
                .then(() => {

                    }
                )

          }


        })

      }
      Project.deletefeature(current.id, auth)
          .then(() => {


              }
          )
      this.featureedit = false
      this.featuremodal = false
      this.currentfeature = null


      this.featuretitle = ''
      this.stories = []
      this.feature_id = null
      this.CurrentProject.features = []
      this.features = []
      this.getfeatures()


    },

    // for tags provided by codeln

    handleChange(tag, checked) {
      const {selectedTags} = this;
      const nextSelectedTags = checked
          ? [...selectedTags, tag]
          : selectedTags.filter(t => t !== tag);

      this.selectedTags = nextSelectedTags;
      this.notoolserror = false
      this.CurrentProject.selectedTags = this.selectedTags
      this.sendProjectdata()
      this.selectedTags = this.CurrentProject.selectedTags
    },

    handleClose(removedTag) {
      const tags = this.CurrentProject.tags.filter(tag => tag !== removedTag);

      this.CurrentProject.tags = tags;

      this.sendProjectdata()

    },

    showInput() {
      this.inputVisible = true;
      this.$nextTick(function () {
        this.$refs.input.focus();
      });
    },

    // for tags inputed by client

    handleInputChange(e) {
      this.inputValue = e.target.value;
    },

    handleInputConfirm() {
      const inputValue = this.inputValue;
      let tags = this.CurrentProject.tags;
      if (inputValue && tags.indexOf(inputValue) === -1) {
        tags = [...tags, inputValue];
      }

      Object.assign(this, {
        tags,
        inputVisible: false,
        inputValue: '',
      });
      this.notoolserror = false
      this.CurrentProject.tags = this.tags
      this.sendProjectdata()

    },

    selectprojectype(value) {
      this.projectype = value

      let android = process.env.VUE_APP_ANDROID

      let ios = process.env.VUE_APP_IOS
      let website = process.env.VUE_APP_WEBSITE
      let desktop = process.env.VUE_APP_DESKTOP


      if (value === 'ios-App') {
        this.projecttypetags = ios.split(',')

      } else if (value === 'website') {
        this.projecttypetags = website.split(',')

      } else if (value === 'desktop-App') {
        this.projecttypetags = desktop.split(',')

      } else if (value === 'android-App') {
        this.projecttypetags = android.split(',')
      }
      this.CurrentProject.projectype = this.projectype
      this.sendProjectdata()

    },

    teampick(value) {
      if (value === 1) {
        this.one = true
        this.both = false
        this.teamcompostion = 'one'

      } else {
        this.one = false
        this.both = true
        this.teamcompostion = 'both'
      }
      if (this.teamcompostion !== '') {
        this.compositionerror = false
      }

    },


    featuretitlechange() {
      if (this.featuretitle !== '') {
        this.featuretitleerror = false

      }

    },

    Budgetchanges() {

      if (this.step4errors.includes('budget')) {
        if (this.project.budget !== '' || this.project.budget != null) {
          let index = this.step4errors.indexOf('budget')
          if (index > -1) {
            this.step4errors.splice(index, 1);
          }
        }
      } else {
        if (this.project.budget === '' || this.project.budget === null) {
          this.step4errors.push('budget')
        }

      }


    },

    Designbudgetchanges() {

      if (this.step4errors.includes('designbudget')) {
        if (this.project.designbudget !== '' || this.project.designbudget != null) {
          let index = this.step4errors.indexOf('designbudget')
          if (index > -1) {
            this.step4errors.splice(index, 1);
          }
        }
      } else {
        if (this.project.designbudget === '' || this.project.designbudget === null) {
          this.step4errors.push('designbudget')
        }

      }


    },

    next() {
      let self = this
      if (this.CurrentProject.current === 0) {
        this.step1errors = []
        if (this.CurrentProject.project.title === '') {
          this.step1errors.push('title')

        }
        if (this.CurrentProject.project.description === '') {
          this.step1errors.push('description')

        }


        if (this.step1errors.length === 0) {
          self.stepsaves()


        }


      } else if (this.CurrentProject.current === 1) {

        if (this.CurrentProject.features.length === 0) {
          this.featureserror = true
        }
        if (this.featureserror === false) {

          this.CurrentProject.current++;
          this.sendProjectdata()
        }
      } else if (this.CurrentProject.current === 2) {
        this.CurrentProject.current++;
        this.sendProjectdata()


      } else if (this.CurrentProject.current === 3) {

        this.CurrentProject.current++;
        this.sendProjectdata()

      } else if (this.CurrentProject.current === 4) {


        self.stepsaves()


      } else if (this.CurrentProject.current === 5) {


        this.CurrentProject.current++
        this.sendProjectdata()

      }


    },

    prev() {
      this.CurrentProject.current--;
      this.sendProjectdata()
    },

    Done() {
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }
      this.CurrentProject.project.stage = 'developement'
      if (this.CurrentProject.project.sign_date === null) {
        this.CurrentProject.project.sign_date = this.Date;

      }

      Project.updateproject(this.CurrentProject.project.id, this.CurrentProject.project, auth)
          .then(() => {

                if (this.$store.state.user_object.user_type === 'developer') {
                  this.$router.push('/DeveloperProjects')
                  this.$store.dispatch('setProjectedit', null)

                } else {
                  this.$router.push('/Myprojects')
                  this.$store.dispatch('setProjectedit', null)
                }

              }
          )

    },

    stepsaves() {
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }
      this.loading = true
      if (this.CurrentProject.current === 0) {
        Project.updateproject(this.CurrentProject.project.id, this.CurrentProject.project, auth)
            .then(resp => {
                  this.project = resp.data
                  this.current = 1
                  let self = this
                  this.CurrentProject.current++
                  this.loading = false


                  self.currentProject()


                }
            )

      } else if (this.CurrentProject.current === 4) {
        this.CurrentProject.project.tools = this.Toolscombine
        this.CurrentProject.project.project_type = this.projectype


        Project.updateproject(this.CurrentProject.project.id, this.CurrentProject.project, auth)
            .then(resp => {
                  this.project = resp.data
                  this.CurrentProject.current++
                  this.sendProjectdata()

                  this.loading = false

                }
            )

      }


    },


    onIFrameLoad() {
      ///
    },
    afterVisibleChange(val) {
      console.log('visible', val);
    },
    saveBudget(feature) {
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }
      Project.updatefeature(feature.id, {
        amount: feature.amount
      }, auth).then(
          this.sendProjectdata()
      )

    },
    saveTime(feature) {
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }
      Project.updatefeature(feature.id, {
        due_date: feature.due_date
      }, auth).then(
          this.sendProjectdata()
      )

    },


    sendProjectdata() {

      socket.emit('project-data', this.meeting_data);

    },


    addUser() {
      this.ready = true;
      socket.emit('joined', this.username)
    },
    printDiv(divName) {
      var printContents = document.getElementById(divName).innerHTML;
      var originalContents = document.body.innerHTML;

      document.body.innerHTML = printContents;

      window.print();

      document.body.innerHTML = originalContents;


    },

    undo() {
      this.$refs.signaturePad.undoSignature();
    },
    save() {


      const {data} = this.$refs.signaturePad.saveSignature();

      this.signaturedata = data

      if (this.$store.state.user_object.user_type === 'recruiter') {
        if (this.clientsign === '') {
          this.saveSignature()
        } else {
          this.updateSignature(this.clientsign.id)

        }
      } else {
        if (this.devsign === '') {
          this.saveSignature()
        } else {
          this.updateSignature(this.devsign.id)

        }

      }


    },
    saveSignature() {
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }
      let signatureobj = {
        'signature': this.signaturedata,
        'owner': this.$store.state.user.pk
      }
      Project.createsignature(signatureobj, auth).then(
          resp => {
            if (this.$store.state.user_object.user_type === 'recruiter') {
              this.CurrentProject.clientsign = resp.data
            } else {
              this.CurrentProject.devsign = resp.data
            }
            this.sendProjectdata()

          }
      )

    },
    updateSignature(id) {
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }
      Project.updatesignature(id, {signature: this.signaturedata}, auth).then(
          resp => {
            if (this.$store.state.user_object.user_type === 'recruiter') {
              this.CurrentProject.clientsign = resp.data
            } else {
              this.CurrentProject.devsign = resp.data
            }
            this.sendProjectdata()
          }
      )

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

.stepcard {
  padding: 2%;
  box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075) !important;
  background: white;
  border-radius: 0;

}

.timelinecard {
  padding: 3%;
  box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075) !important;
  background: white;
  border-radius: 0;

}

.addfeature {
  padding: 2%;
  box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075) !important;
  background: white;
  border-radius: 0;

}

.featurelist {
  padding: 2%;
  box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075) !important;
  background: white;
  border-radius: 0;

}


.steps-action {
  margin-top: 24px;
}

.signaturecard {
  padding: 2%;
  box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075) !important;
  background: white;
  border-radius: 0;
}

.sign {
  border-radius: 0px;
  background: #ffffff;
  box-shadow: inset 20px 20px 60px #d9d9d9,
  inset -20px -20px 60px #ffffff;
}


</style>
