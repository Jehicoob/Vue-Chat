<template>
  <div class="cont__chat flex aling-center cont_welcome">
    <div class="flex aling-center welcome">
      <welcome-icon class="welcome-icon" :size="200" />
      <h1>Welcome</h1>
    </div>
    <div class="welcome-line"></div>
  </div>
</template>

<script>
import welcomeIcon from "@/icons/welcomeIcon.vue";

export default {
  components: {
    welcomeIcon,
  },
};
</script>
