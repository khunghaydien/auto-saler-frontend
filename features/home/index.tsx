"use client";

import { useTranslations } from "next-intl";
import SectionHero from "./SectionHero";
import ChannelSection from "./ChannelSection";
import ChatbotSection from "./ChatbotSection";
import MarketingSection from "./MarketingSection";
import SecuritySection from "./SecuritySection";
import ResultsSection from "./ResultsSection";
import FAQSection from "./FAQSection";
import ContactSection from "./ContactSection";

export default function Home() {
    const t = useTranslations("home");

    return (
        <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
            {/* Hero Section */}
            <SectionHero />

            {/* Channel Section */}
            <ChannelSection />

            {/* Chatbot Section */}
            <ChatbotSection />

            {/* Marketing Section */}
            <MarketingSection />

            {/* Security Section */}
            <SecuritySection />

            {/* Results Section */}
            <ResultsSection />

            {/* FAQ Section */}
            <FAQSection />

            {/* Contact Section */}
            <ContactSection />
        </div>
    );
}
