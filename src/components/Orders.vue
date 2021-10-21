<template>
    <div  v-if="ordersList.length>0" class="orders">
        <div class= "order-item" v-for="(order,key) in ordersList" :key="key">
            <div class="order-item-top" data-id="${orderItem.id}">
                    Order {{key+1}}
            </div>
            <div class="order-item-mid">
                    <div class="order-item-total-cost">Total : &#8377;{{order.totalCost}}</div>
                    <div class="order-item-date">04.10.2021</div>
                    <div class="order-item-total">Total items : {{order.productsList.length}}</div>
            </div>            
        </div>
    </div>
    <div v-else class="no-orders">
            <h3>Oops no record found! 
            </h3>
        </div>
</template>

<script>
/*{{order.date.substring(4,15)}}*/
import axios from "axios";
export default {
    name : "Orders",
    data(){
        return {
            ordersList : []
        }
    },
    props : ['userId'],
    methods :{
        async fetchOrders(_id){
            const res = await axios.get(`http://localhost:3000/order/userId${_id}`);
            if(res.status===200) {
                const orderJson = res.data;
                console.log(orderJson);
                this.ordersList = orderJson.orders;
            }
        },
    },
    mounted(){
        this.fetchOrders(this.userId);        
    }
}
</script>
<style scoped>
    .orders{
        width: 85vw;
        margin: 0 auto;
    }

    .order-item{
        width: 100%;
        min-height: 15vh;
        border-bottom: 2px solid #585858a9;
        margin-bottom: 15px;
    }
    .order-item-top{
        font-size: 1.4rem;
        font-weight: 600;
        color: #161616;
        font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }
    .order-item-mid{
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-top: 3%;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }
    .order-item-total-cost{
        width: 25%;
        color: #069196;
        font-size: 1.2rem;
        padding: 7px 0;
        border: none;
        border-radius: 2px;
    }
</style>