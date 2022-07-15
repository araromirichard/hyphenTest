<template>
  <v-row class="mt-16 mx-2 px-2 mx-md-1 pl-md-8 pr-md-4">
    <v-col class="pa-0 my-4 my-md-0 mx-0" cols="12" md="4">
      <div class="pr-md-2">
        <slot name="cardOne" />
      </div>
    </v-col>
    <v-col class="pa-0 my-4 my-md-0" cols="12" md="4">
      <div class="px-md-2">
        <slot name="cardTwo" />
      </div>
    </v-col>
    <v-col class="pa-0 my-4 my-md-0" cols="12" md="4">
      <div class="pl-md-2 pr-md-4">
        <slot name="cardThree" />
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "infoSummaryContainer",
};
</script>

<style scoped></style>
