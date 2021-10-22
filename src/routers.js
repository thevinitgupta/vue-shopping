import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Cart from "./components/Cart";
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
    //!same component different path - second one loads
    // {
    //     name : "Login",
    //     component : Login,
    //     path : "/loginto"
    // },
    {
        name : "Profile",
        component : Profile,
        path : "/profile"
    },
    {
        name : "Cart",
        component : Cart,
        path : "/cart"
    }
];

const router = createRouter({
    history : createWebHistory(),
    routes
})

export default router;