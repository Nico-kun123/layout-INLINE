<script>
export default {
  name: 'OriginsView',

  data() {
    function showSertificates() {
      alert('Какая-то обработка события 👀')
    }
    function showProviderInfo() {
      alert('Какая-то обработка события 👀')
    }
    return {
      showSertificates,
      showProviderInfo
    }
  }
}
</script>

<template>
  <div class="page-content">
    <div class="wrapper">
      <p class="wrapper__description">
        Томаты на ветке красные (помидоры) - более плотные, яркие и ароматные по сравнению с
        обычными. Они славятся низкой калорийностью и высоким содержанием витаминов, клетчатки,
        пектина и минеральных веществ. В них содержатся также каротиноиды, кислоты и мощный
        антиоксидант ликопин.<br /><br />Помидор - незаменимый продукт в мировой кулинарии. Он -
        основа многочисленных соусов, маринадов, кетчупа, испанского холодного супа Гаспачо или
        итальянской закуски Капрезе.
      </p>

      <div class="wrapper__img">
        <p>Наталья и Юрий Лейшан</p>
        <div>
          <img loading="lazy" src="../assets/img/Man.png" alt="Man" draggable="false" />
        </div>
        <div class="wrapper__btns">
          <button @click="showSertificates">Сертификаты</button>
          <button @click="showProviderInfo">О поставщике</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;

  -webkit-transition: $transition-duration-normal $transition-easing-3;
  -o-transition: $transition-duration-normal $transition-easing-3;
  transition: $transition-duration-normal $transition-easing-3;

  &__description {
    color: map-get($UI-color, 'text-main');
    -ms-flex-item-align: start;
    -ms-grid-row-align: start;
    align-self: start;
    margin-top: toRem(24);
    font-size: $font-size-normal;
    line-height: $line-height-normal;
  }

  &__img {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;

    width: 100%;
    & p {
      margin: toRem(17) 0 toRem(17) 0;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: inherit;
      -ms-flex-align: inherit;
      align-items: inherit;
      -webkit-box-pack: inherit;
      -ms-flex-pack: inherit;
      justify-content: inherit;
      font-weight: $font-weight-bold;
      font-size: 15px;
    }
    &:nth-child(2) {
      border-radius: 5px;

      & img {
        max-width: 336px;
        max-height: 295px;
        width: 100%;

        -webkit-filter: drop-shadow(0px 2px 10px rgba(0, 0, 0, 0.08));
        filter: drop-shadow(0px 2px 10px rgba(0, 0, 0, 0.08));
        border-radius: 5px;

        -webkit-transition: $transition-duration-normal $transition-easing-3;
        -o-transition: $transition-duration-normal $transition-easing-3;
        transition: $transition-duration-normal $transition-easing-3;
      }
    }
  }

  &__btns {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: inherit;
    -ms-flex-align: inherit;
    align-items: inherit;
    -webkit-box-pack: inherit;
    -ms-flex-pack: inherit;
    justify-content: inherit;
    width: 100%;

    margin-bottom: 17px;

    & button {
      margin: toRem(34) 0 0 0;
      width: 164px;
      background-color: map-get($map: $UI-color, $key: 'btn-bg-main');
      border-radius: 5px;
      border: 0.5px solid;
      font-size: $font-size-normal;
      font-weight: $font-weight-medium;

      &:nth-child(2) {
        margin-left: toRem(8);
      }

      &:hover {
        background-color: map-get($map: $UI-color, $key: 'btn-bg-main-hover');
      }
    }
  }
}

/* 1200px */
@include responsiveness(desktop) {
  .wrapper {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    margin-top: 49px;

    &__img {
      width: 100%;
      &:nth-child(2) {
        overflow: hidden;
        width: 100%;
        & img {
          max-width: 376px;
          max-height: 267px;
          width: 100%;
          height: 100%;
          &:hover {
            -webkit-transform: scale(1.1);
            -ms-transform: scale(1.1);
            transform: scale(1.1);
          }
        }
      }
    }

    &__description {
      margin-right: toRem(179);
    }

    &__btns {
      & button {
        width: 184px;
      }
    }
  }
}
</style>
