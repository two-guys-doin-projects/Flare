<script setup lang="ts">
import modelDisplay from './components/modelDisplay.vue';
import kaggleSearcher from './components/kaggleSearcher.vue';
</script>

<template>
<div class="upper-bar">
  <modelDisplay />
</div>
<div class="main-content">
  <kaggleSearcher/>
</div>
</template>

<style scoped>
.upper-bar{
  height: 84px;
}
</style>
