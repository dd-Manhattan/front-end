import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUsuario } from '../services/usuario/usuario.js';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {  
  e.preventDefault();
  try {
    const response = await loginUsuario({ email, senha });
    localStorage.setItem('token', response.token);    
    navigate('/');
  } catch (err) {
    setErro('E-mail ou senha inválidos');
  }
};


  return (
    <div className="container mt-5" style={{ maxWidth: '400px' }}>
      <h2 className="mb-4">Login</h2>

      {erro && <div className="alert alert-danger">{erro}</div>}

      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">E-mail</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="senha" className="form-label">Senha</label>
          <input
            type="password"
            className="form-control"
            id="senha"
            value={senha}
            onChange={e => setSenha(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">Entrar</button>
      </form>
    </div>
  );
}
