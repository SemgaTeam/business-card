"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import AnimatedSection from "../AnimatedSection";

export default function Hero() {
	return (
		<AnimatedSection id="" className="py-16 text-center space-y-6">
			<h1 className="text-5xl font-bold mb-4">Semga Team</h1>
			<p className="text-xl max-w-3xl mx-auto">Пишем сайты для вас, быстро и без головной боли, пап, мам и посредников.</p>
	        <div className="flex justify-center mt-8">
				<Button asChild size="lg" variant="outline" className="w-full md:w-auto px-8 py-6  md:px-48 md:py-8 text-xl hover:bg-white hover:text-black transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl">
					<Link href="#contacts">Связатьcя</Link>
				</Button>
			</div>

		</AnimatedSection>
	);
}