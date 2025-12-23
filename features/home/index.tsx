"use client";

import { useTranslations } from "next-intl";
import SectionHero from "./SectionHero";
import MultiChannelSection from "./multi-channel-section";
import AIChatbotSection from "./ai-chatbot-section";
import MarketingSection from "./marketing-section";
import SecuritySection from "./security-section";
import ResultsSection from "./results-section";
import FAQSection from "./faq-section";
import ContactSection from "./contact-section";

export default function Home() {
    const t = useTranslations("home");

    return (
        <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
            {/* Hero Section */}
            <SectionHero />

            {/* Multi-channel Chat Section */}
            <MultiChannelSection />

            {/* AI Chatbot Section */}
            <AIChatbotSection />

            {/* Marketing Section */}
            <MarketingSection />

            {/* Security & Data Section */}
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
