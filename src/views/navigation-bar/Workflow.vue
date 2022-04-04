<template>
  <v-container class="pa-0">
    <div>
      <v-row class="mx-14 primary--text">
        <span
          style="
            margin-top: 35px;
            font-family: Inter;
            font-style: normal;
            font-weight: bold;
            line-height: 39px;
          "
          :style="{
            fontSize: `${$vuetify.breakpoint.mdAndDown ? '24px' : '32px'}`,
            marginTop: `${$vuetify.breakpoint.mdAndDown ? '58px' : '48px'}`,
          }"
          >Workflow</span
        >
        <v-spacer></v-spacer>
        <v-dialog
          elevation="0"
          v-model="dialog"
          max-width="590"
          overlay-color="#301F78"
          overlay-opacity="0.282397"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              dark
              v-bind="attrs"
              v-on="on"
              class="text-capitalize"
              style="
                width: 209px;
                height: 54px;
                margin-top: 30px;
                background: var(--v-primary-base);
                box-shadow: 0px 12px 22px rgba(0, 0, 0, 0.24);
                border-radius: 4px;
              "
              :style="{
                width: `${$vuetify.breakpoint.mdAndDown ? '150px' : '209px'}`,
                marginTop: `${$vuetify.breakpoint.mdAndDown ? '58px' : '48px'}`,
              }"
            >
              <img :src="require('@/assets/pbot_icons/workflow_btn.svg')" />
              <span
                style="
                  padding-left: 8px;
                  font-family: Inter;
                  font-style: normal;
                  font-weight: 500;
                  font-size: 14px;
                  line-height: 17px;
                  text-align: center;
                  letter-spacing: 0.636364px;
                  color: #ffffff;
                "
                :style="{
                  fontSize: `${
                    $vuetify.breakpoint.mdAndDown ? '12px' : '14px'
                  }`,
                }"
              >
                New Workflow
              </span>
            </v-btn>
          </template>
          <v-card
            max-width=""
            height="300"
            flat
            class="m-0"
            style="background: #fefcf8; border-radius: 8px"
          >
            <v-card-title
              class="mb-8"
              style="background: #ffffff; border-radius: 8px 8px 0px 0px"
            >
              <span
                style="
                  font-family: Inter;
                  font-style: normal;
                  font-weight: 600;
                  font-size: 16px;
                  line-height: 19px;
                  color: #301f78;
                "
                >New Workflow</span
              >
              <v-spacer></v-spacer>
              <v-icon
                tag="button"
                @click="closeWorkflowDialog"
                class="text-bolder"
                color="#596A73"
              >
                mdi-close
              </v-icon>
            </v-card-title>
            <template class="d-flex">
              <span
                style="
                  margin-top: 30px;
                  margin-left: 37px;
                  font-family: Inter;
                  font-style: normal;
                  font-weight: normal;
                  font-size: 12px;
                  line-height: 18px;
                  letter-spacing: 0.45px;
                  color: #7f919b;
                "
                >Workflow Name</span
              >
              <v-text-field
                style="
                  margin-left: 37px;
                  margin-right: 31px;
                  margin-bottom: 30px;
                  background: #ffffff;
                  border: 1px solid rgba(212, 216, 223, 0.377431);
                  border-radius: 3px;
                "
                dense
                :hide-details="true"
                label="Workflow Name"
                single-line
                outlined
                color="primary"
                v-model="name"
              ></v-text-field>
            </template>
            <template class="mt-6">
              <v-card-actions class="d-flex justify-end mt-2 mr-9">
                <v-btn
                  link
                  @click="startWorkflow"
                  dark
                  width="121"
                  height="45"
                  color="primary"
                  class="text-capitalize"
                  style="
                    box-shadow: 0px 12px 22px rgba(0, 0, 0, 0.24);
                    border-radius: 4px;
                  "
                >
                  <v-icon>mdi-chevron-right</v-icon>
                  <span>Next</span>
                </v-btn>
              </v-card-actions>
            </template>
          </v-card>
        </v-dialog>
      </v-row>
      <v-row class="mx-14">
        <v-card
          class="mb-16"
          width="100%"
          min-height="990"
          elevation="4"
          style="margin-top: 40px"
        >
          <template v-if="$vuetify.breakpoint.mdAndUp">
            <v-card width="100%" height="46">
              <template>
                <v-tabs slider-size="4">
                  <v-tab>RULES</v-tab>
                  <v-tab>ACTIONS</v-tab>
                  <v-tab>STAKEHOLDERS</v-tab>
                  <v-tab>LOG</v-tab>
                  <v-spacer></v-spacer>
                  <v-btn
                    v-if="isClicked"
                    @click="toggleSearch"
                    plain
                    class="text-black pt-4"
                    style="
                      font-family: Inter;
                      font-style: normal;
                      font-weight: 500;
                      font-size: 12px;
                      line-height: 20px;
                      letter-spacing: 0.55px;
                      text-transform: uppercase;
                      color: #7f919b;
                    "
                  >
                    search
                    <v-icon small right class="pr-1"> mdi-magnify </v-icon>
                  </v-btn>

                  <v-expand-x-transition v-else>
                    <v-text-field
                      v-model="search"
                      @blur="isClicked = true && !search"
                      class="seacrh-field mt-2 mr-2"
                      dense
                      clearable
                      autofocus
                      hide-details="true"
                      persistent-placeholder
                      placeholder="Search"
                      append-icon="mdi-magnify"
                      filled
                    >
                    </v-text-field>
                  </v-expand-x-transition>
                </v-tabs>
              </template>
            </v-card>
          </template>
          <div
            v-if="$vuetify.breakpoint.mdAndUp"
            style="
              width: 100%;
              height: 53px;
              background: rgba(127, 145, 155, 0.052607);
            "
          >
            <h5
              v-if="Rules"
              class="mr-5"
              style="
                padding-left: 40px;
                padding-top: 21px;
                font-family: Inter;
                font-style: normal;
                font-weight: normal;
                font-size: 16px;
                line-height: 24px;
                color: #596a73;
              "
            >
              Start with a template or Make your own rules below
            </h5>
          </div>
          <!-- -----------------------expansion-panel begins ------------------------------->
          <ExpansionPanel style="margin-bottom: 35px" />
          <!-- -----------------------expansion-panel ends ------------------------------->

          <span
            class="noWorkFlowTitle pl-3 px-md-14"
            style="font-weight: 700; font-size: 24px"
          >
            {{ Rules ? `Your rules` : `Your workflow(s)` }}
          </span>
          <span class="pl-3 px-md-14 mt-4">
            Build your custom finance process rules
          </span>
          <v-card
            v-if="!Rules"
            elevation="0"
            class="mx-auto"
            style="
              width: 96%;
              height: 361px;
              margin-top: 27px;
              background: #ffffff;
              border: 1px solid rgba(89, 106, 115, 0.087877);
              box-sizing: border-box;
              border-radius: 8px;
            "
          >
            <v-row>
              <img
                style="margin-left: 50%; margin-top: 67px; margin-bottom: 16px"
                :src="require('@/assets/pbot_icons/noWorkflowArrow.svg')"
                alt=""
              />
            </v-row>
            <v-row class="mx-auto justify-center mt-4 mb-5">
              <v-card
                class="d-flex flex-row"
                elevation="0"
                style="
                  width: 414px;
                  height: 94px;
                  background: #ffffff;
                  border: 1px solid #fbf4e4;
                  box-sizing: border-box;
                  border-radius: 4px;
                "
              >
                <v-btn
                  color="#F9EED2"
                  fab
                  depressed
                  class="d-flex justify-center align-content-center"
                  style="
                    margin-top: 21px;
                    margin-left: 26px;
                    background-color: #f9eed2;
                  "
                >
                  <v-avatar
                    class="d-flex align-center mx-auto my-auto"
                    color="#F9EED2"
                    size="20"
                  >
                    <img :src="require('@/assets/info.svg')" alt="" />
                  </v-avatar>
                </v-btn>
                <v-card-text
                  style="
                    margin-top: 16px;
                    marging-left: 18px;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 12px;
                    line-height: 20px;
                    color: #596a73;
                  "
                >
                  Select any of the templates above to create a workflow or
                  click the button below
                </v-card-text>
              </v-card>
            </v-row>
            <v-row class="mx-auto justify-center mt-4">
              <v-btn
                dark
                width="121"
                height="45"
                style="
                  background: var(--v-primary-base);
                  box-shadow: 0px 12px 22px rgba(0, 0, 0, 0.24);
                  border-radius: 4px;
                "
              >
                <simple-line-icons
                  icon="arrow-right"
                  color="#FFFFFF"
                  style="
                    font-family: simple-line-icons;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 16px;
                    line-height: 16px;
                  "
                  no-svg
                />
                <span
                  class="text-capitalize pl-3"
                  style="
                    font-family: Inter;
                    font-style: normal;
                    font-weight: 500;
                    font-size: 14px;
                    line-height: 17px;
                    text-align: center;
                    letter-spacing: 0.636364px;
                    color: #ffffff;
                  "
                  >next</span
                >
              </v-btn>
            </v-row>
          </v-card>

          <template v-else>
            <SingleRule
              class="px-md-10 px-4"
              style="margin-left: 0px; margin-top: 16px"
              :createdAt="dateValue() | date"
            />
          </template>
        </v-card>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import ExpansionPanel from "../../includes/ExpansionPanel.vue";
