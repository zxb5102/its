<template>
  <div class="integration common-header-height each-page">
    <div class="text-hold">
      <span class="center-span">
        通过结构化的综合布线系统和计算机网络技术，将各个分离的设备（如个人电脑）、功能和信息等集成到相互关联的、统一和协调的系统之中，使资源达到充分共享，实现集中、高效、便利的管理。 盛唐通过采用功能集成、网络集成、软件集成等多种集成技术，提供组建企业网、网络安全、数据库高性能集群、数据中心建设、BS软件开发、嵌入式开发等信息系统集成。
      </span>
    </div>
  </div>
</template>
<script>
export default {
  //   mounted() {
  //     this.$store.dispatch("SET_HEADER_FLAG", "integration");
  //   },
  asyncData({ store }) {
    store.dispatch("SET_HEADER_FLAG", "integration");
  }
};
</script>
<style lang="less" scoped>
.integration {
  // height: 500px;
  background-color: gray;
  background-image: url(/img/page/bg.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
}
</style>


