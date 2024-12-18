import { Offcanvas, Stack } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
import { CartItem } from "./CartItem"
import storeItems from "../data/items.json"



interface StoreItem {
  id: number
  name: string
  price: number
  category: string
  imageUrl: string
}

type ShoppingCartProps = {
  isOpen: boolean
}

 function formatCurrency(value: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}


export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart, cartItems } = useShoppingCart()

  // Converte o objeto em um array
  const storeItemsArray = Object.values(storeItems as unknown as Record<string, StoreItem>)
  
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Carrinho</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map(item => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className="ms-auto fw-bold fs-5">
  Total{" "}
  {formatCurrency(
    cartItems.reduce((total, cartItem) => {

      const item = storeItemsArray.find(i => i.id === cartItem.id);
      return total + (item?.price || 0) * cartItem.quantity;
    }, 0) 
  )}
</div>

        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  )
}
