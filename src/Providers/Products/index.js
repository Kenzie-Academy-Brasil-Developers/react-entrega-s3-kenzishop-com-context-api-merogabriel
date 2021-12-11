import { createContext, useState, useContext } from "react";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([
    {
      name: "Uniforme Selecao",
      price: 19,
      img: "https://static.netshoes.com.br/produtos/camisa-selecao-brasil-ii-2021-sn-torcedor-nike-masculina/76/HZM-3819-076/HZM-3819-076_zoom1.jpg?ts=1597330865",
    },
    {
      name: "Uniforme PSG",
      price: 39,
      img: "https://cdn.awsli.com.br/600x450/1861/1861887/produto/91391679/ebf2f75553.jpg",
    },
    {
      name: "Camisa Branca",
      price: 59,
      img: "https://static-content.fastchannel.com/dickies/images/products/DC125BR-Frente_z_00.jpg",
    },
    {
      name: "Camisa Listrada",
      price: 89,
      img: "https://bawclothing.vteximg.com.br/arquivos/ids/162432/BAW_1539.jpg?v=636662291912030000",
    },
  ]);

  const addToProducts = (item) => {
    if (!products.find((i) => i === item)) {
      setProducts([...products, item]);
    }
  };

  return (
    <ProductsContext.Provider value={{ products, addToProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};
export const useProducts = () => useContext(ProductsContext);
