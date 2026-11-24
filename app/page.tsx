import Image from "next/image";
import ThemeToggle from "./ThemeToggle";
import ProjectPreview from "./ProjectPreview";

interface Project {
  number: string;
  name: string;
  category: string;
  description: string;
  technologies: string[];
  status: string;
  previewUrl?: string;
}

const projects: Project[] = [
  {
    number: "01",
    name: "ThawBlack — Site e Agendamento",
    category: "WEB · SITE E AGENDAMENTO",
    description:
      "Site de uma barbearia com apresentação dos serviços e fluxo de agendamento para os clientes.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase"],
    status: "Em desenvolvimento",
  },
  {
    number: "02",
    name: "ThawBlack — Dashboard",
    category: "WEB · PAINEL ADMINISTRATIVO",
    description:
      "Painel administrativo da barbearia, pensado para reunir a rotina de gestão em um só lugar, com acompanhamento de agendamentos, serviços, profissionais e informações financeiras.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    status: "Em desenvolvimento",
  },
  {
    number: "03",
    name: "Odonto Prime",
    category: "WEB · LANDING PAGE",
    description:
      "Site demonstrativo de uma clínica odontológica, com apresentação dos tratamentos, informações da clínica e canais de contato para novos pacientes.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    status: "Concluído",
    previewUrl: "https://odonto-prime.wagner19ramos.workers.dev",
  },
  {
    number: "04",
    name: "Election Pipeline",
    category: "PYTHON · DADOS",
    description:
      "Projeto em Python para organizar e processar dados eleitorais do TSE, com etapas automatizadas e testes para conferir o processamento.",
    technologies: ["Python", "Pytest", "API de dados"],
    status: "Projeto pessoal",
  },
  {
    number: "05",
    name: "Automação industrial",
    category: "SOFTWARE · AUTOMAÇÃO E INTEGRAÇÃO",
    description:
      "Desenvolvimento de soluções para comunicação com equipamentos industriais, incluindo bibliotecas em C e integração com sistemas de automação.",
    technologies: ["C", "Python", "Integração de sistemas"],
    status: "Experiência profissional",
  },
];

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Python",
  "C",
  "SQL",
  "Git",
  "Mobile",
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
            reais.
          </h1>

          <p className="hero-description">
            Desenvolvedor de Software com foco na criação de soluções digitais para
            Web, Mobile e sistemas, unindo tecnologia, funcionalidade e
            experiência do usuário.
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
              <p>
                <span className="code-purple">const</span> developer = {"{"}
              </p>
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
            <span>PROJETOS E EXPERIMENTAÇÃO</span>
            <span>01 / 04</span>
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
            Ideias não foram feitas para ficar no papel.
            <br />
            <span>Foram feitas para acontecer.</span>
          </h2>
        </div>

        <div className="about-layout">
          <div className="about-photo">
            <Image
              src="/images/perfil.png"
              alt="Wagner Ramos — Desenvolvedor de Software"
              width={420}
              height={500}
              priority
              sizes="(max-width: 768px) 100vw, 420px"
            />
          </div>

          <div className="about-content">
            <p>
              Sou desenvolvedor de software e acredito que a tecnologia tem valor
              quando resolve problemas e abre novas possibilidades.
            </p>

            <p>
              Meu foco é transformar necessidades em soluções digitais, desenvolvendo
              experiências para Web, Mobile e sistemas. Em cada projeto, valorizo
              funcionalidade, organização e uma boa experiência para quem utiliza.
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
        </div>
      </section>

      <section className="skills section-container" id="habilidades">
        <div className="section-heading">
          <p className="eyebrow">02 — HABILIDADES</p>
          <h2>
            Meu ambiente
            <br />
            <span>de desenvolvimento.</span>
          </h2>
          <p className="section-description">
            Estas são as tecnologias e áreas que fazem parte da minha atuação, combinando
            desenvolvimento Web, Mobile, programação, dados e sistemas.
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
              Onde ideias
              <br />
              <span>encontram tecnologia.</span>
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
                {project.previewUrl ? (
                  <ProjectPreview
                    name={project.name}
                    url={project.previewUrl}
                    image="/images/odonto-prime-preview.png"
                  />
                ) : (
                  <span className="project-arrow">↗</span>
                )}
              </div>
            </article>
          ))}
        </div>

        <p className="projects-note">
          Os projetos demonstram diferentes frentes de desenvolvimento e aplicação
          prática de tecnologia.
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
          Desenvolvimento Web, Mobile e sistemas: conheça meus projetos, acompanhe
          minha evolução e entre em contato pelos meus perfis profissionais.
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
