<template>
  <div class="pa-0 ma-0">
    <v-menu left offset-y :close-on-content-click="false">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          elevation="3"
          dark
          v-bind="{ attrs, size }"
          v-on="on"
          class="mr-md-16 py-md-6 px-md-8"
          color="primary"
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
              font-weight: 400;
              line-height: 17px;
              text-align: center;
              letter-spacing: 0.636364px;
            "
            :style="{
              fontSize: `${$vuetify.breakpoint.mdAndDown ? '11px' : '12px'}`,
            }"
            class="text-capitalize"
          >
            {{ btnText }}
          </span>
        </v-btn>
      </template>
      <v-card
        elevation="3"
        style="
          width: 227px;

          background: #ffffff;
        "
        ><v-list-item-group>
          <v-list>
            <v-list-item
              @click="showDialog(item.modalKey)"
              v-for="(item, index) in contactMenus"
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
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-list-item-group>
      </v-card>
    </v-menu>
    <AddVendor ref="AddVendor" />
    <AddCustomer ref="AddCustomer" />
  </div>
</template>

<script>
import AddVendor from "./overlays/ContactsMenuModals/AddVendor.vue";
import AddCustomer from "./overlays/ContactsMenuModals/AddCustomer.vue";
export default {
  name: "ContactDropDown",
  components: {
    AddVendor,
    AddCustomer,

    //
  },
  props: {
    icon: String,
    btnText: String,
  },
  data() {
    return {
      selectedAction: null,
      dialog: false,

      contactMenus: [
        {
          title: "Add Vendor",
          path: "#",
          modalKey: "AddVendor",
        },

        {
          title: "Add Customer",
          path: "#",
          modalKey: "AddCustomer",
        },

        {
          title: "Invite Customer",
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

    //dynamic button size and icon
    size() {
      const size = { xs: "x-small", sm: "small", lg: "large" }[
        this.$vuetify.breakpoint.name
      ];
      return size ? { [size]: true } : {};
    },
    iconSize() {
      const size = { xs: "x-small", sm: "small" }[
        this.$vuetify.breakpoint.name
      ];
      return size ? { [size]: true } : {};
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
      //console.log(this.$refs[ref]);
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
