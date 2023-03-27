import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Cards from "./components/Cards";

export default function App() {
  const [produtos, setProdutos] = useState([]);
  
  
  async function getData()
  {
    let dados = await axios.get("https://fakestoreapi.com/products/")
    let prods = await dados.data;
    setProdutos(prods);
  }
  
  useEffect(() => {
    // axios
    // .get("https://fakestoreapi.com/products/")
    // .then((response) => {
    //   setProdutos(response.data);
    //   console.log("dados", response.data)
    //   console.log("produtos", produtos)
    //   console.log("preço", produtos[0].price)
    // })
    // .catch((err) => {
    //   console.log(err);
    // });
    getData();
  }, [])
  

  // const propsProdutos = {
  //   titule:produtos[2],
  // }

  return (
    <>
    {
      produtos.map((p) => {
        console.log(p.price)
        return <Cards price={p.price}/>
      })
    }
    
    </>
  );
}
