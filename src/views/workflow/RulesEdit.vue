<template>
  <v-row>
    <v-col class="" cols="12" md="4" style="max-width: 450px">
      <div class="" style="background-color: #fffbf1">
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
            <div
              class="pa-4"
              style="background-color: #fffbf1; width: 100%; padding: 10px"
            >
              <div v-if="runs > 0"
                class="d-flex mx-auto"
                style="
                  border-radius: 5px;
                  background-color: #fbf4e4;
                  padding: 15px;
                "
              >
                <div  style="flex: 1">
                  <span class="d-block" style="color: #7f919b"
                    >Workflow Runs</span
                  >
                  <span
                    class="mt-4 d-block font-weight-bold"
                    style="color: var(--v-primary-base); font-size: 24px"
                    >{{runs}}</span
                  >
                </div>

                <button
                  style="
                    color: #7f919b;
                    color: #7f919b;
                    height: 50px;
                    width: 50px;
                    border-radius: 50%;
                    background-color: #fff;
                  "
                >
                  <v-icon size="30">mdi-swap-horizontal</v-icon>
                </button>
              </div>

              <div
                class="mt-2"
                style="
                  border-radius: 5px;
                  background-color: #fbf4e4;
                  padding: 15px;
                  color: var(--v-primaary-base);
                "
              >
                <span>Trigger</span>
                <span class="px-3" style="font-weight: 600">{{trigger}}</span>
              </div>

              <div v-if="conditions != null">
                <span
                  class="d-block my-4"
                  style="color: #7f919b; font-size: 18px"
                  >Conditions</span
                >

                <div class="my-4 uppercase" style="font-size: 14px">
                  When
                  <span
                    class="font-weight-bold"
                    style="font-size: 14px; color: var(--v-primary-base)"
                    >{{ group_Type(conditions.properties.type) }}</span
                  >
                  of the following is

                  <span
                    class="font-weight-bold"
                    style="font-size: 14px; color: #16be98"
                    >TRUE</span
                  >
                </div>

                <div
                  v-for="(condition, z) in conditions.properties.conditions"
                  :key="z"
                >
                  <div
                    class="my-3 mt-4"
                    style="font-size: 14px"
                    v-if="condition.type == 'group'"
                  >
                    With
                    <span
                      class="font-weight-bold"
                      style="font-size: 14px; color: var(--v-primary-base)"
                      >{{ group_Type(condition.properties.type) }}</span
                    >
                    of the following

                    <!-- <span
                      class="font-weight-bold"
                      style="font-size: 14px; color: #16be98"
                      >TRUE</span>-->
                  </div>
                  <template v-if="condition.type == 'group'">
                    <div
                      v-for="(condition, j) in condition.properties.conditions"
                      :key="j"
                    >
                      <v-divider class="my-6"></v-divider>

                      <div
                        v-if="
                          condition.properties.field != '' &&
                          condition.properties.type != '' &&
                          condition.properties.target != ''
                        "
                      >
                        <span
                          class="font-weight-bold mx-1"
                          style="font-size: 16px; color: #000"
                          >{{ condition.properties.field }}</span
                        >
                        is
                        <span
                          class="font-weight-bold px-2 mx-2"
                          style="
                            font-size: 16px;
                            color: #16be98;
                            background-color: #d4f6ef;
                            border-radius: 50px;
                          "
                          >{{
                            condition_operator(condition.properties.type)
                          }}</span
                        >

                        <span
                          class="font-weight-bold px-2 mx-2"
                          style="
                            font-size: 16px;
                            color: #e3aa1c;
                            background-color: #f9eed2;
                            border-radius: 50px;
                          "
                          >{{ condition.properties.target }}</span
                        >
                      </div>
                    </div>
                  </template>

                  <div v-else>
                    <div
                      v-if="
                        condition.properties.field != '' &&
                        condition.properties.type != '' &&
                        condition.properties.target != ''
                      "
                    >
                      <v-divider class="my-6"></v-divider>

                      <span
                        class="font-weight-bold mx-1"
                        style="font-size: 16px; color: #000"
                        >{{ condition.properties.field }}</span
                      >
                      is
                      <span
                        class="font-weight-bold px-2 mx-2"
                        style="
                          font-size: 16px;
                          color: #16be98;
                          background-color: #d4f6ef;
                          border-radius: 50px;
                        "
                        >{{
                          condition_operator(condition.properties.type)
                        }}</span
                      >

                      <span
                        class="font-weight-bold px-2 mx-2"
                        style="
                          font-size: 16px;
                          color: #e3aa1c;
                          background-color: #f9eed2;
                          border-radius: 50px;
                        "
                        >{{ condition.properties.target }}</span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </v-tab-item>
          <v-tab-item>
            <v-divider></v-divider>
          </v-tab-item>
        </v-tabs>
      </div>
    </v-col>
    <v-col class="full-height" cols="12" md="8">
      <v-row v-if="$vuetify.breakpoint.mdAndUp">
        <v-breadcrumbs
          :items="breadcrumbs"
          style="margin-top: 42px; font-weight: 700"
        >
          <template v-slot:divider>
            <v-icon class="px-0">mdi-chevron-right</v-icon>
          </template>
        </v-breadcrumbs>
        <v-spacer></v-spacer>
        <v-btn plain to="/workflow" class="mt-14">
          <v-icon large color="primary">mdi-chevron-left</v-icon>
          <span style="" class="back">Back</span>
        </v-btn>
      </v-row>
      <v-row>
        <ManagerApproval style="margin-top: 10px; margin-left: 10px" />
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import ManagerApproval from "../../includes/ManagerApproval.vue";
import { mapGetters } from "vuex";
import { comparisonType, operators } from "@/utils/ManagerApprovalOptions.js";
export default {
  name: "Invoice",
  data() {
    return {
      comparisonType,
      operators,
      isDisabled: false,
      breadcrumbs: [
        {
          text: "Workflow",
          to: "/#/",
          disabled: true,
        },
        {
          text: "rule",
          to: "#",
          disabled: true,
        },
        {
          text: "approval#90392",
          to: "#",
          disabled: false,
        },
      ],
    };
  },

  components: { ManagerApproval },

  methods: {
    group_Type(gtype) {
      let t = "";
      this.comparisonType.map((type) => {
        if (type.val == gtype) {
          t = type.string;
        }
      });

      return t;
    },

    condition_operator(co) {
      let t = "";
      this.operators.map((type) => {
        if (type.val == co) {
          t = type.string;
        }
      });

      return t;
    },
  },

  computed: {
    ...mapGetters("workflow", ["workflow", "conditions","trigger","runs"]),
  },
};
</script>

<style scoped>
.back {
  margin-right: 58px;
  font-family: Inter;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: var(--v-primary-base);
}
</style>
