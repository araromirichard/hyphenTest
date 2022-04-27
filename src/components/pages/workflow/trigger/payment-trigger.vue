<template>
  <div>
    <div class="vertical-line"></div>
    <div class="payment-trigger">
      <span class="header"
        >Select payment type which will trigger this workflow</span
      >

      <div class="wrapper">
        <div style="width: 220px">
          <v-select
            outlined
            :items="items"
            v-model="selectedPayment"
            color="primary"
            hide-details="auto"
            placeholder="Select type"
          ></v-select>
        </div>

        <v-btn
          elevation="0"
          @click="$emit('input', selectedPayment)"
          :disabled="selectedPayment == null"
          color="primary"
        >
          <v-icon left>mdi-arrow-down</v-icon> Continue</v-btn
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      selectedPayment: null,
      items: [
        {
          text: "Custom payment",
          value: "custom-payment",
        },
        {
          text: "Flutterwave",
          value: "flutterwave",
        },
      ],
    };
  },
  watch: {
    // selectedPayment: {
    //   deep: true,
    //   immediate: true,
    //   handler(val) {
    //     this.$emit("input", val);
    //   },
    // },

    value: {
      deep: true,
      immediate: true,
      handler(val) {
        if (val !== this.selectedPayment) {
          this.selectedPayment = val;
        }
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.vertical-line {
  display: block;
  background-color: #d9dee1;

  margin: auto;
  height: 80px;
  width: 2px;
}

.payment-trigger {
  width: 100%;
  padding: 30px;
  background: #ffffff;
  box-shadow: 0px 4px 16px rgba(204, 188, 252, 0.15);
  border-radius: 6px;

  .header {
    display: block;
    font-size: 16px;
    color: rgba(25, 40, 61, 0.8);
  }
}
</style>
