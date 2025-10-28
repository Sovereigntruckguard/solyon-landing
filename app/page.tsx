// app/page.tsx
import Image from "next/image";
import "./globals.css";

function Card({ title, desc }: { title: string; desc: React.ReactNode }) {
  return (
    <article className="card">
      <h3 className="card-title">{title}</h3>
      <div className="card-desc">{desc}</div>
    </article>
  );
}

export default function Home() {
  return (
    <main className="page">
      {/* NAV */}
      <header className="nav">
        <div className="brand">
          <Image src="/solyon-logo.png" alt="SOLYON" width={28} height={28} className="logo-img" />
          <span className="brand-text">SOLYON</span>
        </div>
        <a className="cta ghost" href="#ecosistema">Explorar ecosistema</a>
      </header>

      {/* HERO con LOGO CENTRADO */}
      <section className="hero">
        <div className="hero-logo-wrap">
          <Image
            src="/solyon-logo.png"
            alt="Logo SOLYON"
            width={220}
            height={220}
            priority
            className="hero-logo"
          />
        </div>
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

      {/* IDENTIDAD */}
      <section className="section identity">
        <h2 className="h2">Identidad</h2>
        <p className="p">
          SOLYON Technologies integra <b>IA cognitiva</b>, <b>orquestación autónoma</b> y <b>transformación humana</b>.
          Diseñamos tecnologías con alma, precisión y estética de lujo.
        </p>
      </section>

      {/* ECOSISTEMA */}
      <section id="ecosistema" className="section grid">
        <h2 className="h2">Ecosistema</h2>
        <div className="cards">
          <Card
            title="Arcanum AI"
            desc={
              <>
                <p>Motor cognitivo con <b>memoria fractal</b> y fórmula anti-alucinación para respuestas fiables.</p>
                <ul className="impact">
                  <li><b>Impacto social:</b> acceso a IA confiable para pymes latinas; reducción de sesgos y errores críticos.</li>
                  <li><b>Beneficio:</b> decisiones más seguras en salud, educación y finanzas.</li>
                </ul>
              </>
            }
          />
          <Card
            title="Nexus"
            desc={
              <>
                <p>Orquestador de agentes que <b>automatiza flujos</b>, tareas y datos en tiempo real.</p>
                <ul className="impact">
                  <li><b>Impacto social:</b> productividad para equipos pequeños; menos tareas repetitivas, más tiempo humano.</li>
                  <li><b>Beneficio:</b> competitividad de emprendimientos y empleo de calidad.</li>
                </ul>
              </>
            }
          />
          <Card
            title="Sovereign TruckGuard / TruckBoss"
            desc={
              <>
                <p>Insurtech de lujo con cotización precisa y educación financiera para camioneros.</p>
                <ul className="impact">
                  <li><b>Impacto social:</b> seguridad vial y <b>inclusión financiera</b> del camionero latino en EE. UU.</li>
                  <li><b>Beneficio:</b> pólizas justas, menos fraudes, operación más segura.</li>
                </ul>
              </>
            }
          />
          <Card
            title="EL-VIA DOT Express"
            desc={
              <>
                <p>Plataforma <b>bilingüe</b> para cumplimiento DOT y aprendizaje acelerado.</p>
                <ul className="impact">
                  <li><b>Impacto social:</b> movilidad laboral, mejores ingresos y reducción de sanciones por desconocimiento.</li>
                  <li><b>Beneficio:</b> formalización de operadores y familias más estables.</li>
                </ul>
              </>
            }
          />
          <Card
            title="Vita & Coevolution"
            desc={
              <>
                <p>Programa de <b>transformación humana</b> y bienestar cognitivo (hábitos, adicciones, foco).</p>
                <ul className="impact">
                  <li><b>Impacto social:</b> salud mental accesible; resiliencia y propósito en comunidades vulnerables.</li>
                  <li><b>Beneficio:</b> vidas más estables, mejor desempeño y reducción de violencia.</li>
                </ul>
              </>
            }
          />
          <Card
            title="Foundation"
            desc={
              <>
                <p>Fundación y <b>Escuela de Pensamiento</b> para becas, talleres y transferencia de conocimiento.</p>
                <ul className="impact">
                  <li><b>Impacto social:</b> educación de alta calidad en barrios y rutas de empleabilidad.</li>
                  <li><b>Beneficio:</b> movilidad social y tejido comunitario más fuerte.</li>
                </ul>
              </>
            }
          />
        </div>
      </section>

      {/* CONTACTO */}
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
