"use client";

import ReactLenis from "lenis/react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import HeroOverlay from "@/components/sections/hero/HeroOverlay";
import MetricSplitMediaAbout from "@/components/sections/about/MetricSplitMediaAbout";
import FeatureCardOne from "@/components/sections/feature/FeatureCardOne";
import ContactCTA from "@/components/sections/contact/ContactCTA";
import FooterMedia from "@/components/sections/footer/FooterMedia";
import { Phone } from "lucide-react";

export default function HvacPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="directional-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
      contentWidth="medium"
      sizing="medium"
      background="aurora"
      cardStyle="glass-elevated"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="glass"
      headingFontWeight="semibold"
    >
      <ReactLenis root>
        <div id="nav" data-section="nav">
          <NavbarLayoutFloatingInline
            brandName="All County HVAC"
            navItems={[
              { name: "Services", id: "services" },
              { name: "About", id: "about" },
              { name: "Contact", id: "contact" },
            ]}
            button={{ text: "1-404-636-3998", href: "tel:14046363998" }}
            animateOnLoad={false}
          />
        </div>

        <div id="hero" data-section="hero">
          <HeroOverlay
            title="Honest HVAC Service No Upselling Since 1995"
            description="Mike's 25 years of service bringing you transparent, honest climate control. Emergency availability and same-day service for when you need it most."
            buttons={[
              { text: "Call for Same-Day Service: 1-404-636-3998", href: "tel:14046363998" },
            ]}
            buttonAnimation="slide-up"
            imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/hvac/img-1.jpg"
            imageAlt="Professional HVAC service"
            showDimOverlay={true}
          />
        </div>

        <div id="about" data-section="about">
          <MetricSplitMediaAbout
            tag="About Us"
            title="25 Years of Honest Service"
            description="All County HVAC & Refrigeration was founded on the principle that honest work is the only work. With 25 years of field experience, Mike ensures your systems are repaired right, the first time, without the pushy upselling found at larger companies."
            metrics={[
              { value: "25+", title: "Years of professional experience" },
              { value: "100%", title: "Transparent pricing policy" },
            ]}
            imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/hvac/img-2.jpg"
            imageAlt="Technician service"
            mediaAnimation="slide-up"
            metricsAnimation="slide-up"
            useInvertedBackground={false}
          />
        </div>

        <div id="services" data-section="services">
          <FeatureCardOne
            title="Our Core Services"
            description="Reliable solutions for all your heating, cooling, and refrigeration needs."
            features={[
              {
                title: "Heating Repair",                description: "Expert repair for furnaces and heat pumps to keep you warm.",                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/hvac/img-5.jpg"},
              {
                title: "AC Maintenance",                description: "Routine checks and maintenance for peak cooling performance.",                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/hvac/img-4.jpg"},
              {
                title: "Emergency Availability",                description: "Round-the-clock service for urgent HVAC or refrigeration failures.",                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/hvac/img-7.jpg"},
            ]}
            gridVariant="uniform-all-items-equal"
            animationType="slide-up"
            textboxLayout="default"
            useInvertedBackground={false}
          />
        </div>

        <div id="contact" data-section="contact">
          <ContactCTA
            tag="Contact Us"
            tagIcon={Phone}
            title="Need Immediate Assistance?"
            description="Call us directly at 1-404-636-3998 for same-day service and professional, no-nonsense HVAC support."
            buttons={[
              { text: "Call Now: 1-404-636-3998", href: "tel:14046363998" },
            ]}
            background={{ variant: "plain" }}
            useInvertedBackground={false}
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterMedia
            logoText="All County HVAC"
            imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/hvac/img-10.jpg"
            columns={[
              {
                title: "Contact",                items: [
                  { label: "Call: 1-404-636-3998", href: "tel:14046363998" },
                ],
              },
            ]}
            copyrightText="© 2025 | All County Air Conditioning, Heating & Refrigeration"
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}