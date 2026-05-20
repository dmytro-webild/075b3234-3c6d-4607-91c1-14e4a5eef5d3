"use client";

import ReactLenis from "lenis/react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import TestimonialCardThirteen from "@/components/sections/testimonial/TestimonialCardThirteen";

export default function ReviewsPage() {
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
              { name: "Reviews", id: "reviews" },
            ]}
            button={{ text: "Get a quote ", href: "tel:+14046363998" }}
            animateOnLoad={false}
          />
        </div>

        <div id="reviews" data-section="reviews">
          <TestimonialCardThirteen
            title="Customer Reviews"
            description="See why homeowners trust us with their HVAC needs."
            showRating={true}
            animationType="slide-up"
            textboxLayout="default"
            testimonials={[
              {
                id: "1",                name: "Kevin Markes",                handle: "Homeowner",                testimonial: "Incredibly honest work. Mike fixed my furnace perfectly without any unnecessary upselling. Rare to find this level of integrity.",                rating: 5,
              },
              {
                id: "2",                name: "WaveGuide Studios Peterson",                handle: "Business Owner",                testimonial: "Reliable and fast. They managed our commercial cooling systems with absolute professionalism. Highly recommended.",                rating: 5,
              },
              {
                id: "3",                name: "GKat",                handle: "Local Resident",                testimonial: "Same-day service was a lifesaver. Extremely professional and fair pricing. All County HVAC is the best in the area.",                rating: 5,
              },
            ]}
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}