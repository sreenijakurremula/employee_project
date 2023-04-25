import adminDash from   './components/dash/adminDash.vue';
import employeeDash from './components/dash/employeeDash.vue';
import managerDash from './components/dash/managerDash.vue';
import login from './components/loginPage.vue';

export const routes = [
    {path : '/', component:login},
    {path : '/admin-dash', component:adminDash},
    {path : '/employee-dash', component:employeeDash},
    {path : '/manager-dash', component:managerDash},
    
];