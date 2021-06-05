const initState = {
    products: [
        {
            id:1, name: 'man t-shirt summer season',image: '1.jpg', price:20,discount:2,
            discountPrice:20 -2/100*20, quantity:1, 
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries" 
        },

        {
            id:2, name: 'woman t-shirt summer season',image: '2.jpg', price:20,discount:2,
            discountPrice:20 -2/100*20, quantity:1, 
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries" 
        },

        {
            id:3, name: 'man t-shirt summer season',image: '3.jpg', price:20,discount:2,
            discountPrice:20 -2/100*20, quantity:1, 
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries" 
        },

        { 
            id:4, name: 'woman t-shirt summer season',image: '4.jpg', price:20,discount:2,
            discountPrice:20 -2/100*20, quantity:1, 
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries" 
        }
    ],
    product:{}
}

const ProductReducer = (state=initState, action) => {
    switch (action.type) {
        case "PRODUCT" :
            return {...state,product: state.products.find(product => product.id === parseInt(action.id))}
        default:
            return state;
    }
}

export default ProductReducer;