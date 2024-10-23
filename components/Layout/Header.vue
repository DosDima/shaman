<template>
  <header>
    <nav>
      <div>Logo</div>
      <ul>
        <li>Ретрит</li>
        <li>Программа</li>
        <li>Практики</li>
        <li>О нас</li>
        <li>Как добраться</li>
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
  background-color: var(--vt-c-white-mute);
}
nav{
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

}
ul{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

li{
  padding: 16px;
}

</style>