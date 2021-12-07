<template>
  <div>
    <template>
      <v-item-group>
        <v-container>
          <v-row>
            <v-col v-for="(card, i) in cards" :key="i" cols="12" md="4">
              <v-item v-slot:default="{ active, toggle }">
                <v-card
                  @click="toggle"
                  :elevation="active ? 4 : 0"
                  class="
                    d-flex
                    align-text-center
                    flex-column
                    rounded
                    elevation-0
                  "
                  tile
                  style="
                    width: auto;
                    height: 200px;
                    background: #ffffff;
                    border: 1px solid rgba(49, 27, 146, 0.2);
                    box-sizing: border-box;
                    border-radius: 8px;
                  "
                >
                  <v-card-title
                    class="mx-2 mt-4 text-break cardTitle"
                    style="
                    "
                    >{{ card.title }}</v-card-title
                  >
                  <div class="d-flex my-4">
                    <div>
                      <v-chip label small dark color="#636b70" class="mx-5">{{
                        card.numberProcessed
                      }}</v-chip>
                      <h5 class="mx-5 text--disabled">Processed</h5>
                    </div>
                    <v-spacer></v-spacer>
                    <v-switch
                      hide-details="true"
                      dense
                      :value="card.switchValue"
                      v-model="switch1"
                      color="#16BE98"
                    ></v-switch>
                  </div>
                  <div
                    class="d-flex"
                    style="
                      margin-top: 30px;
                      width: 100%;
                      height: 38px;
                      position: absolute;
                      bottom: 0;
                      border-top: 1px solid rgba(49, 27, 146, 0.2);
                      box-sizing: border-box;
                    "
                  >
                    <p
                      class="ml-4"
                      style="
                        margin-top: 11px;
                        font-family: Inter;
                        font-style: normal;
                        font-weight: normal;
                        font-size: 12px;
                        line-height: 18px;
                        letter-spacing: 0.45px;
                        color: #301f78;
                        mix-blend-mode: normal;
                        opacity: 0.5;
                      "
                    >
                      Created {{ createdAt }}
                    </p>
                    <v-spacer></v-spacer>
                    <v-btn
                      class="px-0 mx-0"
                      style="margin-top: 4px"
                      icon
                      id="no-background-hover"
                      @click="
                        $router.push({ params: { id: i }, name: icon.path })
                      "
                      v-for="(icon, index) in icons"
                      :key="icon.title"
                    >
                      <v-icon
                        v-bind:class="{ last: index === icons.length - 1 }"
                        color="#7F919B"
                        small
                        class="pl-1"
                        to="icon.path"
                      >
                        {{ icon.title }}
                      </v-icon>
                    </v-btn>
                  </div>
                </v-card>
              </v-item>
            </v-col>
          </v-row>
        </v-container>
      </v-item-group>
    </template>
  </div>
</template>

<script>
export default {
  name: "SingleRule",
  props: {
    createdAt: {
      type: String,
      required: true,
    },
  },
  components: {
    //SimpleLineIcons,
  },
  data() {
    return {
      switch1: [],

      icons: [
        {
          title: "mdi-pencil-outline",
          path: "WorkflowRulesEdit",
        },
        { title: "mdi-content-copy", path: "#" },
        { title: "mdi-delete", path: "#" },
      ],
      cards: [
        {
          title: "Approval by MD & Snr. Managers....",
          numberProcessed: "23",
          switchValue: 1,
        },
        {
          title: "Dynamic discount by location & MOQ",
          numberProcessed: "151",
          switchValue: 2,
        },
        {
          title: "Loan Pre-Qualification, low income",
          numberProcessed: "203",
          switchValue: 3,
        },
      ],
    };
  },
};
</script>

<style scoped>
.v-icon.v-icon::after {
  height: inherit;
}
.subtitle {
  padding-left: 44px;
  padding-top: 12px;
  padding-bottom: 0px;
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 14px;
  color: #7f919b;
}
.text {
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 14px;
  color: #596a73;
}
.textOne {
  padding-left: 44px;
  padding-bottom: 10px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 14px;
  color: #596a73;
}

.last {
  margin-right: 20px;
}
#no-background-hover::before {
  background-color: transparent !important;
}

.v-input--selection-controls {
  margin-top: 6px;
  padding-top: 0px;
}
.cardTitle {
  font-family: "Inter";
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
  color: rgb(89, 106, 115);
  text-align: left;
}
</style>
