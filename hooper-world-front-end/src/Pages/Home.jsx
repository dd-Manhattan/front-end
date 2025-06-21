import React, { useRef } from 'react'
import { HearderComponent } from '../Components/HearderComponent'
import { BannerComponent } from '../Components/BannerComponent'

export const Home = () => {
  const scrollContainerRef = useRef(null)
  const inicioRef = useRef(null)
  const sobreNosRef = useRef(null)
  const quemSomosRef = useRef(null)

  return (
    <>
      <HearderComponent 
        scrollContainerRef={scrollContainerRef}
        sectionRefs={{ inicioRef, sobreNosRef, quemSomosRef }} 
      />
      <div
        ref={scrollContainerRef}
        className="bg-dark text-white"
        style={{ height: '100vh', overflowY: 'auto' }}
      >
        {/* Seção INÍCIO - Adicione a ref diretamente no BannerComponent */}
        <BannerComponent
          ref={inicioRef}
          imgSrc="../public/Assets/banner-1.jpg"
          title="Bem vindo ao Hooper.co"
          description="A plataforma interativa feita por e para fãs de basquete.

Aqui você encontra um espaço único para se conectar com o mundo da bola laranja — notícias, estatísticas, curiosidades, comunidades e muito mais.
Explore, compartilhe e viva a experiência do basquete como nunca antes.

Entre na quadra. O jogo começa agora!
"
          buttonLink='/register'
          hasButton={true}
          buttonText='Não tem cadastro? clique aqui'
          imgRight={true}
        />

        {/* Seção SOBRE NÓS */}
        <BannerComponent
          ref={sobreNosRef}
          imgSrc="../public/Assets/banner-2.jpg"
          title="Hooper.co - Sua Conexão com o Basquete"
          description="Aos 13, o basquete mudou minha vida. Hoje, criei o Hooper.co para compartilhar essa paixão. Aqui, você acompanha seu time, testa seus conhecimentos e faz parte de uma comunidade que vive o jogo intensamente.

Entre agora e viva o basquete com a gente."
          imgRight={false}
          hasButton={true}
          buttonText="Entrar e acompanhar seu time"
          buttonLink="/login"
        />

        {/* Seção QUEM SOMOS */}
        <BannerComponent
          ref={quemSomosRef}
          imgSrc="../public/Assets/banner-3.jpg"
          title="Quem Somos - A Paixão que Nos Une"
          description="Na Hooper.co, o basquete é mais do que um jogo — é um propósito. Nascemos da vivência real de um garoto de 13 anos que encontrou na bola laranja a força para superar a depressão e a obesidade. 

Transformamos essa história em uma plataforma onde fãs como você encontram notícias atualizadas, estatísticas, quizzes e uma comunidade vibrante. Somos feitos por quem vive o esporte e para quem sente a alma vibrar a cada jogo.

Se você também respira basquete, aqui é o seu lugar."
          imgRight={true}
          hasButton={false}
        />
      </div>
    </>
  )
}