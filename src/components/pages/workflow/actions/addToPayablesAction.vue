<template>
  <v-dialog v-model="dialog" max-width="650px" transition="dialog-transition">
    <div class="action">
      <div class="action__header">
        <div class="b">
          <img class="i" src="@/assets/actions-add-to-payables.svg" alt="" />
          <span class="t">Add To Payble</span>
        </div>

        <v-btn @click="close" icon color="primary">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </div>
      <div class="action__content">
        <div class="top">
          <span class="action-title">PAYABLE</span>
        </div>

        <span class="action-description"
          >Create a new payable entry using transaction data within the
          workflow</span
        >

        <div class="a-wrapper">
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field
                outlined
                color="primary"
                v-model="invoice_no"
                label="Invoice No"
                hide-details="auto"
                placeholder="Total"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                name="Amount Due"
                label="Amount Due"
                v-model="amount_due"
                placeholder="Enter value"
                hide-details="auto"
                outlined
                primary
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6">
              <v-menu
                ref="menu1"
                v-model="menu1"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                max-width="290px"
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="dateFormatted"
                    label="Due Date"
                    v-bind="attrs"
                    outlined
                    @blur="due_date = parseDate(dateFormatted)"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  name="Due date"
                  label="Due Date"
                  v-model="due_date"
                  placeholder="Calendar"
                  hide-details="auto"
                  outlined
                  no-title
                  @input="menu1 = false"
                  color="primary"
                ></v-date-picker>
              </v-menu>
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

          <v-btn large color="primary" elevation="0" :disabled="!canAddToWorkflow" @click="addToWorkflow">
            <v-icon left>mdi-chevron-right</v-icon> SAVE
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
        type: "hyphenAddToPayables",
        properties: {
          keys: [
            "invoice_no",
            "amount_due",
            "due_date",
            "organization",
            "name",
          ],
          values: [],
        },
      },
    },
  },
  data() {
    return {
      dialog: false,
      invoice_no: "@invoiceNumber",
      amount_due: "",
      due_date: "",
      menu1: null,
      dateFormatted: "",
    };
  },
  mounted() {
    this.mapForm();
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
        type: "hyphenAddToPayables",
        properties: {
          keys: [
            "invoice_no",
            "amount_due",
            "due_date",
            "organization",
            "name",
          ],
          values: [
            this.invoice_no,
            this.amount_due,
            this.due_date,
            this.orgId,
            "payables",
          ],
        },
      };

      this.$emit("input", payload);
      this.sendOutChannel();
      this.close();
    },

    sendOutChannel() {
      this.$emit("channel", "₦" + this.amount_due);
    },

    mapForm() {
      if (this.value) {
        this.invoice_no =
          this.value.properties.values[
            this.value.properties.keys.indexOf("invoice_no")
          ];

        this.amount_due =
          this.value.properties.values[
            this.value.properties.keys.indexOf("amount_due")
          ];

        this.due_date =
          this.value.properties.values[
            this.value.properties.keys.indexOf("due_date")
          ];

        this.sendOutChannel();
      }
    },

    parseDate(date) {
      if (!date) return null;

      const [month, day, year] = date.split("/");
      return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    },

    formatDate(date) {
      if (!date) return null;

      const [year, month, day] = date.split("-");
      return `${month}/${day}/${year}`;
    },
  },

  computed:{
    canAddToWorkflow() {
      return this.invoice_no && this.amount_due && this.due_date;
    }
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

    due_date(val) {
      this.dateFormatted = this.formatDate(val);
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
      margin: 40px 0px;
      gap: 20px;
    }
  }
}
</style>
