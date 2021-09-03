<template>
  <div>
    <v-card
      v-for="card in cards"
      :key="card.title"
      elevation="0"
      width="1300"
      min-height="156"
      style="
        margin-bottom: 26px;
        background: #fcfcfc;
        border: 1px solid #f9fafa;
        box-sizing: border-box;
        border-radius: 8px;
      "
    >
      <v-row>
        <v-card-title
          class="ml-7 mt-4"
          style="
            font-family: Inter;
            font-style: normal;
            font-weight: 600;
            font-size: 14px;
            line-height: 17px;
            color: #596a73;
          "
          >{{ card.title }}</v-card-title
        >
        <v-spacer></v-spacer>
        <v-btn
          class="px-0 mx-0"
          style="margin-top: 19px"
          icon
          id="no-background-hover"
          to="/workflow/rules-edit"
          v-for="(icon, index) in icons"
          :key="icon.title"
        >
          <v-icon
            v-bind:class="{ last: index === icons.length - 1 }"
            color="#7F919B"
            small
            class="pl-2"
            to="icon.path"
          >
            {{ icon.title }}
          </v-icon>
        </v-btn>
      </v-row>
      <v-row class="d-flex">
        <v-card
          elevation="0"
          width="150"
          height="50"
          class="ml-7 mt-3"
          style="
            background: #ffffff;
            border: 1px solid rgba(48, 31, 120, 0.07);
            box-sizing: border-box;
            border-radius: 8px;
          "
        >
          <v-card-subtitle class="subtitle"> Created </v-card-subtitle>
          <v-card-text class="textOne" style="font-weight: 800">
            {{ textOne }}
          </v-card-text>
        </v-card>
        <v-card
          elevation="0"
          width="150"
          height="50"
          class="ml-3 mt-3"
          style="
            background: #ffffff;
            border: 1px solid rgba(48, 31, 120, 0.07);
            box-sizing: border-box;
            border-radius: 8px;
          "
        >
          <v-card-subtitle class="subtitle"> Tota Processed </v-card-subtitle>
          <v-card-text class="textOne" style="font-weight: 800">
            {{ card.textTwo }}
          </v-card-text>
        </v-card>
        <v-card
          elevation="0"
          width="150"
          height="50"
          class="ml-3 mt-3"
          style="
            background: #ffffff;
            border: 1px solid rgba(48, 31, 120, 0.07);
            box-sizing: border-box;
            border-radius: 8px;
          "
        >
          <v-card-subtitle class="subtitle"> Total pending </v-card-subtitle>
          <v-card-text class="textOne" style="font-weight: 800">
            {{ card.textThree }}
          </v-card-text>
        </v-card>
        <v-spacer></v-spacer>
        <v-switch
          v-model="switch1"
          color="#4CAF50"
          class="mr-10 mt-4 align-self-end"
        ></v-switch>
      </v-row>
      <v-divider
        class="mt-4 mb-4"
        style="border: 1px solid rgba(48, 31, 120, 0.07)"
      ></v-divider>
      <v-row class="ml-8 mb-4">
        <v-card-text v-if="card.title === 'Approval by MD & Snr. Managers'">
          If <span v-html="amount" style="color: #16be98"></span> is greater
          than
          <span
            v-html="figure"
            style="color: #311b92; font-weight: bold"
          ></span>
          then get approval from
          <span v-html="managers" style="color: #16be98"></span> , then process
          payment on
          <span v-html="paymentDate" style="color: #16be98"></span>
        </v-card-text>
        <v-card-text
          v-else-if="card.title === 'Dynamic discount by location & MOQ'"
        >
          If <span v-html="order" style="color: #16be98"></span> is greater than
          <span
            v-html="figure2"
            style="color: #311b92; font-weight: bold"
          ></span>
          AND payment method
          <span v-html="paymentMtd" style="color: #16be98"></span> AND location
          is <span v-html="location" style="color: #16be98"></span> , then send
          invoice with <span v-html="discount" style="color: #16be98"></span>
          <span v-html="percent" style="color: #16be98"></span>
        </v-card-text>
        <v-card-text
          v-else-if="card.title === 'Loan Pre-Qualification, low income'"
        >
          If <span v-html="KYC" style="color: #16be98"></span> is
          <span style="color: #311b92; font-weight: bold">true</span> AND
          <span v-html="amount" style="color: #16be98"></span> less than
          <span v-html="salary"></span>, AND
          <span v-html="spendCategorization"></span> is
          <span v-html="conservative" style="color: #16be98"></span>, then get
          approval from
          <span v-html="approval" style="color: #16be98"></span>
        </v-card-text>
        <v-card-text v-else>
          If <span v-html="transaction_source" style="color: #16be98"></span> is
          <span v-html="ATM"></span> AND <span v-html="amount"></span> less than
          <span v-html="figure3"></span>, then update profile, with
          <span v-html="frequency" style="color: #16be98"></span>
          <span v-html="count" style="color: #16be98"></span>
        </v-card-text>
      </v-row>
    </v-card>
  </div>
</template>

<script>
//import SimpleLineIcons from "vue-simple-line";

export default {
  name: "SingleRule",
  props: {
    textOne: {
      type: String,
      required: true,
    },
  },
  components: {
    //SimpleLineIcons,
  },
  data() {
    return {
      order: "{{order_quanity}}",
      figure2: "{{250}}",
      figure3: "{{N20,000}}",
      count: "{{+1}}",
      paymentMtd: "{{cash_on_delivery}}",
      location: "{{east}}",
      discount: "{{discount}}",
      frequency: "{{frequency}}",
      percent: "{{2%}}",
      KYC: "{{KYC}}",
      transaction_source: "{{transaction_source}}",
      ATM: "{{ATM}}",
      salary: "{{salary}}",
      spendCategorization: "{{spend categorization}}",
      conservative: "{{conservative}}",
      amount: "{{ amount }}",
      approval: "{{ Bunmi A }}",
      figure: "{{ N2,000,000 }}",
      managers: "{{ Kayode A, Uche B, Ahmed M }}",
      paymentDate: "{{ 23/05/2021 }}",
      switch1: false,
      icons: [
        { title: "mdi-pencil-outline", path: "/workflow/rules-edit" },
        { title: "mdi-content-copy", path: "#" },
        { title: "mdi-delete", path: "#" },
      ],
      cards: [
        {
          title: "Approval by MD & Snr. Managers",
          textTwo: "23",
          textThree: "0",
        },
        {
          title: "Dynamic discount by location & MOQ",
          textTwo: "151",
          textThree: "0",
        },
        {
          title: "Loan Pre-Qualification, low income",
          textTwo: "203",
          textThree: "45",
        },
        {
          title: "Loan Pre-Qualifications, low income",
          textTwo: "203",
          textThree: "45",
        },
      ],
    };
  },
};
</script>

<style scoped>
.v-icon.v-icon::after {
  height: inherit;
}
.subtitle {
  padding-left: 44px;
  padding-top: 12px;
  padding-bottom: 0px;
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 14px;
  color: #7f919b;
}
.text {
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 14px;
  color: #596a73;
}
.textOne {
  padding-left: 44px;
  padding-bottom: 10px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 14px;
  color: #596a73;
}

.last {
  margin-right: 26px;
}
#no-background-hover::before {
  background-color: transparent !important;
}
</style>