import SingleRule from "../../includes/SingleRule.vue";
import SimpleLineIcons from "vue-simple-line";
import { mapActions } from "vuex";
export default {
  components: { ExpansionPanel, SimpleLineIcons, SingleRule },
  data() {
    return {
      dialog: false,
      Rules: true,
      isClicked: true,
      search: "",
      name: "",
    };
  },
  methods: {
    ...mapActions({ showToast: "ui/showToast" }),
    closeWorkflowDialog() {
      this.dialog = false;
    },
    dateValue() {
      return new Date();
    },
    toggleSearch() {
      this.isClicked = false;
    },

    startWorkflow() {
      if (this.name != "") {
        this.$router.push("/workflow/new?name=" + this.name);
      } else {
        this.showToast({
          sclass: "error",
          show: true,
          message: "Workflow name is required",
          timeout: 3000,
        });
      }
    },
    // pushRoute() {
    //   $router.push("/workflow/rules-edit");
    // },
  },
};
</script>

<style scoped>
.noWorkFlowTitle {
  display: block;
  margin-left: 0px;
  margin-top: 0px;
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;

  color: var(--v-primary-base);
}
.noWorkFlowText {
  margin-left: 0px;
  margin-top: 0px;
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #596a73;
}

.v-application .elevation-4 {
  box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 3%), 0px 6px 10px 0px rgb(0 0 0 / 3%),
    0px 1px 18px 0px rgb(0 0 0 / 3%) !important;
}
</style>
