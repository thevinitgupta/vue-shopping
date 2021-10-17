<template>
    <h2 v-if="this.cartEmpty" >Cart Empty!</h2>
    <div v-else class="cart">
        <h1>Your Cart : </h1>
        <div v-for="item in this.items" :key="item._id" class="cart-item">
            <div class="cart-top">
                <div class="cart-item-name">{{item.name}}</div>
                <div class="cart-item-counter">
                    <div class="count-btn decrease-count">-</div>
                    <div class="cart-item-count">1</div>
                    <div class="count-btn increase-count">+</div>
                </div>
            </div>
            <div class="cart-bottom">
                <div class="cost-per-item">
                    &#8377;{{item.cost}}
                </div>
            </div>
        </div>
        <p class="total-cost"><em>Total Cost : </em><strong>&#8377; {{totalCost}}</strong> </p>
    </div>
</template>

<script>
export default {
    name : "Cart",
    data(){
        return {
            items : [],
            totalCost : 0,
            cartEmpty : false
        }
    },
    beforeMount(){
        this.$store.getters.cart.forEach((cartItem) => {
            this.totalCost += cartItem.cost;
            this.items.push(cartItem);
        });
        console.log(this.items)
        if(this.items.length===0){
            this.cartEmpty = true;
        }
    }
}
</script>

<style scoped>
body {
    padding: 0;
    margin: 0;
    height: 100vh;
}
.cart{
    margin: 0;
    width: 70vw;
    height: 100%;
    margin: 0 auto;
}
    .cart-display {
        margin-top: 20vh;
        width: 100%;
        min-height: 60vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
    }
    .cart-item{
        width: 90%;
        height: 25vh;
        padding: 0 3%;
        border: none;
        border-radius: 5px;
        box-shadow: 14px 21px 62px -38px rgba(0,0,0,0.53);
        color : #000;
    }
    .cart-top{
        height: 60%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }
    .cart-item-name{
        font-size: 1.4rem;
        font-weight: 600;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        color: #2a2a2a;
    }
    .cart-item-counter{
        height: 45%;
        width: 20%;
        background-color: #06aaaf;
        color: #fff;
        font-family: monospace;
        display: flex;
        justify-content: space-between;
        font-size: 1.12rem;
        border: none;
        border-radius: 5px;
        overflow: hidden;
    }
    .cart-item-count{
        flex: 0.32;
        font-size: 1.15rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .count-btn{
        height: 100%;
        flex: 0.32;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 600;
        background-color: #047a7e;
    }

    .cart-bottom{
        height: 30%;
        width: 100%;
    }
    .cost-per-item{
        font-size: 1.25rem;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        color: #2a2a2a;
    }
    .count-btn:hover{
        cursor: pointer;
    }
    .total-cost{
        margin-top: 40px;
        font-size: 1.2rem;
    }
</style>