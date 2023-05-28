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
    ...mapState(useStore, ['checkPanel1'])
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
    <router-link class="py-1 px-2 rounded" :class="{'bg-blue-500 text-white':checkPanel1, 'hover:bg-green-500 hover:text-white':!checkPanel1}" to="/components/panels/1-panel-component">1-Panel Component</router-link>
  </div>

  <router-view></router-view>

</template>