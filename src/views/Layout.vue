<template>
  <a-layout id="nocode-layout-wrap">
    <a-layout-sider class="nocode-layout-side" v-model="collapsed" :trigger="null" collapsible>
      <div class="logo" />
      <VueMenu :menu="menu" :collapsed="collapsed"></VueMenu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon class="trigger" :type="collapsed ? 'menu-unfold' : 'menu-fold'" @click="() => (collapsed = !collapsed)" />
          <a-dropdown>
            <a class="ant-dropdown-link" @click="e => e.preventDefault()">
              Hover me <a-icon type="down" />
            </a>
            <a-menu a-menu slot="overlay">
            <a-menu-item>
              <a href="javascript:;">1st menu item</a>
            </a-menu-item>
            <a-menu-item>
              <a href="javascript:;">2nd menu item</a>
            </a-menu-item>
            <a-menu-item>
              <a href="javascript:;">3rd menu item</a>
            </a-menu-item>
            </a-menu>
          </a-dropdown>
      </a-layout-header>
      <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import VueMenu from '@/components/Menu.vue';
import menu from '@/router/index.js';
export default {
  name: 'Layout',
  data() {
    return {
      collapsed: false,
      menu: menu.options.routes[0].children,
    };
  },
  components: {
    VueMenu
  },
  computed: {
  },
  methods: {
  }
};
</script>
<style>
#nocode-layout-wrap {
  height: 100vh;
}
.nocode-layout-side {
  overflow-x: hidden;
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
}
#nocode-layout-wrap .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#nocode-layout-wrap .trigger:hover {
  color: #1890ff;
}

#nocode-layout-wrap .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>