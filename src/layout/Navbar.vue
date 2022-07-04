<template>
  <div class="navbar">
    <div class="navbra-left">
      <Hamburger class="hamburger-container"></Hamburger>
      <Breadcrumb></Breadcrumb>
    </div>
    <div class="navbra-right">
      <el-dropdown trigger="click" @command="handleCommand">
        <span class="el-dropdown-link">
          <el-avatar shape="square" :size="35" :src="avatarUrl" />
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="home">首页</el-dropdown-item>
            <el-dropdown-item command="profile">课程主页</el-dropdown-item>
            <el-dropdown-item divided command="logout"
              >退出登陆</el-dropdown-item
            >
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import Breadcrumb from '../components/Breadcrumb.vue'
import Hamburger from '../components/Hamburger.vue'
const store = useStore()
const router = useRouter()
const avatarUrl = computed(() => {
  return store.getters.userInfo.avatar
})
const handleCommand = (command) => {
  switch (command) {
    case 'home':
      handleToHome()
      break
    case 'logout':
      handleLogout()
      break
  }
}
const handleToHome = () => {
  router.push('/')
}

const handleLogout = async () => {
  try {
    await store.dispatch('user/logout')
    router.push('/login')
  } catch (err) {
    console.log(err)
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
  padding: 0 20px 0 0;
  line-height: 50px;
}
.navbra-left {
  float: left;
}
.navbra-right {
  float: right;
  margin-top: 10px;
}
.el-dropdown {
  margin: 5px 10px 0 0;
}
.el-avatar {
  background: none;
}
img {
  width: 30px;
}
.hamburger-container {
  line-height: 46px;
  height: 100%;
  float: left;
  cursor: pointer;
  // hover 动画
  transition: background 0.5s;

  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
}
</style>
