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
      <path d="M6 36v-3h36v3Zm0-10.5v-3h36v3ZM6 15v-3h36v3Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "menuIcon",
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
