import { Button } from "../ui/button/Button";
import { filterProductByCategory } from "../../data/Products";
import { ProductCard } from "../ui/cards/productCard/ProductCard";

import './cardapio.css'
import { useState } from "react";

export function CardapioSection() {
  const [category, setCategory] = useState<string | null>(null)

  const filteredProducts = filterProductByCategory(category)


  return (
    <section id="menu" className="cardapio-section">
      <h2 className="cardapio-title">Nosso Cardápio</h2>
      <nav className="cardapio-filters">
        <Button onClick={() => setCategory(null)}>Todos</Button>
        <Button onClick={() => setCategory("bebida")}>Bebidas</Button>
        <Button onClick={() => setCategory("doce")}>Doces</Button>
        <Button onClick={() => setCategory("salgado")}>Salgados</Button>
      </nav>
      <div className="cardapio-itens">
        {filteredProducts.map((product) => (
          <ProductCard
            id={product.id}
            key={product.id}
            name={product.name}
            description={product.description}
            price={product.price}
            img={product.imageUrl}
          />
        ))}
      </div>
    </section>
  );
}
