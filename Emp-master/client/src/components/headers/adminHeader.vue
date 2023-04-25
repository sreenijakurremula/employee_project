<template>
  <div>
    <nav class="navbar navbar-inverse">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="#">Admin</a>
        </div>
        <ul class="nav navbar-nav navbar-right">
          <li class="active"><a href="#">Home</a></li>
          <li><a href="#" @click="logout">Logout</a></li>
          
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
  export default {
    data(){
      return {
      
      }
    },
    methods: {
        logout(){
          localStorage.clear()
          this.$router.push('/');
        }
      }
   
  }
</script>

<style lang="css" scoped>

</style>