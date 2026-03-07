"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

interface ProjectCardProps {
  name: string;
  description: string;
  demo: string;
  github: string;
  image: string | null;
  isActive: boolean;
  onClick: () => void;
}

export default function ProjectCard({
  name,
  description,
  demo,
  github,
  image,
  isActive,
  onClick,
}: ProjectCardProps) {
  return (
    <Card
      onClick={onClick}
      className={`last:border-b-2 border-t-2 border-solid border-gray-700 overflow-hidden cursor-pointer flex flex-col md:flex-row gap-4 transition-all duration-500 ease-in-out ${
        isActive ? "p-6 max-h-[900px]" : "p-4 max-h-20"
      }`}
    >
      <CardContent className="p-0 flex-1">
        <h3
          className={`${isActive ? "text-2xl mb-3" : "text-xl"} transition-all duration-300`}
        >
          {name}
        </h3>
        <div
          className={`transition-all duration-500 ${
            isActive ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          <p
            className="mb-4 text-gray-300 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: description }}
          ></p>
          <div className="space-y-2 text-sm">
            <p>
              <a href={demo} className="text-blue-400 hover:underline">
                Demo
              </a>
            </p>
            <p>
              <a href={github} className="text-blue-400 hover:underline">
                GitHub
              </a>
            </p>
          </div>
        </div>
      </CardContent>
      <div
        className={`overflow-hidden shrink-0 transition-all duration-500 ${
          isActive
            ? "max-h-[400px] opacity-100 md:w-[45%]"
            : "max-h-0 opacity-0 md:w-0"
        }`}
      >
        {image ? (
          <Image
            alt={name}
            src={image}
            width={600}
            height={400}
            className="w-full object-cover rounded-2xl mt-4 md:mt-0"
          />
        ) : null}
      </div>
    </Card>
  );
}
