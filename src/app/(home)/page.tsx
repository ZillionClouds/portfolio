import {
  getEducationHistory,
  getProjects,
  getRecommendations,
  getResume,
  getSkills,
} from "@sanity/lib/api";
import ContactSection from "./_components/ContactSection";
import EducationSection from "./_components/EducationSection";
import LandingSection from "./_components/LandingSection";
import ProjectsSection from "./_components/ProjectsSection";
import SkillsSection from "./_components/SkillsSection";
import TestimonialSlider from "./_components/Recommendations";

export default async function Home() {
  const [projects, resume, educationHistory, skills, recommendationHistory] = await Promise.all([
    getProjects(),
    getResume(),
    getEducationHistory(),
    getSkills(),
    getRecommendations(),
  ]);

  return (
    <>
      <LandingSection resumeUrl={resume.documentUrl} />

      <EducationSection educationHistory={educationHistory} />

      <SkillsSection skills={skills} />

      <ProjectsSection projects={projects} />

      <TestimonialSlider recommendations={recommendationHistory} />

      <ContactSection />
    </>
  );
}
