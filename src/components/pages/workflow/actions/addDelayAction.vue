<template>
  <v-dialog v-model="dialog" max-width="650px" transition="dialog-transition">
    <div class="action">
      <div class="action__header">
        <div class="b">
          <img class="i" src="@/assets/actions-add-delay.svg" alt="" />
          <span class="t">Add Delay</span>
        </div>

        <v-btn @click="close" icon color="primary">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </div>
      <div class="action__content">
        <div class="top">
          <span class="action-title">DELAY WORKFLOW</span>
        </div>

        <span class="action-description">
          Set a fixed number of days to pause the workflow actions. The next
          action in the sequence will execute after the set number of days.
        </span>

        <div class="a-wrapper">
          <v-select
            outlined
            color="primary"
            v-model="day"
            item-text="text"
            item-value="value"
            label="No of Days"
            :items="days"
            hide-details="auto"
            placeholder="Select number of days"
          ></v-select>
        </div>

        <!-- <span class="note">
          <b>Note:</b> Approval request will be sent to the selected co-worker,
          along with details of this workflow
        </span> -->

        <div class="bottom">
          <v-btn @click="close" large color="primary" outlined>
            <v-icon left>mdi-close</v-icon> Cancel
          </v-btn>

          <v-btn
            @click="addToWorkflow"
            :disabled="!day"
            large
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
        type: "hyphenDelay",
        properties: {
          keys: ["days", "organization", "type", "name"],
          values: ["", "", "", "delay", "delay"],
        },
      },
    },
  },
  mounted() {
    this.mapForm();
  },
  data() {
    return {
      dialog: false,
      days: [
        {
          text: "1 Day",
          value: 1,
        },
        {
          text: "2 Days",
          value: 2,
        },
        {
          text: "3 Days",
          value: 3,
        },
        {
          text: "4 Days",
          value: 4,
        },
        {
          text: "5 Days",
          value: 5,
        },
      ],
      day: "",
    };
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
        type: "hyphenDelay",
        properties: {
          keys: ["days", "organization", "type", "name"],
          values: [this.day, this.orgId.toString(), "delay", "delay"],
        },
      };

      this.$emit("input", payload);
      this.sendOutChannel();
      this.close();
    },

    mapForm() {
      if (this.value) {
        this.day =
          this.value.properties.values[
            this.value.properties.keys.indexOf("days")
          ];

        this.sendOutChannel();
      }
    },

    sendOutChannel() {
      let channel =
        this.days.find((day) => day.value == this.day)?.text || "N/A";
      this.$emit("channel", channel);
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
      padding: 50px 200px 50px 20px;
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
