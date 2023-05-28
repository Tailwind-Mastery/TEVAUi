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
        2-QR Code Card Component
    </h1>

    <div class="grid md:grid-cols-2 grid-cols-1 gap-5">
        <div class="flex flex-col gap-2 p-3 rounded-md bg-white shadow-lg w-52">
            <img :src="`${store.appendUrl}CardsList/Card-2/code.png`" alt="code" class="object-cover rounded-md">
            <h2 class="font-medium text-sm text-center">
                Scan your QR Code to get various types of oppurtinites
            </h2>
            <p class="text-slate-500 text-xs tracking-tight text-center">
                Scan the QR Code to visit Your Personal Website and make your life Easy And Quick !
            </p>
        </div>
        <div class="flex flex-col gap-2 p-3 rounded-md bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg w-52">
            <img :src="`${store.appendUrl}CardsList/Card-2/code.png`" alt="code" class="object-cover rounded-md">
            <h2 class="font-medium text-sm text-center text-white">
                Scan your QR Code to get various types of oppurtinites
            </h2>
            <p class="text-white/75 text-xs tracking-tight text-center">
                Scan the QR Code to visit Your Personal Website and make your life Easy And Quick !
            </p>
        </div>
    </div>


</main>
</template>