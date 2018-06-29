<template>
    <footer class="bg-primary" style="background-color: rgba(43, 46, 53, 1)" id="page-footer">
        <div class="container">
            <div class="row">
                <div class="col-sm-offset-2 col-sm-2 col-md-offset-3 col-md-2 col-lg-2 col-lg-offset-3 text-center">
                    <img src="../static/img/index/code.jpg" alt="" class="code">
                </div>
                <div class="col-lg-4 col-md-6 col-sm-7">
                    <p>南昌盛唐信息科技有限公司</p>
                    <p>邮编：330038
                        <span style="margin-left: 45px;">电话：0791-86829310</span>
                    </p>
                    <p style="margin-bottom: 0px" class="address colorful">
                        <a href="https://www.amap.com/place/B0FFGYOE4Y" target="_blank">地址：南昌红谷滩区赣江北大道888号新力外滩14F</a>
                    </p>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.address:hover {
  color: #60a9ea;
  cursor: pointer;
}

.address a {
  color: inherit;
  text-decoration: unset;
}
.colorful {
  background-image: linear-gradient(
    to right,
    red,
    orange,
    yellow,
    green,
    yellow,
    orange,
    red,
    orange,
    yellow,
    green,
    yellow,
    orange,
    red
  );
  // -webkit-background-clip: text;
  // -webkit-text-fill-color: transparent;
  // -webkit-background-size: 200% 100%;
  background-clip: text;
  text-fill-color: transparent;
  background-size: 200% 100%;
  animation: bgp 5s infinite linear;
}

/* } */

@keyframes bgp {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: -100% 0;
  }
}
</style>


