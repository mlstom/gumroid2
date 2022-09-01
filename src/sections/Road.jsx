import React from 'react'
import styled from 'styled-components'
import wave from '../assets/halfwave2.png'

const Cont = styled.div`
    width:100%;
    height:100vh;
    background-color:var(--zuta)
`
const Duzina = styled.div`
position:absolute;
display:flex;
justify-content-center;
width:49.7%;
@media screen and (max-width:800px){
    width:66.5%;
}
`
const Title = styled.h1`
    width:100%;
    display:flex;
    justify-content:center;
    
    p{
        border-bottom: 2px solid black;
        font-family:"Permanent Marker";
    }

`
const Hero = styled.div`
    width:70%;
    height:200vh;
    display:flex;
    justify-content:center;
    align-items:center;
    position:relative;
    margin:0 auto;
`
const Road = () => {
    return (
        <Cont>
            <Duzina>
                <img src={wave} alt='talasi' />
            </Duzina>
            <Title>
                <p>Put</p>
            </Title>
            <Hero>
            </Hero>
        </Cont>
    )
}

export default Road