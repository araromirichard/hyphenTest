<template>
  <div class="trigger">
    <span class="trigger__header">Select Trigger</span>
    <span class="trigger__text">
      Choose the event that begins your workflow, this event acts as the data
      entry point for this workflow
    </span>

    <div class="trigger__content">
      <div
        @click=" disabled ? undefined :  selected = trigger.value"
        class="option"
        :disabled="disabled"
        v-for="(trigger, index) in triggers"
        :key="index"
        :class="{ 'option--selected': selected === trigger.value }"
      >
        <img :src="trigger.icon" :alt="trigger.name" />
        <span>{{ trigger.name }}</span>
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
    disabled:{
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      triggers: [
        {
          name: "Form",
          icon: require("@/assets/form-trigger.svg"),
          value: "form",
        },
        {
          name: "Invoice",
          icon: require("@/assets/invoice-trigger.svg"),
          value: "invoice",
        },
        {
          name: "Payment",
          icon: require("@/assets/payment-trigger.svg"),
          value: "payment",
        },
      ],
      selected: null,
    };
  },
  watch: {
    value: {
      handler(newValue) {
        if (this.newValue !== this.selected) this.selected = newValue;
      },
      deep: true,
      immediate: true,
    },
    selected: {
      handler(newValue) {
        this.$emit("input", newValue);
        this.$store.dispatch("workflow/setTrigger", newValue);
      },
      immediate: true,
      deep: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.trigger {
  margin-top: 20px;

  &__header {
    font-weight: bold;
    color: var(--v-primary-base);
    font-size: 16px;
    display: block;
  }

  &__text {
    display: block;
    font-size: 14px;
    color: rgba(25, 40, 61, 0.8);
    margin-top: 10px;
  }

  &__content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 20px;
    margin-top: 40px;
    cursor: pointer;

    .option {
      width: 200px;
      height: 90px;
      background: #ffffff;
      display: flex;
      align-items: center;
      padding: 10px;
      gap: 10px;

      &[disabled]{
        opacity: 0.5;
        cursor: not-allowed;
      }

      &:hover {
        background-color: #f4f5f6;
      }

      &--selected {
        background-color: #f4f5f6;
      }

      border: 1px solid #d9dee1;
      box-sizing: border-box;
      border-radius: 8px;

      img {
        height: 50px;
        width: 50px;
        object-fit: cover;
      }

      span {
        color: rgba(25, 40, 61, 0.8);
        font-size: 18px;
      }
    }
  }
}
</style>
