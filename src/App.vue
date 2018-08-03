<template>
  <div class='wrapper'>
    <app-header/>
    <app-sidebar/>
    <router-view />
  </div>
</template>

<script>
import {
  Footer as appFooter,
  Header as appHeader,
  Sidebar as appSidebar
} from "@/components";
export default {
  name: "app",
  components: {
    appFooter,
    appHeader,
    appSidebar
  },
  data() {
    return {
      msg: "DEMO APP"
    };
  }
};
</script>
<style lang="scss">
/* Import Font Kanit */
$fa-font-path: "@/assets/fonts/kanit/font/";
@import "@/assets/fonts/kanit/css/fonts.scss";
/* Import Font Awesome Icons Set */
$fa-font-path: "~font-awesome/fonts/";
@import "~font-awesome/scss/font-awesome.scss";
/* Import Simple Line Icons Set */
$simple-line-font-path: "~simple-line-icons/fonts/";
@import "~simple-line-icons/scss/simple-line-icons.scss";
/* Import Flag Icons Set */
@import "~flag-icon-css/css/flag-icon.min.css";
@import "./assets/scss/custom-bootstrap.scss";
@import "node_modules/bootstrap/scss/bootstrap.scss";
</style>
