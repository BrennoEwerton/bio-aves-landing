import { motion } from "framer-motion";

const pillars = [
  {
    title: "Alimentar",
    description: "Estimulação por meio de estratégias de forrageamento que replicam o comportamento natural de busca por alimento.",
    icon: (
      <svg className="w-8 h-8 stroke-primary" fill="none" strokeWidth="1" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-4-4 1.41-1.41L11 14.17l6.59-6.59L19 9l-8 8z" />
      </svg>
    ),
  },
  {
    title: "Sensorial",
    description: "Estímulos visuais, auditivos e olfativos que ampliam a percepção ambiental e reduzem estereotipias.",
    icon: (
      <svg className="w-8 h-8 stroke-primary" fill="none" strokeWidth="1" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    title: "Cognitivo",
    description: "Desafios que promovem raciocínio e resolução de problemas, combatendo o tédio e a apatia.",
    icon: (
      <svg className="w-8 h-8 stroke-primary" fill="none" strokeWidth="1" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Físico",
    description: "Elementos estruturais que incentivam voo, escalada e exercício, fundamentais para a saúde musculoesquelética.",
    icon: (
      <svg className="w-8 h-8 stroke-primary" fill="none" strokeWidth="1" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Social",
    description: "Manejo de interações intra e interespecíficas para promover comportamentos sociais saudáveis.",
    icon: (
      <svg className="w-8 h-8 stroke-primary" fill="none" strokeWidth="1" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

const Enrichment = () => (
  <section id="enriquecimento" className="py-24 md:py-32 px-6">
    <div className="container mx-auto max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        className="max-w-2xl mb-16"
      >
        <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4 font-mono-data">Metodologia</p>
        <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-6">
          O que é Enriquecimento Ambiental?
        </h2>
        <p className="text-muted-foreground leading-relaxed text-lg">
          É a aplicação científica de estímulos no ambiente cativo para promover comportamentos naturais, reduzir estresse e aumentar a qualidade de vida das aves. Resultados incluem melhoria de até 40% nos níveis de cortisol.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {pillars.map((pillar, i) => (
          <motion.div
            key={pillar.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05, ease: [0.25, 0.1, 0.25, 1] }}
            className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
          >
            <div className="mb-4">{pillar.icon}</div>
            <h3 className="font-display font-semibold text-foreground mb-2">{pillar.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{pillar.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Enrichment;
