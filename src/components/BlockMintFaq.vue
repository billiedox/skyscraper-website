<template>
  <!-- FAQ -->
  <div class="home-faq" id="faq">
    <div class="wrapper wrapper-faq">
      <h1 class="title home-faq-title title-headings">FAQS ON THE LAND DEED SALE</h1>
      <div class="home-faq__items">
        <div class="home-faq-block left">
          <div
            class="home-faq-item"
            v-for="(faq, col) of blocks.slice(0, 3)"
            :key="col"
          >
            <div
              class="home-faq-item-title"
              data-bs-toggle="collapse"
              :data-bs-target="'#' + 'collapse' + col"
              :aria-controls="'collapse' + col"
              aria-expanded="false"
            >
              <h5>{{ faq.title }}</h5>
              <img src="@/assets/icons/arrow-down.svg" style="width: 28px; height: 28px" alt="" />
            </div>
            <div class="collapse home-faq-item-text" :id="'collapse' + col">
              <div>
                {{ faq.text }}
              </div>
            </div>
          </div>
        </div>

        <div class="home-faq-block right">
          <div
            class="home-faq-item"
            v-for="(faq, col) of blocks.slice(3)"
            :key="col"
          >
            <div
              class="home-faq-item-title"
              data-bs-toggle="collapse"
              :data-bs-target="'#' + 'collapse1' + col"
              :aria-controls="'collapse1' + col"
              aria-expanded="false"
            >
              <h5>{{ faq.title }}</h5>
              <img src="@/assets/icons/arrow-down.svg" style="width: 28px; height: 28px" alt="" />
            </div>
            <div class="collapse home-faq-item-text" :id="'collapse1' + col">
              <div>
                {{ faq.text }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <WowsBtn class="whitelist-btn" buttonType="link" :url="links.whitelist"
        >JOIN WHITELIST</WowsBtn
      >
    </div>
  </div>
</template>

<script>
import WowsBtn from "@/components/WowsBtn.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    WowsBtn,
  },
  computed: {
    ...mapGetters(["links"]),
  },
  data() {
    return {
      blocks: [
        {
          title: "What is the land plot mint event?",
          text: "TERRITORIAL GAINS! We are selling a niche selection of Skyscraper land plot deed NFTS, algorithmically generated from a selection of unique districts of New York City. But this is not your average NYC, it is a multiverse version of NYC set back in 1987 filled with anthropomorphic (animals with physical human traits to you and i ) inhabitants and characters. These land plots are the first in-game asset to be sold for Skyscraper and will allow your character and chosen team to expand their territory, develop your land as you see fit and earn the rewards and resources from your hard work. ",
        },
        {
          title: "What are the benefits?",
          text: "LOTS! Your land can be developed, as you see fit. Once developed they will then pay you dividends in resources and rewards from City Hall. Depending on what you develop, based on the plot type and its permits and district affluence, will determine your earnings for both you and your team. The land mint will be randomised so you have a good chance of scoring high-value land in high-value districts. This will be a huge win for you and your chosen faction. Any land can be used as a staging post to reach out further and expand territories.",
        },
        {
          title: "How many land plots will be in the pre-sale?",
          text: "A FEW! We won’t divulge the exact number until close to the launch, but we can tell you that it will be performed in two stages. We can also tell you the land plots themselves will be taken from eleven select NYC districts. These include Hell’s Kitchen, SoHo and the Financial District.",
        },
        {
          title: "When is the pre-sale launch?",
          text: "SOON SOON! We also won’t divulge the exact date for strategic reasons related to market and marketing. But know, It is soon, so get thee to Discord and get busy.",
        },
        {
          title: "Will you be running whitelisting comps and promotions?",
          text: "VIBE CHECK! There will be a select whitelisting filtering process, to ensure you are the right fit for NYC. 1987 NYC is no place for the meek, it's a rat-eat-cat world out there, everyone is out for themselves and only a few good bois are doing the right thing. Get your roller dex, money clips and brick phone and let's make some money moves. Hopefully, you’ll make it.",
        },
        {
          title:
            "Where is best to keep up to date with this pre-sale and game development?",
          text: "DISCORD! We are running a vibrant discord and at least 2 of our core team will be on hand along with a band of mods to keep you up to speed with all development and launches in Skyscraper.",
        },
        // {
        //   title: "How can I earn in Skyscraper?",
        //   text: "IN MANY WAYS! Building units regularly mint randomized tradable NFT resources, the lifeblood of each and every character. The City Hall Fund rewards single sided staking of land and buildings with $turf and rewards trading land and building unit NFTs.  Advertising blocks are available in order to provide real world advertising opportunities the players control. There will be in-game p2p lending using land and buildings as collateral, as well as stable coin defi & lp staking and free in-game missions. Your earning potential delivers value and Skyscraper rewards gameplay,  and craft.",
        // },
        // {
        //   title: "When will the game launch?",
        //   text: "WEN ITS READY ! The full game specification is developed and finished, We are midway through development of the game itself. The Entire NYC 5 boroughs have been mapped and divided into purchasable land plots using a complex algorithm that allows us full control over the types of plots present within any one district. We have 25% of our characters developed. We are on our way, however due to market conditions we will probably delay until we have a favourable headwind. In the meantime we are accruing partners,VC’s and advisors to ensure our best chances of success.",
        // },
        // {
        //   title:
        //     "I am a current investor in WOWS the genesis project behind Skyscraper.",
        //   text: "",
        // },
        // {
        //   title: "What is the connection with WOWS?",
        //   text: "Skyscraper the game has evolved from the Wolves of Wall Street NFT/DeFi cross-over. The unique utilities developed there will be brought into Skyscraper and put to good use. The new team containing new and original core members are here to evolve and learn from any past mistakes. Your WOWS and C-Folios are valuable! We will be providing a 1:1 swap (based on a snapshot), between $WOWS and $TURF with your WOWS being valued at the presale price of $18. You will not lose by holding WOWS. In fact, at current prices, that's an instant 8x gain. Your SFT C-Folios will become powerful genesis characters with unique abilities in Skyscraper. We will provide a swap in order to upgrade the character contracts in due course. We look forward to our next chapter. ",
        // },
        // {
        //   title: "Is their other benefits from partaking in this presale",
        //   text: "YES ! The land and territory your characters will be competing for are being offered in an exclusive land plot sale enabling you unique land and building rights, as well as instant whitelist entry for our next asset presale, plus a whitelist for our DAO token presale. We will have unique discord opportunities also and these will play a large part in that. ",
        // },
        // {
        //   title: "Why did WOWS wither away?",
        //   text: "IT DIDN'T WE’RE STILL HERE ! Ok we did atrophy terribly, the main reason is we were advised incorrectly to only hold a very small microscopic presale for WOWS and grow organically. This meant although we attained the heady heights of $35 millions market cap we had no development budget in Eth. In fact all our value was in $WOWS which we didn’t want to sell so that we didn't affect the price point for our investors. In fact as a team we have only sold about 10% of our vested team tokens and only about 20% of our marketing tokens. So we can with pride say we did our best to protect buyers to our own detriment. The main thing however is we learn and adapt. Our next presale will not be small and we will protect our budgets, as well as take on strategic partnerships to advance our longevity. We look forward to our next chapter. ",
        // },
      ],
    };
  },
};
</script>

