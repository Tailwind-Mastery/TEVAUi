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
        3-NFT Card Component
    </h1>

    <div class="grid md:grid-cols-3 grid-cols-1 gap-5">
        
        <div class="flex flex-col gap-2 p-3 rounded-md bg-gradient-to-tr from-blue-900 via-indigo-900 to-black shadow-lg w-52">
            <img :src="`${store.appendUrl}CardsList/Card-3/nft.jpg`" alt="nft" class="object-cover rounded-md">
            <h2 class="font-medium text-sm text-white">
                Equilibrium #3429
            </h2>
            <p class="text-xs tracking-tight text-white">
                Our Equilibrium collection promotes balance and calm
            </p>
            <div class="flex justify-between border-b border-slate-500 py-2">
                <p class="flex gap-1 items-center">
                    <img :src="`${store.appendUrl}CardsList/Card-3/ethereum.svg`" alt="ethereum" class="h-4">
                    <span class="lining-nums tracking-tight font-bold text-cyan-400 text-xs font-mono">
                        2.014ETH
                    </span>
                </p>
                <p class="flex gap-1 items-center">
                    <img :src="`${store.appendUrl}CardsList/Card-3/clock.svg`" alt="clock" class="h-4">
                    <span class="lining-nums tracking-tight font-bold text-slate-400 text-xs">
                        3 days left
                    </span>
                </p>
            </div>
            <div class="flex gap-2 items-center">
                <img :src="`${store.appendUrl}CardsList/Card-3/avatar.png`" alt="avatar" class="h-10">
                <p class="flex gap-2">
                    <span class="tracking-tight text-slate-400 text-xs">
                        Creation of
                    </span>
                    <span class="font-bold text-slate-200 text-xs cursor-pointer hover:text-cyan-400">
                        John Doe
                    </span>
                </p>
            </div>
        </div>
        
        <div class="flex flex-col gap-2 p-3 rounded-md bg-gradient-to-tl from-blue-900 via-indigo-900 to-black shadow-lg w-52">
            <img :src="`${store.appendUrl}CardsList/Card-3/nft.jpg`" alt="nft" class="object-cover rounded-md">
            <h2 class="font-medium text-sm text-white">
                Equilibrium #3429
            </h2>
            <p class="text-xs tracking-tight text-white">
                Our Equilibrium collection promotes balance and calm
            </p>
            <div class="flex justify-between border-b border-slate-500 py-2">
                <p class="flex gap-1 items-center">
                    <img :src="`${store.appendUrl}CardsList/Card-3/ethereum.svg`" alt="ethereum" class="h-4">
                    <span class="lining-nums tracking-tight font-bold text-cyan-400 text-xs font-mono">
                        2.014ETH
                    </span>
                </p>
                <p class="flex gap-1 items-center">
                    <img :src="`${store.appendUrl}CardsList/Card-3/clock.svg`" alt="clock" class="h-4">
                    <span class="lining-nums tracking-tight font-bold text-slate-400 text-xs">
                        3 days left
                    </span>
                </p>
            </div>
            <div class="flex gap-2 items-center">
                <img :src="`${store.appendUrl}CardsList/Card-3/avatar.png`" alt="avatar" class="h-10">
                <p class="flex gap-2">
                    <span class="tracking-tight text-slate-400 text-xs">
                        Creation of
                    </span>
                    <span class="font-bold text-slate-200 text-xs cursor-pointer hover:text-cyan-400">
                        John Doe
                    </span>
                </p>
            </div>
        </div>

        <div class="flex flex-col gap-2 p-3 rounded-md bg-gradient-to-t from-blue-900 via-indigo-900 to-black shadow-lg w-52">
            <img :src="`${store.appendUrl}CardsList/Card-3/nft.jpg`" alt="nft" class="object-cover rounded-md">
            <h2 class="font-medium text-sm text-white">
                Equilibrium #3429
            </h2>
            <p class="text-xs tracking-tight text-white">
                Our Equilibrium collection promotes balance and calm
            </p>
            <div class="flex justify-between border-b border-slate-500 py-2">
                <p class="flex gap-1 items-center">
                    <img :src="`${store.appendUrl}CardsList/Card-3/ethereum.svg`" alt="ethereum" class="h-4">
                    <span class="lining-nums tracking-tight font-bold text-cyan-400 text-xs">
                        2.014ETH
                    </span>
                </p>
                <p class="flex gap-1 items-center">
                    <img :src="`${store.appendUrl}CardsList/Card-3/clock.svg`" alt="clock" class="h-4">
                    <span class="lining-nums tracking-tight font-bold text-slate-400 text-xs">
                        3 days left
                    </span>
                </p>
            </div>
            <div class="flex gap-2 items-center">
                <img :src="`${store.appendUrl}CardsList/Card-3/avatar.png`" alt="avatar" class="h-10">
                <p class="flex gap-2">
                    <span class="tracking-tight text-slate-400 text-xs">
                        Creation of
                    </span>
                    <span class="font-bold text-slate-200 text-xs cursor-pointer hover:text-cyan-400">
                        John Doe
                    </span>
                </p>
            </div>
        </div>

        <div class="flex flex-col gap-2 p-3 rounded-md bg-gradient-to-b from-red-900 via-indigo-900 to-blue-900 shadow-lg w-52">
            <img :src="`${store.appendUrl}CardsList/Card-3/nft.jpg`" alt="nft" class="object-cover rounded-md">
            <h2 class="font-medium text-sm text-white">
                Equilibrium #3429
            </h2>
            <p class="text-xs tracking-tight text-white">
                Our Equilibrium collection promotes balance and calm
            </p>
            <div class="flex justify-between border-b border-slate-500 py-2">
                <p class="flex gap-1 items-center">
                    <img :src="`${store.appendUrl}CardsList/Card-3/ethereum.svg`" alt="ethereum" class="h-4">
                    <span class="lining-nums tracking-tight font-bold text-cyan-400 text-xs">
                        2.014ETH
                    </span>
                </p>
                <p class="flex gap-1 items-center">
                    <img :src="`${store.appendUrl}CardsList/Card-3/clock.svg`" alt="clock" class="h-4">
                    <span class="lining-nums tracking-tight font-bold text-slate-400 text-xs">
                        3 days left
                    </span>
                </p>
            </div>
            <div class="flex gap-2 items-center">
                <img :src="`${store.appendUrl}CardsList/Card-3/avatar.png`" alt="avatar" class="h-10">
                <p class="flex gap-2">
                    <span class="tracking-tight text-slate-400 text-xs">
                        Creation of
                    </span>
                    <span class="font-bold text-slate-200 text-xs cursor-pointer hover:text-cyan-400">
                        John Doe
                    </span>
                </p>
            </div>
        </div>
        
        <div class="flex flex-col gap-2 p-3 rounded-md bg-gradient-to-br from-red-900 via-indigo-900 to-blue-900 shadow-lg w-52">
            <img :src="`${store.appendUrl}CardsList/Card-3/nft.jpg`" alt="nft" class="object-cover rounded-md">
            <h2 class="font-medium text-sm text-white">
                Equilibrium #3429
            </h2>
            <p class="text-xs tracking-tight text-white">
                Our Equilibrium collection promotes balance and calm
            </p>
            <div class="flex justify-between border-b border-slate-500 py-2">
                <p class="flex gap-1 items-center">
                    <img :src="`${store.appendUrl}CardsList/Card-3/ethereum.svg`" alt="ethereum" class="h-4">
                    <span class="lining-nums tracking-tight font-bold text-cyan-400 text-xs">
                        2.014ETH
                    </span>
                </p>
                <p class="flex gap-1 items-center">
                    <img :src="`${store.appendUrl}CardsList/Card-3/clock.svg`" alt="clock" class="h-4">
                    <span class="lining-nums tracking-tight font-bold text-slate-400 text-xs">
                        3 days left
                    </span>
                </p>
            </div>
            <div class="flex gap-2 items-center">
                <img :src="`${store.appendUrl}CardsList/Card-3/avatar.png`" alt="avatar" class="h-10">
                <p class="flex gap-2">
                    <span class="tracking-tight text-slate-400 text-xs">
                        Creation of
                    </span>
                    <span class="font-bold text-slate-200 text-xs cursor-pointer hover:text-cyan-400">
                        John Doe
                    </span>
                </p>
            </div>
        </div>
               
        <div class="flex flex-col gap-2 p-3 rounded-md bg-gradient-to-bl from-red-900 via-indigo-900 to-blue-900 shadow-lg w-52">
            <img :src="`${store.appendUrl}CardsList/Card-3/nft.jpg`" alt="nft" class="object-cover rounded-md">
            <h2 class="font-medium text-sm text-white">
                Equilibrium #3429
            </h2>
            <p class="text-xs tracking-tight text-white">
                Our Equilibrium collection promotes balance and calm
            </p>
            <div class="flex justify-between border-b border-slate-500 py-2">
                <p class="flex gap-1 items-center">
                    <img :src="`${store.appendUrl}CardsList/Card-3/ethereum.svg`" alt="ethereum" class="h-4">
                    <span class="lining-nums tracking-tight font-bold text-cyan-400 text-xs">
                        2.014ETH
                    </span>
                </p>
                <p class="flex gap-1 items-center">
                    <img :src="`${store.appendUrl}CardsList/Card-3/clock.svg`" alt="clock" class="h-4">
                    <span class="lining-nums tracking-tight font-bold text-slate-400 text-xs">
                        3 days left
                    </span>
                </p>
            </div>
            <div class="flex gap-2 items-center">
                <img :src="`${store.appendUrl}CardsList/Card-3/avatar.png`" alt="avatar" class="h-10">
                <p class="flex gap-2">
                    <span class="tracking-tight text-slate-400 text-xs">
                        Creation of
                    </span>
                    <span class="font-bold text-slate-200 text-xs cursor-pointer hover:text-cyan-400">
                        John Doe
                    </span>
                </p>
            </div>
        </div>
                       
        <div class="flex flex-col gap-2 p-3 rounded-md shadow-xl border w-52">
            <img :src="`${store.appendUrl}CardsList/Card-3/nft.jpg`" alt="nft" class="object-cover rounded-md">
            <h2 class="font-medium text-sm text-blue-900">
                Equilibrium #3429
            </h2>
            <p class="text-xs tracking-tight text-blue-500">
                Our Equilibrium collection promotes balance and calm
            </p>
            <div class="flex justify-between border-b border-slate-300 py-2">
                <p class="flex gap-1 items-center">
                    <img :src="`${store.appendUrl}CardsList/Card-3/ethereum.svg`" alt="ethereum" class="h-4">
                    <span class="lining-nums tracking-tight font-bold text-cyan-400 text-xs">
                        2.014ETH
                    </span>
                </p>
                <p class="flex gap-1 items-center">
                    <img :src="`${store.appendUrl}CardsList/Card-3/clock.svg`" alt="clock" class="h-4">
                    <span class="lining-nums tracking-tight font-bold text-slate-400 text-xs">
                        3 days left
                    </span>
                </p>
            </div>
            <div class="flex gap-2 items-center">
                <img :src="`${store.appendUrl}CardsList/Card-3/avatar.png`" alt="avatar" class="h-10">
                <p class="flex gap-2">
                    <span class="tracking-tight text-slate-500 text-xs">
                        Creation of
                    </span>
                    <span class="font-bold text-blue-500 text-xs cursor-pointer hover:text-cyan-400">
                        John Doe
                    </span>
                </p>
            </div>
        </div>
                             
        <div class="flex flex-col gap-2 p-3 rounded-md shadow-xl border w-52">
            <img :src="`${store.appendUrl}CardsList/Card-3/nft.jpg`" alt="nft" class="object-cover rounded-md">
            <h2 class="font-medium text-sm text-red-900">
                Equilibrium #3429
            </h2>
            <p class="text-xs tracking-tight text-red-500">
                Our Equilibrium collection promotes balance and calm
            </p>
            <div class="flex justify-between border-b border-slate-300 py-2">
                <p class="flex gap-1 items-center">
                    <img :src="`${store.appendUrl}CardsList/Card-3/ethereum.svg`" alt="ethereum" class="h-4">
                    <span class="lining-nums tracking-tight font-bold text-cyan-400 text-xs">
                        2.014ETH
                    </span>
                </p>
                <p class="flex gap-1 items-center">
                    <img :src="`${store.appendUrl}CardsList/Card-3/clock.svg`" alt="clock" class="h-4">
                    <span class="lining-nums tracking-tight font-bold text-slate-400 text-xs">
                        3 days left
                    </span>
                </p>
            </div>
            <div class="flex gap-2 items-center">
                <img :src="`${store.appendUrl}CardsList/Card-3/avatar.png`" alt="avatar" class="h-10">
                <p class="flex gap-2">
                    <span class="tracking-tight text-slate-500 text-xs">
                        Creation of
                    </span>
                    <span class="font-bold text-red-500 text-xs cursor-pointer hover:text-cyan-400">
                        John Doe
                    </span>
                </p>
            </div>
        </div>
                                     
        <div class="flex flex-col gap-2 p-3 rounded-md shadow-xl border w-52">
            <img :src="`${store.appendUrl}CardsList/Card-3/nft.jpg`" alt="nft" class="object-cover rounded-md">
            <h2 class="font-medium text-sm text-cyan-900">
                Equilibrium #3429
            </h2>
            <p class="text-xs tracking-tight text-cyan-500">
                Our Equilibrium collection promotes balance and calm
            </p>
            <div class="flex justify-between border-b border-slate-300 py-2">
                <p class="flex gap-1 items-center">
                    <img :src="`${store.appendUrl}CardsList/Card-3/ethereum.svg`" alt="ethereum" class="h-4">
                    <span class="lining-nums tracking-tight font-bold text-cyan-400 text-xs">
                        2.014ETH
                    </span>
                </p>
                <p class="flex gap-1 items-center">
                    <img :src="`${store.appendUrl}CardsList/Card-3/clock.svg`" alt="clock" class="h-4">
                    <span class="lining-nums tracking-tight font-bold text-slate-400 text-xs">
                        3 days left
                    </span>
                </p>
            </div>
            <div class="flex gap-2 items-center">
                <img :src="`${store.appendUrl}CardsList/Card-3/avatar.png`" alt="avatar" class="h-10">
                <p class="flex gap-2">
                    <span class="tracking-tight text-slate-500 text-xs">
                        Creation of
                    </span>
                    <span class="font-bold text-cyan-500 text-xs cursor-pointer hover:text-blue-500">
                        John Doe
                    </span>
                </p>
            </div>
        </div>
        
    </div>


</main>
</template>