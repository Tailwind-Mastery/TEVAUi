<script>
import { useStore } from "../store";
import { mapState } from "pinia";

export default {
  data() {
    return {
      store: useStore(),
    }
  },
  computed: {
    ...mapState(useStore, ['checkCard1', 'checkCard2', 'checkCard3', 'checkCard4', 'checkCard5', 'checkCard6', 'checkCard7'])
  },
  watch: {
    $route(newVal){
      this.store.$patch({
        path: newVal.path,
      })
    }
  }
  
}
</script>
<template>
  
  <div class="flex gap-2 p-2 border-b flex-wrap">
    <router-link class="py-1 px-2 rounded" :class="{'bg-blue-500 text-white':checkCard1, 'hover:bg-green-500 hover:text-white':!checkCard1}" to="/components/cards/1-products-card">1-Products Card</router-link>
    <router-link class="py-1 px-2 rounded" :class="{'bg-blue-500 text-white':checkCard2, 'hover:bg-green-500 hover:text-white':!checkCard2}" to="/components/cards/2-qr-code-card">2-QR Code Card</router-link>
    <router-link class="py-1 px-2 rounded" :class="{'bg-blue-500 text-white':checkCard3, 'hover:bg-green-500 hover:text-white':!checkCard3}" to="/components/cards/3-nft-card">3-NFT Card</router-link>
    <router-link class="py-1 px-2 rounded" :class="{'bg-blue-500 text-white':checkCard4, 'hover:bg-green-500 hover:text-white':!checkCard4}" to="/components/cards/4-order-card">4-Order Summary</router-link>
    <router-link class="py-1 px-2 rounded" :class="{'bg-blue-500 text-white':checkCard5, 'hover:bg-green-500 hover:text-white':!checkCard5}" to="/components/cards/5-stats-preview-card">5-Stats Preview</router-link>
    <router-link class="py-1 px-2 rounded" :class="{'bg-blue-500 text-white':checkCard6, 'hover:bg-green-500 hover:text-white':!checkCard6}" to="/components/cards/6-three-column-preview-card">6-Three Column Preview</router-link>
    <router-link class="py-1 px-2 rounded" :class="{'bg-blue-500 text-white':checkCard7, 'hover:bg-green-500 hover:text-white':!checkCard7}" to="/components/cards/7-profile-card">7-Profile Card</router-link>
  </div>

  <router-view></router-view>

</template>