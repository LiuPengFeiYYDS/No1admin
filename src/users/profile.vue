<template>
  <div class="profile">
    <!-- 再来一遍 -->
    <el-container>
      <el-aside :width="isCollapse ? '64px' : '234px'" class="aside">
        <div class="headers">
          <span>
            <img
              src="https://m.imooc.com/static/wap/static/common/img/logo-small@2x.png"
              style="object-fit: cover"
            />
          </span>

          <h1 v-show="!isCollapse">imooc-admin</h1>
        </div>
        <el-menu
          :collapse="isCollapse"
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
      </el-aside>
      <el-main>
        <div class="NavBar">
          <!-- 内容上面的表头 -->
          <el-icon size="28px" v-if="!isCollapse" @click="isCollapse = true"
            ><Fold
          /></el-icon>
           <el-icon size="28px" v-else @click="isCollapse = false"
            ><Expand
          /></el-icon>
        </div>
        <!-- 面包屑 -->
        11111111
        <router-view
      /></el-main>
    </el-container>
  </div>
</template>

<script setup>
import { Fold, Expand } from '@element-plus/icons-vue'
import { ref } from 'vue'
const isCollapse = ref(false)
</script>

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
.aside {
  height: 100vh;
  background-color: #545c64;
  transition: width 0.25s;
  -webkit-transition: width 0.25s;
  -moz-transition: width 0.25s;
  -webkit-transition: width 0.25s;
  -o-transition: width 0.25s;
}
.NavBar {
  width: 100%;
  height: 80px;
  background-color: aqua;
  .el-icon {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background 0.5s;
  }
}
</style>
