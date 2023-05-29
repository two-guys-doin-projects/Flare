<script setup lang="ts">

const models = [
    {name: 'neural1', type: 'neural'},
    {name: 'neural2', type: 'neural'}
]

</script>

<template>
    <div class="panel">    
        <div v-for="model in models" class="list-position">
            <p>{{ model.name }}</p>
            <p>{{ model.type }}</p>
        </div>
        <div class="btn add-button"> + </div>
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