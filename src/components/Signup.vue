<template>
    <div class="signup">
        <img src="../assets/user.png" alt="user" class="user-img">
        <h2 class="signup-head">Sign Up</h2>
        <div class="signup-body">
                <label for="name" class="signup-label">Name</label>
                <input type="text" name="name" class="signup-input" v-model="name">
                <label for="email" class="signup-label">Email</label>
                <input type="email" name="email" class="signup-input" v-model="email">
                <label for="phone" class="signup-label">Phone</label>
                <input type="tel" name="phone" class="signup-input" v-model="phone">
                <label for="password" class="signup-label">Password</label>
                <input type="password" name="password" class="signup-input" v-model="password">
                <button type="button" id="signup-btn" @click="signup()">Sign Up</button>
        </div>
        <div class="login-redirect">Already Registered? <router-link class="login-link" to="login">Login Here</router-link></div>
    </div>
</template>

<script>
export default {
    name : "Signup",
    data(){
        return {
            name : "",
            email : "",
            password : "",
            phone : ""
        }
    },
    methods : {
        async signup(){
            const signupBody = {
                name : this.name,
                password : this.password,
                email : this.email,
                phone : this.phone
            }
            const res = await fetch(`http://localhost:3000/user/signup`, {
                method : "POST",
                headers : {
                     'Content-Type' : 'application/json'
                },
                body : JSON.stringify(signupBody)
            });

            const jsonRes = await res.json();
            if(res.status===200) {
                console.log(jsonRes.user);
               this.name = "";
                this.email = "";
                this.password = "";
                this.phone = ""; 
                this.$store.dispatch('updateUser', jsonRes.user);
                this.$router.push({
                    name : "Home"
                })

            }
            else {
                alert(jsonRes.message)
            }
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
        if(!emptyUser){
           this.$router.push({
                    name : "Home"
                }) 
        }
    }
}
</script>

<style scoped>
.signup {
    width : 95vw;
    max-width: 450px;
    height: 80vh;
    max-height: 700px;
    margin: 30px auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 2px solid #0f0f0f;
    border-radius: 3%;
}
.user-img {
    width: 90px;
}
.signup-head {
    font-size: 2rem;
    flex: 0.14;
    margin : 10px auto;
}
.signup-body {
    flex: 0.6;
    width: 85%;
}
.signup-label {
    display: block;
    width: 100%;
    font-size: 1.2rem;
    font-weight: 400;
    margin-top: 2px;
    margin-bottom: 2px;
}
.signup-input {
    width: 100%;
    box-sizing: border-box;
    font-size: 1.25rem;
    padding: 3%;
    border: 2px solid #0f0f0f;
    margin-top: 1px;
    margin-bottom: 5px;
}
#signup-btn {
    width: 100%;
    font-size: 1.45rem;
    padding: 3% 3%;
    margin: 25px auto;
    margin-bottom: 50px;
    background-color: #068a69;
    color: #f1f1f1;
    border: none;
    border-radius: 4px;
}
#signup-btn:hover{
    cursor: pointer;
}
.login-redirect {
    color : #1c2422ca;
    margin-bottom: 10px;
    font-size: 1.10rem;
}
.login-link {
    text-decoration: none;
    color: #d88e19;
    font-weight: 600;
}
</style>