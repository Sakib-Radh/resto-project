import Home from './components/Home.vue'
import signup from './components/signup.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Login from './components/Login.vue'
const routes = [
    {
        name: 'Home',
        component: Home,
        path: '/'
    },
    {
        name: "signup",
        component: signup,
        path: '/sign-up'

    },
    {
        name: "Login",
        component: Login,
        path: '/login'

    }
];

const router = createRouter(
    {
        history: createWebHistory(),
        routes
    }
);

export default router;