import type { Product } from "../../../../types/Product";

import './productCard.css'

interface ItemCardProps extends Product {
  name: string
  description: string
  price: number
  img?: string
}

export function ProductCard(props: ItemCardProps) {
  return (
    <div className="item-card">
      <img src={props.img} alt={props.name} className="item-image" />
      <div className="item-details">
        <h3 className="item-name">{props.name}</h3>
        <p className="item-description">{props.description}</p>
        <span className="item-price">R$ {props.price.toFixed(2)}</span>
      </div>
    </div>
  )
}