<template>
  <h1 class="home-banner">
    <h2 class="map">
      <div class="wrapper">
        <div class="btn-wrapper">
          <WowsBtn
            class="whitelist-btn"
            buttonType="link"
            :url="links.whitelist"
          >
            JOIN WHITELIST
          </WowsBtn>
        </div>
        <div class="slider-block">
          <div class="slider-arrow__wrapper">
            <div class="slider-arrow left">
              <img
                src="@/assets/icons/arrow.svg"
                alt=""
                @click="bannerSwiper.slidePrev()"
              />
            </div>
            <div class="slider-arrow right">
              <img
                src="@/assets/icons/arrow.svg"
                alt=""
                @click="bannerSwiper.slideNext()"
              />
            </div>
          </div>
          <swiper
            class="home-banner__slider"
            @swiper="onBannerSwiper"
            :modules="modules"
            :pagination="{ clickable: true }"
            :autoplay="{
              delay: 30000,
              disableOnInteraction: false,
            }"
          >
            <swiper-slide
              v-for="(item, i) of bannerSlides"
              :key="i"
              class="home-banner__slider-slide"
            >
              <div v-html="item" />
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </h2>
    <!-- <div class="home-banner__teams-wrapper">
      <WowsBtn class="faction-btn" buttonType="link" :url="links.whitelist"
        >CHOOSE YOUR FACTION</WowsBtn
      >
      <div class="home-banner__teams">
        <img
          src="@/assets/home/CHARACTER-ROUNDELS-BOIS.png"
          alt=""
          class="home-banner__teams-item"
        />
        <img
          src="@/assets/home/CHARACTER-ROUNDELS-CATS.png"
          alt=""
          class="home-banner__teams-item"
        />
        <img
          src="@/assets/home/CHARACTER-ROUNDELS-WOLVES.png"
          alt=""
          class="home-banner__teams-item"
        />
        <img
          src="@/assets/home/CHARACTER-ROUNDELS-RATS.png"
          alt=""
          class="home-banner__teams-item"
        />
      </div>
    </div> -->
    <img
      src="@/assets/home/hero_largecat_back.png"
      class="home-banner-team-preview"
    />
    <img
      src="@/assets/home/buildings.png"
      class="home-banner-buildings"
      alt=""
    />
  </h1>
</template>

<script>
// @ is an alias to /src
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import WowsBtn from "@/components/WowsBtn.vue";
import { mapGetters } from "vuex";
import "swiper/css/pagination";

export default {
  components: {
    Swiper,
    SwiperSlide,
    WowsBtn,
  },
  data() {
    return {
      bannerSwiper: null,
      modules: [Autoplay, Pagination],
      bannerSlides: [
        `
            <span class="slider-heading slider-highlighted">THE LAND GRAB IS ON...</span>
            <br>
            NEW YORK CITY, SUMMER OF 1987.
            <br><br>
            A PIVOTAL TIME, WHERE EXTRAVAGANCE AND POVERTY COLLIDE, WHILE ART, CRIME AND GREED EXPLODE ONTO THE STREETS...
          `,
        `
            FOUR FACTIONS RISE TO THE FORE, EACH VYING FOR
            POWER AND CONTROL OF NYC.
            <br><br>
            EACH HAS THEIR OWN METHODS AND STRENGTHS,
            EACH HAS THEIR OWN VISION OF NYC.
          `,
        `
            CHOOSE YOUR SIDE, ACT ALONE OR AS A CLAN OR PLAY ONE SIDE AGAINST ANOTHER
            <br><br>
            BUY YOUR LAND, BUILD YOUR VISION, BUT BE PREPARED TO DEFEND WHAT IS YOURS OR TO TAKE WHAT IS NOT.
          `,
      ],
    };
  },
  methods: {
    onBannerSwiper(swiper) {
      this.bannerSwiper = swiper;
    },
  },
  computed: {
    ...mapGetters(["links"]),
  },
};
</script>

