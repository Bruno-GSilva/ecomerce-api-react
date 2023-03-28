import React from 'react'
import './header.css'

export default function Header() {
  return (
    <header>
    <span><img src="https://cdn-icons-png.flaticon.com/512/1453/1453025.png" alt="..." /></span>
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
    <span><img src="https://cdn-icons-png.flaticon.com/512/2543/2543193.png" alt="..." /></span>
    
    <label for="burger" class="burger">
    <input id="burger" type="checkbox"/>
    <span></span>
    <span></span>
    <span></span>
    </label>
  </header>
  )
}
