<script setup lang="ts">
import { useModelStore } from './model';

const store = useModelStore();

</script>

<template>
    <div class="btn">
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