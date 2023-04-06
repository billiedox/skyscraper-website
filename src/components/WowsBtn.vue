<template>
  <button type="button" class="wows-btn" v-if="buttonType === 'button'">
    <h1><slot /></h1>
  </button>
  <router-link :to="url" v-else-if="buttonType === 'router-link'">
    <button type="button" class="wows-btn">
      <h1>
        <slot v-if="hasSlot" />
        <span v-else> MINT LAND EVENT COMING SOON </span>
      </h1>
    </button>
  </router-link>
  <a
    class="wows-btn-link"
    :href="url"
    v-else-if="buttonType === 'link'"
    :target="url === '#' ? '' : '_blank'"
  >
    <button type="button" class="wows-btn">
      <span>
        <slot />
      </span>
    </button>
  </a>
</template>

<script>
export default {
  computed: {
    hasSlot() {
      return this.$slots.default;
    },
  },
  props: {
    buttonType: {
      type: String,
      default: () => "button",
    },
    url: {
      type: String,
      default: () => "#",
    },
  },
};
</script>

<style lang="scss">
.wows-btn-link {
  display: inline-block;

  @media (max-width: 900px) {
    & .wows-btn {
      width: 100%;
    }
  }
}

.wows-btn {
  text-transform: uppercase;
  font-weight: bold;
  font-family: "acumin-pro-condensed";
  font-style: italic;
  color: #fff;
  padding: 12px 40px;
  position: relative;
  line-height: 130%;
  z-index: 100;
  // box-shadow: 0px 0px 28px 7px rgba(237, 187, 107, 0.26);
  // box-shadow: 0px 0px 39px 10px rgba(239, 193, 108, 0.39);
  transition: all 0.3s;

  border: none;
  overflow: hidden;

  background: linear-gradient(
    -180deg,
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

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(238, 190, 80, 1) 0.18%,
      rgba(213, 109, 77, 1) 64.67%,
      rgba(173, 90, 67, 1) 71.29%,
      rgba(122, 66, 55, 1) 80.81%,
      rgba(84, 49, 46, 1) 89.12%,
      rgba(61, 38, 40, 1) 95.79%,
      rgba(53, 34, 38, 1) 100%
    );
    transform: translateY(-25%);

    transition: all 0.3s;
    z-index: -1;
    opacity: 0;
  }

  &:not(:disabled):hover {
    box-shadow: 0px 0px 15px 1px rgba(216, 191, 69, 1);
    border-top: solid 1px white;
  }

  &:not(:disabled):hover::before {
    transform: translateY(-1);
    opacity: 1;
  }

  &:disabled {
    opacity: 0.9;
  }

  h1 {
    margin: 0;
  }

  span {
    font-size: 28px;
  }

  @media (max-width: 800px) {
    padding: 8px 25px !important;

    h1 {
      font-size: calc(22px + 2 * ((100vw - 320px) / 900)) !important;
    }
  }
}
</style>
