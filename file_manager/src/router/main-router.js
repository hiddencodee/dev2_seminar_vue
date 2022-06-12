import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import LoginComponent from '@/components/LoginPage'
import SignUpComponent from '@/components/SignUpPage'
import ApproveComponent from '@/components/ApprovePage'
import MyBoxComponent from '@/components/MyBoxPage'

const route = [
    {path: "/", component: LoginComponent},
    {path: "/SignUp", component: SignUpComponent},
    {path: "/Approve", component: ApproveComponent},
    {path: "/MyBox", component: MyBoxComponent},
];

const router = new VueRouter({
    mode: 'history',
    routes: route,
});

export default router;