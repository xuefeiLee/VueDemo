<template>
    <div class="topHeader">
        Vue项目
      <router-link :to="{name:'Login'}">
        <button class="quitOut" v-on:click="quitProject()">退出</button>
      </router-link>
    </div>
</template>
<style>
  .topHeader{
    background-color: #121314;
    top:0;
    color: #ffffff;
    padding: 15px 0 15px 90px;
    font-size: 20px;
  }
  .quitOut{
    color: #ffffff;
    background-color: #ea4b36;
    float: right;
    border: none;
    border-radius: 3px;
    height: 30px;
    width: 60px;
    margin-right: 150px;
    margin-top: -2px;
  }
</style>
<script type="text/javascript">
export default{
  name: 'Header',
  data () {
    return {
      msg: 'hello vue'
    }
  },
  methods: {
    quitProject () {
      localStorage.clear('user')
    }
  }
}
</script>
