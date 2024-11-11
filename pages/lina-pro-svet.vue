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

const imageSrc = ref('/picture/lina_1.jpg')
const photoCounter = ref(1)
const nextPhoto = () => {
  photoCounter.value++
  if (photoCounter.value > 5) {
    photoCounter.value = 1
  }
  imageSrc.value = `/picture/lina_${photoCounter.value}.jpg`

}
const prevPhoto = () => {
  photoCounter.value--
  if (photoCounter.value < 0) {
    photoCounter.value = 5
  }
  imageSrc.value = `/picture/lina_${photoCounter.value}.jpg`
}
</script>

<template>
  <KitSection class="section__about">
    <template #section__content>
      <div class="about__card">
        <div class="img__wrapper">
          <img
              class="img"
              :src="imageSrc"
          >
          <Icon class="img__icon img__icon_prev" name="uil:arrow-left" @click.self="prevPhoto"/>
          <Icon class="img__icon img__icon_next" name="uil:arrow-right" @click.self="nextPhoto"/>
        </div>
        <div class="about__card__text">
          <h1 class="text__title">Лина ПроСвет</h1>
          <h4 class="text__subtitle">&#9658;&nbsp;Практикующий энерготерапевт с шаманскими корнями</h4>
          <h4 class="text__subtitle">&#9658;&nbsp;Саунд-хилер</h4>
          <h4 class="text__subtitle">&#9658;&nbsp;Aрт-терапевт</h4>
          <h4 class="text__subtitle">&#9658;&nbsp;Проводник в телесно-ориентированные практики и шаманские
            погружения</h4>
          <h4 class="text__subtitle">&#9658;&nbsp;Более 7-ми лет в практиках</h4>
          <h4 class="text__subtitle">&#9658;&nbsp;Приглашённый мастер на крупнейших Российских фестивалях</h4>
          <h4 class="text__subtitle">&#9658;&nbsp;Создатель трансформационного пространства «ПроСвет» в г.Ногинск</h4>
        </div>
      </div>
    </template>
  </KitSection>
</template>

<style scoped>
.section__about {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding: 64px 0 64px 0;
  background-image: url("../public/picture/woman_in_forest_3.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.about__card {
  padding: 1em;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  background: rgb(44, 44, 44);
  background: linear-gradient(180deg, rgba(37, 37, 37, 0.8) 0%, rgba(25, 25, 25, 0.8) 20%);
  backdrop-filter: blur(0.5em);
  border-radius: 1em;
}

.img__wrapper {
  position: relative;
  border-radius: 1em;
}

.img {
  min-width: 100%;
  height: auto;
}

.about__card__text {
  padding: 0 1em 1em 1em;
}

.text__title {
  width: 100%;
  text-align: center;
  margin-bottom: 1em;
  font-size: 2em;
  font-weight: 400;
  letter-spacing: .1em;
  color: #d6c689;
  text-shadow: #d6c689 1px 0 10px;
}

.text__subtitle {
  font-size: 1.2em;
  font-weight: 400;
  color: #d6c689;
  text-shadow: #d6c689 1px 0 10px;
  margin-bottom: .4em;
}

.img__icon {
  z-index: 777;
  color: var(--color-bg-secondary);
  position: absolute;
  font-size: 4em;
  top: 45%;
  cursor: pointer;
}

.img__icon:hover {
  color: var(--color-mute);
}

.img__icon_next {
  right: 0;
}

.img__icon_prev {
  left: 0;
}

@media screen and (min-width: 1280px) and (orientation: landscape) {
  .about__card {
    flex-direction: row;
    max-width: 1280px !important;
  }

  .img {
    width: 420px;
  }

}

</style>
