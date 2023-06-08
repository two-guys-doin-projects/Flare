<template>
<div class="param-row">
<p> nazwa</p>
<input v-model="name" />
</div>
<div class="param-row">
<p> input_size</p>
<input type="number" v-model="in_s" />
</div>
<div class="param-row">
<p> hidden_size </p>
<input type="number" v-model="h_s" />
</div>
<div class="param-row">
<p> num_layers </p>
<input type="number" v-model="n_l" />
</div>
<div class="param-row">
<p> output_size </p>
<input type="number" v-model="out_s" />
</div>

<button class="btn create-btn" @click="() => addModel()">Utwórz...</button>

</template>

<script setup lang="ts">
import {ref} from 'vue';
import ml from '../api/ml';

let name = ref<String>("");
let h_s = ref<String>("");
let n_l = ref<String>("");
let out_s = ref<String>("");
let in_s = ref<String>("");

function addModel(){
    if( name === null || h_s === null || n_l === null || out_s === null || in_s  === null){
        return
    }
    ml().post(`/model/create?name=${name.value}&type=neural`, {
        "input_size" : in_s.value,
        "hidden_size": h_s.value,
        "num_layers": n_l.value,
        "output_size": out_s.value
    })
}

</script>

<style scoped>
.param-row{
    margin-left: 10px;
    margin-right: 10px;
    display: flex;
    justify-content: space-between;
}
.create-btn{
    float: right;
    margin-right: 15px;
    margin-bottom: 15px;
    width: 108px;
    height: 54px;
    margin-top: 15px;
    text-align: center;
    vertical-align: middle;
    line-height: 54px;
}
</style>