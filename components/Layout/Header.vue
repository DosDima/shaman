<template>
  <header>
    <nav>
      <RouterLink to="/">
        <div class="logo" @click.self="isOpenNavMenu=false">𐔁𐔀𐔒𐔎𐔇𐔔</div>
      </RouterLink>
      <ul :class="{ul_active: isOpenNavMenu }">
        <RouterLink to="/">
          <li @click.self="burgerClickHandler">𐔄лавная</li>
        </RouterLink>
        <RouterLink to="/schedule">
          <li @click.self="burgerClickHandler">Про𐔏рамма</li>
        </RouterLink>
        <RouterLink to="/lina-pro-svet">
          <li @click.self="burgerClickHandler">𐔠роводник</li>
        </RouterLink>
        <RouterLink to="/info">
          <li @click.self="burgerClickHandler">Информаци𐔈</li>
        </RouterLink>
      </ul>
    </nav>
    <div
        class="burger"
        @click="burgerClickHandler">𐔇𐔔
    </div>
  </header>
</template>

<script setup lang="ts">
const isOpenNavMenu = ref(false);

const burgerClickHandler = () => {
  isOpenNavMenu.value = !isOpenNavMenu.value;
}

</script>


<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: var(--h-header);
  min-width: 100%;
  max-width: 100%;
  background: rgb(9, 9, 9);
  background: linear-gradient(270deg, rgba(9, 9, 9, 0.9) 50%, rgba(255, 255, 255, 0) 100%);
  z-index: 777;
}

nav {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.logo {
  color: var(--color-mute);
  font-size: 2rem;
  margin-left: 1em;

}

ul {
  position: absolute;
  top: var(--h-header);
  right: -100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  height: 100vh;
  background: rgb(9, 8, 9);
  background: linear-gradient(90deg, rgba(9, 8, 9, .9) 50%, rgba(255, 255, 255, 0) 100%);
  transition: all .5s;
  z-index: 0;
}

.ul_active {
  right: 0;
  z-index: 777;
}

li {
  padding: 16px;
  color: var(--color-mute);
  font-size: 1.5em;
  cursor: pointer;
}

li:hover {
  color: var(--color-secondeary);
}

.burger {
  position: fixed;
  top: 16px;
  right: 8px;
  width: 32px;
  height: 32px;
  border: 1px solid var(--color-mute);
  color: var(--color-mute);
  border-radius: .5em;
  text-align: center;
  padding-top: 4px;
}

@media screen and (min-width: 768px) and (orientation: landscape) {
  header {
    background: rgb(9, 8, 9);
    background: linear-gradient(180deg, rgba(9, 9, 9, 0.9) 50%, rgba(255, 255, 255, 0) 100%);
  }

  ul {
    position: relative;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: auto;
    background: rgb(9, 9, 9, 0%);
  }

  nav {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .burger {
    display: none;
  }
}

</style>
