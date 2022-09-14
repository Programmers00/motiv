<template>
  <!-- Main has Background Image -->
  <main>
    <!-- Image for Desktop / Mobile size which effects Mediaquery-->
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
    <!-- Logo Image is Fixed in Desktop / hided in Mobile -->
    <img
      class="logo"
      src="@/assets/images/desktop/desktop-logo.svg"
      srcset="@/assets/images/desktop/desktop-logo.svg 950w"
      sizes="(min-width: 950px) 950px"
      alt="Logo"
    />
    <!-- Form Component is Fixed-->
    <Form />
  </main>
</template>

<script>
import Form from "./components/Form.vue";
export default {
  name: "Main",
  components: { Form },
  data: () => ({}),
};
</script>
<style scoped>
@media only screen and (max-width: 376px) {
  main {
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background: transparent url("@/assets/images/mobile/mobile-background.svg")
      0% 0% repeat padding-box;
    opacity: 1;
  }
  .img {
    max-width: 100%;
    height: auto;
  }
  .logo {
    display: none;
  }
}

@media only screen and (max-width: 752px) and (min-width: 376px) {
  main {
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background: transparent url("@/assets/images/mobile/mobile-background.svg")
      0% 0% repeat padding-box;
    opacity: 1;
  }
  .img {
    max-width: 100%;
    height: auto;
  }
  .logo {
    display: none;
  }
}

@media only screen and (max-width: 950px) and (min-width: 752px) {
  main {
    display: flex;
    flex-direction: column;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;

    background: transparent
      url("@/assets/images/desktop/desktop-background.svg") 0% 0% repeat
      padding-box;
    opacity: 1;
  }
  .img {
    max-width: 100%;
    height: auto;
  }
  .logo {
    display: none;
  }
}

@media only screen and (min-width: 950px) {
  main {
    display: flex;
    flex-direction: column;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;

    background: transparent
      url("@/assets/images/desktop/desktop-background.svg") 0% 0% repeat
      padding-box;
    opacity: 1;
  }
  .img {
    margin-inline: 140px;
    margin-block: auto;
    max-width: 50%;
    height: auto;
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
