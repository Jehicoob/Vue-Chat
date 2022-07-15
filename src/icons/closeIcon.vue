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
        d="m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z"
      >
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "attachIcon",
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
