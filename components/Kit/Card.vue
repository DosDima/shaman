<template>
  <div class="card">
    <slot name="card__header"/>
    <slot name="card__main"/>
    <slot name="card__footer"/>
  </div>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: fit-content;
  max-width: 90vw;
  border: 1px solid var(--color-secondeary);
  border-radius: 1em;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
}


</style>
