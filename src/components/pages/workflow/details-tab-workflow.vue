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
     <div class="details">
        <div class="trigger">
         <span class="t">Trigger: </span>
         <span class="n"> {{trigger.name}}</span>
        </div>
     </div>
    </v-tab-item>
    <v-tab-item>
      <v-divider></v-divider>
      
    </v-tab-item>
  </v-tabs>
</template>

<script>
import { mapGetters } from "vuex";

export default {

    computed: {
    ...mapGetters("workflow", ["workflow", "conditions", "trigger", "runs"]),
  },
};
</script>

<style lang="scss" scoped>
.details{
  width: 100%;
  height: 100%;
  padding: 5px;

  .trigger{
      background-color: #FBF4E4;
        border-radius: 4px;

padding: 10px;

    .t{
      color: #8F96A1;
    }

    .n{
      color: #19283D;
    }
  }
 
}
</style>
