import './about.css'

export function AboutSection() {
  return (
    <section id="about" className="about-section">
      <article className="about-article">
        <h2>Nossa História</h2>
        <p>
          No Café Aurora, acreditamos que cada dia merece começar com um momento
          especial. Inspirados pelo nascer do sol, criamos um espaço acolhedor
          onde o aroma do café fresco e o sabor artesanal se encontram para
          proporcionar experiências únicas.
        </p>

        <h2>Nosso Compromisso</h2>
        <p>
          Selecionamos cuidadosamente nossos grãos, priorizando qualidade e
          origem, e realizamos uma torra que valoriza cada nota e aroma. Cada
          xícara é preparada com atenção aos detalhes, respeitando o tempo e o
          processo que transformam simples ingredientes em algo memorável.
        </p>
        <p>
          Mais do que uma cafeteria, somos um refúgio no meio da cidade — um
          lugar para trabalhar com tranquilidade, encontrar amigos ou
          simplesmente desacelerar e apreciar o momento.
        </p>
      </article>

      <img className="about-img" src="ImgAbout.png" />
    </section>
  );
}
