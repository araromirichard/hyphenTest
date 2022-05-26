<template>
  <div ref="action">
    <div class="vertical-line"></div>

    <div class="form-trigger">
      <div class="header" @click="showTriggers = !showTriggers">
        <span class="title"> Actions to Execute</span>

        <v-btn color="primary" icon
          ><v-icon size="33" v-if="!showTriggers">mdi-chevron-down</v-icon>
          <v-icon size="33" v-else>mdi-chevron-up</v-icon>
        </v-btn>
      </div>

      <div v-if="showTriggers">
        <span class="text"
          >Choose actions to be performed by this workflow, when the above
          conditions match the data recieved.</span
        >

        <transition name="animate-down">
          <div class="actions">
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
                <v-btn
                  v-if="selectedActions.length == 0"
                  fab
                  dark
                  height="45"
                  @click="showActionModal"
                  width="45"
                  color="#D7A47B"
                  depressed
                  class="mx-auto justify-center"
                >
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
              </div>
            </v-timeline>

            <!-- <div v-sortable="{ onUpdate: reOrder }"> -->

            <div>
              <draggable
                v-model="selectedActions"
                v-bind="dragOptions"
                @start="drag = true"
                @end="drag = false"
              >
                <transition-group
                  type="transition"
                  :name="!drag ? 'flip-list' : null"
                >
                  <action-workflow
                    v-for="(action, index) in selectedActions"
                    :isLast="index == selectedActions.length - 1"
                    :key="index"
                    :isBeenDragged="drag"
                    :index="index"
                    v-model="selectedActions[index]"
                    @channel="channels.splice(index,1,$event)"
                    @add-new-action="showActionModal"
                    @remove-action="removeAction(index)"
                  />
                </transition-group>
              </draggable>
            </div>
          </div>
        </transition>
      </div>

      <div style="margin-top: 25px; width: 150px">
        <v-btn color="primary" elevation="0" :disabled="!canPublish" large @click="$emit('publish')"
          ><v-icon>mdi-chevron-right</v-icon> publish</v-btn
        >
      </div>
    </div>

    <v-navigation-drawer
      width="360px"
      v-model="actionModal"
      right
      temporary
      app
    >
      <div class="action-drawer">
        <span class="title">Actions</span>
        <span class="desc">
          Select from list of actions below. Selected action is added to your
          actions canvas within your workflow
        </span>
        <div>
          <v-text-field
            name="Search"
            label="search"
            hide-details="auto"
            v-model="searchQuery"
            color="primary"
            outlined
            dense
            prepend-inner-icon="mdi-magnify"
          ></v-text-field>
        </div>
        <div class="content">
          <div
            class="content__action"
            v-for="(action, index) in searchQuery == ''
              ? actionsMeta
              : filteredActions"
            :key="index"
            @click="addAction(action)"
          >
            <img class="actions-icon" :src="action.icon" :alt="action.type" />
            <span>{{ action.text }}</span>
            <span v-if="!action.active" class="coming-soon">Coming soon</span>
          </div>
        </div>
      </div>
      <!-- -->
    </v-navigation-drawer>
  </div>
</template>

