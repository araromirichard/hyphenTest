<template>
  <div>
    <v-item-group>
      <v-container>
        <v-row>
          <v-col
            v-for="(card, j) in formCards"
            :key="j"
            cols="12"
            sm="6"
            md="4"
          >
            <v-item v-slot:default="{ active, toggle }">
              <v-skeleton-loader width="100%" type="card" :loading="loading">
                <v-card
                  width="100%"
                  @click="toggle"
                  :elevation="active ? 4 : 0"
                  class="
                    d-flex
                    align-text-center
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
                    class="mx-2 mt-2 text-break"
                    style="
                      max-width: 90%;
                      font-family: Inter;
                      font-style: normal;
                      font-weight: 400;
                      font-size: 14px;
                      line-height: 24px;
                      color: #596a73;
                    "
                    >{{ card.form_title }}</v-card-title
                  >
                  <v-card-subtitle
                    class="mx-2 pb-2 indigo--text darken-4"
                    style="cursor: pointer"
                  >
                    <span @click="copy(j)">
                      https://hypn.so/{{ card.hypn_id }}
                    </span>

                    <v-icon x-small class="px-2">mdi-content-copy</v-icon>
                  </v-card-subtitle>

                  <div class="d-flex justify-space-between my-4">
                    <div class="mx-4 mx-md-1">
                      <v-chip
                        label
                        small
                        dark
                        color="#636b70"
                        class="mt-4 mx-md-5"
                        >{{ card.entries }}</v-chip
                      >
                      <h5 class="mx-md-5 text--disabled text-caption">
                        entries
                      </h5>
                    </div>
                    <v-switch
                      class="pt-0"
                      hide-details="true"
                      dense
                      :value="card.hypn_id"
                      v-model="inActiveForms"
                      multiple
                      color="#1a1544"
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
                      class="ml-4 primary--text"
                      style="
                        font-family: Inter;
                        font-style: normal;
                        font-weight: normal;
                        font-size: 12px;
                        line-height: 18px;
                        letter-spacing: 0.45px;
                        mix-blend-mode: normal;
                        opacity: 0.5;
                      "
                      :style="{
                        marginTop: `${
                          $vuetify.breakpoint.md ? '0.7em' : '1.2em'
                        }`,
                      }"
                    >
                      Created {{ card.created_at | date }}
                    </p>
                    <v-spacer></v-spacer>
                    <v-btn
                      v-model="selectedIcon"
                      @click="showForm(index, j)"
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
              </v-skeleton-loader>
            </v-item>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-card
              class="d-flex flex-column align-center justify-center"
              color="#f8f8f8"
              max-width="100%"
              height="200"
              outlined
              style="border-color: rgba(49, 27, 146, 0.2)"
            >
              <v-card-actions class="ma-0 pa-0">
                <v-btn plain fab @click="activateModal">
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
    <delete-form ref="deleteForm" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import DeleteForm from "../includes/overlays/deleteForm.vue";

export default {
  data() {
    return {
      inActiveForms: [],
      selectedIcon: null,
      formEntries: [],
      icons: [
        { title: "mdi-pencil-outline", path: "#" },
        { title: "mdi-format-indent-increase", path: "#" },
        { title: "mdi-delete", path: "#" },
      ],

      loading: true,
      submitUrl: "",
    };
  },
  components: {
    DeleteForm,
  },
  methods: {
    ...mapActions("formBuilder", ["deleteForm"]),
    ...mapActions({ showToast: "ui/showToast" }),
    //method to emit event to open modal

    activateModal() {
      this.$parent.$emit("open-modal");
    },

    //copy to clipboard function using the v-clipboard plugin from npm
    copy(j) {
      const value = `https://hypn.so/${this.formCards[j].hypn_id}`;
      this.$clipboard(value).then(
        this.showToast({
          sclass: "success",
          show: true,
          message: `copied ${value} to clipboard`,
          timeout: 3000,
        })
      );
    },
    async showForm(index, parentIndex) {
      console.log(index);
      if (index === 0) {
        console.log(
          JSON.stringify(this.formCards[parentIndex].entries, null, 2)
        );
        this.$emit("edit-form");

        this.$router.push({
          path: `/edit-form/${this.formCards[parentIndex].id}`,
        });
      } else if (index === 1) {
        this.$emit("entries");

        this.$router.push({
          path: `/form/${this.formCards[parentIndex].id}`,
        });
      } else if (index === 2) {
        this.$refs.deleteForm.openDialog(parentIndex);
      }
    },

    newForm() {
      this.$emit("formBuilder/create-form", this.formCards);
    },
  },
  mounted() {
    //make skeleton loader
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 3000);
    this.$store.dispatch("formBuilder/FetchAllForms");
    console.log(JSON.stringify(this.formCards, null, 2));
    //console.log(this.$store.dispatch("formBuilder/FetchAllForms"));
    //console.log(this.$store);
  },
  computed: {
    ...mapGetters({
      formCards: "formBuilder/forms",
    }),

    getFormById() {
      return this.forms.find((form) => form.id == this.$route.params.id).id;
    },

    //total entries suppose to come from the form input endpoint
    totalEntriesNum() {
      return this.formEntries.length;
    },

    //set the value of the submit form URL
    // submitFormUrl() {
    //   return ;
    // },
  },
  watch: {},
};
</script>

<style>
.v-input--selection-controls {
  /* margin-top: 16
px
; */
  padding-top: 4px !important;
}
.v-card--link {
  /* cursor: pointer; */
  cursor: default !important;
}
</style>
