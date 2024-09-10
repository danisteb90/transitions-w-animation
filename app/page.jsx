"use client";
import IntroAnimation from "@/components/IntroAnimation";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
	const router = useRouter();

	useEffect(() => {
		router.push("/meditacion");
	}, [router]);

	return (
		<div>
			<section>
				<IntroAnimation />
			</section>
		</div>
	);
}
