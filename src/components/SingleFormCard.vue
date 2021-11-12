<template>
  <div>
    <v-item-group>
      <v-container>
        <v-row>
          <v-col
            v-for="card in formCards"
            :key="card.title"
            cols="12"
            sm="6"
            md="3"
          >
            <v-item v-slot:default="{ active, toggle }">
              <v-card
                width="100%"
                @click="toggle"
                :elevation="active ? 4 : 0"
                class="
                  d-flex
                  align-md-center align-text-center
                  flex-column
                  rounded
                  elevation-0
                "
                tile
                style="
                  width: auto;
                  height: 200px;
                  background: #ffffff;
                  border: 1px solid rgba(49, 27, 146, 0.2);
                  box-sizing: border-box;
                  border-radius: 8px;
                "
              >
                <v-card-title
                  class="mx-2 mt-4 text-break"
                  style="
                    max-width: 80%;
                    font-family: Inter;
                    font-style: normal;
                    font-weight: 600;
                    font-size: 14px;
                    line-height: 17px;
                    color: #596a73;
                  "
                  >{{ card.title }}</v-card-title
                >
                <div class="d-flex justify-space-around my-4">
                  <div>
                    <v-chip
                      label
                      small
                      dark
                      color="#636b70"
                      class="mt-4 mx-md-5"
                      >{{ card.numberProcessed }}</v-chip
                    >
                    <h5 class="mx-md-5 text--disabled">entries</h5>
                  </div>
                  <v-switch
                    class="pt-0"
                    hide-details="true"
                    dense
                    :value="card.switchValue"
                    v-model="switch1"
                    color="#16BE98"
                  ></v-switch>
                </div>
                <div
                  class="d-flex"
                  style="
                    margin-top: 30px;
                    width: 100%;
                    height: 48px;
                    position: absolute;
                    bottom: 0;
                    border-top: 1px solid rgba(49, 27, 146, 0.2);
                    box-sizing: border-box;
                  "
                >
                  <p
                    class="ml-4"
                    style="
                      margin-top: 11px;
                      font-family: Inter;
                      font-style: normal;
                      font-weight: normal;
                      font-size: 12px;
                      line-height: 18px;
                      letter-spacing: 0.45px;
                      color: #301f78;
                      mix-blend-mode: normal;
                      opacity: 0.5;
                    "
                  >
                    Created {{ createdAt }}
                  </p>
                  <v-spacer></v-spacer>
                  <v-btn
                    v-model="selectedIcon"
                    @click="showForm(icon, index)"
                    target="_blank"
                    class="px-0 mx-0"
                    style="margin-top: 4px"
                    icon
                    id="no-background-hover"
                    v-for="(icon, index) in icons"
                    :key="icon.title"
                  >
                    <v-icon
                      v-bind:class="{ last: index === icons.length - 1 }"
                      color="#7F919B"
                      small
                      class="pl-1"
                      to="icon.path"
                    >
                      {{ icon.title }}
                    </v-icon>
                  </v-btn>
                </div>
              </v-card>
            </v-item>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-card
              class="d-flex flex-column align-center justify-center"
              color="#f8f8f8"
              max-width="100%"
              height="200"
              outlined
              style="margin-left: 8px; border-color: rgba(49, 27, 146, 0.2)"
            >
              <v-card-actions class="ma-0 pa-0">
                <v-btn plain fab to="/form/create-new-form" target="_blank">
                  <simple-line-icons
                    icon="plus"
                    color="#7f919b"
                    style="
                      font-family: simple-line-icons;
                      font-style: normal;
                      font-weight: normal;
                      font-size: 45px;
                      line-height: 16px;
                      mix-blend-mode: normal;
                      opacity: 0.5;
                    "
                    no-svg
                  />
                </v-btn>
              </v-card-actions>
              <v-card-title class="ma-0 px-0">
                <p>New Form</p>
              </v-card-title>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-item-group>
  </div>
</template>

<script>
export default {
  props: {
    createdAt: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      switch1: [],
      selectedIcon: null,
      icons: [
        { title: "mdi-pencil-outline", path: "#" },
        { title: "mdi-format-indent-increase", path: "#" },
        { title: "mdi-delete", path: "#" },
      ],
      formCards: [
        {
          title: "Form Name and Title",
          numberProcessed: "23",
          switchValue: 1,
        },
      ],
    };
  },
  methods: {
    showForm(icon, index) {
      // i = this.selectedIcon;
      console.log({ icon, index });
      if (index === 0) {
        this.$emit("edit-form");
        this.$router.push({
          name: "Create-form",
        });
      } else if (index === 1) {
        this.$emit("entries");
        console.log(index);
      }
    },
    // openEntries(icon, index) {
    //   if (index === 1 && icon.title === "mdi-format-indent-increase") {
    //     this.$emit("entries-form");
    //   }
    // },
    newForm() {
      this.$emit("create-form", this.formCards);
    },
  },
};
</script>

<style>
.v-input--selection-controls {
  /* margin-top: 16
px
; */
  padding-top: 4px !important;
}
</style>
