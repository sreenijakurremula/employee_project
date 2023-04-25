<template>
    <div>
       <app-adminheader></app-adminheader>
       <button type="button" class="btn btn-primary"   @click="Register">Register</button>
<button type="button" class="btn btn-success" @click="getAllUsers">Employees Info</button>
<button type="button" class="btn btn-warning" @click="getAllAbsence">Absence Info</button>

      


    <app-register v-if="REgister"></app-register>
    <app-getallusers v-if="GEtAllusers"></app-getallusers>
    <app-getallabsence v-if="GEtAllAbsence"></app-getallabsence>
    </div>
  </template>
  
  <script>
  import register from '../operations/addUser.vue';
  import GetAllusers from '../operations/getAllUsers.vue';
  import getAllAbsence from '../operations/getAllAbsence.vue';
  import adminHeader from '../headers/adminHeader.vue';
  export default {
    data(){
         return {
            REgister : false,
            GEtAllusers: false,
            GEtAllAbsence : false
        }
    },
    components:{
      appRegister: register,
      appGetallusers: GetAllusers,
      appGetallabsence: getAllAbsence,
      appAdminheader: adminHeader
    },
    methods:{
        Register(){
            this.REgister = !this.REgister;
            this.GEtAllusers=false;
            this.GEtAllAbsence=false;
        },
        getAllUsers(){
            this.GEtAllusers = !this.GEtAllusers;
            this.REgister = false;
            this.GEtAllAbsence=false;
        },
        getAllAbsence(){
            this.GEtAllAbsence = !this.GEtAllAbsence;
            this.GEtAllusers = false;
            this.REgister = false;
        }
    }
   
  }
  </script>
  
  <style>
  </style>
  