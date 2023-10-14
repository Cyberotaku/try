<template>
    <div>
      <Touter  />
      <quit v-if="resData.code==3 && username!=resData.data.leader_name"/>
      <teamControl v-if="resData.code==3 && username==resData.data.leader_name"/>
      <Team v-if="resData.code==85"/>
      <FloatingWindow v-if="resData.code==3"/>
      <signUp v-if="resData.code==3 && username==resData.data.leader_name"/>
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
import userStore from "@/stores/userStore.ts";
import signUp from "@/components/signUp.vue"
//记得引用要渲染的组件
import {ref,h} from 'vue';
import {storeToRefs} from 'pinia';
import {useTeamStore} from '../stores/teamStore.ts';
import unionService from '../apis/unionService.ts'; 
console.log(userStore.userSession);

export default {
  components: {
    Touter,
    FloatingWindow,
    teamControl,
    memberInfo,
  },
  setup() {
    const res = ref({
      code: 3,
      data: {
        team_name: "",
        leader_name: "",
        TeamMember: [],
      }
    });
    const account = userStore.userSession?.account ?? '';
    const username = userStore.userSession.username;
    const teamstore = useTeamStore();
    teamstore.account = account;  
    const resData = ref(null); // 改动1：将 resData 定义为 ref 对象

    const search = async () => {
      const Info = ref({
        account: account 
      });

      resData.value = await unionService.teamInformation(Info); // 改动2：将 resData 赋值为请求返回值
    }

    // 下面的代码需要放在 search 函数之后执行
    if (resData.value !== null && resData.value.code == 85) { // 改动3：增加判断 resData 是否非空
        teamstore.username = resData.value.data.username;
        teamstore.teamleader = resData.value.data.leader_name;
        teamstore.teamname = resData.value.data.team_name;
        teamstore.password = resData.value.data.password;
        for (const mate of resData.value.data.member) {
          teamstore.members.push(mate);
        }
    }

    return {
      res,
      username,
      search,
      resData, // 增加 resData 的输出
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