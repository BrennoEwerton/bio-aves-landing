import { motion } from "framer-motion";

const Header = () => (
  <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md">
    <div className="container mx-auto flex items-center justify-between py-4 px-6">
      {/* Logo placeholder */}
      <div className="flex items-center gap-3">
        <div className="w-[120px] h-[40px] rounded-lg bg-muted flex items-center justify-center border border-border">
          <span className="text-xs text-muted-foreground font-mono-data">LOGO</span>
        </div>
        <span className="font-display text-lg font-semibold text-foreground">Bio Aves</span>
      </div>
      <nav className="hidden md:flex items-center gap-8">
        <a href="#enriquecimento" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Enriquecimento</a>
        <a href="#equipe" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Equipe</a>
        <a href="#clientes" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Clientes</a>
        <a href="#diagnostico" className="text-sm bg-primary text-primary-foreground px-5 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity">
          Solicitar Diagnóstico
        </a>
      </nav>
    </div>
  </header>
);

export default Header;
