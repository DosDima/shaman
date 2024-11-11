<script setup lang="ts">
definePageMeta({
  layout: "default",
  middleware: [
    function () {
      clearNuxtState()
      clearNuxtData()
    },
  ],
})

useSeoMeta({
  title: 'Родной. Для себя.',
  ogTitle: 'Родной. Для себя.',
  description: 'Ретрит. Шаманские практики. Ретриты в Санкт-Петербурге и Москве, погружение в медитативную практику. Запись на сайте и по телефону: +7 (915) 444-36-86',
  ogDescription: 'Ретрит. Шаманские практики. Ретриты в Санкт-Петербурге и Москве, погружение в медитативную практику. Запись на сайте и по телефону: +7 (915) 444-36-86',
  ogUrl: 'https://shamanictravel.ru/',
})

const cellInstagram = () => window.open(`https://www.instagram.com/lina_prosvet?igsh=MWhmcTN1OThpZDI0cw%3D%3D&utm_source=qr`)
const cellTelegram = () => window.open(`https://t.me/@shakti_lady`)
const callPhone = () => window.open(`tel:89154443686`)
const cellWhatsapp = () => window.open(`https://wa.me/89154443686`)
const openMap = () => window.open(`https://yandex.ru/maps/?ll=37.371225, 57.272028&pt=37.371225, 57.272028&z=15&l=map`)

const isOpenModal = ref(false)
</script>

<template>
  <div>
    <KitOverlay v-model="isOpenModal">
      <template #overlay__content>
        <KitCard class="card__reg">
          <template #card__main>
            <h2 style="text-align: center">
              Свяжитесь со мной,<br/> удобным для Вас способом!
            </h2>
          </template>
          <template #card__footer>
            <div class="icon__wrapper">
              <Icon class="icon" name="uil:instagram" @click.self="cellInstagram"/>
              <Icon class="icon" name="uil:telegram" @click.self="cellTelegram"/>
              <Icon class="icon" name="uil:whatsapp" @click.self="cellWhatsapp"/>
              <Icon class="icon" name="uil:phone" @click.self="callPhone"/>
            </div>
          </template>
        </KitCard>
      </template>
    </KitOverlay>
    <KitSection class="section__info">
      <template #section__content>
        <div class="info__card">
          <h3 class="info__title">Дата:</h3>
          <h3 class="info__title">22.11.2024 - 24.11.2024</h3>
        </div>
        <div class="info__card">
          <h3 class="info__title">Стоимость:</h3>
          <h3 class="info__title">22 004 руб.</h3>
          <h4 class="info__subtitle">• Проживание в комфортабельном номере</h4>
          <h4 class="info__subtitle">• 3-х разовое питание</h4>
          <h4 class="info__subtitle">• Баня/Чан</h4>
        </div>
        <div class="info__card">
          <h3 class="info__title">Место:</h3>
          <h3 class="info__title">Тверская область</h3>
          <h3 class="info__title">"Медведица Шанти"</h3>
          <h3 class="info__title">"дом Ганеша"</h3>
          <h3 class="info__link" @click.self="openMap">посмотреть на карте</h3>
        </div>

        <KitButton
            class="btn__reg text-h1"
            text="Записаться"
            @click.stop="isOpenModal = true"
        />
      </template>
    </KitSection>
  </div>
</template>

<style scoped>
.section__info {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding: 64px 0 64px 0;
  background-image: url("../public/picture/woman_in_forest_4.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.info__card {
  min-width: 320px;
  padding: 16px;
  margin: 4px 4px 16px 4px;
  background: rgb(175, 171, 171);
  background: linear-gradient(180deg, rgba(128, 128, 126, 0.4) 0%, rgba(48, 48, 48, 0.6) 20%);
  backdrop-filter: blur(.8em);
  border-radius: 2em;
}

.info__title {
  width: 100%;
  text-align: center;
  font-size: 1.5em;
  font-weight: 400;
  color: #d6c689;
  text-shadow: #d6c689 1px 0 10px;
  margin-bottom: .1em;
}

.info__subtitle {
  width: 100%;
  text-align: left;
  font-size: 1em;
  font-weight: 400;
  color: #d6c689;
  text-shadow: #d6c689 1px 0 10px;

}

.info__link {
  width: 100%;
  text-align: center;
  font-size: 1em;
  font-weight: 400;
  color: #cfccaf;
  text-shadow: #d6c689 1px 0 10px;
  text-decoration: underline;
  cursor: pointer;
}

.card__reg {
  margin: 8px;
  padding: 12px;
  width: 475px;
  background-color: rgba(16, 16, 16, 1);
  backdrop-filter: blur(0.5em);
  border-radius: 2em;
}

.icon__wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 8px;
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

.btn__reg {
  margin: 1em 0.2em 0.2em 0.2em;
  padding: 1em;
  max-width: 420px;
  font-size: 2em;
  border: 1px solid var(--color-primary);
  border-radius: 1em;
  background-color: rgba(0, 0, 0, 0.8);
  box-shadow: 0 0 10px 0 #d6c689 inset, 0 0 4px 2px #d6c689;
  color: #d6c689;
}

h2 {
  font-weight: 400;
  font-size: 0.8em;
  color: var(--color-bg-secondary);
  text-shadow: #FC0 1px 0 10px;
  padding: 8px;
}

h3 {
  font-weight: 400;
  font-size: 0.6em;
  color: var(--color-bg-secondary);
  text-shadow: #FC0 1px 0 10px;
  padding: 8px;
}


@media screen and (min-width: 1280px) and (orientation: landscape) {
  .info__card {
    max-width: 1280px !important;
  }

  h1 {
    font-size: 2.6em;
  }

  h2 {
    font-size: 1.4em;
  }

  h3 {
    font-weight: 400;
    font-size: 1.1em;
    color: var(--color-bg-secondary);
    text-shadow: #FC0 1px 0 10px;
    padding: 8px;
  }
}
</style>
