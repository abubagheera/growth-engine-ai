const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-12">
      <div className="container flex flex-col items-center justify-between gap-6 sm:flex-row">
        <a href="#" className="font-display text-lg font-bold tracking-tight">
          <span className="text-gradient">Frontier Ai</span>
        </a>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Frontier Ai — All rights reserved.
        </p>
        <div className="flex gap-6">
          <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Privacy
          </a>
          <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
