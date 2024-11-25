import { useState } from "react"

interface FormData {
  nome: string;
  sobrenome: string;
  email: string;
  senha: string;
  endereco: string;
}

export function Cadastro() {
  const [formData, setFormData] = useState<FormData>({
    nome: "",
    sobrenome: "",
    email: "",
    senha: "",
    endereco: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Cadastro realizado com sucesso!")
    // Aqui você pode adicionar a lógica de envio dos dados para o servidor
    console.log(formData)
    setFormData({ nome: "", sobrenome: "", email: "", senha: "", endereco: "" })
  }

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <div className="card shadow-lg" style={{ width: "100%", maxWidth: "400px" }}>
        <div className="card-body">
          <h3 className="card-title text-center mb-4">Criar uma conta</h3>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="nome" className="form-label">Nome</label>
              <input 
                type="text" 
                className="form-control" 
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleInputChange}
                placeholder="Seu nome" 
                required 
              />
            </div>

            <div className="mb-4">
              <label htmlFor="sobrenome" className="form-label">Sobrenome</label>
              <input 
                type="text" 
                className="form-control" 
                id="sobrenome"
                name="sobrenome"
                value={formData.sobrenome}
                onChange={handleInputChange}
                placeholder="Seu sobrenome" 
                required 
              />
            </div>

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

            <div className="mb-4">
              <label htmlFor="senha" className="form-label">Senha</label>
              <input 
                type="password" 
                className="form-control" 
                id="senha"
                name="senha"
                value={formData.senha}
                onChange={handleInputChange}
                placeholder="Sua senha" 
                required 
              />
            </div>

            <div className="mb-4">
              <label htmlFor="endereco" className="form-label">Endereço</label>
              <input 
                type="text" 
                className="form-control" 
                id="endereco"
                name="endereco"
                value={formData.endereco}
                onChange={handleInputChange}
                placeholder="Seu endereço" 
                required 
              />
            </div>

            <button type="submit" className="btn btn-primary btn-block w-100 mb-3">
              Criar conta
            </button>

            <div className="text-center">
              <p>Já possui uma conta? <a href="/login" className="text-decoration-none">Entrar</a></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
