import React from 'react';
import styled from "styled-components";
import {MdMenu, MdShoppingCart} from "react-icons/md";
import {Link, useNavigate} from 'react-router-dom';
import { useSidebarContext } from '../context/sidebar_context';
import { useCartContext } from '../context/cart_context';
import Register from './Login';

const Navbar = () => {
  const {total_items} = useCartContext();
  const {openSidebar} = useSidebarContext();
  const navigate=useNavigate();
   function abc(){
   return(
   
    <Register/>
   
   )
  }

  return (
    <NavbarWrapper className = "bg-white flex">
      <div className='container w-100'>
        <div className='brand-and-toggler flex flex-between w-100'>
          <Link to = "/" className='navbar-brand text-uppercase ls-1 fw-8'>
            <img className="logo" src='https://cionews.co.in/wp-content/uploads/2023/07/Article-Main-Image-2023-07-04T152010.539.png'/>
          </Link>
              <button type='button' className='signin' onClick={()=>navigate('/login')}>Login</button> 
          <button type='button' className='signup' onClick={()=>navigate('/register')}>Register</button>
      

          <div className='navbar-btns flex'>
            <Link to = "/cart" className='cart-btn'>
              <MdShoppingCart />
              <span className='item-count-badge'>{total_items}</span>
            </Link>
            <button type = "button" className='sidebar-open-btn' onClick={() => openSidebar()}>
              <MdMenu />
            </button>
          </div>
        </div>
      </div>
    </NavbarWrapper>
  )
}

const NavbarWrapper = styled.nav`

.signin{
background-color : orange;
 padding:10px;
//  margin-left:500px;
 height:40px;
 width:90px;
 border-radius: 20px;
 color: white;
 font: bold;
}

.signup{
margin-left:600px;
 background-color : orange;
 height:40px;
//  padding : 150px;
 width:100px;
 border-radius: 20px;
 color: white;
 font: bold;
}
 
  .logo{
  height:90px;
  width:140px;
  }
  height: 80px;
  box-shadow: rgba(50, 50, 93, 0.15) 0px 16px 12px -2px, rgba(0, 0, 0, 0.2) 0px 3px 7px -3px;

  .navbar-brand{
    font-size: 23px;
    span{
      color: var(--clr-orange);
    }
  }
  .cart-btn{
    margin-right: 18px;
    font-size: 23px;
    position: relative;
    .item-count-badge{
      background-color: var(--clr-orange);
      position: absolute;
      right: -10px;
      top: -10px;
      font-size: 12px;
      font-weight: 700;
      display: block;
      width: 23px;
      height: 23px;
      color: var(--clr-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .sidebar-open-btn{
    transition: all 300ms ease-in-out;
    &:hover{
      opacity: 0.7;
    }
  }
`;

export default Navbar;  