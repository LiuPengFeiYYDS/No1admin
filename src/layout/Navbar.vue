<template>
  <div>
    <div class="NavBar">
      <!-- 内容上面的表头 -->
      <el-icon size="28px" v-if="!isCollapse" @click="isCollapse = true"
        ><Fold
      /></el-icon>
      <el-icon size="28px" v-else @click="isCollapse = false"
        ><Expand
      /></el-icon>
    </div>
  </div>
</template>

<script setup>
import { Fold, Expand } from '@element-plus/icons-vue'
import { ref } from 'vue'
const isCollapse = ref(false)
</script>

<style lang="scss" scoped>
.NavBar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgb(0 21 41 / 8%);

  .el-icon {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background 0.5s;
  }
}
</style>
