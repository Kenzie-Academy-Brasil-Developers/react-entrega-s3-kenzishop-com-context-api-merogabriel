import { useHistory } from "react-router";
import CardCart from "../../components/CardCart";
import { useCart } from "../../Providers/Cart";

const Cart = () => {
  const history = useHistory();
  const { cart } = useCart();
  console.log(cart);
  return (
    <div className="App-header">
      <header>
        <h1>Carrinho:</h1>
        <div className="resumo">
          <h2>Resumo pedido: </h2>
          <span>
            {cart.length}
            {cart.length !== 1 ? " itens" : " item"}
          </span>

          <p>
            Total: R$ {cart.reduce((prev, curr) => prev + curr.price, 0)},00
          </p>
          <button className="cartButton" onClick={() => history.push("/")}>
            Finalizar Pedido
          </button>
        </div>
      </header>
      <div className="cartList">
        {cart.map((product, index) => (
          <CardCart key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
