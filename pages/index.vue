<template>
  <div>
    <KitOverlay v-model="isOpenModal">
      <template #overlay__content>
        <KitCard class="card__reg" style="margin: 8px">
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
          <h1 class="text-h1">&#171;Родной. Для себя&#187;</h1>
        </div>
        <div class="card__wrapper"></div>
        <div class="card__text">
          <h2>
            𐔢армония с природой<br/> Погружение в природное пространство помогает успокоить ум, вернуть равновесие и
            почувствовать гармонию с миром вокруг.
          </h2>
        </div>
        <div class="card__text">
          <h2>
            𐔝ернуться к себе<br/> Ты создаёшь пространство для глубокого погружения в своё истинное &#171;я&#187;,
            освобождаясь от
            повседневных ролей и ожиданий.
          </h2>
        </div>
        <div class="card__text">
          <h2>
            𐔛илы Род𐔔<br/> Ты можешь установить связь с корнями, духовными предками, своим высшим Я и природой, чтобы
            обрести
            внутреннюю силу и опору.
          </h2>
        </div>
        <div class="card__text">
          <h2>
            𐔗𐔎рансформация<br/> Этот ретрит даёт возможность взглянуть на свою жизнь с новой перспективы и пройти через
            процесс личного роста и изменений.
          </h2>
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

const cellInstagram = () => window.open(`https://www.instagram.com/lina_prosvet?igsh=MWhmcTN1OThpZDI0cw%3D%3D&utm_source=qr`)
const cellTelegram = () => window.open(`https://t.me/@shakti_lady`)
const callPhone = () => window.open(`tel:89154443686`)
const cellWhatsapp = () => window.open(`https://wa.me/89154443686`)

const isOpenModal = ref(false)

</script>

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

.card__wrapper {
  display: flex;
  flex-direction: column;
}

.card__reg {
  background-color: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(0.5em);
  border-radius: 2em;
  width: 475px;
  padding: 12px;
}

.card__text {
  padding: 16px;
  margin: 8px;
  text-align: center;
  width: fit-content;
  min-width: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(0.5em);
  border-radius: 2em;
  cursor: pointer;
}

.text-h1 {
  font-size: 1.8em;
  font-weight: 400;
  color: #d6c689;
  text-shadow: #d6c689 1px 0 10px;
}

h2 {
  font-weight: 400;
  font-size: 0.8em;
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
}


</style>
