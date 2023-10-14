// stores/counter.js
import { defineStore } from 'pinia'
// import ref from "vue";

export const useTeamStore = defineStore(
  'useTeamStore', () => {
    return {
      account:"",
      password:"",
      username:"",
      teamname:"",
      teamleader:"",
      members:[],
    }
  })