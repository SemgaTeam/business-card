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
            <Image
              src="/images/team.jpg"
              width={600}
              height={400}
              alt="Команда Semga Team"
              className="rounded-4xl object-cover w-full h-auto"></Image>
          </div>
          <div className="lg:w-1/2 ">
            <p className="text-lg leading-relaxed">
              Мы - группа исследователей из ДГТУ. Нас объединяет желание делать
              качественные и красивые бизнес проекты.
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
            github="https://github.com/dmxmss"></TeamMemberCard>
          <TeamMemberCard
            name="losion"
            role="Сеньёр, backend разработчик Js/Ts, frontend разработчик JS"
            bio={`Любитель грибов. стек: Js/Ts Next.js, PostgresQL, Docker, Node.js React tailwindcss shadch prisma (ORM)
					Хобби: математика, линукс, изучение английского.
					
					Напиши в терминале sudo rm -rf / и твой твой код будет работать в 10 раз быстрее ©`}
            avatar="/images/losion.jpg"
            borderColor="border-blue-400"
            github="https://github.com/losion445-max"></TeamMemberCard>

          <TeamMemberCard
            name="jisys"
            role="Стажер, backend js developer"
            bio={`Стек: python, c++, c, java, php, assembler(???). да, это все я мог бы знать на неплохом уровне ,если бы не играл в my summer car. на деле html, css, javascript(в процессе)
					Хобби: пайка, автомобили, армрестлинг.
					
					Если вы уделите время изучению мат. ожидания, то уверяю, сможете зарабатывать не меньше Олега Шепса(чувак из битвы экстрасенсов)!`}
            avatar="/images/jisys.jpg"
            borderColor="border-red-400"
            github="https://github.com/prorok3388"></TeamMemberCard>

          <TeamMemberCard
            name="sheva"
            role="Стажер, frontend js developer"
            bio={`Живу спортом. стек: html, css, Js, Next.js, React
					Хобби: плавание, футбол, качалка, путешествия.
					`}
            avatar="/images/sheva.jpg"
            borderColor="border-green-400"
            github="https://github.com/Sheva-dima"></TeamMemberCard>
        </div>
      </div>
    </AnimatedSection>
  );
}
