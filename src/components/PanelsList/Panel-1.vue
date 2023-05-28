<script type="module">
import { useStore } from "../../store";

import Home from "./Panel1List/Home.vue"
import Signin from "./Panel1List/Signin.vue"
import Signup from "./Panel1List/Signup.vue"
import Logic from "./Panel1List/Logic.vue"



export default {
    data() {
        return {
            store: useStore(),
            tabs: ['Home', 'Signin', 'Signup', 'Logic'],
            currentTab: 'Home'
        }
    },
    components: {
        Home,
        Signin,
        Signup,
        Logic,
    },
    methods:{
        changeTab(tab){
            this.currentTab = tab;
        }
    },
    watch: {
        currentTab(newVal, oldVal){
            if(newVal === 'Logic') {
                if(this.store.panel1.email === '' || this.store.panel1.password === '' || this.store.panel1.token === ''){
                    this.currentTab = 'Signup'
                }
            } else {
                if(this.store.panel1.email !== '' && this.store.panel1.password !== '' && this.store.panel1.token !== ''){
                    this.currentTab = 'Logic'
                }
            }
        }
    }
}
</script>
<template>
<main class="flex flex-col items-center gap-5 py-5">

    <h1 class="font-serif md:text-2xl text-xl mx-4 text-center lining-nums">
        1-Panel Component
    </h1>


    <div class="flex flex-col w-full border rounded overflow-hidden">

        <div class="flex gap-5 border-b p-2 text-sm">
            <button type="button" v-for="tab in tabs" @click="changeTab(tab)" class="hover:underline" :class="{'text-blue-500': currentTab === tab}">{{tab}}</button>
        </div>

        <component :is="currentTab" @emitEvent="changeTab"/>

    </div>
</main>
</template>