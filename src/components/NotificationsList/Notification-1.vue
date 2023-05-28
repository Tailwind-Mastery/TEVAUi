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
      1-Notification Component
  </h1>

    <div class="flex flex-col my-10 gap-5 p-5 box-shadow shadow-lg rounded">
        <div class="flex justify-between items-center">
            <div class="flex items-center gap-2">
                <h2 class="text-blue-800 font-bold">
                    Notifications
                </h2>
                <span class="lining-nums text-white font-medium bg-blue-800 px-2 py-1 rounded">
                    3
                </span>
            </div>
            <a href="#" class="text-blue-800 text-sm font-medium">
                Mark All As Read
            </a>
        </div>
        <div class="flex flex-col p-5 gap-5">
            <!-- 1st -->
            <div class="flex gap-5 items-start">
                <img :src="`${store.appendUrl}NotificationsList/user.jpg`" alt="user" class="rounded-full w-10 h-10">
                <div class="flex flex-col">
                    <p class="text-slate-500">
                        <a href="#" class="text-black font-bold hover:text-blue-800">
                            John Doe
                        </a>
                        reacted to your recent post 
                        <a href="#" class="text-blue-800 font-bold">
                            My first tornament today!
                        </a>
                        <span class="rounded-full p-1 bg-red-800 inline-block"></span>
                    </p>
                    <p class="text-slate-500 text-sm">
                        1m ago
                    </p>
                </div>
            </div>
            <!-- 2nd -->
            <div class="flex gap-5 items-start">
                <img :src="`${store.appendUrl}NotificationsList/user.jpg`" alt="user" class="rounded-full w-10 h-10">
                <div class="flex flex-col">
                    <p class="text-slate-500">
                        <a href="#" class="text-black font-bold hover:text-blue-800">
                            Jane Doe
                        </a>
                        followed you 
                        <span class="rounded-full p-1 bg-red-800 inline-block"></span>
                    </p>
                    <p class="text-slate-500 text-sm">
                        5m ago
                    </p>
                </div>
            </div>
            <!-- 3rd -->
            <div class="flex gap-5 items-start">
                <img :src="`${store.appendUrl}NotificationsList/user.jpg`" alt="user" class="rounded-full w-10 h-10">
                <div class="flex flex-col">
                    <p class="text-slate-500">
                        <a href="#" class="text-black font-bold hover:text-blue-800">
                            Jane Doe
                        </a>
                        has joined your group 
                        <a href="#" class="text-blue-800 font-bold">
                            Chess Club
                        </a>
                        <span class="rounded-full p-1 bg-red-800 inline-block"></span>
                    </p>
                    <p class="text-slate-500 text-sm">
                        1 day ago
                    </p>
                </div>
            </div>
            <!-- 4th -->
            <div class="flex gap-5 items-start">
                <img :src="`${store.appendUrl}NotificationsList/user.jpg`" alt="user" class="rounded-full w-10 h-10">
                
                <div class="flex flex-col w-full gap-5">
                    <div class="flex flex-col">
                        <p class="text-slate-500">
                            <a href="#" class="text-black font-bold hover:text-blue-800">
                                Jane Doe
                            </a>
                            sent you a private message 
                        </p>
                        <p class="text-slate-500 text-sm">
                            5 days ago
                        </p>
                    </div>
                    <p class="text-slate-500 p-2 rounded bg-blue-100 text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam distinctio excepturi sint quaerat rerum, saepe cumque nisi fugit deserunt quam, molestiae velit consectetur iste ipsa aliquid fugiat ullam numquam optio.
                    </p>
                </div>
            </div>
            <!-- 5th -->
            <div class="flex gap-5 items-start">
                <img :src="`${store.appendUrl}NotificationsList/user.jpg`" alt="user" class="rounded-full w-10 h-10">
                <div class="flex justify-between w-full">
                    <div class="flex flex-col">
                        <p class="text-slate-500">
                            <a href="#" class="text-black font-bold hover:text-blue-800">
                                Jane Doe
                            </a>
                            commented on your picture
                        </p>
                        <p class="text-slate-500 text-sm">
                            1 week ago
                        </p>
                    </div>
                    <img :src="`${store.appendUrl}NotificationsList/user.jpg`" alt="user" class="rounded h-10 w-10">
                </div>
            </div>
            <!-- 6th -->
            <div class="flex gap-5 items-start">
                <img :src="`${store.appendUrl}NotificationsList/user.jpg`" alt="user" class="rounded-full w-10 h-10">
                <div class="flex flex-col">
                    <p class="text-slate-500">
                        <a href="#" class="text-black font-bold hover:text-blue-800">
                            Jane Doe
                        </a>
                        reacted to your recent post  
                        <a href="#" class="text-slate-500 font-bold">
                            5 end-game strategies to increase your win rate 
                        </a>
                    </p>
                    <p class="text-slate-500 text-sm">
                        2 week ago
                    </p>
                </div>
            </div>
            <!-- 7th -->
            <div class="flex gap-5 items-start">
                <img :src="`${store.appendUrl}NotificationsList/user.jpg`" alt="user" class="rounded-full w-10 h-10">
                <div class="flex flex-col">
                    <p class="text-slate-500">
                        <a href="#" class="text-black font-bold hover:text-blue-800">
                            Jane Doe
                        </a>
                        left the group  
                        <a href="#" class="text-slate-500 font-bold">
                            Chess Club 
                        </a>
                    </p>
                    <p class="text-slate-500 text-sm">
                        2 week ago
                    </p>
                </div>
            </div>
        </div>
    </div>

    <div class="flex flex-col my-10 gap-5 p-5 box-shadow shadow-lg rounded">
        <div class="flex justify-between items-center">
            <div class="flex items-center gap-2">
                <h2 class="text-emerald-800 font-bold">
                    Notifications
                </h2>
                <span class="lining-nums text-white font-medium bg-emerald-800 px-2 py-1 rounded">
                    3
                </span>
            </div>
            <a href="#" class="text-emerald-800 text-sm font-medium">
                Mark All As Read
            </a>
        </div>
        <div class="flex flex-col p-5 gap-5">
            <!-- 1st -->
            <div class="flex gap-5 items-start">
                <img :src="`${store.appendUrl}NotificationsList/user.jpg`" alt="user" class="rounded-full w-10 h-10">
                <div class="flex flex-col">
                    <p class="text-slate-500">
                        <a href="#" class="text-black font-bold hover:text-emerald-800">
                            John Doe
                        </a>
                        reacted to your recent post 
                        <a href="#" class="text-emerald-800 font-bold">
                            My first tornament today!
                        </a>
                        <span class="rounded-full p-1 bg-emerald-800 inline-block"></span>
                    </p>
                    <p class="text-slate-500 text-sm">
                        1m ago
                    </p>
                </div>
            </div>
            <!-- 2nd -->
            <div class="flex gap-5 items-start">
                <img :src="`${store.appendUrl}NotificationsList/user.jpg`" alt="user" class="rounded-full w-10 h-10">
                <div class="flex flex-col">
                    <p class="text-slate-500">
                        <a href="#" class="text-black font-bold hover:text-emerald-800">
                            Jane Doe
                        </a>
                        followed you 
                        <span class="rounded-full p-1 bg-emerald-800 inline-block"></span>
                    </p>
                    <p class="text-slate-500 text-sm">
                        5m ago
                    </p>
                </div>
            </div>
            <!-- 3rd -->
            <div class="flex gap-5 items-start">
                <img :src="`${store.appendUrl}NotificationsList/user.jpg`" alt="user" class="rounded-full w-10 h-10">
                <div class="flex flex-col">
                    <p class="text-slate-500">
                        <a href="#" class="text-black font-bold hover:text-emerald-800">
                            Jane Doe
                        </a>
                        has joined your group 
                        <a href="#" class="text-emerald-800 font-bold">
                            Chess Club
                        </a>
                        <span class="rounded-full p-1 bg-emerald-800 inline-block"></span>
                    </p>
                    <p class="text-slate-500 text-sm">
                        1 day ago
                    </p>
                </div>
            </div>
            <!-- 4th -->
            <div class="flex gap-5 items-start">
                <img :src="`${store.appendUrl}NotificationsList/user.jpg`" alt="user" class="rounded-full w-10 h-10">
                
                <div class="flex flex-col w-full gap-5">
                    <div class="flex flex-col">
                        <p class="text-slate-500">
                            <a href="#" class="text-black font-bold hover:text-emerald-800">
                                Jane Doe
                            </a>
                            sent you a private message 
                        </p>
                        <p class="text-slate-500 text-sm">
                            5 days ago
                        </p>
                    </div>
                    <p class="text-slate-500 p-2 rounded bg-emerald-100 text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam distinctio excepturi sint quaerat rerum, saepe cumque nisi fugit deserunt quam, molestiae velit consectetur iste ipsa aliquid fugiat ullam numquam optio.
                    </p>
                </div>
            </div>
            <!-- 5th -->
            <div class="flex gap-5 items-start">
                <img :src="`${store.appendUrl}NotificationsList/user.jpg`" alt="user" class="rounded-full w-10 h-10">
                <div class="flex justify-between w-full">
                    <div class="flex flex-col">
                        <p class="text-slate-500">
                            <a href="#" class="text-black font-bold hover:text-emerald-800">
                                Jane Doe
                            </a>
                            commented on your picture
                        </p>
                        <p class="text-slate-500 text-sm">
                            1 week ago
                        </p>
                    </div>
                    <img :src="`${store.appendUrl}NotificationsList/user.jpg`" alt="user" class="rounded h-10 w-10">
                </div>
            </div>
            <!-- 6th -->
            <div class="flex gap-5 items-start">
                <img :src="`${store.appendUrl}NotificationsList/user.jpg`" alt="user" class="rounded-full w-10 h-10">
                <div class="flex flex-col">
                    <p class="text-slate-500">
                        <a href="#" class="text-black font-bold hover:text-emerald-800">
                            Jane Doe
                        </a>
                        reacted to your recent post  
                        <a href="#" class="text-slate-500 font-bold">
                            5 end-game strategies to increase your win rate 
                        </a>
                    </p>
                    <p class="text-slate-500 text-sm">
                        2 week ago
                    </p>
                </div>
            </div>
            <!-- 7th -->
            <div class="flex gap-5 items-start">
                <img :src="`${store.appendUrl}NotificationsList/user.jpg`" alt="user" class="rounded-full w-10 h-10">
                <div class="flex flex-col">
                    <p class="text-slate-500">
                        <a href="#" class="text-black font-bold hover:text-emerald-800">
                            Jane Doe
                        </a>
                        left the group  
                        <a href="#" class="text-slate-500 font-bold">
                            Chess Club 
                        </a>
                    </p>
                    <p class="text-slate-500 text-sm">
                        2 week ago
                    </p>
                </div>
            </div>
        </div>
    </div>


  

</main>
</template>