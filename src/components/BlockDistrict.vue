<template>
  <div class="home-district">
    <div class="home-district__teams-wrapper wrapper__districts">
      <div class="home-district__teams-wrapper-bg">
        <Swiper
          class="home-district__bg__slider"
          :modules="[EffectFade]"
          effect="fade"
          :initialSlide="0"
          @swiper="ondistrictBgSwiper"
        >
          <swiper-slide v-for="(slide, idx) in districtSlides" :key="idx">
            <img :src="slide.bg" />
          </swiper-slide>
        </Swiper>
      </div>
      <div class="faction-btn-wrapper">
        <div class="faction-btn-wrapper__divider"></div>
        <WowsBtn
          class="faction-btn"
          buttonType="link"
          url="javascript:void(0);"
          target="_self">
          THE FIRST DISTRICTS FOR SALE
        </WowsBtn>
        <div class="faction-btn-wrapper__divider"></div>
      </div>
      <div class="home-district__teams mint-district__teams">
        <div
          class="home-district__teams-item"
          v-for="(slide, slideIndex) of districtSlides"
          :key="slideIndex"
          @click="onClickSlider(slideIndex)"
        >
          <div class="district-avatar">
            <img class="img-glow" :src="slide.glow" alt="" />
            <img class="img-avatar" :src="slide.avatar" alt="" />
          </div>
        </div>
      </div>
      <div class="home-district__slider">
        <swiper
          class="home-district__swiper"
          :initialSlide="0"
          @swiper="ondistrictSwiper"
        >
          <swiper-slide
            v-for="(slide, slideIndex) of districtSlides"
            :key="slideIndex"
            class="home-district__slider-slide"
          >
            <div
              v-show="isDistrict"
              class="home-district__slider-item-district"
            >
              <div class="district__slider-text" v-html="slide.text" />
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <div v-if="isDistrict" class="home-district__btn-district">
        <WowsBtn class="whitelist-btn" buttonType="link" :url="links.whitelist">
          JOIN WHITELIST
        </WowsBtn>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { EffectFade } from 'swiper';
import WowsBtn from '@/components/WowsBtn.vue';
import { mapGetters } from 'vuex';

import startBg from '@/assets/home/district/district-start-bg.png';

import financialAvatar from '@/assets/home/district/financial-wolves.png';
import financialGlow from '@/assets/home/district/wolves-glow.png';
import financialBg from '@/assets/home/district/financial-wolves-bg.png';

import flatironAvatar from '@/assets/home/district/flatiron-bois.png';
import flatironGlow from '@/assets/home/district/bois-glow.png';
import flatironBg from '@/assets/home/district/flatiron-bois-bg.png';

import littleitalyAvatar from '@/assets/home/district/littleitaly-cats.png';
import littleitalyGlow from '@/assets/home/district/littleitaly-cats-glow.png';
import littleitaliBg from '@/assets/home/district/littleitaly-cats-bg.png';

import lowereastAvatar from '@/assets/home/district/lowereast-rats.png';
import lowereastGlow from '@/assets/home/district/rats-glow.png';
import lowereastBg from '@/assets/home/district/lowereast-rats-bg.png';

import 'swiper/css';
import 'swiper/css/effect-fade';

export default {
  components: {
    Swiper,
    SwiperSlide,
    WowsBtn,
  },
  data: () => ({
    isDistrict: false,
    districtSwiper: null,
    districtBgSwiper: null,
    startBg,
    districtSlides: [
      {
        text: `
            LITTLE ITALY & CO. SMALL IN SIZE,<br>
            BIG IN FLAVOUR.<br><br>
            MAFIA DISTRICTS & HOT BEDS OF<br>
            SLEAZE AND CORRUPT DEALS. IF THAT'S<br>
            YOUR THING, THEN WELCOME HOME.
          `,
        bg: startBg,
        avatar: littleitalyAvatar,
        glow: littleitalyGlow,
      },
      {
        text: `
            FINANCIAL DISTRICT HAS FALLEN ON<br>
            HARD TIMES. ONCE PAVED IN GOLD, NOW<br>
            PAVED IN RUBBISH.<br><br>
            BUT YOU CANT KEEP A BAD WOLF DOWN,<br>
            TIME TO NEGOTIATE A DEAL
          `,
        bg: financialBg,
        avatar: financialAvatar,
        glow: financialGlow
      },
      {
        text: `
            FLAT IRON & GRAMERCY, ONCE<br>
            RESPECTABLE DISTRICTS, NOW HAVE<br>
            FALLEN PREY TO A BLIGHT OF CRIME &<br>
            CORRUPTION.<br><br>
            FEAR NOT, THERES A FEW GOOD BOIS<br>
            LEFT READY FOR A FIGHT.
          `,
        bg: flatironBg,
        avatar: flatironAvatar,
        glow: flatironGlow
      },
      {
        text: `
            LOWER EAST SIDE. HOW LOW CAN YOU GO?<br><br>
            WELL THE PLOTS MAY BE BE CHEAP...<br>
            BUT THERES A LOT OF BAD THINGS YOU<br>
            CAN DO IN THE LOWER EAST SIDE AND ALL<br>
            OF IT MAKES MONEY...
          `,
        bg: lowereastBg,
        avatar: lowereastAvatar,
        glow: lowereastGlow
      },
    ],
  }),
  setup() {
    return {
      EffectFade,
    }
  },
  computed: {
    ...mapGetters(['links']),
  },
  methods: {
    ondistrictSwiper(swiper) {
      this.districtSwiper = swiper;
    },
    ondistrictBgSwiper(swiper) {
      this.districtBgSwiper = swiper;
    },
    onClickSlider(slideIndex) {
      this.districtSwiper.slideTo(slideIndex);
      this.districtBgSwiper.slideTo(slideIndex, 1000);
      this.isDistrict = true;
      this.districtSlides[0].bg = littleitaliBg;
    },
  },
};
</script>

