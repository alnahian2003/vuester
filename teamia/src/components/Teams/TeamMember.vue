<template>
  <tr class="bg-gray-100 px-12">
    <td class="text-xl font-medium flex items-center gap-x-4 px-6 py-4">
      <img
        :src="`https://i.pravatar.cc/50?u=${email}`"
        alt=""
        class="rounded-xl"
      />
      {{ name }}
    </td>

    <td class="text-gray-500 px-6 py-4">{{ email }}</td>

    <td class="px-6 py-4">
      <button class="text-xl" :class="statusClass">
        {{ status }}
      </button>
    </td>
  </tr>
</template>

<script setup>
import { reactive } from "vue";

let prop = defineProps({
  name: String,
  email: String,
  status: String,
});

let statusClass = reactive({
  "text-green-400": prop.status.toLowerCase() === "active",
  "text-orange-400": prop.status.toLowerCase() === "busy",
  "text-red-400": prop.status.toLowerCase() === "inactive",
});
</script>
