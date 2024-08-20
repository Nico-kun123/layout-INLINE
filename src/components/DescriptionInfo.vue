<script>
export default {
  name: 'DescriptionInfo',
  data() {
    return {
      characteristics: [
        { label: 'Страна', value: 'Россия' },
        { label: 'Поставщик', value: 'Наталья и Юрий Лейшан' },
        { label: 'Тип упаковки', value: 'Крафтовый пакет' },
        { label: 'Сертификаты качества', value: 'В наличии' }
      ],
      nutritionFacts: [
        { label: 'Энергетическая ценность', value: '18 кКал' },
        { label: 'Белки', value: '0,9 г' },
        { label: 'Жиры', value: '0,2 г' },
        { label: 'Углеводы', value: '3,9 г' }
      ],
      storageConditions: [
        { label: 'Срок хранения', value: '7 дней' },
        { label: 'Температура хранения', value: 'от 3 ° до 7 °' }
      ]
    }
  }
}
</script>

<template>
  <div class="info">
    <div class="info__block">
      <div class="info__block__name">Характеристики</div>
      <div v-for="(item, index) in characteristics" :key="index">
        <div class="info__block__row">
          <div class="info__block__row__label">{{ item.label }}</div>
          <div class="info__block__row__value">{{ item.value }}</div>
        </div>
        <div class="separator-alt"></div>
      </div>
    </div>

    <div class="info__block">
      <div class="info__block__name">Пищевая ценность</div>
      <div v-for="(item, index) in nutritionFacts" :key="index">
        <div class="info__block__row">
          <div class="info__block__row__label">{{ item.label }}</div>
          <div class="info__block__row__value">{{ item.value }}</div>
        </div>
        <div class="separator-alt"></div>
      </div>
    </div>

    <div class="info__block">
      <div class="info__block__name">Условия хранения</div>
      <div v-for="(item, index) in storageConditions" :key="index">
        <div class="info__block__row">
          <div class="info__block__row__label">{{ item.label }}</div>
          <div class="info__block__row__value">{{ item.value }}</div>
        </div>
        <div class="separator-alt"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.info {
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: 1fr;
  grid-template-columns: 1fr;
  -ms-grid-rows: 1fr 0px 1fr 0px 1fr;
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;

  margin-top: toRem(10);

  transition: $transition-duration-normal $transition-easing-3;

  &__block {
    &__name {
      color: map-get($map: $UI-color, $key: 'text-main');
      font-weight: $font-weight-bold;
      font-size: $font-size-large;
    }
    &__row {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      height: toRem(30);
      white-space: nowrap;
      -webkit-box-pack: justify;
      -ms-flex-pack: justify;
      justify-content: space-between;

      font-size: $font-size-small;
      font-weight: $font-weight-normal;
      color: map-get($map: $UI-color, $key: 'label');

      &__label {
        -ms-flex-item-align: end;
        -ms-grid-row-align: end;
        align-self: end;
        margin-top: toRem(15);
      }
      &__value {
        -ms-flex-item-align: end;
        -ms-grid-row-align: end;
        align-self: end;
        margin-top: toRem(32);
      }
    }
  }
  &__block {
    margin-top: toRem(15);
  }

  &__block:nth-child(1) {
    -ms-grid-row: 1;
    -ms-grid-row-span: 1;
    -ms-grid-column: 1;
    -ms-grid-column-span: 1;
    grid-area: 1 / 1 / 2 / 2;
  }
  &__block:nth-child(2) {
    -ms-grid-row: 2;
    -ms-grid-row-span: 1;
    -ms-grid-column: 1;
    -ms-grid-column-span: 1;
    grid-area: 2 / 1 / 3 / 2;
  }
  &__block:nth-child(3) {
    -ms-grid-row: 3;
    -ms-grid-row-span: 1;
    -ms-grid-column: 1;
    -ms-grid-column-span: 1;
    grid-area: 3 / 1 / 4 / 2;
  }
}
.info > *:nth-child(1) {
  -ms-grid-row: 1;
  -ms-grid-column: 1;
}
.info > *:nth-child(2) {
  -ms-grid-row: 3;
  -ms-grid-column: 1;
}
.info > *:nth-child(3) {
  -ms-grid-row: 5;
  -ms-grid-column: 1;
}

/* 1200px*/
@include responsiveness(desktop) {
  .info {
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: 1fr 102px 1fr;
    grid-template-columns: repeat(2, 1fr);
    -ms-grid-rows: 1fr 29px 1fr;
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 102px;
    grid-row-gap: 29px;

    margin: 0;
    margin-top: toRem(25);

    &__block:nth-child(1) {
      -ms-grid-row: 1;
      -ms-grid-row-span: 1;
      -ms-grid-column: 1;
      -ms-grid-column-span: 1;
      grid-area: 1 / 1 / 2 / 2;
    }
    &__block:nth-child(2) {
      -ms-grid-row: 1;
      -ms-grid-row-span: 1;
      -ms-grid-column: 2;
      -ms-grid-column-span: 1;
      grid-area: 1 / 2 / 2 / 3;
    }
    &__block:nth-child(3) {
      -ms-grid-row: 2;
      -ms-grid-row-span: 1;
      -ms-grid-column: 1;
      -ms-grid-column-span: 1;
      grid-area: 2 / 1 / 3 / 2;
    }
  }
  .info > *:nth-child(1) {
    -ms-grid-row: 1;
    -ms-grid-column: 1;
  }
  .info > *:nth-child(2) {
    -ms-grid-row: 1;
    -ms-grid-column: 3;
  }
  .info > *:nth-child(3) {
    -ms-grid-row: 3;
    -ms-grid-column: 1;
  }
  .info > *:nth-child(4) {
    -ms-grid-row: 3;
    -ms-grid-column: 3;
  }
}
</style>
