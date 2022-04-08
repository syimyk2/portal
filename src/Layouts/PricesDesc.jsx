import React from 'react'
import styled from 'styled-components'
import i1 from '../assets/img/i1.png'
import i2 from '../assets/img/i2.png'
import i3 from '../assets/img/i3.png'
import i4 from '../assets/img/i4.png'
import rec from '../assets/img/reclama.svg'
const cards = [
    {
    title: 'Portal TV',
     price: '$149',
     description: 'Smart video calling on your TV',
     id: '31',
     img: i1},
     {
        title: 'Portal TV',
         price: '$149',
         id: '2',
         description: 'Smart video calling on your TV',
         img: i2},
         {
            title: 'Portal TV',
             price: '$149',
             description: 'Smart video calling on your TV',
             id: 'ty67',
             img: i3},
             {
                title: 'Portal TV',
                id: '1',
                 price: '$149',
                 description: 'Smart video calling on your TV',
                 img: i4},
    ]

const PricesDesc = () => {
  return (
    <GlobalFlex>
     <Wrapper>
         <div>
             <h1>
             Find the Portal that’s right for you
             </h1>
             <Adversting>
                 <img src={rec} alt="logo" />
                 <div>
                     <p>Buy any 2 and save $50*</p>
                     <p>Ship to multiple addresses at no extra cost.</p>
                 </div>
                 
             </Adversting>
         </div>
         <Cards>
          {cards.map((el)=><Card key={el.id}>
              <Price><div>{el.title}</div> <div>{el.price}</div></Price>
              <div className='fixed'>
              <img src={el.img} alt="" />
              <p>{el.description}</p>
              <button>Buy Now</button>
              <h4>Learn More</h4>
              </div>
             
              </Card>)}
         </Cards>
         <Button>
         Compare Products
         </Button>
    </Wrapper>
    </GlobalFlex>
  )
}

const Wrapper = styled.section`
    display: flex;
    margin: 0 auto;
    width: 1264px;
    padding-top: 350px;
    flex-direction: column;
    padding-bottom: 40px;
   
   
    h1{
        font-weight: 700;
        font-size: 50px;
        line-height: 55px;
        color: #1B365D;
        width: 480px;
    }
   
  
`
 export const GlobalFlex =styled.div`
    background-color: #D0E7EA; 
    position: relative;
    z-index: -2;
`
export const Adversting =styled.div`
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
const Button = styled.button`
    height: 46px;
    width: 193px;
    background: #FFFFFF;
    border: 1px solid #FFFFFF;
    box-sizing: border-box;
    border-radius: 24px;
    color: #1B365D;
    text-align: center;
    margin: 0 auto;
    margin-top: 39px;
`
const Cards = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

`
const Card = styled.div`
    width: 304px;
    height: 513px;
    padding: 32px 18px 24px 18px;
    background-color: #F7F7F7;
    margin: 0px 10px 0px 10px;
    display: flex;
   flex-direction: column;
    /* align-items: center; */
    justify-content: space-between;
    .fixed{
   display: flex;
align-items: center;
 flex-direction: column;
    }
    p{
    width: 136px;
    text-align: center;
    }
    button{
        height: 46px;
        background: #1877F2;
        border: 1px solid #1877F2;
        box-sizing: border-box;
        border-radius: 24px;
        width: 108px;
        color: white;
    }
    h4{
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        text-align: center;
        color: #1B365D
    }
    
`
const Price = styled.div`
     display: flex;
  justify-content: space-between;
`

export default PricesDesc