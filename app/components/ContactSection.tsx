"use client";

import { Mail, MessageSquare, Github } from 'lucide-react';
import AnimatedSection from '../AnimatedSection';

export default function ContactSection() {
	return (
		<AnimatedSection id="contacts" className="py-16 px-6 ">
			<div className="container mx-auto text-center">
				<h2 className="text-3xl font-bold mb-8">Свяжитесь с нами</h2>
					<div className="flex flex-col items-center space-y-4 text-lg">
						<div className="flex items-center gap-2">
								<Mail className='w-5 h-5'></Mail>
							<span>hello@team.dev</span>
						</div>
						<div className="flex items-center gap-2">
							<MessageSquare className='w-5 h-5'></MessageSquare>
							<span>@team_chat</span>
						</div>
						<div className="flex items-center gap-2">
							<Github className='w-5 h-5'></Github>
						<span>https://github.com/SemgaTeam</span>
					</div>
				</div>
		</div>
		</AnimatedSection>
		
	);
}