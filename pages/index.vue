<script setup lang="ts">
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
    <KitSection class="section__index">
      <template #section__content>
        <div class="card__text">
          <h2>𐔀аманское погружение-ретрит</h2>
          <h1 class="text-h1">&#171;&nbsp;Родной. Для себя&nbsp;&#187;</h1>
        </div>
        <div class="card__text">
          <h2>𐔢армония с природой</h2>
          <h3> Погружение в природное пространство помогает успокоить ум, вернуть равновесие и
            почувствовать гармонию с миром вокруг.
          </h3>
        </div>
        <div class="card__text">
          <h2> 𐔝ернуться к себе</h2>
          <h3>Ты создаёшь пространство для глубокого погружения в своё истинное &#171;я&#187;,
            освобождаясь от
            повседневных ролей и ожиданий.
          </h3>
        </div>
        <div class="card__text">
          <h2>𐔛илы Род𐔔</h2>
          <h3>Ты можешь установить связь с корнями, духовными предками, своим высшим Я и природой, чтобы
            обрести
            внутреннюю силу и опору.
          </h3>
        </div>
        <div class="card__text">
          <h2>Тран𐔀формация</h2>
          <h3>Этот ретрит даёт возможность взглянуть на свою жизнь с новой перспективы и пройти через
            процесс личного роста и изменений.
          </h3>
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

.section__index {
  background-image: url("../public/picture/woman_in_forest_1.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding: 64px 0 64px 0;
}

.card__reg {
  margin: 8px;
  padding: 12px;
  width: 475px;
  background-color: rgba(0, 0, 0, .9);
  backdrop-filter: blur(0.5em);
  border-radius: 2em;
}

.card__text {
  padding: 16px;
  margin: 8px;
  text-align: center;
  width: fit-content;
  background: rgb(214, 198, 137);
  background: linear-gradient(180deg, rgba(214, 198, 137, 0.8) 0%, rgba(0, 0, 0, 0.8) 20%);
  backdrop-filter: blur(0.5em);
  border-radius: 2em;
  cursor: pointer;
}

h2 {
  font-weight: 400;
  font-size: 14px;
  color: var(--color-bg-secondary);
  text-shadow: #FC0 1px 0 10px;
  padding: 8px;
}

h3 {
  font-weight: 400;
  font-size: 12px;
  color: var(--color-bg-secondary);
  text-shadow: #FC0 1px 0 10px;
  padding: 8px;
}


@media screen and (min-width: 1280px) and (orientation: landscape) {
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

  .card__text {
    min-width: 520px;

  }

  .card__text:hover {
    outline: 0;
    box-shadow: 0 0 10px 0 var(--color-info) inset, 0 0 10px 4px var(--color-info);
  }
}


</style>
