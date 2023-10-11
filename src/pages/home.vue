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
import aside from '../components/aside.vue';
import Team from '../components/Team.vue';
  
const getTeamInformation =async()=>{
  const teanInfo =ref({
    name:userName
  });

  const res = await searchTeam.teamSearch(teanInfo);
}

  export default {
    components: {
      Touter,
      FloatingWindow,
    },

  };
  </script>

  <style>

  #app {
    text-align: center;
    padding-top: 60px;
  }

</style>