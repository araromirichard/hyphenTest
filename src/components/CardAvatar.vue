<template>
  <v-avatar size="65">
    <span class="avatar__txt" v-if="isText">
      {{ aContent }}
    </span>
    <v-icon :size="iconSizes[$vuetify.breakpoint.name]" v-else>
      mdi-email-outline
    </v-icon>
  </v-avatar>
</template>

<script>
export default {
  name: "c-avatar",
  props: {
    aContent: {
      type: Number,
      
    },
    isText: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      avatarSizes: {
        xl: 88,
        xs: 40,
        lg: 72,
        md: 64,
        sm: 48,
      },
      iconSizes: {
        xl: "42px",
        xs: "18px",
        lg: "32px",
        md: "24px",
        sm: "22px",
      },
    };
  },
};
</script>

<style scoped>
.avatar__txt {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #19283d;
}
</style>
