<template>
    <div class="products">
        <h2 v-if="productFetchError" class="products-not-found">Failed to Fetch Data! Please refresh or try again later.</h2>
        <Product v-else v-for="product in this.productList" :key="product._id" :product="product"/>
    </div>
</template>

<script>
import Product from './Product.vue';
import axios from "axios";
    export default {
  components: { 
      Product },
        name : "Products",
        data(){
            return {
                productList : [],
                productLoaded : false,
                productFetchError : false
            }
        },
        methods : {
            async fetchProducts(){
                const res = await axios.get(`http://localhost:3000/product/`);
                console.log(res);
                if(res.status==200) {
                    const productJson = res.data;
                    console.log(productJson)
                    productJson.products.forEach((product)=>{
                        this.productList.push(product)
                    })
                    console.log(this.productList)
                    this.productLoaded = true;
                }
                else {
                    this.productLoaded = false;
                    this.productFetchError = true;
                }
            }
        },
        mounted(){
            this.fetchProducts();
        }
    }
</script>

<style>
.products {
    width: 100%;
    min-height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}

.products-not-found{
    font-size : 2rem;
    font-family: monospace;
    text-align: center;
    padding : 4% 7%;
    background-color: #c0320f;
    color: #fff;
    width: 87%;
    animation: flash 1s ease-in-out forwards infinite alternate;
}
@keyframes flash{
    0%{
        background-color: #c0320f;
        color: #fff;
    }
    25%{
        color: #c0320f;
        background-color: #fff;
    }
    50%{
        background-color: #c0320f;
        color: #fff;
    }
    100%{
        color: #c0320f;
        background-color: #fff;
    }
}
</style>