<script setup lang="ts">
import { onMounted } from 'vue';
import { ref } from 'vue';
import { useKaggleStore } from './kaggleStore';
import data from '../api/data_scraping';

const store = useKaggleStore();

const datasetHead = ref([{}]);
const headings = ref()
onMounted(() => {data().get(`/show_dataframe?index=${store.selected_dataset_index}`).then((response) => {datasetHead.value = response.data.head; headings.value = Object.keys(datasetHead.value[0])})})



</script>

<template>

<div v-if="datasetHead != null">
    <table>
        <tr>
            <th v-for="(heading, index) in headings"> {{ heading }} </th>
        </tr>
        <tr v-for="row in datasetHead">
            <th v-for="entry in row"> {{ entry }} </th>
        </tr>
    </table>
</div>

</template>

<style scoped>
table {
    background-color: lightgray;
}
</style>