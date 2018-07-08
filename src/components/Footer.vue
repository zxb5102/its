<template>
    <footer class="bg-primary" style="background-color: rgba(43, 46, 53, 1)" id="page-footer">
        <div>
            <div class="lik-cell">
                <img src="../static/img/index/code.jpg" alt="" class="code">
                <div style="display:inline-block;">
                    <p>南昌盛唐信息科技有限公司</p>
                    <!-- <p>邮编：330038
                        <span style="margin-left: 45px;">电话：0791-86829310</span>
                    </p> -->
                    <p>
                        <!-- <a href="https://www.amap.com/place/BZ9LPS00QM" target="_blank" class="alink"></a> -->
                        地址：南昌红谷滩区赣江北大道888号新力外滩14F
                    </p>
                    <p style="margin:0px">
赣ICP备15008473号 © 2018 nchome.cn
                    </p>
                </div>
            </div>
            <!-- <div class="row">
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
            </div> -->
        </div>
    </footer>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.lik-cell {
  //   display: table-cell;
  width: 515px;
  margin: auto;
  vertical-align: middle;
  & > div {
    vertical-align: middle;
  }
  & > img {
    vertical-align: middle;
  }
  @media (max-width: 768px) {
    width: auto;
  }
}
.code {
  margin-right: 50px;
  @media (max-width: 768px) {
    margin-right: 0px;
    display: block;
    margin: auto;
    margin-bottom: 20px;
  }
}
.alink {
  color: white;
  text-decoration: underline;
  &:hover {
    color: #70ca39;
  }
}
</style>


