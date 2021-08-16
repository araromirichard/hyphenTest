<template>
  <div>
    <div v-if="!showReview">
      <v-btn @click="showReview = !showReview" text class="text-capitalize">
        <simple-line-icons
          style="width: 15.98px; height: 15.97px"
          class="mx-1 i.style"
          icon="pencil"
          no-svg
        />
        <span class="saveInvoiceBtn">Save</span>
      </v-btn>
      <v-btn text class="text-capitalize mx-4">
        <simple-line-icons
          style="width: 15.98px; height: 15.97px"
          class="mx-1"
          icon="pencil"
          no-svg
        />
        <span class="invoiceBtn">Export</span>
      </v-btn>
    </div>
    <div v-else>
      <v-btn
        text
        @click="(showReview = !showReview), $emit('activate')"
        class="text-capitalize"
      >
        <simple-line-icons
          style="width: 15.98px; height: 15.97px"
          class="mx-1"
          icon="pencil"
          no-svg
        />
        <span class="invoiceBtn">Review</span>
      </v-btn>
      <v-btn text class="text-capitalize">
        <simple-line-icons
          style="width: 15.98px; height: 15.97px"
          class="mx-1"
          icon="pencil"
          no-svg
        />
        <span class="invoiceBtn">Export</span>
      </v-btn>
      <v-btn text class="text-capitalize">
        <simple-line-icons
          style="width: 15.98px; height: 15.97px"
          class="mx-1"
          icon="pencil"
          no-svg
        />
        <span class="invoiceBtn">Attachments</span>
      </v-btn>
    </div>
  </div>
</template>

<script>
import SimpleLineIcons from "vue-simple-line";

export default {
  name: "InvoiceBtn",
  data() {
    return {
      showReview: true,
    };
  },
  components: {
    SimpleLineIcons,
  },

  emits: ["activate"],

  methods: {
    //
  },
};
</script>

<style scoped>
i.sli-font {
  font-size: 14px;
  display: inline-block;
  color: #7e69d8;
}

.invoiceBtn {
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  color: #7e69d8;
}
.saveInvoiceBtn {
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  color: #16be98;
}

i.style {
  width: 15.98px;
  height: 15.97px;
  color: #16be98;
}
</style>
