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
        1-Product Preview Card Component
    </h1>

    <section class="flex flex-col md:flex-row md:rounded-md md:overflow-hidden md:w-5/6 md:border border-b bg-white md:max-w-3xl">
        
        <img :src="`${store.appendUrl}CardsList/Card-1/perfume.jpg`" alt="perfume" class="object-cover md:w-1/2 w-full md:h-[30rem] h-60">
        
        <div class="flex flex-col md:w-1/2 justify-around md:gap-5 gap-3 p-5">
            <h2 class="text-xl font-sans-serif tracking-widest text-neutral-300 font-medium">PERFUME</h2>
            
            <h2 class="text-4xl font-serif font-black">The Perfume Fragrance Beauty</h2>
            
            <p class="text-neutral-400 font-medium">
                A floral, solar and voluptous interpretation composed by Mountain Goat, Castle creator for the Glass Castle CHANEL.
            </p>
            
            <div class="flex justify-left items-center">
                <h2 class="text-4xl font-black font-serif pr-5 lining-nums text-green-700">$149.99</h2>
                
                <span class="line-through text-sm text-neutral-400 font-medium">$169.99</span>
            </div>
            
            <button class="text-white w-full font-medium font-sans-serif bg-green-900 hover:bg-green-800 flex gap-2 justify-center items-center py-4 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>

                <span>Add to Cart</span>
            </button>
        </div>
    </section>

    <section class="flex flex-col md:flex-row md:rounded-md md:overflow-hidden md:w-5/6 md:border border-b bg-white md:max-w-3xl">
        
        <img :src="`${store.appendUrl}CardsList/Card-1/shampoo.jpg`" alt="shampoo" class="object-cover md:w-1/2 w-full md:h-[30rem] h-60">

        <div class="flex flex-col md:w-1/2 justify-around md:gap-5 gap-3 p-5">
            <h2 class="text-xl font-sans-serif tracking-widest text-neutral-300 font-medium ">SHAMPOO</h2>
            
            <h2 class="text-4xl font-serif font-black">The Vanilla Shampoo Extract</h2>
            
            <p class="text-neutral-400 font-medium">
                An aromatic, extract and relaxing combination composed by Mountain Goat, Castle creator for the Glass Castle CHANEL.
            </p>
            
            <div class="flex justify-left items-center">
                <h2 class="text-4xl font-black font-serif pr-5 lining-nums text-amber-700">$149.99</h2>
                
                <span class="line-through text-sm text-neutral-400 font-medium">$169.99</span>
            </div>
            
            <button class="text-white w-full font-medium font-sans-serif bg-amber-800 hover:bg-amber-700 flex gap-2 justify-center items-center py-4 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>

                <span>Add to Cart</span>
            </button>
        </div>
    </section>

    <section class="flex flex-col md:flex-row md:rounded-md md:overflow-hidden md:w-5/6 md:border border-b bg-white md:max-w-3xl">
        
        <img :src="`${store.appendUrl}CardsList/Card-1/car.jpg`" alt="car" class="object-cover md:w-1/2 w-full md:h-[30rem] h-60">
        
        <div class="flex flex-col md:w-1/2 justify-around md:gap-5 gap-3 p-5">
            <h2 class="text-xl font-sans-serif tracking-widest text-neutral-300 font-medium">VEHICLE</h2>
            
            <h2 class="text-4xl font-serif font-black">The Amazing Dragon Painter</h2>
            
            <p class="text-neutral-400 font-medium">
                A top-class, high-velocity and comfortable combination composed by Mountain Goat, Castle creator for the Glass Castle CHANEL.
            </p>
            
            <div class="flex justify-left items-center">
                <h2 class="text-4xl font-black font-serif pr-5 lining-nums text-blue-700">$149.99</h2>
                
                <span class="line-through text-sm text-neutral-400 font-medium">$169.99</span>
            </div>
            
            <button class="text-white w-full font-medium font-sans-serif bg-blue-800  hover:bg-blue-700 flex gap-2  justify-center items-center py-4 rounded-md">

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>

                <span>Add to Cart</span>
            </button>
        </div>
    </section>

</main>
</template>