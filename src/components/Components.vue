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
    ...mapState(useStore, ['checkCard', 'checkForm', 'checkLanding', 'checkProfile', 'checkNotification', 'checkReview', 'checkPanel'])
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

  <div class="flex flex-wrap gap-2 p-2 border-b">
    <router-link class="py-1 px-2 rounded" :class="{'bg-blue-500 text-white':checkCard, 'hover:bg-green-500 hover:text-white':!checkCard}" to="/components/cards">Cards</router-link>
    <router-link class="py-1 px-2 rounded" :class="{'bg-blue-500 text-white':checkForm, 'hover:bg-green-500 hover:text-white':!checkForm}" to="/components/forms">Forms</router-link>
    <router-link class="py-1 px-2 rounded" :class="{'bg-blue-500 text-white':checkLanding, 'hover:bg-green-500 hover:text-white':!checkLanding}" to="/components/landings">Landings</router-link>
    <router-link class="py-1 px-2 rounded" :class="{'bg-blue-500 text-white':checkProfile, 'hover:bg-green-500 hover:text-white':!checkProfile}" to="/components/profiles">Profiles</router-link>
    <router-link class="py-1 px-2 rounded" :class="{'bg-blue-500 text-white':checkNotification, 'hover:bg-green-500 hover:text-white':!checkNotification}" to="/components/notifications">Notifications</router-link>
    <router-link class="py-1 px-2 rounded" :class="{'bg-blue-500 text-white':checkReview, 'hover:bg-green-500 hover:text-white':!checkReview}" to="/components/reviews">Reviews</router-link>
    <router-link class="py-1 px-2 rounded" :class="{'bg-blue-500 text-white':checkPanel, 'hover:bg-green-500 hover:text-white':!checkPanel}" to="/components/panels">Panels</router-link>
  </div>

  <router-view></router-view>

</template>