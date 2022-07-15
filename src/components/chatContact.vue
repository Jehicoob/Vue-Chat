<template>
  <div class="chats-all flex" @click="goToChat(contact.id)">
    <div class="flex aling-center">
      <img class="chats-proflie-img" src="@/assets/profile_photo.png" alt="" />
    </div>
    <div class="chats-all-info flex">
      <div class="chats-all-info-1 flex">
        <p class="chats-all-info-name">{{ contact.name }}</p>
        <p class="chats-all-info-date">{{ contact.lastMessage }}</p>
      </div>
      <div class="chats-all-info-2 flex">
        <done-icon class="icons check icon-send" :size="20" />
        <!-- <span class="material-icons check icon-send">done</span> -->
        <!-- <span class="material-icons check icon-recived">done_all</span> -->
        <p class="chats-all-info-msg">{{ contact.text }}</p>
        <a href="" class="icon-archivate"
          ><settings-icon class="icons" :size="20"
        /></a>
      </div>
    </div>
  </div>
</template>

<script>
import settingsIcon from "@/icons/settingsIcon.vue";
import DoneIcon from "@/icons/doneIcon.vue";

export default {
  components: { settingsIcon, DoneIcon },
  name: "chatContact",

  props: {
    // lastMessages: Array,
    // default: () => [],

    contact: {
      id: Number,
      name: String,
      date: String,
      text: String,
      checked: Boolean,
    },
  },

  watch: {
    lastMessages: function () {
      console.log("viewChats.vue");
      console.log(this.lastMessage);
    },
  },

  methods: {
    goToChat(id) {
      this.$router.push({ name: "view-chat", params: { id } });
    },
  },
};
</script>
