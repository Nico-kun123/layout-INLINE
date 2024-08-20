<script>
import CartDesktop from '../assets/img/icons/cart-desktop.vue'
import StarIcon from '../assets/img/icons/star.vue'

const starColorBg = '#b2b2b2'
const starColorFill = '#f9ce1e'

export default {
  name: 'DescriptionBuy',

  data() {
    return {
      starColorBg,
      starColorFill,
      products: [
        {
          name: 'Молоко 3,2%',
          provider: 'от Вадима Рошки',
          price: '95 ₽ / 0,93л',
          image: '/Products/Milk.webp',
          rating: 5
        },
        {
          name: 'Хлеб шпуничный',
          provider: 'от Дарьи и Марии',
          price: '95 ₽ / 930гр',
          image: '/Products/Bread.webp',
          rating: 5
        },
        {
          name: 'Яйца куриные',
          provider: 'от Евгения Рошаль',
          price: '120 ₽ / 10шт',
          image: '/Products/Eggs.webp',
          rating: 4
        },
        {
          name: 'Масло сливочное',
          provider: 'от Вадима Рошки',
          price: '290 ₽ / 250гр',
          image: '/Products/Butter.webp',
          rating: 3
        }
      ]
    }
  },

  methods: {
    addToCart(event) {
      event.stopPropagation()
      alert('Какая-то обработка события 👀')
    },
    openProductWindow(event) {
      event.stopPropagation()
      alert('Какая-то обработка события 👀')
    }
  },

  components: {
    CartDesktop,
    StarIcon
  },
}
</script>

<template>
  <div class="title">С этим товаром покупают</div>

  <div class="slider">
    <div v-for="product in products" :key="product.name" class="slider__card">
      <div class="slider__card__wrapper">
        <img
          loading="lazy"
          :src="product.image"
          class="slider__card__wrapper__img"
          alt="Product"
          draggable="false"
          @click="openProductWindow"
        />

        <div class="slider__card__wrapper__data">
          <div class="slider__card__wrapper__data__name" @click="openProductWindow">
            {{ product.name }}
          </div>
          <div class="slider__card__wrapper__data__provider" @click="openProductWindow">
            {{ product.provider }}
          </div>
          <div class="slider__card__wrapper__data__price">{{ product.price }}</div>
        </div>
      </div>
      <button class="slider__card__btn-mobile" @click="addToCart">
        <div class="slider__card__btn-mobile__text">В корзину</div>
        <div>
          <img
            loading="lazy"
            src="../assets/img/icons/plus.svg"
            draggable="false"
            alt="Add to cart"
            width="16"
            height="16"
          />
          <img
            loading="lazy"
            src="../assets/img/icons/cart-mobile.svg"
            draggable="false"
            alt="Cart"
            width="16"
            height="16"
          />
        </div>
      </button>
      <div class="slider__card__btn-desktop" @click="addToCart">
        <CartDesktop />
      </div>
      <div class="slider__card__rating">
        <StarIcon v-for="index in product.rating" :key="index" :color="starColorFill" />
        <StarIcon v-for="index in 5 - product.rating" :key="index" :color="starColorBg" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.title {
  font-size: $font-size-xlarge;
  margin-top: -15px;
  font-weight: $font-weight-medium;
}

