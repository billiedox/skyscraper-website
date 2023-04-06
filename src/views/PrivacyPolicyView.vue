<template>
  <div class="privacy-policy">
    <div class="privacy-policy__body">
      <h1>Into the Tannhauser Gate Privacy Notice</h1>
      <p>This privacy notice is published on 13/03/23</p>
      <h2>Who are we?</h2>
      <div>
        Into the Tannhauser Gate is a company that builds and develops Web3
        games.
      </div>
      <p>
        Into the Tannhauser Gate is the data controller due to our current size
        we are to legally required to appoint a Data Protection Officer.
      </p>

      <h2>16 or Under</h2>
      <p>
        We are concerned to protect the privacy of children aged 16 or under. If
        you are aged 16 or under‚ please get your parent/guardian's permission
        beforehand whenever you provide us with personal information.
      </p>
      <h2>When do we collect personal data about you?</h2>
      <ul>
        <li>
          When you register your details into our premint.xyz form collection
        </li>
        <li>
          When you interact with us in person, through our website and or on our
          job board https://skyscraper.jobspage.co/
        </li>
        <li>
          We may collect personal data if it is considered to be of legitimate
          interest, and if this interest is not overridden by your privacy
          interests. Before data is collected we make sure an assessment is
          made, ensuring that there is an established mutual interest between
          you and Into the Tannhauser Gate.
        </li>
      </ul>
      <h2>Why do we collect personal data?</h2>
      <div>
        We collect and use personal data mainly to perform direct sales, direct
        marketing and customer service.
      </div>
      <div>
        We collect your personal data, so we can reply to your enquiries.
      </div>
      <p>We collect your personal data, so we can hire applicants.</p>
      <h2>How do we collect personal data?</h2>
      <div>We collect your data when you:</div>
      <ul>
        <li>
          Fill and submit account registration form on our premint.xyz form
          collection https://www.premint.xyz/privacy/=
        </li>
        <li>
          Fill and submit account registration form on our Job board.
          https://skyscraper.jobspage.co/
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.privacy-policy {
  width: 100%;
  padding: 0 25px;

  position: relative;

  text-align: left;

  background: url("@/assets/home/fraction/boi-bg.png") no-repeat;
  background-size: cover;

  color: white;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    z-index: 1;

    background: rgb(0, 0, 0, 0.5);
  }

  &__body {
    position: relative;
    z-index: 2;

    width: 100%;
    max-width: 1400px;
    margin: 0px auto;

    padding: 120px 0;

    @media screen and (max-width: 1200px) {
      padding: 120px 0 60px 0;
    }

    h1 {
      @media screen and (min-width: 1200px) {
        font-size: 2.8rem;
      }
    }

    p,
    div {
      font-size: 1.2rem;
    }
  }
}
</style>