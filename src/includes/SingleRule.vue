<template>
  <div>
    <v-card
      elevation="0"
      width="1300"
      height="156"
      style="
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
          >{{ title }}</v-card-title
        >
        <v-spacer></v-spacer>
        <v-icon color="#7F919B" tag="button" link :to="to" small class="pr-2">
          mdi-pencil-outline
        </v-icon>
        <v-icon color="#7F919B" tag="button" link :to="to" small class="pr-2">
          mdi-content-copy
        </v-icon>
        <v-icon color="#7F919B" tag="button" link :to="to" small class="mr-10">
          mdi-delete
        </v-icon>
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
          <v-card-text class="textOne">
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
          <v-card-text class="textOne">
            {{ textTwo }}
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
          <v-card-text class="textOne">
            {{ textThree }}
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
        class="mt-4"
        style="border: 1px solid rgba(48, 31, 120, 0.07)"
      ></v-divider>
      <v-card-text> </v-card-text>
    </v-card>
  </div>
</template>

<script>
//import SimpleLineIcons from "vue-simple-line";

export default {
  name: "SingleRule",
  props: {
    to: {
      type: URL,
    },
    title: {
      type: String,
      required: true,
    },

    textOne: {
      type: String,
      required: true,
    },

    textTwo: {
      type: String,
      required: true,
    },

    textThree: {
      type: String,
      required: true,
    },
  },
  components: {
    //SimpleLineIcons,
  },
  data() {
    return {
      Switch1: true,
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
.outerText {
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 12px;
  color: #7f919b;
}
</style>
