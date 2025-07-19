import React, { useEffect, useState } from 'react';
import Internal from './Internal';

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = sessionStorage.getItem('user');
    console.log(storedUser)
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  if (!user) {
    return (
      <Internal>
        <p>Carregando dados do usuário...</p>
      </Internal>
    );
  }

  return (
    <Internal>
      <div className="container">
        <h2 className="mb-4">Meu Perfil</h2>

        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Nome:</h5>
            <p className="card-text">{user.nome}</p>

            <h5 className="card-title">Email:</h5>
            <p className="card-text">{user.email}</p>

            <h5 className="card-title">Time do coração:</h5>
            <p className="card-text">{user.timeDoCoracao}</p>
          </div>
        </div>
      </div>
    </Internal>
  );
};

export default Profile;
