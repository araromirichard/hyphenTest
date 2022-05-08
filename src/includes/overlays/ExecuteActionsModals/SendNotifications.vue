<template>
  <div>
    <v-dialog v-model="dialog" max-width="574">
      <v-card height="722" color="#f8f7f4" class="rounded-lg">
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
            >ACTION: Send Notification</span
          >
          <v-spacer></v-spacer>
          <v-icon
            tag="button"
            @click="dialog = false"
            class="text-bolder"
            color="#596A73"
          >
            mdi-close
          </v-icon>
        </v-card-title>
        <div class="px-8 d-flex" style="background: #fdfaf2">
          <v-tabs v-model="tab" background-color="#fdfaf2" grow>
            <v-tab v-for="item in notificationType" :key="item">
              {{ item }}
            </v-tab>
          </v-tabs>
        </div>
        <v-tabs-items v-model="tab">
          <v-tab-item>
            <v-card style="background-color: transparent" flat>
              <v-form v-model="form">
                <h6
                  class="pt-11 ml-12"
                  style="
                    font-family: Inter;
                    font-style: normal;
                    font-weight: bold;
                    font-size: 14px;
                    line-height: 15px;
                    color: #301f78;
                  "
                >
                  Get approval from
                </h6>
                <div>
                  <h6 class="headerText pt-5 pb-1">People</h6>
                  <v-select
                    hide-details="auto"
                    dense
                    background-color="#ffffff"
                    class="select"
                    placeholder="Select one or more"
                    outlined
                  ></v-select>
                </div>

                <div>
                  <h5 class="headerText pt-5 pb-1">Message</h5>

                  <v-textarea
                    :disabled="form"
                    height="160"
                    no-resize
                    full-width
                    flat
                    outlined
                    solo
                    hide-details="false"
                    :value="message"
                    style="
                      margin-left: 52px;
                      margin-right: 57px;
                      background: #ffffff;
                      font-family: Inter;
                      font-style: normal;
                      font-weight: normal;
                      font-size: 12px;
                      color: #7f919b;
                    "
                  >
                  </v-textarea>

                  <v-btn
                    @click="formState"
                    plain
                    small
                    color="success"
                    class="text-capitalize ml-10 mt-0"
                  >
                    <v-icon x-small>mdi-plus</v-icon>
                    <span v-if="form"> Edit message </span>
                    <span v-else>Save message</span>
                  </v-btn>
                </div>
                <v-card-text
                  class="ma-0 pa-0"
                  style="
                    font-family: Inter;
                    font-style: normal;
                    font-size: 12px;
                    line-height: 22px;
                    letter-spacing: 0.45px;
                    color: #7f919b;
                  "
                >
                  <span class="font-weight-bold ml-13">Note:</span>Approval OTP
                  will be sent along with your custom message above.
                </v-card-text>
                <v-card-actions class="justify-end pa-8">
                  <v-btn
                    @click="saveAction"
                    dark
                    width="121"
                    height="45"
                    style="
                      margin-right: 57px;
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
                        font-size: 12px;
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
                      >save</span
                    >
                  </v-btn>
                </v-card-actions>
              </v-form>
            </v-card>
          </v-tab-item>

          <!-- SIMPLE NOTIFICATION -->
          <v-tab-item>
            <v-card style="background-color: transparent" flat>
              <v-form v-model="form">
                <h6
                  class="pt-11 ml-12"
                  style="
                    font-family: Inter;
                    font-style: normal;
                    font-weight: bold;
                    font-size: 14px;
                    line-height: 15px;
                    color: #301f78;
                  "
                >
                  Notify any email or webhook
                </h6>
                <div>
                  <h6 class="headerText pt-5 pb-1">Email Address</h6>
                  <v-text-field
                    background-color="#ffffff"
                    dense
                    hide-details="auto"
                    outlined
                    style="margin-left: 52px; margin-right: 290px"
                  ></v-text-field>
                  <h6 class="headerText pt-5 pb-1">Webhook</h6>
                  <v-text-field
                    background-color="#ffffff"
                    dense
                    hide-details="auto"
                    outlined
                    style="margin-left: 52px; margin-right: 290px"
                  ></v-text-field>
                </div>

                <div>
                  <h5 class="headerText pt-5 pb-1">Message</h5>

                  <v-textarea
                    :disabled="form"
                    height="160"
                    no-resize
                    full-width
                    flat
                    outlined
                    solo
                    hide-details="false"
                    :value="message"
                    style="
                      margin-left: 52px;
                      margin-right: 57px;
                      background: #ffffff;
                      font-family: Inter;
                      font-style: normal;
                      font-weight: normal;
                      font-size: 12px;
                      color: #7f919b;
                    "
                  >
                  </v-textarea>

                  <v-btn
                    @click="formState"
                    plain
                    small
                    color="success"
                    class="text-capitalize ml-10 mt-0"
                  >
                    <v-icon x-small>mdi-plus</v-icon>
                    <span v-if="form"> Edit message </span>
                    <span v-else>Save message</span>
                  </v-btn>
                </div>

                <v-card-actions class="justify-end pa-8">
                  <v-btn
                    @click="saveAction"
                    dark
                    width="121"
                    height="45"
                    style="
                      margin-right: 57px;
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
                        font-size: 12px;
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
                      >save</span
                    >
                  </v-btn>
                </v-card-actions>
              </v-form>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-card>
    </v-dialog>

    <v-dialog :value="dialog2" v-model="dialog2" max-width="574px">
      <v-card height="722" color="#f8f7f4" class="rounded-lg">
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
            >Confirmation</span
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
        <div
          class="mx-auto text-center"
          style="
            margin-top: 70px;
            font-family: Inter;
            font-style: normal;
            font-weight: bold;
            font-size: 32px;
            line-height: 39px;
            color: #301f78;
          "
        >
          <h4>Completed</h4>

          <v-card-text>
            <v-img
              class="mx-auto justify-center my-8"
              :src="require('@/assets/pbot_icons/confirmation-success.png')"
              alt="confirm image"
              width="180px"
            ></v-img>
          </v-card-text>
        </div>
        <div class="justify-center mt-9">
          <v-btn
            @click="goBack"
            dark
            width="132"
            height="45"
            style="
              margin-left: 221px;
              background: var(--v-primary-base);
              box-shadow: 0px 12px 22px rgba(0, 0, 0, 0.24);
              border-radius: 4px;
            "
          >
            <simple-line-icons
              icon="arrow-left"
              color="#FFFFFF"
              style="
                font-family: simple-line-icons;
                font-style: normal;
                font-weight: normal;
                font-size: 12px;
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
              >Go Back</span
            >
          </v-btn>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      dialog2: false,
      switch1: false,
      switch2: false,
      radioGroup: null,
      customDueDate: null,
      form: true,
      tab: null,
      message: `
      Hello {{Name}}
        Invoice no {{pay_id}} is pending your approval for payment.
        The total value is {{inv_total}}, on behalf of payee {{payee_name}}
        {{payee_type}}.
        `,

      notificationType: ["Approval Notification", "Simple Notification"],
    };
  },
  methods: {
    show(value) {
      this.dialog = value;
    },

    formState() {
      this.form = !this.form;
    },

    goBack() {
      this.dialog = true;
      this.dialog2 = false;
    },

    saveAction() {
      let data = {
        type: "SendNotifications",
        properties: {
          keys: [
            "to",
            "from",
            "text",
            "type",
            "orgid",
            "subject",
            "template",
            "url",
            "webhook",
          ],
          values: [
            "to-value",
            "from-value",
            "text-value",
            "type-value",
            "orgid-value",
            "subject-value",
            "template-value",
            "url-value",
            "webhook-value",
          ],
        },
      };

      // push out the details entered
      this.$emit("input", data);
      this.dialog = false;
      this.dialog2 = true;
    },
  },
};
</script>

<style scoped>
.chipText {
  font-family: "Inter";
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  color: #7f919b;
}
.headerText {
  margin-left: 52px;
  font-family: "Inter";
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0.45px;
  color: #7f919b;
}
i.sli-font {
  font-size: 12px;
  display: inline-block;
}
.select {
  margin-right: 260px;
  margin-left: 52px;
}
.theme--light.v-tabs-items {
  background-color: transparent !important;
}
</style>