<style lang="scss">
.wrapper-faq {
  max-width: 1280px !important;
}

.home-faq {
  background: #a18553;
  padding: 20px 20px 10px 20px;

  & .wrapper {
    max-width: 1920px;
    margin: 0 auto;
  }

  &__items {
    display: flex;
    padding: 0px 100px;
    @media (max-width: 1000px) {
      display: flex;
      padding: 0px 20px;
      flex-direction: column;
      align-items: center;
    }
  }

  &-item {
    border-bottom: 1px solid white;
    margin-bottom: 30px;

    &-title {
      font-family: acumin-pro-condensed;
      font-style: italic;
      text-align: left;
      margin-bottom: 10px;
      display: flex;
      justify-content: space-between;
      // align-items: center;

      & > h5 {
        text-transform: uppercase;
        font-size: 22px;
        font-weight: bold;
      }

      &[aria-expanded="true"] {
        & img {
          transform: scaleY(-1);
        }
      }

      & img {
        margin-left: 20px;
        width: 40px;
        height: 40px;
        transition: all 0.3s;

        @media (max-width: 800px) {
          width: 30px;
          height: 30px;
        }
      }
    }

    &-text {
      font-family: Helvetica;
      font-size: 14px;
      text-align: left;
      line-height: 20px;
      & > div {
        padding-bottom: 20px;
      }
    }
  }

  &-block {
    width: 50%;
    color: #fff;
    font-family: "acumin-pro-condensed", sans-serif;
    @media (max-width: 1000px) {
      width: 90%;
    }

    &.left {
      @media (min-width: 1000px) {
        border-right: 1px solid white;
        padding-right: 40px;
      }
    }
    &.right {
      @media (min-width: 1000px) {
        padding-left: 40px;
      }
    }
  }
}
</style>
