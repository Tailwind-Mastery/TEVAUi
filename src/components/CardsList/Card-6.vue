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
        6-Three Column Preview Card Component
    </h1>

    <div class="flex flex-col gap-10 md:px-2">

        <div class="flex md:rounded-md md:overflow-hidden md:flex-row flex-col max-w-3xl">

            <div class="flex flex-col items-start p-8 gap-5 bg-yellow-600 md:w-1/3">

                <img :src="`${store.appendUrl}CardsList/Card-6/icon-sedans.svg`" alt="sedans" class="h-10 object-contain">
                <h2 class="font-serif text-xl uppercase text-white font-medium">
                    sedans
                </h2>

                <div class="flex flex-col justify-between gap-10 items-start">
                    <p class="text-slate-200 text-sm tracking-tight">
                        Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.
                    </p>
                    <button type="button" class="capitalize text-yellow-600 bg-white rounded px-4 py-2 text-sm font-medium border-2 border-white hover:text-white hover:bg-yellow-600 ">
                        learn more
                    </button>
                </div>
            </div>

            <div class="flex flex-col items-start p-8 gap-5 bg-cyan-800 md:w-1/3">

                <img :src="`${store.appendUrl}CardsList/Card-6/icon-suvs.svg`" alt="suvs" class="h-10 object-contain">
                <h2 class="font-serif text-xl uppercase text-white font-medium">
                    suvs
                </h2>
                <div class="flex flex-col justify-between gap-10 items-start">
                    
                    <p class="text-slate-200 text-sm tracking-tight">
                        Take an SUV, for its spacious interior, power and versality. Perfect for your next family vacation and off-road adventures.
                    </p>
                    <button type="button" class="capitalize text-cyan-800 bg-white rounded px-4 py-2 text-sm font-medium border-2 border-white hover:text-white hover:bg-cyan-800 ">
                        learn more
                    </button>
                </div>
            </div>

            <div class="flex flex-col items-start p-8 gap-5 bg-green-900 md:w-1/3">

                <img :src="`${store.appendUrl}CardsList/Card-6/icon-luxury.svg`" alt="luxury" class="h-10 object-contain">
                <h2 class="font-serif text-xl uppercase text-white font-medium">
                    luxury
                </h2>

                <div class="flex flex-col justify-between gap-10 items-start h-full">
                    <p class="text-slate-200 text-sm tracking-tight">
                        Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.
                    </p>
                    <button type="button" class="capitalize text-green-900 bg-white rounded px-4 py-2 text-sm font-medium border-2 border-white hover:text-white hover:bg-green-900 ">
                        learn more
                    </button>
                </div>
            </div>
            
        </div>

        <div class="flex md:rounded-md md:overflow-hidden md:flex-row flex-col max-w-3xl">

            <div class="flex flex-col items-start p-8 gap-5 bg-orange-600 md:w-1/3">

                <img :src="`${store.appendUrl}CardsList/Card-6/icon-sedans.svg`" alt="sedans" class="h-10 object-contain">
                <h2 class="font-serif text-xl uppercase text-white font-medium">
                    sedans
                </h2>

                <div class="flex flex-col justify-between gap-10 items-start">
                    <p class="text-slate-200 text-sm tracking-tight">
                        Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.
                    </p>
                    <button type="button" class="capitalize text-orange-600 bg-white rounded px-4 py-2 text-sm font-medium border-2 border-white hover:text-white hover:bg-orange-600 ">
                        learn more
                    </button>
                </div>
            </div>

            <div class="flex flex-col items-start p-8 gap-5 bg-cyan-800 md:w-1/3">

                <img :src="`${store.appendUrl}CardsList/Card-6/icon-suvs.svg`" alt="suvs" class="h-10 object-contain">
                <h2 class="font-serif text-xl uppercase text-white font-medium">
                    suvs
                </h2>
                <div class="flex flex-col justify-between gap-10 items-start">
                    
                    <p class="text-slate-200 text-sm tracking-tight">
                        Take an SUV, for its spacious interior, power and versality. Perfect for your next family vacation and off-road adventures.
                    </p>
                    <button type="button" class="capitalize text-cyan-800 bg-white rounded px-4 py-2 text-sm font-medium border-2 border-white hover:text-white hover:bg-cyan-800 ">
                        learn more
                    </button>
                </div>
            </div>

            <div class="flex flex-col items-start p-8 gap-5 bg-green-800 md:w-1/3">

                <img :src="`${store.appendUrl}CardsList/Card-6/icon-luxury.svg`" alt="luxury" class="h-10 object-contain">
                <h2 class="font-serif text-xl uppercase text-white font-medium">
                    luxury
                </h2>

                <div class="flex flex-col justify-between gap-10 items-start h-full">
                    <p class="text-slate-200 text-sm tracking-tight">
                        Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.
                    </p>
                    <button type="button" class="capitalize text-green-800 bg-white rounded px-4 py-2 text-sm font-medium border-2 border-white hover:text-white hover:bg-green-800 ">
                        learn more
                    </button>
                </div>
            </div>
            
        </div>

        
        <div class="flex md:rounded-md md:overflow-hidden md:flex-row flex-col max-w-3xl md:divide-x md:divide-y-0 divide-y divide-dotted">

            <div class="flex flex-col items-start p-8 gap-5 bg-black/75 md:w-1/3">

                <img :src="`${store.appendUrl}CardsList/Card-6/icon-sedans.svg`" alt="sedans" class="h-10 object-contain">
                <h2 class="font-serif text-xl uppercase text-white font-medium">
                    sedans
                </h2>

                <div class="flex flex-col justify-between gap-10 items-start">
                    <p class="text-slate-200 text-sm tracking-tight">
                        Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.
                    </p>
                    <button type="button" class="capitalize text-black/75 bg-white rounded px-4 py-2 text-sm font-medium border-2 border-white hover:text-white hover:bg-black/75 ">
                        learn more
                    </button>
                </div>
            </div>

            <div class="flex flex-col items-start p-8 gap-5 bg-black/75 md:w-1/3">

                <img :src="`${store.appendUrl}CardsList/Card-6/icon-suvs.svg`" alt="suvs" class="h-10 object-contain">
                <h2 class="font-serif text-xl uppercase text-white font-medium">
                    suvs
                </h2>
                <div class="flex flex-col justify-between gap-10 items-start">
                    
                    <p class="text-slate-200 text-sm tracking-tight">
                        Take an SUV, for its spacious interior, power and versality. Perfect for your next family vacation and off-road adventures.
                    </p>
                    <button type="button" class="capitalize text-black/75 bg-white rounded px-4 py-2 text-sm font-medium border-2 border-white hover:text-white hover:bg-black/75 ">
                        learn more
                    </button>
                </div>
            </div>

            <div class="flex flex-col items-start p-8 gap-5 bg-black/75 md:w-1/3">

                <img :src="`${store.appendUrl}CardsList/Card-6/icon-luxury.svg`" alt="luxury" class="h-10 object-contain">
                <h2 class="font-serif text-xl uppercase text-white font-medium">
                    luxury
                </h2>

                <div class="flex flex-col justify-between gap-10 items-start h-full">
                    <p class="text-slate-200 text-sm tracking-tight">
                        Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.
                    </p>
                    <button type="button" class="capitalize text-black/75 bg-white rounded px-4 py-2 text-sm font-medium border-2 border-white hover:text-white hover:bg-black/75 ">
                        learn more
                    </button>
                </div>
            </div>
            
        </div>

                
        <div class="flex md:rounded-md md:overflow-hidden md:flex-row flex-col max-w-3xl md:divide-x md:divide-y-0 divide-y border md:shadow-xl">

            <div class="flex flex-col items-start p-8 gap-5 md:w-1/3">

                <img :src="`${store.appendUrl}CardsList/Card-6/icon-sedans.svg`" alt="sedans" class="h-20">
                <h2 class="font-serif text-xl uppercase font-medium">
                    sedans
                </h2>

                <div class="flex flex-col justify-between gap-10 items-start h-full">
                    <p class="text-sm tracking-tight font-medium">
                        Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.
                    </p>
                    <button type="button" class="capitalize bg-white rounded px-4 py-2 text-sm font-medium border-2 border-black hover:text-white hover:bg-black ">
                        learn more
                    </button>
                </div>
            </div>

            <div class="flex flex-col items-start p-8 gap-5 md:w-1/3">

                <img :src="`${store.appendUrl}CardsList/Card-6/icon-suvs.svg`" alt="suvs" class="h-20">
                <h2 class="font-serif text-xl uppercase font-medium">
                    suvs
                </h2>
                <div class="flex flex-col justify-between gap-10 items-start h-full">
                    
                    <p class="font-medium text-sm tracking-tight">
                        Take an SUV, for its spacious interior, power and versality. Perfect for your next family vacation and off-road adventures.
                    </p>
                    <button type="button" class="capitalize rounded px-4 py-2 text-sm font-medium border-2 border-black hover:text-white hover:bg-black">
                        learn more
                    </button>
                </div>
            </div>

            <div class="flex flex-col items-start p-8 gap-5 md:w-1/3">

                <img :src="`${store.appendUrl}CardsList/Card-6/icon-luxury.svg`" alt="luxury" class="h-20">
                <h2 class="font-serif text-xl uppercase font-medium">
                    luxury
                </h2>

                <div class="flex flex-col justify-between gap-10 items-start h-full">
                    <p class="font-medium text-sm tracking-tight">
                        Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.
                    </p>
                    <button type="button" class="capitalize rounded px-4 py-2 text-sm font-medium border-2 border-black hover:text-white hover:bg-black">
                        learn more
                    </button>
                </div>
            </div>
            
        </div>

    </div>

</main>
</template>