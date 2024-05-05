import { defineStore } from "pinia";

export const useDarkModeStore = defineStore('darkMode', {
state() {
    return {
        darkMode: false,
        theme: 'light'
    }
} 

})