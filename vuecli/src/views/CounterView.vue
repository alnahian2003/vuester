<template>
  <div>
    <h2>Counter View</h2>
    <h3>{{ counter.name }}</h3>
    Doubled: {{ counter.doubleCount }}
    <button @click="counter.count++" :disabled="!counter.remaining">
      Remaining: {{ counter.remaining }}
    </button>
  </div>
</template>

<script setup>
import { useCounterStore } from "@/stores/CounterStore.js";

let counter = useCounterStore();
</script>
