import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { createRouter,createWebHistory } from "vue-router";

const routes = [
    {
        name : "Home",
        component : Home,
        path : "/"
    },
    {
        name : "Signup",
        component : Signup,
        path : "/signup"
    },
    {
        name : "Login",
        component : Login,
        path : "/login"
    }
];

const router = createRouter({
    history : createWebHistory(),
    routes
})

export default router;