import { useState } from "react";
import { motion } from "framer-motion";

const DiagnosticForm = () => {
  const [form, setForm] = useState({
    especie: "",
    quantidade: "",
    asas: "",
    patologias: "",
    espaco: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Olá! Gostaria de solicitar um diagnóstico técnico.%0A%0A*Espécie:* ${form.especie}%0A*Quantidade:* ${form.quantidade}%0A*Asas:* ${form.asas}%0A*Patologias:* ${form.patologias || "Nenhuma"}%0A*Espaço disponível:* ${form.espaco} m²`;
    window.open(`https://wa.me/5500000000000?text=${message}`, "_blank");
  };

  const inputClasses =
    "w-full bg-card text-foreground rounded-lg px-4 py-3 text-sm font-body border-0 shadow-card focus:ring-2 focus:ring-primary focus:outline-none transition-shadow duration-150 placeholder:text-muted-foreground/60";

  return (
    <section id="diagnostico" className="py-24 md:py-32 px-6 bg-muted">
      <div className="container mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-12"
        >
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4 font-mono-data">Diagnóstico</p>
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-6">
            Solicite seu diagnóstico técnico
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Preencha o formulário abaixo com os dados da sua ave e do recinto. Nossa equipe analisará e retornará com um plano personalizado.
          </p>
        </motion.div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {[
            { i: 0, el: (
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Espécie da Ave</label>
                <input
                  type="text"
                  name="especie"
                  value={form.especie}
                  onChange={handleChange}
                  placeholder="Ex: Papagaio-verdadeiro"
                  className={inputClasses}
                  required
                />
              </div>
            )},
            { i: 1, el: (
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Quantidade de Aves</label>
                <input
                  type="number"
                  name="quantidade"
                  value={form.quantidade}
                  onChange={handleChange}
                  placeholder="0"
                  min="1"
                  className={`${inputClasses} font-mono-data`}
                  required
                />
              </div>
            )},
            { i: 2, el: (
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Condição das Asas</label>
                <div className="flex gap-4">
                  {["Inteiras", "Cortadas"].map((opt) => (
                    <label
                      key={opt}
                      className={`flex-1 text-center cursor-pointer rounded-lg px-4 py-3 text-sm font-medium transition-all duration-150 shadow-card ${
                        form.asas === opt
                          ? "bg-primary text-primary-foreground shadow-card-hover"
                          : "bg-card text-foreground hover:shadow-card-hover"
                      }`}
                    >
                      <input
                        type="radio"
                        name="asas"
                        value={opt}
                        checked={form.asas === opt}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      {opt}
                    </label>
                  ))}
                </div>
              </div>
            )},
            { i: 3, el: (
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Patologias Conhecidas</label>
                <textarea
                  name="patologias"
                  value={form.patologias}
                  onChange={handleChange}
                  placeholder="Descreva se a ave apresenta alguma condição de saúde relevante..."
                  rows={3}
                  className={`${inputClasses} resize-none`}
                />
              </div>
            )},
            { i: 4, el: (
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Espaço Disponível para o Recinto</label>
                <div className="relative">
                  <input
                    type="text"
                    name="espaco"
                    value={form.espaco}
                    onChange={handleChange}
                    placeholder="Ex: 2x1.5x2 ou 6"
                    className={`${inputClasses} font-mono-data pr-12`}
                    required
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-muted-foreground font-mono-data">
                    m²
                  </span>
                </div>
              </div>
            )},
          ].map(({ i, el }) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {el}
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            className="pt-4"
          >
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-semibold text-base hover:opacity-90 transition-opacity"
            >
              Solicitar Diagnóstico
            </button>
          </motion.div>
        </form>
      </div>
    </section>
  );
};

export default DiagnosticForm;
