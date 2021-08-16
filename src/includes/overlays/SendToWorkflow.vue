<template>
  <div>
    <v-card
      max-width="360"
      height="300"
      flat
      class="m-0"
      style="background: #fefcf8; border-radius: 8px"
    >
      <v-card-title
        class="mb-8"
        style="background: #ffffff; border-radius: 8px 8px 0px 0px"
      >
        <span
          style="
            font-family: Inter;
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            line-height: 19px;
            color: #301f78;
          "
          >Add to workflow</span
        >
        <v-spacer></v-spacer>
        <v-icon class="text-bolder" color="#596A73"> mdi-close </v-icon>
      </v-card-title>
      <template class="d-flex">
        <v-select
          style="
            background: #ffffff;
            border: 1px solid rgba(212, 216, 223, 0.377431);
            box-sizing: border-box;
            border-radius: 3px;
            width: 294px;
            height: 40px;
          "
          class="justify-center mx-8 custom-placeholer-color"
          dense
          flat
          outlined
          placeholder="Select Workflow"
        >
          <template slot="append">
            <v-btn
              text
              fab
              dark
              width="20"
              height="20"
              class="my-1"
              style="background: rgba(127, 145, 155, 0.5)"
            >
              <v-icon small>mdi-plus</v-icon>
            </v-btn>
            <v-icon class="pl-2">mdi-menu-down</v-icon>
          </template>
        </v-select>
      </template>
      <template>
        <v-card-text
          class="px-8"
          style="
            font-family: Inter;
            font-style: normal;
            font-weight: normal;
            font-size: 12px;
            line-height: 18px;
            letter-spacing: 0.45px;
            color: #7f919b;
          "
        >
          By setting your inbox to a workflow, all inbox entries will
          automatically be sent to
          <span class="innerSpan">the workflow</span> for decision/approval and
          action
        </v-card-text>
      </template>
      <template class="mt-6">
        <v-card-action class="d-flex justify-end mt-2 mr-9">
          <v-btn
            dark
            width="121"
            height="45"
            style="
              background: #311b92;
              box-shadow: 0px 12px 22px rgba(0, 0, 0, 0.24);
              border-radius: 4px;
            "
          >
            <v-icon>mdi-chevron-right</v-icon>
            <span>Next</span>
          </v-btn>
        </v-card-action>
      </template>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //
    };
  },
};
</script>

<style scoped>
.custom-placeholer-color select::placeholder {
  font-family: Inter !important;
  font-style: normal !important;
  font-weight: 600 !important;
  font-size: 12px !important;
  line-height: 24px !important;
  /* identical to box height, or 200% */

  color: #7f919b !important;
}
.v-menu__content {
  box-shadow: none !important;
}

.innerSpan {
  font-family: Inter;
  font-style: normal;
  font-weight: 800;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0.45px;
  color: #7f919b;
}
</style>
