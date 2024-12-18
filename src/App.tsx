import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Lanches } from "./page/Lanches";
import { Bebidas} from "./page/Bebidas";
import { Login } from "./page/Login";
import { Navbar } from "./components/Navbar";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import { Cadastro } from "./page/Cadastro";
import { Senha } from "./page/senha";

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/Lanches" element={<Lanches />} />
          <Route path="/bebidas" element={<Bebidas />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Cadastro" element={<Cadastro />} />
          <Route path="/Senha" element={<Senha />} />
        </Routes>
      </Container>
    </ShoppingCartProvider>
  );
}

export default App;
