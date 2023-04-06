<template>
  <div class="header">
    <audio ref="bgAudio" autoplay loop>
      <source src="@/assets/music/audio.mp3" type="audio/mpeg" />
    </audio>
    <div class="wrapper-header">
      <div class="header__inner" v-if="big">
        <!-- SOCIALS -->
        <div class="header__inner-socials outlined">
          <div class="header__inner-volume">
            <!-- :class="{ off: !volumeOn }"
            @click="toggleVolume"
            <img v-if="volumeOn" src="@/assets/icons/volume-on.svg" alt="" />
            <img v-else src="@/assets/icons/volume-off.svg" alt="" /> -->
            <BlockEqualizer v-if="volumeOn" :class="{ off: !volumeOn }" />
          </div>
          <span @click="toggleVolume" class="volume-text pointer">{{
            volumeText
          }}</span>
          <div class="socials-wrapper">
            <a target="_blank" :href="links.discord" class="socials-link">
              <img src="@/assets/social/discord.svg" alt="" />
            </a>
            <a target="_blank" :href="links.twitter" class="socials-link">
              <img src="@/assets/social/twitter.svg" alt="" />
            </a>
          </div>
        </div>
        
        <!-- LINKS AND LOGO -->
        <nav class="header__inner-nav">
          <ul class="nav__list left">
            <li class="nav__list-item">
              <router-link to="/#">LAND DEEDS SALE(SOON)</router-link>
            </li>
            <li class="nav__list-item">
              <router-link to="/#steps" v-scroll-to="'#faq'"
                >word on the street</router-link
              >
            </li>
            <li class="nav__list-item">
              <router-link to="/#intro" v-scroll-to="'#intro'"
                >a city in need</router-link
              >
            </li>
          </ul>
          <!-- LOGO -->
          <div class="logo">
            <router-link to="/" class="logo-link">
              <img src="@/assets/logo.png" alt="logo.png" />
            </router-link>
          </div>

          <ul class="nav__list right">
            <li class="nav__list-item">
              <router-link to="/#steps" v-scroll-to="'#steps'"
                >road to redemption</router-link
              >
            </li>
            <li class="nav__list-item">
              <router-link to="/#steps" v-scroll-to="'#steps'"
                >NYC INVESTOR DECK</router-link
              >
            </li>
            <li class="nav__list-item">
              <router-link to="/#team" v-scroll-to="'#team'"
                >TEAM & ADVISORS</router-link
              >
            </li>
          </ul>
        </nav>
      </div>

      <!-- МОБИЛЬНОЕ МЕНЮ -->

      <div class="header__innermobile" :class="isTop ? '' : 'trans-head'" v-else>
        <div
          class="header__innermobile-wrapper"
          :style="{ background: show ? '#000' : 'transparent' }"
        >
          <div class="burger__menu">
            <img
              src="@/assets/icons/icons__menu.png"
              class="open__menu"
              v-if="!show"
              @click="show = !show"
              key="menu"
            />
            <img
              src="@/assets/icons/iconscl.svg"
              class="close__menu"
              v-else
              @click="show = !show"
              key="close"
            />
          </div>
          <div class="header__inner-volume">
            <BlockEqualizer v-if="volumeOn" :class="{ off: !volumeOn }" />
            <span @click="toggleVolume" class="volume-text">{{ volumeText }}</span>
          </div>

          <!-- <div
            class="header__inner-volume"
            :class="{ off: !volumeOn }"
            @click="toggleVolume"
          >
            <img v-if="volumeOn" src="@/assets/icons/volume-on.svg" alt="" />
            <img v-else src="@/assets/icons/volume-off.svg" alt="" />
            
          </div>
 -->
          <!-- LINKS AND LOGO -->
          <Transition name="slide-fade">
            <div class="header__innercontainer" v-if="show">
              <nav class="header__innercontainer-nav">
                <div class="header__innercontainer-nav-logo">
                  <router-link
                    to="/"
                    class="header__innercontainer-nav-logo-link"
                  >
                    <img src="@/assets/logo.png" alt="" />
                  </router-link>
                </div>
                <ul class="header__innercontainer-nav-wrapper">
                  <li class="header__innercontainer-nav-item">
                    <router-link to="/#intro" v-scroll-to="'#intro'"
                      >a city in need</router-link
                    >
                  </li>
                  <li class="header__innercontainer-nav-item">
                    <router-link to="/#steps" v-scroll-to="'#faq'"
                      >word on the street</router-link
                    >
                  </li>
                  <li class="header__innercontainer-nav-item">
                    <router-link to="/#">LAND DEEDS SALE(SOON)</router-link>
                  </li>
                  <li class="header__innercontainer-nav-item">
                    <router-link to="/#steps" v-scroll-to="'#steps'"
                      >road to redemtoin</router-link
                    >
                  </li>

                  <li class="header__innercontainer-nav-item">
                    <router-link to="/#steps" v-scroll-to="'#steps'"
                      >NYC INVESTOR DECK</router-link
                    >
                  </li>
                  <li class="header__innercontainer-nav-item">
                    <router-link to="/#team" v-scroll-to="'#team'"
                      >TEAM & ADVISORS</router-link
                    >
                  </li>
                </ul>
              </nav>
              <!-- SOCIALS -->
              <div class="header__inner-socials">
                <div class="socials-wrapper" style="margin: 0 auto">
                  <a target="_blank" :href="links.discord" class="socials-link">
                    <img src="@/assets/social/discord.svg" alt="" />
                  </a>
                  <a target="_blank" :href="links.twitter" class="socials-link">
                    <img src="@/assets/social/twitter.svg" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </Transition>
        </div>
        <div class="logo mobile-logo" v-if="isTop">
          <a href="/" class="logo-link">
            <img src="@/assets/logo.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import BlockEqualizer from './BlockEqualizer.vue';

