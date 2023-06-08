<script setup lang="ts">
import { onMounted } from 'vue';
import { ref } from 'vue';
import data from '../api/data_scraping';
import ml from '../api/ml';
import { useModelStore } from './model';

const model = useModelStore();
const datasetHead = ref([{}]);
const headings = ref()
onMounted(() => {data().get(`/send_dataset_to_ml`).then((response) => {datasetHead.value = response.data.train; headings.value = Object.keys(datasetHead.value[0]); datasetHead.value = datasetHead.value.slice(0,25)})})

const markedForEval = ref([]);
const trainResponse = ref({});
const epochs = ref<number>();


function startTraining(){
    if(markedForEval.value.length > 0 && model.name != ""){
        ml().post(`model/train?name=${model.name}&epochs=${epochs.value ? epochs.value : 2}&${markedForEval.value.map((index) => `eval_column_indices=${index}`).join('&')}`).then((response) => trainResponse.value = response)
    }
}

</script>

<template>

<div v-if="datasetHead != null">
    <table>
        <tr>
            <th v-for="(heading, index) in headings">
                {{ heading }}
                <input type="checkbox" v-bind:id='String(index)' v-bind:value='index' v-model="markedForEval"/>
            </th>
        </tr>
        <tr v-for="row in datasetHead">
            <th v-for="entry in row"> {{ entry }} </th>
        </tr>
    </table>
    <div class="btn add-button" @click="startTraining"> Rozpocznij trening... </div>
    <input v-model="epochs" placeholder="ilość epok" type="number" />
</div>

</template>

<style scoped>
table {
    background-color: lightgray;
}
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