<template>
    <div class="signup">
        <h2>Sign Up</h2>
        <div class="signup-body">
            <label for="name" class="signup-label">Name</label>
                <input type="text" name="name" class="signup-input signup-name">
                <label for="email" class="signup-label">Email</label>
                <input type="email" name="email" class="signup-input signup-email">
                <label for="password" class="signup-label">Password</label>
                <input type="password" name="password" class="signup-input signup-password">
                <label for="phone" class="signup-label">Phone</label>
                <input type="tel" name="phone" class="signup-input signup-phone">
                <button type="button" id="signup-btn">Signup &#10162;</button>
        </div>
    </div>
</template>

<script>
export default {
    name : "Signup"
}
</script>

<style>
.signup {
    width : 95vw;
    max-width: 400px;
    height: 80vh;
    max-height: 600px;
    margin: 50px auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border: 2px solid #0f0f0f;
    border-radius: 3%;
}
.signup-head {
    font-size: 2.5rem;
    flex: 0.2;
}
.signup-body {
    flex: 0.7;
    width: 85%;
}
.signup-label {
    display: block;
    width: 100%;
    font-size: 1.5rem;
    font-weight: 400;
    margin-top: 5px;
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
    width: 70%;
    font-size: 1.45rem;
    padding: 2% 3%;
    margin: 5px auto;
    background-color: #068a69;
    color: #f1f1f1;
    border: none;
    border-radius: 4px;
}
#signup-btn:hover{
    cursor: pointer;
}
</style>