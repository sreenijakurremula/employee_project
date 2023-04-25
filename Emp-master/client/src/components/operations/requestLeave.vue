<template>
    <div>
        <div class="page-content" style="box-shadow:5px 5px 10px; ">
            <!-- Apply Leave Form -->
            <div class="card pmd-card single-col-form">
                <form id="apply-leave" action="" style="margin-left:20px;  margin-right:20px">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-12" >
                                <div class="form-group pmd-textfield pmd-textfield-floating-label navbar-middle" >
                                    <label for="leave-type">Leave Type</label>
                                    <select   id="leave-type" class="form-control" title="Please select a Leave Type" required v-model="form.leaveType">
                                        <option  name="leave-type">sick</option>
                                        <option  name="leave-type">vacation</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group pmd-textfield pmd-textfield-floating-label">
                                    <label class="control-label" for="datepickerstart">Start Date</label>
                                    <input type="date" class="form-control" id="datepickerstart" name="datepickerstart" v-model="form.startDate">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group pmd-textfield pmd-textfield-floating-label">
                                    <label class="control-label" for="datepickerend">End Date</label>
                                    <input type="date" class="form-control" id="datepickerend" name="datepickerend" v-model="form.endDate">
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-group pmd-textfield pmd-textfield-floating-label">
                                    <label class="control-label" for="datepickerend">Leaves</label>
                                    <input type="Number" class="form-control" id="datepickerend" name="datepickerend" v-model="form.leaves">
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="form-group pmd-textfield pmd-textfield-floating-label">
                                    <label>Reason</label>
                                    <textarea class="form-control" id="reason" name="reason" v-model="form.reason"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer">
                        <button type="submit" class="btn btn-primary pmd-ripple-effect pmd-btn-raised" name="applyleave" value="Apply Leave" @click="applyLeave">Apply Leave</button> <a href="leave.html" class="btn btn-outline-secondary pmd-ripple-effect">Cancel</a>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                form: {
                    leaveType: '',
                    startDate: '',
                    endDate: '',
                    reason: '',
                    leaves:'',
                    userName:localStorage.getItem('userName'),
                    userID:localStorage.getItem('userID'),
                    managerID:localStorage.getItem('managerID'),
                }
            }
        },
        methods: {
          applyLeave(event) {
            event.preventDefault();
              this.$http.post('http://localhost:3000/api/absences', this.form)
              .then(res => {
                 
                    console.log(res);
                   console.log({message:'leave created successfully'})
                },
                err=>{
                    console.log(err);
                })
            setTimeout(this.clearAll,1500);
          } ,
          clearAll(){
            this.form.leaveType='',
            this.form.startDate='',
            this.form.endDate='',
            this.form.leaves='',
            this.form.reason=''
          } 
        }
    }
</script>

<style lang="css" scoped>

</style>