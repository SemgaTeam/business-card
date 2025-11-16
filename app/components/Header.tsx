"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	return (
		<header className="py-4">
			<div className="container mx-auto px-7 py-3 flex justify-between items-center rounded-3xl bg-black border border-gray-800 shadow-lg">
				<Link className="hover:text-gray-300" href="/">Semga Team</Link>
				<nav className="hidden md:flex space-x-6 ">
					<Link className="hover:text-gray-300" href="#team">О команде</Link>
					<Link className="hover:text-gray-300" href="#projects">Проекты</Link>
					<Link className="hover:text-gray-300" href="#contacts">Контакты</Link>
				</nav>

			<button
				className="md:hidden flex flex-col space-y-1"
				onClick={() => setIsMenuOpen(!isMenuOpen)}
				aria-label="Toggle menu">
					<span className={`w-6 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
					<span className={`w-6 h-0.5 bg-white transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
					<span className={`w-6 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
			</button>
			</div>
			<div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
				<nav className="flex flex-col space-y-4 py-4 px-6">
					<Link href="#team" className="hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>О команде</Link>
					<Link href="#projects" className="hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>Проекты</Link>
					<Link href="#contact" className="hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>Контакты</Link>
				</nav>
			</div>
		</header>
	);
}