export default {
  components: {
    BlockEqualizer,
  },
  data() {
    return {
      volumeTextOn: 'sound on',
      volumeTextOff: 'sound off',
      volumeText: 'sound off',
      volumeOn: true,
      big: true,
      show: false,
      isTop: true,
    };
  },
  computed: {
    ...mapGetters(['links']),
  },
  mounted() {
    window.addEventListener('resize', this.onResize);
    window.addEventListener('scroll', this.handleScroll);
    this.onResize();

    this.$refs.bgAudio.addEventListener(
      'timeupdate',
      () => {
        if (this.$refs.bgAudio.paused) {
          this.volumeOn = false;
        } else {
          this.volumeOn = true;
        }
      },
      false
    );
  },
  unmounted() {
    window.removeEventListener('resize', this.onResize);
    window.removeEventListener('scroll', this.handleScroll);
  },
  watch: {
    '$route.fullPath'() {
      setTimeout(() => {
        this.show = false;
      }, 10);
    },
    show() {
      if (this.show) {
        document.documentElement.style.overflow = 'hidden';
      } else {
        document.documentElement.style.overflow = 'visible';
      }
    },
  },
  methods: {
    toggleVolume() {
      this.volumeOn = !this.volumeOn;

      if (this.volumeOn) {
        this.$refs.bgAudio.play();
        this.volumeText = this.volumeTextOff;
      } else {
        this.$refs.bgAudio.pause();
        this.$refs.bgAudio.currentTime = 0;
        this.volumeText = this.volumeTextOn;
      }
    },
    onResize() {
      this.big = window.innerWidth >= 1200;
      this.show = false;
    },
    handleScroll() {
      if(window.scrollY > 130) {
        this.isTop = false;
      } else {
        this.isTop = true;
      }
    }
  },
};
</script>

<style lang="scss">
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}
.pointer {
  cursor: pointer;
}

.volume-text {
  font-family: "acumin-pro-condensed", sans-serif;
  font-weight: bold;
  font-style: italic;
  color: #fff;
  flex: none;
  font-size: 12px;
  width: 50px;
  margin: 0 5px;
  user-select: none;
}

.wrapper-header {
  max-width: 100%;
}

