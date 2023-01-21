<script setup>
import TheWelcome from "../components/TheWelcome.vue";
import { ref, onMounted } from "vue";

const count = ref(0);
let incr = ref(1);

function increment(incrementBy = 1) {
  count.value += incrementBy;
}
</script>

<template>
  <main>
    <TheWelcome />
    {{ count }}
    <input type="number" v-model="incr" />
    <button @click="increment(incr)">+</button>
  </main>
</template>
