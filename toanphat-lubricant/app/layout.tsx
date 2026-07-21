import type { Metadata } from "next";
import "./globals.css";
import { Be_Vietnam_Pro } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const font = Be_Vietnam_Pro({ subsets:["vietnamese","latin"], weight:["400","500","600","700","800","900"], variable:"--font-be-vietnam", display:"swap" });

const orgSchema = {
  "@context":"https://schema.org","@type":"Organization",
  name:"Công ty TNHH SX TM Dầu Nhớt Toàn Phát",
  url:"https://toanphat-web.vercel.app",
  contactPoint:[{ "@type":"ContactPoint", telephone:"+84-911-472-286", contactType:"sales", areaServed:"VN" }],
  address:{ "@type":"PostalAddress", streetAddress:"689/25 Hương Lộ 2", addressLocality:"Bình Trị Đông", addressRegion:"Hồ Chí Minh", addressCountry:"VN" },
};

export const metadata: Metadata = {
  title:{ default:"Dầu Nhớt Toàn Phát Lubricant – Phân Phối Chính Hãng", template:"%s | Toàn Phát Lubricant" },
  description:"Toàn Phát Lubricant – Nhà phân phối chính hãng dầu nhớt Saigon Petro, Singtec Oil, AP Oil, TP Lubricants tại TP.HCM. Hotline: 0911.472.286.",
  keywords:["dầu nhớt Toàn Phát","dầu nhớt Saigon Petro","dầu nhớt Singtec","dầu nhớt AP Oil","dầu nhớt Caltex","phân phối dầu nhớt","dầu thủy lực","dầu nhớt TPHCM"],
  openGraph:{ title:"Dầu Nhớt Toàn Phát Lubricant", description:"Nhà phân phối chính hãng Saigon Petro, Singtec, AP Oil, TP Lubricants.", url:"https://toanphat-web.vercel.app", siteName:"Toàn Phát Lubricant", locale:"vi_VN", type:"website" },
  robots:{ index:true, follow:true },
  manifest:"/manifest.json",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className={font.variable}>
      <head>
        <meta name="theme-color" content="#1e6b2e"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(orgSchema) }}/>
      </head>
      <body className="font-sans overflow-x-hidden">
        <Header/>{children}<Footer/><FloatingButtons/>
      </body>
    </html>
  );
}
