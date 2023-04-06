<template>
  <div>
    <AppHeader />
    <router-view />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";

export default {
  components: {
    AppHeader,
    AppFooter,
  },
  watch: {
    "$route.href"() {
      if (!this.$route.hash) {
        window.scrollTo({
          top: 0,
          behavior: "instant",
        });
      }
    },
  },
  data() {
    return {
      links: {},
    };
  },
};
</script>

<style lang="scss">
#app {
  font-family: vincente, sans-serif;
  text-align: center;
  color: #2c3e50;
  background: #12161f;
  font-size: 18px;
  // min-height: 1000px;
}

*,
*::after,
*::before {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;

  & a {
    color: inherit;
    text-decoration: none;
    color: #fff;
  }
}

h1,
h2,
h3,
h5 {
  margin: 0;
}

.wrapper {
  max-width: 1920px;
  margin: 0 auto;
}

.title-headings {
  font-size: calc(38px + 25 * ((100vw - 769px) / 2048)) !important;
}

.logo {
  width: 250px;
  min-width: 250px;
  position: relative;

  @media (max-width: 1200px) {
    width: 250px;
  }

  &-link {
    position: absolute;
    left: 50%;
    top: 40%;
    transform: translate(-50%, -50%);
    height: 150px;
    width: 100%;
  }

  & img {
    height: 190px;
    object-fit: contain;
  }
}

.slider-heading {
  /* font-size: calc(42px + (72 - 42) * ((100vw - 768px) / (1600 - 768))); */
  /* font-size: calc(55px + 50 * (100vw - 769px) / 2048) !important; */
  font-size: calc(40px + 15 * ((100vw - 769px) / 2048));
  line-height: 130%;

  margin-bottom: 40px;

  @media (max-width: 800px) {
    font-size: 35px;
  }
}

.slider-highlighted {
  color: #ed8f07;
}

.slider-inner-area {
  & > * {
    margin-bottom: 25px;
  }
}
</style>
