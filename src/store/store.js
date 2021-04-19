import { createStore } from 'vuex'

function updateLocalStorage(cart){
    localStorage.setItem('cart', JSON.stringify(cart))
}

export default createStore({
    state: {
        cart:[]
    },
    getters:{
        productQuantity: state => igra => {
            const item = state.cart.find(i => i.id === igra.id)
            if(item){
                return item.quantity
            }
            else {
                return null
            }
        },
        vKosarici: state =>{
            return state.cart
        },
        skupnaCena: state => {
            return state.cart.reduce((a, b) => a + (b.cena * b.quantity), 0)
        }
    },
    mutations:{
        addToCart(state, igra){
           let item = state.cart.find(i => i.id === igra.id)
           if(item){
               item.quantity++
           }
           else {
               state.cart.push({...igra, quantity: 1})
           }
           updateLocalStorage(state.cart)
        },
        removeFromCart(state, product){
            let item = state.cart.find(i => i.id === product.id)

            if(item){
                if(item.quantity > 1){
                    item.quantity--
                }
                else {
                    state.cart = state.cart.filter(i => i.id !== product.id)
                }
            }

            updateLocalStorage(state.cart)
        },
        updateKosaricaFromLocalStorage(state){
            const cart = localStorage.getItem('cart')
            if(cart){
                state.cart = JSON.parse(cart)
            }
        }
    },
    actions:{

    },
    modules:{

    }
})

