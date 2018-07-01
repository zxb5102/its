<template>
  <div>
    <Header/>
    <transition name="go" mode="out-in">
        <router-view></router-view>
    </transition>
    <Footer/>
  </div>
</template>
<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
export default {
  //   data(){

  //   },
  components: { Header, Footer }
};
</script>
<style lang="less" scoped>
</style>



