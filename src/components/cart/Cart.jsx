import { Accordion } from "react-bootstrap";
import useDataContext from "../../hooks/useDataContext";
import React from "react";

const Cart = () => {
  const { data, setData } = useDataContext();

  const deleteCartItem2 = (product) => {
    const updatedData = data.map((item) => {
      if (item.id === product.id) {
        item.instock += item.cartQuantity;
        item.cartQuantity = 0;
        item.isInCart = false;
      }
      return item;
    });
    setData(updatedData);
  };

  const accordionItems = data.map((prod, index) => {
    return (
      <>
        {prod.isInCart ? (
          <Accordion.Item key={index} eventKey={index}>
            <Accordion.Header>
              {prod.name} ${prod.cost} - {prod.cartQuantity}
            </Accordion.Header>
            <Accordion.Body>
              Country: {prod.country}
              <button onClick={() => deleteCartItem2(prod)}>Delete</button>
            </Accordion.Body>
          </Accordion.Item>
        ) : (
          <></>
        )}
      </>
    );
  });
  return (
    <>
      <Accordion defaultActiveKey="0">{accordionItems}</Accordion>
    </>
  );
};

export default Cart;
