import React, { useRef } from 'react'
import { HearderComponent } from '../Components/HearderComponent'
import { BannerComponent } from '../Components/BannerComponent'

export const Home = () => {
  const scrollContainerRef = useRef(null)

  return (
    <>
      <HearderComponent scrollContainerRef={scrollContainerRef} />
      <div
        ref={scrollContainerRef}
        className="bg-dark text-white "
        style={{ height: '100vh', overflowY: 'auto' }}
      >
        <BannerComponent
          imgSrc="../public/Assets/bg-teste.jpg"
          title="Imagem à Direita"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          imgRight={true}
        />

        <BannerComponent
          imgSrc="../public/Assets/bg-teste.jpg"
          title="Banner à Esquerda"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          imgRight={false}
        />

        <BannerComponent
          imgSrc="../public/Assets/bg-teste.jpg"
          title="Mais um Banner"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          imgRight={true}
        />

        <BannerComponent
          imgSrc="../public/Assets/bg-teste.jpg"
          title="Banner à Esquerda"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          imgRight={false}
        />
      </div>
    </>
  )
}
