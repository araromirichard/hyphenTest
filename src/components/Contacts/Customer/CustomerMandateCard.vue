<template>
  <div>
    <v-hover v-slot:default="{ hover }">
      <v-card
        class="px-6 py-4 my-1"
        style="cursor: pointer; transition: all 0.3s ease"
        :elevation="hover ? 2 : 0"
        :color="id % 2 ? '#f6f6f6' : ''"
      >
        <v-layout row wrap class="align-center ml-1">
          <v-flex md1 class="d-flex justify-start px-0">
            <span
              class="mb-0 mr-1 pa-0"
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
          </v-flex>
          <v-flex md3>
            <div class="d-flex justify-start align-center">
              <div
                class=""
                style="
                  font-family: Lato;
                  font-style: normal;
                  font-weight: normal;
                  font-size: 12px;
                  line-height: 14px;
                  color: #596a73;
                "
              >
                {{ RefNumber }}
              </div>
            </div>
          </v-flex>

          <v-flex md2>
            <div class="d-flex align-center">
              <span
                style="
                  font-family: Lato;
                  font-style: normal;
                  font-weight: normal;
                  font-size: 12px;
                  line-height: 14px;
                  color: #596a73;
                "
              >
                <v-icon small :color="stausIcon"> mdi-circle-medium </v-icon>
                {{ status }}</span
              >
            </div>
          </v-flex>
          <v-flex md2>
            <div class="d-flex">
              <span
                class="text-truncate"
                style="
                  max-width: 110px;
                  font-family: Lato;
                  font-style: normal;
                  font-weight: normal;
                  font-size: 12px;
                  line-height: 14px;
                  color: #596a73;
                "
                >{{ dueDate }}</span
              >
            </div>
          </v-flex>

          <v-flex md4>
            <div class="ms-4 d-flex justify-start">
              <span
                style="
                  font-family: Lato;
                  font-style: normal;
                  font-weight: normal;
                  font-size: 12px;
                  line-height: 14px;
                  color: #596a73;
                "
                >{{ outstanding }}</span
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
    RefNumber: {
      type: String,
    },
    status: {
      type: String,
    },
    dueDate: {
      type: String,
    },
    outstanding: {
      type: String,
    },
  },
  data() {
    return {};
  },

  computed: {
    stausIcon() {
      if (this.status === "due") {
        return "#FF6A6A";
      } else if (this.status === "sent") {
        return "#F7CA40";
      } else return "#2BD5AE";
    },
  },
};
</script>

<style scoped>
.v-application .elevation-2 {
  box-shadow: -6px 3px 1px -2px rgb(0 0 0 / 0%), 0px 2px 2px 0px rgb(0 0 0 / 0%),
    0px 1px 5px 0px rgb(0 0 0 / 7%) !important;
}
v-btn .button {
  transition-duration: 0.4s;
}

v-btn .button:hover {
  background-color: #19283d;
  color: white;
}
</style>
