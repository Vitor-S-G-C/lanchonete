import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Home } from "./page/Home";
import { Store } from "./page/Store";
import { Login } from "./page/Login";
import { Navbar } from "./components/Navbar";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import { AddItemForm } from "./components/CartAdd";
import { Cadastro } from "./page/Cadastro";
import { Senha } from "./page/senha";

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cardapio" element={<Store />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/additemForm" element={<AddItemForm />} />
          <Route path="/Cadastro" element={<Cadastro />} />
          <Route path="/Senha" element={<Senha />} />
        </Routes>
      </Container>
    </ShoppingCartProvider>
  );
}

export default App;
