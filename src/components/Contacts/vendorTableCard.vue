<template>
  <div class="d-flex align-center justify-center">
    <v-card min-width="90%" elevation="3" class="my-4 rounded-lg">
      <h5
        class="
          px-auto
          mt-8
          font-weight-bold
          text-subtitle-1 text-center
          primary--text
        "
      >
        name {{ vendorname }}
      </h5>
      <template>
        <v-simple-table dense>
          <template v-slot:default>
            <thead class="px-0">
              <tr class="px-0">
                <th class="px-0 text-center primary--text text-subtitle-2">
                  Hyphn Id
                </th>

                <th class="px-0 text-center primary--text text-subtitle-2">
                  Bank Account
                </th>
              </tr>
            </thead>
            <tbody class="px-1">
              <tr class="px-1">
                <td class="px-1 text-center">
                  {{ hyphnId }}
                </td>
                <td
                  class="px-1 text-center text-truncate"
                  style="max-width: 60px"
                >
                  {{ bankAccount }}
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </template>
      <v-row class="pa-0 ma-0">
        <v-col>
          <template>
            <v-simple-table dense>
              <template v-slot:default>
                <thead class="px-0">
                  <tr class="px-0">
                    <th class="px-0 text-center primary--text text-subtitle-2">
                      Email
                    </th>
                    <th class="px-0 text-center primary--text text-subtitle-2">
                      Phone
                    </th>
                    <!-- <th class="px-0 text-center primary--text text-subtitle-2">
                      State
                    </th> -->
                  </tr>
                </thead>
                <tbody class="px-2">
                  <tr class="px-2">
                    <td class="px-2 text-center">
                      {{ email }}
                    </td>
                    <td class="px-2 text-center">{{ phone }}</td>
                    <td class="px-2 text-center">{{ state }}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </template>
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
                      Edit
                    </v-btn>
                  </v-hover>
                  <v-hover v-slot="{ hover }">
                    <v-btn
                      @click="
                        $router.push({
                          name: 'contact.customer',
                          params: { id: id },
                          query: { vendor: true },
                        })
                      "
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
                      >View</v-btn
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
  name: "ContactTableCard",
  props: {
    index: {
      type: Number,
    },
    id: {
      type: Number,
    },
    vendorname: {
      type: String,
    },
    hyphnId: {
      type: String,
    },
    lastName: {
      type: String,
    },
    email: {
      type: Number,
    },
    phone: {
      type: String,
    },
    bankAccount: {
      type: String,
    },
    state: {
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

.v-application .elevation-3 {
  box-shadow: -4px 3px 1px -2px rgb(0 0 0 / 4%), 3px 2px 2px 0px rgb(0 0 0 / 5%),
    3px 1px 5px 0px rgb(0 0 0 / 5%) !important;
}
</style>
