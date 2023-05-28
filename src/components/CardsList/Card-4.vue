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
        4-Order Summary Component
    </h1>

    <div class="grid md:grid-cols-2 grid-cols-1 gap-5">
        
        <div class="rounded-xl box-shadow shadow-xl overflow-hidden w-80">

            <img :src="`${store.appendUrl}CardsList/Card-4/hero.svg`" alt="hero" class="object-cover h-40 w-full">
            
            <div class="px-5 pt-10 pb-5 flex flex-col gap-5">
                <h2 class="text-center font-bold text-2xl tracking-tight text-slate-700">
                    Order Summary
                </h2>

                <p class="text-sm text-slate-500 text-center">
                    You can now listen to millions of songs, audiobooks and podcasts on any device anywhere you like!
                </p>

                <div class="flex bg-slate-100 p-3 justify-between items-center rounded">
                    
                    <div class="flex gap-3 items-center">
                        <img :src="`${store.appendUrl}CardsList/Card-4/icon-music.svg`" alt="icon" class="h-10">

                        <div class="flex flex-col gap-0.5">
                            <h3 class="font-bold tracking-tight text-sm text-slate-700">
                                Annual Plan
                            </h3>
                            <p class="text-sm text-slate-400 lining-nums font-medium">
                                $59.99/year
                            </p>
                        </div>
                    </div>

                    <a class="text-xs font-bold underline underline-indigo-900 text-indigo-900 tracking-wide cursor-pointer">Change</a>
                </div>

                <button type="button" class="bg-indigo-700 text-white text-center py-2 rounded text-sm font-medium hover:bg-indigo-600">
                    Proceed to Payment
                </button>

                <a class="text-sm font-semibold text-center text-slate-500 cursor-pointer">Cancel Order</a>
                
            </div>
            
        </div>
                
        <div class="rounded-xl box-shadow shadow-xl overflow-hidden w-80">

            <img :src="`${store.appendUrl}CardsList/Card-4/order.jpg`" alt="order" class="object-cover h-40 w-full">

            <div class="px-5 pt-10 pb-5 flex flex-col gap-5">
                <h2 class="text-center font-bold text-2xl tracking-tight text-slate-700">
                    Order Summary
                </h2>

                <p class="text-sm text-slate-500 text-center">
                    You can now listen to millions of songs, audiobooks and podcasts on any device anywhere you like!
                </p>

                <div class="flex bg-slate-100 p-3 justify-between items-center rounded">
                    
                    <div class="flex gap-3 items-center">
                        <img :src="`${store.appendUrl}CardsList/Card-4/icon-music.svg`" alt="icon" class="h-10">

                        <div class="flex flex-col gap-0.5">
                            <h3 class="font-bold tracking-tight text-sm text-slate-700">
                                Annual Plan
                            </h3>
                            <p class="text-sm text-slate-400 lining-nums font-medium">
                                $59.99/year
                            </p>
                        </div>
                    </div>

                    <a class="text-xs font-bold underline underline-cyan-900 text-cyan-900 tracking-wide cursor-pointer">Change</a>
                </div>

                <button type="button" class="bg-cyan-700 text-white text-center py-2 rounded text-sm font-medium hover:bg-cyan-600">
                    Proceed to Payment
                </button>

                <a class="text-sm font-semibold text-center text-slate-500 cursor-pointer">Cancel Order</a>
                
            </div>

        </div>
                
        <div class="rounded-xl box-shadow shadow-xl overflow-hidden w-80">

            <img :src="`${store.appendUrl}CardsList/Card-4/leaves.jpg`" alt="leaves" class="object-cover h-40 w-full">

            <div class="px-5 pt-10 pb-5 flex flex-col gap-5">
                <h2 class="text-center font-bold text-2xl tracking-tight text-slate-700">
                    Order Summary
                </h2>

                <p class="text-sm text-slate-500 text-center">
                    You can now listen to millions of songs, audiobooks and podcasts on any device anywhere you like!
                </p>

                <div class="flex bg-slate-100 p-3 justify-between items-center rounded">
                    
                    <div class="flex gap-3 items-center">
                        <img :src="`${store.appendUrl}CardsList/Card-4/icon-music.svg`" alt="icon" class="h-10">

                        <div class="flex flex-col gap-0.5">
                            <h3 class="font-bold tracking-tight text-sm text-slate-700">
                                Annual Plan
                            </h3>
                            <p class="text-sm text-slate-400 lining-nums font-medium">
                                $59.99/year
                            </p>
                        </div>
                    </div>

                    <a class="text-xs font-bold underline underline-red-900 text-red-900 tracking-wide cursor-pointer">Change</a>
                </div>

                <button type="button" class="bg-red-700 text-white text-center py-2 rounded text-sm font-medium hover:bg-red-600">
                    Proceed to Payment
                </button>

                <a class="text-sm font-semibold text-center text-slate-500 cursor-pointer">Cancel Order</a>
                
            </div>

        </div>
                     
        <div class="rounded-xl box-shadow shadow-xl overflow-hidden w-80">

            <img :src="`${store.appendUrl}CardsList/Card-4/umbrella.jpg`" alt="umbrella" class="object-cover h-40 w-full">

            <div class="px-5 pt-10 pb-5 flex flex-col gap-5">
                <h2 class="text-center font-bold text-2xl tracking-tight text-slate-700">
                    Order Summary
                </h2>

                <p class="text-sm text-slate-500 text-center">
                    You can now listen to millions of songs, audiobooks and podcasts on any device anywhere you like!
                </p>

                <div class="flex bg-slate-100 p-3 justify-between items-center rounded">
                    
                    <div class="flex gap-3 items-center">
                        <img :src="`${store.appendUrl}CardsList/Card-4/icon-music.svg`" alt="icon" class="h-10">

                        <div class="flex flex-col gap-0.5">
                            <h3 class="font-bold tracking-tight text-sm text-slate-700">
                                Annual Plan
                            </h3>
                            <p class="text-sm text-slate-400 lining-nums font-medium">
                                $59.99/year
                            </p>
                        </div>
                    </div>

                    <a class="text-xs font-bold underline underline-blue-900 text-blue-900 tracking-wide cursor-pointer">Change</a>
                </div>

                <button type="button" class="bg-blue-700 text-white text-center py-2 rounded text-sm font-medium hover:bg-blue-600">
                    Proceed to Payment
                </button>

                <a class="text-sm font-semibold text-center text-slate-500 cursor-pointer">Cancel Order</a>
                
            </div>

        </div>
        
    </div>


</main>
</template>