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
  background: radial-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 1));
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
  color: var(--color-mute);
  font-size: 32px;
  margin: 0 .1em 0 .1em;
  cursor: pointer;
}

.icon:hover {
  color: var(--color-primary);

}

.footer__text {
  font-size: 3em;
  color: var(--color-mute);
  white-space: nowrap;
}

</style>
