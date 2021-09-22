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
            <div class="d-flex flex-column">
              <v-card
                class="rounded-lg"
                elevation="0"
                width="120"
                height="120"
                style="
                  margin-left: 42px;
                  margin-top: 22px;
                  background: #7aebe7;
                  mix-blend-mode: normal;
                  opacity: 1;
                "
              >
                <v-img
                  contain
                  class="mx-auto mt-10 pa-1"
                  width="25px"
                  height="32px"
                  src="@/assets/pbot_icons/file.png"
                  alt="file image"
                ></v-img>
              </v-card>
              <span
                class="ml-15 pl-1 mt-3 text-break"
                style="
                  max-width: 6rem;
                  font-family: Inter;
                  font-style: normal;
                  font-weight: normal;
                  font-size: 12px;
                  line-height: 15px;
                  text-align: center;
                  color: #7f919b;
                "
                >Transaction approval
              </span>
            </div>
            <div class="d-flex flex-column">
              <v-card
                class="rounded-lg"
                elevation="0"
                width="120"
                height="120"
                style="
                  margin-left: 42px;
                  margin-top: 22px;
                  background: #66d5ff;
                  mix-blend-mode: normal;
                  opacity: 1;
                "
              >
                <v-img
                  contain
                  class="mx-auto mt-10 pa-1"
                  width="30px"
                  height="24px"
                  src="@/assets/pbot_icons/envelop.png"
                  alt="envelop image"
                ></v-img>
              </v-card>
              <span
                class="ml-15 pl-1 mt-3 text-break"
                style="
                  max-width: 6rem;
                  font-family: Inter;
                  font-style: normal;
                  font-weight: normal;
                  font-size: 12px;
                  line-height: 15px;
                  text-align: center;
                  color: #7f919b;
                "
                >Transaction reporting
              </span>
            </div>
            <div class="d-flex flex-column">
              <v-card
                class="rounded-lg"
                elevation="0"
                width="120"
                height="120"
                style="
                  margin-left: 42px;
                  margin-top: 22px;
                  background: #9f66ff;
                  mix-blend-mode: normal;
                  opacity: 1;
                "
              >
                <v-img
                  contain
                  class="mx-auto mt-10 pa-1"
                  width="30px"
                  height="30px"
                  src="@/assets/pbot_icons/person.png"
                  alt="file image"
                ></v-img>
              </v-card>
              <span
                class="ml-14 mt-3 text-break"
                style="
                  max-width: 6rem;
                  font-family: Inter;
                  font-style: normal;
                  font-weight: normal;
                  font-size: 12px;
                  line-height: 15px;
                  text-align: center;
                  color: #7f919b;
                "
                >AML/KYC monitoring rule
              </span>
            </div>
            <div class="d-flex flex-column">
              <v-card
                class="rounded-lg"
                elevation="0"
                width="120"
                height="120"
                style="
                  margin-left: 42px;
                  margin-top: 22px;
                  background: #ff9766;
                  mix-blend-mode: normal;
                  opacity: 1;
                "
              >
                <v-img
                  contain
                  class="mx-auto mt-10 pa-1"
                  width="30px"
                  height="30px"
                  src="@/assets/pbot_icons/house.png"
                  alt="file image"
                ></v-img>
              </v-card>
              <span
                class="ml-15 pl-1 mt-3 text-break"
                style="
                  max-width: 6rem;
                  font-family: Inter;
                  font-style: normal;
                  font-weight: normal;
                  font-size: 12px;
                  line-height: 15px;
                  text-align: center;
                  color: #7f919b;
                "
                >Transaction approval
              </span>
            </div>
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
      show: true,
    };
  },
  components: {
    //SimpleLineIcons,
  },
};
</script>

<style scoped>
.v-card > *:first-child:not(.v-btn):not(.v-chip):not(.v-avatar),
.v-card > .v-card__progress + *:not(.v-btn):not(.v-chip):not(.v-avatar) {
  border-top-left-radius: 0 !important;
  border-top-right-radius: 0 !important;
  border-bottom-left-radius: 0 !important;
  border-bottom-right-radius: 0 !important;
}
</style>
