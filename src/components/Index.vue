<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <header style="position: relative;" class="common-header-height" id="about">
                    <img src="../static/img/index/top-text.png" class="top-text wow fadeInLeft">
                </header>

                <section class="bg-primary">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-10 col-lg-offset-1 text-center">
                                <p>南昌盛唐信息科技有限公司是一家以信息系统集成、信息系统运维、信息技术培训为核心业务的信息科技服务公司， 客户遍及国内制造、医疗、金融、教育、通信、信息技术服务、建筑等众多行业。
                                </p>
                                <a href="#" class="btn btn-default btn-xl">FIND OUT MORE</a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div class="swiper-slide">
                <header style="position: relative;" class="common-header-height" id="integration">
                    <div class="integration-text-hold wow fadeInRight">
                        <h2>系统集成</h2>
                        <p>用技术造就业务领域的无限延伸......</p>
                    </div>
                </header>

                <section class="bg-primary">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-8 col-lg-offset-2 text-center">
                                <p>盛唐通过采用功能集成、网络集成、软件集成等多种集成技术，提供组建企业网、网络安全、数据库高性能集群、数据中心建设、BS软件开发、嵌入式开发等信息系统集成。</p>
                                <a href="#" class="btn btn-default btn-xl">FIND OUT MORE</a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div class="swiper-slide">
                <header style="position: relative;" class="common-header-height" id="maintenance">
                    <div class="maintenance-text-hold wow slideInDown">
                        <h2>系统运维</h2>
                        <p class="only-pda-letter-space">我们对于快速变更和高效管理的理解......</p>
                    </div>
                </header>
                <section class="bg-primary">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6 col-lg-offset-3 text-center">
                                <p>通过对IT运维的标准化，实现IT运行的可靠性、提高企业IT服务的管理水准，满足业务发展对IT基础架构的快速变更和高效管理的要求。</p>
                                <a href="#" class="btn btn-default btn-xl">FIND OUT MORE</a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div class="swiper-slide">
                <header style="position: relative;" class="common-header-height" id="train">
                    <div class="train-text-hold wow zoomIn">
                        <h2>技术培训</h2>
                        <p>因为领航 所以前言......</p>
                    </div>
                </header>

                <section class="bg-primary">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6 col-lg-offset-3 text-center">
                                <p>根据企业实际情况设计分析案例，指定针对性强的培训方案，安排专家，精心准备和筹划，力求达到最佳的培训效果。</p>
                                <a href="#" class="btn btn-default btn-xl">FIND OUT MORE</a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <div class="swiper-slide">
                <Footer/>
            </div>
        </div>
    </div>
