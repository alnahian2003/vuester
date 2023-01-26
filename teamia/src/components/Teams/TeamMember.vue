<template>
  <tr class="bg-gray-100 px-12">
    <td class="flex items-center gap-x-4 px-6 py-4">
      <img
        :src="`https://i.pravatar.cc/50?u=${email}`"
        :alt="name"
        class="rounded-xl mx-center blur-[2px] hover:blur-none transition"
      />

      <div>
        <h5 class="md:text-xl font-medium">{{ name }}</h5>
        <p class="text-gray-500">{{ email }}</p>
      </div>
    </td>

    <td>
      <span
        class="my-2 inline-flex select-none items-center text-xs border font-medium px-2.5 py-0.5 rounded-full"
        :class="statusClass.pill"
      >
        <span
          class="w-2 h-2 mr-1 rounded-full"
          :class="statusClass.indicator"
        ></span>
        {{ status }}
      </span>
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
  pill: {
    "text-green-600 bg-green-100 border-green-400":
      prop.status.toLowerCase() === "active",
    "text-orange-600 bg-orange-100 border-orange-400":
      prop.status.toLowerCase() === "busy",
    "text-red-600 bg-red-100 border-red-400":
      prop.status.toLowerCase() === "inactive",
  },
  indicator: {
    "bg-green-400": prop.status.toLowerCase() === "active",
    "bg-orange-400": prop.status.toLowerCase() === "busy",
    "bg-red-400": prop.status.toLowerCase() === "inactive",
  },
});
</script>
