import ThemeToggle from "./ThemeToggle";
const projects = [
  {
    number: "01",
    name: "ThawBlack",
    category: "DESENVOLVIMENTO WEB",
    description:
      "Plataforma web para uma barbearia, com foco em agendamento de serviços, experiência do cliente e organização profissional.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    status: "Em desenvolvimento",
  },
  {
    number: "02",
    name: "Election Pipeline",
    category: "PYTHON · DADOS",
    description:
      "Projeto para processamento de dados eleitorais do TSE, com foco em automação, organização dos dados e testes automatizados.",
    technologies: ["Python", "Pytest", "API de dados"],
    status: "Projeto pessoal",
  },
  {
    number: "03",
    name: "Automação industrial",
    category: "TECNOLOGIA · INTEGRAÇÃO",
    description:
      "Experiência profissional no desenvolvimento de soluções e bibliotecas para integração com equipamentos e sistemas de automação.",
    technologies: ["C", "Python", "Integração de sistemas"],
    status: "Experiência profissional",
  },
];

const skills = [
  "Python",
  "C",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "SQL",
  "Git",
];

export default function Home() {
  return (
    <main>
      <header className="navbar">
        <a href="#inicio" className="brand">
          WR<span>.</span>
        </a>

        <nav className="nav-links" aria-label="Navegação principal">
          <a href="#sobre">Sobre</a>
          <a href="#habilidades">Habilidades</a>
          <a href="#projetos">Projetos</a>
          <a href="#contato">Contato</a>
        </nav>

        <a
          className="nav-cta"
          href="https://github.com/wagnerRam"
          target="_blank"
          rel="noreferrer"
        >
          Meu GitHub ↗
        </a>

        <ThemeToggle />
      </header>

      <section className="hero section-container" id="inicio">
        <div className="hero-content">
          <div className="availability">
            <span className="status-dot" />
            PORTFÓLIO DE DESENVOLVIMENTO
          </div>

          <p className="eyebrow">OLÁ, MEU NOME É WAGNER RAMOS</p>

          <h1>
            Transformando
            <br />
            ideias em <span>soluções</span>
            <br />
            com tecnologia.
          </h1>

          <p className="hero-description">
            Estudante de Análise e Desenvolvimento de Sistemas, com experiência
            em tecnologia e automação industrial e foco no desenvolvimento
            de software.
          </p>

          <div className="hero-actions">
            <a className="button-primary" href="#projetos">
              Conheça meus projetos <span>↘</span>
            </a>
            <a
              className="button-secondary"
              href="https://www.linkedin.com/in/wagnercarvalhoramos/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>
          </div>

          <div className="hero-footer">
            <span>DESENVOLVIMENTO DE SOFTWARE</span>
            <span>APRENDIZADO CONTÍNUO</span>
          </div>
        </div>

        <div className="hero-card">
          <div className="card-top">
            <span>WAGNER RAMOS</span>
            <span className="card-symbol">✳</span>
          </div>

          <div className="code-window">
            <div className="window-controls">
              <i />
              <i />
              <i />
              <span>developer.ts</span>
            </div>

            <div className="code-content">
              <p><span className="code-purple">const</span> developer = {"{"}</p>
              <p className="indent">
                name: <span className="code-green">"Wagner Ramos"</span>,
              </p>
              <p className="indent">
                focus: <span className="code-green">"Software"</span>,
              </p>
              <p className="indent">
                learning: <span className="code-green">true</span>,
              </p>
              <p className="indent">
                building: <span className="code-green">"projects"</span>
              </p>
              <p>{"}"}</p>
              <p className="code-comment">
                // Sempre evoluindo, linha por linha.
              </p>
            </div>
          </div>

          <div className="hero-card-bottom">
            <span>BASEADO EM PROJETOS REAIS</span>
            <span>01 / 03</span>
          </div>
        </div>

        <a className="scroll-indicator" href="#sobre">
          <span>ROLE PARA EXPLORAR</span>
          <span>↓</span>
        </a>
      </section>

      <section className="about section-container" id="sobre">
        <div className="section-heading">
          <p className="eyebrow">01 — SOBRE MIM</p>
          <h2>
            Tecnologia com propósito.
            <br />
            <span>Aprendizado na prática.</span>
          </h2>
        </div>

        <div className="about-content">
          <p>
            Sou estudante de Análise e Desenvolvimento de Sistemas e atuo
            profissionalmente em um ambiente ligado à tecnologia e automação
            industrial.
          </p>
          <p>
            Tenho interesse em desenvolvimento de software, integração de
            sistemas e soluções que resolvam problemas reais. Nos meus projetos
            pessoais, busco transformar o conhecimento adquirido em aplicações
            práticas e evoluir continuamente como desenvolvedor.
          </p>

          <div className="about-facts">
            <div>
              <span className="fact-number">01</span>
              <span>Projetos próprios</span>
            </div>
            <div>
              <span className="fact-number">02</span>
              <span>Experiência prática</span>
            </div>
            <div>
              <span className="fact-number">03</span>
              <span>Evolução contínua</span>
            </div>
          </div>
        </div>
      </section>

      <section className="skills section-container" id="habilidades">
        <div className="section-heading">
          <p className="eyebrow">02 — HABILIDADES</p>
          <h2>
            Ferramentas que uso
            <br />
            <span>e venho desenvolvendo.</span>
          </h2>
          <p className="section-description">
            Tecnologias estudadas ou utilizadas em projetos pessoais e
            atividades profissionais. Meu nível varia conforme a ferramenta.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-item" key={skill}>
              <span className="skill-index">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span>{skill}</span>
              <span className="skill-arrow">↗</span>
            </div>
          ))}
        </div>
      </section>

      <section className="projects section-container" id="projetos">
        <div className="projects-heading">
          <div className="section-heading">
            <p className="eyebrow">03 — PROJETOS SELECIONADOS</p>
            <h2>
              Ideias que estão
              <br />
              <span>saindo do papel.</span>
            </h2>
          </div>
          <a
            className="text-link"
            href="https://github.com/wagnerRam"
            target="_blank"
            rel="noreferrer"
          >
            Ver GitHub completo ↗
          </a>
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-number">{project.number}</div>

              <div className="project-main">
                <p className="project-category">{project.category}</p>
                <h3>{project.name}</h3>
                <p className="project-description">{project.description}</p>

                <div className="technology-list">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
              </div>

              <div className="project-side">
                <span className="project-status">{project.status}</span>
                <span className="project-arrow">↗</span>
              </div>
            </article>
          ))}
        </div>

        <p className="projects-note">
          Os projetos são apresentados de acordo com seu estágio atual de
          desenvolvimento.
        </p>
      </section>

      <section className="contact section-container" id="contato">
        <p className="eyebrow">04 — CONTATO</p>
        <h2>
          Vamos construir
          <br />
          algo <span>interessante?</span>
        </h2>
        <p className="contact-description">
          Conheça meus projetos, acompanhe minha evolução e entre em contato
          pelos meus perfis profissionais.
        </p>

        <div className="hero-actions">
          <a
            className="button-primary"
            href="https://www.linkedin.com/in/wagnercarvalhoramos/"
            target="_blank"
            rel="noreferrer"
          >
            Conectar no LinkedIn ↗
          </a>
          <a
            className="button-secondary"
            href="https://github.com/wagnerRam"
            target="_blank"
            rel="noreferrer"
          >
            Acessar GitHub ↗
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <a href="#inicio" className="brand">
          WR<span>.</span>
        </a>
        <p>Desenvolvido por Wagner Ramos.</p>
        <a href="#inicio">Voltar ao topo ↑</a>
      </footer>
    </main>
  );
}
