<script setup lang="ts">
import { useKaggleStore } from './kaggleStore';
import {ref} from 'vue';

const phrase = ref<String>();


</script>

<template>
<div class="wrapper">
    <input v-bind="phrase" />
    <div class="btn search-btn">Wyszukaj</div>
</div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.search-btn{
    margin-top: 20px;
    width: 250px;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    line-height: 50px;
}

input{
    margin-top: 10px;
    width: 400px;
    height: 30px;
}

</style>