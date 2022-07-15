<template>
  <div class="cont__prof__inf">
    <div class="prof__inf-back">
      <a href="#" v-on:click="showProfileInfo = !showProfileInfo">
        <!-- <span class="material-icons">arrow_back</span> -->
      </a>

      <p>Profile</p>
    </div>

    <div class="prof__inf-form">
      <a href=""><img src="@/assets/profile_photo.png" alt="" /></a>

      <div class="inf-form-name">
        <p class="form-name-info">Your name</p>
        <div class="form-name-line"></div>
        <p class="form-name-name">Jehicoob Lopez</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "viewProfile",

  setup() {},
};
</script>
