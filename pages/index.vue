<template>
  <div>
    <section>
      <div class="title__card">
        <h1>𐔀аманское погружение-ретрит "Родной. Для себя.</h1>
        <h2>
          𐔝ернуться к себе: Ты создаёшь пространство для глубокого погружения в своё истинное "я", освобождаясь от
          повседневных ролей и ожиданий.
        </h2>
        <h2>
          𐔢армония с природой: Погружение в природное пространство помогает успокоить ум, вернуть равновесие и
          почувствовать гармонию с миром вокруг.
        </h2>
        <h2>
          𐔛илы Род𐔔: ты можешь установить связь с корнями, духовными предками, своим высшим Я и природой, чтобы обрести
          внутреннюю силу и опору.
        </h2>
        <h2>
          𐔗𐔎рансформация: Этот ретрит даёт возможность взглянуть на свою жизнь с новой перспективы и пройти через
          процесс личного роста и изменений.
        </h2>
      </div>
    </section>
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

</script>

<style scoped>

section {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
}

.title__card {
  padding: 8px;
  text-align: center;
  width: fit-content;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(0.5em);
  border-radius: 2em;

}

h1 {
  font-family: "Noto Sans Elbasan", serif;
  font-size: 2.5em;
  font-weight: 400;
  padding: 24px;
  background: linear-gradient(90deg, var(--color-mute) 20%, #d1cba7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: #d6c689 1px 0 10px;
}

h2 {
  font-family: "Noto Sans Elbasan", serif;
  font-weight: 400;
  font-size: 1.2em;
  color: var(--color-bg-secondary);
  text-shadow: #FC0 1px 0 10px;
  margin-bottom: 1em;


}

section {
  height: calc(100vh - var(--h-footer));
  padding-top: 108px;
  background-image: url("../public/picture/woman_in_forest_1.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}


</style>