</template>
<script>
import Footer from "./Footer.vue";
export default {
  data() {
    return {};
  },
  components: { Footer },
  mounted: function() {
    var mySwiper;
    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $("a.page-scroll").bind("click", function(event) {
      var $anchor = $(this);
      var pda = $(window).width() <= 768 ? true : false;
      if (pda) {
        var pare = $anchor.parent();
        var chAray = $(".navbar-nav")
          .children()
          .toArray();
        var dex = chAray.indexOf(pare[0]);
        mySwiper.slideTo(dex);
      } else {
        $("html, body")
          .stop()
          .animate(
            {
              scrollTop: $($anchor.attr("href")).offset().top
            },
            1250,
            "easeInOutExpo"
          );
      }
      event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $("body").scrollspy({
      target: ".navbar-fixed-top",
      offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $(".navbar-collapse ul li a").click(function() {
      $(".navbar-toggle:visible").click();
    });

    // Fit Text Plugin for Main Header
    $("h1").fitText(1.2, {
      minFontSize: "35px",
      maxFontSize: "65px"
    });

    // Offset for Main Navigation
    $("#mainNav").affix({
      offset: {
        top: 100
      }
    });

    new WOW({
      mobile: false
    }).init();

    var whellTime;
    $("body").mousewheel(function(event, delta, deltaX, deltaY) {
      upDown(delta);
      event.preventDefault();
    });
    function upDown(delta) {
      clearTimeout(whellTime);
      whellTime = window.setTimeout(function() {
        var flagEle, next;

        if (delta === 1) {
          next = $("li.active").prev();
        } else {
          //向下
          next = $("li.active").next();
        }
        if (next.length === 0) {
          return;
        }
        flagEle = $(next.find("a").attr("href"));
        $("html, body")
          .stop()
          .animate(
            {
              scrollTop: flagEle.offset().top
            },
            1250,
            "easeInOutExpo"
          );
      }, 100);
    }

    if ($(window).width() <= 768) {
      mySwiper = new Swiper(".swiper-container", {
        direction: "vertical",
        loop: false,
        on: {
          slideChange: function() {
            $(".navbar-nav ")
              .children()
              .removeClass("active");
            $(".navbar-nav ")
              .children()
              .eq(this.activeIndex)
              .addClass("active");
          }
        }
      });
      $(".navbar-nav ")
        .children()
        .removeClass("active");
      $(".navbar-nav ")
        .children()
        .eq(0)
        .addClass("active");
    }
  }
};
</script>
<style lang="less" scoped>
.top-text {
  position: absolute;
  left: 9%;
  top: 33%;
  width: 47%;
  height: auto;
}

.common-header-height {
  height: calc(100vh - 167px);
}

#integration {
  background-image: url(../img/integration.jpg);
}

#maintenance {
  background-image: url(../img/maintenance.jpg);
}

#train {
  background-image: url(../img/train.jpg);
}

@media screen and (min-width: 970px) {
  .integration-text-hold h2,
  .maintenance-text-hold h2,
  .train-text-hold h2 {
    font-size: 35px;
    font-weight: bold;
    letter-spacing: 5px;
  }
  .integration-text-hold p,
  .maintenance-text-hold p,
  .train-text-hold p {
    font-size: 25px;
    letter-spacing: 4px;
  }
}

@media screen and (min-width: 1170px) {
  .integration-text-hold h2,
  .maintenance-text-hold h2,
  .train-text-hold h2 {
    font-size: 45px;
    font-weight: bold;
    letter-spacing: 5px;
  }
  .integration-text-hold p,
  .maintenance-text-hold p,
  .train-text-hold p {
    font-size: 35px;
    letter-spacing: 4px;
  }
}

.integration-text-hold {
  position: absolute;
  bottom: 53%;
  left: 6%;
  text-align: left;
}

.train-text-hold {
  position: absolute;
  left: 12%;
  top: 24%;
  text-align: left;
  color: #00479d;
}

.maintenance-text-hold {
  position: absolute;
  bottom: 12%;
  right: 10%;
  text-align: left;
}

section {
  min-height: 177px;
}

.code {
  height: 90px;
}

/* #page-top{
    overflow: hidden;
} */

.btn {
  font-size: 12px;
}

@media screen and (min-width: 768px) {
  .swiper-slide {
    height: 100%;
  }
  .swiper-container {
    /* overflow: scroll; */
    /* height:100%; */
  }
  .swiper-wrapper {
    display: block;
  }
}

@media screen and (max-width: 768px) {
  .code {
    /* margin-left: 45px; */
    margin-bottom: 20px;
    height: 80px;
  }
  .common-header-height {
    height: 75%;
  }
  footer,
  section {
    padding: 0px;
    min-height: 0px;
    height: 25%;
    position: relative;
  }
  section > div.container {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  .btn-xl {
    padding: 5px 14px;
  }
  .integration-text-hold h2,
  .maintenance-text-hold h2,
  .train-text-hold h2 {
    font-size: 25px;
    font-weight: bold;
    letter-spacing: 5px;
  }
  .integration-text-hold p,
  .maintenance-text-hold p,
  .train-text-hold p {
    font-size: 15px;
    letter-spacing: 4px;
  }
  .top-text {
    position: absolute;
    left: 5%;
    top: 42%;
    width: 90%;
    height: auto;
  }
  header {
    background-position-x: 70%;
  }
  footer {
    padding: 20px 0px;
    text-align: center;
    height: auto;
    position: absolute;
    left: 50%;
    top: 50%;
    width: 100%;
    transform: translate(-50%, -50%);
  }
  p {
    margin-bottom: 5px;
    font-size: 14px;
  }
  .integration-text-hold {
    position: absolute;
    bottom: 16%;
    left: 6%;
    text-align: left;
  }
  #maintenance {
    /* background-image: url(./img/maintenance.png); */
    background-position-x: 0%;
    /* background-position-y: 10px; */
  }
  .maintenance-text-hold {
    position: absolute;
    /* bottom: 22%;
        right: 0px; */
    text-align: left;
    left: 20px;
  }
  .train-text-hold {
    position: absolute;
    /* left: 11%;
        top: 17%; */
    text-align: left;
    color: #00479d;
  }
  .navbar-default {
    /* background-color: rgba(0,0,0,0.2); */
    background-color: rgba(0, 150, 212, 0.76);
    /* background-color:rgba(255, 255, 255, 0.50) */
  }
  .navbar-default .navbar-toggle:focus,
  .navbar-default .navbar-toggle:hover {
    background-color: transparent;
  }
  .navbar-default .navbar-toggle .icon-bar {
    background-color: #cacaca;
  }
  .only-pda-letter-space {
    letter-spacing: 1px !important;
  }
  .swiper-slide {
    background-color: rgba(43, 46, 53, 1);
    position: relative;
  }
  .swiper-container {
    height: 100%;
  }
}
</style>


