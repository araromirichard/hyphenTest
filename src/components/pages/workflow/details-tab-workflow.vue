<template>
  <v-tabs
    grow
    slider-color="primary"
    slider-size="4"
    background-color="#fffbf1"
    style="margin:0px auto auto auto;width:100% mix-blend-mode: normal;padding:10px"
  >
    <v-tab> Details </v-tab>
    <v-tab> Audit Trail </v-tab>

    <v-tab-item>
      <v-divider></v-divider>
      <div class="details">
        <div class="runs">
          <div>
            <span class="runs__title">Workflow Runs</span>

            <span class="runs__count">{{ runs }}</span>
          </div>
          <div class="runs__icon">
            <v-btn color="white" elevation="0" fab>
              <v-icon size="30" color="primary"
                >mdi-swap-horizontal</v-icon
              ></v-btn
            >
          </div>
        </div>

        <div class="trigger" v-if="trigger">
          <span class="t">Trigger: </span>
          <span class="n"> {{ trigger.name }}</span>
        </div>

        <div v-if="schema" class="schema">
          <div v-if="schema">
          When  <span class="type">{{ groupType(parentGroup) }}</span> of the following is <span class="operator">TRUE</span>
          </div>

         <div style="margin-top:10px" v-for="(condition,index) in conditions" :key="index">
          
           <div class="group" v-if="condition.type == 'group'">
           With  <span class="type">{{ groupType(condition.properties.type) }}</span> of the following 

              <span v-for="(innerConditions,index) in condition.properties.conditions" :key="index">
              
                 <div class="comparison" v-if="innerConditions.type == 'comparison'">
             <span class="field">{{innerConditions.properties.field}}</span> is 
             <span class="operator">{{operator(innerConditions.properties.type)}}</span>
              <span class="target">{{innerConditions.properties.target}}</span>
           </div>
              </span>
           </div>

           <div class="comparison" v-if="condition.type == 'comparison'">
             <span class="field">{{condition.properties.field}}</span> is 
             <span class="operator">{{operator(condition.properties.type)}}</span>
              <span class="target">{{condition.properties.target}}</span>
           </div>
         </div>
         
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
  data() {
    return {
      test: ">",
      text: "and",
    };
  },

  methods: {
    operator(operand) {
      return this.operators.find((operator) => operator.val == operand).string;
    },

    groupType(type) {
      return this.comparisonType.find((groupType) => groupType.val === type)
        .string;
    },
  },
  computed: {
    ...mapGetters({
      schema: "workflow/schema",
      trigger: "workflow/trigger",
      runs: "workflow/runs",
      operators: "workflow/operators",
      comparisonType: "workflow/comparisonType",
    }),

    parentGroup() {
      if (this.schema) return this.schema.condition.properties.type;
      else return null;
    },

    conditions(){
      if(this.schema) return this.schema.condition.properties.conditions;
      else return null;
    }
  },
  watch: {
    schema: {
      deep: true,
      immediate: true,
      handler(newVal) {
        console.log(JSON.stringify(newVal, null, 2));
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.details {
  width: 100%;
  height:calc(100vh - 100px);
  padding: 5px;
  background-color: rgba(242, 242, 242,0.3);
  overflow: auto;

  .runs {
    background-color: #fbf4e4;
    border-radius: 4px;
    display: flex;
    gap: 20px;
    align-items: center;

    padding: 20px;
    margin-bottom: 5px;

    &__title {
      font-size: 16px;
      font-weight: 400;
      color: #7f919b;
      display: block;
    }

    &__count {
      margin-top: 30px;
      font-size: 24px;
      font-weight: 700;
      color: var(--v-primary-base);
      display: block;
    }

    &__icon {
      display: flex;
      justify-content: center;
      flex: 1;
    }
  }

  .trigger {
    background-color: #fbf4e4;
    border-radius: 4px;

    padding: 20px;

    .t {
      color: #8f96a1;
    }

    .n {
      color: #19283d;
    }
  }


  .schema {
    margin-top: 30px;
    background-color: transparent;
    font-size: 16px;
    color: #596A73;

    .type {
      color: var(--v-primary-base);
      font-weight: bold;
      background-color: #301F7812;
      padding: 0px 8px;
      border-radius: 10px;
      display: inline-block;
        margin: 0px 4px;
    
    }

    .operator {
      color: #16BE98;
        font-weight: bold;
      background-color: #fff;
      padding: 0px 8px;
      border-radius: 10px;
      display: inline-block;
        margin: 0px 4px;
    }


    .group{
      padding: 15px 0px;
      border-bottom: 1px dashed #D5DCEC;
    }

    .comparison{
      margin-top: 3px;
      display: block;
      margin-left: 15px;
      line-height: 35px;

      .operator{
        background-color: #D4F6EF;
        white-space: nowrap;
        display: inline-block;
        margin: 0px 4px;
      }

      .field{
        font-weight: bold;
        color: #8F96A1;
      }

      .target{
         color: #E3AA1C;
        font-weight: bold;
      background-color: #F9EED2;
      padding: 0px 8px;
      border-radius: 10px;
      display: inline-block;
        margin: 0px 4px;
      }
    }
  }
}
</style>
