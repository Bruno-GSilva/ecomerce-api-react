import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Cards from "./components/Cards";
import Header from "./components/Header";

export default function App() {
const [produtos, setProdutos] = useState([]);
  
  
  useEffect(()=>{
    async function getData()
    {
      let dados = await axios.get("https://fakestoreapi.com/products?limit=6")
      let prods = await dados.data;
      console.log(prods)
      setProdutos(prods);
    }
    getData()
  },[])

  return (
    <>
    <Header/>
    <section>
    {/* {produtos.map((p,key) => { return <Cards price={p.price} title={p.title} img={p.image} key={key}/>})} */}
    </section>
    </>
  );
}
