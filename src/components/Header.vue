<template>
  <nav id="mainNav" class="navbar navbar-default navbar-fixed-top">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-1">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <router-link class="navbar-brand page-scroll navbar-logo" to="/index" style="padding: 10px 0px 10px 10px;">
          <img src="../static/img/logo2.png" alt="" style="height:100%">
        </router-link>
        <!-- <a class="navbar-brand page-scroll " href="/index" style="padding: 10px 0px 10px 10px;">
                    <img src="../static/img/logo2.png" alt="" style="height:100%">
                </a> -->
      </div>
      <div class="collapse navbar-collapse" id="navbar-collapse-1">
        <ul class="nav navbar-nav navbar-right ul-h" v-if="headerFlag === 'index'">
          <li v-for="(item,dex) in indexMenu" :key="dex">
            <a class="page-scroll" :href="item.href" dex="1">{{item.value}}</a>
          </li>
        </ul>
        <ul class="nav navbar-nav navbar-right ul-h" v-else>
          <li v-for="(item,dex) in otherMunu" :key="dex">
            <router-link :to="item.href" tag="a" class="page-scroll">{{item.value}}</router-link>
            <!-- <a class="page-scroll" :href="item.href" dex="1">{{item.value}}</a> -->
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
var indexMenu = [
  {
    href: "#about",
    value: "关于盛唐"
  },
  {
    href: "#integration",
    value: "系统集成"
  },
  {
    href: "#maintenance",
    value: "系统运维"
  },
  {
    href: "#train",
    value: "技术培训"
  },
  {
    href: "#index-footer",
    value: "联系我们"
  }
];
var otherMunu = [
  {
    href: "/index",
    value: "首页"
  },
  {
    href: "/page/about",
    value: "关于盛唐"
  },
  {
    href: "/page/integration",
    value: "系统集成"
  },
  {
    href: "/page/maintenance",
    value: "系统运维"
  },
  {
    href: "/page/train",
    value: "技术培训"
  },
  {
    href: "/page/contact",
    value: "联系我们"
  }
];
export default {
  data() {
    return {
      otherMunu: otherMunu,
      indexMenu: indexMenu
      //   headerFlag: this.$store.state.headerFlag
    };
  },
  computed: {
    headerFlag: function() {
      //   if ($ !== undefined) {
      //     $(".navbar-collapse ul li a").click(function() {
      //       $(".navbar-toggle:visible").click();
      //     });
      //   }
      return this.$store.state.headerFlag;
    }
  },
  watch: {
    headerFlag: function() {
      window.setTimeout(function() {
        $(".navbar-collapse ul li a").click(function() {
          $(".navbar-toggle:visible").click();
        });
      }, 100);
      //   console.log(22);
    }
  },
  mounted() {
    // Closes the Responsive Menu on Menu Item Click
    $(".navbar-collapse ul li a").click(function() {
      //   console.log(33);
      $(".navbar-toggle:visible").click();
    });
  }
};
</script>
<style lang="less" scoped>
@media screen and (min-width: 1000px) {
  .ul-h a {
    line-height: 40px;
    font-size: 18px;
  }
  .navbar-logo {
    height: 70px;
  }
}
</style>