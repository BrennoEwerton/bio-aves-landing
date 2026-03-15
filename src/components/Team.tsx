import { motion } from "framer-motion";

const team = [
  {
    name: "Nome do Empresário",
    role: "CEO & FUNDADOR",
    bio: "Biólogo especialista em comportamento animal com mais de 10 anos de experiência em manejo de aves exóticas.",
  },
  {
    name: "Nome do Empresário",
    role: "DIRETORA TÉCNICA",
    bio: "Médica veterinária com mestrado em bem-estar animal e certificação em enriquecimento ambiental.",
  },
  {
    name: "Nome do Empresário",
    role: "CONSULTOR SÊNIOR",
    bio: "Zootecnista com foco em nutrição e manejo ambiental de psitacídeos em cativeiro.",
  },
];

const Team = () => (
  <section id="equipe" className="py-24 md:py-32 px-6 bg-muted">
    <div className="container mx-auto max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        className="max-w-2xl mb-16"
      >
        <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4 font-mono-data">Liderança</p>
        <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-6">
          Quem está por trás da Bio Aves
        </h2>
        <p className="text-muted-foreground leading-relaxed text-lg">
          Profissionais com formação acadêmica sólida e experiência prática em campo.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {team.map((member, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05, ease: [0.25, 0.1, 0.25, 1] }}
            className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
          >
            {/* Photo placeholder */}
            <div className="aspect-square bg-muted relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-16 h-16 text-muted-foreground/30" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div className="absolute inset-0 outline outline-1 outline-foreground/10 -outline-offset-1 rounded-none" />
            </div>
            <div className="p-6">
              <h3 className="font-display font-semibold text-foreground text-lg mb-1">{member.name}</h3>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3 font-mono-data">{member.role}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Team;
