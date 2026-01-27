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
				role="Тимлид, backend разработчик Go, DevOps"
				bio={`Стек: Golang, PostgresQL, Docker, Kubernetes.
						Хобби: программирование, математика, бальные танцы.
						
						Не представляю жизнь без изучения чего-то нового. Живу на вайбе, но не вайбкодер.`}
				avatar="/images/dmx.jpg"
				borderColor="border-green-400"
				github="https://github.com/dmxmss"
				>

			</TeamMemberCard>
			<TeamMemberCard
				name="losion"
				role="Сеньёр, backend разработчик Js/Ts, frontend разработчик JS"
				bio={`Любитель грибов. стек: Js/Ts Next.js, PostgresQL, Docker, Node.js React tailwindcss shadch prisma (ORM)
					Хобби: математика, линукс, изучение английского.
					
					Напиши в терминале sudo rm -rf / и твой твой код будет работать в 10 раз быстрее ©`}
				
				avatar="/images/losion.jpg"
				borderColor="border-blue-400"
				github="https://github.com/losion445-max"
			></TeamMemberCard>

			</div>
			</div>
		</AnimatedSection>
	);
}