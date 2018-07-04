<template>
    <div class="maintenance common-header-height each-page">
        <div class="text-hold">
            <span class="center-span">
                信息系统运维，侧重于保障系统正常运行，有运行和维护两层含义。 盛唐信息系统运维服务，包括对计算机网络、服务器、存储、小型机等设备，和操作系统、数据库软件平台、虚拟化软件平台等软件的日常维护、系统优化和应急保障，通过对IT运维的标准化，实现IT运行的可靠性，提高企业IT服务的管理水准，满足业务发展对IT基础架构的快速变更和高效管理的要求。
            </span>
        </div>
    </div>
</template>
<script>
export default {
  //   mounted() {
  //     this.$store.dispatch("SET_HEADER_FLAG", "maintenance");
  //   },
  asyncData({ store }) {
    store.dispatch("SET_HEADER_FLAG", "maintenance");
    // console.log(22);
  }
};
</script>
<style lang="less" scoped>
.maintenance {
  // height: 500px;
  background-color: gray;
  background-image: url(/img/page/bg.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
}
</style>


