<script type="module">
import { useStore } from "../../../store";

export default {
    data() {
        return {
            store: useStore(),
            email: 'johndoe@gmail.com',
            password: 'johndoe',
            error: '',
            hideSpinner: true
        }
    },
    methods: { 
        async checkData(){
            this.error = '';
            this.hideSpinner = false;

            const data = {
                email: this.email,
                password: this.password,
            };
            
            await this.store.panel1Actions('login', 'POST', data, 'user');
            this.error = this.store.panel1.error;
            this.hideSpinner = true;
            
            if(this.error === ''){
                this.$emit('emitEvent', 'Logic')
            }
        },
    },
    emits: ['emitEvent']
}
</script>
<template>
    <div class="flex flex-col py-5 gap-5 items-center">

        <h1 class="text-2xl">
            Sign In
        </h1>

        <p v-if="error" class="text-red-500 text-sm">{{error}}</p>

        <form @submit.prevent="checkData" class="flex flex-col gap-2 items-start" :class="{'hidden': !hideSpinner}">

            <label for="email">Email</label>
            <input type="email" id="email" class="border p-2 text-sm rounded" placeholder="email" v-model="email">
            
            <label for="password">Password</label>
            <input type="password" id="password" class="border p-2 text-sm rounded" placeholder="password" v-model="password">

            <button type="submit" class="bg-blue-600 text-white text-sm px-2 py-1 rounded mt-3">Sign In</button>

        </form>

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 animate-spin" :class="{'hidden': hideSpinner}">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
        </svg>

    </div>
</template>