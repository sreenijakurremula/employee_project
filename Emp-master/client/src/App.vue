<template>
  <div id="app">
    <!-- <div> 
      <app-login></app-login>
    </div>
    <div>
      <app-admin></app-admin>
    </div>
    <div>
      <app-employee></app-employee>
      </div>
      <div>
        <app-manager></app-manager>
        </div> -->
        <router-view></router-view>
  </div>
  
</template>

<script>
// import adminDash from './components/dash/adminDash.vue'
// import employeeDash from './components/dash/employeeDash.vue'
// import managerDash from './components/dash/managerDash.vue'
// import login from './components/loginPage.vue'
  export default {
    // components : {
    //   appAdmin: adminDash,
    //   appEmployee: employeeDash,
    //   appManager: managerDash,
    //   appLogin: login
    // }
  }
</script>

<style lang="css" scoped>

</style>