<template>
<div>issues on this feature
  <a-row>
    <a-col span="8" style="padding: 1%">
      <div style="background-color:#F7F7F7;height: 40rem;padding: 3% ">
        <p style="font-family: sofia_prosemibold">Bug list</p>
        <div style="height:37rem;overflow: auto;">
          <draggable class="list-group" style="height: 36rem" :list="list1" group="tasks"
                     @change="log">
            <div
                class="list-group-item"
                v-for="(element) in list1"
                :key="element.name"
            >
              <a-card hoverable size="small" style="width: 80%;margin-bottom: 1rem" class="shadowsmall">


                <p style="font-family: sofia_prolight">{{ element.name }} </p>
                <span style="font-family: sofia_prolight">Assigned to:
                                        <a-tag color="blue">
                                         {{ element.assignedto }}
                                        </a-tag>

                                      </span>

              </a-card>


            </div>
          </draggable>
        </div>

      </div>
    </a-col>
    <a-col span="8" style="padding: 1%">
      <div style="background-color:#F7F7F7;height: 40rem;padding: 3% ">
        <p style="font-family: sofia_prosemibold">Fixing</p>
        <div style="height:37rem;overflow: auto;">
          <draggable class="list-group" style="height: 36rem" :list="list2" group="tasks"
                     @change="log">
            <div
                class="list-group-item"
                v-for="(element) in list2"
                :key="element.name"
            >
              <a-card hoverable size="small" style="width: 80%;margin-bottom: 1rem" class="shadowsmall">


                <p style="font-family: sofia_prolight">{{ element.name }} </p>
                <span style="font-family: sofia_prolight">Assigned to:
                                        <a-tag color="blue">
                                         {{ element.assignedto }}
                                        </a-tag>

                                      </span>

              </a-card>


            </div>
          </draggable>
        </div>

      </div>
    </a-col>
    <a-col span="8" style="padding: 1%">
      <div style="background-color:#F7F7F7;height: 40rem;padding: 3% ">
        <p style="font-family: sofia_prosemibold">Done</p>
        <div style="height:37rem;overflow: auto;">

          <draggable class="list-group" style="height: 36rem" :list="list3" group="tasks"
                     @change="log">
            <div
                class="list-group-item"
                v-for="(element) in list3"
                :key="element.name"
            >
              <a-card hoverable size="small" style="width: 80%;margin-bottom: 1rem" class="shadowsmall">


                <p style="font-family: sofia_prolight">{{ element.name }} </p>
                <span style="font-family: sofia_prolight">Assigned to:
                                        <a-tag color="blue">
                                         {{ element.assignedto }}
                                        </a-tag>

                                      </span>

              </a-card>


            </div>
          </draggable>
        </div>
      </div>
    </a-col>

  </a-row>
</div>
</template>

<script>
export default {
name: "issues"
}
</script>

<style scoped>

</style>
