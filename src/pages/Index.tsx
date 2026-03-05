import Navbar from "@/components/Navbar";
import ToolCards from "@/components/ToolCards";
import RecentActivities from "@/components/RecentActivities";
import FeedbackCard from "@/components/FeedbackCard";
import BottomSection from "@/components/BottomSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="h-screen flex flex-col overflow-hidden bg-gradient-main">
      <Navbar />

      <main className="flex-1 flex flex-col min-h-0 px-6 pt-4 pb-1">
        <h1 className="text-3xl font-bold text-foreground mb-1">Battle Arena</h1>
        <p className="text-sm text-muted-foreground leading-relaxed mb-3 max-w-2xl">
          BattleOfCoder is an AI-powered arena where developers compare coding profiles, roast rivals, and generate
          strategies to defeat opponents across competitive programming platforms.
        </p>
        <div className="flex gap-6 flex-1 min-h-0">
          {/* Left Column */}
          <div className="w-[60%] flex flex-col min-h-0">
            <ToolCards />
          </div>

          {/* Right Column */}
          <div className="w-[40%] flex flex-col gap-3 min-h-0">
            <RecentActivities />
            <FeedbackCard />
          </div>
        </div>
      </main>

      <BottomSection />
      <Footer />
    </div>
  );
};

export default Index;
