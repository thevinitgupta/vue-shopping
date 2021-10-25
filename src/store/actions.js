export default {
    updateUser(context,payload){
       context.commit('addUser',payload);
    },
    removeUser(context){
        context.commit("deleteUser");
    },
    addNewCartItem(context,payload){
        context.commit("addCartItem",payload);
    },
    increaseItemCount(context,payload){
        context.commit("updateItemCount",{_id : payload,change : 1});
    },
    decreaseItemCount(context,payload){
        context.commit("updateItemCount",{_id : payload,change : -1});
    }
}