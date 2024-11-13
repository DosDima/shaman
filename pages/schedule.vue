<script setup lang="ts">
useSeoMeta({
  title: 'Расписание. Родной. Для себя.',
  ogTitle: 'Расписание. Родной. Для себя.',
  description: 'Ретрит. Шаманские практики. Расписание ретрита.',
  ogDescription: 'Ретрит. Шаманские практики. Расписание ретрита.',
  ogUrl: 'https://shamanictravel.ru/schedule',
})
</script>

<template>
  <KitSection class="section__schedule">
    <template #section__content>
      <div>
        <div class="day__card">
          <h3 class="day__title">Первый день</h3>
          <h3 class="day__text">17:00 — Заселение</h3>
          <h3 class="day__text">18:30 — Ужин</h3>
          <h3 class="day__text">19:30 — Знакомство, обсуждение запроса на ретит</h3>
          <h3 class="day__text">20:30 — Погружение в нижний мир</h3>
          <h3 class="day__text">21:30 — Рисунок/обсуждение в парах</h3>
          <h3 class="day__text">23:00 — Отбой</h3>
        </div>

        <div class="day__card">
          <h3 class="day__title">Второй день</h3>
          <h3 class="day__text">&nbsp;&nbsp;9:00 — Завтрак</h3>
          <h3 class="day__text">10:00 — Шеринг</h3>
          <h3 class="day__text">11:00 — Погружение в средний мир</h3>
          <h3 class="day__text">14:00 — Обед</h3>
          <h3 class="day__text">15:00 — Свободное время/интеграция</h3>
          <h3 class="day__text">17:00 — Энерго-практика + саундхилинг</h3>
          <h3 class="day__text">18:30 — Ужин</h3>
          <h3 class="day__text">20:00 — Банька</h3>
          <h3 class="day__text">&nbsp;&nbsp;0:00 — Отбой</h3>
        </div>

        <div class="day__card">
          <h3 class="day__title">Третий день</h3>
          <h3 class="day__text">&nbsp;&nbsp;9:00 — Завтрак</h3>
          <h3 class="day__text">11:00 — Погружение в верхний мир</h3>
          <h3 class="day__text">12:30 — Финальный шеринг</h3>
          <h3 class="day__text">14:00 — Разъезд</h3>
        </div>
      </div>
    </template>
  </KitSection>
</template>

<style scoped>
.section__schedule {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding: 64px 0 64px 0;
  background-image: url("../public/picture/morning_on_the_river.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

}

.day__card {
  padding: 16px;
  margin: 4px 4px 16px 4px;
  background: rgb(175, 171, 171);
  background: linear-gradient(180deg, rgba(195, 192, 180, 0.4) 0%, rgba(143, 138, 138, 0.6) 20%);
  backdrop-filter: blur(.8em);
  border-radius: 2em;
  cursor: pointer;
}

.day__title {
  width: 100%;
  text-align: center;
  font-size: 1.5em;
  font-weight: bolder;
  margin-bottom: .2em;
}

.day__text {
  font-size: 14px;
  font-weight: bolder;
  margin-bottom: .1em;
}

@media screen and (min-width: 1280px) and (orientation: landscape) {
  .day__title {
    font-size: 2em;
  }

  .day__text {
    font-size: 18px;
  }
}

</style>
