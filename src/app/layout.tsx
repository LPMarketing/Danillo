import Script from 'next/script'
import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: 'Voo Direto | Peixoto & Rocha Advocacia',
  description: 'Teve problemas com seu voo? Voo cancelado, atraso, overbooking ou bagagem extraviada? Fale com um especialista e garanta sua indenização.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        
        {/* --- INÍCIO DA TAG DO GOOGLE ADS --- */}
        <Script 
          src="https://www.googletagmanager.com/gtag/js?id=AW-17672723091" 
          strategy="afterInteractive" 
        />
        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-17672723091');
          `}
        </Script>
        {/* --- FIM DA TAG DO GOOGLE ADS --- */}

        {children}
        <Toaster />
      </body>
    </html>
  );
}
