<template>
  <div class="d-flex align-center justify-center">
    <v-card
      max-height="40vh"
      min-width="87%"
      outlined
      class="my-4 mx-3 rounded-lg"
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
        {{ cardTitle }}: {{ refNumber }}
      </h5>
      <v-row class="pa-0 ma-0">
        <v-col class="d-flex justify-space-around align-center px-2">
          <v-chip class="mx-2" x-small
            ><span class="text-caption">{{ id }}</span></v-chip
          >
          <v-chip
            class="mx-2 pa-1 text-center"
            outlined
            x-small
            :color="chipColor"
            ><span class="text-caption px-0 ma-0">{{ status }}</span></v-chip
          >
          <v-chip class="mx-2" x-small
            ><span class="text-caption">{{ dueDate }}</span></v-chip
          >
        </v-col>
      </v-row>
      <template>
        <v-simple-table dense>
          <template v-slot:default>
            <thead class="px-0">
              <tr class="px-0">
                <th class="px-0 text-center primary--text text-subtitle-2">
                  Outstanding (N)
                </th>
              </tr>
            </thead>
            <tbody class="px-2">
              <tr class="px-2">
                <td class="px-2 text-center">
                  {{ outstanding }}
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </template>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "mobileTableCard",
  props: {
    index: {
      type: Number,
    },
    id: {
      type: Number,
    },
    outstanding: {
      type: String,
    },
    refNumber: {
      type: String,
    },
    cardTitle: {
      type: String,
    },
    dueDate: {
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
    chipColor() {
      if (this.status === "due") {
        return "#FF6A6A";
      } else if (this.status === "sent") {
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
