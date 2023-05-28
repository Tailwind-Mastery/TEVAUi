<script>
import { useStore } from "../../store";

export default {
  data() {
    return {
      store: useStore(),
      review1Hidden: true,
      review2Hidden: true,
      firstReview: 0,
      firstReviewText: '',
      secondReview: 0,
      secondReviewText: '',
      btnList: [{id:1},{id:2},{id:3},{id:4},{id:5}],
    }
  },  
  methods: {
    submitFirst(){
        if(this.firstReview === 0){return alert('Not Rated!')}
        this.review1Hidden = !this.review1Hidden;
    },
    submitSecond(){
        if(this.secondReview === 0){return alert('Not Rated!')}
        this.review2Hidden = !this.review2Hidden;
    },
    btnFirstEvent(id){
        this.firstReview = id;
        this.firstReviewText = `Selected ${id} out of 5`;
    },
    btnSecondEvent(id){
        this.secondReview = id;
        this.secondReviewText = `Selected ${id} out of 5`;
    },
  },
}
</script>
<template>
<main class="flex flex-col items-center gap-5 py-5">

    <h1 class="font-serif md:text-2xl text-xl mx-4 text-center lining-nums">
        1-Review Component
    </h1>

    <div class="bg-gradient-to-br from-gray-800 to-gray-900 p-5 md:rounded-lg max-w-md">

        <div class="flex flex-col h-80 justify-between"  :class="{'hidden' : !review1Hidden}">
            
            <span class="w-12 h-12 bg-gray-900 rounded-full flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 fill-orange-500">
                    <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                </svg>
            </span>
            
            
            
            <h2 class="text-2xl font-sans-serif text-white">How compatible did you find our platform?</h2>
            
            <p class="text-sm text-gray-500 font-medium">
                Please provide us with your feedback upon our services. Your feedback is appreciated and it helps us to upgrade our user experience!
            </p>
            
            <div class="flex justify-between">
                <button class="flex justify-center items-center text-white cursor-pointer h-12 w-12 rounded-full bg-gray-900 hover:bg-orange-500" v-for="btn in btnList" :key="btn.id" @click="btnFirstEvent(btn.id)" :class="{'bg-orange-500': firstReview === btn.id}">{{btn.id}}</button>
            </div>
            
            <button type="button" @click="submitFirst" class="text-white font-semibold bg-orange-500 hover:text-orange-500 hover:bg-white rounded-full outline-none text-center py-2 tracking-wider text-sm">SUBMIT</button>
        </div>

        <div class="flex flex-col h-80 justify-around items-center" :class="{'hidden' : review1Hidden}">

            <img class="w-44" :src="`${store.appendUrl}ReviewsList/thank.svg`" alt="thank-you" @click="submitFirst">


            <p class="text-orange-500 font-medium text-sm bg-gray-800 px-6 py-1.5 rounded-full">{{firstReviewText}}</p>
            
            <h2 class="text-2xl font-sans-serif text-white">Thank You!</h2>
            
            <p class="text-sm text-gray-500 font-medium">
                We appreciate you take the time and give us a rating. If you ever need any help contact our support group and they will get in touch! 
            </p>
            
        </div>
    </div>

    <div class="bg-gradient-to-br from-orange-800 to-red-800 p-5 md:rounded-lg max-w-md">

        <div class="flex flex-col h-80 justify-between"  :class="{'hidden' : !review2Hidden}">
            
            <span class="w-12 h-12 bg-white rounded-full flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 fill-red-800">
                    <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                </svg>
            </span>
            
            
            
            <h2 class="text-2xl font-sans-serif text-white">How compatible did you find our platform?</h2>
            
            <p class="text-sm text-white ">
                Please provide us with your feedback upon our services. Your feedback is appreciated and it helps us to upgrade our user experience!
            </p>
            
            <div class="flex justify-between">
                <button class="flex justify-center items-center text-white cursor-pointer h-12 w-12 rounded-full bg-red-900 hover:bg-orange-500" v-for="btn in btnList" :key="btn.id" @click="btnSecondEvent(btn.id)" :class="{'bg-orange-600': secondReview === btn.id}">{{btn.id}}</button>
            </div>
            
            <button type="button" @click="submitSecond" class="text-white font-semibold bg-orange-500 hover:text-orange-500 hover:bg-white rounded-full outline-none text-center py-2 tracking-wider text-sm">SUBMIT</button>
        </div>

        <div class="flex flex-col h-80 justify-around items-center" :class="{'hidden' : review2Hidden}">

            <img class="w-44" :src="`${store.appendUrl}ReviewsList/thank.svg`" alt="thank-you" @click="submitSecond">

            <p class="text-red-900 bg-white font-bold text-sm px-6 py-1.5 rounded-full">{{secondReviewText}}</p>
            
            <h2 class="text-2xl font-sans-serif text-white">Thank You!</h2>
            
            <p class="text-sm text-white font-medium">
                We appreciate you take the time and give us a rating. If you ever need any help contact our support group and they will get in touch! 
            </p>
            
        </div>
    </div>

</main>
</template>