import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Profile from "./components/Profile";
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
    },
    {
        name : "Profile",
        component : Profile,
        path : "/profile"
    }
];

const router = createRouter({
    history : createWebHistory(),
    routes
})

export default router;