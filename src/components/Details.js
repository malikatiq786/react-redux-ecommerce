import React, {useEffect,useState} from 'react'
import {useParams} from "react-router-dom"
import {useDispatch,useSelector} from "react-redux"
import currencyFormatter from "currency-formatter"
import { BsDash } from "react-icons/bs";
import { BsPlus } from "react-icons/bs";

function Details() {

    const [quantity,setQuanity] = useState(1);
    const {id} = useParams(); 
    const dispatch = useDispatch();
    const {product} = useSelector(state => state.ProductReducer);
    console.log(product);
    useEffect(() => {
        dispatch({type:'PRODUCT',id})
    }, [id])

    const decQuantity = () =>{
        if(quantity>1)
        {
            setQuanity(quantity-1);
        }
    }
    return (
       

            
            <div className="container mt-100">
                
                <div className="row">
                    <div className="col-6">
                        <div className="details__image">
                            <img src={`/images/${product.image}`}></img>
                        </div>
                    </div>

                    <div className="col-6">
                        <div className="details__name">
                            {product.name}
                        </div>

                        <div className="details__prices">
                            <span className="details__actaul">
                            {currencyFormatter.format(product.price, { code: 'USD' })}</span>
                            <span className="details__discount">
                            {currencyFormatter.format(product.discountPrice, { code: 'USD' })}</span>
                        </div>

                        <div className="details__info">

                            <div className="details__incDec">
                                <span className="dec" onClick={decQuantity}>
                                <BsDash></BsDash>
                                </span>
                                <span className="quantity">
                                {quantity}
                                </span>

                                <span className="inc" onClick={()=>setQuanity(quantity+1)}>
                                    <BsPlus></BsPlus>
                                </span>

                                <button className="btn-default" onClick = {()=>dispatch({type:'ADD_TO_CART',payload: {product,quantity} })}>Add to cart</button>
                            </div>
                           
                        </div>

                            <div className="details__p">
                                <h4>Details</h4>
                                {product.desc}
                            </div>

                    </div>
                    
                </div>
                
            </div>
            
            
    )
}

export default Details
