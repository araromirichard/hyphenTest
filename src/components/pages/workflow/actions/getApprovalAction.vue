<template>
  <v-dialog v-model="dialog" max-width="650px" transition="dialog-transition">
    <div class="action">
      <div class="action__header">
        <div class="b">
          <img class="i" src="@/assets/actions-get-approval.svg" alt="" />
          <span class="t">Get Approval</span>
        </div>
        <v-btn @click="close" icon color="primary">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </div>
      <div class="action__content">
        <div class="top">
          <span class="action-title">Approval Notification</span>
        </div>
        <span class="action-description"
          >Select the co-worker from who approval is required for this
          stage</span
        >

        <div class="a-wrapper">
          <v-select
            outlined
            color="primary"
            label="Co-worker"
            v-model="worker"
            :items="workers"
            :loading="isLoadingWorkers"
            item-text="name"
            item-value="email"
            hide-details="auto"
            placeholder="Select one"
          ></v-select>
        </div>

        <span class="note">
          <b>Note:</b> Approval request will be sent to the selected co-worker,
          along with details of this workflow
        </span>

        <div class="bottom">
          <v-btn @click="close" large color="primary" outlined>
            <v-icon left>mdi-close</v-icon> Cancel
          </v-btn>

          <v-btn @click="addToWorkflow" :disabled="!worker" large color="primary" elevation="0">
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
        type: "PbotApproval",
        properties: {
          keys: ["identity", "organization", "type", "name"],
          values: ["", "", "human", "approval"],
        },
      },
    },
  },
  data() {
    return {
      dialog: false,
      workers: [],
      worker: null,
      isLoadingWorkers: false,
    };
  },
  mounted() {
    this.mapForm();
    this.getCoworkers();
  },
  methods: {
    open() {
      this.dialog = true;
    },
    close() {
      this.dialog = false;
    },

    async getCoworkers() {
      try {
        this.isLoadingWorkers = true;
        const response = await this.$store.dispatch(
          "organizations/fetchCoWorkers"
        );
        this.workers = response.map((worker) => {
          return {
            id:worker.id,
            name:worker.first_name +' '+ worker.last_name,
            email:worker.email
          };
        });
      } catch (err) {
        console.log(JSON.stringify(err, null, 2));
      }finally{
        this.isLoadingWorkers = false;
      }
    },

    addToWorkflow() {
      const payload = {
        type: "PbotApproval",
        properties: {
          keys: ["identity", "organization", "type", "name"],
          values: [this.worker, this.orgId, "human", "approval"],
        },
      };
      this.$emit("input", payload);
      this.sendOutChannel();
      this.close();
    },
    sendOutChannel() {
      let channel =
        this.workers.find((worker) => worker.email == this.worker)?.name  ||
        "N/A";
      this.$emit("channel",channel);
    },
    mapForm() {
      if (this.value) {
        // automatically selects name
        this.worker =
          this.value.properties.values[
            this.value.properties.keys.indexOf("identity")
          ];
        this.sendOutChannel();
      }
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
