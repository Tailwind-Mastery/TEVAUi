<script type="module">
import { useStore } from "../../../store";

export default {
    data() {
        return {
            store: useStore(),
        }
    },
}
</script>
<template>
    <div class="flex">

        <img :src="`${store.appendUrl}PanelsList/Panel-1/home.jpg`" alt="home" class="w-full object-cover h-screen object-bottom">

    </div>
</template>