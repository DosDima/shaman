<template>
  <div>

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
