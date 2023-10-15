<template>
  <div class="float-window">
    <el-table :data="tableData" :style="tableStyle" class="menuTable"> 
      <el-table-column prop="account" label="Account" width="180" />
      <el-table-column prop="name" label="Name" width="180" />
      <el-table-column prop="sex" label="Sex" />
      <el-table-column label="Operations">
        <template #default="scope">
          <el-button
            size="small"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >Delete</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { storeToRefs } from 'pinia';
import {useTeamStore} from '../stores/teamStore.ts';
import unionService from '../apis/unionService.ts'; 

export default {
  setup() {
    const teamStore = useTeamStore('useTeamStore');
    const members = teamStore.members;
    const tableData = members;
    const tableStyle = {
      width: '500px',
      height: '360px',
      position: 'relative',
      left: '-132px',
      transform: 'translate(+50%, +150px)',
      backgroundColor: '#fff',
      border: '1px solid #ccc',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
    };

    const floatWindowVisible = ref(true);

    const handleDelete = async (index, row) => {
    const Info = ref({ team_name: tableData.value(index)[0], user_account: tableData.value(index)[3] });
    tableData.value.splice(index, 1);
    const resData = await unionService.createTeam(Info.value);
};


    return {
      team,
      tableData,
      tableStyle,
      floatWindowVisible,
      handleDelete,
    };
  },
};
</script>

<style scoped>
.float-window {
  position: relative;
  left: 0%;
  top: 0px;
}

.menuTable{
  left: 0%;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
}
</style>