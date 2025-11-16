"use client";
export 
default function Footer() {
	return (
		<footer className="bg-gray-900 py-4 text-center text-sm border border-gray-800  rounded-3xl">
			© {new Date().getFullYear()} Semga Team
		</footer>
		);
}