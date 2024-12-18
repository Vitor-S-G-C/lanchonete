import { useState } from "react";
import axios from "axios";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";

interface NewItem {
  name: string;
  price: number;
  category: string;
  imgUrl: string;
}

export function AddItemForm() {
  const [newItem, setNewItem] = useState<NewItem>({
    name: "",
    price: 0,
    category: "",
    imgUrl: "",
  });

  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/items", newItem);
      alert("Item adicionado com sucesso!");
      console.log(response.data);
      setNewItem({ name: "", price: 0, category: "", imgUrl: "" }); // Limpa o formulário
    } catch (error) {
      console.error("Erro ao adicionar item:", error);
      alert("Falha ao adicionar item.");
    }
  };

  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card>
            <Card.Header>
              <h2 className="text-center">Adicione um novo item</h2>
            </Card.Header>
            <Card.Body>
              <Form>
                <Form.Group controlId="itemName" className="mb-3">
                  <Form.Label>Nome</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Digite o nome do item"
                    value={newItem.name}
                    onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                  />
                </Form.Group>
                <Form.Group controlId="itemPrice" className="mb-3">
                  <Form.Label>Preço</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Digite o preço do item"
                    value={newItem.price}
                    onChange={(e) =>
                      setNewItem({ ...newItem, price: parseFloat(e.target.value) })
                    }
                  />
                </Form.Group>
                <Form.Group controlId="itemCategory" className="mb-3">
                  <Form.Label>Categoria</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Digite a categoria do item"
                    value={newItem.category}
                    onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}
                  />
                </Form.Group>
                <Form.Group controlId="itemImgUrl" className="mb-3">
                  <Form.Label>URL da Imagem</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Digite o URL da imagem do item"
                    value={newItem.imgUrl}
                    onChange={(e) => setNewItem({ ...newItem, imgUrl: e.target.value })}
                  />
                </Form.Group>
                <div className="d-grid">
                  <Button variant="primary" size="lg" onClick={handleSubmit}>
                    Adicionar Item
                  </Button> 
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
 