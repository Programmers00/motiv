<template>
  <main>
    <img class="img" />
    <form>
      <img class="logo" />
      <p style="text-decoration-line: none">
        Joining us for coffee or late night cocktails?
      </p>
      <sub
        >Please verify that you are 18 years of age or older to enter the
        site.</sub
      >
      <select class="day" name="day" id="day">
        <option value="" disabled selected>Day</option>
      </select>
      <select class="month" name="Month" id="">
        <option value="" disabled selected>Month</option>
      </select>
      <select class="year" name="Year" id="">
        <option value="" disabled selected>Year</option>
      </select>
      <button>Enter Site</button>
    </form>
  </main>
</template>

<script>
export default {
  name: "Main",
  components: {},
  data: () => ({}),
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media only screen and (max-width: 375px) {
  main {
    /* Layout Properties */
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    /* UI Properties */
    background: transparent url("@/assets/images/mobile/mobile-background.svg")
      0% 0% no-repeat padding-box;
    opacity: 1;
  }
  .img {
    /* Layout Properties */
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    /* UI Properties */
    background: transparent url("@/assets/images/mobile/mobile-image.png") 0% 0%
      no-repeat padding-box;
    opacity: 1;
  }
  form {
    /* Layout Properties */
    position: fixed;
    bottom: 56px;
    left: 20px;
    width: 333px;
    height: 556px;
    /* UI Properties */
    background: #ffffff 0% 0% no-repeat padding-box;
    box-shadow: 0px 10px 30px #9a558029;
    border-radius: 20px;
    opacity: 1;
  }
  form .logo {
    /* Layout Properties */
    position: fixed;
    bottom: 530px;
    left: 114px;
    width: 146px;
    height: 42px;
    /* UI Properties */
    background: transparent url("@/assets/images/mobile/mobile-logo.svg") 0% 0%
      no-repeat padding-box;
    opacity: 1;
  }
  form p {
    /* Layout Properties */
    /* position: inline; */
    position: fixed;
    bottom: 420px;
    left: 52px;
    width: 269px;
    height: 60px;
    /* UI Properties */
    text-align: left;
    font: normal normal bold 24px/36px Helvetica;
    letter-spacing: 0px;
    opacity: 1;
  }
  form sub {
    /* Layout Properties */
    position: fixed;
    bottom: 360px;
    left: 52px;
    width: 269px;
    height: 40px;
    /* UI Properties */
    color: var(--unnamed-color-333032);
    text-align: left;
    font: oblique normal normal 16px/24px Helvetica;
    letter-spacing: 0px;
    color: #333032;
    opacity: 1;
  }
  form .day {
    /* Layout Properties */
    position: fixed;
    bottom: 288px;
    left: 52px;
    width: 269px;
    height: 52px;
    /* UI Properties */
    border: 1px solid var(--unnamed-color-7c7c7c);
    background: #ffffff 0% 0% no-repeat padding-box;
    border: 1px solid #7c7c7c;
    border-radius: 10px;
    opacity: 1;
  }

  form .month {
    /* Layout Properties */
    position: fixed;
    bottom: 226px;
    left: 52px;
    width: 269px;
    height: 52px;
    /* UI Properties */
    border: 1px solid var(--unnamed-color-7c7c7c);
    background: #ffffff 0% 0% no-repeat padding-box;
    border: 1px solid #7c7c7c;
    border-radius: 10px;
    opacity: 1;
  }
  form .year {
    /* Layout Properties */
    position: fixed;
    bottom: 164px;
    left: 52px;
    width: 269px;
    height: 52px;
    /* UI Properties */
    border: 1px solid var(--unnamed-color-7c7c7c);
    background: #ffffff 0% 0% no-repeat padding-box;
    border: 1px solid #7c7c7c;
    border-radius: 10px;
    opacity: 1;
  }
  form button {
    /* Layout Properties */
    position: fixed;
    bottom: 96px;
    left: 111px;
    width: 135px;
    height: 48px;
    /* UI Properties */
    background: var(--unnamed-color-333032) 0% 0% no-repeat padding-box;
    background: #333032 0% 0% no-repeat padding-box;
    border-radius: 26px;
    opacity: 1;
    font: normal normal bold 16px/24px Helvetica;
    letter-spacing: 0px;
    color: #ffffff;
  }
}
@media only screen and (max-width: 750px) and (min-width: 375px) {
  main {
    /* Layout Properties */
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    /* UI Properties */
    background: transparent url("@/assets/images/mobile/mobile-background.svg")
      0% 0% no-repeat padding-box;
    opacity: 1;
  }
  .img {
    /* Layout Properties */
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    /* UI Properties */
    background: transparent url("@/assets/images/mobile/mobile-image@2x.png") 0%
      0% no-repeat padding-box;
    opacity: 1;
  }
  form {
    /* Layout Properties */
    position: fixed;
    top: 200px;
    left: 20px;
    width: 333px;
    height: 556px;
    /* UI Properties */
    background: #ffffff 0% 0% no-repeat padding-box;
    box-shadow: 0px 10px 30px #9a558029;
    border-radius: 20px;
    opacity: 1;
  }
  form .logo {
    /* Layout Properties */
    position: fixed;
    top: 240px;
    left: 114px;
    width: 146px;
    height: 42px;

    /* UI Properties */
    background: transparent url("@/assets/images/mobile/mobile-logo.svg") 0% 0%
      no-repeat padding-box;
    opacity: 1;
  }
  form p {
    /* Layout Properties */
    /* position: inline; */
    position: fixed;
    top: 332px;
    left: 52px;
    width: 269px;
    height: 60px;
    /* UI Properties */
    text-align: left;
    font: normal normal bold 24px/36px Helvetica;
    letter-spacing: 0px;
    opacity: 1;
  }
  form sub {
    /* Layout Properties */
    position: fixed;
    top: 412px;
    left: 52px;
    width: 269px;
    height: 40px;
    /* UI Properties */
    color: var(--unnamed-color-333032);
    text-align: left;
    font: oblique normal normal 16px/24px Helvetica;
    letter-spacing: 0px;
    color: #333032;
    opacity: 1;
  }
  form .day {
    /* Layout Properties */
    position: fixed;
    top: 472px;
    left: 52px;
    width: 269px;
    height: 52px;
    /* UI Properties */
    border: 1px solid var(--unnamed-color-7c7c7c);
    background: #ffffff 0% 0% no-repeat padding-box;
    border: 1px solid #7c7c7c;
    border-radius: 10px;
    opacity: 1;
  }

  form .month {
    /* Layout Properties */
    position: fixed;
    top: 534px;
    left: 52px;
    width: 269px;
    height: 52px;
    /* UI Properties */
    border: 1px solid var(--unnamed-color-7c7c7c);
    background: #ffffff 0% 0% no-repeat padding-box;
    border: 1px solid #7c7c7c;
    border-radius: 10px;
    opacity: 1;
  }
  form .year {
    /* Layout Properties */
    position: fixed;
    top: 596px;
    left: 52px;
    width: 269px;
    height: 52px;
    /* UI Properties */
    border: 1px solid var(--unnamed-color-7c7c7c);
    background: #ffffff 0% 0% no-repeat padding-box;
    border: 1px solid #7c7c7c;
    border-radius: 10px;
    opacity: 1;
  }
  form button {
    /* Layout Properties */
    position: fixed;
    top: 668px;
    left: 111px;
    width: 135px;
    height: 48px;
    /* UI Properties */
    background: var(--unnamed-color-333032) 0% 0% no-repeat padding-box;
    background: #333032 0% 0% no-repeat padding-box;
    border-radius: 26px;
    opacity: 1;
    font: normal normal bold 16px/24px Helvetica;
    letter-spacing: 0px;
    color: #ffffff;
  }
}

@media only screen and (max-width: 1630px) and (min-width: 750px) {
  main {
    /* Layout Properties */
    display: flex;
    flex-direction: column;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    /* UI Properties */
    background: transparent
      url("@/assets/images/desktop/desktop-background.svg") 0% 0% no-repeat
      padding-box;
    opacity: 1;
  }
  .img {
    /* Layout Properties */
    /* margin-inline: 140px;
    margin-block: 90px; */
    width: 100%;
    height: 100%;
    /* UI Properties */
    background: transparent url("@/assets/images/desktop/desktop-image.png") 0%
      0% no-repeat padding-box;
    opacity: 1;
  }
  form {
    /* Layout Properties */
    position: fixed;
    top: 200px;
    right: 90px;
    width: 333px;
    height: 556px;
    /* UI Properties */
    background: #ffffff 0% 0% no-repeat padding-box;
    box-shadow: 0px 10px 30px #9a558029;
    border-radius: 20px;
    opacity: 1;
  }
  form .logo {
    /* Layout Properties */
    position: fixed;
    top: 240px;
    right: 184px;
    width: 146px;
    height: 42px;

    /* UI Properties */
    background: transparent url("@/assets/images/mobile/mobile-logo.svg") 0% 0%
      no-repeat padding-box;
    opacity: 1;
  }
  form p {
    /* Layout Properties */
    /* position: inline; */
    position: fixed;
    top: 332px;
    right: 122px;
    width: 269px;
    height: 60px;
    /* UI Properties */
    text-align: left;
    font: normal normal bold 24px/36px Helvetica;
    letter-spacing: 0px;
    opacity: 1;
  }
  form sub {
    /* Layout Properties */
    position: fixed;
    top: 412px;
    right: 122px;
    width: 269px;
    height: 40px;
    /* UI Properties */
    color: var(--unnamed-color-333032);
    text-align: left;
    font: oblique normal normal 16px/24px Helvetica;
    letter-spacing: 0px;
    color: #333032;
    opacity: 1;
  }
  form .day {
    /* Layout Properties */
    position: fixed;
    top: 472px;
    right: 122px;
    width: 269px;
    height: 52px;
    /* UI Properties */
    border: 1px solid var(--unnamed-color-7c7c7c);
    background: #ffffff 0% 0% no-repeat padding-box;
    border: 1px solid #7c7c7c;
    border-radius: 10px;
    opacity: 1;
  }

  form .month {
    /* Layout Properties */
    position: fixed;
    top: 534px;
    right: 122px;
    width: 269px;
    height: 52px;
    /* UI Properties */
    border: 1px solid var(--unnamed-color-7c7c7c);
    background: #ffffff 0% 0% no-repeat padding-box;
    border: 1px solid #7c7c7c;
    border-radius: 10px;
    opacity: 1;
  }
  form .year {
    /* Layout Properties */
    position: fixed;
    top: 596px;
    right: 122px;
    width: 269px;
    height: 52px;
    /* UI Properties */
    border: 1px solid var(--unnamed-color-7c7c7c);
    background: #ffffff 0% 0% no-repeat padding-box;
    border: 1px solid #7c7c7c;
    border-radius: 10px;
    opacity: 1;
  }
  form button {
    /* Layout Properties */
    position: fixed;
    top: 668px;
    right: 122px;
    width: 135px;
    height: 48px;
    /* UI Properties */
    background: var(--unnamed-color-333032) 0% 0% no-repeat padding-box;
    background: #333032 0% 0% no-repeat padding-box;
    border-radius: 26px;
    opacity: 1;
    font: normal normal bold 16px/24px Helvetica;
    letter-spacing: 0px;
    color: #ffffff;
  }
}

@media only screen and (min-width: 1630px) {
  main {
    /* Layout Properties */
    display: flex;
    flex-direction: column;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    /* UI Properties */
    background: transparent
      url("@/assets/images/desktop/desktop-background.svg") 0% 0% no-repeat
      padding-box;
    opacity: 1;
  }
  .img {
    /* Layout Properties */
    margin-inline: 140px;
    margin-block: 90px;
    width: 950px;
    height: 900px;
    /* UI Properties */
    background: transparent url("@/assets/images/desktop/desktop-image.png") 0%
      0% no-repeat padding-box;
    opacity: 1;
  }
  form {
    /* Layout Properties */
    position: fixed;
    bottom: 180px;
    right: 140px;
    width: 812px;
    height: 450px;
    /* UI Properties */
    background: #ffffff 0% 0% no-repeat padding-box;
    box-shadow: 0px 10px 30px #9a558029;
    border-radius: 50px;
    opacity: 1;
  }
  .logo {
    /* Layout Properties */
    position: fixed;
    top: 90px;
    right: 140px;
    width: 363px;
    height: 98px;
    /* UI Properties */
    background: transparent url("@/assets/images/desktop/desktop-logo.svg") 0%
      0% no-repeat padding-box;
    opacity: 1;
  }
  form p {
    /* Layout Properties */
    position: fixed;
    bottom: 447px;
    right: 200px;
    width: 692px;
    height: 120px;
    /* UI Properties */
    text-align: left;
    font: normal normal bold 48px/72px Helvetica;
    letter-spacing: 0px;
    opacity: 1;
  }
  form sub {
    /* Layout Properties */
    position: fixed;
    bottom: 407px;
    right: 200px;
    width: 692px;
    height: 20px;
    /* UI Properties */
    color: var(--unnamed-color-333032);
    text-align: left;
    font: oblique normal normal 20px/30px Helvetica;
    letter-spacing: 0px;
    color: #333032;
    opacity: 1;
  }
  form .day {
    /* Layout Properties */
    position: fixed;
    bottom: 325px;
    right: 737px;
    width: 155px;
    height: 52px;
    /* UI Properties */
    border: 1px solid var(--unnamed-color-7c7c7c);
    background: #ffffff 0% 0% no-repeat padding-box;
    border: 1px solid #7c7c7c;
    border-radius: 10px;
    opacity: 1;
  }

  form .month {
    /* Layout Properties */
    position: fixed;
    bottom: 325px;
    right: 552px;
    width: 155px;
    height: 52px;
    /* UI Properties */
    border: 1px solid var(--unnamed-color-7c7c7c);
    background: #ffffff 0% 0% no-repeat padding-box;
    border: 1px solid #7c7c7c;
    border-radius: 10px;
    opacity: 1;
  }
  form .year {
    /* Layout Properties */
    position: fixed;
    bottom: 325px;
    right: 367px;
    width: 155px;
    height: 52px;
    /* UI Properties */
    border: 1px solid var(--unnamed-color-7c7c7c);
    background: #ffffff 0% 0% no-repeat padding-box;
    border: 1px solid #7c7c7c;
    border-radius: 10px;
    opacity: 1;
  }
  form button {
    /* Layout Properties */
    position: fixed;
    bottom: 243px;
    right: 739px;
    width: 153px;
    height: 52px;
    /* UI Properties */
    background: var(--unnamed-color-333032) 0% 0% no-repeat padding-box;
    background: #333032 0% 0% no-repeat padding-box;
    border-radius: 26px;
    opacity: 1;
    font: normal normal bold 16px/24px Helvetica;
    letter-spacing: 0px;
    color: #ffffff;
  }
}
</style>
