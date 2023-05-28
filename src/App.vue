<script type="module">
import { useStore } from "./store/index.js";
import { mapState } from "pinia";

export default {
  data() {
    return {
      store: useStore(),
    }
  },
  computed: {
    ...mapState(useStore, ['checkHome', 'checkComponent'])
  },
  watch: {
    $route(newVal, oldVal){
      this.store.$patch({
        path: newVal.path,
      })
    }
  }
  
}
</script>
<template>
  <div class="container mx-auto antialiased">
    
    <div class="flex gap-2 p-2 border-b">
      <router-link class="py-1 px-2 rounded" :class="{'bg-blue-500 text-white':checkHome, 'hover:bg-green-500 hover:text-white':!checkHome}" to="/">Home</router-link>
      <router-link class="py-1 px-2 rounded" :class="{'bg-blue-500 text-white':checkComponent, 'hover:bg-green-500 hover:text-white':!checkComponent}" to="/components">Components</router-link>
    </div>

    <router-view></router-view>

  </div>
</template>