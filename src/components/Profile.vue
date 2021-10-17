<template>
    <div @click="logout()" class="logout-btn">
        Logout
    </div>
    <div class="container">
        <Navbar/>
        <div class="profile">
            <div class="profile-details">
                <div class="profile-details-left">
                    <div class="profile-img"><img src="../assets/batman.png" id="profile-image" alt="profile"></div>
                    <div class="profile-name">{{user.name}}</div>
                </div>
                <div class="profile-details-right">
                    <div class="profile-data">Email : {{user.email}} <br> Phone : {{user.phone}} </div>
                </div>
                
            </div>
            
            <div class="profile-orders">
                <button class="view-orders">View Orders <span od="order-arrow">&#10550;</span></button>
                <div class="profile-orders-list">

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from "./Navbar.vue";
export default {
    name : "Profile",
    components : {
        Navbar
    },
    data(){
        return {
            user : {},
            orders : []
        }
    },
    methods : {
        logout(){
            this.$store.dispatch("removeUser");
            this.$router.push({
                name : "Home"
            })
        },
        populateData(){

        }
    },
    mounted(){
        let user = this.$store.getters.user;
        let emptyUser = true;
        for(let prop in user){
            if(prop)
            emptyUser = false;
            break;
        }
        if(emptyUser){
            const redirect = confirm("Not Logged in. Redirect to Login Page?");
            if(redirect) {
                this.$router.push({
                    name : "Login"
                })
            } 
            else {
                this.$router.push({
                    name : "Home"
                })
            }
        }
        this.user = user;
        console.log(this.user)
    }
}
</script>

<style scoped>
.container {
    width: 80%;
    margin: 0 auto;
}
.profile {
    width : 100%;
    min-height: 700px;
}
.profile-details {
    margin: 25px 0;
    width: 100%;
    height: 15vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
.profile-details-left {
    display: flex;
    align-items: center;
}
.profile-img {
    width: 120px;
    height: 120px;
    border : none;
    border-radius : 50%;
    object-fit: contain;
    margin-right: 30px;
}
#profile-image  {
    width: 100%;
    height: 100%;
}
.profile-name {
    font-size: 1.5rem;
    transition: all 300ms ease-in-out;
}
.profile-name:hover{
    transform: scale(1.15);
}
.profile-orders {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.view-orders {
    margin-top: 35px;
    background: none;
    color : #069196;
    font-size: 1.2rem;
    border: none;
    transition: all 350ms ease-in-out;
}
.view-orders:hover{
    cursor: pointer;
    transform: scale(1.2);
}
.invalid-email{
    width: 100%;
    text-align: center;
    color: rgb(185, 51, 27);
}
.profile-orders-list{
    width: 100%;
    margin-top: 25px;
}
.order-item{
    width: 100%;
    min-height: 15vh;
    border-bottom: 2px solid #585858a9;
    margin-bottom: 15px;
}
.order-item-top{
    font-size: 1.4rem;
    font-weight: 600;
    color: #161616;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
.order-item-mid{
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 3%;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
.order-item-total-cost{
    width: 25%;
    color: #069196;
    font-size: 1.2rem;
    padding: 7px 0;
    border: none;
    border-radius: 2px;
}
.logout-btn {
    position: fixed;
    top: 30px;
    width : 140px;
    height: 50px;
    transform: rotateZ(-90deg);
    background-color: #b62106;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 4px;
    font-size: 1.2rem;
}
.logout-btn:hover{
    cursor: pointer;
}
</style>