import { Swords, Flame } from "lucide-react";

const activities = [
  { type: "battle", user1: "Monarch", user2: "Rohit", winner: "Monarch", time: "2 minutes ago" },
  { type: "battle", user1: "Dev", user2: "Aman", winner: "Dev", time: "5 minutes ago" },
  { type: "roast", user1: "Aryan", user2: "Rohit", level: "Extreme", time: "5 minutes ago" },
];

const RecentActivities = () => {
  return (
    <div className="bg-gradient-card glow-border rounded-xl p-4 flex-1 flex flex-col">
      <h3 className="font-semibold text-sm text-foreground mb-3 flex items-center gap-2">
        <span className="text-accent">⚔</span> Recent Activity
      </h3>
      <div className="flex flex-col gap-4 flex-1 justify-start">
        {activities.map((a, i) => (
          <div key={i} className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                {a.type === "battle" ? (
                  <Swords className="w-3.5 h-3.5 text-accent" />
                ) : (
                  <Flame className="w-3.5 h-3.5 text-glow-warm" />
                )}
              </div>
              <div>
                <p className="text-xs font-medium text-foreground">
                  {a.type === "battle" ? (
                    <>
                      <span className="font-bold">{a.user1}</span> vs <span className="font-bold">{a.user2}</span>
                    </>
                  ) : (
                    <>
                      <span className="font-bold">{a.user1}</span> roasted{" "}
                      <span className="font-bold">{a.user2}</span>
                    </>
                  )}
                </p>
                <p className="text-[10px] text-muted-foreground">
                  {a.type === "battle" ? `Winner: ${a.winner}` : `Roast Level: ${a.level}`}
                </p>
              </div>
            </div>
            <span className="text-[10px] text-muted-foreground">{a.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivities;
