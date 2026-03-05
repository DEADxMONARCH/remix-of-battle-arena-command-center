import { Zap, Flame, Target } from "lucide-react";
import { Link } from "react-router-dom";

const tools = [
  {
    icon: Zap,
    iconColor: "text-accent",
    title: "Compare Profiles",
    description: "Compare two coding profiles side by side across platforms.",
    button: "Open Compare Arena",
    route: "/compare",
  },
  {
    icon: Flame,
    iconColor: "text-glow-warm",
    title: "AI Roast Arena",
    description: "Generate an AI roast based on coding performance.",
    button: "Enter Roast Arena",
    route: "/roast",
    tags: ["Easy", "Moderate", "Extreme"],
  },
  {
    icon: Target,
    iconColor: "text-primary",
    title: "Defeat Strategy",
    description: "AI analyzes an opponent and generates a plan to beat them.",
    button: "Generate Strategy",
    route: "/defeat",
  },
];

const ToolCards = () => {
  return (
    <div className="flex flex-col gap-3 flex-1">
      {tools.map((tool) => (
        <div
          key={tool.title}
          className="bg-gradient-card glow-border glow-border-hover rounded-xl px-6 py-6 flex items-center justify-between transition-all duration-300 flex-1"
        >
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-lg bg-secondary flex items-center justify-center shrink-0">
              <tool.icon className={`w-7 h-7 ${tool.iconColor}`} />
            </div>
            <div>
              <h3 className="font-bold text-foreground text-lg">{tool.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{tool.description}</p>
              {tool.tags && (
                <div className="flex gap-1.5 mt-2">
                  {tool.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] px-2.5 py-0.5 rounded-full bg-secondary text-muted-foreground border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
          <Link
            to={tool.route}
            className="shrink-0 ml-4 px-6 py-2.5 text-sm font-medium rounded-lg border border-border bg-secondary hover:bg-primary/20 hover:border-primary/50 text-foreground transition-all duration-200"
          >
            {tool.button}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ToolCards;
