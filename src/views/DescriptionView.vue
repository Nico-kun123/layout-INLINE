<script setup>
import DescriptionInfo from '@/components/DescriptionInfo.vue'
import DescriptionBuy from '@/components/DescriptionBuy.vue'
</script>

<template>
  <div class="page-content">
    <div class="description">
      Томаты на ветке красные (помидоры) - более плотные, яркие и ароматные по сравнению с обычными.
      Они славятся низкой калорийностью и высоким содержанием витаминов, клетчатки, пектина и
      минеральных веществ. В них содержатся также каротиноиды, кислоты и мощный антиоксидант
      ликопин.<br /><br />Помидор - незаменимый продукт в мировой кулинарии. Он - основа
      многочисленных соусов, маринадов, кетчупа, испанского холодного супа Гаспачо или итальянской
      закуски Капрезе. С ним делают салаты, его тушат, солят и консервируют. Помидоры на веточке
      особенно красиво смотрятся в запеченном виде.
    </div>

    <!-- "Характеристики", "Пищевая ценность" и "Условия хранения" -->
    <DescriptionInfo />

    <!-- Scrollbar с продуктами -->
    <DescriptionBuy />
  </div>
</template>

<style scoped lang="scss">
.description {
  color: map-get($UI-color, 'text-main');
  -ms-flex-item-align: start;
  -ms-grid-row-align: start;
  align-self: start;
  margin-top: toRem(24);
  font-size: $font-size-normal;
  line-height: $line-height-normal;

  -webkit-transition: $transition-duration-normal $transition-easing-3;
  -o-transition: $transition-duration-normal $transition-easing-3;
  transition: $transition-duration-normal $transition-easing-3;
}

/* 1200px */
@include responsiveness(desktop) {
  .description {
    margin-top: 50px;
  }
}
</style>
