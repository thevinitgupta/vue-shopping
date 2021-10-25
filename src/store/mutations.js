export default {
    addUser(state,newUser){
        state.user = newUser;
    },
    deleteUser(state){
        state.user = {};
    },
    addCartItem(state,item){
        let exists = false;
        state.cart.forEach((cartItem)=>{
            if(cartItem._id === item._id) exists = true;
        })
        if(!exists)
        state.cart.push(item);
    },
    deleteCartItem(state,_id){
        state.cart = state.cart.filter((item) => _id!=item._id);
    },
    updateItemCount(state,{_id,change}){
        state.cart.forEach((item)=>{
            if(item._id === _id){
                item.count += change;
                if(item.count==0)
                this.deleteCartItem(state,_id);
            }
        })
    }
}