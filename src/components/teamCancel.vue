<template>
  <div class="app-container">
    <el-button type="primary" round @click="cancelTeam()" class="cancelBtn">解散团队</el-button>
    <div v-if="isDialogVisible" class="dialog-overlay">
        <div class="dialog-container">
          <h3>确认操作</h3>
          <p>您确定要解散团队吗？</p>
          <div class="dialog-buttons">
            <button @click="cancel()" class="cancelBtn">取消</button>
            <button @click="confirm()" class="cpnfirmBtn">确定</button>
          </div>
        </div>
      </div>
  </div>


</template>

<script>
import { ref } from 'vue';
export default {
    setup() {
        const isDialogVisible = ref(false);
        function cancelTeam( ) {
            isDialogVisible.value = true;
        }
        function cancel() {
            isDialogVisible.value = false;
        }
        function confirm(){
            
        }
        return {
            isDialogVisible,
            cancelTeam,
            cancel,
            confirm
        }    
    }
}
//   data() {
//     return {
//       isDialogVisible: false,
//     };
//   },
//   methods: {
//     cancelTeam() {
//       this.isDialogVisible = true
//     },
//     cancel(){
//       this.isDialogVisible: false
//     },
//     confirm(){

//     },
//   }
</script>

<style >
  .floating-window {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 300px;
    height: 500px;
    padding: 50px;
    box-sizing: border-box;
    position:fixed;
    left: 700px;
    top: 100px;
    background-color: #a9cdff;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.993);
  }
  .closebtn{
    position: relative;
    top: -10px;
    right: -10px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #ccc;
    color: #f538a0;
    font-weight: bold;
    font-size: 16px;
    cursor: pointer;
    border: none;
  }
</style>