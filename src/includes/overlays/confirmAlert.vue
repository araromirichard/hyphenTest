<template>
  <div>
    <v-dialog max-width="574">
      <v-card height="722" color="#f8f7f4" class="rounded-lg">
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
            >ACTION: Send Payment</span
          >
          <v-spacer></v-spacer>
          <v-icon
            tag="button"
            @click="dialog2 = false"
            class="text-bolder"
            color="#596A73"
          >
            mdi-close
          </v-icon>
        </v-card-title>
        <v-row class="mx-auto justify-end mt-9">
          <!-- <Overlaybtns btn-title="Go Back" icon="arrow-left" /> -->
        </v-row>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
//import Overlaybtns from "../../btns/Overlaybtns.vue";
export default {
  components: {
    //Overlaybtns
  },
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    show(value) {
      this.dialog = value;
    },
  },
};
</script>

<style scoped></style>
