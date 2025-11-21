"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

interface TeamMemberProps {
	name: string,
	role: string,
	bio: string,
	github: string,
	avatar: string,
	borderColor: string;
}

export default function TeamMemberCard({
	name,
	role,
	bio,
	github,
	avatar,
	borderColor
}: TeamMemberProps) {
	return (

		<Card className={`border-2 ${borderColor} p-6 flex flex-col relative md:flex-row gap-6`}	
			style={{
			backgroundImage: `url(${avatar})`,
			backgroundSize: 'cover',
			backgroundPosition: 'center',
		}}>
			  <div 
				className="absolute inset-0"
				style={{
				backdropFilter: 'blur(8px)',
				backgroundColor: 'rgba(0,0,0,0.5)',
				}}
			/>

			<div className="w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden flex-shrink-0 relative z-10">
				<Image src={avatar}
					width={200}
					height={200}
					alt={name}
					className="w-full h-full object-cover">
					</Image>
			</div>
			<CardContent className="space-y-4 relative z-10">
				<h3 className="text-xl md:text-2xl font-boldmt-4">
          			{name}
        		</h3>
				<p className="foont-medium">{role}</p>
				<p className="text-gray-300 leading-relaxed break-words line-clamp-3 ">{bio}</p>
				<div>
					<h4 className="font-semibold mb-1">Контакты</h4>
					<a href={github} className="text-blue-400 hover:underline">
						github
					</a>
				</div>
			</CardContent>
		</Card>
		
	);
}