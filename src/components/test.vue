<template>
  <div class="app-container">
    <el-button type="primary" round @click="cancelTeam()" class="cancelBtn">解散团队</el-button>
    <div v-if="isDialogVisible" class="dialog-overlay">
      <div class="dialog-container">
        <h3>确认操作</h3>
        <p>您确定要解散团队吗？</p>
        <div class="dialog-buttons">
          <button @click="cancel()" class="cancelBtn">取消</button>
          <button @click="confirm()" class="confirmBtn">确定</button>
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
    function cancelTeam() {
      isDialogVisible.value = true;
    }
    function cancel() {
      isDialogVisible.value = false;
    }
    function confirm() {

    }
    return {
      isDialogVisible,
      cancelTeam,
      cancel,
      confirm
    }
  }
}
</script>
