<template>

<div class="param-row">
<p> input_size</p>
<input v-model="in_s" />
</div>
<div class="param-row">
<p> hidden_size </p>
<input v-model="h_s" />
</div>
<div class="param-row">
<p> num_layers </p>
<input v-model="n_l" />
</div>
<div class="param-row">
<p> output_size </p>
<input v-model="out_s" />
</div>

<div class="btn create-btn">Utwórz...</div>

</template>

<script setup lang="ts">
import {ref} from 'vue';

let in_s = ref<String>("");
let h_s = ref<String>("");
let n_l = ref<String>("");
let out_s = ref<String>("");



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