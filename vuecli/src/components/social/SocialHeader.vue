<template>
    <h3 v-text="message"></h3>
    <input type="text" v-model="message" />
</template>

<script setup>
import { inject } from "vue";

let message = inject(
  "message",
  "Join Me on Facebook, Follow Me on Twitter",
  true
);
</script>

<style scoped>
input[type="text"] {
  background-color: transparent;
  border: 0px transparent;
  border-bottom: 2px solid #5e5e5e;
  color: white;
  padding: 0.5rem 2rem;
  margin: 1rem auto;
  font-size: 1rem;
  transition: 1s border-bottom;
  outline: transparent;
  text-align: center;
}
input[type="text"]:focus {
  border-color: #00bd7e;
}


h3{
    font-size: 1.6rem;
}
</style>
