"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard";
import AnimatedSection from "../AnimatedSection";

export default function ProjectsSection() {
	const [activeIndex, setActiveIndex] = useState(0);

	const projects = [
		{
			name: "My Blog",
			description: "Сайт для создания статей и постов, как научных, так и развлекательных",
			demo: "http://localhost:3000/",
			github: "https://github.com/losion445-max/my-blog",
			image: "/images/blog.png"
		},
		{
			name: "My Blog",
			description: "Сайт для создания статей и постов, как научных, так и развлекательных",
			demo: "http://localhost:3000/",
			github: "https://github.com/losion445-max/my-blog",
			image: "/images/blog.png"
		},
		{
			name: "My Blog",
			description: "Сайт для создания статей и постов, как научных, так и развлекательных",
			demo: "http://localhost:3000/",
			github: "https://github.com/losion445-max/my-blog",
			image: "/images/blog.png"
		}
	];

	return (
		<AnimatedSection id="projects" className="py-16 px-6">
			<div className="container mx-auto">
				<h2 className="text-3xl font-bold text-center mb-12">Проекты</h2>
				<div>
					{projects.map((project, index) => (
						<ProjectCard
							key={project.name + "-" + index}
							name={project.name}
							description={project.description}
							demo={project.demo}
							github={project.github}
							image={project.image}
							isActive={activeIndex === index}
							onClick={() => setActiveIndex(index)}
						/>
					))}
				</div>
			</div>
		</AnimatedSection>
	);
}
