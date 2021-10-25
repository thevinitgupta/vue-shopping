<template>
    <div class="container">
        <Navbar/>
        <Products/>
    </div>
    
</template>

<script>
import  Navbar  from "./Navbar.vue";
import  Products  from "./Products.vue";
export default {
    name: "Home",
    components : {
        Navbar,
        Products
    }
}
</script>

<style scoped>
.container {
    width : 80%;
    margin: 2% auto;
}
@media only screen and (max-width : 540px){
    .container {
        width : 95%;
    }
}
</style>