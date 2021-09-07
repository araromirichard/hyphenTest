<template>
  <div style="background: #f0f0fa; width: 1407px">
    <v-card elevation="0" style="background: #f9fafa; mix-blend-mode: normal">
      <v-expand-transition mode="out-in">
        <div v-show="show">
          <h6
            style="
              margin-left: 42px;
              padding-top: 25px;
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
          <div class="d-flex mb-10">
            <v-card
              width="120"
              height="120"
              style="
                margin-left: 42px;
                margin-top: 22px;
                background: #7aebe7;
                mix-blend-mode: normal;
                opacity: 0.8;
                border-radius: 8px;
              "
            >
              <img
                style="margin-left: 48px; margin-right: 47px; margin-top: 44px"
                :src="require('@/assets/pbot_icons/cardFile.svg')"
                alt=""
              />

              <v-card-text
                style="
                  margin-top: 30px;
                  font-family: Inter;
                  font-style: normal;
                  font-weight: normal;
                  font-size: 12px;
                  line-height: 15px;
                  text-align: center;
                  color: #7f919b;
                "
                >Transaction approval
              </v-card-text>
            </v-card>
            <v-card
              width="120"
              height="120"
              style="
                margin-left: 30px;
                margin-top: 22px;
                background: #66d5ff;
                mix-blend-mode: normal;
                opacity: 0.8;
                border-radius: 8px;
              "
            >
              <img
                style="margin-left: 48px; margin-right: 47px; margin-top: 44px"
                :src="require('@/assets/pbot_icons/cardEnvelop.svg')"
                alt=""
              />

              <v-card-text
                style="
                  margin-top: 30px;
                  font-family: Inter;
                  font-style: normal;
                  font-weight: normal;
                  font-size: 12px;
                  line-height: 15px;
                  text-align: center;
                  color: #7f919b;
                "
              >
                Transaction reporting</v-card-text
              >
            </v-card>
            <v-card
              width="120"
              height="120"
              style="
                margin-left: 30px;
                margin-top: 22px;
                background: #9f66ff;
                mix-blend-mode: normal;
                opacity: 0.8;
                border-radius: 8px;
              "
            >
              <img
                style="margin-left: 48px; margin-right: 47px; margin-top: 44px"
                :src="require('@/assets/pbot_icons/cardPerson.svg')"
                alt=""
              />

              <v-card-text
                style="
                  margin-top: 30px;
                  font-family: Inter;
                  font-style: normal;
                  font-weight: normal;
                  font-size: 12px;
                  line-height: 15px;
                  text-align: center;
                  color: #7f919b;
                "
                >AML/KYC monitoring rule
              </v-card-text>
            </v-card>
            <v-card
              width="120"
              height="120"
              style="
                margin-left: 30px;
                margin-top: 22px;
                background: #ff9766;
                mix-blend-mode: normal;
                opacity: 0.8;
                border-radius: 8px;
              "
            >
              <img
                style="margin-left: 48px; margin-right: 47px; margin-top: 44px"
                :src="require('@/assets/pbot_icons/cardBank.svg')"
                alt=""
              />

              <v-card-text
                style="
                  margin-top: 30px;
                  font-family: Inter;
                  font-style: normal;
                  font-weight: normal;
                  font-size: 12px;
                  line-height: 15px;
                  text-align: center;
                  color: #7f919b;
                "
                >Bank account reconciliation
              </v-card-text>
            </v-card>
          </div>
        </div>
      </v-expand-transition>
      <div class="d-flex justify-center mx-auto">
        <v-btn block plain @click="show = !show" class="text-lowercase">
          <v-icon class="pr-4">{{
            show ? "mdi-chevron-up" : "mdi-chevron-down"
          }}</v-icon>
          collapse
        </v-btn>
      </div>
    </v-card>
  </div>
</template>

<script>
//import SimpleLineIcons from "vue-simple-line";

export default {
  name: "Expansion",
  data() {
    return {
      show: false,
    };
  },
  components: {
    //SimpleLineIcons,
  },
};
</script>

<style scoped></style>
