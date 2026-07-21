import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
const BRAND_LOGOS = ["sgp","apo","singtec","tp","caltex"];
export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-green-2 via-green to-green-3 px-7 py-16 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2"/>
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1">
          <span className="bg-amber text-green-2 text-[11px] font-extrabold uppercase tracking-widest px-3 py-1 rounded">Phân Phối Chính Hãng</span>
          <h1 className="text-white text-4xl md:text-5xl font-black leading-tight mt-4 mb-4">Dầu Nhớt <span className="text-amber">Toàn Phát</span><br/>Bền Bỉ – Tin Cậy</h1>
          <p className="text-white/80 text-sm leading-relaxed mb-6 max-w-md">Nhà phân phối chính thức các thương hiệu Saigon Petro, AP Oil, Singtec và TP Lubricants. Cung cấp đa dạng các dòng dầu nhớt công nghiệp và xe cơ giới chính hãng từ Shell, Castrol, Caltex cùng nhiều thương hiệu uy tín khác.</p>
          <div className="flex gap-3 flex-wrap">
            <Link href="/products" className="btn-primary"><ArrowRight size={16}/> Xem Sản Phẩm</Link>
            <Link href="/tu-van" className="btn-outline"><Phone size={16}/> Tư Vấn Chọn Dầu</Link>
          </div>
          <div className="flex gap-8 mt-10 flex-wrap">
            {[["200+","Sản Phẩm"],["6","Thương Hiệu"],["63","Tỉnh Thành"]].map(([n,l])=>(
              <div key={l}><div className="text-3xl font-black text-amber">{n}</div><div className="text-[11px] text-white/70 uppercase tracking-wide font-semibold">{l}</div></div>
            ))}
          </div>
        </div>
        <div className="hidden lg:grid grid-cols-3 gap-3 flex-shrink-0">
          {BRAND_LOGOS.map(key=>(
            <Link key={key} href={`/products?brand=${key}`}
              className="block w-32 h-20 rounded-xl overflow-hidden border-2 border-white/10 hover:border-amber hover:scale-105 transition shadow-lg bg-white/90 p-1">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={key==="sgp"?"/logos/sgp.png":key==="apo"?"/logos/apo.png":key==="singtec"?"/logos/singtec.png":key==="tp"?"/logos/tp.jpg":"/logos/caltex.png"} alt={key} className="w-full h-full object-contain"/>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