<style lang="scss">
.home-banner {
  position: relative;
  z-index: 1;

  margin: 0;

  & .wrapper {
    max-width: 1920px;
    width: 100%;
    margin: 0 auto;
    padding-top: 150px;
    padding-bottom: 500px;
    position: relative;
    z-index: 10;
    height: 110vh;

    & .btn-wrapper {
      width: 100%;
      display: flex;

      & .whitelist-btn {
        margin-bottom: 50px;
        margin-left: 150px;
        // margin-top: 50px;

        & .wows-btn {
          padding: 5px 60px !important;
        }

        @media (max-width: 1400px) {
          margin-left: 100px;
        }

        @media (max-width: 900px) {
          // margin-top: 50px;
          // margin-left: 10vw;
          // margin-right: 10vw;
          // width: 100% !important;
          margin: 50px auto;

          & .wows-btn {
            width: 100%;
            padding: 10px 60px;
          }
        }
      }
    }

    @media (max-width: 1400px) {
      // padding-top: 200px;
      padding-bottom: 200px;
    }

    @media (max-width: 1100px) {
      // padding-top: 150px;
      padding-bottom: 150px;
    }

    @media (max-width: 700px) {
      padding-top: 100px;
      padding-bottom: 0;
    }
  }

  & .map {
    background: url("@/assets/home/bg.jpg") no-repeat;
    background-size: cover;
    height: 90vh;

    margin: 0;
  }

  & .faction-btn {
    width: 90%;
    max-width: 600px;
    & .wows-btn {
      width: 100% !important;
      margin: 0;
      max-width: 600px;
      font-size: calc(55px + 10 * ((100vw - 769px) / 2048));
      padding: 0;

      @media (max-width: 900px) {
        width: 90%;
      }

      @media (max-width: 600px) {
        font-size: 30px;
      }
    }
  }

  &-buildings {
    position: absolute;
    //bottom: 150px;
    //left: 180px;
    left: 50%;
    top: 50%;
    height: 1250px;
    z-index: 3;
    object-fit: contain;
    transform: translate(-105%, -30%);

    @media (max-width: 1400px) {
      height: 800px;
      //transform: translate(-110%, -75%);
    }

    @media (max-width: 1100px) {
      height: 900px;
      transform: translate(-105%, -55%);
    }

    @media (max-width: 900px) {
      height: 1000px;
      transform: translate(-50%, -50%);
    }

    @media (max-width: 700px) {
      width: 100%;
      height: 800px;
    }
  }

  &-team-preview {
    max-height: 900px;
    height: 50vw;
    object-fit: contain;
    position: absolute;
    //bottom: -290px;
    bottom: 0;
    right: 0;
    z-index: 4;

    @media (max-width: 1400px) {
      height: 40vw;
    }

    @media (max-width: 1100px) {
      //height: 48vw;
      height: 550px;
    }

    @media (max-width: 700px) {
      display: none;
    }
  }

  &__teams-wrapper {
    background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(238, 190, 80, 1) 0.18%,
      rgba(213, 109, 77, 1) 19.43%,
      rgba(175, 91, 68, 1) 27.99%,
      rgba(138, 74, 59, 1) 38.12%,
      rgba(107, 59, 51, 1) 48.72%,
      rgba(83, 48, 45, 1) 59.77%,
      rgba(66, 40, 41, 1) 71.45%,
      rgba(56, 36, 39, 1) 84.2%,
      rgba(53, 34, 38, 1) 100%
    );
    padding: 40px 5vw;
  }

  &__teams {
    display: grid;
    grid-template-columns: repeat(4, 350px);
    justify-content: center;

    @media (max-width: 1400px) {
      grid-template-columns: repeat(4, 250px);
    }

    @media (max-width: 1100px) {
      grid-template-columns: repeat(2, 200px);
      justify-content: flex-start;
    }

    @media (max-width: 700px) {
      grid-template-columns: repeat(2, 180px);
      justify-content: center;
    }

    &-item {
      width: 100%;
      height: 100%;
      object-fit: contain;
      position: relative;
      z-index: 5;
    }
  }

  & .slider-block {
    position: relative;
  }

  &__slider {
    width: 85%;
    margin: 0 auto;
    font-family: "acumin-pro-condensed", sans-serif;
    font-weight: bold;
    font-style: italic;
    padding-bottom: 50px !important;

    @media (max-width: 1400px) {
      width: 80%;
    }

    @media (max-width: 900px) {
      width: 75%;
    }

    &-slide {
      //font-size: calc(50px + 30 * ((100vw - 769px) / 2048));
      font-size: calc(30px + (50 - 30) * ((100vw - 768px) / (1600 - 768)));
      // font-size: 2em;
      //line-height: 38px;
      //line-height: calc(25px + 10 * ((100vw - 769px) / 2048));
      line-height: 45px;
      color: #fff;
      text-transform: uppercase;
      text-align: left;
      display: flex;
      justify-content: flex-end;

      @media (min-width: 1600px) {
        font-size: 50px;
      }

      @media (max-width: 1400px) {
        justify-content: center;
      }

      @media (max-width: 1000px) {
        font-size: calc(30px + 5 * ((100vw - 370px) / 800));
        line-height: calc(28px + 5 * ((100vw - 370px) / 800));
        // margin-right: 5vw;
      }

      & > div {
        @media (min-width: 1400px) {
          width: 900px;
        }
      }
    }
  }
}
</style>
