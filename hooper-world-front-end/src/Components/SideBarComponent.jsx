import React from 'react';
import { useNavigate } from 'react-router-dom';

const SidebarComponent = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleLogout = () => {
    sessionStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div
      className="bg-dark text-white d-flex flex-column p-3"
      style={{ width: '250px', height: '100vh', position: 'fixed', top: 0, left: 0 }}
    >
      <h2 className="mb-4 text-center">Hooper.co</h2>

      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <button
            className="nav-link text-white"
            style={{ background: 'none', border: 'none', textAlign: 'left' }}
            onClick={() => handleNavigation('/perfil')}
          >
            Perfil
          </button>
        </li>
        <li>
          <button
            className="nav-link text-white"
            style={{ background: 'none', border: 'none', textAlign: 'left' }}
            onClick={() => handleNavigation('/jogos')}
          >
            Jogos
          </button>
        </li>
        <li>
          <button
            className="nav-link text-white"
            style={{ background: 'none', border: 'none', textAlign: 'left' }}
            onClick={() => handleNavigation('/noticias')}
          >
            Notícias do seu time
          </button>
        </li>
        <li className="mt-3">
          <button
            className="btn btn-outline-light w-100"
            onClick={handleLogout}
          >
            Sair
          </button>
        </li>
      </ul>
    </div>
  );
};

export default SidebarComponent;
