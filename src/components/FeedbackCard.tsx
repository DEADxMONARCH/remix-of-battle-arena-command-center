import { Star } from "lucide-react";

const FeedbackCard = () => {
  return (
    <div className="bg-gradient-card glow-border rounded-xl p-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-sm text-foreground flex items-center gap-2">
          <Star className="w-3.5 h-3.5 text-glow-warm fill-glow-warm" /> Feedback & Reviews
        </h3>
        <button className="text-[11px] px-3 py-1 rounded-lg border border-border bg-secondary hover:bg-primary/20 hover:border-primary/50 text-foreground transition-all duration-200 font-medium">
          Give Feedback
        </button>
      </div>
      <div className="flex items-center gap-3 mb-3">
        <span className="text-2xl font-bold text-foreground">4.8</span>
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-3.5 h-3.5 text-glow-warm fill-glow-warm" />
          ))}
        </div>
        <span className="text-xs text-muted-foreground">2.1k User Reviews</span>
      </div>
      <div className="bg-secondary/50 rounded-lg p-3">
        <p className="text-xs text-muted-foreground leading-relaxed">
          "Amazing platform for competitive programmers! Helps identify weaknesses and improve coding skills."
        </p>
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-1.5">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-2.5 h-2.5 text-glow-warm fill-glow-warm" />
              ))}
            </div>
            <span className="text-xs font-medium text-foreground">dev_jay</span>
          </div>
          <a href="#" className="text-[10px] text-accent hover:underline">
            View all reviews →
          </a>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
