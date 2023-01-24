<script setup>
import { useTeamStore } from "@/stores/teamStore.js";
let team = useTeamStore();
</script>

<template>
  <header class="flex justify-between">
    <div>
      <button
        class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded disabled:bg-gray-400"
        :disabled="team.spotsAvailable"
      >
        Add Member ({{ team.spotsLeft }} Spots Left)
      </button>
    </div>

    <div>
      <div class="inline-flex items-center text-3xl relative">
        <span class="mr-2">🍍</span>
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
