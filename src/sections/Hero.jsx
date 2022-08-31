import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import wave from "../assets/wave1.png"
import blob from '../assets/figure.png'
import covek from '../assets/covek1.png'

const Main = styled.div`
    height:100vh;
    width:100vw;
    display:flex;
    background-color:var(--zuta);
    overflow:hidden;
    position:relative;
    img{
        height:100vh;
        width:300px;
        position:absolute;
        top:0;
        left:40%;
    }
     @media screen and (max-width:800px){
        flex-direction:column;
    }
`
const Pink = styled.div`
    background-color:var(--pink);
    height:100%;
    width:40%;
    position:absolute;
    img{
        width:700px;
        height:700px;
        left:0;
        top:15%;
        position:absolute;
        z-index:99;
        @media screen and (max-width:800px){
           display:none;
        }
    }

    
`
const Title = styled.h1`
font-family:"Permanent Marker";
  font-weight:400;
  font-size:60px;
  width:40%;
  @media screen and (max-width:800px){
    font-size:40px;
}
`
const Left = styled(motion.div)`
    width:45%;
`
const Right = styled(motion.div)`
width:55%;
height:100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
@media screen and (max-width:800px){
    z-index:999;
}
`
const Text = styled.p`
width:30%;
 @media screen and (max-width:800px){
    display:none
}

`
const Covek = styled(motion.div)`
position:absolute;
z-index:3;
left:13%;
@media screen and (max-width:800px){
    left:35%;
}


`

const Hero = () => {
    return (
        <Main>
            <Left initial={{ scale: 0,opacity:0 }} animate={{
                scale: 1,opacity:1
            }} transition={{ duration: 0.5 , delay:1}}>
                <Covek animate={{ x: [null, 20, 0] }} initial={{ x: 0 }} transition={{
                    duration: 1, ease: "easeInOut",
                    times: [0, 0.2, 0.5, 0.8, 1],
                    repeat: Infinity,
                    repeatDelay: 1
                }} >
                    <img src={covek} width='100' height='100' alt='covek' />
                </Covek>
                <Pink initial={{ width:0 }} animate={{
                width:"40%"
            }} transition={{ duration: 0.75 , delay:0.25}} >
                    <img src={blob} alt='white blob' />
                </Pink>
                <img src={wave} alt='wave' />
            </Left>
            <Right>
                <Title>
                    Go from zero to $1
                </Title>
                <Text>
                    With Gumroad, anyone can earn their first dollar online. Just start with what you know, see what sticks, and get paid. It’s that easy.
                </Text>
            </Right>

        </Main>
    )
}

export default Hero