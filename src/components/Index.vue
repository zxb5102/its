<template>
  <div style="height:100%;">
    <Header/>
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
                                <router-link to="/page/about"  class="btn btn-default btn-xl">FIND OUT MORE</router-link>
                                <!-- <a href="#" class="btn btn-default btn-xl"></a> -->
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
                                <router-link to="/page/integration"  class="btn btn-default btn-xl">FIND OUT MORE</router-link>
                                <!-- <a href="#" class="btn btn-default btn-xl">FIND OUT MORE</a> -->
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
                                 <router-link to="/page/maintenance"  class="btn btn-default btn-xl">FIND OUT MORE</router-link>
                                <!-- <a href="#" class="btn btn-default btn-xl">FIND OUT MORE</a> -->
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div class="swiper-slide">
                <header style="position: relative;" class="common-header-height" id="train">
                    <div class="train-text-hold wow zoomIn">
                        <h2>技术培训</h2>
                        <p>因为领航 所以前沿......</p>
                    </div>
                </header>

                <section class="bg-primary">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6 col-lg-offset-3 text-center">
                                <p>根据企业实际情况设计分析案例，指定针对性强的培训方案，安排专家，精心准备和筹划，力求达到最佳的培训效果。</p>
                                <router-link to="/page/train"  class="btn btn-default btn-xl">FIND OUT MORE</router-link>
                                <!-- <a href="#" class="btn btn-default btn-xl">FIND OUT MORE</a> -->
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <div class="swiper-slide">
                <Footer class="footer-pda-index" />
            </div>
        </div>
    </div>
    </div>
</template>
<script>
import Footer from "./Footer.vue";
import Header from "./Header.vue";
export default {
  created() {
    this.$store.dispatch("SET_HEADER_FLAG", "index");
    // console.log(11);
  },
  // mounted() {
  //   this.$store.dispatch("SET_HEADER_FLAG", "index");
  // $('.navbar-nav').children().eq(0).addClass('active');
  // // console.log('111');
  // // alert();
  // },
  data() {
    return {};
  },
  components: { Footer, Header },
  mounted: function() {
    $(".navbar-nav")
      .children()
      .eq(0)
      .addClass("active");
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
</style>


