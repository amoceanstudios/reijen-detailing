import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Reijen Detailing - Professionele Auto Detailing in Ermelo",
  description:
    "Professionele auto detailing in Ermelo bij Reijen Detailing. Complete reiniging, lakbescherming en polijsten voor een duurzame showroomglans.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={manrope.variable}>
      <ClientBody>{children}</ClientBody>
    </html>
  );
}
