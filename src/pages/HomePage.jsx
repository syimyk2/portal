import React from 'react'
import styled from 'styled-components'
import background from '../assets/img/main-background.png'
import img1 from '../assets/img/item1.png'
import img2 from '../assets/img/item2.png'
import img3 from '../assets/img/item3.png'
import img4 from '../assets/img/item4.png'
import dimg from '../assets/img/d-img.png'
import Footer from '../Layouts/Footer'
import SectionMessager from '../Layouts/SectionMessager'
import TvSection from '../Layouts/TvSection'
import AlexaBuilt from '../Layouts/AlexaBuilt'
import rec from '../assets/img/reclama.svg'
import PricesDesc from '../Layouts/PricesDesc'
import { GlobalFlex } from '../Layouts/PricesDesc'



const HomePage = () => {
  return (
    <GlobalFlexx >
      <MainContent background={background}>
      <MainDescription>
      <h1>If you can’t be there, feel there with Portal</h1>
      <p>Smart video calling with Alexa Built‑in.</p>
      <Buttons><button className='blue-button'>Watch the Demo</button><button>Compare Portals</button></Buttons>
      </MainDescription>
      <Adversting>
                 <img src={rec} alt="logo" />
                 <div>
                     <p>Buy any 2 and save $50*</p>
                     <p>Ship to multiple addresses at no extra cost.</p>
                 </div>
                 
             </Adversting>
      
    </MainContent>
    <ProductsPhotos>
          <ProductItem img ={img1}>
            <div>
              <h2>Portal TV</h2>
            <p>Smart video calling on the biggest screen in your home</p>
            <h4>Learn More</h4>
            </div>
          </ProductItem>
          <ProductItem img ={img2}>
            <div>
              <h2>Portal</h2>
            <p>Smart video calling on a 10” HD display</p>
            <h4>Learn More</h4>
            </div>
          </ProductItem>
          <ProductItem img ={img3}>
            <div>
              <h2>Portal+</h2>
            <p>Smart video calling on a 15.6” HD display</p>
            <h4>Learn More</h4>
            </div>
          </ProductItem>
          <ProductItem img ={img4}>
            <div>
              <h2>Portal Mini</h2>
            <p>Smart video calling on an 8” HD display</p>
            <h4>Learn More</h4>
            </div>
          </ProductItem>

          </ProductsPhotos>
          <DescriptionCamera>
            <div className='first-des'>
              <h1>Smart Camera keeps every conversation front and center</h1>
            </div>
            
          </DescriptionCamera>
          <GlobalFlex>
            <MiniDescriptions>
              <img src={dimg} alt="img" />
              <Texts>
                <div>
                <h3>Keeps up with the action</h3>
                <p>Smart Camera automatically pans and zooms to keep up with the action. Move and talk freely and always stay in frame.</p>
                <h4>Learn More</h4>
              </div>
              <div>
                <h3>Keeps everyone in view</h3>
                <p>As more people enter a room, Smart Camera automatically widens to keep everyone in view, so you don’t miss a moment.</p>
                <h4>Learn More</h4>
              </div>
              </Texts>
              
            </MiniDescriptions>
          </GlobalFlex>
          
          <SectionMessager/>
          <TvSection/>
         <AlexaBuilt/>
          <PricesDesc/>
          <Footer/>
          
    </GlobalFlexx>
    
  )
}
  const GlobalFlexx = styled.div`
    
  `

  const DescriptionCamera= styled.section`
     width: 1264px;
     margin: 0 auto;
     /* padding-left: 82px; */
     padding-bottom: 35px;
     display: flex;
     flex-direction: column;  
     box-sizing: border-box;
     flex-direction:column;
     h1{
      font-weight: 700;
      font-size: 50px;
      line-height: 45px;
      color: #1B365D;
      width: 682px;
      font-family: 'Roboto';
      /* font-style: normal; */
     }
     .first-des{
       height: 530px;
       align-items: flex-start;
     }
     
  `
  const MiniDescriptions = styled.div`
    /* display: flex; */
    background-color: #D0E8EA;
    height: 523px;
    position: relative;
    z-index: -3;
    width: 1264px;
    margin: 0 auto;
    img{
       width: 1264px;
      position: relative;
      top: -385px;
      /* left: 50px; */
      z-index: 1;
    }
    p{
      width: 357px;
    }
  `
  const Texts = styled.div`
    display: flex;
    position: relative;
    z-index: -1;
    top: -350px;
  justify-content: space-evenly;
  align-items: center;
  `
  const ProductsPhotos = styled.section`
     width: 1264px;
     margin: 0 auto;
     display: flex;
     justify-content: space-between;
     margin-top: 77px;
     box-sizing: border-box;
     padding: 88px 0px 31.9px 0px;
     /* padding-bottom: 31.9px; */

    
  `
  const ProductItem = styled.section`
  background: url(${(props)=>props.img});
  background-size: 100%;
  width: 304px;
  height: 587px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  text-align:center;
  color: white;
  p{
    width: 203px;
  }


 
`
  const MainDescription = styled.div`
    display: flex;
      justify-content: center;
      flex-direction: column;
    
      h1{
        width: 404px;
        margin-bottom: 0px;
            
      font-weight: 700;
      font-size: 56px;
      line-height: 62px;

      color: #1B365D;
      }
      p{
        font-weight: 700;
        font-size: 18px;
        color: #434140;
      }
    
  `
  const Buttons =styled.div`
    display: flex;
    margin-top: 40px;
   
    .blue-button{
      height: 46px;
      background: #FFFFFF;
      border: 1px solid #FFFFFF;
      box-sizing: border-box;
      border-radius: 24px;
      width: 186px;
    }
    button{
       width: 186px;
       height: 46px;
       border: none;
      background: transparent;
      box-sizing: border-box;
      border-radius: 24px;
      font-weight: 700;
      font-size: 14px;
      line-height: 20px;
      /* identical to box height, or 143% */

      text-align: center;

      color: #1B365D;
    }
  `
  // ----MainContent first---
const  MainContent = styled.section`
 background: url(${(props)=>props.background});
    background-size: cover;
    background-repeat: no-repeat;
    margin: 0 auto;
    box-sizing: border-box;
    height: 696px;  
    width: 1440px;
    padding: 88px;
    
`
const Adversting =styled.div`
    position: relative;
    top: 120px;
    left: -88px;
    background-color: #F1C0C7;
    padding: 15px;
    display: flex;
    width: 450px;
    margin-bottom: 54px;
    img{
        margin: 0px 10px 0px 10px;
    }
  p{
        width:328px;
        font-weight: 600;
        font-size: 16px;
        line-height: 22px;
        color: #1B365D;
        margin: 0;
    }
`

export default HomePage