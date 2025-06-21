import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getTeams } from '../Services/TeamService';
import { createUser } from '../Services/UserService';
import { toast } from 'react-toastify';

const RegisterComponent = () => {
  const [teams, setTeams] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState('');
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
    confirmarSenha: ''
  });
  const [senhaError, setSenhaError] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const data = await getTeams();
        const filtered = data.filter(team => team.conferencia && team.conferencia.trim() !== '');
        setTeams(filtered);
      } catch (error) {
        console.error('Erro ao carregar times:', error);
        toast.error('Erro ao carregar times');
      }
    };

    fetchTeams();
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));

    if (id === 'senha' || id === 'confirmarSenha') {
      if (id === 'senha' && formData.confirmarSenha && value !== formData.confirmarSenha) {
        setSenhaError('As senhas não coincidem');
      } else if (id === 'confirmarSenha' && formData.senha && value !== formData.senha) {
        setSenhaError('As senhas não coincidem');
      } else {
        setSenhaError('');
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.nome || !formData.email || !formData.senha || !formData.confirmarSenha) {
      return toast.error("Preencha todos os campos");
    }

    if (formData.senha !== formData.confirmarSenha) {
      return toast.error("As senhas não coincidem");
    }

    const team = teams.find((t) => t.id === parseInt(selectedTeam));
    if (!team) return toast.error("Selecione um time válido");

    try {
      await createUser({
        name: formData.nome,
        email: formData.email,
        password: formData.senha,
        userTeam: {
          teamId: team.id,
          teamName: team.nomeInteiroDoTime
        }
      });

      toast.success('Usuário criado com sucesso! Redirecionando...');
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (err) {
      toast.error('Erro ao criar usuário: ' + (err.message || err.toString()));
    }
  };

  return (
    <div className="bg-dark vh-100 d-flex justify-content-center align-items-center">
      <div className="d-flex flex-row mt-5" style={{ width: "75%", height: "80%" }}>
        <div
          className="bg-white rounded-start p-4 d-flex flex-column justify-content-center align-items-center position-relative"
          style={{ width: "45%" }}
        >
          <a
            href="/"
            className="position-absolute btn btn-dark d-flex align-items-center justify-content-center"
            style={{ top: '20px', left: '20px', width: '40px', height: '40px', zIndex: 10 }}
            title="Voltar para Home"
          >
            <span className="text-white" style={{ fontSize: '20px' }}>&larr;</span>
          </a>

          <h2 className="text-dark mb-4 text-center mt-5">Crie sua conta no Hooper.co</h2>

          <form className="w-100 px-4" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="nome" className="form-label">Nome</label>
              <input
                type="text"
                id="nome"
                className="form-control"
                placeholder="João da Silva"
                onChange={handleChange}
                value={formData.nome}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="seuemail@exemplo.com"
                onChange={handleChange}
                value={formData.email}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="senha" className="form-label">Senha</label>
              <input
                type="password"
                id="senha"
                className="form-control"
                placeholder="********"
                onChange={handleChange}
                value={formData.senha}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="confirmarSenha" className="form-label">Confirmar Senha</label>
              <input
                type="password"
                id="confirmarSenha"
                className="form-control"
                placeholder="********"
                onChange={handleChange}
                value={formData.confirmarSenha}
              />
              {senhaError && <div className="text-danger mt-1">{senhaError}</div>}
            </div>

            <div className="mb-4">
              <label htmlFor="timeDoCoracao" className="form-label">Time do coração</label>
              <select
                id="timeDoCoracao"
                className="form-select"
                value={selectedTeam}
                onChange={(e) => setSelectedTeam(e.target.value)}
              >
                <option value="">Selecione seu time</option>
                {teams.map((team) => (
                  <option key={team.id} value={team.id}>
                    {team.nomeInteiroDoTime}
                  </option>
                ))}
              </select>
            </div>

            <button type="submit" className="btn btn-dark w-100" disabled={senhaError !== ''}>Registrar</button>

            <div className="mt-3 text-center">
              <span className="text-muted">Já tem uma conta? </span>
              <a href="/login" className="text-dark fw-bold">Faça login</a>
            </div>
          </form>
        </div>

        <div className="d-none d-md-block rounded-end" style={{ width: "55%" }}>
          <img
            src="/Assets/banner-register.jpg"
            alt="register-bg"
            className="img-fluid rounded-end"
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default RegisterComponent;
