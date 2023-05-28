<script>
import { useStore } from "../../store";

export default {
  data() {
    return {
      store: useStore(),
      menuHidden: true,
      abilityHidden: true,
    }
  },  
  methods: {
    showMenu(){
      this.menuHidden = ! this.menuHidden;
    },
    showAbility(){
      this.abilityHidden = ! this.abilityHidden;
    },
  }
}
</script>
<template>
<main class="flex flex-col items-center gap-5 py-5">

  <h1 class="font-serif md:text-2xl text-xl mx-4 text-center lining-nums">
      1-Profile Page
  </h1>


  <div class="flex flex-col gap-10">

    <div class="grid lg:grid-cols-12 grid-cols-1">

        <!-- Column 1 -->
        <div class="lg:col-span-3 grid items-start lg:grid-cols-1 md:grid-cols-2 grid-cols-1 gap-10 bg-cyan-700 text-white border px-5 py-10 lg:h-screen lg:sticky lg:top-0">
            <h1 class="text-xl font-black font-serif text-center tracking-wider lg:col-span-1 md:col-span-2">
                BRIGHT
            </h1>

            <!-- User -->
            <div class="flex gap-5 items-center bg-white lg:px-2 px-10 py-2 lg:col-span-1 md:col-span-2  lg:justify-self-start justify-self-center lg:justify-start lg:w-full justify-center md:w-fit w-full rounded">
                <img :src="`${store.appendUrl}ProfilesList/user.jpg`" alt="user" class="rounded-full w-9 h-9">

                <div class="flex flex-col text-cyan-700 text-sm">
                    <h2 class="font-bold">
                        John Doe
                    </h2>
                    <p class="text-sm tracking-tight">
                        Data Scientist
                    </p>
                </div>
            </div>

            <!-- Menu Icons -->
            <div class="flex flex-col gap-5 text-sm">
                <div class="flex gap-5 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 fill-white">
                        <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd" />
                    </svg>
                    <a class="font-semibold" href="#">
                        Profile
                    </a>
                </div>
                <div class="flex gap-5 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 fill-white">
                        <path fill-rule="evenodd" d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625zM7.5 15a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 017.5 15zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H8.25z" clip-rule="evenodd" />
                        <path d="M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z" />
                    </svg>
                    <a class="font-semibold" href="#">
                        Create Test
                    </a>
                </div>
                <div class="flex gap-5 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 fill-white">
                        <path fill-rule="evenodd" d="M10.5 3.798v5.02a3 3 0 01-.879 2.121l-2.377 2.377a9.845 9.845 0 015.091 1.013 8.315 8.315 0 005.713.636l.285-.071-3.954-3.955a3 3 0 01-.879-2.121v-5.02a23.614 23.614 0 00-3 0zm4.5.138a.75.75 0 00.093-1.495A24.837 24.837 0 0012 2.25a25.048 25.048 0 00-3.093.191A.75.75 0 009 3.936v4.882a1.5 1.5 0 01-.44 1.06l-6.293 6.294c-1.62 1.621-.903 4.475 1.471 4.88 2.686.46 5.447.698 8.262.698 2.816 0 5.576-.239 8.262-.697 2.373-.406 3.092-3.26 1.47-4.881L15.44 9.879A1.5 1.5 0 0115 8.818V3.936z" clip-rule="evenodd" />
                    </svg>
                    <a class="font-semibold" href="#">
                        Test Results
                    </a>
                </div>
                <div class="flex gap-5 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 fill-white">
                        <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 00-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 01-.189-.866c0-.298.059-.605.189-.866zm2.023 6.828a.75.75 0 10-1.06-1.06 3.75 3.75 0 01-5.304 0 .75.75 0 00-1.06 1.06 5.25 5.25 0 007.424 0z" clip-rule="evenodd" />
                      </svg>
                    <a class="font-semibold" href="#">
                        Personality Type
                    </a>
                </div>
                <div class="flex gap-5 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 fill-white">
                        <path fill-rule="evenodd" d="M17.663 3.118c.225.015.45.032.673.05C19.876 3.298 21 4.604 21 6.109v9.642a3 3 0 01-3 3V16.5c0-5.922-4.576-10.775-10.384-11.217.324-1.132 1.3-2.01 2.548-2.114.224-.019.448-.036.673-.051A3 3 0 0113.5 1.5H15a3 3 0 012.663 1.618zM12 4.5A1.5 1.5 0 0113.5 3H15a1.5 1.5 0 011.5 1.5H12z" clip-rule="evenodd" />
                        <path d="M3 8.625c0-1.036.84-1.875 1.875-1.875h.375A3.75 3.75 0 019 10.5v1.875c0 1.036.84 1.875 1.875 1.875h1.875A3.75 3.75 0 0116.5 18v2.625c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625v-12z" />
                        <path d="M10.5 10.5a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963 5.23 5.23 0 00-3.434-1.279h-1.875a.375.375 0 01-.375-.375V10.5z" />
                    </svg>
                    <a class="font-semibold" href="#">
                        Personality Test
                    </a>
                </div>
            </div>

            <!-- Badges -->
            <div class="flex flex-col gap-5">
                <h2 class="text-lg font-bold font-serif tracking-wider">
                    Badges
                </h2>

                <p class="border border-white p-1.5 rounded text-sm font-medium text-center">
                    Top 85% of the TU Delft
                </p>
                <p class="border border-white p-1.5 rounded text-sm font-medium text-center">
                    Top 91% of Amsterdam
                </p>
                <p class="border border-white p-1.5 rounded text-sm font-medium text-center">
                    Top 72% of data scientists
                </p>
                <p class="border border-white p-1.5 rounded text-sm font-medium text-center">
                    Top 93% of the Netherlands
                </p>
            </div>
        </div>

        <!-- Column 2 -->
        <div class="lg:col-span-9 grid md:grid-cols-9 grid-cols-1 bg-orange-50 p-5 gap-5">

            <!-- Column 2.1 -->
            <div class="md:col-span-9 grid md:grid-cols-9 gap-5 text-cyan-700">
                
                <!-- profile page -->
                <div class="md:col-span-6 flex md:flex-row flex-col md:justify-between gap-5 items-start">
                    <div class="flex flex-col gap-5">
                        <h2 class="text-xl font-serif font-black tracking-tight">
                            Profile Page
                        </h2>

                        <a class="flex gap-1 items-center" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 stroke-cyan-700">
                                <path fill-rule="evenodd" d="M7.28 7.72a.75.75 0 010 1.06l-2.47 2.47H21a.75.75 0 010 1.5H4.81l2.47 2.47a.75.75 0 11-1.06 1.06l-3.75-3.75a.75.75 0 010-1.06l3.75-3.75a.75.75 0 011.06 0z" clip-rule="evenodd" />
                            </svg>
                            <p class="text-sm">
                                Go Back
                            </p>
                        </a>
                    </div>

                    <div class="flex items-center p-2 gap-1 bg-white rounded text-slate-500 md:w-fit w-full">
                        <input type="text" placeholder="search" class="outline-none px-2 bg-transparent w-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 stroke-cyan-700">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    </div>
                </div>

                <!-- notification -->
                <div class="md:col-span-3 flex-col">

                    <!-- Search -->
                    <div class="flex justify-between items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 fill-orange-700">
                            <path fill-rule="evenodd" d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z" clip-rule="evenodd" />
                        </svg>

                        <div class="flex items-center gap-4">
                            <img :src="`${store.appendUrl}ProfilesList/user.jpg`" alt="user" class="rounded-full w-9 h-9">
                            <div class="flex gap-4 items-center">
                                <h2 class="font-bold tracking-tight">
                                    John Doe
                                </h2>
                                <svg @click="showMenu" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 fill-cyan-700">
                                    <path fill-rule="evenodd" d="M7.84 1.804A1 1 0 018.82 1h2.36a1 1 0 01.98.804l.331 1.652a6.993 6.993 0 011.929 1.115l1.598-.54a1 1 0 011.186.447l1.18 2.044a1 1 0 01-.205 1.251l-1.267 1.113a7.047 7.047 0 010 2.228l1.267 1.113a1 1 0 01.206 1.25l-1.18 2.045a1 1 0 01-1.187.447l-1.598-.54a6.993 6.993 0 01-1.929 1.115l-.33 1.652a1 1 0 01-.98.804H8.82a1 1 0 01-.98-.804l-.331-1.652a6.993 6.993 0 01-1.929-1.115l-1.598.54a1 1 0 01-1.186-.447l-1.18-2.044a1 1 0 01.205-1.251l1.267-1.114a7.05 7.05 0 010-2.227L1.821 7.773a1 1 0 01-.206-1.25l1.18-2.045a1 1 0 011.187-.447l1.598.54A6.993 6.993 0 017.51 3.456l.33-1.652zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <!-- Hidden Menu -->
                    <div class="flex flex-col bg-white gap-2 px-5 py-2" :class="{'hidden':menuHidden}">

                        <a class="flex gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 fill-cyan-700">
                                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                            </svg>
                            <span class="text-sm">Messages</span>
                        </a>

                        <a class="flex gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 fill-cyan-700">
                                <path fill-rule="evenodd" d="M6.32 1.827a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V19.5a3 3 0 01-3 3H6.75a3 3 0 01-3-3V4.757c0-1.47 1.073-2.756 2.57-2.93zM7.5 11.25a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H8.25a.75.75 0 01-.75-.75v-.008zm.75 1.5a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H8.25zm-.75 3a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H8.25a.75.75 0 01-.75-.75v-.008zm.75 1.5a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V18a.75.75 0 00-.75-.75H8.25zm1.748-6a.75.75 0 01.75-.75h.007a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.007a.75.75 0 01-.75-.75v-.008zm.75 1.5a.75.75 0 00-.75.75v.008c0 .414.335.75.75.75h.007a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75h-.007zm-.75 3a.75.75 0 01.75-.75h.007a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.007a.75.75 0 01-.75-.75v-.008zm.75 1.5a.75.75 0 00-.75.75v.008c0 .414.335.75.75.75h.007a.75.75 0 00.75-.75V18a.75.75 0 00-.75-.75h-.007zm1.754-6a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008zm.75 1.5a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75h-.008zm-.75 3a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008zm.75 1.5a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V18a.75.75 0 00-.75-.75h-.008zm1.748-6a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008zm.75 1.5a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75h-.008zm-8.25-6A.75.75 0 018.25 6h7.5a.75.75 0 01.75.75v.75a.75.75 0 01-.75.75h-7.5a.75.75 0 01-.75-.75v-.75zm9 9a.75.75 0 00-1.5 0V18a.75.75 0 001.5 0v-2.25z" clip-rule="evenodd" />
                              </svg>
                              
                            <span class="text-sm">Calculator</span>
                        </a>

                        <a class="flex gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 fill-cyan-700">
                                <path fill-rule="evenodd" d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm5.03 4.72a.75.75 0 010 1.06l-1.72 1.72h10.94a.75.75 0 010 1.5H10.81l1.72 1.72a.75.75 0 11-1.06 1.06l-3-3a.75.75 0 010-1.06l3-3a.75.75 0 011.06 0z" clip-rule="evenodd" />
                            </svg>
                            <span class="text-sm">Log Out</span>
                        </a>
                        
                    </div>
                </div>
            </div>

            <!-- Column 2.2 -->
            <div class="md:col-span-6 flex flex-col gap-10">
                
                <!-- Profile -->
                <div class="grid md:grid-cols-2 grid-cols-1 items-start bg-white gap-5 p-5">
                    
                    <!-- Name and Image -->
                    <div class="flex gap-2 items-center">
                        <img :src="`${store.appendUrl}ProfilesList/user.jpg`" alt="user" class="object-contain w-24 h-24 rounded-full p-1 border-2 border-dashed">
                        <div class="flex flex-col gap-1">
                            <h2 class="font-bold text-2xl tracking-tighter text-cyan-700">
                                John Doe
                            </h2>
                            <p class="text-xs tracking-tighter text-slate-500">
                                Data scientist, The Netherlands, Brght, International Inc
                            </p>
                        </div>
                    </div>

                    
                    <!-- Link -->
                    <a href="#" class="flex gap-2 py-2 px-3 font-medium border border-cyan-700 rounded text-sm items-center justify-center md:justify-self-end text-cyan-700">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 stroke-cyan-700">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                        </svg>
                        <span class="">
                            Copy link to profile
                        </span>
                    </a>
                    
                    <!-- Information  -->
                    <div class="flex gap-5 flex-col xl:col-span-1 md:col-span-2">

                        <!-- About Me -->
                        <div class="flex flex-col gap-2">
                            <h2 class="text-lg font-bold text-cyan-700">
                                About Me
                            </h2>
                            <p class="text-sm tracking-tighter text-slate-500">
                                I am a data scientist from Amsterdam. I have been working on really nice projects. I am currently not actively looking for a job, but you can always try.
                            </p>
                        </div>

                        <!-- Badges -->
                        <div class="flex flex-col gap-2 text-cyan-700">
                            <h2 class="text-lg font-bold">
                                Badges
                            </h2>
                            <div class="flex flex-wrap gap-2">
                                <p class="border border-cyan-700 p-1.5 rounded text-sm font-medium text-center">
                                    Top 85% of the TU Delft
                                </p>
                                <p class="border border-cyan-700 p-1.5 rounded text-sm font-medium text-center">
                                    Top 91% of Amsterdam
                                </p>
                                <p class="border border-cyan-700 p-1.5 rounded text-sm font-medium text-center">
                                    Top 72% of data scientists
                                </p>
                                <p class="border border-cyan-700 p-1.5 rounded text-sm font-medium text-center">
                                    Top 93% of the Netherlands
                                </p>
                            </div>
                        </div>
                        
                    </div>

                    <!-- Summary -->
                    <div class="flex flex-col xl:col-span-1 md:col-span-2 gap-2">
                        <h2 class="text-lg font-bold text-cyan-700">
                            Summary
                        </h2>

                        <div class="grid grid-cols-2 gap-2 text-sm tracking-tighter">
                            <div class="flex flex-col gap-1">
                                <h2 class="text-slate-500">
                                    Highest Education
                                </h2>
                                <span class="font-bold text-cyan-700">
                                    Master's Degree
                                </span>
                            </div>
                            <div class="flex flex-col gap-1">
                                <h2 class="text-slate-500">
                                    Field of Study
                                </h2>
                                <span class="font-bold text-cyan-700">
                                    Civil Engineering
                                </span>
                            </div>
                            <div class="flex flex-col gap-1">
                                <h2 class="text-slate-500">
                                    Educational Institution
                                </h2>
                                <span class="font-bold text-cyan-700">
                                    TU Delft
                                </span>
                            </div>
                            <div class="flex flex-col gap-1">
                                <h2 class="text-slate-500">
                                    English Proficiency
                                </h2>
                                <span class="font-bold text-cyan-700">
                                    Advanced
                                </span>
                            </div>
                            <div class="flex flex-col gap-1">
                                <h2 class="text-slate-500">
                                    Cognitive Ability Score
                                </h2>
                                <span class="font-bold text-cyan-700">
                                    96%
                                </span>
                            </div>
                            <div class="flex flex-col gap-1">
                                <h2 class="text-slate-500">
                                    Personality Type
                                </h2>
                                <span class="font-bold text-cyan-700">
                                    Architect
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Overall-->
                <div class="flex flex-col gap-5 ">
                    
                    <!-- Score -->
                    <div class="flex xl:flex-row flex-col gap-2 items-start justify-between">
                        <h2 class="tracking-tight">
                            Overall Cognitive Ability Score:
                            <span class="font-semibold text-cyan-700">96%</span>
                        </h2>

                        <div class="flex flex-col">

                            <!-- Ability  -->
                            <div class="flex gap-4 items-center border border-orange-700 py-2 px-2 text-sm rounded" @click="showAbility">
                                <h2 class="font-bold tracking-tight text-orange-700">
                                    Data Scientists
                                </h2>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 stroke-cyan-700">
                                    <path fill-rule="evenodd" d="M20.03 4.72a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 11.69l6.97-6.97a.75.75 0 011.06 0zm0 6a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 111.06-1.06L12 17.69l6.97-6.97a.75.75 0 011.06 0z" clip-rule="evenodd" />
                                </svg>
                            </div>

                            <!-- Hidden Menu -->
                            <div class="flex flex-col bg-white gap-2 px-5 py-2 text-orange-700 text-sm gap-1" :class="{'hidden': abilityHidden}">
                                <a href="#" class="flex gap-2">Data Analysts</a>
                                <a href="#" class="flex gap-2">Data Refiners</a>
                                <a href="#" class="flex gap-2">Data Realtors</a>
                            </div>
                        </div>
                    </div>

                    <!-- Ability 1 -->
                    <div class="flex gap-2 bg-white rounded p-2 items-center">
                        <div class="w-2/5 flex flex-col gap-2">
                            <div class="flex flex-col gap-0.5 w-4/6">
                                <div class="bg-cyan-700 w-full h-2 rounded-full"></div>
                                <div class="bg-orange-700 w-full h-2 rounded-full"></div>
                            </div>
                            <div class="font-bold lining-nums text-xl text-slate-500">75%</div>
                        </div>
                        <div class="flex flex-col gap-1">
                            <h2 class="font-semibold text-cyan-700 tracking-tight">
                                Numerical Ability
                            </h2>
                            <p class="text-sm text-slate-500 tracking-tight">
                                John Doe has great skills in these and these.
                            </p>
                        </div>
                    </div>

                    <!-- Ability 2 -->
                    <div class="flex gap-2 bg-white rounded p-2 items-center">
                        <div class="w-2/5 flex flex-col gap-2">
                            <div class="flex flex-col gap-0.5 w-2/6">
                                <div class="bg-cyan-700 w-full h-2 rounded-full"></div>
                                <div class="bg-orange-700 w-full h-2 rounded-full"></div>
                            </div>
                            <div class="font-bold lining-nums text-xl text-slate-500">25%</div>
                        </div>
                        <div class="flex flex-col gap-1">
                            <h2 class="font-semibold text-cyan-700 tracking-tight">
                                Numerical Ability
                            </h2>
                            <p class="text-sm text-slate-500 tracking-tight">
                                John Doe has great skills in these and these.
                            </p>
                        </div>
                    </div>

                    <!-- Ability 3 -->
                    <div class="flex gap-2 bg-white rounded p-2 items-center">
                        <div class="w-2/5 flex flex-col gap-2">
                            <div class="flex flex-col gap-0.5 w-3/6">
                                <div class="bg-cyan-700 w-full h-2 rounded-full"></div>
                                <div class="bg-orange-700 w-full h-2 rounded-full"></div>
                            </div>
                            <div class="font-bold lining-nums text-xl text-slate-500">50%</div>
                        </div>
                        <div class="flex flex-col gap-1">
                            <h2 class="font-semibold text-cyan-700 tracking-tight">
                                Numerical Ability
                            </h2>
                            <p class="text-sm text-slate-500 tracking-tight">
                                John Doe has great skills in these and these.
                            </p>
                        </div>
                    </div>
                    
                </div>

                <!-- Last Results-->
                <div class="flex flex-col gap-5">
                    
                    <!-- Head -->
                    <div class="flex xl:flex-row flex-col gap-2 items-start justify-between">
                        <h2 class="tracking-tight">
                            Last Test Results
                            <span class="font-semibold text-cyan-700">(Only Visible To John Doe)</span>
                        </h2>

                        <a href="#" class="border border-orange-700 text-orange-700 font-medium px-3 py-2 flex items-center gap-1 rounded">
                            <span class="">Improve Your Scores</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 fill-cyan-700">
                                <path fill-rule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
                            </svg>
                        </a>
                        
                    </div>

                    <!-- Test 1 -->
                    <div class="flex bg-white p-2 gap-5 justify-between overflow-auto">
                        <div class="flex flex-col gap-5 min-w-fit">
                            <h2 class="font-medium text-orange-700">
                                Date
                            </h2>
                            <p class="text-sm text-cyan-700 font-semibold">
                                2022-09-26
                            </p>
                        </div>
                        <div class="flex flex-col gap-5 min-w-fit">
                            <h2 class="font-medium text-orange-700">
                                Bright Score
                            </h2>
                            <p class="text-sm text-cyan-700 font-semibold">
                                93%
                            </p>
                        </div>
                        <div class="flex flex-col gap-5">
                            <h2 class="font-medium text-orange-700">
                            Numerical
                            </h2>
                            <p class="text-sm text-cyan-700 font-semibold">
                                87%
                            </p>
                        </div>
                        <div class="flex flex-col gap-5">
                            <h2 class="font-medium text-orange-700">
                            Logical
                            </h2>
                            <p class="text-sm text-cyan-700 font-semibold">
                                89%
                            </p>
                        </div>
                        <div class="flex flex-col gap-5">
                            <h2 class="font-medium text-orange-700">
                            Spatial
                            </h2>
                            <p class="text-sm text-cyan-700 font-semibold">
                                54%
                            </p>
                        </div>
                        <div class="flex flex-col gap-4 min-w-fit">
                            <h2 class="font-medium text-orange-700">
                            Results
                            </h2>
                            <a href="#" class="font-medium text-sm bg-cyan-700 px-2 py-1 rounded text-white">
                                View Test
                            </a>
                        </div>
                    </div>

                    <!-- Test 2 -->
                    <div class="flex bg-white p-2 gap-5 justify-between overflow-auto">
                        <div class="flex flex-col gap-5 min-w-fit">
                            <h2 class="font-medium text-orange-700">
                                Date
                            </h2>
                            <p class="text-sm text-cyan-700 font-semibold">
                                2022-09-26
                            </p>
                        </div>
                        <div class="flex flex-col gap-5 min-w-fit">
                            <h2 class="font-medium text-orange-700">
                                Bright Score
                            </h2>
                            <p class="text-sm text-cyan-700 font-semibold">
                                93%
                            </p>
                        </div>
                        <div class="flex flex-col gap-5">
                            <h2 class="font-medium text-orange-700">
                            Numerical
                            </h2>
                            <p class="text-sm text-cyan-700 font-semibold">
                                87%
                            </p>
                        </div>
                        <div class="flex flex-col gap-5">
                            <h2 class="font-medium text-orange-700">
                            Logical
                            </h2>
                            <p class="text-sm text-cyan-700 font-semibold">
                                89%
                            </p>
                        </div>
                        <div class="flex flex-col gap-5">
                            <h2 class="font-medium text-orange-700">
                            Spatial
                            </h2>
                            <p class="text-sm text-cyan-700 font-semibold">
                                54%
                            </p>
                        </div>
                        <div class="flex flex-col gap-4 min-w-fit">
                            <h2 class="font-medium text-orange-700">
                            Results
                            </h2>
                            <a href="#" class="font-medium text-sm bg-cyan-700 px-2 py-1 rounded text-white">
                                View Test
                            </a>
                        </div>
                    </div>
                    
                </div>

            </div>

            <!-- Column 2.3 -->
            <div class="md:col-span-3 flex flex-col gap-5">

                <!-- Competition -->
                <div class="flex flex-col items-center px-2 py-5 rounded bg-white gap-3">
                    <h2 class="text-lg font-bold text-center text-cyan-700">
                        Create your own competetion
                    </h2>
                    <img :src="`${store.appendUrl}ProfilesList/user.jpg`" alt="user" class="rounded-full w-10 h-10">
                    <p class="tracking-tighter text-center text-slate-500">
                        Create an online cognitive ability test and invite your friends to see who has the highes cognitive abilities 
                    </p>
                    <a href="#" class="border px-5 py-2 border-orange-700 text-orange-700 font-medium rounded">
                        Create a free Test
                    </a>
                </div>
                
                <!-- Data Scientist 1 -->
                <div class="flex flex-col px-2 py-5 rounded bg-white gap-3">
                    <h2 class="text-lg font-bold text-center text-cyan-700">
                        John Doe
                    </h2>
                    <img :src="`${store.appendUrl}ProfilesList/user.jpg`" alt="user" class="rounded w-12 h-12 self-center">
                    <div class="flex flex-col gap-1 text-sm text-slate-500">
                        <p class="">Data Scientist</p>
                        <p class="">Logical Ability <span class="font-bold">98%</span></p>
                        <p class="">Numerical Ability <span class="font-bold">78%</span></p>
                        <p class="">Spatial Ability <span class="font-bold">68%</span></p>
                    </div>
                    <a href="#" class="px-5 py-2 bg-cyan-700 text-white text-center font-medium rounded">
                        View Profile
                    </a>
                </div>
                
                <!-- Data Scientist 2 -->
                <div class="flex flex-col px-2 py-5 rounded bg-white gap-3">
                    <h2 class="text-lg font-bold text-center text-cyan-700">
                        John Doe
                    </h2>
                    <img :src="`${store.appendUrl}ProfilesList/user.jpg`" alt="user" class="rounded w-12 h-12 self-center">
                    <div class="flex flex-col gap-1 text-sm text-slate-500">
                        <p class="">Data Scientist</p>
                        <p class="">Logical Ability <span class="font-bold">98%</span></p>
                        <p class="">Numerical Ability <span class="font-bold">78%</span></p>
                        <p class="">Spatial Ability <span class="font-bold">68%</span></p>
                    </div>
                    <a href="#" class="px-5 py-2 bg-cyan-700 text-white text-center font-medium rounded">
                        View Profile
                    </a>
                </div>
            </div>
                        
        </div>
        
    </div>

  </div>

</main>
</template>