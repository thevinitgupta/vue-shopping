<template>
    <div class="login">
        <h2 class="login-head">Login</h2>
        <div class="login-body">
                <label for="email" class="login-label">Email</label>
                <div id="invalid-email" v-show="emailError">Invalid Email</div>
                <input type="email" name="email" class="login-input" v-model="email">
                <label for="password" class="login-label">Password</label>
                <input type="password" name="password" class="login-input" v-model="password">
                <button type="button" id="login-btn" @click="login()">Login &#10162;</button> 
        </div>
        <div class="signup-redirect">New Here? <router-link class="signup-link" to="signup">Signup Here</router-link></div>
    </div>
</template>

<script>
import axios from "axios"
export default {
    name : "Login",
    data(){
        return {
            email : "",
            password : "",
            emailError : false
        }
    },
    methods : {
        handleEmail(){
            // eslint-disable-next-line no-useless-escape
            const re = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
            const valid =  re.test(this.email.toLowerCase());
            if(!valid){
                this.emailError = true;
            }
            else {
                this.emailError = false;
            }
        },
        async login(){
            const loginBody = {
                email : this.email,
                password : this.password
            }
            const res = await axios.post(`http://localhost:3000/user/login`,loginBody);

            const jsonRes = await res.data;
            if(res.status===200) {
                console.log(jsonRes.user);
                this.email = "";
                this.password = "";
                this.$store.dispatch('updateUser',jsonRes.user)
                this.$router.push({
                    name : "Home"
                })

            }
            else {
                alert(jsonRes.message)
            }
        }
    },
    watch :{
       email : function(oldVal,newVal) {
           if(newVal!==oldVal)
           this.handleEmail();
       } 
    },
    mounted(){
        let user = this.$store.state.user;
        let emptyUser = true;
        for(let prop in user){
            if(prop)
            emptyUser = false;
            break;
        }
        if(!emptyUser){
           this.$router.push({
                    name : "Home"
                }) 
        }
    }
}
</script>

<style scoped>
    .login {
        width : 95vw;
        max-width: 400px;
        height: 70vh;
        max-height: 500px;
        margin: 50px auto;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        border: 2px solid #0f0f0f;
        border-radius: 3%;
    }
    .login-head {
        font-size: 2.5rem;
        flex: 0.2;
    }
    .login-body {
        flex: 0.7;
        width: 85%;
    }
    .login-label {
        display: block;
        width: 100%;
        font-size: 1.5rem;
        font-weight: 400;
        margin-top: 5px;
        margin-bottom: 2px;
    }
    .login-input {
        width: 100%;
        box-sizing: border-box;
        font-size: 1.25rem;
        padding: 3%;
        border: 2px solid #0f0f0f;
        margin-top: 1px;
        margin-bottom: 5px;
    }
    #login-btn {
        width: 70%;
        font-size: 1.25rem;
        padding: 2% 3%;
        margin: 5px auto;
        background-color: #06971e;
        color: #f1f1f1;
        border: none;
        border-radius: 3%;
    }
    #invalid-email{
        background-color: #be8a7dce;
        color : #dd1001;
        font-size: 1.25rem;
        font-family:  monospace;
        margin: 5px 0;
        padding: 3px 2px;
        border: none;
        border-radius: 2px;
    }
    .signup-redirect {
        color : #1c2422ca;
        margin-bottom: 10px;
        font-size: 1.10rem;
    }
    .signup-link {
        text-decoration: none;
        color: #d88e19;
        font-weight: 600;
    }
</style>