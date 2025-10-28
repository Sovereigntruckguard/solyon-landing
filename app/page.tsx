import "./globals.css";

function Card({ title, desc }: { title: string; desc: string }) {
  return (
    <article className="card">
      <h3 className="card-title">{title}</h3>
      <p className="card-desc">{desc}</p>
    </article>
  );
}

export default function Home() {
  return (
    <main className="page">
      <header className="nav">
        <div className="brand">
          <span className="logo" aria-hidden>◇</span>
          <span className="brand-text">SOLYON</span>
        </div>
        <a className="cta ghost" href="#ecosistema">Explorar ecosistema</a>
      </header>

      <section className="hero">
        <h1 className="title">
          <span className="rg">Luxury from Consciousness</span>
        </h1>
        <p className="subtitle">
          Innovación, inteligencia y propósito humano. Ecosistema cognitivo soberano desde Colombia para el mundo.
        </p>
        <div className="actions">
          <a className="cta solid" href="#contacto">Contacto</a>
          <a className="cta ghost" href="#ecosistema">Ver áreas</a>
        </div>
      </section>

      <section className="section identity">
        <h2 className="h2">Identidad</h2>
        <p className="p">
          SOLYON Technologies integra <b>IA cognitiva</b>, <b>orquestación autónoma</b> y <b>transformación humana</b>.
          Diseñamos tecnologías con alma, precisión y estética de lujo.
        </p>
      </section>

      <section id="ecosistema" className="section grid">
        <h2 className="h2">Ecosistema</h2>
        <div className="cards">
          <Card title="Arcanum AI" desc="Inteligencia cognitiva con memoria fractal y anti-alucinación." />
          <Card title="Nexus" desc="Orquestador de agentes y flujos para operaciones autónomas." />
          <Card title="Sovereign TruckGuard / TruckBoss" desc="Insurtech de lujo para camioneros latinos." />
          <Card title="EL-VIA DOT Express" desc="Educación bilingüe y cumplimiento DOT." />
          <Card title="Vita & Coevolution" desc="Transformación humana y neuro-rendimiento." />
          <Card title="Foundation" desc="Impacto social y escuela de pensamiento." />
        </div>
      </section>

      <section id="contacto" className="section contact">
        <h2 className="h2">Contacto</h2>
        <div className="contact-box">
          <div>
            <div className="label">Correo</div>
            <a href="mailto:info@sovereigntruckguard.com" className="link">info@sovereigntruckguard.com</a><br/>
            <a href="mailto:sergio@sovereigntruckguard.com" className="link">sergio@sovereigntruckguard.com</a><br/>
            <a href="mailto:elizabeth@sovereigntruckguard.com" className="link">elizabeth@sovereigntruckguard.com</a>
          </div>
          <div className="note">© 2025 SOLYON Technologies · Designed for evolution.</div>
        </div>
      </section>
    </main>
  );
}
