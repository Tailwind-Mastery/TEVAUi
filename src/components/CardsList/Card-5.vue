<script>
import { useStore } from "../../store";

export default {
  data() {
    return {
      store: useStore(),
    }
  },  
}
</script>
<template>
<main class="flex flex-col items-center gap-5 py-5">

    <h1 class="font-serif md:text-2xl text-xl mx-4 text-center lining-nums">
        5-Stats Preview Card Component
    </h1>

    <div class="flex flex-col gap-10">

        <div class="flex md:flex-row flex-col-reverse max-w-2xl md:w-11/12 ">
            <div class="bg-indigo-900 md:w-1/2">
                <div class="flex flex-col backdrop-brightness-50 w-full h-full p-8 gap-10">
                
                    <div class="flex flex-col gap-5">
                        <h2 class="text-white font-semibold text-2xl">
                            Get <span class="text-purple-500">insights</span> that help your business grow.
                        </h2>
                        <p class="text-sm text-slate-200">
                            Discover the benefits of data analytics and make better decisions regarding revenue, customer experience and overall efficiency. 
                        </p>
                    </div>
                    <div class="flex justify-between">

                        <div class="flex flex-col">
                            <p class="text-lg font-bold text-white lining-nums tracking-wide">10K+</p>
                            <p class="text-xs font-mono text-slate-200 uppercase tracking-wider">
                                companies
                            </p>
                        </div>
                        <div class="flex flex-col">
                            <p class="text-lg font-bold text-white lining-nums">314</p>
                            <p class="text-xs font-mono text-slate-200 uppercase tracking-wider">
                                templates
                            </p>
                        </div>
                        <div class="flex flex-col">
                            <p class="text-lg font-bold text-white lining-nums tracking-wide">12M+</p>
                            <p class="text-xs font-mono text-slate-200 uppercase tracking-wider">
                                queries
                            </p>
                        </div>
                    </div>

                </div>
            </div>
            <div class="md:w-1/2 relative">
                <img :src="`${store.appendUrl}CardsList/Card-5/work.jpg`" alt="work" class="object-cover w-full h-full">
                <div class="h-full w-full bg-purple-900/50 absolute top-0"></div>
            </div>
        </div>

        <div class="flex md:flex-row flex-col-reverse max-w-2xl md:w-11/12 ">
            <div class="bg-blue-900 md:w-1/2">
                <div class="flex flex-col backdrop-brightness-50 w-full h-full p-8 gap-10">
                
                    <div class="flex flex-col gap-5">
                        <h2 class="text-white font-semibold text-2xl">
                            Get <span class="text-blue-500">insights</span> that help your business grow.
                        </h2>
                        <p class="text-sm text-slate-200">
                            Discover the benefits of data analytics and make better decisions regarding revenue, customer experience and overall efficiency. 
                        </p>
                    </div>
                    <div class="flex justify-between">

                        <div class="flex flex-col">
                            <p class="text-lg font-bold text-white lining-nums tracking-wide">10K+</p>
                            <p class="text-xs font-mono text-slate-200 uppercase tracking-wider">
                                companies
                            </p>
                        </div>
                        <div class="flex flex-col">
                            <p class="text-lg font-bold text-white lining-nums">314</p>
                            <p class="text-xs font-mono text-slate-200 uppercase tracking-wider">
                                templates
                            </p>
                        </div>
                        <div class="flex flex-col">
                            <p class="text-lg font-bold text-white lining-nums tracking-wide">12M+</p>
                            <p class="text-xs font-mono text-slate-200 uppercase tracking-wider">
                                queries
                            </p>
                        </div>
                    </div>

                </div>
            </div>
            <div class="md:w-1/2 relative">
                <img :src="`${store.appendUrl}CardsList/Card-5/suite.jpg`" alt="suite" class="object-cover w-full h-full">
                <div class="h-full w-full bg-blue-900/50 absolute top-0"></div>
            </div>
        </div>

        <div class="flex md:flex-row flex-col-reverse max-w-2xl md:w-11/12 ">
            <div class="bg-red-900 md:w-1/2">
                <div class="flex flex-col backdrop-brightness-50 w-full h-full p-8 gap-10">
                
                    <div class="flex flex-col gap-5">
                        <h2 class="text-white font-semibold text-2xl">
                            Get <span class="text-red-500">insights</span> that help your business grow.
                        </h2>
                        <p class="text-sm text-slate-200">
                            Discover the benefits of data analytics and make better decisions regarding revenue, customer experience and overall efficiency. 
                        </p>
                    </div>
                    <div class="flex justify-between">

                        <div class="flex flex-col">
                            <p class="text-lg font-bold text-white lining-nums tracking-wide">10K+</p>
                            <p class="text-xs font-mono text-slate-200 uppercase tracking-wider">
                                companies
                            </p>
                        </div>
                        <div class="flex flex-col">
                            <p class="text-lg font-bold text-white lining-nums">314</p>
                            <p class="text-xs font-mono text-slate-200 uppercase tracking-wider">
                                templates
                            </p>
                        </div>
                        <div class="flex flex-col">
                            <p class="text-lg font-bold text-white lining-nums tracking-wide">12M+</p>
                            <p class="text-xs font-mono text-slate-200 uppercase tracking-wider">
                                queries
                            </p>
                        </div>
                    </div>

                </div>
            </div>
            <div class="md:w-1/2 relative">
                <img :src="`${store.appendUrl}CardsList/Card-5/diary.jpg`" alt="diary" class="object-cover w-full h-full">
                <div class="h-full w-full bg-red-900/50 absolute top-0"></div>
            </div>
        </div>

        <div class="flex md:flex-row flex-col-reverse max-w-2xl md:w-11/12 ">
            <div class="bg-green-900 md:w-1/2">
                <div class="flex flex-col backdrop-brightness-50 w-full h-full p-8 gap-10">
                
                    <div class="flex flex-col gap-5">
                        <h2 class="text-white font-semibold text-2xl">
                            Get <span class="text-green-500">insights</span> that help your business grow.
                        </h2>
                        <p class="text-sm text-slate-200">
                            Discover the benefits of data analytics and make better decisions regarding revenue, customer experience and overall efficiency. 
                        </p>
                    </div>
                    <div class="flex justify-between">

                        <div class="flex flex-col">
                            <p class="text-lg font-bold text-white lining-nums tracking-wide">10K+</p>
                            <p class="text-xs font-mono text-slate-200 uppercase tracking-wider">
                                companies
                            </p>
                        </div>
                        <div class="flex flex-col">
                            <p class="text-lg font-bold text-white lining-nums">314</p>
                            <p class="text-xs font-mono text-slate-200 uppercase tracking-wider">
                                templates
                            </p>
                        </div>
                        <div class="flex flex-col">
                            <p class="text-lg font-bold text-white lining-nums tracking-wide">12M+</p>
                            <p class="text-xs font-mono text-slate-200 uppercase tracking-wider">
                                queries
                            </p>
                        </div>
                    </div>

                </div>
            </div>
            <div class="md:w-1/2 relative">
                <img :src="`${store.appendUrl}CardsList/Card-5/plants.jpg`" alt="plants" class="object-cover w-full h-full">
                <div class="h-full w-full bg-green-900/50 absolute top-0"></div>
            </div>
        </div>

    </div>

</main>
</template>