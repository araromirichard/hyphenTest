<template>
  <v-dialog v-model="dialog" max-width="650px" transition="dialog-transition">
    <div class="action">
      <div class="action__header">
        <div class="b">
          <img class="i" src="@/assets/actions-send-form.svg" alt="" />
          <span class="t">Send Form</span>
        </div>

        <v-btn @click="close" icon color="primary">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </div>
      <div class="action__content">
        <div class="top">
          <span class="action-title">FORM</span>
        </div>

        <span class="action-description"
          >Select a form to be sent to a recipient by email. Recipient will get
          the link to the form by email</span
        >

        <div class="a-wrapper">
          <v-row>
            <v-col cols="12" sm="6">
              <v-select
                outlined
                color="primary"
                label="Form"
                v-model="data.form"
                :items="forms"
                :loading="isLoadingForms"
                 item-text="form_title"
                 item-value="id"
                hide-details="auto"
                placeholder="Form"
              ></v-select>
            </v-col>
            <v-col cols="12" sm="6">
              <v-combobox
                name="Recipient"
                label="Recipient"
                type="email"
                v-model="data.recipient"
                :items="emailLists"
                :loading="isLoadingEmails"
                placeholder="Recipient"
                hide-details="auto"
                outlined
                primary
              ></v-combobox>
            </v-col>
          </v-row>
        </div>

        <span class="note">
          <b>Note:</b> if an email is missing from the trigger data, this action
          will be skipped. Where more than one email is found, the first in the
          sequence will be used
        </span>

        <div class="bottom">
          <v-btn @click="close" large color="primary" outlined>
            <v-icon left>mdi-close</v-icon> Cancel
          </v-btn>

          <v-btn @click="addToWorkflow" :disabled="!canAddToWorkflow" large color="primary" elevation="0">
            <v-icon left>mdi-chevron-right</v-icon> Add to FLow
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
        type: "hyphenForm",
        properties: {
          keys: ["form id", "form name", "identity", "organization", "name"],
          values: ["", "", "", "", "form"],
        },
      },
    },
  },
  data() {
    return {
      dialog: false,
      forms: [
       
      ],
      data: {
        form: "",
        recipient: "",
      },
      emailLists:[],
      isLoadingEmails: false,
      isLoadingForms:false
    };
  },
  mounted() {
    this.mapForm();
    this.fetchOrgForms()
    this.getCoworkers()
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
        type: "hyphenForm",
        properties: {
          keys: ["form id", "form name", "identity", "organization", "name"],
          values: [
            this.data.form,
            this.forms.find((form) => form.id == this.data.form).form_title,
            this.data.recipient,
            this.orgId,
            "form",
          ],
        },
      };

      this.$emit("input", payload);
      this.sendOutChannel();
      this.close();
    },

    mapForm() {
      if (this.value) {
        this.data.form =
          this.value.properties.values[
            this.value.properties.keys.indexOf("form id")
          ];
        this.data.recipient =
          this.value.properties.values[
            this.value.properties.keys.indexOf("identity")
          ];

        this.sendOutChannel();
      }
    },

    sendOutChannel() {
      let channel =
        this.forms.find((form) => form.id == this.data.form)?.form_title || "N/A";
      this.$emit("channel", channel);
    },


     async fetchOrgForms() {
      try {
        this.isLoadingForms = true;
        const { data } = await this.$store.dispatch(
          "formBuilder/FetchAllForms"
        );
        this.forms = data;
      } catch (err) {
        console.log(err);
      } finally {
        this.isLoadingForms = false;
      }
    },

      async getCoworkers() {
      try {
        this.isLoadingEmails = true;
        const response = await this.$store.dispatch(
          "organizations/fetchCoWorkers"
        );
        this.emailLists = response.map((worker) => worker.email);
      } catch (err) {
        console.log(JSON.stringify(err, null, 2));
      } finally {
        this.isLoadingEmails = false;
      }
    },
  },
  computed: {
    canAddToWorkflow() {
      return (
        this.data.form && this.data.recipient && this.data.form != "" && this.data.recipient != ""
      );
    },
  },

  watch: {
    dialog(val) {
      if (val) {
        this.$emit("open");
        this.mapForm();
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
      margin: 20px 0px;
      gap: 20px;
    }
  }
}
</style>
