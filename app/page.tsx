"use client";

import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProjectsSection from "./components/ProjectsSection";
import TeamSection from "./components/TeamSection";

export default function Home() {
  return (
    <main>
      <Header></Header>
      <Hero></Hero>
      <TeamSection></TeamSection>
      <ProjectsSection></ProjectsSection>
      <ContactSection></ContactSection>
      <Footer></Footer>
    </main>
  );
}
