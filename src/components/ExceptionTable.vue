<template>
  <div>
    <v-hover v-slot:default="{ hover }">
      <v-card
        @click="
          $router.push({
            name: 'inbox.invoice',
            params: { id: id },
            query: { exception: true },
          })
        "
        class="px-6 py-4 my-1"
        style="cursor: pointer; transition: all 0.3s ease"
        :elevation="hover ? 2 : 0"
        :color="id % 2 ? '#f6f6f6' : ''"
      >
        <v-layout row wrap class="align-center">
          <v-flex md2>
            <div class="d-flex align-center">
              <span
                class="mb-0 mx-4"
                style="
                  font-family: Lato;
                  font-style: normal;
                  font-weight: normal;
                  font-size: 12px;
                  line-height: 14px;
                  color: #596a73;
                "
                >{{ id }}</span
              >
              <v-chip
                class="mx-4"
                :color="chipcolor"
                :text-color="textColor"
                x-small
                >{{ type }}</v-chip
              >
            </div>
          </v-flex>

          <v-flex md1>
            <div class="d-flex align-center">
              <span
                class="mb-0"
                style="
                  font-family: Lato;
                  font-style: normal;
                  font-weight: normal;
                  font-size: 12px;
                  line-height: 14px;
                  color: #596a73;
                "
                >{{ amount }}</span
              >
            </div>
          </v-flex>
          <v-flex md2>
            <div class="d-flex align-center justify-center">
              <span
                class="mb-0 text-center"
                style="
                  font-family: Lato;
                  font-style: normal;
                  font-weight: normal;
                  font-size: 12px;
                  line-height: 14px;
                  color: #596a73;
                "
                >{{ exception }}</span
              >
            </div>
          </v-flex>
          <v-flex md2>
            <div class="d-flex align-center">
              <span
                class="mb-0"
                style="
                  font-family: Lato;
                  font-style: normal;
                  font-weight: normal;
                  font-size: 12px;
                  line-height: 14px;
                  color: #596a73;
                "
                >{{ invoiceRef }}</span
              >
            </div>
          </v-flex>
          <v-flex md1>
            <div class="d-flex align-center">
              <v-icon small :color="statusIcon"> mdi-circle-medium </v-icon>
              <span
                style="
                  font-family: Lato;
                  font-style: normal;
                  font-weight: normal;
                  font-size: 12px;
                  line-height: 14px;
                  color: #596a73;
                "
                >{{ status }}</span
              >
            </div>
          </v-flex>
          <v-flex md1>
            <div class="d-flex align-center">
              <span
                class="mb-0"
                style="
                  font-family: Lato;
                  font-style: normal;
                  font-weight: normal;
                  font-size: 12px;
                  line-height: 14px;
                  color: #596a73;
                "
                >{{ requester }}</span
              >
            </div>
          </v-flex>
          <v-flex md1>
            <div>
              <span
                class="mb-0"
                style="
                  font-family: Lato;
                  font-style: normal;
                  font-weight: normal;
                  font-size: 12px;
                  line-height: 14px;
                  color: #596a73;
                "
                >{{ date }}</span
              >
            </div>
          </v-flex>
          <v-flex md2>
            <div class="d-flex align-center">
              <v-btn
                @click="
                  $router.push({
                    name: 'inbox.invoice',
                    params: { id: id },
                    query: { exception: true },
                  })
                "
                exact-path
                rounded
                depressed
                dark
                small
                color="#2BD5AE"
                class="text-lowercase px-2 my-1 mr-2"
                style="color: var(--v-primary-base)"
              >
                view
              </v-btn>
              <v-btn
                @click="
                  $router.push({
                    name: 'inbox.invoice',
                    query: { review: false },
                  })
                "
                rounded
                depressed
                dark
                small
                color="primary"
                class="text-lowercase px-2 my-1"
                >review</v-btn
              >
            </div>
          </v-flex>
        </v-layout>
      </v-card>
    </v-hover>
  </div>
</template>

<script>
export default {
  props: {
    index: {
      type: Number,
    },
    id: {
      type: Number,
    },
    type: {
      type: String,
    },
    amount: {
      type: Number,
    },
    exception: {
      type: String,
    },
    invoiceRef: {
      type: String,
    },
    requester: {
      type: String,
    },
    date: {
      type: String,
    },
    status: {
      type: String,
    },

    textColor: {
      type: String,
    },
  },
  data() {
    return {};
  },
  computed: {
    statusIcon() {
      if (this.status === "pending") {
        return "#FF6A6A";
      } else if (this.status === "processing") {
        return "#F7CA40";
      } else if (this.status === "In review") {
        return "#FF6A6A";
      } else if (this.status === "review needed") {
        return "#2B99D5";
      } else return "#2BD5AE";
    },
    chipcolor() {
      if (this.type === "expense") {
        return "#F9EED2";
      } else return "#D5F7EF";
    },
  },
};
</script>

<style scoped>
.v-application .elevation-2 {
  box-shadow: -6px 3px 1px -2px rgb(0 0 0 / 0%), 0px 2px 2px 0px rgb(0 0 0 / 0%),
    0px 1px 5px 0px rgb(0 0 0 / 7%) !important;
}
</style>
