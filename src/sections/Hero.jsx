import React from 'react'
import styled from 'styled-components'
import wave from "../assets/wave1.png"
import blob from '../assets/blop orange2.png'
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
            width:500px;
            height:500px;
            left:0;
        }
    }

    
`
const Zuta = styled.div`
    
`

const Hero = () => {
    return (
        <Main>
            <Pink>
                <img src={blob} alt='white blob' />
            </Pink>
            <img src={wave}  alt='wave' />
            <Zuta>
            </Zuta>
        </Main>
    )
}

export default Hero