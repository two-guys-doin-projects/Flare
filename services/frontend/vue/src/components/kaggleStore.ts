import {defineStore} from "pinia";

export const useKaggleStore = defineStore("kaggle", {
    state: () => {
        return {
            search_phrase: "",
            selected_dataset_index: 0
        };
    }
})