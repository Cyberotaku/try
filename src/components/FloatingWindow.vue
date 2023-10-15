<template>
  <div class="floating-btn-wrapper-set">
    <button class="floating-btn1" @click="toggleFloatingWindow('Window1')">
      <i class="set-team"></i>
      <span>创建团队</span>
    </button>

    <div v-show="showFloatingWindow === 'Window1'" class="floating-window" ref="floatingwindowset" @mousedown="startDragging">
      <button class="close-btn" @click="closeFloatingWindow('Window1')">
        <font-awesome-icon icon="times"></font-awesome-icon>
      </button>
      <h2>创建</h2>
      <form @submit.prevent="submitForm('Window1')">
        <label>团队名称：</label>
        <input type="text" v-model="team.name">
        <br>

        <label>密码：</label>
        <input type ="password" v-model="team.password">
        <br>

        <label>确认密码：</label>
        <input type="password" v-model="confirmPassword">
        <br><br>

        <button type="submit">提交</button>
      </form>
    </div>
  </div>


  <div class="floating-btn-wrapper-join">
    <button class="floating-btn2" @click="toggleFloatingWindow('Window2')">
      <i class="join-team"></i>
      <span>加入团队</span>
    </button>

    <div v-show="showFloatingWindow === 'Window2'" class="floating-window" ref="floatingwindowjoin" @mousedown="startDragging">
      <button class="close-btn" @click="closeFloatingWindow('Window2')">
        <font-awesome-icon icon="times"></font-awesome-icon>
      </button>
      <h2>加入</h2>
      <form @submit.prevent="submitForm('Window2')">
        <label>团队名称：</label>
        <input type ="text" v-model="team.name">
        <br>

        <label>密码：</label>
        <input type ="password" v-model="team.password">
        <br><br>

        <button type="submit">提交</button>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import {useTeamStore} from '../stores/teamStore.ts';
import unionService from '../apis/unionService.ts';
import {userStore} from '../stores/userStore.ts';
const username = userStore.userSession?.username ?? '';
export default {
  setup() {
    const showFloatingWindow = ref(null);
    const team = useTeamStore.useTeamStore;
    const confirmPassword = ref('');

    function toggleFloatingWindow(windowName) {
      if (showFloatingWindow.value === windowName) {
        showFloatingWindow.value = null;
      } else {
        showFloatingWindow.value = windowName;
      }
    }

    function closeFloatingWindow(windowName) {
      if (showFloatingWindow.value === windowName) {
        showFloatingWindow.value = null;
      }
    };

    async function submitForm(windowName) {
      if (windowName === 'Window1' && team.password !== confirmPassword.value) {
        alert('密码不一致');
        return;
      }

      const Info = {
        team_name: team.teamname,
        leader_name: team.username,
        number: team.number,
        password: team.password,
        user_account: team.account,
      };

      try {
        if (windowName === 'Window1') {
          await unionService.createTeam(Info);
        } else {
          await unionService.joinTeam(Info);
        }
        
        // 提交成功后的操作...
      } catch (error) {
        // 提交失败后的操作...
      }
    }

    return {
      toggleFloatingWindow,
      closeFloatingWindow,
      submitForm,
      showFloatingWindow,
      team,
      confirmPassword
    };
  },
};
</script>

<style>
.close-btn {
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
}

label {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100px;
  margin-right: 10px;
}

button {
  background-color: #b97c7c;
  border: none;
  color: rgb(41, 203, 149);
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  -webkit-transition-duration: 0.4s;
  transition-duration: 0.4s;
  cursor: pointer;
}

.floating-window {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 300px;
  height: 500px;
  padding: 50px;
  box-sizing: border-box;
  position: fixed;
  left: 700px;
  top: 100px;
  background-color: #a9cdff;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.993);
  opacity: 0.7;
}

.floating-btn1 {
  position: fixed;
  bottom: 400px;
  left: 90px;
  z-index: 1000;
  background-color: white;
  color: black;
  -webkit-transition-duration: 0.5s;
  transition-duration: 0.5s;
  opacity: 0.7;
}
.floating-btn1:hover {
  background-color: #7fb1f6;
  color: white;
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19);
}
.floating-btn2 {
  position: fixed;
  bottom: 400px;
  left: 220px;
  z-index: 1000;
  background-color: white;
  color: black;
  -webkit-transition-duration: 0.5s;
  transition-duration: 0.5s;
  opacity: 0.7;
}
.floating-btn2:hover {
  background-color: #7fb1f6;
  color: white;
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19);
}

.closebtn {
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
