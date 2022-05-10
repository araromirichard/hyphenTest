<template>
  <div class="d-flex align-center justify-center">
    <v-card
      max-height="40vh"
      min-width="91%"
      outlined
      class="my-4 mx-0 mx-md-3 rounded-lg"
    >
      <h5
        class="
          px-auto
          mt-8
          font-weight-bold
          text-subtitle-1 text-center
          primary--text
        "
      >
        Payment {{ paymentRef }}
      </h5>
      <template>
        <v-simple-table dense>
          <template v-slot:default>
            <thead class="px-0">
              <tr class="px-0">
                <th class="px-0 text-center primary--text text-subtitle-2">
                  Amount
                </th>
                <th class="px-0 text-center primary--text text-subtitle-2">
                  Approved By
                </th>
                <th class="px-0 text-center primary--text text-subtitle-2">
                  Payee
                </th>
              </tr>
            </thead>
            <tbody class="px-2">
              <tr class="px-2">
                <td class="px-2 text-center">
                  {{ amount }}
                </td>
                <td class="px-2 text-center">{{ approvedBy }}</td>
                <td class="px-2 text-center">{{ payee }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </template>
      <v-row class="pa-0 ma-0">
        <v-col class="d-flex justify-space-around align-center">
          <v-chip
            class="mx-2 pa-1 text-center"
            outlined
            x-small
            :color="stausIcon"
            ><span class="text-caption px-0 ma-0">{{ status }}</span></v-chip
          >
          <v-chip class="mx-2" x-small
            ><span class="text-caption">{{ date }}</span></v-chip
          >
          <template>
            <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn plain color="primary" dark v-bind="attrs" v-on="on">
                  Actions
                </v-btn>
              </template>
              <v-list class="d-flex flex-column justify-center align-center">
                <v-list-item
                  class="d-flex flex-column justify-center align-center py-auto"
                >
                  <v-hover v-slot="{ hover }">
                    <v-btn
                      @click.stop="dialog = true"
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
                      class="text-capitalize px-3 my-1 rounded"
                      style="color: var(--v-primary-base)"
                    >
                      view
                    </v-btn>
                  </v-hover>
                  <v-hover v-slot="{ hover }">
                    <v-btn
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
    id: {
      type: Number,
    },
    approvedBy: {
      type: String,
    },
    amount: {
      type: String,
    },
    paymentRef: {
      type: String,
    },
    payee: {
      type: String,
    },
    date: {
      type: String,
    },
    status: {
      type: String,
    },
    iconColor: {
      type: String,
    },
  },
  data() {
    return {};
  },
  computed: {
    stausIcon() {
      if (this.status === "pending") {
        return "#FF6A6A";
      } else if (this.status === "scheduled") {
        return "#F7CA40";
      } else return "#2BD5AE";
    },
  },
};
</script>

<style>
/* .v-data-table > .v-data-table__wrapper > table > thead > tr > th {
  padding: 8px !important;
} */
</style>
