<template>
    <div class="left-area">
      <h2>团队成员：</h2>
      <p>data.leader_id</p>
      <ul>
        <li v-for="member in data.teammate" :key="member">{{ member }}    队员</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      teammate: {
        type: Array,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .left-area {
    width: 300px;
    background-color: #eee;
    padding: 10px;
  }
  </style>