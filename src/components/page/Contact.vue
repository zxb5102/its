<template>
  <div class="contact common-header-height each-page">
    <div :class="['text-hold',isPda ? 'text-hold-pda' : '']">
      <Map :class="isPda ? 'map-height-pda' : 'map-height'"></Map>
      <!-- <div class="message-hold">
        <span class="center-span">
          南昌盛唐信息科技有限公司 
          <br> 电话：0791-86829310  <span style="margin-left:20px">邮编：330038</span>
          <br> 地址：南昌红谷滩区赣江北大道888号新力外滩14F
        </span>
      </div> -->
    </div>
  </div>
</template>
<script>
import Map from '../component/Map.vue'
export default {
  //   mounted() {
  //     this.$store.dispatch("SET_HEADER_FLAG", "contact");
  //   },
  asyncData({ store }) {
    store.dispatch("SET_HEADER_FLAG", "contact");
  },
  // props:['size'],
  computed:{
    isPda:function(){
      return this.$store.state.isPda;
    }
  },
  components:{
    Map
  }
};
</script>
<style lang="less" scoped>
.text-hold-pda{
  min-height: 0px;
  top:20px;
}
.map-height-pda{
  height:250px !important;
  // @media (max-width: 1000px){
  //   height: 500px !important;
  // }
}
.map-height{
  height:400px !important;
  // @media (max-width: 1000px){
  //   height: 500px !important;
  // }
}
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


