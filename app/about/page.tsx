import type { Metadata } from "next";
import AboutComponent from "./aboutCompontent";

export const metadata: Metadata = {
  title: "About Agrinvest Ghana",
  description: "Learn more about Agrinvest Ghana, our mission, values, and impact on supporting smallholder farmers.",
};

export default function AboutPage() {
  return (
    <AboutComponent />
  )
}
