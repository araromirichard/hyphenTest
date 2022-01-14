<template>
  <div class="d-flex align-center justify-center">
    <v-card
      max-height="40vh"
      max-width="90vw"
      outlined
      class="my-4 mx-8 rounded-lg"
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
        Invoice {{ invoiceRef }}
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
          <v-chip
            class="mx-2 pa-1 text-center"
            outlined
            x-small
            :color="chipColor"
            ><span class="text-caption">{{ type }}</span></v-chip
          >
          <v-chip
            class="mx-2 pa-1 text-center"
            outlined
            x-small
            :color="statusColor"
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
              <v-list>
                <v-list-item
                  class="d-flex flex-column justify-center align-center"
                >
                  <v-btn
                    @click="
                      $router.push({
                        name: 'inbox.invoice',
                        params: { id: '123' },
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
                    rounded
                    depressed
                    dark
                    small
                    color="primary"
                    class="text-lowercase px-2"
                    >review</v-btn
                  >
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
    statusColor: {
      type: String,
    },
    chipColor: {
      type: String,
    },
    textColor: {
      type: String,
    },
  },
  data() {
    return {};
  },
};
</script>

<style>
/* .v-data-table > .v-data-table__wrapper > table > thead > tr > th {
  padding: 8px !important;
} */
</style>
