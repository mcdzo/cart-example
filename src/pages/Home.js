import axios from "axios";
import "./Home.css";
import { useState, useEffect, useContext } from "react";
import CartContext from "../context/CartContext";

const Home = () => {
  const { cartItems, dispatch } = useContext(CartContext);
  console.log(cartItems);
  const [products, setProducts] = useState([]);
  const [productAdded, setProductAdded] = useState(false);
  useEffect(() => {
    axios
      .get("https://codealo-commerce-cms.onrender.com/products")
      .then((res) => {
        return setProducts(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const addItem = (item) => {
    setProductAdded(item);
    dispatch({
      type: "ADD",
      item: item,
    });
  };

  return (
    <>
      <div className="products">
        {products.map((product) => (
          <div key={product.id}>
            <h4>{product.title}</h4>
            <button onClick={() => addItem(product)}>add to cart</button>
          </div>
        ))}
      </div>
      <div className="product-detail">
        {productAdded && (
          <div>
            Añadiste el siguiente producto al carrito: {productAdded.title}
          </div>
        )}
      </div>
      <div className="cart">
        CARRITO
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id}>
              <h4>{item.title}</h4>
            </div>
          ))}
        </div>
        <div>Total de productos: {cartItems.length}</div>
      </div>
    </>
  );
};

export default Home;
