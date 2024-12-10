import "./globals.css";

import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

import greycliff from "../../../public/fonts/GreycliffCF";
import Header from "../../components/header";

export const metadata: Metadata = {
  title: "Visitca",
  description: "visitca, visitca.uz, visitca uz, visitcauz",
};
interface RootLayoutProps {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
}
export default async function RootLayout({
  params,
  children,
}: Readonly<RootLayoutProps>) {
  const { locale } = await params;
  const messages = await getMessages({ locale });
  return (
    <html lang={locale}>
      <body className={`${greycliff.variable} antialiased bg-body_bg`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
