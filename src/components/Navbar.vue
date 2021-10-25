<template>
    <nav>
        <div class="logo"><router-link id="logo-link" to="/">Tablt</router-link> </div>
        <ul class="menu">
            <li class="menu-item"><router-link class="menu-link" to="/profile">Profile</router-link></li>
            <li class="menu-item"><router-link class="menu-link" to="/cart">Cart</router-link></li>
            <li class="menu-item"><router-link class="menu-link" to="/login">Login</router-link></li>
            <li class="menu-item"><router-link class="menu-link" to="/signup">Signup</router-link></li>
        </ul>
    </nav>
</template>
<script>
export default {
    name : "Navbar",
    methods:{
        clickLogo(){
            window.location = "/";
        }
    }
}
</script>

<style scoped>
    nav {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    }
    .logo {
        flex: 0.25;
    }
    #logo-link{
        font-family: monospace;
        font-size : 2.5rem;
        font-weight: 600;
        text-decoration: none;
        color: #1d1d1d;
    }
    .logo-link:hover{
        cursor: pointer;
    }
    .menu {
        flex : 0.65;
        list-style: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .menu-item {
        font-size: 1.5rem;
        font-family :'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }
    .menu-link {
        text-decoration: none;
        color : #069196;
    }
</style>