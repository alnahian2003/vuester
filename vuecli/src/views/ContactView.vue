<template>
  <div>
    <h2>Thanks for reaching me out</h2>
    Here's how you can find me:
    <address>
      Email: abracadabra@mail.com, <br />
      Website: hello.world.com
    </address>

    <WelcomeItem>
      <template #heading> Jeffrey Bezos </template>
      <template #icon> <IconTooling /> </template>
      Tell us why, Show us how! Still not impressed? Return to
      <RouterLink to="/">Home</RouterLink> then.
    </WelcomeItem>

    <button
      @click="
        flash(
          'How dare you! 😠',
          'CEO, Entrepreneur, Born in 1964 Jeffrey, Jeffrey Bezos!',
          'error'
        )
      "
    >
      Why so serious?
    </button>
  </div>
</template>

<script setup>
import WelcomeItem from "../components/WelcomeItem.vue";
import IconTooling from "../components/icons/IconTooling.vue";

import { useFlash } from "@/composables/useFlash";
let { flash } = useFlash();
</script>
