<template>
  <div class="pa-0 ma-0">
    <v-menu left offset-y :close-on-content-click="false">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          dark
          v-bind="attrs"
          v-on="on"
          class="mr-16"
          color="primary"
          :width="width"
          :height="height"
          style="
            margin-top: 25px;
            background: var(--v-primary-base);
            border-radius: 4px;
          "
        >
          <img
            :src="btnIcon"
            alt="A file svg icon"
            style="padding-right: 8px"
          />
          <span
            style="
              font-family: Inter;
              font-style: normal;
              font-weight: 500;
              font-size: 14px;
              line-height: 17px;
              text-align: center;
              letter-spacing: 0.636364px;
            "
            class="text-capitalize"
          >
            {{ btnText }}
          </span>
        </v-btn>
      </template>
      <v-card
        flat
        style="
          width: 227px;
          height: 266px;

          background: #ffffff;
        "
        ><v-list-item-group>
          <v-list>
            <v-list-item
              @click="showDialog(item.modalKey)"
              v-for="(item, index) in paymentMenus"
              :key="index"
            >
              <v-list-item-content>
                <v-list-item-title
                  style="
                    font-family: Inter;
                    font-style: normal;
                    font-weight: 600;
                    font-size: 12px;
                    line-height: 15px;
                    color: #7f919b;
                  "
                  >{{ item.title }}</v-list-item-title
                >
                <v-list-item-subtitle
                  style="
                    font-family: Inter;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 10px;
                    line-height: 12px;
                    color: #7f919b;
                    mix-blend-mode: normal;
                    opacity: 0.5;
                  "
                >
                  {{ item.subtitle }}
                </v-list-item-subtitle>
              </v-list-item-content>
              <v-icon small style="mix-blend-mode: normal; opacity: 0.5">
                {{ item.icon }}</v-icon
              >
            </v-list-item>
          </v-list>
        </v-list-item-group>
      </v-card>
    </v-menu>
    <CSVfile ref="CSVfile" />
    <UploadModal ref="upload" />
  </div>
</template>

<script>
import CSVfile from "./overlays/PayablesMenuModals/CSVfile.vue";
import UploadModal from "./overlays/PayablesMenuModals/UploadModal.vue";
export default {
  name: "DropDown",
  components: {
    CSVfile,
    UploadModal,
    //
  },
  props: {
    icon: String,
    btnText: String,
    width: String,
    height: String,
  },
  data() {
    return {
      selectedAction: null,
      dialog: false,

      paymentMenus: [
        {
          title: "Upload",
          subtitle: "pdf or jpg invoice",
          icon: "mdi-upload",
          path: "#",
          modalKey: "upload",
        },

        {
          title: "CSV",
          subtitle: "list of payables",
          icon: "mdi-file-document-outline ",
          path: "#",
          modalKey: "CSVfile",
        },

        {
          title: "Sync Bank",
          subtitle: "pull expense from bank",
          icon: "mdi-file-document-outline ",
          path: "#",
          modalKey: "",
        },
      ],
    };
  },
  computed: {
    btnIcon() {
      return require(`@/assets/pbot_icons/${this.icon}.svg`);
    },
  },

  methods: {
    closeDialog() {
      this.dialog = false;
    },

    triggerDialog(item) {
      this.selectedAction = item;
      this.dialog = true;
    },
    showDialog(ref) {
      this.$refs[ref].show(true);
    },
  },
};
</script>

<style scoped>
.v-menu__content {
  position: absolute;
  display: inline-block;
  max-width: 80%;
  overflow-y: auto;
  overflow-x: hidden;
  contain: content;
  box-shadow: none;
  border-radius: none;
}
</style>
