<template>
    <div class="orders">
        <div v-if="orders.length>0" class="profile-orders-list">
            //! Orders display
            <div v-for="(order,key) in orders" :key="key" class="order-item-top" data-id="${orderItem.id}">Order {{key+1}} - Delivered to {{order.deliveryLocation.name}}</div>
        <div class="order-item-mid"><div class="order-item-total-cost">Total : &#8377;{{order.totalCost}}</div><div class="order-item-date">{{order.date.substring(4,15)}}</div>
            <div class="order-item-total">Total items : {{order.productsList.length}}</div>
        </div>
        </div>
        <div v-else class="no-orders">
            <h3>Oops no record found! 
            </h3>
        </div>
    </div>
</template>

<script>
export default {
    name : "Orders",
    data(){
        return {
            
        }
    },
    props : {
        orders : []
    },
    mounted(){
        this.orders.forEach(orderItem => {
            let dateString = new Date(Number(orderItem.date));
            const date = dateString.toString();
            orderItem.date = date;
        });
    }
}
</script>
<style scoped>
    .profile-orders-list{
    width: 100%;
    margin-top: 25px;
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