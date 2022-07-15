<template>
  <div id="app" class="container flex">
    <div class="container__left flex">
      <view-chats :lastMessages="lastMessages" />
    </div>
    <div class="container__right flex">
      <router-view @updateTitle="lastMessages = $event" />
    </div>
  </div>
</template>

<script>
import viewChats from "@/views/viewChats.vue";

export default {
  name: "App",

  data() {
    return {
      lastMessages: [],
    };
  },

  watch: {
    lastMessages: function () {
      console.log("App.vue");
      console.log(this.lastMessages);
    },
  },

  components: {
    viewChats,
  },

  methods: {},
};
</script>
