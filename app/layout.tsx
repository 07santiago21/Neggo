import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Neggo",
  description: "Generated by create next app",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white w-screen max-w-screen overflow-x-hidden h-screen`}>
        {children}
      </body>
    </html>
  );
}
