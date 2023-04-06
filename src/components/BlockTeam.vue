<template>
  <!-- TEAM -->
  <div class="home-team" id="team">
    <div class="wrapper wrapper_home-team">
      <div class="home-team__inner">
        <h1 class="home-team-title">The Skyscraper Team</h1>
        <div class="home-team__persons">
          <div class="home-team-person" v-for="person of team" :key="person">
            <div class="image-container">
              <div class="home-team-person-image">
                <div class="front">
                  <img
                    :src="require(`@/assets/team/${person.imageName}.jpg`)"
                    alt=""
                  />
                </div>
                <div class="back">
                  <img
                    :src="require(`@/assets/team/${person.imageName}.jpg`)"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <h2 class="home-team-person-name">{{ person.name }}</h2>
            <h3 class="home-team-person-job">{{ person.job }}</h3>
            <h3 class="home-team-person-role">{{ person.role }}</h3>
            <div
              class="home-team-person-description"
              v-html="person.description"
            ></div>
            <div class="home-team-person-country" v-html="person.country"></div>
            <div class="home-team-person-socials">
              <a
                :href="social.link"
                class="home-team-person-socials-link"
                v-for="social of person.socials"
                :key="social"
              >
                <img
                  :src="require(`@/assets/social/${social.iconName}.svg`)"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
        <h1 class="home-team-title">partners & advisors</h1>
        <div class="home-team__persons">
          <div
            class="home-team-person"
            v-for="person of partners"
            :key="person"
          >
            <div class="image-container">
              <div class="home-team-person-image">
                <div class="front">
                  <img
                    :src="require(`@/assets/partners/${person.imageName}.jpg`)"
                    alt=""
                  />
                </div>
                <div class="back">
                  <img
                    :src="require(`@/assets/partners/${person.imageName}.jpg`)"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <h2 class="home-team-person-name">{{ person.name }}</h2>
            <h3 class="home-team-person-job">{{ person.job }}</h3>
            <h3 class="home-team-person-role">{{ person.role }}</h3>
            <div
              class="home-team-person-description"
              v-html="person.description"
            ></div>
            <div class="home-team-person-country" v-html="person.country"></div>
            <div class="home-team-person-socials">
              <a
                :href="social.link"
                class="home-team-person-socials-link"
                v-for="social of person.socials"
                :key="social"
              >
                <img
                  :src="require(`@/assets/social/${social.iconName}.svg`)"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      team: [
        {
          imageName: "team_tris",
          name: "tristan ader",
          job: "Co-Founder and CEO",
          role: "Startup Consultant",
          description: `            
            $39m TLV Web3 founder<br>
            NFT Keynote speaker
          `,
          country: "UK",
          socials: [
            {
              iconName: "telegram",
              link: "t.me/TristanAder",
            },
            {
              iconName: "twitter",
              link: "https://twitter.com/TristanVert",
            },
            {
              iconName: "in",
              link: "https://www.linkedin.com/in/tristanader/",
            },
          ],
        },
        // {
        //   imageName: "team_danny",
        //   name: "danny oh",
        //   job: "MARKETING LEAD",
        //   description: `
        //       Director – Tech infrastructure Corporation <br> (part time)
        //     `,
        //   country: "Singapore",
        //   socials: [
        //     {
        //       iconName: "telegram",
        //       link: "https://t.me/SEAGTIB",
        //     },
        //     {
        //       iconName: "twitter",
        //       link: "https://twitter.com/Danzel62598317",
        //     },
        //     {
        //       iconName: "in",
        //       link: "#",
        //     },
        //   ],
        // },
        {
          imageName: "team_barden",
          name: "BARD OF THE ETHER",
          job: "Co-Founder and COO",
          role: "Game Consultant",
          description: `
            Software Development PM<br>
            Web3 Punk
            `,
          country: "SWEDEN",
          socials: [
            {
              iconName: "twitter",
              link: "https://twitter.com/BardOfTheEther",
            },
          ],
        },
        {
          imageName: "team_frank",
          name: "frank",
          job: "Co-Founder and CIO",
          role: "Web2 Tech Director (FANG)",
          description: `            
            Ex-Investment Banker<br>
            Ex-Pro Gamer
          `,
          country: "USA",
          socials: [
            {
              iconName: "twitter",
              link: "https://twitter.com/Frank_LifeVerse",
            },
          ],
        },
        {
          imageName: "team_markus",
          name: "markus pfau",
          job: "CTO",
          role: "Solidity lead",
          description: `          
          $90m SaaS founder'<br>
          Business Angel 
          `,
          country: "GERMANY",
          socials: [
            {
              iconName: "git",
              link: "https://github.com/wolvesofwallstreet",
            },
            {
              iconName: "in",
              link: "https://www.linkedin.com/in/markus-pfau-b77571100/",
            },
          ],
        },

        {
          imageName: "team_anisa",
          name: "anisa topan",
          job: "PUBLIC RELATIONS",
          role: "PR consultant",
          description:
            "NFT Communications <br> Public Relations",
          country: "UK",
          socials: [
            {
              iconName: "twitter",
              link: "https://twitter.com/AnisaTopan",
            },
          ],
        },
      ],
      partners: [
        {
          imageName: "team_treasure",
          name: "TREASURE DAO",
          job: "PARTNERS IN PROGRESS",
          role: "Treasure DAO cartridge candidate", 
          description: `
            The web3 game console<br><br>`,
          country: "<br>",
          socials: [
            {
              iconName: "twitter",
              link: "https://twitter.com/Treasure_DAO",
            },
          ],
        },
        {
          imageName: "team_flook",
          name: "FLOOK (ADAM)",
          job: "CEO - KNIGHTS OF THE ETHER",
          role: "Treasure DAO official",
          description: `
            cartridge game <br>
            P&E Advisor
`,
          country: "<br>",
          socials: [
            {
              iconName: "twitter",
              link: "https://twitter.com/Flook_eth",
            },
          ],
        },
        // {
        //   imageName: "team_amber",
        //   name: "Amber gadhard",
        //   job: "FOUNDER ALLIANCE BLOCK",
        //   description:
        //     "PhD | Founder at AllianceBlock | Partner at the 200 <br> Bn Club | Meta Economist | Participative Capitalist |",
        //   country: "UK",
        //   socials: [
        //     {
        //       iconName: "git",
        //       link: "#",
        //     },
        //     {
        //       iconName: "twitter",
        //       link: "#",
        //     },
        //     {
        //       iconName: "in",
        //       link: "#",
        //     },
        //   ],
        // },
        {
          imageName: "team_defi_ted",
          name: "defi ted",
          job: "DEFI ADVISOR",
          role: "Founder",
          description:
            "@pleasrDAO with all my $PEEPS <br> Yield – http://yearn.finance",
          country: "Australia",
          socials: [
            {
              iconName: "twitter",
              link: "https://twitter.com/defi_ted?lang=en",
            },
          ],
        },
        {
          imageName: "team_gotbit",
          name: "GOTBIT LABS",
          job: "VC INCUBATOR",
          role: "Investment Arm of GotBit",
          description: `
          Founders & Product <br>
          Launchpad
          `,
          country: "<br>",
          socials: [
            {
              iconName: "twitter",
              link: "https://twitter.com/gotbit_io",
            },
            {
              iconName: "in",
              link: "https://www.linkedin.com/company/gotbit",
            },
          ],
        },
        {
          imageName: "team_nftarmy",
          name: "Loadmaster ash",
          job: "CEO - NIFTYDROPS.IO",
          role: `NFT Consultant`,
          description: `Founder of Nifty Drops<br>UK`,
          country:"<br>",
          socials: [
            {
              iconName: "twitter",
              link: "https://twitter.com/loadmastersrock",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.wrapper_home-team {
  max-width: 1280px !important;
}
.home-team {
  padding: 25px;
  &-title {
    font-size: 35px;
    color: #fff;
    font-family: "acumin-pro-condensed", sans-serif;
    font-weight: bold;
    font-style: italic;
    text-transform: uppercase;
  }

  &__persons {
    width: 900px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    grid-auto-flow: dense;
    margin-top: 35px;

    @media (max-width: 1000px) {
      width: 100%;
      padding: 0 100px;
    }

    @media (max-width: 550px) {
      padding: 0 20px;
    }
    &:not(:last-of-type) {
      margin-bottom: 40px;
    }
  }

  &-person {
    &-name {
      font-family: 'acumin-pro-condensed', sans-serif;
      font-style: italic;
      font-weight: bold;
      text-transform: uppercase;
      color: rgba(255,255,255,0.8);
      font-size: calc(18px + 10 * ((100vw - 769px) / 2048));

      @media (max-width: 1000px) {
        font-size: calc(25px + 5 * ((100vw - 370px) / 800));
      }

      @media (max-width: 800px) {
        font-size: calc(20px + 4 * ((100vw - 370px) / 800));
      }
    }

    &-job {
      color: rgba(255,255,255,0.8);
      // font-family: sans-serif;
      font-family: 'acumin-pro-condensed', sans-serif;
      font-style: normal;
      font-size: 13px;
      font-weight: 100;
      margin-bottom: 5px;
    }

    &-role {
      color: rgba(255,255,255,0.8);
      // font-family: sans-serif;
      font-family: 'acumin-pro-condensed', sans-serif;
      font-style: normal;
      font-size: 13px;
      font-weight: 100;
      margin-bottom: 2px;
    }

    &-description {
      line-height: 1;
      color: rgba(255,255,255,0.5);
      font-size: 13px;
      font-family: 'acumin-pro-condensed', sans-serif;
    }

    &-country {
      color: rgba(255,255,255,0.5);
      font-size: 13px;
    }

    &-socials {
      display: flex;
      justify-content: center;
      position: relative;
      height: 50px;

      &-link {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        padding: 5px;
        border: 1px solid #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 5px;
        margin-bottom: 5vw;

        & img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
    }

    & .image-container {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    & .image-container:hover {
      & > div {
        transform: rotate3d(0, 45, 0, 180deg);
        & .back {
          opacity: 1;
          transform: scaleX(-1);
        }
      }
    }

    &-image {
      margin-bottom: 20px;
      max-width: 150px;
      max-height: 150px;
      width: 150px;
      height: 150px;
      position: relative;
      width: 100%;
      overflow: hidden;
      border-radius: 50%;
      transition: 0.7s;
      transform-style: preserve-3d;
      box-shadow: 0px 0px 13px 6px rgba(239, 193, 108, 0.39);
      border: 6px solid #e48d1b;
      // box-shadow: 0px 0px 8px 15px rgba(231, 132, 25, 0.2) inset;

      &::after {
        content: "";
        width: 100%;
        height: 100%;
        border-radius: 50%;
        position: absolute;
        top: 0;
        left: 0;
        box-shadow: 0px 0px 10px 7px rgba(231, 132, 25, 0.2) inset;
        z-index: 10;
      }

      & .front,
      & .back {
        position: absolute;

        top: 0px;
        left: 0px;
        right: 0px;
        bottom: 0px;
        backface-visibility: hidden;
        width: 100%;
        height: 100%;

        & img {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 50%;
          left: 50%;
          border-radius: 50%;
          transform: translate(-50%, -50%);
        }
      }

      & .back {
        opacity: 0;
        transition: all 0s 0.15s;
        transform: rotate3d(45, 45, 0, 180deg);
      }
    }
  }
}
</style>
