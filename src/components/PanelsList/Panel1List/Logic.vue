<script type="module">
import { useStore } from "../../../store";

import Dashboard from "./Dashboard.vue";
import Surveys from "./Surveys.vue";

export default {
    data() {
        return {
            store: useStore(),
            tabs: ['Dashboard', 'Surveys'],
            currentTab: 'Dashboard',
            hideSpinner: true,
        }
    },
    components: {
       Dashboard,
       Surveys,
    },
    methods: {
        changeTab(tab){
            this.currentTab = tab;
        },
        async logOut(){
            this.hideSpinner = false;

            const data = {
                email: '',
                password: '',
            };
            
            await this.store.panel1Actions('logout', 'POST', data, 'user');
            this.hideSpinner = true;
            
            this.$emit('emitEvent', 'Home')
        },
    },
    emits: ['emitEvent']
}
</script>
<template>
    <div class="flex flex-col gap-5 items-center">

        <div class="flex gap-5 border-b p-2 text-sm w-full">
            <button type="button" v-for="tab in tabs" @click="changeTab(tab)" class="hover:underline" :class="{'text-blue-500': currentTab === tab}">{{tab}}</button>
            <button type="button" @click="logOut" class="hover:underline">Log Out</button>
        </div>

        <component :is="currentTab" :class="{'hidden': !hideSpinner}" />
        
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 animate-spin" :class="{'hidden': hideSpinner}">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
        </svg>
        
    </div>
</template>