<template>
  <div class="profile">
    <el-row>
      <el-col :span="4" class="heiglt">
        <div class="headers">
          <span>
            <img
              src="https://m.imooc.com/static/wap/static/common/img/logo-small@2x.png"
              style="object-fit: cover"
            />
          </span>

          <h1>imooc-admin</h1>
        </div>
        <el-menu
          active-text-color="#ffd04b"
          background-color="#545c64"
          class="el-menu-vertical-demo"
          default-active="2"
          text-color="#fff"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-sub-menu index="1">
            <template #title>
              <el-icon><location /></el-icon>
              <span>Navigator One</span>
            </template>
            <el-sub-menu index="1-4">
              <template #title>item four</template>
              <el-menu-item index="1-4-1">item one</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
        </el-menu>
      </el-col>
      <el-col :span="20">
        <router-view />
      </el-col>
    </el-row>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.headers {
  height: var(--59cf8ee8) px;
  padding: 10px 0 22px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 44px;
    display: block;
    height: 100%;
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
.heiglt {
  height: 100vh;
  background-color: #545c64;
}
</style>
