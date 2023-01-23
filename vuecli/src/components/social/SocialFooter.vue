<template>
  <div>
    <social-footer-links
      v-for="social in socials"
      :social-link="social.url"
      v-text="social.name"
    ></social-footer-links>
  </div>
</template>

<script setup>
import SocialFooterLinks from "./SocialFooterLinks.vue";
import { inject } from "vue";

let socials = inject("socials");
</script>
