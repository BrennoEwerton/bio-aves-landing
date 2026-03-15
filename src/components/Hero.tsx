import { motion } from "framer-motion";

const Hero = () => (
  <section className="min-h-screen flex items-center justify-center pt-20 px-6">
    <div className="container mx-auto max-w-4xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <p className="text-sm uppercase tracking-widest text-muted-foreground mb-6 font-mono-data">
          Consultoria em enriquecimento ambiental para aves em cativeiro
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-semibold text-foreground leading-[1.1] mb-8">
          <span className="text-primary">Despertando</span> o natural.
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
          Ambientes que estimulam natureza no comportamento.
        </p>
        <a
          href="#diagnostico"
          className="inline-flex items-center bg-primary text-primary-foreground px-8 py-4 rounded-xl text-base font-semibold hover:opacity-90 transition-opacity"
        >
          Solicitar Diagnóstico
          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </motion.div>
    </div>
  </section>
);

export default Hero;
