<template>
  <div class="approval-page">
    <div class="approval-page__wrapper">
      <img class="approval-page__logo" src="@/assets/hyphen-logo.svg" alt="" />
      <template v-if="step == 1">
        <span class="approval-page__desc"
          ><b>Brand Name</b> has an Invoice from [vendor] with Total Value
          234,500 NGN awaiting your approval</span
        >
        <div class="d-flex" style="gap: 20px; margin: 0px 30px">
          <v-btn
            style="background-color: #f4f5f6; flex: 1"
            large
            elevation="0"
            @click="denyA"
          >
            <v-icon left>mdi-chevron-right</v-icon> Deny</v-btn
          >
          <v-btn
            @click="approveA"
            color="primary"
            style="flex: 1"
            large
            elevation="0"
            left
          >
            <v-icon left>mdi-chevron-right</v-icon> Approve</v-btn
          >
        </div>
      </template>

      <template v-if="step == 2">
        <v-text-field
          name="name"
          label="OTP"
          outlined
          placeholder="OTP"
        ></v-text-field>

        <div class="d-flex mt-3" style="justify-content: end">
          <v-btn color="primary" @click="confirm" large elevation="0">
            <v-icon>mdi-chevron-right</v-icon> Confirm</v-btn
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
            >Thank you, your selectd action <b>- APPROVE -</b> has been
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
export default {
  data() {
    return {
      step: 1,
      deny: false,
      approve: false,
    };
  },
  methods: {
    denyA() {
      this.deny = true;
      this.approve = false;
      this.step = 3;
    },

    approveA() {
      this.deny = false;
      this.approve = true;
      this.step = 2;
    },

    confirm() {
      this.step = 3;
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
