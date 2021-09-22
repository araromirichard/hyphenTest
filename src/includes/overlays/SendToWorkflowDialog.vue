<template>
  <v-dialog v-model="dialog" persistent max-width="400">
    <template v-slot:activator="{ on, attrs }">
      <v-switch
        v-bind="attrs"
        v-on="on"
        flat
        dense
        hide-details="true"
        :value="dialog"
        class="px-4 mb-1"
        :color="`${(hasColor = true ? '#16BE98' : '')}`"
        label="Send to workflow"
      >
      </v-switch>

      <!-- <v-btn color="red lighten-2" dark v-bind="attrs" v-on="on">
        Click Me
      </v-btn> -->
    </template>
    <v-card flat class="m-0" style="background: #fefcf8; border-radius: 8px">
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
        <v-icon
          tag="button"
          @click="closeDialog"
          class="text-bolder"
          color="#596A73"
        >
          mdi-close
        </v-icon>
      </v-card-title>
      <template>
        <v-select
          v-model="selectedWorkflow"
          :menu-props="{ bottom: true, offsetY: true }"
          :items="workflowSelected"
          style="
            background: #ffffff;
            box-sizing: border-box;
            border-radius: 3px;
            width: 330px;
            height: 54px;
          "
          class="justify-center mt-8 mx-8 custom-placeholer-color"
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
          class="px-8 mt-4 text-justify"
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
      <template>
        <v-card-actions class="d-flex justify-end mt-6 mr-9">
          <v-btn
            @click="closeDialog"
            dark
            width="121"
            height="45"
            style="
              margin-bottom: 36px;
              background: #311b92;
              box-shadow: 0px 12px 22px rgba(0, 0, 0, 0.24);
              border-radius: 4px;
            "
          >
            <v-icon>mdi-chevron-right</v-icon>
            <span>Next</span>
          </v-btn>
        </v-card-actions>
      </template>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      selectedWorkflow: null,
      workflowSelected: [
        "Approval by MD & Snr. Managers",
        "Dynamic discount by location and...",
        "Online sales bank account recon…",
        "Match Invoice PO to records…",
      ],
    };
  },
  methods: {
    closeDialog() {
      this.$emit("closeDialog", this.selectedWorkflow);
      this.dialog = false;
    },
  },
};
</script>

<style>
input[type="checkbox" i] {
  display: none !important;
}
</style>
