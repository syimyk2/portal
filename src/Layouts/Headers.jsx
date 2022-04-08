import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../assets/img/logo.svg'

const Headers = () => {
  return (
    <HeadersWrapper>
        <div>
            <Link to={'home/'}>
            <img src={logo} alt="logo" />
            </Link>
            
        </div>
        <nav>
            <ul>
                    <NavLink  to="products/" className={(navData)=> navData.isActive ? 'active' : ''}>
                    Products
                    </NavLink>
                     <NavLink to='features/' className={(navData)=> navData.isActive ? 'active' : ''}>
                     Features
                     </NavLink>
                     <NavLink to={'support/'} className={(navData)=> navData.isActive ? 'active' : ''}>
                     Support
                      </NavLink>
                       <li>
                    <button>Log Into</button>
                </li>
            </ul>
        </nav>

    </HeadersWrapper>
  )
}
const HeadersWrapper =styled.header`
display:flex;
justify-content: space-around;
align-items: center;
margin: 0 auto;
ul{
    display:flex;
    justify-content: space-between;
    list-style: none;
    width: 501px;
    color: #1B365D;


}
a:hover,
.active{
 border-bottom: 3px solid brown;
}
a{
    text-decoration: none;
}

 & button{
width: 92px;
height: 28px;
border: 1px solid #A7BBC9;
box-sizing: border-box;
border-radius: 4px;
font-size: 11px;
text-align: center;
background: transparent;

color: #1B365D;
}


`


export default Headers