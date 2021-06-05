const initState = {
    products:[],
    totalPrice:0,
    totalQuanitites:0
}

const CartReducer = (state=initState, action) => {
    let findPro;
    let index;
    switch (action.type) {
        case "ADD_TO_CART":
            // console.log(action.payload.product.id);
            const {product,quantity} = action.payload;
        // console.log(quantity);
            const check = state.products.find(pr => pr.id === product.id);
            if(check){
                return state;
            }
            else{
                const Tprice = state.totalPrice + product.discountPrice * quantity;
                 console.log(Tprice);
                 const Tquantities = state.totalQuanitites + quantity;
                 product.quantity = quantity;
                 return{
                     ...state,products:[...state.products,product],totalPrice:Tprice,totalQuanitites:Tquantities
                 }
            }

            case "INC":
             findPro = state.products.find(product =>product.id === action.payload);
             index = state.products.findIndex(product=>product.id===action.payload);
             findPro.quantity +=1;
             state.products[index]= findPro;
             return {
                 ...state,
                 totalPrice: state.totalPrice + findPro.discountPrice,totalQuanitites:state.totalQuanitites+1
             }


             case "DEC":
             findPro = state.products.find(product =>product.id === action.payload);
             index = state.products.findIndex(product=>product.id===action.payload);
             if(findPro.quantity > 1)
             {

                findPro.quantity -=1;
                state.products[index]= findPro;
                return{
                    ...state,
                    totalPrice:state.totalPrice - findPro.discountPrice, totalQuanitites:state.totalQuanitites -1
                }
             }else{
                 return state;
             }

             case "REMOVE":
                findPro = state.products.find(product =>product.id === action.payload);
                const filtered = state.products.filter(product => product.id !==action.payload);
                return {
                    ...state,
                    products:filtered,
                    totalPrice:state.totalPrice - findPro.discountPrice * findPro.quantity,totalQuanitites:state.totalQuanitites - findPro.quantity

                }

        default:
            return state;
    }
} 

export default CartReducer;