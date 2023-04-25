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
                                                <td  v-if="employee.status=='pending'"><button class="btn btn-warning">Edit</button></td>
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
                userID:localStorage.getItem('userID')
            }
        },
        methods: {
            getUserAbsence() {
                this.$http.get(`http://localhost:3000/api/absences/getUserAbscencebyID?undefined=${this.userID}`)
                     .then(res => {
                        console.log(res);
                        this.employees = res.data;
                     })
                     .catch(err => {
                        console.log(err);
                     })
            }
        },
        beforeMount(){
            this.getUserAbsence();
        },
        getUserAbsencerUnderManager(){
            
        }
    }
</script>

<style lang="css" scoped>

</style>