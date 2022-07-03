<template>
  <div>
    <div class="sidebar-title">
      <!-- <span
        ><img
          src="https://m.imooc.com/static/wap/static/common/img/logo-small@2x.png"
          style="object-fit: cover"
      /></span> -->

      <h1>usian-admin</h1>
    </div>

    <sidebar-menu></sidebar-menu>
  </div>
</template>

<script setup>
import SidebarMenu from './SidebarMenu'
</script>

<style lang="scss" scoped>
.sidebar-title {
  text-align: center;
  padding: 15px 0;
  font-size: 22px;
  color: #fff;
  height: var(--59cf8ee8) px;
  padding: 10px 0 22px 0;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 44px;
    height: 44px;
  }
  h1 {
    margin-left: 10px;
    color: #fff;
    font-weight: 600;
    line-height: 50px;
    font-size: 16px;
    white-space: nowrap;
  }
}
</style>
