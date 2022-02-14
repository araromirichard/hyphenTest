<template>
  <v-layout>
    <v-card
      flat
      elevation="4"
      min-height="1200"
      style="width: 90%"
      class="workflow-wrap"
    >
      <v-card
        flat
        class="rounded-t-lg"
        style="
          background: rgba(127, 145, 155, 0.052607);
          margin-top: 12px;
          padding-bottom: 25px;
        "
      >
        <v-row class="d-flex">
          <img
            style="font-size: 24px; margin-top: 30px; margin-left: 40px"
            :src="require('@/assets/pbot_icons/chevron-forward.svg')"
            alt="chevron-icon"
          />
          <v-card-title
            class="ml-2 pa-4 justify-center align-center flow-page-title"
            style="font-weight: 700"
          >
            {{ workflowName }}
          </v-card-title>
          <v-spacer></v-spacer>
          <v-switch
            dense
            color="#16BE98"
            hide-details="auto"
            class="
              d-flex,
              row-reverse
              mr-6
              justify-center
              align-center;margin-top:50px;
            "
          >
            <template #prepend>
              <v-label>
                <span style="font-size: 12px"> Disable </span>
              </v-label>
            </template>
          </v-switch>
        </v-row>
      </v-card>
      <template>
        <v-stepper
          class="mx-auto pa-4"
          style=""
          elevation="0"
          color="#301F78"
          v-model="e6"
          vertical
        >
          <v-stepper-step
            non-linear
            color="primary"
            :editable="e6 > 1"
            step="1"
          >
            <span class="flow-title"> Choose workflow trigger </span>
            <span class="mt-2 flow-txt"
              >All automation begins with a data source, choose one below to
              begin your workflow</span
            >
          </v-stepper-step>

          <v-stepper-content step="1">
            <WorkFlowTrigger v-model="trigger" @completed="e6 = 2" />
          </v-stepper-content>

          <v-stepper-step non-linear :editable="e6 > 2" step="2">
            <span class="flow-title"> Compose workflow </span>
            <span class="mt-2 flow-txt"
              >Select items from your data source and compose how it should be
              handled by pbot</span
            >
          </v-stepper-step>

          <v-stepper-content step="2" class="pt-0">
            <compose-workflow v-model="schema" />
            <v-btn
              @click="e6 = 3"
              dark
              text
              elevation="0"
              width="125"
              height="55"
              style="
                margin-top: 26px;
                margin-bottom: 73px;
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
                class="text-capitalize pl-3 py-4"
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
          </v-stepper-content>

          <v-stepper-step :editable="e6 > 3" step="3">
            <span class="flow-title"> Execute action </span>
            <span class="mt-2 flow-txt"
              >Arrange a set of actions you want executed when the above
              conditions are true for all data sent to this workflow</span
            >
          </v-stepper-step>

          <v-stepper-content step="3">
            <ExecuteActions v-model="actions" style="margin-top: 42px" />
            <v-btn
              @click="completed = true"
              dark
              text
              elevation="0"
              width="125"
              height="55"
              style="
                margin-top: 26px;
                margin-bottom: 73px;
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
                class="text-capitalize pl-3 py-4"
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
                >Save</span
              >
            </v-btn>
          </v-stepper-content>
        </v-stepper>
      </template>
    </v-card>

    <v-dialog v-model="completed" max-width="450">
      <v-card color="#FEFCF8" class="rounded-lg">
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
            >Confirm Workflow</span
          >
          <v-spacer></v-spacer>
          <v-icon
            tag="button"
            @click="dialog2 = false"
            class="text-bolder"
            color="#596A73"
          >
            mdi-close
          </v-icon>
        </v-card-title>

        <div class="mx-auto px-15 pb-10 text-center">
          <div class="block" style="color: #757575; font-size: 18px">
            Confirm this workflow is completed and ready for use
          </div>

          <v-btn
            @click="saveWorkflow"
            dark
            text
            elevation="0"
            width="125"
            height="55"
            style="
              margin-top: 20px;
              margin-bottom: 20px;
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
              class="text-capitalize pl-3 py-4"
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
              >Save</span
            >
          </v-btn>

          <div
            @click="saveDraft"
            class="block"
            style="
              color: #757575;
              font-size: 14px;
              text-decoration: underline;
              cursor: pointer;
            "
          >
            No, Add to draft
          </div>
        </div>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
