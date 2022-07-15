<template>
  <div
    class="cont__msj flex"
    v-bind:class="{
      'msj-send': data.messageType === '1',
      'msj-recived': data.messageType === '2',
    }"
  >
    <div class="msj-data">
      <!-- <div class="answered-text" v-if="!showAnsweredText">
        Modificado el show de arribita
        <p class="answered-text-name">{{  }}</p>
        <p class="answered-text-msg">{{ }}</p>
      </div> -->

      <div>
        <p class="msj-data-content">
          {{ contentMessage }}

          <span
            style="cursor: pointer"
            class="msj-data-content-showhide"
            v-on:click="showText"
            v-if="showReadMore"
          >
            ...read more.
          </span>

          <span
            style="cursor: pointer"
            class="msj-data-content-showhide"
            v-on:click="hideText"
            v-if="showHideText"
          >
            ...hide text.
          </span>
        </p>
      </div>
    </div>

    <div class="msj-date flex">
      <p>{{ data.date }}</p>
      <done-icon class="icons check icon-send" :size="14" />
    </div>
  </div>
</template>

<script>
import doneIcon from "@/icons/doneIcon.vue";

export default {
  name: "chatBubble",

  components: { doneIcon },

  data() {
    return {
      showAnsweredText: false,
      showReadMore: false,
      showHideText: false,
      contentMessage: "",
    };
  },

  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },

  watch: {
    data: function () {
      this.contentMessage = this.textCrooped();
      this.showReadMore = this.isLongText();
    },
  },

  created() {
    this.contentMessage = this.textCrooped();
    this.showReadMore = this.isLongText();
  },

  methods: {
    isLongText() {
      let message = this.data.text.length;
      return message >= 560;
    },

    textCrooped() {
      if (this.isLongText()) {
        return `${this.data.text.substring(0, 560)}`;
      }
      return `${this.data.text}`;
    },

    showText() {
      this.contentMessage = this.data.text;
      this.showReadMore = false;
      this.showHideText = true;
    },

    hideText() {
      this.contentMessage = this.data.text.substring(0, 560);
      this.showReadMore = true;
      this.showHideText = false;
    },
  },
};
</script>
