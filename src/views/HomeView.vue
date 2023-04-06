<template>
  <BlockVideo :videoOptions="videoOptions"/>
  <BlockFraction />
  <BlockInfo v-show="false" />
  <BlockIntro />
  <BlockSteps />
  <BlockTeam />
  <BlockFaq />
</template>

<script>
import BlockVideo from "@/components/BlockVideo.vue";
import BlockFraction from "@/components/BlockFraction.vue";
import BlockInfo from "@/components/BlockInfo.vue";
import BlockIntro from "@/components/BlockIntro.vue";
import BlockFaq from "@/components/BlockFaq.vue";
import BlockSteps from "@/components/BlockSteps.vue";
import BlockTeam from "@/components/BlockTeam.vue";
import videoSrc from "@/assets/home/main_bg.mp4";
import mobileHomeBg from "@/assets/home/home-static-mobile.png";

export default {
  components: {
    BlockVideo,
    BlockFraction,
    BlockInfo,
    BlockIntro,
    BlockFaq,
    BlockSteps,
    BlockTeam,
  },
  data() {
    return {
      videoOptions: {
        ref: 'mainBg',
        videoSrc,
        mobileBg: mobileHomeBg,
      }
    }
  },
  mounted() {
    this.$router.push("/");
  },
};
</script>

<style lang="scss">
.home {
  display: grid;
  grid-template-columns: 1800px, 1fr;
  justify-content: center;
  justify-self: center;
  margin: 0 auto;
}
//.wrapper {
// display: grid;
//@media (min-width: 1800px) {
//  max-width: 1800px;
//  margin: auto;
//}
//}
iframe {
  position: relative;
  z-index: 10;
  @media (min-width: 1600px) {
    // height: 430px;
    // width: 700px;
    width: 900px;
    height: 500px;
  }
  @media (max-width: 1300px) {
    // height: 366px;
    // width: 650px;
    width: 750px;
    // height: 450px;
  }
  @media (max-width: 1100px) {
    height: 280px;
    width: 500px;
  }
  @media (max-width: 600px) {
    height: 225px;
    width: 400px;
  }
  @media (max-width: 400px) {
    height: 200px;
    width: 300px;
  }
}

.title {
  color: #fff;
  font-family: "acumin-pro-condensed", sans-serif;
  font-weight: bold;
  font-style: italic;
  text-transform: uppercase;
  font-size: calc(55px + 50 * ((100vw - 769px) / 2048));
  margin-bottom: 50px;
  @media (max-width: 1000px) {
    font-size: calc(40px + 10 * ((100vw - 370px) / 800));
    margin-bottom: 30px;
  }
}

// КНОПКИ СЛАЙДЕРА
.slider-arrow {
  height: 55px;
  width: 55px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%) translateX(-20px) !important;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.3s;

  // box-shadow: 0px 0px 10px 0px rgba(216, 191, 69, 1);

  &:hover {
    opacity: 1;
    filter: drop-shadow(0px 0px 10px rgba(216, 191, 69, 1));
  }

  @media (max-width: 800px) {
    display: none;
  }

  &.right {
    right: 0;
  }

  &.left {
    left: 0;
    transform: rotate(180deg) translateY(50%) translateX(-20px) !important;
  }

  & img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}

.swiper-pagination {
  position: absolute;
  bottom: 0;
  left: 50% !important;
  transform: translate(-50%, 0);
  display: none;

  @media (max-width: 800px) {
    display: block;
  }

  &-bullet {
    background: lightgrey !important;
    &-active {
      background: #eab169 !important;
    }
  }
}
</style>
