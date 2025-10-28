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
        <nav style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <a className="cta ghost" href="https://arcanum.sovereigntruckguard.com">Arcanum</a>
          <a className="cta ghost" href="#ecosistema">Explorar ecosistema</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-logo-wrap">
          <Image src="/solyon-logo.png" alt="Logo SOLYON" width={220} height={220} priority className="hero-logo" />
        </div>
        <h1 className="title"><span className="rg">Luxury from Consciousness</span></h1>
        <p className="subtitle">
          Innovación, inteligencia y propósito humano. Ecosistema cognitivo soberano desde Colombia para el mundo.
        </p>
        <div className="actions">
          <a className="cta solid" href="#contacto">Contacto</a>
          <a className="cta ghost" href="#ecosistema">Ver áreas</a>
        </div>
      </section>

      {/* LOGOS DEL ECOSISTEMA */}
      <section id="logos-ecosistema" className="ecosistema">
        <h2 className="ecosistema__title">Ecosistema SOLYON</h2>

        <div className="ecosistema__grid">
          <article className="ecosistema__item">
            <div className="ecosistema__logoWrap">
              <Image
                src="/solyon-arcanum.png"
                alt="SOLYON Arcanum — Inteligencia central"
                width={220}
                height={220}
                priority
                className="ecosistema__img"
              />
            </div>
            <h3 className="ecosistema__name">SOLYON ARCANUM</h3>
            <p className="ecosistema__desc">Inteligencia central</p>
          </article>

          <article className="ecosistema__item">
            <div className="ecosistema__logoWrap">
              <Image
                src="/solyon-nexus.png"
                alt="SOLYON Nexus — Sistema nervioso"
                width={220}
                height={220}
                className="ecosistema__img"
              />
            </div>
            <h3 className="ecosistema__name">SOLYON NEXUS</h3>
            <p className="ecosistema__desc">Sistema nervioso</p>
          </article>

          <article className="ecosistema__item">
            <div className="ecosistema__logoWrap">
              <Image
                src="/solyon-vita.png"
                alt="Vita — Transformación humana"
                width={220}
                height={220}
                className="ecosistema__img"
              />
            </div>
            <h3 className="ecosistema__name">VITA</h3>
            <p className="ecosistema__desc">Transformación humana</p>
          </article>

          <article className="ecosistema__item">
            <div className="ecosistema__logoWrap">
              <Image
                src="/solyon-foundation.png"
                alt="SOLYON Foundation — Fundación y Escuela de Pensamiento"
                width={220}
                height={220}
                className="ecosistema__img"
              />
            </div>
            <h3 className="ecosistema__name">SOLYON FOUNDATION</h3>
            <p className="ecosistema__desc">Fundación · Escuela de Pensamiento</p>
          </article>

          <article className="ecosistema__item">
            <div className="ecosistema__logoWrap">
              <Image
                src="/el-via.png"
                alt="EL-VÍA — Camino humano"
                width={220}
                height={220}
                className="ecosistema__img"
              />
            </div>
            <h3 className="ecosistema__name">EL-VÍA</h3>
            <p className="ecosistema__desc">Camino humano</p>
          </article>
        </div>
      </section>

      {/* IDENTIDAD / MISIÓN / VISIÓN / VALORES */}
      <section className="section identity" id="identidad">
        <h2 className="h2">Identidad</h2>
        <p className="p">
          SOLYON Technologies nace como un <b>ecosistema cognitivo</b> que une la inteligencia artificial con la conciencia humana.
          Nuestra esencia está en convertir el conocimiento en evolución y la tecnología en una extensión del alma.
        </p>

        <div style={{marginTop:"24px",display:"grid",gap:"18px"}}>
          <div>
            <h3 className="h2" style={{fontSize:"20px",marginBottom:"6px"}}>Misión</h3>
            <p className="p">
              Desarrollar tecnologías soberanas que impulsen la evolución humana, social y empresarial,
              integrando <b>IA cognitiva</b>, <b>educación transformadora</b> y <b>propósito consciente</b> para crear impacto real y duradero.
            </p>
          </div>
          <div>
            <h3 className="h2" style={{fontSize:"20px",marginBottom:"6px"}}>Visión</h3>
            <p className="p">
              Convertirnos en el referente global de innovación con propósito, liderando una nueva era donde la
              <b>tecnología tenga alma</b> y la conciencia se convierta en el motor de la inteligencia artificial.
              En 2030, seremos el ecosistema latinoamericano más influyente en IA humana y transformación cognitiva.
            </p>
          </div>
          <div>
            <h3 className="h2" style={{fontSize:"20px",marginBottom:"6px"}}>Valores</h3>
            <ul className="impact">
              <li><b>Soberanía:</b> independencia tecnológica y libertad intelectual.</li>
              <li><b>Conciencia:</b> decisiones guiadas por propósito, no por reacción.</li>
              <li><b>Innovación con alma:</b> cada avance debe elevar al ser humano.</li>
              <li><b>Excelencia:</b> precisión, estética y profundidad en cada creación.</li>
              <li><b>Impacto social:</b> tecnología que genera oportunidades, educación y bienestar real.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ECOSISTEMA (tarjetas) */}
      <section id="ecosistema" className="section grid">
        <h2 className="h2">Ecosistema</h2>
        <div className="cards">
          <Card
            title="Arcanum AI"
            desc={
              <>
                <p>Motor cognitivo con <b>memoria fractal</b> y fórmula <b>anti-alucinación</b> para respuestas confiables y auditables.</p>
                <ul className="impact">
                  <li><b>Impacto social:</b> acceso a IA ética y transparente para pymes y comunidades educativas.</li>
                  <li><b>Beneficio:</b> decisiones más seguras en sectores sensibles.</li>
                </ul>
                <div className="actions" style={{justifyContent:"flex-start"}}>
                  <a className="cta ghost" href="https://arcanum.sovereigntruckguard.com">Entrar a Arcanum →</a>
                </div>
              </>
            }
          />
          <Card
            title="Nexus"
            desc={
              <>
                <p>Orquestador de agentes que <b>automatiza flujos</b>, conecta áreas y reduce fricción operativa.</p>
                <ul className="impact">
                  <li><b>Impacto social:</b> más productividad y menos agotamiento en pequeñas empresas.</li>
                  <li><b>Beneficio:</b> organizaciones más humanas, eficientes y sostenibles.</li>
                </ul>
              </>
            }
          />
          <Card
            title="Sovereign TruckGuard / TruckBoss"
            desc={
              <>
                <p>Insurtech de lujo con cotización precisa y <b>educación financiera</b> para el camionero latino.</p>
                <ul className="impact">
                  <li><b>Impacto social:</b> inclusión, seguridad vial y acceso justo a servicios financieros.</li>
                  <li><b>Beneficio:</b> estabilidad familiar y reducción de accidentes.</li>
                </ul>
              </>
            }
          />
          <Card
            title="EL-VIA DOT Express"
            desc={
              <>
                <p>Plataforma <b>bilingüe</b> para cumplimiento DOT y aprendizaje acelerado con IA.</p>
                <ul className="impact">
                  <li><b>Impacto social:</b> más empleabilidad y dignificación del trabajo del conductor.</li>
                  <li><b>Beneficio:</b> movilidad social y reducción de barreras idiomáticas.</li>
                </ul>
              </>
            }
          />
          <Card
            title="Vita & Coevolution"
            desc={
              <>
                <p>Programa de <b>transformación humana</b> y bienestar cognitivo basado en neuroplasticidad y hábitos conscientes.</p>
                <ul className="impact">
                  <li><b>Impacto social:</b> salud mental accesible y prevención de adicciones.</li>
                  <li><b>Beneficio:</b> personas más equilibradas y productivas.</li>
                </ul>
              </>
            }
          />
          <Card
            title="Foundation"
            desc={
              <>
                <p>Fundación y <b>Escuela de Pensamiento</b> para formación, becas y proyectos comunitarios.</p>
                <ul className="impact">
                  <li><b>Impacto social:</b> educación gratuita y desarrollo de talento en comunidades vulnerables.</li>
                  <li><b>Beneficio:</b> equidad y empoderamiento social.</li>
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
