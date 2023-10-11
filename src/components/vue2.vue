<template>
  <div class="sidebar">
    <el-menu :default-active="$route.name" class="menu" background-color="#FC0">
      <!-- 菜单项 -->
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
}
</script>

<style scoped>
.sidebar {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 200px;
  z-index: 1;
  background-color: #FFCC00;
}

.menu {
  height: 100%;
  border-right: none;
}
</style>
