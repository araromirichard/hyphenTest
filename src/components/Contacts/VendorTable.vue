<template>
  <div>
    <v-hover v-slot:default="{ hover }">
      <v-card
        class="px-6 py-4 my-1"
        style="cursor: pointer; transition: all 0.3s ease"
        :elevation="hover ? 2 : 0"
        :color="id % 2 ? '#f6f6f6' : ''"
      >
        <v-layout row wrap class="align-center">
          <v-flex md1 class="d-flex justify-start">
            <span
              class="mb-0 ml-3 mr-1 pa-0"
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
          <v-flex md2 class="d-flex justify-start">
            <span
              class="mb-0 ml-2"
              style="
                font-family: Lato;
                font-style: normal;
                font-weight: normal;
                font-size: 12px;
                line-height: 14px;
                color: #596a73;
              "
              >{{ vendorname }}</span
            >
          </v-flex>
          <v-flex md2>
            <div class="d-flex justify-start align-center">
              <div
                class="ms-1"
                style="
                  font-family: Lato;
                  font-style: normal;
                  font-weight: normal;
                  font-size: 12px;
                  line-height: 14px;
                  color: #596a73;
                "
              >
                {{ hyphnId }}
              </div>
            </div>
          </v-flex>

          <v-flex md2>
            <div class="d-flex align-center">
              <span
                class="ms-1"
                style="
                  font-family: Lato;
                  font-style: normal;
                  font-weight: normal;
                  font-size: 12px;
                  line-height: 14px;
                  color: #596a73;
                "
                >{{ bankAccount }}</span
              >
            </div>
          </v-flex>
          <v-flex md2>
            <div class="d-flex align-center">
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
                >{{ email }}</span
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
                >{{ phone }}</span
              >
            </div>
          </v-flex>
          <!-- <v-flex md1>
            <div class="d-flex justify-center">
              <span
                class="mx-auto"
                style="
                  font-family: Lato;
                  font-style: normal;
                  font-weight: normal;
                  font-size: 12px;
                  line-height: 14px;
                  color: #596a73;
                "
                >{{ state }}</span
              >
            </div>
          </v-flex> -->
          <v-flex md2>
            <div class="d-flex justify-center align-center">
              <v-hover v-slot="{ hover }">
                <v-btn
                  @click="
                    $router.push({
                      name: 'contact.customer',
                      params: { id: id },
                      query: { vendor: true, edit: true },
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
    vendorname: {
      type: String,
    },
    hyphnId: {
      type: String,
    },

    bankAccount: {
      type: Number,
    },
    phone: {
      type: String,
    },
    email: {
      type: String,
    },
    state: {
      type: String,
    },
  },
  data() {
    return {
      //
    };
  },

  methods: {
    //   editVendor(id) {
    // this.$refs.editVendor.open();
    //   },
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
