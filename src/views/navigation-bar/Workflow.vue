<template>
  <v-container class="pa-0">
    <div class="workflow">
      <div class="workflow__header">
        <span
          class="titlex"
          :style="{
            fontSize: `${$vuetify.breakpoint.mdAndDown ? '24px' : '32px'}`,
            marginTop: `${$vuetify.breakpoint.mdAndDown ? '58px' : '48px'}`,
          }"
          >Workflow</span
        >

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
      </div>

      <v-row class="mx-8">
        <v-card
          class="mb-16"
          width="100%"
          min-height="990"
          elevation="1"
          style="margin-top: 40px"
        >
          <template v-if="$vuetify.breakpoint.mdAndUp">
            <v-card width="100%" elevation="1" height="46">
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
                            <div style="padding: 0px 20px">
                              <span class="titlex">{{
                                workflow.workflow_title
                              }}</span>
                              <span class="trigger">{{ workflow.source }}</span>

                              <div
                                class="
                                  d-flex
                                  justify-space-between
                                  align-center
                                "
                              >
                                <span class="runs">{{
                                  Intl.NumberFormat().format(
                                    Number(workflow.run)
                                  )
                                }}</span>
                                <v-switch
                                  @change="toggleWorkflow(workflow)"
                                  v-model="workflow.is_active"
                                ></v-switch>
                              </div>
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
                                <v-btn
                                  @click="summary(workflow)"
                                  icon
                                  small
                                  color="#8F96A1"
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
                          <div style="padding: 0px 20px">
                            <span class="titlex">{{
                              workflow.workflow_title
                            }}</span>
                            <span class="trigger">{{ workflow.source }}</span>
                            <div class="description">template description</div>
                          </div>
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

      <v-dialog
        v-if="selectedWorkflow && settingsDialog"
        v-model="settingsDialog"
        max-width="650px"
        transition="dialog-transition"
        :persistent="isUpdatingWorkflowName"
      >
        <div class="summary">
          <div class="summary__header">
            <div class="b">
              <v-icon color="primary">mdi-vector-link</v-icon>
              <span class="t"
                >Workflow: {{ selectedWorkflow.workflow_title }}</span
              >
            </div>

            <v-btn @click="settingsDialog = false" icon color="primary">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </div>
          <v-tabs
            background-color="#f8f7f4"
            slider-size="5"
            style="margin:0px auto auto auto;width:100% mix-blend-mode: normal;padding:10px 50px"
          >
            <v-tab>CONDITIONS</v-tab>
            <v-tab>TRIGGERS</v-tab>
            <v-tab>SETTINGS</v-tab>
            <v-tab-item>
              <v-divider></v-divider>
              <div class="summary__content">
                <template>
                  <div v-if="selectedWorkflow.workflow_schema" class="schema">
                    <div v-if="selectedWorkflow.workflow_schema">
                      When
                      <span class="type">{{ groupType(parentGroup) }}</span> of
                      the following is <span class="operator">TRUE</span>
                    </div>

                    <div>
                      <div
                        style="margin-top: 10px"
                        v-for="(condition, index) in selectedConditions"
                        :key="index"
                      >
                        <div class="group" v-if="condition.type == 'group'">
                          With
                          <span class="type">{{
                            groupType(condition.properties.type)
                          }}</span>
                          of the following

                          <span
                            v-for="(innerConditions, index) in condition
                              .properties.conditions"
                            :key="index"
                          >
                            <div
                              class="comparison"
                              v-if="innerConditions.type == 'comparison'"
                            >
                              <span class="field">
                                {{
                                  getFieldLabel(
                                    innerConditions.properties.field
                                  )
                                }}
                                <!-- {{ innerConditions.properties.field }} -->
                              </span>
                              is
                              <span class="operator">{{
                                operator(innerConditions.properties.type)
                              }}</span>
                              <span class="target">
                                {{
                                  getFieldTarget(
                                    innerConditions.properties.target,
                                    innerConditions.properties.field
                                  )
                                }}
                              </span>
                              <!-- {{
                              innerConditions.properties.target +
                              "," +
                              innerConditions.properties.field
                            }} -->
                            </div>
                          </span>
                        </div>

                        <div
                          class="comparison"
                          v-if="condition.type == 'comparison'"
                        >
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
                </template>
              </div>
            </v-tab-item>
            <v-tab-item>
              <v-divider></v-divider>
              <div class="summary__content">
                <span
                  style="color: #19283dcc; font-size: 16px"
                  class="mb-2 mt-1 d-block"
                >
                  To trigger this workflow using an external API or webhook
                  service, make a POST request to the endpoint below
                </span>

                <div class="api-cover">
                  <button class="api-cover__req">POST</button>
                  <div class="api-cover__url">
                    http://flow.hypn.so/{{ selectedWorkflow.workflow_id }}
                  </div>
                  <v-btn icon style="margin-right: 15px"
                    ><v-icon>mdi-content-copy</v-icon></v-btn
                  >
                </div>

                <span
                  class="mt-1 d-block"
                  style="color: #8f96a1; font-size: 14px"
                >
                  <b>Note:</b> This endpoint is unique to this workflow and
                  serves as a trigger. The payload must match the fields used in
                  your workflow composition
                </span>

                <span
                  style="color: #19283dcc; font-size: 16px"
                  class="mb-2 mt-10 d-block"
                  >Workflow trigger data format (show this to your developer or
                  IT support)</span
                >

                <pre
                  class="schema-structure"
                  :class="{ 'schema-structure--expand': expandSchema }"
                  v-html="JSON.stringify(getTriggerSchema, null, 2)"
                ></pre>
                <div
                  v-if="!expandSchema"
                  class="d-flex"
                  style="justify-content: end"
                >
                  <v-btn
                    @click="expandSchema = true"
                    color="primary"
                    style="padding: 0"
                    text
                  >
                    <v-icon>mdi-plus</v-icon> expand
                  </v-btn>
                </div>
              </div>
            </v-tab-item>
            <v-tab-item>
              <v-divider></v-divider>
              <div class="summary__content">
                <span class="titlex">Update workflow name below</span>
                <div class="text-wrapper">
                  <v-text-field
                    outlined
                    color="primary"
                    v-model="selectedWorkflow.workflow_title"
                    hide-details="auto"
                    label="Workflow name"
                  ></v-text-field>
                </div>

                <div class="desc">
                  <b>Note:</b> Updating the name will not change the workflow
                  trigger or ID
                </div>

                <div class="d-flex mt-10" style="justify-content: end">
                  <v-btn
                    color="primary"
                    @click="updateWorkflowName(selectedWorkflow)"
                    :loading="isUpdatingWorkflowName"
                    elevation="0"
                    large
                  >
                    <v-icon>mdi-chevron-right</v-icon> Update
                  </v-btn>
                </div>
              </div>
            </v-tab-item>
          </v-tabs>
        </div>
      </v-dialog>
    </div>
  </v-container>
