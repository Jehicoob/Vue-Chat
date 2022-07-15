<template>
  <div class="cont__chats flex flex-column">
    <div class="cont__chats-conf flex aling-center">
      <div class="chats-conf-img flex aling-center">
        <img src="@/assets/profile_photo.png" alt="Profile photo" />
        <p>Usuario</p>
      </div>

      <chat-icon class="icons icons-wh4rem item-gray icons-background" />

      <menu-icon
        class="icons icons-wh4rem item-gray icons-background"
        :class="{ active: showSessionMenu }"
        v-on:click="toggleSessionMenu"
      />
    </div>

    <div class="list__cont flex flex-column" v-if="showSessionMenu">
      <p class="list-items list-items-red item-red">Sign out</p>
    </div>

    <div class="cont__chats-search flex">
      <div class="chats-search-box flex">
        <label for="search-chats"
          ><search-icon class="icons item-gray"
        /></label>
        <input
          id="search-chats"
          class="search-chats"
          type="text"
          name=""
          placeholder="Busca un chat"
          v-model="filter"
        />
        <close-icon class="icons item-gray" />
      </div>
    </div>

    <div class="cont__chats-all">
      <chat-contact
        v-for="contact in filteredContacts"
        :key="contact.id"
        :contact="contact"
        :lastMessage="lastMessage"
      />
    </div>
  </div>
</template>

<script>
//iconos
import chatIcon from "@/icons/chatIcon.vue";
import menuIcon from "@/icons/menuIcon.vue";
import SearchIcon from "@/icons/searchIcon.vue";
import CloseIcon from "@/icons/closeIcon.vue";

//componentes
import ChatContact from "@/components/chatContact.vue";

export default {
  name: "ChatsContainer",

  props: {
    lastMessages: Array,
    default: () => [],
  },

  components: {
    chatIcon,
    menuIcon,
    SearchIcon,
    CloseIcon,
    ChatContact,
  },

  watch: {
    lastMessages: function () {
      console.log("viewChats.vue");
      console.log(this.lastMessages);
      console.log("viewChatsmessage.vue");
      console.log(this.lastMessage);
      console.log("contacts info");
      console.log(this.contacts);
    },
  },

  computed: {
    filteredContacts() {
      return this.contacts.filter(
        (a) =>
          a.name.toLowerCase().includes(this.filter.toLowerCase()) ||
          a.text.toLowerCase().includes(this.filter.toLowerCase())
      );
    },

    // getLastMessage() {
    //   return;
    // },
  },

  methods: {
    toggleSessionMenu() {
      this.showSessionMenu = !this.showSessionMenu;
    },
  },

  data() {
    return {
      filter: "",
      sortOrder: 1,
      showSessionMenu: false,

      contacts: [
        {
          id: "1",
          name: "Contacto 1",
          text: "Hola",
          lastMessage: "15:23 p. m.",
        },

        {
          id: "2",
          name: "Contacto 2",
          text: "Hola",
          lastMessage: "15:23 p. m.",
        },

        {
          id: "3",
          name: "Contacto 3",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
          lastMessage: "15:23 p. m.",
        },

        {
          id: "4",
          name: "Contacto 4",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
          lastMessage: "15:23 p. m.",
        },

        {
          id: "5",
          name: "Contacto 5",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
          lastMessage: "15:23 p. m.",
        },

        {
          id: "6",
          name: "Contacto 6",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
          lastMessage: "15:23 p. m.",
        },
        {
          id: "7",
          name: "Contacto 7",
          text: "Chao",
          lastMessage: "15:23 p. m.",
        },
        {
          id: "8",
          name: "Contacto 8",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
          lastMessage: "15:23 p. m.",
        },
        {
          id: "9",
          name: "Contacto 9",
          text: "Chao",
          lastMessage: "15:23 p. m.",
        },
        {
          id: "10",
          name: "Contacto 10",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
          lastMessage: "15:23 p. m.",
        },
      ],
    };
  },
};
</script>
