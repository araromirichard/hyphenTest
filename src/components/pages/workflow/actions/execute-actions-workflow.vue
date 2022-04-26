<template>
  <div ref="action">
    <div class="vertical-line"></div>

    <div class="form-trigger">
      <div class="header" @click="showTriggers = !showTriggers">
        <span class="title"> Actions to Execute</span>

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

                  <div style="width: 260px">
                    <v-list>
                      <v-list-item-group>
                        <v-list-item
                          @click="selectedActions.push(action)"
                          v-for="(action, j) in availableActions"
                          :key="j"
                        >
                          <v-list-item-icon>
                            <img
                              class="actions-icon"
                              :src="action.icon"
                              :alt="action.channel"
                            />
                          </v-list-item-icon>
                          <v-list-item-title>{{
                            action.text
                          }}</v-list-item-title>
                        </v-list-item>
                      </v-list-item-group>
                    </v-list>
                  </div>
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
  props: {
    isVisable: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      showTriggers: true,
      availableActions: [
        {
          text: "Send Email",
          channel: "sendEmail",
          icon: require("@/assets/actions-send-email.svg"),
        },
        {
          text: "Get Approval",
          channel: "getApproval",
          icon: require("@/assets/actions-get-approval.svg"),
        },
        {
          text: "Add to Payables",
          channel: "addToPayables",
          icon: require("@/assets/actions-add-to-payables.svg"),
        },
        {
          text: "Send Payment",
          channel: "SendPayment",
          icon: require("@/assets/actions-send-payment.svg"),
        },
        {
          text: "Update Customer",
          channel: "updateCustomer",
          icon: require("@/assets/actions-update-customer.svg"),
        },
        {
          text: "Update Vendor",
          channel: "updateVendor",
          icon: require("@/assets/actions-update-vendor.svg"),
        },
        {
          text: "Send form",
          channel: "sendForm",
          icon: require("@/assets/actions-send-form.svg"),
        },
        {
          text: "Connect Workflow",
          channel: "connectWorkflow",
          icon: require("@/assets/actions-connect-workflow.svg"),
        },
        {
          text: "Add Delay",
          channel: "addDelay",
          icon: require("@/assets/actions-add-delay.svg"),
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
    // reOrder(event) {
    //   this.selectedActions.splice(
    //     event.newIndex,
    //     0,
    //     this.selectedActions.splice(event.oldIndex, 1)[0]
    //   );
    //   this.selectedProperties.splice(
    //     event.newIndex,
    //     0,
    //     this.selectedProperties.splice(event.oldIndex, 1)[0]
    //   );
    // },

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
        // console.log(JSON.stringify(newVal, null, 2));
      },
    },

    showTriggers: {
      immediate: true,
      handler(val) {
        if (val) {
          this.$nextTick();
          setTimeout(() => {
            this.$vuetify.goTo(this.$refs.action, this.scrollOptions);
          }, 1500);
        }
      },
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

// .actions-icon {
//   width: 24px;
//   height: 24px;
//   object-fit: cover;
// }
</style>
