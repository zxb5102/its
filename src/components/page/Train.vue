<template>
    <div class="train common-header-height each-page">
        <div class="text-hold">
            信息技术，是主要用于管理和处理信息所采用的各种技术的总称。它主要是应用计算机科学和通信技术来设计、开发、安装和实施信息系统及应用软件。
盛唐接受企业委托，依据企业的特定目标和要求，组织进行的专业性信息技术培训。培训课程可以结合企业委托的咨询项目进行，也可以单独举行，在定制咨询培训的过程中，培训会针对企业存在的问题，根据企业实际情况设计分析案例，制定针对性强的培训方案，然后安排专家，精心准备和筹划，力求达到最佳的培训效果。
        </div>
    </div>
</template>
<script>
export default {
  created() {
    this.$store.dispatch("SET_HEADER_FLAG", "train");
  },
//   mounted() {
//     this.$store.dispatch("SET_HEADER_FLAG", "train");
//   }
};
</script>
<style lang="less" scoped>
.train {
  // height: 500px;
  background-color: gray;
  background-image: url(/img/page/train/bg.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
}
</style>


