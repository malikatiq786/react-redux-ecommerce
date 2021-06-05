import React from 'react'
import { BsFillBagFill } from "react-icons/bs";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

function Nav() {
    const {totalQuanitites} = useSelector(state=>state.CartReducer);
    return (
        <div className="navbar">
            
            <div class="container">
                <div className="nav__container">
                    <div className="nav__left">
                        <Link to="/">
                            <img src="/images/logo.webp" alt="logo"></img>
                        </Link>
                        </div>
                    <div className="nav__right">
                        <Link to="/cart">
                            <div className="basket">
                                <BsFillBagFill className="cart-icon"/>
                                <span className="basket_span">{totalQuanitites}</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Nav
