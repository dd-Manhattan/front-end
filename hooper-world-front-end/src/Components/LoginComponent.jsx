import React from 'react'

const LoginComponent = () => {
  return (
    <div className='bg-dark vh-100 d-flex  justify-content-center align-items-center gap-1'>

        <div className='d-flex rounded' style={{width: "40%" , height : "73%"}}>
            <img src="../public/Assets/bg-teste.jpg" className='img-fluid rounded' style={{ objectFit: "cover", width: "100%" , height:"100%"}} />
        </div>
        <div className='bg-light d-flex rounded flex-column justify-content-center align-items-center gap-2' style={{width: "35%" , height : "73%"}}>

            <h1 className='text-dark '>Bem vindo ao Hooper.co</h1>
            <div className="bg-primary w-50 h-25">
                <input type="text" />
            </div>
            <div className="bg-primary w-50 h-25"></div>
            <div className="bg-primary w-50 h-25"></div>

        </div>
    </div>
  )
}

export default LoginComponent