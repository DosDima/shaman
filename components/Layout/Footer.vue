<template>
  <footer>
    <div class="icon__wrapper">
      <h2 class="footer__text">𐔔</h2>
      <Icon class="icon" name="uil:telegram"/>
      <h2 class="footer__text">𐔎</h2>
      <Icon class="icon" name="uil:instagram"/>
      <h2 class="footer__text">𐔝</h2>
      <Icon class="icon" name="uil:vk"/>
      <h2 class="footer__text">𐔛</h2>
      <Icon class="icon" name="uil:phone"/>
    </div>
    <h2 class="footer__text">𐔁𐔀𐔒𐔎𐔇𐔔 𐔏𐔇 𐔠𐔖 𐔀𐔝𐔎𐔇 𐔟 𐔒𐔁𐔟𐔛𐔌𐔔𐔈 𐔄𐔍𐔝𐔈 𐔝𐔈 𐔗𐔎𐔇𐔐𐔐𐔈 𐔎𐔇 𐔟𐔁𐔀 𐔌𐔔𐔈𐔎𐔇 𐔟 𐔒𐔁𐔟𐔌𐔔𐔈 𐔄𐔍𐔝𐔈 𐔝𐔈 𐔗𐔎𐔇𐔐𐔐</h2>
  </footer>
</template>

<script setup lang="ts">

</script>

<style scoped>
footer {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 4px;
  background: rgb(9, 9, 9);
  background: linear-gradient(0deg, rgba(9, 9, 9, 1) 50%, rgba(18, 18, 18, .9) 100%);
  min-height: var(--h-footer);
  height: var(--h-footer);
  max-height: var(--h-footer);
}

.icon__wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.icon {
  color: var(--color-primary);
  font-size: 32px;
  margin: 0 .1em 0 .1em;
  cursor: pointer;
}

.icon:hover {
  color: var(--color-mute);

}

.footer__text {
  font-size: 3em;
  white-space: nowrap;
  opacity: 0.4;
}

</style>
