<template>
  <div>
    <SocialHeader />
    <SocialFooter />
  </div>
</template>

<script setup>
import { ref, provide } from "vue";
import SocialFooter from "./SocialFooter.vue";
import SocialHeader from "./SocialHeader.vue";

// Static Value
provide("socials", [
  { name: "Facebook", url: "https://facebook.com/alnahian2003" },
  { name: "Github", url: "https://github.com/alnahian2003" },
  { name: "Linkedin", url: "https://linkedin.com/in/alnahian2003" },
  { name: "dev.to", url: "https://dev.to/alnahian2003" },
]);

// Dynamic Value
let message = ref("Find Me On Social Media");
provide("message", message);
</script>

<style></style>
