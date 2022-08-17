<template>
    <div class="entry-title d-flex justify-content-between p-2">
        <div>
            <span class="text-success fs-3 fw-bold">15</span>
            <span class="mx-1 fs-3"> Agosto</span>
            <span class="mx-2 fs-4 fw-light">2022</span>
        </div>
        <div>
            <button class="btn btn-success mx-1">
                <i class="fa fa-upload"></i>
            </button>
            <button class="btn btn-danger text-light mx-1">
                <i class="fa fa-trash-alt"></i>
            </button>
        </div>
    </div>
    <hr>
    <div class="d-flex flex-column px-3 h-75">
        <textarea class="" placeholder="Qué sucedió hoy?"></textarea>
    </div>
    <FabIcon
        icon="fa-save"/>
    <img src="https://www.himgs.com/imagenes/hello/social/hello-fb-logo.png" 
        alt="entry-picture"
        class="img-thumbnail">
</template>

<script>
import { defineAsyncComponent } from 'vue';
export default {
    components: {
        FabIcon: defineAsyncComponent(() => import('../components/FabIcon.vue'))
    }
}
</script>

<style lang="scss" scoped>
textarea {
    font-size: 18px;
    border:none;
    height:100%;

    &:hover {
        outline:none;
    }
}
img {
    width:200px;
    position: fixed;
    bottom: 150px;
    right:20px;
    box-shadow: 0px 5px 10px rgba($color: #000, $alpha:0.2);
}
</style>