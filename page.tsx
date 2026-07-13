const shopImages = [
  { src: "/assets/image-01.jpg", alt: "Pasillo del local con plantas colgantes y estantes de macetas" },
  { src: "/assets/image-02.jpg", alt: "Rincon del local con macetas de terracota y plantas tropicales" },
  { src: "/assets/image-03.jpg", alt: "Vidriera de plantas iluminada con puerta de madera" },
  { src: "/assets/image-04.jpg", alt: "Mesa central del local con plantines, vidrio y lamparas colgantes" },
];

const products = [
  ["Philodendron Pink Princess", "Luz media brillante", "Edicion rosa", "/assets/image-08.jpg"],
  ["Begonia Maculata", "Riego moderado", "Flor delicada", "/assets/image-09.jpg"],
  ["Licuala Grandis", "Sombra luminosa", "Hoja abanico", "/assets/image-10.jpg"],
  ["Alocasia Variegata", "Humedad alta", "Coleccionable", "/assets/image-11.jpg"],
  ["Tulipanes Sol", "Luz indirecta", "Temporada", "/assets/image-12.jpg"],
  ["Alocasia Pink Dragon", "Ambiente calido", "Rareza suave", "/assets/image-13.jpg"],
  ["Stromanthe Triostar", "Luz filtrada", "Tonos blush", "/assets/image-14.jpg"],
  ["Limonero Mini", "Exterior luminoso", "Aromatica", "/assets/image-15.jpg"],
  ["Monstera Albo", "Luz brillante", "Variegada", "/assets/image-16.jpg"],
  ["Monstera Thai", "Riego espaciado", "Hojas perforadas", "/assets/image-17.jpg"],
  ["Pilea Peperomioides", "Facil cuidado", "Para escritorio", "/assets/image-18.jpg"],
  ["Sansevieria", "Bajo mantenimiento", "Resistente", "/assets/image-19.jpg"],
  ["Aglaonema Limelight", "Interior noble", "Textura crema", "/assets/image-20.jpg"],
  ["Maranta Fascinator", "Humedad media", "Nervaduras finas", "/assets/image-21.jpg"],
  ["Calathea Rattlesnake", "Luz indirecta", "Movimiento diario", "/assets/image-23.jpg"],
  ["Ficus Lyrata", "Sol suave", "Porte alto", "/assets/image-24.jpg"],
  ["Philodendron Pink Congo", "Brillo sin sol directo", "Statement piece", "/assets/image-25.jpg"],
  ["Mix Rosado", "Seleccion premium", "Pack curado", "/assets/image-26.jpg"],
  ["Monstera Grande", "Espacio amplio", "Impacto visual", "/assets/image-27.jpg"],
  ["Begonia Spotted Pink", "Humedad estable", "Color joya", "/assets/image-28.jpg"],
  ["Aglaonema Pink", "Interior luminoso", "Follaje coral", "/assets/image-29.jpg"],
  ["Ficus Ruby", "Luz intensa", "Hojas pintadas", "/assets/image-30.jpg"],
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="inicio">
        <nav className="nav" aria-label="Navegacion principal">
          <a className="wordmark" href="#inicio" aria-label="JACINTO inicio">
            <span className="logo-mark" aria-hidden="true">
              <span />
              <i />
            </span>
            <span>JACINTO</span>
          </a>
          <div className="nav-links">
            <a href="#local">Local</a>
            <a href="#catalogo">Catalogo</a>
            <a href="#visita">Visita</a>
          </div>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Plant shop & ceramic studio</p>
            <h1>JACINTO</h1>
            <p className="lead">
              Un local de plantas de interior, macetas artesanales y especies
              dificiles de encontrar, pensado como un refugio verde en plena ciudad.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#catalogo">Ver plantas</a>
              <a className="button secondary" href="#local">Recorrer el local</a>
            </div>
          </div>

          <div className="hero-media" aria-label="Fotos destacadas del local">
            <img className="hero-main" src="/assets/image-02.jpg" alt="Interior de JACINTO con plantas y macetas de terracota" />
            <img className="hero-overlap" src="/assets/image-03.jpg" alt="Vidriera del local con plantas y puerta abierta" />
          </div>
        </div>
      </section>

      <section className="brand-panel" aria-label="Identidad JACINTO">
        <div className="arch-logo" aria-hidden="true">
          <span className="stem stem-one" />
          <span className="stem stem-two" />
          <span className="stem stem-three" />
          <span className="flower flower-one" />
          <span className="flower flower-two" />
          <span className="flower flower-three" />
          <span className="leaf leaf-one" />
          <span className="leaf leaf-two" />
          <span className="leaf leaf-three" />
        </div>
        <div>
          <p className="eyebrow">Logo creado para el portfolio</p>
          <h2>Un arco botanico con aire vintage</h2>
          <p>
            La marca toma la idea del arco floral como simbolo de entrada a un vivero boutique,
            con verdes profundos, ceramica azul y acentos limon.
          </p>
        </div>
      </section>

      <section className="shop-story" id="local">
        <div className="section-heading">
          <p className="eyebrow">El local</p>
          <h2>Una tienda para mirar lento</h2>
        </div>
        <div className="story-grid">
          {shopImages.map((image, index) => (
            <figure className={`story-card story-card-${index + 1}`} key={image.src}>
              <img src={image.src} alt={image.alt} />
            </figure>
          ))}
        </div>
      </section>

      <section className="tile-section">
        <div className="tile-copy">
          <p className="eyebrow">Coleccion de temporada</p>
          <h2>Verde, azul ceramica y un golpe de sol</h2>
          <p>
            La paleta mezcla hojas oscuras, crema calido, azul de azulejo y amarillo
            limoncello para que la web se sienta fresca sin perder elegancia.
          </p>
        </div>
        <div className="tile-pattern" aria-hidden="true" />
      </section>

      <section className="catalog" id="catalogo">
        <div className="section-heading catalog-heading">
          <div>
            <p className="eyebrow">En venta</p>
            <h2>Plantas seleccionadas</h2>
          </div>
          <p>
            Rarezas rosadas, monsteras variegadas, hojas graficas y clasicos de bajo mantenimiento.
          </p>
        </div>

        <div className="product-grid">
          {products.map(([name, care, tag, src]) => (
            <article className="product-card" key={name}>
              <img src={src} alt={name} />
              <div className="product-info">
                <span>{tag}</span>
                <h3>{name}</h3>
                <p>{care}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="visit" id="visita">
        <div>
          <p className="eyebrow">Visita</p>
          <h2>Plantas felices, personas felices.</h2>
        </div>
        <div className="visit-details">
          <p>Martes a sabado</p>
          <p>11:00 - 19:30</p>
          <p>Asesoria de cuidado incluida</p>
        </div>
      </section>
    </main>
  );
}
