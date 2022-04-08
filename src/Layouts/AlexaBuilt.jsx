import React from 'react'
import styled from 'styled-components'
import ipad from '../assets/img/ipad.png'
import logo from '../assets/img/alexa.svg'
import img1 from '../assets/img/img1.png'
import img2 from '../assets/img/img2.png'

const AlexaBuilt = () => {
  return (
       <Wrapper>
     <div>
       <img src={logo} alt="logoo" />
       <h1>Alexa Built-in</h1>
       <h5>Portal comes with Alexa Built-in, so you can see and do more. Use your
            voice to control your smart home and check who’s at the front door, listen to your
             favorite music, watch the news and more, hands-free. Just ask.</h5>
             <button>Learn More</button>
     </div>
     <div>
         <img src={ipad} alt="photo" />
         <p className='little-text'>Amazon, Alexa and all related logos are trademarks of Amazon.com, Inc. or its affiliate.
              Additional account registration, terms and fees may apply. Features may vary by location.</p>
     </div>
     <AboutCamera>
      <AboutCameraItem img ={img1}>
        <h2>Private by design</h2>
        <h5>Easily disable the camera and the microphone, or block the lens with the camera cover. And all Portal video calls are encrypted.</h5>
        <h4>Learn More</h4>
      </AboutCameraItem>
        <AboutCameraItem img={img2}>
            <h2 className='white'>Work smarter from home</h2>
            <h5 className='h5'>Whether you and your co-workers use Workplace,
               BlueJeans, GoToMeeting, Webex or Zoom, Portal’s got the tools to
                keep you productive while working from home.</h5>
                <h4 className='h4'>Learn More</h4>
        </AboutCameraItem>
     </AboutCamera>
      

    </Wrapper>
  )
}

const Wrapper = styled.section`
box-sizing: border-box;
width: 1264px;
margin: 0 auto;
display: flex;
padding: 80px 50px 220px 50px;

h1{
    font-weight: 700;
    font-size: 50px;
    line-height: 55px;
    color: #1B365D;
    width: 328px;
}
p{
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    text-align: center;
    color: #AEABA8;
    width: 440px;
    margin: 0 auto;

}
h5{
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 23px;
    color: #615E5C;
}

button{
    background: #ADD4E0;
    border: 1px solid #ADD4E0;
    box-sizing: border-box;
    border-radius: 24px;
    width: 127px;
    height: 46px;
    margin: 30px 0 0 0;
}
    
`
const AboutCamera = styled.div`
    display: flex;

    box-sizing: border-box;
    justify-content: space-evenly;
    position: relative;
    top: 580px;
    left: -1250px;
    z-index: 10;

`
const AboutCameraItem = styled.div`
box-sizing: border-box;
     padding: 32px;
     background: url(${(props)=>props.img});
     width: 610px;
     height: 610px;
     margin: 20px;
     h2{
      font-weight: 700;
      font-size: 30px;
      line-height: 34px;
      color: #1B365D;
     }
    
  .white{
    color: white;
    font-weight: 700;
      font-size: 30px;
      line-height: 34px;
  }
  .h4{
    color: #d6cdcd;
  }
  .h5{
    color: #dfdada;

  }
`


export default AlexaBuilt