import type { Metadata } from "next";

import "@/styles/index.css";
import { montserrat } from "@/app/fonts";

export const metadata: Metadata = {
    title: "Kompas Code Generation",
    description: "VSTU Team Project",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru">
            <body className={`${montserrat.className}`}>{children}</body>
        </html>
    );
}
