<template>
  <div>
    <div class="vertical-line"></div>
    <div class="loader" v-if="isLoadingForms">
      <v-progress-circular color="primary" indeterminate></v-progress-circular>
    </div>
    <div v-else class="form-trigger">
      <span class="header">
        Select a form which entries will trigger this workflow
      </span>

      <div class="wrapper">
        <div style="width: 220px">
          <v-select
            outlined
            :disabled="isEdit"
            :items="items"
            item-text="form_title"
            item-value="id"
            v-model="selectedForm"
            color="primary"
            hide-details="auto"
            placeholder="Select form"
          ></v-select>
        </div>

        <v-btn
          elevation="0"
          @click="proceed"
          :disabled="selectedForm == null"
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
    isEdit:{
      default:false
    }
  },
  data() {
    return {
      isLoadingForms: false,
      selectedForm: null,
      items: [],
      proceeded: false,
    };
  },
  methods: {
    async fetchOrgForms() {
      try {
        this.isLoadingForms = true;
        const { data } = await this.$store.dispatch(
          "formBuilder/FetchAllForms"
        );
        this.items = data;
      } catch (err) {
        console.log(err);
      } finally {
        this.isLoadingForms = false;
      }
    },

    proceed() {
      this.proceeded = true;
      this.$emit("input", this.selectedForm);
    },
  },
  watch: {
    value: {
      deep: true,
      immediate: true,
      handler(val) {
        if (val !== this.selectedForm && val !== null) {
          this.selectedForm = val;
        }
      },
    },

    isVisable: {
      immediate: true,
      handler(val) {
        if (val) {
          this.fetchOrgForms();
        }
      },
    },

    selectedForm() {
      if (this.proceeded) {
        this.$emit("input", null);
      }
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

.loader {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;
  background: #ffffff;
  box-shadow: 0px 4px 16px rgba(204, 188, 252, 0.15);
  border-radius: 6px;
}

.form-trigger {
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
