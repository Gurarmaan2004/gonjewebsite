import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Categories } from "@/components/sections/categories";
import { Trust } from "@/components/sections/trust";
import { Testimonials } from "@/components/sections/testimonials";
import { VendorCta } from "@/components/sections/vendor-cta";
import { Faq } from "@/components/sections/faq";

export default function HomePage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Categories />
      <Trust />
      <Testimonials />
      <VendorCta />
      <Faq />
    </>
  );
}
