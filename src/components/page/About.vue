<template>
  <div class="about common-header-height each-page">
    <div class="text-hold about-text-hold">
      <span class="center-span">
        南昌盛唐信息科技公司是一家以信息系统集成、信息系统运维、信息技术培训为核心业务的信息科技服务公司，客户遍及国内制造、医疗、金融、教育、通信、信息技术服务、建筑等众多行业。 盛唐公司于2011年通过ISO27001国际信息安全管理认证，于2012年通过ISO20000信息技术服务管理体系认证，有效促进了盛唐信息技术服务和信息安全管理水平标准化，提高了对客户信息安全和信息服务水平的保障能力。 盛唐公司凭借专业的技术团队，采用功能集成、网络集成、软件集成等多种集成技术，提供组建企业网、网络安全、数据库高性能集群、数据中心建设、BS软件开发、嵌入式开发等信息系统集成和信息系统运维服务，包括对计算机网络、服务器、存储、小型机等设备，和操作系统、数据库软件平台、虚拟化软件平台等软件的日常维护、系统优化和应急保障，通过对IT运维的标准化，实现IT运行的可靠性，提高企业IT服务的管理水准，满足业务发展对IT基础架构的快速变更和高效管理的要求
      </span>
    </div>
  </div>
</template>
<script>
export default {
  //   mounted() {
  //     this.$store.dispatch("SET_HEADER_FLAG", "about");
  //   },
  asyncData({ store }) {
    store.dispatch("SET_HEADER_FLAG", "about");
  }
  //   data() {
  //     return {};
  //   }
};
</script>
<style lang="less" scoped>
.about {
  // height: 500px;
  background-color: gray;
  background-image: url(/img/page/bg.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  //   @media (max-width: 768px){
  //       height:auto !important;
  //   }
}
@media screen and (max-width: 768px) {
  .about-text-hold {
    position: relative;
    transform: unset;
    top: unset;
    left: unset;
  }
}
</style>


