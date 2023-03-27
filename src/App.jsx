import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Cards from "./components/Cards";

export default function App() {
  const [produtos, setProdutos] = useState({});
  
  useEffect(()=>{
    axios
    .get("https://fakestoreapi.com/products/")
    .then((response) => {
      setProdutos(response.data.map((el, key)=> response.data[key].title))
    })
    .catch((err) => {
      console.log(err);
    });
  },[])
  return (
    <>
    <Cards price={produtos[3]}/>
    </>
  );
}
