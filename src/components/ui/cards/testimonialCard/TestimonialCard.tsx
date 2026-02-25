import type { Testimonial } from "../../../../types/Testimonial";

import "./testimonialCard.css";

interface TestimonialCardProps extends Testimonial {
  name: string
  message: string
  avatarUrl?: string
}

export function TestimonialCard(props: TestimonialCardProps) {
  return (
    <div className="testimonial-card">
      <img src={props.avatarUrl} alt={`${props.name}'s avatar`} className="testimonial-avatar" />
      <p className="testimonial-text">"{props.message}"</p>
      <p className="testimonial-author">- {props.name}</p>
    </div>
  )
}