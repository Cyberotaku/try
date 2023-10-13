<template>
    <div>
    <button @click="signup" class="signBtn">报名</button>
    <button @click="cancelSign" class="cancelBtn">取消</button>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    methods: {
    signup() {
        
      
    }
  }
}
</script>

<style scoped>
.signBtn {
    left: 45%;
    top: 50%;
    width: 100px;
    height: 30px;
    background-color: #409EFF;
    border-radius: 10px;
    border: 0;
    color: #fff;
    font-size: 14px;
    margin: 0 auto;
    margin-top: 10px;
    cursor: pointer;

}

.cancelBtn {
    left: 55%;
    top: 50%;
    width: 100px;
    height: 30px;
    background-color: #409EFF;
    border-radius: 10px;
    border: 0;
    color: #fff;
    font-size: 14px;
    margin: 0 auto;
    margin-top: 10px;
    cursor: pointer;
}

</style>