import ExecuteActions from "./ExecuteActions.vue";
import WorkFlowTrigger from "./WorkFlowTrigger.vue";
import SimpleLineIcons from "vue-simple-line";
import ComposeWorkflow from "../components/pages/workflow/compose/compose-workflow.vue";

export default {
  data() {
    return {
      e6: 1,
      workflowName: this.$route.query.name,
      id: null,
      trigger: null,
      schema: null,
      actions: null,
      completed: false,
    };
  },
  components: {
    ExecuteActions,
    WorkFlowTrigger,
    SimpleLineIcons,
    ComposeWorkflow,
  },
  mounted() {
    this.generateID();
  },
  methods: {
    generateID() {
      //generate rand id
      this.id = Date.now();
    },

    saveWorkflow() {
      this.completed = false;
    },

    saveDraft() {
      this.completed = false;
    },
  },
  computed: {
    payload() {
      return {
        id: this.id, // rand it by time stamp for now
        name: this.workflowName,
        trigger: this.trigger,
        schema: this.schema, // data gotten from workflow component
        actions: this.actions, // data gotten from workflo actions component
      };
    },
  },

  watch: {
    payload: {
      deep: true,
      immediate: true,
      handler(val) {
        // this sets the whole workflow actions to vuex store
        this.$store.dispatch("workflow/setWorkflow", val);
        console.log(JSON.stringify(val, null, 2));
      },
    },
  },
};
</script>

<style scoped>
.v-application .elevation-2 {
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 2%), 0px 4px 5px 0px rgb(0 0 0 / 2%),
    0px 1px 10px 0px rgb(0 0 0 / 1%) !important;
}
.v-application .elevation-4 {
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 3%), 0px 4px 5px 0px rgb(0 0 0 / 3%),
    0px 1px 10px 0px rgb(0 0 0 / 3%) !important;
}

.cardTitle {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 15px;
  color: rgb(89, 106, 115);
  text-align: center;
}
.spanText {
  font-family: "Inter";
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  letter-spacing: 0.45px;
  color: #7f919b;
}
.notActive {
  border: 1px solid rgba(48, 31, 120, 0.07);
}
.active {
  border: 1px solid #301f78;
}

#chip {
  padding: 10px;
  font-size: 1rem !important;
  font-weight: 700;
  line-height: 1.5rem;
  letter-spacing: 0.03125em !important;
  font-family: "Inter", sans-serif !important;
}
.v-application .elevation-8 {
  box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 3%), 0px 6px 10px 0px rgb(0 0 0 / 3%),
    0px 1px 18px 0px rgb(0 0 0 / 3%) !important;
}
.v-card > *:first-child:not(.v-btn):not(.v-chip):not(.v-avatar),
.v-card > .v-card__progress + *:not(.v-btn):not(.v-chip):not(.v-avatar) {
  border-top-left-radius: 0 !important;
  border-top-right-radius: 0 !important;
  border-bottom-left-radius: 0 !important;
  border-bottom-right-radius: 0 !important;
}
.workflow-wrap .v-stepper__step {
  align-items: start !important;
}
.flow-txt {
  font-family: Inter;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.45px;
  color: rgb(89, 106, 115);
}
.flow-title {
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  color: var(--v-primary-base);
}
.flow-page-title {
  margin-top: 30px;
  font-family: Inter;
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 32px;
  color: var(--v-primary-base);
  max-width: 500px;
  /*white-space:nowrap;
  overflow:hidden;
  text-overflow:ellipsis;*/
}
</style>
