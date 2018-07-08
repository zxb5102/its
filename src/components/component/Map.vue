<template>
    <!-- <div class="map-con"> -->
        <!-- <div class="map-msg-dialog">
            <div class="logo-header">
                <img src="/static/img/logo.png" alt="">
                <span>&nbsp;&nbsp;南昌盛唐信息科技有限公司</span>
            </div>
            <div class="dia-item">邮编：330038 &nbsp;&nbsp;&nbsp;电话：0791-86829310</div>
            <div class="dia-item">地址：南昌红谷滩区赣江北大道888号新力外滩14F</div>
        </div> -->
        <div id="map-container"></div>
    <!-- </div>    -->
</template>
<script>
export default {
  data() {
    return {
      map: {}
    };
  },
  mounted() {
    // 地图
    var map = new AMap.Map(document.getElementById("map-container"), {
      //  var map = new AMap.Map("map-container", {
      resizeEnable: true,
      zoom: 11,
      center: [115.8841913939, 28.7100866806]
    });
    this.map = map;
    // 点标记
    var marker = new AMap.Marker({
      icon: "https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png",
      position: [115.8841913939, 28.7100866806]
    });
    marker.setMap(map);
    // 信息窗体
    var info = [];
    info.push(
      `
        <div class="map-msg-dialog">
            <div class="logo-header">
                <img src="/static/img/logo.png" alt="">
                <span>&nbsp;&nbsp;南昌盛唐信息科技有限公司</span>
            </div>
            <div class="dia-item">邮编：330038 &nbsp;&nbsp;&nbsp;电话：0791-86829310</div>
            <div class="dia-item">地址：南昌红谷滩区赣江北大道888号新力外滩14F</div>
        </div>
          `
    );
    //   info.push(
    //     '<div><div><img style="float:left;" src="/static/img/logo.png"/></div> '
    //   );
    //   info.push('<div style="padding:0px 0px 0px 4px;"><b>南昌盛唐信息科技有限公司</b>');
    //   info.push("电话 : 0791-86829310   邮编 : 330038");
    //   info.push("地址 :南昌红谷滩区赣江北大道888号新力外滩14F</div></div>");
    var infoWindow = new AMap.InfoWindow({
      content: info.join("<br/>") //使用默认信息窗体框样式，显示信息内容
    });
    infoWindow.open(map, map.getCenter());
    AMap.event.addListener(marker, "click", function() {
      infoWindow.open(map, marker.getPosition());
    });
  },
  destroyed() {
    this.map.destroy();
  }
};
</script>
<style lang="less">
@pdaSize: 14px;
#map-container {
  height: 100%;
  width: 100%;
  color: black;
  letter-spacing: 0px;
  text-indent: 0px;
  // color: white;
}
.map-msg-dialog {
  width: 350px;
  @media (max-width: 1000px) {
    width: 320px;
  }
  .logo-header {
    vertical-align: middle;
    img {
      vertical-align: middle;
      height: 25px;
      @media (max-width: 1000px) {
        height: 20px;
      }
    }
    span {
      vertical-align: middle;
      color: #1818dc;
      font-weight: bold;
      font-size: 17px;
      @media (max-width: 1000px) {
        font-size: @pdaSize + 1;
      }
    }
  }
  .dia-item {
    font-size: 15px;
    @media (max-width: 1000px) {
      font-size: @pdaSize;
    }
    &:nth-child(2) {
      margin: 5px 0px;
    }
    .dia-a {
      color: black;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>