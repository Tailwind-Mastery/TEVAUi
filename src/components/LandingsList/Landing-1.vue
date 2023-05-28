<script>
import { useStore } from "../../store";

export default {
  data() {
    return {
      store: useStore(),
      search1: true,
      list: [
        { id: 1, title: 'Landing 1'},
        { id: 2, title: 'Landing 2'},
        { id: 3, title: 'Landing 3'},
      ]
    }
  },  
  methods: {
    showSearch1(){
        this.search1 = false
    },
    
    hideSearch1(){
        this.search1 = true
    },
    moveToElement(id){
        document.querySelector(`#landing${id}`).scrollIntoView();
    },
  }
}
</script>
<template>
<main class="flex flex-col items-center gap-5 py-5">

    <h1 class="font-serif md:text-2xl text-xl mx-4 text-center lining-nums">
        1-Landing Page
    </h1>

    <div class="flex flex-col h-screen relative w-full" id="landing1">
        <img :src="`${store.appendUrl}LandingsList/landing1.jpg`" alt="landing1" class="object-cover w-full h-full absolute">

        <div class="flex md:justify-between md:flex-row gap-5 flex-col bg-gradient-to-b from-black/50 via-black/20 backdrop-blur-lg px-5 pt-5 pb-2 sticky top-0 w-full">

            <router-link to="./1-landing-page">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 stroke-white homeLogo">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
                </svg>
            </router-link>
            
            <nav class="rounded-full px-5 py-2 border border-white flex gap-2 relative">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 stroke-white">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
                <input type="text" class="bg-transparent outline-none text-sm text-white caret-white placeholder:text-white/75 searchInput" placeholder="search ..." @focus="showSearch1">
                
                <div class="flex divide-y gap-1 justify-center flex-col absolute w-5/6 top-10 text-black bg-white cursor-pointer" :class="{'hidden': search1}">
                    <button v-for="btn in list" :key="btn.id" @click="moveToElement(btn.id)" type="button" class="outline-none p-2 hover:text-white hover:bg-slate-800 text-left">{{btn.title}}</button>
                    <button type="button" class="outline-none p-2 hover:text-white hover:bg-red-500" @click="hideSearch1">Hide Search</button>
                </div>
            </nav>
        </div>
    </div>

    <div class="flex flex-col h-screen relative w-full" id="landing2">
        <img :src="`${store.appendUrl}LandingsList/landing2.jpg`" alt="landing1" class="object-cover w-full h-full absolute">

        <div class="flex md:justify-between md:flex-row gap-5 flex-col bg-gradient-to-b from-black/50 via-black/20 backdrop-blur-lg px-5 pt-5 pb-2 sticky top-0 w-full">

            <router-link to="./1-landing-page">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 stroke-white homeLogo">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
                </svg>
            </router-link>
            
            <nav class="rounded-full px-5 py-2 border border-white flex gap-2 relative">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 stroke-white">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
                <input type="text" class="bg-transparent outline-none text-sm text-white caret-white placeholder:text-white/75 searchInput" placeholder="search ..." @focus="showSearch1">
                
                <div class="flex divide-y gap-1 justify-center flex-col absolute w-5/6 top-10 text-black bg-white cursor-pointer" :class="{'hidden': search1}">
                    <button v-for="btn in list" :key="btn.id" @click="moveToElement(btn.id)" type="button" class="outline-none p-2 hover:text-white hover:bg-slate-800 text-left">{{btn.title}}</button>
                    <button type="button" class="outline-none p-2 hover:text-white hover:bg-red-500" @click="hideSearch1">Hide Search</button>
                </div>
            </nav>
        </div>
    </div>

    <div class="flex flex-col h-screen relative w-full" id="landing3">
        <img :src="`${store.appendUrl}LandingsList/landing3.jpg`" alt="landing1" class="object-cover w-full h-full absolute">

        <div class="flex md:justify-between md:flex-row gap-5 flex-col bg-gradient-to-b from-black/50 via-black/20 backdrop-blur-lg px-5 pt-5 pb-2 sticky top-0 w-full">

            <router-link to="./1-landing-page">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 stroke-white homeLogo">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
                </svg>
            </router-link>
            
            <nav class="rounded-full px-5 py-2 border border-white flex gap-2 relative">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 stroke-white">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
                <input type="text" class="bg-transparent outline-none text-sm text-white caret-white placeholder:text-white/75 searchInput" placeholder="search ..." @focus="showSearch1">
                
                <div class="flex divide-y gap-1 justify-center flex-col absolute w-5/6 top-10 text-black bg-white cursor-pointer" :class="{'hidden': search1}">
                    <button v-for="btn in list" :key="btn.id" @click="moveToElement(btn.id)" type="button" class="outline-none p-2 hover:text-white hover:bg-slate-800 text-left">{{btn.title}}</button>
                    <button type="button" class="outline-none p-2 hover:text-white hover:bg-red-500" @click="hideSearch1">Hide Search</button>
                </div>
            </nav>
        </div>
    </div>

</main>
</template>