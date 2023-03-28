import React from 'react'
import './header.css'

export default function Header() {
  return (
    <header>
    <span><img src="ecomerce-api-react\src\assets\fire.png" alt="..." /></span>
    <nav>
      <ul><li><a href="#">Home</a></li></ul>
      <ul><li><a href="#">Categorias</a></li></ul>
      <ul><li><a href="#">Produtos</a></li></ul>
      <ul><li><a href="#">Contato</a></li></ul>
    </nav>
    <label htmlFor="search">
    <input type="search" placeholder="Busque seu produto"/>
    <span><img src="https://cdn-icons-png.flaticon.com/512/8336/8336588.png" alt="..." /></span>
    </label>
    <span><img src="ecomerce-api-react\src\assets\carrinho-de-compras.png" alt="..." /></span>
    
    <label for="burger" class="burger">
    <input id="burger" type="checkbox"/>
    <span></span>
    <span></span>
    <span></span>
    </label>
  </header>
  )
}
