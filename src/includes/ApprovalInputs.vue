<template>
  <div class="inputSelect mx-5">
    <v-select
      @change="$emit('updateField', { field: 'parameter', value: $event })"
      :menu-props="{ bottom: true, offsetY: true }"
      :items="formItems"
      :value="rule.parameter"
      style="
        background: #ffffff;
        border: 1px solid rgba(212, 216, 223, 0.377431);
        box-sizing: border-box;
        border-radius: 3px;
        width: 203px;
      "
      class="justify-center mx-2"
      flat
      outlined
      hide-details="auto"
      placeholder="Select a form"
    >
      <template slot="append">
        <v-icon class="pl-2">mdi-menu-down</v-icon>
      </template>
    </v-select>
    <v-select
      color="#96EAD7"
      @change="$emit('updateField', { field: 'operator', value: $event })"
      id="operators"
      :value="rule.operator"
      :menu-props="{ bottom: true, offsetY: true }"
      :items="operators"
      style="border-radius: 3px; width: 129px"
      class="justify-center mx-2 highlight"
      flat
      outlined
      hide-details="auto"
    >
      <template slot="append">
        <v-icon class="pl-2">mdi-menu-down</v-icon>
      </template>
    </v-select>
    <v-text-field
      @change="$emit('updateField', { field: 'inputField', value: $event })"
      :value="rule.inputField"
      hide-details="auto"
      outlined
    >
    </v-text-field>
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
  </div>
</template>

<script>
import { formItems, operators } from "@/utils/ManagerApprovalOptions.js";
export default {
  props: ["rule", "index"],
  data() {
    return {
      inputValue: "",
      formItems,
      operators,
    };
  },
};
</script>

<style scoped></style>
