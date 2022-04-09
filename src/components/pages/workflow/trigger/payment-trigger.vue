<template>
  <div class="payment-trigger">
      <span class="header">Select payment type which will trigger this workflow</span>

      <div class="mt-5" style="width:200px"> <v-select
        outlined
          :items="items"
          v-model="value"
          color="primary"
          placeholder="Select type"
      ></v-select></div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            value:null,
            items:[
                'Custom payment'
            ]
        }
    }
};
</script>

<style lang="scss" scoped>
.payment-trigger {
  width: 100%;
  padding: 30px;
  background: #ffffff;
  box-shadow: 0px 4px 16px rgba(204, 188, 252, 0.15);
  border-radius: 6px;

  .header{
       display: block;
    font-size: 16px;
    color: rgba(25, 40, 61, 0.8);
    
  }
}
</style>
