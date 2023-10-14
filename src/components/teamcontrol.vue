<template>
    <el-button type="primary" round @click="trytoControl()" class="controlBtn">管理我的团队</el-button>
    <div v-show="showControl"  class="controlMenu" >
        <el-container class="layout-container-demo" >
            <el-aside width="200px">
                <el-scrollbar>
                    <el-menu :default-openeds="['1-1']" style="height:360px;" @select="handleMenuSelset()">
                        <el-sub-menu index="1" style="width: 150px; margin-left: 0px;">
                            <template #title>
                                <el-icon><User /></el-icon>队员管理
                            </template>
                            <el-menu-item index="1-1">队员信息</el-menu-item>
                            <el-menu-item index="1-2">队员移除</el-menu-item>
                        </el-sub-menu>
                        <el-sub-menu index="2" style="width: 150px; margin-left: 0px;">
                            <template #title>
                                <el-icon><setting /></el-icon>团队设置
                            </template>
                            <el-menu-item index="2-1">信息变更</el-menu-item>
                            <el-menu-item index="2-2">上传头像</el-menu-item>
                            <el-menu-item index="2-3">团队解散</el-menu-item>
                            <!-- <el-menu-item index="2-4">团队名称</el-menu-item> -->
                        </el-sub-menu>
                    </el-menu>
                </el-scrollbar>
            </el-aside>
            
            <el-container>
                <el-main>
                    <component :is="selsetedComponent"></component> 
                </el-main> 
            </el-container>
            <!-- <el-container>
                <el-main>
                    <el-scrollbar>
                        <el-table :data="tableData">
                            <el-table-column prop="date" label="Date" width="140" />
                            <el-table-column prop="name" label="Name" width="120" />
                            <el-table-column prop="address" label="Address" />
                        </el-table>
                    </el-scrollbar>
                </el-main>
            </el-container> -->
        </el-container>
    </div>

</template>

<script>
import { Menu as IconMenu, Message, Setting } from '@element-plus/icons-vue'
import { ref } from 'vue'
import memberInfo from './memberInfo.vue'
// import memberQuit from './memberQuit.vue'
// import passChange from './passChange.vue'
// import uploadPhoto from './uploadPhoto.vue'


export default {
    components:{memberInfo},
    data(){
        return {
            showControl: false,
            selsetedComponent:'',
            menuStyle: {
                width: '400px',
                height: '500px',
                position: 'fixed',
                left: '20%',
                top: '20%',
                backgroundColor: '#fff',
                border: '1px solid #ccc',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
            }
        }
    },
    methods: {
        trytoControl(){
            this.showControl = !this.showControl
        },
        handleSelect(index) {
            this.activeIndex = index
            if (index === '1-1'){
                this.selsetedComponent = 'memberInfo';
            }else if (index === '1-2'){
                this.selsetedComponent = 'memberQuit';
            }else if (index === '2-1'){selsetedComponent
                this.selsetedComponent = 'passChange';
            }else if (index === '2-2'){
                this.selsetedComponent = 'uploadPhoto';
            }else if (index === '2-3'){
                this.selsetedComponent = 'teamCancel';
            }
            // }else if (index === '2-4'){
            //     this.selsetedComponent = 'teamnameChange';
            // }
            // switch (index) {
            //     case '1-1':
            //         this.currentMenu = 'memberInfo';
            //         break;
            //     case '1-2':
            //         this.currentMenu = 'memberQuit';
            //         break;
            //     case '2-1':
            //         this.currentMenu = 'passChange';
            //         break;
            //     case '2-2':
            //         this.currentMenu = 'uploadPhoto';
            //         break;
            //     case '2-3':
            //         this.currentMenu = 'teamCancel';
            //         break;
            //     default:
            //         break;
            // }
        },
        //     if (index === '1-1'){
        //         this.currentMenu = 'memberInfo';
        //     }else if (index === '1-2'){
        //         this.currentMenu = 'memberQuit';
        //     }else if (index === '2-1'){
        //         this.currentMenu = 'passChange';
        //     }else if (index === '2-2'){
        //         this.currentMenu = 'uploadPhoto';
        //     }else if (index === '2-3'){
        //         this.currentMenu = 'teamCancel';
        //     }
        // }
    },
};

</script>

<style>

.layout-container-demo .el-header {
  position: relative;
  background-color: var(--el-color-primary-light-7);
  color: var(--el-text-color-primary);
}
.layout-container-demo .el-aside {
  color: var(--el-text-color-primary);
  background: var(--el-color-primary-light-8);
}
.layout-container-demo .el-menu {
  border-right: none;
}
.layout-container-demo .el-main {
  padding: 0;
}
.layout-container-demo .toolbar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  right: 20px;
}

.controlMenu{
    position: absolute;
    left: 30%;
    top: 24.95%;
    width: 360px;
    height: 500px;
}
.controlBtn{
    position: absolute;
    left: 15%;
    top: 20%;
}
</style>