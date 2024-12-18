import { Col, Row } from "react-bootstrap";
import { StoreItem } from "../components/StoreItem";
import storeItems from "../data/items.json";

export function Lanches() {
  const lanchesArray = Object.values(storeItems).filter(item => item.category === "Lanches");

  return (
    <>
      <h1>Lanches</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {lanchesArray.map(item => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
}
