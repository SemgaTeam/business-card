"use client";

import Image from "next/image";
import TeamMemberCard from "./TeamMemberCard";
import AnimatedSection from "../AnimatedSection";

export default function TeamSection() {
	return (
		<AnimatedSection id="team" className="py-16 px-6">
			<div className="container mx-auto">
				<h2 className="text-3xl font-bold text-center mb-12">Наша комманда</h2>
				<div className="flex flex-col lg:flex-row lg:justify-between lg:space-x-12 items-center mb-16">
					<div className="lg:w-1/2">
						<Image src='/images/team.jpg'
							width={600}
							height={400}
							alt="Команда Semga Team"
							className="rounded-4xl object-cover w-full h-auto"
							>
						</Image>
					</div>
					<div className="lg:w-1/2 ">
						<p className="text-lg leading-relaxed">
							Мы - группа исследователей из ДГТУ. Нас объединяет желание делать качественные и красивые бизнес проекты.
						</p>
					</div>
				</div>

			<div className="grid gap-8 ">

			<TeamMemberCard
				name="dmx"
				role="Тимлид, backend разработчик Go"
				bio="Умелый пользовательно компьтера. Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque  faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi  pretium tellus duis convallis. Tempus leo eu aenean sed diam urna  tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.  Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit  semper vel class aptent taciti sociosqu. Ad litora torquent per conubia  nostra inceptos himenaeos."
				avatar="/images/dmx.jpg"
				borderColor="border-green-400"
				github="https://github.com/dmxmss"
				>

			</TeamMemberCard>
					<TeamMemberCard
				name="losion"
				role="Сеньёр, backend разработчик Js/Ts, frontend разработчик JS"
				bio="Любитель грибов. Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque  faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi  pretium tellus duis convallis. Tempus leo eu aenean sed diam urna  tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.  Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit  semper vel class aptent taciti sociosqu. Ad litora torquent per conubia  nostra inceptos himenaeos."
				avatar="/images/losion.jpg"
				borderColor="border-blue-400"
				github="https://github.com/losion445-max"
			></TeamMemberCard>

			</div>
			</div>
		</AnimatedSection>
	);
}