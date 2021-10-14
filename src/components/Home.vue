<template>
    <div class="container">
        <Navbar/>
        <div class="products">
        </div>
    </div>
    
</template>

<script>
import  Navbar  from "./Navbar.vue";
export default {
    name: "Home",
    components : {
        Navbar
    }
}
</script>

<style scoped>
.container {
    width : 80%;
    margin: 2% auto;
}
</style>