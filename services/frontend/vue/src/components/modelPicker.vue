<script setup lang="ts">
import { RouterLink } from "vue-router";
import {useModelStore} from "./model.ts";
import ml from "../api/ml";
import {ref, onMounted} from 'vue';

const store = useModelStore();

const modelList = ref<String>(null);

onMounted(() => {ml().get('/models/list').then(response => modelList.value = response.data)})

function selectModel(name: String){
    store.setName(name);
    ml().post(`/model/select?model_name=${name}`)
}
</script>

<template>
    <div v-if="modelList != null">
            <div class="panel">    
                <div v-for="model in modelList" class="list-position" @click="() => selectModel(model)">
                    <p>{{ model }}</p>
                </div>
                <div class="btn add-button"> <RouterLink to="/create_model"> + </RouterLink></div>
        </div>
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