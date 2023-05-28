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
        7-Profile Card Component
    </h1>

    <div class="grid md:grid-cols-2 grid-cols-1 gap-10">

        <div class="flex flex-col relative rounded-xl overflow-hidden h-96 box-shadow shadow-xl md:w-80 w-72">
            <img :src="`${store.appendUrl}CardsList/Card-7/blue.jpg`" alt="blue" class="h-2/5 object-cover w-full">

            <div class="absolute top-0 h-full w-full flex flex-col divide-y">

                <div class="flex flex-col items-center justify-end h-3/4 gap-2 pb-3">
                    
                    <img :src="`${store.appendUrl}CardsList/Card-7/julian.jpg`" alt="julian" class="rounded-full border-4 border-white w-28 h-28 object-cover">
                    
                    <div class="flex flex-col gap-2 items-center">

                        <div class="flex gap-2">
                            <h2 class="font-bold text-slate-600 tracking-tight text-xl">
                                Julian Doe
                            </h2>
                            <p class="text-slate-500 text-xl font-medium lining-nums">26</p>
                        </div>

                        <p class="text-blue-500 font-medium">London</p>
                    </div>
                </div>

                <div class="flex px-10 h-1/4 items-center justify-between">

                    <div class="flex flex-col items-center">
                        <p class="font-bold text-slate-700 lining-nums text-xl tracking-tight">
                            80K
                        </p>
                        <p class="text-xs text-slate-500 font-medium tracking-widest">
                            Followers
                        </p>
                    </div>
                    <div class="flex flex-col items-center">
                        <p class="font-bold text-slate-700 lining-nums text-xl tracking-tight">
                            803K
                        </p>
                        <p class="text-xs text-slate-500 font-medium tracking-widest">
                            Likes
                        </p>
                    </div>
                    <div class="flex flex-col items-center">
                        <p class="font-bold text-slate-700 lining-nums text-xl tracking-tight">
                            1.4K
                        </p>
                        <p class="text-xs text-slate-500 font-medium tracking-widest">
                            Photos
                        </p>
                    </div>
                    
                </div>
                
            </div>
        </div>

        <div class="flex flex-col relative rounded-xl overflow-hidden h-96 box-shadow shadow-xl md:w-80 w-72">
            <img :src="`${store.appendUrl}CardsList/Card-7/red.jpg`" alt="red" class="h-2/5 object-cover w-full">

            <div class="absolute top-0 h-full w-full flex flex-col divide-y">

                <div class="flex flex-col items-center justify-end h-3/4 gap-2 pb-3">
                    
                    <img :src="`${store.appendUrl}CardsList/Card-7/alex.jpg`" alt="alex" class="rounded-full border-4 border-white w-28 objec h-28t-cover">
                    
                    <div class="flex flex-col gap-2 items-center">

                        <div class="flex gap-2">
                            <h2 class="font-bold text-slate-600 tracking-tight text-xl">
                                Alex Doe
                            </h2>
                            <p class="text-slate-500 text-xl font-medium lining-nums">26</p>
                        </div>

                        <p class="text-red-500 font-medium">London</p>
                    </div>
                </div>

                <div class="flex px-10 h-1/4 items-center justify-between">

                    <div class="flex flex-col items-center">
                        <p class="font-bold text-slate-700 lining-nums text-xl tracking-tight">
                            80K
                        </p>
                        <p class="text-xs text-slate-500 font-medium tracking-widest">
                            Followers
                        </p>
                    </div>
                    <div class="flex flex-col items-center">
                        <p class="font-bold text-slate-700 lining-nums text-xl tracking-tight">
                            803K
                        </p>
                        <p class="text-xs text-slate-500 font-medium tracking-widest">
                            Likes
                        </p>
                    </div>
                    <div class="flex flex-col items-center">
                        <p class="font-bold text-slate-700 lining-nums text-xl tracking-tight">
                            1.4K
                        </p>
                        <p class="text-xs text-slate-500 font-medium tracking-widest">
                            Photos
                        </p>
                    </div>
                    
                </div>
                
            </div>
        </div>
        
        <div class="flex flex-col relative rounded-xl overflow-hidden h-96 box-shadow shadow-xl md:w-80 w-72">
            <img :src="`${store.appendUrl}CardsList/Card-7/purple.jpg`" alt="purple" class="h-2/5 object-cover w-full">

            <div class="absolute top-0 h-full w-full flex flex-col divide-y">

                <div class="flex flex-col items-center justify-end h-3/4 gap-2 pb-3">
                    
                    <img :src="`${store.appendUrl}CardsList/Card-7/jurica.jpg`" alt="jurica" class="rounded-full border-4 border-white w-28 h-28 object-cover">
                    
                    <div class="flex flex-col gap-2 items-center">

                        <div class="flex gap-2">
                            <h2 class="font-bold text-slate-600 tracking-tight text-xl">
                                Jurica Doe
                            </h2>
                            <p class="text-slate-500 text-xl font-medium lining-nums">26</p>
                        </div>

                        <p class="text-purple-500 font-medium">London</p>
                    </div>
                </div>

                <div class="flex px-10 h-1/4 items-center justify-between">

                    <div class="flex flex-col items-center">
                        <p class="font-bold text-slate-700 lining-nums text-xl tracking-tight">
                            80K
                        </p>
                        <p class="text-xs text-slate-500 font-medium tracking-widest">
                            Followers
                        </p>
                    </div>
                    <div class="flex flex-col items-center">
                        <p class="font-bold text-slate-700 lining-nums text-xl tracking-tight">
                            803K
                        </p>
                        <p class="text-xs text-slate-500 font-medium tracking-widest">
                            Likes
                        </p>
                    </div>
                    <div class="flex flex-col items-center">
                        <p class="font-bold text-slate-700 lining-nums text-xl tracking-tight">
                            1.4K
                        </p>
                        <p class="text-xs text-slate-500 font-medium tracking-widest">
                            Photos
                        </p>
                    </div>
                    
                </div>
                
            </div>
        </div>
        
        <div class="flex flex-col relative rounded-xl overflow-hidden h-96 box-shadow shadow-xl md:w-80 w-72">
            <img :src="`${store.appendUrl}CardsList/Card-7/green.jpg`" alt="green" class="h-2/5 object-cover w-full">

            <div class="absolute top-0 h-full w-full flex flex-col divide-y">

                <div class="flex flex-col items-center justify-end h-3/4 gap-2 pb-3">
                    
                    <img :src="`${store.appendUrl}CardsList/Card-7/julian.jpg`" alt="julian" class="rounded-full border-4 border-white w-28 h-28 object-cover">
                    
                    <div class="flex flex-col gap-2 items-center">

                        <div class="flex gap-2">
                            <h2 class="font-bold text-slate-600 tracking-tight text-xl">
                                Julian Doe
                            </h2>
                            <p class="text-slate-500 text-xl font-medium lining-nums">26</p>
                        </div>

                        <p class="text-green-500 font-medium">London</p>
                    </div>
                </div>

                <div class="flex px-10 h-1/4 items-center justify-between">

                    <div class="flex flex-col items-center">
                        <p class="font-bold text-slate-700 lining-nums text-xl tracking-tight">
                            80K
                        </p>
                        <p class="text-xs text-slate-500 font-medium tracking-widest">
                            Followers
                        </p>
                    </div>
                    <div class="flex flex-col items-center">
                        <p class="font-bold text-slate-700 lining-nums text-xl tracking-tight">
                            803K
                        </p>
                        <p class="text-xs text-slate-500 font-medium tracking-widest">
                            Likes
                        </p>
                    </div>
                    <div class="flex flex-col items-center">
                        <p class="font-bold text-slate-700 lining-nums text-xl tracking-tight">
                            1.4K
                        </p>
                        <p class="text-xs text-slate-500 font-medium tracking-widest">
                            Photos
                        </p>
                    </div>
                    
                </div>
                
            </div>
        </div>

        <div class="flex flex-col relative rounded-xl overflow-hidden h-96 box-shadow shadow-xl md:w-80 w-72">
            <img :src="`${store.appendUrl}CardsList/Card-7/yellow.jpg`" alt="yellow" class="h-2/5 object-cover w-full">

            <div class="absolute top-0 h-full w-full flex flex-col divide-y">

                <div class="flex flex-col items-center justify-end h-3/4 gap-2 pb-3">
                    
                    <img :src="`${store.appendUrl}CardsList/Card-7/alex.jpg`" alt="alex" class="rounded-full border-4 border-white w-28 objec h-28t-cover">
                    
                    <div class="flex flex-col gap-2 items-center">

                        <div class="flex gap-2">
                            <h2 class="font-bold text-slate-600 tracking-tight text-xl">
                                Alex Doe
                            </h2>
                            <p class="text-slate-500 text-xl font-medium lining-nums">26</p>
                        </div>

                        <p class="text-yellow-500 font-medium">London</p>
                    </div>
                </div>

                <div class="flex px-10 h-1/4 items-center justify-between">

                    <div class="flex flex-col items-center">
                        <p class="font-bold text-slate-700 lining-nums text-xl tracking-tight">
                            80K
                        </p>
                        <p class="text-xs text-slate-500 font-medium tracking-widest">
                            Followers
                        </p>
                    </div>
                    <div class="flex flex-col items-center">
                        <p class="font-bold text-slate-700 lining-nums text-xl tracking-tight">
                            803K
                        </p>
                        <p class="text-xs text-slate-500 font-medium tracking-widest">
                            Likes
                        </p>
                    </div>
                    <div class="flex flex-col items-center">
                        <p class="font-bold text-slate-700 lining-nums text-xl tracking-tight">
                            1.4K
                        </p>
                        <p class="text-xs text-slate-500 font-medium tracking-widest">
                            Photos
                        </p>
                    </div>
                    
                </div>
                
            </div>
        </div>
        
        <div class="flex flex-col relative rounded-xl overflow-hidden h-96 box-shadow shadow-xl md:w-80 w-72">
            <img :src="`${store.appendUrl}CardsList/Card-7/grey.jpg`" alt="grey" class="h-2/5 object-cover w-full">

            <div class="absolute top-0 h-full w-full flex flex-col divide-y">

                <div class="flex flex-col items-center justify-end h-3/4 gap-2 pb-3">
                    
                    <img :src="`${store.appendUrl}CardsList/Card-7/jurica.jpg`" alt="jurica" class="rounded-full border-4 border-white w-28 h-28 object-cover">
                    
                    <div class="flex flex-col gap-2 items-center">

                        <div class="flex gap-2">
                            <h2 class="font-bold text-slate-600 tracking-tight text-xl">
                                Jurica Doe
                            </h2>
                            <p class="text-slate-500 text-xl font-medium lining-nums">26</p>
                        </div>

                        <p class="text-neutral-500 font-medium">London</p>
                    </div>
                </div>

                <div class="flex px-10 h-1/4 items-center justify-between">

                    <div class="flex flex-col items-center">
                        <p class="font-bold text-slate-700 lining-nums text-xl tracking-tight">
                            80K
                        </p>
                        <p class="text-xs text-slate-500 font-medium tracking-widest">
                            Followers
                        </p>
                    </div>
                    <div class="flex flex-col items-center">
                        <p class="font-bold text-slate-700 lining-nums text-xl tracking-tight">
                            803K
                        </p>
                        <p class="text-xs text-slate-500 font-medium tracking-widest">
                            Likes
                        </p>
                    </div>
                    <div class="flex flex-col items-center">
                        <p class="font-bold text-slate-700 lining-nums text-xl tracking-tight">
                            1.4K
                        </p>
                        <p class="text-xs text-slate-500 font-medium tracking-widest">
                            Photos
                        </p>
                    </div>
                    
                </div>
                
            </div>
        </div>
        
    </div>

</main>
</template>