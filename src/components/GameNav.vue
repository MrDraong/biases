<template>
  <nav>
    <RouterLink to="/game">Start</RouterLink>
  </nav>
  <RouterView />
</template>
<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>
