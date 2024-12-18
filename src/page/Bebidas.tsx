import { Col, Row } from "react-bootstrap";
import { StoreItem } from "../components/StoreItem";
import storeItems from "../data/items.json";

export function Bebidas() {
  const bebidasArray = Object.values(storeItems).filter(item => item.category === "Bebidas");

  return (
    <>
      <h1>Bebidas</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {bebidasArray.map(item => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
}
