<template>
  <v-card max-width="100%" class="mx-md-8" flat>
    <v-container class="pa-1">
      <v-item-group v-model="selected" multiple>
        <v-row>
          <v-col v-for="(item, i) in items" :key="i" cols="12" md="3">
            <v-item v-slot="{ toggle }">
              <v-card
                outlined
                height="150"
                class="pa-2 rounded-lg"
                @click="toggle"
              >
                <div class="text-right">
                  <v-chip color="grey lighten-4" x-small rounded> live </v-chip>
                </div>
                <v-row justify="center">
                  <!-- <img
                    height="50"
                    width="50"
                    src="https://www.nicepng.com/png/detail/290-2904000_the-slack-channel-is-available-through-invite-only.png"
                  /> -->
                </v-row>
              </v-card>
            </v-item>
          </v-col>
        </v-row>
      </v-item-group>
    </v-container>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: "backgrounds/bg.jpg",
        },
        {
          src: "backgrounds/md.jpg",
        },
        {
          src: "backgrounds/bg-2.jpg",
        },
        {
          src: "backgrounds/md2.jpg",
        },
        {
          src: "backgrounds/bg.jpg",
        },
        {
          src: "backgrounds/md.jpg",
        },
        {
          src: "backgrounds/bg-2.jpg",
        },
        {
          src: "backgrounds/md2.jpg",
        },
      ],
      selected: [],
    };
  },
};
</script>
