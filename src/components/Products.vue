<template>
    <div class="products" v-for="product in this.productList" :key="product.id">
        <Product/>
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
                productLoaded : false
            }
        },
        methods : {
            async fetchProducts(){
                const res = await fetch(`http://localhost:3000/product/`);
                console.log(res);
                const productJson = await res.json();
                console.log(productJson)
                if(res.status==200) {
                    productJson.products.forEach((product,index)=>{
                        this.productList.push({...product,id : index})
                    })
                    console.log(this.productList)
                    this.productLoaded = true;
                }
            }
        },
        mounted(){
            console.log("products mounted")
            this.fetchProducts();
        }
    }
</script>

<style scoped>
.products {
    width: 100%;
    min-height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
.product {
    width: 100%;
    height: 25vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
}
.product-head {
    width: 100%;
    display: flex;
    justify-content: space-between;

}
.product-head-name{
    flex : 0.7;
    font-size: 1.5rem;
    font-weight: 600;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    color: #06aaaf;
}
.product-add-item {
    text-align: right;
    padding: 7px 8px;
    border: none;
    border-radius: 4px;
    background-color: #06aaaf;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 1.2rem;
    color: #fff;
    transition: all 350ms ease-in-out;
}
.product-add-item:hover{
    cursor: pointer;
    transform: scale(1.12);
}
.product-info{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 1.12rem;
}
</style>