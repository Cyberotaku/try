<template>
    <div>
      <Touter  />
      <Team v-if="code=200"/>
      <FloatingWindow v-if="code=220"/>
    </div>
</template>
  
<script>
import Touter from '../components/Touter.vue';
import FloatingWindow from '../components/FloatingWindow.vue';
import {ref,h} from 'vue';
import searchTeam from '../apis/searchTeam.ts';
import Team from '../components/Team.vue';
  
const getTeamInformation =async()=>{
  const teanInfo =ref({
    name:userName
  });

  const res = await searchTeam.teamSearch(teanInfo);  //将其设置为全局变量
}

  export default {
    components: {
      Touter,
      FloatingWindow,
    },

  };
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