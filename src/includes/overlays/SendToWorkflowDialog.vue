<template>
  <v-dialog v-model="dialog" persistent max-width="400">
    <template v-slot:activator="{ on, attrs }">
      <v-switch
        v-if="$vuetify.breakpoint.mdAndUp"
        v-bind="attrs"
        v-on="on"
        flat
        dense
        hide-details="true"
        :value="tValue"
        :true-value="tValue"
        class="px-4 mb-md-1"
        :color="`${(hasColor = true ? '#16BE98' : '')}`"
        label="Send to workflow"
      >
      </v-switch>
      <!-- checkbox for mobile devices -->
      <v-checkbox
        v-if="$vuetify.breakpoint.mdAndDown"
        v-bind="attrs"
        v-on="on"
        flat
        dense
        hide-details="true"
        :value="dialog"
        :true-value="tValue"
        class="px-4 py-0"
        :color="`${(hasColor = true ? '#16BE98' : '')}`"
      >
        <template v-slot:label>
          <span class="py-0" style="font-size: 12px">Send to workflow</span>
        </template>
      </v-checkbox>
    </template>
    <v-card flat class="m-0" style="background: #f8f7f4; border-radius: 8px">
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
            color: #19283d;
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

      <div class="pa-md-0 ma-md-0 px-6">
        <template>
          <v-select
            @change="$emit('selectedWorkflow', { value: $event })"
            v-model="selectedWorkflow"
            :menu-props="{ bottom: true, offsetY: true }"
            :value="workflowSelected"
            :items="workflowSelected"
            style="
              background: #ffffff;
              box-sizing: border-box;
              border-radius: 3px;
              width: 330px;
              height: 54px;
            "
            class="justify-center mt-8 mx-0 mx-md-8 custom-placeholer-color"
            flat
            outlined
            placeholder="Select Workflow"
            hide-details="auto"
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
      </div>
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
              background: var(--v-primary-base);
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
import { mapGetters } from "vuex";

export default {
  props: {
    tValue: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      dialog: this.tValue,
      selectedWorkflow: null,
    };
  },

  computed: {
    ...mapGetters({
      workflowSelected: "workflow/invoiceWorkflow",
    }),
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
