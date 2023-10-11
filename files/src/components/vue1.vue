我设计了两个可拖拽悬浮窗，假设一个悬浮窗叫悬浮窗A，另一个叫悬浮窗B。但当我点击另一个悬浮窗时，它会复位至与其对应的按钮处，请你在我的代码的基础上进行修改，详细地展示修改后的代码，并实现以下几点目标：
1.悬浮窗A与悬浮窗B的初始位置在同一个地方。
2.当悬浮窗A与悬浮窗B显示时，他们的堆叠顺序最前面。
3.悬浮窗A与悬浮窗B同时最多只有一个显示出来
4.悬浮窗A与B的透明度为0.5
5.悬浮窗A与悬浮窗B都可以进行拖拽
以下是我的代码
<template>
    <div class="floating-btn-wrapper-set" >
      <button class="floating-btn1" @click="toggleFloatingWindow('Window1')">
        <i class="set-team"></i> <!-- 已经存在的图标 -->
        <span>创建团队</span>
      </button>
      
      <div v-show="showFloatingWindowset" class="floating-window-set" ref="floatingwindowset">
        <!-- 悬浮窗的内容 -->
        <button class="close-btn1" @click="closeFloatingWindow('Window1')">
          <font-awesome-icon icon="times"></font-awesome-icon>
        </button>
        <h2>创建</h2>
        <form @submit.prevent="submitForm">
          <label>团队名称：</label>
          <input type="text" v-model="name">
          <br>

          <label>团队编号：</label>
          <input type ="text" v-model="num1">
          <br>

          <label>密码：</label>
          <input type ="text" v-model="mm1">
          <br>

          <label>确认密码：</label>
          <input type="text" v-model="mm2">
          <br><br>

          <button type="submit">提交</button>

        </form>
      </div>
    </div> 


    <div class="floating-btn-wrapper-join">
      <button class="floating-btn2" @click="toggleFloatingWindow('Window2')">
        <i class="join-team"></i> <!-- 已经存在的图标 -->
        <span>加入团队</span>
      </button>
      
      <div v-show="showFloatingWindowjoin" class="floating-window-join" ref="floatingwindowjoin">
        <!-- 悬浮窗的内容 -->
        <button class="close-btn2" @click="closeFloatingWindow('Window2')">
          <font-awesome-icon icon="times"></font-awesome-icon>
        </button>
        <h2>加入</h2>
        <form @submit.prevent="submitForm">
          <label>团队编号：</label>
          <input type ="text" v-model="num2">
          <br>

          <label>密码：</label>
          <input type ="text" v-model="mm3">
          <br>

          <button type="submit">提交</button>
        </form>
      </div>
    </div>

  </template>
  
  <script >
  export default {
    mounted(){
      const windowset = this.$refs.floatingwindowset;
      const windowjoin = this.$refs.floatingwindowjoin;
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      // 设置悬浮窗的初始位置
      windowset.style.left = `${windowWidth - 1075}px`; // 调整这里的数值以设置悬浮窗的水平位置
      windowset.style.top = `${windowHeight - 1100}px`; // 调整这里的数值以设置悬浮窗的垂直位置
      windowjoin.style.left = `${windowWidth - 1075}px`; 
      windowjoin.style.top = `${windowHeight - 1100}px`; 

      let isDragging1 = false;
      let isDragging2 = false;
      let mouseX,mouseY,windowX,windowY;

      windowset.addEventListener("mousedown",(event) =>{
        // 当鼠标按下时记录当前鼠标和悬浮窗的位置信息
        isDragging1 = true;
        mouseX = event.clientX;
        mouseY = event.clientY;
        windowX = windowset.offsetLeft;
        windowY = windowset.offsetTop;
      });
      windowjoin.addEventListener("mousedown",(event) =>{
        // 当鼠标按下时记录当前鼠标和悬浮窗的位置信息
        isDragging2 = true;
        mouseX = event.clientX;
        mouseY = event.clientY;
        windowX = windowset.offsetLeft;
        windowY = windowset.offsetTop;
      });

      document.addEventListener("mousemove",(event) =>{
        // 当悬浮窗正在被拖拽时，计算它新的位置并应用到样式中
        if (isDragging1) {
          const deltaX = event.clientX - mouseX;
          const deltaY = event.clientY - mouseY;
          windowset.style.left = `${windowX + deltaX}px`;
          windowset.style.top = `${windowY + deltaY}px`;
        }
        if (isDragging2) {
          const deltaX = event.clientX - mouseX;
          const deltaY = event.clientY - mouseY;
          windowjoin.style.left = `${windowX + deltaX}px`;
          windowjoin.style.top = `${windowY + deltaY}px`;
        }
        });

      document.addEventListener("mouseup",()=>{
        // 当鼠标释放时停止拖拽
        isDragging1 = false;
        isDragging2 = false;
      });
    },
    data() {
      return {
        showFloatingWindowset: false ,// 控制悬浮窗的显示与隐藏
        showFloatingWindowjoin:false,
      };
    },
    methods: {
      toggleFloatingWindow(Window) {
        if (Window === 'Window1') {
          this.showFloatingWindowjoin = false;
          this.showFloatingWindowset = !this.showFloatingWindowset;
        }
        else{
          this.showFloatingWindowset = false;
          this.showFloatingWindowjoin =!this.showFloatingWindowjoin;
        }
        // this.showFloatingWindow = !this.showFloatingWindow; // 切换悬浮窗的显示与隐藏状态
      },
      closeFloatingWindow(Window){
        if (Window === 'Window1'){
          this.showFloatingWindowset = false;
        }
        else if (Window === 'Window2'){
          this.showFloatingWindowjoin = false;
        } 
      }

    }
  };
  </script>
  
  <style>
  .close-btn1{
    position: absolute;
    right: 10px;
    top: 10px;
    cursor: pointer;
  }
  .close-btn2{
    position: absolute;
    right: 10px;
    top: 10px;
    cursor: pointer;
  }

  label {
    display: flex;
    align-items: center;    /* 垂直居中对齐 */
    justify-content: flex-start;    /* 左对齐 */
    width: 100px;
    margin-right: 10px;
  }

  .button {
    background-color: #ffffff; 
    border: none;
    color: rgb(175, 196, 255);
    padding: 16px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
    cursor: pointer;
  }

  .floating-window-set {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 300px;
    height: 500px;
    padding: 50px;
    box-sizing: border-box;
    position: absolute;
    left: 1000px;
    top: 500px;
    background-color: #a9cdff;
    border: 1px solid #ccc;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.993);
    z-index: 9999;
  }
  .floating-window-join {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 300px;
    height: 500px;
    padding: 50px;
    box-sizing: border-box;
    position: absolute;
    left: 1000px;
    top: 500px;
    background-color: #a9cdff;
    border: 1px solid #ccc;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.993);
    z-index: 9999;
  }
  .floating-btn-wrapper-set{
    position: fixed;
    bottom: 400px;
    left: 100px;
    z-index: 5000;
  }
  .floating-btn-wrapper-join{
    position: fixed;
    bottom: 400px;
    left: 220px;
    z-index: 5000;
  }
  .floating-btn1{
    background-color: white; /* Green */
    color: black;
    -webkit-transition-duration: 0.5s; /* Safari */
    transition-duration: 0.5s;
  }
  .floating-btn1:hover{
    background-color: #7fb1f6;
    color: white;
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
  }
  .floating-btn2{
    background-color: white; /* Green */
    color: black;
    -webkit-transition-duration: 0.5s; /* Safari */
    transition-duration: 0.5s;
  }
  .floating-btn2:hover{
    background-color: #7fb1f6;
    color: white;
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
  }
  .closebtn1{
    position: relative;
    top: -10px;
    right: -10px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #ccc;
    color: #fff;
    font-weight: bold;
    font-size: 16px;
    cursor: pointer;
    border: none;
  }
  </style>