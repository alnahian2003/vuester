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
  </div>
</template>

<script>
import WelcomeItem from "../components/WelcomeItem.vue";
import IconTooling from "../components/icons/IconTooling.vue";

export default {
  components: {
    WelcomeItem,
    IconTooling,
  },
};
</script>

<style scoped></style>
