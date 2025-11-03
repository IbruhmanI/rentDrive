import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollTop = () => {
    const { pathname } = useLocation()
    useEffect(()=>{
        if(window.innerWidth<=700){
            window.scrollTo({
                top:0,
                behavior:"instant"
            })
        }else{
            window.scrollTo({
                top:0,
                behavior:'instant'
            })
        }
    })
    return null;
}
export default ScrollTop
