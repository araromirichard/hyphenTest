<template>
  <div class="pa-0 ma-0">
    <v-menu left offset-y :close-on-content-click="false">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          dark
          v-bind="attrs"
          v-on="on"
          color="primary"
          :width="width"
          :height="height"
          style="background: var(--v-primary-base); border-radius: 4px"
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
            <ListMenu />
            <v-list-item v-for="(item, index) in inboxMenus" :key="index">
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
  </div>
</template>

<script>
import ListMenu from "@/includes/overlays/ListMenu.vue";

export default {
  name: "DropDown",
  components: {
    ListMenu,
  },
  props: {
    icon: String,
    btnText: String,
    width: String,
    height: String,
  },
  data() {
    return {
      inboxMenus: [
        {
          title: "Form",
          subtitle: "create form",
          icon: "mdi-text-box-outline ",
          path: "#",
        },

        {
          title: "Bank Account",
          subtitle: "connect your bank account",
          icon: "mdi-text-box-outline ",
          path: "#",
        },

        {
          title: "EMAIL TO:",
          subtitle: "",
          icon: "",
          path: "#",
        },
      ],
    };
  },
  computed: {
    btnIcon() {
      return require(`@/assets/pbot_icons/${this.icon}.svg`);
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
