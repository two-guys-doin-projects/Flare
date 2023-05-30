<script setup lang="ts">
import modelDisplay from './components/modelDisplay.vue';
import kaggleSearcher from './components/kaggleSearcher.vue';
import { RouterLink } from 'vue-router';
</script>

<template>
<div class="upper-bar">
  <modelDisplay />
</div>
<div class="main-content">
  <router-view />
</div>
</template>

<style scoped>
.upper-bar{
  height: 84px;
}
.upper-bar{
  max-width: 700px;
  margin: 0 auto;
}
</style>
