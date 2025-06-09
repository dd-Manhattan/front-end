import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080',
});

export async function loginUsuario(data) {
  const response = await api.post('/usuarios/login', data);
  return response.data;
}

// Função para criar usuário
export async function createUsuario(data) {
  const response = await api.post('/usuarios/create-user', data);
  return response.data;
}
