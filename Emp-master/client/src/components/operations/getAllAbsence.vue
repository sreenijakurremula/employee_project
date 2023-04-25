<template>
    <div>
        
        <div v-for="(user,index) in absenceUsers" :key="index" style="display: inline-block; margin:50px 10px 50px 10px; padding:20px 20px 20px 20px;
        background:greenyellow;">
          <div class="card" style="width: 200px; height:270px; border-radius:10px">
            <div class="card-body">
              <h5 class="card-title"> <span style="color:black;">userName : </span>{{ user.userName}} </h5>
              <h5 class="card-title"><span style="color:black;">userstatus : </span>{{user.status}} </h5>
              <h5 class="card-title"><span style="color:black;">reason : </span>{{user.reason}} </h5>
             
        </div>
          </div>
             </div> 
    </div>
</template>

<script>


    export default {
          data() {
            return {
                absenceUsers: [],
            }
          },
          methods: {
             getAllAbsences(){
                this.$http.get('http://localhost:3000/api/absences')
                .then(res => {
                    console.log(res);
                    this.absenceUsers = res.data;
                }
                ,err => {
               console.log(err);
            })
          }
    },
     beforeMount() {
        this.getAllAbsences();
     }
}
</script>

<style lang="css" scoped>

</style>