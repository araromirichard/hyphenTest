<template>
  <div>
    <v-item-group @change="selectedActionChanged" v-model="selectedAction">
      <v-row style="margin-right: 300px">
        <v-col v-for="(item, i) in actions" :key="i" cols="12" sm="4">
          <v-item :value="item" v-slot:default="{ active, toggle }">
            <v-card
              @click="toggle"
              :elevation="active ? 4 : 0"
              class="
                d-flex
                align-text-center
                flex-column
                rounded-lg
                elevation-0
              "
              tile
              style="
                width: auto;
                height: 180px;
                background: #ffffff;
                border: 1px solid rgba(49, 27, 146, 0.2);
                box-sizing: border-box;
                border-radius: 8px;
              "
            >
              <!-- <img
            src="@/assets/pbot_icons/rocket-pbot.png"
            alt="Manager-approval-icon"
          />
            src="require('@/assets/pbot_icons/rocket-pbot.png')" -->
              <v-img
                contain
                src="@/assets/pbot_icons/rocket-pbot.png"
                width="24.06px"
                height="24.1px"
                style="
                  position: absolute;
                  width: 34.06px;
                  height: 34.1px;
                  left: 115px;
                  top: 40px;
                "
              >
              </v-img>
              <v-card
                dark
                tile
                class="rounded-b-lg elevation-0 text-center"
                style="
                  width: 100%;
                  height: 78px;
                  position: absolute;
                  bottom: 0;
                  background: #fcfcfc;
                  border: 1px solid rgba(49, 27, 146, 0.2);
                  box-sizing: border-box;
                "
              >
                <v-card-text
                  class="
                    text-primary
                    mx-auto
                    text-center text-break text-body-1
                  "
                  style="
                    font-family: Inter;
                    font-style: normal;
                    font-weight: 500;
                    font-size: 12px;
                    line-height: 18px;
                    text-align: center;
                    letter-spacing: 0.45px;
                    color: #301f78;
                    mix-blend-mode: normal;
                    opacity: 0.5;
                    max-width: 10.5rem;
                  "
                >
                  {{ item.text }}
                </v-card-text>
              </v-card>
            </v-card>
          </v-item>
        </v-col>
      </v-row>
    </v-item-group>
  </div>
</template>

<script>
export default {
  name: "ExecuteActions",
  data() {
    return {
      actions: [
        {
          text: `Send
                Payment`,
          icon: "@/assets/pbot_icons/rocket-pbot.png",
        },
        {
          text: `Add to
                Payables`,
          icon: "@/assets/pbot_icons/rocket-pbot.png",
        },
        {
          text: `Send
            Notification`,
          icon: "@/assets/pbot_icons/rocket-pbot.png",
        },
        {
          text: `Update
            ERP/Accounting`,
          icon: "@/assets/pbot_icons/rocket-pbot.png",
        },
        {
          text: `Create
                Document`,
          icon: "@/assets/pbot_icons/rocket-pbot.png",
        },
        {
          text: `Add Custom`,
          icon: "",
        },
      ],
      selectedAction: null,
    };
  },

  methods: {
    selectedActionChanged(e) {
      console.table({
        e,
        selectedAction: this.selectedAction,
        text: e ? e.text : null,
      });
    },
  },
};
</script>

<style scoped></style>
