<template>
  <nav>
    <router-link to="/options">Options</router-link>
    <router-link to="/user">User</router-link>
  </nav>
  <main v-if="route.name !== 'Popup'">
    <router-view />
  </main>
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<style scoped>
@import '../common.css';
</style>
