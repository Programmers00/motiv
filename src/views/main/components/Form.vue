<template>
  <!-- form -->
  <form>
    <!-- wrap Box -->
    <div class="wrapBox">
      <!-- Logo -->
      <img
        class="logo"
        src="@/assets/images/mobile/mobile-logo.svg"
        srcset="@/assets/images/mobile/mobile-logo.svg 950w"
        sizes="(max-width: 950px) 950px"
        alt="Logo"
      />
      <!-- Title -->
      <p class="title" style="color: #333032">
        Joining us for <span style="color: #cc905d">coffee</span> or
        <span style="color: #9a5580">late night cocktails</span>?
      </p>
      <!-- Subtitle -->
      <sub class="subtitle"
        >Please verify that you are 18 years of age or older to enter the
        site.</sub
      >
      <!-- Select Box for flex col/row -->
      <div class="selectBox">
        <select name="day" id="day">
          <option value="" disabled selected>Day</option>
        </select>
        <select name="Month" id="">
          <option value="" disabled selected>Month</option>
        </select>
        <select name="Year" id="">
          <option value="" disabled selected>Year</option>
        </select>
      </div>
      <!-- Button -->
      <button>Enter Site</button>
    </div>
  </form>
</template>

<script>
export default {
  name: "Form",
  components: {},
  data: () => ({}),
};
</script>
<style scoped>
/* p tag default */
p {
  display: inline;
}
/* select tag default */
select {
  appearance: none;
  font: normal normal normal 20px/40px Helvetica;
  color: #7c7c7c;
  background: url("../../../assets/images/desktop/arrow.svg") calc(100% - 5px)
    center no-repeat;
  background-size: 20px;
  padding: 5px 30px 5px 10px;
  outline: 0 none;
  border-radius: 10px;
}

@media only screen and (max-width: 950px) {
  form {
    position: fixed;
    display: flex;
    flex-direction: row;
    margin-inline: 20px;
    bottom: 56px;
    width: 90%;
    min-width: 290px;
    height: auto;
    background: #ffffff 0% 0% no-repeat padding-box;
    box-shadow: 0px 10px 30px #9a558029;
    border-radius: 20px;
    opacity: 1;
    align-items: center;
    justify-content: space-around;
  }
  .wrapBox {
    padding-inline: 32px;
    padding-block: 24px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
  .logo {
    margin-block: 28px;
    max-width: 60%;
    height: auto;
  }
  .title {
    margin-block: 7px;
    text-align: left;
    font: normal normal bold 24px/36px Helvetica;
    letter-spacing: 0px;
  }
  .subtitle {
    margin-block: 7px;
    color: #333032;
    text-align: left;
    font: oblique normal normal 16px/24px Helvetica;
    letter-spacing: 0px;
    color: #333032;
    opacity: 1;
  }
  .selectBox {
    margin-block: 7px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 180px;
  }
  select {
    height: 52px;
    border: 1px solid #7c7c7c;
  }
  button {
    width: 135px;
    height: 48px;
    background: #333032 0% 0% no-repeat padding-box;
    border-radius: 26px;
    font: normal normal bold 16px/24px Helvetica;
    letter-spacing: 0px;
    color: #ffffff;
    border: 0;
    outline: 0;
  }
}

@media only screen and (min-width: 950px) {
  form {
    position: fixed;
    display: flex;
    flex-direction: row;
    bottom: 180px;
    right: 140px;
    width: 812px;
    height: 450px;
    background: #ffffff 0% 0% no-repeat padding-box;
    box-shadow: 0px 10px 30px #9a558029;
    border-radius: 50px;
  }
  .wrapBox {
    padding: 60px;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
  .logo {
    display: none;
  }
  .title {
    margin-block: 7px;
    height: auto;
    text-align: left;
    font: normal normal bold 48px/72px Helvetica;
    letter-spacing: 0px;
  }
  .subtitle {
    margin-block: 7px;
    height: auto;
    color: #333032;
    text-align: left;
    font: oblique normal normal 20px/30px Helvetica;
    letter-spacing: 0px;
  }
  .selectBox {
    margin-block: 7px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    height: auto;
  }
  select {
    margin-right: 10px;
    width: 155px;
    height: 52px;
    border: 1px solid #7c7c7c;
    border-radius: 10px;
  }
  button {
    margin-block: 7px;
    width: 153px;
    height: 52px;
    background: #333032 0% 0% no-repeat padding-box;
    border-radius: 26px;
    font: normal normal bold 16px/24px Helvetica;
    letter-spacing: 0px;
    color: #ffffff;
    border: 0;
    outline: 0;
    justify-content: flex-start;
  }
}
</style>
