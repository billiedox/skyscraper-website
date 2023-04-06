<template>
  <!-- BANNER -->
  <h1 class="home-mint-banner">
    <h2 class="wrapper">
      <div class="home-mint-banner__parent">
        <div class="home-mint-banner__child">
          <!-- <router-link to="#"> -->
          <WowsBtn buttonType="link" :url="links.whitelist"
            >JOIN WHITELIST</WowsBtn
          >
          <!-- </router-link> -->
        </div>
        <div class="home-mint-banner__child">
          <!-- <iframe
            title="vimeo-player"
            src="https://player.vimeo.com/video/756129584?h=ff3420631d&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            width="768"
            height="432"
            frameborder="0"
            allowfullscreen
          ></iframe> -->
          <!-- <img src="@/assets/audit/banner.jpg" alt="" /> -->
        </div>
      </div>
    </h2>
  </h1>
</template>

<script>
// @ is an alias to /src
import WowsBtn from "@/components/WowsBtn.vue";
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["links"]),
  },
  components: {
    WowsBtn,
  },
};
</script>

<style lang="scss">
.home-mint-banner {
  background: url("@/assets/home/bg.jpg");
  // height: calc(700px + 100 * ((100vw - 769px) / 2048));
  padding-top: calc(10vh + 10 * ((100vw - 769px) / 2048));
  padding-bottom: calc(10vh + 10 * ((100vw - 769px) / 2048));

  & .wrapper {
    margin: 0 auto;
    max-width: 1920px;
  }

  &__parent {
    display: grid;
    grid-template-columns: 40% 60%;
    align-items: flex-start;

    @media (max-width: 1100px) {
      grid-template-columns: 50% 50%;
    }

    @media (max-width: 1000px) {
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
      gap: 4vw;
    }
  }
  &__child {
    margin: 0 2vw;
    display: flex;
    justify-content: flex-end;

    & img {
      object-fit: contain;
      width: 100%;
    }

    @media (max-width: 1000px) {
      width: 90%;

      & img {
        width: 100%;
        height: 500px;
      }

      & a {
        margin: 0 auto;
        width: 100%;
      }

      & .wows-btn {
        width: 100%;
        margin: 0 auto;
      }
    }

    @media (max-width: 800px) {
      & img {
        height: 400px;
      }
    }

    @media (max-width: 500px) {
      & img {
        height: 300px;
      }
    }

    &:first-of-type {
      justify-content: flex-start;
    }
  }
}
</style>
