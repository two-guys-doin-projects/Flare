import {createRouter, createWebHistory} from 'vue-router'
import mainPage from './components/mainPage.vue'
import modelPicker from './components/modelPicker.vue'
import modelCreator from './components/modelCreator.vue'
import kaggleSearcher from './components/kaggleSearcher.vue'
import datasetPicker from './components/datasetPicker.vue'
import datasetCustomizer from './components/datasetCustomizer.vue'
import datasetWrapper from './components/datasetWrapper.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: "/", name: "main_page", component: mainPage},
        {path: "/select_model", name: "mdl_picker", component: modelPicker},
        {path: "/create_model", name: "mdl_creator", component: modelCreator},
        {path: "/dataset_preview", name: "data_preview", component: datasetCustomizer},
        {path: "/dataset",
            name: "data",
            component: datasetWrapper,
            children:
            [
                {path: "", component: kaggleSearcher},
                {path: "/pick", component: datasetPicker},
                {path: "/preview", component: datasetCustomizer}
            ]}
    ]
})

export default router;