.slider {
  margin-top: toRem(25);
  margin-bottom: 16px;
  width: 100%;
  height: -webkit-fit-content;
  height: -moz-fit-content;
  height: fit-content;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  overflow-x: scroll;
  padding: 15px 15px 15px 12px;

  -webkit-transition: $transition-duration-slow $transition-easing-3;

  -o-transition: $transition-duration-slow $transition-easing-3;

  transition: $transition-duration-slow $transition-easing-3;

  &__card {
    min-width: toRem(288);
    min-height: toRem(190);
    border-radius: toRem(8);
    -webkit-box-shadow: 0px 2px 10px 2px rgba(0, 0, 0, 0.1);
    box-shadow: 0px 2px 10px 2px rgba(0, 0, 0, 0.1);
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    padding: 28px 21px 20px 2px;

    &__wrapper {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      width: 100%;
      gap: toRem(4);
      color: rgba(0, 0, 0, 1);
      font-weight: $font-weight-bold;

      &__img {
        cursor: pointer;
        aspect-ratio: 1.06;
        border-radius: 8px;
        width: 100px;

        -webkit-transition: $transition-duration-normal $transition-easing-3;

        -o-transition: $transition-duration-normal $transition-easing-3;

        transition: $transition-duration-normal $transition-easing-3;
      }

      &__data {
        -ms-flex-item-align: start;
        -ms-grid-row-align: start;
        align-self: start;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        width: 100%;
        &__name {
          cursor: pointer;
          font-size: 15px;
          line-height: 1.2;
          width: -webkit-fit-content;
          width: -moz-fit-content;
          width: fit-content;
        }
        &__provider {
          cursor: pointer;
          font-size: 11px;
          font-weight: $font-weight-normal;
          line-height: 2;
          margin-top: toRem(7);
          -ms-flex-item-align: start;
          -ms-grid-row-align: start;
          align-self: start;
        }

        &__price {
          -ms-flex-item-align: end;
          -ms-grid-row-align: end;
          align-self: end;
          margin-top: toRem(15);

          & span {
            line-height: 1.2;
          }
          & span:first-child {
            font-size: $font-size-xlarge;
            font-weight: $font-weight-bolder;
          }
          & span:nth-child(2) {
            font-size: 10px;
          }
          & span:last-child {
            font-size: 10px;
          }
        }
      }
    }

    &__btn-mobile {
      cursor: pointer;

      border-radius: 5px;
      background-color: rgba(255, 255, 255, 1);
      -ms-flex-item-align: end;
      -ms-grid-row-align: end;
      align-self: end;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      gap: toRem(15);
      padding: toRem(14) toRem(17);
      border: 1px solid rgba(222, 222, 222, 1);

      &__text {
        color: map-get($map: $UI-color, $key: 'btn-text-ternary');
        font-weight: $font-weight-bold;
        font-size: $font-size-normal;
      }

      & img {
        -o-object-fit: contain;
        object-fit: contain;
        -o-object-position: center;
        object-position: center;
        width: 13px;
        height: 100%;
        margin-right: toRem(3);
        margin-top: toRem(3);

        &:last-child {
          margin-right: 0;
        }
      }

      &:hover {
        background-color: map-get($map: $UI-color, $key: 'btn-bg-main-hover');
      }
    }
    &__btn-desktop {
      display: none;
    }

    &__rating {
      display: none;
    }
  }

  &__card:not(:first-child) {
    margin-left: toRem(16);
  }
}

/* 900px */
@include responsiveness(tablet-landscape) {
  .slider {
    &__card:not(:first-child) {
      margin-left: toRem(22);
    }

    &__card {
      padding-right: toRem(20);
      min-width: 250px;
      min-height: 381px;
      padding: 0;

      &__wrapper {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        gap: 0;
        padding: 0;
        border-radius: toRem(8);

        overflow: hidden;

        &__img {
          width: 100%;

          &:hover {
            -webkit-transform: scale(1.2);
            -ms-transform: scale(1.2);
            transform: scale(1.2);
          }
        }

        &__data {
          background-color: white;
          z-index: 1;
          &__name {
            margin: toRem(14) 0 0 toRem(12);
            z-index: 2;
          }
          &__provider {
            margin: toRem(7) 0 0 toRem(12);
          }

          &__price {
            -ms-flex-item-align: start;
            -ms-grid-row-align: start;
            align-self: start;
            margin: toRem(29) 0 0 toRem(12);
          }
        }
      }
      &__btn-mobile {
        display: none;
      }
      &__btn-desktop {
        cursor: pointer;
        z-index: 2;

        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-item-align: end;
        -ms-grid-row-align: end;
        align-self: end;
        margin: toRem(-30) 0 toRem(33) 0;
        width: -webkit-fit-content;
        width: -moz-fit-content;
        width: fit-content;
      }

      &__rating {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -ms-flex-direction: row;
        flex-direction: row;
        width: 83px;
        margin: toRem(-30) 0 toRem(12) toRem(10);

        & svg {
          cursor: pointer;
          -o-object-fit: contain;
          object-fit: contain;
          -o-object-position: center;
          object-position: center;
          width: 100%;
        }
      }
    }
  }
}
</style>
