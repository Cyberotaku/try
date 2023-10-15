<template>
  <div>
    <Touter  />
    <quit v-if="resData && resData.code==3 && username!=resData.data.leader_name"/>
    <teamControl v-if="resData && resData.code==3 && username==resData.data.leader_name"/>
    <Team v-if="resData && resData.code==85"/>
    <FloatingWindow v-if="resData && resData.code==3"/>
    <signUp v-if="resData && resData.code==3 && username==resData.data.leader_name"/>
  </div>
</template>

<script>
import Touter from '../components/Touter.vue';
import FloatingWindow from '../components/FloatingWindow.vue';
import Team from '../components/Team.vue';
import teamControl from '@/components/teamControl.vue';
import signup from '@/components/signUp.vue';
import memberInfo from '@/components/memberInfo.vue';
import quit from '@/components/quit.vue'
import signUp from "@/components/signUp.vue"
//记得引用要渲染的组件
import { ref, onMounted } from 'vue';
import { useTeamStore } from '../stores/teamStore.ts';
import { userStore } from '../stores/userStore.ts';
import unionService from '../apis/unionService.ts';

export default {
components: {
  Touter,
  FloatingWindow,
  teamControl,
  memberInfo,
},
setup() {
  const resData = ref(null);
  const account = userStore.userSession?.account ?? '';
  const username = userStore.userSession?.username ?? '';
  const teamstore = useTeamStore();
  teamstore.account = account;

  const search = async () => {
    const Info = ref({
      account: account 
    });

    const data = await unionService.teamInformation(Info); 
    resData.value = data;
    
    if (data !== null && data.code == 85) { 
        teamstore.username = data.data.username;
        teamstore.teamleader = data.data.leader_name;
        teamstore.teamname = data.data.team_name;
        teamstore.password = data.data.password;
        for (const mate of data.data.member) {
          teamstore.members.push(mate);
        }
    }
  }

  onMounted(() => {
    search();
  });

  return {
    resData, 
    username,
    search,
    teamstore,
    account,
  };
} 
}
</script>

<style>
body {
  background: url("../assets/background.png") no-repeat center center fixed;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
}
#app {
  text-align: center;
  padding-top: 60px;
}
</style>
