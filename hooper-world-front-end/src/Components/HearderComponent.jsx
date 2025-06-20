import React, { useState, useEffect, useRef } from 'react'
import { FaBasketballBall } from 'react-icons/fa'

export const HearderComponent = ({ scrollContainerRef }) => {
  const [show, setShow] = useState(true)
  const lastScrollY = useRef(0)
  const ticking = useRef(false)

  useEffect(() => {
    if (!scrollContainerRef?.current) return

    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const currentScrollY = scrollContainerRef.current.scrollTop

          if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
            setShow(false)
          } else {
            setShow(true)
          }

          lastScrollY.current = currentScrollY
          ticking.current = false
        })
        ticking.current = true
      }
    }

    const container = scrollContainerRef.current
    container.addEventListener('scroll', handleScroll)

    return () => {
      container.removeEventListener('scroll', handleScroll)
    }
  }, [scrollContainerRef])

  return (
    <div
      className="d-flex bg-dark justify-content-between align-items-center px-5 py-2 text-white fixed-top shadow-sm"
      style={{
        transition: 'transform 0.3s ease',
        transform: show ? 'translateY(0)' : 'translateY(-100%)',
        zIndex: 1030,
      }}
    >
      <div className="d-flex gap-3 align-items-center">
        <h1>
          <a href="/" className="text-white text-decoration-none">
            Hooper.co
          </a>
        </h1>
        <h1>
          <a href="/" className="text-white text-decoration-none">
            <FaBasketballBall />
          </a>
        </h1>
      </div>

      <div className="d-flex align-items-center gap-5">
        <span>
          <a href="/" className="text-decoration-none text-white">
            INÍCIO
          </a>
        </span>
        <span>
          <a href="aboutus" className="text-decoration-none text-white">
            SOBRE NÓS
          </a>
        </span>
        <span>
          <a href="whoweare" className="text-decoration-none text-white">
            QUEM SOMOS
          </a>
        </span>
      </div>

      <div className="d-flex gap-3 align-items-center ">
        <a href="/login" className="btn btn-outline-light">
          LOGIN
        </a>
        <a href="/register" className="btn btn-outline-light">
          CADASTRO
        </a>
      </div>
    </div>
  )
}
