<template>
  <v-dialog v-model="dialog" max-width="650px" transition="dialog-transition">
    <div class="action">
      <div class="action__header">
        <div class="b">
          <img class="i" src="@/assets/actions-send-payment.svg" alt="" />
          <span class="t">Send Payment</span>
        </div>

        <v-btn @click="close" icon color="primary">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </div>
      <div class="action__content">
        <div class="top">
          <span class="action-title">PAYMENT</span>
          <div>
            <span class="bal-title">Wallet Balance</span>
            <span class="bal">{{ walletBalance }}</span>
          </div>
        </div>

        <span class="action-description">
          Payment will be made to the vendor data within this workflow, if no
          vendor data is found at the time of execution the workflow will be
          terminated at this point.
        </span>

        <div class="a-wrapper">
          <div class="payee">
            <div class="head">
              <img src="@/assets/actions-update-vendor.svg" alt="update" />
              <span>Payee Info</span>
            </div>

            <v-btn icon color="#7F919B"><v-icon>mdi-chevron-up</v-icon></v-btn>
          </div>

          <v-radio-group v-model="verified">
            <v-radio
              color="primary"
              label="Verified vendor only"
              value="yes"
            ></v-radio>
          </v-radio-group>
        </div>
        <br />
        <br />

        <div class="a-wrapper2">
          <div class="paymentType">
            <div class="option">
              <v-radio-group v-model="paymentType">
                <v-radio
                  color="primary"
                  label="full payment"
                  value="full"
                ></v-radio>
              </v-radio-group>
            </div>

            <div class="option">
              <v-radio-group v-model="paymentType">
                <v-radio
                  color="primary"
                  label="part payment"
                  value="part"
                ></v-radio>
              </v-radio-group>
            </div>
          </div>

          <div v-if="paymentType == 'full'" class="fullPayment">
            <v-chip @click="when = 0" :color="when === 0 ? 'primary' : ''">
              <v-avatar>
                <v-icon>mdi-clock</v-icon>
              </v-avatar>
              Instant
            </v-chip>

            <v-chip
              @click="customDaysDialog = true"
              :color="when > 0 ? 'primary' : ''"
            >
              <v-avatar>
                <v-icon>mdi-clock</v-icon>
              </v-avatar>
              {{
                when === 0 || when === null
                  ? "set custom days"
                  : `In ${when} ${when === 1 ? "day" : "days"}`
              }}
            </v-chip>
          </div>

          <div v-if="paymentType == 'part'">
            <div class="fullPayment">
              <v-chip @click="part = 20" :color="part === 20 ? 'primary' : ''">
                20%
              </v-chip>

              <v-chip @click="part = 50" :color="part === 50 ? 'primary' : ''">
                50%
              </v-chip>

              <v-chip
                @click="partPaymentDialog = true"
                :color="
                  part === 20 || part === 50 || part === '' ? '' : 'primary'
                "
              >
                {{
                  part === 20 || part === 50 || part === ""
                    ? "Custom"
                    : part + "%"
                }}
              </v-chip>
            </div>
            <v-divider></v-divider>
            <div class="fullPayment">
              <v-chip @click="when = 0" :color="when === 0 ? 'primary' : ''">
                <v-avatar>
                  <v-icon>mdi-clock</v-icon>
                </v-avatar>
                Instant
              </v-chip>

              <v-chip
                @click="customDaysDialog = true"
                :color="when > 0 ? 'primary' : ''"
              >
                <v-avatar>
                  <v-icon>mdi-clock</v-icon>
                </v-avatar>
                {{
                  when === 0 || when === null
                    ? "set custom days"
                    : `In ${when} ${when === 1 ? "day" : "days"}`
                }}
              </v-chip>
            </div>
          </div>
        </div>

        <!-- <span class="note">
          <b>Note:</b> Approval request will be sent to the selected co-worker,
          along with details of this workflow
        </span> -->

        <div class="bottom">
          <v-btn @click="close" large color="primary" outlined>
            <v-icon left>mdi-close</v-icon> Cancel
          </v-btn>

          <v-btn @click="addToWorkflow" large color="primary" elevation="0">
            <v-icon left>mdi-chevron-right</v-icon> Add to workflow
          </v-btn>
        </div>
      </div>
    </div>

    <v-dialog
      v-model="customDaysDialog"
      max-width="400px"
      transition="dialog-transition"
    >
      <div class="customDaysDialog">
        <v-text-field
          name="name"
          prepend-inner-icon="mdi-calendar"
          label="Number of days"
          placeholder="Enter number of days"
          type="number"
          outlined
          v-model="when"
        ></v-text-field>
      </div>
    </v-dialog>

    <v-dialog
      v-model="partPaymentDialog"
      max-width="400px"
      transition="dialog-transition"
    >
      <div class="customDaysDialog">
        <v-text-field
          name="name"
          label="Payment percentage"
          placeholder="Enter percentage"
          type="number"
          prefix="%"
          outlined
          v-model="part"
        ></v-text-field>
      </div>
    </v-dialog>
  </v-dialog>
</template>

<script>
export default {
  props: {
    value: {
      default: null,
    },
    trigger: {
      default: null,
    },
  },
  data() {
    return {
      dialog: false,
      verified: "yes",
      paymentType: "full",
      when: null,
      partPaymentDialog: false,
      customDaysDialog: false,
      part: "",
    };
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
        type: "hyphenSendPayment",
        properties: {
          keys: [
            "trigger",
            "invoice",
            "organization",
            "type",
            "when",
            "part",
            "name",
          ],
          values: [
            this.trigger,
            "@invoice_total",
            this.orgId.toString(),
            this.paymentType,
            this.when.toString(),
            this.part.toString(),
            "payment",
          ],
        },
      };

      this.$emit("input", payload);
      this.sendOutChannel();
      this.close();
    },
    sendOutChannel() {
      let channel = this.paymentType === "full" ? "Full" : "Part" || "N/A";

      this.$emit("channel", channel);
    },
  },
  watch: {
    dialog(val) {
      if (val) {
        this.$emit("open");
      } else {
        this.$emit("close");
      }
    },
    // value: {
    //   immediate: true,
    //   deep: true,
    //   handler(val) {
    //     console.log(JSON.stringify(val, null, 2));
    //   },
    // },
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
      display: flex;
      justify-content: space-between;

      .action-title {
        color: var(--v-primary-base);
        text-transform: uppercase;
        font-weight: 600;
        border-bottom: 5px solid var(--v-primary-base);
        font-size: 16px;
        height: 45px;
        padding: 0px 15px;
        padding-top: 5px;
        display: inline-block;
      }

      .bal-title {
        font-size: 13px;
        color: var(--v-primary-base);
        display: block;
      }

      .bal {
        font-size: 17px;
        color: var(--v-primary-base);
        font-weight: 600;
      }
    }

    .action-description {
      color: var(--v-primary-base);
      display: block;
      padding: 20px 0px;
      font-size: 16px;
    }

    .a-wrapper,
    .a-wrapper2 {
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

  .a-wrapper2 {
    padding: 0px;
  }

  .payee {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .head {
      display: flex;
      align-items: center;
      gap: 10px;

      img {
        width: 25px;
        height: 25px;
        object-fit: fit;
      }
    }
  }

  .paymentType {
    display: flex;

    .option {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid #d9dee1;
    }
  }

  .fullPayment {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    padding: 20px;
  }
}

.customDaysDialog {
  background-color: #f8f7f4;
  padding: 50px;
  border: 1px solid #d9dee1;
  border-radius: 4px;
}
</style>
