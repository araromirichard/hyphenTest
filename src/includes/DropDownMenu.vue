<template>
  <div>
    <v-menu left offset-y :close-on-content-click="false">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          dark
          v-bind="attrs"
          v-on="on"
          class="mr-16"
          color="primary"
          style="
            margin-top: 25px;
            width: 121px;
            height: 54px;
            background: #311b92;

            border-radius: 4px;
          "
        >
          <img
            :src="require('@/assets/file.svg')"
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
            New
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
      >
        <v-list>
          <ListMenu />
          <v-list-item
            v-for="inboxMenu in inboxMenus"
            :key="inboxMenu.title"
            v-bind="attrs"
            v-on="on"
            active-class="active"
            link
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
                >{{ inboxMenu.title }}</v-list-item-title
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
                {{ inboxMenu.subtitle }}
              </v-list-item-subtitle>
            </v-list-item-content>
            <v-icon small style="mix-blend-mode: normal; opacity: 0.5">
              {{ inboxMenu.icon }}</v-icon
            >
          </v-list-item>
        </v-list>
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
          subtitle: "brandname0923@process.finance",
          icon: "",
          path: "#",
        },
      ],
    };
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
