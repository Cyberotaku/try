<template>
  <div style="margin: 20px"/>
  <el-form
    :label-position="labelPosition"
    label-width="100px"
    :model="formLabelAlign"
    style="max-width: 460px"
  >
    <el-form-item label="修改团队名称">
      <el-input v-model="formLabelAlign.name" />
    </el-form-item>
    <el-form-item label="修改密码">
      <el-input v-model="formLabelAlign.passsword" />
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormProps } from 'element-plus'


const labelPosition = ref<FormProps['labelPosition']>('right')

const formLabelAlign = reactive({
  name: '',
  passsword: '',
})
</script>