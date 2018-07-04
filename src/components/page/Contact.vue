<template>
  <div class="contact common-header-height each-page">
    <div class="text-hold" style="text-indent:0px">
      <div class="message-hold">
        <span class="center-span">
          南昌盛唐信息科技有限公司 
          <br> 电话：0791-86829310  <span style="margin-left:20px">邮编：330038</span>
          <br> 地址：南昌红谷滩区赣江北大道888号新力外滩14F
        </span>
        <!-- <br> -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  //   mounted() {
  //     this.$store.dispatch("SET_HEADER_FLAG", "contact");
  //   },
  asyncData({ store }) {
    store.dispatch("SET_HEADER_FLAG", "contact");
  }
};
</script>
<style lang="less" scoped>
.contact {
  // height: 500px;
  background-color: gray;
  background-image: url(/img/page/bg.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
}
.message-hold {
  // width: 679px;
  // margin: auto;
  text-align: center;
  // padding-top: 69px;
  @media screen and (max-width: 768px) {
    // height: 20px;
    // width: 95%;
    // padding-top: 40px;
  }
}
</style>


