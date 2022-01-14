<template>
  <div
    style="
      padding: 50px 0px;
      background-color: #fdf9ef;
      min-height: 400px;
      border-radius: 6px;
    "
  >
    <div class="d-flex justify-center w-full">
      <v-btn
        color="#F9EED2"
        style="text-transform: capitalize"
        light
        rounded
        depressed
        >Add action(s)</v-btn
      >
    </div>

    <v-timeline>
      <div class="d-flex mt-5">
        <v-menu bottom offset-y>
          <template v-slot:activator="{ on, attrs }">
            <div class="d-flex mx-auto" v-bind="attrs" v-on="on">
              <v-btn
                v-if="selectedActions.length == 0"
                fab
                dark
                height="45"
                width="45"
                color="var(--v-primary-base)"
                depressed
                class="mx-auto justify-center"
              >
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </div>
          </template>
          <v-list>
            <v-list-item-group>
              <v-list-item
                @click="selectedActions.push(item)"
                class="py-3"
                v-for="(item, j) in availableActions"
                :key="j"
              >
                <v-list-item-title>{{ item.text }}</v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-menu>
      </div>
    </v-timeline>

    <!-- <div v-sortable="{ onUpdate: reOrder }"> -->

    <div>
      <action-workflow
        v-for="(action, index) in selectedActions"
        :isLast="index == selectedActions.length - 1"
        :key="index"
        :index="index"
        :action="action"
        :availableActions="availableActions"
        @properties="selectedProperties.splice(index, 1, $event)"
        @add-action="addAction($event)"
        @remove-action="removeAction(index)"
      />
    </div>
  </div>
</template>

<script>
// this component houses everything about creating action workflow
import actionWorkflow from "../components/pages/workflow/actions/action-workflow.vue";
export default {
  components: { actionWorkflow },
  name: "ExecuteActions",
  data() {
    return {
      dialog: false,
      switch1: false,
      list: ["Foo", "Bar", "Baz"],
      availableActions: [
        {
          text: "Send Payment",
          channel: "SendPayment",
        },
        {
          text: "Add to Payables",
          channel: "addToPayables",
        },
        {
          text: "Send Notification",
          channel: "SendNotifications",
        },
        {
          text: "Update ERP/Accounting",
          channel: "UpdateERP",
        },
        {
          text: "Create Document",
          channel: "CreateDocument",
        },
        {
          text: "Add Custom",
          channel: "",
        },
      ],
      selectedActions: [],
      selectedProperties: [],
    };
  },

  methods: {
    onUpdate: function (event) {
      this.list.splice(
        event.newIndex,
        0,
        this.list.splice(event.oldIndex, 1)[0]
      );
    },

    /// this is still very buggy
    reOrder(event) {
      this.selectedActions.splice(
        event.newIndex,
        0,
        this.selectedActions.splice(event.oldIndex, 1)[0]
      );
      this.selectedProperties.splice(
        event.newIndex,
        0,
        this.selectedProperties.splice(event.oldIndex, 1)[0]
      );
    },

    addAction(action) {
      this.selectedActions.push(action);
    },
    removeAction(index) {
      this.selectedActions.splice(index, 1);
      this.selectedProperties.splice(index, 1);
    },
  },

  watch: {
    selectedProperties: {
      deep: true,
      immediate: true,
      handler(newVal) {
        this.$emit("input", newVal);
        console.log(JSON.stringify(newVal, null, 2));
      },
    },
  },
};
</script>

<style lang="scss" scoped></style>
