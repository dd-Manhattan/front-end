import React from 'react';

const LoginComponent = () => {
  return (
    <div className="bg-dark vh-100 d-flex justify-content-center align-items-center">
      <div className="d-flex flex-row" style={{ width: "75%", height: "73%" }}>
        <div className="d-none d-md-block rounded-start" style={{ width: "55%" }}>
          <img
            src="/Assets/banner-login.jpg"
            alt="login-bg"
            className="img-fluid rounded-start"
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        </div>

        <div
          className="bg-white rounded-end p-4 d-flex flex-column justify-content-center align-items-center position-relative"
          style={{ width: "45%" }}
        >
           <a
            href="/"
            className="position-absolute btn btn-dark  d-flex align-items-center justify-content-center"
            style={{
              top: '20px',
              left: '20px',
              width: '40px',
              height: '40px',
              zIndex: 10
            }}
            title="Voltar para Home"
          >
            <span className="text-white" style={{ fontSize: '20px' }}>&larr;</span>
          </a>

          <h2 className="text-dark mb-4 text-center mt-4">Bem-vindo ao Hooper.co</h2>

          <form className="w-100 px-4">
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" id="email" className="form-control" placeholder="seuemail@exemplo.com" />
            </div>

            <div className="mb-3">
              <label htmlFor="senha" className="form-label">Senha</label>
              <input type="password" id="senha" className="form-control" placeholder="********" />
            </div>

            <button type="submit" className="btn btn-dark w-100">Entrar</button>

            <div className="mt-3 text-center">
              <span className="text-muted">Não tem uma conta? </span>
              <a href="/register" className="text-dark fw-bold">Crie uma conta</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;