<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useModelStore } from './model';
import ml from '../api/ml';


const model = useModelStore();
const data = ref();
const prediction = ref();
const input = ref([]);


ml().get(`/model/io_shape?name=${model.name}`).then((response) => data.value = response.data)

function getPrediction(){
    ml().get(`model/prediction?name=${model.name}&${input.value.map((index) => `data=${index}`).join('&')}`).then((response) => prediction.value = response.data)
}

</script>

<template>
    <div v-if="data">
    <h1>Wejście modelu</h1>
        <input v-for="key in Array.from(Array(data[0]).keys())" :id="String(key)" v-model="input[key]"/>
    </div>
    <div v-if="prediction">
        <h1>Wyjście modelu</h1>
        <p v-for="key in Array.from(Array(data[1]).keys())"> {{ prediction.result[key] }} </p>
    </div>
    <div class="btn add-button" @click="getPrediction"> Wywołaj prognozę </div>
</template>

<style scoped>
.add-button{
    float: right;
    margin-right: 15px;
    margin-bottom: 15px;
    width: 216px;
    height: 54px;
    margin-top: 15px;
    text-align: center;
    vertical-align: middle;
    line-height: 54px;
}
</style>