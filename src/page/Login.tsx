import { useState } from "react";

interface FormData {
  email: string;
  senha: string;
}

export function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    email: "",
    senha: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Login feito com sucesso!");
    // Aqui você pode adicionar a lógica de autenticação
    setFormData({ email: "", senha: "" });
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div
        className="card shadow-lg"
        style={{ width: "100%", maxWidth: "400px" }}
      >
        <div className="card-body">
          <h3 className="card-title text-center mb-4">Entre com sua conta</h3>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Seu email"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="senha" className="form-label">
                Senha
              </label>
              <input
                type={showPassword ? "text" : "password"}
                className="form-control"
                id="senha"
                name="senha"
                value={formData.senha}
                onChange={handleInputChange}
                placeholder="Sua senha"
                required
              />
            </div>

            <button
              type="button"
              className="btn btn-secondary mb-3"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Ocultar senha" : "Mostrar senha"}
            </button>

            <div className="mb-4 d-flex justify-content-between align-items-center">
              <div>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="rememberMe"
                />
                <label className="form-check-label" htmlFor="rememberMe">
                  Lembre-me
                </label>
              </div>
              <a href="senha" className="text-decoration-none">
                Esqueceu a senha?
              </a>
            </div>

            <button
              type="submit"
              className="btn btn-primary btn-block w-100 mb-3"
            >
              Entrar
            </button>

            <div className="text-center">
              <p>
                Não possui uma conta?{" "}
                <a href="/cadastro" className="text-decoration-none">
                  Registrar
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
