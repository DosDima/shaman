<template>
  <header>
    <nav>
      <RouterLink to="/">
        <div class="logo">Logo</div>
      </RouterLink>
      <ul>
        <RouterLink to="/">
          <li>События</li>
        </RouterLink>
        <RouterLink to="/program">
          <li>Программа</li>
        </RouterLink>
        <RouterLink to="/practice">
          <li>Практики</li>
        </RouterLink>
        <RouterLink to="/about">
          <li>О нас</li>
        </RouterLink>
        <RouterLink to="/info">
          <li>Как добраться</li>
        </RouterLink>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">

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
  height: 64px;
  min-width: 100%;
  max-width: 100%;
}

nav {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.logo {
  color: var(--color-mute);
  font-size: 2rem;
  margin-left: 1em;

}

ul {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

li {
  padding: 16px;
  color: var(--color-mute);
  font-size: 1.5em;
  cursor: pointer;
}

li:hover {
  color: #e4dc80;
}

</style>
