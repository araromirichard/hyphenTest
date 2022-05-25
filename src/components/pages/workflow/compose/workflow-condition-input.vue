<template>
  <div>
    <v-row class="mx-2 pl-4" style="align-items: center" no-gutters>
    <v-col cols="12" md="4">
      <v-select
        v-model="form.field"
        :menu-props="{ bottom: true, offsetY: true }"
        :items="inputs.fields"
        item-text="label"
        item-value="key"
        style="background: #ffffff; box-sizing: border-box; border-radius: 3px"
        class="justify-center my-2 mr-2"
        flat
        outlined
        hide-details="auto"
        placeholder="Select a field"
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
        item-value="key"
        :menu-props="{ bottom: true, offsetY: true }"
        :items="inputs.operators"
        item-text="label"
        style="border-radius: 3px"
        class="justify-center highlight my-2 mr-2"
        flat
        outlined
        hide-details="auto"
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
          item-value="key"
          :menu-props="{ bottom: true, offsetY: true }"
          :items="inputs.operators"
          item-text="label"
          style="border-radius: 3px"
          class="justify-center highlight my-2 mr-2"
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
          hide-details="auto"
          class="mr-2 my-2"
          outlined
        >
        </v-text-field>
      </v-col>

      <v-col cols="12" md="1">
        <v-btn icon>
          <v-icon
            @click="deleteInput"
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
  </div>
</template>

<script>
export default {
  props: {
    index: {
      default: -1,
    },
    inputs: {
      default: null,
    },
    value: {
      default: null,
    },
  },
  data() {
    return {
      form: {
        field: "",
        type: "",
        target: "",
      },
    };
  },
  methods: {
    deleteInput() {
      this.$emit("delete", this.index);
      this.$emit("deleted-schema", this.form.field);
    },
  },
  watch: {
    value: {
      immediate: true,
      deep: true,
      handler(val) {
        if (JSON.stringify(val) !== JSON.stringify(this.form)) {
          this.form = val;
        }
      },
    },
    form: {
      immediate: true,
      deep: true,
      handler(val) {
        this.$emit("selected-schema", val.field);
        this.$emit("input", val);
        // console.log(JSON.stringify(val, null, 2));
      },
    },
  },
};
</script>

<style scoped></style>
