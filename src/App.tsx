import { useMemo, useState } from 'react'
import './App.css'
import logo from './assets/brand/logo-cuidarte-pharma.svg'
import isotipo from './assets/brand/isotipo-cuidarte-pharma.svg'
import bannerDrogueria from './assets/brand/banner-drogueria.svg'
import marcaCorazon from './assets/brand/marca-corazon.svg'
import fotoFachada from './assets/fotos/fachada-cuidarte-pharma.webp'
import fotoEquipo from './assets/fotos/equipo-aniversario.webp'
import fotoCalle from './assets/fotos/calle-maridiaz.webp'
import fotoEntrada from './assets/fotos/entrada-drogueria.webp'
import fotoBandera from './assets/fotos/bandera-horarios.webp'

/* Datos de contacto: cambia aquí y se actualiza en toda la página */
const CONTACT = {
  phoneDisplay: '318 084 1757',
  phoneTel: '+573180841757',
  whatsapp: 'https://wa.me/573180841757',
  email: 'hola@cuidartepharma.com', // ← reemplazar por el correo real
  address: 'Calle 16A # 32A-28',
  barrio: 'Barrio Maridíaz, Pasto, Nariño',
  mapsQuery: 'Calle 16A 32A-28, Maridiaz, Pasto, Nariño, Colombia',
}
const HOURS = [
  { days: 'Lunes a sábado', time: '8:30 a. m. – 6:50 p. m.' },
  { days: 'Domingo', time: '9:00 a. m. – 1:00 p. m.' },
]
const PAYMENTS = 'Efectivo, Nequi, Daviplata y Bre-B'

const waLink = (message: string) => `${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`
const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT.mapsQuery)}`
const mapsEmbed = `https://www.google.com/maps?q=${encodeURIComponent(CONTACT.mapsQuery)}&output=embed`

type Product = {
  id: number
  name: string
  category: string
  price: number
  icon: string
  description: string
}

const products: Product[] = [
  { id: 1, name: 'Acetaminofén 500 mg', category: 'Medicamentos', price: 7800, icon: '💊', description: 'Caja x 20 tabletas.' },
  { id: 2, name: 'Vitamina C + Zinc', category: 'Vitaminas', price: 24900, icon: '🍊', description: 'Complemento alimenticio.' },
  { id: 3, name: 'Protector solar FPS 50+', category: 'Cuidado personal', price: 38900, icon: '☀️', description: 'Protección facial y corporal.' },
  { id: 4, name: 'Gel antibacterial 250 ml', category: 'Cuidado personal', price: 8900, icon: '🧴', description: 'Higiene de manos diaria.' },
  { id: 5, name: 'Termómetro digital', category: 'Salud', price: 19900, icon: '🌡️', description: 'Lectura rápida y precisa.' },
  { id: 6, name: 'Pañales talla M', category: 'Bebés', price: 32900, icon: '👶', description: 'Paquete x 24.' },
  { id: 7, name: 'Shampoo reparación', category: 'Cuidado personal', price: 21900, icon: '🫧', description: 'Cuidado y brillo para tu cabello.' },
  { id: 8, name: 'Suero de rehidratación', category: 'Salud', price: 5900, icon: '💧', description: 'Bebida para reponer líquidos.' },
]

const categories = ['Todos', 'Medicamentos', 'Vitaminas', 'Cuidado personal', 'Salud', 'Bebés']
const money = (value: number) => `$${value.toLocaleString('es-CO')}`

function ChatIcon() {
  return (
    <svg className="chat-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3C6.9 3 3 6.6 3 11c0 2.2 1 4.2 2.6 5.6L5 21l4.2-2.1c.9.2 1.8.3 2.8.3 5.1 0 9-3.6 9-8.1S17.1 3 12 3z" fill="currentColor" />
      <path d="M8.5 9.5c.3 2.6 2.5 4.8 5.1 5.2l1.1-1.2-1.6-.9-.7.6c-.9-.4-1.7-1.2-2.1-2.1l.6-.7-.9-1.6-1.5.7z" fill="var(--chat-fg, #fff)" />
    </svg>
  )
}

