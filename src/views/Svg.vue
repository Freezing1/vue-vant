<template>
  <van-grid square :column-num="4">
    <van-grid-item v-for="(item, index) in iconList" :key="index">
      <svg-icon :icon-class="item" style="height: 40px;width: 20px;" />
      <p>{{ item }}</p>
    </van-grid-item>
  </van-grid>
</template>

<script>
export default {
  name: "IconSelect",
  data() {
    return {
      name: "",
      iconList: []
    };
  },
  methods: {},
  mounted() {
    const req = require.context("@/assets/icons/svg", false, /\.svg$/);
    const requireAll = requireContext => requireContext.keys();

    const re = /\.\/(.*)\.svg/;

    const icons = requireAll(req).map(i => {
      return i.match(re)[1];
    });
    this.iconList = icons
  }
};
</script>

<style rel="stylesheet/less" lang="less" scoped></style>
