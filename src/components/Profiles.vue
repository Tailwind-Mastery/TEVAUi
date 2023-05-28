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
    ...mapState(useStore, ['checkProfile1'])
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
    <router-link class="py-1 px-2 rounded" :class="{'bg-blue-500 text-white':checkProfile1, 'hover:bg-green-500 hover:text-white':!checkProfile1}" to="/components/profiles/1-profile-page">1-Profile Page</router-link>
  </div>

  <router-view></router-view>
</template>