<template>
    <div class="row">
        <div class="column">
            <RouterLink to="/">Strona główna</RouterLink><br>
            <RouterLink to="/dataset">Zbiór danych</RouterLink><br>
            <RouterLink to="/predict">Prognoza</RouterLink><br>
        </div>
    </div>
</template>

<style scoped>
.column{
    margin-top: 5px;
    line-height: 1.5;
    display: flex;
    flex-direction: column;
}
.row{
    background-color: #ededed;
    width: 150px;
    height: 585px;
    margin-right: 15px;
    display: flex;
    flex-direction: row;
    justify-content: center;
}
</style>