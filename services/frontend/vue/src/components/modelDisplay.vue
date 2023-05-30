<script setup lang="ts">
import { useModelStore } from './model';
import { useRouter, useRoute } from 'vue-router';

const store = useModelStore();
const router = useRouter();

function switchToModelPicker(e){
    router.push({path: "/select_model"})
}

</script>

<template>
    <div class="btn" @click="switchToModelPicker">
    <h3>Model</h3>
    <p>{{ store.name === "" ? "Wybierz model..." : store.name }}</p>
</div>
</template>

<style scoped>
.btn h3{
    margin-left: 5px;
}
.btn p{
    margin-left: 10px;
    margin-top: -10px;
}
div{
    height:100%;
}
</style>