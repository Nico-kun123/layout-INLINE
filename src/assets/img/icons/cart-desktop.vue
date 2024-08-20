<template>
  <svg width="66" height="36" viewBox="0 0 66 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="18" width="48" height="36" fill="#429F3A" />
    <circle cx="18" cy="18" r="18" fill="#429F3A" />
    <g clip-path="url(#clip0_8_32213)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M28 27C28 25.8954 28.8954 25 30 25C31.1046 25 32 25.8954 32 27C32 28.1046 31.1046 29 30 29C28.8954 29 28 28.1046 28 27Z"
        fill="white"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M39 27C39 25.8954 39.8954 25 41 25C42.1046 25 43 25.8954 43 27C43 28.1046 42.1046 29 41 29C39.8954 29 39 28.1046 39 27Z"
        fill="white"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M21 7C21 6.44772 21.4477 6 22 6H26C26.4766 6 26.887 6.33639 26.9806 6.80374L27.8204 11H44C44.298 11 44.5805 11.1329 44.7705 11.3626C44.9605 11.5922 45.0381 11.8946 44.9823 12.1873L43.3809 20.5848C43.2437 21.2754 42.868 21.8958 42.3195 22.3373C41.7738 22.7766 41.0916 23.011 40.3914 23H30.6886C29.9884 23.011 29.3062 22.7766 28.7605 22.3373C28.2122 21.8959 27.8366 21.2759 27.6993 20.5857C27.6993 20.5854 27.6994 20.5859 27.6993 20.5857L26.0288 12.2392C26.022 12.2116 26.0164 12.1835 26.012 12.1551L25.1803 8H22C21.4477 8 21 7.55228 21 7ZM28.2207 13L29.6608 20.1952C29.7066 20.4254 29.8318 20.6322 30.0146 20.7793C30.1974 20.9265 30.4262 21.0047 30.6608 21.0002L30.68 21H40.4L40.4192 21.0002C40.6538 21.0047 40.8826 20.9265 41.0654 20.7793C41.2474 20.6328 41.3723 20.4273 41.4185 20.1984L42.7913 13H28.2207Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_8_32213">
        <rect width="24" height="24" fill="white" transform="translate(21 6)" />
      </clipPath>
    </defs>
  </svg>
</template>

<script>
export default {
  name: 'CartDesktop'
}
</script>

<style scoped lang="scss">

svg {
  -webkit-transition: $transition-duration-fast $transition-easing-3;
  -o-transition: $transition-duration-fast $transition-easing-3;
  transition: $transition-duration-fast $transition-easing-3;

  &:hover {
    fill: map-get($UI_color, 'btn-bg-secondary-hover');

    & rect {
      fill: inherit;
      -webkit-transition: inherit;
      -o-transition: inherit;
      transition: inherit;
    }
    & circle {
      fill: inherit;
      -webkit-transition: inherit;
      -o-transition: inherit;
      transition: inherit;
    }
  }
}
</style>
