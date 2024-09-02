import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Escuela de Libertad",
	description:
		"La primera Escuela de realización espiritual, basada en los ocho pilares de transformación existencial descritos por las Escuelas Ancestrales del Yin-Yang.",
	metadataBase: new URL("https://escueladelibertad.es"),
	openGraph: {
		title: "Escuela de Libertad",
		description:
			"La primera Escuela de realización espiritual, basada en los ocho pilares de transformación existencial descritos por las Escuelas Ancestrales del Yin-Yang.",
		siteName: "Escuela de Libertad",
	},
	twitter: {
		card: "summary_large_image",
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<meta
					name="facebook-domain-verification"
					content="4gm9qvxa94mfdk7woi33pgd1fkhqzg"
				/>
				{/* Meta Pixel Code */}
				<Script
					id="facebook-pixel"
					strategy="afterInteractive"
					dangerouslySetInnerHTML={{
						__html: `
						!function(f,b,e,v,n,t,s) {
							if(f.fbq)return;n=f.fbq=function(){n.callMethod?
							n.callMethod.apply(n,arguments):n.queue.push(arguments)};
							if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
							n.queue=[];t=b.createElement(e);t.async=!0;
							t.src=v;s=b.getElementsByTagName(e)[0];
							s.parentNode.insertBefore(t,s)}(window, document,'script',
							'https://connect.facebook.net/en_US/fbevents.js');
						fbq('init', '1173013987262074');
						fbq('track', 'PageView');
						`,
					}}
				/>
				<noscript>
					<img
						height="1"
						width="1"
						style={{ display: "none" }}
						src="https://www.facebook.com/tr?id=1173013987262074&ev=PageView&noscript=1"
					/>
				</noscript>
				{/* End Meta Pixel Code */}
			</head>
			<body className={inter.className}>
				<main>{children}</main>
				<SpeedInsights />
				<Analytics />
			</body>
		</html>
	);
}
