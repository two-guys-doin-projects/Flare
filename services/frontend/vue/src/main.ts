import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router'
import {createPinia} from 'pinia'
import mainPage from './components/mainPage.vue'
import modelPicker from './components/modelPicker.vue'
import modelCreator from './components/modelCreator.vue'
import kaggleSearcher from './components/kaggleSearcher.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: "/", name: "main_page", component: mainPage},
        {path: "/select_model", name: "mdl_picker", component: modelPicker},
        {path: "/create_model", name: "mdl_creator", component: modelCreator},
        {path: "/dataset_lookup", name: "kaggle_searcher", component: kaggleSearcher}
    ]
})

createApp(App).use(router).use(createPinia()).mount('#app')
