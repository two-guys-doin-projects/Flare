import {defineStore} from "pinia";

export const useModelStore = defineStore("model", {
    state: () => {
        return {name: ""};
    },
    actions: {
        setName(name: String){
            this.name = name;
        }
    }
})