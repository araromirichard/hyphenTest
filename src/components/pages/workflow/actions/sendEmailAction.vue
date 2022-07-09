<template>
  <v-dialog v-model="dialog" max-width="650px" transition="dialog-transition">
    <div class="action">
      <div class="action__header">
        <div class="b">
          <img class="i" src="@/assets/actions-send-email.svg" alt="" />
          <span class="t">Send Email</span>
        </div>

        <v-btn @click="close" icon color="primary">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </div>
      <div class="action__content">
        <div class="top">
          <span class="action-title">Send Email</span>
        </div>

        <!-- <span class="action-description"
          >Select the co-worker from who approval is required for this
          stage</span
        > -->

        <div style="margin-top: 30px" class="a-wrapper">
          <v-row>
            <v-col cols="12">
              <v-text-field
                name="Subject"
                label="Subject"
                placeholder="Subject"
                v-model="data.subject"
                hide-details="auto"
                outlined
                primary
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-combobox
                outlined
                color="primary"
                label="To:"
                :items="workers"
                hide-no-data
                height="60px"
                search-input="search"
                v-model="data.to"
                hide-details="auto"
                placeholder="To:"
              ></v-combobox>
            </v-col>
            <v-col cols="12" sm="6">
              <v-combobox
                multiple
                :items="workers"
                name="CC"
                chips
                hide-no-data
                height="60px"
                label="CC"
                v-model="data.cc"
                placeholder="Subject"
                hide-details="auto"
                outlined
                primary
              ></v-combobox>
            </v-col>

            <v-col cols="12">
              <v-textarea
                name="Message"
                label="Message"
                placeholder="Message"
                v-model="data.message"
                hide-details="auto"
                outlined
                primary
              ></v-textarea>
            </v-col>
          </v-row>
        </div>

        <!-- <span class="note">
          <b>Note:</b> Approval request will be sent to the selected co-worker,
          along with details of this workflow
        </span> -->

        <div class="bottom">
          <v-btn @click="close" large color="primary" outlined>
            <v-icon left>mdi-close</v-icon> Cancel
          </v-btn>

          <v-btn
            @click="addToWorkflow"
            :disabled="!canAddToWorkflow"
            large
            color="primary"
            elevation="0"
          >
            <v-icon left>mdi-chevron-right</v-icon> Add to workflow
          </v-btn>
        </div>
      </div>
    </div>
  </v-dialog>
</template>

<script>
export default {
  props: {
    value: {
      default: {
        text: "Send Email",
        type: "sendEmail",
        icon: require("@/assets/actions-send-email.svg"),
        active: true,
        meta: {
          type: "hyphenEmail",
          properties: {
            keys: ["subject", "message", "to", "cc", "organization", "name"],
            values: ["", "", "", "", "", ""],
          },
        },
      },
    },
  },
  data() {
    return {
      dialog: false,
      workers: [],
      isLoadingWorkers: false,
      data: {
        subject: "",
        to: null,
        cc: null,
        message: "",
      },
    };
  },
  mounted() {
    this.mapForm();
    this.getCoworkers();
  },
  methods: {
    open() {
      this.dialog = true;
    },
    close() {
      this.dialog = false;
    },
    addToWorkflow() {
      const payload = {
        type: "hyphenEmail",
        properties: {
          keys: ["subject", "message", "to", "cc", "organization", "name"],
          values: [
            this.data.subject,
            this.data.message,
            this.data.to,
            this.data.cc,
            this.orgId.toString(),
            "email",
          ],
        },
      };
      this.$emit("input", payload);
      this.sendOutChannel();
      this.close();
    },
    mapForm() {
      if (this.value) {
        // set subject
        this.data.subject =
          this.value.properties.values[
            this.value.properties.keys.indexOf("subject")
          ];
        // set message
        this.data.message =
          this.value.properties.values[
            this.value.properties.keys.indexOf("message")
          ];
        // set to
        this.data.to =
          this.value.properties.values[
            this.value.properties.keys.indexOf("to")
          ];
        // set cc
        this.data.cc =
          this.value.properties.values[
            this.value.properties.keys.indexOf("cc")
          ];
      }
      this.sendOutChannel();
    },
    sendOutChannel() {
      this.$emit("channel", this.data.to);
    },

    async getCoworkers() {
      try {
        this.isLoadingWorkers = true;
        const response = await this.$store.dispatch(
          "organizations/fetchCoWorkers"
        );
        this.workers = response.map((worker) => worker.email);

        //  this.sendOutChannel()
      } catch (err) {
        console.log(JSON.stringify(err, null, 2));
      } finally {
        this.isLoadingWorkers = false;
      }
    },
  },

  computed: {
    canAddToWorkflow() {
      return this.data.subject && this.data.message && this.data.to;
    },
  },
  watch: {
    dialog(val) {
      if (val) {
        this.mapForm();
        this.$emit("open");
      } else {
        this.$emit("close");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.action {
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
    background-color: #f8f7f4;
    padding: 20px 50px;
    .top {
      padding: 30px 0px 0px 0px;
      box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.1);
      .action-title {
        color: var(--v-primary-base);
        text-transform: uppercase;
        font-weight: 600;
        border-bottom: 5px solid var(--v-primary-base);
        font-size: 16px;
        height: 40px;
        padding: 0px 15px;
        display: inline-block;
      }
    }
    .action-description {
      color: var(--v-primary-base);
      display: block;
      padding: 20px 0px;
      font-size: 16px;
    }
    .a-wrapper {
      background-color: #fff;
      padding: 20px;
      border: 1px solid #d9dee1;
      border-radius: 4px;
    }
    .note {
      display: block;
      margin-top: 10px;
      color: #8f96a1;
    }
    .bottom {
      display: flex;
      justify-content: flex-end;
      margin: 30px 0px;
      gap: 20px;
    }
  }
}
</style>
