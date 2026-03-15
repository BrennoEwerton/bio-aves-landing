import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Maria Silva",
    text: "Após a consultoria, meu papagaio apresentou uma melhora notável no comportamento. Parou de arrancar penas e está muito mais ativo.",
    bird: "Papagaio-verdadeiro",
  },
  {
    name: "Carlos Oliveira",
    text: "A equipe da Bio Aves transformou nosso criadouro. Os protocolos de enriquecimento reduziram significativamente o estresse das aves.",
    bird: "Criadouro de Calopsitas",
  },
  {
    name: "Ana Rodrigues",
    text: "Profissionalismo e embasamento técnico impressionantes. Recomendo para qualquer tutor que se preocupa com o bem-estar do seu pássaro.",
    bird: "Arara-canindé",
  },
];

const Testimonials = () => (
  <section id="clientes" className="py-24 md:py-32 px-6">
    <div className="container mx-auto max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        className="max-w-2xl mb-16"
      >
        <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4 font-mono-data">Prova Social</p>
        <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-6">
          O que nossos clientes dizem
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05, ease: [0.25, 0.1, 0.25, 1] }}
            className="bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
          >
            {/* Photo placeholder */}
            <div className="w-14 h-14 rounded-full bg-muted mb-6 flex items-center justify-center overflow-hidden">
              <svg className="w-7 h-7 text-muted-foreground/40" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <svg className="w-8 h-8 text-primary/20 mb-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z" />
            </svg>
            <p className="text-foreground leading-relaxed mb-6">"{t.text}"</p>
            <div>
              <p className="font-display font-semibold text-foreground">{t.name}</p>
              <p className="text-xs text-muted-foreground font-mono-data">{t.bird}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
