<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav>
    <!-- check if active -->
    <RouterLink v-if="$route.path === '/description'" class="active" to="/description">{{
      'Описание'.toUpperCase()
    }}</RouterLink>
    <RouterLink v-else to="/description">{{ 'Описание'.toUpperCase() }}</RouterLink>
    <RouterLink v-if="$route.path === '/reviews'" class="active" to="/reviews">{{
      'Отзывы'.toUpperCase()
    }}</RouterLink>
    <RouterLink v-else to="/reviews">{{ 'Отзывы'.toUpperCase() }} </RouterLink>
    <RouterLink v-if="$route.path === '/origins'" class="active" to="/origins">{{
      'Откуда'.toUpperCase()
    }}</RouterLink>
    <RouterLink v-else to="/origins">{{ 'Откуда'.toUpperCase() }}</RouterLink>
  </nav>
  <div class="separator"></div>
</template>

<style lang="scss" scoped>
nav {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin: toRem(16) auto 0 auto;
  height: toRem(40);

  font-size: $font-size-normal;
  gap: toRem(48);
  margin-right: toRem(20);
  margin-left: toRem(20);

  & a {
    color: map-get($UI-color, 'navbar-link');
    padding-bottom: toRem(18);
    font-weight: $font-weight-medium;
    -webkit-transition: $transition-duration-fast $transition-easing-3;
    -o-transition: $transition-duration-fast $transition-easing-3;
    transition: $transition-duration-fast $transition-easing-3;

    &:not(.active):hover {
      color: map-get($UI-color, 'navbar-link-hover');
    }
  }

  & .active {
    border-bottom: 5px solid map-get($UI-color, 'navbar-link-active');
    font-weight: $font-weight-bold;
  }
}

/* 1200px */
@include responsiveness(desktop) {
  nav {
    font-size: $font-size-large;
    gap: toRem(100);
    margin-right: 0;
    margin-left: 0;
  }
}
</style>