</template>

<script>
import { format } from "date-fns";
import { mapActions, mapGetters } from "vuex";
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
      operators: [],
      isUpdatingWorkflowName: false,
      expandSchema: false,
      invoiceEntries: [],
      paymentEntries: [],
    };
  },
  mounted() {
    this.getWorkflows();
    this.fetchOperators();
    this.fetchInvoiceEntries();
    this.fetchPaymentEntries();
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

    async fetchOperators() {
      try {
        this.isLoadingEntries = true;
        const { data } = await this.$store.dispatch("workflow/getAllOperators");
        this.operators = data;
      } catch (err) {
        this.isLoadingEntries = false;
      } finally {
        this.isLoadingEntries = false;
      }
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
          message: "Workflow status updated!",
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

    async updateWorkflowName(workflow) {
      try {
        this.isUpdatingWorkflowName = true;

        await this.$store.dispatch("workflow/updateWorkflow", {
          id: workflow.id,
          workflow_title: workflow.workflow_title,
        });
        this.settingsDialog = false;
        this.showToast({
          sclass: "success",
          show: true,
          message: "Workflow updated!",
          timeout: 3000,
        });
      } catch (err) {
        this.showToast({
          sclass: "error",
          show: true,
          message: err.msg || "An error occurred",
          timeout: 3000,
        });
      } finally {
        this.isUpdatingWorkflowName = false;
      }
    },

    deleteWorkflow(workflow) {
      this.deleteWorkflowDialog = true;
      this.selectedWorkflow = workflow;
    },

    summary(workflow) {
      // console.log(JSON.stringify(workflow, null, 2));
      this.selectedWorkflow = workflow;
      this.settingsDialog = true;
    },

    async fetchInvoiceEntries() {
      try {
        this.isLoadingEntries = true;
        const { data } = await this.$store.dispatch(
          "workflow/getAllInvoiceFieldsOptions"
        );
        this.invoiceEntries = data;
      } catch (err) {
        this.isLoadingEntries = false;
      } finally {
        this.isLoadingEntries = false;
      }
    },

    async fetchPaymentEntries() {
      try {
        this.isLoadingEntries = true;
        const data = await this.$store.dispatch(
          "workflow/getPaymentFieldsOptions",
          this.triggerData
        );
        this.paymentEntries = data;
      } catch (err) {
        this.isLoadingEntries = false;
      } finally {
        this.isLoadingEntries = false;
      }
    },

    groupType(type) {
      if (this.comparisonType) {
        return (
          this.comparisonType.find((groupType) => groupType.val === type)
            ?.string || type
        );
      }
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

    operator(operand) {
      if (this.operators) {
        return (
          this.operators.find((operator) => operator.key == operand)?.label ||
          operand
        );
      }
      return operand;
    },

    getFieldLabel(inputField) {
      if (
        (this.selectedWorkflow.form && this.selectedWorkflow.form.names) ||
        this.invoiceEntries ||
        this.paymentEntries
      ) {
        return (
          (this.selectedWorkflow.source == "form"
            ? this.selectedWorkflow?.form?.field_names || []
            : this.selectedWorkflow.source == "invoice"
            ? this.invoiceEntries
            : this.paymentEntries
          ).find((field) => field.key === inputField)?.label || inputField
        );
      }
      return inputField;
    },

    getFieldTarget(inputTarget, inputField) {
      const target = [
        this.selectedWorkflow.source == "form"
          ? this.selectedWorkflow?.form?.field_names || []
          : this.selectedWorkflow.source == "invoice"
          ? this.invoiceEntries
          : this.paymentEntries,
      ].find((field) => field.key === inputField);

      if (target) {
        if (target.type === "dropDown" || target.type === "checkbox") {
          // multi values

          if (typeof inputTarget === "string") {
            return (
              target.options.find((option) => option.value === inputTarget)
                .text || inputTarget
            );
          } else {
            return inputTarget
              .map((item) => {
                return (
                  target.options.find((option) => option.value === item).text ||
                  item
                );
              })
              .join(", ");
          }
        } else if (target.type === "radio") {
          // filter out just one
          return (
            target.options.find((option) => option.value === inputTarget)
              .text || inputTarget
          );
        } else if (target.type === "number") {
          return Intl.NumberFormat().format(inputTarget);
        } else return inputTarget;
      } else return inputTarget;
    },
  },

  computed: {
    ...mapGetters({
      comparisonType: "workflow/comparisonType",
    }),

    parentGroup() {
      if (this.selectedWorkflow && this.selectedWorkflow.workflow_schema)
        return this.selectedWorkflow.workflow_schema.condition.properties.type;
      else return null;
    },

    selectedConditions() {
      if (this.selectedWorkflow && this.selectedWorkflow.workflow_schema)
        return this.selectedWorkflow.workflow_schema.condition.properties
          .conditions;
      else return null;
    },

    selectedFieldNames() {
      if (this.selectedWorkflow && this.selectedWorkflow.form)
        return this.selectedWorkflow.form.field_names;
      else return null;
    },

    getTriggerSchema() {
      if (this.selectedConditions) {
        let fields = [];
        this.selectedConditions.forEach((condition) => {
          if (condition.type === "comparison") {
            fields.push({
              field: condition.properties.field,
              value: condition.properties.target,
            });
          }

          if (condition.type === "group") {
            condition.properties.conditions.forEach((condition2) => {
              if (condition2.type === "comparison") {
                fields.push({
                  field: condition2.properties.field,
                  value: condition2.properties.target,
                });
              }
            });
          }
        });

        const xx = fields.map((obj) => {
          return {
            [obj.field]: obj.value,
            //  [this.selectedFieldNames.find(fd=>fd.key === obj.field ).label || obj.field]:[obj.value]
            // [this.getFieldLabel(obj.field)]: this.getFieldTarget(
            //   obj.value,
            //   this.field
            // ),
          };
        });

        var cu = {};

        xx.map((va) => {
          Object.assign(cu, va);
        });

        return cu;
      } else return {};
    },
  },
  watch: {
    // selectedWorkflow: {
    //   deep: true,
    //   handler(val) {
    //     //  console.log(JSON.stringify(val.form.field_names, null, 2));
    //   },
    // },

    settingsDialog() {
      this.expandSchema = false;
    },

    // getTriggerSchema: {
    //   deep: true,
    //   immediate: true,
    //   handler(val) {
    //     console.log("trigger");
    //     console.log(JSON.stringify(val, null, 2));
    //   },
    // },
  },
};
</script>

<style lang="scss" scoped>
.workflow {
  padding: 0px 40px 20px 20px;

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
    padding-left: 20px;

    .titlex {
      font-size: 21px;
      font-family: Inter;
      font-style: normal;
      font-weight: bold;
      line-height: 39px;
    }
  }
}

