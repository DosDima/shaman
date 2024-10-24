<template>
  <div>
    <section>
      <h1 style="font-size: 2em; color: rgba(211,207,145,0.9)">
        Шаманское погружение-ретрит "Родной.Для себя.
      </h1>
    </section>
  </div>
</template>

<script setup lang="ts">

definePageMeta({
  layout: "default",
  title: "Index Page",
  middleware: [
    function () {
      clearNuxtState()
      clearNuxtData()
    },
  ],
})

</script>

<style scoped>
section{
  height: calc(100vh - var(--h-footer));
  padding-top: 108px;
  background-image: url("../public/picture/woman_in_forest_1.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}


</style>