<script>
import actionWorkflow from "./action-workflow.vue";
import draggable from "vuedraggable";
export default {
  components: { actionWorkflow, draggable },
  props: {
    isVisable: {
      type: Boolean,
      default: false,
    },
    value: {
      default: [],
    },
  },
  data() {
    return {
      showTriggers: true,
      actionModal: false,
      searchQuery: "",
      selectedActions: [],
      channels:[],
      drag: false,
      scrollOptions: {
        duration: 500,
        offset: 0,
        easing: "easeInOutCubic",
        container: ".flows",
      },
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
    showActionModal() {
      this.actionModal = true;
    },
    /// this is still very buggy
    // reOrder(event) {
    //   this.selectedActions.splice(
    //     event.newIndex,
    //     0,
    //     this.selectedActions.splice(event.oldIndex, 1)[0]
    //   );
    //   this.selectedActions.splice(
    //     event.newIndex,
    //     0,
    //     this.selectedActions.splice(event.oldIndex, 1)[0]
    //   );
    // },
    addAction(action) {
      if (!action.active) {
        return;
      }
      this.actionModal = false;
      this.selectedActions.push({ ...action.meta, fresh: true });
    },
    removeAction(index) {
      this.selectedActions.splice(index, 1);
    },
    fetchActions() {
      this.isLoadingFormFields = true;
      setTimeout(() => {
        this.isLoadingFormFields = false;
      }, 1000);
    },
  },
  computed: {
    filteredActions() {
      return this.actionsMeta.filter((action) => {
        return action.text
          .toLowerCase()
          .includes(this.searchQuery.toLowerCase());
      });
    },

    dragOptions() {
      return {
        animation: 200,
        group: "description",
        disabled: false,
        ghostClass: "ghost",
      };
    },

    canPublish(){
      return this.channels.every(action => action) && this.channels.length > 0
    }
  },
  watch: {
    value: {
      deep: true,
      immediate: true,
      handler(val) {
        if (JSON.stringify(val) !== JSON.stringify(this.selectedActions)) {
          this.selectedActions = val;
        }
      },
    },
    selectedActions: {
      deep: true,
      immediate: true,
      handler(newVal) {
        this.$emit("input", newVal);
        //  console.log(JSON.stringify(newVal, null, 2));
      },
    },
    showTriggers: {
      immediate: true,
      handler(val) {
        if (val) {
          this.$nextTick();
          setTimeout(() => {
            this.$vuetify.goTo(this.$refs.action, this.scrollOptions);
          }, 1500);
        }
      },
    },
    actionModal(val) {
      if (!val) {
        this.searchQuery = "";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.vertical-line {
  display: block;
  background-color: #d9dee1;
  margin: auto;
  height: 80px;
  width: 2px;
}
.loader {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;
  background: #ffffff;
  box-shadow: 0px 4px 16px rgba(204, 188, 252, 0.15);
  border-radius: 6px;
}
.form-trigger {
  width: 100%;
  padding: 30px;
  background: #ffffff;
  box-shadow: 0px 4px 16px rgba(204, 188, 252, 0.15);
  border-radius: 6px;
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    .title {
      font-weight: bold;
      color: var(--v-primary-base);
      font-size: 16px;
      display: block;
      text-transform: capitalize;
    }
    .text {
      display: block;
      font-size: 14px;
      color: rgba(25, 40, 61, 0.8);
      margin-top: 10px;
    }
  }
}
.actions {
  padding: 50px 0px;
  background-color: #f8f7f4;
  min-height: 400px;
  border-radius: 6px;
  margin-top: 30px;
}
.action-drawer {
  padding: 20px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  height: 100vh;
  .title {
    font-size: 18px;
    font-weight: bold;
    color: var(--v-primary-base);
    display: block;
  }
  .desc {
    font-size: 14px;
    color: #8f96a1;
    margin: 10px 0px;
    display: block;
    line-height: 22px;
  }
  .content::-webkit-scrollbar {
    width: 8px;
    border-radius: 10px;
  }
  .content::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  }
  .content::-webkit-scrollbar-thumb {
    background-color: var(--v-primary-base);
    border-radius: 10px;
  }
  .content {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    flex: 1;
    overflow: auto;
    margin-top: 5px;
    &__action {
      padding: 0px 5px;
      cursor: pointer;
      margin: 20px 0px;
      &:hover {
        span {
          color: #d7a47b;
        }
      }
      img {
        width: 30px;
        height: 30px;
        display: block;
        margin: auto;
      }
      span {
        display: block;
        text-align: center;
        margin-top: 10px;
        color: #7f919b;
      }
      .coming-soon {
        font-family: "Inter";
        opacity: 0.9;
        margin-top: 1px;
        color: #d7a47b;
      }
    }
  }
}

.flip-list-move {
  transition: transform 0.5s;
}
.no-move {
  transition: transform 0s;
}
.ghost {
  opacity: 0.5;
  background: #f8f7f4;
}
</style>
