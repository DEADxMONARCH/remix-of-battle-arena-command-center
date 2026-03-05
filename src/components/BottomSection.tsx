import { Code2, Globe, Github, Terminal, BookOpen } from "lucide-react";

const platforms = [
  { name: "LeetCode", icon: Code2 },
  { name: "Codeforces", icon: Terminal },
  { name: "GitHub", icon: Github },
  { name: "HackerRank", icon: Globe },
  { name: "GeeksforGeeks", icon: BookOpen },
];

const stats = [
  { label: "ACTIVE USERS", value: "124" },
  { label: "BATTLES TODAY", value: "532" },
  { label: "ROASTS GENERATED", value: "210" },
];

const BottomSection = () => {
  return (
    <div className="flex items-center justify-between px-6 py-1.5">
      <div>
        <h4 className="text-xs font-semibold text-foreground mb-2">Supported Platforms</h4>
        <div className="flex items-center gap-4">
          {platforms.map((p) => (
            <div key={p.name} className="flex items-center gap-1.5 text-muted-foreground">
              <p.icon className="w-3.5 h-3.5" />
              <span className="text-xs">{p.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-8">
        <h4 className="text-xs font-semibold text-foreground">Live Site Stats</h4>
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="text-xl font-bold text-accent glow-text animate-pulse-glow">{s.value}</p>
            <p className="text-[9px] text-muted-foreground tracking-wider">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BottomSection;
