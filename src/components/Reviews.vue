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
    ...mapState(useStore, ['checkReview1'])
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
  
  <div class="flex gap-2 p-2 border-b">
    <router-link class="py-1 px-2 rounded" :class="{'bg-blue-500 text-white':checkReview1, 'hover:bg-green-500 hover:text-white':!checkReview1}" to="/components/reviews/1-review-component">1-Review Component</router-link>
  </div>

  <router-view></router-view>

</template>