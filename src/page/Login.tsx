import { useState } from "react"

interface FormData {
  email: string;
  Senha: string;
}

export function Login() {
  const [, setShowModal] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    email: "",
    Senha: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Logged in successfully!")
    // Aqui você pode adicionar a lógica de autenticação
    setFormData({ email: "", Senha: "" })
    setShowModal(false)
  }

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <div className="card shadow-lg" style={{ width: "100%", maxWidth: "400px" }}>
        <div className="card-body">
          <h3 className="card-title text-center mb-4">Entre com sua conta</h3>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="form-label">Email</label>
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

            <div className="mb-4 ">
              <label htmlFor="Senha" className="form-label">Senha</label>
              <input 
                type="Senha" 
                className="form-control" 
                id="Senha"
                name="Senha"
                value={formData.Senha}
                onChange={handleInputChange}
                placeholder="Sua Senha" 
                required 
              />
            </div>

            <div className="mb-4 d-flex justify-content-between align-items-center">
              <div>
                <input className="form-check-input" type="checkbox" id="rememberMe" />
                <label className="form-check-label" htmlFor="rememberMe">Lembre-me</label>
              </div>
              <a href="senha" className="text-decoration-none">Esqueceu a senha?</a>
            </div>

            <button type="submit" className="btn btn-primary btn-block w-100 mb-3">
              Entrar
            </button>

            <div className="text-center">
              <p>Não possui uma conta? <a href="/cadastro" className="text-decoration-none">Registrar</a></p>
              <div>
               
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
