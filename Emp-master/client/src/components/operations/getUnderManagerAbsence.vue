<template>
    <div>
        <div class="col-12">
            <!-- Card Component -->
            <div class="card pmd-card">
                <!-- Card Header -->
                <div class="card-header pmd-card-border d-flex align-items-start">
                    <div class="media-body">
                        <h2 class="card-title h3">Leave Applications</h2>
                        <p class="card-subtitle">Application of Leaves by Employees</p>
                    </div>
                    <a class="btn pmd-ripple-effect btn-outline-primary ml-auto btn-sm" href="leave.html">View All</a>
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
                                        <th>Leave Type</th>
                                        <th>Start Date</th>
                                        <th>End Date</th>
                                        <th>Reason</th>
                                        <th>No of Leave</th>
                                        <th>Status</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                   
                                            <tr v-for="(employee,index) in employees[undefined]" :key="index">
                                                <td>{{employee.userName}}</td>
                                                <td>{{employee.leaveType}}</td>
                                               
                                                <td>{{employee.startDate}}</td>
                                                <td>{{employee.endDate}}</td>
                                                <td>{{employee.reason}}</td>
                                                <td>{{employee.leaves}}</td>
                                                
                                                <td>{{employee.status}}</td>
                                                <td>
                                                    
                                                        <button class="material-icons" @click="acceptRequest(index)">Accept</button>
                                                    
                                                    
                                                        <button class="material-icons" @click="rejectRequest(index)">reject</button>
                                                    
                                                </td>
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
        methods:{
            acceptRequest(index){
                let userID=this.employees.undefined[index].id;
                console.log(userID);
               let body = {
                userID
               }
               this.$http.post('http://localhost:3000/api/absences/acceptRequest',body,function(err,data){
                if(err){
                    console.log(err);
                }
                console.log(data);
                
               })
               this.getUserAbsenceUnderManager();
            },
            rejectRequest(index){
                let userID=this.employees.undefined[index].id;
               let body = {
                userID
               }
               this.$http.post('http://localhost:3000/api/absences/rejectRequest',body,function(err,data){
                if(err){
                    console.log(err);
                }
                console.log(data);
            
               })
               this.getUserAbsenceUnderManager();
            },
        getUserAbsenceUnderManager(){
            this.$http.get(`http://localhost:3000/api/absences/getUserAbsenceUnderManager?undefined=${this.managerID}`)
                 .then(res => {
                      console.log(res.data);
                      this.employees = res.data
                      
                 })
                 .catch(err => {
                    console.log(err);
                 })
                }
    },
    beforeMount(){
        this.getUserAbsenceUnderManager();
    }
}
</script>

<style lang="css" scoped>

</style>