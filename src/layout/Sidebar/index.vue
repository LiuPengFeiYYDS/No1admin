<template>
  <div class="profile">
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
        >
          <el-sub-menu index="1">
            <!-- <template #title>
              <el-icon><location /></el-icon>
              <span>Navigator One</span>
            </template>
            <el-sub-menu index="1-4">
              <template #title>item four</template>
              <el-menu-item index="1-4-1">item one</el-menu-item>
            </el-sub-menu> -->

            <Item v-for="(item, i) in array" :key="i" :item="item" />
          </el-sub-menu>
        </el-menu>
      </el-aside>
      <el-main>
        <!-- 面包屑 -->
        11111111
        <router-view
      /></el-main>
    </el-container>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Item from './Item'
const data = [
  {
    id: 1,
    name: 'IT互联网',
    children: [
      {
        id: 11,
        name: '前端',
        children: [
          {
            id: 111,
            name: 'html',
            children: [
              {
                id: 11113,
                name: 'p'
              },
              {
                id: 11114,
                name: 'h1'
              },
              {
                id: 11115,
                name: 'ul'
              }
            ]
          },
          {
            id: 112,
            name: 'css'
          },
          {
            id: 113,
            name: 'javascript'
          }
        ]
      },
      {
        id: 12,
        name: '后端'
      },
      {
        id: 13,
        name: '运维'
      }
    ]
  },
  {
    id: 2,
    name: '设计创作',
    children: [
      {
        id: 22,
        name: '平面设计'
      },
      {
        id: 23,
        name: '网页设计'
      }
    ]
  },
  {
    id: 3,
    name: '升学考研',
    chidlren: []
  },
  {
    id: 1,
    name: '职企考证',
    chidlren: []
  }
]

const array = reactive(data)
</script>

<style lang="scss" scoped>
li.one {
  color: #fff;
}
li.two {
  color: yellow;
}
li.three {
  color: #f60;
}

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

</style>
