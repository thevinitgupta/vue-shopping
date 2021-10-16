<template>
    <div v-if="productFetchError" class="product-error">
        <h2 class="products-not-found">Failed to Fetch Data! Please refresh or try again later.</h2>
    </div>
    <div v-else class="products">
        <Product v-for="product in this.productList" :key="product._id" :product="product"/>
    </div>
    
</template>

<script>
import Product from './Product.vue';
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
                const res = await fetch(`http://localhost:3000/product/`);
                console.log(res);
                if(res.status==200) {
                    const productJson = await res.json();
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
</style>