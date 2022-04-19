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
            <v-chip>
              <v-avatar>
                <v-icon>mdi-clock</v-icon>
              </v-avatar>
              Instant
            </v-chip>

            <v-chip>
              <v-avatar>
                <v-icon>mdi-clock</v-icon>
              </v-avatar>
              In 30 Days
            </v-chip>

            <v-chip>
              <v-avatar>
                <v-icon>mdi-calendar</v-icon>
              </v-avatar>
              Custom
            </v-chip>
          </div>

          <div v-if="paymentType == 'part'" class="fullPayment">
            <v-chip> 20% </v-chip>

            <v-chip> 50% </v-chip>

            <v-chip> Custom </v-chip>
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

          <v-btn large color="primary" elevation="0">
            <v-icon left>mdi-chevron-right</v-icon> Add to workflow
          </v-btn>
        </div>
      </div>
    </div>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      verified: "yes",
      paymentType: "full",
    };
  },
  methods: {
    open() {
      this.dialog = true;
    },
    close() {
      this.dialog = false;
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
      width: 40px;
      height: 40px;
      object-fit: fit;
    }

    .t {
      color: var(--v-primary-base);
      font-weight: 600;
      font-size: 20px;
    }
  }

  &__content {
    background-color: #fefcf8;
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
</style>
