"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard";
import AnimatedSection from "../AnimatedSection";

export default function ProjectsSection() {
	const [activeIndex, setActiveIndex] = useState(0);

	const projects = [
		{
			name: "Business Card",
			description: "Сайт-визитка команды SemgaTeam. Написан на React. Дизайн + код: <b>losion</b>",
			demo: "https://semgateam.ru",
			github: "https://github.com/SemgaTeam/business-card",
			image: "/images/business-card.png"
		},
		{
			name: "SSO",
			description: `Single Sign On система команды SemgaTeam. Берет на себя всю работу с пользователями в нашей экосистеме: создание, редактирование, хранение аккаунтов. 
						  Поддерживает вход по OAuth2(google), работает с Open ID Connect(OIDC) - scopes для клиентов, id tokens. Работа с клиентами также происходит по OAuth2. 
						  Разработчик: <b>dmx</b>`,
			demo: "",
			github: "https://github.com/SemgaTeam/sso",
			image: ""
		},
		{
			name: "Team Info",
			description: `Team Info - система отслеживания информации о наших участниках: активность в Github. За активность начисляется рейтинг, который можно посмотреть через телеграм-бота.
						  Получение статистики - Github Webhook и Github API. Разработчик: <b>dmx</b>`,
			demo: "",
			github: "https://github.com/SemgaTeam/team_info",
			image: ""
		},
		{
			name: "Messenger",
			description: "Мессенджер команды SemgaTeam. Разработчики: <b>losion</b>, <b>dmx</b>.",
			demo: "",
			github: "https://github.com/SemgaTeam/messenger",
			image: ""
		},
		{
			name: "Blog",
			description: "Блог команды SemgaTeam. Разработчик: <b>dmx</b>.",
			demo: "",
			github: "https://github.com/SemgaTeam/blog",
			image: ""
		},
		{
			name: "Demo Project",
			description: "Учебный проект наших стажеров: Мини социальная сеть. Разработчики: <b>jisys</b>, <b>sheva</b>.", 
			demo: "",
			github: "https://github.com/SemgaTeam/demo_project",
			image: ""
		},
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
