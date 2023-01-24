<script setup>
import { computed } from "vue";

let spotsAvailable = computed(() => {
  return prop.team.members.length >= prop.team.spots;
});

// Number of spots left
let spotsLeft = computed(() => {
  let available = prop.team.spots - prop.team.members.length;
  return available > 0 ? available : "No";
});

let prop = defineProps({
  team: Object,
});
</script>

<template>
  <header class="flex justify-between">
    <div>
      <button
        class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded disabled:bg-gray-400"
        :disabled="spotsAvailable"
      >
        Add Member ({{ spotsLeft }} Spots Left)
      </button>
    </div>

    <div>
      <div class="inline-flex items-center text-3xl relative">
        <img src="/smiley.png" alt="" class="mr-2" />
        <h3>{{ team.name }} Team</h3>
        <div
          class="bg-green-400 w-5 h-5 text-xs text-white rounded-full flex justify-center items-center absolute -right-4 -top-2"
        >
          {{ team.spots }}
        </div>
      </div>
    </div>
  </header>
</template>
