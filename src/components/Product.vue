<template>
    <div class="product">
        <div class="product-head">
        <div class="product-head-name">{{product.name}}</div>
        <div class="product-add-item" @click="addItemToCart">Add To Cart</div>
        </div>
        <div class="product-info">
            <div class="product-info-cost">&#8377;{{product.cost}}</div>
            <div class="product-info-count">Count :{{product.count}}</div>
        </div>
    </div>
</template>

<script>
export default {
    name : "Product",
    props : {
        product : Object
    },
    methods : {
        addItemToCart(){
            this.$store.dispatch("addNewCartItem",this.product);
        }
    }
}
</script>

<style scoped>
    .product {
        width: 100%;
        height: 25vh;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: flex-start;
        margin-bottom: 20px;
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