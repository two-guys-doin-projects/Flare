<script setup lang="ts">
import { onMounted } from 'vue';
import { ref } from 'vue';
import { useKaggleStore } from './kaggleStore';
import data from '../api/data_scraping';

const store = useKaggleStore();

const datasetHead = ref({});

onMounted(() => {data().get(`/show_dataframe?index=1`).then((response) => {datasetHead.value = response.data.head})})

</script>

<template>
    {{ store.selected_dataset_index }}
<div v-if="datasetHead != null">
    <table>
        <tr v-for="row in datasetHead">
            <th v-for="entry in row"> {{ entry }} </th>
        </tr>
    </table>
</div>

</template>