<template>
  
    <div>
      
        <app-employeeheader></app-employeeheader>
        <div class="text-center">
    <v-progress-circular 
    :rotate="360"
      :size="100"
      :width="15"
      :model-value="value"
      color="black">
      Sick:
      {{ sickUsed }}/12
    </v-progress-circular>

    <v-progress-circular
    :rotate="360"
      :size="100"
      :width="15"
      :model-value="val"
      color="black"
    > Vacation
      {{ vacationUsed }}/25
    </v-progress-circular>
  </div>
          
        <div class="pull-right">
          <div class="btn-group">
            <button class="btn btn-success btn-filter" @click="status">Leave Request</button>
            <button class="btn btn-warning btn-filter" @click="request">Request Leave</button>
          </div>
        </div>
         
       <app-request v-if="requestform"></app-request>
       <app-getuserabsence v-if="statusform"></app-getuserabsence>

    </div>
</template>

<script >
import requestLeave from '../operations/requestLeave.vue';
import employeeHeader from '../headers/employeeHeader.vue';
import getUserAbsence from '../operations/getUserAbsence.vue';
    export default {  
         data() {
            return {
                requestform:false,
                statusform:false,
                value: 0,
                sickUsed:localStorage.getItem('sickLeaves'),
                vacationUsed:localStorage.getItem('vacationLeaves'),
            }
           
        },
   
        components: {
            appRequest: requestLeave,
            appEmployeeheader: employeeHeader,
            appGetuserabsence:getUserAbsence
        },
    methods: {
        request() {
            this.requestform = !this.requestform;
        },
        status(){
           this.statusform = !this.statusform
        }
    },
    mounted () {
        if (this.value == 25) {
          return (this.value = 0)
        }
        this.value = (12-this.sickUsed/12)*100;
        console.log(this.sickUsed);
        console.log(this.value);

    },
  }

</script>

<style lang="css" scoped>
/* Container needed to position the button. Adjust the width as needed */
.text-centre{
      color:"black"
}
.container {
    position: relative;
    width: 50%;
  }
  
  /* Make the image responsive */
  .container img {
    width: 100%;
    height: auto;
  }
  
  /* Style the button and place it in the middle of the container/image */
  .container .btn {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    background-color: #555;
    color: white;
    font-size: 16px;
    padding: 12px 24px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
  }
  
  .container .btn:hover {
    background-color: black;
  }
</style>