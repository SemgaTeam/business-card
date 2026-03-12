"use client";

import { Mail, MessageSquare } from 'lucide-react';
import { siGithub } from 'simple-icons';
import AnimatedSection from '../AnimatedSection';
import GithubIcon from './GitHubIcon';

export default function ContactSection() {
	return (
		<AnimatedSection id="contacts" className="px-6 py-16 ">
			<div className="container mx-auto text-center">
				<h2 className="mb-8 text-3xl font-bold">Свяжитесь с нами</h2>
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
							<GithubIcon/>
						<span><a href='https://github.com/SemgaTeam'>github.com/SemgaTeam</a></span>
					</div>
				</div>
		</div>
		</AnimatedSection>
		
	);
}
