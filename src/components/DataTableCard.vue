<template>
  <div class="d-flex align-center justify-center">
    <v-card
      max-height="40vh"
      min-width="97%"
      outlined
      class="my-4 mx-2 rounded-lg"
      @click="
        $router.push({
          name: 'inbox.invoice',
          params: { id: id },
        })
      "
    >
      <h5
        class="px-auto mt-8 font-weight-bold text-h5 text-center primary--text"
      >
        {{ invoiceRef }}
      </h5>
      <template>
        <v-simple-table dense>
          <template v-slot:default>
            <thead class="px-0">
              <tr class="px-0">
                <th class="px-0 text-center primary--text text-subtitle-2">
                  Category
                </th>
                <th class="px-0 text-center primary--text text-subtitle-2">
                  Amount
                </th>
                <th class="px-0 text-center primary--text text-subtitle-2">
                  Requester
                </th>
              </tr>
            </thead>
            <tbody class="px-0">
              <tr class="px-0">
                <td class="px-0 text-center">
                  {{ category }}
                </td>
                <td class="px-0 text-center">{{ amount }}</td>
                <td class="px-0 text-center">{{ requester }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </template>
      <v-row class="pa-0 ma-0">
        <v-col class="d-flex justify-space-around align-center px-2">
          <v-chip class="mx-2 pa-1 text-center" outlined x-small
            ><span class="text-caption">{{ type }}</span></v-chip
          >
          <v-chip
            v-if="status"
            class="mx-2 pa-1 text-center"
            outlined
            x-small
            :color="statusIcon"
            ><span class="text-caption px-0 ma-0">{{ status }}</span></v-chip
          >
          <v-chip class="mx-2 py-2" x-small outlined
            ><span class="text-caption">{{ date }}</span></v-chip
          >
          <template>
            <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn plain color="primary" dark v-bind="attrs" v-on="on">
                  Actions
                </v-btn>
              </template>
              <v-list>
                <v-list-item
                  class="d-flex flex-column justify-center align-center"
                >
                  <v-hover v-slot="{ hover }">
                    <v-btn
                      @click="
                        $router.push({
                          name: 'inbox.invoice',
                          params: { id: index },
                        })
                      "
                      :style="{
                        'background-color': hover ? '#2bd5ae' : '',
                        border: hover ? 'none' : '',
                      }"
                      exact-path
                      depressed
                      outlined
                      dark
                      small
                      color="#2BD5AE"
                      class="text-capitalize px-1 my-1 mr-1 rounded"
                      style="color: var(--v-primary-base)"
                    >
                      view
                    </v-btn>
                  </v-hover>
                  <v-hover v-slot="{ hover }">
                    <v-btn
                      @click="reviewInv"
                      dark
                      outlined
                      depressed
                      small
                      color="primary"
                      :style="{
                        'background-color': hover ? '#c4c9cf' : '',
                        border: hover ? 'none' : '',
                        color: hover ? 'white' : '#ffffff',
                      }"
                      class="text-capitalize px-2 my-1 rounded"
                      >review</v-btn
                    >
                  </v-hover>
                  <!-- <v-btn
                    @click="
                      $router.push({
                        name: 'inbox.invoice',
                        params: { id: id },
                      })
                    "
                    exact-path
                    rounded
                    depressed
                    dark
                    small
                    color="#2BD5AE"
                    class="text-lowercase px-2 my-4"
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
                    class="text-lowercase px-2"
                    >review</v-btn
                  > -->
                </v-list-item>
              </v-list>
            </v-menu>
          </template>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    index: {
      type: Number,
    },

    type: {
      type: String,
    },
    amount: {
      type: Number,
    },
    category: {
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
      } else if (this.status === "in review") {
        return "#2B99D5";
      } else return "#2BD5AE";
    },
    chipcolor() {
      if (this.type === "invoice") {
        return "#F9EED2";
      } else return "#D5F7EF";
    },
  },
};
</script>

<style>
/* .v-data-table > .v-data-table__wrapper > table > thead > tr > th {
  padding: 8px !important;
} */
</style>
