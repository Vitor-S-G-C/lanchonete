import { useState } from "react"

interface FormData {
  email: string;
}

export function Senha() {
  const [formData, setFormData] = useState<FormData>({
    email: ""
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Senha trocada com sucesso!")
    // Aqui você pode adicionar a lógica de envio dos dados para o servidor
    console.log(formData)
    setFormData({  email: "" })
  }

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <div className="card shadow-lg" style={{ width: "100%", maxWidth: "400px" }}>
        <div className="card-body">
          <h3 className="card-title text-center mb-4">Recuperar sua conta</h3>

          <form onSubmit={handleSubmit}>
            
            <div className="mb-4">
              <label htmlFor="email" className="form-label">Email registrado</label>
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
            <button type="submit" className="btn btn-primary btn-block w-100 mb-3">
              Recuperar senha
            </button>

            <div className="text-center">
              <p><a href="/login" className="text-decoration-none">Já troquei de senha!</a></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
