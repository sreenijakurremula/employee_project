<template>
    <div>
        <nav class="navbar navbar-inverse">
            <div class="container-fluid">
              <div class="navbar-header">
                <a class="navbar-brand" href="#">Manager</a>
              </div>
              <ul class="nav navbar-nav navbar-right">
                <li class="active"><a href="link">Home</a></li>
                <li><a @click="logout">Logout</a></li>
                
              </ul>
            </div>
          </nav>
    </div>
</template>

<script>
    export default {
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