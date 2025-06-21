export const createUser = async ({ name, email, password, userTeam }) => {
  try {
    const response = await fetch('http://localhost:8080/usuarios/create-user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password,
        userTeam,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Erro ao criar usuário');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro na criação de usuário:', error);
    throw error;
  }
};

export const loginUser = async ({ email, senha }) => {
  try {
    const response = await fetch('http://localhost:8080/usuarios/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        senha,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Erro no login');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro no login:', error);
    throw error;
  }
};
