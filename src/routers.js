import Home from "./components/Home";
import Signup from "./components/Signup";
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
    }
];

const router = createRouter({
    history : createWebHistory(),
    routes
})

export default router;