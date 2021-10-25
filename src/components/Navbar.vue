<template>
    <nav>
        <div class="logo"><router-link id="logo-link" to="/">Tablt</router-link> </div>
        <div v-if="smallView" class="hamburger-btn">
            <div class="hamburger" @click="toggleHamburgerMenu()">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
            </div>
        </div>

        <ul v-if="displayMenu" class="menu">
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
    data(){
        return {
            hamburgerClicked : false,
            windowWidth : window.innerWidth
        }
    },
    computed : {
        smallView : function(){
            return this.windowWidth<620 ? true : false
        },
        displayMenu : function(){
            return this.smallView===true ? this.hamburgerClicked===true ? true : false : true
        }
    },
    created() {
        window.addEventListener('resize', this.onResize);
        this.onResize();
    },

    unmounted() { 
        window.removeEventListener('resize', this.onResize); 
    },

    methods: {  
        onResize() {
            console.log("Resized")
            this.windowWidth = window.innerWidth;
        },
        toggleHamburgerMenu(){
            this.hamburgerClicked = !this.hamburgerClicked;
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
    .hamburger-btn {
        flex : 0.5;
        height : 100%;
        display: flex;
        justify-content: flex-end;
    }
    .hamburger {
        height : 40px;
        width : 40px;
        display : flex;
        flex-direction: column;
        align-items: center;
        justify-content : space-around;
    }
    .hamburger:hover {
        cursor : pointer;
    }
    .line {
        height : 2px;
        border : none;
        width : 90%;
        background-color: #1d1d1d;
    }
    @media only screen and (max-width : 620px) {
        nav {
            position: relative;
        }
        .menu {
            flex-direction: column;
            position: absolute;
            width: 100%;
            height: 80vh;
            z-index : 10;
            top : 40px;
            left : -20px;
            background-color:#fff ;
        }
        .menu-item {
            width : 100%;
            text-align : center;
            font-size: 1.9rem;
        }
    }
</style>