<template>
    <div class="left-area">
      <h2>队友列表：</h2>
      <ul>
        <li v-for="member in teammate" :key="member">{{ member }}</li>
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