function App() {
  const [category, setCategory] = useState('Todos')
  const [search, setSearch] = useState('')

  const filtered = useMemo(() => products.filter((product) => {
    const matchesCategory = category === 'Todos' || product.category === category
    const query = search.toLowerCase().trim()
    return matchesCategory && (!query || `${product.name} ${product.category}`.toLowerCase().includes(query))
  }), [category, search])

  const formulaLink = waLink('Hola, quiero enviar mi fórmula médica para consultar disponibilidad.')

  return (
    <div className="site-shell">
      <div className="topbar">
        <div className="container topbar-inner">
          <span>📍 {CONTACT.address} · {CONTACT.barrio.split(',')[0]}</span>
          <span>Lun a sáb {HOURS[0].time} · Dom {HOURS[1].time}</span>
        </div>
      </div>

      <header className="header">
        <div className="container header-inner">
          <a className="brand" href="#inicio" aria-label="Droguería Cuidarte Pharma, inicio">
            <img className="brand-logo" src={isotipo} alt="" width="46" height="46" />
            <span><small>Droguería</small><strong>CUIDARTE <span>PHARMA</span></strong></span>
          </a>
          <div className="search-wrap">
            <span>⌕</span>
            <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="¿Qué estás buscando hoy?" aria-label="Buscar productos" />
            <button onClick={() => document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth' })}>Buscar</button>
          </div>
          <a className="header-whatsapp" href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" aria-label={`Escribir por WhatsApp al ${CONTACT.phoneDisplay}`}>
            <ChatIcon /><span><small>WhatsApp</small><b>{CONTACT.phoneDisplay}</b></span>
          </a>
        </div>
        <nav className="nav">
          <div className="container nav-inner">
            <a href="#inicio">Inicio</a>
            <a href="#catalogo">Productos</a>
            <a href="#servicios">Servicios</a>
            <a href="#nosotros">Nosotros</a>
            <a href="#contacto">Ubicación y contacto</a>
            <a className="nav-prescription" href={formulaLink} target="_blank" rel="noopener noreferrer">📄 Enviar fórmula</a>
          </div>
        </nav>
      </header>

      <main>
        <section id="inicio" className="hero-section">
          <div className="container hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">TU SALUD, NUESTRA PRIORIDAD</span>
              <h1>Todo lo que necesitas para <em>sentirte bien.</em></h1>
              <p>Medicamentos, cuidado personal, vitaminas y productos para toda la familia. Te esperamos en el barrio Maridíaz con atención cercana y orientación farmacéutica.</p>
              <div className="hero-actions">
                <a href="#catalogo" className="btn btn-accent">Ver productos</a>
                <a className="btn btn-light" href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer">Escríbenos por WhatsApp</a>
              </div>
              <div className="trust-row"><span>✓ Atención humana</span><span>✓ Orientación farmacéutica</span><span>✓ Abierto todos los días</span></div>
            </div>
            <div className="hero-art">
              <figure className="hero-photo">
                <img src={fotoFachada} alt="Fachada de Droguería Cuidarte Pharma con su aviso morado" width="730" height="710" />
              </figure>
              <img className="hero-badge" src={logo} alt="" width="150" height="150" />
              <a className="hero-address" href={mapsLink} target="_blank" rel="noopener noreferrer">
                <strong>📍 {CONTACT.address}</strong><small>{CONTACT.barrio}</small><span className="hero-address-link">Cómo llegar →</span>
              </a>
            </div>
          </div>
        </section>

        <section className="benefits" aria-label="Información rápida">
          <div className="container benefit-grid">
            <div><span>🕗</span><div><strong>Horario de atención</strong><small>Lun a sáb {HOURS[0].time}<br />Dom {HOURS[1].time}</small></div></div>
            <a href={mapsLink} target="_blank" rel="noopener noreferrer"><span>📍</span><div><strong>{CONTACT.address}</strong><small>{CONTACT.barrio}</small></div></a>
            <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer"><span>💬</span><div><strong>WhatsApp {CONTACT.phoneDisplay}</strong><small>Escríbenos o llámanos</small></div></a>
            <div><span>💳</span><div><strong>Medios de pago</strong><small>{PAYMENTS}</small></div></div>
          </div>
        </section>

        <section id="catalogo" className="section catalog-section">
          <div className="container">
            <div className="section-heading"><div><span className="eyebrow accent">NUESTROS PRODUCTOS</span><h2>Encuentra lo que necesitas</h2></div><button className="link-button" onClick={() => { setCategory('Todos'); setSearch('') }}>Ver todo</button></div>
            <div className="category-row">{categories.map((item) => <button key={item} className={category === item ? 'active' : ''} onClick={() => setCategory(item)}>{item}</button>)}</div>
            <div className="product-grid">
              {filtered.map((product) => <article className="product-card" key={product.id}>
                <div className="product-icon">{product.icon}</div>
                <span className="product-category">{product.category}</span>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <strong className="product-price">{money(product.price)}</strong>
              </article>)}
            </div>
            {filtered.length === 0 && <div className="empty-state">No encontramos productos con esa búsqueda. Prueba con otro término o pregúntanos por WhatsApp.</div>}
            <p className="catalog-note">¿No ves lo que buscas? <a href={waLink('Hola, quiero consultar la disponibilidad de un producto.')} target="_blank" rel="noopener noreferrer">Pregúntanos por WhatsApp</a> y te confirmamos disponibilidad y precio.</p>
          </div>
        </section>

        <section id="servicios" className="section services-section">
          <div className="container"><div className="section-heading centered"><div><span className="eyebrow accent">MÁS QUE UNA DROGUERÍA</span><h2>Servicios pensados para ti</h2><p>Estamos aquí para hacer más sencilla tu rutina de bienestar.</p></div></div>
            <div className="service-grid">
              <div className="service-card"><span>🩺</span><h3>Orientación farmacéutica</h3><p>Resuelve tus dudas con nuestro equipo y recibe información clara sobre tus productos.</p><a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer">Hablar con nosotros →</a></div>
              <div className="service-card featured"><span>📋</span><h3>Recepción de fórmulas</h3><p>Envíanos una foto de tu fórmula por WhatsApp y te confirmamos la disponibilidad de tus medicamentos.</p><a href={formulaLink} target="_blank" rel="noopener noreferrer">Enviar fórmula →</a></div>
              <div className="service-card"><span>📱</span><h3>Recargas y pagos</h3><p>Recargas de celular, venta de SIM card Movistar y pago de servicios en nuestro punto Practipagos.</p><a href="#contacto">Ver ubicación →</a></div>
            </div>
          </div>
        </section>

        <section id="nosotros" className="about-section">
          <div className="container about-grid">
            <div className="about-art">
              <img className="about-banner" src={bannerDrogueria} alt="" />
              <img className="about-photo" src={fotoEquipo} alt="El equipo de Cuidarte Pharma en la droguería celebrando su primer aniversario" width="835" height="663" loading="lazy" />
            </div>
            <div>
              <span className="eyebrow accent">CONÓCENOS</span>
              <h2>Una droguería cercana, moderna y humana.</h2>
              <p>En Cuidarte Pharma creemos que cuidar tu salud debe ser sencillo, claro y confiable. Te atendemos con calidez, te orientamos sobre tus productos y seguimos cuidando de ti y de tu familia. ¡Gracias por confiar en nosotros!</p>
              <div className="about-stats"><div><strong>1 año</strong><span>Cuidando de tu familia</span></div><div><strong>7 días</strong><span>A la semana</span></div><div><strong>Maridíaz</strong><span>Nuestro barrio en Pasto</span></div></div>
            </div>
          </div>
        </section>

        <section id="contacto" className="section location-section">
          <img className="location-watermark" src={marcaCorazon} alt="" aria-hidden="true" />
          <div className="container">
            <div className="section-heading"><div><span className="eyebrow">VISÍTANOS</span><h2>Ubicación y contacto</h2></div></div>
            <div className="location-grid">
              <div className="contact-list">
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <div><h3>Dirección</h3><p>{CONTACT.address}<br />{CONTACT.barrio}</p><a href={mapsLink} target="_blank" rel="noopener noreferrer">Cómo llegar →</a></div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">💬</span>
                  <div><h3>WhatsApp y teléfono</h3><p className="contact-big">{CONTACT.phoneDisplay}</p><a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer">Escribir por WhatsApp →</a><a href={`tel:${CONTACT.phoneTel}`}>Llamar →</a></div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">✉️</span>
                  <div><h3>Correo electrónico</h3><p><a className="contact-mail" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></p></div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">🕗</span>
                  <div><h3>Horarios de atención</h3>
                    <dl className="hours">{HOURS.map((h) => <div key={h.days}><dt>{h.days}</dt><dd>{h.time}</dd></div>)}</dl>
                  </div>
                </div>
              </div>
              <div className="map-frame">
                <iframe title="Mapa de ubicación de Droguería Cuidarte Pharma" src={mapsEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen></iframe>
              </div>
            </div>
            <h3 className="gallery-title">Así nos encuentras</h3>
            <div className="gallery">
              <figure><img src={fotoCalle} alt="Calle de la droguería con el aviso redondo de Cuidarte Pharma" width="888" height="900" loading="lazy" /><figcaption>Busca nuestro aviso redondo morado</figcaption></figure>
              <figure><img src={fotoEntrada} alt="Entrada de Droguería Cuidarte Pharma con su aviso y bandera" width="769" height="900" loading="lazy" /><figcaption>Nuestra entrada sobre la Calle 16A</figcaption></figure>
              <figure><img src={fotoBandera} alt="Bandera de Cuidarte Pharma con horarios y medios de pago" width="559" height="900" loading="lazy" /><figcaption>Nuestra bandera con horarios y pagos</figcaption></figure>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer"><img className="footer-watermark" src={marcaCorazon} alt="" aria-hidden="true" />
        <div className="container footer-grid">
          <div><a className="brand footer-brand" href="#inicio" aria-label="Droguería Cuidarte Pharma, inicio"><img className="brand-logo" src={isotipo} alt="" width="46" height="46" /><span><small>Droguería</small><strong>CUIDARTE <span>PHARMA</span></strong></span></a><p>Tu salud, nuestra prioridad.</p></div>
          <div><h4>Enlaces</h4><a href="#catalogo">Productos</a><a href="#servicios">Servicios</a><a href="#nosotros">Nosotros</a><a href="#contacto">Ubicación</a></div>
          <div><h4>Contáctanos</h4><p>📍 {CONTACT.address}, {CONTACT.barrio}</p><p><a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer">💬 WhatsApp {CONTACT.phoneDisplay}</a></p><p><a href={`mailto:${CONTACT.email}`}>✉️ {CONTACT.email}</a></p></div>
          <div><h4>Horarios</h4>{HOURS.map((h) => <p key={h.days}>{h.days}<br /><strong>{h.time}</strong></p>)}</div>
        </div>
        <div className="container footer-bottom"><span>© 2026 Droguería Cuidarte Pharma.</span><span>Medios de pago: {PAYMENTS}.</span></div>
      </footer>

      <a className="wa-float" href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" aria-label={`Escribir por WhatsApp al ${CONTACT.phoneDisplay}`}>
        <ChatIcon /><span>WhatsApp</span>
      </a>
    </div>
  )
}

export default App
