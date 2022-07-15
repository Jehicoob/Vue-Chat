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
        d="M4 34V6.1q0-.7.65-1.4T6 4h25.95q.75 0 1.4.675Q34 5.35 34 6.1v17.8q0 .7-.65 1.4t-1.4.7H12Zm10.05 2q-.7 0-1.375-.7T12 33.9V29h25V12h5q.7 0 1.35.7.65.7.65 1.45v29.8L36.05 36ZM31 7H7v19.75L10.75 23H31ZM7 7v19.75Z"
      >
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "welcomeIcon",
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
