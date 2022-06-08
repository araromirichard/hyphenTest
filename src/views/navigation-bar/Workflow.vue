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
            @keyup.enter="startWorkflow"
            flat
            class="m-0"
            style="background: #f8f7f4; border-radius: 8px"
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
              <v-card-actions class="d-flex justify-end mt-2 mr-5">
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
                <v-tabs v-model="tabIndex" slider-size="4">
                  <v-tab>WORKFLOWS</v-tab>
                  <v-tab>TEMPLATES</v-tab>
                  <v-tab>ACTIONS</v-tab>
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
                  <v-tab-item>
                    <div class="workflows">
                      <div class="template-banner">
                        <span class="template-banner__header"
                          >Template workflows</span
                        >

                        <div class="d-flex template-banner__desc">
                          <v-icon color="primary">mdi-vector-link</v-icon>
                          <span
                            >Use templates to get started quickly with
                            workflows. Take advantage of usecases we have
                            collected from experts</span
                          >
                        </div>

                        <v-btn color="primary" @click="tabIndex = 1" outlined>Go to Templates</v-btn>
                      </div>
                      <div class="saved-workflow">
                        <span class="saved-workflow__header"
                          >Saved workflows</span
                        >
                        <div class="saved-workflow__container">
                          <div class="saved-workflow__container__workflow" v-for="(workflow,index) in workflows" :key="index">
                            <span class="titlex"
                              >{{workflow.workflow_title}}</span
                            >
                            <span class="trigger">{{workflow.source}}</span>

                            <div
                              class="d-flex justify-space-between align-center"
                            >
                              <span class="runs">0</span>
                              <v-switch disabled v-model="workflow.is_active"></v-switch>
                            </div>
                            <v-divider></v-divider>
                            <div class="footerx">
                              <div>
                                <span class="footerx__icon--published"></span>
                                <span class="footerx__state">created {{workflow.created_at}}</span>
                              </div>
                              <div>
                                <v-btn icon small color="#8F96A1"><v-icon>mdi-pencil-outline</v-icon></v-btn>
                                 <v-btn icon small color="#8F96A1"><v-icon>mdi-format-list-bulleted</v-icon></v-btn>
                                  <v-btn icon small color="#8F96A1"><v-icon>mdi-trash-can-outline</v-icon></v-btn>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </v-tab-item>
                </v-tabs>
              </template>
            </v-card>
          </template>
        </v-card>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      dialog: false,
      Rules: true,
      isClicked: true,
      search: "",
      name: "",
      workflows: [],
      isLoadingWorkflows: false,
      tabIndex: 0,
    };
  },
  mounted(){
    this.getWorkflows();
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

      async getWorkflows() {
      try {
        this.isLoadingWorkflows = true;
        const { data } = await this.$store.dispatch("workflow/getAllWorkflows");

        this.workflows = data;
      } catch (err) {
        console.log(JSON.stringify(err, null, 2));
      } finally {
        this.isLoadingWorkflows = false;
      }
    },
    // pushRoute() {
    //   $router.push("/workflow/rules-edit");
    // },
  },
};
</script>

<style lang="scss" scoped>
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

.workflows {
  .template-banner {
    background-color: #f4f5f6;
    padding: 60px 30px;

    &__header {
      font-weight: bold;
      font-size: 23px;
      color: var(--v-primary-base);
    }

    &__desc {
      gap: 20px;
      margin: 30px 0;
      color: var(--v-primary-base);
      font-weight: 400;
      line-height: 28px;
    }
  }

  .saved-workflow {
    background-color: #fff;
    padding: 30px;

    &__header {
      font-weight: bold;
      font-size: 23px;
      color: var(--v-primary-base);
    }

    &__container {
      display: flex;
      flex-wrap: wrap; 
      gap: 20px;
      margin-top: 30px;

      &__workflow {
        display: inline-block;
        border: 1px solid #d9dee1;
        border-radius: 8px;
        width: 320px;
        box-sizing: border-box;
        padding: 20px;
        cursor: pointer;

        .titlex {
          font-weight: 600;
          font-size: 15px;
          color: var(--v-primary-base);
          display: block;
          margin-bottom: 10px;
           text-transform: capitalize;
        }

        .trigger {
          background: #e9ebf6;
          border-radius: 10px;
          padding: 0px 12px;
          color: var(--v-primary-base);
          display: inline-block;
          margin-bottom: 20px;
          text-transform: capitalize;
        }

        .runs {
          background-color: #646a6f;
          padding: 8px 10px;
          color: #fff;
          border-radius: 4px;
          display: inline-block;
          margin: 20px 0px;
        }

        .footerx {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 20px;
          color: var(--v-primary-base);

          &__icon {
            &--draft {
              height: 10px;
              width: 10px;
              border-radius: 100%;
              margin-right: 5px;
              display: inline-block;
              background-color: #e3aa1c;
            }

            &--published {
              height: 10px;
              width: 10px;
              border-radius: 100%;
              margin-right: 5px;
              display: inline-block;
              background-color: #23d2aa;
            }
          }

          &__state {
            color: #8f96a1;
          }
        }
      }
    }
  }
}
</style>
