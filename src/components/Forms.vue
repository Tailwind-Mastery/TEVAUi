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
    ...mapState(useStore, ['checkForm1'])
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
    <router-link class="py-1 px-2 rounded" :class="{'bg-blue-500 text-white':checkForm1, 'hover:bg-green-500 hover:text-white':!checkForm1}" to="/components/forms/1-card-details">1-Card Details</router-link>
  </div>

  <router-view></router-view>
</template>