// .noWorkFlowTitle {
//   display: block;
//   margin-left: 0px;
//   margin-top: 0px;
//   font-family: "Inter", sans-serif;
//   font-style: normal;
//   font-weight: bold;
//   font-size: 16px;
//   line-height: 24px;

//   color: var(--v-primary-base);
// }
// .noWorkFlowText {
//   margin-left: 0px;
//   margin-top: 0px;
//   font-family: "Inter", sans-serif;
//   font-style: normal;
//   font-weight: normal;
//   font-size: 16px;
//   line-height: 24px;
//   color: #596a73;
// }

// .v-application .elevation-4 {
//   box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 3%), 0px 6px 10px 0px rgb(0 0 0 / 3%),
//     0px 1px 18px 0px rgb(0 0 0 / 3%) !important;
// }

.summary {
  border-radius: 8px;
  background-color: #f8f7f4;

  &__header {
    padding: 20px;
    width: 100%;
    display: flex;
    background-color: white;
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
    padding: 20px 0px;
    width: 100%;
    min-height: 400px;
    max-height: 90vh;
    background-color: #f8f7f4;
    margin-top: 1px solid grey;

    .titlex {
      color: #19283dcc;
      display: block;
      font-weight: 500;
      padding-bottom: 20px;
    }

    .desc {
      color: #8f96a1;
      display: block;
      margin-top: 10px;
      margin-bottom: 50px;
    }

    .text-wrapper {
      background-color: #fff;
      border-radius: 4px;
    }
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
        padding: 20px 0px;
        box-sizing: border-box;

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
          padding: 0px 20px;

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
        padding: 20px 0px;
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
          padding: 0px 20px;

          &__state {
            color: #8f96a1;
          }
        }
      }
    }
  }
}

