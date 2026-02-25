import { Button } from "../ui/button/Button";
import { products } from "../../data/Products";
import { ProductCard } from "../ui/cards/productCard/ProductCard";

import './cardapio.css'

export function CardapioSection() {
  return (
    <section className="cardapio-section">
      <h2 className="cardapio-title">Nosso Cardápio</h2>
      <nav className="cardapio-filters">
        <Button>Bebidas</Button>
        <Button>Doces</Button>
        <Button>Salgados</Button>
      </nav>
      <div className="cardapio-itens">
        {products.map((product) => (
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
