<template>
    <div>
      
        <app-employeeheader></app-employeeheader>
        <div class="text-center">
    <v-progress-circular
      :rotate="360"
      :size="100"
      :width="15"
      :model-value="value"
      color="black"
    >
      {{ daysUsed }}/25
    </v-progress-circular>
  </div>
          
          <div>
            <button class="btn btn-primary btn-lg active" role="button" aria-pressed="true" @click="status">Leave Requests</button>
          </div>
          <div>
            <button class="btn btn-primary btn-lg active" role="button" aria-pressed="true" @click="request">Request Leave</button>
          </div>
       <app-request v-if="requestform"></app-request>
       <app-getuserabsence v-if="statusform"></app-getuserabsence>

    </div>
</template>

<script>
import requestLeave from '../operations/requestLeave.vue';
import employeeHeader from '../headers/employeeHeader.vue';
import getUserAbsence from '../operations/getUserAbsence.vue';
    export default {  
         data() {
            return {
                requestform:false,
                statusform:false,
                value: 0,
                daysUsed:15,
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
    beforeUnmount () {
      clearInterval(this.interval)
    },
    mounted () {
        if (this.value === 25) {
          return (this.value = 0)
        }
        this.value += (this.daysUsed/25)*100

    },
  }

</script>

<style lang="css" scoped>
/* Container needed to position the button. Adjust the width as needed */
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