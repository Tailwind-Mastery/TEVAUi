<script type="module">
import { useStore } from "../../../store";

export default {
    data() {
        return {
            store: useStore(),
            hideSpinner: true,
            surveys: '',
            filteredId: [],
        }
    },
    methods: {
        async getSurveysData(){
            this.hideSpinner = false;
            await this.store.panel1Actions('surveys', 'POST', '', 'surveys');
            this.surveys = this.store.panel1.surveys;
            this.hideSpinner = true;
        },
        removeItem(id){
            this.filteredId.push(id);
            this.surveys = this.surveys.filter(each => !this.filteredId.includes(each.id));
        }
    },
}
</script>
<template>
    <div class="flex flex-col pt-5 gap-5 items-center">

        <h1 class="text-2xl">
            Surveys
        </h1>

        <div class="flex flex-col gap-5 items-center p-3" :class="{'hidden': !hideSpinner}">
            <button @click="getSurveysData" class="border p-1 rounded text-sm hover:bg-slate-50">Get Surveys</button>

            <div class="grid md:grid-cols-2 grid-cols-1 gap-5">

                <div class="flex flex-col border" v-for="survey in surveys" :key="survey.id">
                    <img :src="survey.image" :alt="survey.slug" class="h-80 object-fit w-full">
                    <div class="p-2 flex flex-col gap-1 items-start">
                        <h2 class="">{{survey.title}}</h2>
                        <p class="text-sm tracking-tight text-slate-500">{{survey.description}}</p>
                        <button @click="removeItem(survey.id)" class="p-2 bg-red-500 text-white text-sm rounded">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 fill-white">
                                <path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375z" />
                                <path fill-rule="evenodd" d="M3.087 9l.54 9.176A3 3 0 006.62 21h10.757a3 3 0 002.995-2.824L20.913 9H3.087zm6.133 2.845a.75.75 0 011.06 0l1.72 1.72 1.72-1.72a.75.75 0 111.06 1.06l-1.72 1.72 1.72 1.72a.75.75 0 11-1.06 1.06L12 15.685l-1.72 1.72a.75.75 0 11-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 010-1.06z" clip-rule="evenodd" />
                            </svg>
                            
                        </button>
                    </div>
                </div>
            </div>
            
        </div>

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 animate-spin" :class="{'hidden': hideSpinner}">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
        </svg>
        
    </div>
</template>