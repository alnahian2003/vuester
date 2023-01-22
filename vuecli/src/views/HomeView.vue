<script setup>
import TheWelcome from "../components/TheWelcome.vue";
import { ref } from "vue";
import { useFlash } from "@/composables/useFlash.js";

let { flash } = useFlash();

let count = ref(0);
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
    <button @click="flash('You did it! 💯', `${count}`, 'info')">
      Flash Message
    </button>
  </main>
</template>
