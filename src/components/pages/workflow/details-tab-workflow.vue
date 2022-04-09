<template>
  <v-tabs
    grow
    slider-color="#301F78"
    slider-size="4"
    background-color="#fffbf1"
    style="margin:0px auto auto auto;width:100% mix-blend-mode: normal;padding:10px"
  >
    <v-tab> Details </v-tab>
    <v-tab> Audit Trail </v-tab>

    <v-tab-item>
      <v-divider></v-divider>
     <div class="details"></div>
    </v-tab-item>
    <v-tab-item>
      <v-divider></v-divider>
      Audit
    </v-tab-item>
  </v-tabs>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.details{
  width: 100%;
  background-color:red;
  height: 100%;
 
}
</style>
