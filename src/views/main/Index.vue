<template>
  <main>
    <img
      class="img"
      src="@/assets/images/mobile/mobile-image.png"
      srcset="
        @/assets/images/mobile/mobile-image.png       376w,
        @/assets/images/mobile/mobile-image@2x.png    752w,
        @/assets/images/desktop/desktop-image.png     950w,
        @/assets/images/desktop/desktop-image@2x.png 1900w
      "
      alt="Image"
    />
    <img
      class="logo"
      src="@/assets/images/desktop/desktop-logo.svg"
      srcset="@/assets/images/desktop/desktop-logo.svg 950w"
      sizes="(min-width: 950px) 950px"
      alt="Logo"
    />
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
@media only screen and (max-width: 376px) {
  main {
    /* Layout Properties */
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    /* UI Properties */
    background: transparent url("@/assets/images/mobile/mobile-background.svg")
      0% 0% repeat padding-box;
    opacity: 1;
  }
  .img {
    /* Layout Properties */
    max-width: 100%;
    height: auto;
    /* UI Properties */
  }
  .logo {
    display: none;
  }
}
@media only screen and (max-width: 752px) and (min-width: 376px) {
  main {
    /* Layout Properties */
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    /* UI Properties */
    background: transparent url("@/assets/images/mobile/mobile-background.svg")
      0% 0% repeat padding-box;
    opacity: 1;
  }
  .img {
    /* Layout Properties */
    max-width: 100%;
    height: auto;
    /* UI Properties */
  }
  .logo {
    display: none;
  }
}

@media only screen and (max-width: 950px) and (min-width: 752px) {
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
      url("@/assets/images/desktop/desktop-background.svg") 0% 0% repeat
      padding-box;
    opacity: 1;
  }
  .img {
    /* Layout Properties */
    max-width: 100%;
    height: auto;
    /* UI Properties */
  }
  .logo {
    display: none;
  }
}

@media only screen and (min-width: 950px) {
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
      url("@/assets/images/desktop/desktop-background.svg") 0% 0% repeat
      padding-box;
    opacity: 1;
  }
  .img {
    /* Layout Properties */
    margin-inline: 140px;
    margin-block: auto;
    max-width: 50%;
    height: auto;
    /* UI Properties */
  }

  .logo {
    position: fixed;
    top: 90px;
    right: 140px;
    width: 363px;
    height: 98px;
  }
}
</style>
