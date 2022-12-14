<template>
  <v-dialog v-model="dialog" max-width="650px" transition="dialog-transition">
    <div class="action">
      <div class="action__header">
        <div class="b">
          <img class="i" src="@/assets/actions-update-customer.svg" alt="" />
          <span class="t">Update Customer</span>
        </div>

        <v-btn @click="close" icon color="primary">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </div>
      <div class="action__content">
        <div class="top">
          <span class="action-title">CUSTOMER</span>
        </div>

        <span class="action-description">
          Select a customer attribute to update
        </span>

        <div class="a-wrapper">
          <v-row>
            <v-col cols="12">
              <v-select
                outlined
                v-model="selectedAttribute"
                color="primary"
                label="Attribute"
                :items="atrribute"
                hide-details="auto"
                placeholder="Attribule"
              ></v-select>
            </v-col>

            <v-col cols="12" v-if="selectedAttribute == 'Tag'">
              <v-select
                outlined
                color="primary"
                label="Add/Remove Tag"
                :items="tags"
                v-model="selectedTags"
                chips
                deletable-chips
                multiple
                hide-details="auto"
                placeholder="Add/Remove Tag"
              ></v-select>
            </v-col>

            <v-col cols="12" v-if="selectedAttribute == 'Payment Terms'">
              <v-select
                outlined
                color="primary"
                label="Net Terms"
                :items="terms"
                v-model="selectedTerms"
                hide-details="auto"
                placeholder="Net Terms"
              ></v-select>
            </v-col>

            <v-col cols="12" v-if="selectedAttribute == 'Balance'">
              <v-row>
                <v-col cols="6">
                  <v-select
                    outlined
                    color="primary"
                    label="Update Type"
                    :items="updateTypes"
                    v-model="selectedUpdateType"
                    hide-details="auto"
                    placeholder="Update Type"
                  ></v-select>
                </v-col>
                <v-col cols="6">
                  <v-text-field
                    outlined
                    color="primary"
                    label="Update Value"
                    v-model="updateValue"
                    type="number"
                    hide-details="auto"
                    placeholder="Enter amount"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </div>

        <div class="bottom">
          <v-btn @click="close" large color="primary" outlined>
            <v-icon left>mdi-close</v-icon> Cancel
          </v-btn>

          <v-btn
            large
            @click="addToWorkflow"
            :disabled="!canAddToWorkflow"
            color="primary"
            elevation="0"
          >
            <v-icon left>mdi-chevron-right</v-icon> Add to workflow
          </v-btn>
        </div>
      </div>
    </div>
  </v-dialog>
</template>

<script>
export default {
  props: {
    value: {
      default: {
        type: "hyphenUpdateCustomer",
        properties: {
          keys: ["attribute", "tag", "term", "organization", "name"],
          values: ["", "", "", "", "customer"],
        },
      },
    },
  },
  data() {
    return {
      dialog: false,
      atrribute: ["Tag", "Payment Terms", "Balance"],
      selectedAttribute: "",
      tags: ["high value", "wema bank", "ikeja"],
      selectedTags: "",
      terms: ["Net 30", "Net 45", "Net 60", "Net 90"],
      selectedTerms: "",
      updateTypes: ["Add", "Subtract"],
      selectedUpdateType: "",
      updateValue: "",
    };
  },
  mounted() {
    this.mapForm();
  },

  methods: {
    open() {
      this.dialog = true;
    },
    close() {
      this.dialog = false;
    },

    addToWorkflow() {
      const payload = {
        type: "hyphenUpdateCustomer",
        properties: {
          keys: ["attribute", "tag", "term", "organization", "name"],
          values: [
            this.selectedAttribute,
            this.selectedTags,
            this.selectedTerms,
            this.orgId.toString(),
            "customer",
          ],
        },
      };

      this.$emit("input", payload);
      this.sendOutChannel();

      this.close();
    },

    mapForm() {
      this.selectedAttribute =
        this.value.properties.values[
          this.value.properties.keys.indexOf("attribute")
        ];
      this.selectedTags =
        this.value.properties.values[this.value.properties.keys.indexOf("tag")];

      this.selectedTerms =
        this.value.properties.values[
          this.value.properties.keys.indexOf("term")
        ];

      this.sendOutChannel();
    },

    sendOutChannel() {
      this.$emit("channel", this.selectedAttribute);
    },
  },
  computed: {
    canAddToWorkflow() {
      if (this.selectedAttribute === "Balance") {
        return this.selectedUpdateType && this.updateValue;
      }
      return (
        this.selectedAttribute && (this.selectedTerms || this.selectedTags)
      );
    },
  },
  watch: {
    dialog(val) {
      if (val) {
        this.$emit("open");
        this.mapForm();
      } else {
        this.$emit("close");
      }
    },

    selectedAttribute() {
      this.selectedTags = "";
      this.selectedTerms = "";
      this.selectedUpdateType = "";
      this.updateValue = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.action {
  border-radius: 8px;
  background-color: #fff;

  &__header {
    padding: 20px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .b {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .i {
      width: 26px;
      height: 26px;
      object-fit: fit;
    }

    .t {
      color: var(--v-primary-base);
      font-weight: 600;
      font-size: 20px;
    }
  }

  &__content {
    background-color: #f8f7f4;
    padding: 20px 50px;

    .top {
      padding: 30px 0px 0px 0px;
      box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.1);

      .action-title {
        color: var(--v-primary-base);
        text-transform: uppercase;
        font-weight: 600;
        border-bottom: 5px solid var(--v-primary-base);
        font-size: 16px;
        height: 40px;
        padding: 0px 15px;
        display: inline-block;
      }
    }

    .action-description {
      color: var(--v-primary-base);
      display: block;
      padding: 20px 0px;
      font-size: 16px;
    }

    .a-wrapper {
      background-color: #fff;
      padding: 30px;
      border: 1px solid #d9dee1;
      border-radius: 4px;
    }

    .note {
      display: block;
      margin-top: 10px;
      color: #8f96a1;
    }

    .bottom {
      display: flex;
      justify-content: flex-end;
      margin: 20px 0px;
      gap: 20px;
    }
  }
}
</style>
