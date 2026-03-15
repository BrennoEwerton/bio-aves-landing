const Footer = () => (
  <footer className="py-12 px-6 border-t border-border">
    <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <div className="w-[80px] h-[28px] rounded bg-muted flex items-center justify-center">
          <span className="text-[10px] text-muted-foreground font-mono-data">LOGO</span>
        </div>
        <span className="font-display text-sm font-semibold text-foreground">Bio Aves</span>
      </div>
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Bio Aves. Todos os direitos reservados.
      </p>
    </div>
  </footer>
);

export default Footer;
