<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header class="bg-slate-800 p-4 md:px-16 md:py-4 text-gray-200">
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
