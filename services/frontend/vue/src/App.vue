<script setup lang="ts">
import modelDisplay from './components/modelDisplay.vue';
import sideBar from './components/sideBar.vue';
</script>

<template>
<div class="upper-bar">
  <modelDisplay />
</div>
<div class="main-content">
  <div class="side-bar-wrapper">
    <sideBar />
  </div>
  <div class="main-wrapper">
    <router-view />
  </div>
</div>
</template>

<style scoped>
.upper-bar{
  height: 84px;
  max-width: 1097px;
  margin: 0 auto;
}
.main-content{
  margin: 0 auto;
  margin-top: 10px;
  width: 1097px;
  display: flex;
  flex-direction: row;
}
.main-wrapper{
  width: 421px;
}
</style>
