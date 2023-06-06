<script setup lang="ts">
import { RouterLink } from "vue-router";
import {useKaggleStore} from "./kaggleStore.ts";
import data from "../api/data_scraping";
import {ref, onMounted} from 'vue';

const store = useKaggleStore();

const datasetList = ref(null);

onMounted(() => {data().get(`/show_available_datasets?name=${store.search_phrase}`).then(response => datasetList.value = response.data)})

function selectDataset(dataset: any){
    for(let [index, value] of datasetList.entries()){
        if (value === dataset){
            store.selected_dataset_index = index
            return
        }
    }
    this.$router.push("/dataset_preview")
}
</script>

<template>
    <div v-if="datasetList != null">
            <div class="panel">    
                <div v-for="dataset in datasetList" class="list-position" @click="() => { 
                    for(let [index, value] of datasetList.entries()){
                        if (value === dataset){
                            store.selected_dataset_index = index;
                            return;
                        }
                    }
                    this.$router.push('preview')
                        }">
                    <p>{{ dataset.ref }}</p>
                    <p>{{ dataset.subtitle }}</p>
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