<style lang="scss">
.mint-district__teams {
  max-width: 1280px !important;
}

.wrapper__districts {
  min-height: 700px !important;
}

.district__slider-text {
  background: rgba(0, 0, 0, 0.5);
  padding: 20px 30px;
  font-size: 30px;
  color: white;
  font-style: italic;
  line-height: 1;
  font-family: "acumin-pro-condensed", sans-serif;
  font-weight: bold;
  text-align: start;

  margin: 0 auto;

  @media screen and (max-width: 1150px) {
    font-size: 25px;
  }
  @media screen and (max-width: 650px) {
    font-size: 22px;
  }
}

.slider-district-text-area {
  & > * {
    font-family: 'acumin-pro-condensed', sans-serif;
    font-weight: bold;
    font-style: italic;
    text-align: left;
    margin-bottom: 15px;
    line-height: calc(30px + 20 * (100vw - 769px) / 2048);
    font-size: calc(30px + 10 * (100vw - 769px) / 2048);
    color: #fff;
    text-transform: uppercase;
  }
}

.home-district {
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: -200px;
    left: 0;
    right: 0;
    height: 200px;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 85%
    );

    z-index: 2;

    @media screen and (max-width: 940px) {
      top: -250px;
      height: 250px;
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 200px;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 1) 15%,
      rgba(0, 0, 0, 0) 100%
    );

    z-index: 2;

    @media screen and (max-width: 940px) {
      height: 250px;
    }
  }

  .faction-btn {
    white-space: nowrap;

    @media screen and (max-width: 500px) {
      white-space: normal;
    }

    button {
      width: auto;
      padding: 10px 30px 10px 30px;
    }

    &-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;

      gap: 10px;

      width: 100%;
      padding: 0 20px;
      position: absolute;
      top: -30px;
      left: 50%;
      z-index: 3;

      transform: translateX(-50%);

      @media screen and (max-width: 500px) {
        top: -22px;
        flex-direction: column;
      }

      &__divider {
        width: 100%;
        height: 6px;

        z-index: 2;

        background: #ed8f07;

        box-shadow: 0px 0px 28px 5px rgba(237, 187, 107, 0.46);

        @media screen and (max-width: 500px) {
          display: none;
        }
      }
    }
  }

  &__teams-wrapper {
    background-size: cover;
    padding: 40px 25px 0 25px;

    position: relative;

    &-bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

      img {
        width: 100%;
        height: 100%;

        object-fit: cover;
      }
    }
  }

  &__teams {
    width: 100%;
    margin: 0px auto;
    padding: 0px 90px;

    display: grid;
    grid-template-columns: repeat(4, minmax(100px, 1fr));
    justify-content: center;
    grid-gap: 20px;

    @media (max-width: 1000px) {
      grid-template-columns: repeat(2, minmax(100px, 1fr));
      justify-content: center;
      grid-gap: 10px;
    }

    @media (max-width: 700px) {
      padding: 0px 50px;
    }

    @media (max-width: 550px) {
      padding: 0px 0px;
    }

    &-item {
      width: 100%;

      position: relative;
      z-index: 5;
      display: flex;
      justify-content: center;
      cursor: pointer;
      .district-avatar {
        min-width: 180px;
        max-width: 250px;
        width: 100%;
        position: relative;
        img {
          width: 100%;
  
          object-fit: contain;
        }
        .img-avatar {
          position: relative;
          z-index: 1;
        }
        .img-glow {
          position: absolute;
          top: 0;;
          left: 0;
          right: 0;
          bottom: 0;
          display: none;
          z-index: 0;
        }
        &:hover {
          .img-glow {
            display: block;
          }
        }
      }
    }
  }
  &__bg {
    &__slider {
      height: 100%;
    }
  }
  &__slider {
    max-width: 1100px;
    margin-left: auto;
    margin-right: auto;

    &-item-district {
      width: 60%;
      padding-top: 50px;

      display: flex;
      justify-content: flex-start;

      @media screen and (max-width: 1350px) {
        width: 70%;
        padding: 50px 90px 0px 90px;
      }

      @media screen and (max-width: 1000px) {
        width: 100%;
        padding: 50px 20px 0px 20px;
      }

      &-character {
        @media screen and (max-width: 1000px) {
          width: 100%;
          height: 400px;
          order: 2;
        }

        img {
          width: 100%;
          height: 100%;

          object-fit: contain;
        }
      }

      &-text {
        font-size: 16px;
        @media screen and (max-width: 1000px) {
          width: 100%;
          height: 250px;
          margin-top: 50px;

          order: 1;
        }

        img {
          width: 100%;
          height: 100%;

          object-fit: contain;
        }
      }
    }
  }

  &__btn-district {
    position: absolute;
    bottom: 13%;
    right: 20%;

    margin-top: 10px;
    @media screen and (max-width: 1150px) {
      right: 17%;
    }

    @media screen and (max-width: 1000px) {
      position: relative;
      right: 0;
    }

    .wows-btn {
      padding: 12px 40px;
      @media (max-width: 1150px) {

        font-size: calc(22px + 2 * ((100vw - 320px) / 900));
      }
    }
  }
}
</style>
