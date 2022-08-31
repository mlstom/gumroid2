import React from 'react'
import styled from 'styled-components'
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { HiMenuAlt1 } from 'react-icons/hi'
import { motion, AnimatePresence } from 'framer-motion'
import { useStateContext } from '../context/StateContext'


const Main = styled.div`
 background-color: transparent;
    display:flex;
    justify-content:space-between;
    align-items:center;
`
const Logo = styled(motion.div)`
    text-transform: uppercase;
    cursor:pointer;

`
const Social = styled(motion.div)`
    display:flex;
    font-size:30px;
    gap:10px;

`
const Meni = styled.div`
    font-size:30px;
    cursor:pointer;
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
    
`
const Header = () => {
    const { mani, setmani } = useStateContext()
    return (
        <Main>
            <AnimatePresence >
                {!mani &&
                    <motion.p id='meni' whileHover={{ scale: 1.1 }} animate={{ opacity: 1, scale: 1 }} initial={{ opacity: 0, scale: 0 }} exit={{ opacity: 0, rotate: '275deg' }} transition={{ duration: 0.5, delay: 0.25 }} onClick={() => setmani(true)} >
                        <Meni >
                            <HiMenuAlt1 />
                        </Meni>
                    </motion.p>
                }
            </AnimatePresence>
            {mani &&
                <div>
                    <OtvMani id='otvmani' initial={{width:0}} animate={{width:'100%'}} transition={{delay:0.5,duration:0.5}}>
                            <Opadajuci id='contotv' initial={{width:0}} animate={{width:'45%'}} transition={{delay:1,duration:0.5}}>
                                <motion.p id='close' onClick={()=>setmani(false)}>X</motion.p>
                            </Opadajuci>
                    </OtvMani>
                </div>
            }

            <Logo whileHover={{ scale: 1.1 }} animate={{ opacity: 1, scale: 1 }} initial={{ opacity: 0, scale: 0 }} transition={{ duration: 0.5, delay: 0.5 }} >
                Gumroid
            </Logo>

            <Social  >
                <AnimatePresence>
                    <motion.a href='https://www.instagram.com/' id='instagram' animate={{ opacity: 1, scale: 1 }} initial={{ opacity: 0, scale: 0 }} exit={{ opacity: 0, transition: { duration: 1, ease: "easeInOut" }, rotate: '275deg' }} whileHover={{ scale: 1.1 }} style={{ color: 'black' }} transition={{ duration: 0.5, delay: 0.75 }} >
                        <AiOutlineInstagram />
                    </motion.a>
                    <motion.a id='twiter' href='https://www.twitter.com' animate={{ opacity: 1, scale: 1 }} initial={{ opacity: 0, scale: 0 }} exit={{ opacity: 0, transition: { duration: 1, ease: "easeInOut" }, rotate: '275deg' }} whileHover={{ scale: 1.1 }} style={{ color: 'black' }} transition={{ duration: 0.5, delay: 1 }} >
                        <AiOutlineTwitter />
                    </motion.a>
                </AnimatePresence>
            </Social>
        </Main>
    )
}

export default Header