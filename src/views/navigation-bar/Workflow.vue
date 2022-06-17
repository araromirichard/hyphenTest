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

                        <v-btn color="primary" @click="tabIndex = 1" outlined
                          >Go to Templates</v-btn
                        >
                      </div>
                      <div class="saved-workflow">
                        <span class="saved-workflow__header"
                          >Saved workflows</span
                        >

                        <div
                          v-if="errorLoadingWorkflow"
                          class="text-center"
                          style="padding: 100px"
                        >
                          <v-btn color="primary" outlined @click="getWorkflows"
                            ><v-icon>mdi-refresh</v-icon> Retry</v-btn
                          >
                        </div>

                        <div
                          v-if="isLoadingWorkflows"
                          class="saved-workflow__container"
                        >
                          <v-skeleton-loader
                            v-for="loader in 6"
                            :key="loader"
                            height="200px"
                            width="100%"
                            type="card"
                          />
                        </div>

                        <div v-else class="saved-workflow__container">
                          <div
                            class="saved-workflow__container__workflow"
                            v-for="(workflow, index) in workflows"
                            :key="index"
                          >
                            <span class="titlex">{{
                              workflow.workflow_title
                            }}</span>
                            <span class="trigger">{{ workflow.source }}</span>

                            <div
                              class="d-flex justify-space-between align-center"
                            >
                              <span class="runs">{{
                                Intl.NumberFormat().format(Number(workflow.run))
                              }}</span>
                              <v-switch
                                @change="toggleWorkflow(workflow)"
                                v-model="workflow.is_active"
                              ></v-switch>
                            </div>
                            <v-divider></v-divider>
                            <div class="footerx">
                              <div>
                                <span class="footerx__icon--published"></span>
                                <span class="footerx__state"
                                  >created
                                  {{
                                    format(
                                      new Date(workflow.created_at),
                                      "dd/MM/Y"
                                    )
                                  }}
                                </span>
                              </div>
                              <div>
                                <v-btn
                                  :to="`/workflow/${workflow.id}`"
                                  icon
                                  small
                                  color="#8F96A1"
                                  ><v-icon>mdi-pencil-outline</v-icon></v-btn
                                >
                                <v-btn icon small color="#8F96A1"
                                  ><v-icon
                                    >mdi-format-list-bulleted</v-icon
                                  ></v-btn
                                >
                                <v-btn
                                  @click="deleteWorkflow(workflow)"
                                  icon
                                  small
                                  color="#8F96A1"
                                  ><v-icon>mdi-trash-can-outline</v-icon></v-btn
                                >
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </v-tab-item>

                  <v-tab-item>
                    <div class="templates">
                      <div class="template-banner">
                        <span class="template-banner__header"
                          >Template workflows</span
                        >

                        <div class="template-banner__desc">
                          <v-icon color="primary">mdi-vector-link</v-icon>
                          <span
                            >Use templates to get started quickly with
                            workflows. Take advantage of usecases we have
                            collected from experts</span
                          >
                        </div>
                      </div>
                      <div class="template-banner__container">
                        <div
                          class="template-banner__container__template"
                          v-for="(workflow, index) in workflows"
                          :key="index"
                        >
                          <span class="titlex">{{
                            workflow.workflow_title
                          }}</span>
                          <span class="trigger">{{ workflow.source }}</span>
                          <div class="description">template description</div>
                          <v-divider></v-divider>
                          <div class="footerx">
                            <span class="footerx__state">Template </span>
                            <div style="display: flex; gap: 5px">
                              <v-btn small outlined color="#8F96A1">
                                Use
                              </v-btn>
                              <v-btn icon small color="primary"
                                ><v-icon>mdi-eye-outline</v-icon></v-btn
                              >
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

    <v-dialog
      v-model="deleteWorkflowDialog"
      :persistent="isDeletingWorkflow"
      max-width="550px"
      transition="dialog-transition"
    >
      <div class="delete">
        <div class="delete__header">
          <span class="t">Delete Workflow</span>
          <v-btn @click="deleteWorkflowDialog = false" icon color="primary">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </div>
        <div class="delete__content">
          <span class="msg"
            >Are you sure you want to delete this workflow?</span
          >

          <v-btn
            color="primary"
            @click="confirmDeleteWorkflow"
            elevation="1"
            x-large
            :loading="isDeletingWorkflow"
          >
            <v-icon left>mdi-chevron-right</v-icon> Proceed</v-btn
          >
        </div>
      </div>
    </v-dialog>

    <v-dialog v-if="selectedWorkflow && settingsDialog"
      v-model="settingsDialog"
      max-width="650px"
      transition="dialog-transition"
    >
      <div class="summary">
        <div class="summary__header">
          <div class="b">
             <v-icon color="primary">mdi-vector-link</v-icon>
            <span class="t">Workflow:</span>
          </div>

          <v-btn @click="close" icon color="primary">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </div>
        <v-tabs background-color="#F8F7F4">
          <v-tab>SUMMARY</v-tab>
          <v-tab>TRIGGERS</v-tab>
          <v-tab>SETTINGS</v-tab>
          <v-tab-item>
           <div class="summary__content">

            <div v-if="selectedWorkflow.workflow_schema" class="schema">
          <div v-if="selectedWorkflow.workflow_schema">
            When <span class="type">{{ groupType(parentGroup) }}</span> of the
            following is <span class="operator">TRUE</span>
          </div>

          <div
            style="margin-top: 10px"
            v-for="(condition, index) in conditions"
            :key="index"
          >
            <div class="group" v-if="condition.type == 'group'">
              With
              <span class="type">{{
                groupType(condition.properties.type)
              }}</span>
              of the following

              <span
                v-for="(innerConditions, index) in condition.properties
                  .conditions"
                :key="index"
              >
                <div
                  class="comparison"
                  v-if="innerConditions.type == 'comparison'"
                >
                  <span class="field">{{
                    getFieldLabel(innerConditions.properties.field)
                  }}</span>
                  is
                  <span class="operator">{{
                    operator(innerConditions.properties.type)
                  }}</span>
                  <span class="target">{{
                    getFieldTarget(
                      innerConditions.properties.target,
                      innerConditions.properties.field
                    )
                  }}</span>
                </div>
              </span>
            </div>

            <div class="comparison" v-if="condition.type == 'comparison'">
              <span class="field">{{
                getFieldLabel(condition.properties.field)
              }}</span>
              is
              <span class="operator">{{
                operator(condition.properties.type)
              }}</span>
              <span class="target">{{
                getFieldTarget(
                  condition.properties.target,
                  condition.properties.field
                )
              }}</span>
            </div>
          </div>
        </div>

           </div>
          </v-tab-item>
          <v-tab-item>
            <div class="summary__content">

           </div>
          </v-tab-item>
          <v-tab-item>
            <div class="summary__content">

           </div>
          </v-tab-item>
        </v-tabs>
      </div>
    </v-dialog>
  </v-container>
