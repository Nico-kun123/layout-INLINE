<script>
export default {
  name: 'ReviewsView',

  data() {
    function leaveReview() {
      alert('Какая-то обработка события 👀')
    }

    return {
      leaveReview
    }
  }
}
</script>

<template>
  <div class="page-content">
    <div class="description">
      Помогите нам стать ещё лучше. Оставляя отзывы, вы таким образом указываете нам на зоны роста.
      Мы правда, читаем все отзывы.
    </div>

    <button type="button" class="review-btn" @click="leaveReview">Оставить отзыв</button>
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
  max-width: 523px;
  width: 100%;

  -webkit-transition: $transition-duration-normal $transition-easing-3;
  -o-transition: $transition-duration-normal $transition-easing-3;
  transition: $transition-duration-normal $transition-easing-3;
}

.review-btn {
  background-color: map-get($map: $UI-color, $key: 'btn-bg-secondary');
  color: map-get($map: $UI-color, $key: 'btn-text-main');
  margin: toRem(33) 0 0 0;

  &:hover {
    background-color: map-get($map: $UI-color, $key: 'btn-bg-secondary-hover');
  }
}

/* 1200px */
@include responsiveness(desktop) {
  .page-content {
    & .description {
      margin-top: toRem(53);
    }
  }
}
</style>
