<template>
  <div class="approval-page">
    <div class="approval-page__wrapper">
      <img class="approval-page__logo" src="@/assets/hyphen-logo.svg" alt="" />

      <template v-if="step == 1">
        <div>{{ optData }}</div>
        <br />
        <br />

        <v-progress-circular
          v-if="optData === null"
          indeterminate
        ></v-progress-circular>

        <template v-else>
          <v-text-field
            name="name"
            label="OTP"
            v-model="otp"
            outlined
            placeholder="OTP"
          ></v-text-field>

          <div class="d-flex mt-3" style="justify-content: end">
            <v-btn
              :loading="isVeryfying"
              color="primary"
              @click="confirm"
              large
              elevation="0"
            >
              <v-icon>mdi-chevron-right</v-icon> Confirm</v-btn
            >
          </div>
        </template>
      </template>

      <template v-if="step == 2">
        <span class="approval-page__desc">{{ approvalMsg }}</span>
        <div class="d-flex" style="gap: 20px; margin: 0px 30px">
          <v-btn
            style="background-color: #f4f5f6; flex: 1"
            large
            elevation="0"
            :loading="denying"
            @click="denyA"
          >
            <v-icon left>mdi-chevron-right</v-icon> Deny</v-btn
          >
          <v-btn
            @click="approveA"
            color="primary"
            style="flex: 1"
            large
            :loading="approving"
            elevation="0"
            left
          >
            <v-icon left>mdi-chevron-right</v-icon> Approve</v-btn
          >
        </div>
      </template>

      <template v-if="step == 3">
        <div v-if="approve">
          <v-btn fab x-large color="success" outlined>
            <v-icon>mdi-check</v-icon>
          </v-btn>

          <span
            style="margin-top: 30px; padding: 0 65px"
            class="approval-page__desc"
            >Thank you, your selected action <b>- APPROVE -</b> has been
            confirmed.</span
          >
        </div>

        <div v-if="deny">
          <v-btn fab x-large color="error" outlined>
            <v-icon>mdi-close</v-icon>
          </v-btn>

          <span
            style="margin-top: 30px; padding: 0 65px"
            class="approval-page__desc"
            >Thank you, your selectd action <b>- DENY -</b> has been
            confirmed.</span
          >
        </div>
      </template>

      <div class="approval-page__footer">
        powered by
        <img :src="require('@/assets/icons/newLogo.svg')" alt="logo" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      step: 1,
      otp: null,
      deny: false,
      approve: false,
      approving: false,
      denying: false,
      optData: null,
      approvalMsg: "",
      isVeryfying: false,
      approvalUrl: null,
    };
  },
  mounted() {
    this.fetchOtp();
  },

  methods: {
    ...mapActions({ showToast: "ui/showToast" }),
    async fetchOtp() {
      try {
        const { data } = await this.$store.dispatch(
          "workflow/fetchApprovalOTP",
          this.$route.query.token
        );
        this.optData = data.data.message;
      } catch (error) {
        console.log(error);
      }
    },
    async denyA() {
      this.deny = true;
      try {
        this.denying = true;
        await this.$store.dispatch("workflow/approvalStatus", {
          url: this.approvalUrl,
          action: 0,
        });
        this.step = 3;
        this.approve = false;
      } catch (error) {
        this.showToast({
          sclass: "error",
          show: true,
          message: error.msg || "An error occurred",
          timeout: 3000,
        });
      } finally {
        this.denying = false;
      }
    },

    async approveA() {
      this.deny = false;
      try {
        this.approving = true;
        await this.$store.dispatch("workflow/approvalStatus", {
          url: this.approvalUrl,
          action: 1,
        });
        this.step = 3;
        this.approve = true;
      } catch (error) {
        console.log(JSON.stringify(error, null, 2));
        this.showToast({
          sclass: "error",
          show: true,
          message: error.msg || "An error occurred",
          timeout: 3000,
        });
      } finally {
        this.approving = false;
      }
    },

    async confirm() {
      try {
        this.isVeryfying = true;
        const { data } = await this.$store.dispatch(
          "workflow/verifyApprovalOTP",
          {
            token: this.$route.query.token,
            otp: this.otp,
          }
        );
        this.step = 2;
        this.approvalUrl = data.data;
        this.approvalMsg = data.data.message;
      } catch (error) {
        console.log(JSON.stringify(error, null, 2));
        this.showToast({
          sclass: "error",
          show: true,
          message: error.msg || "An error occurred",
          timeout: 3000,
        });

        if (
          error.msg === "OTP failed verification, not valid or already used" ||
          error.msg ===
            "Invalid action: Approval already recorded, no further action required"
        ) {
          this.$router.replace("/workflow");
        }
      } finally {
        this.isVeryfying = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.approval-page {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__wrapper {
    display: inline-block;
    background: #ffffff;
    box-shadow: 0px 4px 16px rgba(204, 188, 252, 0.15);
    border-radius: 4px;
    text-align: center;
    max-width: 400px;
    width: 90%;
    padding: 30px;
  }

  &__logo {
    width: 100px;
    height: 100px;
    margin: 40px auto 40px auto;
  }

  &__desc {
    font-size: 14px;
    color: #19283dcc;
    display: block;
    text-align: center;
    margin: 10px 0px 40px 0px;
    line-height: 24px;
  }

  &__footer {
    margin: 60px 0 5px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    color: #8f96a1;

    img {
      height: 13px;
    }
  }
}
</style>
