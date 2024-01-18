import projecto3TT from "../../images/projecto3_patriaapatria.png";
import projecto1TT from "../../images/projecto1_aprender.png";
import projecto0TT from "../../images/projecto0_aficiones.png";
import proyectoFinal from "../../images/SpotifyApp.png";
import proyecto4TT from "../../images/aroundus.png";
export default function Portfolio() {
  const projects = [
    {
      title: "Spotify App",
      category: "Web Development",
      imageSrc: proyectoFinal,
      githubRepo: "https://github.com/snag2003/music-SpotifyAPI-frontend",
    },
    {
      title: "Around Us App",
      category: "Web Development",
      imageSrc: proyecto4TT,
      githubRepo: "https://github.com/snag2003/web_project_api_full",
    },
    {
      title: "De patria a patria",
      category: "Web Development",
      imageSrc: projecto3TT,
      githubRepo: "https://github.com/snag2003/web_project_3_esp",
      githubPages: "https://snag2003.github.io/web_project_3_esp/",
    },
    {
      title: "Aprender a Aprender",
      category: "Web Development",
      imageSrc: projecto1TT,
      githubRepo: "https://github.com/snag2003/web_project_1_es",
      githubPages: "https://snag2003.github.io/web_project_1_es/",
    },
    {
      title: "Stephany y sus Aficiones",
      category: "Web Development",
      imageSrc: projecto0TT,
      githubRepo: "https://github.com/snag2003/web_project_0_es",
      githubPages: "https://snag2003.github.io/web_project_0_es/",
    },
  ];

  return (
    <article className="portfolio" data-page="portfolio">
      <header>
        <h2 className="resume__title">Portfolio</h2>
      </header>

      <section className="projects">
        <ul className="project-list">
          {projects.map((project, index) => (
            <li
              key={index}
              className="project-item active"
              data-filter-item
              data-category={project.category}
            >
              <figure className="project-img">
                <img
                  src={project.imageSrc}
                  alt={project.title}
                  loading="lazy"
                />
              </figure>

              <h3 className="project-title">{project.title}</h3>

              <p className="project-category">{project.category}</p>

              <div className="project-buttons">
                <a
                  href={project.githubRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="button">GitHub Repo</button>
                </a>

                {/* Conditionally render the GitHub Pages button */}
                {project.githubPages && (
                  <a
                    href={project.githubPages}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="button">GitHub Pages</button>
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
