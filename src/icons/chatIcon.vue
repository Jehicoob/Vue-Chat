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
        d="M12 28.05h15.65v-3H12Zm0-6.5h24v-3H12Zm0-6.5h24v-3H12ZM4 44V7q0-1.15.9-2.075Q5.8 4 7 4h34q1.15 0 2.075.925Q44 5.85 44 7v26q0 1.15-.925 2.075Q42.15 36 41 36H12Zm3-7.25L10.75 33H41V7H7ZM7 7v29.75Z"
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
