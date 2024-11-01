<template>
  <div>
    <LayoutHeader/>
    <main>
      <slot/>
    </main>
    <LayoutFooter/>
  </div>
</template>

<style scoped>
main{
  min-height: calc(100vh - var(--h-footer));
  height: fit-content;
  overflow-y: auto;
}
</style>
