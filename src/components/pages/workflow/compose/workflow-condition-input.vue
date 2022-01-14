<template>
  <v-row class="mx-2 pl-4" style="align-items: center" no-gutters>
    <v-col cols="12" md="4">
      <v-select
        v-model="form.field"
        :menu-props="{ bottom: true, offsetY: true }"
        :items="formItems"
        style="background: #ffffff; box-sizing: border-box; border-radius: 3px"
        class="justify-center mr-2"
        flat
        outlined
        hide-details="auto"
        placeholder="Select a form"
      >
        <template slot="append">
          <v-icon class="pl-2">mdi-menu-down</v-icon>
        </template>
      </v-select>
    </v-col>

    <v-col cols="12" md="4">
      <v-select
        color="#96EAD7"
        v-model="form.type"
        id="operators"
        item-value="val"
        :menu-props="{ bottom: true, offsetY: true }"
        :items="operators"
        item-text="string"
        style="border-radius: 3px"
        class="justify-center highlight mr-2"
        flat
        outlined
        hide-details="auto"
      >
        <template slot="append">
          <v-icon class="pl-2">mdi-menu-down</v-icon>
        </template>
      </v-select>
    </v-col>

    <v-col cols="12" md="3">
      <v-text-field
        v-model="form.target"
        :value="rule.inputField"
        hide-details="auto"
        class="mr-2"
        outlined
      >
      </v-text-field>
    </v-col>

    <v-col cols="12" md="1">
      <v-btn icon>
        <v-icon
          @click="$emit('delete', index)"
          class="mx-7"
          id="no-background-hover"
          tag="button"
          plain
          color="error"
        >
          mdi-close
        </v-icon>
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
// this component holds the input field for each condition
import { formItems, operators } from "@/utils/ManagerApprovalOptions.js";
export default {
  props: ["rule", "index"],
  data() {
    return {
      formItems,
      operators,

      form: {
        field: "",
        type: "",
        target: "",
      },
    };
  },
  watch: {
    form: {
      immediate: true,
      deep: true,
      handler(val) {
        this.$emit("updateField", {
          index: this.index,
          data: val,
        });
        // console.log(JSON.stringify(val, null, 2));
      },
    },
  },
};
</script>

<style scoped></style>
