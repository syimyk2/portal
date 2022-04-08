import React from 'react'
import styled from 'styled-components'
import tvSectionback from '../assets/img/tvSection-back.png'

const TvSection = () => {
  return (
    <Wrapper img={tvSectionback}>
    <TvDescription>
        <h1>
        Don’t just read the story. Be the story.
        </h1>
        <h4>
        With Story Time you can bring your children’s favorite stories to life with music, animation and AR effects.
        </h4>
        <p>Discover</p>
    </TvDescription>
    {/* ----second div----- */}
    <div>
     <h3>
     Put a smile on your face with AR masks.
     </h3>
     <h3>
     A photo frame that’s picture-perfect
     </h3>
    </div>
         
    </Wrapper>
  )
}
const Wrapper =styled.section`
box-sizing: border-box;
background: url(${(props)=>props.img});
height: 720px;
width: 1264px;
margin: 0 auto;
display: flex;
flex-direction: column;
justify-content: end;
color: white;
padding: 30px;
    
`
const TvDescription = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: end;
    color: #ece5da;
    h1{
        font-weight: 700;
        font-size: 50px;
        line-height: 55px;
        width: 426px;
    }
    h4{
        font-style: normal;
        font-weight: 400;
        font-size: 17px;
        line-height: 23px;
        width: 472px;
    }
    
`

export default TvSection