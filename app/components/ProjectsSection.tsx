"use client";

import ProjectCard from "./ProjectCard";
import AnimatedSection from "../AnimatedSection";

export default function ProjectsSection() {
	return (
		<AnimatedSection id="projects" className="py-16 px-6">
			<div className="container mx-auto">
				<h2 className="text-3xl font-bold text-center mb-12">Проекты</h2>
				<ProjectCard 
					name="My Blog"
					desctption="Сайт для создания статей и постов, как научных, так и равлекательных"
					demo="http://localhost:3000/"
					github="https://github.com/losion445-max/my-blog"
					image="/images/blog.png"
				></ProjectCard>
			</div>
		</AnimatedSection>
	);
}