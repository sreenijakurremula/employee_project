<template>
    <div>
        <div class="col-12" style="box-shadow: 0 5px 15px rgba(0,0,0,0.3);">
            <!-- Card Component -->
            <div class="card pmd-card">
                <!-- Card Header -->
                <div class="card-header pmd-card-border d-flex align-items-start">
                    <div class="media-body">
                        <h2 class="card-title h3">Employee Details</h2>
                        <p class="card-subtitle">Employee under the Manager</p>
                    </div>
                   
                </div>
                <!-- Card Header End -->

                <!-- Card Body -->
                <div class="card-body">
                    <div class="body">
                        <div class="table-responsive">
                            <table class="table pmd-table table-hover">
                                <thead>
                                    <tr>
                                        <th>Employee</th>
                                        <th>UserID</th>
                                       
                                        <th>Email</th>
                                        <th>Sick Leaves</th>
                                        <th>Vacation Leaves</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                   
                                            <tr v-for="(employee,index) in employees[undefined]" :key="index">
                                                <td>{{employee.userName}}</td>
                                                <td>{{employee.userID}}</td>
                                               
                                                <td>{{employee.email}}</td>
                                                <td>{{employee.sickLeaves}}</td>
                                                <td>{{employee.vacationLeaves}}</td>
                                            </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <!-- Card Body End -->
            </div>
            <!-- Card Component End -->
        </div>
        <!-- Leave Application Block End -->
    </div>
</template>

<script>
    export default {
        data() {
        return {
        employees: [],
         managerID:localStorage.getItem('managerID')
        }
    },
    methods : {
     getAllEmp(){
    this.$http.get(`http://localhost:3000/api/myusers/getAllEmp?undefined=${this.managerID}`)
        .then(res => {
            console.log(res);
            this.employees = res.data;
        })
        .catch(err =>{
            console.log(err);
        })
          }
       },
     beforeMount(){
    this.getAllEmp()
    }
    }
</script>

<style lang="css" scoped>

</style>