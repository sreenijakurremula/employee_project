<template>
    <div>
    
    <div v-for="(user,index) in users" :key="index" style="display: inline-block; margin:50px 10px 50px 10px; padding:20px 20px 20px 20px;
    background:greenyellow">
      <div class="card" style="width: 200px; height:270px; border-radius:10px">
        <div class="card-body">
          <h5 class="card-title"><span style="color:black;">userName : </span>{{ user.userName}} </h5>
          <h5 class="card-title"><span style="color:black;">userEmail : </span>{{ user.email}} </h5>
          <h5 class="card-title"><span style="color:black;">userRole : </span> {{ user.role}} </h5>
         
    </div>
      </div>
         </div> 
           
      
    </div>
</template>

<script>
    export default {
        data(){
          return{
            users: [],
            token:localStorage.getItem('token')
          }
        },

        methods:{
        getAllUsers(){
        this.$http.get(`http://localhost:3000/api/myusers?access_token=${this.token}`)
        .then(res => {
          console.log(res);
          this.users = res.data;
        }, err => {
          console.log(err);
        })

      }
        },
         beforeMount(){
          this.getAllUsers();
         }
    }
</script>

<style lang="css" scoped>

</style>