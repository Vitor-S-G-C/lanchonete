import { Col, Row } from "react-bootstrap"
import { StoreItem } from "../components/StoreItem"
import storeItems from "../data/items.json"

export function Store() {
  // Converte o objeto em um array de valores
  const itemsArray = Object.values(storeItems)

  return (
    <>
      <h1>Cardapio</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {itemsArray.map(item => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  )
}
