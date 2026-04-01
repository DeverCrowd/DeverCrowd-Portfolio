import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { MarketingShell } from "@/components/MarketingShell";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-jetbrainsMono",
  display: "swap",
});

export const metadata = {
  title: {
    default: "DeverCrowd",
    template: "%s · DeverCrowd",
  },
  description:
    "DeverCrowd builds high-performing websites and mobile apps that solve real problems and grow your business.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${jetbrainsMono.variable} min-h-screen bg-background font-code text-foreground antialiased`}
      >
        <Providers>
          <MarketingShell>{children}</MarketingShell>
        </Providers>
      </body>
    </html>
  );
}
