import React from 'react'
import { FaBasketballBall } from "react-icons/fa";


export const HearderComponent = () => {
    return (
        <div className='d-flex bg-dark justify-content-between align-items-center px-5 py-2 text-white'>
            <div className='d-flex gap-3 align-items-center'>
                <h1> <a href="/" className='text-white text-decoration-none'>HooperWorld.co</a></h1>
                <h1><a href="/" className='text-white text-decoration-none'><FaBasketballBall /></a></h1>
            </div>

            <div className='d-flex align-items-center gap-5'>
                <span><a href="/" className='text-decoration-none text-white'>INÍCIO</a></span>
                <span><a href="aboutus" className='text-decoration-none text-white'>SOBRE NÓS</a></span>
                <span><a href="whoweare" className='text-decoration-none text-white'>QUEM SOMOS</a></span>

            </div>

            <div className='d-flex gap-3 align-items-center '>
                <a href="/login" className="btn btn-outline-light">LOGIN</a>
                <a href="/register" className="btn btn-outline-light">CADASTRO</a>
            </div>


        </div>
    )
}
