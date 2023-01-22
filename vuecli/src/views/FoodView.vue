<script setup>
import { useStorage } from "@/composables/useStorage.js";

let food = useStorage("food");
let drink = useStorage("drink", "water");
</script>

<template>
  <div>My Favorite Food is <input type="text" v-model="food" /></div>
  <div>My Favorite Drink is <input type="text" v-model="drink" /></div>
</template>
