import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Grow",
    description: "Investment management platform",
    icons: {
        icon: "/grow-logo.svg",
        apple: "/grow-logo.svg",
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="h-full">
        <head>
            <link rel="icon" href="/grow-logo.svg" />
        </head>
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900 min-h-full h-full`}
        >
        {children}
        </body>
        </html>
    );
}