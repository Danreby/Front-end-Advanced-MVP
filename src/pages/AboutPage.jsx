import React, { useMemo } from "react";
import { motion } from "framer-motion";
import RevealOnScroll from "../components/RevealOnScroll";

export default function AboutPage({ language = "pt" }) {
  const texts = useMemo(
    () => ({
      pt: {
        title: "Sobre",
        intro:
          "Este projeto acadêmico foi desenvolvido para a entrega do MVP da disciplina de Front-End Avançado na PUC-RIO. Trata-se de um trabalho de curso (MVP) e não de uma floricultura comercial real — o objetivo é demonstrar front-end, componentes e integração visual.",
        story:
          "A ideia nasceu como um exercício para organizar, divulgar e apresentar um catálogo de uma floricultura fictícia, sem a parte back-end. O projeto baseia-se na experiência do desenvolvedor em criar interfaces responsivas e componentes reutilizáveis.",
        techTitle: "Front-End",
        techFront: [
          "React para a interface do usuário",
          "Tailwind CSS para estilização",
          "Framer Motion para animações",
        ],
        reposTitle: "Repositório",
        repoUI: "Interface do projeto (GitHub)",
        repoURL: "https://github.com/Danreby/Front-end-Advanced-MVP",
        author: "Criado por Bernardo Santos Rolim",
        portfolioText: "Acesse o portfólio e entre em contato",
        portfolioURL: "https://danreby.github.io/danreby-portifolio/",
      },
      en: {
        title: "About",
        intro:
          "This academic project was developed as the MVP delivery for the Advanced Front-End course at PUC-RIO. It's a course assignment (MVP), not a real commercial florist — the goal is to showcase front-end, components and visual integration.",
        story:
          "The idea started as an exercise to organize, present and showcase a catalog for a fictitious flower shop without a back-end. The project is based on the developer's experience building responsive interfaces and reusable components.",
        techTitle: "Front-End",
        techFront: [
          "React for the user interface",
          "Tailwind CSS for styling",
          "Framer Motion for animations",
        ],
        reposTitle: "Repository",
        repoUI: "Project interface (GitHub)",
        repoURL: "https://github.com/Danreby/Front-end-Advanced-MVP",
        author: "Built by Bernardo Santos Rolim",
        portfolioText: "Visit the portfolio & contact",
        portfolioURL: "https://danreby.github.io/danreby-portifolio/",
      },
    }),
    []
  );

  const t = texts[language] || texts.pt;

  const cardVariants = {
    hidden: { opacity: 0, y: 8 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
  };

  return (
    <section id="about" className="py-12 px-6 max-w-6xl mx-auto">
      <RevealOnScroll>
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {t.title}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <motion.article
            className="md:col-span-2 rounded-2xl p-6 bg-white/5 border-gray-200 shadow-lg"
            variants={cardVariants}
            initial="hidden"
            animate="show"
            role="article"
            aria-labelledby="about-title"
          >
            <p className="text-base md:text-lg leading-relaxed text-gray-800">
              {t.intro}
            </p>

            <p className="mt-4 text-base md:text-lg leading-relaxed text-gray-800">
              {t.story}
            </p>

            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-3">{t.techTitle}</h3>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {t.techFront &&
                  t.techFront.map((item, i) => (
                    <li
                      key={i}
                      className="inline-flex items-center gap-2 text-sm md:text-base leading-snug bg-gray-100px-3 py-2 rounded-lg border border-gray-200"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 flex-shrink-0"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-900">{item}</span>
                    </li>
                  ))}
              </ul>
            </div>
          </motion.article>

          <motion.aside
            className="rounded-2xl p-6 bg-white/5 border border-gray-200 shadow-md flex flex-col gap-4 justify-between"
            variants={cardVariants}
            initial="hidden"
            animate="show"
            aria-label="Author and links"
          >
            <div>
              <p className="text-sm md:text-base font-medium text-gray-700">
                {t.author}
              </p>

              <div className="mt-4 space-y-2">
                <a
                  href={t.repoURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm md:text-base font-medium hover:underline"
                  aria-label={t.repoUI}
                >
                  {t.repoUI}
                </a>

                <a
                  href={t.portfolioURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm md:text-base text-blue-600 hover:underline"
                >
                  {t.portfolioText}
                </a>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-200 text-xs text-gray-6000">
              <p>PUC-RIO — Front-End Avançado · MVP</p>
            </div>
          </motion.aside>
        </div>
      </RevealOnScroll>
    </section>
  );
}
