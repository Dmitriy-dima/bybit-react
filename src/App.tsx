import React from "react";
import "./css/App.scss";
import Header from "./components/Header";
import HeroSection from "./components/StartSection";
import MainPointsSection from "./components/MainPointsSection";
import WelcomeBonusSection from "./components/WelcomeSection";
import CopyTradingSection from "./components/CopyTradingSection";
import FAQSection from "./components/FAQSection";
import DownloadSection from "./components/DownloadSection";
import StatsSection from "./components/StatsSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">

        <Header />
        <HeroSection />
        <MainPointsSection />
        <WelcomeBonusSection />
        <CopyTradingSection />
        <FAQSection />
        <DownloadSection />
        <StatsSection />
        <Footer />
    </div>
  );
}

export default App;
