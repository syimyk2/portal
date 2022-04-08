import React from 'react'
import styled from 'styled-components'
import phoneCall from '../assets/img/phoneCall.png'
import someChat from '../assets/img/someChat.svg'
import whatsUp from '../assets/img/whatsup.svg'

const SectionMessager = () => {
  return (
    <Wrapper>
        <div>
            <img src={phoneCall} alt="limskjfdask" />
        </div>
        <Description>
            <div className='logos'>
                <img src={someChat} alt="somechat" />
                <img src={whatsUp} alt="whatsup" />
            </div>
            <div>
                <h1>
                Makes video calls with Messenger and WhatsApp
                </h1>
                <h4>
                Easily video call with friends and family on their smartphones and tablets, even if they don’t have Portal.
                </h4>
                <p>“Hey Portal” voice command availability varies. Learn more. Requires Messenger or WhatsApp account. WhatsApp is not available on tablet</p>
            </div>
        </Description>

    </Wrapper>
  )
}

const  Wrapper = styled.section`
    width: 1264px;
    margin: 0 auto;
    display: flex;
    padding: 20px;
    justify-content: space-around;

`
const Description =styled.div`
    display: flex;
    flex-direction: column;
    .logos{
        display: flex;
        img{
            margin: 10px;
        }
    }
    h1{
        font-weight: 400;
        font-size: 50px;
        line-height: 55px;
        color: #1B365D;
        width: 490px;
    }
    h4{
        width: 490px;
    }
    p{
        width: 505px;
    }
`


export default SectionMessager