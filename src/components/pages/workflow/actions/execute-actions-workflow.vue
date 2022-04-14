<template>
  <div ref="action">
    <div class="vertical-line"></div>

    <div class="loader" v-if="isLoadingFormFields">
      <v-progress-circular color="primary" indeterminate></v-progress-circular>
    </div>
    <div v-else class="form-trigger">
      <div class="header" @click="showTriggers = !showTriggers">
        <span class="title"> Actions to Execute {{isVisable}}</span>

        <v-btn color="primary" icon
          ><v-icon size="33" v-if="!showTriggers">mdi-chevron-down</v-icon>
          <v-icon size="33" v-else>mdi-chevron-up</v-icon>
        </v-btn>
      </div>

      <div v-if="showTriggers">
        <span class="text"
          >Choose actions to be performed by this workflow, when the above
          conditions match the data recieved.</span
        >

        <transition name="animate-down">
          <div class="actions">
            <div class="d-flex justify-center w-full">
              <v-btn
                color="#F9EED2"
                style="text-transform: capitalize"
                light
                rounded
                depressed
                >Add action(s)</v-btn
              >
            </div>

            <v-timeline>
              <div class="d-flex mt-5">
                <v-menu bottom offset-y>
                  <template v-slot:activator="{ on, attrs }">
                    <div class="d-flex mx-auto" v-bind="attrs" v-on="on">
                      <v-btn
                        v-if="selectedActions.length == 0"
                        fab
                        dark
                        height="45"
                        width="45"
                        color="var(--v-primary-base)"
                        depressed
                        class="mx-auto justify-center"
                      >
                        <v-icon>mdi-plus</v-icon>
                      </v-btn>
                    </div>
                  </template>
                  <v-list>
                    <v-list-item-group>
                      <v-list-item
                        @click="selectedActions.push(item)"
                        class="py-3"
                        v-for="(item, j) in availableActions"
                        :key="j"
                      >
                        <v-list-item-title>{{ item.text }}</v-list-item-title>
                      </v-list-item>
                    </v-list-item-group>
                  </v-list>
                </v-menu>
              </div>
            </v-timeline>

            <!-- <div v-sortable="{ onUpdate: reOrder }"> -->

            <div>
              <action-workflow
                v-for="(action, index) in selectedActions"
                :isLast="index == selectedActions.length - 1"
                :key="index"
                :index="index"
                :action="action"
                :availableActions="availableActions"
                @properties="selectedProperties.splice(index, 1, $event)"
                @add-action="addAction($event)"
                @remove-action="removeAction(index)"
              />
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import actionWorkflow from "./action-workflow.vue";
export default {
  components: { actionWorkflow },
  props:{
    isVisable: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isLoadingFormFields: false,
      showTriggers: false,
      availableActions: [
        {
          text: "Send Payment",
          channel: "SendPayment",
        },
        {
          text: "Add to Payables",
          channel: "addToPayables",
        },
        {
          text: "Send Notification",
          channel: "SendNotifications",
        },
        {
          text: "Update ERP/Accounting",
          channel: "UpdateERP",
        },
        {
          text: "Create Document",
          channel: "CreateDocument",
        },
        {
          text: "Add Custom",
          channel: "",
        },
      ],
      selectedActions: [],
      selectedProperties: [],
      scrollOptions: {
        duration: 500,
        offset: 0,
        easing: "easeInOutCubic",
        container: ".flows",
      },
    };
  },

  methods: {
    onUpdate: function (event) {
      this.list.splice(
        event.newIndex,
        0,
        this.list.splice(event.oldIndex, 1)[0]
      );
    },

    /// this is still very buggy
    reOrder(event) {
      this.selectedActions.splice(
        event.newIndex,
        0,
        this.selectedActions.splice(event.oldIndex, 1)[0]
      );
      this.selectedProperties.splice(
        event.newIndex,
        0,
        this.selectedProperties.splice(event.oldIndex, 1)[0]
      );
    },

    addAction(action) {
      this.selectedActions.push(action);
    },
    removeAction(index) {
      this.selectedActions.splice(index, 1);
      this.selectedProperties.splice(index, 1);
    },

    fetchActions() {
      this.isLoadingFormFields = true;
      setTimeout(() => {
        this.isLoadingFormFields = false;
      }, 1000);
    },
  },

  watch: {
    selectedProperties: {
      deep: true,
      immediate: true,
      handler(newVal) {
        this.$emit("input", newVal);
        console.log(JSON.stringify(newVal, null, 2));
      },
    },

    isVisable(val) {
      if (val) {
        this.fetchActions();
      }
    },

    showTriggers(val) {
      if (val) {
        this.$vuetify.goTo(this.$refs.action, this.scrollOptions);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.vertical-line {
  display: block;
  background-color: #d9dee1;

  margin: auto;
  height: 80px;
  width: 2px;
}

.loader {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;
  background: #ffffff;
  box-shadow: 0px 4px 16px rgba(204, 188, 252, 0.15);
  border-radius: 6px;
}

.form-trigger {
  width: 100%;
  padding: 30px;
  background: #ffffff;
  box-shadow: 0px 4px 16px rgba(204, 188, 252, 0.15);
  border-radius: 6px;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;

    .title {
      font-weight: bold;
      color: var(--v-primary-base);
      font-size: 16px;
      display: block;
      text-transform: capitalize;
    }

    .text {
      display: block;
      font-size: 14px;
      color: rgba(25, 40, 61, 0.8);
      margin-top: 10px;
    }
  }
}

.actions {
  padding: 50px 0px;
  background-color: #fdf9ef;
  min-height: 400px;
  border-radius: 6px;
  margin-top: 30px;
}
</style>
