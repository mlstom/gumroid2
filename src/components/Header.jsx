import React from 'react'
import styled from 'styled-components'
import { AiOutlineInstagram, AiOutlineTwitter, AiOutlineClose } from 'react-icons/ai'
import { HiMenuAlt1 } from 'react-icons/hi'
import { motion, AnimatePresence } from 'framer-motion'
import { useStateContext } from '../context/StateContext'


const Main = styled.div`
 background-color: transparent;
    display:flex;
    justify-content:space-between;
    align-items:center;
    height:30px;
    padding:20px 10px;
    position:absolute;
    top:0;
    bottom:0;
    left:0;
    right:0;
    z-index:9999999;

`
const Relative = styled.div`
    position:relative;

`
const Logo = styled(motion.div)`
    text-transform: uppercase;
    cursor:pointer;
    font-size:30px;
    font-family:"Permanent Marker";
`
const Social = styled(motion.div)`
    display:flex;
    font-size:30px;
    gap:10px;
    @media screen and (max-width:800px){
        font-size:30px;
        transform:scale(0.8)
    }
`
const Meni = styled.div`
    font-size:30px;
    cursor:pointer;
    width:40px;
    height:40px;
    &:hover{
        transform:scale(1.1)
    }
    @media screen and (max-width:800px){
        font-size:30px;
        transform:scale(0.8)
    }
`
const OtvMani = styled(motion.div)`
    height:100vh;
    width:100vw;

    position: absolute;
    top:0;
    bottom:0;
    left:0;
    right:0;
    background-color: rgba(0, 0, 0, 0.7);
`
const Opadajuci = styled(motion.div)`
    width:45%;
    height:100vh;
    background-color:var(--background);

    @media screen and (max-width:800px){
        width:50%;
    }
    
`
const Close = styled(motion.div)`
    width:40px;
    height:40px;
`
const Tag = styled.div`
 &:hover{
        transform:scale(1.1)
    }
`
const Header = () => {
    const { mani, setmani } = useStateContext()
    return (
        <Relative>
            <Main>
                <AnimatePresence >
                    {!mani &&
                        <motion.p id='meni' animate={{ opacity: 1, scale: 1 }} initial={{ opacity: 0, scale: 0 }} exit={{ opacity: 0, rotate: '275deg' }} transition={{ duration: 0.5, delay: 0.25 }} onClick={() => setmani(true)} >
                            <Meni >
                                <HiMenuAlt1 width='30px' height="30px" />
                            </Meni>
                        </motion.p>
                    }
                </AnimatePresence>
                {mani &&
                    <div>
                        <OtvMani id='otvmani' initial={{ width: 0 }} animate={{ width: '100%', transition: { delay: 0.5, duration: 0.5 } }} >
                            <Opadajuci id='contotv' initial={{ width: 0 }} animate={{ width: '45%' }} transition={{ delay: 1, duration: 0.5 }}>
                                <Close id='close' onClick={() => setmani(false)} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1, duration: 0.5 }} >
                                    <Tag>
                                        <AiOutlineClose width='30px' height="30px" />
                                    </Tag>
                                </Close>
                            </Opadajuci>
                        </OtvMani>
                    </div>
                }

                <Logo animate={{ opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.5 } }} initial={{ opacity: 0, scale: 0 }}  >
                    Gumroid
                </Logo>

                <Social  >
                    <AnimatePresence>
                        <motion.a href='https://www.instagram.com/' id='instagram' animate={{ opacity: 1, scale: 1 }} initial={{ opacity: 0, scale: 0 }} transition={{ duration: 0.5, delay: 0.75 }} style={{ color: 'black' }}  >
                            <Tag>
                                <AiOutlineInstagram width='30px' height="30px" />
                            </Tag>
                        </motion.a>
                        <motion.a id='twiter' href='https://www.twitter.com' animate={{ opacity: 1, scale: 1 }} initial={{ opacity: 0, scale: 0 }} style={{ color: 'black' }} transition={{ duration: 0.5, delay: 1 }} >
                            <Tag>
                                <AiOutlineTwitter width='30px' height="30px" />
                            </Tag>
                        </motion.a>
                    </AnimatePresence>
                </Social>
            </Main>
        </Relative>
    )
}

export default Header