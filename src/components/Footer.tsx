const Footer = () => (
  <footer className="py-12 px-6 border-t border-border">
    <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-3">
        <div className="w-[80px] h-[28px] rounded bg-muted flex items-center justify-center">
          <span className="text-[10px] text-muted-foreground font-mono-data">LOGO</span>
        </div>
        <span className="font-display text-sm font-semibold text-foreground">Bio Aves</span>
      </div>
      <div className="flex flex-col items-center md:items-end gap-1 text-sm text-muted-foreground">
        <p>contato@bioaves.com.br</p>
        <p>CNPJ: 00.000.000/0001-00</p>
        <p>© {new Date().getFullYear()} Bio Aves. Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
