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
    const team = useTeamStore.useTeamStore();
    const tableData = team.members;
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



<!-- <template>
  <div class="member">
    <el-table :data="tableData" stripe style="width: 10%; height: 10%" class="member">
      <el-table-column prop="date" label="Date" width="180" />
      <el-table-column prop="name" label="Name" width="180" />
      <el-table-column prop="address" label="Address" />
    </el-table>
  </div>
 </template>
 
 <script lang="ts">
 const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
 ]
 </script>
 
 <style scoped>
 
 .member {
  z-index: 1000;
  position: absolute;
  right: 100px;
  top: 100px;
  transform: translate(-50%, -50%);
  background-color: #1f46c7; 
 }
 
 </style> -->