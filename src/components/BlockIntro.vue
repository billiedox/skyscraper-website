<template>
  <!-- INTRODUCING -->
  <div class="home-intro" id="intro">
    <div class="home-intro__inner">
      <div class="wrapper wrapper__home-intro">
        <div class="slider-arrow left">
          <img
            src="@/assets/icons/arrow.svg"
            alt=""
            @click="introSwiper.slidePrev()"
          />
        </div>
        <div class="slider-arrow right">
          <img
            src="@/assets/icons/arrow.svg"
            alt=""
            @click="introSwiper.slideNext()"
          />
        </div>
        <swiper
          ref="introSwiper"
          class="home-intro__slider"
          @swiper="onIntroSwiper"
          :modules="modules"
          :pagination="{ clickable: true }"
          :autoplay="{
            delay: 30000,
            disableOnInteraction: false,
          }"
          :spaceBetween="30"
        >
          <swiper-slide
            v-for="(item, i) of introSlides"
            :key="i"
            class="home-intro__slider-slide"
          >
            <div class="home-intro__slider-icon" v-if="item?.icon">
              <img :src="require(`@/assets/icons/${item.icon}.png`)" alt="" />
            </div>
            <div v-html="item.text" />
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <div class="home-intro__seen-inner">
      <div class="wrapper wrapper-home-intro__seen">
        <h1 class="home-intro__seen-title">
          SKYSCRAPER HAS BEEN IN THE NEWS
        </h1>
        <div class="home-intro__seen-partners">
          <div
            class="home-intro__seen-partner"
            v-for="(imageName, i) of images"
            :key="i"
          >
            <img :src="require(`@/assets/asseen/${imageName}.png`)" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css/pagination";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      introSwiper: null,
      modules: [Autoplay, Pagination],
      introSlides: [
        {
          text: `
          <div class="slider-inner-area">
            <p class="slider-heading slider-highlighted">  NEW YORK CITY IN THE EARLY 80’S </p>
            <div>
            <div>
            dragging itself from THE ASHES OF THE LAST DECADE.
            </div>
            <div>
            burgeoning Oil crisis, defi and CEX failures and financial debt.
            </div>
            <div>
            now... Crime and poverty take over
            </div>
            <div>
            THE Paw folk THAT REMAIN, are suffering... 
            </div>
            </div>
          `,
        },
        {
          text: `
          <div class="slider-inner-area">
            <div>
            Amongst the RuinS, broken tenements and catnip addled paw folk there ARE rumours of action.
            </div>
            <div>
                <div>
                City Hall tries to regenerate NYC with developer 
                </div>
                <div>
                permits in a bit to save the city.
                </div>
            </div>
            <div>
            Some call this Gentrification, Others call this Opportunity... 
            </div>
          `,
        },
        {
          text: `
          <div class="slider-inner-area">
            <div>
            but corruption in city hall is rife
            </div>
            <div>
                <div>
                4 oppposing factions rise from the chaos in a bid to take charge of NYC </div>
                <div>
                Some fight for good, others for greed
                </div>
            </div>
            <div>
            they all urge the paw folk of NYC to stand with them to take what is theirs and defend it with their life...
            </div>
          </div>
          `,
        },
      ],
      images: ["treasure", "mashable", "nasdaq", "yahoo"],
    };
  },
  methods: {
    onIntroSwiper(swiper) {
      this.introSwiper = swiper;
    },
  },
  mounted() {},
};
</script>

<style lang="scss">
.slider-inner-area {
  line-height: 1;
  font-size: 30px;
}

.wrapper__home-intro {
  max-width: 1280px !important;
  & .slider-arrow {
    &.left {
      left: 45px;
    }
    &.right {
      right: 45px;
    }
  }
}

.wrapper-home-intro__seen {
  margin-top: 60px !important;
  max-width: 1200px !important;
  padding: 0px 100px;
  
  @media screen and (max-width: 550px) {
    padding: 0px 20px;
  } 
  @media (max-width: 700px) {
    padding: 0px 50px;
  }
  @media (max-width: 550px) {
    padding: 0px 20px;
  }
}

.home-intro {
  position: relative;
  z-index: 2;

  padding: 80px 25px;

  background: url("@/assets/home/bg.jpg") no-repeat;
  background-size: cover;

  @media screen and (max-width: 900px) {
    padding: 70px 25px;
  }

  &__seen {
    &-title {
      color: #ed8f07 !important;
      font-family: "acumin-pro-condensed" !important;
      font-style: italic;
      font-weight: bold;
      font-size: calc(40px + 15 * ((100vw - 769px) / 2048)) !important;
      margin-bottom: 5%;

      @media screen and (max-width: 800px) {
        margin-top: 20px;
      }
    }

    &-partners {
      margin: 0 auto;
      display: grid;
      gap: 10px;
      grid-template-columns: repeat(4, 1fr);

      & img {
        width: 100%;
        height: 100%;
        max-width: 250px;
        object-fit: contain;
        object-position: center;
      }

      @media (max-width: 900px) {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    &-partner {
      display: flex;
      justify-content: center;
    }
  }

  & .wrapper {
    position: relative;
    max-width: 1920px;
    margin: 0 auto;
  }

  &__slider {
    width: 70%;
    margin: 0 auto;
    font-family: "acumin-pro-condensed", sans-serif;
    font-weight: bold;
    font-style: italic;
    padding-bottom: 20px !important;
    z-index: 100 !important;

    @media (max-width: 800px) {
      width: 85%;
      padding-bottom: 20px !important;
    }

    .swiper-wrapper {
      align-items: center;
    }

    & .swiper-pagination-bullets.swiper-pagination-horizontal,
    .swiper-pagination-custom,
    .swiper-pagination-fraction {
      bottom: 0 !important;
    }

    &-icon {
      // margin-bottom: 20px;
      transform: translateY(-30px);
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      max-height: 200px;
      height: 15vw;

      & > img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }

      @media (max-width: 700px) {
        height: 40vw;
        transform: translateY(-5vw);
      }
    }

    &-slide {
      font-size: calc(30px + 10 * ((100vw - 769px) / 2048));
      // font-size: 2em;
      //line-height: 38px;
      line-height: calc(30px + 20 * ((100vw - 769px) / 2048));
      text-align: center;
      color: #fff;
      text-transform: uppercase;

      @media (min-width: 1600px) {
        line-height: 35px;
        font-size: 40px;
      }

      @media (max-width: 1000px) {
        font-size: calc(25px + 5 * ((100vw - 370px) / 800));
        line-height: calc(22px + 10 * ((100vw - 370px) / 800));
        // margin-right: 5vw;
      }
    }
  }
  // &-title {
  //   color: #fff;
  //   text-transform: uppercase;
  //   font-family: vincente, sans-serif;
  //   font-size: calc(70px + 50 * ((100vw - 769px) / 2048));
  //   margin-bottom: 50px;
  //   @media (max-width: 1000px) {
  //     font-size: calc(55px + 10 * ((100vw - 370px) / 800));
  //     margin-bottom: 30px;
  //   }
  // }
}

// КНОПКИ СЛАЙДЕРА
// .slider-arrow {
//   height: 75px;
//   width: 75px;
//   position: absolute;

//   @media (max-width: 800px) {
//     display: none;
//   }

//   &.right {
//     right: 0;
//     transform: rotate(180deg);
//   }

//   &.left {
//     left: 0;
//   }

//   & img {
//     width: 100%;
//     height: 100%;
//     object-fit: contain;
//     margin: 0 1vw;
//   }
// }
</style>
