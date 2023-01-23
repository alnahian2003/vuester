<template>
  <a :href="props.socialLink"><slot>Twitter</slot></a>
</template>

<script setup>
let props = defineProps({
  socialLink: {
    type: String,
    default: "https://twitter.com/alnahian2003",
  },
});
</script>

<style scoped>
a:not(:last-child) {
  margin-right: 1rem;
}
</style>
