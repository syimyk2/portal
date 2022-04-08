import React from 'react'
import styled from 'styled-components'
import logo from '../assets/img/logo-white.svg'

const Footer = () => {
  return (
      <Wrapper>
    <FooterConteiner>
        <Logo>
            <img src={logo} alt="logo" />
        </Logo>
        <FooterDescription>
            <FooterNav>

            <div>
                <ul>
                    <li>Home</li>
                    <li>Products</li>
                    <li>Features</li>
                    <li>Private by Design</li>
                    <li>Support</li>
                    <li>Sitemap</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>Privacy Policy</li>
                    <li>Cookies</li>
                    <li>Terms of Use</li>
                    <li>Legal</li>
                    <li>Terms of Sale</li>
                    <li>Ad Choices</li>
                   
                </ul>
            </div>
            <FooterNavForm>
                <p>Get emails from Facebook about Portal and other Facebook hardware products.</p>
                <div>
                   <button className='short-button'>Sign Up</button>
                <button className='long-button' >United States <span>(English)</span></button> 
                </div>
                
            </FooterNavForm>
            </FooterNav>
            {/* ----second-left-div----- */}
            <FooterText>
                <p>“Hey Portal” voice command availability varies. Learn more. Screen images simulated.
                     User experience may vary. Requires wireless internet connection and Facebook or WhatsApp account. WhatsApp is not available on tablets. Features, functionality, and content vary and may not be available on all Portal models or in all areas and languages.
                     Some features may require a Facebook account and downloading the Portal mobile app. Additional account registration, terms and fees may apply.</p>
                     <p>*Represents savings off of regular, non-promotional prices. Both products must be purchased on same receipt to qualify. Valid on qualifying purchases at portal.facebook.com.
                          Not valid on prior purchases and non-transferable. Not valid for cash or cash equivalent.
            Valid on in-stock products only. Offer may be cancelled or modified at any time without notice. Void where prohibited.</p>
            <p>©2021 Facebook, Inc. or its affiliates. All rights reserved.
                 Facebook, Portal from Facebook and the Facebook logo are trademarks of Facebook, Inc. Amazon, Alexa and all related logos are trademarks of Amazon.com, Inc.
                 or its affiliates. Other names and brands may be claimed as the property of others.</p>
            </FooterText>
        </FooterDescription>
    </FooterConteiner>
    </Wrapper>
  )
}
const Wrapper = styled.div`
     background: #272E38;
`

const FooterConteiner = styled.footer`
   box-sizing: border-box;
    height: 620px;
    width: 1264px;
   
    padding: 64.19px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
   color:  #9CA5B0;


`
const FooterText= styled.div`
    display: flex;
    flex-direction: column;
    p{
        font-weight: 400;
        font-size: 12px;
        line-height: 17px;
        color: #9CA5B0;
    }
`
const Logo =styled.div`
    display: flex;
    width: 650px;
    img{
        width: 128px;
        height: 62px;
    }
`
const FooterDescription =styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const FooterNav = styled.div`
    display: flex;
    justify-content: space-between;
    ul{
        list-style: none;
        padding: 0;
    }
    li{
        margin: 15px 0px 15px  0px;
    }
`
const FooterNavForm =styled.div`
    display: flex;
    flex-direction: column;
    height: 240px;
    div{
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: space-between;
        height: 100px;
        width: 402px;
    }
    p{
        font-size: 14px;
        line-height: 20px;
        width: 264px;
    }
    .short-button{
        background: #FFFFFF;
        border: 1px solid #FFFFFF;
        box-sizing: border-box;
        border-radius: 24px;
        text-align: center;
        color: #1B365D;
        width: 103px;
        height: 40px;
    }
    .long-button{
        background: #272E38;
                border: 1px solid #3D434C;
                box-sizing: border-box;
                border-radius: 5px;
                color: #e3dddd;
                font-weight: 400;
                height: 40px;
                width: 250px;
                font-size: 11px;
span{
    color: #9CA5B0;
}
    }
`

export default Footer