.schema {
  margin-top: 30px;
  background-color: transparent;
  font-size: 16px;
  color: #596a73;

  .type {
    color: var(--v-primary-base);
    font-weight: bold;
    background-color: #301f7812;
    padding: 0px 8px;
    border-radius: 10px;
    display: inline-block;
    margin: 0px 4px;
  }

  .operator {
    color: #16be98;
    font-weight: bold;
    background-color: #fff;
    padding: 0px 8px;
    border-radius: 10px;
    display: inline-block;
    margin: 0px 4px;
  }

  .group {
    padding: 15px 0px;
    border-bottom: 1px dashed #d5dcec;
  }

  .comparison {
    margin-top: 3px;
    display: block;
    margin-left: 15px;
    line-height: 35px;

    .operator {
      background-color: #d4f6ef;
      white-space: nowrap;
      display: inline-block;
      margin: 0px 4px;
    }

    .field {
      font-weight: bold;
      color: #8f96a1;
    }

    .target {
      color: #e3aa1c;
      font-weight: bold;
      background-color: #f9eed2;
      padding: 0px 8px;
      border-radius: 10px;
      display: inline-block;
      margin: 0px 4px;
    }
  }
}

.api-cover {
  display: flex;
  align-items: center;
  border: 1px solid #19283d1a;
  box-sizing: border-box;
  background: #ffffff;
  border: 1px solid rgba(25, 40, 61, 0.1);
  border-radius: 3px;
  margin: 10px 0px;

  &__req {
    height: 55px;
    padding: 0px 20px;
    background-color: #f4f5f6;
    color: #00233880;
    font-weight: bold;
    border-radius: 3px;
    font-family: "Inter";
  }

  &__url {
    padding: 0px 25px;
    flex: 1;
    color: #596a73;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}

.schema-structure {
  max-height: 170px;
  height: auto;
  padding: 15px;
  overflow: auto;
  background-color: #fff;
  color: #00233880;
  font-weight: bold;
  border-radius: 3px;
  font-family: "Inter";
  border: 1px solid #19283d1a;

  &--expand {
    max-height: auto;
    overflow: auto;
  }
}
</style>
