import { Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-3 border-b border-border/50">
      <Link to="/" className="flex items-center gap-2.5">
        <div className="w-9 h-9 rounded-lg bg-primary/20 glow-border flex items-center justify-center">
          <Zap className="w-5 h-5 text-accent" />
        </div>
        <span className="text-lg font-bold tracking-tight text-foreground">BattleOfCoder</span>
      </Link>
      <div className="flex items-center gap-1">
        <Link
          to="/login"
          className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          Login
        </Link>
        <span className="text-border">|</span>
        <Link
          to="/signup"
          className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          Signup
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
