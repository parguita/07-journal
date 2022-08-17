<template>
  <div class="entry-container pointer p-2"
  @click="$router.push({name: 'entry', params: {id:10}})">
    <div class="entry-title d-flex align-items-end">
        <span class="text-success fs-5 fw-bold">12</span>
        <span class="mx-2 fw-light">Julio</span>
        <span class="mx-2 fw-light">2022</span>
    </div>
    <div class="entry-description">
      This is a paragraph
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
  .entry-container {
    border-bottom: 1px solid #ED6827;
    transition: 0.2s all ease-in;

    &:hover{
      background-color: lighten($color: #F0E792, $amount: 10);
    }
    .entry-description{
      font-size:12px;
    }
  }

</style>