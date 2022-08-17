<template>
  <div class="d-flex justify-content-center">
    <h1 class="align-self-center text-center">No hay nada seleccionado</h1>
    <FabIcon 
      icon="fa-plus"/>
  </div>
</template>
<script>
import { defineAsyncComponent } from 'vue';
export default {
    components: {
        FabIcon: defineAsyncComponent(() => import('../components/FabIcon.vue')),
    }
}
</script>

<style lang="scss" scoped>
div {
    height:100%;
}
</style>