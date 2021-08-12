<template>
  <v-row>
    <v-col
      class="#faf2df full-height"
      cols="4"
      style="width: 450px; background-color: #fffbf1"
    >
      <h6
        class="pt-13 pl-13"
        style="
          font-family: Inter;
          font-style: normal;
          font-weight: normal;
          font-size: 12px;
          line-height: 15px;
          color: #7f919b;
        "
      >
        Total amount
      </h6>
      <h3 class="pt-1 pl-13 amount">N2,300,000</h3>
      <!-- BasicData component added here... -->
      <v-row>
        <BasicData />
      </v-row>
      
    </v-col>
    <v-col class="full-height" cols="8">BBBBBB</v-col>
  </v-row>
</template>

<script>
import BasicData from "../../includes/BasicData.vue";

export default {
  name: "Invoice",
  data() {
    return {
      isDisabled: false,
    };
  },

  components: { BasicData },

  computed: {
    //isDisabled
  },
};
</script>

<style scoped>
.v-text-field {
  padding-top: 0px;
  padding-bottom: 0px;
  margin-top: 0px;
  margin-bottom: 0px;
  background-color: transparent;
}
.v-text-field.v-text-field--enclosed .v-text-field__details {
  padding-top: 0px;
  margin-bottom: 2px;
  margin-top: 8px;
}

.theme--light.v-sheet {
  background-color: transparent;
}

.amount {
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 39px;
  color: #596a73;
}
</style>
