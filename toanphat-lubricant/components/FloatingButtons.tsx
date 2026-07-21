"use client";
import { useEffect, useState } from "react";
import { Phone, ArrowUp, MessageCircle } from "lucide-react";

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/>
  </svg>
);

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const fn = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      {showTop && (
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="w-12 h-12 rounded-full bg-navy text-white flex items-center justify-center shadow-lg hover:scale-110 transition" aria-label="Lên đầu trang">
          <ArrowUp size={20} />
        </button>
      )}
      {/* TikTok */}
      <a href="https://www.tiktok.com/@daunhottoanphat" target="_blank" rel="noreferrer"
        className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center shadow-lg hover:scale-110 transition" aria-label="TikTok">
        <TikTokIcon />
      </a>
      {/* Zalo */}
      <a href="https://zalo.me/0911472286" target="_blank" rel="noreferrer"
        className="w-12 h-12 rounded-full bg-[#0068ff] text-white flex items-center justify-center shadow-lg hover:scale-110 transition" aria-label="Chat Zalo">
        <MessageCircle size={20} />
      </a>
      {/* Hotline */}
      <a href="tel:0911472286"
        className="w-12 h-12 rounded-full bg-amber text-green-2 flex items-center justify-center shadow-lg animate-pulse hover:scale-110 transition" aria-label="Gọi điện">
        <Phone size={20} />
      </a>
    </div>
  );
}
