<template>
  <!-- BANNER -->
  <h1 class="home-video-banner">
    <div class="wrapper">
      <div class="home-video-banner__parent">
        <div class="home-video-banner__bg">
          <!-- <img src="@/assets/home/main_bg.png" alt="" /> -->
          <video
            v-if="isBig"
            :ref="videoOptions.ref"
            :src="videoOptions.videoSrc"
            autoplay
            loop
            muted
          ></video>
          <img v-else rel="preload" :src="videoOptions.mobileBg" :class="isBig ? '' : ''" alt="" />
        </div>
        <h2 class="home-video-banner__child">
          <WowsBtn class="whitelist-btn" buttonType="link" :url="links.whitelist"
            >JOIN WHITELIST</WowsBtn
          >
        </h2>
      </div>
    </div>
  </h1>
</template>

<script>
// @ is an alias to /src
import WowsBtn from "@/components/WowsBtn.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    WowsBtn,
  },
  data() {
    return {
      isBig: true,
    }
  },
  props: ["videoOptions"],
  computed: {
    ...mapGetters(["links"]),
  },
  mounted() {
    window.addEventListener('resize', this.onResize);
    this.onResize();
  },
  unmounted() {
    window.removeEventListener('resize', this.onResize);
  },
  methods: {
    onResize() {
      this.isBig = window.innerWidth >= 800;
    }
  }
};
</script>

<style lang="scss">
.home-video-banner {
  margin: 0;

  background-color: #000;

  /* box-shadow: inset 0px 33px 25px 0 #000, inset 0 66px 15px 0px #ccc,
    inset 0 99px 5px 0px #fff;
 */
  & .wrapper {
    margin: 0 auto;
    /* max-width: 1920px; */

    max-width: 100% !important;
  }

  &__parent {
    position: relative;
    // max-height: 700px;
    height: 45vw;

    @media (max-width: 800px) {
      height: 80%;
    }

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

  &__bg {
    width: 100%;
    height: 100%;

    position: relative;
    z-index: 1;

    video,
    img {
      width: 100%;
      height: 100%;

      object-fit: cover;
      @media (max-width: 1200px) {
        margin-top: 80px;
      }
    }

  }

  &__child {
    position: absolute;
    bottom: 110px;
    left: 50%;

    z-index: 3;

    transform: translateX(-50%);

    display: flex;
    justify-content: flex-end;
    font-size: 1rem;
    margin: 0;

    @media screen and (max-width: 1000px) {
      bottom: 70px;
    }

    @media screen and (max-width: 500px) {
      bottom: 40px;
    }

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
