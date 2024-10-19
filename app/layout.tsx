import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header/Header";
import Body from "./components/Body";

export const metadata: Metadata = {
  title: "Task Manager",
  description: "Made by Aryan garg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header/>
        <Body>
          {children}
        </Body>
      </body>
    </html>
  );
}