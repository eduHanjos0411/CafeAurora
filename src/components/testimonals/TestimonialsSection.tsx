import { testimonials } from "../../data/Testimonials"
import { TestimonialCard } from "../ui/cards/testimonialCard/TestimonialCard"

import './testimonials.css'

export function TestimonialsSection() {
  return (
    <section className="testimonials-section">
      <h2 className="testimonials-title">O que nossos clientes dizem</h2>
      <div className="testimonials-cards">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id}>
            <TestimonialCard id={testimonial.id} name={testimonial.name} message={testimonial.message} avatarUrl={testimonial.avatarUrl} />
          </div>
        ))}
      </div>
    </section>
  )
}