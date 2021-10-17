import { createStore } from "vuex";
export default createStore({
    state : {
        user : {},
        cart : []
    },
    mutations : {
        addUser(state,newUser){
            state.user = newUser;
        },
        deleteUser(state){
            state.user = {};
        },
        addCartItem(state,item){
            state.cart.push(item);
        },
        updateItemCount(state,itemData){
            state.cart.forEach((item)=>{
                if(item._id == itemData._id){
                    item.count = itemData.count;
                }
            })
        }
    },
    actions : {
        updateUser(context,payload){
           context.commit('addUser',payload);
        },
        removeUser(context,payload){
            context.commit("deleteUser",payload);
        },
        addNewCartItem(context,payload){
            context.commit("addCartItem",payload);
        },
        updateCartItem(context,payload){
            context.commit("updateItemCount",payload);
        }
    },
    getters :{
        user(state){
            return state.user;
        },
        cart(state){
            return state.cart;
        }
    }
});