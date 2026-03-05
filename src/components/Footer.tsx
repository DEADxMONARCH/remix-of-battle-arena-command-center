const Footer = () => {
  return (
    <footer className="flex items-center justify-between px-6 py-2.5 border-t border-border/50 text-[10px] text-muted-foreground">
      <span>© 2026 BattleOfCoder</span>
      <div className="flex items-center gap-4">
        <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
        <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
        <a href="#" className="hover:text-foreground transition-colors">Contact</a>
      </div>
      <div className="flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
        <span>System Operational</span>
      </div>
    </footer>
  );
};

export default Footer;
