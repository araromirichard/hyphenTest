<template>
  <div>
    <v-item-group @change="selectedActionChanged" v-model="selectedAction">
      <v-row style="margin-right: 300px">
        <v-col v-for="(item, i) in actions" :key="i" cols="12" sm="4">
          <v-item :value="item" v-slot:default="{ active, toggle }">
            <v-card
              @click="toggle"
              :elevation="active ? 4 : 0"
              class="
                d-flex
                align-text-center
                flex-column
                rounded-lg
                elevation-0
              "
              tile
              :style="{
                border: active
                  ? '1px solid #6f7dc9'
                  : ' 1px solid rgba(49, 27, 146, 0.2)',
              }"
              style="
                width: auto;
                height: 180px;
                background: #ffffff;
                box-sizing: border-box;
                border-radius: 8px;
              "
            >
              <v-img
                v-if="item.text == 'Add Custom'"
                contain
                src="@/assets/pbot_icons/cross.png"
                width="24.06px"
                height="24.1px"
                style="
                  position: absolute;
                  width: 34.06px;
                  height: 34.1px;
                  left: 115px;
                  top: 40px;
                "
              >
              </v-img>
              <v-img
                v-else
                contain
                src="@/assets/pbot_icons/rocket-pbot.png"
                width="24.06px"
                height="24.1px"
                style="
                  position: absolute;
                  width: 34.06px;
                  height: 34.1px;
                  left: 115px;
                  top: 40px;
                "
              >
              </v-img>
              <v-card
                @click="showDialog(item.modalKey)"
                dark
                tile
                class="rounded-b-lg elevation-0 text-center"
                style="
                  width: 100%;
                  height: 78px;
                  position: absolute;
                  bottom: 0;
                  background: #fcfcfc;
                  border-top: 1px solid rgba(49, 27, 146, 0.2);
                  box-sizing: border-box;
                "
              >
                <v-card-text
                  class="
                    text-primary
                    mx-auto
                    text-center text-break text-body-1
                  "
                  style="
                    font-family: Inter;
                    font-style: normal;
                    font-weight: 500;
                    font-size: 12px;
                    line-height: 18px;
                    text-align: center;
                    letter-spacing: 0.45px;
                    color: #301f78;
                    mix-blend-mode: normal;
                    opacity: 0.5;
                    max-width: 10.5rem;
                  "
                >
                  {{ item.text }}
                </v-card-text>
              </v-card>
            </v-card>
          </v-item>
        </v-col>
      </v-row>
    </v-item-group>
    <AddToPayables ref="addToPayables" />
    <CreateDocument ref="CreateDocument" />
    <SendNotifications ref="SendNotifications" />
    <SendPayment ref="SendPayment" />
    <UpdateERP ref="UpdateERP" />
  </div>
</template>

<script>
import AddToPayables from "../includes/overlays/ExecuteActionsModals/AddToPayables.vue";
import SendPayment from "../includes/overlays/ExecuteActionsModals/SendPayment.vue";
import UpdateERP from "../includes/overlays/ExecuteActionsModals/UpdateERP.vue";
import CreateDocument from "./overlays/ExecuteActionsModals/CreateDocument.vue";
import SendNotifications from "./overlays/ExecuteActionsModals/SendNotifications.vue";
export default {
  name: "ExecuteActions",
  data() {
    return {
      dialog: false,
      switch1: false,
      actions: [
        {
          text: "Send Payment",
          modalKey: "SendPayment",
        },
        {
          text: "Add to Payables",
          modalKey: "addToPayables",
        },
        {
          text: "Send Notification",
          modalKey: "SendNotifications",
        },
        {
          text: "Update ERP/Accounting",
          modalKey: "UpdateERP",
        },
        {
          text: "Create Document",
          modalKey: "CreateDocument",
        },
        {
          text: "Add Custom",
          modalKey: "",
        },
      ],
      selectedAction: null,
    };
  },
  components: {
    AddToPayables,
    SendPayment,
    UpdateERP,
    CreateDocument,
    SendNotifications,
  },

  methods: {
    closeDialog() {
      this.dialog = false;
    },

    selectedActionChanged(e) {
      console.table({
        e,
        selectedAction: this.selectedAction,
        text: e ? e.text : null,
      });
    },
    triggerDialog(item) {
      this.selectedAction = item;
      this.dialog = true;
    },
    showDialog(ref) {
      this.$refs[ref].show(true);
    },
  },
};
</script>

<style scoped></style>
