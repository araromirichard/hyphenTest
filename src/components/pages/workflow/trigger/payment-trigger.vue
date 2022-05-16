<template>
  <div>
    <div class="vertical-line"></div>
    <div class="loader" v-if="isLoadingTypes">
      <v-progress-circular color="primary" indeterminate></v-progress-circular>
    </div>
    <div v-else class="payment-trigger">
      <span class="header"
        >Select payment type which will trigger this workflow</span
      >

      <div class="wrapper">
        <div style="width: 220px">
          <v-select
            outlined
            :items="items"
            v-model="selectedPayment"
            item-text="label"
            item-value="key"
            color="primary"
            hide-details="auto"
            placeholder="Select type"
          ></v-select>
        </div>
        <v-btn
          elevation="0"
          @click="proceed"
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
      default: "",
    },

    isVisable: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      selectedPayment: null,
      isLoadingTypes: false,
      items: [],
    };
  },
  methods: {
    async fetchPaymentTypes() {
      try {
        this.isLoadingTypes = true;
        const options = await this.$store.dispatch("workflow/getPaymentTypes");
        console.log(options);
        this.items = options;
      } catch (err) {
        console.log(err);
      } finally {
        this.isLoadingTypes = false;
      }
    },

    proceed() {
      this.$emit("input", this.selectedPayment);
    },
  },
  watch: {
    value: {
      deep: true,
      immediate: true,
      handler(val) {
        if (val !== this.selectedPayment) {
          this.selectedPayment = val;
        }
      },
    },

    isVisable: {
      immediate: true,
      handler(val) {
        if (val) {
          this.fetchPaymentTypes();
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
