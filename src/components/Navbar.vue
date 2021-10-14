<template>
    <nav>
        <div class="logo">Tablt</div>
        <ul class="menu">
            <li class="menu-item"><a class="menu-link" href="/profile/profile.html">Profile</a></li>
            <li class="menu-item"><a class="menu-link" href="./placeOrder/placeOrder.html">Place Order</a></li>
            <li class="menu-item"><a class="menu-link" href="/login/login.html">Login</a></li>
            <li class="menu-item"><a class="menu-link" href="/signup/signup.html">Signup</a></li>
        </ul>
    </nav>
</template>
<script>
export default {
    name : "Navbar"
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
        font-family: monospace;
        font-size : 2.5rem;
        font-weight: 600;
        flex: 0.25;
    }
    .logo:hover{
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