import useDataContext from "../../hooks/useDataContext";
import "./list.css";

const List = () => {
  const { data, setData } = useDataContext();

  const addToCart = (product) => {
    if (product.instock === 0)
      return alert("No more products available. Please restock");

    const updatedData = data.map((item) => {
      if (item.id === product.id) {
        item.instock--;
        item.cartQuantity++;
        item.isInCart = true;
      }
      return item;
    });

    setData(updatedData);
  };

  const itemsList = data.map((prod, index) => {
    let n = index + 1049;
    let uhit = "https://picsum.photos/" + n;
    return (
      <li key={index}>
        <h5>
          <img
            src={uhit}
            width={70}
            className="imageCircle"
            alt="productImg"
          ></img>{" "}
          {prod.name} ${prod.cost}{" "}
          <button onClick={() => addToCart(prod)}>Add To Cart</button>
        </h5>
        <p className="itemDetails">
          Country: {prod.country} - Stock: {prod.instock}
        </p>
      </li>
    );
  });

  return (
    <div className="listStyle">
      <h1>Items</h1>
      <ul>{itemsList}</ul>
    </div>
  );
};

export default List;
