<template>
    <div>
      <button @click="showConfirmDialog()">离开团队</button>
      <div v-if="isDialogVisible" class="dialog-overlay">
        <div class="dialog-container">
          <h3>确认操作</h3>
          <p>确定要推出团队吗？</p>
          <div class="dialog-buttons">
            <button @click="cancel()" class="cancelBtn">取消</button>
            <button @click="confirm()" class="cpnfirmBtn">确定</button>
          </div>
        </div>
      </div>
    </div>
</template>
  
<script>
  export default {
    data() {
      return {
        isDialogVisible: false, 
      };
    },
    methods: {
      showConfirmDialog() {
        this.isDialogVisible = true;
      },
      cancel() {
        this.isDialogVisible = false; 
      },
      confirm() {
        //  向后端发送删除的请求
        this.isDialogVisible = false; 
      },
    },
  };
</script>
  
<style scoped>
  .dialog-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .dialog-container {
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
  }
  
  .dialog-buttons {
    margin-top: 20px;
    text-align: right;
  }
  .cancleBtn{
    background-color: #0f77f7;
  }
  .confirmBtn{
    background-color: crimson;
  }

</style>
  