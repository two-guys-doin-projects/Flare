<script setup lang="ts">
import { onMounted } from 'vue';
import { ref } from 'vue';
import { useKaggleStore } from './kaggleStore';
import data from '../api/data_scraping';
import { useRouter } from 'vue-router';

const router = useRouter()
const store = useKaggleStore();
const datasetHead = ref([{}]);
const headings = ref()
onMounted(() => {data().get(`/show_dataframe?index=${store.selected_dataset_index}`).then((response) => {datasetHead.value = response.data.head; headings.value = Object.keys(datasetHead.value[0])})})

const markedForDeletion = ref([]);

function thinTheDataset(){
    data().get(`/selected_columns_of_dataframe?index=${String(markedForDeletion.value)}`)
    router.push('mark_eval')
}

</script>

<template>

<div v-if="datasetHead != null">
    <table>
        <tr>
            <th v-for="(heading, index) in headings">
                {{ heading }}
                <input type="checkbox" v-bind:id='String(index)' v-bind:value='index' v-model="markedForDeletion"/>
            </th>
        </tr>
        <tr v-for="row in datasetHead">
            <th v-for="entry in row"> {{ entry }} </th>
        </tr>
    </table>
    <div class="btn add-button" @click="thinTheDataset"> Usuń zaznaczone kolumny... </div>
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