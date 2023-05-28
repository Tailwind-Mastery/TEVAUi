<script type="module">
import { useStore } from "../../../store";

export default {
    data() {
        return {
            store: useStore(),
        }
    },
    computed: {
        email(){
            return this.store.panel1.email
        }
    }
}
</script>
<template>
    <div class="flex flex-col py-5 gap-5 items-center">

        <h1 class="text-2xl">
            Dashbaord
        </h1>

        <h2 class="text-xl">
            Hi {{email}}
        </h2>
    </div>
</template>