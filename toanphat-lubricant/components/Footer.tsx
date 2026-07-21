import Link from "next/link";

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/>
  </svg>
);

const ZaloIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.5 13.5c-.3.45-.75.75-1.275.75-.375 0-.75-.15-1.05-.375l-2.1-1.575v.075c0 .9-.75 1.65-1.65 1.65H8.25c-.9 0-1.65-.75-1.65-1.65V9.6c0-.9.75-1.65 1.65-1.65h2.175c.9 0 1.65.75 1.65 1.65v.075l2.1-1.575c.3-.225.675-.375 1.05-.375.525 0 .975.3 1.275.75.225.3.3.675.3 1.05v4.125c0 .375-.075.75-.3 1.05z"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-navy text-white/80 mt-16">
      <div className="max-w-6xl mx-auto px-7 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Giới thiệu */}
        <div className="md:col-span-1">
          <div className="text-white font-black text-base mb-3 leading-snug">
            CÔNG TY TNHH SX TM<br />DẦU NHỚT TOÀN PHÁT
          </div>
          <p className="text-sm leading-relaxed mb-4">
            Nhà phân phối chính hãng Saigon Petro, Singtec Oil, AP Oil, TP Lubricants. Cung cấp thêm Caltex, Shell, Castrol.
          </p>
          {/* Social links */}
          <div className="flex gap-3">
            <a href="https://www.facebook.com/daunhottoanphat/" target="_blank" rel="noreferrer"
              className="w-9 h-9 rounded-full bg-[#1877f2] flex items-center justify-center hover:scale-110 transition" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="https://www.tiktok.com/@daunhottoanphat" target="_blank" rel="noreferrer"
              className="w-9 h-9 rounded-full bg-black flex items-center justify-center hover:scale-110 transition" aria-label="TikTok">
              <TikTokIcon />
            </a>
            <a href="https://zalo.me/0911472286" target="_blank" rel="noreferrer"
              className="w-9 h-9 rounded-full bg-[#0068ff] flex items-center justify-center hover:scale-110 transition" aria-label="Zalo">
              <ZaloIcon />
            </a>
          </div>
        </div>

        {/* Sản phẩm */}
        <div>
          <h4 className="text-white font-bold text-sm uppercase mb-3 tracking-wide">Sản Phẩm</h4>
          <ul className="text-sm space-y-2">
            {[["thuyluc","Dầu thủy lực"],["diesel","Dầu động cơ Diesel"],["congnghiep","Dầu công nghiệp"],["xemay","Dầu xe máy"],["hopso","Dầu hộp số / cầu"]].map(([k,n])=>(
              <li key={k}><Link href={`/products?cat=${k}`} className="hover:text-amber transition">{n}</Link></li>
            ))}
          </ul>
        </div>

        {/* Công ty */}
        <div>
          <h4 className="text-white font-bold text-sm uppercase mb-3 tracking-wide">Công Ty</h4>
          <ul className="text-sm space-y-2">
            {[["/gioi-thieu","Giới Thiệu"],["/tin-tuc","Tin Tức & Kiến Thức"],["/tu-van","Tư Vấn Chọn Dầu"],["/lien-he","Liên Hệ Báo Giá"]].map(([h,n])=>(
              <li key={h}><Link href={h} className="hover:text-amber transition">{n}</Link></li>
            ))}
          </ul>
        </div>

        {/* Liên hệ */}
        <div>
          <h4 className="text-white font-bold text-sm uppercase mb-3 tracking-wide">Liên Hệ</h4>
          <p className="text-sm mb-1">📍 689/25 Hương Lộ 2, Bình Trị Đông, HCM</p>
          <p className="text-sm mb-1">📞 <a href="tel:0911472286" className="hover:text-amber">0911.472.286</a></p>
          <p className="text-sm mb-1">📞 <a href="tel:0913391453" className="hover:text-amber">0913.391.453</a></p>
          <p className="text-sm mb-1">📧 <a href="mailto:daunhottoanphat@gmail.com" className="hover:text-amber">daunhottoanphat@gmail.com</a></p>
          <div className="flex gap-3 mt-4">
            <a href="https://zalo.me/0911472286" target="_blank" rel="noreferrer"
              className="text-xs bg-[#0068ff] text-white px-3 py-1.5 rounded-lg font-semibold hover:opacity-90 transition flex items-center gap-1">
              <ZaloIcon /> Zalo
            </a>
            <a href="https://www.tiktok.com/@daunhottoanphat" target="_blank" rel="noreferrer"
              className="text-xs bg-black text-white px-3 py-1.5 rounded-lg font-semibold hover:opacity-90 transition flex items-center gap-1">
              <TikTokIcon /> TikTok
            </a>
          </div>
          <p className="text-sm mt-3 text-white/60">7:00 – 18:00 hàng ngày</p>
        </div>
      </div>

      <div className="border-t border-white/10 text-center text-xs py-4 text-white/50">
        © {new Date().getFullYear()} Công ty TNHH SX TM Dầu Nhớt Toàn Phát. All rights reserved.
      </div>
    </footer>
  );
}
