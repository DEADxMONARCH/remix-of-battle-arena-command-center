import Navbar from "@/components/Navbar";
import ToolCards from "@/components/ToolCards";
import RecentActivities from "@/components/RecentActivities";
import FeedbackCard from "@/components/FeedbackCard";
import BottomSection from "@/components/BottomSection";
import Footer from "@/components/Footer";
import FloatingLines from "@/components/FloatingLines";

const Index = () => {
  return (
    <div className="h-screen flex flex-col overflow-hidden bg-background relative">
      {/* FloatingLines Background */}
      <div className="absolute inset-0 z-0">
        <FloatingLines
          enabledWaves={["top", "middle", "bottom"]}
          lineCount={5}
          lineDistance={5}
          bendRadius={5}
          bendStrength={-0.5}
          interactive={true}
          parallax={true}
        />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 h-full flex flex-col overflow-hidden">
      <Navbar />

      <main className="flex-1 flex min-h-0 px-6 pt-4 pb-1 gap-6">
        {/* Left Column */}
        <div className="w-[60%] flex flex-col min-h-0">
          <h1 className="text-3xl font-bold text-foreground mb-1">Battle Arena</h1>
          <p className="text-sm text-muted-foreground leading-relaxed mb-3 max-w-2xl">
            BattleOfCoder is an AI-powered arena where developers compare coding profiles, roast rivals, and generate
            strategies to defeat opponents across competitive programming platforms.
          </p>
          <ToolCards />
        </div>

        {/* Right Column */}
        <div className="w-[40%] flex flex-col gap-3 min-h-0">
          <RecentActivities />
          <FeedbackCard />
        </div>
      </main>

      <BottomSection />
      <Footer />
      </div>
    </div>
  );
};

export default Index;
