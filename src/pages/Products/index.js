import Card from "../../components/Card";
import { useHistory } from "react-router-dom";
import { useCart } from "../../Providers/Cart";
import { useProducts } from "../../Providers/Products";

const Products = () => {
  const history = useHistory();
  const { products } = useProducts();
  const { cart } = useCart();

  return (
    <div className="App-header">
      <header>
        <h1>Kenzie Shop</h1>
        <h2>
          Carrinho: {cart.length} {cart.length !== 1 ? "itens" : "item"}
        </h2>
      </header>

      <div className="list">
        {products.map((product) => (
          <Card key={product.name} product={product} />
        ))}
      </div>

      <button className="botaoCarrinho" onClick={() => history.push("/cart")}>
        Finalizar Pedido
      </button>
    </div>
  );
};

export default Products;
