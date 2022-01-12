<template>
  <div class="mt-5">
    <div class="font-weight-bold " style="color: #7f919b; font-size: 16px">
      WHEN
      <v-menu bottom offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-chip
            id="chip"
            small
            text-color="primary"
            class="font-weight-bold px-4 mx-1"
            style="font-size: 16px"
            v-bind="attrs"
            v-on="on"
            >{{ group_Type }}
          </v-chip>
        </template>
        <v-card width="150px" class="p-0">
          <v-list>
            <v-list-item-group>
              <v-list-item
                class="py-2"
                v-for="(item, i) in comparisonType"
                :key="i"
                @click="$emit('update-group-type', item.val)"
              >
                <v-list-item-title>{{ item.string }}</v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-menu>
      OF THIS..
    </div>
    <slot></slot>
  </div>
</template>

<script>
// this component appears only once.
// it envelopes all children conditions
import { operators, comparisonType } from "@/utils/ManagerApprovalOptions.js";
export default {
  props: {
    groupType: {
      default: "and",
    },
  },

  data() {
    return {
      comparisonType,
      operators,
    };
  },

  computed: {
    group_Type() { // filter out group type AND/ALL from and/or
      let t = "";
      this.comparisonType.map((type) => {
        if (type.val == this.groupType) {
          t = type.string;
        }
      });

      return t;
    },
  },
};
</script>

<style></style>
