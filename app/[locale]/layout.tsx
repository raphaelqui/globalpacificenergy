import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { useLocale } from "next-intl";
import { notFound } from "next/navigation";
import { ThemeProvider } from "@mui/material";
import ThemeRegistry from "@/theme/ThemeRegistry";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Global Pacific Energy",
  description: ".",
};

import { createTheme, responsiveFontSizes } from "@mui/material";

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  const locale = useLocale();
  if (params.locale !== locale) {
    notFound();
  }

  return (
    <html lang={locale}>
      <ThemeRegistry>
        <body>{children}</body>
      </ThemeRegistry>
    </html>
  );
}