</template>

<script>
import { format } from "date-fns";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      format: format,
      settingsDialog: false,
      deleteWorkflowDialog: false,
      selectedWorkflow: null,
      isDeletingWorkflow: false,
      dialog: false,
      Rules: true,
      isClicked: true,
      search: "",
      name: "",
      workflows: [],
      isLoadingWorkflows: false,
      errorLoadingWorkflow: true,
      tabIndex: 0,
    };
  },
  mounted() {
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

    async toggleWorkflow(workflow) {
      try {
        await this.$store.dispatch("workflow/updateWorkflow", {
          id: workflow.id,
          is_active: workflow.is_active,
        });
        this.showToast({
          sclass: "success",
          show: true,
          message:
            "Workflow" + workflow.is_active ? "deactivated!" : "activated!",
          timeout: 3000,
        });
      } catch (err) {
        this.showToast({
          sclass: "error",
          show: true,
          message: err.msg || "An error occurred",
          timeout: 3000,
        });
      }
    },

    deleteWorkflow(workflow) {
      this.deleteWorkflowDialog = true;
      this.selectedWorkflow = workflow;
    },

    async confirmDeleteWorkflow() {
      try {
        this.isDeletingWorkflow = true;
        await this.$store.dispatch(
          "workflow/deleteWorkflow",
          this.selectedWorkflow.id
        );
        this.showToast({
          sclass: "success",
          show: true,
          message: "Workflow deleted!",
          timeout: 3000,
        });
        await this.getWorkflows();
        this.deleteWorkflowDialog = false;
      } catch (error) {
        this.showToast({
          sclass: "error",
          show: true,
          message: "Error deleting workflow!",
          timeout: 3000,
        });
      } finally {
        this.isDeletingWorkflow = false;
      }
    },

    async getWorkflows() {
      try {
        this.errorLoadingWorkflow = false;
        this.isLoadingWorkflows = true;
        const { data } = await this.$store.dispatch("workflow/getAllWorkflows");

        this.workflows = data;
      } catch (err) {
        this.errorLoadingWorkflow = true;
      } finally {
        this.isLoadingWorkflows = false;
      }
    },
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

.summary {
  border-radius: 8px;
  background-color: #fff;

  &__header {
    padding: 20px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .b {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .i {
      width: 26px;
      height: 26px;
      object-fit: fit;
    }

    .t {
      color: var(--v-primary-base);
      font-weight: 600;
      font-size: 20px;
    }
  }

  &__content {
    padding: 20px;
    width: 100%;
    height: 400px;
    background-color: #F8F7F4;
  }
}

.delete {
  border-radius: 8px;
  background-color: #fff;
  &__header {
    padding: 20px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .t {
      color: var(--v-primary-base);
      font-weight: 600;
      font-size: 20px;
    }
  }

  &__content {
    background-color: #fefcf8;
    padding: 30px 50px;
    text-align: center;

    .msg {
      font-size: 16px;
      color: #757575;
      line-height: 24px;
      display: block;
      margin-bottom: 30px;
    }

    #add-to-draft {
      display: block;
      margin: 50px auto 0px auto;
      background: transparent;
      color: #d7a47b;
      cursor: pointer;
      font-size: 17px;
      border-bottom: 1px solid #d7a47b;
    }
  }
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

    &__loader {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 30px;
      justify-content: center;
      align-items: center;
      margin-top: 30px;
    }

    &__container {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 30px;
      justify-content: center;
      align-items: center;
      margin-top: 30px;

      &__workflow {
        display: inline-block;
        border: 1px solid #d9dee1;
        border-radius: 8px;

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
          box-sizing: border-box;
          padding: 4px 0px;
          color: #fff;
          border-radius: 4px;
          display: inline-block;
          margin: 20px 0px;
          text-align: center;
          width: 40px;
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

.templates {
  background-color: #f4f5f6;
  min-height: 100vh;
  .template-banner {
    padding: 60px 30px;

    &__header {
      font-weight: bold;
      font-size: 23px;
      color: var(--v-primary-base);
    }

    &__desc {
      display: flex;
      gap: 20px;
      margin: 30px 0;
      color: var(--v-primary-base);
      font-weight: 400;
      line-height: 28px;
    }

    &__container {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 30px;
      justify-content: center;
      align-items: center;
      padding: 30px;

      &__template {
        display: inline-block;
        border: 1px solid #d9dee1;
        border-radius: 8px;
        background-color: #fff;

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
          padding: 4px 10px;
          color: #fff;
          border-radius: 4px;
          display: inline-block;
          margin: 20px 0px;
        }

        .description {
          min-height: 70px;
          color: #8f96a1;
        }

        .footerx {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 20px;
          color: var(--v-primary-base);

          &__state {
            color: #8f96a1;
          }
        }
      }
    }
  }
}
</style>
