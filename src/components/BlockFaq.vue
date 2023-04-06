<template>
  <!-- FAQ -->
  <div class="home-faq" id="faq">
    <div class="wrapper wrapper-faq">
      <h1 class="title home-faq-title title-headings">FAQS ON THE SKYSCRAPER GAME</h1>
      <div class="home-faq__items">
        <div class="home-faq-block left">
          <div
            class="home-faq-item"
            v-for="(faq, col) of blocks.slice(0, 5)"
            :key="col"
          >
            <div
              class="home-faq-item-title"
              data-bs-toggle="collapse"
              :data-bs-target="'#' + 'collapse' + col"
              :aria-controls="'collapse' + col"
              aria-expanded="false"
            >
              <h1>{{ faq.title }}</h1>
              <img src="@/assets/icons/arrow-down.svg" style="width: 28px; height: 28px" alt="" />
            </div>
            <div class="collapse home-faq-item-text" :id="'collapse' + col">
              <h2 v-html="faq.text" />
            </div>
          </div>
        </div>

        <div class="home-faq-block right">
          <div
            class="home-faq-item"
            v-for="(faq, col) of blocks.slice(5)"
            :key="col"
          >
            <div
              class="home-faq-item-title"
              data-bs-toggle="collapse"
              :data-bs-target="'#' + 'collapse1' + col"
              :aria-controls="'collapse1' + col"
              aria-expanded="false"
            >
              <h1>{{ faq.title }}</h1>
              <img src="@/assets/icons/arrow-down.svg" style="width: 28px; height: 28px" alt="" />
            </div>
            <div class="collapse home-faq-item-text" :id="'collapse1' + col">
              <h2 v-html="faq.text" />
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
import { mapGetters } from "vuex";
import WowsBtn from "@/components/WowsBtn.vue";
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
          title: "What is Skyscraper?",
          text: "VERY COOL! We are a Play & Earn game called Skyscraper, combining Strategic Factional Area Control gameplay with that of a Tactical Deck-Battler played over a geospatial blockchain version of New York City set in 1987.",
        },
        {
          title: "What can you do in the game?",
          text: "LOTS!!  Buy your character, set up clans, choose your team, buy land, build resource emitting building units on that land, use or sell those resources, earn staking fees from NYC city fund, earn from various DeFI opportunities in NYC, take over competing teams' land, raid their properties, earn in-game play streaks, level up your player DAO score, trade your characters and land plots once they are valuable .. the list goes on. Read Whitescraper.",
        },
        {
          title: "Play & Earn",
          text: "YES YOU HAVE HEARD IT BEFORE! But Skyscraper is a very ambitious project. When we use the term Play & Earn it’s to indicate that we are first and foremost creating a great game. Yes the game is by nature financial, but only by having a solid user base over the long run can we ensure that the economics of the game and project endures. The IRL world is already fighting inflation and escalating costs, so we’re making this very affordable and rewardable (is that a word?) ..it is now.",
        },
        {
          title: "What chain is Skyscraper being launched on",
          text: "ARBITRUM! We will be partnering up with the Treasures DAO ecosystem on Arbitrum Nitro. TDAO is building the Nintendo of Web3 gaming and is pioneering cross-game utility for all its cartridges and partner games, so characters and assets can jump between games without the need for re-investing more money. We will be launching our own token called $TURF as well as integrating utility for $MAGIC and Treasures (TDAO’s own assets) Our token combines purchase, in-game Governance, reward incentives and DeFi boost utilities.",
        },
        {
          title: "What unique innovations does Skyscraper have?",
          text: "CHECK THIS OUT! Your SFT characters have a unique utility: they can literally hold their own NFT assets such as resources, land & building units, as well as fungible rewards and all of this can be traded by you as one NFT, ready for the next player to unlock and use. The same applies to your land plots. All building units assigned to a land plot will be locked into the land plot and together they can be traded as one NFT. Only by buying a demolition NFT would you be able to unlock the NFTS in order to develop a new building.",
        },
        {
          title: "What is a DAO?",
          text: "DAO stands for Decentralised Autonomous Organisation. It means the power belongs to the players and it's a key underpinning of the blockchain movement. Any and all in-game assets such as tokens, land and resources contribute to your internal in-game DAO score, which translates into increased voting rights for how the game is run. You can try and benefit the game for your clan or for all players. Those that are in power have the power to change the game.",
        },
        {
          title: "How can I earn in Skyscraper?",
          text: "IN MANY WAYS! Building units regularly mint randomized tradable NFT resources, the lifeblood of each and every character. The City Hall Fund rewards single sided staking of land and buildings with $TURF and other rewards.  Advertisement blocks are available in order to provide real world advertising opportunities the players control. There will be in-game p2p lending using land and buildings as collateral, as well as stable coin defi & lp staking and free in-game missions. Your earning potential delivers value and Skyscraper rewards gameplay.",
        },
        {
          title: "When will the game launch?",
          text: "WEN ITS READY ! The full game specification is developed and finished, We are midway through development of the game itself. The Entire NYC 5 Boroughs have been mapped and divided into purchasable land plots using a complex algorithm that allows us full control over the types of plots present within any one district. We have 25% of our characters developed. We are on our way, however due to market conditions we will probably delay until we have a favourable headwind. In the meantime we are accruing partners,VC’s and advisors to ensure our best chances of success.",
        },
        // {
        //   title:
        //     "I am a current investor in WOWS the genesis project behind Skyscraper.",
        //   text: "",
        // },
        {
          title: "What is the connection with $WOWS?",
          text: "Skyscraper the game has evolved from the Wolves of Wall Street NFT/DeFi cross-over. The unique utilities developed there will be brought into Skyscraper and put to good use. The new team containing new and original core members are here to evolve and learn from any past mistakes. Your $WOWS and C-Folios are valuable! We will be providing a 1:1 swap (based on a snapshot), between $WOWS and $TURF with your WOWS being valued at the presale price of $18. <br/>Your SFT C-Folios will become powerful genesis characters with unique abilities in Skyscraper. We will provide a swap in order to upgrade the character contracts in due course. We look forward to our next chapter. ",
        },
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

  & .whitelist-btn .wows-btn {
    margin-top: 30px;
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
      font-weight: bold;
      text-align: left;
      margin-bottom: 10px;
      display: flex;
      justify-content: space-between;
      font-family: acumin-pro-condensed;
      font-style: italic;
      // align-items: center;

      & > h1 {
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
      & > h2 {
        padding-bottom: 20px;
        font-family: Helvetica;
        font-size: 14px;
        text-align: left;
        line-height: 20px;
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

  .wows-btn {
    padding: 12px 40px;
    margin-top: 7px !important;
  }
}
</style>
