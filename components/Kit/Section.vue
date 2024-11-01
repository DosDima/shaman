<template>
  <section>
    <slot name="section__content"/>
  </section>
</template>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding: 108px 8px 8px 8px;
  height: fit-content;
  min-height: calc(100vh - var(--h-footer));
}
</style>
