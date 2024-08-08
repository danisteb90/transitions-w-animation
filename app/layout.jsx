import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Escuela de Libertad",
	description:
		"La primera Escuela de realización espiritual, basada en los ocho pilares de transformación existencial descritos por las Escuelas Ancestrales del Yin-Yang.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<main>{children}</main>
			</body>
		</html>
	);
}
