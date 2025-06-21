
export const getTeams = async () => {
  try {
    const response = await fetch('http://localhost:8080/teams');

    if (!response.ok) {
      throw new Error(`Erro ao buscar equipes: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro ao buscar times:', error);
    throw error;
  }
};