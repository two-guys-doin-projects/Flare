<script setup lang="ts">
import { RouterLink } from "vue-router";
import {useModelStore} from "./model.ts";

const store = useModelStore();

const models = [
    {name: 'neural1', type: 'neural'},
    {name: 'neural2', type: 'neural'}
]

</script>

<template>
    <div class="panel">    
        <div v-for="model in models" class="list-position" @click="() => store.setName(model.name)">
            <p>{{ model.name }}</p>
            <p>{{ model.type }}</p>
        </div>
        <div class="btn add-button"> <RouterLink to="/create_model"> + </RouterLink></div>
    </div>
</template>

<style scoped>
.add-button{
    float: right;
    margin-right: 15px;
    margin-bottom: 15px;
    width: 54px;
    height: 54px;
    margin-top: 15px;
    text-align: center;
    vertical-align: middle;
    line-height: 54px;
}
</style>