.header {
  padding: 10px 25px 0;
  background: #100907;
  position: relative;
  z-index: 10000;
  @media (max-width: 1200px) {
    padding: 0;
  }

  &__innermobile {
    position: absolute;
    top: 0;
    background-color: #000000;
    width: 100%;
    height: 80px;

    &-wrapper {
      position: relative;
      z-index: 10000;
    }

  }

  .trans-head {
    position: fixed;
    left: 0;
    right: 0;
    background-color: #000000;
    animation: fadeInUp;
    animation-duration: 1s;
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      top: -50px;
    }
    
    to {
      opacity: 1;
      top: 0;
    }
  }

  &__inner {
    position: relative;
    &-volume {
      width: 90px;

      /* cursor: pointer; */

      @media screen and (max-width: 1200px) {
        display: flex;
        flex-shrink: 2;
        align-items: center;
        justify-content: flex-end;
        position: absolute;
        top: 40px;
        right: 0;
        width: 60px;

        margin-right: 20px;

        transform: translateY(-50%);
      }

      & > img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }

      &.off {
        width: 55px;

        @media screen and (max-width: 1200px) {
          width: 35px;
        }
      }
    }

    &-socials {
      &.outlined {
        position: absolute;
        right: 20px;
      }
      display: flex;
      justify-content: center;
      align-items: center;
      @media (max-width: 1200px) {
        margin-bottom: 20vh;
      }
      & .socials-wrapper {
        display: flex;
      }

      & .socials-link {
        width: 33px;
        height: 33px;
        border: 1px solid white;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 3px;
        margin: 0 5px;
        @media (max-width: 1200px) {
          margin-top: 3vw;
          width: 30px;
          height: 30px;
        }
        @media (max-width: 800px) {
          margin-top: 5vw;
        }
        @media (max-width: 500px) {
          margin-top: 8vw;
        }

        & > img {
          width: 80%;
          height: 80%;
          object-fit: contain;
        }
      }
    }

    &-nav {
      padding-top: 40px;
      display: flex;
      justify-content: space-between;

      & .nav__list-item {
        display: inline-block;
        margin: 0 20px;

        & > a {
          font-family: 'acumin-pro-condensed';
          font-style: italic;
          /* font-weight: bold; */
          text-transform: uppercase;
          font-size: 16px;
          line-height: 140%;
          transition: color 0.3s;

          &:hover {
            color: #ed8f07;
          }
        }
      }

      & .nav__list {
        list-style: none;
        margin: 0;
        padding: 0;
        padding-bottom: 35px;
        // border-bottom: 10px solid #ed8f07;
        // box-shadow: 0px 0px 28px 7px rgba(237, 187, 107, 0.26);
        position: relative;
        width: 100%;

        &::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 6px;
          background: #ed8f07;
          box-shadow: 0px 0px 20px 5px rgba(237, 187, 107, 0.46);
          bottom: 0;
        }

        &.left {
          margin-right: -35px;
          display: flex;
          flex-direction: row-reverse;
          margin &::after {
            right: 0;
          }
          & > li:last-of-type {
            // margin-right: 80px;
            @media (max-width: 1370px) {
              // margin-right: 60px;
            }
          }
        }

        &.right {
          margin-left: -35px;
          display: flex;
          &::after {
            left: 0;
          }
          & > li:first-of-type {
            // margin-left: 80px;
            @media (max-width: 1370px) {
              // margin-left: 60px;
            }
          }
        }
      }
    }
  }
  &__innercontainer {
    position: relative;
    background: #000000;
    height: 100vh;
    width: 100%;
    transition: all 0.4s ease 0s, border-radius 0.8s ease 0s;
    z-index: 10;
    top: 0;
    left: 0;

    &-nav {
      display: flex;
      align-items: center;
      flex-direction: column;

      &-logo {
        width: 200px;
        position: relative;
        margin-bottom: 2vw;
        margin-top: 30px;
        @media (max-width: 800px) {
          margin-bottom: 5vw;
        }
        @media (max-width: 500px) {
          margin-bottom: 10vw;
        }

        & img {
          width: 70%;
          height: 100%;
          object-fit: contain;
        }
      }

      &-item {
        margin: 0 2vw;

        & > a {
          font-weight: bold;
          text-transform: uppercase;
          font-size: calc(30px + 10 * ((100vw - 769px) / 2048));
          transition: color 0.3s;
          font-family: 'acumin-pro-condensed';
          font-style: italic;
          &:hover {
            color: #ed8f07;
          }
        }
      }

      &-wrapper {
        list-style: none;
        margin: 0;
        padding: 0;
        padding-bottom: 2vw;
        border-bottom: 7px solid #ed8f07;
      }
    }
  }
}
.burger__menu {
  width: 46px;
  max-height: 46px;
  min-height: 46px;
  min-width: 46px;
  padding: 0px;
  // margin-bottom: 25px;
  -webkit-transition: background-color 350ms ease;
  transition: background-color 350ms ease;
  color: #fff;
  font-size: 30px;
  margin-left: 2vw;
  position: absolute;
  top: 40px;
  transform: translateY(-50%);
  z-index: 100;
}
.open__menu {
  width: 30px;
  // padding-top: 8px;
}
.close__menu {
  width: 25px;
  // position: static;
  // visibility: hidden;
}

.mobile-logo {
  position: static !important;
  & .logo-link {
    width: 120px;
    height: 130px;
    & img {
      height: 130px;
      position: absolute;
      top: 30px;
      left: 50%;
      transform: translateX(-50%);
    }
    // position: static;
  }
}
</style>
