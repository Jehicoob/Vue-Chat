<template>
  <span
    :aria-hidden="!title"
    :aria-label="title"
    role="img"
    class=""
    v-bind="$attrs"
    @click="$emit('click', $event)"
  >
    <svg :fill="fillColor" :width="size" :height="size" viewBox="0 0 48 48">
      <path
        d="M6 40V8l38 16Zm3-4.65L36.2 24 9 12.5v8.4L21.1 24 9 27Zm0 0V12.5 27Z"
      >
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "sendIcon",
  emits: ["click"],
  props: {
    title: {
      type: String,
    },
    fillColor: {
      type: String,
      default: "currentColor",
    },
    size: {
      type: Number,
      default: 24,
    },
  },
};
</script>
