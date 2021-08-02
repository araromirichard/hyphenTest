<template>
  <div>
    <div>
      <h1
        class="text-center text-h3"
        style="padding-top: 124px; color: #311b92"
      >
        Hello Bunmi
      </h1>
      <p class="text-center" style="padding-bottom: 49px; color: #7f919b">
        Let’s get you started on pbot
      </p>
      <div class="d-flex flex-row ma-auto justify-center">
        <v-card
          width="300"
          height="347"
          color="#FCF7ED"
          class="align-content-center mr-4 justify-center d-flex-column"
          style="top: 63px"
          flat
        >
          <img
            :src="require('@/assets/person.svg')"
            style="padding-top: 60px; padding-right: 129px; padding-left: 129px"
          />
          <v-card-title class="justify-center"
            ><span>Help us know you <br />better</span></v-card-title
          >
          <v-card-text
            >Complete your account KYB by <br />
            providing a few documentation</v-card-text
          >
          <div class="px-2 pt-4 mx-6">
            <Button class="text-md-h5" height="54" width="150" label="Start" />
          </div>
        </v-card>
        <v-card
          width="300"
          height="422"
          color="#FCF7ED"
          class="align-content-center ml-4 mr-4 justify-center d-flex-column"
          style="top: 29px"
          flat
        >
          <img
            :src="require('@/assets/bank.svg')"
            style="padding-top: 95px; padding-right: 129px; padding-left: 129px"
          />
          <v-card-title class="justify-center"
            ><span>
              Know your business <br />
              health</span
            ></v-card-title
          >
          <v-card-text
            >Connect your primary business bank <br />
            account, and pbot will tell you how profitable <br />
            your business is growing.</v-card-text
          >
          <div class="px-2 mx-6">
            <Button
              class="text-md-h5"
              height="54"
              width="150"
              label="Connect Bank"
            />
          </div>
          <v-card-text
            >pbot will not debit your account, <br />
            instead we will credit you #100</v-card-text
          >
        </v-card>
        <v-card
          width="300"
          height="347"
          color="#FCF7ED"
          class="ml-4 justify-center"
          style="top: 63px"
          flat
        >
          <img
            :src="require('@/assets/arrows.svg')"
            style="padding-top: 59px; padding-right: 129px; padding-left: 129px"
          />
          <v-card-title class="justify-center"
            ><span>
              Use your first <br />
              workflow</span
            ></v-card-title
          >
          <v-card-text
            >It’s easy, so we created a video to <br />
            guide you. Watch video here</v-card-text
          >
          <div class="px-2 pt-4 mx-6">
            <Button
              class="text-md-h5"
              height="54"
              width="150"
              label="Use Workflow"
            />
          </div>
        </v-card>
      </div>
      <div class="justify-center">
        <p
          style="
            padding-top: 50px;
            text-align: center;
            font-size: 12px;
            line-height: 15px;
            text-decoration-line: underline;
            color: #7b4fff;
          "
        >
          <router-link to="insight">Go to account overview</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "../../includes/flat-button.vue";
export default {
  data() {
    return {
      publicPath: process.env.BASE_URL,
    };
  },

  components: {
    Button,
  },

  methods: {},
};
</script>

<style scoped>
p {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  /* identical to box height */

  color: #7f919b;
}

.hint {
  /* position: absolute; */
  width: 178px;
  height: 40px;
  left: 222px;
  /* top: 197px; */

  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 18px;
  /* or 167% */

  color: #7f919b;
}

.theme--light.v-card {
  color: #311b92;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  /* or 133% */

  text-align: center;
}

.theme--light.v-card > .v-card__text,
.theme--light.v-card > .v-card__subtitle {
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 16px;
  /* or 160% */

  text-align: center;

  color: #7f919b;
}
</style>
