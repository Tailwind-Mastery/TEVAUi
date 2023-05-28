<script>
import { useStore } from "../../store";

export default {
  data() {
    return {
      store: useStore(),
      result1: false,
      result2: false,
    }
  },
  methods: {
    changeResult1(){
        this.result1 = !this.result1;
    },
    changeResult2(){
        this.result2 = !this.result2;
    }
  }
}
</script>
<template>
<main class="flex flex-col items-center gap-5 py-5">

    <h1 class="font-serif md:text-2xl text-xl mx-4 text-center lining-nums">
        2-Interactive Card Details Form
    </h1>

   <div class="flex md:flex-row flex-col md:border border-b md:rounded-md overflow-hidden md:w-5/6 w-full">
        <div class="flex relative xl:w-3/5 md:w-1/2 w-full">
            
            <img :src="`${store.appendUrl}FormsList/Form-1/purple.jpg`" alt="purple" class="object-cover w-full md:h-[35rem] h-60">
        
            <div class="absolute top-1/4 lg:block hidden">
                <div :style="`background-image: url('${store.appendUrl}FormsList/Form-1/bg-card-front-1.png')`" class="w-80 h-44 rounded-md relative xl:left-52 left-20 bottom-10 flex flex-col justify-around bg-center">

                    <div class="flex items-center gap-3 pl-5">
                        <span class="block w-10 h-10 bg-white rounded-full"></span>
                        <span class="block w-5 h-5 border border-white rounded-full"></span>
                    </div>
                    <div class="gap-2 px-4">
                        <p class="text-white text-2xl font-semibold">9591 6489 6389 101E</p>
                        <p class="text-white  text-sm font-sans-serif font-medium">Mountain Goat</p>
                        <p class="text-white text-right text-sm font-mono font-medium lining-nums">09/11</p>

                    </div>

                </div>
                
                <img :src="`${store.appendUrl}FormsList/Form-1/bg-card-back.png`" alt="Card Back" class="animate-pulse w-80 h-44  relative xl:left-20 left-10 top-5">

            </div>
            
        </div>

        <div class="bg-white flex justify-center items-center p-5 border xl:w-2/5 md:w-1/2">
            <form class="flex flex-col gap-5 oneForm w-full h-full justify-around" :class="{'hidden' : result1}">
                <div class="flex flex-col gap-1">
                    <label for="name1" class="text-xs font-semibold font-serif tracking-widest">CARDHOLDER NAME</label>
                    <input type="text" value="Mountain Goat" name="name" id="name1" class="rounded-md outline-none border border-2 border-purple-700 p-3 font-medium focus:border-blue-700">
                    <span class="text-xs text-green-500 font-medium font-sans-serif">Name is approved</span>
                </div>
                <div class="flex flex-col gap-1">
                    <label for="card-number1" class="text-xs font-semibold font-serif tracking-widest">CARD NUMBER</label>
                    <input type="text" value="9591 6489 6389 101E" name="card-number" id="card-number1" class="rounded-md outline-none border border-2 border-purple-700 p-3 font-medium focus:border-blue-700">
                    <span class="text-xs text-red-500 font-medium font-sans-serif">Wrong format, numbers only</span>
                </div>
                <div class="flex flex-col gap-1">
                    <label for="cvc1" class="text-xs font-semibold font-serif tracking-widest">C.V.C</label>
                    <input type="text" placeholder="e.g. 123456" name="cvc1" id="cvc1" class="rounded-md outline-none border border-2 border-purple-700 p-3 font-medium focus:border-blue-700">
                    <span class="text-xs text-red-500 font-medium font-sans-serif">Can't be blak</span>
                </div>
                <div class="flex flex-col gap-2">

                    <h2 class="text-xs font-semibold font-serif tracking-widest">EXP. DATE ( <label for="month1">MM</label> / <label for="year1">YY</label> )</h2>

                    <div class="flex gap-2">
                        <div class="flex flex-col gap-1">
                            <input type="number" name="month" id="month1" class="rounded-md outline-none border border-2 border-purple-700 p-3 font-medium focus:border-blue-700 w-24">

                            <span class="text-xs text-red-500 font-medium font-sans-serif">Can't be blank</span>

                        </div>
                        <div class="flex flex-col gap-1">
                            <input type="number" name="year" id="year1" class="rounded-md outline-none border border-2 border-purple-700 p-3 font-medium focus:border-blue-700 w-20">
                            <span class="text-xs text-red-500 font-medium font-sans-serif">Can't be blank</span>

                        </div>
                    </div>
                </div>

                <div class="flex flex-col">
                    <button type="button" @click="changeResult1" class="oneFormButton outline-none bg-violet-900 text-white font-medium text-md py-3 w-full rounded-md">Confirm</button>
                </div>
            </form>

            <div class="flex flex-col gap-3 items-center" :class="{'hidden' : !result1}">
                <svg width="80" height="80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="40" cy="40" r="40" fill="url(#a)"/>
                    <path d="M28 39.92 36.08 48l16-16" stroke="#fff" stroke-width="3"/>
                    <defs><linearGradient id="a" x1="-23.014" y1="11.507" x2="0" y2="91.507" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#6348FE"/>
                        <stop offset="1" stop-color="#610595"/>
                    </linearGradient></defs>
                </svg>
                
                <p class="text-xl font-medium tracking-wider">THANK YOU!</p>
                <p class="text-sm font-medium text-gray-500">We've added your card details.</p>
                <button type="button" @click="changeResult1" class="p-3 outline-none bg-violet-900 text-white font-medium text-md w-full rounded-md">Continue</button>
            </div>
            
        </div>
    </div>

   <div class="flex md:flex-row flex-col md:border border-b md:rounded-md overflow-hidden md:w-5/6 w-full">
        <div class="flex relative xl:w-3/5 md:w-1/2 w-full">
            
            <img :src="`${store.appendUrl}FormsList/Form-1/black.jpg`" alt="black" class="object-cover w-full md:h-[35rem] h-60">
        
            <div class="absolute top-1/4 lg:block hidden">
                <div :style="`background-image: url('${store.appendUrl}FormsList/Form-1/bg-card-front-2.jpg')`" class="w-80 h-44 rounded-md relative xl:left-52 left-20 bottom-10 flex flex-col justify-around bg-center">

                    <div class="flex items-center gap-3 pl-5">
                        <span class="block w-10 h-10 bg-white rounded-full"></span>
                        <span class="block w-5 h-5 border border-white rounded-full"></span>
                    </div>
                    <div class="gap-2 px-4">
                        <p class="text-white text-2xl font-semibold">9591 6489 6389 101E</p>
                        <p class="text-white  text-sm font-sans-serif font-medium">Mountain Goat</p>
                        <p class="text-white text-right text-sm font-mono font-medium lining-nums">09/11</p>

                    </div>

                </div>
                
                <img :src="`${store.appendUrl}FormsList/Form-1/bg-card-back.png`" alt="Card Back" class="animate-pulse w-80 h-44  relative xl:left-20 left-10 top-5">

            </div>
            
        </div>

        <div class="bg-white flex justify-center items-center p-5 border xl:w-2/5 md:w-1/2">
            <form class="flex flex-col gap-5 oneForm w-full h-full justify-around" :class="{'hidden' : result2}">
                <div class="flex flex-col gap-1">
                    <label for="name2" class="text-xs font-semibold font-serif tracking-widest">CARDHOLDER NAME</label>
                    <input type="text" value="Mountain Goat" name="name" id="name2" class="rounded-md outline-none border border-2 border-slate-400 p-3 font-medium focus:border-black">
                    <span class="text-xs text-green-500 font-medium font-sans-serif">Name is approved</span>
                </div>
                <div class="flex flex-col gap-1">
                    <label for="card-number2" class="text-xs font-semibold font-serif tracking-widest">CARD NUMBER</label>
                    <input type="text" value="9591 6489 6389 101E" name="card-number2" id="card-number2" class="rounded-md outline-none border border-2 border-slate-400 p-3 font-medium focus:border-black">
                    <span class="text-xs text-red-500 font-medium font-sans-serif">Wrong format, numbers only</span>
                </div>
                <div class="flex flex-col gap-1">
                    <label for="cvc2" class="text-xs font-semibold font-serif tracking-widest">C.V.C</label>
                    <input type="text" placeholder="e.g. 123456" name="cvc2" id="cvc2" class="rounded-md outline-none border border-2 border-slate-400 p-3 font-medium focus:border-black">
                    <span class="text-xs text-red-500 font-medium font-sans-serif">Can't be blak</span>
                </div>
                <div class="flex flex-col gap-2">

                    <h2 class="text-xs font-semibold font-serif tracking-widest">EXP. DATE ( <label for="month2">MM</label> / <label for="year2">YY</label> )</h2>

                    <div class="flex gap-2">
                        <div class="flex flex-col gap-1">
                            <input type="number" name="month" id="month2" class="rounded-md outline-none border border-2 border-slate-400 p-3 font-medium focus:border-black w-24">

                            <span class="text-xs text-red-500 font-medium font-sans-serif">Can't be blank</span>

                        </div>
                        <div class="flex flex-col gap-1">
                            <input type="number" name="year" id="year2" class="rounded-md outline-none border border-2 border-slate-400 p-3 font-medium focus:border-black w-20">
                            <span class="text-xs text-red-500 font-medium font-sans-serif">Can't be blank</span>

                        </div>
                    </div>
                </div>

                <div class="flex flex-col">
                    <button type="button" @click="changeResult2" class="outline-none bg-black text-white font-medium text-md py-3 w-full rounded-md">Confirm</button>
                </div>
            </form>

            <div class="flex flex-col gap-3 items-center" :class="{'hidden' : !result2}">
                <svg width="80" height="80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="40" cy="40" r="40" fill="url(#b)"/>
                    <path d="M28 39.92 36.08 48l16-16" stroke="#fff" stroke-width="3"/>
                    <defs><linearGradient id="b" x1="-23.014" y1="11.507" x2="0" y2="91.507" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#504e54"/>
                        <stop offset="1" stop-color="#000"/>
                    </linearGradient></defs>
                </svg>
                
                <p class="text-xl font-medium tracking-wider">THANK YOU!</p>
                <p class="text-sm font-medium text-gray-500">We've added your card details.</p>
                <button type="button" @click="changeResult2" class="p-3 outline-none bg-black text-white font-medium text-md w-full rounded-md">Continue</button>
            </div>
            
        </div>
    </div>

</main>
</template>