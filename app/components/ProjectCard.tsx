"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

interface ProjectCardProps {
	name: string,
	desctption: string,
	demo: string,
	github: string,
	image: string;
}

export default function ProjectCard({
	name,
	desctption,
	demo,
	github,
	image
}: ProjectCardProps) {
	return (
		<Card className="border border-gray-700 p-6 flex flex-col md:flex-row">
			<CardContent>
				<h3 className="text-2xl">{name}</h3>
				<p className="mb-4 text-gray-300 leading-relaxed">{desctption}</p>
				<div className="space-y-2 text-sm containers">
					<p><a href={demo} className="text-blue-400 hover:underline">Demo</a></p>
					<p><a href={github} className="text-blue-400 hover:underline">github</a></p>
				</div>
			</CardContent>
			<Image alt={name}
						src={image}
						width={600}
						height={400}
						className="w-full h-auto object-cover rounded-2xl mt-4">
			</Image>
		</Card>
	);
}