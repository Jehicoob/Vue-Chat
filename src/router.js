import Vue from "vue";
import Router from "vue-router";

import viewChat from "@/views/viewChat.vue";
import viewHome from "@/views/viewHome.vue";

Vue.use(Router);

export default new Router({
  mode: "history",

  routes: [
    {
      path: "/",
      name: "view-home",
      component: viewHome,
    },
    {
      path: "/chat/:id",
      name: "view-chat",
      component: viewChat,
    },
  ],
});
