<template>
  <div style="width: 1407px">
    <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-header style="width: 1407px">
          Item
        </v-expansion-panel-header>
        <v-expansion-panel-content :value="visible">
          <h6
            style="
              margin-left: 42px;
              margin-top: 25px;
              font-family: Inter;
              font-style: normal;
              font-weight: bold;
              font-size: 16px;
              line-height: 19px;
              letter-spacing: 0.45px;
              color: #311b92;
            "
          >
            Use templates
          </h6>
          <p
            style="
              margin-left: 40px;
              margin-top: 7px;
              font-family: Inter;
              font-style: normal;
              font-weight: normal;
              font-size: 12px;
              line-height: 15px;
              color: #7f919b;
            "
          >
            Start with any of our pre-composed workflows below or create your
            own in minutes
          </p>
          <div>
            <v-card
              width="120"
              height="120"
              style="
                background: #7aebe7;
                mix-blend-mode: normal;
                opacity: 0.5;
                border-radius: 8px;
              "
            >
              <div>
                <img
                  style="
                    margin-left: 48px;
                    margin-right: 47px;
                    margin-top: 44px;
                  "
                  :src="require('@/assets/pbot_icons/cardFile.svg')"
                  alt=""
                />
              </div>
              <v-card-text> </v-card-text>
            </v-card>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <!-- <v-card
      slot="header"
      flat
      class="d-flex"
      style="
        background: #f9fafa;
        width: 1407px;
        height: 28px;
        justify-content: center;
      "
      @click="visible = !visible"
    >
      <simple-line-icons
        :icon="visible ? 'arrow-down' : 'arrow-up'"
        color="#7F919B"
        style="font-size: 12px"
        class="pt-3 pr-3"
        no-svg
      />

      <span
        style="
          font-family: Inter;
          font-style: normal;
          font-weight: 500;
          font-size: 12px;
          color: #7f919b;
        "
        class="pt-2"
      >
        collapse</span
      >
    </v-card> -->
  </div>
</template>

<script>
//import SimpleLineIcons from "vue-simple-line";

export default {
  name: "Expansion",
  data() {
    return {
      visible: true,
    };
  },
  components: {
    //SimpleLineIcons,
  },
};
</script>

<style scoped></style>
