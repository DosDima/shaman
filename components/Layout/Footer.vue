<template>
  <footer>
    <div class="icon__wrapper">
      <Icon class="icon" name="uil:telegram"/>
      <Icon class="icon" name="uil:instagram"/>
      <Icon class="icon" name="uil:vk"/>
      <Icon class="icon" name="uil:email"/>
    </div>
    <h2 class="footer__text">
      𐔟 𐔁𐔀 𐔒𐔎𐔇𐔔 𐔏𐔇 𐔠𐔖 𐔀𐔝𐔎𐔇 𐔟 𐔒𐔁𐔟𐔛𐔌𐔔𐔈 𐔄𐔍𐔝𐔈 𐔝𐔈 𐔗𐔎𐔇𐔐𐔐𐔈 𐔎𐔇 𐔟𐔁𐔀 𐔌𐔔𐔈𐔎𐔇 𐔟 𐔒𐔁𐔟𐔌𐔔𐔈 𐔄𐔍𐔝𐔈 𐔝𐔈 𐔗𐔎𐔇𐔐𐔐
    </h2>
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
  padding: 0 1em 0 1em;
}

.icon {
  color: var(--color-mute);
  font-size: 32px;
  margin: 0 .1em 0 .1em;

}

.footer__text {
  font-size: 3em;
  color: var(--color-mute);
  white-space: nowrap;
}

</style>
